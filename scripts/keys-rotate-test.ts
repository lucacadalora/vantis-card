// E2E for named self-service API keys: create (named, scoped, multiple),
// rotate, revoke, ownership guards, the 10-key cap, and gateway honor of
// table keys vs legacy fallback. Seeds a scored throwaway, purges it after.
// Run: bun scripts/keys-rotate-test.ts  (with .env sourced)
import { Database } from "bun:sqlite";
import { createHmac } from "crypto";

const BASE = "http://127.0.0.1:8240";
const DB = "/home/ubuntu/projects/vantis-card/data/vantis-cards.db";
const SECRET = process.env.VANTIS_CARD_SESSION_SECRET!;
if (!SECRET) throw new Error("source .env first");

const db = new Database(DB);
let pass = 0, fail = 0;
const ok = (name: string, cond: boolean, detail = "") => {
  if (cond) { pass++; console.log(`  PASS ${name}`); }
  else { fail++; console.log(`  FAIL ${name} ${detail}`); }
};

const uid = crypto.randomUUID();
const tag = `krt_${Date.now().toString(36)}`;
db.run(
  `INSERT INTO users (id, x_username, x_user_id, x_name, scored_at, score, score_tier, usd_balance)
   VALUES (?, ?, ?, ?, datetime('now'), 50, 'Standard', 0.05)`,
  [uid, tag, tag, "Key Suite Probe"]
);
db.run(`INSERT INTO cards (user_id, handle, tier, grant_usd) VALUES (?, ?, 'Standard', 0.05)`, [uid, tag]);

const cookie = (() => {
  const body = Buffer.from(JSON.stringify({ d: `did:probe:${tag}`, u: uid, e: Date.now() + 3600_000 }), "utf8").toString("base64url");
  const mac = createHmac("sha256", SECRET).update(body).digest("hex");
  return `vc_session=${body}.${mac}`;
})();

const j = async (path: string, init: any = {}) => {
  const r = await fetch(BASE + path, { ...init, headers: { cookie, "content-type": "application/json", ...(init.headers || {}) } });
  return { status: r.status, body: await r.json().catch(() => null) };
};
const gw = async (key: string) => (await fetch(`${BASE}/v1/chat/completions`, {
  method: "POST", headers: { authorization: `Bearer ${key}`, "content-type": "application/json" },
  body: JSON.stringify({ model: "deepseek", messages: [] }),
})).status;

console.log("── fresh account: zero keys until created ──");
let w = await j("/api/wallets");
ok("wallets 200", w.status === 200, String(w.status));
ok("keys array empty", Array.isArray(w.body?.keys) && w.body.keys.length === 0, JSON.stringify(w.body?.keys));
ok("two keyless lanes", (w.body?.wallets || []).length === 2);

console.log("── create: named, scoped to a lane, multiple ──");
const laneId = (w.body.wallets.find((x: any) => x.purpose === "inference") || {}).id;
const devId = (w.body.wallets.find((x: any) => x.purpose === "devtools") || {}).id;
// Main funds lanes and never spends, so it is no longer a scope a key can take.
let r = await j("/api/keys/create", { method: "POST", body: JSON.stringify({ name: "my-agent", scope: "main" }) });
ok("main scope refused 400", r.status === 400 && r.body?.error === "scope_required", JSON.stringify(r.body));
r = await j("/api/keys/create", { method: "POST", body: JSON.stringify({ name: "my-agent" }) });
ok("missing scope refused 400", r.status === 400 && r.body?.error === "scope_required", JSON.stringify(r.body));
r = await j("/api/keys/create", { method: "POST", body: JSON.stringify({ name: "my-agent", scope: laneId }) });
ok("create lane 200", r.status === 200 && r.body?.ok === true, JSON.stringify(r.body));
const k1 = r.body;
ok("reveal is vcard_", typeof k1?.key_reveal === "string" && k1.key_reveal.startsWith("vcard_"));
r = await j("/api/keys/create", { method: "POST", body: JSON.stringify({ name: "lane-bot", scope: laneId }) });
ok("second lane key 200", r.status === 200 && r.body?.ok === true, JSON.stringify(r.body));
const k2 = r.body;
r = await j("/api/keys/create", { method: "POST", body: JSON.stringify({ name: "tools-bot", scope: devId }) });
ok("devtools key coexists", r.status === 200 && r.body?.ok === true);
const k3 = r.body;
w = await j("/api/wallets");
ok("list shows 3 named keys", (w.body?.keys || []).length === 3, JSON.stringify((w.body?.keys || []).map((k: any) => k.name)));
ok("every key is lane-scoped", (w.body.keys || []).filter((k: any) => k.scope === "inference").length === 2
  && (w.body.keys || []).some((k: any) => k.name === "tools-bot" && k.scope === "devtools")
  && !(w.body.keys || []).some((k: any) => k.scope === "main"), JSON.stringify((w.body?.keys || []).map((k: any) => k.scope)));

console.log("── guards on create ──");
r = await j("/api/keys/create", { method: "POST", body: JSON.stringify({ name: "   ", scope: laneId }) });
ok("blank name 400", r.status === 400, String(r.status));
const foreignWallet = db.query("SELECT id FROM agent_wallets WHERE user_id != ? AND status='active' LIMIT 1").get(uid) as any;
if (foreignWallet) {
  r = await j("/api/keys/create", { method: "POST", body: JSON.stringify({ name: "steal", scope: foreignWallet.id }) });
  ok("foreign wallet scope 404s", r.status === 404, String(r.status));
}

console.log("── gateway honors table keys ──");
ok("lane key authorizes (non-401)", (await gw(k1.key_reveal)) !== 401);
ok("second lane key authorizes (non-401)", (await gw(k2.key_reveal)) !== 401);
ok("devtools key refused on inference", (await gw(k3.key_reveal)) === 403);
ok("garbage key 401s", (await gw("vcard_nonsense")) === 401);
const used = db.query("SELECT last_used_at FROM api_keys WHERE id = ?").get(k1.id) as any;
ok("last_used_at stamped", !!used?.last_used_at);

console.log("── rotate ──");
r = await j("/api/keys/rotate", { method: "POST", body: JSON.stringify({ id: k1.id }) });
ok("rotate 200", r.status === 200 && r.body?.ok === true, JSON.stringify(r.body));
ok("keeps the name", r.body?.name === "my-agent");
const k1b = r.body?.key_reveal;
ok("old key 401s", (await gw(k1.key_reveal)) === 401);
ok("new key authorizes", (await gw(k1b)) !== 401);

console.log("── revoke ──");
r = await j("/api/keys/revoke", { method: "POST", body: JSON.stringify({ id: k2.id }) });
ok("revoke 200", r.status === 200 && r.body?.ok === true);
ok("revoked key 401s", (await gw(k2.key_reveal)) === 401);
w = await j("/api/wallets");
ok("revoked key gone from list", !(w.body?.keys || []).some((k: any) => k.id === k2.id));

console.log("── guards on rotate/revoke ──");
const foreignKey = db.query("SELECT id FROM api_keys WHERE user_id != ? AND revoked_at IS NULL LIMIT 1").get(uid) as any;
if (foreignKey) {
  r = await j("/api/keys/rotate", { method: "POST", body: JSON.stringify({ id: foreignKey.id }) });
  ok("foreign rotate 404s", r.status === 404, String(r.status));
  r = await j("/api/keys/revoke", { method: "POST", body: JSON.stringify({ id: foreignKey.id }) });
  ok("foreign revoke 404s", r.status === 404, String(r.status));
}
const anon = await fetch(BASE + "/api/keys/create", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ name: "x", scope: "main" }) });
ok("anonymous 401s", anon.status === 401, String(anon.status));

console.log("── the 10-key cap ──");
let capHit = false;
for (let i = 0; i < 12; i++) {
  r = await j("/api/keys/create", { method: "POST", body: JSON.stringify({ name: `filler-${i}`, scope: laneId }) });
  if (r.status === 400 && r.body?.error === "too_many_keys") { capHit = true; break; }
}
const active = (db.query("SELECT COUNT(*) n FROM api_keys WHERE user_id = ? AND revoked_at IS NULL").get(uid) as any).n;
ok("cap enforced at 10 active", capHit && active === 10, `capHit=${capHit} active=${active}`);

console.log("── legacy fallback resolves, then meets the scope rule ──");
// A key in the legacy users.api_key column points at the main balance, which
// funds lanes rather than spending. It must still RESOLVE (not 401 as unknown)
// and then be refused on scope — the account is real, the credential is not.
const legacy = `vcard_${crypto.randomUUID().replace(/-/g, "")}`;
db.run("UPDATE users SET api_key = ? WHERE id = ?", [legacy, uid]);
ok("legacy column key resolves, not 401", (await gw(legacy)) !== 401);
ok("legacy main key refused 403", (await gw(legacy)) === 403);

const evts = db.query("SELECT COUNT(*) n FROM admin_events WHERE action LIKE 'self_%_key' AND target_user_id=?").get(uid) as any;
ok("audit rows for every mutation", evts.n >= 12, String(evts.n));

// teardown
db.run("DELETE FROM api_keys WHERE user_id = ?", [uid]);
db.run("DELETE FROM api_requests WHERE user_id = ?", [uid]);
db.run("DELETE FROM credit_transactions WHERE user_id = ?", [uid]);
db.run("DELETE FROM admin_events WHERE target_user_id = ?", [uid]);
db.run("DELETE FROM agent_wallets WHERE user_id = ?", [uid]);
db.run("DELETE FROM cards WHERE user_id = ?", [uid]);
db.run("DELETE FROM users WHERE id = ?", [uid]);
console.log(`\n${fail === 0 ? "ALL PASS" : "FAILURES"} — ${pass} passed, ${fail} failed (throwaway removed)`);
process.exit(fail === 0 ? 0 : 1);
