// Devnet fixture for the top-up e2e — DEVNET ONLY, never mainnet.
//
// Creates (once) and persists three seeds under ~/.openclaw/secrets/vantis-topup-devnet.json:
//   payer     — the "customer" wallet that pays USDC (stands in for Phantom in the e2e)
//   treasury  — the receiving wallet (the e2e's SOLANA_TREASURY_ADDRESS)
//   mint      — authority of a throwaway 6-decimal SPL mint that stands in for USDC
// Airdrops devnet SOL to the payer, creates the mint, mints 1,000 tokens to the payer.
// Prints a JSON summary the e2e reads. Idempotent: re-runs top up SOL if low and
// re-mint if the payer's balance is under 100.
//
//   bun run scripts/topup-devnet-fixture.ts            → ensure + print
//   bun run scripts/topup-devnet-fixture.ts --print    → print only (no RPC writes)

import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";
import {
  createSolanaRpc,
  createSolanaRpcSubscriptions,
  createKeyPairSignerFromPrivateKeyBytes,
  address,
  lamports,
  pipe,
  createTransactionMessage,
  setTransactionMessageFeePayerSigner,
  setTransactionMessageLifetimeUsingBlockhash,
  appendTransactionMessageInstructions,
  signTransactionMessageWithSigners,
  sendAndConfirmTransactionFactory,
  getSignatureFromTransaction,
  generateKeyPairSigner,
  type KeyPairSigner,
} from "@solana/kit";
import { getCreateAccountInstruction } from "@solana-program/system";
import {
  TOKEN_PROGRAM_ADDRESS,
  getMintSize,
  getInitializeMintInstruction,
  getCreateAssociatedTokenIdempotentInstruction,
  getMintToInstruction,
  findAssociatedTokenPda,
} from "@solana-program/token";

const SECRETS = join(homedir(), ".openclaw", "secrets");
const FILE = join(SECRETS, "vantis-topup-devnet.json");
const RPCS = [
  process.env.SOLANA_DEVNET_RPC || "",
  "https://api.devnet.solana.com",
  "https://rpc.ankr.com/solana_devnet",
].filter(Boolean);
const DECIMALS = 6;

type Store = { note: string; payer: number[]; treasury: number[]; mintAuthority: number[]; mint?: string; created_at: string };

function rand32(): number[] { return Array.from(crypto.getRandomValues(new Uint8Array(32))); }

function loadOrCreate(): Store {
  if (existsSync(FILE)) return JSON.parse(readFileSync(FILE, "utf8"));
  mkdirSync(SECRETS, { recursive: true });
  const s: Store = {
    note: "DEVNET ONLY seeds for the card top-up e2e (payer / treasury / test-USDC mint authority). Worthless on mainnet; never reuse there.",
    payer: rand32(), treasury: rand32(), mintAuthority: rand32(), created_at: new Date().toISOString(),
  };
  writeFileSync(FILE, JSON.stringify(s, null, 2), { mode: 0o600 });
  return s;
}

async function signerFrom(seed: number[]): Promise<KeyPairSigner> {
  return createKeyPairSignerFromPrivateKeyBytes(new Uint8Array(seed));
}

async function withRpc<T>(fn: (rpc: ReturnType<typeof createSolanaRpc>, url: string) => Promise<T>): Promise<T> {
  let last: any;
  for (const url of RPCS) {
    try { return await fn(createSolanaRpc(url), url); } catch (e: any) { last = e; console.error(`rpc ${url}: ${e?.message || e}`); }
  }
  throw last;
}

async function main() {
  const printOnly = process.argv.includes("--print");
  const store = loadOrCreate();
  const payer = await signerFrom(store.payer);
  const treasury = await signerFrom(store.treasury);
  const mintAuth = await signerFrom(store.mintAuthority);

  const summary: any = { cluster: "devnet", payer: payer.address, treasury: treasury.address, mintAuthority: mintAuth.address, mint: store.mint || null, decimals: DECIMALS, file: FILE };
  if (printOnly) { console.log(JSON.stringify(summary, null, 2)); return; }

  await withRpc(async (rpc, url) => {
    const rpcSubs = createSolanaRpcSubscriptions(url.replace(/^http/, "ws"));
    const sendAndConfirm = sendAndConfirmTransactionFactory({ rpc, rpcSubscriptions: rpcSubs });

    // 1. SOL for fees (payer pays every fixture tx and the e2e transfers)
    const bal = await rpc.getBalance(payer.address).send();
    let sol = Number(bal.value) / 1e9;
    console.error(`payer ${payer.address} has ${sol} SOL on ${url}`);
    if (sol < 0.2) {
      for (let i = 0; i < 3 && sol < 0.2; i++) {
        try {
          const sig = await rpc.requestAirdrop(payer.address, lamports(1_000_000_000n)).send();
          console.error(`airdrop requested: ${sig}`);
          await new Promise((r) => setTimeout(r, 4000));
          sol = Number((await rpc.getBalance(payer.address).send()).value) / 1e9;
        } catch (e: any) { console.error(`airdrop failed: ${e?.message || e}`); await new Promise((r) => setTimeout(r, 3000)); }
      }
      if (sol < 0.05) throw new Error(`payer has ${sol} SOL — airdrop failed; fund ${payer.address} at https://faucet.solana.com (devnet)`);
    }

    const { value: bh } = await rpc.getLatestBlockhash().send();

    // 2. Mint (once)
    if (!store.mint) {
      const mintKp = await generateKeyPairSigner();
      const space = BigInt(getMintSize());
      const rent = await rpc.getMinimumBalanceForRentExemption(space).send();
      const ixs = [
        getCreateAccountInstruction({ payer, newAccount: mintKp, lamports: rent, space, programAddress: TOKEN_PROGRAM_ADDRESS }),
        getInitializeMintInstruction({ mint: mintKp.address, decimals: DECIMALS, mintAuthority: mintAuth.address, freezeAuthority: null }),
      ];
      const msg = pipe(
        createTransactionMessage({ version: 0 }),
        (m) => setTransactionMessageFeePayerSigner(payer, m),
        (m) => setTransactionMessageLifetimeUsingBlockhash(bh, m),
        (m) => appendTransactionMessageInstructions(ixs, m),
      );
      const tx = await signTransactionMessageWithSigners(msg);
      await sendAndConfirm(tx, { commitment: "confirmed" });
      store.mint = mintKp.address;
      writeFileSync(FILE, JSON.stringify(store, null, 2), { mode: 0o600 });
      console.error(`mint created: ${store.mint} (${getSignatureFromTransaction(tx)})`);
      summary.mint = store.mint;
    }

    // 3. Payer ATA + mint 1,000 test-USDC if under 100
    const mint = address(store.mint!);
    const [payerAta] = await findAssociatedTokenPda({ mint, owner: payer.address, tokenProgram: TOKEN_PROGRAM_ADDRESS });
    let have = 0;
    try {
      const acc = await rpc.getTokenAccountBalance(payerAta).send();
      have = Number(acc.value.uiAmount || 0);
    } catch { have = 0; }
    console.error(`payer ATA ${payerAta} holds ${have}`);
    if (have < 100) {
      const { value: bh2 } = await rpc.getLatestBlockhash().send();
      const ixs = [
        getCreateAssociatedTokenIdempotentInstruction({ payer, ata: payerAta, owner: payer.address, mint }),
        getMintToInstruction({ mint, token: payerAta, mintAuthority: mintAuth, amount: BigInt(1000 * 10 ** DECIMALS) }),
      ];
      const msg = pipe(
        createTransactionMessage({ version: 0 }),
        (m) => setTransactionMessageFeePayerSigner(payer, m),
        (m) => setTransactionMessageLifetimeUsingBlockhash(bh2, m),
        (m) => appendTransactionMessageInstructions(ixs, m),
      );
      const tx = await signTransactionMessageWithSigners(msg);
      await sendAndConfirm(tx, { commitment: "confirmed" });
      console.error(`minted 1000 to payer (${getSignatureFromTransaction(tx)})`);
      have += 1000;
    }
    summary.payer_sol = sol;
    summary.payer_token_balance = have;
    summary.payer_ata = payerAta;
    summary.rpc = url;
  });

  console.log(JSON.stringify(summary, null, 2));
}

main().catch((e) => { console.error(e); process.exit(1); });
