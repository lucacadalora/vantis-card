// Credits — USD ledger internally, branded $VANTIS externally.
// Every inference call: USD cost at list price → converted to VANTIS at the
// live market price → recorded as a virtual burn.

import {
  getUserByApiKey,
  getAgentWalletByApiKey,
  getUser,
  consumeCredits as dbConsumeCredits,
  consumeWalletCredits,
} from "../db";
import { getVantisPrice, usdToVantis } from "../price";
import { TARGET_MODEL, TARGET_LABEL } from "../upstream";

// The rail serves one model, billed at DeepSeek's published first-party rate
// for V4 Flash 0731 (verified against api-docs.deepseek.com, Aug 5 2026):
// $0.14 per 1M input tokens (cache hit and miss are the same), $0.28 per 1M
// output. DeepSeek has announced but not dated a peak-hours 2x policy
// (09:00-12:00 and 14:00-18:00 Beijing) — revisit when that lands.
export const PRICING = { input: 0.14, output: 0.28 };

export function listPricing() {
  return [
    {
      model: TARGET_MODEL,
      label: TARGET_LABEL,
      usd_per_1m_input: PRICING.input,
      usd_per_1m_output: PRICING.output,
    },
  ];
}

// The most a request could possibly cost: every requested output token spent.
// Reserving this before dialling out is what stops a nearly-empty key from
// extracting a full max_tokens completion it cannot pay for.
export function worstCaseCost(tokensIn: number, maxTokens: number): number {
  return calculateCost(tokensIn, maxTokens);
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
export function calculateCost(tokensIn: number, tokensOut: number): number {
  const costIn = (tokensIn / 1_000_000) * PRICING.input;
  const costOut = (tokensOut / 1_000_000) * PRICING.output;
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
  tokensOut: number
): Promise<BurnDeduction> {
  const spender = resolveSpender(apiKey);
  if (!spender?.user) return { ok: false, error: "invalid_api_key" };
  const { user, wallet } = spender;

  const cost = calculateCost(tokensIn, tokensOut);
  const { price } = await getVantisPrice();
  const burned = usdToVantis(cost, price);

  const result = wallet
    ? consumeWalletCredits(wallet.id, cost, servedModel, tokensIn, tokensOut, burned, price)
    : dbConsumeCredits(user.id, cost, servedModel, tokensIn, tokensOut, burned, price);
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
    return {
      balance_usd: spender.wallet.usd_balance || 0,
      balance_vantis: usdToVantis(spender.wallet.usd_balance || 0, price),
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
