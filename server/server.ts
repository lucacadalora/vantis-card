// Vantis Cards — Main Server
// Hono on Bun. OAuth onboarding → AI scoring → $VANTIS credit grant → card →
// OpenAI-compatible inference proxy that bills real inference cost and
// virtually burns $VANTIS at live market price. One model only.
//
// Run: bun run server/server.ts   (port: VANTIS_CARD_PORT, default 8240)

import { Hono } from "hono";
import { serve } from "bun";
import { cors } from "hono/cors";

import {
  createUser, getUser, getUserByX, updateUser,
  createOAuthState, getOAuthState, deleteOAuthState,
  grantCredits, createCard, getCard, getCardByHandle,
  generateApiKey, saveEnrichment, burnStats, getDb,
} from "./db";
import {
  twitterAuthUrl, twitterExchangeCode,
  githubAuthUrl, githubExchangeCode,
  linkedinAuthUrl, linkedinExchangeCode,
  generateState, generateCodeVerifier, providersConfigured,
} from "./oauth";
import { enrichProfile } from "./enrichment";
import { scoreProfile } from "./scoring";
import { getBalance, calculateCost, deductAndBurn, listPricing } from "./credits";
import { resolveUpstream, servingNote, isAcceptedModel, TARGET_MODEL, TARGET_LABEL } from "./upstream";
import { authorize, clientIp, keyPrefix } from "./gateway";
import { logRequest } from "./db";
import { getVantisPrice, usdToVantis } from "./price";
import { landingHtml, onboardHtml, scorePageHtml, cardHtml, cardNotFoundHtml, providerPendingHtml } from "./pages";
import { admin } from "./admin";

const MAX_TOKENS_CAP = parseInt(process.env.VANTIS_CARD_MAX_TOKENS || "8192");

const app = new Hono();

app.use("*", cors({
  origin: ["https://card.vantis.sh", "https://vantis.sh", "http://localhost:8240"],
  allowHeaders: ["Authorization", "Content-Type"],
  methods: ["GET", "POST", "OPTIONS"],
}));

// ─── Admin console (token-gated inside) ───
app.route("/admin", admin);

// ─── Health ───
app.get("/health", (c) => c.json({ ok: true, service: "vantis-card" }));

// ─── Landing + provider config ───
app.get("/", async (c) => {
  // Server-render every live figure so the page is correct with JavaScript
  // disabled and never shows a dash if the client poll fails.
  const stats = burnStats();
  const { price } = await getVantisPrice();
  const up = resolveUpstream();
  return c.html(landingHtml({
    vantis_burned_total: stats.vantis_burned_total,
    usd_consumed_total: stats.usd_consumed_total,
    inference_calls: stats.inference_calls,
    cards_issued: stats.cards_issued,
    vantis_price_usd: price,
    serving: servingNote(up),
    pricing: listPricing(),
  }));
});
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
    const { profile, repos, languages } = await githubExchangeCode(code);

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
        linkedin_headline: profile.headline,
        linkedin_industry: profile.industry,
        linkedin_company: profile.headline,
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
app.post("/onboard/score", async (c) => {
  const { uid } = await c.req.json();
  if (!uid) return c.json({ error: "missing_uid" }, 400);

  const user = getUser(uid);
  if (!user) return c.json({ error: "user_not_found" }, 404);

  // Idempotent: a scored user keeps their existing grant/card/key
  if (user.scored_at && user.api_key) {
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
      card: card && { handle: card.handle, url: card.card_url, tier: card.tier, designVariant: card.design_variant },
    });
  }

  const enrichmentProfile = {
    xUsername: user.x_username,
    githubUsername: user.github_username,
    name: user.x_name || user.github_name || user.linkedin_name,
    company: user.github_company || user.linkedin_company,
  };

  let enrichment = null;
  try {
    enrichment = await enrichProfile(enrichmentProfile);
    saveEnrichment(uid, "full_enrichment", enrichment);
  } catch (err) {
    console.error("Enrichment error:", err);
  }

  const scoringProfile = {
    xUsername: user.x_username,
    xName: user.x_name,
    xBio: user.x_bio,
    xFollowers: user.x_followers,
    xFollowing: user.x_following,
    xTweetCount: user.x_tweet_count,
    xVerified: user.x_verified,
    xLocation: user.x_location,
    githubUsername: user.github_username,
    githubName: user.github_name,
    githubBio: user.github_bio,
    githubCompany: user.github_company,
    githubLocation: user.github_location,
    githubFollowers: user.github_followers,
    githubPublicRepos: user.github_public_repos,
    githubLanguages: user.github_languages ? JSON.parse(user.github_languages) : [],
    githubTopRepos: user.github_top_repos ? JSON.parse(user.github_top_repos) : [],
    linkedinName: user.linkedin_name,
    linkedinHeadline: user.linkedin_headline,
    linkedinIndustry: user.linkedin_industry,
    linkedinCompany: user.linkedin_company,
    enrichment,
  };

  const result = await scoreProfile(scoringProfile);

  updateUser(uid, {
    score: result.score,
    score_tier: result.tier,
    score_breakdown: JSON.stringify(result.breakdown),
    scored_at: new Date().toISOString(),
  });

  grantCredits(uid, result.grantUsd, `Onboarding grant: ${result.tier} tier`);

  const apiKey = generateApiKey(uid);

  const { price } = await getVantisPrice();
  const grantVantis = usdToVantis(result.grantUsd, price);
  const handle = `@${user.x_username}`;
  const card = createCard(uid, handle, result.tier, result.grantUsd, grantVantis, price);

  return c.json({
    score: result.score,
    tier: result.tier,
    grantUsd: result.grantUsd,
    grantVantis,
    vantisPrice: price,
    breakdown: result.breakdown,
    reasoning: result.reasoning,
    apiKey,
    card: {
      handle: card.handle,
      url: card.card_url,
      tier: card.tier,
      designVariant: card.design_variant,
    },
  });
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
    meter({ user_id: gate.user?.id, status: gate.status, outcome: gate.outcome, error: gate.body?.error });
    return c.json(gate.body!, gate.status as any, gate.headers);
  }
  const user = gate.user;

  let body: any;
  try {
    body = await c.req.json();
  } catch {
    meter({ user_id: user.id, status: 400, outcome: "bad_request", error: "invalid_json" });
    return c.json({ error: "invalid_json" }, 400, gate.headers);
  }

  // The rail serves one model. Aliases map onto it; anything else is refused
  // rather than quietly rerouted.
  if (!isAcceptedModel(body.model)) {
    meter({ user_id: user.id, status: 400, outcome: "unsupported_model", model: body.model, error: "unsupported_model" });
    return c.json({
      error: "unsupported_model",
      requested: body.model,
      supported: [TARGET_MODEL],
      message: `This rail serves ${TARGET_LABEL} only.`,
    }, 400, gate.headers);
  }

  const upstream = resolveUpstream();
  if (!upstream) {
    meter({ user_id: user.id, status: 503, outcome: "upstream_error", error: "no_inference_route" });
    return c.json({ error: "no_inference_route", message: "No upstream is configured for this rail." }, 503, gate.headers);
  }

  if (body.stream) {
    meter({ user_id: user.id, status: 400, outcome: "bad_request", error: "streaming_not_supported" });
    return c.json({ error: "streaming_not_supported", message: "Set stream:false — credits are settled from the usage block of the completed response." }, 400, gate.headers);
  }
  if (typeof body.max_tokens === "number" && body.max_tokens > MAX_TOKENS_CAP) body.max_tokens = MAX_TOKENS_CAP;
  if (body.max_tokens == null) body.max_tokens = 1024;
  body.model = upstream.model;

  // Pre-check with a rough estimate (chars/4 in, 2x that out) before spending
  const inputTokens = Math.ceil(JSON.stringify(body.messages || "").length / 4);
  const estimatedCost = calculateCost(inputTokens, inputTokens * 2);
  if ((user.usd_balance || 0) < estimatedCost) {
    meter({ user_id: user.id, status: 402, outcome: "insufficient_credits", model: TARGET_MODEL, error: "insufficient_credits" });
    return c.json({
      error: "insufficient_credits",
      balance_usd: user.usd_balance || 0,
      estimated_cost_usd: estimatedCost,
      message: "Your $VANTIS credit balance is depleted. Top-ups are coming — for now, build within the grant.",
    }, 402, gate.headers);
  }

  let inferenceRes: Response;
  try {
    inferenceRes = await fetch(`${upstream.baseUrl}/chat/completions`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${upstream.apiKey}` },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(180_000),
    });
  } catch (err: any) {
    meter({ user_id: user.id, status: 502, outcome: "upstream_error", model: TARGET_MODEL, error: err.message });
    return c.json({ error: "inference_unreachable", detail: err.message }, 502, gate.headers);
  }

  if (!inferenceRes.ok) {
    const detail = await inferenceRes.text();
    meter({ user_id: user.id, status: inferenceRes.status, outcome: "upstream_error", model: TARGET_MODEL, error: detail.slice(0, 200) });
    return c.json({ error: "inference_failed", detail }, inferenceRes.status as any, gate.headers);
  }

  const result = await inferenceRes.json();

  // Settle from real usage; fall back to the estimate if usage is missing.
  // The served model is recorded as-is — never relabelled as the target.
  const tokensIn = result.usage?.prompt_tokens || inputTokens;
  const tokensOut = result.usage?.completion_tokens || 0;
  const deduction = await deductAndBurn(apiKey!, result.model || upstream.model, tokensIn, tokensOut);

  meter({
    user_id: user.id,
    status: 200,
    outcome: deduction.ok ? "ok" : "insufficient_credits",
    model: result.model || upstream.model,
    tokens_in: tokensIn,
    tokens_out: tokensOut,
    cost_usd: deduction.cost_usd || 0,
    vantis_burned: deduction.vantis_burned || 0,
    error: deduction.ok ? null : deduction.error,
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
  return c.html(cardHtml(card, { vantisPrice: price, userBurned: user?.vantis_burned || 0, balanceUsd: user?.usd_balance || 0 }));
});

// ─── Onboarding pages ───
app.get("/onboard", (c) => c.html(onboardHtml(providersConfigured())));
app.get("/onboard/score", (c) => {
  const p = providersConfigured();
  return c.html(scorePageHtml(c.req.query("uid") ?? null, c.req.query("step") ?? null, p));
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
