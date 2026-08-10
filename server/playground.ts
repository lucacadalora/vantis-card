// The playbook — session-gated demo lanes behind the wallet device.
//
// Three tools, three different honesty levels:
//   * fire    — a REAL inference call on the rail, billed to the user's own
//               Inference lane at list price with the usual virtual burn.
//               This is the product working, not a simulation.
//   * search  — one Exa query, OPERATOR-PAID (fleet key), capped per day.
//               A taste of the devtools catalog before its routes open.
//   * x       — one X public-metrics read, OPERATOR-PAID (~1c list), capped
//               per day. Same idea.
//
// Everything here is a session surface (vc_session cookie), never an API-key
// surface: keys can stay held (API_KEYS_ENABLED=0) while the device still
// lets a carded user spend the credits they already hold.
//
// Kill switch: PLAYGROUND=0 turns the whole surface off. Caps and limits all
// read process.env at call time, same discipline as campaign.ts.

import type { Hono } from "hono";
import { readSession } from "./session";
import {
  getUser, getCard, ensurePurposeWallets, getAgentWallet,
  logRequest, traceVendor, vendorCallsToday,
} from "./db";
import {
  worstCaseCost, calculateCost, deductAndBurnFor, listPricing,
  spenderScope, holdReserve, releaseReserve, heldFor,
} from "./credits";
import { rateLimit, upstreamCapacity, noteUpstreamCall, clientIp } from "./gateway";
import { settleStream } from "./stream-settle";
import {
  resolveUpstream, resolveFailover, applyUpstreamDefaults,
  estimateVendorCost, servingNote, TARGET_MODEL, TARGET_LABEL,
  coolDownJatevo, tracedEndpoint,
} from "./upstream";
import { exaSearch } from "./enrichment";
import { lookupXHandle, xApiEnabled } from "./xapi";
import { getVantisPrice } from "./price";
import { tierInfo } from "./credits";

const enabled = () => process.env.PLAYGROUND !== "0";
const fireRpm = () => parseInt(process.env.PLAYGROUND_RPM || "6");
const searchPerDay = () => parseInt(process.env.PLAYGROUND_SEARCH_PER_DAY || "5");
const xPerDay = () => parseInt(process.env.PLAYGROUND_X_PER_DAY || "3");

function session(c: any): { uid: string } | null {
  const sess = readSession(c.req.header("Cookie"));
  return sess?.uid ? { uid: sess.uid } : null;
}

// The carded user + their Inference lane, or the exact refusal the device
// screen should show. Non-carded users are pointed at the funnel, not faked.
function spender(c: any): { user: any; wallet: any } | { error: string; status: number } {
  const sess = session(c);
  if (!sess) return { error: "not_signed_in", status: 401 };
  const user = getUser(sess.uid);
  if (!user) return { error: "not_signed_in", status: 401 };
  if (user.status === "suspended") return { error: "suspended", status: 403 };
  if (!getCard(sess.uid)) return { error: "no_card", status: 403 };
  const lanes = ensurePurposeWallets(sess.uid, false);
  const wallet = lanes.find((w: any) => w.purpose === "inference");
  if (!wallet) return { error: "no_lane", status: 500 };
  return { user, wallet };
}

export function registerPlayground(app: Hono) {
  // ── roster: everything the device screen needs in one read ──
  app.get("/api/playground/meta", async (c) => {
    const sess = session(c);
    if (!sess) return c.json({ error: "not_signed_in" }, 401);
    const user = getUser(sess.uid);
    if (!user) return c.json({ error: "not_signed_in" }, 401);
    const card = getCard(sess.uid);
    const lanes = card ? ensurePurposeWallets(sess.uid, false) : [];
    const inf = lanes.find((w: any) => w.purpose === "inference");
    const dev = lanes.find((w: any) => w.purpose === "devtools");
    const { price } = await getVantisPrice();
    const up = resolveUpstream();
    const searchLeft = Math.max(0, searchPerDay() - vendorCallsToday(sess.uid, "exa", "playground.search"));
    const xLeft = Math.max(0, xPerDay() - vendorCallsToday(sess.uid, "xapi", "playground.lookup"));
    return c.json({
      enabled: enabled(),
      handle: card?.handle || user.x_username || null,
      tier: card?.tier || null,
      variant: card?.design_variant || null,
      // the exact strings the minted card object prints — the device replica
      // must never invent its own
      stamp: card?.created_at
        ? new Date(card.created_at.replace(" ", "T") + "Z").toLocaleString("en-US", { month: "long" }).toUpperCase() + " / " + card.created_at.slice(0, 4)
        : "RESERVED",
      tier_label: card ? tierInfo(card.tier).label : "—",
      grant_str: card?.grant_usd ? String(Math.round(card.grant_usd)) : "",
      main_balance_usd: user.usd_balance || 0,
      vantis_burned: user.vantis_burned || 0,
      vantis_price_usd: price,
      lanes: {
        inference: inf ? { id: inf.id, balance_usd: inf.usd_balance || 0, consumed_usd: inf.usd_consumed || 0 } : null,
        devtools: dev ? { id: dev.id, balance_usd: dev.usd_balance || 0, consumed_usd: dev.usd_consumed || 0 } : null,
      },
      model: { id: TARGET_MODEL, label: TARGET_LABEL, pricing: listPricing()[0], serving: servingNote(up), on_target: !!up?.onTarget },
      tools: [
        { key: "chat", label: "CHAT", desc: "DeepSeek V4 Flash on the rail. Bills your Inference lane.", status: "live" },
        { key: "search", label: "WEB SEARCH", desc: "One real Exa-class query. On the house while routes open.", status: !enabled() ? "off" : searchLeft > 0 ? "live" : "exhausted", left_today: searchLeft, per_day: searchPerDay() },
        { key: "x", label: "X LOOKUP", desc: "Public profile metrics for any X handle. On the house.", status: !enabled() || !xApiEnabled() ? "off" : xLeft > 0 ? "live" : "exhausted", left_today: xLeft, per_day: xPerDay() },
        { key: "onchain", label: "ON-CHAIN DATA", desc: "Nansen-class wallet and token intel.", status: "soon" },
        { key: "crawl", label: "CRAWL + EXTRACT", desc: "Firecrawl-class page reading for agents.", status: "soon" },
        { key: "voice", label: "VOICE", desc: "Speech in, speech out.", status: "soon" },
      ],
    });
  });

  // ── fire: one real inference call, billed to the Inference lane ──
  app.post("/api/playground/fire", async (c) => {
    const t0 = performance.now();
    if (!enabled()) return c.json({ error: "playground_off" }, 503);
    const sp = spender(c);
    if ("error" in sp) return c.json({ error: sp.error }, sp.status as any);
    const { user, wallet } = sp;
    const ip = clientIp(c.req.raw);

    const meter = (o: { status: number; outcome: any; model?: string | null; tokens_in?: number; tokens_out?: number; cost_usd?: number; vantis_burned?: number; error?: string | null }) => {
      try {
        logRequest({ ...o, user_id: user.id, key_prefix: "session", endpoint: "/api/playground/fire", method: "POST", latency_ms: Math.round(performance.now() - t0), ip, ua: c.req.header("User-Agent") || "" });
      } catch (err) { console.error("playground metering failed:", err); }
    };

    const rl = rateLimit(`pg:${user.id}`, fireRpm());
    if (!rl.ok) {
      meter({ status: 429, outcome: "rate_limited", error: "rate_limited" });
      return c.json({ error: "rate_limited", retry_after_sec: rl.retryAfterSec }, 429);
    }

    let body: any; try { body = await c.req.json(); } catch { return c.json({ error: "bad_json" }, 400); }
    const prompt = String(body?.prompt || "").trim().slice(0, 600);
    if (!prompt) {
      meter({ status: 400, outcome: "bad_request", error: "empty_prompt" });
      return c.json({ error: "empty_prompt" }, 400);
    }
    const reasoning = body?.reasoning === true;
    const wantStream = body?.stream !== false; // the device streams by default

    const upstream = resolveUpstream();
    if (!upstream) {
      meter({ status: 503, outcome: "upstream_error", error: "no_inference_route" });
      return c.json({ error: "no_inference_route" }, 503);
    }

    const cap = upstreamCapacity();
    if (!cap.ok) {
      meter({ status: 429, outcome: "upstream_saturated", error: "upstream_saturated" });
      return c.json({ error: "upstream_saturated", retry_after_sec: cap.retryAfterSec }, 429);
    }

    // Short answers for a small screen. Reasoning runs need the same headroom
    // scoring learned the hard way (Wafer-backed builds reason HARDER — 2000
    // was not enough there), plus room for the visible answer.
    const req: any = {
      model: upstream.model,
      messages: [
        { role: "system", content: "You are DeepSeek V4 Flash serving on the Vantis inference rail, rendered on a green phosphor terminal. Answer real questions fully and truthfully. Plain text only — no markdown syntax, no emoji; for code, write it directly as indented plain text. Be as long as the answer needs, no longer." },
        { role: "user", content: prompt },
      ],
      max_tokens: reasoning ? 4000 : 1600,
      stream: wantStream,
    };
    if (wantStream) req.stream_options = { include_usage: true };
    if (!reasoning) req.thinking = { type: "disabled" };
    applyUpstreamDefaults(req, upstream);

    const inputTokens = Math.ceil(JSON.stringify(req.messages).length / 4);
    const reserve = worstCaseCost(inputTokens, req.max_tokens);
    const scope = spenderScope(wallet.id, user.id);
    const avail = (wallet.usd_balance || 0) - heldFor(scope);
    if (avail < reserve) {
      meter({ status: 402, outcome: "insufficient_credits", model: TARGET_MODEL, error: "lane_empty" });
      return c.json({ error: "lane_empty", lane_balance_usd: Math.max(0, avail), required_usd: reserve }, 402);
    }
    holdReserve(scope, reserve);
    let holdReleased = false;
    const releaseHold = () => { if (!holdReleased) { holdReleased = true; releaseReserve(scope, reserve); } };

    const dial = (route: typeof upstream) =>
      fetch(`${route.baseUrl}/chat/completions`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${route.apiKey}`, ...(route.headers || {}) },
        body: JSON.stringify({ ...req, model: route.model }),
        signal: AbortSignal.timeout(120_000),
      });

    let served = upstream;
    let res: Response;
    noteUpstreamCall();
    try {
      res = await dial(upstream);
      if (res.status === 429 || res.status >= 500) {
        if (upstream.provider === "jatevo") {
          const retryAfter = Number(res.headers.get("Retry-After") || 0);
          coolDownJatevo(retryAfter > 0 ? retryAfter : res.status === 429 ? 60 : 10);
        }
        const fo = resolveFailover(upstream);
        if (fo) {
          traceVendor({ vendor: upstream.provider, endpoint: tracedEndpoint(upstream, res, "playground.fire"), status: res.status, latency_ms: Math.round(performance.now() - t0), user_id: user.id, error: res.status === 429 ? "saturated_failover" : "failed_over" });
          await res.body?.cancel().catch(() => {});
          served = fo; res = await dial(fo);
        }
      }
    } catch (err: any) {
      if (upstream.provider === "jatevo") coolDownJatevo(10);
      const fo = resolveFailover(upstream);
      try {
        if (!fo) throw err;
        traceVendor({ vendor: upstream.provider, endpoint: "playground.fire", latency_ms: Math.round(performance.now() - t0), user_id: user.id, error: err?.message || "unreachable" });
        served = fo; res = await dial(fo);
      } catch (err2: any) {
        releaseHold();
        meter({ status: 502, outcome: "upstream_error", model: TARGET_MODEL, error: err2?.message || "unreachable" });
        return c.json({ error: "upstream_unreachable" }, 502);
      }
    }

    if (!res.ok) {
      releaseHold();
      const detail = await res.text().catch(() => "");
      traceVendor({ vendor: served.provider, endpoint: tracedEndpoint(served, res, "playground.fire"), status: res.status, latency_ms: Math.round(performance.now() - t0), user_id: user.id, error: `http_${res.status}` });
      meter({ status: res.status, outcome: res.status === 429 ? "upstream_saturated" : "upstream_error", model: TARGET_MODEL, error: detail.slice(0, 200) });
      return c.json({ error: res.status === 429 ? "upstream_saturated" : "upstream_refused" }, res.status as any);
    }

    if (wantStream) {
      // Real token speed: forward the upstream SSE verbatim; settlement runs
      // from the captured usage frame exactly like /v1, billed to the lane.
      const t1 = t0;
      const stream = settleStream({
        upstreamBody: res.body!,
        clientWantsUsage: true,
        fallback: { model: served.model, inputTokens },
        settle: (model, tin, tout) => deductAndBurnFor(user, wallet, model, tin, tout),
        onSettled: releaseHold,
        report: (r) => {
          meter({
            status: 200, outcome: r.outcome as any, model: r.model,
            tokens_in: r.tokensIn, tokens_out: r.tokensOut,
            cost_usd: r.costUsd, vantis_burned: r.burned, error: r.error,
          });
          traceVendor({
            vendor: served.provider, endpoint: tracedEndpoint(served, res, "playground.fire"), status: 200,
            latency_ms: Math.round(performance.now() - t1), user_id: user.id,
            tokens_in: r.tokensIn, tokens_out: r.tokensOut,
            cost_est_usd: estimateVendorCost(served.provider, r.tokensIn, r.tokensOut),
            error: r.error,
          });
        },
      });
      return new Response(stream, {
        status: 200,
        headers: {
          "Content-Type": "text/event-stream; charset=utf-8",
          "Cache-Control": "no-cache",
          "X-Accel-Buffering": "no",
        },
      });
    }

    let result: any;
    try { result = await res.json(); } catch (err: any) {
      releaseHold();
      meter({ status: 502, outcome: "upstream_error", model: TARGET_MODEL, error: `body_read_failed: ${err?.message}` });
      return c.json({ error: "upstream_unreadable" }, 502);
    }

    const tokensIn = result.usage?.prompt_tokens || inputTokens;
    const tokensOut = result.usage?.completion_tokens || 0;
    const servedModel = result.model || served.model;
    const deduction = await deductAndBurnFor(user, wallet, servedModel, tokensIn, tokensOut);
    releaseHold();
    traceVendor({
      vendor: served.provider, endpoint: tracedEndpoint(served, res, "playground.fire"), status: 200,
      latency_ms: Math.round(performance.now() - t0), user_id: user.id,
      tokens_in: tokensIn, tokens_out: tokensOut,
      cost_est_usd: estimateVendorCost(served.provider, tokensIn, tokensOut),
    });

    const text = (result.choices?.[0]?.message?.content || "").trim();
    meter({
      status: 200, outcome: deduction.ok ? "ok" : "insufficient_credits", model: servedModel,
      tokens_in: tokensIn, tokens_out: tokensOut,
      cost_usd: deduction.cost_usd || 0, vantis_burned: deduction.vantis_burned || 0,
      error: !deduction.ok ? deduction.error : (deduction.shortfall_usd || 0) > 0 ? `settled_with_shortfall_$${deduction.shortfall_usd!.toFixed(6)}` : null,
    });

    const fresh = getAgentWallet(wallet.id);
    return c.json({
      text: text || "(the model answered with reasoning only — try again)",
      model_served: servedModel,
      reasoning,
      tokens_in: tokensIn, tokens_out: tokensOut,
      reasoning_tokens: result.usage?.completion_tokens_details?.reasoning_tokens || 0,
      cost_usd: deduction.cost_usd || calculateCost(tokensIn, tokensOut),
      vantis_burned: deduction.vantis_burned || 0,
      vantis_price_usd: deduction.vantis_price_usd || null,
      lane_balance_usd: fresh?.usd_balance ?? deduction.balance_usd ?? 0,
      latency_ms: Math.round(performance.now() - t0),
    });
  });

  // ── search: one Exa query, operator-paid, capped per day ──
  app.post("/api/playground/search", async (c) => {
    const t0 = performance.now();
    if (!enabled()) return c.json({ error: "playground_off" }, 503);
    const sp = spender(c);
    if ("error" in sp) return c.json({ error: sp.error }, sp.status as any);
    const { user } = sp;

    const used = vendorCallsToday(user.id, "exa", "playground.search");
    if (used >= searchPerDay()) return c.json({ error: "demo_exhausted", left_today: 0, per_day: searchPerDay() }, 429);

    let body: any; try { body = await c.req.json(); } catch { return c.json({ error: "bad_json" }, 400); }
    const query = String(body?.query || "").trim().slice(0, 140);
    if (!query) return c.json({ error: "empty_query" }, 400);

    // exaSearch traces vendor="exa" endpoint="search" itself with no user id;
    // the playground writes its OWN row carrying the user, and the daily cap
    // counts only these — a scoring run never eats someone's demo budget.
    const results = await exaSearch(query, 5, "keyword").catch(() => []);
    traceVendor({
      vendor: "exa", endpoint: "playground.search", status: 200,
      latency_ms: Math.round(performance.now() - t0), user_id: user.id,
      cost_est_usd: 0.005,
    });
    logRequest({ user_id: user.id, key_prefix: "session", endpoint: "/api/playground/search", method: "POST", status: 200, outcome: "ok", latency_ms: Math.round(performance.now() - t0), ip: clientIp(c.req.raw) });
    return c.json({
      query,
      results: results.slice(0, 5).map((r: any) => ({ title: r.title || r.url, url: r.url, snippet: (r.text || "").slice(0, 220) })),
      left_today: Math.max(0, searchPerDay() - used - 1),
    });
  });

  // ── x: one public-metrics read for any handle, operator-paid, capped ──
  app.post("/api/playground/x", async (c) => {
    const t0 = performance.now();
    if (!enabled()) return c.json({ error: "playground_off" }, 503);
    if (!xApiEnabled()) return c.json({ error: "tool_off" }, 503);
    const sp = spender(c);
    if ("error" in sp) return c.json({ error: sp.error }, sp.status as any);
    const { user } = sp;

    const used = vendorCallsToday(user.id, "xapi", "playground.lookup");
    if (used >= xPerDay()) return c.json({ error: "demo_exhausted", left_today: 0, per_day: xPerDay() }, 429);

    let body: any; try { body = await c.req.json(); } catch { return c.json({ error: "bad_json" }, 400); }
    const handle = String(body?.handle || "").trim().slice(0, 20);
    if (!handle) return c.json({ error: "empty_handle" }, 400);

    const profile = await lookupXHandle(handle, user.id);
    logRequest({ user_id: user.id, key_prefix: "session", endpoint: "/api/playground/x", method: "POST", status: profile ? 200 : 404, outcome: profile ? "ok" : "bad_request", latency_ms: Math.round(performance.now() - t0), ip: clientIp(c.req.raw), error: profile ? null : "handle_not_found" });
    if (!profile) return c.json({ error: "handle_not_found", left_today: Math.max(0, xPerDay() - used - 1) }, 404);
    return c.json({ profile, left_today: Math.max(0, xPerDay() - used - 1) });
  });
}
