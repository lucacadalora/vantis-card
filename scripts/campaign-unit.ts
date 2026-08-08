// Campaign incentive logic, tested against the real DB with throwaways.
// Covers: referral fire/refusals (min score, self, cap), task once-ever,
// budget arithmetic. Cleans up completely.
import { getDb, createUser, updateUser, getUser } from "../server/db";
import { awardReferral, claimTask, referralEarnedUsd, campaignRemainingUsd } from "../server/campaign";

const db = getDb();
const mk = (name: string) => createUser({ username: name, id: null, name });
const A = mk(`cmpref${Date.now().toString(36)}`);   // referrer
const B = mk(`cmpref2${Date.now().toString(36)}`);  // referee
updateUser(A.id, { });
db.run("UPDATE users SET api_key = 'vcard_test_probe' WHERE id = ?", [A.id]);
updateUser(B.id, { referred_by: A.x_username });

const results: [string, boolean][] = [];
const t = (name: string, ok: boolean) => results.push([name, ok]);

const before = campaignRemainingUsd();

// 1. Min-score refusal: bot-tier referee pays nothing.
awardReferral(getUser(B.id), 5);
t("min-score refusal", referralEarnedUsd(A.id) === 0);

// 2. Real fire at a passing score.
awardReferral(getUser(B.id), 50);
t("referral fires", referralEarnedUsd(A.id) === 1);
t("budget decremented", Math.abs(campaignRemainingUsd() - (before - 1)) < 1e-9);

// 3. Self-referral blocked.
const C = mk(`cmpself${Date.now().toString(36)}`);
db.run("UPDATE users SET api_key = 'vcard_test_probe2', referred_by = ? WHERE id = ?", [C.x_username, C.id]);
awardReferral(getUser(C.id), 50);
t("self-referral blocked", referralEarnedUsd(C.id) === 0);

// 4. Cap: pre-load earnings at the cap, next award refused.
db.run(
  "INSERT INTO credit_transactions (user_id, type, amount_usd, description) VALUES (?, 'grant', 9.5, 'Campaign: referral — preload')",
  [A.id]
);
awardReferral(getUser(B.id), 50); // 10.5 + 1 would exceed 10 → refused
t("referrer cap enforced", referralEarnedUsd(A.id) === 10.5);

// 5. Tasks: once ever.
const c1 = claimTask(A.id, "follow");
const c2 = claimTask(A.id, "follow");
t("task claim ok", c1.ok === true && c1.reward === 0.5);
t("task re-claim refused", c2.ok === false && c2.error === "already_claimed");

for (const [name, ok] of results) console.log(`${ok ? "PASS" : "FAIL"}  ${name}`);

// Cleanup — leave no campaign trace.
for (const u of [A, B, C]) {
  db.run("DELETE FROM credit_transactions WHERE user_id = ?", [u.id]);
  db.run("DELETE FROM campaign_tasks WHERE user_id = ?", [u.id]);
  db.run("DELETE FROM users WHERE id = ?", [u.id]);
}
console.log("cleaned; campaign remaining:", campaignRemainingUsd());
if (results.some(([, ok]) => !ok)) process.exit(1);
