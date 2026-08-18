// Sponsored gas on EVM chains — EIP-3009 transferWithAuthorization through a
// server-held RELAYER key. The customer signs an EIP-712 authorization in
// their wallet (no gas, no ETH needed): "move VALUE of this token from me to
// the treasury, valid until T, nonce N". Our relayer submits it and pays the
// network fee. USDC (Base, Arbitrum One — Circle FiatTokenV2_2, domain
// "USD Coin"/"2") and USDG on Robinhood Chain (Paxos, domain "Global
// Dollar"/"1", verified on chain Aug 19 2026) all implement it.
//
// The relayer is NOT the treasury: it holds a little ETH per chain and only
// ever calls transferWithAuthorization(from → TREASURY) — the destination is
// inside the customer's signed message, so nothing the relayer does can
// redirect funds. Verification is still the receipt's Transfer log
// (evm.ts verifyTxHash), never "our tx succeeded" — see EIP-3009 notes on
// front-running: a third party landing the same authorization first still
// pays us; we then credit from THAT transaction.

import { createPublicClient, createWalletClient, http, parseAbi, getAddress, isAddress, hashDomain, getTypesForEIP712Domain, verifyTypedData, type Address, type Hex } from "viem";
import { privateKeyToAccount, nonceManager } from "viem/accounts";
import { EVM_CHAINS, evmConfig, evmChain, type EvmChain } from "./evm";

const ABI = parseAbi([
  "function transferWithAuthorization(address from,address to,uint256 value,uint256 validAfter,uint256 validBefore,bytes32 nonce,bytes signature)",
  "function authorizationState(address authorizer,bytes32 nonce) view returns (bool)",
  "function DOMAIN_SEPARATOR() view returns (bytes32)",
  "function balanceOf(address owner) view returns (uint256)",
]);

export const TYPES = {
  TransferWithAuthorization: [
    { name: "from", type: "address" }, { name: "to", type: "address" }, { name: "value", type: "uint256" },
    { name: "validAfter", type: "uint256" }, { name: "validBefore", type: "uint256" }, { name: "nonce", type: "bytes32" },
  ],
} as const;

// EIP-712 domains per token — recomputed against DOMAIN_SEPARATOR() at boot;
// a mismatch disables gasless on that chain (never guessed at settle time).
const DOMAINS: Record<string, { name: string; version: string }> = {
  base: { name: "USD Coin", version: "2" },
  arbitrum: { name: "USD Coin", version: "2" },
  robinhood: { name: "Global Dollar", version: "1" },
  "base-sepolia": { name: "USDC", version: "2" },
  "arbitrum-sepolia": { name: "USDC", version: "2" },
};

export function domainFor(chain: EvmChain) {
  const d = DOMAINS[chain.key];
  if (!d) return null;
  return { name: d.name, version: d.version, chainId: chain.chainId, verifyingContract: chain.token.address as Address };
}
export function localDomainSeparator(chain: EvmChain): Hex | null {
  const dom = domainFor(chain);
  return dom ? hashDomain({ domain: dom, types: { EIP712Domain: getTypesForEIP712Domain({ domain: dom }) } as any }) : null;
}

let relayerAccount: ReturnType<typeof privateKeyToAccount> | null = null;
let relayerKeySeen = "";
export function relayer() {
  const k = String(process.env.EVM_RELAYER_KEY || "").trim();
  if (!/^0x[0-9a-fA-F]{64}$/.test(k)) return null;
  if (!relayerAccount || relayerKeySeen !== k) { relayerAccount = privateKeyToAccount(k as Hex, { nonceManager }); relayerKeySeen = k; }
  return relayerAccount;
}

const MIN_ETH_WEI = BigInt(Math.round(Number(process.env.EVM_RELAYER_MIN_ETH || 0.0005) * 1e18));

function pub(chain: EvmChain, url: string) { return createPublicClient({ transport: http(url, { timeout: 12_000, retryCount: 0 }) }); }
async function withPub<T>(chain: EvmChain, fn: (c: ReturnType<typeof createPublicClient>, url: string) => Promise<T>): Promise<T> {
  let last: any;
  const extra = String(process.env[`EVM_RPC_${chain.key.toUpperCase().replace(/-/g, "_")}`] || "").split(",").map((s) => s.trim()).filter(Boolean);
  for (const url of (extra.length ? extra : chain.rpcs)) {
    try { return await fn(pub(chain, url), url); } catch (e: any) { last = e; }
  }
  throw last || new Error("evm_rpc_unavailable");
}

// Per-chain gasless status: relayer key present, funded above the floor, and
// the on-chain domain separator matches what we would sign. Cached 60 s.
type GasStatus = { enabled: boolean; reason?: string; relayer: string | null; wei: bigint; checked_at: number };
const gasCache = new Map<string, GasStatus>();
export async function gaslessStatus(chain: EvmChain): Promise<GasStatus> {
  const cached = gasCache.get(chain.key);
  if (cached && Date.now() - cached.checked_at < 60_000) return cached;
  const r = relayer();
  let st: GasStatus = { enabled: false, reason: "no_relayer_key", relayer: r?.address || null, wei: 0n, checked_at: Date.now() };
  if (r) {
    try {
      st = await withPub(chain, async (c) => {
        const wei = await c.getBalance({ address: r.address });
        const dom = domainFor(chain);
        if (!dom) return { enabled: false, reason: "no_domain", relayer: r.address, wei, checked_at: Date.now() };
        const onchain = await c.readContract({ address: chain.token.address, abi: ABI, functionName: "DOMAIN_SEPARATOR" }).catch(() => null) as any;
        const local = hashDomain({ domain: dom, types: { EIP712Domain: getTypesForEIP712Domain({ domain: dom }) } as any });
        if (!onchain || String(onchain).toLowerCase() !== local.toLowerCase()) return { enabled: false, reason: "domain_mismatch", relayer: r.address, wei, checked_at: Date.now() };
        if (wei < MIN_ETH_WEI) return { enabled: false, reason: "relayer_low_balance", relayer: r.address, wei, checked_at: Date.now() };
        return { enabled: true, relayer: r.address, wei, checked_at: Date.now() };
      });
    } catch (e: any) { st = { enabled: false, reason: `rpc: ${String(e?.shortMessage || e?.message || e).slice(0, 80)}`, relayer: r.address, wei: 0n, checked_at: Date.now() }; }
  }
  gasCache.set(chain.key, st);
  return st;
}
const syncStatus = new Map<string, boolean>();
export function gaslessEnabledSync(chainKey: string): boolean { return !!syncStatus.get(chainKey); }
export async function refreshGaslessSync(): Promise<void> {
  for (const ch of evmConfig().chains) { try { syncStatus.set(ch.key, (await gaslessStatus(ch)).enabled); } catch { syncStatus.set(ch.key, false); } }
}

// What the browser must ask the wallet to sign (eth_signTypedData_v4).
export function authorizationRequest(chain: EvmChain, from: string, valueMinor: bigint) {
  const cfg = evmConfig();
  const dom = domainFor(chain)!;
  const nonce = ("0x" + Array.from(crypto.getRandomValues(new Uint8Array(32))).map((b) => b.toString(16).padStart(2, "0")).join("")) as Hex;
  const validBefore = Math.floor(Date.now() / 1000) + 20 * 60;
  const message = { from: getAddress(from), to: getAddress(cfg.treasury), value: valueMinor.toString(), validAfter: "0", validBefore: String(validBefore), nonce };
  const typedData = {
    types: { EIP712Domain: [{ name: "name", type: "string" }, { name: "version", type: "string" }, { name: "chainId", type: "uint256" }, { name: "verifyingContract", type: "address" }], ...TYPES },
    primaryType: "TransferWithAuthorization",
    domain: dom,
    message,
  };
  return { typedData, message, nonce, validBefore };
}

export type RelayResult = { ok: true; tx_hash: string } | { ok: false; error: string; message?: string };

// Verify the customer's authorization off-chain, then relay it. Serialised
// per chain so two relayer transactions never race on the nonce.
const chainLocks = new Map<string, Promise<any>>();
export async function relayAuthorization(chain: EvmChain, auth: { from: string; value: bigint; validAfter: bigint; validBefore: bigint; nonce: Hex; signature: Hex }): Promise<RelayResult> {
  const cfg = evmConfig();
  const r = relayer();
  if (!r) return { ok: false, error: "gasless_unavailable" };
  const st = await gaslessStatus(chain);
  if (!st.enabled) return { ok: false, error: "gasless_unavailable", message: st.reason };
  if (!isAddress(auth.from)) return { ok: false, error: "bad_from" };
  const dom = domainFor(chain)!;
  const message = { from: getAddress(auth.from), to: getAddress(cfg.treasury), value: auth.value, validAfter: auth.validAfter, validBefore: auth.validBefore, nonce: auth.nonce };
  const now = BigInt(Math.floor(Date.now() / 1000));
  if (auth.validBefore < now + 30n) return { ok: false, error: "authorization_expired" };
  if (auth.validAfter > now) return { ok: false, error: "authorization_not_yet_valid" };
  const prev = chainLocks.get(chain.key) || Promise.resolve();
  let release!: () => void;
  const mine = new Promise<void>((res) => { release = res; });
  chainLocks.set(chain.key, prev.then(() => mine));
  await prev;
  try {
    return await withPub(chain, async (c, url) => {
      // 1. signature really is from `from` (EOA or 1271 wallet)
      const good = await verifyTypedData({ address: getAddress(auth.from), domain: dom, types: TYPES, primaryType: "TransferWithAuthorization", message, signature: auth.signature } as any).catch(() => false);
      if (!good) {
        const good2 = await c.verifyTypedData({ address: getAddress(auth.from), domain: dom, types: TYPES, primaryType: "TransferWithAuthorization", message, signature: auth.signature } as any).catch(() => false);
        if (!good2) return { ok: false as const, error: "bad_signature", message: "That signature does not match the wallet address." };
      }
      // 2. funds + unused nonce
      const bal = await c.readContract({ address: chain.token.address, abi: ABI, functionName: "balanceOf", args: [getAddress(auth.from)] }) as bigint;
      if (bal < auth.value) return { ok: false as const, error: "insufficient_funds", message: `That wallet holds ${(Number(bal) / 10 ** chain.token.decimals).toFixed(2)} ${chain.token.symbol} on ${chain.name}.` };
      const used = await c.readContract({ address: chain.token.address, abi: ABI, functionName: "authorizationState", args: [getAddress(auth.from), auth.nonce] }) as boolean;
      if (used) return { ok: false as const, error: "authorization_used" };
      // 3. simulate, then send
      const { request } = await c.simulateContract({ address: chain.token.address, abi: ABI, functionName: "transferWithAuthorization", args: [getAddress(auth.from), getAddress(cfg.treasury), auth.value, auth.validAfter, auth.validBefore, auth.nonce, auth.signature], account: r });
      const wallet = createWalletClient({ account: r, transport: http(url, { timeout: 20_000 }) });
      const hash = await wallet.writeContract({ ...request, chain: null } as any);
      return { ok: true as const, tx_hash: String(hash) };
    });
  } catch (e: any) {
    const msg = String(e?.shortMessage || e?.message || e);
    console.error(`relay ${chain.key}: ${msg.slice(0, 200)}`);
    return { ok: false, error: /insufficient funds/i.test(msg) ? "relayer_out_of_gas" : "relay_failed", message: msg.slice(0, 160) };
  } finally { release(); }
}

export function relayerAddress(): string | null { return relayer()?.address || null; }
