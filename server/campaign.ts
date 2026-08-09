// The reserve campaign: handle reservations, referral attribution, and
// earn-tasks. Every incentive here mints VIRTUAL closed-loop credits with a
// labeled ledger reason, under three independent brakes: per-referrer cap,
// per-task once-ever, and a GLOBAL budget kill switch summed from the ledger
// itself — when the campaign has granted its budget, everything stops.
//
// All economics read process.env at call time so Luca tunes numbers with an
// .env edit + restart, no code change.

import { getDb, getUser, getUserByX, getCardByHandle, grantCredits } from "./db";

const num = (k: string, d: number) => {
  const v = parseFloat(process.env[k] || "");
  return isFinite(v) ? v : d;
};

export const campaignConfig = () => ({
  refBonusUsd: num("CAMPAIGN_REF_BONUS_USD", 1),
  refCapUsd: num("CAMPAIGN_REF_CAP_USD", 10),
  refMinScore: num("CAMPAIGN_REF_MIN_SCORE", 10),
  taskFollowUsd: num("CAMPAIGN_TASK_FOLLOW_USD", 0.5),
  taskShareUsd: num("CAMPAIGN_TASK_SHARE_USD", 0.5),
  budgetUsd: num("CAMPAIGN_BUDGET_USD", 250),
  xHandle: process.env.VANTIS_X_HANDLE || "vantis_ai",
});

// ─── Handles ───

export const HANDLE_RE = /^[A-Za-z0-9_]{1,15}$/;
export const normHandle = (h: string) => String(h || "").replace(/^@/, "").toLowerCase();

export type Availability =
  | { state: "invalid" }
  | { state: "carded"; handle: string }
  | { state: "reserved" }
  | { state: "unclaimed" };

export function availability(raw: string): Availability {
  const h = normHandle(raw);
  if (!HANDLE_RE.test(h)) return { state: "invalid" };
  const db = getDb();
  const carded = db.query("SELECT handle FROM cards WHERE lower(replace(handle,'@','')) = ?").get(h) as any;
  if (carded) return { state: "carded", handle: String(carded.handle).replace("@", "") };
  // "Reserved" means someone LITERALLY signed in — either an X account
  // exists for the handle, or a signed-in Privy account stamped the
  // reservation (the Cloudflare-style account binding). A typed-and-clicked
  // row with no sign-in behind it is telemetry, never a public state.
  const signedIn = db.query("SELECT id FROM users WHERE lower(x_username) = ?").get(h) as any;
  if (signedIn) return { state: "reserved" };
  const bound = db.query("SELECT handle FROM reservations WHERE handle = ? AND privy_did IS NOT NULL").get(h) as any;
  if (bound) return { state: "reserved" };
  return { state: "unclaimed" };
}

export function reserve(raw: string, ip: string, ua: string, ref: string | null): { ok: boolean; state: Availability["state"]; position?: number } {
  const h = normHandle(raw);
  const a = availability(h);
  if (a.state === "invalid") return { ok: false, state: a.state };
  const db = getDb();
  // The row is funnel telemetry (which handles get typed, from where) — it
  // never surfaces as availability. X ownership is the only claim.
  if (a.state !== "carded") {
    const refNorm = ref ? normHandle(ref) : null;
    db.run(
      "INSERT OR IGNORE INTO reservations (handle, ref, ip, ua) VALUES (?, ?, ?, ?)",
      [h, refNorm && refNorm !== h ? refNorm : null, ip, ua]
    );
  }
  // Position in line: 1-based order of this handle's reservation. Real,
  // free, honest — the share hook the auto-redirect was throwing away.
  const pos = db
    .query("SELECT COUNT(*) AS n FROM reservations WHERE rowid <= (SELECT rowid FROM reservations WHERE handle = ?)")
    .get(h) as any;
  return { ok: true, state: a.state, position: Number(pos?.n) || undefined };
}

// THE BOOKING MODEL (Luca's rule): the handle belongs to whoever reserves it
// and signs in first — X/GitHub/LinkedIn verify the person and feed scoring,
// they never rename the card. First bound DID owns the name.
export function bindReservation(handle: string, did: string): "bound" | "taken" | "none" {
  const h = normHandle(handle);
  if (!HANDLE_RE.test(h)) return "none";
  const db = getDb();
  const row = db.query("SELECT privy_did FROM reservations WHERE handle = ?").get(h) as any;
  if (!row) {
    // Cookie without a row (edge): the sign-in itself books it.
    db.run("INSERT OR IGNORE INTO reservations (handle, privy_did) VALUES (?, ?)", [h, did]);
  } else if (!row.privy_did) {
    db.run("UPDATE reservations SET privy_did = ? WHERE handle = ? AND privy_did IS NULL", [did, h]);
  }
  const now = db.query("SELECT privy_did FROM reservations WHERE handle = ?").get(h) as any;
  return now?.privy_did === did ? "bound" : now?.privy_did ? "taken" : "none";
}

// The handle this signed-in account has booked and not yet minted.
export function bookedHandleFor(did: string): string | null {
  const row = getDb()
    .query("SELECT handle FROM reservations WHERE privy_did = ? AND claimed_user_id IS NULL ORDER BY rowid DESC LIMIT 1")
    .get(did) as any;
  if (!row?.handle) return null;
  return getCardByHandle(`@${row.handle}`) ? null : row.handle;
}

export function markReservationClaimed(handle: string, userId: string): void {
  getDb().run("UPDATE reservations SET claimed_user_id = ? WHERE handle = ? AND claimed_user_id IS NULL", [userId, normHandle(handle)]);
}

function referrerHasCard(userId: string): boolean {
  return !!getDb().query("SELECT id FROM cards WHERE user_id = ?").get(userId);
}

// Referral codes are CARD handles first (the public identity under the
// booking model), X usernames as the legacy fallback.
export function resolveReferrer(code: string): any | null {
  const h = normHandle(code);
  const card = getCardByHandle(`@${h}`);
  if (card) return getUser(card.user_id);
  return getUserByX(h);
}

// Sign-in with the real X account collects the reservation (and its ref).
export function claimReservation(handle: string, userId: string): string | null {
  const h = normHandle(handle);
  const row = getDb().query("SELECT ref, claimed_user_id FROM reservations WHERE handle = ?").get(h) as any;
  if (!row) return null;
  if (!row.claimed_user_id) {
    getDb().run("UPDATE reservations SET claimed_user_id = ? WHERE handle = ?", [userId, h]);
  }
  return row.ref || null;
}

// ─── Grants under the global brake ───

function campaignSpentUsd(): number {
  const row = getDb().query("SELECT COALESCE(SUM(amount_usd),0) AS s FROM credit_transactions WHERE description LIKE 'Campaign:%'").get() as any;
  return Number(row?.s || 0);
}

export function campaignRemainingUsd(): number {
  return Math.max(0, campaignConfig().budgetUsd - campaignSpentUsd());
}

function grantCampaign(userId: string, usd: number, reason: string): boolean {
  if (usd <= 0) return false;
  if (campaignRemainingUsd() < usd) return false;
  grantCredits(userId, usd, reason);
  return true;
}

// ─── Referral bonus: fires ONCE, on the referee's FIRST scored grant ───

export function referralEarnedUsd(referrerId: string): number {
  const row = getDb()
    .query("SELECT COALESCE(SUM(amount_usd),0) AS s FROM credit_transactions WHERE user_id = ? AND description LIKE 'Campaign: referral%'")
    .get(referrerId) as any;
  return Number(row?.s || 0);
}

export function awardReferral(referee: any, score: number): void {
  const cfg = campaignConfig();
  if (!referee?.referred_by) return;
  if (score < cfg.refMinScore) return; // bot-tier referees pay nothing
  const referrer = resolveReferrer(referee.referred_by);
  if (!referrer || referrer.id === referee.id) return;
  if (!referrerHasCard(referrer.id)) return; // referrer must hold a real card
  if (referralEarnedUsd(referrer.id) + cfg.refBonusUsd > cfg.refCapUsd) return;
  grantCampaign(referrer.id, cfg.refBonusUsd, `Campaign: referral — @${referee.x_username} scored`);
}

// ─── Tasks: once ever, card-holders only ───

export const TASKS = ["follow", "share"] as const;
export type TaskKey = (typeof TASKS)[number];

export function taskState(userId: string): Record<TaskKey, boolean> {
  const rows = getDb().query("SELECT task FROM campaign_tasks WHERE user_id = ?").all(userId) as any[];
  const done = new Set(rows.map((r) => r.task));
  return { follow: done.has("follow"), share: done.has("share") };
}

export function claimTask(userId: string, task: TaskKey): { ok: boolean; reward?: number; error?: string } {
  const cfg = campaignConfig();
  const reward = task === "follow" ? cfg.taskFollowUsd : cfg.taskShareUsd;
  const db = getDb();
  // PRIMARY KEY (user_id, task) makes the claim idempotent under races.
  try {
    db.run("INSERT INTO campaign_tasks (user_id, task, reward_usd) VALUES (?, ?, ?)", [userId, task, reward]);
  } catch {
    return { ok: false, error: "already_claimed" };
  }
  if (!grantCampaign(userId, reward, `Campaign: task ${task}`)) {
    db.run("DELETE FROM campaign_tasks WHERE user_id = ? AND task = ?", [userId, task]);
    return { ok: false, error: "campaign_budget_exhausted" };
  }
  return { ok: true, reward };
}

// ─── Grant true-up: re-runs can only ever raise the grant, to the tier the
// agent now sees. Fair to users scored before a data lane existed (X metrics
// arrived after the first cohort), farm-proof by construction: pays only the
// delta above ALL prior onboarding grants, downgrades pay nothing. ───
export function trueUpGrant(userId: string, targetGrantUsd: number, tier: string, vantisPrice?: number): number {
  const db = getDb();
  const row = db
    .query("SELECT COALESCE(SUM(amount_usd),0) AS s FROM credit_transactions WHERE user_id = ? AND description LIKE 'Onboarding grant%'")
    .get(userId) as any;
  const already = Number(row?.s || 0);
  const delta = Math.min(25, targetGrantUsd) - already;
  if (delta <= 0) return 0;
  grantCredits(userId, delta, `Onboarding grant true-up: re-scored to ${tier}`);
  // The card is the public face of the verdict — a true-up that upgrades the
  // tier must reach it, or the report and card face keep showing the old
  // mint-time grant (shipped that bug: whale report reading "Grant $15").
  db.run(
    "UPDATE cards SET tier = ?, grant_usd = ?, grant_vantis = grant_vantis + ? WHERE user_id = ?",
    [tier, already + delta, vantisPrice && vantisPrice > 0 ? delta / vantisPrice : 0, userId]
  );
  return delta;
}
