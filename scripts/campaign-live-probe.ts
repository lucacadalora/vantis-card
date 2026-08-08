// LIVE end-to-end of the campaign mechanics against the running service:
// referral bonus through a real scoring run, task claims over real HTTP,
// the /r/ cookie handoff, and every refusal path. Cleans up completely.
// The one link this cannot fake is Privy sign-in carrying the cookie into
// attribution — referred_by is preset here; that binding is covered by code
// and proves itself with the first real referred signup.
import { getDb, createUser, getUser, createCard } from "../server/db";
import { sessionSetCookie } from "../server/session";

const BASE = "http://127.0.0.1:8240";
const db = getDb();
const results: [string, boolean][] = [];
const t = (name: string, ok: boolean) => { results.push([name, ok]); console.log(`${ok ? "PASS" : "FAIL"}  ${name}`); };

// Referrer: a card-holder (api_key is what awardReferral requires).
const R = createUser({ username: `cmpr${Date.now().toString(36)}`, name: "Ref Errer" });
db.run("UPDATE users SET api_key = 'vcard_live_probe_r' WHERE id = ?", [R.id]);
createCard(R.id, `@${R.x_username}`, "builder", 0, 0, 0.002); // referral gate now requires a card
// Referee: heavy enough profile to clear the score floor, attributed to R.
const E = createUser({ username: `cmpe${Date.now().toString(36)}`, name: "Luca Cada Lora" });
db.run("UPDATE users SET referred_by = ?, github_username='lucacadalora', github_public_repos=41, github_total_stars=84, github_top_repos='[{\"name\":\"hood-intel\",\"language\":\"TypeScript\",\"stars\":34}]', github_languages='[\"TypeScript\",\"Python\"]' WHERE id = ?", [R.x_username, E.id]);

const ck = (uid: string) => sessionSetCookie("did:privy:liveprobe", uid).split(";")[0];

// 1. The /r/ link sets the attribution cookie.
const rRes = await fetch(`${BASE}/r/${R.x_username}`, { redirect: "manual" });
const setCk = rRes.headers.get("set-cookie") || "";
t("/r/ sets vc_ref cookie", rRes.status === 302 && setCk.includes(`vc_ref=${R.x_username}`));

// 2. Real scoring run for the referee through the live async endpoint.
const post = await fetch(`${BASE}/onboard/score`, {
  method: "POST",
  headers: { "Content-Type": "application/json", Cookie: ck(E.id) },
  body: JSON.stringify({ uid: E.id }),
});
t("scoring run started", post.status === 202);
const t0 = Date.now();
let done = false;
while (Date.now() - t0 < 150000 && !done) {
  await new Promise((r) => setTimeout(r, 1200));
  const p: any = await (await fetch(`${BASE}/onboard/progress/${E.id}`, { headers: { Cookie: ck(E.id) } })).json();
  done = !!p.done;
}
const eAfter = getUser(E.id);
t("referee scored above floor", done && (eAfter?.score || 0) >= 10);

// 3. Referrer got exactly one +$1 with the labeled reason.
const refTx = db.query("SELECT COUNT(*) AS n, COALESCE(SUM(amount_usd),0) AS s FROM credit_transactions WHERE user_id = ? AND description LIKE 'Campaign: referral%'").get(R.id) as any;
const rAfter = getUser(R.id);
t("referral bonus granted once (+$1)", refTx.n === 1 && Math.abs(refTx.s - 1) < 1e-9);
t("referrer balance carries the dollar", Math.abs((rAfter?.usd_balance || 0) - 1) < 1e-9);

// 4. Task claims over real HTTP with the referrer's session.
const c1: any = await (await fetch(`${BASE}/api/task/claim`, { method: "POST", headers: { "Content-Type": "application/json", Cookie: ck(R.id) }, body: JSON.stringify({ task: "follow" }) })).json();
const c2r = await fetch(`${BASE}/api/task/claim`, { method: "POST", headers: { "Content-Type": "application/json", Cookie: ck(R.id) }, body: JSON.stringify({ task: "follow" }) });
const c3: any = await (await fetch(`${BASE}/api/task/claim`, { method: "POST", headers: { "Content-Type": "application/json", Cookie: ck(R.id) }, body: JSON.stringify({ task: "share" }) })).json();
t("follow claim pays $0.50", c1.ok === true && c1.reward === 0.5);
t("second follow claim refused 409", c2r.status === 409);
t("share claim pays $0.50", c3.ok === true && c3.reward === 0.5);
const rFinal = getUser(R.id);
t("referrer totals $2.00 across ledger", Math.abs((rFinal?.usd_balance || 0) - 2) < 1e-9);

// 5. Refusals: no session and cardless users.
const anon = await fetch(`${BASE}/api/task/claim`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ task: "follow" }) });
t("anonymous claim 401", anon.status === 401);
const N = createUser({ username: `cmpn${Date.now().toString(36)}`, name: "No Card" });
const cardless = await fetch(`${BASE}/api/task/claim`, { method: "POST", headers: { "Content-Type": "application/json", Cookie: ck(N.id) }, body: JSON.stringify({ task: "follow" }) });
t("cardless user refused 403", cardless.status === 403);
const carded = await fetch(`${BASE}/api/task/claim`, { method: "POST", headers: { "Content-Type": "application/json", Cookie: ck(E.id) }, body: JSON.stringify({ task: "follow" }) });
t("carded-but-keyless referee may claim", carded.status === 200);

// Cleanup — no trace, budget restored.
for (const u of [R, E, N]) {
  db.run("DELETE FROM credit_transactions WHERE user_id = ?", [u.id]);
  db.run("DELETE FROM campaign_tasks WHERE user_id = ?", [u.id]);
  db.run("DELETE FROM exa_enrichments WHERE user_id = ?", [u.id]);
  db.run("DELETE FROM cards WHERE user_id = ?", [u.id]);
  db.run("DELETE FROM api_requests WHERE user_id = ?", [u.id]);
  db.run("DELETE FROM users WHERE id = ?", [u.id]);
}
const spent = db.query("SELECT COALESCE(SUM(amount_usd),0) AS s FROM credit_transactions WHERE description LIKE 'Campaign:%'").get() as any;
console.log(`cleaned — campaign spent on record: $${spent.s}`);
if (results.some(([, ok]) => !ok)) process.exit(1);
