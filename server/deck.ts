// DECK — the card tray on /wallets.
//
// Two kinds of card sit in one deck, and the difference between them is the
// whole design:
//
//   1. The ACCOUNT CARD — the minted Vantis card. It carries CREDITS: granted
//      at scoring, topped up later, allocated into lanes, spent per call.
//      A balance. It is owned, it persists, it can be swept back to Main.
//
//   2. A GENESIS CARTRIDGE — one of the ten one-of-one collectibles. It
//      carries NO credits and never will. Plugged into a lane it changes how
//      that lane METERS: calls draw on a daily token ALLOWANCE at a raised
//      lane rate, instead of drawing down the lane's dollars.
//
// That distinction is load-bearing, financially and legally. Credits are a
// balance — owned, funded, swept, spent down, persistent. An allowance is
// access — it resets every UTC day, never accrues, cannot be swept, withdrawn
// or cashed out, and it stops the instant the card is unplugged or sold. A
// membership, not a gift card. That is what keeps a Genesis card on the perks
// side of the line the marketplace PLAIN TERMS block promises, and it is why
// the copy may say "allowance" and must never say "credits".
//
// WHY THIS CANNOT BLEED THE RAIL. The allowance is denominated in tokens per
// day, so the worst case is arithmetic rather than a hope: a card's maximum
// daily cost is its allowance priced at the output rate (conservative — real
// traffic is part input, at half the price). EXPOSURE below computes the whole
// set's ceiling from the live set and the live price list, so the number in
// the UI can never drift from the number in the code. All ten cards, fully
// consumed every day, is a printable figure — see /api/deck.
//
// Pre-deploy (GENESIS_SERIES.contract === null) nobody can own a card on
// chain, so staging accounts hold PREVIEW cartridges: the rights are real and
// really enforced, the ownership is not. Every surface says so.

import { GENESIS, GENESIS_SERIES, ALL_CARDS, setOf, genesisFace, type GenesisCard } from "./genesis";
import { getDb } from "./db";
import { PRICING } from "./credits";
import { esc } from "./pages";

// ─── Rights ────────────────────────────────────────────────────────────
// One profile per grade, not per card: the grade IS the rarity ladder, and
// tying rights to it keeps the collectible hierarchy and the utility
// hierarchy the same hierarchy. A card's face never prints these numbers —
// the four stats on the face are editorial (a strike grade), deliberately not
// an SLA, and that separation is worth keeping.

export type Rights = {
  grade: string;
  label: string;
  dailyTokens: number; // input + output counted together, resets 00:00 UTC
  rpm: number;         // lane rate while this cartridge is plugged
  priority: string;
  blurb: string;
};

export const RIGHTS: Record<string, Rights> = {
  // V·PROOF = 5M/day CONFIRMED by Luca Aug 13 ("for the first burn is 5m
  // deepseek token total (include cache)") — tokens count raw in+out, cache
  // hits included, which is exactly how usageToday already meters.
  "V·PROOF": {
    grade: "V·PROOF",
    label: "Proof rights",
    dailyTokens: 5_000_000,
    rpm: 60,
    priority: "First call on rail capacity",
    blurb: "Five million tokens a day on the rail, renewed every day, at the highest lane rate offered.",
  },
  // OG·PROOF = 1B/day SET by Luca Aug 13 ("the jatevo nft is 1B token
  // total"). The origin card outranks everything on the rail. rpm 120 is a
  // proposal (Luca set tokens, not rate). OG·STRIKE/OG·SPECIMEN/S·PROOF
  // rights are NOT yet defined — rightsFor falls back to SPECIMEN for
  // them; do not grant those cards before Luca sets their numbers.
  "OG·PROOF": {
    grade: "OG·PROOF",
    label: "Origin rights",
    dailyTokens: 1_000_000_000,
    rpm: 120,
    priority: "First call on rail capacity",
    blurb: "A billion tokens a day on the rail, renewed every day — the origin card meters like nothing else.",
  },
  "F·STRIKE": {
    grade: "F·STRIKE",
    label: "First Strike rights",
    dailyTokens: 1_500_000,
    rpm: 30,
    priority: "Priority over credit lanes",
    blurb: "One and a half million tokens a day, renewed every day, at a raised lane rate.",
  },
  SPECIMEN: {
    grade: "SPECIMEN",
    label: "Specimen rights",
    dailyTokens: 400_000,
    rpm: 15,
    priority: "Priority over credit lanes",
    blurb: "Four hundred thousand tokens a day, renewed every day.",
  },
};

export function rightsFor(grade: string): Rights {
  return RIGHTS[grade] || RIGHTS.SPECIMEN;
}

// Worst-case daily cost of an allowance: every token billed at the OUTPUT
// rate. Real traffic is part input at half the price, so this over-states on
// purpose — a ceiling that flatters itself is not a ceiling.
export function worstCaseDailyUsd(dailyTokens: number): number {
  return (dailyTokens / 1_000_000) * PRICING.output;
}

// The whole set's ceiling, derived from the live set — never a written-down
// number that can drift from the code.
export function exposure() {
  // Allowances are PER HOLDER per card (cartridge_usage PK slug/day/user):
  // pre-deploy, previews let several accounts hold the same slug, each with
  // its own full allowance — so a slug counts once per holder, minimum one
  // (an unheld card can still be granted tomorrow).
  const holderCounts = new Map<string, number>(
    (getDb().query("SELECT slug, COUNT(*) AS n FROM genesis_holdings GROUP BY slug").all() as any[]).map((r) => [r.slug, r.n])
  );
  const perGrade = Object.values(RIGHTS).map((r) => {
    // count through rightsFor, not raw grade equality: grades with no RIGHTS
    // entry (OG·STRIKE/OG·SPECIMEN, numbers still Luca's to set) enforce at
    // the SPECIMEN fallback, so the ceiling must count them there too
    const cards = ALL_CARDS.filter((c) => rightsFor(c.grade).grade === r.grade)
      .reduce((s, c) => s + Math.max(1, holderCounts.get(c.slug) || 0), 0);
    const each = worstCaseDailyUsd(r.dailyTokens);
    return { grade: r.grade, cards, dailyTokens: r.dailyTokens, rpm: r.rpm, usdEach: each, usdAll: each * cards, rpmAll: r.rpm * cards };
  });
  const dailyUsd = perGrade.reduce((s, g) => s + g.usdAll, 0);
  const rpmAll = perGrade.reduce((s, g) => s + g.rpmAll, 0);
  return {
    per_grade: perGrade,
    worst_case_daily_usd: +dailyUsd.toFixed(4),
    worst_case_annual_usd: +(dailyUsd * 365).toFixed(2),
    worst_case_rpm: rpmAll,
    note: "Every card plugged and its allowance fully consumed every day, with every token billed at the output rate. Real cost is lower: input tokens bill at half, and an allowance not spent is not carried.",
  };
}

// ─── Storage ───────────────────────────────────────────────────────────
// Additive and idempotent, same discipline as the main migration. Three
// tables, none of them touching credit_transactions, api_requests, cards,
// reservations or users — the four the public statistics pipeline reads. A
// cartridge call settles against an allowance, so no settlement row is
// written, which is exactly what /statistics/payments should show: nothing
// was settled, because nothing was charged.

export function ensureDeckTables(): void {
  const d = getDb();
  // Holdings are (slug, user) rather than slug-only. On chain the set is
  // strictly one-of-one and the partial index below enforces exactly that —
  // but PREVIEW holdings are not ownership, and making them exclusive would
  // mean whichever staging account loaded the page first silently took all ten
  // and every other tester got an empty deck. Previews are per-account; chain
  // holdings are one-of-one. The index is what keeps that honest.
  d.run(`
    CREATE TABLE IF NOT EXISTS genesis_holdings (
      slug TEXT NOT NULL,
      user_id TEXT NOT NULL,
      source TEXT NOT NULL DEFAULT 'preview',  -- 'preview' pre-deploy | 'chain' once the ERC-721 reads
      created_at TEXT DEFAULT (datetime('now')),
      PRIMARY KEY (slug, user_id)
    )`);
  d.run(`CREATE INDEX IF NOT EXISTS idx_holdings_user ON genesis_holdings(user_id)`);
  d.run(`CREATE UNIQUE INDEX IF NOT EXISTS idx_holdings_chain_one_of_one
         ON genesis_holdings(slug) WHERE source = 'chain'`);
  // A lane holds one cartridge. A cartridge sits in one lane PER HOLDER —
  // slug alone cannot be unique while previews are shared, so the pair is.
  d.run(`
    CREATE TABLE IF NOT EXISTS lane_cartridges (
      wallet_id TEXT PRIMARY KEY,
      slug TEXT NOT NULL,
      user_id TEXT NOT NULL,
      plugged_at TEXT DEFAULT (datetime('now'))
    )`);
  d.run(`CREATE UNIQUE INDEX IF NOT EXISTS idx_lane_cart_holder ON lane_cartridges(slug, user_id)`);
  // Allowance is per holder per card per day: two preview decks must not
  // drain one shared counter, and once holdings come from chain there is only
  // ever one holder anyway, so the shape is the same either way.
  d.run(`
    CREATE TABLE IF NOT EXISTS cartridge_usage (
      slug TEXT NOT NULL,
      day TEXT NOT NULL,                  -- UTC date, YYYY-MM-DD
      user_id TEXT NOT NULL,
      calls INTEGER DEFAULT 0,
      tokens INTEGER DEFAULT 0,           -- in + out, what the allowance counts
      cost_usd REAL DEFAULT 0,            -- what WE paid upstream — the real exposure
      PRIMARY KEY (slug, day, user_id)
    )`);
}

export const utcDay = (d = new Date()) => d.toISOString().slice(0, 10);

export function holdingsOf(userId: string): Array<{ slug: string; source: string }> {
  return getDb().query("SELECT slug, source FROM genesis_holdings WHERE user_id = ?").all(userId) as any[];
}

// Does this account hold this card? Chain holdings are one-of-one; preview
// holdings are per-account, so the question is always "does THIS user hold
// it", never "who holds it".
export function holdsCard(userId: string, slug: string): { source: string } | null {
  return (getDb().query("SELECT source FROM genesis_holdings WHERE slug = ? AND user_id = ?").get(slug, userId) as any) || null;
}

// The on-chain owner, once there is one. Null pre-deploy — previews have no
// owner, which is the whole point of calling them previews.
export function chainHolderOf(slug: string): string | null {
  const r = getDb().query("SELECT user_id FROM genesis_holdings WHERE slug = ? AND source = 'chain'").get(slug) as any;
  return r?.user_id || null;
}

export function grantPreviewHolding(userId: string, slug: string): void {
  getDb().run("INSERT OR IGNORE INTO genesis_holdings (slug, user_id, source) VALUES (?, ?, 'preview')", [slug, userId]);
}

export function cartridgeInLane(walletId: string): { slug: string; user_id: string; plugged_at: string } | null {
  return (getDb().query("SELECT slug, user_id, plugged_at FROM lane_cartridges WHERE wallet_id = ?").get(walletId) as any) || null;
}

export function laneOfCartridge(slug: string): string | null {
  const r = getDb().query("SELECT wallet_id FROM lane_cartridges WHERE slug = ?").get(slug) as any;
  return r?.wallet_id || null;
}

export function plugCartridge(userId: string, walletId: string, slug: string): void {
  const d = getDb();
  // Clear whatever was in this lane, and pull this card out of any other lane
  // of the SAME holder — a card is in one place at a time, per holder.
  d.run("DELETE FROM lane_cartridges WHERE wallet_id = ? OR (slug = ? AND user_id = ?)", [walletId, slug, userId]);
  d.run("INSERT INTO lane_cartridges (wallet_id, slug, user_id) VALUES (?, ?, ?)", [walletId, slug, userId]);
}

export function ejectCartridge(walletId: string): void {
  getDb().run("DELETE FROM lane_cartridges WHERE wallet_id = ?", [walletId]);
}

export function usageToday(slug: string, userId: string, day = utcDay()): { calls: number; tokens: number; cost_usd: number } {
  const r = getDb().query("SELECT calls, tokens, cost_usd FROM cartridge_usage WHERE slug = ? AND day = ? AND user_id = ?").get(slug, day, userId) as any;
  return { calls: r?.calls || 0, tokens: r?.tokens || 0, cost_usd: r?.cost_usd || 0 };
}

export function noteCartridgeUsage(slug: string, userId: string, tokens: number, costUsd: number): void {
  const day = utcDay();
  getDb().run(
    `INSERT INTO cartridge_usage (slug, day, user_id, calls, tokens, cost_usd) VALUES (?, ?, ?, 1, ?, ?)
     ON CONFLICT(slug, day, user_id) DO UPDATE SET calls = calls + 1, tokens = tokens + excluded.tokens, cost_usd = cost_usd + excluded.cost_usd`,
    [slug, day, userId, Math.max(0, Math.round(tokens)), Math.max(0, costUsd)]
  );
}

// ─── In-flight allowance holds ─────────────────────────────────────────
// Same TOCTOU problem the USD reserve has, same answer: a read-compare on the
// daily counter lets a concurrent volley all pass the same check and overdraw
// the allowance together. Holds make the check a claim. In-process, like the
// rate limiter and the credit holds — if this service is ever run as more
// than one process, all three must move to a shared store together.

const tokenHolds = new Map<string, number>();
// Holds are scoped to the same key the allowance is: card AND holder.
export const allowanceScope = (slug: string, userId: string) => `${slug}:${userId}`;
export function holdTokens(slug: string, userId: string, tokens: number): void {
  const k = allowanceScope(slug, userId);
  tokenHolds.set(k, (tokenHolds.get(k) || 0) + tokens);
}
export function releaseTokens(slug: string, userId: string, tokens: number): void {
  const k = allowanceScope(slug, userId);
  const left = (tokenHolds.get(k) || 0) - tokens;
  if (left <= 0) tokenHolds.delete(k);
  else tokenHolds.set(k, left);
}
export const tokensHeld = (slug: string, userId: string): number => tokenHolds.get(allowanceScope(slug, userId)) || 0;

export type AllowanceState = {
  slug: string;
  grade: string;
  limit: number;
  used: number;
  held: number;
  remaining: number;
  rpm: number;
  resets_at: string;
};

export function allowanceState(slug: string, userId: string): AllowanceState | null {
  const card = ALL_CARDS.find((c) => c.slug === slug);
  if (!card) return null;
  const r = rightsFor(card.grade);
  const used = usageToday(slug, userId).tokens;
  const held = tokensHeld(slug, userId);
  const tomorrow = new Date();
  tomorrow.setUTCHours(24, 0, 0, 0);
  return {
    slug,
    grade: card.grade,
    limit: r.dailyTokens,
    used,
    held,
    remaining: Math.max(0, r.dailyTokens - used - held),
    rpm: r.rpm,
    resets_at: tomorrow.toISOString(),
  };
}

// What the gateway asks: is this lane running on a cartridge right now, and
// can that cartridge cover this call? `need` is the worst-case token count for
// the request (input + every requested output token), the same conservative
// shape the USD reserve uses.
export function cartridgeFor(walletId: string | null | undefined, need: number): { slug: string; card: GenesisCard; userId: string; rights: Rights; state: AllowanceState } | null {
  if (!walletId) return null;
  const plug = cartridgeInLane(walletId);
  if (!plug) return null;
  const card = ALL_CARDS.find((c) => c.slug === plug.slug);
  if (!card) return null;
  // A cartridge only carries rights while the account that plugged it still
  // holds it — a sold or revoked card stops paying the moment the holding
  // moves, without anyone needing to remember to unplug it.
  if (!holdsCard(plug.user_id, plug.slug)) return null;
  const state = allowanceState(plug.slug, plug.user_id)!;
  if (state.remaining < need) return null; // exhausted → the lane falls back to credits
  return { slug: plug.slug, card, userId: plug.user_id, rights: rightsFor(card.grade), state };
}

// The lane rate while a cartridge is in: the better of the lane's own rate and
// the cartridge's. Read without an allowance check on purpose — a plugged card
// raises the rate even on the day its allowance is spent, which is what
// "priority lane" on the face means.
export function laneRpmBoost(walletId: string | null | undefined): number {
  if (!walletId) return 0;
  const plug = cartridgeInLane(walletId);
  if (!plug) return 0;
  const card = ALL_CARDS.find((c) => c.slug === plug.slug);
  if (!card) return 0;
  if (!holdsCard(plug.user_id, plug.slug)) return 0;
  return rightsFor(card.grade).rpm;
}

// ─── Deck data ─────────────────────────────────────────────────────────

export function deckFor(user: any, lanes: any[]) {
  const held = new Map(holdingsOf(user.id).map((h) => [h.slug, h.source]));
  const plugs = new Map(
    (getDb().query("SELECT wallet_id, slug FROM lane_cartridges WHERE user_id = ?").all(user.id) as any[]).map((p) => [p.slug, p.wallet_id])
  );
  const laneName = new Map(lanes.map((l) => [l.id, l.name]));

  // The deck is what this account HOLDS, not a catalog — the full set is
  // /api/genesis. A deck listing all ten reads as the house holding the whole
  // series, which is the opposite of what a one-of-one set should say.
  const cards = ALL_CARDS.filter((c) => held.has(c.slug)).map((c) => {
    const r = rightsFor(c.grade);
    const source = held.get(c.slug) || null;
    const walletId = plugs.get(c.slug) || null;
    const st = allowanceState(c.slug, user.id)!;
    return {
      n: c.n,
      slug: c.slug,
      name: c.name,
      title: c.title,
      grade: c.grade,
      grade_label: c.gradeLabel,
      held: !!source,
      source,                                   // 'preview' | 'chain' | null
      plugged_wallet_id: walletId,
      plugged_lane: walletId ? laneName.get(walletId) || null : null,
      rights: {
        label: r.label,
        daily_tokens: r.dailyTokens,
        rpm: r.rpm,
        priority: r.priority,
        blurb: r.blurb,
        worst_case_daily_usd: +worstCaseDailyUsd(r.dailyTokens).toFixed(4),
      },
      allowance: { used: st.used, remaining: st.remaining, limit: st.limit, resets_at: st.resets_at },
    };
  });

  return {
    series: GENESIS_SERIES.series,
    contract: GENESIS_SERIES.contract,
    ownership: GENESIS_SERIES.contract ? "chain" : "preview",
    account_card: {
      handle: null as string | null, // filled by the caller — the card row lives there
      credits_usd: 0,
    },
    cards,
    // Same rule as the page (GA, Aug 13): the exposure ceiling and the
    // allowance ladder inside it are holder-facing — the ladder is not
    // signed off for public copy, and the ceiling is house ops data. A
    // non-holder's deck JSON carries no cards and no exposure.
    ...(held.size > 0 ? { exposure: exposure() } : {}),
  };
}

// ─── The deck section on /wallets ──────────────────────────────────────

export const DECK_CSS = `
#wl-deck { margin-top:38px; scroll-margin-top:84px; }
/* the stage marks a plug/eject landing — the visual thunk */
@keyframes dvswap {
  0% { box-shadow:0 0 0 0 rgba(9,248,117,0); }
  22% { box-shadow:0 0 0 3px rgba(9,248,117,0.55), 0 0 46px rgba(9,248,117,0.3); }
  100% { box-shadow:0 0 0 0 rgba(9,248,117,0); } }
#device-stage.dv-swap { animation:dvswap 1.4s var(--ease); }
@media (prefers-reduced-motion: reduce) { #device-stage.dv-swap { animation:none; } }
.dk-sub .mn { font-family:var(--mono); font-size:12px; }
.dk-note { display:flex; gap:10px; align-items:flex-start; margin:14px 0 22px; padding:12px 14px;
  border:1px solid #E3CFA1; background:#FDF4E3; border-radius:11px; }
.dk-note b { font-family:var(--mono); font-size:9.5px; font-weight:700; letter-spacing:0.11em; color:#8A6D3B;
  border:1px solid #E3CFA1; background:var(--white); border-radius:999px; padding:3px 8px; flex:none; margin-top:1px; }
.dk-note span { font-size:12.5px; line-height:1.55; color:#6E5A31; }

/* the account card sits first — it is the one that holds money */
.dk-acct { display:grid; grid-template-columns:auto 1fr; gap:26px; align-items:center;
  border:1px solid var(--line); border-radius:16px; padding:20px 22px; background:var(--white); }
.dk-acct .scene { --card-w:210px; }
.dk-acct-body h3 { font-family:var(--display); font-size:17px; font-weight:700; }
.dk-acct-body p { font-size:13px; color:var(--muted); line-height:1.6; margin-top:6px; max-width:56ch; }
.dk-figs { display:flex; gap:26px; flex-wrap:wrap; margin-top:14px; }
.dk-fig .k { font-family:var(--mono); font-size:10px; letter-spacing:0.1em; text-transform:uppercase; color:var(--muted); }
.dk-fig .v { font-family:var(--display); font-size:19px; font-weight:700; }
.dk-acct-cta { display:flex; gap:8px; flex-wrap:wrap; margin-top:15px; }
@media (max-width:760px) { .dk-acct { grid-template-columns:1fr; gap:18px; justify-items:center; text-align:center; }
  .dk-acct-body p { max-width:none; } .dk-figs, .dk-acct-cta { justify-content:center; } }

/* the cartridge shelf */
.dk-shelf { display:grid; grid-template-columns:repeat(2, minmax(0,1fr)); gap:26px; margin-top:18px; }
@media (max-width:900px) { .dk-shelf { grid-template-columns:1fr; } }
/* one cartridge should not sit in half a grid with dead space beside it */
.dk-shelf--one { grid-template-columns:1fr; }
.dk-slot { border:1px solid var(--line); border-radius:16px; background:var(--white); padding:20px;
  display:grid; grid-template-columns:auto 1fr; gap:20px; align-items:start; }
@media (max-width:520px) { .dk-slot { grid-template-columns:1fr; justify-items:center; } }
.dk-slot .tc { --tc-w:148px; cursor:default; }
.dk-slot--in { border-color:var(--green-ink); box-shadow:0 0 0 3px rgba(9,248,117,0.13); }
.dk-slot--out { opacity:0.72; }
.dk-hd { display:flex; align-items:baseline; gap:9px; flex-wrap:wrap; }
.dk-hd .no { font-family:var(--mono); font-size:11px; color:var(--muted); }
.dk-hd .nm { font-family:var(--display); font-size:16px; font-weight:700; }
.dk-grade { font-family:var(--mono); font-size:9.5px; font-weight:700; letter-spacing:0.06em;
  border:1px solid var(--green-ink); color:var(--green-ink); background:var(--white); border-radius:6px; padding:3px 7px; }
.dk-grade--og { border-color:#E3CFA1; color:#8A6D3B; background:#FDF4E3; }
.dk-rights { margin-top:12px; border-top:1px solid var(--line); }
.dk-r { display:flex; justify-content:space-between; gap:12px; padding:7px 0; border-bottom:1px solid var(--line); }
.dk-r .k { font-size:11.5px; color:var(--muted); }
.dk-r .v { font-family:var(--mono); font-size:12px; font-weight:700; color:var(--ink); text-align:right; }
.dk-meter { margin-top:12px; }
.dk-meter .lb { display:flex; justify-content:space-between; font-size:11px; color:var(--muted); margin-bottom:5px; }
.dk-bar { height:6px; border-radius:99px; background:var(--wash); overflow:hidden; border:1px solid var(--line); }
.dk-bar i { display:block; height:100%; background:var(--green-ink); }
.dk-act { display:flex; gap:8px; flex-wrap:wrap; margin-top:14px; align-items:center; }
.dk-in { font-family:var(--mono); font-size:10px; font-weight:700; letter-spacing:0.09em; color:var(--green-ink);
  border:1px solid var(--green-ink); border-radius:999px; padding:4px 9px; }
.dk-unheld { font-family:var(--mono); font-size:10px; font-weight:700; letter-spacing:0.09em; color:var(--muted);
  border:1px solid var(--line-strong); border-radius:999px; padding:4px 9px; }
.dk-empty { margin-top:18px; border:1px dashed var(--line-strong); border-radius:16px; padding:28px 22px; text-align:center; background:var(--wash); }
.dk-empty h3 { font-family:var(--display); font-size:16px; font-weight:700; }
.dk-empty p { font-size:13px; color:var(--muted); line-height:1.6; margin:7px auto 14px; max-width:46ch; }
.dk-err { font-size:12px; color:#B4342B; margin-top:8px; }
.dk-lane { font-family:var(--mono); font-size:11px; padding:7px 10px; border:1px solid var(--line-strong);
  border-radius:9px; background:var(--white); color:var(--ink); }
/* offstage foils pause — 10 card objects idle is real CPU */
.tc.offstage .tc-card, .tc.offstage .tc-card *, .tc.offstage .tc-card *::before, .tc.offstage .tc-card *::after,
.tc.offstage .tc-card::before, .tc.offstage .tc-card::after { animation-play-state:paused !important; }

/* the exposure table — the answer to "does this bleed the rail" */
.dk-exp { margin-top:34px; border:1px solid var(--line); border-radius:14px; overflow:hidden; }
.dk-exp table { width:100%; border-collapse:collapse; font-size:13px; }
.dk-exp th, .dk-exp td { padding:10px 14px; text-align:right; border-bottom:1px solid var(--line); white-space:nowrap; }
.dk-exp th:first-child, .dk-exp td:first-child { text-align:left; }
.dk-exp thead th { font-family:var(--mono); font-size:10px; letter-spacing:0.09em; text-transform:uppercase;
  color:var(--muted); background:var(--wash); font-weight:600; }
.dk-exp td { font-family:var(--mono); }
.dk-exp tfoot td { font-weight:700; border-bottom:none; background:var(--wash); }
.dk-exp-wrap { overflow-x:auto; }
`;

const fmt = (n: number) => {
  if (n >= 1e8) return n % 1e9 === 0 ? `${n / 1e9}B` : `${Math.round(n / 1e6)}M`;
  return n.toLocaleString("en-US");
};

function slot(c: GenesisCard, opts: { held: boolean; source: string | null; pluggedLane: string | null; lanes: any[]; userId: string }): string {
  const r = rightsFor(c.grade);
  const st = allowanceState(c.slug, opts.userId)!;
  const pct = st.limit ? Math.min(100, Math.round((st.used / st.limit) * 100)) : 0;
  const inLane = !!opts.pluggedLane;
  const laneOpts = opts.lanes.map((l) => `<option value="${esc(l.id)}">${esc(l.name)}</option>`).join("");

  return `<div class="dk-slot ${inLane ? "dk-slot--in" : opts.held ? "" : "dk-slot--out"}" data-slug="${esc(c.slug)}">
    ${genesisFace(c)}
    <div>
      <div class="dk-hd">
        <span class="no">N&deg; ${String(c.n).padStart(2, "0")}</span>
        <span class="nm">${esc(c.name)}</span>
        <span class="dk-grade${c.grade.startsWith("OG") ? " dk-grade--og" : ""}">${esc(c.grade)}</span>
      </div>
      <div class="dk-rights">
        <div class="dk-r"><span class="k">Daily allowance</span><span class="v">${fmt(r.dailyTokens)} tokens</span></div>
        <div class="dk-r"><span class="k">Lane rate</span><span class="v">${r.rpm}/min</span></div>
        <div class="dk-r"><span class="k">Priority</span><span class="v">${esc(r.priority)}</span></div>
      </div>
      <div class="dk-meter">
        <div class="lb"><span>Used today</span><span>${fmt(st.used)} / ${fmt(st.limit)}</span></div>
        <div class="dk-bar"><i style="width:${pct}%"></i></div>
      </div>
      <div class="dk-act" data-lanes="${esc(JSON.stringify(opts.lanes.map((l) => ({ id: l.id, name: l.name }))))}">
        ${inLane
          ? `<span class="dk-in">IN &middot; <b data-lane-name>${esc(opts.pluggedLane!)}</b></span><button class="btnx" data-eject="${esc(c.slug)}">Eject</button>`
          : opts.held
            ? `<select class="dk-lane" data-lane-for="${esc(c.slug)}">${laneOpts}</select><button class="btnx btnx--pri" data-plug="${esc(c.slug)}">Plug in</button>`
            : `<span class="dk-unheld">NOT HELD</span><a class="btnx" href="/marketplace/${esc(c.slug)}">View in the set</a>`}
      </div>
      <div class="dk-err" data-err="${esc(c.slug)}" hidden></div>
    </div>
  </div>`;
}

export function deckSection(user: any, card: any, lanes: any[], mainUsd: number): string {
  // BOTH sets shelve: since Aug 13 OG cards are cartridges too (OG·PROOF =
  // 1B tokens/day, Luca's number) and plug exactly like Genesis.
  const held = new Map(holdingsOf(user.id).map((h) => [h.slug, h.source]));
  const plugs = new Map(
    (getDb().query("SELECT wallet_id, slug FROM lane_cartridges WHERE user_id = ?").all(user.id) as any[]).map((p: any) => [p.slug, p.wallet_id])
  );
  const laneName = new Map(lanes.map((l) => [l.id, l.name]));
  const inferenceLanes = lanes.filter((l) => l.purpose !== "devtools" && l.status !== "closed");
  const ex = exposure();
  const anyHeld = held.size > 0;

  const laneTotal = lanes.reduce((s, l) => s + (l.usd_balance || 0), 0);

  return `<section id="wl-deck">
  <div class="wl-sec">Deck</div>
  <p class="wl-sub dk-sub">Your account card carries <b>credits</b> &mdash; a balance you fund, allocate to a lane and spend down. A collectible cartridge &mdash; Genesis or OG &mdash; carries <b>no credits at all</b>: plugged into a lane it changes how that lane meters, drawing on a daily token allowance that renews every day at 00:00 UTC and never accrues. Unplug it, or sell it, and the allowance stops with it. Only cartridges held on this account appear here &mdash; the rest of both sets lives in the <a href="/marketplace">marketplace</a>.</p>

  ${GENESIS_SERIES.contract || !anyHeld ? "" : `<div class="dk-note"><b>PREVIEW</b><span>The Genesis ERC-721 has not deployed yet, so on-chain ownership cannot be read. Cartridges below are marked <b style="all:unset;font-weight:700;">preview</b> holdings on this account: the rights are real and really enforced on the rail, the ownership is not. When the contract lands on chain ${GENESIS_SERIES.chainId}, holdings come from the chain and previews are dropped.</span></div>`}

  <div class="dk-acct">
    ${card ? `<div>${cardObjectRef(card, user)}</div>` : ""}
    <div class="dk-acct-body">
      <h3>Account card${card?.handle ? ` &mdash; @${esc(String(card.handle).replace(/^@+/, ""))}` : ""}</h3>
      <p>The card the rail knows you by. Credits live here, are allocated into a lane, and are spent per call at list price. This is the only card in the deck that holds money.</p>
      <div class="dk-figs">
        <div class="dk-fig"><div class="k">Main</div><div class="v num">$${mainUsd.toFixed(2)}</div></div>
        <div class="dk-fig"><div class="k">In lanes</div><div class="v num">$${laneTotal.toFixed(2)}</div></div>
        <div class="dk-fig"><div class="k">Cartridges held</div><div class="v num">${held.size}</div></div>
      </div>
      <div class="dk-acct-cta">
        <a class="btnx" href="#wl-topup">Top up</a>
        <a class="btnx" href="#dv-console">Allocate to a lane</a>
      </div>
    </div>
  </div>

  ${anyHeld
    ? `<div class="dk-shelf${held.size === 1 ? " dk-shelf--one" : ""}">
    ${ALL_CARDS.filter((c) => held.has(c.slug)).map((c) =>
      slot(c, {
        held: true,
        source: held.get(c.slug) || null,
        pluggedLane: plugs.has(c.slug) ? (laneName.get(plugs.get(c.slug)!) as string) || "lane" : null,
        lanes: inferenceLanes,
        userId: user.id,
      })
    ).join("")}
  </div>`
    : `<div class="dk-empty">
    <h3>No cartridges on this account</h3>
    <p>Genesis cards are one-of-one. When one is on this account it appears here and can be plugged into a lane.</p>
    <a class="btnx" href="/marketplace">See the set</a>
  </div>`}

  ${!anyHeld ? "" : `<div class="dk-exp">
    <div class="dk-exp-wrap"><table>
      <caption class="sr-only">Worst-case daily cost of the card allowances, all sets</caption>
      <thead><tr><th>Grade</th><th>Cards</th><th>Allowance/day</th><th>Lane rate</th><th>Worst case/day</th></tr></thead>
      <tbody>
        ${ex.per_grade.map((g) => `<tr><td>${esc(g.grade)}</td><td>${g.cards}</td><td>${fmt(g.dailyTokens)}</td><td>${g.rpm}/min</td><td>$${g.usdAll.toFixed(2)}</td></tr>`).join("")}
      </tbody>
      <tfoot><tr><td>All sets, fully consumed</td><td>${ALL_CARDS.length}</td><td>&mdash;</td><td>${ex.worst_case_rpm}/min</td><td>$${ex.worst_case_daily_usd.toFixed(2)}</td></tr></tfoot>
    </table></div>
  </div>
  <p class="wl-sub" style="margin-top:10px; font-size:12px;">Ceiling, not a forecast: every card in every set plugged and every allowance fully spent, every token billed at the output rate. Real cost runs lower &mdash; input tokens bill at half, and an allowance that goes unused is not carried forward. Priced off the live rail rate, so this table cannot drift from what the rail charges.</p>`}
</section>`;
}

// ─── Top up ────────────────────────────────────────────────────────────
// The nav asks for it, so the page must answer honestly: today credits arrive
// by grant and by earn tasks, and there is no way to buy more. The paid lane
// is x402 — decided, not built. This section says exactly that rather than
// showing a disabled button that implies a checkout exists.

export function topupSection(user: any, mainUsd: number, laneTotal: number): string {
  return `<section id="wl-topup" style="margin-top:38px; scroll-margin-top:84px;">
  <div class="wl-sec">Top up</div>
  <p class="wl-sub">Where the credits on your account card come from, and what is coming next. Cartridge allowances are not credits and do not appear here &mdash; a Genesis card meters access, it never adds balance.</p>
  <div class="dk-topup">
    <div class="dk-tu">
      <div class="k">On the card now</div>
      <div class="v num">$${(mainUsd + laneTotal).toFixed(2)}</div>
      <p>$${mainUsd.toFixed(2)} in Main, $${laneTotal.toFixed(2)} allocated to lanes. Main funds lanes; lanes pay for calls.</p>
    </div>
    <div class="dk-tu">
      <div class="k">Today &mdash; grant and earn</div>
      <div class="v">Live</div>
      <p>Your scored grant, plus referral and task credits. <a href="/rewards">See what is claimable</a>.</p>
    </div>
    <div class="dk-tu dk-tu--soon">
      <div class="k">Next &mdash; paid top-ups</div>
      <div class="v">x402</div>
      <p>Buying credits will run over x402: an agent hits a 402-gated endpoint, pays in USDC, and the payment is tied cryptographically to the paying key &mdash; so an agent can refill itself without a human at a checkout. Credits stay closed-loop and non-refundable. Not built yet; nothing here takes a payment.</p>
    </div>
  </div>
</section>`;
}

export const TOPUP_CSS = `
.dk-topup { display:grid; grid-template-columns:repeat(3, minmax(0,1fr)); gap:18px; margin-top:16px; }
@media (max-width:860px) { .dk-topup { grid-template-columns:1fr; } }
.dk-tu { border:1px solid var(--line); border-radius:14px; padding:18px; background:var(--white); }
.dk-tu .k { font-family:var(--mono); font-size:10px; letter-spacing:0.1em; text-transform:uppercase; color:var(--muted); }
.dk-tu .v { font-family:var(--display); font-size:24px; font-weight:700; margin-top:5px; }
.dk-tu p { font-size:12.5px; color:var(--muted); line-height:1.6; margin-top:8px; }
.dk-tu--soon { background:var(--wash); }
.dk-tu--soon .v { color:var(--green-ink); }
`;

// The account card object is rendered by pages.ts (it owns CARD_CSS and the
// variant table). Imported lazily through a thunk so deck.ts does not create
// an import cycle with pages.ts at module-init time.
let _cardObject: ((o: any) => string) | null = null;
export function bindCardObject(fn: (o: any) => string) { _cardObject = fn; }
function cardObjectRef(card: any, user: any): string {
  if (!_cardObject) return "";
  return _cardObject({
    // Stored handles already carry the "@" (that is the mint shape), so
    // prefixing another produced "@@lucaxyzz" on the card face and in the
    // heading. Normalise, never concatenate.
    handle: card.handle ? `@${String(card.handle).replace(/^@+/, "")}` : "@vantis",
    tierLabel: card.tier ? card.tier[0].toUpperCase() + card.tier.slice(1) : "Card",
    grantStr: `$${Number(user.usd_granted || 0).toFixed(0)}`,
    stamp: "ACCOUNT",
    variant: card.variant || "signal",
  });
}

export const DECK_JS = `<script>
(function () {
  var deck = document.getElementById("wl-deck");
  if (!deck) return;
  function err(slug, msg) {
    var el = deck.querySelector('[data-err="' + slug + '"]');
    if (!el) return;
    el.textContent = msg || "";
    el.hidden = !msg;
  }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  // The swap happens IN PLACE — no reload. Rows flip state, the terminal is
  // brought into view and re-reads its meta, so the easel card changes like
  // a disc: you watch it happen instead of watching the page blink.
  function fmtTok(n) { return n >= 1e8 ? (n % 1e9 === 0 ? (n / 1e9) + "B" : Math.round(n / 1e6) + "M") : Number(n).toLocaleString("en-US"); }
  function applyRow(slot, plugged, laneName) {
    var act = slot.querySelector(".dk-act");
    if (!act) return;
    slot.classList.toggle("dk-slot--in", plugged);
    var slug = slot.getAttribute("data-slug");
    if (plugged) {
      act.innerHTML = '<span class="dk-in">IN &middot; <b data-lane-name>' + esc(laneName) + '</b></span>' +
        '<button class="btnx" data-eject="' + esc(slug) + '">Eject</button>';
    } else {
      var lanes = [];
      try { lanes = JSON.parse(act.getAttribute("data-lanes") || "[]"); } catch (e2) {}
      act.innerHTML = '<select class="dk-lane" data-lane-for="' + esc(slug) + '">' +
        lanes.map(function (l) { return '<option value="' + esc(l.id) + '">' + esc(l.name) + '</option>'; }).join("") +
        '</select><button class="btnx btnx--pri" data-plug="' + esc(slug) + '">Plug in</button>';
    }
  }
  // Re-read from the server after every action: meters move with real calls,
  // and the server stays the authority on who sits where — if an optimistic
  // row flip ever disagrees with /api/deck, the server wins here.
  function syncMeters() {
    fetch("/api/deck").then(function (r) { return r.json(); }).then(function (d) {
      (d.cards || []).forEach(function (cd) {
        var slot = deck.querySelector('.dk-slot[data-slug="' + cd.slug + '"]');
        if (!slot) return;
        var shouldBeIn = !!cd.plugged_lane;
        if (slot.classList.contains("dk-slot--in") !== shouldBeIn) applyRow(slot, shouldBeIn, cd.plugged_lane);
        if (!cd.allowance) return;
        var lb = slot.querySelector(".dk-meter .lb span:last-child");
        if (lb) lb.textContent = fmtTok(cd.allowance.used) + " / " + fmtTok(cd.allowance.limit);
        var bar = slot.querySelector(".dk-bar i");
        if (bar) bar.style.width = Math.min(100, Math.round((cd.allowance.used / Math.max(1, cd.allowance.limit)) * 100)) + "%";
      });
    }).catch(function () {});
  }
  function applyState(slug, plugged, laneName) {
    var slot = deck.querySelector('.dk-slot[data-slug="' + slug + '"]');
    if (!slot) { location.reload(); return; }
    if (plugged) {
      // one cartridge per lane: the row that was IN just lost its seat —
      // flip it back the same instant, the disc-changer way
      deck.querySelectorAll(".dk-slot.dk-slot--in").forEach(function (s) {
        if (s.getAttribute("data-slug") !== slug) applyRow(s, false, null);
      });
    }
    applyRow(slot, plugged, laneName);
    syncMeters();
    // show the terminal reacting: scroll it into view and let it re-read the
    // plugged cartridge; a short pulse marks the seat/eject on the stage
    window.dispatchEvent(new CustomEvent("vc-deck-change"));
    var stage = document.getElementById("device-stage");
    if (stage && document.body.classList.contains("dv-on")) {
      var still = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      stage.scrollIntoView({ behavior: still ? "auto" : "smooth", block: "center" });
      stage.classList.remove("dv-swap");
      void stage.offsetWidth;
      stage.classList.add("dv-swap");
      setTimeout(function () { stage.classList.remove("dv-swap"); }, 1500);
    }
  }
  // SINGLE-FLIGHT: one plug/eject at a time. Two rapid clicks on different
  // cards otherwise race server-side (last write owns the lane) while both
  // rows animate — the reader has one slot, so the page acts like it.
  var busy = false;
  function post(url, body, slug, btn, onOk) {
    if (busy) return;
    busy = true;
    var label = btn.textContent;
    btn.disabled = true; btn.textContent = "…";
    err(slug, "");
    fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) })
      .then(function (r) { return r.json().then(function (j) { return { ok: r.ok, j: j }; }); })
      .then(function (res) {
        busy = false;
        if (!res.ok) { err(slug, res.j && res.j.message ? res.j.message : "That did not work."); btn.disabled = false; btn.textContent = label; return; }
        onOk(res.j);
      })
      .catch(function () { busy = false; err(slug, "Network error."); btn.disabled = false; btn.textContent = label; });
  }
  deck.addEventListener("click", function (e) {
    if (busy && e.target.closest("[data-plug],[data-eject]")) { e.preventDefault(); return; }
    var plug = e.target.closest("[data-plug]");
    if (plug) {
      var slug = plug.getAttribute("data-plug");
      var sel = deck.querySelector('[data-lane-for="' + slug + '"]');
      if (!sel || !sel.value) { err(slug, "No inference lane to plug into."); return; }
      var laneName = sel.options[sel.selectedIndex] ? sel.options[sel.selectedIndex].textContent : "lane";
      post("/api/deck/plug", { slug: slug, wallet_id: sel.value }, slug, plug, function () {
        applyState(slug, true, laneName);
      });
      return;
    }
    var eject = e.target.closest("[data-eject]");
    if (eject) {
      var s2 = eject.getAttribute("data-eject");
      post("/api/deck/eject", { slug: s2 }, s2, eject, function () {
        applyState(s2, false, null);
      });
    }
  });
  // Foils pause off-viewport — ten card objects idling is real CPU.
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { en.target.classList.toggle("offstage", !en.isIntersecting); });
    }, { rootMargin: "120px" });
    deck.querySelectorAll(".tc").forEach(function (el) { el.classList.add("offstage"); io.observe(el); });
  }
})();
</script>`;
