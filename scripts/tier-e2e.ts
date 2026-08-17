// Tier E2E — the two tiers of the DeepSeek rail, end to end through a running
// gateway with REAL upstream calls (fractions of a cent):
//   · standard id  → billed at the standard rate, X-Vantis-Tier: standard
//   · fast id      → served on the fast tier (model_served …-Fast), billed at
//                    the fast rate, X-Vantis-Tier: fast, no ZDR claim
//   · "zdr": true on the DEFAULT id from a NON-staging key → honoured
//                    (X-Vantis-ZDR: honored), served fast, billed fast
//   · repeated prompt on the fast tier → cached_tokens reported and billed at
//                    the cache-read rate (cost < all-fresh cost)
//   · "zdr": true on a GPT id → 400 zdr_unsupported_model (never silently dropped)
//   · streaming fast call → SSE tail carries tier + settlement at the fast rate
//   · ledger rows carry the BILLED catalog id and tokens_cached
//
//   VANTIS_CARD_BASE=http://127.0.0.1:8299 VANTIS_CARD_DB=/path/copy.db bun run scripts/tier-e2e.ts
//   bun run scripts/tier-e2e.ts cleanup
//
// Seeds a throwaway (non-staging, non-pool) carded user; purges it at the end.

import { getDb, createUser, getUserByX, grantCredits, generateApiKey, createCard } from "../server/db";
import { getVantisPrice, usdToVantis } from "../server/price";
import { calculateCost } from "../server/credits";
import { TARGET_MODEL, FAST_MODEL_ID, fastModel, defaultModel } from "../server/upstream";

const BASE = process.env.VANTIS_CARD_BASE || "http://127.0.0.1:8240";
const HANDLE = "tier_e2e_throwaway_delete_me";

let failures = 0;
const check = (name: string, ok: boolean, detail?: any) => {
  console.log(`${ok ? "PASS" : "FAIL"}  ${name}${detail !== undefined ? ` — ${JSON.stringify(detail)}` : ""}`);
  if (!ok) failures++;
};
const near = (a: number, b: number, tol = 1e-6) => Math.abs(a - b) <= tol;

function cleanup() {
  const db = getDb();
  const u = getUserByX(HANDLE);
  if (!u) return;
  db.run("DELETE FROM api_requests WHERE user_id = ?", [u.id]);
  db.run("DELETE FROM credit_transactions WHERE user_id = ?", [u.id]);
  db.run("DELETE FROM cards WHERE user_id = ?", [u.id]);
  db.run("DELETE FROM api_keys WHERE user_id = ?", [u.id]);
  db.run("DELETE FROM agent_wallets WHERE user_id = ?", [u.id]);
  db.run("DELETE FROM users WHERE id = ?", [u.id]);
  console.log(`   purged throwaway @${HANDLE}`);
}

async function seed() {
  cleanup();
  const u = createUser({ username: HANDLE, id: "0", name: "Tier Throwaway", public_metrics: {} });
  grantCredits(u.id, 1.0, "tier-e2e seed");
  const key = generateApiKey(u.id);
  const { price } = await getVantisPrice();
  createCard(u.id, `@${HANDLE}`, "builder", 1.0, usdToVantis(1.0, price), price);
  getDb().run("UPDATE users SET scored_at = datetime('now'), staging = 0, pool_access = 0 WHERE id = ?", [u.id]);
  return { user: getUserByX(HANDLE), key };
}

async function call(key: string, body: any, headers: Record<string, string> = {}) {
  const res = await fetch(`${BASE}/v1/chat/completions`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${key}`, ...headers },
    body: JSON.stringify(body),
  });
  const text = await res.text();
  let json: any = null;
  try { json = JSON.parse(text); } catch {}
  return { status: res.status, headers: res.headers, json, text };
}

async function run() {
  if (process.argv[2] === "cleanup") { cleanup(); return; }
  const health = await fetch(`${BASE}/health`).then((r) => r.json()).catch(() => null);
  check("health", !!health?.ok, health);

  const { user, key } = await seed();
  console.log(`   seeded throwaway @${HANDLE} (staging=0, pool=0) with $1.00, key ${key.slice(0, 12)}…`);
  const STD = defaultModel().rate, FAST = fastModel().rate;

  // 1. standard
  const a = await call(key, { model: TARGET_MODEL, messages: [{ role: "user", content: "Reply with the single word OK." }], max_tokens: 200, thinking: { type: "disabled" } });
  check("standard: 200", a.status === 200, a.status === 200 ? undefined : a.text.slice(0, 200));
  check("standard: X-Vantis-Tier: standard", a.headers.get("X-Vantis-Tier") === "standard", a.headers.get("X-Vantis-Tier"));
  check("standard: no X-Vantis-ZDR", a.headers.get("X-Vantis-ZDR") === null);
  const aTin = a.json?.usage?.prompt_tokens, aTout = a.json?.usage?.completion_tokens;
  check("standard: billed at standard rate", !!a.json?.vantis && near(a.json.vantis.cost_usd, calculateCost(aTin, aTout, STD)), { cost: a.json?.vantis?.cost_usd, expect: calculateCost(aTin, aTout, STD), tier: a.json?.vantis?.tier });
  check("standard: vantis.tier = standard", a.json?.vantis?.tier === "standard");

  // 2. fast id
  const b = await call(key, { model: FAST_MODEL_ID, messages: [{ role: "user", content: "Reply with the single word OK." }], max_tokens: 200, thinking: { type: "disabled" } });
  check("fast: 200", b.status === 200, b.status === 200 ? undefined : b.text.slice(0, 200));
  check("fast: X-Vantis-Tier: fast", b.headers.get("X-Vantis-Tier") === "fast", b.headers.get("X-Vantis-Tier"));
  check("fast: served on the fast tier (model_served …-Fast)", /0731-fast$/i.test(String(b.json?.vantis?.model_served || "")), b.json?.vantis?.model_served);
  check("fast: no ZDR claim without the flag", b.headers.get("X-Vantis-ZDR") === null);
  const bTin = b.json?.usage?.prompt_tokens, bTout = b.json?.usage?.completion_tokens;
  const bCached = b.json?.usage?.prompt_tokens_details?.cached_tokens || 0;
  check("fast: billed at the fast rate", !!b.json?.vantis && near(b.json.vantis.cost_usd, calculateCost(bTin, bTout, FAST, bCached)), { cost: b.json?.vantis?.cost_usd, expect: calculateCost(bTin, bTout, FAST, bCached), cached: bCached });
  check("fast: vantis.tier = fast", b.json?.vantis?.tier === "fast");

  // 3. ZDR on the default id from a NON-staging key
  const z = await call(key, { model: TARGET_MODEL, messages: [{ role: "user", content: "Reply with the single word OK." }], max_tokens: 200, zdr: true, thinking: { type: "disabled" } });
  check("zdr on default id: 200 for a non-staging key", z.status === 200, z.status === 200 ? undefined : z.text.slice(0, 200));
  check("zdr: X-Vantis-ZDR: honored", z.headers.get("X-Vantis-ZDR") === "honored", z.headers.get("X-Vantis-ZDR"));
  check("zdr: X-Vantis-Tier: fast", z.headers.get("X-Vantis-Tier") === "fast", z.headers.get("X-Vantis-Tier"));
  check("zdr: served on the fast tier", /0731-fast$/i.test(String(z.json?.vantis?.model_served || "")), z.json?.vantis?.model_served);
  const zTin = z.json?.usage?.prompt_tokens, zTout = z.json?.usage?.completion_tokens;
  const zCached = z.json?.usage?.prompt_tokens_details?.cached_tokens || 0;
  check("zdr: billed at the fast rate", !!z.json?.vantis && near(z.json.vantis.cost_usd, calculateCost(zTin, zTout, FAST, zCached)), { cost: z.json?.vantis?.cost_usd, expect: calculateCost(zTin, zTout, FAST, zCached) });
  // header form too
  const zh = await call(key, { model: TARGET_MODEL, messages: [{ role: "user", content: "Reply with the single word OK." }], max_tokens: 200, thinking: { type: "disabled" } }, { "X-ZDR": "required" });
  check("X-ZDR: required header form honoured", zh.status === 200 && zh.headers.get("X-Vantis-ZDR") === "honored", { status: zh.status, zdr: zh.headers.get("X-Vantis-ZDR") });

  // 4. cache billing: the same long prompt repeated on the fast tier. The tier
  // caches and reports prompt reads, but not on every repeat (replica warm-up
  // — measured Aug 17: 0, 0, then 11,008 of 11,215 on the third identical
  // call), so "a read was reported" is INFO; the billing math is asserted
  // whenever one is.
  const ctx = "Reference material:\n" + Array.from({ length: 400 }, (_, i) => `Paragraph ${i}. The quick brown fox jumps over the lazy dog near the riverbank at dawn while the miller counts sacks of grain. `).join("");
  const cbody = { model: FAST_MODEL_ID, messages: [{ role: "system", content: ctx }, { role: "user", content: "Reply with the single word OK." }], max_tokens: 200, thinking: { type: "disabled" } };
  let cHit: any = null, cAll = 0;
  for (let i = 0; i < 4 && !cHit; i++) {
    const r = await call(key, cbody);
    if (r.status === 200) cAll++;
    const cached = r.json?.usage?.prompt_tokens_details?.cached_tokens || 0;
    if (cached > 0) cHit = r;
  }
  check("cache: repeated calls 200", cAll >= 2, { ok: cAll });
  console.log(`INFO  cache: ${cHit ? `a repeat reported cached_tokens=${cHit.json.usage.prompt_tokens_details.cached_tokens} of ${cHit.json.usage.prompt_tokens}` : "no repeat reported a cache read this run (tier-side warm-up; billing path unexercised here)"}`);
  if (cHit) {
    const tin = cHit.json.usage.prompt_tokens, tout = cHit.json.usage.completion_tokens, cached = cHit.json.usage.prompt_tokens_details.cached_tokens;
    check("cache: billed at the cache-read rate (cost < all-fresh)", near(cHit.json.vantis.cost_usd, calculateCost(tin, tout, FAST, cached)) && cHit.json.vantis.cost_usd < calculateCost(tin, tout, FAST, 0), { cost: cHit.json.vantis.cost_usd, cacheAware: calculateCost(tin, tout, FAST, cached), allFresh: calculateCost(tin, tout, FAST, 0) });
    check("cache: response echoes tokens_cached", cHit.json.vantis.tokens_cached === cached, cHit.json.vantis.tokens_cached);
  }

  // 5. ZDR on a non-DeepSeek id → refused by name (this key is not on the pool, so pass pool=true semantics via a staging-free path: expect 400 zdr_unsupported_model OR 403 allowlist — the flag must never be silently dropped)
  const g = await call(key, { model: "gpt-5.4-mini", messages: [{ role: "user", content: "hi" }], max_tokens: 5, zdr: true });
  check("zdr on GPT id: refused, never served", g.status === 400 || g.status === 403, { status: g.status, code: g.json?.error?.code });

  // 6. streaming on the fast tier — tail carries tier + fast-rate settlement
  const sres = await fetch(`${BASE}/v1/chat/completions`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${key}` },
    body: JSON.stringify({ model: FAST_MODEL_ID, messages: [{ role: "user", content: "Count from 1 to 5, comma separated." }], max_tokens: 200, stream: true, stream_options: { include_usage: true }, thinking: { type: "disabled" } }),
  });
  check("stream fast: 200 + tier header", sres.status === 200 && sres.headers.get("X-Vantis-Tier") === "fast", { status: sres.status, tier: sres.headers.get("X-Vantis-Tier") });
  const stext = await sres.text();
  const frames = stext.split("\n").filter((l) => l.startsWith("data: ") && !l.includes("[DONE]")).map((l) => { try { return JSON.parse(l.slice(6)); } catch { return null; } }).filter(Boolean);
  const tail = frames.find((f: any) => f.vantis);
  check("stream fast: settlement tail present", !!tail, tail ? { tier: tail.vantis.tier, cost: tail.vantis.cost_usd } : stext.slice(-300));
  if (tail) {
    const tin = tail.usage?.prompt_tokens, tout = tail.usage?.completion_tokens, tc = tail.usage?.prompt_tokens_details?.cached_tokens || 0;
    check("stream fast: tail tier = fast, billed at fast rate", tail.vantis.tier === "fast" && near(tail.vantis.cost_usd, calculateCost(tin, tout, FAST, tc)), { cost: tail.vantis.cost_usd, expect: calculateCost(tin, tout, FAST, tc) });
  }

  // 7. ledger + meter labels
  const db = getDb();
  const led = db.query("SELECT model_used, tokens_in, tokens_out, tokens_cached, -amount_usd AS cost FROM credit_transactions WHERE user_id = ? AND type = 'consume' ORDER BY rowid").all(user.id) as any[];
  const met = db.query("SELECT model, outcome, status, tokens_cached FROM api_requests WHERE user_id = ? ORDER BY rowid").all(user.id) as any[];
  console.log("   ledger:", led.map((r) => `${r.model_used}:${r.tokens_in}/${r.tokens_out}/c${r.tokens_cached}=$${r.cost}`).join("  "));
  console.log("   meter :", met.map((r) => `${r.model}:${r.outcome}(${r.status})c${r.tokens_cached}`).join("  "));
  check("ledger: standard row labelled with the catalog id", led[0]?.model_used === TARGET_MODEL, led[0]?.model_used);
  check("ledger: fast + zdr rows labelled with the fast id", led.slice(1, 4).every((r) => r.model_used === FAST_MODEL_ID), led.slice(1, 4).map((r) => r.model_used));
  if (cHit) check("ledger: cached row carries tokens_cached", led.some((r) => r.tokens_cached > 0), led.map((r) => r.tokens_cached));
  else console.log("INFO  ledger: no cache read this run, tokens_cached column stays 0 (expected)");
  check("meter: zdr refusal on GPT recorded", met.some((r) => r.status === 400 || r.status === 403), met.filter((r) => r.status >= 400).map((r) => `${r.model}:${r.outcome}`));
  check("meter: no upstream echoes as model labels", met.every((r) => !/^deepseek-v4-flash$|Fast$|ga-260731/.test(r.model || "")), met.map((r) => r.model));

  cleanup();
  console.log(failures ? `\n${failures} FAILED` : "\nALL PASS");
  process.exit(failures ? 1 : 0);
}

run().catch((e) => { console.error(e); cleanup(); process.exit(1); });
