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
  const raw = cookieHeader
    .split(";")
    .map((s) => s.trim())
    .find((s) => s.startsWith(`${SESSION_COOKIE}=`))
    ?.slice(SESSION_COOKIE.length + 1);
  if (!raw) return null;
  const [body, mac] = raw.split(".");
  if (!body || !mac) return null;
  const expected = sign(body);
  const a = Buffer.from(mac, "utf8");
  const b = Buffer.from(expected, "utf8");
  if (a.length !== b.length || !timingSafeEqual(a, b)) return null;
  try {
    const p = JSON.parse(unb64u(body));
    if (!p.d || !isFinite(p.e) || Date.now() > p.e) return null;
    return { did: String(p.d), uid: p.u ? String(p.u) : null };
  } catch {
    return null;
  }
}

export function sessionSetCookie(did: string, uid: string | null): string {
  return `${SESSION_COOKIE}=${mint(did, uid)}; Max-Age=${Math.floor(TTL_MS / 1000)}; Path=/; HttpOnly; Secure; SameSite=Lax`;
}

export function sessionClearCookie(): string {
  return `${SESSION_COOKIE}=; Max-Age=0; Path=/; HttpOnly; Secure; SameSite=Lax`;
}
