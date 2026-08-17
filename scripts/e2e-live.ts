// E2E against a locally running server (127.0.0.1:8240) with REAL upstreams:
// seeds a throwaway user, runs a real inference call through the proxy (real
// billable cost), asserts the virtual $VANTIS burn ledger, and cleans up so
// the deployment returns to armed-at-zero.
//
//   bun run scripts/e2e-live.ts run       — seed throwaway + assert everything
//   bun run scripts/e2e-live.ts score     — also exercise Exa + LLM scoring (real calls)
//   bun run scripts/e2e-live.ts cleanup   — remove throwaway + its ledger rows

import { getDb, createUser, getUserByX, grantCredits, generateApiKey, createCard, burnStats } from "../server/db";
import { getVantisPrice, usdToVantis } from "../server/price";
import { calculateCost, PRICING } from "../server/credits";
import { TARGET_MODEL } from "../server/upstream";
import { scoreProfile } from "../server/scoring";
import { enrichProfile } from "../server/enrichment";

const BASE = process.env.VANTIS_CARD_BASE || "http://127.0.0.1:8240"; // override to target an isolated instance
const HANDLE = "e2e_throwaway_delete_me";

let failures = 0;
function check(name: string, ok: boolean, detail?: any) {
  console.log(`${ok ? "PASS" : "FAIL"}  ${name}${detail !== undefined ? ` — ${JSON.stringify(detail)}` : ""}`);
  if (!ok) failures++;
}

async function seed() {
  const db = getDb();
  let user = getUserByX(HANDLE);
  if (!user) {
    user = createUser({
      username: HANDLE,
      id: "0",
      name: "E2E Throwaway",
      description: "throwaway verification account — delete me",
      public_metrics: { followers_count: 1, following_count: 1, tweet_count: 1 },
    });
  }
  grantCredits(user.id, 0.5, "e2e throwaway grant");
  const apiKey = generateApiKey(user.id);
  const { price } = await getVantisPrice();
  // The gateway refuses an unscored account (gateway.ts checks users.scored_at
  // before anything else), so a seeded throwaway must carry a score too — not
  // just a card. Without this every proxy call comes back 401.
  db.run("UPDATE users SET score = 66, score_tier = 'builder', scored_at = datetime('now') WHERE id = ?", [user.id]);
  createCard(user.id, `@${HANDLE}`, "builder", 0.5, usdToVantis(0.5, price), price);
  return { user, apiKey };
}

async function run() {
  // Unit-level: cost math against DeepSeek V4 Flash 0731 list price
  check("price = $0.14 in / $0.28 out", PRICING.input === 0.14 && PRICING.output === 0.28, PRICING);
  check("cost math: 6dp, non-zero for small calls", calculateCost(1000, 500) > 0, calculateCost(1000, 500));
  check("cost math: 1M/1M = $0.42", calculateCost(1_000_000, 1_000_000) === 0.42, calculateCost(1_000_000, 1_000_000));

  const health = await fetch(`${BASE}/health`).then((r) => r.json());
  check("health", health.ok === true);

  const { apiKey } = await seed();
  console.log(`   seeded throwaway @${HANDLE} with $0.50, key ${apiKey.slice(0, 14)}…`);

  const statsBefore = await fetch(`${BASE}/burn/stats`).then((r) => r.json());
  check("price is live + positive", statsBefore.vantis_price_usd > 0, { price: statsBefore.vantis_price_usd, source: statsBefore.price_source });

  const balanceBefore = (await fetch(`${BASE}/v1/balance`, { headers: { Authorization: `Bearer ${apiKey}` } })
    .then((r) => r.json())).balance_usd;

  // Real inference through the proxy — real billable cost
  const res = await fetch(`${BASE}/v1/chat/completions`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
    body: JSON.stringify({
      model: TARGET_MODEL,
      messages: [{ role: "user", content: "Reply with exactly: BURN TEST OK" }],
      // The default model is a REASONING model: a tight max_tokens gets spent
      // on thinking and returns empty content. Leave room for both.
      max_tokens: 400,
    }),
  });
  check("proxy returns 200", res.status === 200, res.status);
  const out = await res.json();
  const content = out.choices?.[0]?.message?.content || "";
  check("real completion came back", content.length > 0, content.slice(0, 60));
  check("usage present", !!out.usage?.prompt_tokens, out.usage);
  check("vantis block present", !!out.vantis && out.vantis.error === undefined, out.vantis);
  check("cost_usd > 0", (out.vantis?.cost_usd || 0) > 0, out.vantis?.cost_usd);
  check("vantis_burned > 0", (out.vantis?.vantis_burned || 0) > 0, out.vantis?.vantis_burned);
  const expectedBurn = (out.vantis?.cost_usd || 0) / (out.vantis?.vantis_price_usd || 1);
  check("burn = cost/price", Math.abs((out.vantis?.vantis_burned || 0) - expectedBurn) < 1e-9);
  // Measured against the balance read BEFORE the call, not a hardcoded figure:
  // re-running the seed stacks grants, and a fixed threshold then fails on a
  // perfectly healthy ledger. The debit must equal the cost exactly.
  check("balance decremented by exactly the cost",
    Math.abs((balanceBefore - (out.vantis?.balance_usd ?? 0)) - (out.vantis?.cost_usd ?? 0)) < 1e-9,
    { before: balanceBefore, after: out.vantis?.balance_usd, cost: out.vantis?.cost_usd });

  const bal = await fetch(`${BASE}/v1/balance`, { headers: { Authorization: `Bearer ${apiKey}` } }).then((r) => r.json());
  check("balance endpoint consistent", Math.abs(bal.balance_usd - out.vantis.balance_usd) < 1e-9, bal);
  check("lifetime burn recorded on user", bal.vantis_burned > 0, bal.vantis_burned);

  const statsAfter = await fetch(`${BASE}/burn/stats`).then((r) => r.json());
  check("global burn ticker incremented", statsAfter.vantis_burned_total > statsBefore.vantis_burned_total, {
    before: statsBefore.vantis_burned_total,
    after: statsAfter.vantis_burned_total,
  });
  check("recent_burns has the event", statsAfter.recent_burns.length > 0 && /deepseek/.test(statsAfter.recent_burns[0].model || ""), statsAfter.recent_burns[0]?.model);
  check("served model reported truthfully", /deepseek/.test(out.vantis?.model_served || ""), out.vantis?.model_served);
  // The rail now publishes a catalog; the DEFAULT model is still the one the
  // stats headline reports, and it must lead the price list.
  check("stats headline the default model", statsAfter.model === TARGET_MODEL);
  check("stats expose the whole priced catalog",
    Array.isArray(statsAfter.pricing) && statsAfter.pricing.length > 1 &&
    statsAfter.pricing[0].model === TARGET_MODEL &&
    statsAfter.pricing.every((p: any) => p.usd_per_1m_input > 0 && p.usd_per_1m_output > 0),
    statsAfter.pricing?.length);

  // Auth + guardrails
  const bad = await fetch(`${BASE}/v1/chat/completions`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: "Bearer vcard_nope" },
    body: JSON.stringify({ model: TARGET_MODEL, messages: [{ role: "user", content: "x" }] }),
  });
  check("invalid key → 401", bad.status === 401);
  const wrongModel = await fetch(`${BASE}/v1/chat/completions`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
    body: JSON.stringify({ model: "gpt-4o", messages: [{ role: "user", content: "x" }] }),
  });
  check("off-catalog model → 400", wrongModel.status === 400, (await wrongModel.json()).error);
  const modelsList = await fetch(`${BASE}/v1/models`).then((r) => r.json());
  check("/v1/models lists the catalog, default first",
    modelsList.data.length > 1 && modelsList.data[0].id === TARGET_MODEL &&
    modelsList.data.every((m: any) => m.family === "open" || m.family === "frontier"),
    modelsList.data.length);
  const streamed = await fetch(`${BASE}/v1/chat/completions`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
    body: JSON.stringify({ model: TARGET_MODEL, stream: true, messages: [{ role: "user", content: "Say ok." }], max_tokens: 30 }),
  });
  const streamBody = await streamed.text();
  check("stream:true returns SSE", streamed.status === 200 && streamBody.includes("data: "), streamed.status);
  check("streamed call still settles", /"vantis"/.test(streamBody) || streamBody.includes("[DONE]"));

  // Card page
  const cardPage = await fetch(`${BASE}/card/${HANDLE}`);
  const cardHtml = await cardPage.text();
  check("card page renders", cardPage.status === 200 && /class="scene"/.test(cardHtml));
  check("card page shows burn line", cardHtml.includes("Burned so far"));
  const notFound = await fetch(`${BASE}/card/definitely_not_a_user`);
  check("unknown card → 404", notFound.status === 404);

  // Onboard + landing render
  const onboard = await fetch(`${BASE}/onboard`).then((r) => r.text());
  check("onboard renders the connect step", /connect/i.test(onboard));
  const landing = await fetch(`${BASE}/overview`).then((r) => r.text());
  check("landing renders burn ticker", /id="s-burn"/.test(landing) && /burn\/stats/.test(landing));
  for (const [page, html] of [["landing", landing], ["onboard", onboard], ["card", cardHtml]] as const) {
    check(`${page} copy is provider-clean`, !/jatevo/i.test(html));
  }
  const pending = await fetch(`${BASE}/oauth/connect/twitter`);
  check("unconfigured provider → 503", pending.status === 503);

  console.log(failures ? `\n${failures} FAILURES` : "\nALL PASS");
  process.exit(failures ? 1 : 0);
}

async function score() {
  // Real Exa + real model scoring on a synthetic profile (no OAuth needed)
  const enrichment = await enrichProfile({ name: "Luca Cada Lora", githubUsername: "lucacadalora", company: "Vantis" });
  console.log("enrichment summary:", enrichment.summary);
  const result = await scoreProfile({
    xUsername: "vantis_ai",
    xName: "Vantis",
    xBio: "AI software factory. $VANTIS.",
    xFollowers: 800,
    xTweetCount: 300,
    githubUsername: "lucacadalora",
    githubPublicRepos: 30,
    githubLanguages: ["TypeScript", "Python"],
    enrichment,
  });
  console.log("score result:", JSON.stringify(result, null, 2));
  check("score in range", result.score >= 0 && result.score <= 100, result.score);
  check("grant in range", result.grantUsd >= 5 && result.grantUsd <= 25, result.grantUsd);
  check("tier valid", ["whale", "builder", "explorer", "noise"].includes(result.tier), result.tier);
  check("not the fallback path", !result.reasoning.includes("Fallback"), result.reasoning);
  console.log(failures ? `\n${failures} FAILURES` : "\nALL PASS");
  process.exit(failures ? 1 : 0);
}

function cleanup() {
  const db = getDb();
  const user = getUserByX(HANDLE);
  if (!user) {
    console.log("no throwaway user found — nothing to clean");
  } else {
    db.run("DELETE FROM credit_transactions WHERE user_id = ?", [user.id]);
    db.run("DELETE FROM exa_enrichments WHERE user_id = ?", [user.id]);
    db.run("DELETE FROM cards WHERE user_id = ?", [user.id]);
    db.run("DELETE FROM api_requests WHERE user_id = ?", [user.id]);
    // Seeding mints a lane key and the lane that backs it — leaving either
    // behind orphans a live balance to a user that no longer exists.
    db.run("DELETE FROM api_keys WHERE user_id = ?", [user.id]);
    db.run("DELETE FROM agent_wallets WHERE user_id = ?", [user.id]);
    db.run("DELETE FROM users WHERE id = ?", [user.id]);
    console.log(`deleted throwaway @${HANDLE} + ledger rows`);
  }
  const stats = burnStats();
  console.log("post-cleanup stats:", JSON.stringify({ burned: stats.vantis_burned_total, calls: stats.inference_calls, cards: stats.cards_issued }));
}

const mode = process.argv[2] || "run";
if (mode === "cleanup") cleanup();
else if (mode === "score") await score();
else await run();
