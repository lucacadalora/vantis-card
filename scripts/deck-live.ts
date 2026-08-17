// Deck END-TO-END, through the real HTTP surface and a REAL upstream call.
// Proves the claim that matters: with a cartridge plugged, an inference call
// runs on the allowance and the lane's dollars do not move; with it ejected,
// the same call bills credits as it always did.
//
// Spends a few thousandths of a cent of real upstream money. Point
// VANTIS_CARD_DB at a copy; BASE at a server started against that copy.

import {
  createUser, createCard, grantCredits, ensurePurposeWallets, fundAgentWallet,
  updateUser, getAgentWallet, getDb, createApiKeyRow,
} from "../server/db";
import { ensureDeckTables, grantPreviewHolding, usageToday } from "../server/deck";
import { sessionSetCookie } from "../server/session";
import { GENESIS } from "../server/genesis";

const BASE = process.env.BASE || "http://127.0.0.1:8341";
let pass = 0, fail = 0;
const ok = (name: string, cond: boolean, detail = "") => {
  if (cond) { pass++; console.log(`  ok   ${name}`); }
  else { fail++; console.log(`  FAIL ${name}${detail ? ` — ${detail}` : ""}`); }
};

ensureDeckTables();

const u = createUser({ username: `decklive${Date.now().toString(36)}`, name: "Deck Live" });
createCard(u.id, `@${u.x_username}`, "explorer", 0, 0, 0.00185);
updateUser(u.id, { scored_at: new Date().toISOString().replace("T", " ").slice(0, 19), score: 40, score_tier: "explorer" } as any);
// staging is deliberately NOT in USER_COLUMNS, so updateUser drops it silently
// — the deck is staging-gated, so it has to be set the same way production
// sets it: straight SQL.
getDb().run("UPDATE users SET staging = 1 WHERE id = ?", [u.id]);
grantCredits(u.id, 5, "deck-live seed");
const lanes = ensurePurposeWallets(u.id, false) as any[];
const inf = lanes.find((w) => w.purpose === "inference")!;
fundAgentWallet(u.id, inf.id, 2);
const key = createApiKeyRow(u.id, inf.id, "deck-live");
const apiKey = (key as any).key || key;
const cookie = sessionSetCookie("did:privy:decklive", u.id).split(";")[0];
const APEX = GENESIS[0];
grantPreviewHolding(u.id, APEX.slug);

const laneUsd = () => (getAgentWallet(inf.id) as any).usd_balance as number;

async function chat(label: string) {
  const r = await fetch(`${BASE}/v1/chat/completions`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
    body: JSON.stringify({ model: "deepseek-v4-flash", max_tokens: 40, messages: [{ role: "user", content: "Reply with exactly: ok" }] }),
  });
  const j: any = await r.json();
  console.log(`    [${label}] ${r.status} ${j?.vantis ? JSON.stringify(j.vantis).slice(0, 190) : JSON.stringify(j).slice(0, 190)}`);
  return { status: r.status, j, headers: r.headers };
}

function cleanup() {
  const d = getDb();
  d.run("DELETE FROM lane_cartridges WHERE user_id = ?", [u.id]);
  d.run("DELETE FROM genesis_holdings WHERE user_id = ?", [u.id]);
  d.run("DELETE FROM cartridge_usage WHERE user_id = ?", [u.id]);
  d.run("DELETE FROM credit_transactions WHERE user_id = ?", [u.id]);
  d.run("DELETE FROM api_requests WHERE user_id = ?", [u.id]);
  d.run("DELETE FROM api_keys WHERE user_id = ?", [u.id]);
  d.run("DELETE FROM agent_wallets WHERE user_id = ?", [u.id]);
  d.run("DELETE FROM cards WHERE user_id = ?", [u.id]);
  d.run("DELETE FROM users WHERE id = ?", [u.id]);
}

try {
  console.log("\nthe page");
  const page = await fetch(`${BASE}/wallets`, { headers: { Cookie: cookie } });
  const html = await page.text();
  ok("/wallets renders", page.status === 200, `status ${page.status}`);
  ok("deck section is on the page", html.includes('id="wl-deck"'));
  ok("top-up section is on the page", html.includes('id="wl-topup"'));
  ok("all ten cartridges are in the deck", GENESIS.every((c) => html.includes(`data-slug="${c.slug}"`)));
  ok("the card object CSS came with it", html.includes(".tc-card"));
  ok("the exposure ceiling is printed", html.includes("Whole set, fully consumed"));
  ok("copy says allowance, never credits, for cartridges",
    html.includes("daily token allowance") && !/cartridge[^.]{0,60}credits are added/i.test(html));

  console.log("\nplug via the API");
  const plug = await fetch(`${BASE}/api/deck/plug`, {
    method: "POST", headers: { "Content-Type": "application/json", Cookie: cookie },
    body: JSON.stringify({ slug: APEX.slug, wallet_id: inf.id }),
  });
  const plugJ: any = await plug.json();
  ok("plug succeeds for a held card", plug.status === 200 && plugJ.ok === true, JSON.stringify(plugJ).slice(0, 160));

  // The page load grants preview holdings for all ten to a staging account, so
  // to test the refusal path a holding has to be taken away first.
  getDb().run("DELETE FROM genesis_holdings WHERE slug = ? AND user_id = ?", [GENESIS[5].slug, u.id]);
  const bad = await fetch(`${BASE}/api/deck/plug`, {
    method: "POST", headers: { "Content-Type": "application/json", Cookie: cookie },
    body: JSON.stringify({ slug: GENESIS[5].slug, wallet_id: inf.id }),
  });
  ok("plugging a card you do not hold is refused", bad.status === 403, `status ${bad.status}`);

  const devPlug = await fetch(`${BASE}/api/deck/plug`, {
    method: "POST", headers: { "Content-Type": "application/json", Cookie: cookie },
    body: JSON.stringify({ slug: APEX.slug, wallet_id: lanes.find((w) => w.purpose === "devtools")!.id }),
  });
  ok("plugging into the devtools lane is refused", devPlug.status === 400, `status ${devPlug.status}`);

  console.log("\nreal call ON the cartridge");
  const before = laneUsd();
  const onCart = await chat("cartridge");
  ok("call succeeds", onCart.status === 200, `status ${onCart.status}`);
  ok("response reports the cartridge", !!onCart.j?.vantis?.cartridge, JSON.stringify(onCart.j?.vantis || {}).slice(0, 140));
  ok("nothing was charged", onCart.j?.vantis?.cost_usd === 0);
  ok("nothing was burned", onCart.j?.vantis?.vantis_burned === 0);
  const after = laneUsd();
  ok("the lane's dollars did not move", Math.abs(after - before) < 1e-9, `${before} → ${after}`);
  const used = usageToday(APEX.slug, u.id);
  ok("the allowance recorded the tokens", used.tokens > 0, `${used.tokens} tokens`);
  ok("our real upstream cost was recorded", used.cost_usd > 0, `$${used.cost_usd}`);
  ok("the rate-limit header shows the raised lane rate",
    Number(onCart.headers.get("X-RateLimit-Limit")) >= 60, onCart.headers.get("X-RateLimit-Limit") || "none");

  console.log("\neject, then the same call bills credits again");
  const ej = await fetch(`${BASE}/api/deck/eject`, {
    method: "POST", headers: { "Content-Type": "application/json", Cookie: cookie },
    body: JSON.stringify({ slug: APEX.slug }),
  });
  ok("eject succeeds", ej.status === 200);
  const beforePaid = laneUsd();
  const paid = await chat("credits");
  ok("call succeeds", paid.status === 200, `status ${paid.status}`);
  ok("response is the normal burn shape", !paid.j?.vantis?.cartridge && paid.j?.vantis?.cost_usd > 0, JSON.stringify(paid.j?.vantis || {}).slice(0, 140));
  ok("credits were charged this time", laneUsd() < beforePaid, `${beforePaid} → ${laneUsd()}`);
  ok("a burn was recorded this time", paid.j?.vantis?.vantis_burned > 0);

  console.log("\nthe deck endpoint");
  const dk = await fetch(`${BASE}/api/deck`, { headers: { Cookie: cookie } });
  const dj: any = await dk.json();
  ok("/api/deck serves the deck", dk.status === 200 && dj.cards?.length === GENESIS.length);
  ok("it names the exposure ceiling", typeof dj.exposure?.worst_case_daily_usd === "number");
  ok("it marks pre-deploy ownership as preview", dj.ownership === "preview" && dj.contract === null);
  const apexRow = dj.cards.find((c: any) => c.slug === APEX.slug);
  ok("the held card reports its rights", apexRow?.rights?.daily_tokens > 0 && apexRow?.held === true);
  ok("allowance used today is visible", apexRow?.allowance?.used > 0, JSON.stringify(apexRow?.allowance || {}));
} finally {
  cleanup();
}

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
