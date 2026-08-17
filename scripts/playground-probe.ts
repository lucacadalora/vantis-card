// Playground lane probe — a throwaway carded user with a funded Inference
// lane makes ONE REAL billed call through /api/playground/fire, then the
// demo caps and refusal shapes are exercised. Seeds and purges its own user.
// Usage: bun run scripts/playground-probe.ts
import { createUser, createCard, grantCredits, ensurePurposeWallets, fundAgentWallet, getUser, getAgentWallet, getDb } from "../server/db";
import { sessionSetCookie } from "../server/session";

const BASE = process.env.BASE || "http://127.0.0.1:8240";
let pass = 0, fail = 0;
const t = (name: string, ok: boolean, extra = "") => {
  console.log(`${ok ? "PASS" : "FAIL"}  ${name}${extra ? ` — ${extra}` : ""}`);
  ok ? pass++ : fail++;
};

const u = createUser({ username: `pgprobe${Date.now().toString(36)}`, name: "PG Probe" });
createCard(u.id, u.x_username, "explorer", 0, 0, 0.00185);
grantCredits(u.id, 1, "Probe seed (will be purged)");
const lanes = ensurePurposeWallets(u.id, false);
const inf = lanes.find((w: any) => w.purpose === "inference")!;
fundAgentWallet(u.id, inf.id, 0.5);
const cookie = sessionSetCookie("did:privy:pgprobe", u.id).split(";")[0];

const call = (path: string, body?: any) =>
  fetch(`${BASE}${path}`, {
    method: body === undefined ? "GET" : "POST",
    headers: { "Content-Type": "application/json", Cookie: cookie },
    body: body === undefined ? undefined : JSON.stringify(body),
  });

try {
  // meta sees the card + funded lane
  const meta = await (await call("/api/playground/meta")).json();
  t("meta: lane funded", meta.lanes?.inference?.balance_usd === 0.5, `$${meta.lanes?.inference?.balance_usd}`);
  t("meta: playground runs the default model, on target", meta.model?.id === "deepseek-v4-flash-0731" && meta.model?.on_target === true);
  t("meta: chat live, soon-tools honest", meta.tools?.find((x: any) => x.key === "chat")?.status === "live" && meta.tools?.find((x: any) => x.key === "onchain")?.status === "soon");

  // refusals before money moves
  const empty = await call("/api/playground/fire", { prompt: "" });
  t("fire: empty prompt 400", empty.status === 400);
  const anon = await fetch(`${BASE}/api/playground/fire`, { method: "POST", headers: { "Content-Type": "application/json" }, body: "{}" });
  t("fire: anonymous 401", anon.status === 401);

  // ONE REAL CALL — billed to the lane
  const before = getAgentWallet(inf.id)!;
  const r = await call("/api/playground/fire", { prompt: "Reply with exactly: PROBE OK" });
  const j = await r.json();
  t("fire: 200 with text", r.status === 200 && typeof j.text === "string" && j.text.length > 0, JSON.stringify(j.text || j.error).slice(0, 60));
  t("fire: real usage + cost", j.tokens_out > 0 && j.cost_usd > 0, `${j.tokens_out} tok, $${j.cost_usd}`);
  t("fire: burn recorded", j.vantis_burned > 0, `${j.vantis_burned} VANTIS @ $${j.vantis_price_usd}`);
  const after = getAgentWallet(inf.id)!;
  t("fire: lane debited exactly", Math.abs((before.usd_balance - after.usd_balance) - j.cost_usd) < 1e-9, `$${before.usd_balance} → $${after.usd_balance}`);
  t("fire: owner aggregates burn", (getUser(u.id)!.vantis_burned || 0) > 0);
  const metered: any = getDb().query("SELECT * FROM api_requests WHERE user_id = ? AND endpoint = '/api/playground/fire' AND outcome = 'ok'").get(u.id);
  t("fire: metered as session", !!metered && metered.key_prefix === "session", metered?.key_prefix);

  // lane empty → 402 with the honest shape
  const drain = getDb();
  drain.run("UPDATE agent_wallets SET usd_balance = 0 WHERE id = ?", [inf.id]);
  const broke = await call("/api/playground/fire", { prompt: "hi" });
  const bj = await broke.json();
  t("fire: empty lane 402 lane_empty", broke.status === 402 && bj.error === "lane_empty", `needs $${bj.required_usd}`);

  // search demo: works, then cap holds
  const s1 = await call("/api/playground/search", { query: "vantis.sh" });
  const sj = await s1.json();
  t("search: results", s1.status === 200 && Array.isArray(sj.results), `${sj.results?.length} results, ${sj.left_today} left`);
  getDb().run(
    `INSERT INTO vendor_requests (vendor, endpoint, status, user_id) VALUES ('exa','playground.search',200,?),('exa','playground.search',200,?),('exa','playground.search',200,?),('exa','playground.search',200,?)`,
    [u.id, u.id, u.id, u.id]
  );
  const s2 = await call("/api/playground/search", { query: "again" });
  t("search: daily cap 429", s2.status === 429, `${(await s2.json()).error}`);

  // x demo (real read if the bearer is live)
  const x1 = await call("/api/playground/x", { handle: "@jack" });
  const xj = await x1.json();
  t("x: profile or honest off", (x1.status === 200 && xj.profile?.followers > 0) || (x1.status === 503 && xj.error === "tool_off"), x1.status === 200 ? `${xj.profile?.followers} followers` : xj.error);
} finally {
  // purge the throwaway completely — stats must stay truthful
  const d = getDb();
  d.run("DELETE FROM credit_transactions WHERE user_id = ?", [u.id]);
  d.run("DELETE FROM api_requests WHERE user_id = ?", [u.id]);
  d.run("DELETE FROM vendor_requests WHERE user_id = ?", [u.id]);
  d.run("DELETE FROM agent_wallets WHERE user_id = ?", [u.id]);
  d.run("DELETE FROM cards WHERE user_id = ?", [u.id]);
  d.run("DELETE FROM users WHERE id = ?", [u.id]);
  console.log("throwaway purged");
}
console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
