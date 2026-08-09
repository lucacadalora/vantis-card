// Two-lane model, live: auto-creation, funding, purpose enforcement.
import { getDb, createUser, getUser, createCard, mintWalletKey } from "/home/ubuntu/projects/vantis-card/server/db";
import { sessionSetCookie } from "/home/ubuntu/projects/vantis-card/server/session";
const BASE = "http://127.0.0.1:8240";
const db = getDb();
const results: [string, boolean][] = [];
const t = (n: string, ok: boolean) => { results.push([n, ok]); console.log(`${ok ? "PASS" : "FAIL"}  ${n}`); };

const U = createUser({ username: `ln${Date.now().toString(36).slice(-5)}`, name: "Lane Probe" });
createCard(U.id, `@${U.x_username}`, "builder", 0, 0, 0.002);
db.run("UPDATE users SET usd_balance = 10, scored_at = datetime('now'), score = 60 WHERE id = ?", [U.id]);
const ck = sessionSetCookie("did:privy:laneprobe", U.id).split(";")[0];
const H = { "Content-Type": "application/json", Cookie: ck };

const st: any = await (await fetch(`${BASE}/api/wallets`, { headers: H })).json();
t("two lanes auto-created", st.wallets.length === 2 && st.wallets[0].purpose === "inference" && st.wallets[1].purpose === "devtools");
t("devtools reads routes-soon", st.wallets[1].status === "routes_soon");
const inf = st.wallets[0], dev = st.wallets[1];
const f: any = await (await fetch(`${BASE}/api/wallets/${inf.id}/fund`, { method: "POST", headers: H, body: JSON.stringify({ usd: 4 }) })).json();
t("fund inference lane", f.ok === true);
const mk: any = await (await fetch(`${BASE}/api/wallets`, { method: "POST", headers: H, body: JSON.stringify({ name: "x" }) }));
t("freeform creation retired (410)", mk.status === 410);

const infKey = mintWalletKey(inf.id)!;
const devKey = mintWalletKey(dev.id)!;
const okCall = await fetch(`${BASE}/v1/chat/completions`, { method: "POST", headers: { "Content-Type": "application/json", Authorization: `Bearer ${infKey}` }, body: JSON.stringify({ model: "deepseek-v4-flash", messages: [{ role: "user", content: "Say OK." }], max_tokens: 12 }) });
t("inference lane spends on the rail", okCall.status === 200);
const devCall = await fetch(`${BASE}/v1/chat/completions`, { method: "POST", headers: { "Content-Type": "application/json", Authorization: `Bearer ${devKey}` }, body: JSON.stringify({ model: "deepseek-v4-flash", messages: [{ role: "user", content: "hi" }], max_tokens: 12 }) });
const devBody: any = await devCall.json();
t("devtools lane refuses inference (403)", devCall.status === 403 && devBody.error === "wallet_purpose");

for (const q of ["credit_transactions", "cards", "api_requests"]) db.run(`DELETE FROM ${q} WHERE user_id = ?`, [U.id]);
db.run("DELETE FROM agent_wallets WHERE user_id = ?", [U.id]);
db.run("DELETE FROM users WHERE id = ?", [U.id]);
console.log("cleaned");
if (results.some(([, ok]) => !ok)) process.exit(1);
