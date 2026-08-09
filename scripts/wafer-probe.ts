// Wafer route readiness probe. Run AFTER pasting WAFER_API_KEY into .env:
//   cd ~/projects/vantis-card && bun scripts/wafer-probe.ts && sudo systemctl restart vantis-card
// Verifies the route directly against pass.wafer.ai (catalog, ZDR header, the
// reasoning-default contract, streaming usage frame), then — if the SERVICE
// has already been restarted onto Wafer — checks the live rail end to end.
// Spends fractions of a cent on the Wafer account.
import { resolveUpstream, applyUpstreamDefaults } from "../server/upstream";

const results: [string, boolean][] = [];
const t = (name: string, ok: boolean) => { results.push([name, ok]); console.log(`${ok ? "PASS" : "FAIL"}  ${name}`); };

const KEY = process.env.WAFER_API_KEY || "";
if (!KEY) {
  console.log("WAFER_API_KEY is empty — paste the wfr_ key into .env first. Nothing to probe.");
  process.exit(0);
}
const BASE = process.env.WAFER_BASE_URL || "https://pass.wafer.ai/v1";
const MODEL = process.env.WAFER_MODEL || "DeepSeek-V4-Flash-0731-Fast";
const H = { "Content-Type": "application/json", Authorization: `Bearer ${KEY}`, "Wafer-ZDR": "required" };

// 1. Catalog: the model exists and is ZDR-capable.
{
  const d: any = await (await fetch(`${BASE}/models`, { headers: { Authorization: `Bearer ${KEY}` } })).json();
  const m = (d.data || []).find((x: any) => x.id === MODEL);
  t("model present in catalog", !!m);
  t("model is ZDR-capable", m?.zdr_supported === true);
  const pr = m?.wafer?.pricing;
  t("price still $0.28/$0.56 per 1M", pr?.input_cents_per_million === 28 && pr?.output_cents_per_million === 56);
  if (pr && !(pr.input_cents_per_million === 28 && pr.output_cents_per_million === 56)) {
    console.log(`  !! WAFER REPRICED: in ${pr.input_cents_per_million}¢ out ${pr.output_cents_per_million}¢ per 1M — revisit the margin math`);
  }
}

// 2. Resolver picks Wafer and pins the contract.
{
  const up = resolveUpstream();
  t("resolver selects wafer", up?.provider === "wafer" && up.onTarget === true && up.zdr === true);
  const body: any = { model: MODEL, messages: [] };
  applyUpstreamDefaults(body, up!);
  t("reasoning default pinned ON for wafer", body.thinking?.type === "enabled");
  const explicit: any = { model: MODEL, messages: [], reasoning_effort: "none" };
  applyUpstreamDefaults(explicit, up!);
  t("caller's explicit reasoning choice wins", explicit.thinking === undefined);
}

// 3. Real ZDR call — default contract (reasoning on) burns thinking tokens.
{
  const r = await fetch(`${BASE}/chat/completions`, {
    method: "POST", headers: H,
    body: JSON.stringify({ model: MODEL, messages: [{ role: "user", content: "Say hi in three words." }], max_tokens: 400, thinking: { type: "enabled" } }),
    signal: AbortSignal.timeout(60_000),
  });
  const d: any = await r.json();
  t("ZDR-required call succeeds", r.status === 200 && !!d.choices?.[0]?.message);
  const rt = d.usage?.completion_tokens_details?.reasoning_tokens ?? d.usage?.reasoning_tokens;
  t("reasoning tokens burned when enabled", (rt ?? 0) > 0 || (d.choices?.[0]?.message?.reasoning_content || "").length > 0);
}

// 4. Streaming: usage frame arrives (Wafer docs say always on streams).
{
  const r = await fetch(`${BASE}/chat/completions`, {
    method: "POST", headers: H,
    body: JSON.stringify({ model: MODEL, messages: [{ role: "user", content: "Say OK." }], max_tokens: 60, stream: true, stream_options: { include_usage: true } }),
    signal: AbortSignal.timeout(60_000),
  });
  const raw = await r.text();
  const frames = raw.split("\n\n").filter((f) => f.startsWith("data:")).map((f) => f.slice(5).trim());
  const usage = frames.map((f) => { try { return JSON.parse(f); } catch { return null; } }).find((o) => o?.usage);
  t("stream carries usage frame", !!usage?.usage?.completion_tokens);
  t("[DONE] terminates", frames[frames.length - 1] === "[DONE]");
}

// 5. Live rail check — only meaningful after the service restart onto Wafer.
{
  const d: any = await (await fetch("http://127.0.0.1:8240/burn/stats")).json().catch(() => null);
  const onWafer = /zero data retention/i.test(d?.serving || "");
  console.log(onWafer
    ? "rail is LIVE on Wafer (serving note announces ZDR) — run scripts/stream-probe.ts + a scoring re-run next"
    : "rail service not on Wafer yet — restart vantis-card after this probe passes");
}

if (results.some(([, ok]) => !ok)) process.exit(1);
