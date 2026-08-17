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
  allowlistModels, catalogModelFor, resolveCodexLb,
} from "./upstream";
import { exaSearch } from "./enrichment";
import { lookupXHandle, xApiEnabled } from "./xapi";
import { getVantisPrice } from "./price";
import { tierInfo } from "./credits";
import { cartridgeFor, cartridgeInLane, holdsCard, holdingsOf, allowanceState, rightsFor, holdTokens, releaseTokens, noteCartridgeUsage } from "./deck";
import { perksFor, perksOf, notePerkUsage, perkTokensToday, PERK_DAILY_TOKEN_CAP, PERK_DEFS } from "./perks";
import { GENESIS, ALL_CARDS, setOf } from "./genesis";

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

    // The Genesis cartridge plugged into the Inference lane, if any — read
    // WITHOUT an allowance check (cartridgeFor would hide an exhausted card,
    // and the screen must show a spent allowance honestly, not pretend the
    // cartridge vanished). Holder is still verified: a sold card disappears.
    let cartridge: any = null;
    const plug = inf ? cartridgeInLane(inf.id) : null;
    if (plug && holdsCard(plug.user_id, plug.slug)) {
      const g = ALL_CARDS.find((x) => x.slug === plug.slug);
      if (g) {
        const set = setOf(g);
        const st = allowanceState(g.slug, plug.user_id)!;
        const r = rightsFor(g.grade);
        cartridge = {
          slug: g.slug, n: g.n, name: g.name, grade: g.grade, grade_label: g.gradeLabel,
          title: g.title, inscription: g.inscription, flavor: g.flavor, stats: g.stats,
          serial: `N° ${String(g.n).padStart(2, "0")}/${String(set.meta.supply).padStart(2, "0")} · ${set.face} · 1/1`,
          series: set.face,
          rpm: r.rpm,
          allowance: { used: st.used, limit: st.limit, remaining: st.remaining, resets_at: st.resets_at },
        };
      }
    }
    return c.json({
      cartridge,
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
      // What the terminal's CHAT can speak: the default rail always, plus the
      // frontier GPT lane when a held card (or the operator allowlist) opens
      // it — the terminal follows the card (Luca, Aug 13: "the terminal must
      // be different utility"). `via` names the card that unlocked the lane.
      chat_models: (() => {
        const models: any[] = [{ id: TARGET_MODEL, label: TARGET_LABEL, covered: false, via: null }];
        const hasGpt = user.pool_access === 1 || perksFor(user.id).has("gpt_unlimited");
        if (hasGpt) {
          const heldSlugs = holdingsOf(user.id).map((h) => h.slug);
          const via = ALL_CARDS.find((x) => heldSlugs.includes(x.slug) && perksOf(x.slug).includes("gpt_unlimited"))?.name || null;
          for (const m of allowlistModels()) {
            if (m.route !== "codexlb" || /image/i.test(m.id)) continue; // chat only, one gateway
            models.push({ id: m.id, label: m.label, covered: true, via });
          }
        }
        return models;
      })(),
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

    // A non-default model must be an UNLOCKED, zero-rate frontier id — the
    // terminal offers exactly what the account's cards open, and a card
    // allowance is default-rail tokens, never a paid staging route.
    const requested = typeof body?.model === "string" ? body.model.trim() : "";
    let selected: any = null;
    if (requested && requested !== TARGET_MODEL) {
      const hasGpt = user.pool_access === 1 || perksFor(user.id).has("gpt_unlimited");
      const m = catalogModelFor(requested, user.staging === 1, hasGpt);
      if (!m || m.route !== "codexlb" || m.rate.input !== 0 || m.rate.output !== 0) {
        meter({ status: 403, outcome: "unsupported_model", model: requested, error: "model_locked" });
        return c.json({ error: "model_locked", message: "That model is not unlocked on this account." }, 403);
      }
      selected = m;
    }
    const rate = selected ? selected.rate : undefined;

    const upstream = selected ? resolveCodexLb(selected.upstreamModel) : resolveUpstream();
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
        { role: "system", content: `You are ${selected ? selected.label : "DeepSeek V4 Flash"} serving on the Vantis inference rail, rendered on a green phosphor terminal. Answer real questions fully and truthfully. Plain text only — no markdown syntax, no emoji; for code, write it directly as indented plain text. Be as long as the answer needs, no longer.` },
        { role: "user", content: prompt },
      ],
      max_tokens: reasoning ? 4000 : 1600,
      stream: wantStream,
    };
    if (wantStream) req.stream_options = { include_usage: true };
    if (!reasoning && !selected) req.thinking = { type: "disabled" }; // rail-specific knob, not for the frontier lane
    applyUpstreamDefaults(req, upstream);

    const inputTokens = Math.ceil(JSON.stringify(req.messages).length / 4);
    const reserve = worstCaseCost(inputTokens, req.max_tokens, rate);
    const scope = spenderScope(wallet.id, user.id);

    // Same cartridge branch as /v1: a Genesis card plugged into this lane
    // meters the call against its daily token allowance — the lane's dollars
    // do not move and no burn is recorded. The terminal is the surface where
    // Luca watches the card work, so this path honoring the cartridge is not
    // optional polish; without it the deck says "IN · Inference" while every
    // terminal call quietly bills credits.
    const worstTokens = inputTokens + req.max_tokens;
    // A held card's perk outranks credits AND cartridges here exactly as on
    // /v1 — the terminal must behave like the API or the deck lies.
    const perkCover = !selected && perksFor(user.id).has("deepseek_unlimited") && perkTokensToday(user.id) + worstTokens <= PERK_DAILY_TOKEN_CAP ? "deepseek_unlimited" : null;
    // Frontier ids reach here only at rate {0,0}, so a plugged card's token
    // allowance may cover them — same eligibility rule as /v1.
    const cart = perkCover ? null : cartridgeFor(wallet.id, worstTokens);

    const avail = (wallet.usd_balance || 0) - heldFor(scope);
    if (!perkCover && !cart && avail < reserve) {
      meter({ status: 402, outcome: "insufficient_credits", model: TARGET_MODEL, error: "lane_empty" });
      return c.json({ error: "lane_empty", lane_balance_usd: Math.max(0, avail), required_usd: reserve }, 402);
    }
    if (cart) holdTokens(cart.slug, cart.userId, worstTokens);
    else if (!perkCover) holdReserve(scope, reserve);
    let holdReleased = false;
    const releaseHold = () => {
      if (holdReleased) return;
      holdReleased = true;
      if (cart) releaseTokens(cart.slug, cart.userId, worstTokens);
      else if (!perkCover) releaseReserve(scope, reserve);
    };
    const settleFire = async (model: string, tin: number, tout: number): Promise<any> => {
      if (perkCover) {
        const realCost = calculateCost(tin, tout, rate);
        notePerkUsage(user.id, perkCover, tin + tout, realCost);
        return {
          ok: true, cost_usd: 0, vantis_burned: 0,
          perk: { key: perkCover, label: PERK_DEFS[perkCover].label, upstream_cost_usd: realCost },
        };
      }
      if (!cart) return deductAndBurnFor(user, wallet, model, tin, tout, rate);
      const realCost = calculateCost(tin, tout, rate);
      noteCartridgeUsage(cart.slug, cart.userId, tin + tout, realCost);
      const after = allowanceState(cart.slug, cart.userId);
      return {
        ok: true, cost_usd: 0, vantis_burned: 0,
        cartridge: {
          card: cart.card.name, slug: cart.slug, grade: cart.card.grade,
          tokens_used_today: after?.used || 0, tokens_remaining_today: after?.remaining || 0,
          daily_allowance: cart.rights.dailyTokens, resets_at: after?.resets_at,
        },
      };
    };

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
        const fo = selected ? null : resolveFailover(upstream);
        if (fo) {
          traceVendor({ vendor: upstream.provider, endpoint: tracedEndpoint(upstream, res, "playground.fire"), status: res.status, latency_ms: Math.round(performance.now() - t0), user_id: user.id, error: res.status === 429 ? "saturated_failover" : "failed_over" });
          await res.body?.cancel().catch(() => {});
          served = fo; res = await dial(fo);
        }
      }
    } catch (err: any) {
      if (upstream.provider === "jatevo") coolDownJatevo(10);
      const fo = selected ? null : resolveFailover(upstream);
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
        settle: (model, tin, tout) => settleFire(model, tin, tout),
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
    let deduction: any;
    try { deduction = await settleFire(servedModel, tokensIn, tokensOut); }
    finally { releaseHold(); } // a settle that throws must never strand the hold
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
      // On a cartridge call the charge is genuinely $0 — `|| calculateCost(...)`
      // would resurrect a phantom charge on the screen for exactly the calls
      // that are free. The estimate only stands in when settlement itself
      // failed to price the call.
      cost_usd: deduction.cartridge ? 0 : (deduction.cost_usd || calculateCost(tokensIn, tokensOut)),
      vantis_burned: deduction.vantis_burned || 0,
      vantis_price_usd: deduction.vantis_price_usd || null,
      lane_balance_usd: fresh?.usd_balance ?? deduction.balance_usd ?? 0,
      cartridge: deduction.cartridge || null,
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
