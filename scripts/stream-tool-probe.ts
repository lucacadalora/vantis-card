// Live agentic-loop regression probe through the public Card edge.
// Proves a streaming tool-call delta survives metering, then feeds the tool
// result back for the second model turn. The throwaway account is removed.
import { createUser, getDb } from "../server/db";

const BASE = process.env.PROBE_BASE || "https://card.vantis.sh";
const db = getDb();
const user = createUser({ username: `agentprobe${Date.now().toString(36)}`, name: "Agentic Probe" });
const key = `vcard_agent_probe_${Date.now().toString(36)}`;
db.run("UPDATE users SET api_key = ?, usd_balance = 0.10, scored_at = datetime('now') WHERE id = ?", [key, user.id]);

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

type Turn = {
  status: number;
  rateLimit: number;
  frames: any[];
  content: string;
  reasoning: string;
  finish: string | null;
  toolCalls: any[];
  error: string | null;
};

async function turn(messages: any[]): Promise<Turn> {
  const res = await fetch(`${BASE}/v1/chat/completions`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${key}` },
    body: JSON.stringify({
      model: "deepseek-v4-flash-0731",
      messages,
      tools: [tool],
      tool_choice: "auto",
      max_tokens: 512,
      temperature: 0,
      stream: true,
      stream_options: { include_usage: true },
    }),
  });
  const raw = await res.text();
  let responseError: string | null = null;
  if (!res.ok) {
    try {
      const parsed = JSON.parse(raw);
      responseError = parsed?.error?.code || parsed?.error?.message || `http_${res.status}`;
    } catch {
      responseError = raw.slice(0, 160) || `http_${res.status}`;
    }
  }
  const frames = raw.split(/\n\n/)
    .filter((x) => x.startsWith("data: "))
    .map((x) => x.slice(6))
    .filter((x) => x !== "[DONE]")
    .map((x) => { try { return JSON.parse(x); } catch { return null; } })
    .filter(Boolean);
  const choices = frames.flatMap((f) => f.choices || []);
  const deltas = choices.map((c) => c.delta || {});
  const calls = new Map<number, any>();
  for (const delta of deltas) {
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
  return {
    status: res.status,
    rateLimit: Number(res.headers.get("X-RateLimit-Limit") || 0),
    frames,
    content: deltas.map((d) => d.content || "").join(""),
    reasoning: deltas.map((d) => d.reasoning_content || "").join(""),
    finish: choices.map((c) => c.finish_reason).find(Boolean) || null,
    toolCalls: [...calls.values()],
    error: responseError,
  };
}

const checks: [string, boolean][] = [];
const check = (name: string, ok: boolean, detail?: unknown) => {
  checks.push([name, ok]);
  console.log(`${ok ? "PASS" : "FAIL"}  ${name}${detail === undefined ? "" : ` — ${JSON.stringify(detail)}`}`);
};

try {
  const baseMessages = [
    { role: "system", content: "You are a tool-using agent. You must call add_numbers for arithmetic." },
    { role: "user", content: "Use the tool to calculate 17 + 25." },
  ];
  const first = await turn(baseMessages);
  check("first streaming turn returns 200", first.status === 200, first.error);
  check("agentic default allows 240 requests per minute", first.rateLimit === 240);
  check("tool-call delta survives Card settlement", first.toolCalls.length > 0);
  check("first turn ends with tool_calls", first.finish === "tool_calls");

  const tc = first.toolCalls[0];
  if (tc) {
    const second = await turn([
      ...baseMessages,
      {
        role: "assistant",
        content: first.content || null,
        reasoning_content: first.reasoning,
        tool_calls: first.toolCalls,
      },
      { role: "tool", tool_call_id: tc.id, content: "42" },
    ]);
    check("second streaming turn returns 200", second.status === 200, second.error);
    check("agent loop produces final answer", second.finish === "stop" && second.content.includes("42"), { finish: second.finish, content: second.content.slice(0, 80), error: second.error });
  }
} finally {
  db.run("DELETE FROM credit_transactions WHERE user_id = ?", [user.id]);
  db.run("DELETE FROM api_requests WHERE user_id = ?", [user.id]);
  db.run("DELETE FROM api_keys WHERE user_id = ?", [user.id]);
  db.run("DELETE FROM agent_wallets WHERE user_id = ?", [user.id]);
  db.run("DELETE FROM users WHERE id = ?", [user.id]);
}

if (checks.some(([, ok]) => !ok)) process.exit(1);
