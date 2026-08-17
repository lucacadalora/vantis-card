import { Database } from "bun:sqlite";
import { readFileSync } from "fs";
import { join } from "path";
import { cableEmit } from "../cable-bus";

const DB_PATH = process.env.VANTIS_CARD_DB || join(import.meta.dir, "../../data/vantis-cards.db");

// Agentic clients routinely spend several model turns on one user request.
// Four requests/second leaves room for multi-agent work while the shared
// upstream ceiling remains the final protection for the provider account.
export const DEFAULT_RATE_LIMIT_RPM = Math.max(1, parseInt(process.env.VANTIS_CARD_DEFAULT_RPM || "240"));

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
  // staging=1 unlocks the multi-model catalog + /console (deliberately NOT
  // in USER_COLUMNS — only operator SQL/console code sets it, never updateUser)
  add("staging", "staging INTEGER DEFAULT 0");
  // pool_access=1 puts the account on the frontier-pool allowlist: the
  // catalog's access:"allowlist" GPT ids (balancer-gpt pool, rate {0,0})
  // resolve only for these accounts. Granted per account from /admin — the
  // operator's approve list (Luca, Aug 13 2026; lucaxyzz seeded first). Same
  // discipline as staging: NOT in USER_COLUMNS, never set by updateUser.
  add("pool_access", "pool_access INTEGER DEFAULT 0");
  add("rate_limit_rpm", `rate_limit_rpm INTEGER DEFAULT ${DEFAULT_RATE_LIMIT_RPM}`);
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
  // Solana is a different curve (ed25519), so Privy issues a SECOND key with
  // its own base58 address — it is not derivable from wallet_address.
  add("solana_address", "solana_address TEXT");      // Privy embedded Solana wallet
  // Score report (Aug 8): the verdict's why and the agent log, replayable
  add("score_reasoning", "score_reasoning TEXT");
  add("score_log", "score_log TEXT");                // JSON progress events
  add("score_reruns", "score_reruns INTEGER DEFAULT 0"); // re-scores used, cap 5
  // Reserve campaign (Aug 8): who sent this user here
  add("referred_by", "referred_by TEXT");            // referrer's x_username
  // Header bell (Aug 9): last time the credit-history panel was opened
  add("notif_seen_at", "notif_seen_at TEXT");
  // LinkedIn identity (Aug 9): the /in/<slug> that makes the scan exact
  add("linkedin_vanity", "linkedin_vanity TEXT");
  // Contactable account (Aug 13): the verified address Privy already holds —
  // email-OTP login, or the Google/LinkedIn/GitHub link. Before this the
  // address was read and thrown away (only its DOMAIN survived, and only when
  // corporate), so a signed-up user was unreachable. email_source records
  // which link it arrived on; email_captured_at is when WE wrote it down.
  add("email", "email TEXT");
  add("email_source", "email_source TEXT");   // email_login | google | linkedin | github
  add("email_captured_at", "email_captured_at TEXT");

  // Reservations gain the account binding (Cloudflare-style): a signed-in
  // reserver stamps their Privy DID even before X is linked.
  const resvCols = cols("reservations");
  if (resvCols.length && !resvCols.includes("privy_did")) {
    d.run("ALTER TABLE reservations ADD COLUMN privy_did TEXT");
  }
  const walCols = cols("agent_wallets");
  if (walCols.length && !walCols.includes("purpose")) {
    d.run("ALTER TABLE agent_wallets ADD COLUMN purpose TEXT");
  }
  const txCols = cols("credit_transactions");
  if (txCols.length && !txCols.includes("wallet_id")) {
    d.run("ALTER TABLE credit_transactions ADD COLUMN wallet_id TEXT");
  }

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

    CREATE TABLE IF NOT EXISTS reservations (
      handle TEXT PRIMARY KEY,          -- lowercase, no @
      ref TEXT,                         -- referrer's x_username, from cookie
      ip TEXT,
      ua TEXT,
      claimed_user_id TEXT,
      created_at TEXT DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS agent_wallets (
      id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
      user_id TEXT NOT NULL,
      name TEXT NOT NULL,
      purpose TEXT,
      api_key TEXT UNIQUE,
      usd_balance REAL DEFAULT 0,
      usd_consumed REAL DEFAULT 0,
      vantis_burned REAL DEFAULT 0,
      rate_limit_rpm INTEGER DEFAULT 240,
      daily_usd_cap REAL DEFAULT 0,
      status TEXT DEFAULT 'active',
      created_at TEXT DEFAULT (datetime('now'))
    );
    CREATE INDEX IF NOT EXISTS idx_wallets_user ON agent_wallets(user_id);

    CREATE TABLE IF NOT EXISTS campaign_tasks (
      user_id TEXT NOT NULL,
      task TEXT NOT NULL,               -- follow | share
      reward_usd REAL NOT NULL,
      created_at TEXT DEFAULT (datetime('now')),
      PRIMARY KEY (user_id, task)
    );

    -- Every OUTBOUND vendor call the service makes: inference upstreams
    -- (jatevo/ark/wafer/deepseek), the X API, Exa, DexScreener. Admin-only
    -- surface at /admin/vendors. cost_est_usd is an ESTIMATE from list
    -- prices where documented, null where the vendor invoice is unknown.
    CREATE TABLE IF NOT EXISTS vendor_requests (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      vendor TEXT NOT NULL,
      endpoint TEXT NOT NULL,
      status INTEGER,
      latency_ms INTEGER,
      user_id TEXT,
      tokens_in INTEGER,
      tokens_out INTEGER,
      cost_est_usd REAL,
      error TEXT,
      created_at TEXT DEFAULT (datetime('now'))
    );
    CREATE INDEX IF NOT EXISTS idx_vendor_req ON vendor_requests(vendor, created_at);

    CREATE TABLE IF NOT EXISTS api_keys (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      wallet_id TEXT,                          -- NULL = spends the main balance
      name TEXT NOT NULL,
      key TEXT NOT NULL UNIQUE,
      created_at TEXT DEFAULT (datetime('now')),
      last_used_at TEXT,
      revoked_at TEXT
    );
    CREATE INDEX IF NOT EXISTS idx_api_keys_user ON api_keys(user_id);

    -- Every Privy sign-in lands here, INCLUDING the ones that never link X and
    -- so never get a users row. Those are the funnel drop-offs — the accounts
    -- we most want to be able to reach — and they were previously invisible.
    -- user_id fills in if/when the same DID completes onboarding.
    CREATE TABLE IF NOT EXISTS contacts (
      privy_did TEXT PRIMARY KEY,
      email TEXT,
      source TEXT,                             -- email_login | google | linkedin | github
      user_id TEXT,
      created_at TEXT DEFAULT (datetime('now')),
      updated_at TEXT DEFAULT (datetime('now'))
    );
    CREATE INDEX IF NOT EXISTS idx_contacts_email ON contacts(email);
  `);

  // Prompt-cache READ tokens (Aug 17 2026): the part of tokens_in the serving
  // route reported as cached. Billed at the catalog's cache-read rate where
  // one is published (the fast tier's $0.07), so the ledger must carry the
  // split or a settlement can't be audited against its rate. Additive and
  // idempotent; both tables pre-date the column on the live DB.
  for (const t of ["api_requests", "credit_transactions"]) {
    if (!cols(t).includes("tokens_cached")) d.run(`ALTER TABLE ${t} ADD COLUMN tokens_cached INTEGER DEFAULT 0`);
  }

  // One-time carry-over of the fixed-slot keys into the table, then the
  // legacy columns are cleared so a rotation can never leave a live twin.
  // Idempotent: INSERT OR IGNORE on the unique key + the columns end up NULL.
  const legacyUsers = d.query("SELECT id, api_key, api_key_created_at FROM users WHERE api_key IS NOT NULL").all() as any[];
  for (const u of legacyUsers) {
    d.run("INSERT OR IGNORE INTO api_keys (id, user_id, wallet_id, name, key, created_at) VALUES (?, ?, NULL, 'Card key', ?, COALESCE(?, datetime('now')))",
      [crypto.randomUUID().replace(/-/g, "").slice(0, 16), u.id, u.api_key, u.api_key_created_at]);
    d.run("UPDATE users SET api_key = NULL WHERE id = ?", [u.id]);
  }
  const legacyLanes = d.query("SELECT id, user_id, purpose, api_key FROM agent_wallets WHERE api_key IS NOT NULL AND status = 'active'").all() as any[];
  for (const w of legacyLanes) {
    const name = w.purpose === "inference" ? "Inference lane" : "Developer tools lane";
    d.run("INSERT OR IGNORE INTO api_keys (id, user_id, wallet_id, name, key) VALUES (?, ?, ?, ?, ?)",
      [crypto.randomUUID().replace(/-/g, "").slice(0, 16), w.user_id, w.id, name, w.api_key]);
    d.run("UPDATE agent_wallets SET api_key = NULL WHERE id = ?", [w.id]);
  }

  allocateMainKeysToLanes(d);
}

// ── Main is a pool, not a spending balance (Aug 13 2026) ──
// A key scoped to `main` was a credential pointing at the funding pool: it let
// inference bill the card balance directly, so the two lanes metered nothing
// that mattered — 72% of all lifetime spend ($53.59 of $74.17) bypassed them.
// Keys are lane-scoped from here on, so every live main key is re-pointed at
// its owner's Inference lane and that owner's main balance is allocated behind
// it in one auditable transfer. Re-pointing rather than refusing is deliberate:
// 26 of these keys carry live traffic and would have 402'd the second the rule
// landed, against lanes that start at $0.
//
// Idempotent by construction: it selects only `wallet_id IS NULL` rows, and
// leaves none behind. Keys whose owner no longer exists are revoked, not
// re-pointed — they belong to purged throwaways and already 401 at the gateway.
function allocateMainKeysToLanes(d: any) {
  const orphans = d.query(
    `SELECT id FROM api_keys k WHERE k.revoked_at IS NULL AND k.wallet_id IS NULL
       AND NOT EXISTS (SELECT 1 FROM users u WHERE u.id = k.user_id)`
  ).all() as any[];
  for (const o of orphans) {
    d.run("UPDATE api_keys SET revoked_at = datetime('now') WHERE id = ?", [o.id]);
  }

  const stranded = d.query(
    `SELECT DISTINCT k.user_id AS user_id FROM api_keys k JOIN users u ON u.id = k.user_id
      WHERE k.revoked_at IS NULL AND k.wallet_id IS NULL`
  ).all() as any[];
  if (!stranded.length) return;

  for (const s of stranded) {
    // ensurePurposeWallets is lazy — only 169 of 449 carded accounts had ever
    // opened /wallets, so most of these users have no lane to re-point onto yet.
    const lanes = ensurePurposeWallets(s.user_id, false) as any[];
    const lane = lanes.find((w) => w.purpose === "inference");
    if (!lane) continue; // no lane, no safe target — leave the key for the next boot

    const keys = d.query(
      "SELECT id, name FROM api_keys WHERE user_id = ? AND revoked_at IS NULL AND wallet_id IS NULL"
    ).all(s.user_id) as any[];
    for (const k of keys) {
      d.run("UPDATE api_keys SET wallet_id = ? WHERE id = ?", [lane.id, k.id]);
    }

    // The credits follow the key, through the ordinary transfer path so the
    // ledger reads as a normal allocation rather than a hand-written row.
    const bal = getUser(s.user_id)?.usd_balance || 0;
    if (bal > 0) fundAgentWallet(s.user_id, lane.id, bal);

    d.run(
      "INSERT INTO admin_events (action, target_user_id, detail) VALUES ('lane_allocation', ?, ?)",
      [s.user_id, `${keys.length} main key(s) re-pointed to the Inference lane; $${bal.toFixed(6)} allocated from main`]
    );
  }
}

// Fire-and-forget vendor telemetry — must never fail a real call. Prunes
// itself past 30 days on a small fraction of writes.
export function traceVendor(o: {
  vendor: string; endpoint: string; status?: number | null; latency_ms?: number | null;
  user_id?: string | null; tokens_in?: number | null; tokens_out?: number | null;
  cost_est_usd?: number | null; error?: string | null;
}) {
  try {
    const d = getDb();
    d.run(
      `INSERT INTO vendor_requests (vendor, endpoint, status, latency_ms, user_id, tokens_in, tokens_out, cost_est_usd, error)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [o.vendor, o.endpoint, o.status ?? null, o.latency_ms ?? null, o.user_id ?? null,
       o.tokens_in ?? null, o.tokens_out ?? null, o.cost_est_usd ?? null, o.error ? String(o.error).slice(0, 200) : null]
    );
    cableEmit({ t: "vendor", v: o.vendor, s: o.status ?? null });
    if (Math.random() < 0.002) d.run("DELETE FROM vendor_requests WHERE created_at < datetime('now', '-30 days')");
  } catch (err) {
    console.error("vendor trace failed:", err);
  }
}

// Successful vendor calls a user has made through a playground demo in the
// last 24h — the daily cap for operator-paid demo tools reads this, so the
// cap needs no table of its own and survives restarts.
export function vendorCallsToday(userId: string, vendor: string, endpoint: string): number {
  const row: any = getDb()
    .query(
      `SELECT COUNT(*) AS n FROM vendor_requests
       WHERE user_id = ? AND vendor = ? AND endpoint = ? AND error IS NULL
         AND created_at > datetime('now', '-1 day')`
    )
    .get(userId, vendor, endpoint);
  return row?.n || 0;
}

// ─── Users ───
export function createUser(xData: any) {
  const db = getDb();
  const id = crypto.randomUUID();
  db.run(
    `INSERT INTO users (id, x_username, x_user_id, x_name, x_bio, x_followers, x_following,
     x_tweet_count, x_verified, x_avatar, x_location, x_url, x_created_at, rate_limit_rpm)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
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
      DEFAULT_RATE_LIMIT_RPM,
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

// Upsert the contact row for a Privy DID. Called on EVERY sign-in, before the
// X gate, so accounts that bounce out of onboarding are still reachable.
// Never blanks what it already holds: a later sign-in that carries no email
// (X-only session) must not erase an address captured earlier.
export function recordContact(privyDid: string, email?: string | null, source?: string | null, userId?: string | null) {
  if (!privyDid) return;
  const db = getDb();
  db.run(
    `INSERT INTO contacts (privy_did, email, source, user_id) VALUES (?, ?, ?, ?)
     ON CONFLICT(privy_did) DO UPDATE SET
       email      = COALESCE(excluded.email, contacts.email),
       source     = COALESCE(excluded.source, contacts.source),
       user_id    = COALESCE(excluded.user_id, contacts.user_id),
       updated_at = datetime('now')`,
    [privyDid, email || null, source || null, userId || null],
  );
}

export function getContact(privyDid: string) {
  return getDb().query("SELECT * FROM contacts WHERE privy_did = ?").get(privyDid) as any;
}

const USER_COLUMNS = new Set([
  "x_username","x_user_id","x_name","x_bio","x_followers","x_following","x_tweet_count",
  "x_verified","x_avatar","x_location","x_url","x_created_at",
  "github_username","github_name","github_bio","github_company","github_location",
  "github_followers","github_public_repos","github_languages","github_top_repos",
  "github_avatar","github_connected_at",
  "linkedin_name","linkedin_headline","linkedin_industry","linkedin_company",
  "linkedin_email","linkedin_avatar","linkedin_connected_at","linkedin_vanity","notif_seen_at",
  "score","score_tier","score_breakdown","scored_at",
  "github_orgs","github_activity","github_total_stars","github_created_at","linkedin_domain",
  "privy_user_id","wallet_address","solana_address","score_reasoning","score_log","score_reruns","referred_by",
  "email","email_source","email_captured_at",
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

// ─── Agent wallets: payment identities carved from the card balance ───

export function createAgentWallet(userId: string, name: string, withKey: boolean) {
  const db = getDb();
  const id = crypto.randomUUID();
  const key = withKey ? `vcard_a_${crypto.randomUUID().replace(/-/g, "")}` : null;
  db.run("INSERT INTO agent_wallets (id, user_id, name, api_key, rate_limit_rpm) VALUES (?, ?, ?, ?, ?)", [id, userId, name.slice(0, 40), key, DEFAULT_RATE_LIMIT_RPM]);
  return { ...db.query("SELECT * FROM agent_wallets WHERE id = ?").get(id) as any, key_reveal: key };
}

// The card divides into exactly two purpose wallets: inference (the model
// rail, billable today) and devtools (the metered catalog, opening soon).
export function ensurePurposeWallets(userId: string, withKeys: boolean) {
  const db = getDb();
  const have = db.query("SELECT purpose FROM agent_wallets WHERE user_id = ? AND status = 'active' AND purpose IS NOT NULL").all(userId) as any[];
  const purposes = new Set(have.map((r) => r.purpose));
  const mk = (purpose: string, name: string) => {
    const id = crypto.randomUUID();
    const key = withKeys ? `vcard_a_${crypto.randomUUID().replace(/-/g, "")}` : null;
    db.run("INSERT INTO agent_wallets (id, user_id, name, api_key, purpose, rate_limit_rpm) VALUES (?, ?, ?, ?, ?, ?)", [id, userId, name, key, purpose, DEFAULT_RATE_LIMIT_RPM]);
  };
  if (!purposes.has("inference")) mk("inference", "Inference");
  if (!purposes.has("devtools")) mk("devtools", "Developer tools");
  const rows = db.query("SELECT * FROM agent_wallets WHERE user_id = ? AND status = 'active' AND purpose IS NOT NULL ORDER BY purpose = 'inference' DESC").all(userId) as any[];
  // Keys flipped on after the lanes existed: backfill each keyless lane ONCE,
  // and hand the plaintext back exactly once as key_reveal on the row —
  // after this call only the prefix is ever available again.
  if (withKeys) {
    for (const r of rows) {
      if (!r.api_key) {
        const key = `vcard_a_${crypto.randomUUID().replace(/-/g, "")}`;
        db.run("UPDATE agent_wallets SET api_key = ? WHERE id = ?", [key, r.id]);
        r.api_key = key;
        r.key_reveal = key;
      }
    }
  }
  return rows;
}

export function listAgentWallets(userId: string) {
  return getDb().query("SELECT * FROM agent_wallets WHERE user_id = ? AND status != 'closed' ORDER BY created_at").all(userId) as any[];
}

export function getAgentWallet(id: string) {
  return getDb().query("SELECT * FROM agent_wallets WHERE id = ?").get(id) as any;
}

export function getAgentWalletByApiKey(key: string) {
  return getDb().query("SELECT * FROM agent_wallets WHERE api_key = ? AND status = 'active'").get(key) as any;
}

export function mintWalletKey(id: string): string | null {
  const w = getAgentWallet(id);
  if (!w || w.api_key) return null;
  const key = `vcard_a_${crypto.randomUUID().replace(/-/g, "")}`;
  getDb().run("UPDATE agent_wallets SET api_key = ? WHERE id = ?", [key, id]);
  return key;
}

// Main → wallet. Atomic within the synchronous sqlite call chain.
export function fundAgentWallet(userId: string, walletId: string, usd: number): { ok: boolean; error?: string } {
  const db = getDb();
  const user = getUser(userId);
  const w = getAgentWallet(walletId);
  if (!w || w.user_id !== userId || w.status !== "active") return { ok: false, error: "wallet_not_found" };
  if (!(usd > 0)) return { ok: false, error: "bad_amount" };
  if ((user.usd_balance || 0) < usd) return { ok: false, error: "insufficient_main_balance" };
  db.run("UPDATE users SET usd_balance = usd_balance - ? WHERE id = ?", [usd, userId]);
  db.run("UPDATE agent_wallets SET usd_balance = usd_balance + ? WHERE id = ?", [usd, walletId]);
  // balance_after on BOTH sides — transfers used to leave it NULL, which made
  // the ledger unauditable as a running chain (found by scripts/ledger-audit)
  db.run("INSERT INTO credit_transactions (user_id, type, amount_usd, balance_after, description) VALUES (?, 'transfer', ?, ?, ?)",
    [userId, -usd, (user.usd_balance || 0) - usd, `Transfer to wallet: ${w.name}`]);
  db.run("INSERT INTO credit_transactions (user_id, wallet_id, type, amount_usd, balance_after, description) VALUES (?, ?, 'transfer', ?, ?, ?)",
    [userId, walletId, usd, (w.usd_balance || 0) + usd, `Funded from main`]);
  return { ok: true };
}

// Wallet → main, everything. Used by sweep and close.
export function sweepAgentWallet(userId: string, walletId: string): { ok: boolean; swept?: number; error?: string } {
  const db = getDb();
  const w = getAgentWallet(walletId);
  if (!w || w.user_id !== userId) return { ok: false, error: "wallet_not_found" };
  const amt = w.usd_balance || 0;
  if (amt > 0) {
    db.run("UPDATE agent_wallets SET usd_balance = 0 WHERE id = ?", [walletId]);
    db.run("UPDATE users SET usd_balance = usd_balance + ? WHERE id = ?", [amt, userId]);
    const mainAfter = ((getUser(userId)?.usd_balance) ?? 0);
    db.run("INSERT INTO credit_transactions (user_id, wallet_id, type, amount_usd, balance_after, description) VALUES (?, ?, 'transfer', ?, 0, ?)",
      [userId, walletId, -amt, `Swept to main`]);
    db.run("INSERT INTO credit_transactions (user_id, type, amount_usd, balance_after, description) VALUES (?, 'transfer', ?, ?, ?)",
      [userId, amt, mainAfter, `Sweep from wallet: ${w.name}`]);
  }
  return { ok: true, swept: amt };
}

export function closeAgentWallet(userId: string, walletId: string): { ok: boolean; error?: string } {
  const s = sweepAgentWallet(userId, walletId);
  if (!s.ok) return s;
  getDb().run("UPDATE agent_wallets SET status = 'closed' WHERE id = ?", [walletId]);
  return { ok: true };
}

// Wallet spend mirrors consumeCredits: wallet balance pays, the OWNER row
// keeps the lifetime aggregates so /burn/stats and the card stay truthful.
// The public wallet truncation — the one shape a consumer address ever
// takes off-server (burn/stats rows, the settle stream, the toast).
export function truncWallet(addr: string | null | undefined): string | null {
  return addr && addr.length > 12 ? addr.slice(0, 6) + "…" + addr.slice(-4) : addr || null;
}

// Push a sanitized settle event onto the in-process bus the instant the
// ledger row lands: the public /burn/stream (settlement toast) and the
// cable's burn pulse both ride it. Same discipline as metering — telemetry
// never fails a call.
function settleEmit(o: { wallet?: string | null; agent?: string | null; model: string; tokensIn: number; tokensOut: number; costUsd: number; vantisBurned: number }) {
  try {
    cableEmit({
      t: "settle",
      ts: Math.floor(Date.now() / 1000),
      consumer: truncWallet(o.wallet),
      agent: o.agent || null,
      model: o.model,
      tokens_in: o.tokensIn,
      tokens_out: o.tokensOut,
      cost_usd: o.costUsd,
      vantis_burned: o.vantisBurned,
    });
  } catch {}
}

export function consumeWalletCredits(
  walletId: string,
  amountUsd: number,
  model: string,
  tokensIn: number,
  tokensOut: number,
  vantisBurned: number,
  vantisPrice: number,
  tokensCached = 0
) {
  const db = getDb();
  const w = getAgentWallet(walletId);
  if (!w) return { ok: false as const, error: "wallet_not_found" };
  const available = w.usd_balance || 0;
  const shortfall = Math.max(0, amountUsd - available);
  if (shortfall > 0) {
    amountUsd = available;
    vantisBurned = vantisPrice > 0 ? available / vantisPrice : 0;
  }
  const newBalance = available - amountUsd;
  db.run("UPDATE agent_wallets SET usd_balance = ?, usd_consumed = usd_consumed + ?, vantis_burned = vantis_burned + ? WHERE id = ?",
    [newBalance, amountUsd, vantisBurned, walletId]);
  db.run("UPDATE users SET usd_consumed = COALESCE(usd_consumed,0) + ?, vantis_burned = COALESCE(vantis_burned,0) + ? WHERE id = ?",
    [amountUsd, vantisBurned, w.user_id]);
  db.run(
    `INSERT INTO credit_transactions
     (user_id, wallet_id, type, amount_usd, balance_after, model_used, tokens_in, tokens_out, tokens_cached, vantis_burned, vantis_price, description)
     VALUES (?, ?, 'consume', ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [w.user_id, walletId, -amountUsd, newBalance, model, tokensIn, tokensOut, tokensCached || 0, vantisBurned, vantisPrice,
     shortfall > 0 ? `Inference via ${w.name} (wallet exhausted mid-call)` : `Inference via ${w.name}: ${model}`]
  );
  settleEmit({ wallet: getUser(w.user_id)?.wallet_address, agent: w.name, model, tokensIn, tokensOut, costUsd: amountUsd, vantisBurned });
  return { ok: true as const, balance: newBalance, shortfall, totalBurned: vantisBurned };
}

export function consumeCredits(
  userId: string,
  amountUsd: number,
  model: string,
  tokensIn: number,
  tokensOut: number,
  vantisBurned: number,
  vantisPrice: number,
  tokensCached = 0
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
     (user_id, type, amount_usd, balance_after, model_used, tokens_in, tokens_out, tokens_cached, vantis_burned, vantis_price, description)
     VALUES (?, 'consume', ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      userId, -amountUsd, newBalance, model, tokensIn, tokensOut, tokensCached || 0, vantisBurned, vantisPrice,
      shortfall > 0 ? `Inference: ${model} (balance exhausted mid-call, $${shortfall.toFixed(6)} unbilled)` : `Inference: ${model}`,
    ]
  );
  settleEmit({ wallet: user.wallet_address, agent: null, model, tokensIn, tokensOut, costUsd: amountUsd, vantisBurned });
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
  const recentRaw = db
    .query(
      `SELECT t.model_used AS model, t.tokens_in, t.tokens_out, -t.amount_usd AS cost_usd,
              t.vantis_burned, t.vantis_price, t.created_at,
              u.wallet_address AS wallet, w.name AS agent
       FROM credit_transactions t
       LEFT JOIN users u ON u.id = t.user_id
       LEFT JOIN agent_wallets w ON w.id = t.wallet_id
       WHERE t.type = 'consume'
       ORDER BY t.created_at DESC LIMIT 20`
    )
    .all() as any[];
  // Public rows — the full wallet address never leaves the server; consumer is
  // truncated here exactly as the statistics tracker renders it. `ts` (epoch,
  // created_at is UTC) saves clients from parsing sqlite timestamps.
  const recent = recentRaw.map((r) => ({
    model: r.model,
    tokens_in: r.tokens_in,
    tokens_out: r.tokens_out,
    cost_usd: r.cost_usd,
    vantis_burned: r.vantis_burned,
    vantis_price: r.vantis_price,
    created_at: r.created_at,
    ts: Math.floor(Date.parse(String(r.created_at).slice(0, 19).replace(" ", "T") + "Z") / 1000),
    consumer: truncWallet(r.wallet),
    agent: r.agent || null,
  }));
  const cardCount = (db.query("SELECT COUNT(*) AS n FROM cards").get() as any).n;
  const grantedUsd = (db.query("SELECT COALESCE(SUM(usd_granted),0) AS s FROM users").get() as any).s;
  // Aggregates the public payments tracker mirrors — totals only, never rows.
  const tok = db
    .query("SELECT COALESCE(SUM(tokens_in),0) i, COALESCE(SUM(tokens_out),0) o FROM credit_transactions WHERE type = 'consume'")
    .get() as any;
  const gateway = (db.query("SELECT COUNT(*) AS n FROM api_requests").get() as any).n;
  const outcomes = db
    .query("SELECT outcome, COUNT(*) AS calls FROM api_requests GROUP BY outcome ORDER BY calls DESC")
    .all() as any[];
  return {
    vantis_burned_total: totals.vantis,
    usd_consumed_total: totals.usd,
    inference_calls: totals.calls,
    cards_issued: cardCount,
    usd_granted_total: grantedUsd,
    tokens_billed_total: (tok.i || 0) + (tok.o || 0),
    gateway_calls_total: gateway,
    gateway_outcomes: outcomes,
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
// A key that can actually spend. Keys are lane-scoped since Aug 13 2026, so
// this mints against the account's Inference lane and allocates whatever main
// holds behind it — main funds lanes, it does not pay for calls. Seeding and
// test helper only; the product mints through /api/keys/create, where the
// owner picks the lane themselves.
export function generateApiKey(userId: string) {
  const db = getDb();
  const lane = (ensurePurposeWallets(userId, false) as any[]).find((w) => w.purpose === "inference");
  if (!lane) throw new Error(`no inference lane for ${userId}`);
  const main = getUser(userId)?.usd_balance || 0;
  if (main > 0) fundAgentWallet(userId, lane.id, main);
  const existing = db
    .query("SELECT key FROM api_keys WHERE user_id = ? AND wallet_id = ? AND revoked_at IS NULL ORDER BY created_at LIMIT 1")
    .get(userId, lane.id) as any;
  if (existing?.key) return existing.key;
  const apiKey = `vcard_${crypto.randomUUID().replace(/-/g, "")}`;
  db.run("INSERT INTO api_keys (id, user_id, wallet_id, name, key) VALUES (?, ?, ?, 'Inference lane', ?)",
    [crypto.randomUUID().replace(/-/g, "").slice(0, 16), userId, lane.id, apiKey]);
  return apiKey;
}

// Self-service rotation — a NEW key every call; the old one dies instantly.
// The plaintext is returned exactly once, to the response that rotated it.
// ── named multi-key management (the api_keys table) ──
// A key never exists unless its owner created it; the plaintext leaves the
// server exactly once, in the response of the call that minted it.

export const MAX_ACTIVE_KEYS = 10;

export function listApiKeys(userId: string) {
  return getDb().query(
    "SELECT id, wallet_id, name, key, created_at, last_used_at FROM api_keys WHERE user_id = ? AND revoked_at IS NULL ORDER BY created_at, ROWID"
  ).all(userId) as any[];
}

export function getApiKeyRow(key: string) {
  return getDb().query("SELECT * FROM api_keys WHERE key = ? AND revoked_at IS NULL").get(key) as any;
}

export function getApiKeyById(id: string) {
  return getDb().query("SELECT * FROM api_keys WHERE id = ? AND revoked_at IS NULL").get(id) as any;
}

export function countActiveKeys(userId: string): number {
  return (getDb().query("SELECT COUNT(*) n FROM api_keys WHERE user_id = ? AND revoked_at IS NULL").get(userId) as any).n;
}

export function createApiKeyRow(userId: string, walletId: string | null, name: string) {
  const id = crypto.randomUUID().replace(/-/g, "").slice(0, 16);
  const key = walletId
    ? `vcard_a_${crypto.randomUUID().replace(/-/g, "")}`
    : `vcard_${crypto.randomUUID().replace(/-/g, "")}`;
  getDb().run("INSERT INTO api_keys (id, user_id, wallet_id, name, key) VALUES (?, ?, ?, ?, ?)", [id, userId, walletId, name, key]);
  return { id, key };
}

export function rotateApiKeyRow(id: string): string {
  const row = getApiKeyById(id);
  const key = row?.wallet_id
    ? `vcard_a_${crypto.randomUUID().replace(/-/g, "")}`
    : `vcard_${crypto.randomUUID().replace(/-/g, "")}`;
  getDb().run("UPDATE api_keys SET key = ?, created_at = datetime('now') WHERE id = ?", [key, id]);
  return key;
}

export function revokeApiKeyRow(id: string) {
  getDb().run("UPDATE api_keys SET revoked_at = datetime('now') WHERE id = ?", [id]);
}

export function touchApiKey(id: string) {
  try { getDb().run("UPDATE api_keys SET last_used_at = datetime('now') WHERE id = ?", [id]); } catch {}
}

export function rotateUserKey(userId: string): string {
  const apiKey = `vcard_${crypto.randomUUID().replace(/-/g, "")}`;
  getDb().run("UPDATE users SET api_key = ?, api_key_created_at = datetime('now') WHERE id = ?", [apiKey, userId]);
  return apiKey;
}

export function rotateWalletKey(walletId: string): string {
  const key = `vcard_a_${crypto.randomUUID().replace(/-/g, "")}`;
  getDb().run("UPDATE agent_wallets SET api_key = ? WHERE id = ?", [key, walletId]);
  return key;
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
  tokens_cached?: number; // prompt-cache READ part of tokens_in, as the route reported it
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
     (user_id, key_prefix, endpoint, method, model, status, outcome, tokens_in, tokens_out, tokens_cached,
      cost_usd, vantis_burned, latency_ms, ip, ua, error)
     VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
    [
      r.user_id || null, r.key_prefix || null, r.endpoint, r.method || "POST", r.model || null,
      r.status, r.outcome, r.tokens_in || 0, r.tokens_out || 0, r.tokens_cached || 0, r.cost_usd || 0,
      r.vantis_burned || 0, r.latency_ms ?? null, r.ip || null, (r.ua || "").slice(0, 200) || null,
      (r.error || "").slice(0, 300) || null,
    ]
  );
  if (r.user_id) {
    getDb().run("UPDATE users SET last_seen_at = datetime('now') WHERE id = ?", [r.user_id]);
  }
  try {
    cableEmit({ t: "api", o: r.outcome, b: r.vantis_burned || 0 });
  } catch {}
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

// The frontier-pool allowlist (see the pool_access migration note): flipped
// only by the /admin approve action, never by product code.
export function setPoolAccess(userId: string, on: boolean) {
  getDb().run("UPDATE users SET pool_access = ?, updated_at = datetime('now') WHERE id = ?", [on ? 1 : 0, userId]);
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

// Operator rotation: every active named key dies and one replacement is issued
// on the Inference lane, revealed once to the operator who asked.
//
// Until Aug 13 2026 this wrote the legacy users.api_key column — which the boot
// migration NULLs on every start and which the gateway refuses on scope. Real
// users' keys live in api_keys, so an operator answering a leaked credential
// was invalidating nothing while the console reported success. Rotation has to
// reach the credentials the gateway actually honors.
export function rotateApiKey(userId: string) {
  const db = getDb();
  const lane = (ensurePurposeWallets(userId, false) as any[]).find((w) => w.purpose === "inference");
  if (!lane) throw new Error(`no inference lane for ${userId}`);
  db.run("UPDATE api_keys SET revoked_at = datetime('now') WHERE user_id = ? AND revoked_at IS NULL", [userId]);
  const key = `vcard_${crypto.randomUUID().replace(/-/g, "")}`;
  db.run("INSERT INTO api_keys (id, user_id, wallet_id, name, key) VALUES (?, ?, ?, 'Operator-issued', ?)",
    [crypto.randomUUID().replace(/-/g, "").slice(0, 16), userId, lane.id, key]);
  db.run("UPDATE users SET api_key = NULL, api_key_created_at = NULL WHERE id = ?", [userId]);
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
  const where = opts.q ? "WHERE u.x_username LIKE ? OR u.x_name LIKE ? OR u.email LIKE ?" : "";
  const params = opts.q ? [like, like, like, limit] : [limit];
  return getDb().query(
    `SELECT u.id, u.x_username, u.x_name, u.email, u.email_source, u.score, u.score_tier, u.status,
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

// The contactable list, spine = contacts (a superset of users: it also holds
// the accounts that signed in and never linked X). stage says how far each one
// got, so a send can be aimed at drop-offs without hitting carded users.
export function adminContacts() {
  return getDb().query(
    `SELECT COALESCE(c.email, u.email) AS email,
            COALESCE(c.source, u.email_source) AS source,
            u.x_username, u.score, u.score_tier, cd.handle,
            CASE WHEN cd.id IS NOT NULL THEN 'carded'
                 WHEN u.id IS NOT NULL THEN 'signed_up'
                 ELSE 'lead' END AS stage,
            c.created_at
     FROM contacts c
     LEFT JOIN users u ON u.id = c.user_id
     LEFT JOIN cards cd ON cd.user_id = u.id
     WHERE COALESCE(c.email, u.email) IS NOT NULL AND COALESCE(c.email, u.email) != ''
     ORDER BY c.created_at DESC`
  ).all() as any[];
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
