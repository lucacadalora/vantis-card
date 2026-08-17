// Credits — USD ledger internally, branded $VANTIS externally.
// Every inference call: USD cost at list price → converted to VANTIS at the
// live market price → recorded as a virtual burn.

import {
  getUserByApiKey,
  getAgentWalletByApiKey,
  getApiKeyRow,
  getAgentWallet,
  getUser,
  consumeCredits as dbConsumeCredits,
  consumeWalletCredits,
} from "../db";
import { getVantisPrice, usdToVantis } from "../price";
import { TARGET_MODEL, TARGET_LABEL, effectiveRate, publicModels, type Rate } from "../upstream";

// The rail's HEADLINE rate: the default DeepSeek V4 Flash 0731 line at $0.14
// per 1M input, $0.28 per 1M output — the numbers read off DeepSeek's
// first-party price page on Aug 5 2026 (cache hit = miss then, no peak
// policy). Kept as the standard rate; the catalog is the source of truth per
// model and the FAST tier (deepseek-v4-flash-0731-fast) bills 2× this with a
// $0.07 cache-read rate — see server/upstream/catalog.ts.
// NOTE (Aug 17 2026): DeepSeek's page has since restructured (peak/off-peak
// and cache-hit tiers, higher headline) — whether the standard line re-pegs
// is an open operator decision; nothing here moved.
export const PRICING = { input: 0.14, output: 0.28 };

// The public price list, straight off the catalog. The default model is first
// so every existing consumer that reads pricing[0] still gets the rail's
// headline rate.
export function listPricing() {
  return publicModels().map((m) => ({
    model: m.id,
    label: m.label,
    vendor: m.vendor,
    family: m.family,
    usd_per_1m_input: m.rate.input,
    usd_per_1m_output: m.rate.output,
    ...(m.rate.cachedInput != null ? { usd_per_1m_cached_input: m.rate.cachedInput } : {}),
    context_window: m.contextWindow,
    ...(m.rate.longContext
      ? {
          long_context: {
            above_input_tokens: m.rate.longContext.thresholdInputTokens,
            usd_per_1m_input: m.rate.input * m.rate.longContext.inputMultiplier,
            usd_per_1m_output: m.rate.output * m.rate.longContext.outputMultiplier,
          },
        }
      : {}),
  }));
}

// The most a request could possibly cost: every requested output token spent.
// Reserving this before dialling out is what stops a nearly-empty key from
// extracting a full max_tokens completion it cannot pay for.
export function worstCaseCost(tokensIn: number, maxTokens: number, rate?: Rate): number {
  return calculateCost(tokensIn, maxTokens, rate);
}

// ── in-flight reserve holds ──
// The balance check alone is a TOCTOU race (red-team confirmed): N concurrent
// calls on one nearly-empty key each pass the same read and overdraw. Holds
// make the reserve a real claim: available = balance − outstanding holds.
// In-process on purpose — this service is a single process, same as the rate
// limiter; if that ever changes both must move to a shared store.
const inflightHolds = new Map<string, number>();
export const spenderScope = (walletId: string | null | undefined, userId: string) =>
  walletId ? `w:${walletId}` : `u:${userId}`;
export function holdReserve(scope: string, usd: number): void {
  inflightHolds.set(scope, (inflightHolds.get(scope) || 0) + usd);
}
export function releaseReserve(scope: string, usd: number): void {
  const left = (inflightHolds.get(scope) || 0) - usd;
  if (left <= 1e-9) inflightHolds.delete(scope);
  else inflightHolds.set(scope, left);
}
export const heldFor = (scope: string): number => inflightHolds.get(scope) || 0;

// USD cost for a request. 6 decimal places — at these rates a normal call
// costs small fractions of a cent, and 2dp would round everything to zero.
//
// The rate applied is the model's EFFECTIVE rate for this prompt size: the
// GPT-5.x models publish a long-context band that re-prices the whole request
// once the prompt crosses 272K input tokens. Billing the short-context rate on
// a long-context call would mean paying 2x what we charge — the same shape as
// the reserve leak closed in August, pointed the other way.
//
// `tokensCached` = the part of tokensIn the route reported as a prompt-cache
// READ. It bills at rate.cachedInput when the vendor publishes one (the fast
// tier: $0.07 against $0.28), and at the full input rate otherwise — the
// standard line has no published cache rate, so cached tokens there cost the
// same as fresh ones. Clamped into [0, tokensIn]: a route that over-reports
// cache hits must never bill negative fresh input. Reserves call this with
// no cached count on purpose — the worst case assumes no cache at all.
export function calculateCost(tokensIn: number, tokensOut: number, rate?: Rate, tokensCached = 0): number {
  const base = rate || PRICING;
  const r = effectiveRate(base, tokensIn); // catalog models carry their own list rate
  const cached = base.cachedInput != null ? Math.min(Math.max(0, tokensCached || 0), Math.max(0, tokensIn)) : 0;
  const fresh = Math.max(0, tokensIn) - cached;
  const costIn = (fresh / 1_000_000) * r.input + (cached / 1_000_000) * (base.cachedInput ?? r.input);
  const costOut = (tokensOut / 1_000_000) * r.output;
  return Math.round((costIn + costOut) * 1_000_000) / 1_000_000;
}

export interface BurnDeduction {
  ok: boolean;
  shortfall_usd?: number;
  error?: string;
  cost_usd?: number;
  vantis_burned?: number;
  vantis_price_usd?: number;
  balance_usd?: number;
  balance_vantis?: number;
  total_vantis_burned?: number;
}

// Deduct after a completed call: USD cost → VANTIS at live price → burn ledger.
// `servedModel` is what the upstream actually ran, recorded for audit.
// A key spends either the card's main balance or an agent wallet's balance.
export function resolveSpender(apiKey: string): { user: any; wallet: any | null } | null {
  const row = getApiKeyRow(apiKey);
  if (row) {
    const user = getUser(row.user_id);
    if (!user) return null;
    if (!row.wallet_id) return { user, wallet: null };
    const wallet = getAgentWallet(row.wallet_id);
    if (!wallet || wallet.status !== "active") return null;
    return { user, wallet };
  }
  const user = getUserByApiKey(apiKey);
  if (user) return { user, wallet: null };
  const wallet = getAgentWalletByApiKey(apiKey);
  if (wallet) return { user: getUser(wallet.user_id), wallet };
  return null;
}

export async function deductAndBurn(
  apiKey: string,
  servedModel: string,
  tokensIn: number,
  tokensOut: number,
  rate?: Rate,
  tokensCached = 0
): Promise<BurnDeduction> {
  const spender = resolveSpender(apiKey);
  if (!spender?.user) return { ok: false, error: "invalid_api_key" };
  return deductAndBurnFor(spender.user, spender.wallet, servedModel, tokensIn, tokensOut, rate, tokensCached);
}

// Same settlement, but for an already-resolved spender — the playground path
// bills a session's Inference lane directly, no API key involved (keys may be
// held back by API_KEYS_ENABLED=0 while the lane itself is live).
export async function deductAndBurnFor(
  user: any,
  wallet: any | null,
  servedModel: string,
  tokensIn: number,
  tokensOut: number,
  rate?: Rate,
  tokensCached = 0
): Promise<BurnDeduction> {
  const cost = calculateCost(tokensIn, tokensOut, rate, tokensCached);
  const { price } = await getVantisPrice();
  const burned = usdToVantis(cost, price);

  const result = wallet
    ? consumeWalletCredits(wallet.id, cost, servedModel, tokensIn, tokensOut, burned, price, tokensCached)
    : dbConsumeCredits(user.id, cost, servedModel, tokensIn, tokensOut, burned, price, tokensCached);
  if (!result.ok) return { ok: false, error: result.error, cost_usd: cost };

  return {
    ok: true,
    shortfall_usd: result.shortfall || 0,
    cost_usd: cost,
    vantis_burned: burned,
    vantis_price_usd: price,
    balance_usd: result.balance,
    balance_vantis: usdToVantis(result.balance!, price),
    total_vantis_burned: result.totalBurned,
  };
}

export async function getBalance(apiKey: string) {
  const spender = resolveSpender(apiKey);
  if (!spender?.user) return null;
  if (spender.wallet) {
    const { price } = await getVantisPrice();
    // Every key is lane-scoped now, so this is the only shape a caller sees.
    // It carries the same field names the card-balance branch always used —
    // `vantis_burned` above all, which is what the docs and clients read;
    // `lifetime_burned_vantis` stays for anything written against the old one.
    return {
      balance_usd: spender.wallet.usd_balance || 0,
      balance_vantis: usdToVantis(spender.wallet.usd_balance || 0, price),
      consumed_usd: spender.wallet.usd_consumed || 0,
      vantis_burned: spender.wallet.vantis_burned || 0,
      vantis_price_usd: price,
      lifetime_burned_vantis: spender.wallet.vantis_burned || 0,
      wallet: spender.wallet.name,
    };
  }
  const user = spender.user;
  const { price } = await getVantisPrice();
  return {
    balance_usd: user.usd_balance || 0,
    balance_vantis: usdToVantis(user.usd_balance || 0, price),
    granted_usd: user.usd_granted || 0,
    consumed_usd: user.usd_consumed || 0,
    vantis_burned: user.vantis_burned || 0,
    vantis_price_usd: price,
  };
}

export function tierInfo(tier: string) {
  const tiers: Record<string, { label: string; color: string }> = {
    whale: { label: "Whale", color: "#FFD700" },
    builder: { label: "Builder", color: "#09F875" },
    explorer: { label: "Explorer", color: "#3B82F6" },
    noise: { label: "Noise", color: "#6B7280" },
  };
  return tiers[tier] || tiers.noise;
}
