// Vantis Cards — Main Server
// Hono on Bun. OAuth onboarding → AI scoring → $VANTIS credit grant → card →
// OpenAI-compatible inference proxy that bills real inference cost and
// virtually burns $VANTIS at live market price. One model only.
//
// Run: bun run server/server.ts   (port: VANTIS_CARD_PORT, default 8240)

import { Hono } from "hono";
import { serve } from "bun";
import { cors } from "hono/cors";
import { readFileSync } from "node:fs";

import {
  createUser, getUser, getUserByX, updateUser,
  createOAuthState, getOAuthState, deleteOAuthState,
  grantCredits, createCard, getCard, getCardByHandle,
  generateApiKey, saveEnrichment, getLatestEnrichment, burnStats, getDb,
  createAgentWallet, listAgentWallets, getAgentWallet, fundAgentWallet, sweepAgentWallet, closeAgentWallet, ensurePurposeWallets,
  listApiKeys, getApiKeyById, createApiKeyRow, rotateApiKeyRow, revokeApiKeyRow, countActiveKeys, MAX_ACTIVE_KEYS,
  getApiKeyRow
} from "./db";
import {
  twitterAuthUrl, twitterExchangeCode,
  githubAuthUrl, githubExchangeCode,
  linkedinAuthUrl, linkedinExchangeCode,
  generateState, generateCodeVerifier, providersConfigured,
} from "./oauth";
import { enrichProfile } from "./enrichment";
import { scoreProfile } from "./scoring";
import { getBalance, calculateCost, worstCaseCost, deductAndBurn, listPricing, spenderScope, holdReserve, releaseReserve, heldFor } from "./credits";
import { resolveUpstream, resolveFailover, servingNote, applyUpstreamDefaults, normalizeForOpenWeightLanes, estimateVendorCost, catalogModelFor, callableModels, isAllowlisted, codexLbModelFor, resolveCodexLb, STAGING_CATALOG, TARGET_MODEL, TARGET_LABEL, coolDownJatevo, tracedEndpoint, isTargetBuild, isDeepSeekRail, fastModel, FAST_MODEL_ID } from "./upstream";
import { authorize, clientIp, keyPrefix, noteUpstreamCall, oaiError } from "./gateway";
import { upstreamFailure, serviceUnavailable, serverError, operatorDetail } from "./pool-errors";
import { CABLE_SLUG, cableHtml, cableFeed, cableCursors, cableStats } from "./cable";
import { cableSubscribe } from "./cable-bus";
import { consoleUser, usageData, billingData, walletsConsoleSection, walletsConsoleRail, logsData } from "./console";
import { settleStream, cachedTokensOf } from "./stream-settle";
import { makeNonce, cspHeader, injectNonce, reportOnly } from "./csp";
import { logRequest, traceVendor } from "./db";
import { registerPlayground } from "./playground";
import { getVantisPrice, usdToVantis } from "./price";
import { landingHtml, onboardHtml, scorePageHtml, cardHtml, cardNotFoundHtml, providerPendingHtml, reportHtml, reserveHtml, ogViewHtml, ogReserveHtml, walletsHtml, navMenuPanel, cardObject, CARD_CSS } from "./pages";
import { portfolioHtml, portfolioFor, CHAINS, solanaBlockhash } from "./portfolio";
import { rewardsHtml } from "./rewards";
import { availability, reserve as makeReservation, claimReservation, bindReservation, bookedHandleFor, markReservationClaimed, normHandle, awardReferral, taskState, claimTask, referralEarnedUsd, campaignConfig, campaignRemainingUsd, trueUpGrant, grantAllowed, grantPoolRemainingUsd, grantPoolSpentUsd, grantPoolUsd, TASKS } from "./campaign";
import { admin } from "./admin";
import { registerTopups, topupConfigFor } from "./topups/routes";
import { topupsEnabledFor } from "./topups";
import { topupSectionLive, TOPUP_LIVE_CSS, TOPUP_LIVE_JS } from "./topups/pages";
import { privyMode, privyAppId, accountsFromIdentityToken, accountsFromAccessToken, upsertFromPrivy, ensureSolanaWallet } from "./privy";
import { progressStart, progressGet, progressClearIfDone, progressLive, progressFinish, progressResult, emitterFor } from "./progress";
import { readSession, sessionSetCookie, sessionClearCookie, sessionLegacyClearCookie } from "./session";
import { xApiEnabled, refreshXMetrics } from "./xapi";
import { loginHtml } from "./pages";
import { marketplaceHtml, cardPageHtml, genesisOgViewHtml, genesisFaceViewHtml, GENESIS, GENESIS_SERIES, GENESIS_GRADING, JTVO_SERIES, JTVO_OG, SUPPORTERS_SERIES, SUPPORTERS_SET, ALL_CARDS, TC_CSS, GENESIS_ART_CSS } from "./genesis";
import {
  ensureDeckTables, bindCardObject, deckSection, deckFor, exposure, rightsFor,
  cartridgeFor, holdTokens, releaseTokens, noteCartridgeUsage,
  holdsCard, grantPreviewHolding, plugCartridge, ejectCartridge, allowanceState,
  topupSection, DECK_CSS, DECK_JS, TOPUP_CSS,
} from "./deck";
import { ensurePerkTables, perksFor, notePerkUsage, perkTokensToday, PERK_DAILY_TOKEN_CAP, PERK_DEFS, type PerkKey } from "./perks";
import { modelsPageHtml } from "./models-page";
import { hasImageInput, estimateInputTokens, wantsReasoningOff } from "./gateway";
import { registerDocs } from "./docs";

const MAX_TOKENS_CAP = parseInt(process.env.VANTIS_CARD_MAX_TOKENS || "32768");


const retryAfterSeconds = (res: Response, fallback: number) => {
  const value = Number(res.headers.get("Retry-After") || 0);
  return Number.isFinite(value) && value > 0 ? value : fallback;
};

const app = new Hono();

// Deck tables (additive, idempotent) + the card-object thunk deck.ts renders
// the account card through. Bound here rather than imported inside deck.ts to
// keep deck.ts ↔ pages.ts from forming an import cycle at module init.
ensureDeckTables();
ensurePerkTables();
bindCardObject(cardObject);

// credentials: true — the hub on vantis.sh signs in against THIS server
// (the card DB is the account of record for the line), so its fetches must
// carry and receive the vc_session cookie. Origins stay a closed list;
// hono echoes the matched origin, never *.
app.use("*", cors({
  origin: ["https://card.vantis.sh", "https://vantis.sh", "https://www.vantis.sh", "http://localhost:8240"],
  allowHeaders: ["Authorization", "Content-Type"],
  methods: ["GET", "POST", "OPTIONS"],
  credentials: true,
}));

// ─── Cookie-scope incident remediation (self-disarming after Aug 20 2026) ───
// Three sessions were minted with Domain=.vantis.sh during an 8-minute
// window on Aug 13 (03:04–03:13 WIB) before the scope was reverted to
// host-only. Stateless HMAC cookies cannot be revoked per-user, but they
// can be superseded: on any authenticated HTML hit, re-mint the session
// host-only and retire the domain-scoped twin — so the wide tokens die on
// first contact with this site, not on their Aug 19 natural expiry. The
// date guard makes this a no-op once the last wide cookie has aged out;
// delete the block after that.
app.use("*", async (c, next) => {
  await next();
  if (Date.now() > Date.parse("2026-08-21T00:00:00Z")) return;
  if (c.req.method !== "GET") return;
  const type = c.res.headers.get("content-type") || "";
  if (!type.includes("text/html") || c.res.status >= 400) return;
  if (c.res.headers.has("Set-Cookie")) return; // an auth flow already spoke
  const sess = readSession(c.req.header("Cookie"));
  if (!sess) return;
  c.header("Set-Cookie", sessionSetCookie(sess.did, sess.uid), { append: true });
  c.header("Set-Cookie", sessionLegacyClearCookie(), { append: true });
});

// ─── Security headers (Privy production checklist) ───
// One middleware so no page can ship without them. HTML responses get a
// fresh script nonce stamped into every inline <script>; everything else
// gets the framing and sniffing guards.
// X-Frame-Options / nosniff / Referrer-Policy are set ONCE, at nginx — adding
// them here too produced two conflicting X-Frame-Options headers on every
// response. CSP has to live here because the nonce is per-request.
app.use("*", async (c, next) => {
  await next();
  const type = c.res.headers.get("content-type") || "";
  if (!type.includes("text/html")) return;
  const nonce = makeNonce();
  const body = injectNonce(await c.res.text(), nonce);
  c.res = new Response(body, { status: c.res.status, headers: c.res.headers });
  c.header(reportOnly() ? "Content-Security-Policy-Report-Only" : "Content-Security-Policy", cspHeader(nonce));
});

// ─── Admin console (token-gated inside) ───
// Paid top-ups (Aug 18 2026): Stripe card checkout + USDC on Solana via
// Phantom + a staging-only sandbox. Gated by TOPUPS_MODE (default staging).
// MUST run before app.route("/admin", admin): Hono copies the sub-app's
// routes at mount time, so an admin route registered afterwards is never
// reachable (review caught /admin/api/topups answering 404 when authed).
registerTopups(app, admin);
app.route("/admin", admin);

// ─── Health ───
app.get("/health", (c) => c.json({ ok: true, service: "vantis-card" }));

// Public developer documentation ships with the API so examples and
// behavioral guarantees change in the same deploy as the gateway.
registerDocs(app);

// ─── Campaign mode: the reserve page IS the front door; the full landing
// parks unlisted at /overview until release. Flip with CAMPAIGN_MODE=0. ───
const campaignMode = () => process.env.CAMPAIGN_MODE !== "0";
// API keys gated for the campaign: cards + credits mint now, keys open at
// launch. Flipping the env mints keys lazily at next sign-in sync.
const keysEnabled = () => process.env.API_KEYS_ENABLED !== "0";
// Auth provider account ceiling reached — NEW sign-ups fail inside Privy's
// own modal (invisible to us); existing accounts are unaffected.
// SELF-CLEARING: the notice disappears the instant a user row appears that
// was created after the pause began — a real new account is proof sign-ups
// work again, so nobody has to remember to flip the env back.
let pauseCleared = false;
const signupPaused = () => {
  if (process.env.PRIVY_SIGNUP_PAUSED !== "1") return false;
  if (pauseCleared) return false;
  const since = process.env.PRIVY_PAUSE_SINCE;
  if (!since) return true;
  try {
    const row = getDb().query("SELECT COUNT(*) AS n FROM users WHERE created_at > ?").get(since) as any;
    if (row?.n > 0) { pauseCleared = true; console.log("Privy sign-ups resumed — capacity notice cleared automatically"); return false; }
  } catch {}
  return true;
};

// Total spendable credits: Main plus both purpose lanes — the menu's
// balance row advertises unspent value from every page.
const availUsdFor = (u: any): number => {
  try {
    const lanes = ensurePurposeWallets(u.id, false) as any[];
    return (u.usd_balance || 0) + lanes.reduce((t, w) => t + (w.usd_balance || 0), 0);
  } catch { return u.usd_balance || 0; }
};

app.get("/", (c, next) => {
  if (!campaignMode()) return landingHandler(c);
  const sess = privyMode() ? readSession(c.req.header("Cookie")) : null;
  const card = sess?.uid ? getCard(sess.uid) : null;
  // Card holders live in the product, not the pitch (Luca, Aug 12): a
  // signed-in carded visit to the front door lands on the console. The
  // reserve page stays reachable at /reserve; anon + no-card unchanged.
  if (card) return c.redirect("/wallets");
  return c.html(reserveHtml(null, {
    signedIn: !!sess,
    signupPaused: signupPaused(),
    viewer: sess ? { cardHandle: card?.handle || null } : null,
    menuCard: card ? (() => { const u = getUser(sess!.uid!); return navMenuPanel(u, card, availUsdFor(u)); })() : "",
  }));
});

app.get("/overview", (c) => landingHandler(c));

// ─── /marketplace — GENESIS Series 001: the first ten Vantis cards on
// Robinhood Chain. Data lives in server/genesis.ts; the same records
// serve /api/genesis (terminal + future tokenURI seam). ───
app.get("/marketplace", (c) => {
  const sess = privyMode() ? readSession(c.req.header("Cookie")) : null;
  const card = sess?.uid ? getCard(sess.uid) : null;
  return c.html(marketplaceHtml(
    sess ? { cardHandle: card?.handle || null } : null,
    { menuCard: card ? (() => { const u = getUser(sess!.uid!); return navMenuPanel(u, card, availUsdFor(u)); })() : "", gradingRows: GENESIS_GRADING },
  ));
});
app.get("/genesis", (c) => c.redirect("/marketplace"));
app.get("/marketplace/:slug/og-view", (c) => {
  const card = ALL_CARDS.find((g) => g.slug === c.req.param("slug"));
  if (!card) return c.notFound();
  return c.html(genesisOgViewHtml(card));
});
// The card face as a flat asset — the SAME portrait design the marketplace
// renders, rasterized once and cached. The terminal textures its cartridge
// slab from this (rotated to horizontal), so the card art has exactly one
// source of truth (Luca: "make it the real card but flipped to horizontal,
// so all image/asset cards still same").
app.get("/marketplace/:slug/face-view", (c) => {
  const card = ALL_CARDS.find((g) => g.slug === c.req.param("slug"));
  if (!card) return c.notFound();
  return c.html(genesisFaceViewHtml(card));
});
app.get("/marketplace/:slug/face.png", async (c) => {
  const slug = c.req.param("slug");
  const card = ALL_CARDS.find((g) => g.slug === slug);
  if (!card) return c.notFound();
  try {
    // f2: the card corner became proportional (5% of width) — the f1 renders
    // carry the old fixed 14px radius, which reads as ~1% at this size.
    const path = await renderOgPng(`genesis-face-${slug}`, "f2", `/marketplace/${slug}/face-view`, { w: 900, h: 1257 });
    const f = Bun.file(path);
    if (!(await f.exists())) return c.notFound();
    return new Response(f, { headers: { "Content-Type": "image/png", "Cache-Control": "public, max-age=86400" } });
  } catch (err) { console.error("genesis face:", err); return c.notFound(); }
});

app.get("/marketplace/:slug/og.png", async (c) => {
  const slug = c.req.param("slug");
  const card = ALL_CARDS.find((g) => g.slug === slug);
  if (!card) return c.notFound();
  try {
    const path = await renderOgPng(`genesis-${slug}`, "g1", `/marketplace/${slug}/og-view`);
    const f = Bun.file(path);
    if (!(await f.exists())) return c.notFound();
    return new Response(f, { headers: { "Content-Type": "image/png", "Cache-Control": "public, max-age=86400" } });
  } catch (err) { console.error("genesis og:", err); return c.notFound(); }
});
app.get("/marketplace/:slug", (c) => {
  const card = ALL_CARDS.find((g) => g.slug === c.req.param("slug"));
  // Honest 404, not a silent soft-200 hop to the rack.
  if (!card) return c.html(`<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>No such card — Vantis Genesis</title><link rel="icon" href="/favicon.svg" type="image/svg+xml"><style>body{font-family:'Inter',-apple-system,sans-serif;display:flex;min-height:100dvh;align-items:center;justify-content:center;background:#F4F6F4;color:#0A0A0A;text-align:center;padding:24px}a{color:#0B7A3E;font-weight:600}</style></head><body><div><p style="font-family:ui-monospace,monospace;font-size:12px;letter-spacing:0.14em;color:#6A6F74;">GENESIS / 001 &middot; OG / 000 &middot; SUPPORTERS / 00S</p><h1 style="margin:10px 0 8px;">No such card in these sets.</h1><p>Sixteen exist across three sets, this is not one of them. <a href="/marketplace#rack">Back to the rack</a></p></div></body></html>`, 404);
  const sess = privyMode() ? readSession(c.req.header("Cookie")) : null;
  const uc = sess?.uid ? getCard(sess.uid) : null;
  return c.html(cardPageHtml(card,
    sess ? { cardHandle: uc?.handle || null } : null,
    { menuCard: uc ? (() => { const u = getUser(sess!.uid!); return navMenuPanel(u, uc, availUsdFor(u)); })() : "" },
  ));
});
// Payload shape: the Series-001 fields stay top-level exactly as before
// (terminal + any external reader keeps working); the OG set rides in an
// additive `og` key.
app.get("/api/genesis", (c) => c.json({ ...GENESIS_SERIES, cards: GENESIS, og: { ...JTVO_SERIES, cards: JTVO_OG }, supporters: { ...SUPPORTERS_SERIES, cards: SUPPORTERS_SET } }));

// ─── /models — the public catalogue, rendered from the same object the
// gateway bills from (server/upstream/catalog.ts). ───
app.get("/models", (c) => {
  const sess = privyMode() ? readSession(c.req.header("Cookie")) : null;
  const card = sess?.uid ? getCard(sess.uid) : null;
  return c.html(modelsPageHtml({
    viewer: sess ? { cardHandle: card?.handle || null } : null,
    menuCard: card ? (() => { const u = getUser(sess!.uid!); return navMenuPanel(u, card, availUsdFor(u)); })() : "",
    serving: servingNote(resolveUpstream()),
    maxOutputTokens: MAX_TOKENS_CAP,
  }));
});

// ─── Landing + provider config ───
const landingHandler = async (c: any) => {
  // Server-render every live figure so the page is correct with JavaScript
  // disabled and never shows a dash if the client poll fails.
  const stats = burnStats();
  const { price } = await getVantisPrice();
  const up = resolveUpstream();
  // Landing reflects the signed-in state: card-holders get "Your card",
  // half-done sign-ups get "Finish signing up".
  let viewer: { cardHandle: string | null } | undefined;
  let menuCard = "";
  if (privyMode()) {
    const sess = readSession(c.req.header("Cookie"));
    if (sess) {
      const card = sess.uid ? getCard(sess.uid) : null;
      viewer = { cardHandle: card?.handle || null };
      menuCard = card ? (() => { const u = getUser(sess.uid!); return navMenuPanel(u, card, availUsdFor(u)); })() : "";
    }
  }
  return c.html(landingHtml({
    viewer,
    menuCard,
    vantis_burned_total: stats.vantis_burned_total,
    usd_consumed_total: stats.usd_consumed_total,
    inference_calls: stats.inference_calls,
    cards_issued: stats.cards_issued,
    vantis_price_usd: price,
    serving: servingNote(up),
    pricing: listPricing(),
    signIn: privyMode(),
    zdr: up?.zdr || false,
  }));
};
app.get("/api/providers", (c) => c.json(providersConfigured()));

const FAVICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 254"><rect width="240" height="254" rx="36" fill="#09F875"/><g fill="#0A0A0A" transform="translate(24,25) scale(0.8)"><path d="M20 0 L47 1 L47 213 L238 23 L239 104 L90 253 L0 253 L0 20 Z"/><path d="M238 151 L239 215 L203 253 L134 253 Z"/></g></svg>`;
app.get("/favicon.ico", (c) => c.body(FAVICON, 200, { "Content-Type": "image/svg+xml", "Cache-Control": "public, max-age=86400" }));
app.get("/favicon.svg", (c) => c.body(FAVICON, 200, { "Content-Type": "image/svg+xml", "Cache-Control": "public, max-age=86400" }));

// ─── /console — staging inference console (Models · Usage · Billing).
// Gated to staging accounts or the operator session; 404 to everyone else
// so the surface stays invisible (see server/console.ts). ───
const consoleGate = (c: any) => consoleUser(c.req.header("Cookie"));
// One surface, not three slugs (Luca): the console LIVES ON /wallets — the
// old page paths just point there. The /console/api/* data endpoints remain.
app.get("/console", (c) => c.redirect("/wallets"));
app.get("/console/usage", (c) => c.redirect("/wallets"));
app.get("/console/billing", (c) => c.redirect("/wallets"));
app.get("/console/api/usage", (c) => {
  const u = consoleGate(c);
  if (!u) return c.notFound();
  return c.json(usageData(u.id, c.req.query("range") || "24h"));
});
app.get("/console/api/logs", (c) => {
  const u = consoleGate(c);
  if (!u) return c.notFound();
  const before = Number(c.req.query("before") || 0);
  return c.json(logsData(u.id, c.req.query("range") || "24h", before));
});
app.get("/console/api/billing", (c) => {
  const u = consoleGate(c);
  if (!u) return c.notFound();
  return c.json(billingData(u));
});

// ─── CARD CABLE — unlisted live traffic map (see server/cable.ts) ───
app.get(`/${CABLE_SLUG}`, (c) => {
  c.header("X-Robots-Tag", "noindex, nofollow");
  return c.html(cableHtml());
});
app.get(`/${CABLE_SLUG}/feed`, (c) => {
  if (c.req.query("tail") === "1") return c.json({ cursors: cableCursors() });
  const a = parseInt(c.req.query("a") || "0", 10) || 0;
  const v = parseInt(c.req.query("v") || "0", 10) || 0;
  return c.json(cableFeed(a, v));
});
// SSE: events are pushed the instant the db write paths emit them (cable-bus),
// so a car appears on the map within ~100ms of the real request. Stats ride
// the same stream every 5s; heartbeat keeps CF/nginx from idling us out.
app.get(`/${CABLE_SLUG}/stream`, (c) => {
  const enc = new TextEncoder();
  let unsub: (() => void) | null = null;
  let statsT: ReturnType<typeof setInterval> | undefined;
  let beatT: ReturnType<typeof setInterval> | undefined;
  const body = new ReadableStream({
    start(controller) {
      const send = (d: unknown) => {
        try {
          controller.enqueue(enc.encode(`data: ${JSON.stringify(d)}\n\n`));
        } catch {}
      };
      send({ t: "stats", stats: cableStats() });
      unsub = cableSubscribe(send);
      statsT = setInterval(() => send({ t: "stats", stats: cableStats() }), 5000);
      beatT = setInterval(() => {
        try {
          controller.enqueue(enc.encode(`: beat\n\n`));
        } catch {}
      }, 15000);
    },
    cancel() {
      if (unsub) unsub();
      clearInterval(statsT);
      clearInterval(beatT);
    },
  });
  return new Response(body, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      "X-Accel-Buffering": "no",
      Connection: "keep-alive",
    },
  });
});

// ─── Public burn ticker ───
app.get("/burn/stats", async (c) => {
  const stats = burnStats();
  const { price, source } = await getVantisPrice();
  const up = resolveUpstream();
  return c.json({
    ...stats,
    vantis_price_usd: price,
    price_source: source,
    pricing: listPricing(),
    model: TARGET_MODEL,
    model_label: TARGET_LABEL,
    serving: servingNote(up),
    on_target: !!up?.onTarget,
    note: "Burn ledger — USD inference cost converted to $VANTIS at live market price per call; accrued totals settle on-chain weekly from the burn reserve. See vantis.sh/burns.",
  });
});

// SSE for the public settlement toast: the same instant push the cable
// rides, but ONLY sanitized settle events (truncated consumer, lane name,
// model, tokens, burn) — none of the cable's telemetry, and no slug.
app.get("/burn/stream", (c) => {
  const enc = new TextEncoder();
  let unsub: (() => void) | null = null;
  let beatT: ReturnType<typeof setInterval> | undefined;
  const body = new ReadableStream({
    start(controller) {
      const send = (d: unknown) => {
        try {
          controller.enqueue(enc.encode(`data: ${JSON.stringify(d)}\n\n`));
        } catch {}
      };
      // 8s cadence: under Bun's idle timeout AND CF's (~100s) with margin —
      // the cable stream survives on exactly this logic via its 5s stats.
      // Padded so no buffering layer can sit on the tiny chunk; comments
      // are discarded by EventSource, clients see nothing.
      const beat = `: beat ${"-".repeat(240)}\n\n`;
      try {
        controller.enqueue(enc.encode(beat));
      } catch {}
      unsub = cableSubscribe((e) => {
        if (e && (e as any).t === "settle") send(e);
      });
      beatT = setInterval(() => {
        try {
          controller.enqueue(enc.encode(beat));
        } catch {}
      }, 8000);
    },
    cancel() {
      if (unsub) unsub();
      clearInterval(beatT);
    },
  });
  return new Response(body, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      "X-Accel-Buffering": "no",
      Connection: "keep-alive",
    },
  });
});

// ─── OAuth: start flows ───
app.get("/oauth/connect/twitter", async (c) => {
  if (!providersConfigured().twitter) return c.html(providerPendingHtml("X / Twitter"), 503);
  const state = generateState();
  const verifier = generateCodeVerifier();
  createOAuthState(state, "twitter", { code_verifier: verifier });
  return c.redirect(await twitterAuthUrl(state, verifier));
});

app.get("/oauth/connect/github", (c) => {
  if (!providersConfigured().github) return c.html(providerPendingHtml("GitHub"), 503);
  const state = generateState();
  // uid rides in the state row — providers only echo `state` back
  createOAuthState(state, "github", { user_id: c.req.query("uid") || undefined });
  return c.redirect(githubAuthUrl(state));
});

app.get("/oauth/connect/linkedin", (c) => {
  if (!providersConfigured().linkedin) return c.html(providerPendingHtml("LinkedIn"), 503);
  const state = generateState();
  createOAuthState(state, "linkedin", { user_id: c.req.query("uid") || undefined });
  return c.redirect(linkedinAuthUrl(state));
});

// ─── OAuth: callbacks ───
app.get("/oauth/twitter/callback", async (c) => {
  const code = c.req.query("code");
  const state = c.req.query("state");
  if (!code || !state) return c.json({ error: "missing_params" }, 400);

  const stateRow = getOAuthState(state);
  if (!stateRow || stateRow.platform !== "twitter") return c.json({ error: "invalid_state" }, 400);
  deleteOAuthState(state);

  try {
    const { profile } = await twitterExchangeCode(code, stateRow.code_verifier);

    let user = getUserByX(profile.username);
    if (!user) {
      user = createUser(profile);
    }

    return c.redirect(`/onboard/score?uid=${user.id}&step=connect_more`);
  } catch (err: any) {
    console.error("Twitter OAuth error:", err);
    return c.json({ error: "twitter_oauth_failed", detail: err.message }, 500);
  }
});

app.get("/oauth/github/callback", async (c) => {
  const code = c.req.query("code");
  const state = c.req.query("state");
  if (!code || !state) return c.json({ error: "missing_params" }, 400);

  const stateRow = getOAuthState(state);
  if (!stateRow || stateRow.platform !== "github") return c.json({ error: "invalid_state" }, 400);
  deleteOAuthState(state);
  const uid = stateRow.user_id;

  try {
    const { profile, repos, languages, orgs, activity, totalStars, accountCreated } = await githubExchangeCode(code);

    if (uid && getUser(uid)) {
      updateUser(uid, {
        github_username: profile.username,
        github_name: profile.name,
        github_bio: profile.bio,
        github_company: profile.company,
        github_location: profile.location,
        github_followers: profile.followers,
        github_public_repos: profile.public_repos,
        github_languages: JSON.stringify(languages),
        github_top_repos: JSON.stringify(repos),
        github_avatar: profile.avatar,
        github_orgs: JSON.stringify(orgs || []),
        github_activity: JSON.stringify(activity || {}),
        github_total_stars: totalStars || 0,
        github_created_at: accountCreated || null,
        github_connected_at: new Date().toISOString(),
      });
      return c.redirect(`/onboard/score?uid=${uid}&step=connect_more`);
    }
    return c.json({ error: "no_user_session", hint: "connect X first" }, 400);
  } catch (err: any) {
    console.error("GitHub OAuth error:", err);
    return c.json({ error: "github_oauth_failed", detail: err.message }, 500);
  }
});

app.get("/oauth/linkedin/callback", async (c) => {
  const code = c.req.query("code");
  const state = c.req.query("state");
  if (!code || !state) return c.json({ error: "missing_params" }, 400);

  const stateRow = getOAuthState(state);
  if (!stateRow || stateRow.platform !== "linkedin") return c.json({ error: "invalid_state" }, 400);
  deleteOAuthState(state);
  const uid = stateRow.user_id;

  try {
    const { profile } = await linkedinExchangeCode(code);

    if (uid && getUser(uid)) {
      updateUser(uid, {
        linkedin_name: profile.name,
        // headline/industry are Partner-Program-only and always absent on a
        // self-serve app — the employer is inferred from the verified email
        linkedin_company: profile.company_guess,
        linkedin_domain: profile.corporate_domain,
        linkedin_email: profile.email,
        linkedin_avatar: profile.picture,
        linkedin_connected_at: new Date().toISOString(),
      });
      return c.redirect(`/onboard/score?uid=${uid}&step=score`);
    }
    return c.json({ error: "no_user_session", hint: "connect X first" }, 400);
  } catch (err: any) {
    console.error("LinkedIn OAuth error:", err);
    return c.json({ error: "linkedin_oauth_failed", detail: err.message }, 500);
  }
});

// ─── Scoring ───
const MAX_RERUNS = 5;

app.post("/onboard/score", async (c) => {
  const body = await c.req.json();
  const uid = body.uid;
  if (!uid) return c.json({ error: "missing_uid" }, 400);

  // Behind the Privy gate, scoring is bound to the signed-in session.
  if (privyMode() && islandFile()) {
    const sess = readSession(c.req.header("Cookie"));
    if (!sess || sess.uid !== uid) return c.json({ error: "not_signed_in" }, 401);
  }

  const user = getUser(uid);
  if (!user) return c.json({ error: "user_not_found" }, 404);

  const alreadyScored = !!user.scored_at;
  const rerunsLeft = Math.max(0, MAX_RERUNS - (user.score_reruns || 0));

  // A re-run re-SCORES — fresh research, fresh verdict, fresh report — but
  // never re-grants: credits, key and the minted card artifact stay as
  // issued. Capped so the agent can't be farmed for inference.
  const isRerun = alreadyScored && !!body.rerun;
  if (isRerun && rerunsLeft <= 0) return c.json({ error: "rerun_exhausted", reruns_left: 0 }, 403);

  // Idempotent: a scored user keeps their existing grant/card/key
  if (alreadyScored && !isRerun) {
    const card = getCard(uid);
    const { price } = await getVantisPrice();
    return c.json({
      score: user.score,
      tier: user.score_tier,
      grantUsd: user.usd_granted,
      grantVantis: card?.grant_vantis || usdToVantis(user.usd_granted, price),
      vantisPrice: price,
      breakdown: user.score_breakdown ? JSON.parse(user.score_breakdown) : null,
      reasoning: "Already scored — returning your existing card.",
      apiKey: user.api_key,
      reruns_left: rerunsLeft,
      card: card && { handle: card.handle, url: card.card_url, tier: card.tier, designVariant: card.design_variant },
    });
  }

  // One live run per user; a second POST while it works just re-attaches.
  if (progressLive(uid)) return c.json({ started: true }, 202);

  // Red-team fix: fresh scorings are throttled per IP — secondhand X
  // accounts are cheap, so identity alone cannot be the only brake.
  if (!isRerun && rsvThrottled(`score:${clientIp(c.req.raw)}`, 5, 24 * 3600 * 1000)) {
    return c.json({ error: "too_many_signups_from_this_network" }, 429);
  }

  // The run executes DETACHED: a single POST held open for enrichment plus
  // 60–120s of model reasoning dies at the CF proxy timeout (a live user hit
  // exactly that — the run finished, the browser saw an error). The page
  // polls the log it already watches, then collects the verdict.
  progressStart(uid);
  runScoring(user, uid, isRerun).then(
    (payload) => progressFinish(uid, payload),
    (err) => {
      console.error("Scoring run failed:", err?.message || err);
      const emit = emitterFor(uid);
      emit("error", "The run hit a fault — nothing was charged. Try again.");
      progressFinish(uid, { error: "run_failed" });
    }
  );
  return c.json({ started: true }, 202);
});

// The detached pipeline — everything that used to live inside the POST.
async function runScoring(user: any, uid: string, isRerun: boolean): Promise<any> {
  const emit = emitterFor(uid);

  emit("stage", "Reading your connected profiles", 1);
  emit("log", `Opening the public record for @${user.x_username}`);
  let xLine = `X @${user.x_username} — identity verified`;
  if (xApiEnabled()) {
    const xm = await refreshXMetrics(user);
    if (xm) {
      Object.assign(user, xm); // fresh metrics flow straight into scoring
      xLine = `X @${user.x_username} — ${Number(xm.x_followers).toLocaleString()} followers · ${Number(xm.x_tweet_count).toLocaleString()} posts`;
    }
  }
  emit("log", xLine, undefined, "x");
  if (user.github_username) {
    const acts = user.github_activity ? JSON.parse(user.github_activity) : null;
    emit("log", `GitHub @${user.github_username} — ${user.github_public_repos || 0} repos · ${user.github_total_stars || 0} stars${acts ? ` · ${acts.pushes_90d || 0} pushes in 90d` : ""}`, undefined, "github");
    try {
      const top = user.github_top_repos ? JSON.parse(user.github_top_repos) : [];
      for (const r of top.slice(0, 2)) {
        emit("log", `Inspecting repo ${r.name}${r.language ? ` (${r.language})` : ""}${r.stars ? ` — ${r.stars} stars` : ""}`);
      }
      const langs = user.github_languages ? JSON.parse(user.github_languages) : [];
      if (langs.length) emit("log", `Languages on record: ${langs.slice(0, 5).join(", ")}`);
    } catch {}
  } else {
    emit("log", "GitHub — not linked, scoring on identity and web signal only", undefined, "github");
  }
  if (user.linkedin_connected_at || user.linkedin_domain) {
    emit("log", `LinkedIn — ${user.linkedin_domain ? `verified work domain ${user.linkedin_domain}` : "verified email on file"}`, undefined, "linkedin");
  } else {
    emit("log", "LinkedIn — not linked", undefined, "linkedin");
  }
  if (user.wallet_address) emit("log", `Embedded wallet ${String(user.wallet_address).slice(0, 6)}…${String(user.wallet_address).slice(-4)} on file`);

  const enrichmentProfile = {
    xUsername: user.x_username,
    githubUsername: user.github_username,
    name: user.x_name || user.github_name || user.linkedin_name,
    // LinkedIn's own name when they linked it — the strongest identity key
    // for scanning their public LinkedIn presence.
    linkedinName: user.linkedin_name || undefined,
    linkedinVanity: user.linkedin_vanity || undefined,
    linkedinConnected: !!(user.linkedin_name || user.linkedin_domain || user.linkedin_connected_at),
    company: user.linkedin_company || user.github_company,
    domain: user.linkedin_domain,
  };

  emit("stage", "Searching the web for corroborating signal", 2);
  let enrichment = null;
  try {
    enrichment = await enrichProfile(enrichmentProfile, emit);
    saveEnrichment(uid, "full_enrichment", enrichment);
    const total = Object.values(enrichment).filter(Array.isArray).flat().length;
    emit("log", `Research complete — ${total} web signals gathered`);
  } catch (err) {
    console.error("Enrichment error:", err);
    emit("log", "Web research unavailable — scoring on connected profiles alone");
  }

  // Missing X metrics reach the model as ABSENT, never as zeros — Privy
  // proves identity without metrics, and "0 followers" was being narrated
  // as observed fact for accounts we never measured.
  const xMetricsKnown = !!(user.x_created_at || user.x_bio || (user.x_followers || 0) > 0 || (user.x_tweet_count || 0) > 0);
  const scoringProfile = {
    xUsername: user.x_username,
    xName: user.x_name,
    xBio: user.x_bio || undefined,
    xFollowers: xMetricsKnown ? user.x_followers : undefined,
    xFollowing: xMetricsKnown ? user.x_following : undefined,
    xTweetCount: xMetricsKnown ? user.x_tweet_count : undefined,
    xVerified: user.x_verified || undefined,
    xLocation: user.x_location || undefined,
    xMetricsCollected: xMetricsKnown,
    githubUsername: user.github_username,
    githubName: user.github_name,
    githubBio: user.github_bio,
    githubCompany: user.github_company,
    githubLocation: user.github_location,
    githubFollowers: user.github_followers,
    githubPublicRepos: user.github_public_repos,
    githubLanguages: user.github_languages ? JSON.parse(user.github_languages) : [],
    githubTopRepos: user.github_top_repos ? JSON.parse(user.github_top_repos) : [],
    githubOrgs: user.github_orgs ? JSON.parse(user.github_orgs) : [],
    githubActivity: user.github_activity ? JSON.parse(user.github_activity) : null,
    githubTotalStars: user.github_total_stars,
    githubAccountCreated: user.github_created_at,
    linkedinName: user.linkedin_name,
    linkedinCompany: user.linkedin_company,
    linkedinVerifiedDomain: user.linkedin_domain,
    enrichment,
  };

  emit("stage", "Scoring five dimensions on the rail", 3);
  const result = await scoreProfile(scoringProfile, emit);
  // The verdict lands one dimension at a time — real numbers, real drama.
  const DIM_LABELS: Record<string, string> = {
    technicalDepth: "Technical depth", influence: "Influence", purchasingPower: "Purchasing power",
    cryptoNative: "Crypto native", realWorldSignals: "Real-world signals",
  };
  for (const [k, label] of Object.entries(DIM_LABELS)) {
    emit("log", `${label} — ${Number((result.breakdown as any)?.[k] || 0)}/20`);
  }
  emit("log", `Verdict: ${result.score}/100 — ${result.tier} tier`);

  updateUser(uid, {
    score: result.score,
    score_tier: result.tier,
    score_breakdown: JSON.stringify(result.breakdown),
    score_reasoning: result.reasoning || null,
    scored_at: new Date().toISOString(),
  });

  let apiKey: string | null = null;
  let card: any;
  let grantUsdOut: number;
  const { price } = await getVantisPrice();

  let trueUp = 0;
  if (isRerun) {
    emit("stage", "Updating your record", 4);
    updateUser(uid, { score_reruns: (user.score_reruns || 0) + 1 });
    card = getCard(uid);
    // Upward-only: a better verdict raises the grant to its tier, once —
    // and the card row (tier + grant) upgrades with it.
    try { trueUp = trueUpGrant(uid, result.grantUsd, result.tier, price); } catch (err) { console.error("true-up:", err); }
    if (trueUp > 0) card = getCard(uid); // re-read the upgraded card for the result payload
    grantUsdOut = user.usd_granted + trueUp;
    emit("log", trueUp > 0
      ? `Verdict recorded — tier upgraded, grant topped up $${trueUp.toFixed(2)}`
      : "Verdict recorded — grant, key and card unchanged");
  } else {
    emit("stage", "Minting your card and key", 4);
    // The grant pool is a hard ceiling on total onboarding credits. When it
    // runs dry the card and key still mint — the grant is simply zero, and
    // the log says so rather than pretending.
    const allowed = grantAllowed(result.grantUsd);
    if (allowed < result.grantUsd) {
      console.warn(`Grant pool: requested $${result.grantUsd}, honouring $${allowed} (pool remaining $${grantPoolRemainingUsd()})`);
    }
    result.grantUsd = allowed;
    if (allowed > 0) {
      grantCredits(uid, allowed, `Onboarding grant: ${result.tier} tier`);
      emit("log", `$${allowed} in credits granted`);
    } else {
      emit("log", "Card minted — the grant pool for this round is fully allocated");
    }
    apiKey = null; // keys are never auto-minted — the owner creates named keys in /wallets
    const grantVantis = usdToVantis(result.grantUsd, price);
    // Booking model: the reserved handle is the card's name; the X account
    // verified the person and fed the scoring. No booking → X handle.
    let cardHandle = `@${user.x_username}`;
    try {
      const booked = user.privy_user_id ? bookedHandleFor(user.privy_user_id) : null;
      if (booked) cardHandle = `@${booked}`;
    } catch {}
    card = createCard(uid, cardHandle, result.tier, result.grantUsd, grantVantis, price);
    try { markReservationClaimed(String(card.handle).replace("@", ""), uid); } catch {}
    grantUsdOut = result.grantUsd;
    emit("log", `Card ${card.handle} minted · create your API key in your wallet`);
    // Referral bonus fires once, here — on the referee's first scored grant.
    try { awardReferral(user, result.score); } catch (err) { console.error("referral award error:", err); }
  }
  emit("done", "Done", 4);
  // Persist the run's agent log so the score report can replay it.
  const runLog = progressGet(uid);
  if (runLog?.events?.length) updateUser(uid, { score_log: JSON.stringify(runLog.events) });

  return {
    score: result.score,
    tier: result.tier,
    grantUsd: grantUsdOut,
    grantVantis: card?.grant_vantis || usdToVantis(grantUsdOut, price),
    vantisPrice: price,
    breakdown: result.breakdown,
    reasoning: result.reasoning,
    apiKey,
    rerun: isRerun || undefined,
    true_up: isRerun && trueUp > 0 ? trueUp : undefined,
    reruns_left: Math.max(0, MAX_RERUNS - ((user.score_reruns || 0) + (isRerun ? 1 : 0))),
    card: card && {
      handle: card.handle,
      url: card.card_url,
      tier: card.tier,
      designVariant: card.design_variant,
    },
  };
}

// The finished verdict, collected by the page once polling reports done.
// Session-bound like the score routes; the payload lives in the same
// in-memory store as the log (15-minute TTL, single process).
app.get("/onboard/result/:uid", (c) => {
  const uid = c.req.param("uid");
  if (privyMode() && islandFile()) {
    const sess = readSession(c.req.header("Cookie"));
    if (!sess || sess.uid !== uid) return c.json({ error: "not_signed_in" }, 401);
  }
  const result = progressResult(uid);
  if (!result) return c.json({ pending: true }, 202);
  return c.json(result);
});

// Live agent log for a scoring run — the score page polls this while the
// POST works. Session-bound behind the Privy gate, like the score routes.
app.get("/onboard/progress/:uid", (c) => {
  const uid = c.req.param("uid");
  if (privyMode() && islandFile()) {
    const sess = readSession(c.req.header("Cookie"));
    if (!sess || sess.uid !== uid) return c.json({ error: "not_signed_in" }, 401);
  }
  if (c.req.query("fresh")) progressClearIfDone(uid);
  const run = progressGet(uid);
  return c.json(run || { events: [], done: false });
});

// ─── Status ───
app.get("/onboard/status/:uid", async (c) => {
  const uid = c.req.param("uid");
  const user = getUser(uid);
  if (!user) return c.json({ error: "not_found" }, 404);

  const card = getCard(uid);
  const { price } = await getVantisPrice();
  return c.json({
    xConnected: !!user.x_username,
    githubConnected: !!user.github_username,
    linkedinConnected: !!user.linkedin_name,
    scored: !!user.scored_at,
    score: user.score,
    tier: user.score_tier,
    balanceUsd: user.usd_balance,
    balanceVantis: usdToVantis(user.usd_balance || 0, price),
    grantedUsd: user.usd_granted,
    consumedUsd: user.usd_consumed,
    vantisBurned: user.vantis_burned,
    apiKey: user.api_key ? `${user.api_key.slice(0, 12)}...` : null,
    card: card ? { handle: card.handle, url: card.card_url, tier: card.tier, designVariant: card.design_variant } : null,
  });
});

// ─── API: balance ───
app.get("/v1/balance", async (c) => {
  const auth = c.req.header("Authorization");
  if (!auth?.startsWith("Bearer ")) return c.json({ error: "unauthorized" }, 401);
  const balance = await getBalance(auth.slice(7));
  if (!balance) return c.json({ error: "invalid_api_key" }, 401);
  return c.json(balance);
});

// ─── API: models — the catalog as THIS key may call it ───
// Anonymous requests (and keys without pool access) see the open-access
// catalog. A key whose account is on the frontier-pool allowlist also sees
// the allowlist ids — clients enumerate this endpoint, and listing a model a
// key cannot call would just manufacture 403s. Lookup only; no rate-limit
// slot is consumed for listing.
app.get("/v1/models", (c) => {
  const up = resolveUpstream();
  const auth = c.req.header("Authorization");
  const apiKey = auth?.startsWith("Bearer ") ? auth.slice(7) : undefined;
  let pool = false;
  if (apiKey) {
    const row = getApiKeyRow(apiKey);
    const u = row ? getUser(row.user_id) : null;
    pool = u?.pool_access === 1 || (!!u && perksFor(u.id).has("gpt_unlimited"));
  }
  return c.json({
    object: "list",
    data: callableModels(pool).map((m) => ({
      id: m.id,
      object: "model",
      owned_by: "vantis",
      family: m.family,
      vendor: m.vendor,
      context_window: m.contextWindow,
      ...(isAllowlisted(m) ? { access: "allowlist" } : {}),
      ...(m.zdrCapable ? { zdr_capable: true } : {}),
    })),
    pricing: listPricing(),
    serving: servingNote(up),
  });
});

// ─── API: inference proxy — metered gateway, real cost, virtual $VANTIS burn ───
app.post("/v1/chat/completions", async (c) => {
  const t0 = performance.now();
  const auth = c.req.header("Authorization");
  const apiKey = auth?.startsWith("Bearer ") ? auth.slice(7) : undefined;
  const ip = clientIp(c.req.raw);
  const ua = c.req.header("User-Agent") || "";

  // One place that records the request, whatever happened to it.
  const meter = (
    o: { user_id?: string | null; status: number; outcome: any; model?: string | null;
         tokens_in?: number; tokens_out?: number; cost_usd?: number; vantis_burned?: number; error?: string | null }
  ) => {
    try {
      logRequest({
        ...o,
        key_prefix: keyPrefix(apiKey),
        endpoint: "/v1/chat/completions",
        method: "POST",
        latency_ms: Math.round(performance.now() - t0),
        ip, ua,
      });
    } catch (err) {
      console.error("metering write failed:", err); // never fail a call over telemetry
    }
  };

  const gate = authorize(apiKey, "/v1/chat/completions");
  if (!gate.ok) {
    // gate.body.error is the OpenAI-shaped envelope object — the meter's
    // error column takes its code string, never the object itself.
    meter({ user_id: gate.user?.id, status: gate.status, outcome: gate.outcome, error: gate.body?.error?.code ?? gate.body?.error });
    return c.json(gate.body!, gate.status as any, gate.headers);
  }
  const user = gate.user;

  let body: any;
  try {
    body = await c.req.json();
  } catch {
    meter({ user_id: user.id, status: 400, outcome: "bad_request", error: "invalid_json" });
    return c.json(oaiError("invalid_json", "invalid_request_error", "The request body is not valid JSON."), 400, gate.headers);
  }

  // Resolve the requested model against the catalog. Open public ids resolve
  // for everyone; the GPT pool lane (access:"allowlist") only for accounts on
  // the operator's allowlist (users.pool_access=1); staging ids only for
  // users.staging=1; the ad-hoc `codexlb/` prefix needs BOTH flags. An
  // omitted model still lands on the default DeepSeek rail, and anything
  // unknown is refused rather than quietly rerouted.
  const isStaging = user.staging === 1;
  // Perks ride the card, not the account row: holding a card with the GPT
  // perk opens the frontier lane exactly as the operator allowlist does.
  const userPerks = perksFor(user.id);
  const hasPool = user.pool_access === 1 || userPerks.has("gpt_unlimited");
  const selected = catalogModelFor(body.model, isStaging, hasPool) || (isStaging && hasPool ? codexLbModelFor(body.model) : undefined);
  // "zdr": true on the body (or X-ZDR: required) asks for zero-data-retention
  // serving WITHOUT naming a provider in the model id. Any carded key may ask
  // (public since Aug 17 2026 — the console has offered the toggle to every
  // carded account since the Aug 13 GA, and a flag the gateway silently
  // ignored for most of them was the one state that could not stand). It is
  // answered by pinning the ZDR-capable serving tier and sending Wafer-ZDR
  // upstream; if that tier cannot honour it, the call FAILS rather than
  // serving without it.
  const wantZdr = body.zdr === true || c.req.header("X-ZDR") === "required";
  delete body.zdr; // never forward a non-OpenAI field upstream
  // THE TWO TIERS OF THE DEEPSEEK RAIL (Luca, Aug 17 2026: "separate the
  // wafer from the whole line… the pricing will be different"). The default
  // id is the standard line; `deepseek-v4-flash-0731-fast` is the same 0731
  // build on its high-throughput tier at 2× the rate. The ZDR route IS that
  // tier, so a ZDR call on the default id is served AND BILLED as fast — the
  // console shows the price flip when either toggle is on, and the billed
  // catalog id (not the requested one) is what the ledger records, so a
  // settlement row always names the rate it was charged at.
  const fastTier = isDeepSeekRail(selected) && (selected!.id === FAST_MODEL_ID || wantZdr);
  const billed = fastTier ? fastModel() : selected;
  // Only the default rail keeps its failover and its "serving 0731" claim;
  // every OTHER catalog route (the GPT pool, staging diagnostics) is pinned to
  // one gateway. The fast tier is pinned too, but it is the same build with
  // its own branch below, so it is not a "staging" route here.
  const staging = selected && selected.route !== "primary" && !fastTier ? selected : undefined;
  const zdrPin = wantZdr && !!selected && isDeepSeekRail(selected);
  if (!selected) {
    // Tell "allowlist-gated" apart from "unknown": a real catalog id from a
    // key that is not on the pool allowlist is refused by name, plainly.
    const gated = catalogModelFor(body.model, isStaging, true);
    if (gated && isAllowlisted(gated)) {
      meter({ user_id: user.id, status: 403, outcome: "unsupported_model", model: gated.id, error: "model_allowlist_only" });
      return c.json(oaiError("model_allowlist_only", "permission_error",
        `${gated.label} runs on the pooled frontier lane, which is allow-listed per account. This key's account is not on the allowlist.`,
        { requested: body.model, supported: callableModels(hasPool).map((m) => m.id) }), 403, gate.headers);
    }
    meter({ user_id: user.id, status: 400, outcome: "unsupported_model", model: body.model, error: "unsupported_model" });
    return c.json(oaiError("unsupported_model", "invalid_request_error", "That model is not on this rail's catalog.", { requested: body.model, supported: callableModels(hasPool).map((m) => m.id) }), 400, gate.headers);
  }
  // ZDR is a property of the DeepSeek rail's serving tier. On any other id
  // there is no ZDR path, and the promise is fail-closed — so the request is
  // refused by name rather than served without the guarantee it asked for.
  if (wantZdr && !isDeepSeekRail(selected)) {
    meter({ user_id: user.id, status: 400, outcome: "bad_request", model: selected.id, error: "zdr_unsupported_model" });
    return c.json(oaiError("zdr_unsupported_model", "invalid_request_error",
      `${selected.label} has no zero-data-retention route. "zdr": true is honoured on ${TARGET_MODEL} and ${FAST_MODEL_ID} only; the call was not served.`,
      { requested: selected.id, zdr_models: [TARGET_MODEL, FAST_MODEL_ID] }), 400, gate.headers);
  }

  // Image input, refused at OUR door when the model cannot take it.
  //
  // Measured Aug 13: the same image payload on the default DeepSeek id gets a
  // 400 from the baseten/byteplus/opencode lanes, a 200 with "I cannot see the
  // image" from tencent-tokenhub, and a 200 with empty content from wafer —
  // Jatevo round-robins, so the caller's result depends on which lane answered.
  // A confident answer about an image the model never received is the worst of
  // those three, and the user still pays for it. So the catalog decides.
  // The hint lists only models THIS key can call — pointing a non-pool key at
  // the allowlist lane would swap one refusal for another.
  if (!selected.vision && hasImageInput(body.messages)) {
    const visionIds = callableModels(hasPool).filter((m) => m.vision).map((m) => m.id);
    meter({ user_id: user.id, status: 400, outcome: "bad_request", model: selected.id, error: "image_input_unsupported" });
    return c.json(oaiError("image_input_unsupported", "invalid_request_error",
      `${selected.label} accepts text only.${visionIds.length ? ` Models on this rail that take images: ${visionIds.join(", ")}.` : " No model your key can call takes image input."}`,
      { requested: selected.id, vision_models: visionIds }), 400, gate.headers);
  }

  // Reasoning-off, refused at OUR door when the route cannot honour it.
  // Kimi K3's serving line ignores every off-switch (verified Aug 19: the
  // thinking pass still runs and still bills). Forwarding the request would
  // charge the caller for exactly what they asked not to have, so it is
  // refused by name — the same fail-closed shape as image input and ZDR.
  if (selected.reasoningLocked && wantsReasoningOff(body)) {
    meter({ user_id: user.id, status: 400, outcome: "bad_request", model: selected.id, error: "reasoning_always_on" });
    return c.json(oaiError("reasoning_always_on", "invalid_request_error",
      `${selected.label} runs with reasoning always on; this route cannot switch it off, so the request was not served. Drop the thinking/reasoning_effort field, or use ${TARGET_MODEL}, which honours thinking: {"type": "disabled"}.`,
      { requested: selected.id, reasoning_off_models: callableModels(hasPool).filter((m) => !m.reasoningLocked && m.family === "open").map((m) => m.id) }), 400, gate.headers);
  }

  let upstream = staging?.route === "codexlb" ? resolveCodexLb(staging.upstreamModel) : resolveUpstream();
  if (!upstream) {
    if (staging?.route === "codexlb") {
      meter({ user_id: user.id, status: 503, outcome: "upstream_error", model: staging.id, error: "codexlb_route_unavailable" });
      return c.json(serviceUnavailable().body, 503, gate.headers);
    }
    meter({ user_id: user.id, status: 503, outcome: "upstream_error", error: "no_inference_route" });
    return c.json(serviceUnavailable().body, 503, gate.headers);
  }
  // Catalog models other than the default exist only on the Jatevo gateway —
  // no other route, no failover model-swap. Ark cannot serve these ids, so an
  // honest 503 beats silently answering with a different model.
  if (staging && staging.route !== "codexlb") {
    if (upstream.provider !== "jatevo") {
      meter({ user_id: user.id, status: 503, outcome: "upstream_error", model: staging.id, error: "catalog_route_unavailable" });
      return c.json(oaiError("catalog_route_unavailable", "api_error", `${staging.label} is served through the gateway route, which is not the active primary right now. ${TARGET_LABEL} is still available.`), 503, gate.headers);
    }
    upstream.model = staging.upstreamModel;
    upstream.onTarget = false; // the 0731 serving claim never covers another model
    if (staging.zdrCapable) upstream.headers = { ...(upstream.headers || {}), "Wafer-ZDR": "required" };
  }
  if (fastTier) {
    // The fast tier lives on the gateway route only — no other upstream
    // serves it and there is no failover model-swap (a slower, differently
    // priced answer is not the call that was made).
    if (upstream.provider !== "jatevo") {
      const code = zdrPin ? "zdr_route_unavailable" : "catalog_route_unavailable";
      meter({ user_id: user.id, status: 503, outcome: "upstream_error", model: billed!.id, error: code });
      return c.json(oaiError(code, "api_error", zdrPin
        ? "Zero-data-retention serving is not available on the active route right now."
        : `${billed!.label} is served through the gateway route, which is not the active primary right now. ${TARGET_LABEL} is still available.`), 503, gate.headers);
    }
    if (zdrPin) {
      // Jatevo's ZDR contract (live Aug 10, verified again Aug 17: bare-id
      // rotation, Wafer-only + "Wafer-ZDR: honored" echo when the header is
      // present, echoes the …-0731-Fast tier): send the BARE build id + the
      // header, and THEIR balancer pins the ZDR-capable tier. A provider-
      // prefixed id would override their routing.
      upstream.model = "DeepSeek-V4-Flash-0731";
      upstream.headers = { ...(upstream.headers || {}), "Wafer-ZDR": "required" };
    } else {
      // Fast without ZDR: pin the tier explicitly and do NOT require ZDR —
      // the caller asked for throughput, not the retention guarantee, and
      // requiring it would only shrink the capacity that can answer them.
      upstream.model = billed!.upstreamModel;
    }
    upstream.onTarget = isTargetBuild(upstream.model); // same 0731 checkpoint on both tiers
  }
  const rate = billed!.rate;
  // Translate OpenAI-SDK dialect for the open-weight lanes (developer→system,
  // max_completion_tokens→max_tokens). Must run BEFORE the cap/default block
  // below — the default used to inject max_tokens beside a client's
  // max_completion_tokens, a pair the byteplus lane 400s on.
  if (upstream.provider !== "codexlb") normalizeForOpenWeightLanes(body);

  // Streaming: forwarded as SSE. Settlement needs real token counts, so the
  // upstream is always asked for the usage frame — the client only sees it
  // if they asked for include_usage themselves (OpenAI-compatible behavior).
  // Truthy-but-not-true stream values ("true", 1) count as streaming — the
  // upstream would treat them as truthy and answer with SSE either way.
  const isStream = !!body.stream;
  if (isStream) body.stream = true;
  const clientWantsUsage = isStream && body.stream_options?.include_usage === true;
  if (isStream) body.stream_options = { ...(body.stream_options || {}), include_usage: true };
  if (typeof body.max_tokens === "number" && body.max_tokens > MAX_TOKENS_CAP) body.max_tokens = MAX_TOKENS_CAP;
  if (body.max_tokens == null) body.max_tokens = 1024;
  body.model = upstream.model;
  applyUpstreamDefaults(body, upstream); // pins "reasoning on by default" on routes that default it off

  // Reserve the WORST case — every requested output token, times n choices —
  // before dialling out, as a real HOLD, not just a read: concurrent calls on
  // one key otherwise all pass the same balance check and overdraw together.
  const inputTokens = estimateInputTokens(body.messages);
  const nChoices = Math.max(1, Math.min(8, Number(body.n) || 1));
  const reserve = worstCaseCost(inputTokens, body.max_tokens * nChoices, rate);
  const scope = spenderScope(gate.wallet?.id, user.id);

  // A Genesis cartridge plugged into this lane meters the call against its
  // daily token allowance instead of the lane's dollars. The claim is made in
  // TOKENS, worst case, mirroring the USD reserve exactly: input plus every
  // requested output token. cartridgeFor() returns null when the day's
  // allowance cannot cover the worst case, and the call falls through to
  // credits — an exhausted cartridge degrades to a normal paid call rather
  // than failing.
  const worstCaseTokens = inputTokens + body.max_tokens * nChoices;
  // A held card's perk covers this whole call class — it outranks credits
  // AND any plugged cartridge, so nothing is reserved and no allowance is
  // decremented. Only the DEFAULT rail needs covering here: the frontier
  // GPT ids are rate {0,0} by design and already settle to zero, so their
  // perk is pure access (hasPool above). Exposure lands in perk_usage.
  // The DeepSeek perk and the cartridge allowances are denominated in
  // DEFAULT-RAIL tokens (Luca: "5m deepseek token" / "1B token"). The FAST
  // tier is the same build at twice the rate, so a token of allowance spent
  // there is twice the house exposure the perk/allowance tables print. Until
  // the operator prices that in, the premium tier bills credits like any
  // other paid route — the perk/cartridge covers the standard line only.
  const perkCover: PerkKey | null =
    !staging && !fastTier && userPerks.has("deepseek_unlimited")
      && perkTokensToday(user.id) + worstCaseTokens <= PERK_DAILY_TOKEN_CAP // worst-case margin, mirroring the allowance check
      ? "deepseek_unlimited" : null;
  // A cartridge's allowance therefore covers the primary rail and the
  // zero-rate lanes ONLY — a staging-catalog model with a real rate (Kimi at
  // $15/M out) or the fast tier must bill credits, or 1B tokens of allowance
  // silently becomes a five-figure house bill the exposure table never
  // printed (adversarial-review finding, Aug 13).
  const cartEligible = (!staging && !fastTier) || (rate.input === 0 && rate.output === 0);
  const cart = perkCover || !cartEligible ? null : cartridgeFor(gate.wallet?.id, worstCaseTokens);

  const spendBalance = (gate.wallet ? (gate.wallet.usd_balance || 0) : (user.usd_balance || 0)) - heldFor(scope);
  if (!perkCover && !cart && spendBalance < reserve) {
    meter({ user_id: user.id, status: 402, outcome: "insufficient_credits", model: billed!.id, error: "insufficient_credits" });
    // The lane is what pays, so an empty lane beside a funded card is the
    // common case — say "allocate", not "top up", or the message sends someone
    // looking for a payment page while their credits sit one transfer away.
    const mainAvail = user.usd_balance || 0;
    const fix = mainAvail >= reserve
      ? `Allocate credits from your main card balance ($${mainAvail.toFixed(2)} available) to this lane at card.vantis.sh/wallets, or lower max_tokens.`
      : "Lower max_tokens, or allocate more credits to this lane at card.vantis.sh/wallets.";
    return c.json(oaiError("insufficient_credits", "insufficient_quota", `This call could cost up to $${reserve.toFixed(6)} at max_tokens=${body.max_tokens}${nChoices > 1 ? ` × n=${nChoices}` : ""}, which is more than this lane's available balance (in-flight requests hold their reserve). ${fix}`, { balance_usd: Math.max(0, spendBalance), required_usd: reserve, main_balance_usd: mainAvail }), 402, gate.headers);
  }
  if (cart) holdTokens(cart.slug, cart.userId, worstCaseTokens);
  else if (!perkCover) holdReserve(scope, reserve);
  let holdReleased = false;
  const releaseHold = () => {
    if (holdReleased) return;
    holdReleased = true;
    if (cart) releaseTokens(cart.slug, cart.userId, worstCaseTokens);
    else if (!perkCover) releaseReserve(scope, reserve);
  };

  // Settlement, one path for both the streaming and buffered branches. On a
  // cartridge call nothing is charged and nothing is burned: the allowance is
  // access, not a balance, so there is no ledger entry to write. What IS
  // written is cartridge_usage — the tokens against the allowance and the real
  // dollars WE paid upstream, which is where the exposure lives. api_requests
  // keeps recording cost_usd as what the CALLER was charged, which on this
  // path is zero; read the two together, never the request log alone.
  // `model` is the BILLED catalog id (billed.id) — the ledger names the rate
  // it charged, never the upstream's echo (which varies by lane and used to
  // put "deepseek-v4-flash" / "…-Fast" on the public settlements table).
  // `cached` is the prompt-cache READ count from the usage frame; it bills at
  // the rate's cache-read price where one is published.
  const tierLabel = isDeepSeekRail(selected) ? (fastTier ? "fast" : "standard") : undefined;
  const settleCall = async (model: string, tin: number, tout: number, cached = 0): Promise<any> => {
    const d = await settleInner(model, tin, tout, cached);
    if (d && tierLabel) d.tier = tierLabel; // rides into the `vantis` object of both response shapes
    return d;
  };
  const settleInner = async (model: string, tin: number, tout: number, cached = 0): Promise<any> => {
    if (perkCover) {
      const realCost = calculateCost(tin, tout, rate, cached);
      notePerkUsage(user.id, perkCover, tin + tout, realCost);
      return {
        ok: true,
        cost_usd: 0,
        vantis_burned: 0,
        perk: {
          key: perkCover,
          label: PERK_DEFS[perkCover].label,
          upstream_cost_usd: realCost,
          note: "covered by a card held on this account — no credits charged, no burn recorded",
        },
      };
    }
    if (!cart) return deductAndBurn(apiKey!, model, tin, tout, rate, cached);
    const realCost = calculateCost(tin, tout, rate, cached);
    noteCartridgeUsage(cart.slug, cart.userId, tin + tout, realCost);
    const after = allowanceState(cart.slug, cart.userId);
    return {
      ok: true,
      cost_usd: 0,
      vantis_burned: 0,
      cartridge: {
        card: cart.card.name,
        slug: cart.slug,
        grade: cart.card.grade,
        tokens_used_today: after?.used || 0,
        tokens_remaining_today: after?.remaining || 0,
        daily_allowance: cart.rights.dailyTokens,
        resets_at: after?.resets_at,
        upstream_cost_usd: realCost,
        note: "metered against the cartridge's daily allowance — no credits charged, no burn recorded",
      },
    };
  };

  // Dial the primary; if it dies or reaches its provider-level request quota,
  // fail over ONCE to the independent Ark route. Request-validation 4xx
  // responses remain final; an upstream 429 is capacity, not client error.
  const dial = (route: typeof upstream) =>
    fetch(`${route.baseUrl}/chat/completions`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${route.apiKey}`, ...(route.headers || {}) },
      body: JSON.stringify({ ...body, model: route.model }),
      // Streams get headroom for long generations; the pump's own idle guard
      // catches silent stalls well before this wall-clock ceiling.
      signal: AbortSignal.timeout(isStream ? 300_000 : 180_000),
    });

  // One same-lane retry for PINNED tiers. The standard line has its own
  // failover; fast/ZDR/staging pins have none by design ("an honest failure
  // beats a silent tier swap"). A transient wafer reset (premature close,
  // connection reset, 5xx blip) must not surface as a raw transport failure
  // when the SAME lane would answer a second dial — retrying the same lane
  // never touches another tier, so the no-silent-swap contract holds.
  // 429 is deliberately NOT retried: on the fast tier it is that tier's own
  // capacity (measured Aug 17: ~170k-token bursts throttle while the
  // standard lanes 200 in the same minute), and a retry would only double
  // the throttle hits. 4xx stays final too.
  const dialRail = async (): Promise<Response> => {
    const attempt = () => dial(upstream);
    try {
      const res = await attempt();
      if (failoverAllowed || res.status < 500) return res;
      traceVendor({ vendor: upstream.provider, endpoint: tracedEndpoint(upstream, res, "chat.completions"), status: res.status, latency_ms: Math.round(performance.now() - t0), user_id: user.id, error: "retry_same_lane" });
      console.error(`Upstream ${upstream.provider} answered ${res.status} on a pinned tier — retrying the same lane once`);
      await res.body?.cancel().catch(() => {});
      return await attempt();
    } catch (err: any) {
      // Pinned-tier network failure: one same-lane retry. If the retry ALSO
      // throws, the caller's catch below runs (cooldown + honest 503).
      if (failoverAllowed) throw err;
      traceVendor({ vendor: upstream.provider, endpoint: "chat.completions", latency_ms: Math.round(performance.now() - t0), user_id: user.id, error: `retry_same_lane (${err?.message || "unreachable"})` });
      console.error(`Upstream ${upstream.provider} unreachable on a pinned tier (${err?.message}) — retrying the same lane once`);
      return await attempt();
    }
  };

  let served = upstream;
  const failoverAllowed = !staging && !fastTier; // staging / fast tier / ZDR = gateway-only; an honest failure beats a silent tier or non-ZDR swap
  let inferenceRes: Response;
  noteUpstreamCall(); // consume a slot only now that we are really dialling out
  try {
    inferenceRes = await dialRail();
    if (inferenceRes.status === 429 || inferenceRes.status >= 500) {
      // A 429 on a PINNED tier (fast/ZDR, staging pins) is that tier's own
      // capacity — measured Aug 17: the fast tier throttles a single user's
      // ~170k-token bursts while the default line's lanes serve 200s in the
      // same minute. Cooling the whole gateway route down on it would push
      // every STANDARD call onto the Ark failover for Retry-After seconds
      // (60 if the header is missing) over a signal that says nothing about
      // the gateway. Only the default line's 429 speaks for the route; the
      // gateway's own key ceiling would hit the default line's next call
      // anyway. 5xx keeps the cooldown on every tier.
      if (upstream.provider === "jatevo" && !(inferenceRes.status === 429 && (fastTier || staging))) {
        coolDownJatevo(retryAfterSeconds(inferenceRes, inferenceRes.status === 429 ? 60 : 10));
      }
      const fo = failoverAllowed ? resolveFailover(upstream) : null;
      if (fo) {
        traceVendor({ vendor: upstream.provider, endpoint: tracedEndpoint(upstream, inferenceRes, "chat.completions"), status: inferenceRes.status, latency_ms: Math.round(performance.now() - t0), user_id: user.id, error: inferenceRes.status === 429 ? "saturated_failover" : "failed_over" });
        console.error(`Upstream ${upstream.provider} answered ${inferenceRes.status} — failing over to ${fo.provider}`);
        await inferenceRes.body?.cancel().catch(() => {});
        served = fo;
        inferenceRes = await dial(fo);
      }
    }
  } catch (err: any) {
    if (upstream.provider === "jatevo") coolDownJatevo(10);
    const fo = failoverAllowed ? resolveFailover(upstream) : null;
    if (fo) {
      traceVendor({ vendor: upstream.provider, endpoint: "chat.completions", latency_ms: Math.round(performance.now() - t0), user_id: user.id, error: err?.message || "unreachable" });
      console.error(`Upstream ${upstream.provider} unreachable (${err?.message}) — failing over to ${fo.provider}`);
      try {
        served = fo;
        inferenceRes = await dial(fo);
      } catch (err2: any) {
        releaseHold();
        traceVendor({ vendor: fo.provider, endpoint: "chat.completions", latency_ms: Math.round(performance.now() - t0), user_id: user.id, error: err2?.message || "unreachable" });
        meter({ user_id: user.id, status: 502, outcome: "upstream_error", model: TARGET_MODEL, error: `${err.message}; failover: ${err2.message}` });
        return c.json(serviceUnavailable().body, 503, gate.headers);
      }
    } else {
      releaseHold();
      traceVendor({ vendor: upstream.provider, endpoint: "chat.completions", latency_ms: Math.round(performance.now() - t0), user_id: user.id, error: err.message });
      meter({ user_id: user.id, status: 502, outcome: "upstream_error", model: TARGET_MODEL, error: err.message });
      return c.json(serviceUnavailable().body, 503, gate.headers);
    }
  }

  if (!inferenceRes.ok) {
    releaseHold();
    traceVendor({ vendor: served.provider, endpoint: tracedEndpoint(served, inferenceRes, "chat.completions"), status: inferenceRes.status, latency_ms: Math.round(performance.now() - t0), user_id: user.id, error: `http_${inferenceRes.status}` });
    const detail = await inferenceRes.text().catch(() => "");
    // A 400 from a lane means OUR forwarded body was refused, and the lanes
    // disagree about what is valid (the `developer` role, Aug 17). Log the
    // SHAPE of what we sent — field names and role sequence, never content —
    // so the next lane-validator drift is diagnosable from journald alone.
    if (inferenceRes.status === 400) {
      try {
        console.error(`upstream 400 shape: ${JSON.stringify({
          lane: inferenceRes.headers.get("X-Served-By") || null,
          provider: served.provider,
          fields: Object.keys(body),
          roles: Array.isArray(body.messages) ? body.messages.map((m: any) => m?.role ?? "?") : null,
          tools: Array.isArray(body.tools) ? body.tools.length : 0,
        })}`);
      } catch {}
    }
    // The provider's own quota refusal is a rate limit, not an outage. Record
    // it as one so the console does not read it as the upstream falling over.
    const saturated = inferenceRes.status === 429;
    meter({
      user_id: user.id, status: inferenceRes.status,
      outcome: saturated ? "upstream_saturated" : "upstream_error",
      // Record the model the CALLER actually asked for. This said TARGET_MODEL
      // unconditionally, so every failed pool call was booked against DeepSeek
      // — the admin by-model breakdown and the intel attribution both blamed
      // the default rail for failures on a different one. The BILLED id: a
      // ZDR call on the default id is a fast-tier call, and its failure
      // belongs to that tier's row.
      model: billed?.id || TARGET_MODEL, error: operatorDetail(detail),
    });
    // The caller gets a generic server-shaped failure; `detail` (the vendor's
    // own text) is recorded above for the operator and never forwarded. See
    // server/pool-errors.ts for why — relayed vendor text both leaks who we
    // buy from and frequently describes the wrong thing (their "Invalid API
    // key" means OUR key to THEM, not the caller's key to us).
    const ce = upstreamFailure(inferenceRes.status, detail, inferenceRes.headers.get("Retry-After"));
    return c.json(
      ce.body,
      ce.status as any,
      ce.retryAfter ? { ...gate.headers, "Retry-After": ce.retryAfter } : gate.headers
    );
  }

  // ZDR proof, translated into OUR namespace — client-facing surfaces never
  // name upstream providers. The gateway reads the route's honored echo and
  // attests it as X-Vantis-ZDR: honored, so "zdr": true is verifiable per
  // response without leaking the serving topology.
  const zdrEcho = inferenceRes.headers.get("Wafer-ZDR");
  const proofHeaders: Record<string, string> = {};
  if (zdrPin && zdrEcho === "honored") proofHeaders["X-Vantis-ZDR"] = "honored";
  if (zdrPin && zdrEcho !== "honored") {
    // contract violation — the call already served, so record loudly
    traceVendor({ vendor: served.provider, endpoint: "chat.completions", status: 200, user_id: user.id, error: "zdr_not_honored" });
  }
  // Which tier of the DeepSeek rail billed this call — so a caller who sent
  // "zdr": true on the default id can see WHY the settlement is at the fast
  // rate, and a fast-id caller can verify they got the tier they paid for.
  if (isDeepSeekRail(selected)) proofHeaders["X-Vantis-Tier"] = fastTier ? "fast" : "standard";

  if (isStream) {
    const stream = settleStream({
      upstreamBody: inferenceRes.body!,
      clientWantsUsage,
      fallback: { model: served.model, inputTokens },
      // Settle under the BILLED catalog id, never the upstream echo.
      settle: (_model, tin, tout, cached) => settleCall(billed!.id, tin, tout, cached),
      onSettled: releaseHold,
      report: (r) => {
        meter({
          // billed.id, not the upstream echo r.model — same alignment as the
          // buffered path's meter; the SSE usage frame still carries the true
          // served build as model_served.
          user_id: user.id, status: 200, outcome: r.outcome, model: billed!.id,
          tokens_in: r.tokensIn, tokens_out: r.tokensOut, tokens_cached: r.tokensCached,
          cost_usd: r.costUsd, vantis_burned: r.burned, error: r.error,
        });
        traceVendor({
          vendor: served.provider, endpoint: tracedEndpoint(served, inferenceRes, "chat.completions"), status: 200,
          latency_ms: Math.round(performance.now() - t0), user_id: user.id,
          tokens_in: r.tokensIn, tokens_out: r.tokensOut,
          cost_est_usd: estimateVendorCost(served.provider, r.tokensIn, r.tokensOut),
          error: r.error,
        });
      },
    });
    return new Response(stream, {
      status: 200,
      headers: {
        ...gate.headers,
        ...proofHeaders,
        "Content-Type": "text/event-stream; charset=utf-8",
        "Cache-Control": "no-cache",
        "X-Accel-Buffering": "no",
      },
    });
  }

  let result: any;
  try {
    result = await inferenceRes.json();
  } catch (err: any) {
    // Body died mid-read (abort, stall, malformed) — the tokens can't be
    // billed fairly without usage, but the failure must still be metered.
    releaseHold();
    traceVendor({ vendor: served.provider, endpoint: "chat.completions", latency_ms: Math.round(performance.now() - t0), user_id: user.id, error: `body_read_failed: ${err?.message || err}` });
    meter({ user_id: user.id, status: 502, outcome: "upstream_error", model: TARGET_MODEL, error: `body_read_failed: ${err?.message || err}` });
    return c.json(serverError().body, 502, gate.headers);
  }

  // Settle from real usage; fall back to the estimate if usage is missing.
  // The served model is recorded as-is — never relabelled as the target.
  // The hold releases only AFTER the debit lands — releasing earlier reopens
  // the race the hold exists to close.
  const tokensIn = result.usage?.prompt_tokens || inputTokens;
  const tokensOut = result.usage?.completion_tokens || 0;
  const tokensCached = result.usage ? Math.min(cachedTokensOf(result.usage), tokensIn) : 0;
  let deduction: any;
  // Settled under the BILLED catalog id: the ledger row names the rate it was
  // charged at (fast vs standard). The upstream's echo still reaches the
  // client as model_served below.
  try { deduction = await settleCall(billed!.id, tokensIn, tokensOut, tokensCached); }
  finally { releaseHold(); } // a settle that throws must never strand the hold
  traceVendor({
    vendor: served.provider, endpoint: tracedEndpoint(served, inferenceRes, "chat.completions"), status: 200,
    latency_ms: Math.round(performance.now() - t0), user_id: user.id,
    tokens_in: tokensIn, tokens_out: tokensOut,
    cost_est_usd: estimateVendorCost(served.provider, tokensIn, tokensOut),
  });

  meter({
    user_id: user.id,
    status: 200,
    outcome: deduction.ok ? "ok" : "insufficient_credits",
    // The CALLER's catalog id, matching what the failure path records. The
    // upstream's echoed name ("deepseek-v4-flash", the wafer Fast id) used to
    // land here, so one client's session showed up in the admin log as two
    // models — successes under the echo, failures under the requested id —
    // and read as "alias works, 0731 broken" (Aug 17). The true served build
    // still reaches the client as model_served. Since Aug 17 the burn ledger
    // carries the same billed id (see settleCall), so the two agree.
    model: billed!.id,
    tokens_in: tokensIn,
    tokens_out: tokensOut,
    tokens_cached: tokensCached,
    cost_usd: deduction.cost_usd || 0,
    vantis_burned: deduction.vantis_burned || 0,
    error: !deduction.ok ? deduction.error
      : (deduction.shortfall_usd || 0) > 0 ? `settled_with_shortfall_$${deduction.shortfall_usd!.toFixed(6)}` : null,
  });

  return c.json({
    ...result,
    vantis: deduction.perk
      ? {
          cost_usd: 0,
          vantis_burned: 0,
          model_served: result.model || served.model,
          perk: deduction.perk,
          note: "covered by a card held on this account — no credits charged, no burn recorded",
        }
      : deduction.cartridge
      ? {
          cost_usd: 0,
          vantis_burned: 0,
          model_served: result.model || served.model,
          cartridge: deduction.cartridge,
          note: "metered against the plugged card's daily allowance — no credits charged",
        }
      : deduction.ok
      ? {
          cost_usd: deduction.cost_usd,
          vantis_burned: deduction.vantis_burned,
          vantis_price_usd: deduction.vantis_price_usd,
          balance_usd: deduction.balance_usd,
          balance_vantis: deduction.balance_vantis,
          total_vantis_burned: deduction.total_vantis_burned,
          model_served: result.model || served.model,
          ...(deduction.tier ? { tier: deduction.tier } : {}),
          ...(tokensCached > 0 ? { tokens_cached: tokensCached } : {}),
          note: "virtual burn — off-chain ledger",
        }
      : { error: deduction.error, cost_usd: deduction.cost_usd },
  }, 200, { ...gate.headers, ...proofHeaders });
});

// ─── API: image generation — metered, routed through our own balancer pool ───
// gpt-image-2 (and the rest of the image family) is served by balancer-gpt
// .vantis.sh, our own ChatGPT subscription pool. Same billing discipline as
// chat: cost at OpenAI's published list price → $VANTIS burn. The upstream
// reports token usage, so we bill on real numbers, not an estimate.
app.post("/v1/images/generations", async (c) => {
  const t0 = performance.now();
  const auth = c.req.header("Authorization");
  const apiKey = auth?.startsWith("Bearer ") ? auth.slice(7) : undefined;
  const ip = clientIp(c.req.raw);
  const ua = c.req.header("User-Agent") || "";

  const meter = (o: { user_id?: string | null; status: number; outcome: any; model?: string | null;
         tokens_in?: number; tokens_out?: number; cost_usd?: number; vantis_burned?: number; error?: string | null }) => {
    try {
      logRequest({
        ...o,
        key_prefix: keyPrefix(apiKey),
        endpoint: "/v1/images/generations",
        method: "POST",
        latency_ms: Math.round(performance.now() - t0),
        ip, ua,
      });
    } catch (err) {
      console.error("metering write failed:", err);
    }
  };

  const gate = authorize(apiKey, "/v1/images/generations");
  if (!gate.ok) {
    meter({ user_id: gate.user?.id, status: gate.status, outcome: gate.outcome, error: gate.body?.error?.code ?? gate.body?.error });
    return c.json(gate.body!, gate.status as any, gate.headers);
  }
  const user = gate.user;

  let body: any;
  try {
    body = await c.req.json();
  } catch {
    meter({ user_id: user.id, status: 400, outcome: "bad_request", error: "invalid_json" });
    return c.json(oaiError("invalid_json", "invalid_request_error", "The request body is not valid JSON."), 400, gate.headers);
  }

  // Only the image-generation models are valid here. Resolve against the
  // catalog so an unknown id is refused rather than silently rerouted.
  // gpt-image-2 rides the pooled frontier lane, so the allowlist gate applies
  // exactly as it does on /v1/chat/completions.
  const isStaging = user.staging === 1;
  const hasPool = user.pool_access === 1 || perksFor(user.id).has("gpt_unlimited");
  const selected = catalogModelFor(body.model, isStaging, hasPool);
  if (!selected || selected.id !== "gpt-image-2") {
    const gated = catalogModelFor(body.model, isStaging, true);
    if (!selected && gated && isAllowlisted(gated)) {
      meter({ user_id: user.id, status: 403, outcome: "unsupported_model", model: gated.id, error: "model_allowlist_only" });
      return c.json(oaiError("model_allowlist_only", "permission_error",
        `${gated.label} runs on the pooled frontier lane, which is allow-listed per account. This key's account is not on the allowlist.`,
        { requested: body.model }), 403, gate.headers);
    }
    meter({ user_id: user.id, status: 400, outcome: "unsupported_model", model: body.model, error: "unsupported_model" });
    return c.json(oaiError("unsupported_model", "invalid_request_error", "That model is not an image-generation model on this rail's catalog.", { requested: body.model, supported: hasPool ? ["gpt-image-2"] : [] }), 400, gate.headers);
  }

  const upstream = resolveCodexLb(selected.upstreamModel);
  if (!upstream) {
    meter({ user_id: user.id, status: 503, outcome: "upstream_error", model: selected.id, error: "codexlb_route_unavailable" });
    return c.json(serviceUnavailable().body, 503, gate.headers);
  }
  const rate = selected.rate;

  // Reserve the worst case — a high-quality image can cost a few cents —
  // before dialling out, then release once the real usage lands.
  const inputTokens = Math.ceil(JSON.stringify(body.prompt || "").length / 4);
  const reserve = worstCaseCost(inputTokens, 8192, rate);
  const scope = spenderScope(gate.wallet?.id, user.id);
  const spendBalance = (gate.wallet ? (gate.wallet.usd_balance || 0) : (user.usd_balance || 0)) - heldFor(scope);
  if (spendBalance < reserve) {
    meter({ user_id: user.id, status: 402, outcome: "insufficient_credits", model: selected.id, error: "insufficient_credits" });
    return c.json(oaiError("insufficient_credits", "insufficient_quota", `This image could cost up to $${reserve.toFixed(6)} at the output ceiling, which is more than your available balance.`, { balance_usd: Math.max(0, spendBalance), required_usd: reserve }), 402, gate.headers);
  }
  holdReserve(scope, reserve);
  let holdReleased = false;
  const releaseHold = () => { if (!holdReleased) { holdReleased = true; releaseReserve(scope, reserve); } };

  let inferenceRes: Response;
  noteUpstreamCall();
  try {
    inferenceRes = await fetch(`${upstream.baseUrl}/images/generations`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${upstream.apiKey}` },
      body: JSON.stringify({ ...body, model: upstream.model }),
      signal: AbortSignal.timeout(300_000),
    });
  } catch (err: any) {
    releaseHold();
    traceVendor({ vendor: upstream.provider, endpoint: "images.generations", latency_ms: Math.round(performance.now() - t0), user_id: user.id, error: err?.message || "unreachable" });
    meter({ user_id: user.id, status: 502, outcome: "upstream_error", model: selected.id, error: err?.message || "unreachable" });
    return c.json(serviceUnavailable().body, 503, gate.headers);
  }

  if (!inferenceRes.ok) {
    releaseHold();
    const detail = await inferenceRes.text().catch(() => "");
    traceVendor({ vendor: upstream.provider, endpoint: "images.generations", status: inferenceRes.status, latency_ms: Math.round(performance.now() - t0), user_id: user.id, error: `http_${inferenceRes.status}` });
    meter({ user_id: user.id, status: inferenceRes.status, outcome: inferenceRes.status === 429 ? "upstream_saturated" : "upstream_error", model: selected.id, error: detail.slice(0, 200) });
    const retryAfter = inferenceRes.headers.get("Retry-After") || "2";
    const ice = upstreamFailure(inferenceRes.status, detail, inferenceRes.headers.get("Retry-After"));
    return c.json(ice.body, ice.status as any, ice.retryAfter ? { ...gate.headers, "Retry-After": ice.retryAfter } : gate.headers);
  }

  let result: any;
  try {
    result = await inferenceRes.json();
  } catch (err: any) {
    releaseHold();
    traceVendor({ vendor: upstream.provider, endpoint: "images.generations", latency_ms: Math.round(performance.now() - t0), user_id: user.id, error: `body_read_failed: ${err?.message || err}` });
    meter({ user_id: user.id, status: 502, outcome: "upstream_error", model: selected.id, error: `body_read_failed: ${err?.message || err}` });
    return c.json(serverError().body, 502, gate.headers);
  }

  // Settle from real token usage; the upstream reports input/output tokens.
  const tokensIn = result.usage?.input_tokens || inputTokens;
  const tokensOut = result.usage?.output_tokens || 0;
  const deduction = await deductAndBurn(apiKey!, result.model || upstream.model, tokensIn, tokensOut, rate);
  releaseHold();
  traceVendor({
    vendor: upstream.provider, endpoint: "images.generations", status: 200,
    latency_ms: Math.round(performance.now() - t0), user_id: user.id,
    tokens_in: tokensIn, tokens_out: tokensOut,
    cost_est_usd: estimateVendorCost(upstream.provider, tokensIn, tokensOut),
  });
  meter({
    user_id: user.id, status: 200,
    outcome: deduction.ok ? "ok" : "insufficient_credits",
    model: result.model || upstream.model,
    tokens_in: tokensIn, tokens_out: tokensOut,
    cost_usd: deduction.cost_usd || 0,
    vantis_burned: deduction.vantis_burned || 0,
    error: !deduction.ok ? deduction.error
      : (deduction.shortfall_usd || 0) > 0 ? `settled_with_shortfall_$${deduction.shortfall_usd!.toFixed(6)}` : null,
  });

  return c.json({
    ...result,
    vantis: deduction.ok
      ? {
          cost_usd: deduction.cost_usd,
          vantis_burned: deduction.vantis_burned,
          vantis_price_usd: deduction.vantis_price_usd,
          balance_usd: deduction.balance_usd,
          balance_vantis: deduction.balance_vantis,
          total_vantis_burned: deduction.total_vantis_burned,
          model_served: result.model || upstream.model,
          note: "virtual burn — off-chain ledger",
        }
      : { error: deduction.error, cost_usd: deduction.cost_usd },
  }, 200, gate.headers);
});

// ─── Card page ───
app.get("/card/:handle", async (c) => {
  const handle = c.req.param("handle").replace(/^@/, "");
  const card = getCardByHandle(`@${handle}`);
  if (!card) return c.html(cardNotFoundHtml(handle), 404);
  const user = getUser(card.user_id);
  const { price } = await getVantisPrice();
  const sess = privyMode() ? readSession(c.req.header("Cookie")) : null;
  // Shared card links carry ?via=<owner> — landing here attributes the visit.
  const via = normHandle(c.req.query("via") || "");
  if (via && /^[a-z0-9_]{1,15}$/.test(via)) {
    c.header("Set-Cookie", `vc_ref=${via}; Max-Age=${30 * 24 * 3600}; Path=/; HttpOnly; Secure; SameSite=Lax`);
  }
  return c.html(cardHtml(card, {
    vantisPrice: price,
    userBurned: user?.vantis_burned || 0,
    balanceUsd: user?.usd_balance || 0,
    own: !!sess && sess.uid === card.user_id,
  }));
});

// ─── OG share image: the card itself, rendered once and cached ───
const OG_DIR = "data/og-cache";
const ogInflight = new Map<string, Promise<string>>();
async function renderOgPng(handle: string, version: string, viewPath?: string, size?: { w: number; h: number }): Promise<string> {
  const { mkdirSync } = await import("node:fs");
  mkdirSync(OG_DIR, { recursive: true });
  const path = `${OG_DIR}/${handle}-${version}.png`;
  if (await Bun.file(path).exists()) return path;
  if (ogInflight.has(path)) return ogInflight.get(path)!;
  const job = (async () => {
    const { createRequire } = await import("node:module");
    const require = createRequire(import.meta.url);
    const puppeteer = require("/home/ubuntu/projects/vantis-swap/node_modules/puppeteer-core");
    const browser = await puppeteer.launch({
      executablePath: "/home/ubuntu/.cache/puppeteer/chrome/linux-149.0.7827.22/chrome-linux64/chrome",
      headless: "new",
      args: ["--no-sandbox"],
    });
    try {
      const page = await browser.newPage();
      await page.setViewport({ width: size?.w || 1200, height: size?.h || 630, deviceScaleFactor: 1 });
      await page.goto(`http://127.0.0.1:${PORT}${viewPath || `/card/${handle}/og-view`}`, { waitUntil: "networkidle0", timeout: 20000 });
      await page.screenshot({ path });
    } finally {
      await browser.close();
      ogInflight.delete(path);
    }
    return path;
  })();
  ogInflight.set(path, job);
  return job;
}

app.get("/reserve/og-view", (c) => c.html(ogReserveHtml()));
app.get("/reserve/og.png", async (c) => {
  try {
    const path = await renderOgPng("__reserve", "v2", `/reserve/og-view`);
    const f = Bun.file(path);
    if (!(await f.exists())) return c.notFound();
    return new Response(f, { headers: { "Content-Type": "image/png", "Cache-Control": "public, max-age=86400" } });
  } catch (err) { console.error("reserve og:", err); return c.notFound(); }
});

// The bare 1200x630 stage the screenshot shoots — static card, no motion.
app.get("/card/:handle/og-view", (c) => {
  const handle = c.req.param("handle").replace(/^@/, "");
  const card = getCardByHandle(`@${handle}`);
  if (!card) return c.notFound();
  return c.html(ogViewHtml(card));
});

app.get("/card/:handle/og.png", async (c) => {
  const handle = c.req.param("handle").replace(/^@/, "");
  const card = getCardByHandle(`@${handle}`);
  if (!card) return c.notFound();
  const version = `v2-${card.tier}-${String(card.grant_usd).replace(".", "_")}`;
  try {
    const path = await renderOgPng(handle, version);
    const f = Bun.file(path);
    if (!(await f.exists())) return c.notFound();
    return new Response(f, {
      headers: { "Content-Type": "image/png", "Cache-Control": "public, max-age=86400" },
    });
  } catch (err) {
    console.error("og render error:", err);
    return c.notFound();
  }
});

// ─── Privy gate (account layer + embedded wallet; X rides through Privy) ───

function manifestFile(name: string): string | null {
  try {
    const m = JSON.parse(readFileSync("public/manifest.json", "utf8"));
    return m[name] || null;
  } catch { return null; }
}
const islandFile = () => manifestFile("privy-island");
const orbFile = () => manifestFile("orb-island");

// Consent + first-party analytics loader (fleet pattern; Umami via /_v/).
app.get("/consent.js", (c) => new Response(Bun.file("public/consent.js"), {
  headers: { "Content-Type": "text/javascript; charset=utf-8", "Cache-Control": "public, max-age=3600" },
}));

// Catalog brand marks, fetched at build time and served locally.
// NOTE: Bun.file streams lazily — responding with a missing file returns
// 200 headers first, then the ENOENT surfaces mid-stream as an UNCAUGHT
// error that kills the whole process. Always await f.exists() first.
// CC0 PBR texture maps (ambientCG) for the wallet device — self-hosted,
// filename-versioned per the CF cache rule.
app.get("/fonts/:file", (c) => {
  const file = c.req.param("file");
  if (!/^[A-Za-z0-9-]+\.woff2$/.test(file)) return c.notFound();
  return new Response(Bun.file(`public/fonts/${file}`), {
    headers: { "Content-Type": "font/woff2", "Cache-Control": "public, max-age=31536000, immutable" },
  });
});

app.get("/tex/:file", (c) => {
  const file = c.req.param("file");
  if (!/^[a-z0-9-]+\.(jpg|png|webp)$/.test(file)) return c.notFound();
  const f = Bun.file(`public/tex/${file}`);
  return new Response(f, {
    headers: { "Content-Type": "image/jpeg", "Cache-Control": "public, max-age=31536000, immutable" },
  });
});

app.get("/logos/:file", async (c) => {
  const file = c.req.param("file");
  if (!/^[a-z0-9-]+\.(png|svg)$/.test(file)) return c.notFound();
  const f = Bun.file(`public/logos/${file}`);
  if (!(await f.exists())) return c.notFound();
  return new Response(f, {
    headers: {
      "Content-Type": file.endsWith(".svg") ? "image/svg+xml" : "image/png",
      "Cache-Control": "public, max-age=604800",
    },
  });
});

app.get("/assets/:file", async (c) => {
  const file = c.req.param("file");
  // Bundle names are hash-stamped, so immutable caching is safe.
  if (!/^(privy-island-|orb-island-|device-island-|privy-gate-|chunk-)[a-z0-9]+\.js$/.test(file)) return c.notFound();
  const f = Bun.file(`public/${file}`);
  // exists() guard: see /logos — streaming a missing Bun.file kills the process.
  if (!(await f.exists())) return c.notFound();
  return new Response(f, {
    headers: {
      "Content-Type": "text/javascript; charset=utf-8",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
});

// Same discipline as the admin login: light per-IP throttle on the auth surface.
const privyHits = new Map<string, number[]>();
function privyThrottled(ip: string): boolean {
  const now = Date.now();
  const hits = (privyHits.get(ip) || []).filter((t) => now - t < 15 * 60 * 1000);
  hits.push(now);
  privyHits.set(ip, hits);
  return hits.length > 40;
}

app.post("/auth/privy", async (c) => {
  if (!privyMode()) return c.json({ error: "privy_not_configured" }, 503);
  if (privyThrottled(clientIp(c.req.raw))) return c.json({ error: "rate_limited" }, 429);

  let body: any;
  try { body = await c.req.json(); } catch { return c.json({ error: "bad_json" }, 400); }
  const { access_token, identity_token } = body || {};
  if (!access_token && !identity_token) return c.json({ error: "missing_token" }, 400);

  try {
    // Identity token first (signed linked-accounts claim, no secret needed);
    // access token + REST fetch as the fallback path.
    const acc = identity_token
      ? await accountsFromIdentityToken(identity_token)
      : await accountsFromAccessToken(access_token);

    const res = await upsertFromPrivy(acc);
    // The session represents a verified PRIVY login. It exists before the X
    // link (uid empty) so the /onboard gate can admit people to link X at all.
    if (res.needTwitter) {
      c.header("Set-Cookie", sessionSetCookie(acc.did, null));
      c.header("Set-Cookie", sessionLegacyClearCookie(), { append: true });
      // Signed in without X: greet them with the handle they reserved, and
      // bind the reservation to this account (Cloudflare-style) — a signed-in
      // reservation is what "reserved" means publicly.
      const resv = c.req.header("Cookie")?.split(";").map((s) => s.trim()).find((s) => s.startsWith("vc_resv="))?.slice(8) || null;
      const rh = normHandle(resv || "");
      let mine: string | null = null;
      if (/^[a-z0-9_]{1,15}$/.test(rh)) {
        try { if (bindReservation(rh, acc.did) === "bound") mine = rh; } catch (err) { console.error("bind error:", err); }
      }
      // No cookie or lost race: fall back to any handle already booked by this account.
      if (!mine) { try { mine = bookedHandleFor(acc.did); } catch {} }
      return c.json({ status: "need_twitter", reserved: mine });
    }
    c.header("Set-Cookie", sessionSetCookie(acc.did, res.user.id));
    c.header("Set-Cookie", sessionLegacyClearCookie(), { append: true });
    // Bind the reserved handle to this account BEFORE clearing the cookie.
    // The need_twitter path binds via bindReservation; the direct X sign-in
    // path must do the same or the reservation is orphaned and the card
    // falls back to the X username at mint time.
    const resvOk = c.req.header("Cookie")?.split(";").map((s) => s.trim()).find((s) => s.startsWith("vc_resv="))?.slice(8) || null;
    const rhOk = normHandle(resvOk || "");
    if (/^[a-z0-9_]{1,15}$/.test(rhOk)) {
      try { bindReservation(rhOk, acc.did); } catch (err) { console.error("bind error:", err); }
    }
    c.header("Set-Cookie", "vc_resv=; Max-Age=0; Path=/; HttpOnly; Secure; SameSite=Lax", { append: true });

    // Campaign attribution — red-team hardened: the vc_ref COOKIE from the
    // visitor's own browser is the ONLY attribution source (a reservation's
    // ref field is analytics, never attribution — anyone can reserve any
    // handle with their own code), and it binds only at ROW CREATION, never
    // retroactively to an existing account.
    try {
      if (res.created) {
        const cookieRef = c.req.header("Cookie")?.split(";").map((s) => s.trim()).find((s) => s.startsWith("vc_ref="))?.slice(7) || null;
        const ref = normHandle(cookieRef || "");
        if (ref && ref !== normHandle(res.user.x_username)) updateUser(res.user.id, { referred_by: ref });
      }
    } catch (err) { console.error("attribution error:", err); }

    const card = getCard(res.user.id);
    const cfg = campaignConfig();
    let booked: string | null = null;
    if (!card) { try { booked = bookedHandleFor(acc.did); } catch {} }
    return c.json({
      status: "ok",
      uid: res.user.id,
      booked,
      x_username: res.user.x_username,
      github: res.user.github_username || null,
      linkedin: !!acc.linkedin,
      wallet: res.user.wallet_address || null,
      reruns_left: Math.max(0, 5 - (res.user.score_reruns || 0)),
      key_reveal: null,
      score: res.user.score || 0,
      // Live data for the account page's tool previews — real score shape,
      // real balances, never placeholder numbers.
      tier: res.user.score_tier || null,
      breakdown: (() => { try { return res.user.score_breakdown ? JSON.parse(res.user.score_breakdown) : null; } catch { return null; } })(),
      balance_usd: res.user.usd_balance || 0,
      lanes: card ? listAgentWallets(res.user.id).filter((w: any) => w.status === "active").map((w: any) => ({ purpose: w.purpose, balance_usd: w.usd_balance || 0 })) : [],
      card: card ? { handle: card.handle } : null,
      campaign: card ? {
        ref_link: `https://card.vantis.sh/r/${normHandle(String(card.handle).replace("@", ""))}`,
        ref_earned: referralEarnedUsd(res.user.id),
        ref_cap: cfg.refCapUsd,
        ref_bonus: cfg.refBonusUsd,
        tasks: taskState(res.user.id),
        task_rewards: { follow: cfg.taskFollowUsd, share: cfg.taskShareUsd },
        x_handle: cfg.xHandle,
        active: campaignRemainingUsd() > 0,
      } : null,
    });
  } catch (err: any) {
    const msg = String(err?.message || err);
    if (msg === "privy_secret_missing") {
      return c.json({ error: "privy_secret_missing", hint: "identity token disabled and no app secret configured" }, 503);
    }
    console.error("Privy auth error:", msg);
    return c.json({ error: "invalid_token" }, 401);
  }
});

app.post("/auth/signout", (c) => {
  c.header("Set-Cookie", sessionClearCookie());
  c.header("Set-Cookie", sessionLegacyClearCookie(), { append: true });
  // The nav's sign-out is a plain <form> — browsers must land on a page,
  // not raw JSON. The island's fetch() keeps getting JSON.
  const ct = c.req.header("Content-Type") || "";
  if (ct.includes("application/x-www-form-urlencoded") || ct.includes("multipart/form-data")) {
    return c.redirect("/");
  }
  return c.json({ ok: true });
});

// ─── Agent wallets: payment identities carved from the card balance ───

function walletSession(c: any): { uid: string } | null {
  const sess = readSession(c.req.header("Cookie"));
  return sess?.uid ? { uid: sess.uid } : null;
}

// ─── Header bell: the credit ledger, readable ───
// Transfers are double-entry (user row + wallet row); the wallet-side rows
// are filtered so each move shows once. Lane spends (consume w/ wallet_id)
// still appear.
app.get("/api/credits/history", (c) => {
  const sess = walletSession(c);
  if (!sess) return c.json({ error: "not_signed_in" }, 401);
  const user = getUser(sess.uid);
  if (!user) return c.json({ error: "not_signed_in" }, 401);
  const seen = user.notif_seen_at || "1970-01-01 00:00:00";
  const rows = getDb().query(
    `SELECT created_at, type, amount_usd, description, wallet_id FROM credit_transactions
     WHERE user_id = ? AND (wallet_id IS NULL OR type != 'transfer')
     ORDER BY created_at DESC, rowid DESC LIMIT 25`
  ).all(sess.uid) as any[];
  return c.json({
    balance_usd: user.usd_balance || 0,
    unread_count: rows.filter((r) => r.created_at > seen).length,
    entries: rows.map((r) => ({
      when: r.created_at,
      type: r.type,
      amount_usd: r.amount_usd,
      description: r.description || r.type,
      unread: r.created_at > seen,
    })),
  });
});

app.post("/api/credits/seen", (c) => {
  const sess = walletSession(c);
  if (!sess) return c.json({ error: "not_signed_in" }, 401);
  getDb().run("UPDATE users SET notif_seen_at = datetime('now') WHERE id = ?", [sess.uid]);
  return c.json({ ok: true });
});

// The playbook demo lanes live behind the wallet device (see playground.ts).
registerPlayground(app);

app.get("/api/wallets", (c) => {
  const sess = walletSession(c);
  if (!sess) return c.json({ error: "not_signed_in" }, 401);
  const user = getUser(sess.uid);
  if (!user) return c.json({ error: "not_found" }, 404);
  const rows = getCard(sess.uid) ? ensurePurposeWallets(sess.uid, false) : [];
  const wallets = rows.map((w: any) => ({
    id: w.id, name: w.name, purpose: w.purpose,
    balance_usd: w.usd_balance || 0,
    consumed_usd: w.usd_consumed || 0,
    status: w.purpose === "devtools" ? "routes_soon" : (w.usd_balance || 0) > 0 ? "ready" : "needs_funds",
  }));
  const keys = user.scored_at
    ? listApiKeys(sess.uid).map((k: any) => ({
        id: k.id,
        name: k.name,
        prefix: String(k.key).slice(0, 12),
        scope: k.wallet_id ? (rows.find((w: any) => w.id === k.wallet_id)?.purpose || "lane") : "main",
        created_at: k.created_at,
        last_used_at: k.last_used_at,
      }))
    : [];
  return c.json({
    main_balance_usd: user.usd_balance || 0,
    keys_enabled: keysEnabled(),
    scored: !!user.scored_at,
    keys,
    wallets,
  });
});

// Self-service named keys. A key exists only because its owner created it;
// plaintext leaves the server exactly once, in the minting/rotating response.
function keySession(c: any): { uid: string; user: any } | { error: any } {
  const sess = walletSession(c);
  if (!sess) return { error: [{ error: "not_signed_in" }, 401] };
  if (!keysEnabled()) return { error: [{ error: "keys_disabled" }, 403] };
  const user = getUser(sess.uid);
  if (!user?.scored_at) return { error: [{ error: "not_scored" }, 403] };
  return { uid: sess.uid, user };
}

app.post("/api/keys/create", async (c) => {
  const ks = keySession(c) as any;
  if (ks.error) return c.json(...ks.error as [any, any]);
  let body: any; try { body = await c.req.json(); } catch { return c.json({ error: "bad_json" }, 400); }
  const name = String(body?.name || "").trim().slice(0, 40);
  if (!name) return c.json({ error: "name_required" }, 400);
  if (countActiveKeys(ks.uid) >= MAX_ACTIVE_KEYS) return c.json({ error: "too_many_keys", max: MAX_ACTIVE_KEYS }, 400);
  // Every key points at a lane. Main funds lanes; it does not spend, so a key
  // scoped to it would be a credential over the pool itself — the scope that
  // let inference bypass the meters until Aug 13 2026.
  const scope = String(body?.scope || "");
  if (!scope || scope === "main") {
    return c.json({ error: "scope_required", message: "Choose the lane this key spends: Inference or Developer tools. The main balance funds lanes rather than spending itself." }, 400);
  }
  const w = getAgentWallet(scope);
  if (!w || w.user_id !== ks.uid || w.status !== "active") return c.json({ error: "wallet_not_found" }, 404);
  const walletId: string = w.id;
  const minted = createApiKeyRow(ks.uid, walletId, name);
  getDb().run("INSERT INTO admin_events (action, target_user_id, detail, ip) VALUES ('self_create_key', ?, ?, ?)",
    [ks.uid, `key "${name}" created (${w.purpose || "lane"})`, clientIp(c.req.raw)]);
  return c.json({ ok: true, id: minted.id, name, key_reveal: minted.key, key_prefix: minted.key.slice(0, 12) });
});

app.post("/api/keys/rotate", async (c) => {
  const ks = keySession(c) as any;
  if (ks.error) return c.json(...ks.error as [any, any]);
  let body: any; try { body = await c.req.json(); } catch { return c.json({ error: "bad_json" }, 400); }
  const row = getApiKeyById(String(body?.id || ""));
  if (!row || row.user_id !== ks.uid) return c.json({ error: "key_not_found" }, 404);
  const key = rotateApiKeyRow(row.id);
  getDb().run("INSERT INTO admin_events (action, target_user_id, detail, ip) VALUES ('self_rotate_key', ?, ?, ?)",
    [ks.uid, `key "${row.name}" rotated by owner`, clientIp(c.req.raw)]);
  return c.json({ ok: true, id: row.id, name: row.name, key_reveal: key, key_prefix: key.slice(0, 12) });
});

app.post("/api/keys/revoke", async (c) => {
  const ks = keySession(c) as any;
  if (ks.error) return c.json(...ks.error as [any, any]);
  let body: any; try { body = await c.req.json(); } catch { return c.json({ error: "bad_json" }, 400); }
  const row = getApiKeyById(String(body?.id || ""));
  if (!row || row.user_id !== ks.uid) return c.json({ error: "key_not_found" }, 404);
  revokeApiKeyRow(row.id);
  getDb().run("INSERT INTO admin_events (action, target_user_id, detail, ip) VALUES ('self_revoke_key', ?, ?, ?)",
    [ks.uid, `key "${row.name}" revoked by owner`, clientIp(c.req.raw)]);
  return c.json({ ok: true, id: row.id });
});

app.post("/api/wallets", (c) => c.json({ error: "fixed_wallets", message: "The card divides into Inference and Developer tools — wallets are not user-created." }, 410));

app.post("/api/wallets/:id/fund", async (c) => {
  const sess = walletSession(c);
  if (!sess) return c.json({ error: "not_signed_in" }, 401);
  let body: any; try { body = await c.req.json(); } catch { return c.json({ error: "bad_json" }, 400); }
  const usd = Number(body?.usd || 0);
  const r = fundAgentWallet(sess.uid, c.req.param("id"), usd);
  return c.json(r, r.ok ? 200 : 400);
});

app.post("/api/wallets/:id/sweep", (c) => {
  const sess = walletSession(c);
  if (!sess) return c.json({ error: "not_signed_in" }, 401);
  const r = sweepAgentWallet(sess.uid, c.req.param("id"));
  return c.json(r, r.ok ? 200 : 400);
});

app.post("/api/wallets/:id/close", (c) => {
  const sess = walletSession(c);
  if (!sess) return c.json({ error: "not_signed_in" }, 401);
  const r = closeAgentWallet(sess.uid, c.req.param("id"));
  // a closed lane must not keep a cartridge seated — eject rides the close
  if (r.ok) ejectCartridge(c.req.param("id"));
  return c.json(r, r.ok ? 200 : 400);
});

// ── the deck ─────────────────────────────────────────────────────────────
// A cartridge changes how a lane meters; it never moves money. Plug and eject
// are therefore ordinary session-gated actions, not spend operations — but
// they are still holder-checked on every call, because a cartridge that keeps
// paying after it changes hands is a leak with a nice name.

// Staging accounts hold PREVIEW cartridges while the ERC-721 is undeployed:
// there is no chain to read ownership from, and a deck you cannot put a card
// into cannot be tested. Dropped the moment holdings come from chain.
// Who may hold preview cartridges. NOT simply "staging": that flag is on 7
// accounts, and a preview cartridge draws a real allowance against real
// upstream spend, so handing all ten to every staging account would open the
// whole set's ceiling seven times over. Explicit allowlist, one env line to
// widen it.
const DECK_PREVIEW_HANDLES = new Set(
  (process.env.VANTIS_CARD_DECK_PREVIEW || "lucaxyzz")
    .split(",").map((h) => h.trim().replace(/^@/, "").toLowerCase()).filter(Boolean)
);

// WHICH cards we hold. Luca, Aug 13: "only N° 01 FIRST BURN — keep the others,
// don't put on us." The other nine stay in the set and stay unheld: they are
// stock, not our inventory, and a deck that shows us holding all ten reads as
// the house having already taken the whole series. It also keeps our own
// exposure to a single card's allowance instead of the set's.
const DECK_PREVIEW_SLUGS = (process.env.VANTIS_CARD_DECK_PREVIEW_SLUGS || "first-burn")
  .split(",").map((s) => s.trim()).filter(Boolean);

function ensurePreviewHoldings(user: any): void {
  if (GENESIS_SERIES.contract) return;      // chain is the source of truth once it exists
  if (user.staging !== 1) return;
  if (!DECK_PREVIEW_HANDLES.has(String(user.x_username || "").toLowerCase())) return;
  for (const slug of DECK_PREVIEW_SLUGS) {
    if (!ALL_CARDS.some((c) => c.slug === slug)) continue; // both sets seed now
    if (!holdsCard(user.id, slug)) grantPreviewHolding(user.id, slug);
  }
}

app.get("/api/deck", (c) => {
  const sess = walletSession(c);
  if (!sess) return c.json({ error: "not_signed_in" }, 401);
  const user = getUser(sess.uid);
  if (!user) return c.json({ error: "not_found" }, 404);
  const card = getCard(sess.uid);
  ensurePreviewHoldings(user);
  const lanes = card ? (ensurePurposeWallets(sess.uid, false) as any[]) : [];
  const deck = deckFor(user, lanes);
  deck.account_card.handle = card?.handle || null;
  deck.account_card.credits_usd = availUsdFor(user);
  return c.json(deck);
});

app.post("/api/deck/plug", async (c) => {
  const sess = walletSession(c);
  if (!sess) return c.json({ error: "not_signed_in" }, 401);
  const user = getUser(sess.uid);
  if (!user) return c.json({ error: "not_found" }, 404);
  let body: any;
  try { body = await c.req.json(); } catch { return c.json({ error: "bad_json", message: "Send JSON." }, 400); }
  const slug = String(body?.slug || "");
  const walletId = String(body?.wallet_id || "");
  const card = ALL_CARDS.find((g) => g.slug === slug);
  if (!card) return c.json({ error: "unknown_card", message: "No such card in either set." }, 404);

  if (!holdsCard(user.id, slug)) {
    return c.json({ error: "not_held", message: "This card is not on your account." }, 403);
  }
  const lane = getAgentWallet(walletId);
  if (!lane || lane.user_id !== user.id || lane.status !== "active") {
    return c.json({ error: "unknown_lane", message: "That lane is not yours, or is closed." }, 404);
  }
  if (lane.purpose === "devtools") {
    return c.json({ error: "wrong_lane", message: "Cartridge rights meter inference. Plug it into an Inference lane." }, 400);
  }
  plugCartridge(user.id, walletId, slug);
  getDb().run("INSERT INTO admin_events (action, target_user_id, detail, ip) VALUES ('deck_plug', ?, ?, ?)",
    [user.id, `${slug} → ${lane.name}`, clientIp(c.req.raw)]);
  return c.json({ ok: true, slug, wallet_id: walletId, rights: rightsFor(card.grade), allowance: allowanceState(slug, user.id) });
});

app.post("/api/deck/eject", async (c) => {
  const sess = walletSession(c);
  if (!sess) return c.json({ error: "not_signed_in" }, 401);
  let body: any;
  try { body = await c.req.json(); } catch { return c.json({ error: "bad_json", message: "Send JSON." }, 400); }
  const slug = String(body?.slug || "");
  // scope to the session holder: previews make the same slug pluggable by
  // several accounts at once, and slug-only resolution grabbed an arbitrary
  // holder's row (adversarial-review finding, Aug 13)
  const row = getDb().query("SELECT wallet_id, user_id FROM lane_cartridges WHERE slug = ? AND user_id = ?").get(slug, sess.uid) as any;
  if (!row) return c.json({ ok: true, slug, already: true });
  ejectCartridge(row.wallet_id);
  getDb().run("INSERT INTO admin_events (action, target_user_id, detail, ip) VALUES ('deck_eject', ?, ?, ?)",
    [sess.uid, slug, clientIp(c.req.raw)]);
  return c.json({ ok: true, slug });
});

// The wallets dashboard — session-gated like /account.
app.get("/wallets", (c) => {
  const island = privyMode() ? islandFile() : null;
  if (!island) return c.redirect("/onboard");
  const uid = readSession(c.req.header("Cookie"))?.uid;
  if (!uid) return c.redirect("/login?next=%2Fwallets");
  // a session whose user row is gone must clear, not bounce forever
  const wu = getUser(uid);
  if (!wu) {
    c.header("Set-Cookie", sessionClearCookie());
  c.header("Set-Cookie", sessionLegacyClearCookie(), { append: true });
    return c.redirect("/login?next=%2Fwallets");
  }
  const wcard = getCard(uid);
  // GA Aug 13 (Luca: "make it live for everyone"): the embedded inference
  // console, rail, deck and top-up render for every CARDED account — staging
  // was the launch cohort while the deck was proven on the rail. Cardless
  // visits keep the base page until the card is minted. Rights stay safe by
  // construction: preview-holding seeding is still allowlisted in
  // ensurePreviewHoldings, an account that holds nothing gets the empty deck
  // pointing at the marketplace, and plugging 403s unless the cartridge is
  // actually held.
  const consoleSection = wcard ? walletsConsoleSection(wu) : "";
  const consoleRail = wcard ? walletsConsoleRail() : "";
  if (wcard) ensurePreviewHoldings(wu);
  let deck: { section?: string; topup?: string; css?: string; js?: string } = {};
  if (wcard) {
    const lanes = ensurePurposeWallets(uid, false) as any[];
    const laneTotal = lanes.reduce((s: number, l: any) => s + (l.usd_balance || 0), 0);
    deck = {
      section: deckSection(wu, wcard, lanes, wu.usd_balance || 0),
      // Launch cohort (TOPUPS_MODE) gets the live top-up rail; everyone else
      // keeps the placeholder card until the gate opens.
      topup: topupsEnabledFor(wu) ? topupSectionLive(wu, topupConfigFor(wu), wu.usd_balance || 0, laneTotal) : topupSection(wu, wu.usd_balance || 0, laneTotal),
      // CARD_CSS is NOT in walletsHtml's own sheet — /wallets never rendered a
      // card object before the deck did, so the account card came out as bare
      // stacked text. It ships with the deck bundle so cardless visits keep
      // the lighter base page.
      css: CARD_CSS + TC_CSS + GENESIS_ART_CSS + DECK_CSS + TOPUP_CSS + (topupsEnabledFor(wu) ? TOPUP_LIVE_CSS : ""),
      js: DECK_JS + (topupsEnabledFor(wu) ? TOPUP_LIVE_JS : ""),
    };
  }
  // First-call activation: shown until the user's FIRST ok call ever.
  const okCalls = (getDb().query("SELECT COUNT(*) AS n FROM api_requests WHERE user_id = ? AND outcome = 'ok'").get(uid) as any)?.n || 0;
  let firstRun: { laneId: string; laneUsd: number; mainUsd: number } | null = null;
  if (wcard && okCalls === 0) {
    const lanes = ensurePurposeWallets(uid, false) as any[];
    const inf = lanes.find((w) => w.purpose === "inference");
    if (inf) firstRun = { laneId: inf.id, laneUsd: inf.usd_balance || 0, mainUsd: wu.usd_balance || 0 };
  }
  return c.html(walletsHtml(manifestFile("device-island"), consoleSection, consoleRail, { cardHandle: wcard?.handle || null }, wcard ? navMenuPanel(wu, wcard, availUsdFor(wu)) : "", firstRun, deck));
});

// Earn-task claims: card-holders only, once per task, dies with the budget.
app.post("/api/task/claim", async (c) => {
  const sess = readSession(c.req.header("Cookie"));
  if (!sess?.uid) return c.json({ error: "not_signed_in" }, 401);
  let body: any;
  try { body = await c.req.json(); } catch { return c.json({ error: "bad_json" }, 400); }
  const task = String(body?.task || "");
  if (!(TASKS as readonly string[]).includes(task)) return c.json({ error: "unknown_task" }, 400);
  const user = getUser(sess.uid);
  if (!user || !getCard(sess.uid)) return c.json({ error: "card_required" }, 403);
  const r = claimTask(sess.uid, task as any);
  return c.json(r, r.ok ? 200 : 409);
});

// Open-redirect guard: same-site paths only.
function safeNext(raw: string | undefined): string {
  if (!raw || !raw.startsWith("/") || raw.startsWith("//") || raw.includes("\\")) return "/onboard";
  return raw;
}

// ─── Reserve campaign: the viral front door ───

const rsvHits = new Map<string, number[]>();
function rsvThrottled(key: string, max: number, windowMs = 15 * 60 * 1000): boolean {
  const now = Date.now();
  const hits = (rsvHits.get(key) || []).filter((t) => now - t < windowMs);
  hits.push(now);
  rsvHits.set(key, hits);
  return hits.length > max;
}

app.get("/reserve", (c) => {
  const pre = c.req.query("handle") || null;
  const sess = privyMode() ? readSession(c.req.header("Cookie")) : null;
  const card = sess?.uid ? getCard(sess.uid) : null;
  return c.html(reserveHtml(pre && /^[A-Za-z0-9_]{1,15}$/.test(pre.replace(/^@/, "")) ? pre.replace(/^@/, "") : null, {
    signedIn: !!sess,
    signupPaused: signupPaused(),
    viewer: sess ? { cardHandle: card?.handle || null } : null,
    menuCard: card ? (() => { const u = getUser(sess!.uid!); return navMenuPanel(u, card, availUsdFor(u)); })() : "",
  }));
});

app.get("/api/reserve/check", (c) => {
  if (rsvThrottled(clientIp(c.req.raw), 120)) return c.json({ error: "rate_limited" }, 429);
  return c.json(availability(c.req.query("handle") || ""));
});

app.post("/api/reserve", async (c) => {
  if (rsvThrottled(clientIp(c.req.raw), 120)) return c.json({ error: "rate_limited" }, 429);
  let body: any;
  try { body = await c.req.json(); } catch { return c.json({ error: "bad_json" }, 400); }
  const ref = c.req.header("Cookie")?.split(";").map((s) => s.trim()).find((s) => s.startsWith("vc_ref="))?.slice(7) || null;
  const r = makeReservation(String(body?.handle || ""), clientIp(c.req.raw), c.req.header("User-Agent") || "", ref);
  // The reserved handle rides through the sign-in funnel — after Privy, the
  // onboarding greets the user with THEIR handle (the cloudflare.pay beat).
  if (r.ok) {
    const h = normHandle(String(body?.handle || ""));
    c.header("Set-Cookie", `vc_resv=${h}; Max-Age=${30 * 24 * 3600}; Path=/; HttpOnly; Secure; SameSite=Lax`);
  }
  return c.json(r, r.ok ? 200 : 400);
});

// Referral link: set the attribution cookie, land on the reserve page.
app.get("/r/:code", (c) => {
  const code = normHandle(c.req.param("code"));
  if (/^[a-z0-9_]{1,15}$/.test(code)) {
    c.header("Set-Cookie", `vc_ref=${code}; Max-Age=${30 * 24 * 3600}; Path=/; HttpOnly; Secure; SameSite=Lax`);
  }
  return c.redirect("/reserve");
});

// The first gate. Everything card-shaped sits behind it when Privy is armed.
app.get("/login", (c) => {
  const island = privyMode() ? islandFile() : null;
  if (!island) return c.redirect("/onboard");
  const sess = readSession(c.req.header("Cookie"));
  const next = safeNext(c.req.query("next"));
  if (sess) return c.redirect(next);
  return c.html(loginHtml({ appId: privyAppId(), islandFile: island }, next, { signupPaused: signupPaused() }));
});

// ─── Onboarding pages ───
app.get("/onboard", (c) => {
  const island = privyMode() ? islandFile() : null;
  const sess = readSession(c.req.header("Cookie"));
  if (island && !sess) {
    return c.redirect("/login?next=%2Fonboard");
  }
  const card = sess?.uid ? getCard(sess.uid) : null;
  return c.html(onboardHtml(
    providersConfigured(),
    island ? { appId: privyAppId(), islandFile: island } : undefined,
    {
      viewer: sess ? { cardHandle: card?.handle || null } : null,
      reserved: sess?.did ? bookedHandleFor(sess.did) : null,
      menuCard: card ? (() => { const u = getUser(sess!.uid!); return navMenuPanel(u, card, availUsdFor(u)); })() : "",
    }
  ));
});

// The agent's permanent record: verdict, dimensions, sources, log replay.
app.get("/report", (c) => {
  const island = privyMode() ? islandFile() : null;
  if (!island) return c.redirect("/onboard");
  const sess = readSession(c.req.header("Cookie"));
  if (!sess) return c.redirect("/login?next=%2Freport");
  if (!sess.uid) return c.redirect("/onboard");
  const user = getUser(sess.uid);
  if (!user?.scored_at) return c.redirect("/onboard");
  return c.html(reportHtml(user, getCard(user.id), getLatestEnrichment(user.id), availUsdFor(user)));
});

// The persistent home for connections — same panel, account framing.
// Onboarding ends; the account does not.
app.get("/account", (c) => {
  const island = privyMode() ? islandFile() : null;
  if (!island) return c.redirect("/onboard");
  const sess = readSession(c.req.header("Cookie"));
  if (!sess) return c.redirect("/login?next=%2Faccount");
  const card = sess.uid ? getCard(sess.uid) : null;
  return c.html(onboardHtml(providersConfigured(), { appId: privyAppId(), islandFile: island }, {
    account: true,
    viewer: { cardHandle: card?.handle || null },
    menuCard: card ? (() => { const u = getUser(sess.uid!); return navMenuPanel(u, card, availUsdFor(u)); })() : "",
  }));
});
// The embedded wallet as a page: balances on Robinhood Chain, withdraw via
// the island in "wallet" mode. Balances proxy through /api/portfolio — the
// CSP keeps browsers off external RPCs for reads.
app.get("/portfolio", async (c) => {
  const sess = readSession(c.req.header("Cookie"));
  if (!sess) return c.redirect("/login?next=%2Fportfolio");
  if (!sess.uid) return c.redirect("/onboard");
  let u = getUser(sess.uid);
  if (!u) return c.redirect("/onboard");
  // Accounts that predate the Solana lane have no Solana key, and the client
  // only mints one at LOGIN — so make sure it exists before rendering rather
  // than telling a signed-in user to sign out. Runs at most once per account
  // (it stops the moment solana_address is set) and never breaks the page:
  // a failure just renders the "setting up" state the island retries from.
  if (!u.solana_address && u.privy_user_id) {
    const addr = await ensureSolanaWallet(String(u.privy_user_id));
    if (addr) u = updateUser(sess.uid, { solana_address: addr }) || u;
  }
  const card = getCard(sess.uid);
  const island = privyMode() ? islandFile() : null;
  return c.html(portfolioHtml(u, card, {
    viewer: { cardHandle: card?.handle || null },
    menuCard: card ? navMenuPanel(u, card, availUsdFor(u)) : "",
    privy: island ? { appId: privyAppId(), islandFile: island } : null,
  }));
});

app.get("/api/portfolio", async (c) => {
  const sess = readSession(c.req.header("Cookie"));
  if (!sess?.uid) return c.json({ error: "not_signed_in" }, 401);
  const u = getUser(sess.uid);
  const addr = String(u?.wallet_address || "");
  const sol = String(u?.solana_address || "");
  // The EVM wallet is still what makes an account "walleted" — Solana is
  // additive, and a user who predates it must not lose the page.
  if (!/^0x[0-9a-fA-F]{40}$/.test(addr)) return c.json({ error: "no_wallet" }, 404);
  const chain = String(c.req.query("chain") || "robinhood");
  // hasOwn, not truthiness — ?chain=constructor walks the prototype chain
  // on a plain object literal and would 500 downstream instead of 400.
  if (!Object.hasOwn(CHAINS, chain)) return c.json({ error: "unknown_chain" }, 400);
  return c.json(await portfolioFor({ evm: addr, solana: sol || null }, chain));
});

app.get("/api/solana/blockhash", async (c) => {
  const sess = readSession(c.req.header("Cookie"));
  if (!sess?.uid) return c.json({ error: "not_signed_in" }, 401);
  try {
    return c.json(await solanaBlockhash());
  } catch {
    return c.json({ error: "blockhash_unavailable" }, 502);
  }
});

// Privy mints the Solana key in the BROWSER, and a signed-in user on
// /portfolio never re-runs /auth/privy — so without this the address would
// only reach the DB on some future sign-in. The island posts its identity
// token here and the address is taken from the VERIFIED claim, never from a
// client-supplied string: an attacker who could name their own address would
// have the page show someone else's balances as the victim's own.
app.post("/api/wallet/solana", async (c) => {
  if (!privyMode()) return c.json({ error: "privy_not_configured" }, 503);
  const sess = readSession(c.req.header("Cookie"));
  if (!sess?.uid) return c.json({ error: "not_signed_in" }, 401);
  if (privyThrottled(clientIp(c.req.raw))) return c.json({ error: "rate_limited" }, 429);

  let body: any;
  try { body = await c.req.json(); } catch { return c.json({ error: "bad_json" }, 400); }
  const { identity_token, access_token } = body || {};
  if (!identity_token && !access_token) return c.json({ error: "missing_token" }, 400);

  try {
    // Identity token first (no secret needed), but it is a SNAPSHOT — a token
    // minted before the wallet was created carries no Solana account. So when
    // it comes back empty, fall back to the access token, which makes the
    // server read the LIVE user from Privy's REST API.
    let acc = identity_token ? await accountsFromIdentityToken(identity_token) : null;
    if ((!acc || !acc.solana) && access_token) {
      try { acc = await accountsFromAccessToken(access_token); } catch { /* keep the identity-token read */ }
    }
    if (!acc) return c.json({ error: "invalid_token" }, 401);
    // The token must belong to the account holding this session.
    if (acc.did !== sess.did) return c.json({ error: "did_mismatch" }, 403);
    if (!acc.solana) return c.json({ ok: true, solana: null });
    const u = getUser(sess.uid);
    if (u?.solana_address === acc.solana) return c.json({ ok: true, solana: acc.solana });
    updateUser(sess.uid, { solana_address: acc.solana });
    return c.json({ ok: true, solana: acc.solana });
  } catch (err) {
    console.error("solana register error:", err);
    return c.json({ error: "invalid_token" }, 401);
  }
});

// The account of record, readable by the fleet: the hub (and later any
// product on *.vantis.sh) renders its account state from this one endpoint
// instead of keeping its own user store.
app.get("/api/me", (c) => {
  const sess = readSession(c.req.header("Cookie"));
  if (!sess) return c.json({ error: "not_signed_in" }, 401);
  if (!sess.uid) return c.json({ did: sess.did, uid: null, x_username: null, wallet: null, tier: null, scored: false, credits_usd: 0, card: null });
  const u = getUser(sess.uid);
  if (!u) return c.json({ error: "not_signed_in" }, 401);
  const card = getCard(sess.uid);
  return c.json({
    did: sess.did,
    uid: u.id,
    x_username: u.x_username || null,
    wallet: u.wallet_address || null,
    tier: u.score_tier || null,
    scored: !!u.scored_at,
    credits_usd: availUsdFor(u),
    card: card ? { handle: card.handle, tier: card.tier, grant_usd: card.grant_usd } : null,
  });
});

// The campaign's own page — tasks, referral link, earned meter, history.
// Same primitives the account island renders from; cards required because
// every payout lands on the card.
app.get("/rewards", (c) => {
  const sess = readSession(c.req.header("Cookie"));
  if (!sess) return c.redirect("/login?next=%2Frewards");
  if (!sess.uid) return c.redirect("/onboard");
  const u = getUser(sess.uid);
  const card = sess.uid ? getCard(sess.uid) : null;
  if (!u || !card) return c.redirect("/onboard");
  return c.html(rewardsHtml(u, card, {
    viewer: { cardHandle: card.handle || null },
    menuCard: navMenuPanel(u, card, availUsdFor(u)),
  }));
});

app.get("/onboard/score", (c) => {
  const uid = c.req.query("uid") ?? null;
  let sess: ReturnType<typeof readSession> = null;
  if (privyMode() && islandFile()) {
    sess = readSession(c.req.header("Cookie"));
    if (!sess) return c.redirect("/login?next=%2Fonboard");
    // uid is bound to the session — one visitor cannot open another's flow.
    if (uid && sess.uid !== uid) return c.redirect("/onboard");
  }
  const p = providersConfigured();
  const card = sess?.uid ? getCard(sess.uid) : null;
  return c.html(scorePageHtml(uid, c.req.query("step") ?? null, p, orbFile(), {
    viewer: sess ? { cardHandle: card?.handle || null } : null,
    reserved: sess?.did ? bookedHandleFor(sess.did) : null,
    menuCard: card ? (() => { const u = getUser(sess!.uid!); return navMenuPanel(u, card, availUsdFor(u)); })() : "",
  }));
});

// ─── Start ───
getDb(); // fail fast if schema is broken
const PORT = parseInt(process.env.VANTIS_CARD_PORT || "8240");
const boot = resolveUpstream();
console.log(`Vantis Cards on http://127.0.0.1:${PORT} — ${servingNote(boot)}${boot ? ` [${boot.provider}]` : ""}`);
serve({
  port: PORT,
  hostname: "127.0.0.1",
  fetch: app.fetch,
  // Bun's default idle timeout (~10s) kills SSE connections between
  // heartbeats — measured 12.0s to the byte on /burn/stream. Streams beat
  // every 8s regardless; this is the safety margin, not the mechanism.
  idleTimeout: 30,
});
