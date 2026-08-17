// Terminal ↔ cartridge wiring, end-to-end over real HTTP + one REAL upstream
// call on the playground path (the surface the wallet terminal actually
// fires). Proves: meta carries the plugged cartridge, a terminal chat call
// draws the allowance and leaves lane dollars alone, ejecting restores
// credit billing, and an exhausted allowance falls back rather than failing.
//
// Point VANTIS_CARD_DB at a COPY and BASE at a server on that copy.

import {
  createUser, createCard, grantCredits, ensurePurposeWallets, fundAgentWallet,
  updateUser, getAgentWallet, getDb,
} from "../server/db";
import { ensureDeckTables, grantPreviewHolding, usageToday, noteCartridgeUsage, rightsFor } from "../server/deck";
import { sessionSetCookie } from "../server/session";
import { GENESIS } from "../server/genesis";

const BASE = process.env.BASE || "http://127.0.0.1:8341";
let pass = 0, fail = 0;
const ok = (n: string, c: boolean, d = "") => {
  if (c) { pass++; console.log(`  ok   ${n}`); }
  else { fail++; console.log(`  FAIL ${n}${d ? ` — ${d}` : ""}`); }
};

ensureDeckTables();

const u = createUser({ username: `tcart${Date.now().toString(36)}`, name: "Terminal Cart" });
createCard(u.id, `@${u.x_username}`, "explorer", 0, 0, 0.00185);
updateUser(u.id, { scored_at: new Date().toISOString().replace("T", " ").slice(0, 19), score: 40, score_tier: "explorer" } as any);
getDb().run("UPDATE users SET staging = 1 WHERE id = ?", [u.id]);
grantCredits(u.id, 5, "tcart seed");
const lanes = ensurePurposeWallets(u.id, false) as any[];
const inf = lanes.find((w) => w.purpose === "inference")!;
fundAgentWallet(u.id, inf.id, 2);
const cookie = sessionSetCookie("did:privy:tcart", u.id).split(";")[0];
const APEX = GENESIS[0];
grantPreviewHolding(u.id, APEX.slug);

const hdr = { "Content-Type": "application/json", Cookie: cookie };
const laneUsd = () => (getAgentWallet(inf.id) as any).usd_balance as number;

function cleanup() {
  const d = getDb();
  for (const t of ["lane_cartridges", "genesis_holdings", "cartridge_usage", "credit_transactions", "api_requests", "api_keys", "agent_wallets", "cards"])
    d.run(`DELETE FROM ${t} WHERE user_id = ?`, [u.id]);
  d.run("DELETE FROM users WHERE id = ?", [u.id]);
}

try {
  console.log("\nmeta before plugging");
  let meta: any = await (await fetch(`${BASE}/api/playground/meta`, { headers: hdr })).json();
  ok("no cartridge reported when nothing is plugged", meta.cartridge === null);

  console.log("\nplug, then meta");
  const plug = await fetch(`${BASE}/api/deck/plug`, { method: "POST", headers: hdr, body: JSON.stringify({ slug: APEX.slug, wallet_id: inf.id }) });
  ok("plug ok", plug.status === 200);
  meta = await (await fetch(`${BASE}/api/playground/meta`, { headers: hdr })).json();
  ok("meta carries the cartridge", meta.cartridge?.slug === APEX.slug, JSON.stringify(meta.cartridge)?.slice(0, 120));
  ok("meta carries name+grade for the face", meta.cartridge?.name === APEX.name && meta.cartridge?.grade === APEX.grade);
  ok("meta carries stats for the stat row", typeof meta.cartridge?.stats?.strike === "number");
  ok("meta carries the serial line", /N° 01\/10/.test(meta.cartridge?.serial || ""));
  ok("meta carries a fresh allowance", meta.cartridge?.allowance?.remaining === rightsFor(APEX.grade).dailyTokens);

  console.log("\nterminal fire ON the cartridge (real upstream call)");
  const before = laneUsd();
  const fire = await fetch(`${BASE}/api/playground/fire`, { method: "POST", headers: hdr, body: JSON.stringify({ prompt: "Reply with exactly: ok", stream: false }) });
  const fj: any = await fire.json();
  console.log(`    [fire] ${fire.status} cost=${fj.cost_usd} burned=${fj.vantis_burned} cart=${JSON.stringify(fj.cartridge)?.slice(0, 110)}`);
  ok("call succeeds", fire.status === 200, `status ${fire.status} ${JSON.stringify(fj).slice(0, 120)}`);
  ok("response reports the cartridge", fj.cartridge?.slug === APEX.slug);
  ok("cost shown is exactly 0 — no phantom estimate", fj.cost_usd === 0);
  ok("no burn", fj.vantis_burned === 0);
  ok("lane dollars did not move", Math.abs(laneUsd() - before) < 1e-9, `${before} → ${laneUsd()}`);
  const used = usageToday(APEX.slug, u.id);
  ok("allowance drew the tokens", used.tokens > 0, `${used.tokens}`);
  ok("our real upstream cost recorded", used.cost_usd > 0, `$${used.cost_usd}`);

  console.log("\nexhausted allowance → falls back to credits");
  noteCartridgeUsage(APEX.slug, u.id, rightsFor(APEX.grade).dailyTokens, 0); // burn the day
  const before2 = laneUsd();
  const fire2 = await fetch(`${BASE}/api/playground/fire`, { method: "POST", headers: hdr, body: JSON.stringify({ prompt: "Reply with exactly: ok", stream: false }) });
  const f2: any = await fire2.json();
  ok("call still succeeds", fire2.status === 200, `status ${fire2.status}`);
  ok("billed credits this time", !f2.cartridge && f2.cost_usd > 0, JSON.stringify({ cost: f2.cost_usd, cart: f2.cartridge }).slice(0, 100));
  ok("lane dollars moved this time", laneUsd() < before2, `${before2} → ${laneUsd()}`);

  console.log("\neject clears meta");
  await fetch(`${BASE}/api/deck/eject`, { method: "POST", headers: hdr, body: JSON.stringify({ slug: APEX.slug }) });
  meta = await (await fetch(`${BASE}/api/playground/meta`, { headers: hdr })).json();
  ok("cartridge gone from meta after eject", meta.cartridge === null);

  console.log("\nthe island bundle carries the new code");
  const wl = await (await fetch(`${BASE}/wallets`, { headers: hdr })).text();
  const island = (wl.match(/device-island-[a-z0-9]+\.js/) || [])[0];
  ok("wallets serves a device island", !!island, "no island script tag");
  if (island) {
    const js = await (await fetch(`${BASE}/assets/${island}`)).text();
    // function names are minified away — assert on a literal only the
    // Genesis painter contains (the back face legal line)
    ok("bundle bakes the Genesis face", js.includes("ONE-OF-ONE COLLECTIBLE"));
    ok("bundle boots with the cartridge line", js.includes("CARTRIDGE .................."));
    ok("bundle draws the allowance on HOME", js.includes("NO CREDIT SPEND WHILE THE ALLOWANCE HOLDS"));
    ok("bundle prints the cartridge settle line", js.includes("$0 CHARGED"));
  }
} finally {
  cleanup();
}

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
