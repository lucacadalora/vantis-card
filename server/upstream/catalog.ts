// THE MODEL CATALOG — one source of truth for what the rail serves, what it
// costs, and what the site is allowed to say about it.
//
// Everything downstream reads this file: the public /models page, /v1/models,
// the docs, the console, and — decisively — the billing rate that becomes an
// on-chain $VANTIS burn. So it carries two hard rules.
//
// RULE 1 — NEVER AN INVENTED RATE. Every price here is a number some vendor
// published, recorded with its source below. A model we can serve but cannot
// price does not go in the catalog; it stays off the page and off the rail.
// (Excluded on exactly those grounds Aug 13 2026: `spark/gemma-4-26B-A4B` and
// `rtx/qwen3.6-35B-A3B-NVFP4`, both listed "Metered" with no number.)
//
// RULE 2 — NEVER LIST WHAT WE CANNOT SERVE. Every id here answered a real
// call on our own key before it was added (scripts/probe-catalog.ts).
// `qwen/qwen3.7-max` is priced and documented but answered 503
// model_service_unavailable on Aug 13, so it is held out until it is up.
//
// RULE 3 — THE CATALOG IS A PRODUCT DECISION, NOT AN INVENTORY DUMP. The rail
// can serve more than this. Luca's call (Aug 13): open weights = DeepSeek
// ONLY, plus the frontier GPT family. GLM-5.2, Kimi K3, Kimi K2.7 Code and
// Nemotron 3 Ultra all probed clean and priced clean and were still removed —
// do not re-add them because a roster query shows them available. Their
// verified rates are on record in memory if that decision is ever reversed.
//
// PRICE SOURCES, read 2026-08-13:
//   · DeepSeek V4 Flash 0731 → DeepSeek first-party (api-docs.deepseek.com),
//     unchanged since Aug 5 and already the live rail rate.
//     (jatevo.ai/models publishes per-model rates too — that is where the
//     removed open-weights routes were priced from, if they ever come back.
//     Note jatevo.ai/pricing does NOT carry them; it is a quota page.)
//   · GPT-5.x and gpt-image-2 → NOT BILLED (see the allowlist note below).
//     OpenAI's list prices (developers.openai.com/api/docs/pricing) are on
//     record in git history at tag pre-gpt-allowlist if a billed GPT route
//     ever returns.
//
// THE GPT LANE IS ALLOW-LISTED, AND IT BILLS ZERO (decided Aug 13 2026,
// Luca: "it will be only work for my account lucaxyzz and handle that i
// approve/whitelist later"). The GPT family is served by our own ChatGPT
// subscription pool (balancer-gpt.vantis.sh / codex-lb), and a subscription
// seat has no per-token vendor price — so under RULE 1 it cannot carry a
// billed rate, and it doesn't: access:"allowlist" entries are rate {0,0} BY
// CONSTRUCTION — never billed, never burned, never in the weekly on-chain
// settlement. They resolve only for accounts with users.pool_access=1,
// granted one at a time from /admin (the operator's approve list; lucaxyzz
// seeded first). The rows stay on the public /models page as the catalog's
// frontier tier, shown as "Allowlist" with no price.
// History, so nobody "fixes" the ledger: for part of Aug 13 this lane was
// public and billed OpenAI's list price ($12.19 across a handful of users);
// those rows and their burns are real history and stay untouched.

export type Family = "open" | "frontier";
export type Tier = "public" | "staging";
// Who may CALL a public-tier id. "open" (default) = any carded key.
// "allowlist" = only accounts with users.pool_access=1 — the operator's
// per-account approve list for the pooled GPT lane.
export type Access = "open" | "allowlist";

// OpenAI prices a prompt above the threshold at a multiplier on BOTH input and
// output "for the full request" — not just the tokens past the line. Encoded
// as the published multipliers rather than pre-multiplied numbers so the rule
// stays readable against their page.
export interface LongContextBand {
  thresholdInputTokens: number;
  inputMultiplier: number;
  outputMultiplier: number;
}

export interface Rate {
  input: number;  // USD per 1M input tokens
  output: number; // USD per 1M output tokens
  // USD per 1M input tokens the serving route reports as a prompt-cache READ
  // (usage.prompt_tokens_details.cached_tokens / prompt_cache_hit_tokens).
  // Only set when the vendor publishes a cache-read rate; absent = cached
  // tokens bill at the full input rate. Reserves never assume a cache hit.
  cachedInput?: number;
  longContext?: LongContextBand;
}

// Output throughput we MEASURED ourselves, not a vendor claim. Dated because
// it will drift: a figure with no date silently becomes a false one.
export interface Throughput {
  tokensPerSec: number;
  measured: string; // ISO date of the measurement run
}

export interface CatalogModel {
  id: string;             // the stable public id a client sends
  upstreamModel: string;  // what the serving route is asked for
  label: string;
  vendor: string;
  family: Family;
  tier: Tier;
  access?: Access;        // undefined = "open"; "allowlist" = pool_access only
  rate: Rate;
  contextWindow: number | null;
  // Image input. Verified per model with scripts/probe-vision.ts against an
  // image whose content the answer had to name — a 200 proves nothing on its
  // own, because some routes drop the image part and answer from the text.
  vision: boolean;
  throughput?: Throughput;
  blurb: string;
  priceSource: string;
  // "primary" = the DeepSeek rail resolved by resolveUpstream(), with its
  // failover intact. "jatevo" = pinned to the Jatevo gateway, no failover
  // (Ark cannot serve these ids, and a silent model swap is worse than a 503).
  // "codexlb" = our own balancer-gpt.vantis.sh pool (allowlist GPT family).
  route: "primary" | "jatevo" | "codexlb";
  zdrCapable?: boolean;
}

// The published GPT-5.x long-context rule, verbatim: "Prompts with >272K input
// tokens are priced at 2x input and 1.5x output for the full request."
// No current entry carries it — the GPT lane is allow-listed at rate {0,0} —
// but the rule is kept on record for the day a GPT route is billed again.
export const GPT_LONG_CONTEXT: LongContextBand = {
  thresholdInputTokens: 272_000,
  inputMultiplier: 2,
  outputMultiplier: 1.5,
};

// The pool lane's rate, once, so an entry can't drift to a nonzero number
// without touching the named constant next to the rule that forbids it.
const POOL_RATE: Rate = { input: 0, output: 0 };
const POOL_PRICE_SOURCE = "not billed — pooled subscription capacity, no per-token vendor price";

export const CATALOG: CatalogModel[] = [
  // ── open weights ────────────────────────────────────────────────────────
  {
    id: "deepseek-v4-flash-0731",
    upstreamModel: "DeepSeek-V4-Flash-0731",
    label: "DeepSeek V4 Flash 0731",
    vendor: "DeepSeek",
    family: "open",
    tier: "public",
    rate: { input: 0.14, output: 0.28 },
    contextWindow: 1_048_576,
    vision: false, // text only — see the lane table in the header note below
    throughput: { tokensPerSec: 170, measured: "2026-08-13" },
    blurb: "The rail's default. Reasoning on by default, cheapest tokens on the rail, and the only route with a failover behind it.",
    priceSource: "DeepSeek first-party list price (api-docs.deepseek.com)",
    route: "primary",
  },
  // THE FAST TIER — the same 0731 checkpoint on its high-throughput serving
  // tier, split out of the default line because it is priced differently
  // (Luca, Aug 17 2026: "separate the wafer from the whole line… when the
  // zdr/fast toggle on, price is $0.28 $0.56 $0.07 (cache), 2x the normal
  // price"). Rate = the serving tier's published serverless list price, read
  // 2026-08-17 from its public catalog: input 28¢/M, output 56¢/M, cache read
  // 7¢/M — the caller's number and the vendor's number agree. It is also the
  // ZDR-capable route: a `"zdr": true` call on the default id is served HERE
  // (the gateway's ZDR contract pins this tier) and is billed at THIS rate.
  // Throughput is ours, measured through the gateway from this rail
  // (900-token generation, two runs, ~290 tok/s; the vendor's ceiling is
  // "up to 400"). No provider name in the id — the tier is a Vantis id.
  {
    id: "deepseek-v4-flash-0731-fast",
    upstreamModel: "wafer/DeepSeek-V4-Flash-0731-Fast",
    label: "DeepSeek V4 Flash 0731 — Fast",
    vendor: "DeepSeek",
    family: "open",
    tier: "public",
    rate: { input: 0.28, output: 0.56, cachedInput: 0.07 },
    contextWindow: 1_048_576,
    vision: false,
    throughput: { tokensPerSec: 290, measured: "2026-08-17" },
    blurb: "The same checkpoint on the high-throughput tier — up to 400 tok/s. ZDR-capable. Twice the standard rate; cached input at $0.07.",
    priceSource: "Serving tier's published serverless list price (public model catalog, read 2026-08-17: 28/56/7 cents per 1M)",
    route: "jatevo",
    zdrCapable: true,
  },

  // ── frontier ────────────────────────────────────────────────────────────
  {
    id: "gpt-5.6-sol",
    upstreamModel: "gpt-5.6-sol",
    label: "GPT-5.6 Sol",
    vendor: "OpenAI",
    family: "frontier",
    tier: "public",
    access: "allowlist",
    rate: POOL_RATE,
    contextWindow: 372_000,
    vision: true,
    throughput: { tokensPerSec: 50, measured: "2026-08-13" },
    blurb: "The frontier agentic coding model, at the top of the family.",
    priceSource: POOL_PRICE_SOURCE,
    route: "codexlb",
  },
  {
    id: "gpt-5.6-terra",
    upstreamModel: "gpt-5.6-terra",
    label: "GPT-5.6 Terra",
    vendor: "OpenAI",
    family: "frontier",
    tier: "public",
    access: "allowlist",
    rate: POOL_RATE,
    contextWindow: 372_000,
    vision: true,
    throughput: { tokensPerSec: 54, measured: "2026-08-13" },
    blurb: "The balanced 5.6 tier — most of Sol's reach, quicker.",
    priceSource: POOL_PRICE_SOURCE,
    route: "codexlb",
  },
  {
    id: "gpt-5.6-luna",
    upstreamModel: "gpt-5.6-luna",
    label: "GPT-5.6 Luna",
    vendor: "OpenAI",
    family: "frontier",
    tier: "public",
    access: "allowlist",
    rate: POOL_RATE,
    contextWindow: 372_000,
    vision: true,
    throughput: { tokensPerSec: 54, measured: "2026-08-13" },
    blurb: "The light 5.6 tier — fast frontier-family reasoning.",
    priceSource: POOL_PRICE_SOURCE,
    route: "codexlb",
  },
  {
    id: "gpt-5.5",
    upstreamModel: "gpt-5.5",
    label: "GPT-5.5",
    vendor: "OpenAI",
    family: "frontier",
    tier: "public",
    access: "allowlist",
    rate: POOL_RATE,
    contextWindow: 272_000,
    vision: true,
    throughput: { tokensPerSec: 53, measured: "2026-08-13" },
    blurb: "The previous flagship, still the reference for hard general work.",
    priceSource: POOL_PRICE_SOURCE,
    route: "codexlb",
  },
  {
    id: "gpt-5.4",
    upstreamModel: "gpt-5.4",
    label: "GPT-5.4",
    vendor: "OpenAI",
    family: "frontier",
    tier: "public",
    access: "allowlist",
    rate: POOL_RATE,
    contextWindow: 372_000,
    vision: true,
    throughput: { tokensPerSec: 53, measured: "2026-08-13" },
    blurb: "Steady general-purpose workhorse.",
    priceSource: POOL_PRICE_SOURCE,
    route: "codexlb",
  },
  {
    id: "gpt-5.4-mini",
    upstreamModel: "gpt-5.4-mini",
    label: "GPT-5.4 mini",
    vendor: "OpenAI",
    family: "frontier",
    tier: "public",
    access: "allowlist",
    rate: POOL_RATE,
    contextWindow: 272_000,
    vision: true,
    throughput: { tokensPerSec: 66, measured: "2026-08-13" },
    blurb: "High-volume classification, extraction and routing work.",
    priceSource: POOL_PRICE_SOURCE,
    route: "codexlb",
  },

  // ── image generation ──────────────────────────────────────────────────────
  {
    id: "gpt-image-2",
    upstreamModel: "gpt-image-2",
    label: "GPT Image 2",
    vendor: "OpenAI",
    family: "frontier",
    tier: "public",
    access: "allowlist",
    rate: POOL_RATE,
    contextWindow: null,
    vision: false,
    blurb: "State-of-the-art image generation. Takes a text prompt and optional image input, returns a generated image.",
    priceSource: POOL_PRICE_SOURCE,
    route: "codexlb",
  },
];

// ── staging catalog ───────────────────────────────────────────────────────
// Provider-pinned diagnostics: the same DeepSeek build served by each lane, so
// a route can be compared against its siblings without touching public traffic.
// Visible to users.staging=1 only.
export const STAGING_MODELS: CatalogModel[] = [
  ...(["baseten", "byteplus", "opencode"] as const).map((lane) => ({
    id: `${lane}/deepseek-v4-flash-0731`,
    upstreamModel: `${lane}/DeepSeek-V4-Flash-0731`,
    label: `DeepSeek V4 Flash 0731 — ${lane} route`,
    vendor: "DeepSeek",
    family: "open" as Family,
    tier: "staging" as Tier,
    rate: { input: 0.14, output: 0.28 },
    contextWindow: 1_048_576,
    vision: false,
    blurb: `Provider-pinned ${lane} lane of the 0731 build.`,
    priceSource: "DeepSeek first-party list price",
    route: "jatevo" as const,
  })),
  // (The wafer/…-0731-fast staging pin retired Aug 17 2026: the tier is now
  // the PUBLIC `deepseek-v4-flash-0731-fast` above, at its own rate.)
  //
  // KIMI K3 ON THE JATEVO RAIL, re-checked 2026-08-19 (three routes answer on
  // our key; every fact below was measured that day, one call in flight):
  //   · `kimi/kimi-k3` — Jatevo's own line, published $0.75/$3.50 on
  //     jatevo.ai/models. NOT LISTED, even for staging: since Aug 13 the route
  //     has regressed at Jatevo's translation layer — the non-stream
  //     `message.content` is an Anthropic-style thinking block + ~12KB
  //     signature serialised as text AHEAD of the answer, `prompt_tokens` reads
  //     0 (Anthropic `input_tokens` keys leak through), json_object is
  //     unparseable, `thinking:{type:"disabled"}` is ignored, and the image
  //     probe came back blind. Streaming is plain text but still bills zero
  //     input. Re-probe with scripts/probe-catalog.ts before ever listing it.
  //   · `wafer/Kimi-K3` — Wafer's standard serverless tier, passed through by
  //     Jatevo's wafer lane (not in their /v1/models roster, but it serves and
  //     echoes X-Served-By: wafer). Clean on every axis: reasoning_content
  //     separated, thinking toggle + reasoning_effort honoured, tools, 9KB
  //     json_object, image input SEES, `Wafer-ZDR: honored`, cache reads
  //     reported. Reasoning is OFF by default on this tier (the gateway's
  //     applyUpstreamDefaults pins it on for wafer routes). 85 tok/s decode.
  //   · `wafer/kimi-k3-fast` — the same model on Wafer's high-TPS tier, 100
  //     tok/s decode, equally clean — but Wafer's catalog carries
  //     `deprecation_date: 2026-08-17` on it, and it is priced 1.5x the
  //     standard tier. It still serves; expect it to disappear.
  // Rates below = Wafer's public catalog (pass.wafer.ai/v1/models, read
  // 2026-08-19): Kimi-K3 300/1500/30 ¢ per 1M, kimi-k3-fast 450/2250/45.
  // The fast entry had carried the STANDARD tier's $3/$15 since Aug 10 (read
  // off the Wafer dashboard for "Kimi K3") — corrected here to the fast id's
  // own number under RULE 1. Both stay STAGING: Kimi K3 is off the public
  // catalog by Luca's Aug 13 call (RULE 3) — listing it publicly is his
  // decision, not a roster query's.
  {
    id: "wafer/kimi-k3",
    upstreamModel: "wafer/Kimi-K3",
    label: "Kimi K3 — Wafer serverless",
    vendor: "Moonshot AI",
    family: "open",
    tier: "staging",
    rate: { input: 3, output: 15, cachedInput: 0.3 },
    contextWindow: 1_048_576,
    vision: true, // probe-vision SEES (named the red circle + "VANTIS 4271"), 2026-08-19
    throughput: { tokensPerSec: 85, measured: "2026-08-19" },
    blurb: "Wafer's standard serverless Kimi K3 — 1M context, image input, tools, ZDR-capable. Billed at Wafer's published rate; cached input at $0.30.",
    priceSource: "Wafer public catalog (pass.wafer.ai/v1/models, read 2026-08-19: 300/1500/30 cents per 1M)",
    route: "jatevo",
    zdrCapable: true,
  },
  {
    id: "wafer/kimi-k3-fast",
    upstreamModel: "wafer/kimi-k3-fast",
    label: "Kimi K3 — Wafer fast tier (vendor-deprecated 2026-08-17)",
    vendor: "Moonshot AI",
    family: "open",
    tier: "staging",
    rate: { input: 4.5, output: 22.5, cachedInput: 0.45 },
    contextWindow: 1_048_576,
    vision: true, // probe-vision SEES, 2026-08-19
    throughput: { tokensPerSec: 100, measured: "2026-08-19" },
    blurb: "The same Kimi K3 on Wafer's high-TPS tier. Wafer flags this tier deprecated as of 2026-08-17 and prices it 1.5x the standard tier; still serving, may vanish — prefer wafer/kimi-k3.",
    priceSource: "Wafer public catalog (pass.wafer.ai/v1/models, read 2026-08-19: 450/2250/45 cents per 1M; deprecation_date 2026-08-17)",
    route: "jatevo",
    zdrCapable: true,
  },
];

export const publicModels = (): CatalogModel[] => CATALOG.filter((m) => m.tier === "public");
export const openModels = (): CatalogModel[] => publicModels().filter((m) => m.family === "open");
export const frontierModels = (): CatalogModel[] => publicModels().filter((m) => m.family === "frontier");
// The catalog as a given account may CALL it. Listing surfaces (the /models
// page) show everything; calling surfaces (/v1/models, error hints, the
// console) must use these so a key is never pointed at an id it can't run.
export const isAllowlisted = (m: CatalogModel): boolean => m.access === "allowlist";
export const openAccessModels = (): CatalogModel[] => publicModels().filter((m) => !isAllowlisted(m));
export const allowlistModels = (): CatalogModel[] => publicModels().filter(isAllowlisted);
export const callableModels = (pool: boolean): CatalogModel[] => (pool ? publicModels() : openAccessModels());

// Historic short names for the default model. They predate the catalog and
// stay accepted so keys written against the one-model rail keep working.
const ALIASES: Record<string, string> = {
  "deepseek-v4-flash": "deepseek-v4-flash-0731",
  "deepseek-flash": "deepseek-v4-flash-0731",
  "deepseek-chat": "deepseek-v4-flash-0731",
};

// The model a request with no `model` field gets: unchanged from the
// one-model era, so an omitted field never silently picks up a dearer route.
export const DEFAULT_MODEL_ID = "deepseek-v4-flash-0731";
export const defaultModel = (): CatalogModel => CATALOG.find((m) => m.id === DEFAULT_MODEL_ID)!;

// The fast tier of the default build. Requested by id, OR implied by
// `"zdr": true` on the default id (the ZDR route IS this tier) — either way
// the call is billed at this entry's rate and recorded under this id.
export const FAST_MODEL_ID = "deepseek-v4-flash-0731-fast";
export const fastModel = (): CatalogModel => CATALOG.find((m) => m.id === FAST_MODEL_ID)!;
// The two ids that make up the DeepSeek rail — the only ids on which a ZDR
// request means anything (every other catalog route has no ZDR path).
export const isDeepSeekRail = (m: CatalogModel | undefined): boolean =>
  !!m && (m.id === DEFAULT_MODEL_ID || m.id === FAST_MODEL_ID);

// Resolve a client-supplied model id. Open public ids resolve for everyone;
// allowlist ids only for pool accounts; staging ids only for staging
// accounts. Unknown ids return undefined and the caller refuses the request
// rather than rerouting it. Callers that want to tell "gated" apart from
// "unknown" resolve a second time with pool=true.
export function catalogModelFor(model: string | undefined, staging: boolean, pool = false): CatalogModel | undefined {
  if (!model) return defaultModel();
  const raw = model.trim().toLowerCase();
  const id = ALIASES[raw] || raw;
  const pub = CATALOG.find((m) => m.id === id && m.tier === "public");
  if (pub) return isAllowlisted(pub) && !pool ? undefined : pub;
  if (!staging) return undefined;
  return STAGING_MODELS.find((m) => m.id === id);
}

// The effective per-1M rates for a request of this input size — the published
// long-context band applied when the prompt crosses the threshold.
export function effectiveRate(rate: Rate, inputTokens: number): { input: number; output: number } {
  const band = rate.longContext;
  if (!band || inputTokens <= band.thresholdInputTokens) return { input: rate.input, output: rate.output };
  return { input: rate.input * band.inputMultiplier, output: rate.output * band.outputMultiplier };
}
