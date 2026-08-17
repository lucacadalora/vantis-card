// Gateway — everything that happens to a request before and after the
// upstream call: key resolution, suspension, per-key rate limiting, daily
// spend caps, and the metering record.
//
// The rate limiter is in-process and per-key. That is correct here because the
// service runs as a single bun process behind nginx; if it is ever scaled to
// multiple processes this must move to a shared store, or each process will
// grant the full allowance independently.

import { DEFAULT_RATE_LIMIT_RPM, getUserByApiKey, getAgentWalletByApiKey, getApiKeyRow, getAgentWallet, touchApiKey, getUser, spendToday, type Outcome } from "./db";
import { UPSTREAM_RPM } from "./upstream";
import { heldFor, spenderScope } from "./credits";
import { laneRpmBoost } from "./deck";

const WINDOW_MS = 60_000;

// Fleet-default daily spend cap (USD) for accounts with no explicit per-user
// cap. Every credit in circulation is a free grant, so an uncapped key is an
// open tap on real upstream spend — this is the valve. An operator-set
// users.daily_usd_cap > 0 always wins over the default; 0 on both = no cap.
export const DEFAULT_DAILY_USD_CAP = Math.max(0, parseFloat(process.env.VANTIS_CARD_DEFAULT_DAILY_CAP || "0"));

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

// OpenAI-shaped error envelope for the /v1 surface: SDKs surface
// error.message/type/code natively; a bare {"error": "string"} reaches users
// as an unhelpful generic failure. Extra fields ride inside the object.
export const oaiError = (code: string, type: string, message: string, extra: Record<string, any> = {}) =>
  ({ error: { code, type, message, ...extra } });

// Resolve a Bearer key into a user and decide whether the call may proceed.
// Order matters: identity → account state → rate → budget, cheapest first.
export function authorize(apiKey: string | undefined, endpoint: string): Authorized {
  if (!apiKey) {
    return { ok: false, outcome: "unauthorized", status: 401, body: oaiError("unauthorized", "authentication_error", "Send your key as Authorization: Bearer <key>.") };
  }

  let user: any = null;
  let wallet: any = null;
  const keyRow = getApiKeyRow(apiKey); // revoked rows never resolve
  if (keyRow) {
    user = getUser(keyRow.user_id);
    if (keyRow.wallet_id) {
      wallet = getAgentWallet(keyRow.wallet_id);
      if (!wallet || wallet.status !== "active") user = null; // lane closed → key dead
    }
  } else {
    user = getUserByApiKey(apiKey);
    if (!user) {
      wallet = getAgentWalletByApiKey(apiKey);
      if (wallet) user = getUser(wallet.user_id);
    }
  }
  if (!user) {
    return { ok: false, outcome: "unauthorized", status: 401, body: oaiError("invalid_api_key", "authentication_error", "This API key is not recognized.") };
  }
  if (keyRow) touchApiKey(keyRow.id);

  if (!user.scored_at) {
    return {
      ok: false, user, outcome: "unauthorized", status: 401,
      body: oaiError("account_not_scored", "authentication_error", "This account has no minted card yet — complete scoring at card.vantis.sh first."),
    };
  }

  if (user.status === "suspended") {
    return {
      ok: false, user, outcome: "suspended", status: 403,
      body: oaiError("key_suspended", "permission_error", "This key has been suspended. Contact the operator."),
    };
  }

  if (wallet && wallet.purpose === "devtools") {
    return {
      ok: false, user, wallet, outcome: "bad_request", status: 403,
      body: oaiError("wallet_purpose", "permission_error", "This is the Developer-tools wallet — its metered routes open with the catalog. Inference bills the Inference lane."),
    };
  }

  // Main is the funding pool: credits are allocated into a lane before they can
  // be spent, so a key that points at main has nothing to bill. The boot
  // migration re-pointed every live main key onto its owner's Inference lane;
  // this catches a legacy-column key or one planted by hand.
  if (!wallet) {
    return {
      ok: false, user, wallet: null, outcome: "bad_request", status: 403,
      body: oaiError("wallet_scope", "permission_error", "This key spends the main card balance, which funds lanes rather than spending itself. Allocate credits to your Inference lane at card.vantis.sh/wallets and call with that lane's key."),
    };
  }

  // A plugged Genesis cartridge raises the lane rate — the "priority lane"
  // printed on the card face, made real. The raise applies whether or not the
  // day's allowance is still open: priority is about rate, the allowance is
  // about volume, and they are separate rights.
  const baseRpm = wallet
    ? (wallet.rate_limit_rpm > 0 ? wallet.rate_limit_rpm : DEFAULT_RATE_LIMIT_RPM)
    : (user.rate_limit_rpm > 0 ? user.rate_limit_rpm : DEFAULT_RATE_LIMIT_RPM);
  const rpm = Math.max(baseRpm, laneRpmBoost(wallet?.id));
  const rl = rateLimit(apiKey, rpm);
  const rlHeaders = {
    "X-RateLimit-Limit": String(rpm),
    "X-RateLimit-Remaining": String(rl.remaining),
  };
  if (!rl.ok) {
    return {
      ok: false, user, outcome: "rate_limited", status: 429,
      body: oaiError("rate_limited", "rate_limit_error", `Rate limit of ${rpm} requests per minute reached. Retry in ${rl.retryAfterSec}s.`, { limit_rpm: rpm, retry_after_seconds: rl.retryAfterSec }),
      headers: { ...rlHeaders, "Retry-After": String(rl.retryAfterSec) },
    };
  }

  // Daily spend cap: an explicit per-user cap wins; otherwise the fleet
  // default applies. Runaway-loop valve AND free-credit-farming valve.
  //
  // NOTE: this cap does NOT govern calls running on a Genesis cartridge. Those
  // charge nothing, so they never enter spendToday and can never trip this —
  // by design: a cartridge's own daily TOKEN allowance is its cap, enforced in
  // the /v1 handler. Two separate valves for two separate kinds of spend; do
  // not read this one as covering both.
  const dailyCap = user.daily_usd_cap > 0 ? user.daily_usd_cap : DEFAULT_DAILY_USD_CAP;
  if (dailyCap > 0) {
    // Settled spend PLUS in-flight worst-case holds: without the holds the
    // cap is a read-compare race — a parallel volley admits past it.
    const spent = spendToday(user.id) + heldFor(spenderScope(wallet?.id, user.id));
    if (spent >= dailyCap) {
      return {
        ok: false, user, outcome: "daily_cap", status: 429,
        body: oaiError("daily_cap_reached", "rate_limit_error", "The daily spend cap on this account is reached. It resets at 00:00 UTC.", {
          spent_today_usd: +spent.toFixed(6), daily_cap_usd: dailyCap,
          cap_source: user.daily_usd_cap > 0 ? "account" : "default",
        }),
        headers: rlHeaders,
      };
    }
  }

  // Last gate: is there room upstream at all? Checked after the per-user
  // limits so a single noisy key is blamed before the shared ceiling is.
  // This only CHECKS — the slot is consumed by the caller immediately before
  // it actually dials upstream, so a request refused later (bad model, no
  // credits) never eats quota it was not going to use.
  const cap = upstreamCapacity();
  if (!cap.ok) {
    return {
      ok: false, user, outcome: "upstream_saturated", status: 429,
      body: oaiError("rate_limit_exceeded", "rate_limit_error", "The server is at capacity. Retry shortly.", { retry_after_seconds: cap.retryAfterSec }),
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

// ── request shape ────────────────────────────────────────────────────────
// Does this request carry an image part? OpenAI-shaped multimodal content is
// an array of parts; plain string content never is.
export function hasImageInput(messages: any): boolean {
  if (!Array.isArray(messages)) return false;
  return messages.some((m) =>
    Array.isArray(m?.content) && m.content.some((part: any) => part?.type === "image_url" || part?.type === "input_image"));
}

// Pre-flight input estimate. Prose is ~4 chars per token, but a base64 image
// is not prose: measured Aug 13, a 3KB image made the old chars/4 estimate
// read 688 tokens against a real 81 — 8.5x, and it scales with the file. That
// over-reserve can refuse a call the balance could easily afford, and on a
// GPT model it can even push the estimate past the 272K long-context
// threshold and reserve at the 2x band. So image parts are counted as a flat
// per-image allowance and only the text is measured by length.
const IMAGE_TOKENS_EST = 1_500; // generous vs the ~70 observed for a small PNG
export function estimateInputTokens(messages: any): number {
  if (!Array.isArray(messages)) return Math.ceil(JSON.stringify(messages || "").length / 4);
  let chars = 0;
  let images = 0;
  for (const m of messages) {
    if (typeof m?.content === "string") { chars += m.content.length; continue; }
    if (!Array.isArray(m?.content)) { chars += JSON.stringify(m?.content || "").length; continue; }
    for (const part of m.content) {
      if (part?.type === "image_url" || part?.type === "input_image") images++;
      else chars += JSON.stringify(part || "").length;
    }
  }
  return Math.ceil(chars / 4) + images * IMAGE_TOKENS_EST;
}
