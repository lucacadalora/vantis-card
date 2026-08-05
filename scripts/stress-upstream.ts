// Concurrency stress test for the upstream inference provider.
// Walks a concurrency ladder, measures success rate, latency distribution and
// effective throughput, and reports the first level where the provider starts
// shedding load (429 / 5xx / timeouts).
//
//   bun run scripts/stress-upstream.ts [maxConcurrency]
//
// Cost control: trivial prompt + small max_tokens. V4 Flash is a reasoning
// model so each call still spends ~25-40 tokens; the whole ladder is well
// under a cent.

const BASE = process.env.ARK_BASE_URL || "https://ark.ap-southeast.bytepluses.com/api/v3";
const KEY = process.env.ARK_API_KEY || "";
const MODEL = process.env.ARK_MODEL || "deepseek-v4-flash-260425";
const MAX = parseInt(process.argv[2] || "64");
const TIMEOUT_MS = 120_000;

if (!KEY) {
  console.error("ARK_API_KEY missing — source the project .env first");
  process.exit(1);
}

interface Result {
  ok: boolean;
  status: number;
  ms: number;
  tokens: number;
  err?: string;
  rateHeaders?: Record<string, string>;
}

async function oneCall(i: number, maxTokens = 24): Promise<Result> {
  const t0 = performance.now();
  try {
    const res = await fetch(`${BASE}/chat/completions`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${KEY}` },
      body: JSON.stringify({
        model: MODEL,
        messages: [{ role: "user", content: process.env.STRESS_PROMPT ? `${process.env.STRESS_PROMPT} (variant ${i})` : `Reply with the single word OK. (${i})` }],
        max_tokens: maxTokens,
        temperature: 0,
      }),
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    const ms = performance.now() - t0;

    // surface any rate-limit telemetry the provider returns
    const rateHeaders: Record<string, string> = {};
    res.headers.forEach((v, k) => {
      if (/ratelimit|retry-after|x-request-id|quota/i.test(k)) rateHeaders[k] = v;
    });

    if (!res.ok) {
      const body = await res.text();
      return { ok: false, status: res.status, ms, tokens: 0, err: body.slice(0, 160), rateHeaders };
    }
    const data = await res.json();
    return { ok: true, status: 200, ms, tokens: data.usage?.total_tokens || 0, rateHeaders };
  } catch (err: any) {
    return { ok: false, status: 0, ms: performance.now() - t0, tokens: 0, err: err.name === "TimeoutError" ? "timeout" : err.message?.slice(0, 120) };
  }
}

const pct = (arr: number[], p: number) => {
  if (!arr.length) return 0;
  const s = [...arr].sort((a, b) => a - b);
  return s[Math.min(s.length - 1, Math.floor((p / 100) * s.length))];
};

async function level(n: number) {
  const t0 = performance.now();
  const results = await Promise.all(Array.from({ length: n }, (_, i) => oneCall(i)));
  const wall = (performance.now() - t0) / 1000;

  const ok = results.filter((r) => r.ok);
  const lat = ok.map((r) => r.ms);
  const tokens = results.reduce((a, r) => a + r.tokens, 0);

  const byStatus: Record<string, number> = {};
  for (const r of results) {
    if (r.ok) continue;
    const k = r.status === 0 ? r.err || "network" : String(r.status);
    byStatus[k] = (byStatus[k] || 0) + 1;
  }

  const headers = results.find((r) => r.rateHeaders && Object.keys(r.rateHeaders).length)?.rateHeaders;

  return {
    concurrency: n,
    ok: ok.length,
    failed: n - ok.length,
    successPct: +((ok.length / n) * 100).toFixed(1),
    wallSec: +wall.toFixed(2),
    throughputRps: +(ok.length / wall).toFixed(2),
    tokensPerSec: +(tokens / wall).toFixed(1),
    p50ms: Math.round(pct(lat, 50)),
    p95ms: Math.round(pct(lat, 95)),
    maxMs: Math.round(Math.max(0, ...lat)),
    errors: byStatus,
    rateHeaders: headers,
  };
}

// Sustained mode: hold a fixed number of workers in flight for N seconds.
// A burst ladder only proves the provider absorbs spikes; a sustained run is
// what reveals a per-minute quota.
if (process.env.SUSTAIN_SEC) {
  const secs = parseInt(process.env.SUSTAIN_SEC);
  const conc = parseInt(process.env.SUSTAIN_CONC || "64");
  const outTokens = parseInt(process.env.SUSTAIN_MAX_TOKENS || "24");
  console.log(`Sustained: ${conc} workers for ${secs}s, max_tokens=${outTokens}, model ${MODEL}\n`);

  const deadline = Date.now() + secs * 1000;
  let done = 0, failed = 0, tokens = 0;
  const lats: number[] = [];
  const errs: Record<string, number> = {};
  const t0 = performance.now();

  const worker = async () => {
    while (Date.now() < deadline) {
      const r = await oneCall(done, outTokens);
      if (r.ok) { done++; lats.push(r.ms); tokens += r.tokens; }
      else { failed++; const k = r.status === 0 ? (r.err || "network") : String(r.status); errs[k] = (errs[k] || 0) + 1; }
    }
  };
  await Promise.all(Array.from({ length: conc }, worker));
  const wall = (performance.now() - t0) / 1000;

  console.log(`completed:   ${done} ok, ${failed} failed  (${((done / (done + failed)) * 100).toFixed(1)}% success)`);
  console.log(`throughput:  ${(done / wall).toFixed(2)} req/s · ${(tokens / wall).toFixed(0)} tok/s`);
  console.log(`latency:     p50 ${Math.round(pct(lats, 50))}ms · p95 ${Math.round(pct(lats, 95))}ms · max ${Math.round(Math.max(...lats))}ms`);
  console.log(`errors:      ${Object.keys(errs).length ? JSON.stringify(errs) : "none"}`);
  console.log(`tokens:      ${tokens} total over ${wall.toFixed(1)}s`);
  process.exit(0);
}

const LADDER = process.env.LADDER
  ? process.env.LADDER.split(",").map((x) => parseInt(x.trim())).filter(Boolean)
  : [1, 2, 4, 8, 16, 32, 64, 128, 256].filter((n) => n <= MAX);

console.log(`Stress: ${MODEL} @ ${BASE}`);
console.log(`Ladder: ${LADDER.join(", ")}  (total ${LADDER.reduce((a, b) => a + b, 0)} requests)\n`);
console.log("conc  ok/total   succ%   wall_s   req/s   tok/s    p50ms    p95ms    max_ms   errors");

const rows: any[] = [];
for (const n of LADDER) {
  const r = await level(n);
  rows.push(r);
  console.log(
    `${String(r.concurrency).padStart(4)}  ${String(r.ok + "/" + r.concurrency).padStart(8)}  ${String(r.successPct).padStart(6)}  ${String(r.wallSec).padStart(7)}  ${String(r.throughputRps).padStart(6)}  ${String(r.tokensPerSec).padStart(6)}  ${String(r.p50ms).padStart(7)}  ${String(r.p95ms).padStart(7)}  ${String(r.maxMs).padStart(8)}   ${Object.keys(r.errors).length ? JSON.stringify(r.errors) : "-"}`
  );
  if (r.rateHeaders) console.log(`      rate headers: ${JSON.stringify(r.rateHeaders)}`);
  // brief pause so a burst limiter refills between levels
  await new Promise((res) => setTimeout(res, 3000));
}

// where does it break?
const firstDegraded = rows.find((r) => r.successPct < 100);
const peak = rows.reduce((a, b) => (b.throughputRps > a.throughputRps ? b : a));

console.log("\n── summary ──");
console.log(`peak throughput: ${peak.throughputRps} req/s at concurrency ${peak.concurrency} (${peak.tokensPerSec} tok/s)`);
if (firstDegraded) {
  console.log(`first degradation: concurrency ${firstDegraded.concurrency} → ${firstDegraded.successPct}% success, errors ${JSON.stringify(firstDegraded.errors)}`);
} else {
  console.log(`no degradation observed up to concurrency ${LADDER[LADDER.length - 1]} — the ceiling is higher than this test`);
}
const lastClean = [...rows].reverse().find((r) => r.successPct === 100);
if (lastClean) console.log(`highest fully-clean level: ${lastClean.concurrency} concurrent (p95 ${lastClean.p95ms}ms)`);
console.log(`total tokens spent: ${rows.reduce((a, r) => a + (r.tokensPerSec * r.wallSec), 0).toFixed(0)}`);
