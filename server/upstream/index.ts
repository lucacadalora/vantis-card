// Upstream resolver — the rail serves exactly ONE model: DeepSeek V4 Flash 0731.
//
// Routes are tried in priority order. The first configured one wins:
//   1. DEEPSEEK_* — first-party api.deepseek.com, serves 0731 itself
//   2. ARK_*      — BytePlus ModelArk, currently only carries the 260425
//                   snapshot of V4 Flash (0731 404s there as of Aug 5 2026)
//
// Until a route that actually carries 0731 is configured, the endpoint stays
// live on the nearest available snapshot and says so — in the API response,
// on /burn/stats, and on the site. It must never claim to serve 0731 while
// serving something else.

export const TARGET_MODEL = "deepseek-v4-flash-0731";
export const TARGET_LABEL = "DeepSeek V4 Flash 0731";

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

export interface Upstream {
  baseUrl: string;
  apiKey: string;
  model: string;        // what we actually send upstream
  provider: string;
  onTarget: boolean;    // true only when the upstream really serves 0731
}

export function resolveUpstream(): Upstream | null {
  const dsKey = process.env.DEEPSEEK_API_KEY;
  if (dsKey) {
    return {
      baseUrl: process.env.DEEPSEEK_BASE_URL || "https://api.deepseek.com/v1",
      apiKey: dsKey,
      model: process.env.DEEPSEEK_MODEL || TARGET_MODEL,
      provider: "deepseek",
      onTarget: (process.env.DEEPSEEK_MODEL || TARGET_MODEL) === TARGET_MODEL,
    };
  }

  const arkKey = process.env.ARK_API_KEY;
  if (arkKey) {
    const model = process.env.ARK_MODEL || "deepseek-v4-flash-260425";
    return {
      baseUrl: process.env.ARK_BASE_URL || "https://ark.ap-southeast.bytepluses.com/api/v3",
      apiKey: arkKey,
      model,
      provider: "ark",
      onTarget: model === TARGET_MODEL,
    };
  }

  return null;
}

// One honest sentence about what is being served right now.
export function servingNote(u: Upstream | null): string {
  if (!u) return "No inference route configured.";
  if (u.onTarget) return `Serving ${TARGET_LABEL}.`;
  return `Serving the ${u.model} snapshot of V4 Flash while ${TARGET_MODEL} provisioning completes.`;
}
