// Gateway — everything that happens to a request before and after the
// upstream call: key resolution, suspension, per-key rate limiting, daily
// spend caps, and the metering record.
//
// The rate limiter is in-process and per-key. That is correct here because the
// service runs as a single bun process behind nginx; if it is ever scaled to
// multiple processes this must move to a shared store, or each process will
// grant the full allowance independently.

import { getUserByApiKey, getAgentWalletByApiKey, getUser, spendToday, type Outcome } from "./db";
import { UPSTREAM_RPM } from "./upstream";

const WINDOW_MS = 60_000;

// key → sorted list of request timestamps inside the current window
const hits = new Map<string, number[]>();

// Keep the map from growing without bound when keys go quiet.
let lastSweep = Date.now();
function sweep(now: number) {
  if (now - lastSweep < 5 * 60_000) return;
  lastSweep = now;
  for (const [k, arr] of hits) {
    const live = arr.filter((t) => now - t < WINDOW_MS);
    if (live.length) hits.set(k, live);
    else hits.delete(k);
  }
}

export function rateLimit(key: string, rpm: number): { ok: boolean; remaining: number; retryAfterSec: number } {
  const now = Date.now();
  sweep(now);
  const arr = (hits.get(key) || []).filter((t) => now - t < WINDOW_MS);
  if (arr.length >= rpm) {
    const oldest = arr[0];
    const retryAfterSec = Math.max(1, Math.ceil((WINDOW_MS - (now - oldest)) / 1000));
    hits.set(key, arr);
    return { ok: false, remaining: 0, retryAfterSec };
  }
  arr.push(now);
  hits.set(key, arr);
  return { ok: true, remaining: Math.max(0, rpm - arr.length), retryAfterSec: 0 };
}

// ── global upstream ceiling ──
// The provider enforces a per-model RPM quota on the whole account (BytePlus
// returns ModelAccountRpmRateLimitExceeded). If we let more than that through,
// users get the provider's refusal, which reads to them as our outage. So we
// shed at our own door with an honest 429 and a Retry-After.
const upstreamHits: number[] = [];

export function upstreamCapacity(): { ok: boolean; remaining: number; retryAfterSec: number } {
  const now = Date.now();
  while (upstreamHits.length && now - upstreamHits[0] >= WINDOW_MS) upstreamHits.shift();
  if (upstreamHits.length >= UPSTREAM_RPM) {
    const retryAfterSec = Math.max(1, Math.ceil((WINDOW_MS - (now - upstreamHits[0])) / 1000));
    return { ok: false, remaining: 0, retryAfterSec };
  }
  return { ok: true, remaining: UPSTREAM_RPM - upstreamHits.length, retryAfterSec: 0 };
}

// Record a call against the shared ceiling. Scoring records without asking:
// it is one call per signup and must not fail a user's onboarding, but it
// still consumes real quota and the books should say so.
export function noteUpstreamCall() {
  upstreamHits.push(Date.now());
}

export function upstreamLoad() {
  const now = Date.now();
  return {
    limit: UPSTREAM_RPM,
    used: upstreamHits.filter((t) => now - t < WINDOW_MS).length,
  };
}

export interface Authorized {
  ok: boolean;
  user?: any;
  wallet?: any | null; // agent wallet when the key is a wallet key
  outcome: Outcome;
  status: number;
  body?: Record<string, any>;
  headers?: Record<string, string>;
}

// Resolve a Bearer key into a user and decide whether the call may proceed.
// Order matters: identity → account state → rate → budget, cheapest first.
export function authorize(apiKey: string | undefined, endpoint: string): Authorized {
  if (!apiKey) {
    return { ok: false, outcome: "unauthorized", status: 401, body: { error: "unauthorized", message: "Send your key as Authorization: Bearer <key>." } };
  }

  let user = getUserByApiKey(apiKey);
  let wallet: any = null;
  if (!user) {
    wallet = getAgentWalletByApiKey(apiKey);
    if (wallet) user = getUser(wallet.user_id);
  }
  if (!user) {
    return { ok: false, outcome: "unauthorized", status: 401, body: { error: "invalid_api_key" } };
  }

  if (user.status === "suspended") {
    return {
      ok: false, user, outcome: "suspended", status: 403,
      body: { error: "key_suspended", message: "This key has been suspended. Contact the operator." },
    };
  }

  if (wallet && wallet.purpose === "devtools") {
    return {
      ok: false, user, wallet, outcome: "bad_request", status: 403,
      body: { error: "wallet_purpose", message: "This is the Developer-tools wallet — its metered routes open with the catalog. Inference bills from the Inference wallet or the card key." },
    };
  }

  const rpm = wallet
    ? (wallet.rate_limit_rpm > 0 ? wallet.rate_limit_rpm : 60)
    : (user.rate_limit_rpm > 0 ? user.rate_limit_rpm : 60);
  const rl = rateLimit(apiKey, rpm);
  const rlHeaders = {
    "X-RateLimit-Limit": String(rpm),
    "X-RateLimit-Remaining": String(rl.remaining),
  };
  if (!rl.ok) {
    return {
      ok: false, user, outcome: "rate_limited", status: 429,
      body: { error: "rate_limited", limit_rpm: rpm, retry_after_seconds: rl.retryAfterSec },
      headers: { ...rlHeaders, "Retry-After": String(rl.retryAfterSec) },
    };
  }

  // Daily spend cap is a safety valve for a runaway loop on one key; 0 = off.
  if (user.daily_usd_cap > 0) {
    const spent = spendToday(user.id);
    if (spent >= user.daily_usd_cap) {
      return {
        ok: false, user, outcome: "daily_cap", status: 429,
        body: { error: "daily_cap_reached", spent_today_usd: +spent.toFixed(6), daily_cap_usd: user.daily_usd_cap },
        headers: rlHeaders,
      };
    }
  }

  // Last gate: is there room upstream at all? Checked after the per-user
  // limits so a single noisy key is blamed before the shared ceiling is.
  // This only CHECKS — the slot is consumed by the caller immediately before
  // it actually dials upstream, so a request refused later (bad model, no
  // credits, streaming) never eats quota it was not going to use.
  const cap = upstreamCapacity();
  if (!cap.ok) {
    return {
      ok: false, user, outcome: "upstream_saturated", status: 429,
      body: {
        error: "upstream_saturated",
        message: "The rail is at its upstream request ceiling. Retry shortly.",
        retry_after_seconds: cap.retryAfterSec,
      },
      headers: { ...rlHeaders, "Retry-After": String(cap.retryAfterSec) },
    };
  }

  return {
    ok: true, user, wallet, outcome: "ok", status: 200,
    headers: { ...rlHeaders, "X-Upstream-Remaining": String(cap.remaining) },
  };
}

// Client IP as seen behind Cloudflare + nginx.
export function clientIp(req: Request): string {
  const h = req.headers;
  return (
    h.get("cf-connecting-ip") ||
    (h.get("x-forwarded-for") || "").split(",")[0].trim() ||
    h.get("x-real-ip") ||
    ""
  );
}

export const keyPrefix = (k?: string) => (k ? k.slice(0, 12) + "…" : null);
