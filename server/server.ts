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
import { resolveUpstream, resolveFailover, servingNote, isAcceptedModel, applyUpstreamDefaults, estimateVendorCost, TARGET_MODEL, TARGET_LABEL } from "./upstream";
import { authorize, clientIp, keyPrefix, noteUpstreamCall, oaiError } from "./gateway";
import { settleStream } from "./stream-settle";
import { makeNonce, cspHeader, injectNonce, reportOnly } from "./csp";
import { logRequest, traceVendor } from "./db";
import { registerPlayground } from "./playground";
import { getVantisPrice, usdToVantis } from "./price";
import { landingHtml, onboardHtml, scorePageHtml, cardHtml, cardNotFoundHtml, providerPendingHtml, reportHtml, reserveHtml, ogViewHtml, ogReserveHtml, walletsHtml } from "./pages";
import { availability, reserve as makeReservation, claimReservation, bindReservation, bookedHandleFor, markReservationClaimed, normHandle, awardReferral, taskState, claimTask, referralEarnedUsd, campaignConfig, campaignRemainingUsd, trueUpGrant, grantAllowed, grantPoolRemainingUsd, grantPoolSpentUsd, grantPoolUsd, TASKS } from "./campaign";
import { admin } from "./admin";
import { privyMode, privyAppId, accountsFromIdentityToken, accountsFromAccessToken, upsertFromPrivy } from "./privy";
import { progressStart, progressGet, progressClearIfDone, progressLive, progressFinish, progressResult, emitterFor } from "./progress";
import { readSession, sessionSetCookie, sessionClearCookie } from "./session";
import { xApiEnabled, refreshXMetrics } from "./xapi";
import { loginHtml } from "./pages";

const MAX_TOKENS_CAP = parseInt(process.env.VANTIS_CARD_MAX_TOKENS || "8192");

const app = new Hono();

app.use("*", cors({
  origin: ["https://card.vantis.sh", "https://vantis.sh", "http://localhost:8240"],
  allowHeaders: ["Authorization", "Content-Type"],
  methods: ["GET", "POST", "OPTIONS"],
}));

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
app.route("/admin", admin);

// ─── Health ───
app.get("/health", (c) => c.json({ ok: true, service: "vantis-card" }));

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

app.get("/", (c, next) => {
  if (!campaignMode()) return landingHandler(c);
  const sess = privyMode() ? readSession(c.req.header("Cookie")) : null;
  return c.html(reserveHtml(null, { signedIn: !!sess, signupPaused: signupPaused() }));
});

app.get("/overview", (c) => landingHandler(c));

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
  if (privyMode()) {
    const sess = readSession(c.req.header("Cookie"));
    if (sess) {
      const card = sess.uid ? getCard(sess.uid) : null;
      viewer = { cardHandle: card?.handle || null };
    }
  }
  return c.html(landingHtml({
    viewer,
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
    note: "Virtual burn ledger — USD inference cost converted to $VANTIS at live market price. Off-chain; no tokens transferred or destroyed.",
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
    apiKey = keysEnabled() ? generateApiKey(uid) : null;
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
    emit("log", apiKey ? `Card ${card.handle} minted · key issued` : `Card ${card.handle} minted · API access opens at launch`);
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

// ─── API: models — the rail serves exactly one ───
app.get("/v1/models", (c) => {
  const up = resolveUpstream();
  return c.json({
    object: "list",
    data: [{ id: TARGET_MODEL, object: "model", owned_by: "vantis" }],
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

  // The rail serves one model. Aliases map onto it; anything else is refused
  // rather than quietly rerouted.
  if (!isAcceptedModel(body.model)) {
    meter({ user_id: user.id, status: 400, outcome: "unsupported_model", model: body.model, error: "unsupported_model" });
    return c.json(oaiError("unsupported_model", "invalid_request_error", `This rail serves ${TARGET_LABEL} only.`, { requested: body.model, supported: [TARGET_MODEL] }), 400, gate.headers);
  }

  const upstream = resolveUpstream();
  if (!upstream) {
    meter({ user_id: user.id, status: 503, outcome: "upstream_error", error: "no_inference_route" });
    return c.json(oaiError("no_inference_route", "api_error", "No upstream is configured for this rail."), 503, gate.headers);
  }

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
  const inputTokens = Math.ceil(JSON.stringify(body.messages || "").length / 4);
  const nChoices = Math.max(1, Math.min(8, Number(body.n) || 1));
  const reserve = worstCaseCost(inputTokens, body.max_tokens * nChoices);
  const scope = spenderScope(gate.wallet?.id, user.id);
  const spendBalance = (gate.wallet ? (gate.wallet.usd_balance || 0) : (user.usd_balance || 0)) - heldFor(scope);
  if (spendBalance < reserve) {
    meter({ user_id: user.id, status: 402, outcome: "insufficient_credits", model: TARGET_MODEL, error: "insufficient_credits" });
    return c.json(oaiError("insufficient_credits", "insufficient_quota", `This call could cost up to $${reserve.toFixed(6)} at max_tokens=${body.max_tokens}${nChoices > 1 ? ` × n=${nChoices}` : ""}, which is more than your available balance (in-flight requests hold their reserve). Lower max_tokens or top up.`, { balance_usd: Math.max(0, spendBalance), required_usd: reserve }), 402, gate.headers);
  }
  holdReserve(scope, reserve);
  let holdReleased = false;
  const releaseHold = () => { if (!holdReleased) { holdReleased = true; releaseReserve(scope, reserve); } };

  // Dial the primary; if it dies (network error or 5xx) fail over ONCE to the
  // Ark route — the Aug 4 Jatevo origin outage rule. 4xx (bad request, 429)
  // never fails over: those are answers, not outages.
  const dial = (route: typeof upstream) =>
    fetch(`${route.baseUrl}/chat/completions`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${route.apiKey}`, ...(route.headers || {}) },
      body: JSON.stringify({ ...body, model: route.model }),
      // Streams get headroom for long generations; the pump's own idle guard
      // catches silent stalls well before this wall-clock ceiling.
      signal: AbortSignal.timeout(isStream ? 300_000 : 180_000),
    });

  let served = upstream;
  let inferenceRes: Response;
  noteUpstreamCall(); // consume a slot only now that we are really dialling out
  try {
    inferenceRes = await dial(upstream);
    if (inferenceRes.status >= 500) {
      const fo = resolveFailover(upstream);
      if (fo) {
        traceVendor({ vendor: upstream.provider, endpoint: "chat.completions", status: inferenceRes.status, latency_ms: Math.round(performance.now() - t0), user_id: user.id, error: "failed_over" });
        console.error(`Upstream ${upstream.provider} answered ${inferenceRes.status} — failing over to ${fo.provider}`);
        served = fo;
        inferenceRes = await dial(fo);
      }
    }
  } catch (err: any) {
    const fo = resolveFailover(upstream);
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
        return c.json(oaiError("inference_unreachable", "api_error", `The upstream could not be reached: ${err2.message}`), 502, gate.headers);
      }
    } else {
      releaseHold();
      traceVendor({ vendor: upstream.provider, endpoint: "chat.completions", latency_ms: Math.round(performance.now() - t0), user_id: user.id, error: err.message });
      meter({ user_id: user.id, status: 502, outcome: "upstream_error", model: TARGET_MODEL, error: err.message });
      return c.json(oaiError("inference_unreachable", "api_error", `The upstream could not be reached: ${err.message}`), 502, gate.headers);
    }
  }

  if (!inferenceRes.ok) {
    releaseHold();
    traceVendor({ vendor: served.provider, endpoint: "chat.completions", status: inferenceRes.status, latency_ms: Math.round(performance.now() - t0), user_id: user.id, error: `http_${inferenceRes.status}` });
    const detail = await inferenceRes.text().catch(() => "");
    // The provider's own quota refusal is a rate limit, not an outage. Record
    // it as one so the console does not read it as the upstream falling over.
    const saturated = inferenceRes.status === 429;
    meter({
      user_id: user.id, status: inferenceRes.status,
      outcome: saturated ? "upstream_saturated" : "upstream_error",
      model: TARGET_MODEL, error: detail.slice(0, 200),
    });
    const retryAfter = inferenceRes.headers.get("Retry-After") || "2";
    return c.json(
      saturated
        ? oaiError("upstream_saturated", "rate_limit_error", "The rail is at its upstream request ceiling. Retry shortly.")
        : oaiError("inference_failed", "api_error", "The upstream refused the request.", { detail }),
      inferenceRes.status as any,
      saturated ? { ...gate.headers, "Retry-After": retryAfter } : gate.headers
    );
  }

  if (isStream) {
    const stream = settleStream({
      upstreamBody: inferenceRes.body!,
      clientWantsUsage,
      fallback: { model: served.model, inputTokens },
      settle: (model, tin, tout) => deductAndBurn(apiKey!, model, tin, tout),
      onSettled: releaseHold,
      report: (r) => {
        meter({
          user_id: user.id, status: 200, outcome: r.outcome, model: r.model,
          tokens_in: r.tokensIn, tokens_out: r.tokensOut,
          cost_usd: r.costUsd, vantis_burned: r.burned, error: r.error,
        });
        traceVendor({
          vendor: served.provider, endpoint: "chat.completions", status: 200,
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
    return c.json(oaiError("inference_failed", "api_error", "The upstream response could not be read."), 502, gate.headers);
  }

  // Settle from real usage; fall back to the estimate if usage is missing.
  // The served model is recorded as-is — never relabelled as the target.
  // The hold releases only AFTER the debit lands — releasing earlier reopens
  // the race the hold exists to close.
  const tokensIn = result.usage?.prompt_tokens || inputTokens;
  const tokensOut = result.usage?.completion_tokens || 0;
  const deduction = await deductAndBurn(apiKey!, result.model || served.model, tokensIn, tokensOut);
  releaseHold();
  traceVendor({
    vendor: served.provider, endpoint: "chat.completions", status: 200,
    latency_ms: Math.round(performance.now() - t0), user_id: user.id,
    tokens_in: tokensIn, tokens_out: tokensOut,
    cost_est_usd: estimateVendorCost(served.provider, tokensIn, tokensOut),
  });

  meter({
    user_id: user.id,
    status: 200,
    outcome: deduction.ok ? "ok" : "insufficient_credits",
    model: result.model || served.model,
    tokens_in: tokensIn,
    tokens_out: tokensOut,
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
          model_served: result.model || served.model,
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
async function renderOgPng(handle: string, version: string, viewPath?: string): Promise<string> {
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
      await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
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
    return new Response(Bun.file(path), { headers: { "Content-Type": "image/png", "Cache-Control": "public, max-age=86400" } });
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
    return new Response(Bun.file(path), {
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
app.get("/logos/:file", (c) => {
  const file = c.req.param("file");
  if (!/^[a-z0-9-]+\.(png|svg)$/.test(file)) return c.notFound();
  const f = Bun.file(`public/logos/${file}`);
  return new Response(f, {
    headers: {
      "Content-Type": file.endsWith(".svg") ? "image/svg+xml" : "image/png",
      "Cache-Control": "public, max-age=604800",
    },
  });
});

app.get("/assets/:file", (c) => {
  const file = c.req.param("file");
  // Bundle names are hash-stamped, so immutable caching is safe.
  if (!/^(privy-island-|orb-island-|device-island-|privy-gate-|chunk-)[a-z0-9]+\.js$/.test(file)) return c.notFound();
  const f = Bun.file(`public/${file}`);
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
    // Flag flipped on later: mint the missing key once and reveal it once.
    let keyReveal: string | null = null;
    if (keysEnabled() && card) {
      const freshUser = getUser(res.user.id);
      if (freshUser && !freshUser.api_key && freshUser.scored_at) {
        try { keyReveal = generateApiKey(res.user.id); } catch (err) { console.error("lazy key mint:", err); }
      }
    }
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
      key_reveal: keyReveal,
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
  const rows = getCard(sess.uid) ? ensurePurposeWallets(sess.uid, keysEnabled()) : [];
  const wallets = rows.map((w: any) => ({
    id: w.id, name: w.name, purpose: w.purpose,
    key_prefix: w.api_key ? w.api_key.slice(0, 12) : null,
    balance_usd: w.usd_balance || 0,
    consumed_usd: w.usd_consumed || 0,
    status: w.purpose === "devtools" ? "routes_soon" : (w.usd_balance || 0) > 0 ? "ready" : "needs_funds",
  }));
  return c.json({
    main_balance_usd: user.usd_balance || 0,
    keys_enabled: keysEnabled(),
    wallets,
  });
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
  return c.json(r, r.ok ? 200 : 400);
});

// The wallets dashboard — session-gated like /account.
app.get("/wallets", (c) => {
  const island = privyMode() ? islandFile() : null;
  if (!island) return c.redirect("/onboard");
  if (!readSession(c.req.header("Cookie"))?.uid) return c.redirect("/login?next=%2Fwallets");
  return c.html(walletsHtml(manifestFile("device-island")));
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
  return c.html(reserveHtml(pre && /^[A-Za-z0-9_]{1,15}$/.test(pre.replace(/^@/, "")) ? pre.replace(/^@/, "") : null, { signupPaused: signupPaused() }));
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
  if (island && !readSession(c.req.header("Cookie"))) {
    return c.redirect("/login?next=%2Fonboard");
  }
  return c.html(onboardHtml(
    providersConfigured(),
    island ? { appId: privyAppId(), islandFile: island } : undefined
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
  return c.html(reportHtml(user, getCard(user.id), getLatestEnrichment(user.id)));
});

// The persistent home for connections — same panel, account framing.
// Onboarding ends; the account does not.
app.get("/account", (c) => {
  const island = privyMode() ? islandFile() : null;
  if (!island) return c.redirect("/onboard");
  if (!readSession(c.req.header("Cookie"))) return c.redirect("/login?next=%2Faccount");
  return c.html(onboardHtml(providersConfigured(), { appId: privyAppId(), islandFile: island }, { account: true }));
});
app.get("/onboard/score", (c) => {
  const uid = c.req.query("uid") ?? null;
  if (privyMode() && islandFile()) {
    const sess = readSession(c.req.header("Cookie"));
    if (!sess) return c.redirect("/login?next=%2Fonboard");
    // uid is bound to the session — one visitor cannot open another's flow.
    if (uid && sess.uid !== uid) return c.redirect("/onboard");
  }
  const p = providersConfigured();
  return c.html(scorePageHtml(uid, c.req.query("step") ?? null, p, orbFile()));
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
});
