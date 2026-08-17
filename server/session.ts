// Visitor sessions for the Privy-gated funnel — same discipline as the admin
// cookie (HMAC-signed, expiring, HttpOnly), but carrying identity. The cookie
// is minted only after /auth/privy verifies real Privy tokens, so the server
// never trusts what the browser merely claims.
//
// It represents a PRIVY login, not a card: did is always present, uid only
// once an X account is linked and a user row exists. That order matters —
// the login gate must admit people to /onboard so they can link X at all.

import { createHmac, timingSafeEqual, randomBytes } from "crypto";

const SECRET = process.env.VANTIS_CARD_SESSION_SECRET || randomBytes(32).toString("hex");
const TTL_MS = 7 * 24 * 60 * 60 * 1000; // a card is an occasional visit, not a daily app
export const SESSION_COOKIE = "vc_session";

const sign = (payload: string) => createHmac("sha256", SECRET).update(payload).digest("hex");
const b64u = (s: string) => Buffer.from(s, "utf8").toString("base64url");
const unb64u = (s: string) => Buffer.from(s, "base64url").toString("utf8");

export type Session = { did: string; uid: string | null };

function mint(did: string, uid: string | null): string {
  const exp = Date.now() + TTL_MS;
  const body = b64u(JSON.stringify({ d: did, u: uid || "", e: exp }));
  return `${body}.${sign(body)}`;
}

export function readSession(cookieHeader: string | undefined): Session | null {
  if (!cookieHeader) return null;
  // Both the fleet cookie (Domain=.vantis.sh) and a stale pre-widening
  // host-only cookie can arrive under the same name — verify every
  // candidate and take the first that proves out, instead of trusting
  // whichever one the browser happened to order first.
  const candidates = cookieHeader
    .split(";")
    .map((s) => s.trim())
    .filter((s) => s.startsWith(`${SESSION_COOKIE}=`))
    .map((s) => s.slice(SESSION_COOKIE.length + 1));
  for (const raw of candidates) {
    const [body, mac] = raw.split(".");
    if (!body || !mac) continue;
    const expected = sign(body);
    const a = Buffer.from(mac, "utf8");
    const b = Buffer.from(expected, "utf8");
    if (a.length !== b.length || !timingSafeEqual(a, b)) continue;
    try {
      const p = JSON.parse(unb64u(body));
      if (!p.d || !isFinite(p.e) || Date.now() > p.e) continue;
      return { did: String(p.d), uid: p.u ? String(p.u) : null };
    } catch {
      continue;
    }
  }
  return null;
}

// HOST-ONLY, deliberately. The cookie was widened to Domain=.vantis.sh for
// ~1h on Aug 13 (fleet SSO idea) and reverted the same night: a domain
// cookie is sent to EVERY *.vantis.sh host, and app.vantis.sh / kreofi
// .vantis.sh resolve to third-party infrastructure — fleet session tokens
// must never land in someone else's access logs. Cross-product SSO does not
// need the domain cookie: the hub (and any future product) authenticates
// with a credentialed same-site fetch to this host's /auth/privy + /api/me,
// which a host-only cookie serves fine under the CORS allowlist.

export function sessionSetCookie(did: string, uid: string | null): string {
  return `${SESSION_COOKIE}=${mint(did, uid)}; Max-Age=${Math.floor(TTL_MS / 1000)}; Path=/; HttpOnly; Secure; SameSite=Lax`;
}

export function sessionClearCookie(): string {
  return `${SESSION_COOKIE}=; Max-Age=0; Path=/; HttpOnly; Secure; SameSite=Lax`;
}

// Retires the short-lived Domain=.vantis.sh cookie from the Aug 13 window.
// Append beside every set/clear until those 7-day cookies age out; without
// it a lingering domain cookie keeps leaking to third-party subdomains and
// rides beside the host cookie under the same name.
export function sessionLegacyClearCookie(): string {
  return `${SESSION_COOKIE}=; Max-Age=0; Domain=.vantis.sh; Path=/; HttpOnly; Secure; SameSite=Lax`;
}
