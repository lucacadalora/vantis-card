// Route race: the ordinary DeepSeek route vs the Wafer (ZDR-pinned) route,
// SAME agentic prompts, streaming, per-call TTFT + decode tok/s.
//
//   A  gateway  model=deepseek-v4-flash-0731                 (what every carded key gets: Jatevo bare id, lane roulette)
//   B  gateway  model=deepseek-v4-flash-0731 + "zdr": true    (staging: bare id + Wafer-ZDR → Jatevo pins the Wafer fast tier)
//   C  jatevo   DeepSeek-V4-Flash-0731                        (raw upstream of A, no gateway)
//   D  jatevo   wafer/DeepSeek-V4-Flash-0731-Fast + Wafer-ZDR (raw upstream of B, no gateway)
//
// Two prompt shapes, identical across routes:
//   step  = a mid-loop coding-agent turn (system + 4 tools + prior tool history) → the model
//           writes a file via write_file, so the "output" is code inside tool-call arguments
//   plan  = the same agent asked to write the implementation inline (no tools) → long prose+code
//
// Modes: reasoning explicitly ON and explicitly OFF (thinking:{type}) so both routes are
// measured under the same contract; the reasoning default differs per lane.
//
// Runs interleave A/B (and C/D) per prompt, alternating order each round, so time-of-day
// drift lands on both sides. Uses a throwaway staging account (removed at exit).
//
//   cd ~/projects/vantis-card && set -a && . ./.env && set +a && bun scripts/route-race.ts
//   env: RUNS=5 DIRECT_RUNS=3 MODES=on,off PROMPTS=step,plan PROBE_BASE=https://card.vantis.sh
//        OUT=/path/results.json  SKIP_DIRECT=1
import { getDb, createUser, generateApiKey } from "../server/db";

const EDGE = process.env.PROBE_BASE || "https://card.vantis.sh";
const JBASE = process.env.JATEVO_BASE_URL || "https://api.jatevo.ai/v1";
const JKEY = process.env.JATEVO_API_KEY || "";
const RUNS = Number(process.env.RUNS || 5);
const DIRECT_RUNS = Number(process.env.DIRECT_RUNS || 3);
const MODES = (process.env.MODES || "on,off").split(",").filter(Boolean) as ("on" | "off")[];
const PROMPTS = (process.env.PROMPTS || "step,plan").split(",").filter(Boolean);
const SKIP_DIRECT = process.env.SKIP_DIRECT === "1";
const OUT = process.env.OUT || "";

// ── throwaway staging account ─────────────────────────────────────────────
const db = getDb();
const user = createUser({ username: `racer${Date.now().toString(36)}`, name: "Route Race" });
db.run("UPDATE users SET usd_balance = 3, scored_at = datetime('now'), score = 60, staging = 1 WHERE id = ?", [user.id]);
const KEY = generateApiKey(user.id);
let cleaned = false;
function cleanup() {
  if (cleaned) return;
  cleaned = true;
  for (const t of ["credit_transactions", "api_requests", "vendor_requests", "api_keys", "agent_wallets", "cards", "exa_enrichments"]) {
    db.run(`DELETE FROM ${t} WHERE user_id = ?`, [user.id]);
  }
  db.run("DELETE FROM users WHERE id = ?", [user.id]);
  console.error(`cleaned throwaway ${user.id}`);
}
process.on("SIGINT", () => { cleanup(); process.exit(130); });
process.on("exit", cleanup);

// ── the workload ──────────────────────────────────────────────────────────
const SYSTEM = [
  "You are Sprocket, an autonomous coding agent operating inside a developer's repository.",
  "You work in a loop: inspect the workspace with tools, decide, act, verify.",
  "Rules:",
  "1. Prefer reading a file before editing it.",
  "2. Make the smallest correct change that fully solves the task.",
  "3. When you write a file, write the COMPLETE file contents — never a diff, never an elision.",
  "4. After code changes, run the project's test command and read the result.",
  "5. Never invent file contents you have not read.",
  "6. Reply with tool calls while work remains; reply in prose only when the task is done or blocked.",
  "7. Be terse. No preamble, no apologies, no restating the task.",
  "Environment: Node 20, CommonJS, Express 4, Jest 29. Test command: `npm test`.",
  "Coding conventions: 2-space indent, single quotes, semicolons, no external deps beyond package.json.",
].join("\n");

const TOOLS = [
  { type: "function", function: { name: "list_dir", description: "List entries of a directory (relative to repo root).", parameters: { type: "object", properties: { path: { type: "string" } }, required: ["path"], additionalProperties: false } } },
  { type: "function", function: { name: "read_file", description: "Read a UTF-8 text file (relative to repo root).", parameters: { type: "object", properties: { path: { type: "string" } }, required: ["path"], additionalProperties: false } } },
  { type: "function", function: { name: "write_file", description: "Create or overwrite a UTF-8 text file with the COMPLETE contents.", parameters: { type: "object", properties: { path: { type: "string" }, content: { type: "string" } }, required: ["path", "content"], additionalProperties: false } } },
  { type: "function", function: { name: "run_command", description: "Run a shell command in the repo root and return stdout+stderr (60s timeout).", parameters: { type: "object", properties: { command: { type: "string" } }, required: ["command"], additionalProperties: false } } },
];

const SERVER_JS = `'use strict';
const express = require('express');
const { logger } = require('./util/logger');
const health = require('./routes/health');
const items = require('./routes/items');

const app = express();
app.set('trust proxy', 1);
app.use(express.json({ limit: '256kb' }));
app.use((req, res, next) => {
  const started = Date.now();
  res.on('finish', () => {
    logger.info({ method: req.method, path: req.path, status: res.statusCode, ms: Date.now() - started });
  });
  next();
});

app.use('/health', health);
app.use('/items', items);

app.use((req, res) => {
  res.status(404).json({ error: 'not_found', path: req.path });
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  logger.error({ err: err.message });
  res.status(500).json({ error: 'internal' });
});

function start(port = process.env.PORT || 3000) {
  return app.listen(port, () => logger.info({ msg: 'listening', port }));
}

if (require.main === module) start();

module.exports = { app, start };
`;

const PACKAGE_JSON = `{
  "name": "items-service",
  "version": "1.4.2",
  "private": true,
  "main": "src/server.js",
  "scripts": {
    "start": "node src/server.js",
    "test": "jest --runInBand",
    "lint": "eslint src"
  },
  "dependencies": {
    "express": "^4.19.2",
    "pino": "^9.0.0"
  },
  "devDependencies": {
    "eslint": "^9.0.0",
    "jest": "^29.7.0",
    "supertest": "^7.0.0"
  }
}
`;

const ITEMS_JS = `'use strict';
const { Router } = require('express');
const router = Router();
const items = new Map();
let seq = 0;

router.get('/', (req, res) => {
  res.json({ items: [...items.values()] });
});

router.post('/', (req, res) => {
  const { name } = req.body || {};
  if (!name || typeof name !== 'string') return res.status(400).json({ error: 'name_required' });
  const item = { id: ++seq, name, createdAt: new Date().toISOString() };
  items.set(item.id, item);
  res.status(201).json(item);
});

router.get('/:id', (req, res) => {
  const item = items.get(Number(req.params.id));
  if (!item) return res.status(404).json({ error: 'not_found' });
  res.json(item);
});

router.delete('/:id', (req, res) => {
  const ok = items.delete(Number(req.params.id));
  res.status(ok ? 204 : 404).end();
});

module.exports = router;
`;

const HEALTH_JS = `'use strict';
const { Router } = require('express');
const router = Router();
router.get('/', (req, res) => {
  res.json({ ok: true, uptime: process.uptime() });
});
module.exports = router;
`;

const LOGGER_JS = `'use strict';
const pino = require('pino');
const logger = pino({ level: process.env.LOG_LEVEL || (process.env.NODE_ENV === 'test' ? 'silent' : 'info') });
module.exports = { logger };
`;

const ITEMS_TEST_JS = `'use strict';
const request = require('supertest');
const { app } = require('../src/server');

describe('items', () => {
  it('creates and lists', async () => {
    const created = await request(app).post('/items').send({ name: 'widget' }).expect(201);
    expect(created.body).toMatchObject({ name: 'widget' });
    const list = await request(app).get('/items').expect(200);
    expect(list.body.items.length).toBeGreaterThan(0);
  });
  it('rejects a missing name', async () => {
    await request(app).post('/items').send({}).expect(400);
  });
  it('404s an unknown id', async () => {
    await request(app).get('/items/999999').expect(404);
  });
});
`;

const HEALTH_TEST_JS = `'use strict';
const request = require('supertest');
const { app } = require('../src/server');

it('health is ok', async () => {
  const res = await request(app).get('/health').expect(200);
  expect(res.body.ok).toBe(true);
});
`;

const ESLINTRC = `{
  "root": true,
  "env": { "node": true, "es2022": true, "jest": true },
  "extends": "eslint:recommended",
  "parserOptions": { "ecmaVersion": 2022, "sourceType": "script" },
  "rules": { "quotes": ["error", "single"], "semi": ["error", "always"], "indent": ["error", 2] }
}
`;

const TASK =
  "Task: add a per-IP token-bucket rate limiter to this service — 60 requests per minute sustained, burst of 20, " +
  "keyed on req.ip, and over-limit requests get 429 with a Retry-After header (seconds, integer) and JSON body " +
  "{ error: 'rate_limited' }. Put the middleware in src/rateLimit.js (export a factory `rateLimit({ perMinute, burst })` " +
  "and a `_reset()` helper for tests), mount it in src/server.js before the routes, and keep all existing routes working.";

function stepMessages() {
  return [
    { role: "system", content: SYSTEM },
    { role: "user", content: TASK },
    { role: "assistant", content: "", tool_calls: [{ id: "call_1", type: "function", function: { name: "list_dir", arguments: JSON.stringify({ path: "src" }) } }] },
    { role: "tool", tool_call_id: "call_1", content: "server.js\nroutes/\nroutes/health.js\nroutes/items.js\nutil/\nutil/logger.js" },
    { role: "assistant", content: "", tool_calls: [{ id: "call_2", type: "function", function: { name: "read_file", arguments: JSON.stringify({ path: "src/server.js" }) } }] },
    { role: "tool", tool_call_id: "call_2", content: SERVER_JS },
    { role: "assistant", content: "", tool_calls: [{ id: "call_3", type: "function", function: { name: "read_file", arguments: JSON.stringify({ path: "package.json" }) } }] },
    { role: "tool", tool_call_id: "call_3", content: PACKAGE_JSON },
    { role: "assistant", content: "", tool_calls: [{ id: "call_4", type: "function", function: { name: "read_file", arguments: JSON.stringify({ path: "src/routes/items.js" }) } }] },
    { role: "tool", tool_call_id: "call_4", content: ITEMS_JS },
    { role: "assistant", content: "", tool_calls: [{ id: "call_5", type: "function", function: { name: "read_file", arguments: JSON.stringify({ path: "src/routes/health.js" }) } }] },
    { role: "tool", tool_call_id: "call_5", content: HEALTH_JS },
    { role: "assistant", content: "", tool_calls: [{ id: "call_6", type: "function", function: { name: "read_file", arguments: JSON.stringify({ path: "src/util/logger.js" }) } }] },
    { role: "tool", tool_call_id: "call_6", content: LOGGER_JS },
    { role: "assistant", content: "", tool_calls: [{ id: "call_7", type: "function", function: { name: "list_dir", arguments: JSON.stringify({ path: "." }) } }] },
    { role: "tool", tool_call_id: "call_7", content: ".eslintrc.json\n.gitignore\npackage.json\npackage-lock.json\nsrc/\ntest/\ntest/health.test.js\ntest/items.test.js" },
    { role: "assistant", content: "", tool_calls: [
      { id: "call_8", type: "function", function: { name: "read_file", arguments: JSON.stringify({ path: "test/items.test.js" }) } },
      { id: "call_9", type: "function", function: { name: "read_file", arguments: JSON.stringify({ path: "test/health.test.js" }) } },
      { id: "call_10", type: "function", function: { name: "read_file", arguments: JSON.stringify({ path: ".eslintrc.json" }) } },
    ] },
    { role: "tool", tool_call_id: "call_8", content: ITEMS_TEST_JS },
    { role: "tool", tool_call_id: "call_9", content: HEALTH_TEST_JS },
    { role: "tool", tool_call_id: "call_10", content: ESLINTRC },
  ];
}

function planMessages() {
  return [
    { role: "system", content: SYSTEM },
    { role: "user", content:
      TASK + "\n\nBefore touching any file, write out — inline in your reply, as complete code with brief comments — " +
      "(1) the full src/rateLimit.js you intend to create, (2) the full src/rateLimit.test.js (Jest + supertest) covering " +
      "under-limit, burst exhaustion, the 429 shape and Retry-After, and refill over time using fake timers, and " +
      "(3) the exact edit to src/server.js. Then list the exact tool calls you will make, in order. Do not call tools in this reply." },
  ];
}

type Shape = { name: string; body: () => any };
const SHAPES: Record<string, Shape> = {
  step: { name: "step", body: () => ({ messages: stepMessages(), tools: TOOLS, tool_choice: "auto", max_tokens: 2400 }) },
  plan: { name: "plan", body: () => ({ messages: planMessages(), max_tokens: 2400 }) },
};

// ── routes ────────────────────────────────────────────────────────────────
type Route = { id: string; label: string; url: string; headers: Record<string, string>; model: string; extra: Record<string, any>; via: "gateway" | "jatevo" };
const ROUTES: Record<string, Route> = {
  A: { id: "A", label: "gateway · deepseek-v4-flash-0731 (ordinary)", url: `${EDGE}/v1/chat/completions`, headers: { Authorization: `Bearer ${KEY}` }, model: "deepseek-v4-flash-0731", extra: {}, via: "gateway" },
  B: { id: "B", label: "gateway · deepseek-v4-flash-0731 + zdr:true (Wafer)", url: `${EDGE}/v1/chat/completions`, headers: { Authorization: `Bearer ${KEY}` }, model: "deepseek-v4-flash-0731", extra: { zdr: true }, via: "gateway" },
  C: { id: "C", label: "jatevo direct · DeepSeek-V4-Flash-0731 (bare)", url: `${JBASE}/chat/completions`, headers: { Authorization: `Bearer ${JKEY}` }, model: "DeepSeek-V4-Flash-0731", extra: {}, via: "jatevo" },
  D: { id: "D", label: "jatevo direct · wafer/DeepSeek-V4-Flash-0731-Fast + Wafer-ZDR", url: `${JBASE}/chat/completions`, headers: { Authorization: `Bearer ${JKEY}`, "Wafer-ZDR": "required" }, model: "wafer/DeepSeek-V4-Flash-0731-Fast", extra: {}, via: "jatevo" },
};

// ── one streamed call, fully instrumented ─────────────────────────────────
type Sample = {
  route: string; shape: string; mode: string; run: number; attempt: number;
  status: number; error?: string;
  ttfb_ms: number; ttft_ms: number | null; ttfc_ms: number | null; total_ms: number; span_ms: number | null;
  frames: number; content_chars: number; reasoning_chars: number; toolarg_chars: number;
  prompt_tokens: number | null; completion_tokens: number | null; reasoning_tokens: number | null; cached_tokens: number | null;
  decode_tps: number | null; e2e_tps: number | null;
  model_echo: string | null; finish: string | null; tool_calls: number; burst: boolean;
  lane: string | null; zdr: string | null; served_by: string | null; ratelimit_remaining: string | null;
};

function lastVendorRowId(): number {
  const r = db.query("SELECT COALESCE(MAX(rowid),0) AS m FROM vendor_requests WHERE user_id = ?").get(user.id) as any;
  return r?.m ?? 0;
}
async function laneAfter(rowid: number): Promise<{ lane: string | null; vendor: string | null }> {
  for (let i = 0; i < 20; i++) {
    const r = db.query("SELECT vendor, endpoint FROM vendor_requests WHERE user_id = ? AND rowid > ? AND endpoint LIKE 'chat.completions%' ORDER BY rowid DESC LIMIT 1").get(user.id, rowid) as any;
    if (r) { const lane = String(r.endpoint).split(":")[1] || null; return { lane, vendor: r.vendor }; }
    await new Promise((res) => setTimeout(res, 150));
  }
  return { lane: null, vendor: null };
}

async function callOnce(route: Route, shape: Shape, mode: "on" | "off", run: number, attempt: number): Promise<Sample> {
  const body: any = { model: route.model, ...shape.body(), stream: true, stream_options: { include_usage: true }, temperature: 0.2, ...route.extra };
  body.thinking = { type: mode === "on" ? "enabled" : "disabled" };
  const before = route.via === "gateway" ? lastVendorRowId() : 0;
  const t0 = performance.now();
  let res: Response;
  try {
    res = await fetch(route.url, { method: "POST", headers: { "Content-Type": "application/json", ...route.headers }, body: JSON.stringify(body), signal: AbortSignal.timeout(300_000) });
  } catch (e: any) {
    return { route: route.id, shape: shape.name, mode, run, attempt, status: 0, error: e?.message || "fetch_failed", ttfb_ms: 0, ttft_ms: null, ttfc_ms: null, total_ms: performance.now() - t0, span_ms: null, frames: 0, content_chars: 0, reasoning_chars: 0, toolarg_chars: 0, prompt_tokens: null, completion_tokens: null, reasoning_tokens: null, cached_tokens: null, decode_tps: null, e2e_tps: null, model_echo: null, finish: null, tool_calls: 0, burst: false, lane: null, zdr: null, served_by: null, ratelimit_remaining: null };
  }
  const ttfb = performance.now() - t0;
  const zdr = res.headers.get("X-Vantis-ZDR") || res.headers.get("Wafer-ZDR");
  const servedBy = res.headers.get("X-Served-By");
  const rlRemaining = res.headers.get("X-RateLimit-Remaining");
  if (!res.ok) {
    const txt = await res.text().catch(() => "");
    let code = `http_${res.status}`;
    try { const j = JSON.parse(txt); code = j?.error?.code || j?.error?.message || j?.message || code; } catch { code = txt.slice(0, 120) || code; }
    const ra = res.headers.get("Retry-After");
    return { route: route.id, shape: shape.name, mode, run, attempt, status: res.status, error: `${code}${ra ? ` (retry-after ${ra}s)` : ""}`, ttfb_ms: ttfb, ttft_ms: null, ttfc_ms: null, total_ms: performance.now() - t0, span_ms: null, frames: 0, content_chars: 0, reasoning_chars: 0, toolarg_chars: 0, prompt_tokens: null, completion_tokens: null, reasoning_tokens: null, cached_tokens: null, decode_tps: null, e2e_tps: null, model_echo: null, finish: null, tool_calls: 0, burst: false, lane: null, zdr, served_by: servedBy, ratelimit_remaining: rlRemaining };
  }
  const reader = res.body!.getReader();
  const dec = new TextDecoder();
  let buf = "";
  let frames = 0, tFirst: number | null = null, tFirstContent: number | null = null, tLast: number | null = null;
  let content = "", reasoning = "", toolArgs = "";
  let usage: any = null, modelEcho: string | null = null, finish: string | null = null;
  const toolIdx = new Set<number>();
  let apiError: string | null = null;
  const handle = (line: string) => {
    if (!line.startsWith("data:")) return;
    const payload = line.slice(5).trim();
    if (payload === "[DONE]") return;
    let j: any; try { j = JSON.parse(payload); } catch { return; }
    frames++;
    const now = performance.now();
    if (j.error) { apiError = j.error?.code || j.error?.message || "stream_error"; return; }
    if (j.model && !modelEcho) modelEcho = j.model;
    if (j.usage) usage = j.usage;
    for (const ch of j.choices || []) {
      const d = ch.delta || {};
      const rc = d.reasoning_content ?? d.reasoning ?? "";
      const cc = d.content ?? "";
      let tc = "";
      for (const t of d.tool_calls || []) { toolIdx.add(t.index ?? 0); tc += t.function?.arguments || ""; if (t.function?.name) tc += t.function.name; }
      if (rc || cc || tc) { if (tFirst === null) tFirst = now; tLast = now; }
      if ((cc || tc) && tFirstContent === null) tFirstContent = now;
      reasoning += rc; content += cc; toolArgs += tc;
      if (ch.finish_reason) finish = ch.finish_reason;
    }
  };
  let readError: string | null = null;
  try {
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      buf += dec.decode(value, { stream: true });
      let idx;
      while ((idx = buf.indexOf("\n")) >= 0) { const line = buf.slice(0, idx).replace(/\r$/, ""); buf = buf.slice(idx + 1); handle(line); }
    }
    if (buf.trim()) handle(buf.trim());
  } catch (e: any) {
    // a reset mid-stream (edge, gateway restart, upstream death) is a failed
    // sample, not a crashed run — record it and let the retry loop decide
    readError = `stream_${e?.code || e?.name || "read_failed"}`;
  }
  if (readError && !apiError) apiError = readError;
  const tEnd = performance.now();
  const total = tEnd - t0;
  const ct = usage?.completion_tokens ?? null;
  const rt = usage?.completion_tokens_details?.reasoning_tokens ?? usage?.reasoning_tokens ?? null;
  const cached = usage?.prompt_tokens_details?.cached_tokens ?? usage?.prompt_cache_hit_tokens ?? null;
  const span = tFirst !== null && tLast !== null ? tLast - tFirst : null;
  // decode tok/s is only meaningful when the tokens were actually spread over
  // the wire; a whole answer landing in one SSE frame is a burst, not a rate.
  const burst = span !== null && (span < 250 || (ct ?? 0) < 40);
  const decodeTps = ct && span && span > 0 && !burst ? ct / (span / 1000) : null;
  const e2eTps = ct ? ct / (total / 1000) : null;
  let lane: string | null = null;
  if (route.via === "gateway") { const l = await laneAfter(before); lane = l.lane || (l.vendor ? `${l.vendor}:?` : null); }
  else lane = servedBy ? servedBy.toLowerCase() : null;
  return {
    route: route.id, shape: shape.name, mode, run, attempt, status: apiError ? 599 : 200, error: apiError || undefined,
    ttfb_ms: ttfb, ttft_ms: tFirst !== null ? tFirst - t0 : null, ttfc_ms: tFirstContent !== null ? tFirstContent - t0 : null, total_ms: total, span_ms: span,
    frames, content_chars: content.length, reasoning_chars: reasoning.length, toolarg_chars: toolArgs.length,
    prompt_tokens: usage?.prompt_tokens ?? null, completion_tokens: ct, reasoning_tokens: rt, cached_tokens: cached,
    decode_tps: decodeTps, e2e_tps: e2eTps, model_echo: modelEcho, finish, tool_calls: toolIdx.size, burst,
    lane, zdr, served_by: servedBy, ratelimit_remaining: rlRemaining,
  };
}

async function callWithRetry(route: Route, shape: Shape, mode: "on" | "off", run: number): Promise<Sample> {
  let last: Sample | null = null;
  for (let attempt = 1; attempt <= 3; attempt++) {
    const s = await callOnce(route, shape, mode, run, attempt);
    last = s;
    if (s.status === 200) return s;
    const m = /retry-after (\d+)s/.exec(s.error || "");
    const wait = Math.min(20_000, m ? Number(m[1]) * 1000 : 3000 * attempt);
    console.error(`  ${route.id}/${shape.name}/${mode} run${run} attempt${attempt}: ${s.status} ${s.error} — retry in ${wait}ms`);
    await new Promise((r) => setTimeout(r, wait));
  }
  return last!;
}

// ── schedule ──────────────────────────────────────────────────────────────
const samples: Sample[] = [];
const fmt = (n: number | null, d = 0) => (n === null || Number.isNaN(n) ? "—" : n.toFixed(d));
function line(s: Sample) {
  return `${s.route} ${s.shape.padEnd(4)} ${s.mode.padEnd(3)} r${s.run} ${String(s.status).padStart(3)} ` +
    `ttft ${fmt(s.ttft_ms).padStart(5)}ms  ttfc ${fmt(s.ttfc_ms).padStart(5)}ms  total ${fmt(s.total_ms / 1000, 1).padStart(5)}s  ` +
    `out ${String(s.completion_tokens ?? "—").padStart(4)} (reason ${String(s.reasoning_tokens ?? "—").padStart(4)})  ` +
    `decode ${(s.burst ? "burst" : fmt(s.decode_tps, 1)).padStart(6)} tok/s  e2e ${fmt(s.e2e_tps, 1).padStart(6)}  frames ${String(s.frames).padStart(4)}  ` +
    `lane=${s.lane ?? "?"} zdr=${s.zdr ?? "-"} echo=${s.model_echo ?? "-"} finish=${s.finish ?? "-"} tools=${s.tool_calls} chars r/c/t=${s.reasoning_chars}/${s.content_chars}/${s.toolarg_chars}` +
    (s.error ? `  ERR ${s.error}` : "");
}

console.error(`throwaway ${user.id} key ${KEY.slice(0, 12)}…  edge=${EDGE}  runs=${RUNS} direct=${SKIP_DIRECT ? 0 : DIRECT_RUNS} modes=${MODES} prompts=${PROMPTS}`);
const pairs: [string, string][] = [["A", "B"]];
if (!SKIP_DIRECT && JKEY) pairs.push(["C", "D"]);
for (const mode of MODES) {
  for (const shapeName of PROMPTS) {
    const shape = SHAPES[shapeName];
    if (!shape) continue;
    for (const [x, y] of pairs) {
      const n = x === "A" ? RUNS : DIRECT_RUNS;
      for (let run = 1; run <= n; run++) {
        const order = run % 2 === 1 ? [x, y] : [y, x];
        for (const rid of order) {
          const s = await callWithRetry(ROUTES[rid], shape, mode, run);
          samples.push(s);
          console.log(line(s));
          if (OUT) await Bun.write(OUT, JSON.stringify({ partial: true, edge: EDGE, samples }, null, 2));
        }
      }
    }
  }
}

// ── summary ───────────────────────────────────────────────────────────────
const median = (xs: number[]) => { const s = [...xs].sort((a, b) => a - b); return s.length ? (s.length % 2 ? s[(s.length - 1) / 2] : (s[s.length / 2 - 1] + s[s.length / 2]) / 2) : NaN; };
const pick = (xs: Sample[], k: keyof Sample) => xs.map((s) => s[k]).filter((v): v is number => typeof v === "number" && !Number.isNaN(v));
console.log("\n=== summary (medians over successful calls) ===");
console.log(`route shape mode  n/ok  ttft_ms  ttfc_ms  decode_tps  e2e_tps  total_s  out_tok  reason_tok  prompt_tok  lanes`);
const summary: any[] = [];
for (const mode of MODES) for (const shapeName of PROMPTS) for (const rid of Object.keys(ROUTES)) {
  const all = samples.filter((s) => s.route === rid && s.shape === shapeName && s.mode === mode);
  if (!all.length) continue;
  const ok = all.filter((s) => s.status === 200);
  const lanes: Record<string, number> = {};
  for (const s of ok) lanes[s.lane ?? "?"] = (lanes[s.lane ?? "?"] || 0) + 1;
  const row = {
    route: rid, shape: shapeName, mode, n: all.length, ok: ok.length,
    ttft_ms: median(pick(ok, "ttft_ms")), ttfc_ms: median(pick(ok, "ttfc_ms")), decode_tps: median(pick(ok, "decode_tps")), e2e_tps: median(pick(ok, "e2e_tps")),
    total_s: median(pick(ok, "total_ms")) / 1000, out_tok: median(pick(ok, "completion_tokens")), reason_tok: median(pick(ok, "reasoning_tokens")), prompt_tok: median(pick(ok, "prompt_tokens")),
    decode_min: Math.min(...pick(ok, "decode_tps")), decode_max: Math.max(...pick(ok, "decode_tps")),
    lanes, errors: all.filter((s) => s.status !== 200).map((s) => s.error),
  };
  summary.push(row);
  console.log(`${rid}     ${shapeName.padEnd(5)} ${mode.padEnd(4)}  ${row.ok}/${row.n}   ${fmt(row.ttft_ms).padStart(6)}  ${fmt(row.ttfc_ms).padStart(6)}  ${fmt(row.decode_tps, 1).padStart(9)}  ${fmt(row.e2e_tps, 1).padStart(7)}  ${fmt(row.total_s, 1).padStart(6)}  ${fmt(row.out_tok).padStart(6)}  ${fmt(row.reason_tok).padStart(9)}  ${fmt(row.prompt_tok).padStart(9)}  ${JSON.stringify(lanes)}`);
}
if (OUT) {
  await Bun.write(OUT, JSON.stringify({ generated_at: new Date().toISOString(), edge: EDGE, runs: RUNS, direct_runs: DIRECT_RUNS, modes: MODES, prompts: PROMPTS, routes: Object.fromEntries(Object.entries(ROUTES).map(([k, r]) => [k, { label: r.label, model: r.model, extra: r.extra, via: r.via }])), summary, samples }, null, 2));
  console.error(`wrote ${OUT}`);
}
cleanup();
