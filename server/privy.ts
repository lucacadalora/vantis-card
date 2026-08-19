// Privy account gate. Privy is the account layer for vantis.sh (same app as
// /hub): it authenticates the visitor (X login rides through Privy's OAuth,
// so we register no provider apps ourselves) and silently creates an embedded
// EVM wallet per user — the future x402 top-up identity.
//
// Trust model: the browser sends Privy tokens, we verify SIGNATURES server-side
// against the app's JWKS. Linked accounts come from either the identity token
// (a signed claim, no secret needed) or the Privy REST API (needs app secret).
// Nothing the client asserts about itself is believed unverified.

import { createRemoteJWKSet, jwtVerify } from "jose";
import { createUser, getUserByPrivyId, getUserByX, recordContact, updateUser } from "./db";
import { fetchGithubPublic } from "./oauth";

const APP_ID = process.env.PRIVY_APP_ID || "";
const APP_SECRET = process.env.PRIVY_APP_SECRET || "";

export const privyMode = () => !!APP_ID;
export const privyAppId = () => APP_ID;

let jwks: ReturnType<typeof createRemoteJWKSet> | null = null;
function getJwks() {
  if (!jwks) jwks = createRemoteJWKSet(new URL(`https://auth.privy.io/api/v1/apps/${APP_ID}/jwks.json`));
  return jwks;
}

// Both Privy token types are ES256 JWTs signed by the app's key, iss privy.io.
//
// Trust model: signatures are verified server-side against the app's JWKS.
// Anything the client asserts is ignored unless the signature checks out.
async function verifyToken(token: string, retried = false): Promise<any> {
  // Not a syntactically-correct compact JWS (three dot-separated parts)? Fail
  // fast and cleanly instead of letting jose surface "Invalid Compact JWS" —
  // callers can then distinguish garbage input from a real auth failure.
  if (typeof token !== "string" || token.split(".").length !== 3) {
    throw new Error("not_a_jwt");
  }
  try {
    const { payload } = await jwtVerify(token, getJwks(), {
      issuer: "privy.io",
      audience: APP_ID,
    });
    return payload;
  } catch (err: any) {
    // Privy can rotate its signing key set. The JWKS is cached; if a
    // legitimately-signed token stops verifying against the cached set (key
    // rotation / alg change), refresh the cache once and re-attempt before
    // giving up — avoids transient "signature verification failed" spikes.
    const msg = String(err?.message || "");
    const rotatable = /signature|alg|key set|jwks|compact/i.test(msg);
    if (!retried && getJwks() && rotatable) {
      jwks = null;
      return verifyToken(token, true);
    }
    throw err;
  }
}

// Fallback-capable resolution: prefer the signed identity-token claim (no app
// secret needed), but never let a bad/stale/empty identity token hard-fail a
// sign-in — if it is unusable, fall back to the access-token + REST path.
export async function accountsFromTokens(body: { identity_token?: string; access_token?: string }): Promise<PrivyAccounts> {
  const { identity_token, access_token } = body || {};
  if (identity_token && typeof identity_token === "string" && identity_token.split(".").length === 3) {
    try {
      return await accountsFromIdentityToken(identity_token);
    } catch {
      // fall through to the access-token path below
    }
  }
  if (access_token) return await accountsFromAccessToken(access_token);
  if (identity_token) return await accountsFromIdentityToken(identity_token); // surface the real error
  throw new Error("no_tokens");
}

export type PrivyAccounts = {
  did: string;
  twitter?: { subject: string; username: string; name?: string; avatar?: string };
  github?: { username: string; name?: string; email?: string };
  google?: { subject: string; email?: string; name?: string };
  linkedin?: boolean; // linked at all (email may still be absent/freemail)
  linkedinEmail?: string;
  linkedinName?: string;   // the connected person's name — the real signal
  linkedinVanity?: string; // /in/<vanity> slug when Privy exposes it
  email?: string;
  wallet?: string; // embedded EVM address
  solana?: string; // embedded Solana address (base58) — a SEPARATE ed25519 key
};

// Field names differ between the REST API (snake_case) and identity-token
// claims (camelCase in newer SDKs) — read both spellings.
function pick(a: any, snake: string, camel: string) {
  return a?.[snake] ?? a?.[camel] ?? undefined;
}

export function extractAccounts(did: string, accounts: any[]): PrivyAccounts {
  const out: PrivyAccounts = { did };
  for (const a of accounts || []) {
    const type = a?.type;
    if (type === "twitter_oauth" && a.username) {
      out.twitter = {
        subject: String(a.subject ?? ""),
        username: String(a.username).replace(/^@/, "").toLowerCase(),
        name: a.name ?? undefined,
        avatar: pick(a, "profile_picture_url", "profilePictureUrl"),
      };
    } else if (type === "github_oauth" && a.username) {
      out.github = { username: String(a.username), name: a.name ?? undefined, email: a.email ?? undefined };
    } else if (type === "google_oauth") {
      // Google is a pure CONTACT link — it carries no signal the scorer uses.
      // What it gives is a verified, deliverable address on an account that
      // may have no X and no LinkedIn, which is otherwise unreachable.
      out.google = {
        subject: String(a.subject ?? ""),
        email: a.email ?? undefined,
        name: a.name ?? undefined,
      };
    } else if (type === "linkedin_oauth") {
      out.linkedin = true;
      // MEASURED Aug 9 on two real sign-ins: the IDENTITY TOKEN carries only
      // { type, subject, email, lv } for LinkedIn — no name, no vanityName,
      // even though Privy documents both on the REST user object. So the
      // name below can ONLY arrive via the REST path (needs PRIVY_APP_SECRET).
      const em = a.email ?? undefined;
      if (em) out.linkedinEmail = String(em);
      // The NAME is the useful part of a LinkedIn link — it is the identity
      // anchor the enrichment agent searches LinkedIn with, and the only
      // thing worth showing an operator. The email domain is almost always
      // freemail and says nothing. Privy's field naming varies by SDK
      // version, so accept the plausible shapes rather than one guess.
      const nm = a.name ?? pick(a, "first_name", "firstName");
      const last = pick(a, "last_name", "lastName");
      const full = [nm, a.name ? undefined : last].filter(Boolean).join(" ").trim();
      if (full) out.linkedinName = full;
      const vanity = pick(a, "vanity_name", "vanityName") ?? a.username;
      if (vanity) out.linkedinVanity = String(vanity);
    } else if (type === "email") {
      out.email = a.address ?? undefined;
    } else if (type === "wallet") {
      const client = pick(a, "wallet_client_type", "walletClientType");
      const connector = pick(a, "connector_type", "connectorType");
      const chain = pick(a, "chain_type", "chainType");
      const embedded = client === "privy" || connector === "embedded";
      // Prefer the Privy embedded EVM wallet; fall back to any linked wallet.
      if (a.address && (chain === "ethereum" || !chain)) {
        if (embedded || !out.wallet) out.wallet = String(a.address);
      }
      // Solana rides the same shape but is a DIFFERENT key — never let it
      // land in out.wallet, or an ed25519 address would be written to the
      // EVM column and every balance read against it would fail.
      if (a.address && chain === "solana") {
        if (embedded || !out.solana) out.solana = String(a.address);
      }
    }
  }
  return out;
}

// The one address to reach this person at, and where it came from.
//
// Order is by strength of intent, not by provider: an address someone typed
// and passed an OTP on is the one they read; Google is the verified default
// inbox; LinkedIn/GitHub are whatever the provider had on file. All four are
// provider-verified — we never hold an unverified address.
export function contactEmail(acc: PrivyAccounts): { email: string; source: string } | null {
  const candidates: Array<[string | undefined, string]> = [
    [acc.email, "email_login"],
    [acc.google?.email, "google"],
    [acc.linkedinEmail, "linkedin"],
    [acc.github?.email, "github"],
  ];
  for (const [email, source] of candidates) {
    const e = String(email || "").trim().toLowerCase();
    if (e.includes("@")) return { email: e, source };
  }
  return null;
}

// Path 1 (no secret needed): identity token carries linked_accounts as a
// signed claim. Requires the "identity token" toggle in the Privy dashboard.
export async function accountsFromIdentityToken(identityToken: string): Promise<PrivyAccounts> {
  const payload = await verifyToken(identityToken);
  const raw = payload.linked_accounts;
  const list = typeof raw === "string" ? JSON.parse(raw) : Array.isArray(raw) ? raw : [];
  return extractAccounts(String(payload.sub), list);
}

// Path 2: access token proves the session, REST fetch (Basic appId:secret)
// returns the canonical user object.
export async function accountsFromAccessToken(accessToken: string): Promise<PrivyAccounts> {
  const payload = await verifyToken(accessToken);
  const did = String(payload.sub);
  if (!APP_SECRET) throw new Error("privy_secret_missing");
  const res = await fetch(`https://auth.privy.io/api/v1/users/${did}`, {
    headers: {
      Authorization: `Basic ${Buffer.from(`${APP_ID}:${APP_SECRET}`).toString("base64")}`,
      "privy-app-id": APP_ID,
    },
  });
  if (!res.ok) throw new Error(`privy_user_fetch_${res.status}`);
  const user: any = await res.json();
  return extractAccounts(did, user.linked_accounts || []);
}

// The identity token omits LinkedIn's name and vanity slug (measured), so
// when the app secret is configured we top those two fields up from the REST
// user object. Best-effort: a failure here must never break a sign-in.
export async function linkedinDetailsFromRest(did: string): Promise<{ name?: string; vanity?: string } | null> {
  if (!APP_SECRET) return null;
  try {
    const res = await fetch(`https://auth.privy.io/api/v1/users/${did}`, {
      headers: {
        Authorization: `Basic ${Buffer.from(`${APP_ID}:${APP_SECRET}`).toString("base64")}`,
        "privy-app-id": APP_ID,
      },
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) return null;
    const user: any = await res.json();
    const li = (user.linked_accounts || []).find((a: any) => a?.type === "linkedin_oauth");
    if (!li) return null;
    return {
      name: li.name ? String(li.name) : undefined,
      vanity: (li.vanity_name ?? li.vanityName) ? String(li.vanity_name ?? li.vanityName) : undefined,
    };
  } catch {
    return null;
  }
}

// Guarantee the account has a Solana embedded wallet, and return its address.
//
// The client config's createOnLogin only fires at LOGIN, which strands every
// account that already had a live session when the Solana lane shipped: they
// would have to sign out and back in for a wallet the product says they
// already own. So the server closes the gap instead of the browser.
//
// Verified Aug 13 against the live app: a wallet created this way comes back
// on the user object as connector_type "embedded", wallet_client "privy",
// recovery_method "privy-v2" and **user_can_sign: true** — the same kind the
// browser would have made, so withdraws still sign in the user's session.
// (That check mattered: a server-owned wallet the user could not sign with
// would be worse than having none at all.)
//
// READ BEFORE CREATE, always — Privy will happily mint a second wallet, and a
// duplicate is genuinely harmful: the page would show the balance of one
// address while the browser signs from the other, so a user could watch a
// deposit arrive and still be unable to spend it.
//
// The read-then-create is not atomic, so two concurrent first visits could
// both find nothing and both create. This map collapses them onto one
// in-flight promise. In-process only, which matches the gateway's rate
// limiter — if this service is ever run as more than one process, BOTH need
// a shared store.
const solInFlight = new Map<string, Promise<string | null>>();

export function ensureSolanaWallet(did: string): Promise<string | null> {
  const running = solInFlight.get(did);
  if (running) return running;
  const p = ensureSolanaWalletUncached(did).finally(() => solInFlight.delete(did));
  solInFlight.set(did, p);
  return p;
}

async function ensureSolanaWalletUncached(did: string): Promise<string | null> {
  if (!APP_SECRET || !did) return null;
  const auth = {
    Authorization: `Basic ${Buffer.from(`${APP_ID}:${APP_SECRET}`).toString("base64")}`,
    "privy-app-id": APP_ID,
  };
  const solanaOf = (user: any): string | null => {
    const w = (user?.linked_accounts || []).find(
      (a: any) => a?.type === "wallet" && a?.chain_type === "solana" && a?.address
    );
    return w ? String(w.address) : null;
  };
  try {
    const res = await fetch(`https://auth.privy.io/api/v1/users/${did}`, {
      headers: auth, signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) return null;
    const existing = solanaOf(await res.json());
    if (existing) return existing;

    const made = await fetch("https://auth.privy.io/api/v1/wallets", {
      method: "POST",
      headers: { ...auth, "Content-Type": "application/json" },
      body: JSON.stringify({ chain_type: "solana", owner: { user_id: did } }),
      signal: AbortSignal.timeout(10000),
    });
    if (!made.ok) return null;
    const w: any = await made.json();
    return w?.address ? String(w.address) : null;
  } catch {
    return null;
  }
}

const freemail = /@(gmail|googlemail|yahoo|hotmail|outlook|live|icloud|me|proton|protonmail|aol|mail|gmx|yandex|qq|163|126)\./i;

// Upsert order: Privy DID first (an account that re-links X keeps its row),
// then X handle (merges Privy onto a pre-Privy row — the founder card path),
// else a fresh row. Never touches balance, tier, or score.
export async function upsertFromPrivy(acc: PrivyAccounts) {
  const contact = contactEmail(acc);
  // Contact FIRST, before the X gate returns: the accounts that stop here are
  // the drop-offs, and they are exactly the ones worth being able to reach.
  try { recordContact(acc.did, contact?.email, contact?.source); } catch (err) { console.error("contact record failed:", err); }
  if (!acc.twitter) return { needTwitter: true as const };

  let user = getUserByPrivyId(acc.did) || getUserByX(acc.twitter.username);
  const created = !user;

  if (!user) {
    user = createUser({
      username: acc.twitter.username,
      id: acc.twitter.subject || null,
      name: acc.twitter.name || acc.twitter.username,
      profile_image_url: acc.twitter.avatar || null,
    });
  }

  const fields: Record<string, any> = {
    privy_user_id: acc.did,
    x_username: acc.twitter.username,
  };
  if (acc.wallet) fields.wallet_address = acc.wallet;
  if (acc.solana) fields.solana_address = acc.solana;
  if (!user.x_user_id && acc.twitter.subject) fields.x_user_id = acc.twitter.subject;
  if (!user.x_name && acc.twitter.name) fields.x_name = acc.twitter.name;
  if (!user.x_avatar && acc.twitter.avatar) fields.x_avatar = acc.twitter.avatar;
  if (acc.github?.username && !user.github_username) {
    fields.github_username = acc.github.username;
    fields.github_name = acc.github.name || null;
    fields.github_connected_at = new Date().toISOString();
    // Privy tells us WHO; the scorer's signals come from GitHub's public API,
    // same assembly as the direct-OAuth path. Never fail auth on a hiccup.
    try {
      const data = await fetchGithubPublic(acc.github.username);
      fields.github_name = data.profile.name || fields.github_name;
      fields.github_bio = data.profile.bio;
      fields.github_company = data.profile.company;
      fields.github_location = data.profile.location;
      fields.github_followers = data.profile.followers;
      fields.github_public_repos = data.profile.public_repos;
      fields.github_avatar = data.profile.avatar;
      fields.github_languages = JSON.stringify(data.languages);
      fields.github_top_repos = JSON.stringify(data.repos);
      fields.github_orgs = JSON.stringify(data.orgs);
      fields.github_activity = JSON.stringify(data.activity);
      fields.github_total_stars = data.totalStars;
      fields.github_created_at = data.accountCreated;
    } catch (err) {
      console.error("GitHub public fetch failed:", err);
    }
  }
  if (acc.linkedin && !user.linkedin_connected_at) fields.linkedin_connected_at = new Date().toISOString();
  // Top up the two fields the identity token withholds. Only when LinkedIn is
  // linked and we do not already hold them, so it costs one REST call per
  // user per lifetime, not one per sign-in.
  if (acc.linkedin && !acc.linkedinName && !user.linkedin_name) {
    const li = await linkedinDetailsFromRest(acc.did);
    if (li?.name) acc.linkedinName = li.name;
    if (li?.vanity) acc.linkedinVanity = li.vanity;
  }
  // Store the LinkedIn name whenever it arrives — existing linked users fill
  // in on their next sign-in, since upsert runs on every one.
  if (acc.linkedinName && acc.linkedinName !== user.linkedin_name) fields.linkedin_name = acc.linkedinName;
  if (acc.linkedinVanity && acc.linkedinVanity !== user.linkedin_vanity) fields.linkedin_vanity = acc.linkedinVanity;
  // Same salvage rule as the direct-OAuth path: a verified non-freemail
  // domain is the purchasing-power signal; freemail proves nothing.
  const corpEmail = acc.linkedinEmail || acc.email;
  if (!user.linkedin_domain && corpEmail && !freemail.test(corpEmail)) {
    fields.linkedin_domain = corpEmail.split("@")[1]?.toLowerCase();
  }
  // The address itself, freemail or not — the domain is a scoring signal, the
  // address is how we reach them. A later link only overrides an earlier one
  // when it outranks it (a typed-and-OTP'd address beats a GitHub profile
  // address), so re-signing in never downgrades the address on file.
  if (contact) {
    const rank = ["email_login", "google", "linkedin", "github"];
    const rankOf = (s: unknown) => { const i = rank.indexOf(String(s || "")); return i === -1 ? 99 : i; };
    const better = rankOf(contact.source) <= rankOf(user.email_source);
    if (!user.email || (better && user.email !== contact.email)) {
      fields.email = contact.email;
      fields.email_source = contact.source;
      fields.email_captured_at = new Date().toISOString();
    }
  }
  updateUser(user.id, fields);
  try { recordContact(acc.did, contact?.email, contact?.source, user.id); } catch (err) { console.error("contact link failed:", err); }

  return { needTwitter: false as const, user: { ...user, ...fields }, created };
}
