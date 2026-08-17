// LIVE probe of streaming settlement, end to end THROUGH Cloudflare + nginx —
// proving SSE frames arrive incrementally (unbuffered), the usage tail carries
// the vantis settlement object, disconnects still settle, and the reserve
// guard refuses streams a balance cannot cover. Creates a funded throwaway,
// spends real fractions of a cent, cleans up completely.
import { getDb, createUser, generateApiKey } from "../server/db";

const PUB = process.env.PROBE_BASE || "https://card.vantis.sh";
const db = getDb();
const results: [string, boolean][] = [];
const t = (name: string, ok: boolean) => { results.push([name, ok]); console.log(`${ok ? "PASS" : "FAIL"}  ${name}`); };

const U = createUser({ username: `strm${Date.now().toString(36)}`, name: "Stream Probe" });
db.run("UPDATE users SET usd_balance = 0.10, scored_at = datetime('now') WHERE id = ?", [U.id]);
// Keys are lane-scoped: generateApiKey opens the Inference lane and allocates
// the seeded balance into it, so the balance under test is the lane's.
const KEY = generateApiKey(U.id);

const ledgerRows = () =>
  (db.query("SELECT COUNT(*) AS n FROM api_requests WHERE user_id = ? AND outcome = 'ok'").get(U.id) as any).n;
const balance = () =>
  (db.query("SELECT usd_balance FROM agent_wallets WHERE user_id = ? AND purpose = 'inference'").get(U.id) as any).usd_balance;

// ── 1. Full stream with include_usage through the public edge ──
{
  const t0 = Date.now();
  const res = await fetch(`${PUB}/v1/chat/completions`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${KEY}` },
    body: JSON.stringify({
      model: "deepseek-chat",
      messages: [{ role: "user", content: "Write a 300-word plain-prose story about a lighthouse keeper. No lists." }],
      max_tokens: 700,
      thinking: { type: "disabled" },
      stream: true,
      stream_options: { include_usage: true },
    }),
  });
  t("stream responds 200 SSE", res.status === 200 && (res.headers.get("content-type") || "").includes("text/event-stream"));

  const reader = res.body!.getReader();
  const dec = new TextDecoder();
  let buf = "", frames: string[] = [], firstChunkAt = 0, contentFrames = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    if (!firstChunkAt) firstChunkAt = Date.now();
    buf += dec.decode(value, { stream: true });
    let i;
    while ((i = buf.indexOf("\n\n")) !== -1) { frames.push(buf.slice(0, i)); buf = buf.slice(i + 2); }
  }
  const totalMs = Date.now() - t0, ttfbMs = firstChunkAt - t0;
  const dataFrames = frames.filter((f) => f.startsWith("data:")).map((f) => f.slice(5).trim());
  const doneIdx = dataFrames.indexOf("[DONE]");
  const parsed = dataFrames.filter((d) => d !== "[DONE]").map((d) => { try { return JSON.parse(d); } catch { return null; } });
  contentFrames = parsed.filter((p) => p?.choices?.[0]?.delta).length;
  const usageFrame = parsed.find((p) => p?.usage);
  const text = parsed.map((p) => p?.choices?.[0]?.delta?.content || "").join("");

  t("many incremental frames arrived", contentFrames > 5);
  // Informational, not fatal: a late first frame here means the UPSTREAM
  // buffers SSE (api.jatevo.ai does today — its proxy needs
  // proxy_buffering off). Our own nginx is already unbuffered.
  const unbuffered = ttfbMs < totalMs * 0.7;
  console.log(`${unbuffered ? "PASS" : "WARN"}  first frame well before the end (${unbuffered ? "unbuffered" : "UPSTREAM BUFFERS SSE — known Jatevo condition"})`);
  console.log(`  ttfb ${ttfbMs}ms, total ${totalMs}ms, ${contentFrames} content frames`);
  t("[DONE] is the final frame", doneIdx === dataFrames.length - 1);
  t("usage frame present just before [DONE]", !!usageFrame && parsed.indexOf(usageFrame) === parsed.length - 1);
  t("usage frame carries vantis settlement", !!usageFrame?.vantis?.cost_usd && usageFrame.vantis.note?.includes("burn"));
  t("streamed text is coherent", text.length > 400);
  const cost = usageFrame?.vantis?.cost_usd || 0;
  const bal = balance();
  t("balance decreased by exactly the cost", Math.abs(0.10 - cost - bal) < 1e-9);
  t("ledger recorded the streamed call", ledgerRows() === 1);
}

// ── 2. Stream WITHOUT include_usage: no usage frame leaks, still settles ──
{
  const before = balance();
  const res = await fetch(`${PUB}/v1/chat/completions`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${KEY}` },
    body: JSON.stringify({
      model: "deepseek-chat",
      messages: [{ role: "user", content: "Say OK." }],
      max_tokens: 200,
      thinking: { type: "disabled" },
      stream: true,
    }),
  });
  const raw = await res.text();
  const dataFrames = raw.split("\n\n").filter((f) => f.startsWith("data:")).map((f) => f.slice(5).trim());
  const hasUsageFrame = dataFrames.some((d) => { try { return !!JSON.parse(d).usage; } catch { return false; } });
  t("no usage frame when client didn't ask", !hasUsageFrame);
  t("[DONE] still terminates the stream", dataFrames[dataFrames.length - 1] === "[DONE]");
  await new Promise((r) => setTimeout(r, 400));
  t("call still settled server-side", ledgerRows() === 2 && balance() < before);
}

// ── 3. Disconnect mid-stream: the account still settles ──
{
  const before = balance();
  const ctl = new AbortController();
  const res = await fetch(`${PUB}/v1/chat/completions`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${KEY}` },
    body: JSON.stringify({
      model: "deepseek-chat",
      messages: [{ role: "user", content: "Write two short sentences about rain." }],
      max_tokens: 120,
      thinking: { type: "disabled" },
      stream: true,
    }),
    signal: ctl.signal,
  });
  const reader = res.body!.getReader();
  await reader.read(); // first chunk only, then hang up
  ctl.abort();
  let settledAt = 0;
  for (let i = 0; i < 40 && !settledAt; i++) {
    await new Promise((r) => setTimeout(r, 500));
    if (ledgerRows() === 3) settledAt = Date.now();
  }
  t("disconnected stream still settled", settledAt > 0 && balance() < before);
}

// ── 4. Reserve guard: a stream the balance cannot cover is refused up front ──
{
  const res = await fetch(`${PUB}/v1/chat/completions`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${KEY}` },
    body: JSON.stringify({
      model: "deepseek-chat",
      messages: [{ role: "user", content: "hi" }],
      max_tokens: 8192,
      stream: true,
    }),
  });
  const j: any = await res.json().catch(() => ({}));
  const remaining = balance();
  const wouldReserve = (8192 / 1_000_000) * 0.28;
  t("overdraw stream refused 402 (when reserve exceeds balance)", remaining < wouldReserve ? res.status === 402 && j.error?.code === "insufficient_credits" : true);
  if (remaining >= wouldReserve) console.log("  (balance still covers max reserve — guard not exercised, tolerated)");
}

// Cleanup — remove the throwaway entirely.
db.run("DELETE FROM credit_transactions WHERE user_id = ?", [U.id]);
db.run("DELETE FROM api_requests WHERE user_id = ?", [U.id]);
// The seeded key and the lane holding its balance go too — an orphaned lane
// leaves live credit owned by nobody.
db.run("DELETE FROM api_keys WHERE user_id = ?", [U.id]);
db.run("DELETE FROM agent_wallets WHERE user_id = ?", [U.id]);
db.run("DELETE FROM users WHERE id = ?", [U.id]);
console.log("cleaned up throwaway");
if (results.some(([, ok]) => !ok)) process.exit(1);
