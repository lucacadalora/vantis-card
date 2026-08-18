// Pure routing regression: pooled Jatevo is primary, its independent Ark key
// takes over during a cooldown, and lane identity remains internal telemetry.

const saved = {
  JATEVO_API_KEY: process.env.JATEVO_API_KEY,
  JATEVO_MODEL: process.env.JATEVO_MODEL,
  ARK_API_KEY: process.env.ARK_API_KEY,
};

process.env.JATEVO_API_KEY = "test-jatevo";
delete process.env.JATEVO_MODEL;
process.env.ARK_API_KEY = "test-ark";

const {
  clearJatevoCooldown,
  codexLbModelFor,
  coolDownJatevo,
  jatevoCooldownSeconds,
  resolveCodexLb,
  resolveFailover,
  resolveUpstream,
  tracedEndpoint,
  normalizeForOpenWeightLanes,
} = await import("../server/upstream");

let failed = false;
const check = (name: string, ok: boolean, detail?: unknown) => {
  console.log(`${ok ? "PASS" : "FAIL"}  ${name}${detail === undefined ? "" : ` — ${JSON.stringify(detail)}`}`);
  if (!ok) failed = true;
};

clearJatevoCooldown();
const primary = resolveUpstream();
check("Jatevo is primary", primary?.provider === "jatevo", primary?.provider);
check("public traffic uses the bare pooled model", primary?.model === "DeepSeek-V4-Flash-0731", primary?.model);
check("Ark is an independent failover", primary ? resolveFailover(primary)?.provider === "ark" : false);

const response = new Response("", { headers: { "X-Served-By": "Wafer" } });
check("Jatevo lane is retained in internal endpoint telemetry", primary ? tracedEndpoint(primary, response, "chat.completions") === "chat.completions:wafer" : false);

coolDownJatevo(30);
check("cooldown is active", jatevoCooldownSeconds() > 0);
check("new requests move directly to Ark during cooldown", resolveUpstream()?.provider === "ark", resolveUpstream()?.provider);

clearJatevoCooldown();
check("Jatevo returns after cooldown", resolveUpstream()?.provider === "jatevo", resolveUpstream()?.provider);

// ── codex-lb pool: staging-only, never in the public chain ───────────────
// The load-bearing property is the NEGATIVE one: setting the key must not
// move public traffic onto pooled ChatGPT seats, which carry no per-token
// cost basis for the burn ledger and are quota-limited.
process.env.CODEXLB_API_KEY = "test-codexlb";
check("codex-lb never enters the public chain", resolveUpstream()?.provider === "jatevo", resolveUpstream()?.provider);
coolDownJatevo(30);
check("codex-lb is not a cooldown fallback either", resolveUpstream()?.provider === "ark", resolveUpstream()?.provider);
clearJatevoCooldown();

check("bare model ids do not reach codex-lb", codexLbModelFor("deepseek-v4-flash") === undefined);
const cl = codexLbModelFor("codexlb/gpt-5.6-sol");
check("codexlb/ prefix routes to the pool", cl?.route === "codexlb", cl?.route);
check("prefix is stripped before dial-out", cl?.upstreamModel === "gpt-5.6-sol", cl?.upstreamModel);
check("pooled seats bill zero, never an invented rate", cl?.rate.input === 0 && cl?.rate.output === 0, cl?.rate);
check("codex-lb never claims the 0731 build", resolveCodexLb("gpt-5.6-sol")?.onTarget === false);

delete process.env.CODEXLB_API_KEY;
check("codex-lb route is dark without a key", resolveCodexLb("gpt-5.6-sol") === null);

// ── the catalog: tiering, access gating, aliases, and the band rule ───────
const { catalogModelFor, publicModels, openAccessModels, allowlistModels, effectiveRate, CATALOG, STAGING_MODELS, GPT_LONG_CONTEXT } =
  await import("../server/upstream/catalog");
const { calculateCost } = await import("../server/credits");

check("the catalog is public by default", publicModels().length === CATALOG.length);
check("open weights and frontier are both served",
  publicModels().some((m) => m.family === "open") && publicModels().some((m) => m.family === "frontier"));
// Luca's call, Aug 13: the open-weights lane is DeepSeek alone. The rail can
// serve more; the catalog deliberately does not. Fails loudly if re-widened.
// (Aug 17 split the same checkpoint into a standard and a fast TIER, so the
// guard is "every open-weights id is DeepSeek", not "exactly one id".)
check("open weights is DeepSeek only",
  publicModels().filter((m) => m.family === "open").length > 0 &&
  publicModels().filter((m) => m.family === "open").every((m) => m.vendor === "DeepSeek" && m.id.startsWith("deepseek-v4-flash-0731")),
  publicModels().filter((m) => m.family === "open").map((m) => m.id));
// The Kimi K3 routes re-checked Aug 19 stay STAGING — visible to staging
// accounts only, never on the public page, never resolvable by a public key.
check("Kimi K3 is staging-only, both Wafer tiers",
  ["wafer/kimi-k3", "wafer/kimi-k3-fast"].every((id) => !catalogModelFor(id, false) && catalogModelFor(id, true)?.tier === "staging"));
check("Kimi K3 staging rates are Wafer's published numbers (read 2026-08-19)",
  JSON.stringify(catalogModelFor("wafer/kimi-k3", true)?.rate) === JSON.stringify({ input: 3, output: 15, cachedInput: 0.3 }) &&
  JSON.stringify(catalogModelFor("wafer/kimi-k3-fast", true)?.rate) === JSON.stringify({ input: 4.5, output: 22.5, cachedInput: 0.45 }));
check("every BILLED model carries a documented price source",
  openAccessModels().every((m) => m.priceSource.length > 8 && m.rate.input > 0 && m.rate.output > 0));
check("no public id collides with another", new Set(publicModels().map((m) => m.id)).size === publicModels().length);

// The default model is what an omitted `model` field gets — never a dearer one.
check("an omitted model resolves to the default rail",
  catalogModelFor(undefined, false)?.id === "deepseek-v4-flash-0731");
check("legacy aliases still resolve to the default",
  ["deepseek-v4-flash", "deepseek-flash", "deepseek-chat"]
    .every((a) => catalogModelFor(a, false)?.id === "deepseek-v4-flash-0731"));
check("only the default model keeps a failover",
  publicModels().filter((m) => m.route === "primary").length === 1);

// Access gating: the load-bearing negatives (Luca, Aug 13: the GPT pool works
// only for allow-listed accounts — lucaxyzz first, approvals after).
check("open-access ids resolve for everyone",
  catalogModelFor("deepseek-v4-flash-0731", false)?.id === "deepseek-v4-flash-0731");
check("allowlist ids do NOT resolve without pool access",
  catalogModelFor("gpt-5.6-luna", false) === undefined && catalogModelFor("gpt-image-2", false) === undefined);
check("staging alone does not unlock the pool lane",
  catalogModelFor("gpt-5.6-luna", true) === undefined);
check("pool accounts reach the allowlist ids",
  allowlistModels().every((m) => catalogModelFor(m.id, false, true)?.id === m.id));
check("the whole GPT family is allowlist-gated",
  publicModels().filter((m) => m.route === "codexlb").every((m) => m.access === "allowlist"));
check("every allowlist id bills zero — a subscription seat has no vendor price",
  allowlistModels().every((m) => m.rate.input === 0 && m.rate.output === 0 && calculateCost(1e6, 1e6, m.rate) === 0));

// Tier gating: the staging negative, unchanged.
check("public accounts CANNOT reach staging ids",
  STAGING_MODELS.every((m) => catalogModelFor(m.id, false) === undefined));
check("staging accounts can", STAGING_MODELS.every((m) => catalogModelFor(m.id, true)?.id === m.id));
check("unknown ids resolve to nothing, never a substitute",
  catalogModelFor("gpt-4o", false) === undefined && catalogModelFor("claude-3", true) === undefined);

// Image input — verified per model against an image whose content the answer
// had to name (scripts/probe-vision.ts), because a 200 alone proves nothing:
// the tencent lane happily returns "I cannot see the image" with HTTP 200.
// gpt-image-2 GENERATES images; it does not take image_url parts, so it sits
// outside this assertion by id, not by accident.
check("the GPT chat family takes images",
  publicModels().filter((m) => m.family === "frontier" && m.id !== "gpt-image-2").every((m) => m.vision));
check("the DeepSeek route is text only",
  catalogModelFor("deepseek-v4-flash-0731", false)!.vision === false);
const { hasImageInput, estimateInputTokens } = await import("../server/gateway");
check("image parts are detected in OpenAI-shaped content",
  hasImageInput([{ role: "user", content: [{ type: "image_url", image_url: { url: "data:image/png;base64,AAA" } }] }]));
check("plain string content is not mistaken for an image",
  !hasImageInput([{ role: "user", content: "just text" }]));
check("the reserve estimate does not scale with a base64 payload", (() => {
  const small = [{ role: "user", content: [{ type: "image_url", image_url: { url: "data:image/png;base64," + "A".repeat(1_000) } }] }];
  const large = [{ role: "user", content: [{ type: "image_url", image_url: { url: "data:image/png;base64," + "A".repeat(400_000) } }] }];
  return estimateInputTokens(small) === estimateInputTokens(large);
})());

// Long-context band — OpenAI's published rule stays on record and correct,
// exercised on a fixture: no live entry carries a band while the GPT lane is
// allow-listed at {0,0}, and a zero rate would make these assertions vacuous.
const billed = { input: 5, output: 30, longContext: GPT_LONG_CONTEXT };
check("short prompts bill the standard band",
  effectiveRate(billed, 100_000).input === 5 && effectiveRate(billed, 100_000).output === 30);
check("prompts past 272K bill 2x input and 1.5x output",
  effectiveRate(billed, 300_000).input === 10 && effectiveRate(billed, 300_000).output === 45);
check("the band re-prices the WHOLE request, not just the excess",
  calculateCost(300_000, 1_000, billed) === Math.round((300_000 / 1e6 * 10 + 1_000 / 1e6 * 45) * 1e6) / 1e6,
  calculateCost(300_000, 1_000, billed));
check("a model with no band is unaffected by prompt size",
  calculateCost(300_000, 1_000, { input: 0.75, output: 4.5 }) === calculateCost(100, 1_000, { input: 0.75, output: 4.5 }) + Math.round((299_900 / 1e6 * 0.75) * 1e6) / 1e6);
check("no live catalog entry carries a band while the lane is unmetered",
  publicModels().every((m) => m.rate.longContext === undefined));
check("billing still reads each model's own rate",
  calculateCost(1e6, 1e6, catalogModelFor("deepseek-v4-flash-0731", false)!.rate) === 0.42 &&
  calculateCost(1e6, 1e6, catalogModelFor("gpt-5.4-mini", false, true)!.rate) === 0);

// Dialect normalizer — every shape here is legal OpenAI that at least one
// Jatevo lane rejects (developer role: surplus/byteplus/tencent; the
// max_tokens+max_completion_tokens pair: byteplus/baseten; null-content
// tool history + tool content parts: opencode).
{
  const body: any = {
    messages: [
      { role: "developer", content: "sys" },
      { role: "user", content: "hi" },
      { role: "assistant", content: null, tool_calls: [{ id: "c1", type: "function", function: { name: "f", arguments: "{}" } }] },
      { role: "tool", tool_call_id: "c1", content: [{ type: "text", text: "12:" }, { type: "text", text: "00" }] },
      { role: "assistant", content: null },
      { role: "user", content: [{ type: "text", text: "keep parts" }] },
    ],
    max_completion_tokens: 77,
  };
  normalizeForOpenWeightLanes(body);
  check("developer role becomes system", body.messages[0].role === "system");
  check("assistant tool-call turn: null content becomes empty string", body.messages[2].content === "" && body.messages[2].tool_calls.length === 1);
  check("tool result: all-text parts joined into a string", body.messages[3].content === "12:00");
  check("assistant null content WITHOUT tool_calls left alone", body.messages[4].content === null);
  check("user content parts untouched", Array.isArray(body.messages[5].content));
  check("max_completion_tokens folded into max_tokens", body.max_tokens === 77 && body.max_completion_tokens === undefined);
  const explicit: any = { messages: [], max_tokens: 5, max_completion_tokens: 99 };
  normalizeForOpenWeightLanes(explicit);
  check("explicit max_tokens wins over max_completion_tokens", explicit.max_tokens === 5 && explicit.max_completion_tokens === undefined);
}

for (const [key, value] of Object.entries(saved)) {
  if (value === undefined) delete process.env[key];
  else process.env[key] = value;
}

if (failed) process.exit(1);
