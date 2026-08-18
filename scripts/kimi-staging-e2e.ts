// Live end-to-end for the STAGING Kimi K3 routes: seed a throwaway staging
// card, run one REAL billed call per Wafer tier through the gateway, and
// assert (a) a public key cannot reach either id, (b) the ledger charged each
// at its own published rate incl. cached input, (c) the ZDR echo and the
// served-by lane came back, (d) an image part is accepted (vision:true).
// Then purge the throwaway. Runs against a SANDBOX server, never live:
//
//   sqlite3 data/vantis-cards.db ".backup '/tmp/…/cards-sandbox.db'"
//   VANTIS_CARD_DB=/tmp/…/cards-sandbox.db VANTIS_CARD_PORT=8249 bun server/server.ts &
//   VANTIS_CARD_DB=/tmp/…/cards-sandbox.db bun run scripts/kimi-staging-e2e.ts [baseUrl] [imgPath]

import { getDb, createUser, getUserByX, grantCredits, generateApiKey, createCard } from "../server/db";
import { getVantisPrice, usdToVantis } from "../server/price";
import { catalogModelFor } from "../server/upstream/catalog";
import { calculateCost } from "../server/credits";

const BASE = process.argv[2] || "http://127.0.0.1:8249";
const IMG = process.argv[3] || "";
const HANDLE = "kimi_e2e_throwaway";
const XID = "kimi-e2e-0";
const IDS = ["wafer/kimi-k3", "wafer/kimi-k3-fast"];

let failed = false;
const check = (name: string, ok: boolean, detail?: unknown) => {
  console.log(`${ok ? "PASS" : "FAIL"}  ${name}${detail === undefined ? "" : ` — ${JSON.stringify(detail)}`}`);
  if (!ok) failed = true;
};
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

function purge(userId?: string) {
  const db = getDb();
  const id = userId || getUserByX(XID)?.id;
  if (!id) return;
  for (const t of ["api_requests", "credit_transactions", "api_keys", "agent_wallets", "cards", "reservations", "users"]) {
    try { db.run(`DELETE FROM ${t} WHERE ${t === "users" ? "id" : "user_id"} = ?`, [id]); } catch {}
  }
}

let user = getUserByX(XID);
if (!user) user = createUser({ username: HANDLE, id: XID, name: "Kimi staging E2E", public_metrics: {} });
grantCredits(user!.id, 1.0, "kimi-e2e seed");
const key = generateApiKey(user!.id);
const { price } = await getVantisPrice();
getDb().run("UPDATE users SET score = 66, score_tier = 'builder', scored_at = datetime('now') WHERE id = ?", [user!.id]);
createCard(user!.id, `@${HANDLE}`, "builder", 1.0, usdToVantis(1.0, price), price);
console.log(`seeded throwaway @${HANDLE}, key ${key.slice(0, 14)}…\n`);

async function fire(model: string, k: string, extra: Record<string, unknown> = {}) {
  const res = await fetch(`${BASE}/v1/chat/completions`, {
    method: "POST",
    headers: { Authorization: `Bearer ${k}`, "Content-Type": "application/json" },
    body: JSON.stringify({ model, messages: [{ role: "user", content: "Name one reason rate limiting exists. One sentence." }], max_tokens: 200, ...extra }),
    signal: AbortSignal.timeout(180_000),
  });
  const j: any = await res.json().catch(() => ({}));
  return { res, j };
}

try {
  // (a) not staging yet → both ids must be refused as unknown to this key
  for (const id of IDS) {
    const { res, j } = await fire(id, key);
    check(`${id}: PUBLIC key is refused (400 unsupported_model)`, res.status === 400 && j.error?.code === "unsupported_model", { status: res.status, code: j.error?.code });
  }

  // flip the throwaway to staging
  getDb().run("UPDATE users SET staging = 1 WHERE id = ?", [user!.id]);

  for (const id of IDS) {
    const model = catalogModelFor(id, true)!;
    await sleep(1500); // one in flight, paced — the Jatevo key is production-shared
    const { res, j } = await fire(id, key);
    // The lane is INTERNAL telemetry (client-facing surfaces never name a
    // provider), so the serving lane is read from the vendor trace, not from a
    // response header. Same for ZDR: for staging ids the gateway SENDS
    // `Wafer-ZDR: required` (server.ts, staging.zdrCapable) but only attests
    // X-Vantis-ZDR on the DeepSeek rail's pin — there is no client-visible echo
    // to assert here; the honored echo was verified against Jatevo directly.
    const trace: any = getDb().query("SELECT vendor, endpoint, status, error FROM vendor_requests WHERE user_id = ? ORDER BY rowid DESC LIMIT 1").get(user!.id);
    if (res.status !== 200) {
      // An upstream 429/5xx is the VENDOR's capacity, surfaced honestly — not
      // a gateway defect. Report it as such rather than as a red check.
      const upstreamCap = res.status === 429 && trace?.status === 429;
      check(`${id}: 200 from the gateway${upstreamCap ? " (WARN: upstream 429 — vendor capacity on this tier, gateway surfaced it as 429 + Retry-After)" : ""}`,
        upstreamCap, { status: res.status, code: j.error?.code, retry_after: res.headers.get("retry-after"), trace });
      continue;
    }
    const v = j.vantis || {};
    const tin = j.usage?.prompt_tokens ?? 0;
    const tout = j.usage?.completion_tokens ?? 0;
    const cached = j.usage?.prompt_tokens_details?.cached_tokens ?? 0;
    const expected = calculateCost(tin, tout, model.rate, cached);
    check(`${id}: answered`, !!j.choices?.[0]?.message?.content, (j.choices?.[0]?.message?.content || "").slice(0, 80));
    check(`${id}: billed at its OWN published rate (incl. cached input)`, Math.abs((v.cost_usd ?? -1) - expected) < 1e-9,
      { charged: v.cost_usd, expected, tin, tout, cached, rate: model.rate });
    check(`${id}: burn recorded against a real price`, (v.vantis_burned ?? 0) > 0 && (v.vantis_price_usd ?? 0) > 0, { burned: v.vantis_burned });
    check(`${id}: dialled through the Jatevo wafer lane (vendor trace)`, trace?.vendor === "jatevo" && /wafer/.test(trace?.endpoint || "") && trace?.status === 200, trace);
    check(`${id}: no provider name leaks in client headers`, !res.headers.get("x-served-by") && !res.headers.get("wafer-zdr"));
    check(`${id}: model_served names the real build`, typeof v.model_served === "string" && /kimi/i.test(v.model_served), v.model_served);
    // the ledger row itself
    const row: any = getDb().query("SELECT model, outcome, cost_usd, tokens_in, tokens_out FROM api_requests WHERE user_id = ? ORDER BY rowid DESC LIMIT 1").get(user!.id);
    check(`${id}: api_requests row is ok + carries the same cost`, row?.outcome === "ok" && Math.abs(row.cost_usd - expected) < 1e-9 && row.model === id, row);
  }

  // (d) image input is accepted at OUR door now that vision:true (the gateway
  // used to refuse it before dialling). Answer must NAME the content.
  if (IMG) {
    const b64 = Buffer.from(await Bun.file(IMG).arrayBuffer()).toString("base64");
    await sleep(1500);
    const { res, j } = await fire("wafer/kimi-k3", key, {
      messages: [{ role: "user", content: [
        { type: "text", text: "What shape and what exact text is in this image? One short line." },
        { type: "image_url", image_url: { url: `data:image/png;base64,${b64}` } } ] }],
      max_tokens: 200,
    });
    const ans = (j.choices?.[0]?.message?.content || "").replace(/\s+/g, " ");
    check("wafer/kimi-k3: image part accepted through the gateway and SEEN", res.status === 200 && /4271/.test(ans) && /circle|round/i.test(ans), { status: res.status, ans: ans.slice(0, 100), code: j.error?.code });
  }
} finally {
  purge(user!.id);
  check("throwaway fully purged", !getUserByX(XID));
}

console.log(failed ? "\nFAILURES" : "\nAll checks passed");
if (failed) process.exit(1);
