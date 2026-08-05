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
  adminEvent, getUser,
} from "./db";
import { clientIp } from "./gateway";
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

export const admin = new Hono();

// ─── auth ───
admin.get("/", (c) => {
  if (!TOKEN) return c.html(adminLoginHtml("Admin is not configured. Set VANTIS_CARD_ADMIN_TOKEN and VANTIS_CARD_ADMIN_EMAIL, then restart."), 503);
  if (!valid(readCookie(c.req.header("Cookie"), COOKIE))) return c.html(adminLoginHtml(undefined, EMAIL));
  return c.html(adminHtml());
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
admin.get("/api/overview", (c) => c.json(adminOverview()));
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
