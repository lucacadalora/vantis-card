// NFT admin + perks E2E — runs against the LIVE server (127.0.0.1:8240) and
// LIVE DB, same discipline as admin-test: seeds a throwaway carded user,
// exercises grant/perk/revoke through the real /admin/api routes, proves
// enforcement with REAL upstream calls (a few thousandths of a cent), and
// purges everything it created. Restores card_perks to its prior state.
// Run with the project .env sourced (admin token + session secret).

import { createUser, createCard, grantCredits, ensurePurposeWallets, fundAgentWallet, createApiKeyRow, getAgentWallet, getDb, updateUser } from "../server/db";
import { perksOf } from "../server/perks";

const BASE = process.env.BASE || "http://127.0.0.1:8240";
const TOKEN = process.env.VANTIS_CARD_ADMIN_TOKEN || "";
const EMAIL = process.env.VANTIS_CARD_ADMIN_EMAIL || "";
const SLUG = "og-quota"; // test rides one OG card; perks restored at the end

let pass = 0, fail = 0;
const check = (name: string, cond: boolean, detail: any = "") => {
  if (cond) { pass++; console.log(`  ok   ${name}`); }
  else { fail++; console.log(`  FAIL ${name}${detail !== "" ? ` — ${JSON.stringify(detail)}` : ""}`); }
};

if (!TOKEN || !EMAIL) { console.error("source the project .env first"); process.exit(1); }

// ── admin session ──
const login = await fetch(`${BASE}/admin/login`, {
  method: "POST", headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email: EMAIL, token: TOKEN }),
});
check("admin login", login.status === 200, login.status);
const cookie = (login.headers.get("set-cookie") || "").split(";")[0];
const A = (path: string, payload?: any) =>
  fetch(`${BASE}/admin/api${path}`, payload === undefined
    ? { headers: { Cookie: cookie } }
    : { method: "POST", headers: { "Content-Type": "application/json", Cookie: cookie }, body: JSON.stringify(payload) });

check("anon /admin/api/nft → 401", (await fetch(`${BASE}/admin/api/nft`)).status === 401);

const reg: any = await (await A("/nft")).json();
check("registry lists all fifteen cards", Array.isArray(reg.cards) && reg.cards.length === 15, reg.cards?.length);
check("both perk defs present, no lane implementation named",
  !!reg.perk_defs?.gpt_unlimited && !!reg.perk_defs?.deepseek_unlimited &&
  !/balancer|codex/i.test(JSON.stringify(reg.perk_defs)));
const perksBefore = perksOf(SLUG);

// ── throwaway carded user ──
const tag = `perktest_${Date.now().toString(36)}`;
const u = createUser({ username: tag, name: "Perk Test" });
createCard(u.id, `@${tag}`, "explorer", 0, 0, 0.00185);
updateUser(u.id, { scored_at: new Date().toISOString().replace("T", " ").slice(0, 19), score: 40, score_tier: "explorer" } as any);
grantCredits(u.id, 2, "perk-test seed");
const lanes = ensurePurposeWallets(u.id, false) as any[];
const inf = lanes.find((w) => w.purpose === "inference")!;
fundAgentWallet(u.id, inf.id, 1);
const keyRow: any = createApiKeyRow(u.id, inf.id, "perk-test");
const apiKey = keyRow.key || keyRow;
const laneUsd = () => (getAgentWallet(inf.id) as any).usd_balance as number;

const call = (model: string | undefined, maxTokens = 32) =>
  fetch(`${BASE}/v1/chat/completions`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
    body: JSON.stringify({ ...(model ? { model } : {}), messages: [{ role: "user", content: "Reply with the single word: ok" }], max_tokens: maxTokens, thinking: { type: "disabled" } }),
  });

try {
  // ── baseline: no perks → credits charge ──
  const bal0 = laneUsd();
  const r1 = await call(undefined);
  const j1: any = await r1.json();
  check("baseline call 200", r1.status === 200, r1.status);
  check("baseline charged credits", (j1.vantis?.cost_usd || 0) > 0 && laneUsd() < bal0, { cost: j1.vantis?.cost_usd });

  // ── grant the card + deepseek perk ──
  const g: any = await (await A("/nft/grant", { slug: SLUG, handle: tag })).json();
  check("grant lands", g.ok === true && g.holders.some((h: any) => h.handle === tag && h.source === "admin"), g);
  const p1: any = await (await A("/nft/perk", { slug: SLUG, perk: "deepseek_unlimited", on: true })).json();
  check("deepseek perk attaches", p1.ok === true && p1.perks.includes("deepseek_unlimited"), p1);

  const bal1 = laneUsd();
  const r2 = await call(undefined);
  const j2: any = await r2.json();
  check("perk call 200", r2.status === 200, r2.status);
  check("perk call charges nothing", j2.vantis?.cost_usd === 0 && laneUsd() === bal1, { cost: j2.vantis?.cost_usd, lane_before: bal1, lane_after: laneUsd() });
  check("perk named in settle frame", j2.vantis?.perk?.key === "deepseek_unlimited", j2.vantis?.perk);
  check("no burn on perk call", (j2.vantis?.vantis_burned || 0) === 0);
  const pu = getDb().query("SELECT calls, tokens, cost_usd FROM perk_usage WHERE user_id = ? AND perk = 'deepseek_unlimited'").get(u.id) as any;
  check("house exposure recorded in perk_usage", !!pu && pu.calls >= 1 && pu.cost_usd > 0, pu);

  // ── GPT lane: closed without the perk, open with it ──
  const models0: any = await (await fetch(`${BASE}/v1/models`, { headers: { Authorization: `Bearer ${apiKey}` } })).json();
  const gptIdsClosed = (models0.data || []).map((m: any) => m.id).filter((id: string) => /gpt/i.test(id));
  check("no GPT ids before the perk", gptIdsClosed.length === 0, gptIdsClosed);

  const p2: any = await (await A("/nft/perk", { slug: SLUG, perk: "gpt_unlimited", on: true })).json();
  check("gpt perk attaches", p2.ok === true && p2.perks.includes("gpt_unlimited"), p2);
  const models1: any = await (await fetch(`${BASE}/v1/models`, { headers: { Authorization: `Bearer ${apiKey}` } })).json();
  const gptIds = (models1.data || []).map((m: any) => m.id).filter((id: string) => /gpt/i.test(id));
  check("GPT ids listed with the perk", gptIds.length > 0, (models1.data || []).length);
  if (gptIds.length) {
    const r3 = await call(gptIds[0], 16);
    const j3: any = await r3.json().catch(() => ({}));
    check("GPT call passes the access gate (never allowlist-403)",
      r3.status !== 403 && j3?.error?.code !== "model_allowlist_only",
      { status: r3.status, err: j3?.error?.code });
    if (r3.status === 200) check("GPT call charges nothing", (j3.vantis?.cost_usd || 0) === 0, j3.vantis?.cost_usd);
  }

  // ── revoke → both perks die on the next call ──
  const rv: any = await (await A("/nft/revoke", { slug: SLUG, user_id: u.id })).json();
  check("revoke lands", rv.ok === true && !rv.holders.some((h: any) => h.handle === tag), rv);
  const bal2 = laneUsd();
  const r4 = await call(undefined);
  const j4: any = await r4.json();
  check("post-revoke call charges credits again", r4.status === 200 && (j4.vantis?.cost_usd || 0) > 0 && laneUsd() < bal2, { cost: j4.vantis?.cost_usd });
  const models2: any = await (await fetch(`${BASE}/v1/models`, { headers: { Authorization: `Bearer ${apiKey}` } })).json();
  check("GPT ids gone after revoke", (models2.data || []).every((m: any) => !/gpt/i.test(m.id)));

  // ── validation + audit ──
  check("unknown slug → 404", (await A("/nft/grant", { slug: "not-a-card", handle: tag })).status === 404);
  check("unknown perk → 400", (await A("/nft/perk", { slug: SLUG, perk: "free_lambo", on: true })).status === 400);
  check("unknown handle → 404", (await A("/nft/grant", { slug: SLUG, handle: "no_such_user_xyz" })).status === 404);
  const ev = getDb().query("SELECT action FROM admin_events WHERE action LIKE 'nft_%' AND created_at > datetime('now','-5 minutes')").all() as any[];
  check("mutations audited", ["nft_grant", "nft_revoke", "nft_perk_on"].every((a) => ev.some((e) => e.action === a)), ev.map((e) => e.action));
} finally {
  // ── restore + purge ──
  for (const k of ["gpt_unlimited", "deepseek_unlimited"]) {
    await A("/nft/perk", { slug: SLUG, perk: k, on: perksBefore.includes(k) });
  }
  const d = getDb();
  for (const t of ["perk_usage", "genesis_holdings", "credit_transactions", "api_requests", "api_keys", "agent_wallets", "cards"]) {
    try { d.run(`DELETE FROM ${t} WHERE user_id = ?`, [u.id]); } catch {}
  }
  d.run("DELETE FROM users WHERE id = ?", [u.id]);
  d.run("DELETE FROM admin_events WHERE detail LIKE ?", [`%${tag}%`]);
}

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
