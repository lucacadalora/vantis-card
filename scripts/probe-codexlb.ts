// Can the card sit on the codex-lb pool (balancer-gpt.vantis.sh)?
//
// Run this AFTER ChatGPT accounts are connected in the codex-lb dashboard and
// an API key has been minted there:
//
//   CODEXLB_API_KEY=sk-... bun run scripts/probe-codexlb.ts
//
// It exercises the four things the card actually needs, in the shapes the card
// actually sends. Each is a known failure mode on this fleet, not a guess:
//
//   1. roster        — which model ids the pool serves (nothing is hardcoded)
//   2. json_object   — scoring is response_format:{json_object} at ~5KB. The
//                      Jatevo balancer 502s on exactly that shape; DeepSeek on
//                      Ark does not. Unknown for a Responses-API translator.
//   3. streaming     — SSE with stream_options.include_usage, because
//                      settlement needs a real usage frame, not an estimate.
//   4. usage numbers — prompt/completion token counts must come back at all;
//                      a pooled subscription seat may not report them.
//
// Exit code is nonzero if any required capability is missing.

const BASE = process.env.CODEXLB_BASE_URL || "https://balancer-gpt.vantis.sh/v1";
const KEY = process.env.CODEXLB_API_KEY;

if (!KEY) {
  console.error("CODEXLB_API_KEY is not set. Mint a key in the codex-lb dashboard first.");
  process.exit(2);
}

const H = { "Content-Type": "application/json", Authorization: `Bearer ${KEY}` };
let failures = 0;

function report(name: string, ok: boolean, detail: string) {
  console.log(`${ok ? "PASS" : "FAIL"}  ${name.padEnd(22)} ${detail}`);
  if (!ok) failures++;
}

// ── 1. roster ────────────────────────────────────────────────────────────
let model = process.env.CODEXLB_MODEL || "";
try {
  const r = await fetch(`${BASE}/models`, { headers: H });
  const body: any = await r.json();
  const ids: string[] = (body?.data || []).map((m: any) => m.id).filter(Boolean);
  report("roster", r.ok && ids.length > 0, r.ok ? `${ids.length} models: ${ids.slice(0, 6).join(", ")}` : `HTTP ${r.status}`);
  if (!model) model = ids[0] || "";
} catch (e: any) {
  report("roster", false, e.message);
}

if (!model) {
  console.error("\nNo model to probe with. Set CODEXLB_MODEL or connect an account.");
  process.exit(2);
}
console.log(`\nprobing with model: ${model}\n`);

// ── 2. json_object at ~5KB ───────────────────────────────────────────────
// The card's scorer sends an Exa-enriched profile and demands strict JSON.
// Padding to ~5KB reproduces the payload size that breaks the Jatevo balancer.
const padding = "Signal: candidate has shipped production infrastructure. ".repeat(80);
try {
  const t0 = Date.now();
  const r = await fetch(`${BASE}/chat/completions`, {
    method: "POST",
    headers: H,
    body: JSON.stringify({
      model,
      messages: [
        { role: "system", content: `You score developer profiles. Reply with JSON only: {"score": <0-100>, "tier": "<whale|builder|explorer|noise>"}` },
        { role: "user", content: `${padding}\n\nScore this profile.` },
      ],
      response_format: { type: "json_object" },
      max_tokens: 2000,
    }),
  });
  const raw = await r.text();
  let parsed: any = null;
  let content = "";
  try {
    parsed = JSON.parse(raw);
    content = parsed?.choices?.[0]?.message?.content || "";
  } catch { /* non-JSON envelope: reported below */ }

  let isJson = false;
  try { JSON.parse(content); isJson = true; } catch { /* not strict JSON */ }

  report("json_object 5KB", r.ok && isJson,
    r.ok ? (isJson ? `strict JSON in ${Date.now() - t0}ms` : `200 but content was not JSON: ${content.slice(0, 80)}`)
         : `HTTP ${r.status} ${raw.slice(0, 120)}`);

  // ── 4. usage numbers (same call) ──────────────────────────────────────
  const u = parsed?.usage;
  const hasUsage = typeof u?.prompt_tokens === "number" && typeof u?.completion_tokens === "number";
  report("usage accounting", hasUsage,
    hasUsage ? `in=${u.prompt_tokens} out=${u.completion_tokens}` : `absent — settlement would have to estimate: ${JSON.stringify(u)}`);
} catch (e: any) {
  report("json_object 5KB", false, e.message);
}

// ── 3. streaming with a usage frame ──────────────────────────────────────
try {
  const r = await fetch(`${BASE}/chat/completions`, {
    method: "POST",
    headers: H,
    body: JSON.stringify({
      model,
      messages: [{ role: "user", content: "Count to three." }],
      stream: true,
      stream_options: { include_usage: true },
      max_tokens: 64,
    }),
  });
  if (!r.ok || !r.body) {
    report("SSE stream", false, `HTTP ${r.status}`);
  } else {
    let chunks = 0;
    let usageFrame: any = null;
    const reader = r.body.getReader();
    const dec = new TextDecoder();
    let buf = "";
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buf += dec.decode(value, { stream: true });
      const lines = buf.split("\n");
      buf = lines.pop() || "";
      for (const line of lines) {
        if (!line.startsWith("data: ")) continue;
        const data = line.slice(6).trim();
        if (data === "[DONE]") continue;
        chunks++;
        try {
          const frame = JSON.parse(data);
          if (frame?.usage) usageFrame = frame.usage;
        } catch { /* partial frame */ }
      }
    }
    report("SSE stream", chunks > 0, `${chunks} frames`);
    report("stream usage frame", !!usageFrame,
      usageFrame ? JSON.stringify(usageFrame) : "no usage frame — streaming settlement would be blind");
  }
} catch (e: any) {
  report("SSE stream", false, e.message);
}

console.log(failures === 0
  ? "\nAll required capabilities present. The card CAN technically sit on this pool.\n(Whether it SHOULD is the pricing/ToS question, not this script's.)"
  : `\n${failures} capability check(s) failed — the card cannot use this pool as-is.`);
process.exit(failures === 0 ? 0 : 1);
