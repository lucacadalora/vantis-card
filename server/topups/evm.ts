// Stablecoin top-ups on EVM chains — Base, Arbitrum One, Robinhood Chain (+
// testnets). Money lands in the operator's PRIVY embedded EVM wallet (one
// address on every chain); the server holds NO treasury key.
//
// Two ways to pay, one way to verify:
//   • Wallet path — the browser asks an EIP-6963 wallet to send
//     token.transfer(treasury, amount); the tx hash comes back to /confirm.
//   • Send-from-any-wallet — address + QR + an EXACT amount that carries a
//     per-row micro-unit suffix ("10.000247 USDC"), so concurrent payers on
//     the same chain never collide. A watcher polls Transfer logs to the
//     treasury and settles the row whose amount matches.
// Verification is always the chain: a Transfer(to = treasury) log for the
// configured token, ≥ CONFIRMATIONS deep, value == the row's amount, credited
// exactly once per txhash:logIndex (topups.provider_ref UNIQUE).
//
// Sponsored gas (EIP-3009 transferWithAuthorization through a relayer key)
// is layered on top in evm-gasless.ts when the relayer is funded.

import { createPublicClient, http, encodeFunctionData, parseAbi, getAddress, isAddress, pad, keccak256, toHex, formatUnits, type Address, type Hex } from "viem";
import { getDb, metaGet, metaSet } from "../db";
import { getTopup, markTopup, settleTopup, recordProviderEvent, metaOf, ensureTopupTables, type TopupRow } from "./index";

export type EvmChainKey = "base" | "arbitrum" | "robinhood" | "base-sepolia" | "arbitrum-sepolia";

export interface EvmChain {
  key: EvmChainKey;
  name: string;
  chainId: number;
  testnet: boolean;
  rpcs: string[];
  explorerTx: string;      // prefix for a tx hash
  explorerAddr: string;    // prefix for an address
  token: { symbol: string; address: Address; decimals: number; name: string; eip3009?: boolean };
  confirmations: number;
  blockTimeSec: number;
  logo: string;
  nativeSymbol: string;
  addChainParams: any;     // wallet_addEthereumChain payload
}

const ERC20 = parseAbi([
  "function transfer(address to, uint256 value) returns (bool)",
  "function balanceOf(address owner) view returns (uint256)",
  "function decimals() view returns (uint8)",
  "event Transfer(address indexed from, address indexed to, uint256 value)",
]);
export const TRANSFER_TOPIC = keccak256(toHex("Transfer(address,address,uint256)"));

// Native Circle USDC (never bridged USDC.e). Robinhood Chain: USDG (Paxos
// Global Dollar), the stable its VANTIS pool trades in — address read from the
// pool's token0 on Aug 18 2026, decimals 6 verified on chain.
export const EVM_CHAINS: Record<EvmChainKey, EvmChain> = {
  base: {
    key: "base", name: "Base", chainId: 8453, testnet: false,
    rpcs: ["https://base.drpc.org", "https://mainnet.base.org", "https://base-rpc.publicnode.com"],
    explorerTx: "https://basescan.org/tx/", explorerAddr: "https://basescan.org/address/",
    token: { symbol: "USDC", address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913", decimals: 6, name: "USD Coin", eip3009: true },
    // Base L2 blocks have reorged once in history; ~24 s (12 blocks) is a
    // sane floor for $5–$500 credits (Base's own guidance: credit at `safe`).
    confirmations: 12, blockTimeSec: 2, logo: "/logos/base.svg", nativeSymbol: "ETH",
    addChainParams: { chainId: "0x2105", chainName: "Base", nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 }, rpcUrls: ["https://mainnet.base.org"], blockExplorerUrls: ["https://basescan.org"] },
  },
  arbitrum: {
    key: "arbitrum", name: "Arbitrum One", chainId: 42161, testnet: false,
    rpcs: ["https://arb1.arbitrum.io/rpc", "https://arbitrum.drpc.org", "https://arbitrum-one-rpc.publicnode.com"],
    explorerTx: "https://arbiscan.io/tx/", explorerAddr: "https://arbiscan.io/address/",
    token: { symbol: "USDC", address: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831", decimals: 6, name: "USD Coin", eip3009: true },
    confirmations: 40, blockTimeSec: 0.25, logo: "/logos/arb.svg", nativeSymbol: "ETH",
    addChainParams: { chainId: "0xa4b1", chainName: "Arbitrum One", nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 }, rpcUrls: ["https://arb1.arbitrum.io/rpc"], blockExplorerUrls: ["https://arbiscan.io"] },
  },
  robinhood: {
    key: "robinhood", name: "Robinhood Chain", chainId: 4663, testnet: false,
    rpcs: ["https://rpc.mainnet.chain.robinhood.com"],
    explorerTx: "https://robinscan.io/tx/", explorerAddr: "https://robinscan.io/address/",
    token: { symbol: "USDG", address: "0x5fc5360d0400a0fd4f2af552add042d716f1d168", decimals: 6, name: "Global Dollar", eip3009: true },
    confirmations: 40, blockTimeSec: 0.25, logo: "/logos/robinhood-fcaa978a.png", nativeSymbol: "ETH",
    addChainParams: { chainId: "0x1237", chainName: "Robinhood Chain", nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 }, rpcUrls: ["https://rpc.mainnet.chain.robinhood.com"], blockExplorerUrls: ["https://robinscan.io"] },
  },
  "base-sepolia": {
    key: "base-sepolia", name: "Base Sepolia (test)", chainId: 84532, testnet: true,
    rpcs: ["https://sepolia.base.org", "https://base-sepolia-rpc.publicnode.com"],
    explorerTx: "https://sepolia.basescan.org/tx/", explorerAddr: "https://sepolia.basescan.org/address/",
    token: { symbol: "USDC", address: "0x036CbD53842c5426634e7929541eC2318f3dCF7e", decimals: 6, name: "USD Coin (test)", eip3009: true },
    confirmations: 2, blockTimeSec: 2, logo: "/logos/base.svg", nativeSymbol: "ETH",
    addChainParams: { chainId: "0x14a34", chainName: "Base Sepolia", nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 }, rpcUrls: ["https://sepolia.base.org"], blockExplorerUrls: ["https://sepolia.basescan.org"] },
  },
  "arbitrum-sepolia": {
    key: "arbitrum-sepolia", name: "Arbitrum Sepolia (test)", chainId: 421614, testnet: true,
    rpcs: ["https://sepolia-rollup.arbitrum.io/rpc", "https://arbitrum-sepolia-rpc.publicnode.com"],
    explorerTx: "https://sepolia.arbiscan.io/tx/", explorerAddr: "https://sepolia.arbiscan.io/address/",
    token: { symbol: "USDC", address: "0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d", decimals: 6, name: "USD Coin (test)", eip3009: true },
    confirmations: 2, blockTimeSec: 0.25, logo: "/logos/arb.svg", nativeSymbol: "ETH",
    addChainParams: { chainId: "0x66eee", chainName: "Arbitrum Sepolia", nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 }, rpcUrls: ["https://sepolia-rollup.arbitrum.io/rpc"], blockExplorerUrls: ["https://sepolia.arbiscan.io"] },
  },
};

export function evmConfig() {
  const treasury = String(process.env.EVM_TREASURY_ADDRESS || "").trim();
  const keys = String(process.env.EVM_CHAINS || "base,arbitrum,robinhood").split(",").map((s) => s.trim()).filter(Boolean) as EvmChainKey[];
  const chains = keys.filter((k) => EVM_CHAINS[k]).map((k) => EVM_CHAINS[k]);
  return { treasury, enabled: isAddress(treasury) && chains.length > 0, chains };
}
export const evmChain = (key: string): EvmChain | null => EVM_CHAINS[key as EvmChainKey] || null;
export const evmEnabled = () => evmConfig().enabled;

// One public client per chain, first RPC that answers wins per call.
function clients(chain: EvmChain) {
  const extra = String(process.env[`EVM_RPC_${chain.key.toUpperCase().replace(/-/g, "_")}`] || "").split(",").map((s) => s.trim()).filter(Boolean);
  const urls = extra.length ? extra : chain.rpcs;
  return urls.map((u) => createPublicClient({ transport: http(u, { timeout: 12_000, retryCount: 0 }) }));
}
async function withClient<T>(chain: EvmChain, fn: (c: ReturnType<typeof createPublicClient>) => Promise<T>): Promise<T> {
  let last: any;
  for (const c of clients(chain)) {
    try { return await fn(c); } catch (e: any) { last = e; console.error(`evm rpc ${chain.key}: ${String(e?.shortMessage || e?.message || e).slice(0, 140)}`); }
  }
  throw last || new Error("evm_rpc_unavailable");
}

// ── amounts: exact match with a per-row micro-unit suffix ──

export function usdToMinor(usd: number, decimals: number): bigint {
  return BigInt(Math.round(usd * 100)) * 10n ** BigInt(decimals - 2);
}
// Always the full precision ("25.000030"): the exact amount IS the matching
// key, so every digit is shown — a trimmed "25.00003" reads like a typo.
export function minorToUi(minor: bigint | number | string, decimals: number): string {
  const s = formatUnits(BigInt(minor), decimals);
  const [i, f = ""] = s.split(".");
  return `${i}.${(f + "0".repeat(decimals)).slice(0, decimals)}`;
}

// Pick a suffix (1..999 micro-units) unused by any OPEN row on the same
// chain+token+base amount, so two customers paying $10 on Base at the same
// time send 10.000247 and 10.000583 and can never be confused.
export function uniqueAmountMinor(chain: EvmChain, baseMinor: bigint): bigint {
  ensureTopupTables();
  const open = getDb().query(
    `SELECT amount_minor FROM topups WHERE provider = 'evm' AND cluster = ? AND status IN ('created','pending')
       AND amount_minor >= ? AND amount_minor < ?`
  ).all(chain.key, Number(baseMinor), Number(baseMinor + 1000n)) as any[];
  const used = new Set(open.map((r) => Number(BigInt(r.amount_minor) - baseMinor)));
  for (let i = 0; i < 50; i++) {
    const s = 1 + Math.floor(Math.random() * 999);
    if (!used.has(s)) return baseMinor + BigInt(s);
  }
  for (let s = 1; s < 1000; s++) if (!used.has(s)) return baseMinor + BigInt(s);
  throw new Error("no_free_amount_slot");
}

// EIP-681 token transfer URI (MetaMask & co. can scan/open it).
export function eip681(chain: EvmChain, treasury: string, minor: bigint): string {
  return `ethereum:${chain.token.address}@${chain.chainId}/transfer?address=${treasury}&uint256=${minor.toString()}`;
}
export function transferCalldata(treasury: string, minor: bigint): Hex {
  return encodeFunctionData({ abi: ERC20, functionName: "transfer", args: [getAddress(treasury), minor] });
}

export function payInstructions(t: TopupRow) {
  const cfg = evmConfig();
  const chain = evmChain(String(t.cluster));
  if (!chain) return null;
  const minor = BigInt(t.amount_minor);
  return {
    chain: { key: chain.key, name: chain.name, chain_id: chain.chainId, testnet: chain.testnet, logo: chain.logo, explorer_addr: chain.explorerAddr, native: chain.nativeSymbol, add_chain: chain.addChainParams },
    token: { symbol: chain.token.symbol, address: chain.token.address, decimals: chain.token.decimals, name: chain.token.name },
    treasury: cfg.treasury,
    amount_minor: minor.toString(),
    amount_ui: minorToUi(minor, chain.token.decimals),
    eip681: eip681(chain, cfg.treasury, minor),
    calldata: transferCalldata(cfg.treasury, minor),
    confirmations: chain.confirmations,
  };
}

// ── verification ──

export type EvmVerify =
  | { ok: true; tx_hash: string; log_index: number; from: string; value: bigint; block: bigint; confirmations: number }
  | { ok: false; error: string; retry?: boolean };

// Look at ONE transaction (wallet path): its receipt must carry a Transfer of
// the configured token to the treasury for exactly the row's amount (or more
// — an overpayment still credits the row's amount and is written down).
export async function verifyTxHash(t: TopupRow, txHash: string): Promise<EvmVerify> {
  const cfg = evmConfig();
  const chain = evmChain(String(t.cluster));
  if (!chain || !cfg.enabled) return { ok: false, error: "evm_not_configured" };
  if (!/^0x[0-9a-fA-F]{64}$/.test(txHash)) return { ok: false, error: "bad_tx_hash" };
  const dup = getDb().query("SELECT id FROM topups WHERE provider = 'evm' AND provider_ref LIKE ? AND id <> ?").get(`${txHash.toLowerCase()}:%`, t.id) as any;
  if (dup) return { ok: false, error: "tx_already_used" };
  try {
    return await withClient(chain, async (c) => {
      // Only a genuine "no such receipt yet" is a soft miss; RPC refusals
      // (publicnode calls older receipts "archive requests") must fall
      // through to the next endpoint in the ladder.
      const rcpt = await c.getTransactionReceipt({ hash: txHash as Hex }).catch((e: any) => { if (e?.name === "TransactionReceiptNotFoundError") return null; throw e; });
      if (!rcpt) return { ok: false as const, error: "not_found_yet", retry: true };
      if (rcpt.status !== "success") return { ok: false as const, error: "transaction_failed" };
      const head = await c.getBlockNumber();
      const conf = Number(head - rcpt.blockNumber) + 1;
      const want = BigInt(t.amount_minor);
      const treasuryTopic = pad(getAddress(cfg.treasury) as Hex, { size: 32 }).toLowerCase();
      for (const log of rcpt.logs) {
        if (log.address.toLowerCase() !== chain.token.address.toLowerCase()) continue;
        if (!log.topics[0] || log.topics[0].toLowerCase() !== TRANSFER_TOPIC.toLowerCase()) continue;
        if (String(log.topics[2] || "").toLowerCase() !== treasuryTopic) continue;
        const value = BigInt(log.data);
        if (value < want) return { ok: false as const, error: `underpaid: got ${value} expected ${want}` };
        if (conf < chain.confirmations) return { ok: false as const, error: "confirming", retry: true };
        const from = getAddress(("0x" + String(log.topics[1]).slice(26)) as Hex);
        return { ok: true as const, tx_hash: txHash.toLowerCase(), log_index: Number(log.logIndex ?? 0), from, value, block: rcpt.blockNumber, confirmations: conf };
      }
      return { ok: false as const, error: "no_treasury_transfer_in_tx" };
    });
  } catch (e: any) {
    return { ok: false, error: `rpc_error: ${String(e?.shortMessage || e?.message || e).slice(0, 120)}`, retry: true };
  }
}

export function explorerTx(chainKey: string, hash: string): string {
  const ch = evmChain(chainKey);
  return ch ? `${ch.explorerTx}${hash}` : "#";
}

export async function confirmAndSettleEvm(t: TopupRow, txHash: string): Promise<{ status: "credited" | "pending" | "failed"; error?: string; already?: boolean; balance_main?: number; balance_lane?: number | null; explorer_url?: string; tx_hash?: string }> {
  const fresh = getTopup(t.id) || t;
  if (fresh.status === "credited") {
    const ref = String(fresh.provider_ref || "");
    return { status: "credited", already: true, tx_hash: ref.split(":")[0], explorer_url: ref ? explorerTx(String(fresh.cluster), ref.split(":")[0]) : undefined };
  }
  const v = await verifyTxHash(fresh, txHash);
  if (!v.ok) {
    if (v.retry) {
      if (v.error === "confirming") markTopup(fresh.id, { meta: { detected_tx: txHash.toLowerCase(), detected_needed: evmChain(String(fresh.cluster))?.confirmations || 0 } });
      return { status: "pending", error: v.error };
    }
    markTopup(fresh.id, { error: v.error, meta: { last_bad_tx: txHash } });
    return { status: "failed", error: v.error };
  }
  const chain = evmChain(String(fresh.cluster))!;
  const r = settleTopup(fresh.id, {
    provider_ref: `${v.tx_hash}:${v.log_index}`,
    payer: v.from,
    meta: { block: v.block.toString(), confirmations: v.confirmations, value_minor: v.value.toString(), explorer_url: explorerTx(chain.key, v.tx_hash), chain: chain.key, token: chain.token.symbol, overpaid_minor: (v.value - BigInt(fresh.amount_minor)).toString() },
    description: `Top-up: ${minorToUi(fresh.amount_minor, chain.token.decimals)} ${chain.token.symbol} on ${chain.name}`,
  });
  if (!r.ok) return { status: "failed", error: r.error };
  return { status: "credited", already: r.already, balance_main: r.balance_main, balance_lane: r.balance_lane, explorer_url: explorerTx(chain.key, v.tx_hash), tx_hash: v.tx_hash };
}

// ── watcher (send-from-any-wallet path) ──
//
// Per enabled chain with open rows: scan Transfer logs to the treasury from a
// persisted cursor (meta table) up to head − 1, in bounded windows; match each
// log to an open row by exact amount (unique suffix); credit when deep enough.
// Payments that match no row (or hit an already-credited amount) are recorded
// as 'unmatched' events for the operator — never silently ignored.

function openEvmRows(chainKey: string): TopupRow[] {
  ensureTopupTables();
  return getDb().query(
    `SELECT * FROM topups WHERE provider = 'evm' AND cluster = ? AND status IN ('created','pending','expired','canceled')
       AND created_at > datetime('now','-7 days') ORDER BY created_at ASC`
  ).all(chainKey) as TopupRow[];
}

let watching = false;
export async function watchEvmTransfers(): Promise<{ scanned: number; credited: number }> {
  if (watching) return { scanned: 0, credited: 0 };
  watching = true;
  let scanned = 0, credited = 0;
  try {
    const cfg = evmConfig();
    if (!cfg.enabled) return { scanned, credited };
    const treasuryTopic = pad(getAddress(cfg.treasury) as Hex, { size: 32 });
    for (const chain of cfg.chains) {
      const rows = openEvmRows(chain.key);
      if (!rows.length) continue;
      try {
        await withClient(chain, async (c) => {
          const head = await c.getBlockNumber();
          const toBlock = head - 1n; // leave the tip alone (reorg room)
          const cursorKey = `topup_evm_cursor:${chain.key}`;
          let from = BigInt(metaGet(cursorKey) || "0");
          // Fresh cursor or a stale one: start a little before the oldest open row's creation
          // is unknowable in blocks, so start from a bounded lookback.
          const lookback = BigInt(Math.max(200, Math.ceil((45 * 60) / chain.blockTimeSec))); // ~45 min of blocks
          if (from === 0n || from < toBlock - 5000n) from = toBlock > lookback ? toBlock - lookback : 0n;
          if (from > toBlock) return;
          const step = 900n;
          for (let a = from; a <= toBlock; a += step + 1n) {
            const b = a + step > toBlock ? toBlock : a + step;
            const logs = await c.getLogs({ address: chain.token.address, event: ERC20[3] as any, args: { to: getAddress(cfg.treasury) } as any, fromBlock: a, toBlock: b });
            scanned += logs.length;
            for (const log of logs as any[]) {
              const value = BigInt(log.args?.value ?? 0n);
              const txHash = String(log.transactionHash).toLowerCase();
              const ref = `${txHash}:${Number(log.logIndex ?? 0)}`;
              if (getDb().query("SELECT 1 FROM topups WHERE provider = 'evm' AND provider_ref = ?").get(ref)) continue;
              if (getDb().query("SELECT 1 FROM topup_events WHERE event_id = ?").get(`evm:${ref}`)) continue;
              const conf = Number(head - BigInt(log.blockNumber)) + 1;
              // exact unique amount first; then a lone open row with the plain base amount
              let row = rows.find((r) => BigInt(r.amount_minor) === value && !["credited"].includes(r.status));
              if (!row) {
                const base = (value / 1000n) * 1000n;
                const cands = rows.filter((r) => (BigInt(r.amount_minor) / 1000n) * 1000n === base && value >= base);
                if (cands.length === 1 && value === base) row = cands[0];
              }
              if (!row) {
                recordProviderEvent("evm", `evm:${ref}`, "unmatched", { chain: chain.key, token: chain.token.symbol, value: value.toString(), from: log.args?.from, block: String(log.blockNumber) });
                console.warn(`evm watcher: unmatched ${chain.token.symbol} transfer ${minorToUi(value, chain.token.decimals)} on ${chain.key} (${txHash})`);
                continue;
              }
              if (conf < chain.confirmations) { markTopup(row.id, { meta: { detected_tx: txHash, detected_conf: conf, detected_needed: chain.confirmations } }); continue; } // seen; credited next tick
              const r = await confirmAndSettleEvm(row, txHash);
              if (r.status === "credited" && !r.already) { credited++; console.log(`evm watcher: credited ${row.id} via ${txHash}`); }
            }
          }
          metaSet(cursorKey, toBlock.toString());
        });
      } catch (e: any) { console.error(`evm watcher ${chain.key}: ${String(e?.shortMessage || e?.message || e).slice(0, 140)}`); }
    }
  } finally { watching = false; }
  return { scanned, credited };
}
