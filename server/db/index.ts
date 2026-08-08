import { Database } from "bun:sqlite";
import { readFileSync } from "fs";
import { join } from "path";

const DB_PATH = process.env.VANTIS_CARD_DB || join(import.meta.dir, "../../data/vantis-cards.db");

let db: Database;

export function getDb(): Database {
  if (!db) {
    db = new Database(DB_PATH, { create: true });
    db.run("PRAGMA journal_mode = WAL");
    db.run("PRAGMA foreign_keys = ON");
    const schema = readFileSync(join(import.meta.dir, "schema.sql"), "utf-8");
    db.exec(schema);
    migrate(db);
  }
  return db;
}

// Additive, idempotent migrations. The production DB holds real rows, so this
// only ever ADDs columns and tables — never rewrites or drops.
function migrate(d: Database) {
  const cols = (t: string) => (d.query(`PRAGMA table_info(${t})`).all() as any[]).map((c) => c.name);

  const userCols = cols("users");
  const add = (name: string, ddl: string) => {
    if (!userCols.includes(name)) d.run(`ALTER TABLE users ADD COLUMN ${ddl}`);
  };
  add("status", "status TEXT DEFAULT 'active'");            // active | suspended
  add("rate_limit_rpm", "rate_limit_rpm INTEGER DEFAULT 60");
  add("daily_usd_cap", "daily_usd_cap REAL DEFAULT 0");     // 0 = uncapped
  add("admin_note", "admin_note TEXT");
  add("last_seen_at", "last_seen_at TEXT");
  // richer connect-time signal
  add("github_orgs", "github_orgs TEXT");            // JSON array
  add("github_activity", "github_activity TEXT");    // JSON blob (90d counts)
  add("github_total_stars", "github_total_stars INTEGER DEFAULT 0");
  add("github_created_at", "github_created_at TEXT");
  add("linkedin_domain", "linkedin_domain TEXT");    // verified corporate domain
  // Privy gate (Aug 8): account layer + embedded wallet
  add("privy_user_id", "privy_user_id TEXT");        // did:privy:…
  add("wallet_address", "wallet_address TEXT");      // Privy embedded EVM wallet
  // Score report (Aug 8): the verdict's why and the agent log, replayable
  add("score_reasoning", "score_reasoning TEXT");
  add("score_log", "score_log TEXT");                // JSON progress events

  // Every request that reaches the gateway, billed or refused. This is the
  // metering record — credit_transactions only holds successful settlements.
  d.exec(`
    CREATE TABLE IF NOT EXISTS api_requests (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id TEXT,
      key_prefix TEXT,
      endpoint TEXT NOT NULL,
      method TEXT,
      model TEXT,
      status INTEGER NOT NULL,
      outcome TEXT NOT NULL,
      tokens_in INTEGER DEFAULT 0,
      tokens_out INTEGER DEFAULT 0,
      cost_usd REAL DEFAULT 0,
      vantis_burned REAL DEFAULT 0,
      latency_ms INTEGER,
      ip TEXT,
      ua TEXT,
      error TEXT,
      created_at TEXT DEFAULT (datetime('now'))
    );
    CREATE INDEX IF NOT EXISTS idx_req_user ON api_requests(user_id);
    CREATE INDEX IF NOT EXISTS idx_req_created ON api_requests(created_at);
    CREATE INDEX IF NOT EXISTS idx_req_outcome ON api_requests(outcome);

    CREATE TABLE IF NOT EXISTS admin_events (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      action TEXT NOT NULL,
      target_user_id TEXT,
      detail TEXT,
      ip TEXT,
      created_at TEXT DEFAULT (datetime('now'))
    );
    CREATE INDEX IF NOT EXISTS idx_admin_created ON admin_events(created_at);
    CREATE UNIQUE INDEX IF NOT EXISTS idx_users_privy ON users(privy_user_id) WHERE privy_user_id IS NOT NULL;
  `);
}

// ─── Users ───
export function createUser(xData: any) {
  const db = getDb();
  const id = crypto.randomUUID();
  db.run(
    `INSERT INTO users (id, x_username, x_user_id, x_name, x_bio, x_followers, x_following,
     x_tweet_count, x_verified, x_avatar, x_location, x_url, x_created_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      id,
      xData.username,
      xData.id,
      xData.name,
      xData.description || null,
      xData.public_metrics?.followers_count || 0,
      xData.public_metrics?.following_count || 0,
      xData.public_metrics?.tweet_count || 0,
      xData.verified_type || null,
      xData.profile_image_url || null,
      xData.location || null,
      xData.url || null,
      xData.created_at || null,
    ]
  );
  return getUser(id);
}

export function getUser(id: string) {
  return getDb().query("SELECT * FROM users WHERE id = ?").get(id) as any;
}

export function getUserByX(username: string) {
  return getDb().query("SELECT * FROM users WHERE x_username = ?").get(username) as any;
}

export function getUserByPrivyId(privyUserId: string) {
  return getDb().query("SELECT * FROM users WHERE privy_user_id = ?").get(privyUserId) as any;
}

export function getUserByApiKey(apiKey: string) {
  return getDb().query("SELECT * FROM users WHERE api_key = ?").get(apiKey) as any;
}

const USER_COLUMNS = new Set([
  "x_username","x_user_id","x_name","x_bio","x_followers","x_following","x_tweet_count",
  "x_verified","x_avatar","x_location","x_url","x_created_at",
  "github_username","github_name","github_bio","github_company","github_location",
  "github_followers","github_public_repos","github_languages","github_top_repos",
  "github_avatar","github_connected_at",
  "linkedin_name","linkedin_headline","linkedin_industry","linkedin_company",
  "linkedin_email","linkedin_avatar","linkedin_connected_at",
  "score","score_tier","score_breakdown","scored_at",
  "github_orgs","github_activity","github_total_stars","github_created_at","linkedin_domain",
  "privy_user_id","wallet_address","score_reasoning","score_log",
]);

export function updateUser(id: string, fields: Record<string, any>) {
  const db = getDb();
  const keys = Object.keys(fields).filter((k) => USER_COLUMNS.has(k));
  if (!keys.length) return getUser(id);
  const sets = keys.map((k) => `${k} = ?`).join(", ");
  const values = keys.map((k) => fields[k]);
  db.run(`UPDATE users SET ${sets}, updated_at = datetime('now') WHERE id = ?`, [...values, id]);
  return getUser(id);
}

// ─── OAuth state ───
export function createOAuthState(state: string, platform: string, extra?: { user_id?: string; code_verifier?: string; redirect_uri?: string }) {
  getDb().run(
    `INSERT INTO oauth_states (state, platform, user_id, code_verifier, redirect_uri, expires_at)
     VALUES (?, ?, ?, ?, ?, datetime('now', '+10 minutes'))`,
    [state, platform, extra?.user_id || null, extra?.code_verifier || null, extra?.redirect_uri || null]
  );
}

export function getOAuthState(state: string) {
  return getDb()
    .query("SELECT * FROM oauth_states WHERE state = ? AND expires_at > datetime('now')")
    .get(state) as any;
}

export function deleteOAuthState(state: string) {
  getDb().run("DELETE FROM oauth_states WHERE state = ?", [state]);
}

// ─── Credits (USD ledger) + virtual burn ───
export function grantCredits(userId: string, amountUsd: number, description: string) {
  const db = getDb();
  const user = getUser(userId);
  const newBalance = (user.usd_balance || 0) + amountUsd;
  const newGranted = (user.usd_granted || 0) + amountUsd;
  db.run("UPDATE users SET usd_balance = ?, usd_granted = ? WHERE id = ?", [newBalance, newGranted, userId]);
  db.run(
    `INSERT INTO credit_transactions (user_id, type, amount_usd, balance_after, description)
     VALUES (?, 'grant', ?, ?, ?)`,
    [userId, amountUsd, newBalance, description]
  );
  return newBalance;
}

export function consumeCredits(
  userId: string,
  amountUsd: number,
  model: string,
  tokensIn: number,
  tokensOut: number,
  vantisBurned: number,
  vantisPrice: number
) {
  const db = getDb();
  const user = getUser(userId);
  // The work is already done and already paid for upstream, so refusing to
  // settle would mean giving it away. Charge what is there, drive the balance
  // to zero, and record the shortfall — never silently serve for free.
  const available = user.usd_balance || 0;
  const shortfall = Math.max(0, amountUsd - available);
  if (shortfall > 0) {
    amountUsd = available;
    vantisBurned = vantisPrice > 0 ? available / vantisPrice : 0;
  }
  const newBalance = user.usd_balance - amountUsd;
  const newConsumed = (user.usd_consumed || 0) + amountUsd;
  const newBurned = (user.vantis_burned || 0) + vantisBurned;
  db.run(
    "UPDATE users SET usd_balance = ?, usd_consumed = ?, vantis_burned = ? WHERE id = ?",
    [newBalance, newConsumed, newBurned, userId]
  );
  db.run(
    `INSERT INTO credit_transactions
     (user_id, type, amount_usd, balance_after, model_used, tokens_in, tokens_out, vantis_burned, vantis_price, description)
     VALUES (?, 'consume', ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      userId, -amountUsd, newBalance, model, tokensIn, tokensOut, vantisBurned, vantisPrice,
      shortfall > 0 ? `Inference: ${model} (balance exhausted mid-call, $${shortfall.toFixed(6)} unbilled)` : `Inference: ${model}`,
    ]
  );
  return { ok: true as const, balance: newBalance, totalBurned: newBurned, shortfall };
}

// Global virtual-burn stats for the public ticker
export function burnStats() {
  const db = getDb();
  const totals = db
    .query(
      `SELECT COALESCE(SUM(vantis_burned),0) AS vantis, COALESCE(SUM(-amount_usd),0) AS usd, COUNT(*) AS calls
       FROM credit_transactions WHERE type = 'consume'`
    )
    .get() as any;
  const recent = db
    .query(
      `SELECT model_used AS model, tokens_in, tokens_out, -amount_usd AS cost_usd,
              vantis_burned, vantis_price, created_at
       FROM credit_transactions WHERE type = 'consume'
       ORDER BY created_at DESC LIMIT 20`
    )
    .all() as any[];
  const cardCount = (db.query("SELECT COUNT(*) AS n FROM cards").get() as any).n;
  const grantedUsd = (db.query("SELECT COALESCE(SUM(usd_granted),0) AS s FROM users").get() as any).s;
  return {
    vantis_burned_total: totals.vantis,
    usd_consumed_total: totals.usd,
    inference_calls: totals.calls,
    cards_issued: cardCount,
    usd_granted_total: grantedUsd,
    recent_burns: recent,
  };
}

// ─── Cards ───
export function createCard(userId: string, handle: string, tier: string, grantUsd: number, grantVantis: number, priceAtGrant: number) {
  const db = getDb();
  const existing = getCard(userId);
  if (existing) return existing;
  const id = crypto.randomUUID();
  const cardUrl = `card.vantis.sh/card/${handle.replace("@", "")}`;
  const variants = ["signal", "ink", "carbon", "mint", "mono"];
  const designVariant = variants[Math.floor(Math.random() * variants.length)];
  db.run(
    `INSERT INTO cards (id, user_id, handle, card_url, tier, grant_usd, grant_vantis, price_at_grant, design_variant)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [id, userId, handle, cardUrl, tier, grantUsd, grantVantis, priceAtGrant, designVariant]
  );
  return db.query("SELECT * FROM cards WHERE id = ?").get(id) as any;
}

export function getCard(userId: string) {
  return getDb().query("SELECT * FROM cards WHERE user_id = ?").get(userId) as any;
}

export function getCardByHandle(handle: string) {
  return getDb().query("SELECT * FROM cards WHERE handle = ?").get(handle) as any;
}

// ─── Enrichment cache ───
export function saveEnrichment(userId: string, query: string, results: any) {
  getDb().run(
    `INSERT INTO exa_enrichments (id, user_id, query, results) VALUES (?, ?, ?, ?)`,
    [crypto.randomUUID(), userId, query, JSON.stringify(results)]
  );
}

export function getLatestEnrichment(userId: string): any | null {
  const row = getDb()
    .query("SELECT results FROM exa_enrichments WHERE user_id = ? AND query = 'full_enrichment' ORDER BY rowid DESC LIMIT 1")
    .get(userId) as any;
  if (!row?.results) return null;
  try { return JSON.parse(row.results); } catch { return null; }
}

// ─── API keys ───
export function generateApiKey(userId: string) {
  const db = getDb();
  const existing = getUser(userId);
  if (existing?.api_key) return existing.api_key;
  const apiKey = `vcard_${crypto.randomUUID().replace(/-/g, "")}`;
  db.run("UPDATE users SET api_key = ?, api_key_created_at = datetime('now') WHERE id = ?", [apiKey, userId]);
  return apiKey;
}

// ─── Meta KV ───
export function metaGet(k: string): string | null {
  const row = getDb().query("SELECT v FROM meta WHERE k = ?").get(k) as any;
  return row ? row.v : null;
}

export function metaSet(k: string, v: string) {
  getDb().run("INSERT INTO meta (k, v) VALUES (?, ?) ON CONFLICT(k) DO UPDATE SET v = excluded.v", [k, v]);
}

// ─── Gateway metering ───

export type Outcome =
  | "ok" | "unauthorized" | "suspended" | "rate_limited"
  | "insufficient_credits" | "bad_request" | "unsupported_model"
  | "upstream_error" | "upstream_saturated" | "daily_cap";

export interface RequestLog {
  user_id?: string | null;
  key_prefix?: string | null;
  endpoint: string;
  method?: string;
  model?: string | null;
  status: number;
  outcome: Outcome;
  tokens_in?: number;
  tokens_out?: number;
  cost_usd?: number;
  vantis_burned?: number;
  latency_ms?: number;
  ip?: string | null;
  ua?: string | null;
  error?: string | null;
}

export function logRequest(r: RequestLog) {
  getDb().run(
    `INSERT INTO api_requests
     (user_id, key_prefix, endpoint, method, model, status, outcome, tokens_in, tokens_out,
      cost_usd, vantis_burned, latency_ms, ip, ua, error)
     VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
    [
      r.user_id || null, r.key_prefix || null, r.endpoint, r.method || "POST", r.model || null,
      r.status, r.outcome, r.tokens_in || 0, r.tokens_out || 0, r.cost_usd || 0,
      r.vantis_burned || 0, r.latency_ms ?? null, r.ip || null, (r.ua || "").slice(0, 200) || null,
      (r.error || "").slice(0, 300) || null,
    ]
  );
  if (r.user_id) {
    getDb().run("UPDATE users SET last_seen_at = datetime('now') WHERE id = ?", [r.user_id]);
  }
}

// Spend in the current UTC day, for the per-user daily cap
export function spendToday(userId: string): number {
  const row = getDb()
    .query(`SELECT COALESCE(SUM(cost_usd),0) AS s FROM api_requests
            WHERE user_id = ? AND outcome = 'ok' AND created_at >= date('now')`)
    .get(userId) as any;
  return row?.s || 0;
}

export function setUserStatus(userId: string, status: "active" | "suspended") {
  getDb().run("UPDATE users SET status = ?, updated_at = datetime('now') WHERE id = ?", [status, userId]);
}

export function setUserLimits(userId: string, rpm: number, dailyCap: number) {
  getDb().run(
    "UPDATE users SET rate_limit_rpm = ?, daily_usd_cap = ?, updated_at = datetime('now') WHERE id = ?",
    [rpm, dailyCap, userId]
  );
}

export function setAdminNote(userId: string, note: string) {
  getDb().run("UPDATE users SET admin_note = ?, updated_at = datetime('now') WHERE id = ?", [note, userId]);
}

// Admin balance adjustment. Positive tops up, negative claws back; both land
// in credit_transactions so the ledger stays the single source of truth.
export function adjustBalance(userId: string, deltaUsd: number, reason: string) {
  const db = getDb();
  const u = getUser(userId);
  if (!u) return { ok: false as const, error: "user_not_found" };
  const newBalance = Math.max(0, (u.usd_balance || 0) + deltaUsd);
  const applied = newBalance - (u.usd_balance || 0);
  const newGranted = applied > 0 ? (u.usd_granted || 0) + applied : (u.usd_granted || 0);
  db.run("UPDATE users SET usd_balance = ?, usd_granted = ?, updated_at = datetime('now') WHERE id = ?",
    [newBalance, newGranted, userId]);
  db.run(
    `INSERT INTO credit_transactions (user_id, type, amount_usd, balance_after, description)
     VALUES (?, ?, ?, ?, ?)`,
    [userId, applied >= 0 ? "topup" : "refund", applied, newBalance, `Admin: ${reason}`]
  );
  return { ok: true as const, balance: newBalance, applied };
}

export function rotateApiKey(userId: string) {
  const key = `vcard_${crypto.randomUUID().replace(/-/g, "")}`;
  getDb().run("UPDATE users SET api_key = ?, api_key_created_at = datetime('now') WHERE id = ?", [key, userId]);
  return key;
}

export function adminEvent(action: string, targetUserId: string | null, detail: string, ip?: string | null) {
  getDb().run(
    "INSERT INTO admin_events (action, target_user_id, detail, ip) VALUES (?,?,?,?)",
    [action, targetUserId, detail.slice(0, 500), ip || null]
  );
}

// ─── Admin queries ───

export function adminOverview() {
  const db = getDb();
  const one = (sql: string, p: any[] = []) => (db.query(sql).get(...p) as any) || {};

  const users = one(`SELECT COUNT(*) AS total,
      SUM(CASE WHEN api_key IS NOT NULL THEN 1 ELSE 0 END) AS with_key,
      SUM(CASE WHEN status = 'suspended' THEN 1 ELSE 0 END) AS suspended,
      COALESCE(SUM(usd_balance),0) AS balance,
      COALESCE(SUM(usd_granted),0) AS granted,
      COALESCE(SUM(usd_consumed),0) AS consumed,
      COALESCE(SUM(vantis_burned),0) AS burned
    FROM users`);

  const win = (since: string) => one(
    `SELECT COUNT(*) AS calls,
       SUM(CASE WHEN outcome='ok' THEN 1 ELSE 0 END) AS ok,
       COALESCE(SUM(tokens_in),0) AS tin, COALESCE(SUM(tokens_out),0) AS tout,
       COALESCE(SUM(cost_usd),0) AS cost, COALESCE(SUM(vantis_burned),0) AS burned,
       COALESCE(AVG(latency_ms),0) AS avg_ms
     FROM api_requests WHERE created_at >= ${since}`);

  const outcomes = db.query(
    `SELECT outcome, COUNT(*) AS n FROM api_requests
     WHERE created_at >= datetime('now','-24 hours') GROUP BY outcome ORDER BY n DESC`
  ).all() as any[];

  // 14-day daily series for the chart
  const series = db.query(
    `SELECT date(created_at) AS d, COUNT(*) AS calls,
            COALESCE(SUM(cost_usd),0) AS cost,
            COALESCE(SUM(vantis_burned),0) AS burned
     FROM api_requests WHERE created_at >= date('now','-13 days')
     GROUP BY date(created_at) ORDER BY d`
  ).all() as any[];

  return {
    users,
    last24h: win("datetime('now','-24 hours')"),
    last7d: win("datetime('now','-7 days')"),
    allTime: win("'1970-01-01'"),
    outcomes,
    series,
  };
}

export function adminUsers(opts: { q?: string; limit?: number } = {}) {
  const limit = Math.min(500, opts.limit || 100);
  const like = `%${(opts.q || "").trim()}%`;
  const where = opts.q ? "WHERE u.x_username LIKE ? OR u.x_name LIKE ?" : "";
  const params = opts.q ? [like, like, limit] : [limit];
  return getDb().query(
    `SELECT u.id, u.x_username, u.x_name, u.score, u.score_tier, u.status,
            u.usd_balance, u.usd_granted, u.usd_consumed, u.vantis_burned,
            u.rate_limit_rpm, u.daily_usd_cap, u.admin_note, u.last_seen_at, u.created_at,
            CASE WHEN u.api_key IS NULL THEN NULL ELSE substr(u.api_key, 1, 12) || '…' END AS key_prefix,
            (SELECT COUNT(*) FROM api_requests r WHERE r.user_id = u.id) AS calls,
            (SELECT COUNT(*) FROM api_requests r WHERE r.user_id = u.id AND r.created_at >= datetime('now','-24 hours')) AS calls_24h,
            (SELECT COALESCE(SUM(r.tokens_in + r.tokens_out),0) FROM api_requests r WHERE r.user_id = u.id) AS tokens
     FROM users u ${where}
     ORDER BY u.created_at DESC LIMIT ?`
  ).all(...params) as any[];
}

export function adminUserDetail(userId: string) {
  const db = getDb();
  const user = db.query(
    `SELECT *, CASE WHEN api_key IS NULL THEN NULL ELSE substr(api_key,1,12) || '…' END AS key_prefix
     FROM users WHERE id = ?`).get(userId) as any;
  if (!user) return null;
  delete user.api_key; // never expose a live key through the admin API
  const requests = db.query(
    `SELECT id, endpoint, model, status, outcome, tokens_in, tokens_out, cost_usd,
            vantis_burned, latency_ms, error, created_at
     FROM api_requests WHERE user_id = ? ORDER BY id DESC LIMIT 50`).all(userId) as any[];
  const ledger = db.query(
    `SELECT type, amount_usd, balance_after, description, model_used, vantis_burned, created_at
     FROM credit_transactions WHERE user_id = ? ORDER BY rowid DESC LIMIT 50`).all(userId) as any[];
  const daily = db.query(
    `SELECT date(created_at) AS d, COUNT(*) AS calls,
            COALESCE(SUM(cost_usd),0) AS cost, COALESCE(SUM(vantis_burned),0) AS burned
     FROM api_requests WHERE user_id = ? AND created_at >= date('now','-13 days')
     GROUP BY date(created_at) ORDER BY d`).all(userId) as any[];
  return { user, requests, ledger, daily, spend_today: spendToday(userId) };
}

export function adminRequests(opts: { outcome?: string; limit?: number } = {}) {
  const limit = Math.min(500, opts.limit || 100);
  const where = opts.outcome && opts.outcome !== "all" ? "WHERE r.outcome = ?" : "";
  const params = where ? [opts.outcome, limit] : [limit];
  return getDb().query(
    `SELECT r.id, r.endpoint, r.model, r.status, r.outcome, r.tokens_in, r.tokens_out,
            r.cost_usd, r.vantis_burned, r.latency_ms, r.error, r.created_at,
            r.key_prefix, u.x_username
     FROM api_requests r LEFT JOIN users u ON u.id = r.user_id
     ${where} ORDER BY r.id DESC LIMIT ?`
  ).all(...params) as any[];
}

export function adminEvents(limit = 50) {
  return getDb().query(
    `SELECT e.*, u.x_username FROM admin_events e
     LEFT JOIN users u ON u.id = e.target_user_id
     ORDER BY e.id DESC LIMIT ?`).all(Math.min(200, limit)) as any[];
}
