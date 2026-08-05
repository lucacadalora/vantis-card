// Credits — USD ledger internally, branded $VANTIS externally.
// Every inference call: USD cost at Jatevo list price → converted to VANTIS
// at the live market price → recorded as a virtual burn.

import {
  getUserByApiKey,
  consumeCredits as dbConsumeCredits,
} from "../db";
import { getVantisPrice, usdToVantis } from "../price";

// USD per 1M tokens (input/output), aligned to the live api.jatevo.ai model
// roster (GET /v1/models, checked Aug 5 2026). Aliases from the JTVO card
// skeleton kept so identical requests price identically.
const MODEL_PRICING: Record<string, { input: number; output: number }> = {
  "gpt-5.6-sol": { input: 2, output: 8 },
  "gpt-5.6-terra": { input: 2, output: 8 },
  "gpt-5.6-luna": { input: 2, output: 8 },
  "gpt-5.5": { input: 2, output: 8 },
  "gpt-5.4": { input: 1.5, output: 6 },
  "gpt-5.4-mini": { input: 0.4, output: 1.6 },
  "zai/GLM-5.2": { input: 1.4, output: 4.4 },
  "byteplus/GLM-5.2": { input: 1.4, output: 4.4 },
  "qwen/qwen3.7-max": { input: 1.5, output: 5 },
  "nvidia/Nemotron-3-Ultra-550b-a55b": { input: 2.5, output: 10 },
  "rtx/qwen3.6-35B-A3B-NVFP4": { input: 0.3, output: 1.2 },
  "wafer/kimi-k3-fast": { input: 1, output: 4 },
  "kimi/kimi-k3": { input: 1, output: 4 },
  "kimi/kimi-k2.7-code": { input: 1, output: 4 },
  "spark/gemma-4-26B-A4B": { input: 0.3, output: 1.2 },
  // JTVO-card aliases
  "glm-5.2": { input: 1.4, output: 4.4 },
  "deepseek-v4-pro": { input: 1.4, output: 4.4 },
  "deepseek-v4-flash": { input: 0.5, output: 1.5 },
  "qwen3.7-max": { input: 1.5, output: 5 },
  "kimi-k3": { input: 1, output: 4 },
  default: { input: 2, output: 8 },
};

export function getPricing(model: string) {
  return MODEL_PRICING[model] || MODEL_PRICING.default;
}

export function listPricing() {
  return Object.entries(MODEL_PRICING)
    .filter(([k]) => k !== "default")
    .map(([model, p]) => ({ model, usd_per_1m_input: p.input, usd_per_1m_output: p.output }));
}

// USD cost for a request. 6 decimal places — at these per-1M rates a normal
// call costs fractions of a cent; 2dp would round everything to zero.
export function calculateCost(model: string, tokensIn: number, tokensOut: number): number {
  const pricing = getPricing(model);
  const costIn = (tokensIn / 1_000_000) * pricing.input;
  const costOut = (tokensOut / 1_000_000) * pricing.output;
  return Math.round((costIn + costOut) * 1_000_000) / 1_000_000;
}

export interface BurnDeduction {
  ok: boolean;
  error?: string;
  cost_usd?: number;
  vantis_burned?: number;
  vantis_price_usd?: number;
  balance_usd?: number;
  balance_vantis?: number;
  total_vantis_burned?: number;
}

// Deduct after a completed call: USD cost → VANTIS at live price → burn ledger.
export async function deductAndBurn(
  apiKey: string,
  model: string,
  tokensIn: number,
  tokensOut: number
): Promise<BurnDeduction> {
  const user = getUserByApiKey(apiKey);
  if (!user) return { ok: false, error: "invalid_api_key" };

  const cost = calculateCost(model, tokensIn, tokensOut);
  const { price } = await getVantisPrice();
  const burned = usdToVantis(cost, price);

  const result = dbConsumeCredits(user.id, cost, model, tokensIn, tokensOut, burned, price);
  if (!result.ok) return { ok: false, error: result.error, cost_usd: cost };

  return {
    ok: true,
    cost_usd: cost,
    vantis_burned: burned,
    vantis_price_usd: price,
    balance_usd: result.balance,
    balance_vantis: usdToVantis(result.balance!, price),
    total_vantis_burned: result.totalBurned,
  };
}

export async function getBalance(apiKey: string) {
  const user = getUserByApiKey(apiKey);
  if (!user) return null;
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
  const tiers: Record<string, { label: string; color: string; emoji: string }> = {
    whale: { label: "Whale", color: "#FFD700", emoji: "🐋" },
    builder: { label: "Builder", color: "#09F875", emoji: "🔨" },
    explorer: { label: "Explorer", color: "#3B82F6", emoji: "🧭" },
    noise: { label: "Noise", color: "#6B7280", emoji: "📡" },
  };
  return tiers[tier] || tiers.noise;
}
