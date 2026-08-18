// HTTP surface for paid top-ups. Mounted from server.ts via registerTopups(app).
//
//   GET  /api/topup/config                    what this account can do (gate, rails, limits, destinations)
//   POST /api/topup/create                    {provider:'card'|'solana', amount_usd, destination}
//   POST /api/topup/:id/solana/tx             {payer} → unsigned wire tx for Phantom
//   POST /api/topup/:id/solana/confirm        {signature} → verify on chain → credit
//   GET  /api/topup/:id/status                poll (also reconciles Stripe / finds QR payments)
//   POST /webhooks/stripe                     Stripe → us (raw body, signed)
//   GET  /topup/return                        Stripe success/cancel landing (reconciles server-side)
//   GET  /topup/sandbox/:id  POST …/pay …/cancel   internal mock card checkout (staging only)
//   GET  /admin/api/topups                    operator list (admin cookie — mounted on the admin app)
//
// Every session route binds the row to the signed-in user; the webhook is
// bound by signature; the sandbox is bound by session AND staging flag.

import type { Hono } from "hono";
import { readSession } from "../session";
import { getUser, getCard } from "../db";
import {
  publicOrigin, ensureTopupTables, topupsEnabledFor, sandboxAllowedFor, topupLimits, topupsMode,
  stripeRailAllowedFor, solanaRailAllowedFor, solanaSweepCandidates,
  normalizeAmountUsd, resolveDestination, defaultDestination, destinationsFor,
  createTopup, getTopup, markTopup, settleTopup, recordProviderEvent, userTopups, topupPublic, expireStaleTopups,
  adminTopups, topupTotals, metaOf,
} from "./index";
import { stripeConfigured, stripeLivemode, createCheckoutSession, handleStripeWebhook, reconcileStripeTopup, expireStripeSession } from "./stripe";
import { solanaConfig, newReference, usdToUsdcMinor, minorToUi, solanaPayUrl, buildTransferTx, confirmAndSettle, findByReference, explorerUrl, sweepSolanaTopups } from "./solana";
import { topupReturnHtml, sandboxCheckoutHtml, topupPayPageHtml } from "./pages";
import QRCode from "qrcode";

function viewer(c: any): { uid: string; user: any } | null {
  const sess = readSession(c.req.header("Cookie"));
  if (!sess?.uid) return null;
  const user = getUser(sess.uid);
  if (!user) return null;
  return { uid: sess.uid, user };
}
function navFor(v: { uid: string } | null) {
  if (!v) return null;
  const card = getCard(v.uid);
  return { cardHandle: card?.handle || null };
}

// The rail this account would pay by card on: real Stripe when configured,
// the sandbox for staging accounts otherwise, nothing for everyone else.
export function cardRailFor(user: any): "stripe" | "sandbox" | null {
  if (stripeConfigured() && stripeRailAllowedFor(user, stripeLivemode())) return "stripe";
  if (sandboxAllowedFor(user)) return "sandbox";
  return null;
}
export function solanaRailFor(user: any): boolean {
  const sol = solanaConfig();
  return sol.enabled && solanaRailAllowedFor(user, sol.cluster);
}

export function topupConfigFor(user: any) {
  const sol = solanaConfig();
  const lim = topupLimits();
  const enabled = topupsEnabledFor(user);
  const dests = enabled ? destinationsFor(user.id) : [];
  return {
    enabled,
    mode: topupsMode(),
    card: { provider: enabled ? cardRailFor(user) : null, livemode: stripeConfigured() ? stripeLivemode() : false },
    solana: { enabled: enabled && solanaRailFor(user), cluster: sol.cluster, chain: sol.chain, mint: sol.mint, treasury: sol.treasury, decimals: sol.decimals, label: sol.label },
    min_usd: lim.min,
    max_usd: lim.max,
    presets: lim.presets,
    destinations: dests,
    default_destination: enabled ? defaultDestination(user.id) : "main",
    history: enabled ? userTopups(user.id, 8).map(topupPublic) : [],
  };
}

async function qrSvg(text: string): Promise<string> {
  try {
    return await QRCode.toString(text, { type: "svg", errorCorrectionLevel: "M", margin: 1, width: 220, color: { dark: "#0B0B0A", light: "#FFFFFF" } });
  } catch { return ""; }
}

const confirmInFlight = new Set<string>();

export function registerTopups(app: Hono, admin?: Hono) {
  ensureTopupTables();

  // Server-side sweep for QR / mobile payments that land after every browser
  // has stopped polling (a QR stays payable). Every 60 s, open Solana rows of
  // the last 7 days are looked up by reference and settled. Off in tests via
  // TOPUP_SWEEP=0.
  if (process.env.TOPUP_SWEEP !== "0") {
    const tick = async () => {
      try {
        if (!solanaConfig().enabled) return;
        const rows = solanaSweepCandidates(200);
        if (rows.length) await sweepSolanaTopups(rows);
      } catch (e: any) { console.error("topup sweep:", e?.message || e); }
    };
    const every = Math.max(5, Number(process.env.TOPUP_SWEEP_SEC || 60)) * 1000;
    setTimeout(tick, Math.min(15_000, every));
    setInterval(tick, every);
  }

  app.get("/api/topup/config", (c) => {
    const v = viewer(c);
    if (!v) return c.json({ error: "not_signed_in" }, 401);
    expireStaleTopups();
    return c.json(topupConfigFor(v.user));
  });

  app.post("/api/topup/create", async (c) => {
    const v = viewer(c);
    if (!v) return c.json({ error: "not_signed_in" }, 401);
    if (!topupsEnabledFor(v.user)) return c.json({ error: "topups_disabled", message: "Top-ups are not open on this account yet." }, 403);
    if (!getCard(v.uid)) return c.json({ error: "no_card", message: "Mint your card first." }, 403);
    let body: any = {};
    try { body = await c.req.json(); } catch { return c.json({ error: "bad_json" }, 400); }
    const provider = String(body?.provider || "");
    const amt = normalizeAmountUsd(body?.amount_usd);
    if (!amt.ok) {
      const lim = topupLimits();
      const msg = amt.error === "amount_below_min" ? `Minimum top-up is $${lim.min}.` : amt.error === "amount_above_max" ? `Maximum top-up is $${lim.max} per payment.` : "Enter a whole-cent USD amount.";
      return c.json({ error: amt.error, message: msg }, 400);
    }
    const dest = resolveDestination(v.uid, body?.destination || defaultDestination(v.uid));
    if (!dest.ok) return c.json({ error: dest.error, message: "Pick Main or one of your lanes." }, 400);
    // One open top-up per provider at a time keeps the ledger legible; stale
    // rows are expired first so an abandoned attempt never blocks a new one.
    expireStaleTopups();

    if (provider === "card") {
      const rail = cardRailFor(v.user);
      if (!rail) return c.json({ error: "card_unavailable", message: "Card payments are opening soon." }, 503);
      const t = createTopup({ userId: v.uid, provider: rail, amountUsd: amt.usd, amountMinor: amt.cents, currency: "usd", destination: dest.destination, cluster: rail === "stripe" ? (stripeLivemode() ? "live" : "test") : "sandbox", expiresInSec: rail === "stripe" ? 65 * 60 : 30 * 60 });
      if (rail === "sandbox") {
        markTopup(t.id, { status: "pending", provider_ref: null });
        return c.json({ id: t.id, provider: "sandbox", url: `/topup/sandbox/${t.id}` });
      }
      try {
        const s = await createCheckoutSession(t, v.user);
        return c.json({ id: t.id, provider: "stripe", url: s.url });
      } catch (e: any) {
        markTopup(t.id, { status: "failed", error: `stripe_create: ${String(e?.message || e).slice(0, 160)}` });
        console.error("stripe checkout create failed:", e?.message || e);
        return c.json({ error: "card_unavailable", message: "Card checkout could not be opened. Try again in a moment." }, 502);
      }
    }

    if (provider === "solana") {
      const sol = solanaConfig();
      if (!solanaRailFor(v.user)) return c.json({ error: "solana_unavailable", message: "USDC payments are opening soon." }, 503);
      const minor = usdToUsdcMinor(amt.usd, sol.decimals);
      const t = createTopup({ userId: v.uid, provider: "solana", amountUsd: amt.usd, amountMinor: minor, currency: "USDC", destination: dest.destination, reference: newReference(), cluster: sol.cluster, expiresInSec: 30 * 60 });
      const url = solanaPayUrl(t);
      return c.json({
        id: t.id, provider: "solana", reference: t.reference, treasury: sol.treasury, mint: sol.mint, decimals: sol.decimals, cluster: sol.cluster, chain: sol.chain,
        amount_minor: minor, amount_ui: minorToUi(minor, sol.decimals), amount_usd: amt.usd,
        solana_pay_url: url, qr_svg: await qrSvg(url), expires_at: t.expires_at, label: sol.label,
        pay_url: `${publicOrigin()}/topup/pay/${t.id}`,
      });
    }
    return c.json({ error: "bad_provider" }, 400);
  });

  // The three Solana endpoints also accept the top-up id as a bearer: the
  // session-less pay page (Phantom's in-app browser has its own cookie jar)
  // needs them, and paying can only ever credit the row's owner.
  const solanaRow = (c: any): { t: any; v: { uid: string; user: any } | null } | null => {
    const v = viewer(c);
    const t = getTopup(c.req.param("id"));
    if (!t) return null;
    if (v && t.user_id === v.uid) return { t, v };
    // Solana rows: the id is the bearer whoever is signed in (a shared pay
    // link opened by a colleague with their own card session must still pay
    // — it can only ever credit the row's owner). Balances stay owner-only.
    if (t.provider === "solana") return { t, v: null };
    return null;
  };

  app.post("/api/topup/:id/solana/tx", async (c) => {
    const row = solanaRow(c);
    if (!row) return c.json({ error: "not_found" }, 404);
    const t = row.t;
    if (t.provider !== "solana") return c.json({ error: "wrong_provider" }, 400);
    if (t.status === "credited") return c.json({ error: "already_credited" }, 409);
    if (t.status !== "created" && t.status !== "pending") return c.json({ error: `topup_${t.status}` }, 409);
    let body: any = {};
    try { body = await c.req.json(); } catch { return c.json({ error: "bad_json" }, 400); }
    const payer = String(body?.payer || "");
    try {
      const built = await buildTransferTx(t, payer);
      markTopup(t.id, { status: "pending", payer, meta: { payer_ata: built.payer_ata, treasury_ata: built.treasury_ata } });
      return c.json({ id: t.id, ...built });
    } catch (e: any) {
      const code = String(e?.message || "build_failed");
      const msg = code === "payer_has_no_usdc_account" ? "That wallet holds no USDC on this network." : code === "bad_payer" ? "Connect a Solana wallet first." : "Could not prepare the transaction. Try again.";
      return c.json({ error: code.slice(0, 60), message: msg }, code === "payer_has_no_usdc_account" || code === "bad_payer" ? 400 : 502);
    }
  });

  app.post("/api/topup/:id/solana/confirm", async (c) => {
    const row = solanaRow(c);
    if (!row) return c.json({ error: "not_found" }, 404);
    const t = row.t;
    if (t.provider !== "solana") return c.json({ error: "wrong_provider" }, 400);
    let body: any = {};
    try { body = await c.req.json(); } catch { return c.json({ error: "bad_json" }, 400); }
    const sig = String(body?.signature || "");
    // One confirm in flight per row (anonymous callers could otherwise pin
    // the RPC ladder with parallel loops); a short server-side wait — the
    // browser and the sweeper keep looking after we answer 'pending'.
    if (confirmInFlight.has(t.id)) return c.json({ status: "pending", error: "confirm_in_progress" }, 202);
    confirmInFlight.add(t.id);
    let res: Awaited<ReturnType<typeof confirmAndSettle>>;
    try {
      const deadline = Date.now() + 12_000;
      res = await confirmAndSettle(t, sig);
      while (res.status === "pending" && Date.now() < deadline) {
        await new Promise((r) => setTimeout(r, 2000));
        res = await confirmAndSettle(t, sig);
      }
    } finally { confirmInFlight.delete(t.id); }
    const t2 = getTopup(t.id)!;
    return c.json({ ...res, topup: topupPublic(t2), balance: row.v ? balancesFor(row.v.uid, t2.destination) : undefined }, res.status === "failed" ? 409 : 200);
  });

  app.get("/api/topup/:id/status", async (c) => {
    const row = solanaRow(c);
    if (!row) return c.json({ error: viewer(c) ? "not_found" : "not_signed_in" }, viewer(c) ? 404 : 401);
    let t = row.t;
    // Reconcile any non-final row that is younger than a day: 'expired' or
    // 'canceled' rows can still turn out paid (see settleTopup).
    const young = Date.now() - Date.parse(String(t.created_at).replace(" ", "T") + (String(t.created_at).endsWith("Z") ? "" : "Z")) < 7 * 24 * 3600 * 1000;
    if (t.status !== "credited" && t.status !== "failed" && young) {
      try {
        if (t.provider === "solana") {
          const sig = await findByReference(t);
          if (sig) await confirmAndSettle(t, sig);
        } else if (t.provider === "stripe" && t.provider_ref) {
          await reconcileStripeTopup(t);
        }
      } catch (e: any) { console.error("topup status reconcile:", e?.message || e); }
      t = getTopup(t.id)!;
    }
    return c.json({ ...topupPublic(t), balance: row.v ? balancesFor(row.v.uid, t.destination) : undefined });
  });

  // Session-less pay page for a Solana top-up: opened inside Phantom's mobile
  // browser (browse deeplink) or shared to a phone. Bearer = the unguessable
  // id; it can only pay THIS row, whose owner was fixed at create.
  app.get("/topup/pay/:id", async (c) => {
    const t = getTopup(c.req.param("id"));
    if (!t || t.provider !== "solana") return c.html(topupReturnHtml(null, "missing"), 404);
    const sol = solanaConfig();
    const url = solanaPayUrl(t);
    const payload = {
      id: t.id, provider: "solana", reference: t.reference, treasury: sol.treasury, mint: sol.mint, decimals: sol.decimals, cluster: sol.cluster, chain: sol.chain,
      amount_minor: t.amount_minor, amount_ui: minorToUi(t.amount_minor, sol.decimals), amount_usd: Number(t.amount_usd),
      solana_pay_url: url, qr_svg: await qrSvg(url), expires_at: t.expires_at, label: sol.label, pay_url: `${publicOrigin()}/topup/pay/${t.id}`, status: t.status,
      explorer_url: topupPublic(t).explorer_url || null,
    };
    return c.html(topupPayPageHtml(payload, topupPublic(t)));
  });

  // ── Stripe webhook: raw body, signature-bound, no session ──
  app.post("/webhooks/stripe", async (c) => {
    const raw = await c.req.text();
    const r = await handleStripeWebhook(raw, c.req.header("stripe-signature"));
    return c.json(r.body, r.status as any);
  });

  // ── Return page (Stripe success / cancel) ──
  app.get("/topup/return", async (c) => {
    const v = viewer(c);
    const id = String(c.req.query("id") || "");
    const t = id ? getTopup(id) : null;
    if (!v) return c.redirect(`/login?next=${encodeURIComponent("/topup/return?id=" + id)}`);
    if (!t || t.user_id !== v.uid) return c.html(topupReturnHtml(null, "missing", navFor(v)), 404);
    const result = String(c.req.query("result") || "");
    if (result === "cancel" && (t.status === "created" || t.status === "pending")) {
      // Stripe's cancel_url fires on "back", but the hosted session stays
      // payable for its lifetime — expire it at Stripe first, so a row we
      // mark canceled cannot be paid a minute later. If Stripe cannot be
      // reached the row stays pending (a paid session still settles).
      if (t.provider === "stripe") {
        const ex = await expireStripeSession(t);
        if (ex) markTopup(t.id, { status: "canceled", error: "customer_canceled" });
      } else {
        markTopup(t.id, { status: "canceled", error: "customer_canceled" });
      }
    } else if (t.provider === "stripe" && (t.status === "created" || t.status === "pending")) {
      // Reconcile against Stripe itself — the session_id in the query is a
      // hint, never evidence.
      try { await reconcileStripeTopup(t); } catch (e: any) { console.error("stripe reconcile:", e?.message || e); }
    }
    const fresh = getTopup(t.id)!;
    return c.html(topupReturnHtml(topupPublic(fresh), result === "cancel" ? "cancel" : "return", navFor(v)));
  });

  // ── Sandbox card checkout (staging accounts only; never takes a payment) ──
  app.get("/topup/sandbox/:id", (c) => {
    const v = viewer(c);
    if (!v) return c.redirect("/login?next=%2Fwallets");
    const t = getTopup(c.req.param("id"));
    if (!t || t.user_id !== v.uid || t.provider !== "sandbox" || !sandboxAllowedFor(v.user)) return c.html(topupReturnHtml(null, "missing", navFor(v)), 404);
    return c.html(sandboxCheckoutHtml(topupPublic(t), v.user, navFor(v)));
  });
  app.post("/topup/sandbox/:id/pay", async (c) => {
    const v = viewer(c);
    if (!v) return c.json({ error: "not_signed_in" }, 401);
    const t = getTopup(c.req.param("id"));
    if (!t || t.user_id !== v.uid || t.provider !== "sandbox" || !sandboxAllowedFor(v.user)) return c.json({ error: "not_found" }, 404);
    // No money moves in the sandbox, so a canceled/expired row stays dead.
    if (t.status === "canceled" || t.status === "expired" || t.status === "failed") return c.json({ error: `topup_${t.status}` }, 409);
    // Same replay discipline as a real webhook: one settle per row.
    const fresh = recordProviderEvent("sandbox", `sandbox:${t.id}:pay`, "pay", null, t.id);
    const r = fresh ? settleTopup(t.id, { provider_ref: `sandbox:${t.id}`, payer: "sandbox", meta: { card: "sandbox 4242" } }) : { ok: true as const, already: true };
    if (!r.ok) return c.json({ error: (r as any).error }, 409);
    return c.redirect(`/topup/return?id=${t.id}&session_id=sandbox`, 303);
  });
  app.post("/topup/sandbox/:id/cancel", (c) => {
    const v = viewer(c);
    if (!v) return c.json({ error: "not_signed_in" }, 401);
    const t = getTopup(c.req.param("id"));
    if (!t || t.user_id !== v.uid || t.provider !== "sandbox") return c.json({ error: "not_found" }, 404);
    markTopup(t.id, { status: "canceled", error: "customer_canceled" });
    return c.redirect(`/topup/return?id=${t.id}&result=cancel`, 303);
  });

  // ── Operator ──
  if (admin) {
    // Manual settle WITH PROOF: a Solana signature (verified on chain) or a
    // Stripe session id (retrieved from Stripe) — never a bare "credit it".
    admin.post("/api/topups/:id/settle", async (c) => {
      const t = getTopup(c.req.param("id"));
      if (!t) return c.json({ error: "not_found" }, 404);
      let body: any = {};
      try { body = await c.req.json(); } catch { body = {}; }
      if (t.provider === "solana") {
        const sig = String(body?.signature || "").trim();
        if (!sig) return c.json({ error: "signature_required" }, 400);
        const r = await confirmAndSettle(t, sig);
        if (r.status !== "credited") return c.json({ error: r.error || r.status }, 409);
        return c.json({ ok: true, ...r, topup: topupPublic(getTopup(t.id)!) });
      }
      if (t.provider === "stripe") {
        const sid = String(body?.session_id || t.provider_ref || "").trim();
        if (!sid) return c.json({ error: "session_id_required" }, 400);
        if (!t.provider_ref) markTopup(t.id, { provider_ref: sid });
        const r = await reconcileStripeTopup(getTopup(t.id)!);
        if (!r.ok) return c.json({ error: r.error }, 409);
        return c.json({ ok: true, ...r, topup: topupPublic(getTopup(t.id)!) });
      }
      return c.json({ error: "sandbox_rows_settle_only_via_the_sandbox" }, 400);
    });
    admin.get("/api/topups", (c) => c.json({
      totals: topupTotals(),
      topups: adminTopups({ limit: Number(c.req.query("limit")) || 100, status: c.req.query("status") || undefined, provider: c.req.query("provider") || undefined })
        .map((t: any) => ({ ...t, meta: metaOf(t), explorer_url: t.provider === "solana" && t.status === "credited" && t.provider_ref ? explorerUrl(t.provider_ref) : null })),
      config: { mode: topupsMode(), stripe: stripeConfigured() ? (stripeLivemode() ? "live" : "test") : "off", sandbox: process.env.TOPUP_SANDBOX !== "0", solana: solanaConfig().enabled ? solanaConfig().cluster : "off" },
    }));
  }
}

function balancesFor(uid: string, destination: string) {
  const u = getUser(uid);
  const dests = destinationsFor(uid);
  const lane = destination !== "main" ? dests.find((d) => d.id === destination) : null;
  return { main: Number(u?.usd_balance || 0), lane: lane ? { id: lane.id, name: lane.name, usd: lane.usd } : null, total: dests.reduce((s, d) => s + d.usd, 0) };
}
