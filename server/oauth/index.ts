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
    scope: "read:user public_repo",
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

  const reposRes = await gh("/user/repos?sort=updated&per_page=10&type=owner");
  const repos = reposRes.ok ? await reposRes.json() : [];

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
    }));

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

  let headline = null;
  let industry = null;
  try {
    const meRes = await fetch(
      "https://api.linkedin.com/v2/me?projection=(id,firstName,lastName,headline,industryName)",
      { headers: { Authorization: `Bearer ${access_token}` } }
    );
    if (meRes.ok) {
      const me = await meRes.json();
      headline = me.headline;
      industry = me.industryName;
    }
  } catch {}

  return {
    profile: {
      name: profile.name,
      email: profile.email,
      email_verified: profile.email_verified,
      picture: profile.picture,
      headline,
      industry,
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
