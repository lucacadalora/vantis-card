// Portfolio — the embedded wallet as a first-class surface, multi-chain.
// One EVM key = the same address on every EVM chain, so the EVM selector is a
// read lens, not extra wallets: Robinhood Chain is home (VANTIS + ETH),
// Ethereum/Arbitrum/Base show ETH + USDC.
//
// SOLANA IS THE ONE EXCEPTION AND IT IS A REAL SECOND WALLET. Solana signs on
// ed25519 where every EVM chain signs on secp256k1, so Privy issues a separate
// key with its own base58 address — nothing about it is derivable from the 0x
// address. That is why the page carries an address per FAMILY, not one address
// for everything, and why sending SPL tokens to the 0x address loses them.
//
// Balances are read server-side (CSP keeps the browser off external RPCs for
// reads, same reason the price feed lives here) and cached 60s per
// address+chain. Withdraw is the Privy island in "wallet" mode — the user
// signs in the browser, on the chain the page selector picks; this server
// never holds a key.

import { SYSTEM_CSS, ARROW, appNav, type NavViewer } from "./system";
import { esc } from "./pages";
import { getVantisPrice, VANTIS_CA } from "./price";

export const RH_CHAIN_ID = 4663;

export type ChainFamily = "evm" | "solana";

// Brand marks are SELF-HOSTED under /logos — the CSP is img-src 'self', so a
// hotlinked logo would simply not render. Sourced Aug 13: eth/sol/usdc/arb
// from cryptologos; base authored as SVG because Trust Wallet and DefiLlama
// both ship it padded on white (Base's mark really is a plain #0000FF square,
// and base.org's own favicon agrees); vantis from our favicon mark.
//
// Robinhood is ROBINHOOD'S mark — the black feather on #CCFF00 from
// robinhood.com/us/en/rh_favicon_152.png. It is deliberately NOT robinscan's
// icon, which is a dark explorer skin: that read as a black blob and lost the
// brand colour entirely. The chain is Robinhood's, so it wears Robinhood's
// green. The filename carries a content hash because Cloudflare caches
// /logos/* and this zone's API token is DNS-scoped — a same-name replacement
// keeps serving the old bytes at the edge forever.
type AssetDef = {
  symbol: string;
  name: string;
  contract: string | null; // null = native coin; on Solana this is the SPL mint
  decimals: number;
  price: "vantis" | "eth" | "sol" | "usd1"; // usd1 = a dollar-pegged stable shown at $1.00
  logo: string;
};

type ChainDef = {
  key: string;
  name: string;
  family: ChainFamily;
  id: number; // EVM chain id; 0 on Solana, which has no numeric id
  rpc: string;
  explorer: string;  // link base
  addrPath: string;  // explorers disagree: /address on EVM, /account on Solscan
  logo: string;
  assets: AssetDef[];
};

// Solana reads go through a LADDER, unlike the EVM chains which each have one
// dependable endpoint. Measured Aug 13 from this VM against a 12,155-account
// address: mainnet-beta served getTokenAccountsByOwner in ~1.9s on every
// attempt, while publicnode timed out twice and — the reason it is not first —
// once returned `{value: []}` with HTTP 200 when the true answer was 12,155
// accounts. A silent empty read would tell a funded user they hold nothing,
// so the endpoint that has been caught doing it is the fallback, never the
// primary. publicnode stays in the list because plain getBalance is fast and
// correct there (~120ms) and a second endpoint beats a single point of failure.
const SOLANA_RPCS = [
  "https://api.mainnet-beta.solana.com",
  "https://solana-rpc.publicnode.com",
];

// EVM RPCs are publicnode; USDC contracts are the canonical Circle
// deployments per chain, and the Solana USDC mint is Circle's too.
export const CHAINS: Record<string, ChainDef> = {
  robinhood: {
    key: "robinhood", name: "Robinhood Chain", family: "evm", id: RH_CHAIN_ID,
    rpc: "https://rpc.mainnet.chain.robinhood.com",
    explorer: "https://robinscan.io", addrPath: "/address/", logo: "/logos/robinhood-fcaa978a.png",
    assets: [
      { symbol: "VANTIS", name: "Vantis", contract: VANTIS_CA, decimals: 18, price: "vantis", logo: "/logos/vantis.svg" },
      { symbol: "ETH", name: "Ether — pays gas", contract: null, decimals: 18, price: "eth", logo: "/logos/eth.svg" },
    ],
  },
  ethereum: {
    key: "ethereum", name: "Ethereum", family: "evm", id: 1,
    rpc: "https://ethereum-rpc.publicnode.com",
    explorer: "https://etherscan.io", addrPath: "/address/", logo: "/logos/eth.svg",
    assets: [
      { symbol: "ETH", name: "Ether — pays gas", contract: null, decimals: 18, price: "eth", logo: "/logos/eth.svg" },
      { symbol: "USDC", name: "USD Coin", contract: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", decimals: 6, price: "usd1", logo: "/logos/usdc.svg" },
    ],
  },
  arbitrum: {
    key: "arbitrum", name: "Arbitrum", family: "evm", id: 42161,
    rpc: "https://arbitrum-one-rpc.publicnode.com",
    explorer: "https://arbiscan.io", addrPath: "/address/", logo: "/logos/arb.svg",
    assets: [
      { symbol: "ETH", name: "Ether — pays gas", contract: null, decimals: 18, price: "eth", logo: "/logos/eth.svg" },
      { symbol: "USDC", name: "USD Coin", contract: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831", decimals: 6, price: "usd1", logo: "/logos/usdc.svg" },
    ],
  },
  base: {
    key: "base", name: "Base", family: "evm", id: 8453,
    rpc: "https://base-rpc.publicnode.com",
    explorer: "https://basescan.org", addrPath: "/address/", logo: "/logos/base.svg",
    assets: [
      { symbol: "ETH", name: "Ether — pays gas", contract: null, decimals: 18, price: "eth", logo: "/logos/eth.svg" },
      { symbol: "USDC", name: "USD Coin", contract: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913", decimals: 6, price: "usd1", logo: "/logos/usdc.svg" },
    ],
  },
  // Solana: different curve, different key, different address. `contract` is
  // the SPL mint here, and SOL carries 9 decimals against EVM's 18.
  solana: {
    key: "solana", name: "Solana", family: "solana", id: 0,
    rpc: SOLANA_RPCS[0],
    explorer: "https://solscan.io", addrPath: "/account/", logo: "/logos/sol.svg",
    assets: [
      { symbol: "SOL", name: "Solana — pays fees", contract: null, decimals: 9, price: "sol", logo: "/logos/sol.svg" },
      { symbol: "USDC", name: "USD Coin", contract: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v", decimals: 6, price: "usd1", logo: "/logos/usdc.svg" },
    ],
  },
};

// WETH on Ethereum mainnet — DexScreener's deepest ETH/USD read. Same
// vendor and selection rule as the $VANTIS feed: deepest pool wins.
const WETH_MAINNET = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
// Wrapped SOL — the same trick for SOL/USD; native coins have no pair of
// their own, so the wrapped mint is what DexScreener actually indexes.
const WSOL_MINT = "So11111111111111111111111111111111111111112";

async function rpcCall(rpc: string, method: string, params: unknown[]): Promise<string> {
  const r = await fetch(rpc, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ jsonrpc: "2.0", id: 1, method, params }),
    signal: AbortSignal.timeout(6000),
  });
  if (!r.ok) throw new Error(`rpc_http_${r.status}`);
  const j: any = await r.json();
  if (j.error) throw new Error(`rpc_${j.error.code || "error"}`);
  return String(j.result || "0x0");
}

const pad32 = (addrNo0x: string) => addrNo0x.toLowerCase().padStart(64, "0");
const hexToBig = (h: string): bigint => {
  try { return BigInt(h); } catch { return 0n; }
};

async function solCall(method: string, params: unknown[]): Promise<any> {
  let lastErr: unknown = new Error("rpc_no_endpoint");
  for (const rpc of SOLANA_RPCS) {
    try {
      const r = await fetch(rpc, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jsonrpc: "2.0", id: 1, method, params }),
        signal: AbortSignal.timeout(9000),
      });
      if (!r.ok) throw new Error(`rpc_http_${r.status}`);
      const j: any = await r.json();
      if (j.error) throw new Error(`rpc_${j.error.code || "error"}`);
      return j.result;
    } catch (e) { lastErr = e; }
  }
  throw lastErr;
}

// A Solana wallet can hold the SAME mint in more than one token account, so
// the balance is the SUM over accounts — reading only the first (or only the
// canonical ATA) silently under-reports a real balance.
async function solBalance(owner: string, mint: string | null): Promise<bigint> {
  if (!mint) {
    const res = await solCall("getBalance", [owner]);
    return BigInt(res?.value ?? 0);
  }
  const res = await solCall("getTokenAccountsByOwner", [owner, { mint }, { encoding: "jsonParsed" }]);
  let total = 0n;
  for (const acc of res?.value || []) {
    const amt = acc?.account?.data?.parsed?.info?.tokenAmount?.amount;
    if (amt !== undefined && amt !== null) {
      try { total += BigInt(String(amt)); } catch { /* skip an unparseable account */ }
    }
  }
  return total;
}

// A Solana transaction needs a recent blockhash, and the browser is kept off
// external RPCs by the CSP — so the withdraw island asks us for it, exactly
// like it asks us for balances. "finalized" over "confirmed": a blockhash from
// a slot that gets dropped makes the whole transaction unlandable.
export async function solanaBlockhash(): Promise<{ blockhash: string; lastValidBlockHeight: number }> {
  const res = await solCall("getLatestBlockhash", [{ commitment: "finalized" }]);
  const bh = res?.value?.blockhash;
  if (typeof bh !== "string" || !bh) throw new Error("no_blockhash");
  return { blockhash: bh, lastValidBlockHeight: Number(res?.value?.lastValidBlockHeight ?? 0) };
}

// Base58 with Solana's alphabet (no 0, O, I, l), 32-byte keys land at 32-44
// chars. Guards the read path against an EVM address arriving by mistake.
export const isSolanaAddress = (a: string) => /^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(a);
export const isEvmAddress = (a: string) => /^0x[0-9a-fA-F]{40}$/.test(a);

// ETH/USD with the same failure ladder shape as the VANTIS feed, minus the
// DB rung: 10-min cache, stale-on-error, null when we have never succeeded.
// A null simply renders as "—" — an honest gap beats a stale invention.
const gasCache = new Map<string, { price: number; at: number }>();
async function dexUsd(token: string): Promise<number | null> {
  const hit = gasCache.get(token);
  if (hit && Date.now() - hit.at < 600_000) return hit.price;
  try {
    const r = await fetch(`https://api.dexscreener.com/latest/dex/tokens/${token}`, {
      signal: AbortSignal.timeout(8000),
    });
    const j: any = await r.json();
    const pairs = (j?.pairs || []).filter(
      (p: any) => String(p?.baseToken?.address || "").toLowerCase() === token.toLowerCase()
    );
    pairs.sort((a: any, b: any) => (Number(b?.liquidity?.usd) || 0) - (Number(a?.liquidity?.usd) || 0));
    const price = Number(pairs[0]?.priceUsd);
    if (Number.isFinite(price) && price > 0) {
      gasCache.set(token, { price, at: Date.now() });
      return price;
    }
  } catch { /* fall through to stale */ }
  return hit ? hit.price : null;
}
const getEthUsd = () => dexUsd(WETH_MAINNET);
const getSolUsd = () => dexUsd(WSOL_MINT);

export type PortfolioAsset = {
  symbol: string;
  name: string;
  contract: string | null;
  decimals: number;
  logo: string;
  raw: string | null;      // base units, exact — the client's MAX button
  amount: number | null;   // display float
  usd: number | null;
};

export type Portfolio = {
  ok: boolean;
  address: string;
  chain: string;
  chain_id: number;
  chain_name: string;
  family: ChainFamily;
  explorer: string;
  explorer_addr: string; // ready-made link — the client should not rebuild it
  assets: PortfolioAsset[];
  total_usd: number | null;
  prices: { vantis_usd: number; vantis_source: string; eth_usd: number | null; sol_usd: number | null };
  warnings: string[];
  fetched_at: string;
};

const pfCache = new Map<string, { at: number; data: Portfolio }>();

// `addresses` carries one per family. A chain reads the address for ITS family
// and nothing else, so an EVM address can never be handed to a Solana RPC.
export type WalletAddresses = { evm?: string | null; solana?: string | null };

export async function portfolioFor(addresses: WalletAddresses, chainKey: string): Promise<Portfolio> {
  const chain = (Object.hasOwn(CHAINS, chainKey) ? CHAINS[chainKey] : undefined) || CHAINS.robinhood;
  const address = String((chain.family === "solana" ? addresses.solana : addresses.evm) || "");
  const valid = chain.family === "solana" ? isSolanaAddress(address) : isEvmAddress(address);
  const key = `${chain.key}:${address.toLowerCase()}`;
  const hit = pfCache.get(key);
  if (valid && hit && Date.now() - hit.at < 60_000) return hit.data;

  const warnings: string[] = [];
  // No address for this family (a user who has not been issued a Solana key
  // yet) reads as empty rather than as an error — the page explains it.
  const readOne = (a: AssetDef): Promise<bigint | null> => {
    if (!valid) return Promise.resolve(null);
    const p = chain.family === "solana"
      ? solBalance(address, a.contract)
      : (a.contract
          ? rpcCall(chain.rpc, "eth_call", [{ to: a.contract, data: "0x70a08231" + pad32(address.slice(2)) }, "latest"])
          : rpcCall(chain.rpc, "eth_getBalance", [address, "latest"])
        ).then(hexToBig);
    return p.catch(() => { warnings.push(`${a.symbol.toLowerCase()}_balance_unavailable`); return null; });
  };

  const [vantisPrice, ethUsd, solUsd, ...raws] = await Promise.all([
    getVantisPrice(),
    getEthUsd(),
    chain.family === "solana" ? getSolUsd() : Promise.resolve(null),
    ...chain.assets.map(readOne),
  ]);

  const priceOf = (a: AssetDef): number | null =>
    a.price === "vantis" ? vantisPrice.price
    : a.price === "eth" ? ethUsd
    : a.price === "sol" ? solUsd
    : 1.0;

  const assets: PortfolioAsset[] = chain.assets.map((a, i) => {
    const raw = raws[i] as bigint | null;
    const amount = raw === null ? null : Number(raw) / 10 ** a.decimals;
    const p = priceOf(a);
    return {
      symbol: a.symbol, name: a.name, contract: a.contract, decimals: a.decimals, logo: a.logo,
      raw: raw === null ? null : raw.toString(),
      amount,
      usd: amount === null || p === null ? null : amount * p,
    };
  });
  const parts = assets.map((a) => a.usd).filter((x): x is number => x !== null);

  const data: Portfolio = {
    ok: valid && warnings.length < chain.assets.length,
    address,
    chain: chain.key,
    chain_id: chain.id,
    chain_name: chain.name,
    family: chain.family,
    explorer: chain.explorer,
    explorer_addr: valid ? chain.explorer + chain.addrPath + address : "",
    assets,
    total_usd: parts.length ? parts.reduce((a, b) => a + b, 0) : null,
    prices: { vantis_usd: vantisPrice.price, vantis_source: vantisPrice.source, eth_usd: ethUsd, sol_usd: solUsd },
    warnings,
    fetched_at: new Date().toISOString(),
  };
  // Only clean reads earn the full 60s — caching a failed read would pin
  // "unavailable" on every viewer until the TTL runs out. An absent address
  // is not cached either: the wallet appears the moment Privy mints it.
  if (valid && warnings.length === 0) pfCache.set(key, { at: Date.now(), data });
  return data;
}

// ─── Page ───

const PF_CSS = `
.pf-main { padding:52px 24px 96px; }
.pf-head h1 { font-size:clamp(30px,4.6vw,42px); }
.pf-sub { color:var(--body); font-size:15px; margin-top:10px; max-width:62ch; }
.pf-chains { display:flex; gap:8px; margin-top:26px; flex-wrap:wrap; align-items:center; }
.pf-chain { font-family:var(--mono); font-size:11.5px; letter-spacing:0.04em; color:var(--body); background:none; border:1px solid var(--line-strong); border-radius:16px; padding:8px 16px; cursor:pointer; }
.pf-chain:hover { border-color:var(--ink); color:var(--ink); }
.pf-chain.on { color:var(--white); background:var(--ink); border-color:var(--ink); }
/* The break is load-bearing, not decoration: everything left of it shares one
   key, everything right of it is a different wallet entirely. */
.pf-split { display:inline-flex; align-items:center; gap:8px; margin-left:4px; }
.pf-split::before { content:""; width:1px; height:18px; background:var(--line-strong); }
.pf-fam { font-family:var(--mono); font-size:9.5px; font-weight:600; letter-spacing:0.14em; text-transform:uppercase; color:var(--muted); border:1px solid var(--line); border-radius:10px; padding:3px 8px; display:inline-block; }
.pf-keynote { font-family:var(--mono); font-size:10.5px; letter-spacing:0.04em; color:var(--muted); margin-top:10px; line-height:1.5; }
.pf-empty { font-size:12.5px; color:var(--body); line-height:1.55; margin-top:14px; }
.pf-grid { display:grid; grid-template-columns:minmax(0,1fr) 340px; gap:20px; margin-top:20px; align-items:start; }
.pf-panel { border:1px solid var(--line); border-radius:22px; background:var(--white); padding:24px 26px; }
.pf-k { font-family:var(--mono); font-size:11px; font-weight:600; letter-spacing:0.14em; text-transform:uppercase; color:var(--muted); }
.pf-table { width:100%; border-collapse:collapse; margin-top:14px; }
.pf-table th { font-family:var(--mono); font-size:10px; font-weight:600; letter-spacing:0.12em; text-transform:uppercase; color:var(--muted); text-align:left; padding:8px 0; border-bottom:1px solid var(--line); }
.pf-table th:last-child, .pf-table td:last-child { text-align:right; }
.pf-table td { padding:14px 0; border-bottom:1px solid var(--line); font-size:14px; vertical-align:middle; }
.pf-table tr:last-child td { border-bottom:0; }
.pf-asset { display:flex; align-items:center; gap:13px; }
/* Marks carry their own shapes (circles, squares, bare glyphs) — a forced
   frame would fight them, so only the box size is normalised. */
.pf-logo { width:26px; height:26px; flex-shrink:0; display:block; }
/* Robinhood's and Ethereum's marks are near-black, so on the selected (ink)
   pill they disappear into it — hence a white disc behind the mark when
   selected. The disc lives on a WRAPPER, never on the <img>: border-radius on
   a replaced element crops the artwork itself, which turned Base's square
   mark into a circle. The wrapper is present in both states so selecting a
   pill cannot change its width and shuffle the row. */
.pf-chain { display:inline-flex; align-items:center; gap:8px; }
.pf-chip { display:inline-flex; align-items:center; justify-content:center; width:22px; height:22px; border-radius:50%; flex-shrink:0; }
.pf-chain.on .pf-chip { background:var(--white); }
.pf-chain img { width:16px; height:16px; display:block; }
.pf-asset-s { font-weight:600; color:var(--ink); }
.pf-asset-n { font-family:var(--mono); font-size:10.5px; letter-spacing:0.06em; text-transform:uppercase; color:var(--muted); margin-top:3px; }
.pf-num { font-family:var(--mono); font-size:13.5px; color:var(--ink); font-variant-numeric:tabular-nums; }
.pf-dim { color:var(--muted); }
.pf-note { font-family:var(--mono); font-size:10.5px; letter-spacing:0.04em; color:var(--muted); margin-top:14px; }
.pf-total { font-size:clamp(28px,3.6vw,36px); margin-top:14px; }
.pf-total-k { font-family:var(--mono); font-size:10px; font-weight:600; letter-spacing:0.14em; text-transform:uppercase; color:var(--muted); margin-top:4px; }
.pf-addr { font-family:var(--mono); font-size:12px; color:var(--ink); word-break:break-all; margin-top:18px; line-height:1.5; }
.pf-addr-row { display:flex; align-items:center; gap:14px; margin-top:12px; flex-wrap:wrap; }
.pf-copy { font-family:var(--mono); font-size:10px; letter-spacing:0.08em; text-transform:uppercase; color:var(--muted); border:1px solid var(--line); border-radius:14px; padding:5px 12px; background:none; cursor:pointer; }
.pf-copy:hover { color:var(--ink); border-color:var(--ink); }
.pf-recv { font-size:12.5px; color:var(--body); line-height:1.55; margin-top:16px; padding-top:14px; border-top:1px solid var(--line); }
.pf-credits { font-size:12.5px; color:var(--body); margin-top:10px; }
.wd-panel { margin-top:20px; background:#0C0D0E; border-radius:22px; padding:26px 28px 30px; color:#E8EAE8; }
.wd-panel .pf-k { color:#7A8087; }
.wd-form { margin-top:16px; max-width:560px; }
.wd-row { margin-top:14px; }
.wd-l { font-family:var(--mono); font-size:10px; font-weight:600; letter-spacing:0.12em; text-transform:uppercase; color:#7A8087; margin-bottom:7px; }
.wd-pills { display:flex; gap:8px; flex-wrap:wrap; }
.wd-pill { font-family:var(--mono); font-size:11.5px; letter-spacing:0.04em; color:#B9BFC4; background:none; border:1px solid #24272B; border-radius:16px; padding:7px 16px; cursor:pointer; }
.wd-pill.on { color:#0A0A0A; background:#E8EAE8; border-color:#E8EAE8; }
.wd-in { width:100%; font-family:var(--mono); font-size:13px; color:#E8EAE8; background:#121416; border:1px solid #24272B; border-radius:10px; padding:11px 13px; outline:none; }
.wd-in:focus { border-color:#4C5055; }
.wd-amt { display:flex; gap:8px; }
.wd-max { font-family:var(--mono); font-size:10px; letter-spacing:0.08em; text-transform:uppercase; color:#B9BFC4; background:none; border:1px solid #24272B; border-radius:10px; padding:0 14px; cursor:pointer; flex-shrink:0; }
.wd-max:hover { color:#E8EAE8; border-color:#4C5055; }
.wd-bal { font-family:var(--mono); font-size:10.5px; color:#7A8087; margin-top:7px; }
.wd-send { font-family:var(--display); font-size:14.5px; font-weight:600; color:#0A0A0A; background:var(--green); border:0; border-radius:999px; height:44px; padding:0 26px; cursor:pointer; margin-top:20px; }
.wd-send:disabled { opacity:0.38; cursor:not-allowed; }
.wd-note { font-size:12.5px; color:#B9BFC4; line-height:1.55; margin-top:12px; }
.wd-warn { font-family:var(--mono); font-size:11px; color:#E8EAE8; background:#1A1C1E; border:1px solid #24272B; border-radius:10px; padding:10px 13px; margin-top:14px; line-height:1.5; }
.wd-ok { font-family:var(--mono); font-size:11.5px; color:var(--green); margin-top:14px; word-break:break-all; line-height:1.6; }
.wd-ok a { color:var(--green); text-decoration:underline; text-underline-offset:3px; }
.wd-err { font-family:var(--mono); font-size:11px; color:#F2B8B5; margin-top:14px; word-break:break-word; }
.wd-signin { font-family:var(--mono); font-size:11.5px; letter-spacing:0.02em; color:#0A0A0A; background:#E8EAE8; border:0; border-radius:999px; height:38px; padding:0 20px; cursor:pointer; }
@media (max-width:860px) { .pf-grid { grid-template-columns:1fr; } }
`;

export function portfolioHtml(user: any, card: any, opts: {
  viewer: NavViewer;
  menuCard?: string;
  privy: { appId: string; islandFile: string; methods?: { primary: string[]; overflow: string[] } | null } | null;
}): string {
  const addr = String(user?.wallet_address || "");
  const solAddr = String(user?.solana_address || "");
  const hasWallet = /^0x[0-9a-fA-F]{40}$/.test(addr);
  const hasSol = isSolanaAddress(solAddr);

  const pill = (c: (typeof CHAINS)[string], on: boolean) =>
    `<button type="button" class="pf-chain${on ? " on" : ""}" data-chain="${c.key}" data-name="${esc(c.name)}" data-family="${c.family}" data-explorer="${esc(c.explorer)}" data-addrpath="${esc(c.addrPath)}"><span class="pf-chip"><img src="${esc(c.logo)}" alt="" width="16" height="16"></span>${esc(c.name)}</button>`;
  const evmChains = Object.values(CHAINS).filter((c) => c.family === "evm");
  const solChains = Object.values(CHAINS).filter((c) => c.family === "solana");
  // Solana sits behind a visible break because it is a different key, not
  // another view of the same one — a flat row would imply one wallet.
  const chainPills =
    evmChains.map((c, i) => pill(c, i === 0)).join("") +
    `<span class="pf-split">${solChains.map((c) => pill(c, false)).join("")}</span>`;

  const holdings = hasWallet ? `
  <div class="pf-chains" id="pf-chains">${chainPills}</div>
  <section class="pf-grid">
    <div class="pf-panel">
      <div class="pf-k">Holdings &middot; <span id="pf-chain-name">Robinhood Chain</span></div>
      <table class="pf-table">
        <thead><tr><th>Asset</th><th>Balance</th><th>Value</th></tr></thead>
        <tbody id="pf-rows">
          <tr>
            <td><div class="pf-asset"><img class="pf-logo" src="/logos/vantis.svg" alt="" width="26" height="26"><div><div class="pf-asset-s">VANTIS</div><div class="pf-asset-n">Vantis</div></div></div></td>
            <td class="pf-num">&mdash;</td>
            <td class="pf-num">&mdash;</td>
          </tr>
          <tr>
            <td><div class="pf-asset"><img class="pf-logo" src="/logos/eth.svg" alt="" width="26" height="26"><div><div class="pf-asset-s">ETH</div><div class="pf-asset-n">Ether &middot; pays gas</div></div></div></td>
            <td class="pf-num">&mdash;</td>
            <td class="pf-num">&mdash;</td>
          </tr>
        </tbody>
      </table>
      <div class="pf-note" id="pf-note">Balances read on-chain &middot; prices via DexScreener &middot; USDC shown at $1.00</div>
    </div>
    <aside class="pf-panel">
      <div class="pf-k">Embedded wallet &middot; Privy</div>
      <div class="pf-total num" id="pf-total">$&mdash;</div>
      <div class="pf-total-k" id="pf-total-k">Total value &middot; Robinhood Chain</div>
      <div style="margin-top:16px;"><span class="pf-fam" id="pf-fam">EVM &middot; secp256k1</span></div>
      <div class="pf-addr" id="pf-addr" data-evm="${esc(addr)}" data-sol="${esc(solAddr)}">${esc(addr)}</div>
      <div class="pf-addr-row" id="pf-addr-row">
        <button type="button" class="pf-copy" id="pf-copy" data-addr="${esc(addr)}">Copy address</button>
        <a class="arrowlink" id="pf-explorer" href="https://robinscan.io/address/${esc(addr)}" target="_blank" rel="noopener">Explorer ${ARROW}</a>
      </div>
      <p class="pf-empty" id="pf-nosol" style="display:none;">Setting up your Solana wallet&hellip;</p>
      <p class="pf-keynote" id="pf-keynote">Same address on Robinhood Chain, Ethereum, Arbitrum and Base.</p>
      <p class="pf-recv" id="pf-recv">Receive by sending assets <strong>on the selected chain</strong> to this address. Nothing sent on the wrong EVM chain is lost, it just shows under that chain instead.</p>
      <p class="pf-credits">Card credits are separate and closed-loop &mdash; they live on your card, not in this wallet. <a class="arrowlink" href="/wallets">Console ${ARROW}</a></p>
    </aside>
  </section>
  <section class="wd-panel">
    <div class="pf-k">Withdraw &middot; <span id="wd-chain-name">Robinhood Chain</span></div>
    ${opts.privy
      ? `<div id="privy-root"><p class="wd-note">Preparing wallet&hellip;</p></div>`
      : `<p class="wd-note">Withdrawals are unavailable right now &mdash; the wallet service is not configured.</p>`}
  </section>` : `
  <section class="pf-panel" style="margin-top:34px;">
    <div class="pf-k">No wallet yet</div>
    <p class="pf-recv" style="border:0; padding:0;">Your embedded wallet is created the first time you sign in through the wallet service. Sign out and back in, and it will appear here.</p>
  </section>`;

  const privyBoot = opts.privy && hasWallet ? `
  <script>window.__PRIVY = { appId: "${esc(opts.privy.appId)}", mode: "wallet", addr: "${esc(addr)}", sol: "${esc(solAddr)}", methods: ${JSON.stringify(opts.privy.methods || null)} };</script>
  <script type="module" src="/assets/${esc(opts.privy.islandFile)}"></script>` : "";

  // Inline JS below is deliberately escape-free (no backticks, no dollar-brace,
  // no backslashes) — the same rule the burn toast follows in pages.ts.
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Portfolio &mdash; Vantis Cards</title>
<meta name="robots" content="noindex">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<style>${SYSTEM_CSS}${PF_CSS}</style>
<script defer src="/consent.js?v=1"></script>
${opts.privy && hasWallet ? `<link rel="modulepreload" href="/assets/${esc(opts.privy.islandFile)}">` : ""}
</head>
<body>
${appNav(opts.viewer, null, { menuCard: opts.menuCard })}
<main class="wrap pf-main">
  <header class="pf-head">
    <h1>Portfolio</h1>
    <p class="pf-sub">On-chain assets in your embedded wallets &mdash; one address across every EVM chain, plus a separate Solana address, both created with your account and controlled by your sign-in. Only you can move them.</p>
  </header>
  ${holdings}
</main>
<script>
(function () {
  var copy = document.getElementById("pf-copy");
  if (copy) copy.addEventListener("click", function () {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(copy.getAttribute("data-addr") || "").then(function () {
      var o = copy.textContent; copy.textContent = "Copied";
      setTimeout(function () { copy.textContent = o; }, 1400);
    });
  });
  var rows = document.getElementById("pf-rows");
  if (!rows) return;
  var current = "robinhood";
  function fmtAmt(a) {
    if (a.amount === null || a.amount === undefined) return "—";
    var digits = (a.symbol === "ETH" || a.symbol === "SOL") ? 6 : 2;
    return new Intl.NumberFormat("en-US", { maximumFractionDigits: digits }).format(a.amount);
  }
  function fmtUsd(n) {
    if (n === null || n === undefined) return "—";
    return "$" + new Intl.NumberFormat("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n);
  }
  function cell(cls) { var td = document.createElement("td"); td.className = cls; return td; }
  function render(pf) {
    rows.textContent = "";
    (pf.assets || []).forEach(function (a) {
      var tr = document.createElement("tr");
      var td1 = cell("");
      var wrap = document.createElement("div"); wrap.className = "pf-asset";
      // Only same-origin /logos paths are accepted. The payload is ours, but
      // building an <img src> from server data without a shape check is the
      // kind of thing that quietly becomes an injection point later.
      // Written without a regex ON PURPOSE: this script lives inside a
      // template literal, so a backslash in a pattern is eaten before the
      // browser ever sees it and the literal turns into a syntax error.
      if (a.logo && a.logo.indexOf("/logos/") === 0 && a.logo.indexOf("..") < 0) {
        var img = document.createElement("img");
        img.className = "pf-logo"; img.src = a.logo; img.alt = "";
        img.width = 26; img.height = 26;
        wrap.appendChild(img);
      }
      var txt = document.createElement("div");
      var s = document.createElement("div"); s.className = "pf-asset-s"; s.textContent = a.symbol;
      var n = document.createElement("div"); n.className = "pf-asset-n"; n.textContent = a.name;
      txt.appendChild(s); txt.appendChild(n);
      wrap.appendChild(txt);
      td1.appendChild(wrap);
      var td2 = cell("pf-num"); td2.textContent = fmtAmt(a);
      var td3 = cell("pf-num"); td3.textContent = fmtUsd(a.usd);
      if (a.usd === null) td3.classList.add("pf-dim");
      tr.appendChild(td1); tr.appendChild(td2); tr.appendChild(td3);
      rows.appendChild(tr);
    });
    var t = document.getElementById("pf-total");
    if (t) t.textContent = pf.total_usd === null ? "$—" : fmtUsd(pf.total_usd);
    var tk = document.getElementById("pf-total-k");
    if (tk) {
      var partial = (pf.assets || []).some(function (a) { return a.amount !== null && a.amount > 0 && a.usd === null; });
      tk.textContent = "Total value · " + pf.chain_name + (partial ? " — excludes unpriced assets" : "");
    }
    var cn = document.getElementById("pf-chain-name");
    if (cn) cn.textContent = pf.chain_name;
    var wn = document.getElementById("wd-chain-name");
    if (wn) wn.textContent = pf.chain_name;
    // The server builds the explorer link because the path differs by
    // explorer (/address on EVM scans, /account on Solscan).
    var ex = document.getElementById("pf-explorer");
    if (ex && pf.explorer_addr) ex.href = pf.explorer_addr;
    var note = document.getElementById("pf-note");
    if (note && pf.prices) {
      var p = pf.prices.vantis_usd;
      var bits;
      if (pf.chain === "robinhood") bits = "VANTIS " + (p < 0.01 ? "$" + p.toFixed(6) : "$" + p.toFixed(4)) + " via DexScreener";
      else if (pf.family === "solana") bits = "SOL " + (pf.prices.sol_usd === null ? "—" : "$" + Number(pf.prices.sol_usd).toFixed(2)) + " via DexScreener · USDC shown at $1.00";
      else bits = "Prices via DexScreener · USDC shown at $1.00";
      note.textContent = bits + " · balances read on-chain";
    }
  }
  // The address panel follows the FAMILY, not the chain: four EVM chains
  // share one address, Solana has its own. Driven from data attributes so
  // no address is ever interpolated into this script.
  var addrEl = document.getElementById("pf-addr");
  var EVM_ADDR = addrEl ? (addrEl.getAttribute("data-evm") || "") : "";
  var SOL_ADDR = addrEl ? (addrEl.getAttribute("data-sol") || "") : "";
  function showFamily(family) {
    var isSol = family === "solana";
    var a = isSol ? SOL_ADDR : EVM_ADDR;
    var fam = document.getElementById("pf-fam");
    if (fam) fam.textContent = isSol ? "Solana · ed25519" : "EVM · secp256k1";
    var kn = document.getElementById("pf-keynote");
    if (kn) kn.textContent = isSol
      ? "A separate key from your EVM address — Solana does not share it."
      : "Same address on Robinhood Chain, Ethereum, Arbitrum and Base.";
    var missing = isSol && !a;
    if (addrEl) addrEl.textContent = missing ? "—" : a;
    var row = document.getElementById("pf-addr-row");
    if (row) row.style.display = missing ? "none" : "flex";
    var nosol = document.getElementById("pf-nosol");
    if (nosol) nosol.style.display = missing ? "block" : "none";
    var recv = document.getElementById("pf-recv");
    if (recv) {
      recv.style.display = missing ? "none" : "block";
      // The EVM reassurance does NOT carry over. Across EVM chains a
      // misrouted send still lands on the same key and shows under another
      // chain; across FAMILIES it is a different key entirely, so anything
      // sent to the wrong one of these two addresses is gone.
      recv.textContent = isSol
        ? "Receive by sending SOL or SPL tokens on Solana to this address. This address works on Solana only — it is a different key from your EVM address, and assets sent to the wrong one of the two cannot be recovered."
        : "Receive by sending assets on the selected chain to this address. Nothing sent on the wrong EVM chain is lost, it just shows under that chain instead — but this address is EVM only, and Solana assets sent here cannot be recovered.";
    }
    var copy = document.getElementById("pf-copy");
    if (copy) copy.setAttribute("data-addr", a);
  }
  function skeleton() {
    rows.querySelectorAll(".pf-num").forEach(function (el) { el.textContent = "—"; });
    var t = document.getElementById("pf-total");
    if (t) t.textContent = "$—";
  }
  function fail(chain) {
    if (chain !== current) return;
    var note = document.getElementById("pf-note");
    if (note) note.textContent = "Could not load balances for this chain — check your connection, then re-select the chain.";
  }
  function load(chain) {
    fetch("/api/portfolio?chain=" + encodeURIComponent(chain), { cache: "no-store" })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (pf) {
        if (pf && pf.chain === current) { render(pf); window.__PF = pf; }
        else if (!pf) { fail(chain); }
      })
      .catch(function () { fail(chain); });
  }
  var pills = document.getElementById("pf-chains");
  if (pills) pills.addEventListener("click", function (e) {
    var b = e.target && e.target.closest ? e.target.closest(".pf-chain") : null;
    if (!b) return;
    var chain = b.getAttribute("data-chain");
    if (!chain || chain === current) return;
    current = chain;
    pills.querySelectorAll(".pf-chain").forEach(function (p) { p.classList.remove("on"); });
    b.classList.add("on");
    // Optimistic labels from the pill's own data attributes, so the header,
    // explorer link and withdraw panel never disagree with the selection —
    // even if the fetch then fails.
    var nm = b.getAttribute("data-name") || chain;
    var fam = b.getAttribute("data-family") || "evm";
    var cn = document.getElementById("pf-chain-name"); if (cn) cn.textContent = nm;
    var wn = document.getElementById("wd-chain-name"); if (wn) wn.textContent = nm;
    var tk = document.getElementById("pf-total-k"); if (tk) tk.textContent = "Total value · " + nm;
    showFamily(fam);
    var ex = document.getElementById("pf-explorer");
    var cpy = document.getElementById("pf-copy");
    if (ex && cpy) ex.href = (b.getAttribute("data-explorer") || "") + (b.getAttribute("data-addrpath") || "/address/") + (cpy.getAttribute("data-addr") || "");
    skeleton();
    load(chain);
    try { window.dispatchEvent(new CustomEvent("vantis:chain", { detail: chain })); } catch (err) {}
  });
  showFamily("evm");
  load(current);
})();
</script>
${privyBoot}
</body>
</html>`;
}
