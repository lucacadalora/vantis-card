// Admin console for the gateway.
//
// Auth is a single operator token (VANTIS_CARD_ADMIN_TOKEN) exchanged for an
// HMAC-signed, expiring cookie. Deliberately not Clerk: there is exactly one
// operator, and a shared secret with a signed cookie has no third-party
// dependency and no user table to keep in sync.
//
// Rules held here:
//  - a live API key is NEVER returned by any admin endpoint (prefix only),
//    except once, at the moment of rotation, to the operator who asked
//  - every mutating action writes an admin_events row
//  - login attempts are rate-limited per IP

import { Hono } from "hono";
import { createHmac, timingSafeEqual, randomBytes } from "crypto";
import {
  adminOverview, adminUsers, adminUserDetail, adminRequests, adminEvents,
  setUserStatus, setUserLimits, setAdminNote, adjustBalance, rotateApiKey,
  adminEvent, getUser, getDb,
} from "./db";
import { clientIp, upstreamLoad } from "./gateway";
import { campaignRemainingUsd, campaignConfig, grantPoolSpentUsd, grantPoolUsd } from "./campaign";
import { adminHtml, adminLoginHtml } from "./admin-pages";

const TOKEN = process.env.VANTIS_CARD_ADMIN_TOKEN || "";
// The operator identity. It IS shown on the login page (Luca's call: one
// field to fill, not two) — so it is an identity label rather than a secret.
// The token remains the only thing that actually grants access.
const EMAIL = (process.env.VANTIS_CARD_ADMIN_EMAIL || "").trim().toLowerCase();
// A stable secret so sessions survive a restart. Falls back to a random one,
// which simply means everyone is logged out after a redeploy.
const SECRET = process.env.VANTIS_CARD_ADMIN_SECRET || randomBytes(32).toString("hex");
const COOKIE = "vc_admin";
const TTL_MS = 12 * 60 * 60 * 1000;

const sign = (payload: string) => createHmac("sha256", SECRET).update(payload).digest("hex");

function mint(): string {
  const exp = Date.now() + TTL_MS;
  return `${exp}.${sign(String(exp))}`;
}

function valid(cookie?: string): boolean {
  if (!cookie) return false;
  const [expStr, mac] = cookie.split(".");
  if (!expStr || !mac) return false;
  const exp = parseInt(expStr);
  if (!isFinite(exp) || Date.now() > exp) return false;
  const expected = sign(expStr);
  const a = Buffer.from(mac, "utf8");
  const b = Buffer.from(expected, "utf8");
  return a.length === b.length && timingSafeEqual(a, b);
}

function eq(a: string, b: string): boolean {
  const ba = Buffer.from(a, "utf8"), bb = Buffer.from(b, "utf8");
  return ba.length === bb.length && timingSafeEqual(ba, bb);
}

const readCookie = (header: string | undefined, name: string) =>
  header?.split(";").map((s) => s.trim()).find((s) => s.startsWith(name + "="))?.slice(name.length + 1);

// The staging /console reuses the operator session as one of its two gates.
export const hasAdminSession = (cookieHeader: string | undefined): boolean =>
  valid(readCookie(cookieHeader, COOKIE));

// per-IP login throttle
const attempts = new Map<string, { n: number; until: number }>();
function loginAllowed(ip: string): boolean {
  const rec = attempts.get(ip);
  if (rec && Date.now() < rec.until) return rec.n < 8;
  attempts.set(ip, { n: 0, until: Date.now() + 15 * 60_000 });
  return true;
}
function loginFailed(ip: string) {
  const rec = attempts.get(ip) || { n: 0, until: Date.now() + 15 * 60_000 };
  rec.n++;
  attempts.set(ip, rec);
}

// A correct sign-in clears the counter, so the throttle punishes a run of
// failures rather than an operator who fat-fingered the token and then got
// it right.
function loginSucceeded(ip: string) {
  attempts.delete(ip);
}

export const admin = new Hono();

// ─── auth ───
admin.get("/", (c) => {
  if (!TOKEN) return c.html(adminLoginHtml("Admin is not configured. Set VANTIS_CARD_ADMIN_TOKEN and VANTIS_CARD_ADMIN_EMAIL, then restart."), 503);
  if (!valid(readCookie(c.req.header("Cookie"), COOKIE))) return c.html(adminLoginHtml(undefined, EMAIL));
  return c.html(adminHtml());
});

// Vendor view: every OUTBOUND API call the service makes, per vendor —
// inference upstreams, X API, Exa, DexScreener. Operator-only.
admin.get("/vendors", (c) => {
  if (!TOKEN) return c.html(adminLoginHtml("Admin is not configured."), 503);
  if (!valid(readCookie(c.req.header("Cookie"), COOKIE))) return c.html(adminLoginHtml(undefined, EMAIL));
  const db = getDb();
  const agg = (win: string) => db.query(`
    SELECT vendor, COUNT(*) AS n,
           SUM(CASE WHEN status IS NULL OR status >= 400 THEN 1 ELSE 0 END) AS errs,
           SUM(COALESCE(tokens_in,0)) AS tin, SUM(COALESCE(tokens_out,0)) AS tout,
           SUM(COALESCE(cost_est_usd,0)) AS cost,
           ROUND(AVG(latency_ms)) AS avg_ms, MAX(latency_ms) AS max_ms
    FROM vendor_requests WHERE created_at >= datetime('now', ?)
    GROUP BY vendor ORDER BY n DESC`).all(win) as any[];
  const day = agg("-1 day");
  const week = agg("-7 days");
  const recent = db.query(`
    SELECT v.created_at, v.vendor, v.endpoint, v.status, v.latency_ms, v.tokens_in, v.tokens_out, v.cost_est_usd, v.error, u.x_username
    FROM vendor_requests v LEFT JOIN users u ON u.id = v.user_id
    ORDER BY v.id DESC LIMIT 60`).all() as any[];
  const esc = (v: any) => String(v ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;");
  const money = (n: number) => (n > 0 ? "$" + n.toFixed(4) : "—");
  const tok = (n: number) => (n >= 1e6 ? (n / 1e6).toFixed(1) + "M" : n >= 1e3 ? (n / 1e3).toFixed(1) + "K" : String(n || 0));
  const tiles = day.map((r) => `<div class="tile"><b>${r.n}</b><span>${esc(r.vendor)} · 24h</span>
    <div class="sub">${r.errs} err &middot; ${tok(r.tin)}/${tok(r.tout)} tok &middot; ~${money(r.cost)} &middot; ${r.avg_ms ?? "—"}ms avg</div></div>`).join("");
  const weekRows = week.map((r) => `<tr><td>${esc(r.vendor)}</td><td>${r.n}</td><td>${r.errs}</td><td>${tok(r.tin)}</td><td>${tok(r.tout)}</td><td>${money(r.cost)}</td><td>${r.avg_ms ?? "—"}ms</td><td>${r.max_ms ?? "—"}ms</td></tr>`).join("");
  const recentRows = recent.map((r) => `<tr><td>${esc(r.created_at)}</td><td>${esc(r.vendor)}</td><td>${esc(r.endpoint)}</td><td>${r.status ?? "—"}</td><td>${r.latency_ms ?? "—"}ms</td><td>${r.tokens_in ?? "—"}/${r.tokens_out ?? "—"}</td><td>${r.cost_est_usd ? "$" + Number(r.cost_est_usd).toFixed(6) : "—"}</td><td>${r.x_username ? "@" + esc(r.x_username) : "—"}</td><td>${esc(r.error || "")}</td></tr>`).join("");
  return c.html(`<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Vendors — Vantis Cards admin</title><style>
    body { font-family: Inter, system-ui, sans-serif; background:#F4F4F0; color:#1A1A18; margin:0; padding:32px; }
    h1 { font-size:22px; margin:0 0 4px; } h2 { font-size:15px; margin:28px 0 10px; }
    .tiles { display:flex; gap:14px; margin:18px 0 8px; flex-wrap:wrap; }
    .tile { background:#fff; border:1px solid #E4E4DC; border-radius:12px; padding:14px 18px; min-width:200px; }
    .tile b { display:block; font-size:20px; } .tile span { font-size:11px; color:#8A8A80; text-transform:uppercase; letter-spacing:.08em; }
    .tile .sub { font-size:11.5px; color:#5A5A52; margin-top:6px; font-family:ui-monospace,monospace; }
    table { width:100%; border-collapse:collapse; background:#fff; border:1px solid #E4E4DC; border-radius:12px; overflow:hidden; font-size:12.5px; }
    th, td { text-align:left; padding:8px 10px; border-bottom:1px solid #EFEFE9; white-space:nowrap; }
    th { font-size:10.5px; text-transform:uppercase; letter-spacing:.08em; color:#8A8A80; background:#FAFAF6; }
    .wrap { overflow-x:auto; } a { color:#0B7A3E; }
    .note { font-size:12px; color:#8A8A80; margin-top:8px; }
  </style></head><body>
  <h1>Vendors</h1><a href="/admin">&larr; Console</a> &middot; <a href="/admin/campaign">Campaign</a>
  <div class="tiles">${tiles || '<div class="tile"><b>0</b><span>no vendor calls yet · 24h</span></div>'}</div>
  <h2>Last 7 days</h2><div class="wrap"><table><tr><th>vendor</th><th>calls</th><th>errors</th><th>tok in</th><th>tok out</th><th>est cost</th><th>avg</th><th>max</th></tr>${weekRows}</table></div>
  <p class="note">Est cost uses documented list prices only (X $0.01/read, Exa $0.005/search, Wafer + DeepSeek token rates). Jatevo and Ark invoices are their own — shown as tokens, never a fabricated dollar figure.</p>
  <h2>Recent calls</h2><div class="wrap"><table><tr><th>when</th><th>vendor</th><th>endpoint</th><th>status</th><th>latency</th><th>tok in/out</th><th>est cost</th><th>user</th><th>error</th></tr>${recentRows}</table></div>
  </body></html>`);
});

// Campaign view: everyone who registered, every reservation, the spend.
admin.get("/campaign", (c) => {
  if (!TOKEN) return c.html(adminLoginHtml("Admin is not configured."), 503);
  if (!valid(readCookie(c.req.header("Cookie"), COOKIE))) return c.html(adminLoginHtml(undefined, EMAIL));
  const db = getDb();
  const regs = db.query(`
    SELECT u.created_at, u.x_username, u.x_followers, u.score, u.score_tier, u.usd_granted, u.usd_balance,
           u.referred_by, u.privy_user_id IS NOT NULL AS privy, u.wallet_address, u.api_key IS NOT NULL AS haskey,
           u.github_username, u.linkedin_name, u.linkedin_vanity, u.linkedin_domain, u.linkedin_connected_at,
           c.handle AS card_handle
    FROM users u LEFT JOIN cards c ON c.user_id = u.id
    ORDER BY u.created_at DESC LIMIT 500`).all() as any[];
  const rsv = db.query(`
    SELECT handle, ref, privy_did IS NOT NULL AS bound, claimed_user_id IS NOT NULL AS claimed, ip, created_at
    FROM reservations ORDER BY rowid DESC LIMIT 500`).all() as any[];
  const spent = db.query("SELECT COALESCE(SUM(amount_usd),0) AS s, COUNT(*) AS n FROM credit_transactions WHERE description LIKE 'Campaign:%'").get() as any;
  const esc = (v: any) => String(v ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;");
  const short = (a: any) => (a && String(a).length > 12 ? `${String(a).slice(0, 6)}…${String(a).slice(-4)}` : a || "");
  const regRows = regs.map((r) => `<tr><td>${esc(r.created_at)}</td><td>@${esc(r.x_username)}</td><td>${esc(r.card_handle || "—")}</td><td>${r.score ?? "—"}${r.score_tier ? ` · ${esc(r.score_tier)}` : ""}</td><td>${esc(r.github_username || "—")}</td><td>${r.linkedin_name ? (r.linkedin_vanity ? `<a href="https://www.linkedin.com/in/${esc(r.linkedin_vanity)}" target="_blank" rel="noopener">${esc(r.linkedin_name)}</a>` : esc(r.linkedin_name)) + (r.linkedin_domain ? ` · ${esc(r.linkedin_domain)}` : "") : r.linkedin_connected_at ? "linked · name pending" : "—"}</td><td>$${Number(r.usd_granted || 0).toFixed(2)}</td><td>$${Number(r.usd_balance || 0).toFixed(2)}</td><td>${esc(r.referred_by || "—")}</td><td>${r.privy ? "privy" : "oauth"}</td><td>${esc(short(r.wallet_address))}</td><td>${r.haskey ? "issued" : "pending"}</td></tr>`).join("");
  const rsvRows = rsv.map((r) => `<tr><td>${esc(r.created_at)}</td><td>@${esc(r.handle)}</td><td>${r.bound ? "signed in" : "typed only"}</td><td>${r.claimed ? "carded" : "—"}</td><td>${esc(r.ref || "—")}</td><td>${esc(r.ip || "")}</td></tr>`).join("");
  return c.html(`<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Campaign — Vantis Cards admin</title><style>
    body { font-family: Inter, system-ui, sans-serif; background:#F4F4F0; color:#1A1A18; margin:0; padding:32px; }
    h1 { font-size:22px; margin:0 0 4px; } h2 { font-size:15px; margin:28px 0 10px; }
    .tiles { display:flex; gap:14px; margin:18px 0 8px; flex-wrap:wrap; }
    .tile { background:#fff; border:1px solid #E4E4DC; border-radius:12px; padding:14px 18px; min-width:140px; }
    .tile b { display:block; font-size:20px; } .tile span { font-size:11px; color:#8A8A80; text-transform:uppercase; letter-spacing:.08em; }
    .tile .sub { font-size:11.5px; color:#5A5A52; margin-top:6px; font-family:ui-monospace,monospace; }
    table { width:100%; border-collapse:collapse; background:#fff; border:1px solid #E4E4DC; border-radius:12px; overflow:hidden; font-size:12.5px; }
    th, td { text-align:left; padding:8px 10px; border-bottom:1px solid #EFEFE9; white-space:nowrap; }
    th { font-size:10.5px; text-transform:uppercase; letter-spacing:.08em; color:#8A8A80; background:#FAFAF6; }
    .wrap { overflow-x:auto; } a { color:#0B7A3E; }
  </style></head><body>
  <h1>Campaign</h1><a href="/admin">&larr; Console</a> &middot; <a href="/admin/vendors">Vendors</a>
  <div class="tiles">
    <div class="tile"><b>${regs.length}</b><span>registered</span></div>
    <div class="tile"><b>${regs.filter((r) => r.card_handle).length}</b><span>carded</span></div>
    <div class="tile"><b>${rsv.length}</b><span>reservations</span></div>
    <div class="tile"><b>${rsv.filter((r) => r.bound).length}</b><span>bound (signed in)</span></div>
    <div class="tile"><b>$${(Number(spent?.s || 0) + Number(grantPoolSpentUsd())).toFixed(2)}</b><span>total credits promised</span>
      <div class="sub">${grantPoolUsd() > 0 ? `grant pool $${grantPoolSpentUsd().toFixed(2)} / $${grantPoolUsd().toFixed(0)}` : `grant pool $${grantPoolSpentUsd().toFixed(2)} / uncapped`}</div></div>
    <div class="tile"><b>$${Number(spent?.s || 0).toFixed(2)}</b><span>tasks + referrals (${spent?.n || 0} payouts)</span>
      <div class="sub">$${campaignRemainingUsd().toFixed(2)} left of $${campaignConfig().budgetUsd.toFixed(0)}</div></div>
  </div>
  <div class="tiles">
    <div class="tile"><b>${regs.filter((r) => r.github_username).length}/${regs.length}</b><span>github connected</span></div>
    <div class="tile"><b>${regs.filter((r) => r.linkedin_domain || r.linkedin_connected_at).length}/${regs.length}</b><span>linkedin connected</span></div>
  </div>
  <h2>Registrations</h2><div class="wrap"><table><tr><th>joined</th><th>x</th><th>card</th><th>score</th><th>github</th><th>linkedin</th><th>granted</th><th>balance</th><th>ref by</th><th>via</th><th>wallet</th><th>key</th></tr>${regRows}</table></div>
  <h2>Reservations</h2><div class="wrap"><table><tr><th>when</th><th>handle</th><th>binding</th><th>claimed</th><th>ref</th><th>ip</th></tr>${rsvRows}</table></div>
  </body></html>`);
});

admin.post("/login", async (c) => {
  const ip = clientIp(c.req.raw);
  if (!TOKEN) return c.json({ error: "admin_not_configured" }, 503);
  if (!loginAllowed(ip)) {
    adminEvent("login_throttled", null, "too many attempts", ip);
    return c.json({ error: "too_many_attempts", message: "Locked for 15 minutes." }, 429);
  }

  let token = "", email = "";
  try {
    const b = await c.req.json();
    token = b.token || "";
    email = String(b.email || "").trim().toLowerCase();
  } catch {
    return c.json({ error: "bad_request" }, 400);
  }

  // Compare both halves every time — no early return — so a wrong email and a
  // wrong token are indistinguishable in timing and in the response.
  const emailOk = EMAIL ? eq(email, EMAIL) : true;
  const tokenOk = eq(token, TOKEN);
  if (!emailOk || !tokenOk) {
    loginFailed(ip);
    adminEvent("login_failed", null, `rejected sign-in for ${email || "(no email)"}`, ip);
    return c.json({ error: "invalid_credentials" }, 401);
  }

  loginSucceeded(ip);
  adminEvent("login", null, `signed in as ${email || "operator"}`, ip);
  const secure = (c.req.header("X-Forwarded-Proto") || "https") === "https";
  return c.json({ ok: true }, 200, {
    "Set-Cookie": `${COOKIE}=${mint()}; Path=/admin; Max-Age=${TTL_MS / 1000}; HttpOnly; SameSite=Strict${secure ? "; Secure" : ""}`,
  });
});

admin.post("/logout", (c) =>
  c.json({ ok: true }, 200, { "Set-Cookie": `${COOKIE}=; Path=/admin; Max-Age=0; HttpOnly; SameSite=Strict` })
);

// ─── gate every /admin/api/* route ───
admin.use("/api/*", async (c, next) => {
  if (!TOKEN) return c.json({ error: "admin_not_configured" }, 503);
  if (!valid(readCookie(c.req.header("Cookie"), COOKIE))) return c.json({ error: "unauthorized" }, 401);
  await next();
});

// ─── read ───
admin.get("/api/overview", (c) => c.json({ ...adminOverview(), upstream: upstreamLoad() }));
admin.get("/api/users", (c) => c.json({ users: adminUsers({ q: c.req.query("q"), limit: Number(c.req.query("limit")) || 100 }) }));
admin.get("/api/users/:id", (c) => {
  const d = adminUserDetail(c.req.param("id"));
  return d ? c.json(d) : c.json({ error: "not_found" }, 404);
});
admin.get("/api/requests", (c) =>
  c.json({ requests: adminRequests({ outcome: c.req.query("outcome"), limit: Number(c.req.query("limit")) || 100 }) })
);
admin.get("/api/events", (c) => c.json({ events: adminEvents(Number(c.req.query("limit")) || 50) }));

// ─── write ───
const body = async (c: any) => { try { return await c.req.json(); } catch { return {}; } };

admin.post("/api/users/:id/status", async (c) => {
  const id = c.req.param("id");
  const { status } = await body(c);
  if (!getUser(id)) return c.json({ error: "not_found" }, 404);
  if (status !== "active" && status !== "suspended") return c.json({ error: "bad_status" }, 400);
  setUserStatus(id, status);
  adminEvent("set_status", id, status, clientIp(c.req.raw));
  return c.json({ ok: true, status });
});

admin.post("/api/users/:id/limits", async (c) => {
  const id = c.req.param("id");
  const { rate_limit_rpm, daily_usd_cap } = await body(c);
  if (!getUser(id)) return c.json({ error: "not_found" }, 404);
  const rpm = Math.max(1, Math.min(10_000, Number(rate_limit_rpm) || 60));
  const cap = Math.max(0, Number(daily_usd_cap) || 0);
  setUserLimits(id, rpm, cap);
  adminEvent("set_limits", id, `rpm=${rpm} cap=${cap}`, clientIp(c.req.raw));
  return c.json({ ok: true, rate_limit_rpm: rpm, daily_usd_cap: cap });
});

admin.post("/api/users/:id/balance", async (c) => {
  const id = c.req.param("id");
  const { delta_usd, reason } = await body(c);
  const delta = Number(delta_usd);
  if (!isFinite(delta) || delta === 0) return c.json({ error: "bad_delta" }, 400);
  if (Math.abs(delta) > 1000) return c.json({ error: "delta_too_large", message: "Cap is $1000 per adjustment." }, 400);
  const r = adjustBalance(id, delta, String(reason || "manual adjustment").slice(0, 200));
  if (!r.ok) return c.json({ error: r.error }, 404);
  adminEvent("adjust_balance", id, `${delta > 0 ? "+" : ""}${r.applied} → ${r.balance} (${reason || "manual"})`, clientIp(c.req.raw));
  return c.json({ ok: true, balance_usd: r.balance, applied_usd: r.applied });
});

admin.post("/api/users/:id/rotate-key", (c) => {
  const id = c.req.param("id");
  if (!getUser(id)) return c.json({ error: "not_found" }, 404);
  const key = rotateApiKey(id);
  adminEvent("rotate_key", id, "issued a new key; the previous one stopped working", clientIp(c.req.raw));
  // The only place a full key is ever returned — the operator must copy it now.
  return c.json({ ok: true, api_key: key });
});

admin.post("/api/users/:id/note", async (c) => {
  const id = c.req.param("id");
  const { note } = await body(c);
  if (!getUser(id)) return c.json({ error: "not_found" }, 404);
  setAdminNote(id, String(note || "").slice(0, 500));
  adminEvent("set_note", id, String(note || "").slice(0, 120), clientIp(c.req.raw));
  return c.json({ ok: true });
});
