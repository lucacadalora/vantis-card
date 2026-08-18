// Live end-to-end for the model catalog: seed a throwaway card, run a REAL
// billed call on several catalog models, and assert the ledger charged each
// one at its own published rate. Then purge the throwaway.
//
// This is the check the page depends on. A price on /models is only honest if
// the gateway actually bills it, so this reconciles cost_usd against the
// catalog rate and the token counts the upstream reported.
//
//   VANTIS_CARD_DB=<copy> bun run scripts/catalog-e2e.ts [baseUrl]

import { getDb, createUser, getUserByX, grantCredits, generateApiKey, createCard } from "../server/db";
import { getVantisPrice, usdToVantis } from "../server/price";
import { catalogModelFor, publicModels, isAllowlisted } from "../server/upstream/catalog";
import { calculateCost } from "../server/credits";

const BASE = process.argv[2] || "http://127.0.0.1:8249";
const HANDLE = "catalog_e2e_throwaway";
const HANDLE2 = "catalog_e2e_nopool";
let plainId: string | undefined;

let failed = false;
const check = (name: string, ok: boolean, detail?: unknown) => {
  console.log(`${ok ? "PASS" : "FAIL"}  ${name}${detail === undefined ? "" : ` — ${JSON.stringify(detail)}`}`);
  if (!ok) failed = true;
};

// Models to exercise live: the default open-weights route plus frontier tiers
// at opposite ends of the price range, so a rate mix-up would show up.
const UNDER_TEST = ["deepseek-v4-flash-0731", "kimi-k3", "gpt-5.6-luna", "gpt-5.4-mini", "gpt-5.6-terra"];

function purge(userId?: string) {
  const db = getDb();
  const u = getUserByX("0");
  const id = userId || u?.id;
  if (!id) return;
  for (const t of ["api_requests", "credit_transactions", "api_keys", "agent_wallets", "cards", "reservations", "users"]) {
    try { db.run(`DELETE FROM ${t} WHERE ${t === "users" ? "id" : "user_id"} = ?`, [id]); } catch {}
  }
}

let user = getUserByX("0");
if (!user) user = createUser({ username: HANDLE, id: "0", name: "Catalog E2E", public_metrics: {} });
grantCredits(user!.id, 2.0, "catalog-e2e seed");
const key = generateApiKey(user!.id);
// The gateway gate is users.scored_at, plus a minted card — set both. The
// throwaway also joins the frontier-pool allowlist so the GPT lanes get a
// real live-fire pass; the allowlist NEGATIVE runs on a second key below.
const { price } = await getVantisPrice();
getDb().run("UPDATE users SET score = 66, score_tier = 'builder', scored_at = datetime('now'), pool_access = 1 WHERE id = ?", [user!.id]);
createCard(user!.id, `@${HANDLE}`, "builder", 2.0, usdToVantis(2.0, price), price);
console.log(`seeded throwaway @${HANDLE}, key ${key.slice(0, 14)}…\n`);

try {
  for (const id of UNDER_TEST) {
    const model = catalogModelFor(id, false, true)!;
    const res = await fetch(`${BASE}/v1/chat/completions`, {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: id,
        messages: [{ role: "user", content: "Name one reason rate limiting exists. One sentence." }],
        max_tokens: 200,
      }),
      signal: AbortSignal.timeout(180_000),
    });
    const j: any = await res.json().catch(() => ({}));
    if (res.status !== 200) { check(`${id}: 200 from the gateway`, false, { status: res.status, body: j }); continue; }

    const v = j.vantis || {};
    const tin = j.usage?.prompt_tokens ?? 0;
    const tout = j.usage?.completion_tokens ?? 0;
    const cachedIn = j.usage?.prompt_tokens_details?.cached_tokens ?? 0;
    const expected = calculateCost(tin, tout, model.rate, cachedIn);

    check(`${id}: answered`, !!j.choices?.[0]?.message);
    check(`${id}: billed at its OWN catalog rate (cache reads at the cached price where published)`, Math.abs((v.cost_usd ?? -1) - expected) < 1e-9,
      { charged: v.cost_usd, expected, tin, tout, cachedIn, rate: model.rate });
    if (isAllowlisted(model)) {
      // The pool lane is unmetered by construction: $0.00, zero burn, and it
      // must never appear on the settlement ledger.
      check(`${id}: pool lane billed nothing and burned nothing`,
        (v.cost_usd ?? -1) === 0 && (v.vantis_burned ?? -1) === 0,
        { charged: v.cost_usd, burned: v.vantis_burned });
    } else {
      check(`${id}: burn recorded against a real price`, (v.vantis_burned ?? 0) > 0 && (v.vantis_price_usd ?? 0) > 0,
        { burned: v.vantis_burned, price: v.vantis_price_usd });
    }
    // model_served rides inside the `vantis` settlement object and records
    // what the upstream really ran — never the id the client asked for.
    check(`${id}: model_served records the real build`,
      typeof v.model_served === "string" && v.model_served.length > 0, v.model_served);
  }

  // Kimi K3 (Aug 19): reasoning cannot be switched off on its route, so the
  // gateway refuses the request by name instead of billing the pass — every
  // spelling of the switch. The alias resolves; ZDR is refused fail-closed.
  for (const [label, patch] of [
    ["thinking:disabled", { thinking: { type: "disabled" } }],
    ["enable_thinking:false", { enable_thinking: false }],
    ["reasoning_effort:none", { reasoning_effort: "none" }],
  ] as const) {
    const r = await fetch(`${BASE}/v1/chat/completions`, {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({ model: "kimi-k3", messages: [{ role: "user", content: "hi" }], max_tokens: 10, ...(patch as any) }),
    });
    const rj: any = await r.json().catch(() => ({}));
    check(`kimi-k3 + ${label} is refused with 400 reasoning_always_on`, r.status === 400 && rj.error?.code === "reasoning_always_on", { status: r.status, code: rj.error?.code });
  }
  {
    const r = await fetch(`${BASE}/v1/chat/completions`, {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({ model: "kimi-k3", zdr: true, messages: [{ role: "user", content: "hi" }], max_tokens: 10 }),
    });
    const rj: any = await r.json().catch(() => ({}));
    check("kimi-k3 + zdr:true is refused by name (no ZDR route)", r.status === 400 && rj.error?.code === "zdr_unsupported_model", { status: r.status, code: rj.error?.code });
    const a = await fetch(`${BASE}/v1/chat/completions`, {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({ model: "kimi/kimi-k3", messages: [{ role: "user", content: "Reply with the single word: pong" }], max_tokens: 200 }),
    });
    const aj: any = await a.json().catch(() => ({}));
    check("the gateway's spelling kimi/kimi-k3 resolves to kimi-k3 and bills at its rate (incl. cache-hit price)",
      a.status === 200 && Math.abs((aj.vantis?.cost_usd ?? -1) - calculateCost(aj.usage?.prompt_tokens ?? 0, aj.usage?.completion_tokens ?? 0, catalogModelFor("kimi-k3", false)!.rate, aj.usage?.prompt_tokens_details?.cached_tokens ?? 0)) < 1e-9,
      { status: a.status, model_served: aj.vantis?.model_served, cost: aj.vantis?.cost_usd, usage: aj.usage });
    const row: any = getDb().query("SELECT model, outcome, cost_usd FROM api_requests WHERE user_id = ? ORDER BY rowid DESC LIMIT 1").get(user!.id);
    check("…and the ledger row is filed under the catalog id kimi-k3", row?.model === "kimi-k3" && row?.outcome === "ok", row);
  }

  // Negative cases: the catalog is a whitelist, and staging stays invisible.
  const off = await fetch(`${BASE}/v1/chat/completions`, {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({ model: "gpt-4o", messages: [{ role: "user", content: "hi" }], max_tokens: 10 }),
  });
  const offJson: any = await off.json();
  check("off-catalog id is refused", off.status === 400 && offJson.error?.code === "unsupported_model", off.status);
  check("the refusal names what IS available",
    Array.isArray(offJson.error?.supported) && offJson.error.supported.length === publicModels().length,
    offJson.error?.supported?.length);

  const stg = await fetch(`${BASE}/v1/chat/completions`, {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({ model: "wafer/kimi-k3-fast", messages: [{ role: "user", content: "hi" }], max_tokens: 10 }),
  });
  check("a non-staging key cannot reach a staging id", stg.status === 400, stg.status);

  const pool = await fetch(`${BASE}/v1/chat/completions`, {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({ model: "codexlb/gpt-5.6-sol", messages: [{ role: "user", content: "hi" }], max_tokens: 10 }),
  });
  check("a non-staging key cannot reach the codex-lb prefix", pool.status === 400, pool.status);

  // ── the allowlist gate itself: a carded key WITHOUT pool access ──
  let plain = getUserByX(HANDLE2);
  if (!plain) plain = createUser({ username: HANDLE2, id: "00", name: "Catalog E2E (no pool)", public_metrics: {} });
  plainId = plain!.id;
  grantCredits(plain!.id, 0.5, "catalog-e2e seed");
  const key2 = generateApiKey(plain!.id);
  getDb().run("UPDATE users SET score = 55, score_tier = 'explorer', scored_at = datetime('now') WHERE id = ?", [plain!.id]);
  createCard(plain!.id, `@${HANDLE2}`, "explorer", 0.5, usdToVantis(0.5, price), price);

  const gated = await fetch(`${BASE}/v1/chat/completions`, {
    method: "POST",
    headers: { Authorization: `Bearer ${key2}`, "Content-Type": "application/json" },
    body: JSON.stringify({ model: "gpt-5.6-luna", messages: [{ role: "user", content: "hi" }], max_tokens: 10 }),
  });
  const gatedJson: any = await gated.json();
  check("a non-pool key is refused the GPT lane by name",
    gated.status === 403 && gatedJson.error?.code === "model_allowlist_only",
    { status: gated.status, code: gatedJson.error?.code });
  check("the refusal's supported list hides the allowlist ids",
    Array.isArray(gatedJson.error?.supported) && !gatedJson.error.supported.some((x: string) => x.startsWith("gpt-")),
    gatedJson.error?.supported);

  const modelsAnon: any = await (await fetch(`${BASE}/v1/models`)).json();
  check("/v1/models hides allowlist ids from anonymous callers",
    Array.isArray(modelsAnon.data) && !modelsAnon.data.some((m: any) => String(m.id).startsWith("gpt-")),
    modelsAnon.data?.map((m: any) => m.id));
  const modelsPool: any = await (await fetch(`${BASE}/v1/models`, { headers: { Authorization: `Bearer ${key}` } })).json();
  check("/v1/models shows the pool ids to an allow-listed key, marked",
    Array.isArray(modelsPool.data) && modelsPool.data.some((m: any) => m.id === "gpt-5.6-sol" && m.access === "allowlist"),
    modelsPool.data?.length);
} finally {
  purge(user!.id);
  if (plainId) purge(plainId);
  check("throwaways fully purged", !getUserByX(HANDLE) && !getUserByX(HANDLE2));
}

console.log(failed ? "\nFAILURES" : "\nAll checks passed");
if (failed) process.exit(1);
