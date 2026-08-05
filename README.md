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

## Design system

The site mirrors the byteplus.com/en UI/UX idiom, expressed in Vantis tokens.

- `server/system.ts` — `SYSTEM_CSS`: the component vocabulary. Sticky white nav, full-pill buttons (primary = ink with signal-green label), alternating white / `--wash` section rhythm, the dark developer panel, the bento pair, grouped catalogue rows, trust strip, closing CTA band, plus the responsive rules (1000px and 620px breakpoints).
- `server/code.ts` — a dependency-free tokenising syntax highlighter for the shell and JSON samples in the developer panel. Tokenised rather than chained regexes: chained replaces re-match the quotes inside the HTML they just emitted.
- `server/pages.ts` — `cardObject()` + `CARD_CSS` render the 3D card; the landing hero and `/card/:handle` share them. Size the card with `--card-w`.

**Gotcha that cost real time:** `CARD_CSS` is spliced out of a larger stylesheet. When its trailing `@media (prefers-reduced-motion)` block lost its closing brace, the CSS parser silently swallowed *every rule after it* — the page still looked mostly styled because the earlier system rules had already applied. If components mysteriously lose their styling, check brace balance first:

```bash
node -e 'const s=require("fs").readFileSync("server/pages.ts","utf8");const i=s.indexOf("export const CARD_CSS = `"),j=s.indexOf("`;",i),b=s.slice(i,j);console.log(b.split("{").length-1,"open /",b.split("}").length-1,"close")'
```

## Ops (this VM)

- Service: `vantis-card.service` (systemd) → bun on `127.0.0.1:8240`, logs `/var/log/vantis-card.log`
- Env: unit loads `~/.openclaw/secrets/exa.env` (enrichment), then project `.env` (inference route + OAuth)
- nginx: `card.vantis.sh` vhost (CF-only origin, UA shield on pages, **no UA shield on `/v1/`** so API clients pass; per-IP rate caps everywhere)
- DB: SQLite at `data/vantis-cards.db` (gitignored)
- Tests: `bun run scripts/e2e-live.ts run|score|cleanup` — `run` seeds a throwaway user and makes a REAL paid inference call; always `cleanup` after so public stats return to zero
- Page audit: `node scripts/page-audit.js [baseUrl]` — renders at 390/820/1440 in Chrome and asserts no horizontal overflow, no console errors, live data actually bound, honesty block present, no provider name, no emoji, mobile tap targets, and WCAG AA contrast with real alpha compositing (translucent tiles over gradients are composited, not assumed opaque)

## Gateway & admin console

`https://card.vantis.sh/admin` — operator console over the metered gateway. Light theme, same design system as the public site.

**Metering.** Every request to `/v1/chat/completions` writes an `api_requests` row whether it succeeded or was refused: user, key prefix, model, status, outcome, tokens in/out, cost, $VANTIS burned, latency, IP and UA. Outcomes are `ok`, `unauthorized`, `suspended`, `rate_limited`, `daily_cap`, `insufficient_credits`, `unsupported_model`, `bad_request`, `upstream_error`. `credit_transactions` remains the settlement ledger; `api_requests` is the traffic record — the two answer different questions and both are shown per user.

**Enforcement** (`server/gateway.ts`), cheapest check first: key → account status → per-key rate limit → daily spend cap. Rate limiting is an in-process sliding window keyed on the API key, and responses carry `X-RateLimit-Limit` / `X-RateLimit-Remaining`, plus `Retry-After` on a 429. **If this service is ever run as more than one process, the limiter must move to a shared store** — each process would otherwise grant the full allowance independently.

**Admin auth.** The login is one field. `VANTIS_CARD_ADMIN_EMAIL` is shown on the page as the fixed operator identity and submitted automatically; the operator types only `VANTIS_CARD_ADMIN_TOKEN`. Both are still validated server-side with timing-safe equality, and a mismatch on either returns the same `invalid_credentials`. A valid pair mints an HMAC-signed 12-hour cookie keyed on `VANTIS_CARD_ADMIN_SECRET`. All three values live in `.env`.

The email is an identity label here, not a credential — the token is the only thing that grants access.

**Cloudflare gotcha:** the zone has Email Address Obfuscation on, which silently rewrote the operator email in the page into a `[email protected]` link at the edge — correct locally, broken in production. The email is therefore wrapped in Cloudflare's documented `<!--email_off-->` markers. Any future literal email in served HTML needs the same treatment; the zone setting cannot be flipped from this box because the API token is DNS-scoped only. Login is throttled to 8 attempts per IP per 15 minutes, and every mutation writes an `admin_events` row.

**A live API key is never returned by any admin endpoint** — only a 12-character prefix. The one exception is the moment of rotation, which returns the new key once to the operator who asked for it.

Actions: suspend/reactivate a key, rotate a key, adjust a balance (±$1000 cap per action, never below zero, always written to the ledger), set per-user rate limit and daily USD cap, and leave an operator note.

```bash
bun run scripts/admin-test.ts
```

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
