// Make sure the treasury has an associated token account for the configured
// USDC mint. Wallets that build a Solana Pay transfer themselves (QR / solana:
// link) do NOT create the merchant's ATA — the reference implementation
// throws "recipient not initialized" — so it must exist before the first QR
// payment. Our own Phantom flow creates it idempotently anyway.
//
// A funded PAYER keypair signs and pays the ~0.002 SOL rent. On devnet the
// fixture payer (~/.openclaw/secrets/vantis-topup-devnet.json) is used unless
// PAYER_SEED_JSON points elsewhere. On mainnet the treasury owner normally has
// the ATA already (any wallet that ever received USDC does).
//
//   SOLANA_CLUSTER=devnet SOLANA_TREASURY_ADDRESS=... [SOLANA_USDC_MINT=...] bun run scripts/topup-ensure-treasury-ata.ts

import { readFileSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";
import {
  createSolanaRpc, createSolanaRpcSubscriptions, createKeyPairSignerFromPrivateKeyBytes, address, pipe,
  createTransactionMessage, setTransactionMessageFeePayerSigner, setTransactionMessageLifetimeUsingBlockhash,
  appendTransactionMessageInstructions, signTransactionMessageWithSigners, sendAndConfirmTransactionFactory, getSignatureFromTransaction,
} from "@solana/kit";
import { TOKEN_PROGRAM_ADDRESS, findAssociatedTokenPda, getCreateAssociatedTokenIdempotentInstruction } from "@solana-program/token";
import { solanaConfig } from "../server/topups/solana";

const cfg = solanaConfig();
if (!cfg.enabled) { console.error("solana not configured (SOLANA_TREASURY_ADDRESS / SOLANA_USDC_MINT)"); process.exit(2); }
const seedFile = process.env.PAYER_SEED_JSON || join(homedir(), ".openclaw", "secrets", "vantis-topup-devnet.json");
const seeds = JSON.parse(readFileSync(seedFile, "utf8"));
const payer = await createKeyPairSignerFromPrivateKeyBytes(new Uint8Array(seeds.payer));
if (cfg.cluster === "mainnet-beta" && !process.env.PAYER_SEED_JSON) { console.error("refusing to use the devnet fixture payer on mainnet — set PAYER_SEED_JSON"); process.exit(2); }

const url = cfg.rpcs[0];
const rpc = createSolanaRpc(url);
const mint = address(cfg.mint), treasury = address(cfg.treasury);
const [ata] = await findAssociatedTokenPda({ mint, owner: treasury, tokenProgram: TOKEN_PROGRAM_ADDRESS });
const existing = await rpc.getAccountInfo(ata, { encoding: "base64" }).send();
if (existing.value) { console.log(JSON.stringify({ cluster: cfg.cluster, treasury: cfg.treasury, mint: cfg.mint, ata, created: false })); process.exit(0); }

const sendAndConfirm = sendAndConfirmTransactionFactory({ rpc, rpcSubscriptions: createSolanaRpcSubscriptions(url.replace(/^http/, "ws")) });
const { value: bh } = await rpc.getLatestBlockhash().send();
const msg = pipe(
  createTransactionMessage({ version: 0 }),
  (m) => setTransactionMessageFeePayerSigner(payer, m),
  (m) => setTransactionMessageLifetimeUsingBlockhash(bh, m),
  (m) => appendTransactionMessageInstructions([getCreateAssociatedTokenIdempotentInstruction({ payer, ata, owner: treasury, mint })], m),
);
const tx = await signTransactionMessageWithSigners(msg);
await sendAndConfirm(tx, { commitment: "confirmed" });
console.log(JSON.stringify({ cluster: cfg.cluster, treasury: cfg.treasury, mint: cfg.mint, ata, created: true, signature: getSignatureFromTransaction(tx), payer: payer.address }));
