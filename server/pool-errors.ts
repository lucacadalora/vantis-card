// CLIENT-FACING FAILURE VOCABULARY.
//
// Everything a caller sees on /v1 speaks SERVER — never the name of a vendor,
// a pool, an account, a plan, a proxy, or an internal route. Two reasons, and
// the second is the one that bites:
//
//   1. We resell our own endpoint. A customer of card.vantis.sh has no
//      relationship with whoever is behind it and should never learn one
//      exists from an error string.
//   2. Relayed vendor text is often WRONG in our context. The balancer's
//      "Invalid API key" refers to OUR key to IT — forwarding that to a caller
//      whose own key is perfectly valid sends them to debug the wrong thing.
//
// The wording follows OpenAI's own generic error vocabulary rather than
// inventing a Vantis-branded one, because /v1 is an OpenAI-compatible surface
// and SDKs already special-case these shapes.
//
// NOTHING IS HIDDEN FROM US. Every one of these takes the raw upstream text
// and hands it back for the OPERATOR record (api_requests.error + traceVendor,
// both admin-only). The caller gets the clean code; the console keeps the
// truth. If you ever find yourself unable to debug a failure from the admin
// side, fix the logging — do not put vendor text back in the response.

export type ClientError = {
  status: number;
  body: { error: { code: string; type: string; message: string } };
  retryAfter?: string;
};

const err = (status: number, code: string, type: string, message: string, retryAfter?: string): ClientError => ({
  status,
  body: { error: { code, type, message } },
  ...(retryAfter ? { retryAfter } : {}),
});

// The server tried and could not complete the call. Generic 502 — the caller
// can retry, and there is nothing actionable for them in the cause.
export const serverError = () =>
  err(502, "server_error", "api_error", "The server had an error while processing your request.");

// Nothing is wrong with the request; there is no capacity or no route right
// now. Distinct from server_error so a client can back off rather than retry
// hot.
export const serviceUnavailable = () =>
  err(503, "service_unavailable", "api_error", "The server is temporarily unavailable. Try again shortly.");

// The model exists in our catalog but cannot be served at the moment. Kept
// separate from unsupported_model (which means "not on the catalog at all"),
// so a client can tell "wrong id" from "right id, bad moment".
export const modelUnavailable = () =>
  err(503, "model_unavailable", "api_error", "That model is not available right now.");

// Capacity refusal. Mirrors the 429 shape the rest of the gateway already
// emits so a client's existing retry path handles it unchanged.
export const capacityReached = (retryAfterSec?: string | null) =>
  err(429, "rate_limit_exceeded", "rate_limit_error", "The server is at capacity. Retry shortly.", retryAfterSec || "2");

// ── classification ────────────────────────────────────────────────────────
// The raw text is read ONLY to choose which clean error to emit. It never
// reaches the response. Patterns are matched against what the balancer and
// the vendor behind it actually emit — verified live, Aug 13:
//   "The 'x' model is not supported when using Codex with a ChatGPT account."
//   "No accounts with a plan supporting model 'x' at service tier 'flex'"
//   "opportunistic burn window closed: ..."
//   "proxy_overloaded" / "no_accounts" / "rate_limit_exceeded"
const MODEL_SHAPED = /not supported when using|no_plan_support_for_model|no accounts with a plan|model_not_found|does not exist/i;
const CAPACITY_SHAPED = /rate.?limit|burn window closed|proxy_overloaded|no_accounts|overloaded|quota|too many requests/i;

// Map a failed upstream response onto the client-facing error. `status` is the
// upstream's HTTP status, `raw` its body (never forwarded).
export function upstreamFailure(status: number, raw: string, retryAfter?: string | null): ClientError {
  if (status === 429 || CAPACITY_SHAPED.test(raw)) return capacityReached(retryAfter);
  if (MODEL_SHAPED.test(raw)) return modelUnavailable();
  if (status === 503 || status === 502) return serviceUnavailable();
  return serverError();
}

// Operator-side breadcrumb. Keeps the vendor text intact for api_requests.error
// and traceVendor, trimmed so one pathological body cannot bloat the log.
export const operatorDetail = (raw: string, limit = 400): string =>
  (raw || "").replace(/\s+/g, " ").trim().slice(0, limit);
