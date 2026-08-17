// Deck / cartridge tests — the question this answers is narrow and important:
// when a Genesis cartridge is plugged into a lane, does the call actually run
// on the ALLOWANCE and leave the lane's dollars alone, and does an exhausted
// or unheld cartridge fall back to credits instead of running free?
//
// Runs against a throwaway user on whatever DB VANTIS_CARD_DB points at, and
// purges everything it created. Point it at a COPY, never production, unless
// you mean it: `VANTIS_CARD_DB=/tmp/test.db bun run scripts/deck-test.ts`.
//
// The one real inference call is opt-in (LIVE=1) because it spends actual
// upstream money; everything else is exercised against the metering layer.

import {
  createUser, createCard, grantCredits, ensurePurposeWallets, fundAgentWallet,
  updateUser, getAgentWallet, getDb,
} from "../server/db";
import {
  ensureDeckTables, grantPreviewHolding, plugCartridge, ejectCartridge,
  cartridgeFor, laneRpmBoost, allowanceState, noteCartridgeUsage, usageToday,
  holdTokens, releaseTokens, rightsFor, exposure, holdsCard, cartridgeInLane,
} from "../server/deck";
import { GENESIS, ALL_CARDS } from "../server/genesis";

let pass = 0, fail = 0;
const ok = (name: string, cond: boolean, detail = "") => {
  if (cond) { pass++; console.log(`  ok   ${name}`); }
  else { fail++; console.log(`  FAIL ${name}${detail ? ` — ${detail}` : ""}`); }
};
const eq = (name: string, got: any, want: any) =>
  ok(name, JSON.stringify(got) === JSON.stringify(want), `got ${JSON.stringify(got)}, want ${JSON.stringify(want)}`);

ensureDeckTables();

// ── fixtures ───────────────────────────────────────────────────────────
const u = createUser({ username: `decktest${Date.now().toString(36)}`, name: "Deck Test" });
createCard(u.id, `@${u.x_username}`, "explorer", 0, 0, 0.00185);
updateUser(u.id, { scored_at: new Date().toISOString().replace("T", " ").slice(0, 19), score: 40, score_tier: "explorer" } as any);
getDb().run("UPDATE users SET staging = 1 WHERE id = ?", [u.id]);
grantCredits(u.id, 5, "deck-test seed");
const lanes = ensurePurposeWallets(u.id, false) as any[];
const inf = lanes.find((w) => w.purpose === "inference")!;
const dev = lanes.find((w) => w.purpose === "devtools")!;
fundAgentWallet(u.id, inf.id, 2);

const other = createUser({ username: `deckother${Date.now().toString(36)}`, name: "Other" });

const APEX = GENESIS[0];              // V·PROOF
const SPEC = GENESIS.find((c) => c.grade === "SPECIMEN")!;

function cleanup() {
  const d = getDb();
  for (const id of [u.id, other.id]) {
    d.run("DELETE FROM lane_cartridges WHERE user_id = ?", [id]);
    d.run("DELETE FROM genesis_holdings WHERE user_id = ?", [id]);
    d.run("DELETE FROM cartridge_usage WHERE user_id = ?", [id]);
    d.run("DELETE FROM credit_transactions WHERE user_id = ?", [id]);
    d.run("DELETE FROM api_requests WHERE user_id = ?", [id]);
    d.run("DELETE FROM api_keys WHERE user_id = ?", [id]);
    d.run("DELETE FROM agent_wallets WHERE user_id = ?", [id]);
    d.run("DELETE FROM cards WHERE user_id = ?", [id]);
    d.run("DELETE FROM users WHERE id = ?", [id]);
  }
}

try {
  console.log("\nexposure");
  const ex = exposure();
  // Ceiling re-based Aug 13: OG·PROOF carries 1B tokens/day (Luca's number),
  // so the finite bound moved from ~$3 to ~$283 — still arithmetic, not hope.
  ok("whole set has a finite daily ceiling", ex.worst_case_daily_usd > 0 && ex.worst_case_daily_usd < 400, `$${ex.worst_case_daily_usd}`);
  ok("ceiling is derived from the live set", ex.per_grade.reduce((s, g) => s + g.cards, 0) === ALL_CARDS.length);
  ok("rpm ceiling leaves upstream headroom", ex.worst_case_rpm < 500, `${ex.worst_case_rpm}/min`);

  console.log("\nholding and plugging");
  ok("unheld card carries no rights", cartridgeFor(inf.id, 1000) === null);
  grantPreviewHolding(u.id, APEX.slug);
  ok("holding is recorded", !!holdsCard(u.id, APEX.slug));
  ok("held but unplugged still carries no lane rights", cartridgeFor(inf.id, 1000) === null);

  plugCartridge(u.id, inf.id, APEX.slug);
  eq("cartridge is in the lane", cartridgeInLane(inf.id)?.slug, APEX.slug);
  ok("plugged cartridge carries rights", cartridgeFor(inf.id, 1000) !== null);
  eq("lane rate is raised to the card's", laneRpmBoost(inf.id), rightsFor(APEX.grade).rpm);
  eq("a lane with no cartridge gets no boost", laneRpmBoost(dev.id), 0);

  console.log("\none-of-one exclusivity");
  grantPreviewHolding(u.id, SPEC.slug);
  plugCartridge(u.id, inf.id, SPEC.slug);
  eq("plugging a second card into one lane replaces the first", cartridgeInLane(inf.id)?.slug, SPEC.slug);
  // Scoped to THIS holder: preview holdings are per-account, so the same slug
  // can legitimately sit in another tester's lane at the same time.
  ok("the displaced card is no longer in any of this holder's lanes",
    !(getDb().query("SELECT 1 FROM lane_cartridges WHERE slug = ? AND user_id = ?").get(APEX.slug, u.id)));
  plugCartridge(u.id, inf.id, APEX.slug);

  console.log("\nownership is checked on every call, not just at plug time");
  // Simulate the card changing hands without anyone unplugging it.
  getDb().run("UPDATE genesis_holdings SET user_id = ? WHERE slug = ? AND user_id = ?", [other.id, APEX.slug, u.id]);
  ok("a sold cartridge stops paying immediately", cartridgeFor(inf.id, 1000) === null);
  eq("and stops boosting the lane rate", laneRpmBoost(inf.id), 0);
  getDb().run("UPDATE genesis_holdings SET user_id = ? WHERE slug = ? AND user_id = ?", [u.id, APEX.slug, other.id]);
  ok("restored ownership restores rights", cartridgeFor(inf.id, 1000) !== null);

  console.log("\nallowance accounting");
  const rights = rightsFor(APEX.grade);
  const st0 = allowanceState(APEX.slug, u.id)!;
  eq("allowance starts at the grade's daily limit", st0.remaining, rights.dailyTokens);
  eq("limit matches the rights table", st0.limit, rights.dailyTokens);

  noteCartridgeUsage(APEX.slug, u.id, 250_000, 0.07);
  const st1 = allowanceState(APEX.slug, u.id)!;
  eq("usage draws the allowance down", st1.used, 250_000);
  eq("remaining reflects the draw", st1.remaining, rights.dailyTokens - 250_000);
  eq("real upstream cost is recorded separately", +usageToday(APEX.slug, u.id).cost_usd.toFixed(4), 0.07);
  eq("calls are counted", usageToday(APEX.slug, u.id).calls, 1);

  noteCartridgeUsage(APEX.slug, u.id, 100_000, 0.03);
  eq("usage accumulates within the day", allowanceState(APEX.slug, u.id)!.used, 350_000);
  eq("cost accumulates too", +usageToday(APEX.slug, u.id).cost_usd.toFixed(4), 0.1);

  console.log("\nin-flight holds close the overdraw race");
  const before = allowanceState(APEX.slug, u.id)!.remaining;
  holdTokens(APEX.slug, u.id, 1_000_000);
  eq("a hold reduces what the next call may claim", allowanceState(APEX.slug, u.id)!.remaining, before - 1_000_000);
  ok("a call larger than what is left after holds is refused",
    cartridgeFor(inf.id, before - 500_000) === null);
  releaseTokens(APEX.slug, u.id, 1_000_000);
  eq("releasing the hold restores the allowance", allowanceState(APEX.slug, u.id)!.remaining, before);

  console.log("\nexhaustion falls back to credits, it does not fail");
  noteCartridgeUsage(APEX.slug, u.id, rights.dailyTokens, 0);
  eq("allowance can be fully spent", allowanceState(APEX.slug, u.id)!.remaining, 0);
  ok("an exhausted cartridge stops covering calls", cartridgeFor(inf.id, 1) === null);
  eq("but the lane keeps the raised rate — priority is a separate right", laneRpmBoost(inf.id), rights.rpm);
  ok("the lane still has its credits, untouched by any of this",
    (getAgentWallet(inf.id) as any).usd_balance === 2, `balance ${(getAgentWallet(inf.id) as any).usd_balance}`);

  console.log("\neject");
  ejectCartridge(inf.id);
  ok("ejected cartridge is out of the lane", cartridgeInLane(inf.id) === null);
  eq("and the rate boost is gone", laneRpmBoost(inf.id), 0);

  console.log("\nledger separation");
  // 'consume' is what settlement writes. Grants and lane transfers are the
  // fixture's own doing and are expected — the claim under test is that an
  // allowance draw never becomes a settlement.
  const txn = getDb().query("SELECT COUNT(*) AS n FROM credit_transactions WHERE user_id = ? AND type = 'consume'").get(u.id) as any;
  eq("no settlement rows were written for allowance usage", txn.n, 0);
  const drawn = usageToday(APEX.slug, u.id);
  ok("allowance usage is recorded in its own ledger instead", drawn.calls > 0 && drawn.tokens > 0, `${drawn.calls} calls, ${drawn.tokens} tokens`);
} finally {
  cleanup();
}

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
