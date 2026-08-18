// Top-up e2e — sandbox card flow, Stripe webhook (signed synthetic events),
// USDC on Solana devnet (real transfer signed by the fixture payer, standing
// in for Phantom), the access gate, and the negatives. Spawns its own
// isolated servers on a DB COPY, seeds throwaways, purges them.
//
//   bun run scripts/topup-devnet-fixture.ts     # once (payer/treasury/test mint on devnet)
//   bun run scripts/topup-e2e.ts
//
// Never point this at the live DB: it writes credits.

import { copyFileSync, readFileSync, existsSync } from "node:fs";
import { createKeyPairSignerFromPrivateKeyBytes, getBase64Encoder, getTransactionDecoder, signTransaction, getBase64EncodedWireTransaction, createSolanaRpc } from "@solana/kit";

const ROOT = new URL("..", import.meta.url).pathname.replace(/\/$/, "");
const SCRATCH = process.env.TOPUP_E2E_DIR || "/tmp/claude-1000/-home-ubuntu/50cc5d3c-3e68-4a2d-a14b-81ac1dfa7462/scratchpad";
const DB = `${SCRATCH}/topup-e2e.db`;
const FIX_FILE = `${process.env.HOME}/.openclaw/secrets/vantis-topup-devnet.json`;
const P1 = 8299, P2 = 8298;

copyFileSync(`${ROOT}/data/vantis-cards.db`, DB);
for (const s of ["-wal", "-shm"]) { try { copyFileSync(`${ROOT}/data/vantis-cards.db${s}`, DB + s); } catch {} }
process.env.VANTIS_CARD_DB = DB;

const { getDb, createUser, createCard, grantCredits, ensurePurposeWallets, fundAgentWallet, updateUser, createApiKeyRow } = await import("../server/db");
const { sessionSetCookie } = await import("../server/session");
const db = getDb();

const results: [string, boolean, string?][] = [];
const t = (n: string, ok: boolean, note?: string) => { results.push([n, ok, note]); console.log(`${ok ? "PASS" : "FAIL"}  ${n}${note ? "  — " + note : ""}`); };

const fixture = existsSync(FIX_FILE) ? JSON.parse(readFileSync(FIX_FILE, "utf8")) : null;
const payer = fixture ? await createKeyPairSignerFromPrivateKeyBytes(new Uint8Array(fixture.payer)) : null;
const treasury = fixture ? await createKeyPairSignerFromPrivateKeyBytes(new Uint8Array(fixture.treasury)) : null;

const baseEnv: Record<string, string> = {
  ...process.env as any,
  VANTIS_CARD_DB: DB, TOPUPS_MODE: "staging", TOPUP_SANDBOX: "1", TOPUP_MIN_USD: "5", TOPUP_MAX_USD: "500",
  PUBLIC_BASE_URL: `http://127.0.0.1:${P1}`,
  SOLANA_CLUSTER: "devnet", SOLANA_USDC_MINT: fixture?.mint || "", SOLANA_TREASURY_ADDRESS: treasury?.address || "",
  STRIPE_SECRET_KEY: "", STRIPE_WEBHOOK_SECRET: "",
  VANTIS_CARD_ADMIN_TOKEN: "e2e-admin-token", VANTIS_CARD_ADMIN_EMAIL: "e2e-admin@example.com", VANTIS_CARD_ADMIN_SECRET: "e2e-admin-secret",
  TOPUP_SWEEP_SEC: "6",
  TOPUP_TEST_HANDLES: "__set_below__",
};

async function spawnServer(port: number, env: Record<string, string>) {
  const proc = Bun.spawn(["bun", "server/server.ts"], { cwd: ROOT, env: { ...env, VANTIS_CARD_PORT: String(port) }, stdout: "pipe", stderr: "pipe" });
  const base = `http://127.0.0.1:${port}`;
  for (let i = 0; i < 80; i++) {
    try { const r = await fetch(`${base}/api/topup/config`); if (r.status === 401) return { proc, base }; } catch {}
    await new Promise((r) => setTimeout(r, 250));
  }
  proc.kill();
  throw new Error(`server on ${port} did not come up`);
}

function seed(handle: string, staging: number) {
  const u = createUser({ username: handle, name: "Topup Probe" });
  createCard(u.id, `@${u.x_username}`, "explorer", 0, 0, 0.00185);
  updateUser(u.id, { scored_at: new Date().toISOString().replace("T", " ").slice(0, 19), score: 40, score_tier: "explorer" } as any);
  db.run("UPDATE users SET staging = ? WHERE id = ?", [staging, u.id]);
  grantCredits(u.id, 5, "Probe seed (purged by topup-e2e)");
  const lanes = ensurePurposeWallets(u.id, false) as any[];
  const inf = lanes.find((w) => w.purpose === "inference")!;
  fundAgentWallet(u.id, inf.id, 1);
  createApiKeyRow(u.id, inf.id, "probe key");
  const cookie = sessionSetCookie("did:privy:topupprobe", u.id).split(";")[0];
  return { u, inf, H: { "Content-Type": "application/json", Cookie: cookie } };
}
function purge(uid: string) {
  for (const q of ["DELETE FROM topup_events WHERE topup_id IN (SELECT id FROM topups WHERE user_id = ?)", "DELETE FROM topups WHERE user_id = ?", "DELETE FROM api_requests WHERE user_id = ?", "DELETE FROM credit_transactions WHERE user_id = ?", "DELETE FROM cards WHERE user_id = ?", "DELETE FROM api_keys WHERE user_id = ?", "DELETE FROM agent_wallets WHERE user_id = ?", "DELETE FROM admin_events WHERE target_user_id = ?", "DELETE FROM users WHERE id = ?"]) db.run(q, [uid]);
}
const bal = (uid: string) => Number((db.query("SELECT usd_balance FROM users WHERE id = ?").get(uid) as any)?.usd_balance || 0);
const laneBal = (wid: string) => Number((db.query("SELECT usd_balance FROM agent_wallets WHERE id = ?").get(wid) as any)?.usd_balance || 0);
const j = async (r: Response) => { try { return await r.json(); } catch { return {}; } };

const A = seed(`tua${Date.now().toString(36).slice(-5)}`, 1);
const B = seed(`tub${Date.now().toString(36).slice(-5)}`, 0);
const C = seed(`tuc${Date.now().toString(36).slice(-5)}`, 1); // staging, but NOT on the test-rail allowlist
baseEnv.TOPUP_TEST_HANDLES = A.u.x_username;
let s1: any = null, s2: any = null;
try {
  s1 = await spawnServer(P1, baseEnv);
  const BASE = s1.base;

  // ── test rails are allowlisted by handle, not by staging ──
  const cfgC: any = await j(await fetch(`${BASE}/api/topup/config`, { headers: C.H }));
  t("staging but not allowlisted: enabled, yet no sandbox and no devnet USDC", cfgC.enabled === true && cfgC.card.provider === null && cfgC.solana.enabled === false, JSON.stringify({ c: cfgC.card, s: cfgC.solana?.enabled }));
  const crC = await fetch(`${BASE}/api/topup/create`, { method: "POST", headers: C.H, body: JSON.stringify({ provider: "card", amount_usd: 10 }) });
  t("staging but not allowlisted: card create → 503", crC.status === 503);

  // ── gate ──
  const cfgB: any = await j(await fetch(`${BASE}/api/topup/config`, { headers: B.H }));
  t("non-staging: config enabled=false", cfgB.enabled === false && cfgB.card.provider === null && cfgB.solana.enabled === false);
  const crB = await fetch(`${BASE}/api/topup/create`, { method: "POST", headers: B.H, body: JSON.stringify({ provider: "card", amount_usd: 10 }) });
  t("non-staging: create → 403 topups_disabled", crB.status === 403);
  const anon = await fetch(`${BASE}/api/topup/config`);
  t("anon: config → 401", anon.status === 401);
  const cfgA: any = await j(await fetch(`${BASE}/api/topup/config`, { headers: A.H }));
  t("staging: enabled, card=sandbox, solana=devnet", cfgA.enabled === true && cfgA.card.provider === "sandbox" && cfgA.solana.enabled === true && cfgA.solana.cluster === "devnet", JSON.stringify({ card: cfgA.card, sol: cfgA.solana.enabled }));
  t("staging: default destination = Inference lane", cfgA.default_destination === A.inf.id);
  t("config: presets + limits", Array.isArray(cfgA.presets) && cfgA.presets.length >= 3 && cfgA.min_usd === 5 && cfgA.max_usd === 500);

  // ── amount validation ──
  for (const [amt, code] of [[2, "amount_below_min"], [1000, "amount_above_max"], ["abc", "bad_amount"], [10.005, "bad_amount"]] as const) {
    const r = await fetch(`${BASE}/api/topup/create`, { method: "POST", headers: A.H, body: JSON.stringify({ provider: "card", amount_usd: amt }) });
    const b: any = await j(r);
    t(`amount ${amt} → 400 ${code}`, r.status === 400 && b.error === code, b.error);
  }
  const badDest = await fetch(`${BASE}/api/topup/create`, { method: "POST", headers: A.H, body: JSON.stringify({ provider: "card", amount_usd: 10, destination: B.inf.id }) });
  t("someone else's lane as destination → 400", badDest.status === 400);

  // ── sandbox card flow ──
  const mainBefore = bal(A.u.id), laneBefore = laneBal(A.inf.id);
  const cr: any = await j(await fetch(`${BASE}/api/topup/create`, { method: "POST", headers: A.H, body: JSON.stringify({ provider: "card", amount_usd: 10, destination: A.inf.id }) }));
  t("sandbox: create → url", cr.provider === "sandbox" && typeof cr.url === "string" && cr.url.startsWith("/topup/sandbox/"), cr.url);
  const page = await fetch(`${BASE}${cr.url}`, { headers: A.H });
  const html = await page.text();
  t("sandbox: checkout page 200 + labelled", page.status === 200 && /Sandbox/.test(html) && /charges nothing/.test(html) && /4242/.test(html));
  const asB = await fetch(`${BASE}${cr.url}`, { headers: B.H });
  t("sandbox: another user's page → 404", asB.status === 404);
  const pay = await fetch(`${BASE}/topup/sandbox/${cr.id}/pay`, { method: "POST", headers: A.H, redirect: "manual" });
  t("sandbox: pay → 303 to return page", pay.status === 303 && String(pay.headers.get("location")).includes("/topup/return"));
  const st: any = await j(await fetch(`${BASE}/api/topup/${cr.id}/status`, { headers: A.H }));
  t("sandbox: status credited", st.status === "credited" && st.amount_usd === 10);
  t("sandbox: lane +10, main unchanged", Math.abs(laneBal(A.inf.id) - (laneBefore + 10)) < 1e-9 && Math.abs(bal(A.u.id) - mainBefore) < 1e-9, `lane ${laneBal(A.inf.id)} main ${bal(A.u.id)}`);
  const rows = db.query("SELECT type, amount_usd, description FROM credit_transactions WHERE user_id = ? ORDER BY rowid DESC LIMIT 3").all(A.u.id) as any[];
  t("ledger: topup + transfer pair", rows.some((r) => r.type === "topup" && r.amount_usd === 10) && rows.filter((r) => r.type === "transfer").length === 2, rows.map((r) => r.type).join(","));
  const tu = db.query("SELECT usd_topped_up FROM users WHERE id = ?").get(A.u.id) as any;
  t("users.usd_topped_up = 10", Number(tu.usd_topped_up) === 10);
  const pay2 = await fetch(`${BASE}/topup/sandbox/${cr.id}/pay`, { method: "POST", headers: A.H, redirect: "manual" });
  t("sandbox: replayed pay → no second credit", pay2.status === 303 && Math.abs(laneBal(A.inf.id) - (laneBefore + 10)) < 1e-9);
  const ret = await fetch(`${BASE}/topup/return?id=${cr.id}&session_id=sandbox`, { headers: A.H });
  const retHtml = await ret.text();
  t("return page: credited copy", ret.status === 200 && /Credits are on your card/.test(retHtml) && /Sandbox/.test(retHtml));
  const retB = await fetch(`${BASE}/topup/return?id=${cr.id}`, { headers: B.H });
  t("return page: other user → 404", retB.status === 404);
  // cancel path
  const cr2: any = await j(await fetch(`${BASE}/api/topup/create`, { method: "POST", headers: A.H, body: JSON.stringify({ provider: "card", amount_usd: 5, destination: "main" }) }));
  const cancel = await fetch(`${BASE}/topup/sandbox/${cr2.id}/cancel`, { method: "POST", headers: A.H, redirect: "manual" });
  const st2: any = await j(await fetch(`${BASE}/api/topup/${cr2.id}/status`, { headers: A.H }));
  t("sandbox: cancel → canceled, no credit", cancel.status === 303 && st2.status === "canceled" && Math.abs(bal(A.u.id) - mainBefore) < 1e-9);
  const payCanceled = await fetch(`${BASE}/topup/sandbox/${cr2.id}/pay`, { method: "POST", headers: A.H, redirect: "manual" });
  const st2b: any = await j(await fetch(`${BASE}/api/topup/${cr2.id}/status`, { headers: A.H }));
  t("sandbox: pay after cancel → redirected to the return page, still canceled, no credit", payCanceled.status === 303 && String(payCanceled.headers.get("location")).includes("/topup/return") && st2b.status === "canceled" && Math.abs(bal(A.u.id) - mainBefore) < 1e-9, `${payCanceled.status} ${st2b.status}`);
  const deadPage = await (await fetch(`${BASE}/topup/sandbox/${cr2.id}`, { headers: A.H })).text();
  t("sandbox page on a canceled row: no Pay form", !/action="\/topup\/sandbox\/[^"]+\/pay"/.test(deadPage) && /nothing can be paid here/.test(deadPage));
  const payAnon = await fetch(`${BASE}/topup/sandbox/${cr2.id}/pay`, { method: "POST", redirect: "manual" });
  t("sandbox: form POST without session → redirect to login, not JSON", payAnon.status === 303 && String(payAnon.headers.get("location")).startsWith("/login"));
  // suspended accounts cannot buy
  db.run("UPDATE users SET status = 'suspended' WHERE id = ?", [A.u.id]);
  const cfgSus: any = await j(await fetch(`${BASE}/api/topup/config`, { headers: A.H }));
  const crSus = await fetch(`${BASE}/api/topup/create`, { method: "POST", headers: A.H, body: JSON.stringify({ provider: "card", amount_usd: 10 }) });
  const wSus = await (await fetch(`${BASE}/wallets`, { headers: A.H })).text();
  t("suspended: config disabled, create → 403 account_suspended, /wallets shows no live rail", cfgSus.enabled === false && crSus.status === 403 && (await j(crSus)).error === "account_suspended" && !/data-topup-live/.test(wSus));
  db.run("UPDATE users SET status = 'active' WHERE id = ?", [A.u.id]);

  // ── /wallets renders the live section for A, the placeholder for B ──
  const wA = await (await fetch(`${BASE}/wallets`, { headers: A.H })).text();
  const wB = await (await fetch(`${BASE}/wallets`, { headers: B.H })).text();
  t("/wallets A: live top-up section", /data-topup-live="1"/.test(wA) && /Pay by card \(sandbox\)/.test(wA) && /Pay with USDC/.test(wA) && /wallet-standard:app-ready/.test(wA));
  t("/wallets B: placeholder only", !/data-topup-live/.test(wB) && /Not built yet|x402/.test(wB));
  t("/wallets A: no jatevo/provider leak, no emoji", !/jatevo/i.test(wA) && !/[\u{1F300}-\u{1FAFF}]/u.test(wA));
  t("/wallets A: honesty copy present", /non-refundable/.test(wA) && /no monetary value/.test(wA));

  // ── webhook route mounted; unconfigured → 503 ──
  const wh = await fetch(`${BASE}/webhooks/stripe`, { method: "POST", body: "{}", headers: { "stripe-signature": "t=1,v1=00" } });
  t("stripe webhook unconfigured → 503", wh.status === 503);

  // ── Solana devnet ──
  if (!fixture || !payer) {
    t("solana: fixture missing (run scripts/topup-devnet-fixture.ts)", false);
  } else {
    const laneB2 = laneBal(A.inf.id);
    const sc: any = await j(await fetch(`${BASE}/api/topup/create`, { method: "POST", headers: A.H, body: JSON.stringify({ provider: "solana", amount_usd: 5, destination: A.inf.id }) }));
    t("solana: create → reference + pay url + qr", sc.provider === "solana" && /^solana:/.test(sc.solana_pay_url) && sc.reference && String(sc.qr_svg).includes("<svg") && sc.amount_minor === 5_000_000, sc.error);
    const txB: any = await j(await fetch(`${BASE}/api/topup/${sc.id}/solana/tx`, { method: "POST", headers: B.H, body: JSON.stringify({ payer: payer.address }) }));
    t("solana: another signed-in user can build the tx for a shared pay link (id = bearer; only the owner is credited)", typeof txB.tx_base64 === "string", txB.error);
    const stBearer: any = await j(await fetch(`${BASE}/api/topup/${sc.id}/status`, { headers: B.H }));
    t("solana: non-owner status → no balance", stBearer.id === sc.id && stBearer.balance === undefined);
    const { generateKeyPairSigner } = await import("@solana/kit");
    const stranger = await generateKeyPairSigner();
    const noUsdc = await fetch(`${BASE}/api/topup/${sc.id}/solana/tx`, { method: "POST", headers: A.H, body: JSON.stringify({ payer: stranger.address }) });
    const noUsdcJ: any = await j(noUsdc);
    t("solana: payer without a token account → 400", noUsdc.status === 400 && noUsdcJ.error === "payer_has_no_usdc_account", noUsdcJ.error);
    const tx: any = await j(await fetch(`${BASE}/api/topup/${sc.id}/solana/tx`, { method: "POST", headers: A.H, body: JSON.stringify({ payer: payer.address }) }));
    t("solana: tx built", typeof tx.tx_base64 === "string" && tx.chain === "solana:devnet" && tx.blockhash, tx.error);
    // sign as Phantom would and broadcast
    const signed = await signTransaction([payer.keyPair], getTransactionDecoder().decode(getBase64Encoder().encode(tx.tx_base64)));
    const rpc = createSolanaRpc("https://api.devnet.solana.com");
    const sig = await rpc.sendTransaction(getBase64EncodedWireTransaction(signed), { encoding: "base64", preflightCommitment: "confirmed" }).send();
    console.log("   sent devnet tx", sig);
    const bogus: any = await j(await fetch(`${BASE}/api/topup/${sc.id}/solana/confirm`, { method: "POST", headers: A.H, body: JSON.stringify({ signature: "abc" }) }));
    t("solana: garbage signature → failed bad_signature", bogus.status === "failed" && bogus.error === "bad_signature");
    const conf: any = await j(await fetch(`${BASE}/api/topup/${sc.id}/solana/confirm`, { method: "POST", headers: A.H, body: JSON.stringify({ signature: sig }) }));
    t("solana: confirm → credited", conf.status === "credited" && conf.explorer_url, JSON.stringify(conf).slice(0, 160));
    t("solana: lane +5", Math.abs(laneBal(A.inf.id) - (laneB2 + 5)) < 1e-9, `lane ${laneBal(A.inf.id)}`);
    const row = db.query("SELECT type, description FROM credit_transactions WHERE user_id = ? AND type = 'topup' ORDER BY rowid DESC LIMIT 1").get(A.u.id) as any;
    t("ledger: USDC top-up row", /USDC on Solana/.test(row?.description || ""), row?.description);
    const again: any = await j(await fetch(`${BASE}/api/topup/${sc.id}/solana/confirm`, { method: "POST", headers: A.H, body: JSON.stringify({ signature: sig }) }));
    t("solana: confirm again → credited/already, no double", again.status === "credited" && Math.abs(laneBal(A.inf.id) - (laneB2 + 5)) < 1e-9);
    // reuse the signature on a fresh top-up
    const sc2: any = await j(await fetch(`${BASE}/api/topup/create`, { method: "POST", headers: A.H, body: JSON.stringify({ provider: "solana", amount_usd: 5, destination: "main" }) }));
    const reuse = await fetch(`${BASE}/api/topup/${sc2.id}/solana/confirm`, { method: "POST", headers: A.H, body: JSON.stringify({ signature: sig }) });
    const reuseJ: any = await j(reuse);
    t("solana: reused signature → 409 signature_already_used", reuse.status === 409 && reuseJ.error === "signature_already_used", reuseJ.error);
    // QR/mobile path: pay a fresh top-up WITHOUT calling confirm; the status poll must find it by reference
    const sc3: any = await j(await fetch(`${BASE}/api/topup/create`, { method: "POST", headers: A.H, body: JSON.stringify({ provider: "solana", amount_usd: 5, destination: "main" }) }));
    const tx3: any = await j(await fetch(`${BASE}/api/topup/${sc3.id}/solana/tx`, { method: "POST", headers: A.H, body: JSON.stringify({ payer: payer.address }) }));
    const signed3 = await signTransaction([payer.keyPair], getTransactionDecoder().decode(getBase64Encoder().encode(tx3.tx_base64)));
    const sig3 = await rpc.sendTransaction(getBase64EncodedWireTransaction(signed3), { encoding: "base64", preflightCommitment: "confirmed" }).send();
    console.log("   sent devnet tx (QR path)", sig3);
    const mainB3 = bal(A.u.id);
    let st3: any = {};
    for (let i = 0; i < 20; i++) { st3 = await j(await fetch(`${BASE}/api/topup/${sc3.id}/status`, { headers: A.H })); if (st3.status === "credited") break; await new Promise((r) => setTimeout(r, 3000)); }
    t("solana: QR path — status poll finds the payment by reference and credits Main", st3.status === "credited" && Math.abs(bal(A.u.id) - (mainB3 + 5)) < 1e-9, `${st3.status} main ${bal(A.u.id)}`);
    // session-less pay page + bearer-by-id access (Phantom in-app browser path)
    const sc5: any = await j(await fetch(`${BASE}/api/topup/create`, { method: "POST", headers: A.H, body: JSON.stringify({ provider: "solana", amount_usd: 5, destination: "main" }) }));
    t("solana: create returns pay_url", typeof sc5.pay_url === "string" && sc5.pay_url.endsWith(`/topup/pay/${sc5.id}`), sc5.pay_url);
    const payPage = await fetch(`${BASE}/topup/pay/${sc5.id}`);
    const payHtml = await payPage.text();
    t("pay page: 200 without a session, preloaded", payPage.status === 200 && /data-tu-preload=/.test(payHtml) && /wallet-standard:app-ready/.test(payHtml) && !/jatevo/i.test(payHtml));
    const payPageSandbox = await fetch(`${BASE}/topup/pay/${cr.id}`);
    t("pay page: sandbox row → 404", payPageSandbox.status === 404);
    db.run("UPDATE topups SET status = 'expired' WHERE id = ?", [sc.id]);
    const deadPay = await (await fetch(`${BASE}/topup/pay/${sc.id}`)).text();
    t("pay page on an expired row: dead copy + hidden panel + preload carries status", /This top-up is expired/.test(deadPay) && /data-tu-pay hidden/.test(deadPay) && /&quot;status&quot;:&quot;expired&quot;/.test(deadPay));
    db.run("UPDATE topups SET status = 'credited' WHERE id = ?", [sc.id]);
    const txAnon: any = await j(await fetch(`${BASE}/api/topup/${sc5.id}/solana/tx`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ payer: payer.address }) }));
    t("bearer-by-id: tx build without session works for a solana row", typeof txAnon.tx_base64 === "string", txAnon.error);
    const stAnon: any = await j(await fetch(`${BASE}/api/topup/${sc5.id}/status`));
    t("bearer-by-id: status without session, no balance leak", stAnon.id === sc5.id && stAnon.balance === undefined && stAnon.status === "pending");
    const txAnonSandbox = await fetch(`${BASE}/api/topup/${cr.id}/solana/tx`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ payer: payer.address }) });
    t("bearer-by-id: sandbox row without session → 404", txAnonSandbox.status === 404);
    const stB: any = await j(await fetch(`${BASE}/api/topup/${sc5.id}/status`, { headers: B.H }));
    t("another user's session on a solana row → bearer read, no balance", stB.id === sc5.id && stB.balance === undefined);
    // pay it via the bearer path and confirm without a session
    const signed5 = await signTransaction([payer.keyPair], getTransactionDecoder().decode(getBase64Encoder().encode(txAnon.tx_base64)));
    const sig5 = await rpc.sendTransaction(getBase64EncodedWireTransaction(signed5), { encoding: "base64", preflightCommitment: "confirmed" }).send();
    const conf5: any = await j(await fetch(`${BASE}/api/topup/${sc5.id}/solana/confirm`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ signature: sig5 }) }));
    t("bearer-by-id: confirm without session credits the OWNER", conf5.status === "credited" && (db.query("SELECT user_id, status FROM topups WHERE id = ?").get(sc5.id) as any).user_id === A.u.id, JSON.stringify(conf5).slice(0, 120));
    // paying an already-credited row again is recorded as an extra payment (not absorbed)
    const tx5b: any = await j(await fetch(`${BASE}/api/topup/${sc5.id}/solana/tx`, { method: "POST", headers: A.H, body: JSON.stringify({ payer: payer.address }) }));
    t("credited row: tx build refused (409 already_credited)", tx5b.error === "already_credited");
    // pay it anyway by rebuilding through the sc3 row's shape: send a second transfer with sc5's reference by hand
    {
      const { address, AccountRole, pipe, createTransactionMessage, setTransactionMessageFeePayer, setTransactionMessageLifetimeUsingBlockhash, appendTransactionMessageInstructions, compileTransaction } = await import("@solana/kit");
      const { TOKEN_PROGRAM_ADDRESS, findAssociatedTokenPda, getTransferCheckedInstruction } = await import("@solana-program/token");
      const mint = address(fixture.mint), tre = address(treasury!.address);
      const [src] = await findAssociatedTokenPda({ mint, owner: payer.address, tokenProgram: TOKEN_PROGRAM_ADDRESS });
      const [dst] = await findAssociatedTokenPda({ mint, owner: tre, tokenProgram: TOKEN_PROGRAM_ADDRESS });
      const ix = getTransferCheckedInstruction({ source: src, mint, destination: dst, authority: payer.address, amount: 5_000_000n, decimals: 6 });
      const withRef = { ...ix, accounts: [...ix.accounts, { address: address(sc5.reference), role: AccountRole.READONLY }] };
      const { value: bh } = await rpc.getLatestBlockhash().send();
      const msg = pipe(createTransactionMessage({ version: 0 }), (m) => setTransactionMessageFeePayer(payer.address, m), (m) => setTransactionMessageLifetimeUsingBlockhash(bh, m), (m) => appendTransactionMessageInstructions([withRef], m));
      const signedX = await signTransaction([payer.keyPair], compileTransaction(msg));
      const sigX = await rpc.sendTransaction(getBase64EncodedWireTransaction(signedX), { encoding: "base64", preflightCommitment: "confirmed" }).send();
      let extra: any = {};
      for (let i = 0; i < 15; i++) { extra = await j(await fetch(`${BASE}/api/topup/${sc5.id}/solana/confirm`, { method: "POST", headers: A.H, body: JSON.stringify({ signature: sigX }) })); if (db.query("SELECT 1 FROM topup_events WHERE event_id = ?").get(sigX)) break; await new Promise((r) => setTimeout(r, 2500)); }
      const evt = db.query("SELECT kind FROM topup_events WHERE event_id = ?").get(sigX) as any;
      const ae = db.query("SELECT COUNT(*) n FROM admin_events WHERE action = 'topup_extra_payment' AND target_user_id = ?").get(A.u.id) as any;
      t("second payment for a credited row → recorded as extra_payment + admin event, no double credit", extra.status === "credited" && extra.already === true && evt?.kind === "extra_payment" && Number(ae.n) >= 1, JSON.stringify({ evt, n: ae?.n }));
    }
    // server-side sweeper: pay a row and never call confirm/status; the sweep must credit it
    const sc6: any = await j(await fetch(`${BASE}/api/topup/create`, { method: "POST", headers: A.H, body: JSON.stringify({ provider: "solana", amount_usd: 5, destination: "main" }) }));
    const tx6: any = await j(await fetch(`${BASE}/api/topup/${sc6.id}/solana/tx`, { method: "POST", headers: A.H, body: JSON.stringify({ payer: payer.address }) }));
    const signed6 = await signTransaction([payer.keyPair], getTransactionDecoder().decode(getBase64Encoder().encode(tx6.tx_base64)));
    const sig6 = await rpc.sendTransaction(getBase64EncodedWireTransaction(signed6), { encoding: "base64", preflightCommitment: "confirmed" }).send();
    console.log("   sent devnet tx (sweeper path)", sig6);
    let swept = "";
    for (let i = 0; i < 20; i++) { swept = (db.query("SELECT status FROM topups WHERE id = ?").get(sc6.id) as any)?.status; if (swept === "credited") break; await new Promise((r) => setTimeout(r, 3000)); }
    t("sweeper: QR-style payment credited with NO client poll", swept === "credited", swept);
    // admin manual settle with proof (signature)
    const sc7: any = await j(await fetch(`${BASE}/api/topup/create`, { method: "POST", headers: A.H, body: JSON.stringify({ provider: "solana", amount_usd: 5, destination: "main" }) }));
    const tx7: any = await j(await fetch(`${BASE}/api/topup/${sc7.id}/solana/tx`, { method: "POST", headers: A.H, body: JSON.stringify({ payer: payer.address }) }));
    const signed7 = await signTransaction([payer.keyPair], getTransactionDecoder().decode(getBase64Encoder().encode(tx7.tx_base64)));
    const sig7 = await rpc.sendTransaction(getBase64EncodedWireTransaction(signed7), { encoding: "base64", preflightCommitment: "confirmed" }).send();
    const login0 = await fetch(`${BASE}/admin/login`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email: "e2e-admin@example.com", token: "e2e-admin-token" }) });
    const admCk = (login0.headers.get("set-cookie") || "").split(";")[0];
    let adm7: any = {};
    for (let i = 0; i < 12; i++) { const r = await fetch(`${BASE}/admin/api/topups/${sc7.id}/settle`, { method: "POST", headers: { "Content-Type": "application/json", Cookie: admCk }, body: JSON.stringify({ signature: sig7 }) }); adm7 = await j(r); if (adm7.ok) break; await new Promise((r) => setTimeout(r, 2500)); }
    t("admin: manual settle with a verified signature → credited", adm7.ok === true && adm7.topup?.status === "credited", JSON.stringify(adm7).slice(0, 120));
    const admBad = await fetch(`${BASE}/admin/api/topups/${sc7.id}/settle`, { method: "POST", headers: { "Content-Type": "application/json", Cookie: admCk }, body: JSON.stringify({}) });
    t("admin: settle without proof → 400/409, never a bare credit", admBad.status === 400 || admBad.status === 409 || (await j(admBad)).ok === undefined);
    // underpay: build for $5 top-up but expect $50 (row edited) → verify must refuse
    const sc4: any = await j(await fetch(`${BASE}/api/topup/create`, { method: "POST", headers: A.H, body: JSON.stringify({ provider: "solana", amount_usd: 5, destination: "main" }) }));
    const tx4: any = await j(await fetch(`${BASE}/api/topup/${sc4.id}/solana/tx`, { method: "POST", headers: A.H, body: JSON.stringify({ payer: payer.address }) }));
    const signed4 = await signTransaction([payer.keyPair], getTransactionDecoder().decode(getBase64Encoder().encode(tx4.tx_base64)));
    const sig4 = await rpc.sendTransaction(getBase64EncodedWireTransaction(signed4), { encoding: "base64", preflightCommitment: "confirmed" }).send();
    db.run("UPDATE topups SET amount_minor = 50000000, amount_usd = 50 WHERE id = ?", [sc4.id]);
    const under: any = await j(await fetch(`${BASE}/api/topup/${sc4.id}/solana/confirm`, { method: "POST", headers: A.H, body: JSON.stringify({ signature: sig4 }) }));
    t("solana: underpaid transfer → refused, no credit", under.status === "failed" && /underpaid/.test(under.error || "") && (db.query("SELECT status FROM topups WHERE id = ?").get(sc4.id) as any).status !== "credited", under.error);
  }

  // ── Stripe webhook over HTTP on a second instance with (fake) keys ──
  s2 = await spawnServer(P2, { ...baseEnv, STRIPE_SECRET_KEY: "sk_test_e2e_placeholder_000000000000", STRIPE_WEBHOOK_SECRET: "whsec_e2e_secret", PUBLIC_BASE_URL: `http://127.0.0.1:${P2}` });
  const cfg2: any = await j(await fetch(`${s2.base}/api/topup/config`, { headers: A.H }));
  t("with stripe keys: card rail = stripe (test)", cfg2.card.provider === "stripe" && cfg2.card.livemode === false);
  const crS = await fetch(`${s2.base}/api/topup/create`, { method: "POST", headers: A.H, body: JSON.stringify({ provider: "card", amount_usd: 10 }) });
  const crSJ: any = await j(crS);
  t("with fake key: checkout create fails gracefully (502 card_unavailable)", crS.status === 502 && crSJ.error === "card_unavailable", `${crS.status} ${crSJ.error}`);
  // seed a stripe topup row as the app would after a real session create
  const { createTopup, markTopup, getTopup } = await import("../server/topups/index");
  const srow = createTopup({ userId: A.u.id, provider: "stripe", amountUsd: 10, amountMinor: 1000, currency: "usd", destination: "main", cluster: "test" });
  markTopup(srow.id, { status: "pending", provider_ref: "cs_test_e2e_1" });
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey("raw", enc.encode("whsec_e2e_secret"), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const sign = async (payload: string, ts = Math.floor(Date.now() / 1000)) => `t=${ts},v1=${Array.from(new Uint8Array(await crypto.subtle.sign("HMAC", key, enc.encode(`${ts}.${payload}`)))).map((b) => b.toString(16).padStart(2, "0")).join("")}`;
  const evt = (id: string, sess: any) => JSON.stringify({ id, object: "event", type: "checkout.session.completed", livemode: false, data: { object: { object: "checkout.session", ...sess } } });
  const mainS = bal(A.u.id);
  const p1 = evt("evt_e2e_1", { id: "cs_test_e2e_1", payment_status: "paid", amount_total: 1000, currency: "usd", metadata: { topup_id: srow.id, user_id: A.u.id }, customer_details: { email: "probe@example.com" } });
  const w1 = await fetch(`${s2.base}/webhooks/stripe`, { method: "POST", body: p1, headers: { "content-type": "application/json", "stripe-signature": await sign(p1) } });
  const w1j: any = await j(w1);
  t("stripe webhook: signed completed → 200 credited", w1.status === 200 && w1j.ok === true && getTopup(srow.id)?.status === "credited" && Math.abs(bal(A.u.id) - (mainS + 10)) < 1e-9, JSON.stringify(w1j));
  const w2 = await fetch(`${s2.base}/webhooks/stripe`, { method: "POST", body: p1, headers: { "content-type": "application/json", "stripe-signature": await sign(p1) } });
  const w2j: any = await j(w2);
  t("stripe webhook: replay same event id → 200 replay, no double credit", w2.status === 200 && w2j.replay === true && Math.abs(bal(A.u.id) - (mainS + 10)) < 1e-9);
  const w3 = await fetch(`${s2.base}/webhooks/stripe`, { method: "POST", body: p1, headers: { "content-type": "application/json", "stripe-signature": "t=1,v1=deadbeef" } });
  t("stripe webhook: bad signature → 400", w3.status === 400);
  const w3b = await fetch(`${s2.base}/webhooks/stripe`, { method: "POST", body: p1, headers: { "content-type": "application/json", "stripe-signature": await sign(p1, Math.floor(Date.now() / 1000) - 3600) } });
  t("stripe webhook: stale timestamp → 400", w3b.status === 400);
  const srow2 = createTopup({ userId: A.u.id, provider: "stripe", amountUsd: 10, amountMinor: 1000, currency: "usd", destination: "main", cluster: "test" });
  markTopup(srow2.id, { status: "pending", provider_ref: "cs_test_e2e_2" });
  const p2 = evt("evt_e2e_2", { id: "cs_test_e2e_2", payment_status: "paid", amount_total: 100, currency: "usd", metadata: { topup_id: srow2.id, user_id: A.u.id } });
  const w4 = await fetch(`${s2.base}/webhooks/stripe`, { method: "POST", body: p2, headers: { "content-type": "application/json", "stripe-signature": await sign(p2) } });
  const w4j: any = await j(w4);
  t("stripe webhook: amount tampered → failed, no credit", w4.status === 200 && w4j.error === "amount_mismatch" && getTopup(srow2.id)?.status === "failed" && Math.abs(bal(A.u.id) - (mainS + 10)) < 1e-9);
  const stTampered: any = await j(await fetch(`${s2.base}/api/topup/${srow2.id}/status`, { headers: A.H }));
  t("public status carries a coded reason, not the raw text", stTampered.error === "amount_mismatch" && !/expected/.test(String(stTampered.error)));
  const srow3 = createTopup({ userId: A.u.id, provider: "stripe", amountUsd: 10, amountMinor: 1000, currency: "usd", destination: "main", cluster: "test" });
  markTopup(srow3.id, { status: "pending", provider_ref: "cs_test_e2e_3" });
  const p3 = evt("evt_e2e_3", { id: "cs_test_FORGED", payment_status: "paid", amount_total: 1000, currency: "usd", metadata: { topup_id: srow3.id, user_id: A.u.id } });
  const w5 = await fetch(`${s2.base}/webhooks/stripe`, { method: "POST", body: p3, headers: { "content-type": "application/json", "stripe-signature": await sign(p3) } });
  const w5j: any = await j(w5);
  t("stripe webhook: session id ≠ the one we opened → session_mismatch, no credit", w5j.error === "session_mismatch" && getTopup(srow3.id)?.status !== "credited");
  const p4 = evt("evt_e2e_4", { id: "cs_test_e2e_3", payment_status: "unpaid", amount_total: 1000, currency: "usd", metadata: { topup_id: srow3.id, user_id: A.u.id } });
  const w6 = await fetch(`${s2.base}/webhooks/stripe`, { method: "POST", body: p4, headers: { "content-type": "application/json", "stripe-signature": await sign(p4) } });
  const w6j: any = await j(w6);
  t("stripe webhook: payment_status unpaid → no credit", /payment_status_unpaid/.test(w6j.error || "") && getTopup(srow3.id)?.status !== "credited");
  const p5 = JSON.stringify({ id: "evt_e2e_5", object: "event", type: "checkout.session.expired", livemode: false, data: { object: { object: "checkout.session", id: "cs_test_e2e_3", metadata: { topup_id: srow3.id } } } });
  const w7 = await fetch(`${s2.base}/webhooks/stripe`, { method: "POST", body: p5, headers: { "content-type": "application/json", "stripe-signature": await sign(p5) } });
  t("stripe webhook: session expired → row expired", w7.status === 200 && getTopup(srow3.id)?.status === "expired");
  const wallets2 = await (await fetch(`${s2.base}/wallets`, { headers: A.H })).text();
  t("/wallets with stripe: 'Pay by card (test mode)' + Stripe named in fine print", /Pay by card \(test mode\)/.test(wallets2) && /via Stripe/.test(wallets2));

  // refund/dispute events flag the row (no auto clawback)
  const p6 = JSON.stringify({ id: "evt_e2e_6", object: "event", type: "charge.refunded", livemode: false, data: { object: { object: "charge", id: "ch_test_1", payment_intent: "pi_test_1", amount_refunded: 1000, metadata: { topup_id: srow.id } } } });
  const w8 = await fetch(`${s2.base}/webhooks/stripe`, { method: "POST", body: p6, headers: { "content-type": "application/json", "stripe-signature": await sign(p6) } });
  const w8j: any = await j(w8);
  const revRow = getTopup(srow.id);
  const revEvt = db.query("SELECT COUNT(*) n FROM admin_events WHERE action = 'topup_reversed' AND target_user_id = ?").get(A.u.id) as any;
  t("stripe webhook: charge.refunded → row flagged reversed + admin event, credits untouched", w8.status === 200 && w8j.reversed === true && String(revRow?.error).startsWith("reversed:") && Number(revEvt.n) >= 1 && Math.abs(bal(A.u.id) - (mainS + 10)) < 1e-9, JSON.stringify(w8j));

  // TOPUPS_MODE=all: non-production rails stay closed for the public, open for staging
  const s3 = await spawnServer(8297, { ...baseEnv, TOPUPS_MODE: "all", TOPUP_SWEEP: "0", STRIPE_SECRET_KEY: "sk_test_e2e_placeholder_000000000000", STRIPE_WEBHOOK_SECRET: "whsec_x" });
  try {
    const cB: any = await j(await fetch(`${s3.base}/api/topup/config`, { headers: B.H }));
    t("mode=all: public user enabled but devnet solana + test stripe rails CLOSED", cB.enabled === true && cB.solana.enabled === false && cB.card.provider === null, JSON.stringify({ s: cB.solana?.enabled, c: cB.card }));
    const cA: any = await j(await fetch(`${s3.base}/api/topup/config`, { headers: A.H }));
    t("mode=all: allowlisted operator still sees devnet + test rails", cA.solana.enabled === true && cA.card.provider === "stripe");
    const crB3 = await fetch(`${s3.base}/api/topup/create`, { method: "POST", headers: B.H, body: JSON.stringify({ provider: "solana", amount_usd: 10 }) });
    t("mode=all: public solana create on devnet → 503", crB3.status === 503);
  } finally { s3.proc.kill(); }

  // admin list (token gate) — unauth → 401, authed → 200 with the rows above
  const adm = await fetch(`${BASE}/admin/api/topups`);
  t("admin topups: unauth → 401", adm.status === 401, String(adm.status));
  const login = await fetch(`${BASE}/admin/login`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email: "e2e-admin@example.com", token: "e2e-admin-token" }) });
  const adminCookie = (login.headers.get("set-cookie") || "").split(";")[0];
  const admOk = await fetch(`${BASE}/admin/api/topups`, { headers: { Cookie: adminCookie } });
  const admJ: any = await j(admOk);
  t("admin topups: authed → 200 with totals + rows (route mounted before app.route)", admOk.status === 200 && admJ.totals && Array.isArray(admJ.topups) && admJ.topups.some((r: any) => r.user_id === A.u.id && r.status === "credited"), `${admOk.status} ${JSON.stringify(admJ.totals || admJ)}`.slice(0, 160));
  t("admin topups: raw error text is operator-side, public status shows a code", (() => { const bad = admJ.topups.find((r: any) => r.error && String(r.error).startsWith("amount_mismatch")); return !!bad; })());
} finally {
  try { s1?.proc.kill(); } catch {}
  try { s2?.proc.kill(); } catch {}
  purge(A.u.id); purge(B.u.id); purge(C.u.id);
  console.log("   purged throwaways");
}
const fails = results.filter((r) => !r[1]);
console.log(`\n${results.length - fails.length}/${results.length} passed${fails.length ? " — FAILURES: " + fails.map((f) => f[0]).join(" | ") : ""}`);
process.exit(fails.length ? 1 : 0);
