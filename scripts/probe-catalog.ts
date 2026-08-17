// Probe every candidate catalog model on the live Jatevo route.
//
// A model goes on the public page only if it (a) answers on OUR key and
// (b) has a DOCUMENTED list price. This script settles (a) — and records the
// usage shape each route reports, since billing reads those fields.
//
//   bun run scripts/probe-catalog.ts

const BASE = process.env.JATEVO_BASE_URL || "https://api.jatevo.ai/v1";
const KEY = process.env.JATEVO_API_KEY;
if (!KEY) { console.error("JATEVO_API_KEY missing"); process.exit(1); }

const CANDIDATES = [
  "DeepSeek-V4-Flash-0731",
  "zai/GLM-5.2",
  "kimi/kimi-k3",
  "kimi/kimi-k2.7-code",
  "qwen/qwen3.7-max",
  "nvidia/Nemotron-3-Ultra-550b-a55b",
  "gpt-5.6-sol",
  "gpt-5.6-terra",
  "gpt-5.6-luna",
  "gpt-5.5",
  "gpt-5.4",
  "gpt-5.4-mini",
  // no published rate — probed only to confirm the exclusion is about price,
  // not about reachability
  "spark/gemma-4-26B-A4B",
  "rtx/qwen3.6-35B-A3B-NVFP4",
];

const PROMPT = "Write exactly three short sentences about why load balancers exist.";

interface Row {
  model: string; ok: boolean; status: number; ms: number;
  tin?: number; tout?: number; reasoning?: number; cached?: number | null;
  tps?: number; served?: string; error?: string;
}

async function probe(model: string): Promise<Row> {
  const t0 = performance.now();
  try {
    const res = await fetch(`${BASE}/chat/completions`, {
      method: "POST",
      headers: { Authorization: `Bearer ${KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({ model, messages: [{ role: "user", content: PROMPT }], max_tokens: 400 }),
      signal: AbortSignal.timeout(180_000),
    });
    const ms = Math.round(performance.now() - t0);
    const text = await res.text();
    if (!res.ok) return { model, ok: false, status: res.status, ms, error: text.slice(0, 140) };
    const j = JSON.parse(text);
    const u = j.usage || {};
    const tout = u.completion_tokens ?? 0;
    return {
      model, ok: true, status: res.status, ms,
      tin: u.prompt_tokens, tout,
      reasoning: u.completion_tokens_details?.reasoning_tokens,
      cached: u.prompt_tokens_details?.cached_tokens ?? null,
      tps: tout && ms ? Math.round((tout / (ms / 1000)) * 10) / 10 : undefined,
      served: j.model,
    };
  } catch (err: any) {
    return { model, ok: false, status: 0, ms: Math.round(performance.now() - t0), error: err?.message || String(err) };
  }
}

const rows: Row[] = [];
for (const m of CANDIDATES) {
  const r = await probe(m);
  rows.push(r);
  const tag = r.ok ? "OK " : "XX ";
  console.log(
    `${tag}${m.padEnd(36)} ${String(r.status).padStart(3)} ${String(r.ms).padStart(6)}ms  ` +
    (r.ok
      ? `in=${r.tin} out=${r.tout} reason=${r.reasoning ?? "-"} cached=${r.cached ?? "-"} ${r.tps ?? "-"}tok/s served=${r.served}`
      : r.error)
  );
}

console.log("\n--- summary ---");
console.log(`reachable: ${rows.filter((r) => r.ok).length}/${rows.length}`);
const cacheAware = rows.filter((r) => r.ok && r.cached !== null).map((r) => r.model);
console.log(`report cached_tokens: ${cacheAware.length ? cacheAware.join(", ") : "none"}`);
console.log(`unreachable: ${rows.filter((r) => !r.ok).map((r) => r.model).join(", ") || "none"}`);
