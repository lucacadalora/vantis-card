// USDC on Solana — the crypto top-up rail, paid from the customer's own
// wallet (Phantom). The server holds NO key: SOLANA_TREASURY_ADDRESS is a
// receiving address the operator controls (Phantom / Ledger). We build the
// transfer transaction here so the browser never touches an RPC, hand the
// unsigned wire bytes to Phantom, and verify the resulting signature on-chain
// before a single credit moves.
//
// Standard shape (Solana Pay transfer request): a fresh REFERENCE pubkey per
// top-up rides on the transfer instruction as a read-only account, so the
// payment can be found by getSignaturesForAddress(reference) even when the
// wallet paid via QR on a phone and never talked to our page.

import {
  createSolanaRpc,
  address,
  isAddress,
  pipe,
  createTransactionMessage,
  setTransactionMessageFeePayer,
  setTransactionMessageLifetimeUsingBlockhash,
  appendTransactionMessageInstructions,
  compileTransaction,
  getBase64EncodedWireTransaction,
  getBase58Decoder,
  getBase58Encoder,
  getBase64Encoder,
  getBase64Decoder,
  getTransactionDecoder,
  getTransactionEncoder,
  signTransaction,
  createKeyPairSignerFromPrivateKeyBytes,
  createNoopSigner,
  AccountRole,
  type Address,
  type KeyPairSigner,
} from "@solana/kit";
import {
  TOKEN_PROGRAM_ADDRESS,
  findAssociatedTokenPda,
  getCreateAssociatedTokenIdempotentInstruction,
  getTransferCheckedInstruction,
} from "@solana-program/token";
import { getAddMemoInstruction } from "@solana-program/memo";
import { getTopup, markTopup, settleTopup, getTopupByProviderRef, recordProviderEvent, metaOf, type TopupRow } from "./index";
import { adminEvent, getDb } from "../db";

export type Cluster = "devnet" | "mainnet-beta";

const USDC_MAINNET = "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v";
const USDC_DEVNET = "4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU"; // Circle's devnet USDC

const RPC_DEFAULTS: Record<Cluster, string[]> = {
  // api.devnet rate-limits per IP (100 req/10 s); MagicBlock's keyless devnet
  // RPC is the fallback (also the only airdrop route that works from here).
  devnet: ["https://api.devnet.solana.com", "https://rpc.magicblock.app/devnet"],
  "mainnet-beta": ["https://api.mainnet-beta.solana.com", "https://solana-rpc.publicnode.com"],
};

export function solanaCluster(): Cluster {
  const c = String(process.env.SOLANA_CLUSTER || "devnet").toLowerCase();
  return c === "mainnet-beta" || c === "mainnet" ? "mainnet-beta" : "devnet";
}

export function solanaConfig() {
  const cluster = solanaCluster();
  const treasury = String(process.env.SOLANA_TREASURY_ADDRESS || "").trim();
  const mint = String(process.env.SOLANA_USDC_MINT || (cluster === "mainnet-beta" ? USDC_MAINNET : USDC_DEVNET)).trim();
  const decimals = Number(process.env.SOLANA_USDC_DECIMALS || 6);
  const rpcs = String(process.env.SOLANA_RPC_URLS || "").split(",").map((s) => s.trim()).filter(Boolean);
  return {
    cluster,
    treasury,
    mint,
    decimals: Number.isFinite(decimals) ? decimals : 6,
    rpcs: rpcs.length ? rpcs : RPC_DEFAULTS[cluster],
    enabled: isAddress(treasury) && isAddress(mint),
    chain: cluster === "mainnet-beta" ? "solana:mainnet" : "solana:devnet",
    label: cluster === "mainnet-beta" ? "USDC on Solana" : "USDC on Solana devnet (test tokens)",
  };
}

export const solanaEnabled = () => solanaConfig().enabled;

// ── Sponsored gas ("you only need USDC") ──
// A SERVER-held keypair pays the network fee (and, once, the treasury ATA
// rent). It is NOT the treasury: it holds a little SOL and nothing else. It
// only ever co-signs transaction messages this server built itself for a
// live top-up row (byte-for-byte compare), so it cannot be turned into a
// general fee sponsor. SOLANA_SPONSOR_SECRET = base58 32-byte seed in .env.
let sponsorSigner: KeyPairSigner | null = null;
let sponsorSecretSeen = "";
export async function sponsor(): Promise<KeyPairSigner | null> {
  const secret = String(process.env.SOLANA_SPONSOR_SECRET || "").trim();
  if (!secret) return null;
  if (sponsorSigner && sponsorSecretSeen === secret) return sponsorSigner;
  try {
    const bytes = secret.startsWith("[") ? new Uint8Array(JSON.parse(secret)) : getBase58Encoder().encode(secret) as Uint8Array;
    sponsorSigner = await createKeyPairSignerFromPrivateKeyBytes(bytes.length === 64 ? bytes.slice(0, 32) : bytes);
    sponsorSecretSeen = secret;
    return sponsorSigner;
  } catch (e: any) {
    console.error("solana sponsor key unusable:", e?.message || e);
    return null;
  }
}
const SPONSOR_MIN_LAMPORTS = BigInt(Math.round(Number(process.env.SOLANA_SPONSOR_MIN_SOL || 0.01) * 1e9));
let sponsorBalCache: { at: number; lamports: bigint } = { at: 0, lamports: 0n };
export async function sponsorStatus(): Promise<{ enabled: boolean; address: string | null; lamports: bigint; reason?: string }> {
  const sp = await sponsor();
  if (!sp) return { enabled: false, address: null, lamports: 0n, reason: "no_sponsor_key" };
  if (Date.now() - sponsorBalCache.at > 30_000) {
    try {
      const bal = await withRpc(async (rpc) => await rpc.getBalance(sp.address).send());
      sponsorBalCache = { at: Date.now(), lamports: BigInt(bal.value) };
    } catch { /* keep the last reading */ }
  }
  const ok = sponsorBalCache.lamports >= SPONSOR_MIN_LAMPORTS;
  return { enabled: ok, address: sp.address, lamports: sponsorBalCache.lamports, reason: ok ? undefined : "sponsor_low_balance" };
}
export const sponsorAvailable = async () => (await sponsorStatus()).enabled;
// Sync view for page renders (refreshed by the sweeper tick + on demand).
let sponsorSync: { enabled: boolean; address: string | null } = { enabled: false, address: null };
export function sponsorEnabledSync(): { enabled: boolean; address: string | null } { return sponsorSync; }
export async function refreshSponsorSync(): Promise<void> {
  try { const st = await sponsorStatus(); sponsorSync = { enabled: st.enabled, address: st.address }; } catch { sponsorSync = { enabled: false, address: null }; }
}

export function explorerUrl(sig: string): string {
  const c = solanaCluster();
  return `https://explorer.solana.com/tx/${sig}${c === "devnet" ? "?cluster=devnet" : ""}`;
}

// ── RPC ladder: first endpoint that answers wins; errors fall through ──

async function withRpc<T>(fn: (rpc: ReturnType<typeof createSolanaRpc>) => Promise<T>): Promise<T> {
  let last: any;
  for (const url of solanaConfig().rpcs) {
    try {
      return await fn(createSolanaRpc(url));
    } catch (e: any) {
      last = e;
      console.error(`solana rpc ${url}: ${String(e?.message || e).slice(0, 160)}`);
    }
  }
  throw last || new Error("solana_rpc_unavailable");
}

// ── amounts ──

export function usdToUsdcMinor(usd: number, decimals = solanaConfig().decimals): number {
  return Math.round(usd * 10 ** decimals);
}
export function minorToUi(minor: number | bigint, decimals = solanaConfig().decimals): string {
  const n = Number(minor) / 10 ** decimals;
  return n.toFixed(Math.min(decimals, 6)).replace(/\.?0+$/, "");
}

// A fresh reference: 32 random bytes as a base58 address (not a real
// account — it never needs to exist on chain, it is only a marker).
export function newReference(): string {
  return getBase58Decoder().decode(crypto.getRandomValues(new Uint8Array(32)));
}

// Solana Pay transfer request URL (https://docs.solanapay.com/spec)
export function solanaPayUrl(t: TopupRow): string {
  const cfg = solanaConfig();
  const amount = minorToUi(t.amount_minor, cfg.decimals);
  // Percent-encode by hand: URLSearchParams writes spaces as "+", which some
  // wallet parsers keep literally; the Solana Pay spec wants %20.
  const parts: [string, string][] = [
    ["amount", amount],
    ["spl-token", cfg.mint],
    ...(t.reference ? [["reference", t.reference] as [string, string]] : []),
    ["label", "Vantis Card"],
    ["message", `Top-up $${Number(t.amount_usd).toFixed(2)} in inference credits`],
    ["memo", `vantis-topup ${t.id}`],
  ];
  return `solana:${cfg.treasury}?${parts.map(([k, v]) => `${k}=${encodeURIComponent(v)}`).join("&")}`;
}

// ── build the unsigned transfer for Phantom ──

export async function buildTransferTx(t: TopupRow, payer: string, opts: { sponsored?: boolean } = {}): Promise<{ tx_base64: string; blockhash: string; last_valid_block_height: number; chain: string; treasury_ata: string; payer_ata: string; sponsored: boolean; fee_payer: string; message_b64?: string }> {
  const cfg = solanaConfig();
  if (!cfg.enabled) throw new Error("solana_not_configured");
  if (!isAddress(payer)) throw new Error("bad_payer");
  if (!t.reference || !isAddress(t.reference)) throw new Error("no_reference");
  const mint = address(cfg.mint);
  const treasury = address(cfg.treasury);
  const payerAddr = address(payer);
  const sp = opts.sponsored ? await sponsor() : null;
  const sponsored = !!sp && (await sponsorAvailable());
  const feePayer = sponsored ? sp!.address : payerAddr;
  const [payerAta] = await findAssociatedTokenPda({ mint, owner: payerAddr, tokenProgram: TOKEN_PROGRAM_ADDRESS });
  const [treasuryAta] = await findAssociatedTokenPda({ mint, owner: treasury, tokenProgram: TOKEN_PROGRAM_ADDRESS });

  return await withRpc(async (rpc) => {
    const { value: bh } = await rpc.getLatestBlockhash({ commitment: "confirmed" }).send();
    // The payer must already hold the token (we cannot create THEIR account
    // with THEIR authority from here — Phantom would, but an explicit error
    // beats a confusing wallet failure).
    const payerAcc = await rpc.getAccountInfo(payerAta, { encoding: "base64" }).send();
    if (!payerAcc.value) throw new Error("payer_has_no_usdc_account");

    // The customer must be marked as a SIGNER of the transfer even when they
    // are not the fee payer (a plain address gets a non-signer role and the
    // sponsored tx would then have no slot for their signature).
    const transfer = getTransferCheckedInstruction({
      source: payerAta,
      mint,
      destination: treasuryAta,
      authority: createNoopSigner(payerAddr), // signer slot; Phantom fills it
      amount: BigInt(t.amount_minor),
      decimals: cfg.decimals,
    });
    // Reference rides as an extra read-only, non-signer account (Solana Pay).
    const transferWithRef = { ...transfer, accounts: [...transfer.accounts, { address: address(t.reference!), role: AccountRole.READONLY }] };

    const ixs = [
      // The fee payer (sponsor when sponsored, else the customer) covers the
      // treasury's token account rent if it does not exist yet (idempotent:
      // a no-op when it does).
      getCreateAssociatedTokenIdempotentInstruction({ payer: createNoopSigner(feePayer), ata: treasuryAta, owner: treasury, mint }),
      transferWithRef,
      getAddMemoInstruction({ memo: `vantis-topup ${t.id}` }),
    ];
    const msg = pipe(
      createTransactionMessage({ version: 0 }),
      (m) => setTransactionMessageFeePayer(feePayer, m),
      (m) => setTransactionMessageLifetimeUsingBlockhash(bh, m),
      (m) => appendTransactionMessageInstructions(ixs, m),
    );
    const compiled = compileTransaction(msg);
    const wire = getBase64EncodedWireTransaction(compiled);
    const messageB64 = getBase64Decoder().decode(compiled.messageBytes);
    return { tx_base64: wire, blockhash: String(bh.blockhash), last_valid_block_height: Number(bh.lastValidBlockHeight), chain: cfg.chain, treasury_ata: treasuryAta as string, payer_ata: payerAta as string, sponsored, fee_payer: feePayer as string, message_b64: sponsored ? messageB64 : undefined };
  });
}

// ── sponsored submit: the customer signed OUR message; we add the fee-payer
// signature and broadcast. The message must equal, byte for byte, the one we
// built for this row (stored in meta by the route) — the sponsor never signs
// anything else.
export async function submitSponsored(t: TopupRow, signedTxB64: string, expectedMessageB64: string): Promise<{ signature: string }> {
  const sp = await sponsor();
  if (!sp) throw new Error("sponsor_unavailable");
  let tx: any;
  try { tx = getTransactionDecoder().decode(getBase64Encoder().encode(signedTxB64)); } catch { throw new Error("bad_signed_tx"); }
  const gotMsg = getBase64Decoder().decode(tx.messageBytes);
  if (!expectedMessageB64 || gotMsg !== expectedMessageB64) throw new Error("message_mismatch");
  // The customer's signature slot must be filled; the sponsor's may be empty.
  const sigs = tx.signatures as Record<string, Uint8Array | null>;
  const filled = Object.entries(sigs).filter(([addr, sig]) => addr !== sp.address && sig && (sig as Uint8Array).some((b: number) => b !== 0));
  if (!filled.length) throw new Error("customer_signature_missing");
  const fully = await signTransaction([sp.keyPair], tx);
  const wire = getBase64EncodedWireTransaction(fully as any);
  const sig = await withRpc(async (rpc) => await rpc.sendTransaction(wire as any, { encoding: "base64", preflightCommitment: "confirmed", maxRetries: 3n } as any).send());
  return { signature: String(sig) };
}

// ── verify a signature on chain ──

export type VerifyResult =
  | { ok: true; signature: string; payer: string | null; slot: number; block_time: number | null; amount_minor: number }
  | { ok: false; error: string; retry?: boolean };

// The one question we ask the chain: did the treasury OWNER's balance of the
// configured mint go up by at least the amount, in a successful transaction
// that carries our reference? Balance deltas by owner+mint are robust to how
// the wallet built the transfer (transfer vs transferChecked, ATA created in
// the same tx, multiple token accounts).
export async function verifyPayment(t: TopupRow, sig: string): Promise<VerifyResult> {
  const cfg = solanaConfig();
  if (!cfg.enabled) return { ok: false, error: "solana_not_configured" };
  if (!/^[1-9A-HJ-NP-Za-km-z]{64,90}$/.test(sig)) return { ok: false, error: "bad_signature" };
  try { if (getBase58Encoder().encode(sig).length !== 64) return { ok: false, error: "bad_signature" }; } catch { return { ok: false, error: "bad_signature" }; }
  // Reused signature: settled another row already?
  const used = getTopupByProviderRef("solana", sig);
  if (used && used.id !== t.id) return { ok: false, error: "signature_already_used" };

  let tx: any;
  try {
    tx = await withRpc(async (rpc) => await rpc.getTransaction(sig as any, { commitment: "confirmed", maxSupportedTransactionVersion: 0, encoding: "jsonParsed" } as any).send());
  } catch (e: any) {
    const msg = String(e?.message || e);
    // Invalid-param answers are final (a malformed signature); only transport
    // and rate-limit failures are worth another look.
    if (/invalid param|WrongSize|Invalid signature|-32602/i.test(msg)) return { ok: false, error: "bad_signature" };
    return { ok: false, error: `rpc_error: ${msg.slice(0, 120)}`, retry: true };
  }
  if (!tx) return { ok: false, error: "not_found_yet", retry: true };
  if (tx.meta?.err) return { ok: false, error: "transaction_failed" };

  const keys: any[] = tx.transaction?.message?.accountKeys || [];
  const keyStr = (k: any) => (typeof k === "string" ? k : String(k?.pubkey || ""));
  const hasRef = !!t.reference && keys.some((k) => keyStr(k) === t.reference);
  if (!hasRef) return { ok: false, error: "reference_missing" };

  const pre: any[] = tx.meta?.preTokenBalances || [];
  const post: any[] = tx.meta?.postTokenBalances || [];
  const mine = (b: any) => String(b.mint) === cfg.mint && String(b.owner || "") === cfg.treasury;
  // The chain's own decimals for this mint must agree with our configuration,
  // or a raw-unit comparison could be off by powers of ten.
  const seenDecimals = [...pre, ...post].filter(mine).map((b) => Number(b.uiTokenAmount?.decimals));
  if (seenDecimals.some((d) => Number.isFinite(d) && d !== cfg.decimals)) return { ok: false, error: "decimals_mismatch" };
  const sum = (arr: any[]) => arr.filter(mine).reduce((s, b) => s + BigInt(String(b.uiTokenAmount?.amount || "0")), 0n);
  const delta = sum(post) - sum(pre);
  if (delta <= 0n) return { ok: false, error: "no_treasury_credit_for_mint" };
  if (delta < BigInt(t.amount_minor)) return { ok: false, error: `underpaid: got ${delta.toString()} expected ${t.amount_minor}` };

  const bt = tx.blockTime != null ? Number(tx.blockTime) : null;
  // A QR stays payable for as long as it is on a screen; accept a week.
  if (bt != null && Math.abs(Date.now() / 1000 - bt) > 7 * 24 * 3600) return { ok: false, error: "stale_transaction" };

  // Payer = the fee payer (first signer) — informational.
  const payer = keys.length ? keyStr(keys[0]) : null;
  return { ok: true, signature: sig, payer, slot: Number(tx.slot || 0), block_time: bt, amount_minor: Number(delta) };
}

// Confirm + settle: called from the browser after Phantom returns a
// signature, and from the status poller for QR/mobile payers.
export async function confirmAndSettle(t: TopupRow, sig: string): Promise<{ status: "credited" | "pending" | "failed"; error?: string; already?: boolean; balance_main?: number; balance_lane?: number | null; explorer_url?: string }> {
  const fresh = getTopup(t.id) || t;
  if (fresh.status === "credited") {
    // A DIFFERENT valid payment for a row that is already settled = the
    // customer paid twice (desktop + QR). Never silently absorbed: verify it,
    // write it down, tell the operator so it can be refunded or credited.
    if (sig && sig !== fresh.provider_ref) {
      const v2 = await verifyPayment(fresh, sig);
      if (v2.ok && recordProviderEvent("solana", sig, "extra_payment", { topup: fresh.id, amount_minor: v2.amount_minor, payer: v2.payer, slot: v2.slot }, fresh.id)) {
        adminEvent("topup_extra_payment", fresh.user_id, `second on-chain payment for ${fresh.id}: ${minorToUi(v2.amount_minor)} USDC sig ${sig.slice(0, 20)}… — refund or credit by hand`);
      }
    }
    return { status: "credited", already: true, explorer_url: fresh.provider_ref ? explorerUrl(fresh.provider_ref) : undefined };
  }
  const v = await verifyPayment(fresh, sig);
  if (!v.ok) {
    if (v.retry) return { status: "pending", error: v.error };
    // Terminal verification failures are recorded but do NOT close the row:
    // a mistaken signature must not kill a top-up the customer can still pay
    // by QR. The row simply keeps waiting (and expires on schedule).
    markTopup(fresh.id, { error: v.error, meta: { last_bad_signature: sig } });
    return { status: "failed", error: v.error };
  }
  const r = settleTopup(fresh.id, {
    provider_ref: sig,
    payer: v.payer,
    meta: { slot: v.slot, block_time: v.block_time, explorer_url: explorerUrl(sig), cluster: solanaCluster(), amount_received_minor: v.amount_minor },
    description: `Top-up: ${minorToUi(fresh.amount_minor)} USDC on Solana`,
  });
  if (!r.ok) return { status: "failed", error: r.error };
  return { status: "credited", already: r.already, balance_main: r.balance_main, balance_lane: r.balance_lane, explorer_url: explorerUrl(sig) };
}

// QR / mobile path: look the reference up on chain. Every candidate is
// verified (oldest first, like @solana/pay) — a later transaction that merely
// mentions the public reference must not mask the real payment. Signatures
// that already failed verification are remembered in meta and skipped.
export async function findByReference(t: TopupRow): Promise<string | null> {
  if (!t.reference) return null;
  const bad: string[] = Array.isArray(metaOf(t).bad_signatures) ? metaOf(t).bad_signatures : [];
  try {
    const sigs = await withRpc(async (rpc) => await rpc.getSignaturesForAddress(address(t.reference!), { limit: 20 } as any).send());
    const candidates = (sigs as any[]).filter((s) => s && !s.err).map((s) => String(s.signature)).reverse();
    for (const sig of candidates) {
      if (bad.includes(sig)) continue;
      const v = await verifyPayment(t, sig);
      if (v.ok) return sig;
      if (!v.retry && v.error !== "signature_already_used") {
        bad.push(sig);
        markTopup(t.id, { meta: { bad_signatures: bad.slice(-20) } });
      }
    }
  } catch (e: any) {
    console.error(`findByReference: ${String(e?.message || e).slice(0, 120)}`);
  }
  return null;
}

// For an already-credited row: any OTHER successful transaction carrying its
// reference is a second payment — verify and record it (extra_payment) so
// the operator can refund or credit it by hand. Nothing is credited here.
export async function scanExtraPayments(t: TopupRow): Promise<number> {
  if (!t.reference || t.status !== "credited") return 0;
  let found = 0;
  try {
    const sigs = await withRpc(async (rpc) => await rpc.getSignaturesForAddress(address(t.reference!), { limit: 20 } as any).send());
    for (const s of sigs as any[]) {
      const sig = String(s?.signature || "");
      if (!sig || s?.err || sig === t.provider_ref) continue;
      if (getDb().query("SELECT 1 FROM topup_events WHERE event_id = ?").get(sig)) continue;
      const v = await verifyPayment(t, sig);
      if (v.ok && recordProviderEvent("solana", sig, "extra_payment", { topup: t.id, amount_minor: v.amount_minor, payer: v.payer, slot: v.slot }, t.id)) {
        adminEvent("topup_extra_payment", t.user_id, `second on-chain payment for ${t.id}: ${minorToUi(v.amount_minor)} USDC sig ${sig.slice(0, 20)}… — refund or credit by hand`);
        found++;
      } else if (!v.ok && !v.retry) {
        // remember non-payments so we do not re-verify them every minute
        recordProviderEvent("solana", sig, "reference_noise", { topup: t.id, error: v.error }, t.id);
      }
    }
  } catch (e: any) { console.error(`scanExtraPayments ${t.id}: ${String(e?.message || e).slice(0, 120)}`); }
  return found;
}

// Server-side sweep: settle QR/mobile payments that landed after every
// browser stopped polling, and notice second payments on recently credited
// rows. Runs from registerTopups on an interval; cheap when nothing is open
// (one query), one RPC round per row otherwise.
let sweeping = false;
export async function sweepSolanaTopups(rows: TopupRow[], recentlyCredited: TopupRow[] = []): Promise<number> {
  if (sweeping) return 0;
  sweeping = true;
  let credited = 0;
  try {
    // Gentle on public RPCs: a bounded number of rows per tick, oldest
    // open rows first (they have waited longest), and a small pause between.
    const cap = Math.max(1, Number(process.env.TOPUP_SWEEP_ROWS || 12));
    rows = [...rows].reverse().slice(0, cap);
    recentlyCredited = recentlyCredited.slice(0, cap);
    for (const t of rows) {
      await new Promise((r) => setTimeout(r, 400));
      try {
        const sig = await findByReference(t);
        if (!sig) continue;
        const r = await confirmAndSettle(t, sig);
        if (r.status === "credited" && !r.already) { credited++; console.log(`topup sweep: credited ${t.id} via ${sig.slice(0, 16)}…`); }
      } catch (e: any) { console.error(`topup sweep ${t.id}: ${String(e?.message || e).slice(0, 120)}`); }
    }
    for (const t of recentlyCredited) {
      await new Promise((r) => setTimeout(r, 400));
      try { await scanExtraPayments(t); } catch {}
    }
  } finally { sweeping = false; }
  return credited;
}
