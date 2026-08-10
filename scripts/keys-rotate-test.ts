// E2E for the /wallets API-keys panel backend: seed a scored throwaway,
// exercise /api/keys/rotate for main + lane, prove the old key dies and the
// new one authorizes, prove cross-user rotation 404s, then delete everything.
// Run: bun scripts/keys-rotate-test.ts
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

// ── seed throwaway scored user with keys + wallets ──
const uid = crypto.randomUUID();
const tag = `krt_${Date.now().toString(36)}`;
db.run(
  `INSERT INTO users (id, x_username, x_user_id, x_name, scored_at, score, score_tier, usd_balance, api_key, api_key_created_at)
   VALUES (?, ?, ?, ?, datetime('now'), 50, 'Standard', 0.05, ?, datetime('now'))`,
  [uid, tag, tag, "Key Rotate Probe", `vcard_${crypto.randomUUID().replace(/-/g, "")}`]
);
db.run(
  `INSERT INTO cards (user_id, handle, tier, grant_usd) VALUES (?, ?, 'Standard', 0.05)`,
  [uid, tag]
); // lanes only mint for card-holders — /api/wallets gates on getCard()
const user0 = db.query("SELECT * FROM users WHERE id = ?").get(uid) as any;

const cookie = (() => {
  const body = Buffer.from(JSON.stringify({ d: `did:probe:${tag}`, u: uid, e: Date.now() + 3600_000 }), "utf8").toString("base64url");
  const mac = createHmac("sha256", SECRET).update(body).digest("hex");
  return `vc_session=${body}.${mac}`;
})();

const j = async (path: string, init: any = {}) => {
  const r = await fetch(BASE + path, { ...init, headers: { cookie, "content-type": "application/json", ...(init.headers || {}) } });
  return { status: r.status, body: await r.json().catch(() => null) };
};

console.log("── /api/wallets exposes prefixes ──");
let w = await j("/api/wallets");
ok("wallets 200", w.status === 200, String(w.status));
ok("main_key_prefix present", w.body?.main_key_prefix === user0.api_key.slice(0, 12), JSON.stringify(w.body?.main_key_prefix));
const lanes = w.body?.wallets || [];
ok("two lanes", lanes.length === 2, String(lanes.length));
ok("lane key_prefix present", lanes.every((x: any) => x.key_prefix), JSON.stringify(lanes.map((x: any) => x.key_prefix)));

console.log("── rotate main ──");
const oldMain = user0.api_key;
let r = await j("/api/keys/rotate", { method: "POST", body: JSON.stringify({ target: "main" }) });
ok("rotate main 200", r.status === 200 && r.body?.ok === true, JSON.stringify(r.body));
const newMain = r.body?.key_reveal;
ok("reveal is vcard_", typeof newMain === "string" && newMain.startsWith("vcard_") && newMain !== oldMain);
ok("prefix matches reveal", r.body?.key_prefix === newMain?.slice(0, 12));
const dbMain = (db.query("SELECT api_key FROM users WHERE id = ?").get(uid) as any).api_key;
ok("db updated", dbMain === newMain);

// old key must be dead on the gateway, new key must authenticate
const gw = async (key: string) => (await fetch(`${BASE}/v1/chat/completions`, {
  method: "POST", headers: { authorization: `Bearer ${key}`, "content-type": "application/json" },
  body: JSON.stringify({ model: "deepseek", messages: [] }),
})).status;
ok("old main key 401s", (await gw(oldMain)) === 401);
ok("new main key passes auth (non-401)", (await gw(newMain)) !== 401);

console.log("── rotate lane ──");
const lane = lanes[0];
const oldLaneKey = (db.query("SELECT api_key FROM agent_wallets WHERE id = ?").get(lane.id) as any).api_key;
r = await j("/api/keys/rotate", { method: "POST", body: JSON.stringify({ target: lane.id }) });
ok("rotate lane 200", r.status === 200 && r.body?.ok === true, JSON.stringify(r.body));
const newLane = r.body?.key_reveal;
ok("lane reveal is vcard_a_", typeof newLane === "string" && newLane.startsWith("vcard_a_") && newLane !== oldLaneKey);
ok("old lane key 401s", (await gw(oldLaneKey)) === 401);
ok("new lane key passes auth (non-401)", (await gw(newLane)) !== 401);
w = await j("/api/wallets");
ok("wallets shows new lane prefix", (w.body?.wallets || []).some((x: any) => x.id === lane.id && x.key_prefix === newLane.slice(0, 12)));

console.log("── guards ──");
const foreign = db.query("SELECT id FROM agent_wallets WHERE user_id != ? LIMIT 1").get(uid) as any;
if (foreign) {
  r = await j("/api/keys/rotate", { method: "POST", body: JSON.stringify({ target: foreign.id }) });
  ok("foreign wallet 404s", r.status === 404, String(r.status));
}
r = await j("/api/keys/rotate", { method: "POST", body: JSON.stringify({ target: "nonsense" }) });
ok("bogus target 404s", r.status === 404, String(r.status));
const anon = await fetch(BASE + "/api/keys/rotate", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ target: "main" }) });
ok("anonymous 401s", anon.status === 401, String(anon.status));
const evts = db.query("SELECT COUNT(*) n FROM admin_events WHERE action='self_rotate_key' AND target_user_id=?").get(uid) as any;
ok("audit rows written", evts.n === 2, String(evts.n));

// ── teardown: remove every trace of the throwaway ──
db.run("DELETE FROM credit_transactions WHERE user_id = ?", [uid]);
db.run("DELETE FROM admin_events WHERE target_user_id = ?", [uid]);
db.run("DELETE FROM agent_wallets WHERE user_id = ?", [uid]);
db.run("DELETE FROM cards WHERE user_id = ?", [uid]);
db.run("DELETE FROM users WHERE id = ?", [uid]);
console.log(`\n${fail === 0 ? "ALL PASS" : "FAILURES"} — ${pass} passed, ${fail} failed (throwaway removed)`);
process.exit(fail === 0 ? 0 : 1);
