// E2E probe of the live agent log: throwaway user → real scoring run against
// the LIVE service → assert the progress stream carried real events → clean
// up every row so /burn/stats returns to armed-at-zero.
// Usage: set -a; source .env; set +a; bun run scripts/progress-probe.ts

import { createUser, getDb } from "../server/db";
import { sessionSetCookie } from "../server/session";

const BASE = "http://127.0.0.1:8240";
const user = createUser({ username: `vcprobe${Date.now().toString(36)}`, name: "Probe Tester" });
const cookie = sessionSetCookie("did:privy:probe", user.id).split(";")[0];
console.log(`[probe] user ${user.x_username} (${user.id})`);

const seen: any[] = [];
const poller = setInterval(async () => {
  try {
    const r = await fetch(`${BASE}/onboard/progress/${user.id}`, { headers: { Cookie: cookie } });
    const p: any = await r.json();
    for (let i = seen.length; i < (p.events?.length || 0); i++) {
      seen.push(p.events[i]);
      const e = p.events[i];
      console.log(`  [+${(e.t / 1000).toFixed(1)}s] ${e.kind}${e.stage ? ` s${e.stage}` : ""}  ${e.label}`);
    }
  } catch {}
}, 500);

const res = await fetch(`${BASE}/onboard/score`, {
  method: "POST",
  headers: { "Content-Type": "application/json", Cookie: cookie },
  body: JSON.stringify({ uid: user.id }),
});
const data: any = await res.json();
clearInterval(poller);

// One final drain so late events are counted.
const fin: any = await (await fetch(`${BASE}/onboard/progress/${user.id}`, { headers: { Cookie: cookie } })).json();

const stages = new Set(fin.events.filter((e: any) => e.stage).map((e: any) => e.stage));
const checks: [string, boolean][] = [
  ["score POST ok", res.ok && typeof data.score === "number"],
  ["events flowed (>=6)", fin.events.length >= 6],
  ["all 4 stages seen", [1, 2, 3, 4].every((s) => stages.has(s))],
  ["done event present", fin.done === true],
  ["exa lane logged", fin.events.some((e: any) => /Researching/.test(e.label))],
  ["model lane logged", fin.events.some((e: any) => /Model/.test(e.label))],
  ["card minted", !!data.card?.handle],
];
for (const [name, ok] of checks) console.log(`${ok ? "PASS" : "FAIL"}  ${name}`);
console.log(`[result] ${data.score}/100 ${data.tier} $${data.grantUsd}`);

// Cleanup: throwaway leaves no trace, stats back to armed-at-zero.
const db = getDb();
db.run("DELETE FROM credit_transactions WHERE user_id = ?", [user.id]);
db.run("DELETE FROM exa_enrichments WHERE user_id = ?", [user.id]);
db.run("DELETE FROM cards WHERE user_id = ?", [user.id]);
db.run("DELETE FROM api_requests WHERE user_id = ?", [user.id]);
db.run("DELETE FROM users WHERE id = ?", [user.id]);
const stats: any = await (await fetch(`${BASE}/burn/stats`)).json();
console.log(`[cleanup] cards_issued=${stats.cards_issued} granted=$${stats.usd_granted_total} (expect 1 / $25)`);
if (checks.some(([, ok]) => !ok)) process.exit(1);
