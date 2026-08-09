// Agent wallets, live: lifecycle over HTTP + a REAL inference spend through
// a wallet key, verifying wallet-scoped billing and owner-level burn.
import { getDb, createUser, getUser, createCard, getAgentWallet, mintWalletKey } from "/home/ubuntu/projects/vantis-card/server/db";
import { sessionSetCookie } from "/home/ubuntu/projects/vantis-card/server/session";
const BASE = "http://127.0.0.1:8240";
const db = getDb();
const results: [string, boolean][] = [];
const t = (n: string, ok: boolean) => { results.push([n, ok]); console.log(`${ok ? "PASS" : "FAIL"}  ${n}`); };

const U = createUser({ username: `wal${Date.now().toString(36).slice(-5)}`, name: "Wallet Probe" });
createCard(U.id, `@${U.x_username}`, "builder", 0, 0, 0.002);
db.run("UPDATE users SET usd_balance = 10, usd_granted = 10, scored_at = datetime('now'), score = 60 WHERE id = ?", [U.id]);
const ck = sessionSetCookie("did:privy:walprobe", U.id).split(";")[0];
const H = { "Content-Type": "application/json", Cookie: ck };

// lifecycle
const mk: any = await (await fetch(`${BASE}/api/wallets`, { method: "POST", headers: H, body: JSON.stringify({ name: "Research agent", fund_usd: 3 }) })).json();
t("create + fund", mk.ok === true && mk.wallet.balance_usd === 3);
t("key gated at launch", mk.key_reveal === null); // API_KEYS_ENABLED=0
let st: any = await (await fetch(`${BASE}/api/wallets`, { headers: H })).json();
t("main debited to $7", Math.abs(st.main_balance_usd - 7) < 1e-9);
const wid = mk.wallet.id;
const over: any = await (await fetch(`${BASE}/api/wallets/${wid}/fund`, { method: "POST", headers: H, body: JSON.stringify({ usd: 100 }) })).json();
t("overdraw refused", over.ok === false && over.error === "insufficient_main_balance");

// real spend through the wallet key (mint directly — the launch flag only gates ISSUANCE UX)
const key = mintWalletKey(wid)!;
const inf = await fetch(`${BASE}/v1/chat/completions`, {
  method: "POST",
  headers: { "Content-Type": "application/json", Authorization: `Bearer ${key}` },
  body: JSON.stringify({ model: "deepseek-v4-flash", messages: [{ role: "user", content: "Say OK." }], max_tokens: 16 }),
});
const body: any = await inf.json();
t("wallet key spends on the rail", inf.status === 200 && !!body.vantis);
const w = getAgentWallet(wid);
const u = getUser(U.id);
t("wallet balance decremented", (w.usd_balance || 0) < 3 && (w.usd_consumed || 0) > 0);
t("main balance untouched by spend", Math.abs((u.usd_balance || 0) - 7) < 1e-9);
t("owner lifetime burn aggregated", (u.vantis_burned || 0) > 0);
const tx = db.query("SELECT COUNT(*) AS n FROM credit_transactions WHERE wallet_id = ? AND type = 'consume'").get(wid) as any;
t("consume ledger row carries wallet_id", tx.n === 1);

// sweep + close
await fetch(`${BASE}/api/wallets/${wid}/close`, { method: "POST", headers: H });
const u2 = getUser(U.id);
const w2 = getAgentWallet(wid);
t("close sweeps remainder to main", w2.status === "closed" && (u2.usd_balance || 0) > 9.9);

// cleanup
for (const q of ["credit_transactions", "cards", "api_requests"]) db.run(`DELETE FROM ${q} WHERE user_id = ?`, [U.id]);
db.run("DELETE FROM agent_wallets WHERE user_id = ?", [U.id]);
db.run("DELETE FROM users WHERE id = ?", [U.id]);
console.log("cleaned");
if (results.some(([, ok]) => !ok)) process.exit(1);
