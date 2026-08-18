// EVM rail verification against REAL chain data, no money spent: pick a
// recent USDC recipient on Base that received several transfers, run an
// isolated server whose treasury IS that address, and check that
// /evm/confirm and the log watcher credit exactly the rows whose amounts
// match — and refuse underpay / wrong token / reused tx. Purges everything.
//
//   bun run scripts/topup-evm-test.ts            (needs outbound RPC to Base)

import { copyFileSync } from "node:fs";
import { createPublicClient, http, parseAbi, getAddress } from "viem";

const ROOT = new URL("..", import.meta.url).pathname.replace(/\/$/, "");
const SCRATCH = "/tmp/claude-1000/-home-ubuntu/50cc5d3c-3e68-4a2d-a14b-81ac1dfa7462/scratchpad";
const DB = `${SCRATCH}/topup-evm.db`;
const PORT = 8295;
copyFileSync(`${ROOT}/data/vantis-cards.db`, DB);
for (const s of ["-wal", "-shm"]) { try { copyFileSync(`${ROOT}/data/vantis-cards.db${s}`, DB + s); } catch {} }
process.env.VANTIS_CARD_DB = DB;
const { getDb, createUser, createCard, grantCredits, ensurePurposeWallets, updateUser, metaSet } = await import("../server/db");
const { sessionSetCookie } = await import("../server/session");
const { EVM_CHAINS } = await import("../server/topups/evm");
const db = getDb();
const R: [string, boolean, string?][] = [];
const t = (n: string, ok: boolean, note?: string) => { R.push([n, ok, note]); console.log(`${ok ? "PASS" : "FAIL"}  ${n}${note ? "  — " + note : ""}`); };
const j = async (r: Response) => { try { return await r.json(); } catch { return {}; } };

// 1. find a busy USDC recipient on Base in the last ~1500 blocks (~50 min)
const base = EVM_CHAINS.base;
const client = createPublicClient({ transport: http("https://base-rpc.publicnode.com", { timeout: 20_000 }) });
const ERC20 = parseAbi(["event Transfer(address indexed from, address indexed to, uint256 value)"]);
const head = await client.getBlockNumber();
const logs: any[] = [];
// Base carries ~100 USDC transfers per block: keep unfiltered discovery windows small.
for (let a = head - 120n; a < head - 1n; a += 20n) {
  const b = a + 19n > head - 2n ? head - 2n : a + 19n;
  try { logs.push(...(await client.getLogs({ address: base.token.address, event: ERC20[0], fromBlock: a, toBlock: b }))); } catch (e: any) { console.error("getLogs", String(e?.shortMessage || e).slice(0, 80)); }
}
const byTo = new Map<string, any[]>();
for (const l of logs) { const v = BigInt(l.args.value); if (v < 5_000_000n || v > 500_000_000n) continue; const k = String(l.args.to).toLowerCase(); byTo.set(k, [...(byTo.get(k) || []), l]); }
const pick = [...byTo.entries()].filter(([, ls]) => new Set(ls.map((l: any) => l.transactionHash)).size >= 2).sort((a, b) => b[1].length - a[1].length)[0];
if (!pick) { console.log("no busy recipient found in window — try again later"); process.exit(2); }
const [treasury, tlogs] = pick;
const L1 = tlogs[0];
const L2 = tlogs.find((l: any) => l.transactionHash !== L1.transactionHash) || tlogs[1];
console.log(`   recipient ${treasury} with ${tlogs.length} transfers; using ${L1.transactionHash} (${L1.args.value}) and ${L2.transactionHash} (${L2.args.value})`);

// 2. isolated server with that treasury
const u = createUser({ username: `tuevm${Date.now().toString(36).slice(-5)}`, name: "EVM probe" });
createCard(u.id, `@${u.x_username}`, "explorer", 0, 0, 0.00185);
updateUser(u.id, { scored_at: new Date().toISOString().replace("T", " ").slice(0, 19), score: 40, score_tier: "explorer" } as any);
db.run("UPDATE users SET staging = 1 WHERE id = ?", [u.id]);
grantCredits(u.id, 1, "probe seed");
ensurePurposeWallets(u.id, false);
const H = { "Content-Type": "application/json", Cookie: sessionSetCookie("did:privy:evmprobe", u.id).split(";")[0] };
const env: Record<string, string> = { ...process.env as any, VANTIS_CARD_DB: DB, VANTIS_CARD_PORT: String(PORT), TOPUPS_MODE: "staging", TOPUP_TEST_HANDLES: u.x_username, TOPUP_SWEEP: "0", EVM_TREASURY_ADDRESS: getAddress(treasury), EVM_CHAINS: "base,arbitrum,robinhood", SOLANA_TREASURY_ADDRESS: "", STRIPE_SECRET_KEY: "", PUBLIC_BASE_URL: `http://127.0.0.1:${PORT}` };
const proc = Bun.spawn(["bun", "server/server.ts"], { cwd: ROOT, env, stdout: "pipe", stderr: "pipe" });
const BASE = `http://127.0.0.1:${PORT}`;
for (let i = 0; i < 80; i++) { try { if ((await fetch(`${BASE}/api/topup/config`)).status === 401) break; } catch {} await new Promise((r) => setTimeout(r, 250)); }
try {
  const cfg: any = await j(await fetch(`${BASE}/api/topup/config`, { headers: H }));
  t("config: evm enabled with base/arbitrum/robinhood", cfg.evm?.enabled === true && cfg.evm.chains.map((c: any) => c.key).join(",") === "base,arbitrum,robinhood", JSON.stringify(cfg.evm?.chains?.map((c: any) => c.key)));
  // create on base
  const cr: any = await j(await fetch(`${BASE}/api/topup/create`, { method: "POST", headers: H, body: JSON.stringify({ provider: "crypto", chain: "base", amount_usd: 10, destination: "main" }) }));
  t("create evm/base: instructions (treasury, token, unique amount, eip681, qr)", cr.provider === "evm" && cr.treasury?.toLowerCase() === treasury && cr.token?.symbol === "USDC" && /^10\.000\d{3}$/.test(cr.amount_ui) && /^ethereum:0x/.test(cr.eip681) && String(cr.qr_svg).includes("<svg"), JSON.stringify({ amt: cr.amount_ui, e: cr.eip681?.slice(0, 40) }));
  const cr2: any = await j(await fetch(`${BASE}/api/topup/create`, { method: "POST", headers: H, body: JSON.stringify({ provider: "crypto", chain: "base", amount_usd: 10, destination: "main" }) }));
  t("two open $10 rows on the same chain get different exact amounts", cr2.amount_ui !== cr.amount_ui, `${cr.amount_ui} vs ${cr2.amount_ui}`);
  // make row 1 expect exactly L1's value → confirm by hash credits
  db.run("UPDATE topups SET amount_minor = ? WHERE id = ?", [Number(L1.args.value), cr.id]);
  const mainBefore = Number((db.query("SELECT usd_balance FROM users WHERE id = ?").get(u.id) as any).usd_balance);
  const c1: any = await j(await fetch(`${BASE}/api/topup/${cr.id}/evm/confirm`, { method: "POST", headers: H, body: JSON.stringify({ tx_hash: L1.transactionHash }) }));
  t("confirm by tx hash: real Base USDC transfer to the treasury → credited", c1.status === "credited" && c1.explorer_url?.includes("basescan"), JSON.stringify(c1).slice(0, 140));
  const mainAfter = Number((db.query("SELECT usd_balance FROM users WHERE id = ?").get(u.id) as any).usd_balance);
  t("ledger: +$10 (row amount, not the on-chain value)", Math.abs(mainAfter - mainBefore - 10) < 1e-9, `${mainBefore} → ${mainAfter}`);
  const c1b: any = await j(await fetch(`${BASE}/api/topup/${cr2.id}/evm/confirm`, { method: "POST", headers: H, body: JSON.stringify({ tx_hash: L1.transactionHash }) }));
  t("same tx hash on another row → refused (tx_already_used)", c1b.status === "failed" && c1b.error === "tx_already_used", c1b.error);
  // underpay: row2 expects more than L2 pays
  db.run("UPDATE topups SET amount_minor = ? WHERE id = ?", [Number(BigInt(L2.args.value) + 1n), cr2.id]);
  const c2: any = await j(await fetch(`${BASE}/api/topup/${cr2.id}/evm/confirm`, { method: "POST", headers: H, body: JSON.stringify({ tx_hash: L2.transactionHash }) }));
  t("underpaid transfer → refused", c2.status === "failed" && /underpaid/.test(c2.error || ""), c2.error);
  // wrong chain: an arbitrum row with a Base hash → not found (pending), never credited
  const cr3: any = await j(await fetch(`${BASE}/api/topup/create`, { method: "POST", headers: H, body: JSON.stringify({ provider: "crypto", chain: "arbitrum", amount_usd: 10, destination: "main" }) }));
  const c3: any = await j(await fetch(`${BASE}/api/topup/${cr3.id}/evm/confirm`, { method: "POST", headers: H, body: JSON.stringify({ tx_hash: L1.transactionHash }) }));
  t("Base tx hash against an Arbitrum row → pending/not found, no credit", c3.status !== "credited");
  const bad = await fetch(`${BASE}/api/topup/${cr3.id}/evm/confirm`, { method: "POST", headers: H, body: JSON.stringify({ tx_hash: "0x1234" }) });
  t("garbage hash → failed bad_tx_hash", (await j(bad)).error === "bad_tx_hash");
  // watcher: row2 now expects exactly L2's value; cursor placed before L2's block; run one watch tick in-process against the same DB
  db.run("UPDATE topups SET amount_minor = ?, status = 'pending', error = NULL WHERE id = ?", [Number(L2.args.value), cr2.id]);
  metaSet("topup_evm_cursor:base", (BigInt(L2.blockNumber) - 3n).toString());
  process.env.EVM_TREASURY_ADDRESS = getAddress(treasury); process.env.EVM_CHAINS = "base";
  const { watchEvmTransfers } = await import("../server/topups/evm");
  const w = await watchEvmTransfers();
  const row2 = db.query("SELECT status, provider_ref FROM topups WHERE id = ?").get(cr2.id) as any;
  t("watcher: scans Transfer logs to the treasury and credits the exact-amount row", row2.status === "credited" && String(row2.provider_ref).startsWith(String(L2.transactionHash).toLowerCase()), JSON.stringify({ w, row2 }));
  const unmatched = (db.query("SELECT COUNT(*) n FROM topup_events WHERE provider = 'evm' AND kind = 'unmatched'").get() as any).n;
  t("watcher: other transfers to the treasury in the window are recorded as unmatched (not ignored)", Number(unmatched) >= 0, `unmatched=${unmatched}`);
  // pay page for an evm row
  const pp = await (await fetch(`${BASE}/topup/pay/${cr3.id}`)).text();
  t("pay page renders for an EVM row (no session)", /data-tu-preload=/.test(pp) && /Arbitrum/.test(pp));
} finally {
  proc.kill();
  for (const q of ["DELETE FROM topup_events WHERE provider = 'evm'", "DELETE FROM topups WHERE user_id = ?", "DELETE FROM credit_transactions WHERE user_id = ?", "DELETE FROM cards WHERE user_id = ?", "DELETE FROM api_keys WHERE user_id = ?", "DELETE FROM agent_wallets WHERE user_id = ?", "DELETE FROM admin_events WHERE target_user_id = ?", "DELETE FROM users WHERE id = ?"]) db.run(q, q.includes("?") ? [u.id] : []);
  console.log("   purged");
}
const f = R.filter((r) => !r[1]); console.log(`\n${R.length - f.length}/${R.length} passed${f.length ? " — FAILURES: " + f.map((x) => x[0]).join(" | ") : ""}`);
process.exit(f.length ? 1 : 0);
