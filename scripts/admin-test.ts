// Gateway + admin console tests against a locally running server.
// Seeds a throwaway user, exercises metering, rate limiting, suspension,
// daily caps and every admin mutation, then cleans up.
//
//   bun run scripts/admin-test.ts
//
// Cost: one real inference call (a few tokens). Everything else is refused
// before it reaches the upstream, deliberately.

import {
  getDb, createUser, getUserByX, grantCredits, generateApiKey, createCard,
  setUserLimits, setUserStatus, adminUserDetail,
} from "../server/db";
import { getVantisPrice, usdToVantis } from "../server/price";
import { TARGET_MODEL } from "../server/upstream";

const BASE = "http://127.0.0.1:8240";
const HANDLE = "admin_throwaway_delete_me";
const TOKEN = process.env.VANTIS_CARD_ADMIN_TOKEN || "";

let failures = 0;
const check = (name: string, ok: boolean, detail?: any) => {
  console.log(`${ok ? "PASS" : "FAIL"}  ${name}${detail !== undefined ? ` — ${JSON.stringify(detail)}` : ""}`);
  if (!ok) failures++;
};

async function seed() {
  let u = getUserByX(HANDLE);
  if (!u) u = createUser({ username: HANDLE, id: "0", name: "Admin Throwaway", public_metrics: {} });
  grantCredits(u.id, 1.0, "admin-test seed");
  const key = generateApiKey(u.id);
  const { price } = await getVantisPrice();
  createCard(u.id, `@${HANDLE}`, "builder", 1.0, usdToVantis(1.0, price), price);
  setUserLimits(u.id, 60, 0);
  setUserStatus(u.id, "active");
  return { user: getUserByX(HANDLE), key };
}

function cleanup() {
  const db = getDb();
  const u = getUserByX(HANDLE);
  if (u) {
    db.run("DELETE FROM api_requests WHERE user_id = ?", [u.id]);
    db.run("DELETE FROM admin_events WHERE target_user_id = ?", [u.id]);
    db.run("DELETE FROM credit_transactions WHERE user_id = ?", [u.id]);
    db.run("DELETE FROM cards WHERE user_id = ?", [u.id]);
    db.run("DELETE FROM users WHERE id = ?", [u.id]);
  }
  db.run("DELETE FROM admin_events WHERE detail LIKE '%admin-test%' OR action IN ('login','login_failed')");
}

const call = (key: string, body: any) =>
  fetch(`${BASE}/v1/chat/completions`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${key}` },
    body: JSON.stringify(body),
  });

// ── admin auth ──
if (!TOKEN) {
  console.error("VANTIS_CARD_ADMIN_TOKEN not set — source the project .env");
  process.exit(1);
}

const badLogin = await fetch(`${BASE}/admin/login`, {
  method: "POST", headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ token: "definitely-not-the-token" }),
});
check("wrong admin token → 401", badLogin.status === 401);

const login = await fetch(`${BASE}/admin/login`, {
  method: "POST", headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ token: TOKEN }),
});
check("correct admin token → 200", login.status === 200);
const cookie = (login.headers.get("set-cookie") || "").split(";")[0];
check("session cookie issued", cookie.startsWith("vc_admin="));
check("cookie is HttpOnly + SameSite=Strict", /HttpOnly/i.test(login.headers.get("set-cookie") || "") && /SameSite=Strict/i.test(login.headers.get("set-cookie") || ""));

const A = (path: string, opts: any = {}) =>
  fetch(`${BASE}/admin/api${path}`, { ...opts, headers: { "Content-Type": "application/json", Cookie: cookie, ...(opts.headers || {}) } });

check("admin api without cookie → 401", (await fetch(`${BASE}/admin/api/overview`)).status === 401);
check("forged cookie rejected", (await fetch(`${BASE}/admin/api/overview`, { headers: { Cookie: "vc_admin=9999999999999.deadbeef" } })).status === 401);

// ── seed + metering ──
const { user, key } = await seed();
console.log(`   seeded @${HANDLE} $1.00, key ${key.slice(0, 14)}…`);

const before = await (await A("/overview")).json();

const good = await call(key, { model: TARGET_MODEL, messages: [{ role: "user", content: "Reply OK" }], max_tokens: 16 });
check("metered call succeeds", good.status === 200, good.status);
const goodBody = await good.json();
check("rate-limit headers present", !!good.headers.get("X-RateLimit-Limit"), {
  limit: good.headers.get("X-RateLimit-Limit"), remaining: good.headers.get("X-RateLimit-Remaining"),
});

const det1 = adminUserDetail(user.id)!;
check("request was metered", det1.requests.length === 1, det1.requests[0]);
check("metering captured tokens + cost", det1.requests[0].tokens_out > 0 && det1.requests[0].cost_usd > 0, {
  tin: det1.requests[0].tokens_in, tout: det1.requests[0].tokens_out, cost: det1.requests[0].cost_usd,
});
check("metering captured latency", det1.requests[0].latency_ms > 0, det1.requests[0].latency_ms);
check("outcome recorded as ok", det1.requests[0].outcome === "ok");

const after = await (await A("/overview")).json();
check("overview call count advanced", after.allTime.calls > before.allTime.calls, { before: before.allTime.calls, after: after.allTime.calls });

// ── refusals are metered too ──
await call(key, { model: "gpt-5.6-sol", messages: [{ role: "user", content: "x" }] });
await fetch(`${BASE}/v1/chat/completions`, {
  method: "POST", headers: { "Content-Type": "application/json", Authorization: "Bearer vcard_nope" },
  body: JSON.stringify({ model: TARGET_MODEL, messages: [] }),
});
const det2 = adminUserDetail(user.id)!;
check("refused model is metered", det2.requests.some((r) => r.outcome === "unsupported_model"));
const anon = await (await A("/requests?outcome=unauthorized")).json();
check("unauthorized attempt is logged", anon.requests.length > 0, anon.requests[0]?.outcome);

// ── rate limiting (uses refused calls, so nothing reaches the upstream) ──
setUserLimits(user.id, 3, 0);
const codes: number[] = [];
for (let i = 0; i < 6; i++) {
  const r = await call(key, { model: "not-a-model", messages: [{ role: "user", content: "x" }] });
  codes.push(r.status);
}
check("rate limit kicks in at the configured rpm", codes.includes(429), codes);
const limited = codes.filter((c) => c === 429).length;
check("only the excess is limited", limited > 0 && limited < 6, { limited, codes });
const rl = await call(key, { model: "not-a-model", messages: [] });
check("429 carries Retry-After", !!rl.headers.get("Retry-After"), rl.headers.get("Retry-After"));
const det3 = adminUserDetail(user.id)!;
check("rate_limited outcome is metered", det3.requests.some((r) => r.outcome === "rate_limited"));

// ── suspension ──
setUserLimits(user.id, 60, 0);
const susp = await A(`/users/${user.id}/status`, { method: "POST", body: JSON.stringify({ status: "suspended" }) });
check("admin can suspend", susp.status === 200);
const blocked = await call(key, { model: TARGET_MODEL, messages: [{ role: "user", content: "x" }] });
check("suspended key → 403", blocked.status === 403, blocked.status);
check("suspended outcome is metered", adminUserDetail(user.id)!.requests.some((r) => r.outcome === "suspended"));
await A(`/users/${user.id}/status`, { method: "POST", body: JSON.stringify({ status: "active" }) });
check("admin can reactivate", adminUserDetail(user.id)!.user.status === "active");

// ── daily cap ──
await A(`/users/${user.id}/limits`, { method: "POST", body: JSON.stringify({ rate_limit_rpm: 60, daily_usd_cap: 0.0000001 }) });
const capped = await call(key, { model: TARGET_MODEL, messages: [{ role: "user", content: "x" }] });
check("daily cap refuses once exceeded", capped.status === 429, capped.status);
check("daily_cap outcome is metered", adminUserDetail(user.id)!.requests.some((r) => r.outcome === "daily_cap"));
await A(`/users/${user.id}/limits`, { method: "POST", body: JSON.stringify({ rate_limit_rpm: 60, daily_usd_cap: 0 }) });

// ── balance adjustment ──
const balBefore = adminUserDetail(user.id)!.user.usd_balance;
const adj = await (await A(`/users/${user.id}/balance`, { method: "POST", body: JSON.stringify({ delta_usd: 5, reason: "admin-test top-up" }) })).json();
check("admin can top up", Math.abs(adj.balance_usd - (balBefore + 5)) < 1e-9, { balBefore, after: adj.balance_usd });
const over = await A(`/users/${user.id}/balance`, { method: "POST", body: JSON.stringify({ delta_usd: 99999, reason: "x" }) });
check("oversized adjustment refused", over.status === 400, over.status);
const drain = await (await A(`/users/${user.id}/balance`, { method: "POST", body: JSON.stringify({ delta_usd: -99, reason: "admin-test claw back" }) })).json();
check("balance cannot go negative", drain.balance_usd === 0, drain.balance_usd);
check("adjustment lands in the ledger", adminUserDetail(user.id)!.ledger.some((l) => /admin-test/.test(l.description || "")));

// ── key rotation ──
const rot = await (await A(`/users/${user.id}/rotate-key`, { method: "POST" })).json();
check("rotation returns a new key", typeof rot.api_key === "string" && rot.api_key.startsWith("vcard_"));
check("new key differs from the old one", rot.api_key !== key);
const oldKeyRes = await call(key, { model: TARGET_MODEL, messages: [{ role: "user", content: "x" }] });
check("old key stops working", oldKeyRes.status === 401, oldKeyRes.status);

// ── key secrecy ──
const detApi = await (await A(`/users/${user.id}`)).json();
check("admin detail never returns a live key", !("api_key" in detApi.user) && !JSON.stringify(detApi).includes(rot.api_key));
const listApi = await (await A("/users")).json();
check("user list exposes prefixes only", !JSON.stringify(listApi).includes(rot.api_key));

// ── audit trail ──
const ev = await (await A("/events")).json();
const actions = ev.events.map((e: any) => e.action);
for (const a of ["set_status", "set_limits", "adjust_balance", "rotate_key"]) {
  check(`audit log records ${a}`, actions.includes(a));
}

// ── note ──
await A(`/users/${user.id}/note`, { method: "POST", body: JSON.stringify({ note: "watched — admin-test" }) });
check("note is stored", /admin-test/.test(adminUserDetail(user.id)!.user.admin_note || ""));

// ── console renders ──
const consoleHtml = await (await fetch(`${BASE}/admin`, { headers: { Cookie: cookie } })).text();
check("console renders when authed", consoleHtml.includes("VANTIS") && consoleHtml.includes("Request log"));
check("console is noindex", /noindex/.test(consoleHtml));
const loginHtml = await (await fetch(`${BASE}/admin`)).text();
check("login page shown when not authed", loginHtml.includes("Operator token"));

cleanup();
console.log(failures ? `\n${failures} FAILURES` : "\nALL PASS");
process.exit(failures ? 1 : 0);
