# Vantis Cards

**Connect your profiles → Get scored → Receive $VANTIS credits → Build on the Vantis inference rail**

Vantis Cards is the Vantis port of the jtvo-card onboarding system ([jtvo-card](https://github.com/lucacadalora/jtvo-card)) — same mechanics, with the Vantis twist: developers connect X (required), GitHub, and LinkedIn; an AI agent scores their profile with web enrichment; they receive **$5–25 in $VANTIS credits** usable on real inference. Every call bills its **actual inference cost** and **virtually burns $VANTIS** at the live market price.

The rail serves exactly one model: **DeepSeek V4 Flash 0731**, billed at its published first-party rate of **$0.14 / 1M input** and **$0.28 / 1M output**. Off-roster model ids are refused, not rerouted.

Live: **https://card.vantis.sh**

## The Burn Mechanic

- Ledger is **USD internally**, branded **$VANTIS externally**.
- Per call: real usage from the completed response → USD cost at the V4 Flash 0731 list price → converted to VANTIS at the **live DexScreener deepest-pool price** (canonical CA `0xB6d6…762B` on Robinhood Chain, same selection rule as vantis.sh/burns) → recorded as a virtual burn with the price snapshot.
- Global ticker at `/burn/stats`; per-user lifetime burn on the card page.
- Price failure ladder: 60s in-memory cache → last successful price persisted in SQLite → ship-time constant. Billing never dies because a price API hiccuped.
- **Honesty rule (do not remove):** every user-facing surface states this is a virtual off-chain ledger — no tokens transferred or destroyed, no monetary value, redeemable only against inference. On-chain burns belong to vantis.sh/burns.

## How It Works

```
1. Visit card.vantis.sh/onboard
2. Connect X (required — identity, anti-bot); GitHub/LinkedIn optional (+score)
3. AI research agent runs:
   ├── OAuth profile data (GitHub repos, X followers, LinkedIn role)
   ├── Exa web enrichment (press, HN/Reddit reputation, company signals)
   └── Model scoring (5 dimensions → score 0-100) — real inference on the rail
4. Score → tier → $5-25 in $VANTIS credits granted
5. Card generated (Vantis-branded, shareable on X) + API key
6. POST card.vantis.sh/v1/chat/completions (OpenAI-compatible, non-streaming)
   → real inference → USD cost → virtual $VANTIS burn at live price
```

## Tiers

| Tier | Score | Credits |
|------|-------|---------|
| Whale | 80-100 | $25 in $VANTIS |
| Builder | 60-79 | $15 in $VANTIS |
| Explorer | 40-59 | $10 in $VANTIS |
| Noise | 0-39 | $5 in $VANTIS |

Scoring dimensions (0-20 each): technical depth, influence, purchasing power, crypto native, real-world signals.

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/` | Landing + live burn ticker |
| GET | `/onboard` | Onboarding page |
| GET/POST | `/onboard/score` | Score page / run scoring (idempotent per user) |
| GET | `/onboard/status/:uid` | Onboarding status |
| GET | `/oauth/connect/{twitter,github,linkedin}` | Start OAuth (503 page until the app is registered) |
| GET | `/oauth/{twitter,github,linkedin}/callback` | OAuth callbacks |
| GET | `/card/:handle` | Card page |
| GET | `/burn/stats` | Public virtual-burn stats + pricing + live price |
| GET | `/v1/models` | The single model + its pricing |
| GET | `/v1/balance` | Balance (Bearer key) |
| POST | `/v1/chat/completions` | Inference proxy with burn settlement (Bearer key) |

## Ops (this VM)

- Service: `vantis-card.service` (systemd) → bun on `127.0.0.1:8240`, logs `/var/log/vantis-card.log`
- Env: unit loads `~/.openclaw/secrets/exa.env` (enrichment), then project `.env` (inference route + OAuth)
- nginx: `card.vantis.sh` vhost (CF-only origin, UA shield on pages, **no UA shield on `/v1/`** so API clients pass; per-IP rate caps everywhere)
- DB: SQLite at `data/vantis-cards.db` (gitignored)
- Tests: `bun run scripts/e2e-live.ts run|score|cleanup` — `run` seeds a throwaway user and makes a REAL paid inference call; always `cleanup` after so public stats return to zero

## Inference route

The rail advertises one model, `deepseek-v4-flash-0731`. The upstream is resolved by priority in `server/upstream/index.ts`:

1. `DEEPSEEK_API_KEY` (+ optional `DEEPSEEK_BASE_URL`, `DEEPSEEK_MODEL`) — first-party, serves 0731 itself
2. `ARK_API_KEY` (+ `ARK_BASE_URL`, `ARK_MODEL`) — BytePlus ModelArk, which as of Aug 5 2026 carries only the `deepseek-v4-flash-260425` snapshot of V4 Flash; `0731` 404s there

**When the configured upstream is not on the target model, the product says so** — in `/burn/stats`, on the landing page, and as `vantis.model_served` in every completion. It never relabels a snapshot as 0731. Set `DEEPSEEK_API_KEY` and the whole thing flips to the real 0731 with no other change.

## Gotchas (learned the hard way)

- **V4 Flash is a reasoning model** — it spent ~1,250 reasoning tokens on a realistic scoring payload, so `max_tokens` needs real headroom or the JSON arrives truncated.
- Upstream can throw transient 502s — scoring retries once, then degrades to heuristic scoring (never blocks onboarding).
- Scoring still extracts the outermost `{...}` from the response rather than trusting the fence, since JSON mode is not universally honoured across providers.
- bun install must bypass the Tencent npm mirror (`.npmrc`/`bunfig.toml` in repo pin registry.npmjs.org).
- Costs are rounded to 6dp — 2dp rounds every normal call to $0.00 (bug in the original skeleton).
- X PKCE: real S256 verifier stored in `oauth_states.code_verifier`; uid rides in `oauth_states.user_id` because providers only echo `state`.

## OAuth Registration (to flip providers on)

Set the pair in `.env`, `sudo systemctl restart vantis-card` — the onboard page picks it up automatically:

1. **GitHub** — github.com/settings/developers → callback `https://card.vantis.sh/oauth/github/callback` → `GITHUB_OAUTH_CLIENT_ID/SECRET`
2. **X** — developer.x.com (OAuth 2.0) → callback `https://card.vantis.sh/oauth/twitter/callback` → `X_OAUTH_CLIENT_ID/SECRET`
3. **LinkedIn** — linkedin.com/developers (1-5 day review) → callback `https://card.vantis.sh/oauth/linkedin/callback` → `LINKEDIN_OAUTH_CLIENT_ID/SECRET`

## License

Proprietary — Vantis / Luca Cada Lora

---

Part of the [Vantis](https://vantis.sh) line.
