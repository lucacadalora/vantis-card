// $VANTIS live price — DexScreener deepest-pool, same selection rule as
// vantis.sh/burns: filter pairs where baseToken == canonical CA, sort by
// liquidity USD desc, take priceUsd of the deepest pool.
//
// Failure ladder: in-memory cache (60s) → last successful fetch persisted in
// the meta table → LAST_VERIFIED constant. Billing must never die because a
// price API hiccuped.

import { metaGet, metaSet, traceVendor } from "../db";

// Canonical $VANTIS on Robinhood Chain. Dozens of copycat tokens exist — this
// address is the only real one.
export const VANTIS_CA = "0xB6d695d5fbcEbD837f6b9f214c9BeeE8bA90762B";
const CAL = VANTIS_CA.toLowerCase();

// Deepest-pool price observed at ship time (Aug 5 2026); refreshed on every
// successful fetch. Absolute last resort only.
const LAST_VERIFIED = 0.001868;

const TTL_MS = 60_000;

let cached: { price: number; at: number; source: string } | null = null;

export async function getVantisPrice(): Promise<{ price: number; source: string; fetchedAt: string }> {
  const now = Date.now();
  if (cached && now - cached.at < TTL_MS) {
    return { price: cached.price, source: cached.source, fetchedAt: new Date(cached.at).toISOString() };
  }

  try {
    const t0 = performance.now();
    const res = await fetch(`https://api.dexscreener.com/latest/dex/tokens/${VANTIS_CA}`, {
      signal: AbortSignal.timeout(8000),
    });
    traceVendor({ vendor: "dexscreener", endpoint: "latest/dex/tokens", status: res.status, latency_ms: Math.round(performance.now() - t0), cost_est_usd: 0, error: res.ok ? null : `http_${res.status}` });
    if (!res.ok) throw new Error(`dexscreener ${res.status}`);
    const data = await res.json();
    const pairs = (data.pairs || []).filter(
      (p: any) => p.baseToken?.address?.toLowerCase() === CAL
    );
    pairs.sort((a: any, b: any) => (b.liquidity?.usd || 0) - (a.liquidity?.usd || 0));
    const best = pairs[0];
    const price = parseFloat(best?.priceUsd);
    if (!isFinite(price) || price <= 0) throw new Error("no finite price");

    cached = { price, at: now, source: "dexscreener" };
    metaSet("vantis_price_usd", String(price));
    metaSet("vantis_price_at", new Date(now).toISOString());
    return { price, source: "dexscreener", fetchedAt: new Date(now).toISOString() };
  } catch (err) {
    // Stale in-memory beats DB beats constant
    if (cached) {
      return { price: cached.price, source: `${cached.source} (stale)`, fetchedAt: new Date(cached.at).toISOString() };
    }
    const persisted = parseFloat(metaGet("vantis_price_usd") || "");
    if (isFinite(persisted) && persisted > 0) {
      cached = { price: persisted, at: now, source: "persisted" };
      return { price: persisted, source: "persisted", fetchedAt: metaGet("vantis_price_at") || "unknown" };
    }
    cached = { price: LAST_VERIFIED, at: now, source: "fallback" };
    return { price: LAST_VERIFIED, source: "fallback", fetchedAt: "ship-time constant" };
  }
}

export function usdToVantis(usd: number, price: number): number {
  if (!isFinite(price) || price <= 0) return 0;
  return usd / price;
}

export function formatVantis(amount: number): string {
  if (amount >= 1_000_000) return `${(amount / 1_000_000).toFixed(2)}M`;
  if (amount >= 1_000) return `${(amount / 1_000).toFixed(1)}K`;
  if (amount >= 1) return amount.toFixed(2);
  return amount.toFixed(4);
}
