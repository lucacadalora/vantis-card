// Measure real output throughput per catalog model, so the models page can
// carry a speed figure that was observed rather than repeated.
//
// Method: 3 runs per model, long generation (600 max_tokens) so per-request
// overhead stops dominating, median tok/s reported. Reasoning tokens COUNT as
// output — they are billed and they are time on the wire.
//
//   bun run scripts/measure-speed.ts

const BASE = process.env.JATEVO_BASE_URL || "https://api.jatevo.ai/v1";
const KEY = process.env.JATEVO_API_KEY!;
const RUNS = 3;

const { publicModels } = await import("../server/upstream/catalog");
const MODELS = publicModels().map((m) => m.upstreamModel);

const PROMPT =
  "Explain, in careful detail, how a token bucket rate limiter works: the " +
  "refill maths, why burst allowance exists, how it differs from a sliding " +
  "window, and what an API gateway should return when the bucket is empty.";

async function once(model: string): Promise<number | null> {
  const t0 = performance.now();
  try {
    const res = await fetch(`${BASE}/chat/completions`, {
      method: "POST",
      headers: { Authorization: `Bearer ${KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({ model, messages: [{ role: "user", content: PROMPT }], max_tokens: 600 }),
      signal: AbortSignal.timeout(240_000),
    });
    if (!res.ok) return null;
    const j = await res.json();
    const secs = (performance.now() - t0) / 1000;
    const out = j.usage?.completion_tokens ?? 0;
    return out > 50 ? out / secs : null; // too-short answers say nothing about speed
  } catch { return null; }
}

const median = (xs: number[]) => {
  const s = [...xs].sort((a, b) => a - b);
  return s.length % 2 ? s[(s.length - 1) / 2] : (s[s.length / 2 - 1] + s[s.length / 2]) / 2;
};

console.log(`model                                 median   min    max   n`);
for (const m of MODELS) {
  const samples: number[] = [];
  for (let i = 0; i < RUNS; i++) {
    const v = await once(m);
    if (v) samples.push(v);
  }
  if (!samples.length) { console.log(`${m.padEnd(36)}  no usable sample`); continue; }
  console.log(
    `${m.padEnd(36)} ${median(samples).toFixed(1).padStart(6)} ${Math.min(...samples).toFixed(1).padStart(6)} ` +
    `${Math.max(...samples).toFixed(1).padStart(6)}  ${samples.length}`
  );
}
