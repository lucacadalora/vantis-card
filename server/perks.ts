// PERKS — what holding a card unlocks on the rail.
//
// A perk is an ENTITLEMENT attached to a card (Genesis or OG), granted to
// whichever account holds that card. Holdings live in genesis_holdings
// (preview / admin / chain); perks live here in card_perks, keyed by slug.
// The operator assigns both from /admin — which account holds which card,
// and which perks each card carries. Enforcement is holdings-joined at
// call time, so revoking a card (or it selling on chain) kills its perks
// on the very next request — same instant-stop rule as cartridges.
//
// A perk is NOT a credit and NOT a cartridge allowance: it charges
// nothing, burns nothing, holds no reserve, and has no daily token cap.
// What it costs US is recorded in perk_usage (tokens + real upstream
// dollars) — that is where the exposure lives, mirroring cartridge_usage.
//
// Copy rule (Luca, Aug 13): the GPT perk NEVER names the pooled lane's
// implementation. It is "the frontier GPT lane" everywhere, same as the
// public gateway error copy.

import { getDb } from "./db";
import { ALL_CARDS, setOf } from "./genesis";

export type PerkKey = "gpt_unlimited" | "deepseek_unlimited";

// Perk ceiling (Luca, Aug 13: "limit of the perks is up to 1B token per
// day"): perk-covered calls stop covering once the account's perk usage
// crosses this in a UTC day — the call falls through to credits/cartridge,
// it never fails. Card ALLOWANCES are separate and per-card (RIGHTS).
export const PERK_DAILY_TOKEN_CAP = 1_000_000_000;

export const PERK_DEFS: Record<PerkKey, { label: string; desc: string }> = {
  gpt_unlimited: {
    label: "Unlimited GPT inference",
    desc: "Every model on the frontier GPT lane opens for the holding account — no credit charge, no balance metering. Plugged into a lane, usage draws the card's daily allowance.",
  },
  deepseek_unlimited: {
    label: "Unlimited DeepSeek V4 Flash",
    desc: "The default rail, free for the holding account — no credit charge, no burn, up to 1B tokens a day.",
  },
};

export const PERK_KEYS = Object.keys(PERK_DEFS) as PerkKey[];

export function ensurePerkTables(): void {
  const d = getDb();
  d.run(`
    CREATE TABLE IF NOT EXISTS card_perks (
      slug TEXT NOT NULL,
      perk TEXT NOT NULL,
      created_at TEXT DEFAULT (datetime('now')),
      PRIMARY KEY (slug, perk)
    )`);
  d.run(`
    CREATE TABLE IF NOT EXISTS perk_usage (
      user_id TEXT NOT NULL,
      day TEXT NOT NULL,                  -- UTC date, YYYY-MM-DD
      perk TEXT NOT NULL,
      calls INTEGER DEFAULT 0,
      tokens INTEGER DEFAULT 0,
      cost_usd REAL DEFAULT 0,            -- what WE paid upstream — the exposure
      PRIMARY KEY (user_id, day, perk)
    )`);
}

// The perks an account holds RIGHT NOW, via the cards on it. One query,
// called per gateway request — cheap on sqlite, and always current, so a
// revoked card stops unlocking anything on the next call.
export function perksFor(userId: string): Set<string> {
  const rows = getDb().query(
    `SELECT DISTINCT p.perk FROM card_perks p
     JOIN genesis_holdings h ON h.slug = p.slug
     WHERE h.user_id = ?`
  ).all(userId) as any[];
  return new Set(rows.map((r) => r.perk));
}

export function perksOf(slug: string): string[] {
  return (getDb().query("SELECT perk FROM card_perks WHERE slug = ? ORDER BY perk").all(slug) as any[]).map((r) => r.perk);
}

export function setCardPerk(slug: string, perk: string, on: boolean): void {
  if (on) getDb().run("INSERT OR IGNORE INTO card_perks (slug, perk) VALUES (?, ?)", [slug, perk]);
  else getDb().run("DELETE FROM card_perks WHERE slug = ? AND perk = ?", [slug, perk]);
}

// Operator grant: access, not chain ownership — source 'admin' keeps it
// distinct from preview seeds and future chain reads. Chain rows are never
// touched from here: once the ERC-721 reads, the chain is the authority.
export function grantCardTo(slug: string, userId: string): void {
  getDb().run(
    "INSERT OR IGNORE INTO genesis_holdings (slug, user_id, source) VALUES (?, ?, 'admin')",
    [slug, userId]
  );
}

export function revokeCardFrom(slug: string, userId: string): void {
  getDb().run(
    "DELETE FROM genesis_holdings WHERE slug = ? AND user_id = ? AND source != 'chain'",
    [slug, userId]
  );
}

export function holdersOf(slug: string): Array<{ user_id: string; handle: string; source: string; since: string }> {
  return getDb().query(
    `SELECT h.user_id, COALESCE(u.x_username, '?') AS handle, h.source, h.created_at AS since
     FROM genesis_holdings h LEFT JOIN users u ON u.id = h.user_id
     WHERE h.slug = ? ORDER BY h.created_at ASC`
  ).all(slug) as any[];
}

// Tokens the account has drawn through perks today, all perks together —
// the number the PERK_DAILY_TOKEN_CAP is checked against.
export function perkTokensToday(userId: string): number {
  const day = new Date().toISOString().slice(0, 10);
  const r = getDb().query("SELECT COALESCE(SUM(tokens),0) t FROM perk_usage WHERE user_id = ? AND day = ?").get(userId, day) as any;
  return r?.t || 0;
}

export function notePerkUsage(userId: string, perk: string, tokens: number, costUsd: number): void {
  try {
    const day = new Date().toISOString().slice(0, 10);
    getDb().run(
      `INSERT INTO perk_usage (user_id, day, perk, calls, tokens, cost_usd) VALUES (?, ?, ?, 1, ?, ?)
       ON CONFLICT(user_id, day, perk) DO UPDATE SET
         calls = calls + 1, tokens = tokens + excluded.tokens, cost_usd = cost_usd + excluded.cost_usd`,
      [userId, day, perk, tokens, costUsd]
    );
  } catch (err) {
    console.error("perk usage write failed:", err); // telemetry must never fail a call
  }
}

// Everything the admin Cards tab needs in one shot: the full registry with
// holders and perks per card, plus 7-day perk exposure.
export function perkAdminData() {
  const usage = getDb().query(
    `SELECT p.perk, COALESCE(u.x_username, '?') AS handle, SUM(p.calls) AS calls,
            SUM(p.tokens) AS tokens, SUM(p.cost_usd) AS cost_usd
     FROM perk_usage p LEFT JOIN users u ON u.id = p.user_id
     WHERE p.day >= date('now', '-7 days')
     GROUP BY p.perk, p.user_id ORDER BY cost_usd DESC, tokens DESC LIMIT 30`
  ).all() as any[];
  return {
    perk_defs: PERK_DEFS,
    cards: ALL_CARDS.map((c) => ({
      slug: c.slug,
      n: c.n,
      name: c.name,
      grade: c.grade,
      set: setOf(c).face,
      status: c.status,
      holders: holdersOf(c.slug),
      perks: perksOf(c.slug),
    })),
    usage_7d: usage,
  };
}
