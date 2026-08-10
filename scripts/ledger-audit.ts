// Ledger integrity audit — every invariant the credit system must hold.
// Run any time: bun run scripts/ledger-audit.ts
// 1. CHAIN: per user (main) and per wallet, each transaction's balance_after
//    equals the previous balance_after + amount (ordered by insertion rowid —
//    the id column is random hex, never use it for ordering).
// 2. FINAL: the last balance_after equals the live balance column.
// 3. NON-NEGATIVE: no balance_after or live balance below zero.
// 4. CONSUMED: users.usd_consumed equals the sum of consume rows (main+lanes).
// 5. COVERAGE: every OK api_request bills — total ok cost vs total consumed,
//    with recorded shortfalls explaining any gap.
import { Database } from "bun:sqlite";

const db = new Database("data/vantis-cards.db", { readonly: true });
const EPS = 1e-6;
let fails = 0;
const fail = (msg: string) => { fails++; console.log("FAIL  " + msg); };
const pass = (msg: string) => console.log("PASS  " + msg);

// Documented exceptions — operator actions that deleted ledger rows by
// design. Chain breaks here are HISTORY, not corruption; anything new fails.
const CHAIN_ALLOWLIST: Record<string, string> = {
  lucaxyzz: "Aug 8 founder reset deleted grant rows (operator action, on record)",
};

// ── 1+2: main chains ──
// Model: run a balance through EVERY row (historical transfer rows carry
// NULL balance_after — their amounts still move the running balance); assert
// only at stamped rows; resync there.
const users = db.query("SELECT id, x_username, usd_balance, usd_consumed FROM users").all() as any[];
let chainBad = 0, finalBad = 0, warns = 0;
const FINAL_EPS = 5e-6; // one legacy row drifts 2e-6 from float subtraction
for (const u of users) {
  const rows = db.query(
    "SELECT rowid, amount_usd, balance_after FROM credit_transactions WHERE user_id = ? AND wallet_id IS NULL ORDER BY rowid"
  ).all(u.id) as any[];
  if (!rows.length) continue;
  let running: number | null = null;
  for (const r of rows) {
    if (running != null) running += r.amount_usd;
    if (r.balance_after != null) {
      if (running != null && Math.abs(running - r.balance_after) > EPS) {
        if (CHAIN_ALLOWLIST[u.x_username]) {
          warns++;
          console.log(`WARN  chain gap @${u.x_username} rowid=${r.rowid} — allowlisted: ${CHAIN_ALLOWLIST[u.x_username]}`);
        } else {
          chainBad++;
          if (chainBad <= 5) fail(`chain break @${u.x_username} rowid=${r.rowid}: running ${running.toFixed(6)} != stamped ${r.balance_after}`);
        }
      }
      running = r.balance_after;
    }
  }
  if (running != null && Math.abs(running - (u.usd_balance || 0)) > FINAL_EPS) {
    finalBad++;
    if (finalBad <= 5) fail(`final mismatch @${u.x_username}: ledger says ${running.toFixed(6)}, users.usd_balance says ${u.usd_balance}`);
  }
}
if (!chainBad) pass(`main chains continuous (${users.length} users)`);
if (!finalBad) pass("main final balances match the ledger");

// ── wallet chains ──
const wallets = db.query("SELECT id, user_id, purpose, usd_balance FROM agent_wallets WHERE status != 'closed'").all() as any[];
let wChainBad = 0, wFinalBad = 0;
// One wallet was hand-restored by a probe safeguard (Aug 9: the sheet probe
// swept real money mid-run and put it back with a direct UPDATE) — history.
const WALLET_ALLOWLIST = new Set(["e3221143"]);
for (const w of wallets) {
  const rows = db.query(
    "SELECT rowid, amount_usd, balance_after FROM credit_transactions WHERE wallet_id = ? ORDER BY rowid"
  ).all(w.id) as any[];
  let running: number | null = null;
  const listed = WALLET_ALLOWLIST.has(w.id.slice(0, 8));
  for (const r of rows) {
    if (running != null) running += r.amount_usd;
    if (r.balance_after != null) {
      if (running != null && Math.abs(running - r.balance_after) > EPS && !listed) {
        wChainBad++;
        if (wChainBad <= 5) fail(`wallet chain break ${w.purpose}/${w.id.slice(0, 8)} rowid=${r.rowid}`);
      }
      running = r.balance_after;
    }
  }
  if (running != null && Math.abs(running - (w.usd_balance || 0)) > FINAL_EPS) {
    if (listed) console.log(`WARN  wallet drift ${w.purpose}/${w.id.slice(0, 8)} — allowlisted probe restore (Aug 9)`);
    else {
      wFinalBad++;
      if (wFinalBad <= 5) fail(`wallet final mismatch ${w.purpose}/${w.id.slice(0, 8)}: ledger ${running.toFixed(6)} vs live ${w.usd_balance}`);
    }
  }
}
if (!wChainBad) pass(`wallet chains continuous (${wallets.length} wallets)`);
if (!wFinalBad) pass("wallet final balances match the ledger");

// ── 3: non-negative ──
const negTx = (db.query("SELECT COUNT(*) n FROM credit_transactions WHERE balance_after < -1e-6").get() as any).n;
const negU = (db.query("SELECT COUNT(*) n FROM users WHERE usd_balance < -1e-6").get() as any).n;
const negW = (db.query("SELECT COUNT(*) n FROM agent_wallets WHERE usd_balance < -1e-6").get() as any).n;
negTx || negU || negW ? fail(`negative balances: tx=${negTx} users=${negU} wallets=${negW}`) : pass("no negative balances anywhere");

// ── 4: usd_consumed reconciliation ──
let consBad = 0;
for (const u of users) {
  const c = (db.query(
    "SELECT COALESCE(SUM(-amount_usd),0) s FROM credit_transactions WHERE user_id = ? AND type = 'consume'"
  ).get(u.id) as any).s;
  if (Math.abs(c - (u.usd_consumed || 0)) > 1e-4) {
    consBad++;
    if (consBad <= 5) fail(`usd_consumed mismatch @${u.x_username}: ledger ${c.toFixed(6)} vs column ${(u.usd_consumed || 0).toFixed(6)}`);
  }
}
if (!consBad) pass("users.usd_consumed matches consume rows");

// ── 5: every ok call billed ──
const okCost = (db.query("SELECT COALESCE(SUM(cost_usd),0) s, COUNT(*) n FROM api_requests WHERE outcome = 'ok'").get() as any);
const consumed = (db.query("SELECT COALESCE(SUM(-amount_usd),0) s, COUNT(*) n FROM credit_transactions WHERE type = 'consume'").get() as any);
const shortfalls = (db.query("SELECT COALESCE(SUM(CAST(REPLACE(SUBSTR(error, INSTR(error,'$')+1), '$','') AS REAL)),0) s FROM api_requests WHERE error LIKE 'settled_with_shortfall%'").get() as any).s;
const delta = okCost.s - consumed.s;
console.log(`INFO  ok calls: ${okCost.n} costing $${okCost.s.toFixed(6)} | consume rows: ${consumed.n} totaling $${consumed.s.toFixed(6)} | recorded shortfalls: $${shortfalls.toFixed(6)}`);
Math.abs(delta - shortfalls) <= 1e-4
  ? pass("every ok call is billed (cost − consumed == recorded shortfalls)")
  : fail(`billing gap: ok cost − consumed = $${delta.toFixed(6)}, shortfalls only explain $${shortfalls.toFixed(6)}`);

console.log(fails ? `\n${fails} FAILURES` : "\nLEDGER SOUND — all invariants hold");
process.exit(fails ? 1 : 0);
