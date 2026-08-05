-- Vantis Cards Database Schema
-- SQLite. Ledger is USD internally, branded $VANTIS externally.
-- Virtual burn: every inference call converts its USD cost to VANTIS at the
-- live market price and records it. Nothing touches the chain.

CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
  x_username TEXT UNIQUE NOT NULL,
  x_user_id TEXT,
  x_name TEXT,
  x_bio TEXT,
  x_followers INTEGER DEFAULT 0,
  x_following INTEGER DEFAULT 0,
  x_tweet_count INTEGER DEFAULT 0,
  x_verified TEXT,
  x_avatar TEXT,
  x_location TEXT,
  x_url TEXT,
  x_created_at TEXT,
  -- GitHub (optional)
  github_username TEXT,
  github_name TEXT,
  github_bio TEXT,
  github_company TEXT,
  github_location TEXT,
  github_followers INTEGER DEFAULT 0,
  github_public_repos INTEGER DEFAULT 0,
  github_languages TEXT, -- JSON array
  github_top_repos TEXT, -- JSON array
  github_avatar TEXT,
  github_connected_at TEXT,
  -- LinkedIn (optional)
  linkedin_name TEXT,
  linkedin_headline TEXT,
  linkedin_industry TEXT,
  linkedin_company TEXT,
  linkedin_email TEXT,
  linkedin_avatar TEXT,
  linkedin_connected_at TEXT,
  -- Scoring
  score INTEGER DEFAULT 0,
  score_tier TEXT, -- whale / builder / explorer / noise
  score_breakdown TEXT, -- JSON
  scored_at TEXT,
  -- Credits (USD internally, displayed as $VANTIS at live price)
  usd_balance REAL DEFAULT 0,
  usd_granted REAL DEFAULT 0,
  usd_consumed REAL DEFAULT 0,
  vantis_burned REAL DEFAULT 0, -- lifetime virtual burn, in VANTIS
  -- API
  api_key TEXT UNIQUE,
  api_key_created_at TEXT,
  -- Meta
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now'))
);

-- OAuth state tracking (PKCE + state). user_id carries the uid across the
-- provider round-trip — providers only echo `state`, never our query params.
CREATE TABLE IF NOT EXISTS oauth_states (
  state TEXT PRIMARY KEY,
  platform TEXT NOT NULL, -- github / twitter / linkedin
  user_id TEXT,
  code_verifier TEXT,
  redirect_uri TEXT,
  created_at TEXT DEFAULT (datetime('now')),
  expires_at TEXT
);

-- Exa enrichment results (cached)
CREATE TABLE IF NOT EXISTS exa_enrichments (
  id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
  user_id TEXT NOT NULL,
  query TEXT,
  results TEXT, -- JSON
  created_at TEXT DEFAULT (datetime('now')),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Credit transactions (audit log + virtual burn ledger).
-- type=consume rows carry the burn: vantis_burned + the price snapshot used.
CREATE TABLE IF NOT EXISTS credit_transactions (
  id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
  user_id TEXT NOT NULL,
  type TEXT NOT NULL, -- grant / consume / topup / refund
  amount_usd REAL NOT NULL, -- positive = credit added, negative = consumed
  balance_after REAL,
  description TEXT,
  model_used TEXT,
  tokens_in INTEGER,
  tokens_out INTEGER,
  vantis_burned REAL,   -- VANTIS virtually burned by this call (consume only)
  vantis_price REAL,    -- USD price snapshot used for the conversion
  created_at TEXT DEFAULT (datetime('now')),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Cards (generated per user, shareable)
CREATE TABLE IF NOT EXISTS cards (
  id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
  user_id TEXT NOT NULL UNIQUE,
  handle TEXT NOT NULL, -- @luca
  card_url TEXT, -- card.vantis.sh/card/<handle>
  tier TEXT,
  grant_usd REAL,
  grant_vantis REAL,     -- VANTIS equivalent at grant time
  price_at_grant REAL,   -- USD price snapshot at grant time
  design_variant TEXT,
  shared_at TEXT,
  created_at TEXT DEFAULT (datetime('now')),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Small key/value store (persisted last-known VANTIS price, counters)
CREATE TABLE IF NOT EXISTS meta (
  k TEXT PRIMARY KEY,
  v TEXT
);

CREATE INDEX IF NOT EXISTS idx_users_x_username ON users(x_username);
CREATE INDEX IF NOT EXISTS idx_users_api_key ON users(api_key);
CREATE INDEX IF NOT EXISTS idx_credit_tx_user ON credit_transactions(user_id);
CREATE INDEX IF NOT EXISTS idx_credit_tx_type ON credit_transactions(type);
CREATE INDEX IF NOT EXISTS idx_cards_handle ON cards(handle);
