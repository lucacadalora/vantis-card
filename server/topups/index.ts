// Paid top-ups — the ONE place credits enter the ledger from outside the
// grant/campaign lanes. Providers (Stripe card checkout, USDC on Solana via
// Phantom, and an internal sandbox for demos) all funnel into settleTopup(),
// which credits exactly once inside a sqlite transaction.
//
// Money model, in one breath: a top-up buys PREPAID INFERENCE CREDITS. They are
// closed-loop (spendable only on the rail), non-refundable, carry no monetary
// value and are never held "for" the user — the ledger row is a receipt for a
// purchase, not a deposit. Copy on every surface says so.
//
// Ledger shape (credit_transactions):
//   type='topup'  +amount, balance_after   "Top-up: $10.00 by card" / "… 10 USDC on Solana"
//   then, when the destination is a lane, the ordinary 'transfer' pair via
//   fundAgentWallet ("Transfer to wallet: Inference" / "Funded from main").
// users.usd_topped_up counts paid credits; users.usd_granted is NOT touched —
// grant semantics (intel drained-ratio, campaign true-up SUM over
// 'Onboarding grant%') must not see purchases as grants.

import { getDb, getUser, fundAgentWallet, ensurePurposeWallets, adminEvent } from "../db";

export type TopupProvider = "stripe" | "solana" | "sandbox";
export type TopupStatus = "created" | "pending" | "paid" | "credited" | "failed" | "expired" | "canceled";

export interface TopupRow {
  id: string;
  user_id: string;
  provider: TopupProvider;
  amount_usd: number;
  amount_minor: number;
  currency: string;
  destination: string; // 'main' | agent_wallets.id
  status: TopupStatus;
  provider_ref: string | null;
  provider_event: string | null;
  reference: string | null;
  payer: string | null;
  cluster: string | null;
  meta: string | null;
  error: string | null;
  created_at: string;
  updated_at: string;
  paid_at: string | null;
  credited_at: string | null;
  expires_at: string | null;
}

// ─── Config (read at call time so a .env edit + restart is the whole switch) ───

export type TopupsMode = "off" | "staging" | "all";

export function topupsMode(): TopupsMode {
  const m = String(process.env.TOPUPS_MODE || "staging").toLowerCase();
  return m === "off" || m === "all" ? (m as TopupsMode) : "staging";
}

export function topupLimits() {
  const min = Number(process.env.TOPUP_MIN_USD || 5);
  const max = Number(process.env.TOPUP_MAX_USD || 500);
  const presets = String(process.env.TOPUP_PRESETS || "5,10,25,50,100")
    .split(",").map((s) => Number(s.trim())).filter((n) => Number.isFinite(n) && n > 0);
  return { min: Number.isFinite(min) && min > 0 ? min : 5, max: Number.isFinite(max) && max > 0 ? max : 500, presets };
}

// The launch cohort sees the live rail; everyone else keeps the placeholder
// card. Same discipline as the pool lane: staging / pool_access are operator
// flags, never user-set.
export function isStagingUser(user: any): boolean {
  return !!(user && (Number(user.staging) === 1 || Number(user.pool_access) === 1));
}

export function topupsEnabledFor(user: any): boolean {
  const mode = topupsMode();
  if (mode === "off") return false;
  if (mode === "all") return !!user;
  return isStagingUser(user);
}

// Sandbox = internal mock card checkout. Staging accounts only, ever, and
// only while TOPUP_SANDBOX is on. It exists so the flow can be walked before
// Stripe keys exist; it never takes a payment.
export function sandboxAllowedFor(user: any): boolean {
  return process.env.TOPUP_SANDBOX !== "0" && isStagingUser(user);
}

export function publicOrigin(): string {
  return (process.env.PUBLIC_BASE_URL || process.env.PUBLIC_ORIGIN || "https://card.vantis.sh").replace(/\/+$/, "");
}

// ─── Schema (additive, idempotent; runs at first use) ───

let ensured = false;
export function ensureTopupTables() {
  if (ensured) return;
  const d = getDb();
  d.exec(`
    CREATE TABLE IF NOT EXISTS topups (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      provider TEXT NOT NULL,
      amount_usd REAL NOT NULL,
      amount_minor INTEGER NOT NULL,
      currency TEXT NOT NULL,
      destination TEXT NOT NULL DEFAULT 'main',
      status TEXT NOT NULL DEFAULT 'created',
      provider_ref TEXT,
      provider_event TEXT,
      reference TEXT,
      payer TEXT,
      cluster TEXT,
      meta TEXT,
      error TEXT,
      created_at TEXT DEFAULT (datetime('now')),
      updated_at TEXT DEFAULT (datetime('now')),
      paid_at TEXT,
      credited_at TEXT,
      expires_at TEXT
    );
    CREATE INDEX IF NOT EXISTS idx_topups_user ON topups(user_id);
    CREATE INDEX IF NOT EXISTS idx_topups_status ON topups(status);
    CREATE UNIQUE INDEX IF NOT EXISTS idx_topups_provider_ref ON topups(provider, provider_ref) WHERE provider_ref IS NOT NULL;
    CREATE UNIQUE INDEX IF NOT EXISTS idx_topups_reference ON topups(reference) WHERE reference IS NOT NULL;
    CREATE TABLE IF NOT EXISTS topup_events (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      topup_id TEXT,
      provider TEXT NOT NULL,
      event_id TEXT NOT NULL UNIQUE,
      kind TEXT,
      payload TEXT,
      created_at TEXT DEFAULT (datetime('now'))
    );
  `);
  const userCols = (d.query("PRAGMA table_info(users)").all() as any[]).map((c) => c.name);
  if (!userCols.includes("usd_topped_up")) d.run("ALTER TABLE users ADD COLUMN usd_topped_up REAL DEFAULT 0");
  ensured = true;
}

// ─── Amount validation ───

export function normalizeAmountUsd(input: unknown): { ok: true; usd: number; cents: number } | { ok: false; error: string } {
  const n = typeof input === "string" ? Number(input.trim()) : Number(input);
  if (!Number.isFinite(n)) return { ok: false, error: "bad_amount" };
  const cents = Math.round(n * 100);
  if (Math.abs(n * 100 - cents) > 1e-6) return { ok: false, error: "bad_amount" }; // more than 2dp
  const { min, max } = topupLimits();
  if (cents < Math.round(min * 100)) return { ok: false, error: "amount_below_min" };
  if (cents > Math.round(max * 100)) return { ok: false, error: "amount_above_max" };
  return { ok: true, usd: cents / 100, cents };
}

// destination must be 'main' or one of the user's own ACTIVE lanes.
export function resolveDestination(userId: string, dest: unknown): { ok: true; destination: string; laneName: string | null } | { ok: false; error: string } {
  const d = String(dest || "main");
  if (d === "main") return { ok: true, destination: "main", laneName: null };
  const w = getDb().query("SELECT id, name FROM agent_wallets WHERE id = ? AND user_id = ? AND status = 'active'").get(d, userId) as any;
  if (!w) return { ok: false, error: "bad_destination" };
  return { ok: true, destination: w.id, laneName: w.name };
}

// The lane the money most likely needs to land in: the user's Inference lane
// when a live key sits on it (that is where the 402s come from), else main.
export function defaultDestination(userId: string): string {
  const lanes = ensurePurposeWallets(userId, false) as any[];
  const inf = lanes.find((w) => w.purpose === "inference");
  // Lanes are the spending surface (Main is a pool — Aug 13 rule), so the
  // Inference lane is the default whether or not a key sits on it yet.
  return inf ? inf.id : "main";
}

export function destinationsFor(userId: string) {
  const user = getUser(userId);
  const lanes = ensurePurposeWallets(userId, false) as any[];
  const keyed = new Set((getDb().query("SELECT DISTINCT wallet_id FROM api_keys WHERE user_id = ? AND revoked_at IS NULL AND wallet_id IS NOT NULL").all(userId) as any[]).map((r) => r.wallet_id));
  return [
    { id: "main", name: "Main", usd: Number(user?.usd_balance || 0), has_live_key: false, purpose: "main" },
    ...lanes.map((l) => ({ id: l.id, name: l.name, usd: Number(l.usd_balance || 0), has_live_key: keyed.has(l.id), purpose: l.purpose })),
  ];
}

// ─── Rows ───

export function newTopupId(): string {
  return "tu_" + crypto.randomUUID().replace(/-/g, "").slice(0, 24);
}

export function createTopup(o: {
  userId: string; provider: TopupProvider; amountUsd: number; amountMinor: number; currency: string;
  destination: string; reference?: string | null; cluster?: string | null; expiresInSec?: number; meta?: any;
}): TopupRow {
  ensureTopupTables();
  const id = newTopupId();
  const expires = o.expiresInSec ? new Date(Date.now() + o.expiresInSec * 1000).toISOString() : null;
  getDb().run(
    `INSERT INTO topups (id, user_id, provider, amount_usd, amount_minor, currency, destination, status, reference, cluster, meta, expires_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, 'created', ?, ?, ?, ?)`,
    [id, o.userId, o.provider, o.amountUsd, o.amountMinor, o.currency, o.destination, o.reference || null, o.cluster || null, o.meta ? JSON.stringify(o.meta) : null, expires]
  );
  return getTopup(id)!;
}

export function getTopup(id: string): TopupRow | null {
  ensureTopupTables();
  return (getDb().query("SELECT * FROM topups WHERE id = ?").get(id) as TopupRow) || null;
}

export function getTopupByProviderRef(provider: TopupProvider, ref: string): TopupRow | null {
  ensureTopupTables();
  return (getDb().query("SELECT * FROM topups WHERE provider = ? AND provider_ref = ?").get(provider, ref) as TopupRow) || null;
}

export function getTopupByReference(reference: string): TopupRow | null {
  ensureTopupTables();
  return (getDb().query("SELECT * FROM topups WHERE reference = ?").get(reference) as TopupRow) || null;
}

export function metaOf(t: TopupRow | null): any {
  if (!t?.meta) return {};
  try { return JSON.parse(t.meta) || {}; } catch { return {}; }
}

function mergeMeta(t: TopupRow, extra: any): string {
  return JSON.stringify({ ...metaOf(t), ...(extra || {}) });
}

// Bookkeeping updates that do NOT credit. Status may only move forward along
// created → pending → paid; terminal states are never overwritten here.
export function markTopup(id: string, patch: { status?: "pending" | "paid" | "failed" | "expired" | "canceled"; provider_ref?: string | null; payer?: string | null; error?: string | null; meta?: any; paid?: boolean }): TopupRow | null {
  const t = getTopup(id);
  if (!t) return null;
  if (t.status === "credited") return t; // never touch a settled row
  const sets: string[] = ["updated_at = datetime('now')"];
  const vals: any[] = [];
  if (patch.status) {
    const rank: Record<string, number> = { created: 0, pending: 1, paid: 2 };
    const terminal = new Set(["failed", "expired", "canceled"]);
    if (terminal.has(patch.status) || (rank[patch.status] ?? -1) >= (rank[t.status] ?? -1)) { sets.push("status = ?"); vals.push(patch.status); }
  }
  if (patch.provider_ref !== undefined) { sets.push("provider_ref = ?"); vals.push(patch.provider_ref); }
  if (patch.payer !== undefined) { sets.push("payer = ?"); vals.push(patch.payer); }
  if (patch.error !== undefined) { sets.push("error = ?"); vals.push(patch.error ? String(patch.error).slice(0, 500) : null); }
  if (patch.meta !== undefined) { sets.push("meta = ?"); vals.push(mergeMeta(t, patch.meta)); }
  if (patch.paid) sets.push("paid_at = COALESCE(paid_at, datetime('now'))");
  vals.push(id);
  getDb().run(`UPDATE topups SET ${sets.join(", ")} WHERE id = ?`, vals);
  return getTopup(id);
}

// Provider event dedupe (Stripe event ids, Solana signatures seen by the
// poller, sandbox clicks). Returns false when the event was already recorded —
// the caller must then treat the delivery as a replay and do nothing.
export function recordProviderEvent(provider: TopupProvider, eventId: string, kind: string, payload?: any, topupId?: string | null): boolean {
  ensureTopupTables();
  try {
    getDb().run(
      "INSERT INTO topup_events (topup_id, provider, event_id, kind, payload) VALUES (?, ?, ?, ?, ?)",
      [topupId || null, provider, eventId, kind, payload === undefined ? null : JSON.stringify(payload).slice(0, 4000)]
    );
    return true;
  } catch (e: any) {
    if (String(e?.message || e).includes("UNIQUE")) return false;
    throw e;
  }
}

// ─── THE credit path ───
//
// Exactly once per top-up: the row is re-read inside the transaction, a row
// already 'credited' returns {already:true} without writing, and a terminal
// row refuses. provider_ref carries a UNIQUE index so one Stripe session or
// one Solana signature can never settle two rows. Destination lane funding
// rides the ordinary transfer path; if the lane is gone the credits stay in
// Main and meta.lane_error says why — a payment is never lost to a UI state.
export type SettleResult =
  | { ok: true; already: boolean; topup: TopupRow; balance_main: number; balance_lane: number | null }
  | { ok: false; error: string; topup?: TopupRow | null };

export function settleTopup(id: string, o: { provider_ref: string; payer?: string | null; meta?: any; description?: string; event_id?: string | null }): SettleResult {
  ensureTopupTables();
  const db = getDb();
  const run = db.transaction((): SettleResult => {
    const t = db.query("SELECT * FROM topups WHERE id = ?").get(id) as TopupRow | null;
    if (!t) return { ok: false, error: "topup_not_found", topup: null };
    if (t.status === "credited") {
      const u = getUser(t.user_id);
      return { ok: true, already: true, topup: t, balance_main: Number(u?.usd_balance || 0), balance_lane: laneBalance(t.destination) };
    }
    // Money safety: a row we marked failed/expired/canceled can STILL be
    // settled when a provider proves payment (a customer who hit "back" on
    // Stripe and then paid the still-open session; a QR payer who took 40
    // minutes). Only 'credited' is final here — callers that have NO proof of
    // payment (the sandbox) refuse terminal rows themselves.
    // Same provider_ref already settled another row → refuse (unique index
    // would also throw, but say why).
    const dup = db.query("SELECT id FROM topups WHERE provider = ? AND provider_ref = ? AND id <> ?").get(t.provider, o.provider_ref, id) as any;
    if (dup) return { ok: false, error: "provider_ref_reused", topup: t };
    const user = getUser(t.user_id);
    if (!user) return { ok: false, error: "user_not_found", topup: t };

    const usd = Number(t.amount_usd);
    const newMain = Number(user.usd_balance || 0) + usd;
    db.run("UPDATE users SET usd_balance = ?, usd_topped_up = COALESCE(usd_topped_up,0) + ?, updated_at = datetime('now') WHERE id = ?", [newMain, usd, t.user_id]);
    db.run(
      `INSERT INTO credit_transactions (user_id, type, amount_usd, balance_after, description)
       VALUES (?, 'topup', ?, ?, ?)`,
      [t.user_id, usd, newMain, (o.description || defaultDescription(t)).slice(0, 200)]
    );
    let laneErr: string | null = null;
    let laneBal: number | null = null;
    if (t.destination && t.destination !== "main") {
      const r = fundAgentWallet(t.user_id, t.destination, usd);
      if (!r.ok) laneErr = r.error || "lane_fund_failed";
      else laneBal = laneBalance(t.destination);
    }
    const meta = { ...metaOf(t), ...(o.meta || {}), ...(laneErr ? { lane_error: laneErr } : {}) };
    db.run(
      `UPDATE topups SET status = 'credited', provider_ref = ?, payer = COALESCE(?, payer), provider_event = COALESCE(?, provider_event),
         meta = ?, error = NULL, paid_at = COALESCE(paid_at, datetime('now')), credited_at = datetime('now'), updated_at = datetime('now')
       WHERE id = ?`,
      [o.provider_ref, o.payer ?? null, o.event_id ?? null, JSON.stringify(meta), id]
    );
    adminEvent("topup_credited", t.user_id, `${t.provider} $${usd.toFixed(2)} → ${t.destination === "main" ? "Main" : "lane " + t.destination}${laneErr ? " (lane fund failed: " + laneErr + ", left in Main)" : ""} ref ${String(o.provider_ref).slice(0, 64)}`);
    // A purchase lifts the daily spend valve to at least what was bought (the
    // fleet default of a few dollars a day exists to blunt FREE-credit
    // farming, and would otherwise 429 a customer on their own money). Auto
    // raises stop at TOPUP_AUTO_CAP_USD (default 100); the operator sets
    // anything higher by hand from /admin.
    const autoCapMax = Number(process.env.TOPUP_AUTO_CAP_USD || 100);
    const fleetDefault = Math.max(0, parseFloat(process.env.VANTIS_CARD_DEFAULT_DAILY_CAP || "0"));
    const effective = Number(user.daily_usd_cap) > 0 ? Number(user.daily_usd_cap) : fleetDefault;
    const target = Math.min(autoCapMax, Math.max(effective, usd));
    if (effective > 0 && target > effective) {
      db.run("UPDATE users SET daily_usd_cap = ? WHERE id = ?", [target, t.user_id]);
      adminEvent("topup_cap_raised", t.user_id, `daily cap $${effective.toFixed(2)} → $${target.toFixed(2)} after a $${usd.toFixed(2)} top-up`);
    }
    const after = db.query("SELECT * FROM topups WHERE id = ?").get(id) as TopupRow;
    const mainNow = Number(getUser(t.user_id)?.usd_balance || 0);
    return { ok: true, already: false, topup: after, balance_main: mainNow, balance_lane: laneBal };
  });
  return run();
}

function laneBalance(walletId: string | null): number | null {
  if (!walletId || walletId === "main") return null;
  const w = getDb().query("SELECT usd_balance FROM agent_wallets WHERE id = ?").get(walletId) as any;
  return w ? Number(w.usd_balance || 0) : null;
}

export function defaultDescription(t: TopupRow): string {
  if (t.provider === "solana") return `Top-up: ${(t.amount_minor / 10 ** 6).toFixed(2)} USDC on Solana`;
  if (t.provider === "sandbox") return `Top-up: $${Number(t.amount_usd).toFixed(2)} by card (sandbox)`;
  return `Top-up: $${Number(t.amount_usd).toFixed(2)} by card`;
}

// Housekeeping: rows the customer walked away from. Called opportunistically
// (config fetch, admin list) — cheap, idempotent, never touches credited rows.
export function expireStaleTopups(): number {
  ensureTopupTables();
  const r = getDb().run(
    `UPDATE topups SET status = 'expired', updated_at = datetime('now')
      WHERE status IN ('created','pending') AND (
        (expires_at IS NOT NULL AND expires_at < strftime('%Y-%m-%dT%H:%M:%fZ','now')) OR
        (expires_at IS NULL AND created_at < datetime('now','-1 day')))`
  );
  return Number((r as any)?.changes || 0);
}

// ─── Reads ───

export function userTopups(userId: string, limit = 10): TopupRow[] {
  ensureTopupTables();
  return getDb().query("SELECT * FROM topups WHERE user_id = ? ORDER BY created_at DESC LIMIT ?").all(userId, Math.min(100, limit)) as TopupRow[];
}

export function adminTopups(opts: { limit?: number; status?: string; provider?: string } = {}) {
  ensureTopupTables();
  const where: string[] = [];
  const vals: any[] = [];
  if (opts.status) { where.push("t.status = ?"); vals.push(opts.status); }
  if (opts.provider) { where.push("t.provider = ?"); vals.push(opts.provider); }
  vals.push(Math.min(500, opts.limit || 100));
  return getDb().query(
    `SELECT t.*, u.x_username FROM topups t LEFT JOIN users u ON u.id = t.user_id
     ${where.length ? "WHERE " + where.join(" AND ") : ""}
     ORDER BY t.created_at DESC LIMIT ?`
  ).all(...vals) as any[];
}

export function topupTotals() {
  ensureTopupTables();
  const row = getDb().query(
    `SELECT COUNT(*) AS n, SUM(status='credited') AS credited, COALESCE(SUM(CASE WHEN status='credited' THEN amount_usd END),0) AS usd_credited,
            SUM(status IN ('created','pending')) AS open, SUM(status IN ('failed','expired','canceled')) AS dead
       FROM topups`
  ).get() as any;
  return { count: Number(row?.n || 0), credited: Number(row?.credited || 0), usd_credited: Number(row?.usd_credited || 0), open: Number(row?.open || 0), dead: Number(row?.dead || 0) };
}

// Public-safe projection (never leaks Stripe session urls or raw meta).
export function topupPublic(t: TopupRow) {
  const m = metaOf(t);
  return {
    id: t.id,
    provider: t.provider,
    status: t.status,
    amount_usd: Number(t.amount_usd),
    currency: t.currency,
    destination: t.destination,
    created_at: t.created_at,
    paid_at: t.paid_at,
    credited_at: t.credited_at,
    expires_at: t.expires_at,
    reference: t.provider === "solana" ? t.reference : undefined,
    signature: t.provider === "solana" && t.status === "credited" ? t.provider_ref : undefined,
    explorer_url: t.provider === "solana" && t.status === "credited" ? m.explorer_url : undefined,
    error: t.error || undefined,
  };
}
