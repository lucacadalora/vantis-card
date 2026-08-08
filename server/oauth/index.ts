// OAuth handlers for X/Twitter, GitHub, LinkedIn.
// Fixes vs the JTVO skeleton: real PKCE (S256 challenge derived from a stored
// verifier — the skeleton sent state as both, which S256 can never validate),
// and Basic auth on the X token exchange (required for confidential clients).

const BASE = process.env.PUBLIC_BASE_URL || "https://card.vantis.sh";

// ─── X/Twitter OAuth 2.0 + PKCE ───
const TWITTER_CLIENT_ID = process.env.X_OAUTH_CLIENT_ID || "";
const TWITTER_CLIENT_SECRET = process.env.X_OAUTH_CLIENT_SECRET || "";
const TWITTER_REDIRECT = process.env.TWITTER_REDIRECT_URI || `${BASE}/oauth/twitter/callback`;

export const providersConfigured = () => ({
  twitter: !!TWITTER_CLIENT_ID,
  github: !!GITHUB_CLIENT_ID,
  linkedin: !!LINKEDIN_CLIENT_ID,
});

export async function twitterAuthUrl(state: string, codeVerifier: string): Promise<string> {
  const challenge = await s256(codeVerifier);
  const params = new URLSearchParams({
    response_type: "code",
    client_id: TWITTER_CLIENT_ID,
    redirect_uri: TWITTER_REDIRECT,
    scope: "tweet.read users.read follows.read offline.access",
    state,
    code_challenge: challenge,
    code_challenge_method: "S256",
  });
  return `https://twitter.com/i/oauth2/authorize?${params}`;
}

export async function twitterExchangeCode(code: string, codeVerifier: string) {
  const headers: Record<string, string> = { "Content-Type": "application/x-www-form-urlencoded" };
  if (TWITTER_CLIENT_SECRET) {
    headers.Authorization = `Basic ${btoa(`${TWITTER_CLIENT_ID}:${TWITTER_CLIENT_SECRET}`)}`;
  }
  const tokenRes = await fetch("https://api.twitter.com/2/oauth2/token", {
    method: "POST",
    headers,
    body: new URLSearchParams({
      code,
      grant_type: "authorization_code",
      client_id: TWITTER_CLIENT_ID,
      redirect_uri: TWITTER_REDIRECT,
      code_verifier: codeVerifier,
    }),
  });
  if (!tokenRes.ok) throw new Error(`Twitter token error: ${await tokenRes.text()}`);
  const tokens = await tokenRes.json();

  const profileRes = await fetch(
    "https://api.twitter.com/2/users/me?user.fields=public_metrics,description,verified,verified_type,location,url,created_at,profile_image_url",
    { headers: { Authorization: `Bearer ${tokens.access_token}` } }
  );
  if (!profileRes.ok) throw new Error(`Twitter profile error: ${await profileRes.text()}`);
  const profile = (await profileRes.json()).data;

  return { tokens, profile };
}

// ─── GitHub OAuth ───
const GITHUB_CLIENT_ID = process.env.GITHUB_OAUTH_CLIENT_ID || "";
const GITHUB_CLIENT_SECRET = process.env.GITHUB_OAUTH_CLIENT_SECRET || "";
const GITHUB_REDIRECT = process.env.GITHUB_REDIRECT_URI || `${BASE}/oauth/github/callback`;

export function githubAuthUrl(state: string): string {
  const params = new URLSearchParams({
    client_id: GITHUB_CLIENT_ID,
    redirect_uri: GITHUB_REDIRECT,
    // read:user only. `public_repo` is a WRITE scope — it grants push access to
    // the user's public repositories, which we never use and which turns the
    // consent screen into a scary one. Public repos are readable unauthenticated.
    scope: "read:user",
    state,
  });
  return `https://github.com/login/oauth/authorize?${params}`;
}

export async function githubExchangeCode(code: string) {
  const tokenRes = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify({
      client_id: GITHUB_CLIENT_ID,
      client_secret: GITHUB_CLIENT_SECRET,
      code,
      redirect_uri: GITHUB_REDIRECT,
    }),
  });
  if (!tokenRes.ok) throw new Error(`GitHub token error: ${await tokenRes.text()}`);
  const { access_token } = await tokenRes.json();
  if (!access_token) throw new Error("GitHub token exchange returned no access_token");

  const gh = (path: string) =>
    fetch(`https://api.github.com${path}`, {
      headers: { Authorization: `Bearer ${access_token}`, Accept: "application/vnd.github+json" },
    });

  const profileRes = await gh("/user");
  if (!profileRes.ok) throw new Error(`GitHub profile error: ${await profileRes.text()}`);
  const profile = await profileRes.json();

  return fetchGithubPublic(profile.login, access_token);
}

// Everything the scorer wants from GitHub is public — only "who is this"
// needed a token above. The Privy path knows the username already, so this
// runs with no credentials at all (60 req/hr/IP unauthenticated; set
// GITHUB_TOKEN for 5,000 when signups scale).
export async function fetchGithubPublic(login: string, token?: string) {
  const auth = token || process.env.GITHUB_TOKEN || "";
  const gh = (path: string) =>
    fetch(`https://api.github.com${path}`, {
      headers: {
        Accept: "application/vnd.github+json",
        ...(auth ? { Authorization: `Bearer ${auth}` } : {}),
      },
    });

  const profileRes = await gh(`/users/${login}`);
  if (!profileRes.ok) throw new Error(`GitHub user error: ${await profileRes.text()}`);
  const profile = await profileRes.json();

  const [reposRes, orgsRes, eventsRes] = await Promise.all([
    gh(`/users/${profile.login}/repos?sort=updated&per_page=100&type=owner`),
    gh(`/users/${profile.login}/orgs`),
    gh(`/users/${profile.login}/events/public?per_page=100`),
  ]);
  const repos = reposRes.ok ? await reposRes.json() : [];
  const orgs = orgsRes.ok ? await orgsRes.json() : [];
  const events = eventsRes.ok ? await eventsRes.json() : [];

  const languages = [...new Set(repos.map((r: any) => r.language).filter(Boolean))];
  const topRepos = repos
    .sort((a: any, b: any) => (b.stargazers_count || 0) - (a.stargazers_count || 0))
    .slice(0, 5)
    .map((r: any) => ({
      name: r.name,
      language: r.language,
      stars: r.stargazers_count,
      forks: r.forks_count,
      description: r.description,
      topics: r.topics,
      updated_at: r.updated_at,
    }));

  // Recency of real work beats a follower count for "is this person building".
  const now = Date.now();
  const recent = events.filter((e: any) => now - new Date(e.created_at).getTime() < 90 * 864e5);
  const activity = {
    events_90d: recent.length,
    pushes_90d: recent.filter((e: any) => e.type === "PushEvent").length,
    prs_90d: recent.filter((e: any) => e.type === "PullRequestEvent").length,
    issues_90d: recent.filter((e: any) => e.type === "IssuesEvent").length,
    last_active: events[0]?.created_at || null,
  };
  const totalStars = repos.reduce((a: number, r: any) => a + (r.stargazers_count || 0), 0);

  return {
    profile: {
      username: profile.login,
      name: profile.name,
      bio: profile.bio,
      company: profile.company,
      location: profile.location,
      followers: profile.followers,
      public_repos: profile.public_repos,
      avatar: profile.avatar_url,
      url: profile.html_url,
      hireable: profile.hireable,
    },
    repos: topRepos,
    languages,
    orgs: orgs.map((o: any) => o.login),
    activity,
    totalStars,
    accountCreated: profile.created_at,
  };
}

// ─── LinkedIn OAuth 2.0 (OpenID Connect) ───
const LINKEDIN_CLIENT_ID = process.env.LINKEDIN_OAUTH_CLIENT_ID || "";
const LINKEDIN_CLIENT_SECRET = process.env.LINKEDIN_OAUTH_CLIENT_SECRET || "";
const LINKEDIN_REDIRECT = process.env.LINKEDIN_REDIRECT_URI || `${BASE}/oauth/linkedin/callback`;

export function linkedinAuthUrl(state: string): string {
  const params = new URLSearchParams({
    response_type: "code",
    client_id: LINKEDIN_CLIENT_ID,
    redirect_uri: LINKEDIN_REDIRECT,
    scope: "openid profile email",
    state,
  });
  return `https://www.linkedin.com/oauth/v2/authorization?${params}`;
}

export async function linkedinExchangeCode(code: string) {
  const tokenRes = await fetch("https://www.linkedin.com/oauth/v2/accessToken", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      client_id: LINKEDIN_CLIENT_ID,
      client_secret: LINKEDIN_CLIENT_SECRET,
      redirect_uri: LINKEDIN_REDIRECT,
    }),
  });
  if (!tokenRes.ok) throw new Error(`LinkedIn token error: ${await tokenRes.text()}`);
  const { access_token } = await tokenRes.json();

  const profileRes = await fetch("https://api.linkedin.com/v2/userinfo", {
    headers: { Authorization: `Bearer ${access_token}` },
  });
  if (!profileRes.ok) throw new Error(`LinkedIn profile error: ${await profileRes.text()}`);
  const profile = await profileRes.json();

  // NOTE: headline, industry and positions are NOT available. LinkedIn moved
  // basic identity to OIDC and gated everything else behind the Partner
  // Program, so `/v2/me?projection=(...headline,industryName)` 403s on a
  // self-serve app. We used to call it and swallow the error, which meant the
  // scorer silently received nulls.
  //
  // What OIDC does give that is worth something: a VERIFIED work email. The
  // domain is a real employer signal, and Exa can enrich the company from it.
  const email: string = profile.email || "";
  const domain = email.includes("@") ? email.split("@")[1].toLowerCase() : "";
  const FREEMAIL = new Set([
    "gmail.com", "googlemail.com", "outlook.com", "hotmail.com", "live.com",
    "yahoo.com", "icloud.com", "me.com", "proton.me", "protonmail.com",
    "aol.com", "gmx.com", "mail.com", "yandex.com", "qq.com", "163.com",
  ]);
  const corporateDomain = domain && !FREEMAIL.has(domain) ? domain : null;

  return {
    profile: {
      name: profile.name,
      email,
      email_verified: profile.email_verified,
      picture: profile.picture,
      locale: profile.locale,
      // Derived, not claimed: the employer inferred from a verified address.
      corporate_domain: corporateDomain,
      company_guess: corporateDomain ? corporateDomain.split(".")[0] : null,
    },
  };
}

// ─── PKCE helpers ───
export function generateState(): string {
  return crypto.randomUUID().replace(/-/g, "");
}

export function generateCodeVerifier(): string {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return b64url(array);
}

async function s256(verifier: string): Promise<string> {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(verifier));
  return b64url(new Uint8Array(digest));
}

function b64url(bytes: Uint8Array): string {
  return btoa(String.fromCharCode(...bytes))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=/g, "");
}
