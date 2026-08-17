// Intelligence — the abuse-economics layer over api_requests.
//
// Everything here is READ-ONLY aggregation for the operator console: where the
// money goes (models, hours, days), who spends it (risk-ranked accounts), and
// which IPs tie accounts together (sybil clusters). The one write path is
// suspendCluster, which routes through the same users.status switch the
// per-user admin action uses.
//
// Timestamps are UTC throughout, matching SQLite's datetime('now') — the
// console labels its axes accordingly.

import { getDb } from "./db";

// ── cloud-range heuristic ────────────────────────────────────────────────
// A coarse first-octet(s) map of hosting ranges seen in the wild. This is a
// triage hint, never a verdict: consumer ISPs never sit in these blocks, but
// plenty of hosting IPs sit outside them. Marked "(heuristic)" in the UI.
const CLOUD_O1 = new Set([3, 13, 18, 20, 34, 35, 40, 52, 54]); // AWS / GCP / Azure
const CLOUD_O1_O2: Record<number, [number, number][]> = {
  43: [[128, 191]], // Tencent Cloud
  47: [[74, 91], [128, 159]], // Alibaba Cloud
  51: [[38, 38], [68, 91], [161, 161], [178, 178], [195, 222]], // OVH
  128: [[199, 199]], 139: [[59, 59]], 152: [[42, 42]], 159: [[65, 65], [89, 89]],
  165: [[22, 22]], 167: [[71, 71], [99, 99]], 188: [[166, 166]], 206: [[189, 189]],
  68: [[183, 183]], 137: [[184, 184]], 142: [[93, 93]], 143: [[110, 110]],
  146: [[190, 190]], // DigitalOcean (common blocks)
  65: [[108, 109]], 95: [[216, 216]], 135: [[181, 181]], 168: [[119, 119]], // Hetzner
};

export function cloudHint(ip: string | null | undefined): string | null {
  if (!ip || ip.includes(":")) return null; // v6 ranges not mapped
  const parts = ip.split(".").map((n) => parseInt(n, 10));
  if (parts.length !== 4 || parts.some((n) => !isFinite(n))) return null;
  const [o1, o2] = parts;
  if (o1 === 43 && o2 >= 128 && o2 <= 191) return "tencent";
  if (o1 === 47 && ((o2 >= 74 && o2 <= 91) || (o2 >= 128 && o2 <= 159))) return "alibaba";
  if (CLOUD_O1.has(o1)) return "cloud";
  const ranges = CLOUD_O1_O2[o1];
  if (ranges && ranges.some(([a, b]) => o2 >= a && o2 <= b)) return "cloud";
  return null;
}

const SCRIPT_UA_SQL = `(
  r.ua LIKE '%axios%' OR r.ua LIKE '%node%' OR r.ua LIKE '%undici%' OR r.ua LIKE '%Bun/%'
  OR r.ua LIKE '%python%' OR r.ua LIKE '%aiohttp%' OR r.ua LIKE '%httpx%'
  OR r.ua LIKE '%curl%' OR r.ua LIKE '%Go-http%' OR r.ua LIKE '%okhttp%' OR r.ua LIKE '%OpenAI%'
)`;

const FAMILY_SQL = `CASE
  WHEN lower(COALESCE(r.model,'')) LIKE '%deepseek%' THEN 'deepseek'
  WHEN lower(COALESCE(r.model,'')) LIKE '%gpt%' THEN 'gpt'
  ELSE 'other' END`;

// ── overview: KPIs + chart series ────────────────────────────────────────
// Two spend ledgers, read together (deck rule): api_requests.cost_usd is what
// the CALLER was charged — $0 on cartridge calls — while OUR upstream spend
// for those calls lives in cartridge_usage (day grain, no hour resolution).
// Day-based figures (today / 7d / all / daily chart) include both; the hourly
// chart and hour-window KPIs are credit-ledger only by construction.
export function intelOverview() {
  const db = getDb();
  const one = (sql: string) => (db.query(sql).get() as any) || {};

  const win = (since: string) => one(
    `SELECT COALESCE(SUM(cost_usd),0) AS cost, COUNT(*) AS calls,
            COUNT(DISTINCT user_id) AS users,
            COALESCE(SUM(tokens_in),0) AS tin, COALESCE(SUM(tokens_out),0) AS tout
     FROM api_requests r WHERE created_at >= ${since}`);

  const today = win("date('now')");
  const yesterday = one(
    `SELECT COALESCE(SUM(cost_usd),0) AS cost, COUNT(*) AS calls FROM api_requests
     WHERE created_at >= date('now','-1 day') AND created_at < date('now')`);
  const lastHour = win("datetime('now','-1 hours')");
  const h24 = win("datetime('now','-24 hours')");
  const d7 = win("datetime('now','-7 days')");
  const all = win("'1970-01-01'");

  const liability = one(
    `SELECT COALESCE(SUM(usd_balance),0) AS balance, COALESCE(SUM(usd_granted),0) AS granted,
            COALESCE(SUM(usd_consumed),0) AS consumed, COUNT(*) AS users,
            SUM(CASE WHEN status='suspended' THEN 1 ELSE 0 END) AS suspended
     FROM users`);

  const mega = one(
    `SELECT COUNT(*) AS total,
            SUM(CASE WHEN tokens_in >= 100000 THEN 1 ELSE 0 END) AS mega,
            COALESCE(SUM(CASE WHEN tokens_in >= 100000 THEN cost_usd ELSE 0 END),0) AS mega_cost
     FROM api_requests r WHERE created_at >= datetime('now','-24 hours') AND outcome='ok'`);

  const newUsers24h = (one(`SELECT COUNT(*) AS n FROM users WHERE created_at >= datetime('now','-24 hours')`) as any).n || 0;

  const cartWin = (where: string) => one(
    `SELECT COALESCE(SUM(cost_usd),0) AS cost, COALESCE(SUM(tokens),0) AS tokens,
            COALESCE(SUM(calls),0) AS calls FROM cartridge_usage WHERE ${where}`);
  const cartridge = {
    today: cartWin("day = date('now')"),
    d7: cartWin("day >= date('now','-7 days')"),
    all: cartWin("1=1"),
  };

  // 14-day daily spend split by model family, for the stacked chart
  const dailyRows = db.query(
    `SELECT date(r.created_at) AS d, ${FAMILY_SQL} AS fam,
            COALESCE(SUM(r.cost_usd),0) AS cost, COUNT(*) AS calls
     FROM api_requests r WHERE r.created_at >= date('now','-13 days')
     GROUP BY d, fam ORDER BY d`).all() as any[];
  const daily: Record<string, any> = {};
  const dayRow = (d: string) => (daily[d] ||= { d, deepseek: 0, gpt: 0, other: 0, cartridge: 0, calls: 0 });
  for (const r of dailyRows) {
    dayRow(r.d)[r.fam] += r.cost;
    daily[r.d].calls += r.calls;
  }
  // Our cartridge-lane spend joins the same day buckets as its own family.
  for (const r of db.query(
    `SELECT day AS d, COALESCE(SUM(cost_usd),0) AS cost FROM cartridge_usage
     WHERE day >= date('now','-13 days') GROUP BY day`).all() as any[]) {
    dayRow(r.d).cartridge += r.cost;
  }

  // 48-hour hourly series
  const hourly = db.query(
    `SELECT strftime('%Y-%m-%dT%H', created_at) AS h, COALESCE(SUM(cost_usd),0) AS cost,
            COUNT(*) AS calls, COUNT(DISTINCT user_id) AS users
     FROM api_requests WHERE created_at >= datetime('now','-48 hours')
     GROUP BY h ORDER BY h`).all() as any[];

  // Top spenders, 24h — with share of the day's burn
  const top24 = db.query(
    `SELECT u.id, u.x_username, u.score_tier, u.status, u.staging,
            COALESCE(SUM(r.cost_usd),0) AS cost, COUNT(*) AS calls
     FROM api_requests r JOIN users u ON u.id = r.user_id
     WHERE r.created_at >= datetime('now','-24 hours')
     GROUP BY r.user_id ORDER BY cost DESC LIMIT 12`).all() as any[];

  const models7d = db.query(
    `SELECT r.model, COALESCE(SUM(r.cost_usd),0) AS cost, COUNT(*) AS calls,
            COALESCE(SUM(r.tokens_in),0) AS tin, COALESCE(SUM(r.tokens_out),0) AS tout
     FROM api_requests r WHERE r.created_at >= datetime('now','-7 days') AND r.cost_usd > 0
     GROUP BY r.model ORDER BY cost DESC LIMIT 12`).all() as any[];

  return {
    today, yesterday, lastHour, h24, d7, all, liability, newUsers24h, cartridge,
    mega: { total: mega.total || 0, count: mega.mega || 0, cost: mega.mega_cost || 0 },
    daily: Object.values(daily).sort((a: any, b: any) => a.d < b.d ? -1 : 1),
    hourly, top24, models7d,
    generated_at: new Date().toISOString(),
  };
}

// ── risk: signal-scored accounts ─────────────────────────────────────────
export function intelRisk(limit = 60) {
  const db = getDb();

  const agg = db.query(
    `SELECT r.user_id AS uid, COUNT(*) AS reqs,
            COALESCE(SUM(r.cost_usd),0) AS cost,
            COALESCE(SUM(CASE WHEN r.created_at >= datetime('now','-24 hours') THEN r.cost_usd ELSE 0 END),0) AS cost24,
            COUNT(DISTINCT r.ip) AS ips,
            COALESCE(AVG(CASE WHEN r.outcome='ok' AND r.cost_usd > 0 THEN r.tokens_in END),0) AS avg_in,
            COALESCE(MAX(r.tokens_in),0) AS max_in,
            SUM(CASE WHEN r.tokens_in >= 100000 THEN 1 ELSE 0 END) AS mega,
            SUM(CASE WHEN ${SCRIPT_UA_SQL} THEN 1 ELSE 0 END) AS script_reqs,
            MIN(r.created_at) AS first_req, MAX(r.created_at) AS last_req
     FROM api_requests r WHERE r.user_id IS NOT NULL
     GROUP BY r.user_id HAVING cost > 0.005 OR reqs >= 25
     ORDER BY cost DESC LIMIT ?`).all(limit) as any[];
  if (!agg.length) return [];

  const uids = agg.map((a) => a.uid);
  const ph = uids.map(() => "?").join(",");

  const users = new Map(
    (db.query(`SELECT id, x_username, x_name, score_tier, status, staging, created_at,
                      usd_granted, usd_balance, usd_consumed, daily_usd_cap, admin_note
               FROM users WHERE id IN (${ph})`).all(...uids) as any[]).map((u) => [u.id, u]));

  const peak = new Map(
    (db.query(`SELECT uid, MAX(c) AS peak_rpm FROM (
                 SELECT user_id AS uid, strftime('%Y%m%d%H%M', created_at) AS m, COUNT(*) AS c
                 FROM api_requests WHERE user_id IN (${ph}) GROUP BY user_id, m)
               GROUP BY uid`).all(...uids) as any[]).map((r) => [r.uid, r.peak_rpm]));

  // Accounts sharing any request IP with each candidate (the sybil edge).
  const shared = new Map(
    (db.query(`SELECT a.user_id AS uid, GROUP_CONCAT(DISTINCT bu.x_username) AS with_names
               FROM (SELECT DISTINCT user_id, ip FROM api_requests WHERE ip IS NOT NULL AND ip != '') a
               JOIN (SELECT DISTINCT user_id, ip FROM api_requests WHERE ip IS NOT NULL AND ip != '') b
                 ON a.ip = b.ip AND a.user_id != b.user_id
               JOIN users bu ON bu.id = b.user_id
               WHERE a.user_id IN (${ph})
               GROUP BY a.user_id`).all(...uids) as any[]).map((r) => [r.uid, r.with_names]));

  // House-paid cartridge spend per user (caller-charged $0, so it never shows
  // in the cost column — surfaced separately so heavy deck users stay visible).
  const cart = new Map(
    (db.query(`SELECT user_id AS uid, COALESCE(SUM(cost_usd),0) AS c FROM cartridge_usage
               WHERE user_id IN (${ph}) GROUP BY user_id`).all(...uids) as any[]).map((r) => [r.uid, r.c]));

  // Per-user IP mix, for the cloud-share signal
  const ipRows = db.query(`SELECT user_id AS uid, ip, COUNT(*) AS n FROM api_requests
                           WHERE user_id IN (${ph}) AND ip IS NOT NULL AND ip != ''
                           GROUP BY user_id, ip`).all(...uids) as any[];
  const cloudShare = new Map<string, number>();
  {
    const tot = new Map<string, number>(), cloud = new Map<string, number>();
    for (const r of ipRows) {
      tot.set(r.uid, (tot.get(r.uid) || 0) + r.n);
      if (cloudHint(r.ip)) cloud.set(r.uid, (cloud.get(r.uid) || 0) + r.n);
    }
    for (const [uid, t] of tot) cloudShare.set(uid, (cloud.get(uid) || 0) / t);
  }

  return agg.map((a) => {
    const u = users.get(a.uid) || {};
    const signals: string[] = [];
    let score = 0;
    const sharedWith = shared.get(a.uid) as string | undefined;
    const nShared = sharedWith ? sharedWith.split(",").length : 0;
    if (nShared > 0) { score += 30; signals.push(`shares IP with ${nShared} acct${nShared > 1 ? "s" : ""}`); }
    const cs = cloudShare.get(a.uid) || 0;
    if (cs >= 0.5 && a.reqs >= 10) { score += 15; signals.push("cloud IP"); }
    const rpm = peak.get(a.uid) || 0;
    if (rpm >= 100) { score += 15; signals.push(`${rpm} rpm peak`); }
    else if (rpm >= 30) { score += 10; signals.push(`${rpm} rpm peak`); }
    if (a.avg_in >= 100000 || (a.mega > 0 && a.mega / Math.max(1, a.reqs) > 0.3)) {
      score += 15; signals.push("mega-context");
    }
    if (a.reqs >= 50 && a.script_reqs / a.reqs > 0.8) { score += 10; signals.push("scripted"); }
    const drained = (u.usd_granted || 0) > 0 ? (u.usd_consumed || 0) / u.usd_granted : 0;
    if (drained >= 0.8) { score += 10; signals.push(`drained ${Math.round(drained * 100)}%`); }
    const ageMs = u.created_at ? Date.now() - new Date(u.created_at.replace(" ", "T") + "Z").getTime() : Infinity;
    if (ageMs < 48 * 3600_000 && a.cost >= 1) { score += 10; signals.push("fresh account"); }
    if (u.staging) { score = 0; signals.length = 0; signals.push("team"); }

    return {
      id: a.uid, x_username: u.x_username, score_tier: u.score_tier, status: u.status,
      staging: !!u.staging, admin_note: u.admin_note,
      cost: a.cost, cost24: a.cost24, cart_cost: cart.get(a.uid) || 0, reqs: a.reqs, ips: a.ips,
      avg_in: Math.round(a.avg_in), max_in: a.max_in, mega: a.mega,
      peak_rpm: rpm, cloud_share: +cs.toFixed(2),
      usd_balance: u.usd_balance, usd_granted: u.usd_granted, daily_usd_cap: u.daily_usd_cap,
      shared_with: sharedWith || null,
      first_req: a.first_req, last_req: a.last_req,
      risk: Math.min(100, score), signals,
    };
  }).sort((x, y) => y.risk - x.risk || y.cost - x.cost);
}

// ── IP clusters ──────────────────────────────────────────────────────────
export function intelClusters() {
  const rows = getDb().query(
    `SELECT r.ip, COUNT(DISTINCT r.user_id) AS accounts, COUNT(*) AS reqs,
            COALESCE(SUM(r.cost_usd),0) AS cost, MAX(r.created_at) AS last_seen,
            GROUP_CONCAT(DISTINCT u.x_username) AS usernames,
            SUM(CASE WHEN u.status='suspended' THEN 1 ELSE 0 END) AS suspended_hits
     FROM api_requests r JOIN users u ON u.id = r.user_id
     WHERE r.ip IS NOT NULL AND r.ip != ''
     GROUP BY r.ip
     HAVING accounts > 1 OR cost >= 0.5
     ORDER BY (accounts > 1) DESC, cost DESC LIMIT 40`).all() as any[];
  return rows.map((r) => ({ ...r, cloud: cloudHint(r.ip) }));
}

// ── per-user forensics (drawer) ──────────────────────────────────────────
export function userForensics(userId: string) {
  const db = getDb();
  const ips = (db.query(
    `SELECT ip, COUNT(*) AS n, MIN(created_at) AS first_seen, MAX(created_at) AS last_seen,
            (SELECT COUNT(DISTINCT o.user_id) FROM api_requests o
             WHERE o.ip = r.ip AND o.user_id != r.user_id AND o.user_id IS NOT NULL) AS other_accounts
     FROM api_requests r WHERE user_id = ? AND ip IS NOT NULL AND ip != ''
     GROUP BY ip ORDER BY n DESC LIMIT 20`).all(userId) as any[])
    .map((r) => ({ ...r, cloud: cloudHint(r.ip) }));
  const uas = db.query(
    `SELECT ua, COUNT(*) AS n FROM api_requests WHERE user_id = ? AND ua IS NOT NULL AND ua != ''
     GROUP BY ua ORDER BY n DESC LIMIT 8`).all(userId) as any[];
  const stats = (db.query(
    `SELECT COALESCE(MAX(c),0) AS peak_rpm FROM (
       SELECT strftime('%Y%m%d%H%M', created_at) AS m, COUNT(*) AS c
       FROM api_requests WHERE user_id = ? GROUP BY m)`).get(userId) as any) || {};
  const ctx = (db.query(
    `SELECT COALESCE(AVG(CASE WHEN outcome='ok' AND cost_usd > 0 THEN tokens_in END),0) AS avg_in,
            COALESCE(MAX(tokens_in),0) AS max_in,
            SUM(CASE WHEN tokens_in >= 100000 THEN 1 ELSE 0 END) AS mega
     FROM api_requests WHERE user_id = ?`).get(userId) as any) || {};
  return { ips, uas, peak_rpm: stats.peak_rpm || 0, avg_in: Math.round(ctx.avg_in || 0), max_in: ctx.max_in || 0, mega: ctx.mega || 0 };
}

// ── cluster suspension ───────────────────────────────────────────────────
// Suspends every non-staging, non-suspended account that has called from the
// IP. Returns what it did so the console can show it and the audit row can
// name names.
export function suspendCluster(ip: string): { suspended: string[]; skipped: string[] } {
  const db = getDb();
  const members = db.query(
    `SELECT DISTINCT u.id, u.x_username, u.status, u.staging
     FROM api_requests r JOIN users u ON u.id = r.user_id
     WHERE r.ip = ?`).all(ip) as any[];
  const suspended: string[] = [], skipped: string[] = [];
  for (const m of members) {
    if (m.staging || m.status === "suspended") { skipped.push(m.x_username); continue; }
    db.run("UPDATE users SET status = 'suspended', updated_at = datetime('now') WHERE id = ?", [m.id]);
    suspended.push(m.x_username);
  }
  return { suspended, skipped };
}
