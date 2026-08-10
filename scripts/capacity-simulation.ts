// Production capacity simulation for the Vantis Card inference rail.
//
// The harness can hit the public Card edge or Jatevo directly, exercise plain
// JSON, SSE streaming, or a complete two-turn tool loop, and report latency,
// throughput, error codes, rate-limit telemetry, and the actual Jatevo lanes.
// It never prints API keys or prompt/response bodies.
//
// Examples:
//   SIM_TARGET=jatevo SIM_MODE=simple SIM_CONCURRENCY=64 bun run scripts/capacity-simulation.ts
//   SIM_TARGET=card SIM_MODE=stream SIM_CONCURRENCY=64 bun run scripts/capacity-simulation.ts
//   SIM_TARGET=card SIM_MODE=agentic SIM_CONCURRENCY=25 bun run scripts/capacity-simulation.ts

type Mode = "simple" | "stream" | "agentic";
type Target = "card" | "jatevo";

type CallResult = {
  ok: boolean;
  status: number;
  error: string | null;
  totalMs: number;
  firstFrameMs: number | null;
  requests: number;
  tokens: number;
  lanes: string[];
  models: string[];
  rateLimit: number | null;
  rateRemaining: number | null;
  upstreamRemaining: number | null;
};

const target = (process.env.SIM_TARGET || "jatevo").toLowerCase() as Target;
const mode = (process.env.SIM_MODE || "simple").toLowerCase() as Mode;
const concurrency = Math.max(1, parseInt(process.env.SIM_CONCURRENCY || "16"));
const totalSessions = Math.max(concurrency, parseInt(process.env.SIM_SESSIONS || String(concurrency)));
const durationSec = Math.max(0, parseInt(process.env.SIM_DURATION_SEC || "0"));
const maxTokens = Math.max(4, parseInt(process.env.SIM_MAX_TOKENS || (mode === "agentic" ? "1024" : "16")));
const agentMaxTurns = Math.max(2, parseInt(process.env.SIM_AGENT_MAX_TURNS || "4"));
const timeoutMs = Math.max(5_000, parseInt(process.env.SIM_TIMEOUT_MS || "120000"));
const inputKb = Math.max(0, parseInt(process.env.SIM_INPUT_KB || "0"));

if (!(["card", "jatevo"] as string[]).includes(target)) throw new Error(`Unsupported SIM_TARGET: ${target}`);
if (!(["simple", "stream", "agentic"] as string[]).includes(mode)) throw new Error(`Unsupported SIM_MODE: ${mode}`);

const base = target === "card"
  ? (process.env.SIM_BASE_URL || "https://card.vantis.sh/v1")
  : (process.env.SIM_BASE_URL || process.env.JATEVO_BASE_URL || "https://api.jatevo.ai/v1");
const key = process.env.SIM_API_KEY || (target === "card" ? process.env.VANTIS_CARD_API_KEY : process.env.JATEVO_API_KEY) || "";
const model = process.env.SIM_MODEL || (target === "card" ? "deepseek-v4-flash-0731" : "DeepSeek-V4-Flash-0731");

if (!key) throw new Error(target === "card" ? "VANTIS_CARD_API_KEY or SIM_API_KEY is required" : "JATEVO_API_KEY or SIM_API_KEY is required");

const tool = {
  type: "function",
  function: {
    name: "add_numbers",
    description: "Add two numbers",
    parameters: {
      type: "object",
      properties: { a: { type: "number" }, b: { type: "number" } },
      required: ["a", "b"],
      additionalProperties: false,
    },
  },
};

const filler = inputKb > 0 ? `\nReference context follows. Ignore it for the answer.\n${"vantis capacity reference ".repeat(Math.ceil((inputKb * 1024) / 26)).slice(0, inputKb * 1024)}` : "";

const percentile = (values: number[], p: number) => {
  if (!values.length) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  return sorted[Math.min(sorted.length - 1, Math.floor((p / 100) * sorted.length))];
};

const n = (header: string | null) => header === null || header === "" ? null : Number(header);

function responseMeta(res: Response) {
  return {
    lane: res.headers.get("x-served-by") || null,
    rateLimit: n(res.headers.get("x-ratelimit-limit")),
    rateRemaining: n(res.headers.get("x-ratelimit-remaining")),
    upstreamRemaining: n(res.headers.get("x-upstream-remaining")),
  };
}

function laneFromModel(modelName: string | null | undefined): string | null {
  const value = String(modelName || "").toLowerCase();
  if (!value) return null;
  if (value.includes("deepseek-ai/")) return "baseten";
  if (value.includes("ga-260731")) return "byteplus";
  if (value.includes("0731-fast")) return "wafer";
  if (value === "deepseek-v4-flash") return "opencode";
  return `model:${value}`;
}

async function request(payload: Record<string, any>) {
  const started = performance.now();
  try {
    const res = await fetch(`${base}/chat/completions`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${key}` },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(timeoutMs),
    });
    return { res, started, headersMs: performance.now() - started };
  } catch (err: any) {
    return { res: null, started, headersMs: performance.now() - started, error: err?.name || err?.message || "network_error" };
  }
}

function baseMessages(session: number) {
  return [
    { role: "system", content: `You are a precise production probe. Follow the user's requested output exactly.${filler}` },
    { role: "user", content: `Reply exactly OK. Probe ${session}.` },
  ];
}

async function simpleSession(session: number): Promise<CallResult> {
  const started = performance.now();
  const call = await request({
    model,
    messages: baseMessages(session),
    max_tokens: maxTokens,
    temperature: 0,
    thinking: { type: "disabled" },
  });
  if (!call.res) return failed(0, call.error || "network_error", started, 1);
  const meta = responseMeta(call.res);
  const body: any = await call.res.json().catch(() => ({}));
  const responseModel = body.model || body.vantis?.model_served || null;
  const lane = meta.lane || laneFromModel(body.vantis?.model_served || body.model);
  return {
    ok: call.res.ok && Array.isArray(body.choices),
    status: call.res.status,
    error: call.res.ok ? null : body.error?.code || body.error?.message || `http_${call.res.status}`,
    totalMs: performance.now() - started,
    firstFrameMs: call.headersMs,
    requests: 1,
    tokens: Number(body.usage?.total_tokens || 0),
    lanes: lane ? [lane] : [],
    models: responseModel ? [String(responseModel)] : [],
    rateLimit: meta.rateLimit,
    rateRemaining: meta.rateRemaining,
    upstreamRemaining: meta.upstreamRemaining,
  };
}

type StreamResult = {
  ok: boolean;
  status: number;
  error: string | null;
  firstFrameMs: number | null;
  totalMs: number;
  content: string;
  reasoning: string;
  finish: string | null;
  toolCalls: any[];
  tokens: number;
  model: string | null;
  lane: string | null;
  rateLimit: number | null;
  rateRemaining: number | null;
  upstreamRemaining: number | null;
};

async function streamRequest(payload: Record<string, any>): Promise<StreamResult> {
  const started = performance.now();
  const call = await request({ ...payload, stream: true, stream_options: { include_usage: true } });
  if (!call.res) return { ...failed(0, call.error || "network_error", started, 1), content: "", reasoning: "", finish: null, toolCalls: [], model: null, lane: null };
  const meta = responseMeta(call.res);
  if (!call.res.ok || !call.res.body) {
    const body: any = await call.res.json().catch(() => ({}));
    return {
      ok: false, status: call.res.status, error: body.error?.code || body.error?.message || `http_${call.res.status}`,
      firstFrameMs: call.headersMs, totalMs: performance.now() - started, content: "", reasoning: "", finish: null,
      toolCalls: [], tokens: 0, model: null, lane: meta.lane, rateLimit: meta.rateLimit,
      rateRemaining: meta.rateRemaining, upstreamRemaining: meta.upstreamRemaining,
    };
  }

  const reader = call.res.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "", firstFrameMs: number | null = null, content = "", reasoning = "", finish: string | null = null;
  let tokens = 0, responseModel: string | null = null, settlementModel: string | null = null, parseErrors = 0;
  const calls = new Map<number, any>();

  const consume = (raw: string) => {
    for (const line of raw.split(/\r?\n/)) {
      if (!line.startsWith("data:")) continue;
      const data = line.slice(5).trim();
      if (!data || data === "[DONE]") continue;
      let frame: any;
      try { frame = JSON.parse(data); } catch { parseErrors++; continue; }
      if (!firstFrameMs) firstFrameMs = performance.now() - started;
      responseModel = frame.model || responseModel;
      settlementModel = frame.vantis?.model_served || settlementModel;
      tokens = Math.max(tokens, Number(frame.usage?.total_tokens || 0));
      for (const choice of frame.choices || []) {
        const delta = choice.delta || {};
        content += delta.content || "";
        reasoning += delta.reasoning_content || "";
        if (choice.finish_reason) finish = choice.finish_reason;
        for (const part of delta.tool_calls || []) {
          const index = Number(part.index || 0);
          const current = calls.get(index) || { index, id: "", type: "function", function: { name: "", arguments: "" } };
          if (part.id) current.id += part.id;
          if (part.type) current.type = part.type;
          if (part.function?.name) current.function.name += part.function.name;
          if (part.function?.arguments) current.function.arguments += part.function.arguments;
          calls.set(index, current);
        }
      }
    }
  };

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });
    const chunks = buffer.split(/\r?\n\r?\n/);
    buffer = chunks.pop() || "";
    chunks.forEach(consume);
  }
  if (buffer.trim()) consume(buffer);
  const actualModel = settlementModel || responseModel;
  return {
    ok: parseErrors === 0,
    status: call.res.status,
    error: parseErrors ? `sse_parse_errors:${parseErrors}` : null,
    firstFrameMs: firstFrameMs || call.headersMs,
    totalMs: performance.now() - started,
    content, reasoning, finish, toolCalls: [...calls.values()], tokens,
    model: actualModel,
    lane: meta.lane || laneFromModel(actualModel),
    rateLimit: meta.rateLimit, rateRemaining: meta.rateRemaining, upstreamRemaining: meta.upstreamRemaining,
  };
}

async function streamSession(session: number): Promise<CallResult> {
  const result = await streamRequest({
    model,
    messages: baseMessages(session),
    max_tokens: maxTokens,
    temperature: 0,
    thinking: { type: "disabled" },
  });
  return {
    ok: result.ok && result.status === 200 && result.finish !== null,
    status: result.status,
    error: result.error || (result.finish ? null : "missing_finish_reason"),
    totalMs: result.totalMs,
    firstFrameMs: result.firstFrameMs,
    requests: 1,
    tokens: result.tokens,
    lanes: result.lane ? [result.lane] : [],
    models: result.model ? [result.model] : [],
    rateLimit: result.rateLimit, rateRemaining: result.rateRemaining, upstreamRemaining: result.upstreamRemaining,
  };
}

async function agenticSession(session: number): Promise<CallResult> {
  const started = performance.now();
  const messages: any[] = [
    { role: "system", content: `You are a tool-using production probe. Call add_numbers exactly once for the requested arithmetic. After its result arrives, answer with that result and do not call any tool again.${filler}` },
    { role: "user", content: `Use add_numbers to calculate 17 + 25. Probe ${session}.` },
  ];
  let requests = 0, tokens = 0, firstFrameMs: number | null = null;
  let status = 0, finish: string | null = null, lastError: string | null = null;
  let rateLimit: number | null = null, rateRemaining: number | null = null, upstreamRemaining: number | null = null;
  const lanes: string[] = [], models: string[] = [];

  for (let turn = 1; turn <= agentMaxTurns; turn++) {
    const result = await streamRequest({ model, messages, tools: [tool], tool_choice: "auto", max_tokens: maxTokens, temperature: 0 });
    requests++;
    tokens += result.tokens;
    status = result.status;
    finish = result.finish;
    lastError = result.error;
    if (firstFrameMs === null) firstFrameMs = result.firstFrameMs;
    if (result.lane) lanes.push(result.lane);
    if (result.model) models.push(result.model);
    rateLimit = result.rateLimit ?? rateLimit;
    rateRemaining = result.rateRemaining ?? rateRemaining;
    upstreamRemaining = result.upstreamRemaining ?? upstreamRemaining;

    if (!result.ok || result.status !== 200) {
      return { ok: false, status, error: result.error || `turn_${turn}:http_${status}`, totalMs: performance.now() - started,
        firstFrameMs, requests, tokens, lanes, models, rateLimit, rateRemaining, upstreamRemaining };
    }
    if (result.finish === "stop" && result.content.includes("42")) {
      return { ok: true, status, error: null, totalMs: performance.now() - started,
        firstFrameMs, requests, tokens, lanes, models, rateLimit, rateRemaining, upstreamRemaining };
    }
    if (result.finish !== "tool_calls" || !result.toolCalls.length) {
      return { ok: false, status, error: `turn_${turn}:${result.finish || "missing_answer"}`, totalMs: performance.now() - started,
        firstFrameMs, requests, tokens, lanes, models, rateLimit, rateRemaining, upstreamRemaining };
    }

    messages.push({ role: "assistant", content: result.content || null, reasoning_content: result.reasoning, tool_calls: result.toolCalls });
    for (const call of result.toolCalls) messages.push({ role: "tool", tool_call_id: call.id, content: "42" });
  }

  return { ok: false, status, error: lastError || `max_turns:${finish || "unfinished"}`, totalMs: performance.now() - started,
    firstFrameMs, requests, tokens, lanes, models, rateLimit, rateRemaining, upstreamRemaining };
}

function failed(status: number, error: string, started: number, requests: number): CallResult {
  return {
    ok: false, status, error, totalMs: performance.now() - started, firstFrameMs: null, requests, tokens: 0,
    lanes: [], models: [], rateLimit: null, rateRemaining: null, upstreamRemaining: null,
  };
}

const runSession = mode === "agentic" ? agenticSession : mode === "stream" ? streamSession : simpleSession;
const results: CallResult[] = [];
let cursor = 0;
const deadline = durationSec ? Date.now() + durationSec * 1000 : 0;
const started = performance.now();

async function worker() {
  while (true) {
    const session = cursor++;
    if (durationSec ? Date.now() >= deadline : session >= totalSessions) return;
    results.push(await runSession(session));
  }
}

console.log(`Vantis capacity simulation: target=${target} mode=${mode} model=${model}`);
console.log(`workers=${concurrency} ${durationSec ? `duration=${durationSec}s` : `sessions=${totalSessions}`} max_tokens=${maxTokens} input_kb=${inputKb}`);
await Promise.all(Array.from({ length: concurrency }, () => worker()));
const wallSec = (performance.now() - started) / 1000;

const ok = results.filter((r) => r.ok);
const status: Record<string, number> = {};
const errors: Record<string, number> = {};
const errorLanes: Record<string, number> = {};
const lanes: Record<string, number> = {};
const models: Record<string, number> = {};
for (const result of results) {
  status[String(result.status)] = (status[String(result.status)] || 0) + 1;
  if (result.error) {
    errors[result.error] = (errors[result.error] || 0) + 1;
    const lane = result.lanes[result.lanes.length - 1] || "unknown";
    const key = `${result.error}@${lane}`;
    errorLanes[key] = (errorLanes[key] || 0) + 1;
  }
  result.lanes.forEach((lane) => { lanes[lane] = (lanes[lane] || 0) + 1; });
  result.models.forEach((name) => { models[name] = (models[name] || 0) + 1; });
}

const totalRequests = results.reduce((sum, r) => sum + r.requests, 0);
const totalTokens = results.reduce((sum, r) => sum + r.tokens, 0);
const latency = ok.map((r) => r.totalMs);
const ttfb = ok.map((r) => r.firstFrameMs).filter((v): v is number => v !== null);
const rateLimits = results.map((r) => r.rateLimit).filter((v): v is number => v !== null);
const rateRemaining = results.map((r) => r.rateRemaining).filter((v): v is number => v !== null);
const upstreamRemaining = results.map((r) => r.upstreamRemaining).filter((v): v is number => v !== null);

const summary = {
  target, mode, model, workers: concurrency, sessions: results.length, requests: totalRequests,
  success: ok.length, failed: results.length - ok.length,
  successPct: results.length ? +((ok.length / results.length) * 100).toFixed(2) : 0,
  wallSec: +wallSec.toFixed(3), sessionsPerSec: +(ok.length / wallSec).toFixed(2), requestsPerSec: +(totalRequests / wallSec).toFixed(2),
  tokens: totalTokens, tokensPerSec: +(totalTokens / wallSec).toFixed(1),
  latencyMs: { p50: Math.round(percentile(latency, 50)), p95: Math.round(percentile(latency, 95)), p99: Math.round(percentile(latency, 99)), max: Math.round(Math.max(0, ...latency)) },
  firstFrameMs: { p50: Math.round(percentile(ttfb, 50)), p95: Math.round(percentile(ttfb, 95)), max: Math.round(Math.max(0, ...ttfb)) },
  status, errors, errorLanes, lanes, models,
  rateLimit: rateLimits.length ? Math.max(...rateLimits) : null,
  minRateRemaining: rateRemaining.length ? Math.min(...rateRemaining) : null,
  minUpstreamRemaining: upstreamRemaining.length ? Math.min(...upstreamRemaining) : null,
};

console.log(JSON.stringify(summary, null, 2));
if (summary.failed > 0) process.exitCode = 2;
