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
import { createUser, getUserByPrivyId, getUserByX, updateUser } from "./db";
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
async function verifyToken(token: string) {
  const { payload } = await jwtVerify(token, getJwks(), {
    issuer: "privy.io",
    audience: APP_ID,
  });
  return payload;
}

export type PrivyAccounts = {
  did: string;
  twitter?: { subject: string; username: string; name?: string; avatar?: string };
  github?: { username: string; name?: string; email?: string };
  linkedin?: boolean; // linked at all (email may still be absent/freemail)
  linkedinEmail?: string;
  email?: string;
  wallet?: string; // embedded EVM address
};

// Field names differ between the REST API (snake_case) and identity-token
// claims (camelCase in newer SDKs) — read both spellings.
function pick(a: any, snake: string, camel: string) {
  return a?.[snake] ?? a?.[camel] ?? undefined;
}

function extractAccounts(did: string, accounts: any[]): PrivyAccounts {
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
    } else if (type === "linkedin_oauth") {
      out.linkedin = true;
      const em = a.email ?? undefined;
      if (em) out.linkedinEmail = String(em);
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
    }
  }
  return out;
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

const freemail = /@(gmail|googlemail|yahoo|hotmail|outlook|live|icloud|me|proton|protonmail|aol|mail|gmx|yandex|qq|163|126)\./i;

// Upsert order: Privy DID first (an account that re-links X keeps its row),
// then X handle (merges Privy onto a pre-Privy row — the founder card path),
// else a fresh row. Never touches balance, tier, or score.
export async function upsertFromPrivy(acc: PrivyAccounts) {
  if (!acc.twitter) return { needTwitter: true as const };

  let user = getUserByPrivyId(acc.did) || getUserByX(acc.twitter.username);

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
  // Same salvage rule as the direct-OAuth path: a verified non-freemail
  // domain is the purchasing-power signal; freemail proves nothing.
  const corpEmail = acc.linkedinEmail || acc.email;
  if (!user.linkedin_domain && corpEmail && !freemail.test(corpEmail)) {
    fields.linkedin_domain = corpEmail.split("@")[1]?.toLowerCase();
  }
  updateUser(user.id, fields);

  return { needTwitter: false as const, user: { ...user, ...fields } };
}
