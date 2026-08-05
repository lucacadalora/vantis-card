// Gateway — everything that happens to a request before and after the
// upstream call: key resolution, suspension, per-key rate limiting, daily
// spend caps, and the metering record.
//
// The rate limiter is in-process and per-key. That is correct here because the
// service runs as a single bun process behind nginx; if it is ever scaled to
// multiple processes this must move to a shared store, or each process will
// grant the full allowance independently.

import { getUserByApiKey, spendToday, type Outcome } from "./db";

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

export interface Authorized {
  ok: boolean;
  user?: any;
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

  const user = getUserByApiKey(apiKey);
  if (!user) {
    return { ok: false, outcome: "unauthorized", status: 401, body: { error: "invalid_api_key" } };
  }

  if (user.status === "suspended") {
    return {
      ok: false, user, outcome: "suspended", status: 403,
      body: { error: "key_suspended", message: "This key has been suspended. Contact the operator." },
    };
  }

  const rpm = user.rate_limit_rpm > 0 ? user.rate_limit_rpm : 60;
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

  return { ok: true, user, outcome: "ok", status: 200, headers: rlHeaders };
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
