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
  }
  return db;
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
  if ((user.usd_balance || 0) < amountUsd) {
    return { ok: false as const, error: "insufficient_credits" };
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
    [userId, -amountUsd, newBalance, model, tokensIn, tokensOut, vantisBurned, vantisPrice, `Inference: ${model}`]
  );
  return { ok: true as const, balance: newBalance, totalBurned: newBurned };
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
