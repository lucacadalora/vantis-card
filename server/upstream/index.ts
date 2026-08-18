// Upstream resolver — the rail serves ONE build, DeepSeek V4 Flash 0731, on
// two public tiers: the default line (this resolver, bare id, gateway
// round-robin, failover behind it) and the FAST tier (catalog id
// deepseek-v4-flash-0731-fast → the wafer/…-Fast pin, priced separately,
// ZDR-capable, no failover). A `"zdr": true` request on either id is sent as
// the BARE id + `Wafer-ZDR: required`, which the gateway answers from the
// fast tier — so ZDR calls bill at the fast rate. See server.ts.
//
// Routes are tried in priority order. The first configured one wins:
//   1. JATEVO_*   — api.jatevo.ai, the canonical pooled gateway. The bare
//                   DeepSeek-V4-Flash-0731 id rotates across its lanes
//                   (wafer, baseten, byteplus, opencode, surplus,
//                   tencent-tokenhub as of Aug 17 2026). Provider-prefixed
//                   ids pin one lane: the fast tier uses one, and the rest
//                   are staging diagnostics.
//   2. DEEPSEEK_* — first-party api.deepseek.com, serves 0731 itself
//   3. WAFER_*    — Wafer serverless direct (pass.wafer.ai), same build as
//                   the Jatevo route, ZDR-capable via `Wafer-ZDR: required`
//   4. ARK_*      — BytePlus ModelArk (`deepseek-v4-flash-ga-260731`); also
//                   the RUNTIME FAILOVER when a higher route dies mid-flight
//                   (see resolveFailover — the Aug 4 Jatevo outage rule)
//
// If a configured route is NOT on a 31 July build, the endpoint stays live on
// whatever it has and says so — in the API response, on /burn/stats, and on
// the site. It must never claim to serve 0731 while serving something else.
//
// REASONING CONTRACT: the rail's public claim is "reasoning on by default".
// DeepSeek first-party and Ark both default thinking ON; Wafer-backed routes
// (direct or via Jatevo) default it OFF — applyUpstreamDefaults() pins the
// contract per request, and a client's explicit thinking/reasoning_effort/
// enable_thinking always wins.

export const TARGET_MODEL = "deepseek-v4-flash-0731";
export const TARGET_LABEL = "DeepSeek V4 Flash 0731";

// Provider ids that ARE the 31 July build, under whatever name that provider
// gives it. BytePlus ships it as the GA build dated 260731; Wafer as the
// high-TPS Fast tier of the same 0731 checkpoint (Jatevo lists it under the
// wafer/ prefix and echoes it back unprefixed in responses).
const TARGET_BUILDS = new Set([
  "deepseek-v4-flash-0731",
  "deepseek-v4-flash-ga-260731",
  "deepseek-v4-flash-0731-fast",
  "wafer/deepseek-v4-flash-0731-fast",
  // Jatevo's second 0731 route (Aug 10): Baseten-served standard tier — the
  // Fast tier degenerates into line loops under instruction-heavy system
  // prompts (reproduced: 117 duplicate lines); this build stayed clean.
  "baseten/deepseek-v4-flash-0731",
  "deepseek-ai/deepseek-v4-flash-0731", // how the baseten route echoes itself
]);
export const isTargetBuild = (model: string) => TARGET_BUILDS.has(model.toLowerCase());

// Documented per-model RPM quota on the account serving this build. Measured
// Aug 5 2026: nominal 500, ~785 observed peak in a 60s window under pressure
// (a burst allowance on top of the bucket). We plan against the nominal.
export const UPSTREAM_RPM = parseInt(process.env.UPSTREAM_RPM_LIMIT || "500");

// ── THE CATALOG ──────────────────────────────────────────────────────────
// Model acceptance now lives in ./catalog (catalogModelFor), which owns the
// legacy DeepSeek aliases too — one list, so an alias cannot be accepted by
// one code path and refused by another.
// Model identity, pricing and tiering all live in ./catalog — one file the
// page, the API and the billing rate are read from. Re-exported here so
// existing importers keep working.
export type { CatalogModel, Rate, Family, Tier, Access } from "./catalog";
export {
  CATALOG, STAGING_MODELS, catalogModelFor, effectiveRate,
  publicModels, openModels, frontierModels,
  isAllowlisted, openAccessModels, allowlistModels, callableModels,
  DEFAULT_MODEL_ID, defaultModel, FAST_MODEL_ID, fastModel, isDeepSeekRail,
} from "./catalog";
import { STAGING_MODELS, type CatalogModel } from "./catalog";

// Legacy alias — the console reads the staging list under its old name.
export const STAGING_CATALOG = STAGING_MODELS;

// ── CODEX-LB ROUTE — OUR OWN GPT POOL (allowlist) ────────────────────────
// balancer-gpt.vantis.sh pools our own ChatGPT *subscription* accounts and
// speaks OpenAI /v1/chat/completions. It serves the catalog's GPT family
// (route: "codexlb"), dialled directly from server.ts. Access is per-account
// (users.pool_access=1 — Luca's approve list, Aug 13 2026) and the lane is
// rate {0,0} by construction: a subscription seat has no per-token vendor
// price, so nothing is billed and nothing reaches the burn ledger.
//
// The `codexlb/<model>` ad-hoc prefix (codexLbModelFor) passes any pool
// roster id through, also at zero rate; server.ts gates it to accounts that
// are BOTH staging and pool_access.
export function resolveCodexLb(model: string): Upstream | null {
  const key = process.env.CODEXLB_API_KEY;
  if (!key) return null;
  return {
    baseUrl: process.env.CODEXLB_BASE_URL || "https://balancer-gpt.vantis.sh/v1",
    apiKey: key,
    model,
    provider: "codexlb",
    onTarget: false, // never covered by the 0731 serving claim
    zdr: false,
  };
}

const CODEXLB_PREFIX = "codexlb/";

// `codexlb/<id>` passes <id> through to codex-lb, whose roster is synced from
// whichever accounts are pooled — so the id list is not duplicated here (and
// cannot go stale against it). Rate is zero by construction, like every
// pool-lane id.
export function codexLbModelFor(model?: string): CatalogModel | undefined {
  if (!model) return undefined;
  const raw = model.trim();
  if (!raw.toLowerCase().startsWith(CODEXLB_PREFIX)) return undefined;
  const upstreamModel = raw.slice(CODEXLB_PREFIX.length).trim();
  if (!upstreamModel) return undefined;
  return {
    id: raw.toLowerCase(),
    upstreamModel,
    label: `${upstreamModel} — codex-lb pool`,
    vendor: "OpenAI",
    family: "frontier",
    tier: "staging",
    rate: { input: 0, output: 0 },
    contextWindow: null,
    vision: false,
    blurb: "Pooled ChatGPT subscription seat. Never billed, never burned.",
    priceSource: "none — a subscription has no per-token price",
    route: "codexlb",
  };
}

export interface Upstream {
  baseUrl: string;
  apiKey: string;
  model: string;        // what we actually send upstream
  provider: string;
  onTarget: boolean;    // true only when the upstream really serves 0731
  headers?: Record<string, string>; // extra dial-out headers (e.g. Wafer-ZDR)
  zdr: boolean;         // true when every rail call runs under required ZDR
}

// Jatevo's API-key request ceiling is shared across its serving providers.
// Once it answers 429 (or becomes unreachable), briefly route new requests to
// the independent Ark key instead of making every caller discover the same
// outage. In-flight requests still fail over individually in server.ts.
let jatevoCooldownUntil = 0;

export function coolDownJatevo(seconds: number): void {
  const bounded = Math.max(1, Math.min(300, Math.ceil(seconds || 1)));
  jatevoCooldownUntil = Math.max(jatevoCooldownUntil, Date.now() + bounded * 1000);
}

export function clearJatevoCooldown(): void {
  jatevoCooldownUntil = 0;
}

export function jatevoCooldownSeconds(): number {
  return Math.max(0, Math.ceil((jatevoCooldownUntil - Date.now()) / 1000));
}

const JATEVO_LANES = new Set([
  "wafer", "baseten", "byteplus", "opencode",
  // Seen in X-Served-By from Aug 16: two lanes Jatevo added without notice.
  // Keep them traced — "surplus" is also the lane that rejects OpenAI's
  // `developer` role (see normalizeRolesForOpenWeights), and an un-echoed
  // lane made that outage invisible in vendor telemetry for a day.
  "surplus", "tencent-tokenhub",
]);

// Keep the provider topology private on client responses, but preserve the
// selected Jatevo lane in internal telemetry for capacity and health audits.
export function tracedEndpoint(upstream: Upstream, response: Response, endpoint: string): string {
  if (upstream.provider !== "jatevo") return endpoint;
  const lane = (response.headers.get("X-Served-By") || "").trim().toLowerCase();
  return JATEVO_LANES.has(lane) ? `${endpoint}:${lane}` : endpoint;
}

export function resolveUpstream(): Upstream | null {
  const jatevoKey = process.env.JATEVO_API_KEY;
  if (jatevoKey && jatevoCooldownSeconds() === 0) {
    const model = process.env.JATEVO_MODEL || "DeepSeek-V4-Flash-0731";
    const waferBacked = model.toLowerCase().startsWith("wafer/");
    // The ZDR header is sent on wafer-backed routes regardless (harmless if
    // dropped); the PUBLIC ZDR CLAIM stays off until JATEVO_ZDR=1 confirms
    // the gateway forwards it to Wafer end-to-end.
    return {
      baseUrl: process.env.JATEVO_BASE_URL || "https://api.jatevo.ai/v1",
      apiKey: jatevoKey,
      model,
      provider: "jatevo",
      onTarget: isTargetBuild(model),
      headers: waferBacked ? { "Wafer-ZDR": "required" } : undefined,
      zdr: waferBacked && process.env.JATEVO_ZDR === "1",
    };
  }

  const dsKey = process.env.DEEPSEEK_API_KEY;
  if (dsKey) {
    return {
      baseUrl: process.env.DEEPSEEK_BASE_URL || "https://api.deepseek.com/v1",
      apiKey: dsKey,
      model: process.env.DEEPSEEK_MODEL || TARGET_MODEL,
      provider: "deepseek",
      onTarget: isTargetBuild(process.env.DEEPSEEK_MODEL || TARGET_MODEL),
      zdr: false,
    };
  }

  const waferKey = process.env.WAFER_API_KEY;
  if (waferKey) {
    const model = process.env.WAFER_MODEL || "DeepSeek-V4-Flash-0731-Fast";
    const requireZdr = process.env.WAFER_REQUIRE_ZDR !== "0"; // default: required
    return {
      baseUrl: process.env.WAFER_BASE_URL || "https://pass.wafer.ai/v1",
      apiKey: waferKey,
      model,
      provider: "wafer",
      onTarget: isTargetBuild(model),
      headers: requireZdr ? { "Wafer-ZDR": "required" } : undefined,
      zdr: requireZdr,
    };
  }

  const arkKey = process.env.ARK_API_KEY;
  if (arkKey) {
    const model = process.env.ARK_MODEL || "deepseek-v4-flash-ga-260731";
    return {
      baseUrl: process.env.ARK_BASE_URL || "https://ark.ap-southeast.bytepluses.com/api/v3",
      apiKey: arkKey,
      model,
      provider: "ark",
      onTarget: isTargetBuild(model),
      zdr: false,
    };
  }

  return null;
}

// OpenAI-era client dialects, translated for the open-weight lanes. Modern
// OpenAI SDK clients (pi and friends) send two things the DeepSeek serving
// stack refuses with 400 {"message":"Invalid request","code":"request_failed"}
// — and because bare-id routing rotates lanes per request, the same client
// request was valid or invalid by roulette. Measured Aug 17 2026:
//   · role "developer" (OpenAI's renamed system role): rejected by the
//     surplus and byteplus lanes, accepted by opencode. → renamed to system.
//   · max_tokens AND max_completion_tokens together: byteplus 400s on the
//     pair, each alone is fine. The pair was OUR OWN doing — clients like pi
//     send only max_completion_tokens and the gateway's max_tokens=1024
//     default landed beside it. → folded into max_tokens (the field these
//     lanes speak) BEFORE the gateway's cap/default/reserve logic, which
//     also makes the credit hold see the caller's real output cap.
//   · assistant turn {content: null, tool_calls: […]} — the canonical shape
//     every OpenAI SDK replays for tool-call history — and tool results sent
//     as content-part arrays: rejected by the opencode lane (400 "Invalid
//     request"), accepted everywhere else. Measured Aug 17 with the lane-rank
//     dialect matrix; this was the single largest 400 source in the vendor
//     telemetry (opencode 739/9,442 = 7.8% while it carried ~55% of the
//     bare-id traffic → agent clients such as hermes-cli / pi / langchainjs
//     lost ~half their calls by roulette). → null content becomes "" and
//     all-text tool parts are joined; both are semantically identical.
// codexlb (real OpenAI pool) must NOT be normalized; it understands the
// developer role and max_completion_tokens natively.
export function normalizeForOpenWeightLanes(body: any): void {
  if (Array.isArray(body?.messages)) {
    for (const m of body.messages) {
      if (!m) continue;
      if (m.role === "developer") m.role = "system";
      if (m.role === "assistant" && m.content === null && Array.isArray(m.tool_calls)) m.content = "";
      if (m.role === "tool" && Array.isArray(m.content) && m.content.length > 0 &&
          m.content.every((p: any) => p && p.type === "text" && typeof p.text === "string")) {
        m.content = m.content.map((p: any) => p.text).join("");
      }
    }
  }
  if (typeof body?.max_completion_tokens === "number") {
    // An explicit max_tokens from the caller wins; mct fills in otherwise.
    if (body.max_tokens == null) body.max_tokens = body.max_completion_tokens;
    delete body.max_completion_tokens;
  }
}

// The rail advertises "reasoning on by default" — DeepSeek's own default.
// Wafer-backed serving (direct or through Jatevo) defaults reasoning OFF, so
// there thinking is enabled unless the caller took a position themselves
// (thinking / reasoning_effort / enable_thinking all count as taking a
// position, and all pass through).
export function applyUpstreamDefaults(body: any, up: Upstream): void {
  const waferBacked = up.provider === "wafer" || up.model.toLowerCase().startsWith("wafer/");
  if (!waferBacked) return;
  if (body.thinking === undefined && body.reasoning_effort === undefined && body.enable_thinking === undefined) {
    body.thinking = { type: "enabled" };
  }
}

// Vendor-cost estimate from DOCUMENTED list prices only: Wafer publishes
// $0.28/$0.56 per 1M, DeepSeek first-party $0.14/$0.28. Jatevo and Ark
// invoices are their own business — never fabricated (null).
export function estimateVendorCost(provider: string, tokensIn: number, tokensOut: number): number | null {
  if (provider === "wafer") return (tokensIn * 0.28 + tokensOut * 0.56) / 1e6;
  if (provider === "deepseek") return (tokensIn * 0.14 + tokensOut * 0.28) / 1e6;
  return null;
}

// Runtime failover: the Ark route, used when the primary dies mid-flight or
// reaches its provider-level request ceiling. Never fires when the primary is
// Ark itself, and never when the primary claims ZDR — an honest failure
// beats a silent non-ZDR fallback.
export function resolveFailover(primary: Upstream): Upstream | null {
  if (primary.provider === "ark" || primary.zdr) return null;
  const arkKey = process.env.ARK_API_KEY;
  if (!arkKey) return null;
  const model = process.env.ARK_MODEL || "deepseek-v4-flash-ga-260731";
  return {
    baseUrl: process.env.ARK_BASE_URL || "https://ark.ap-southeast.bytepluses.com/api/v3",
    apiKey: arkKey,
    model,
    provider: "ark",
    onTarget: isTargetBuild(model),
    zdr: false,
  };
}

// One honest sentence about what is being served right now.
export function servingNote(u: Upstream | null): string {
  if (!u) return "No inference route configured.";
  if (u.onTarget) return u.zdr ? `Serving ${TARGET_LABEL} under required zero data retention.` : `Serving ${TARGET_LABEL}.`;
  return `Serving the ${u.model} snapshot of V4 Flash while ${TARGET_MODEL} provisioning completes.`;
}
