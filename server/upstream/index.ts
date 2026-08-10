// Upstream resolver — the rail serves exactly ONE model: DeepSeek V4 Flash 0731.
//
// Routes are tried in priority order. The first configured one wins:
//   1. JATEVO_*   — api.jatevo.ai, the canonical pooled gateway. The bare
//                   DeepSeek-V4-Flash-0731 id rotates across Wafer, Baseten,
//                   BytePlus, and OpenCode. Provider-prefixed ids deliberately
//                   pin one lane and are reserved for staging diagnostics.
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

// Client-supplied model ids that map onto the single model. Anything else is
// rejected rather than silently rerouted.
const ACCEPTED_ALIASES = new Set([
  TARGET_MODEL,
  "deepseek-v4-flash",
  "deepseek-flash",
  "deepseek-chat",
]);

export function isAcceptedModel(model?: string): boolean {
  if (!model) return true; // default to the one model
  return ACCEPTED_ALIASES.has(model.trim().toLowerCase());
}

// ── STAGING CATALOG ──────────────────────────────────────────────────────
// The multi-model rail, gated to users.staging=1 (today: the founder) while
// it hardens. Rules of the catalog:
//   · Only models the Jatevo gateway actually serves (live roster, Aug 10).
//   · Only rates that are DOCUMENTED product decisions — the DeepSeek routes
//     bill at the card's existing DeepSeek list rate; Kimi K3 fast bills at
//     Wafer's published Kimi-K3 serverless rate ($3/$15 per 1M, read off
//     app.wafer.ai Aug 10 2026). Never an invented number.
//   · Staging calls run on the JATEVO route only and never fail over to Ark
//     (Ark can't serve these ids — an honest 5xx beats a silent model swap).
export interface StagingModel {
  id: string;            // what the client sends
  upstreamModel: string; // what Jatevo serves
  label: string;
  rate: { input: number; output: number }; // USD per 1M tokens
  zdrCapable: boolean;   // route accepts Wafer-ZDR: required
}

export const STAGING_CATALOG: StagingModel[] = [
  { id: "baseten/deepseek-v4-flash-0731", upstreamModel: "baseten/DeepSeek-V4-Flash-0731",
    label: "DeepSeek V4 Flash 0731 — Baseten route", rate: { input: 0.14, output: 0.28 }, zdrCapable: false },
  { id: "byteplus/deepseek-v4-flash-0731", upstreamModel: "byteplus/DeepSeek-V4-Flash-0731",
    label: "DeepSeek V4 Flash 0731 — BytePlus route", rate: { input: 0.14, output: 0.28 }, zdrCapable: false },
  { id: "wafer/deepseek-v4-flash-0731-fast", upstreamModel: "wafer/DeepSeek-V4-Flash-0731-Fast",
    label: "DeepSeek V4 Flash 0731 — Wafer fast tier", rate: { input: 0.14, output: 0.28 }, zdrCapable: true },
  { id: "opencode/deepseek-v4-flash-0731", upstreamModel: "opencode/DeepSeek-V4-Flash-0731",
    label: "DeepSeek V4 Flash 0731 — Opencode route", rate: { input: 0.14, output: 0.28 }, zdrCapable: false },
  { id: "wafer/kimi-k3-fast", upstreamModel: "wafer/kimi-k3-fast",
    label: "Kimi K3 — Wafer fast tier", rate: { input: 3, output: 15 }, zdrCapable: true },
];

export function stagingModelFor(model?: string): StagingModel | undefined {
  if (!model) return undefined;
  const id = model.trim().toLowerCase();
  return STAGING_CATALOG.find((m) => m.id === id);
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

const JATEVO_LANES = new Set(["wafer", "baseten", "byteplus", "opencode"]);

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
