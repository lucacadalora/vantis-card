// HTML pages — Vantis light system: canvas white, ink black, signal green
// #09F875, striped-V mark dark-on-green. Display face is Space Grotesk when
// available, falling back to the system stack.

import { tierInfo } from "./credits";
import { formatVantis } from "./price";
import { SYSTEM_CSS, ARROW } from "./system";
import { codeBlock, CODE_CSS } from "./code";

export const esc = (s: any) =>
  String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));

// Contour-traced canonical V mark (fill inherits currentColor)
export const V_MARK = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 254" role="img" aria-label="Vantis" class="vmark"><g fill="currentColor"><path d="M20 0 L47 1 L47 213 L238 23 L239 104 L90 253 L0 253 L0 20 Z"/><path d="M238 151 L239 215 L203 253 L134 253 Z"/></g></svg>`;

const BASE_CSS = `
* { margin:0; padding:0; box-sizing:border-box; }
:root {
  --green:#09F875; --ink:#0A0A0A; --canvas:#FAFAF8; --line:#E5E5E0; --dim:#6B6B66;
  --display:'Space Grotesk',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
  --body:'Inter','Helvetica Neue',-apple-system,BlinkMacSystemFont,Arial,sans-serif;
  --mono:'SF Mono',ui-monospace,Menlo,Consolas,monospace;
}
body { font-family:var(--body); background:var(--canvas); color:var(--ink); -webkit-font-smoothing:antialiased; min-height:100vh; }
a { color:inherit; }
.vmark { height:1em; width:auto; display:inline-block; vertical-align:-0.08em; }
.topbar { display:flex; justify-content:space-between; align-items:center; padding:18px 24px; border-bottom:1px solid var(--line); }
.brand { display:flex; align-items:center; gap:10px; font-family:var(--display); font-weight:700; font-size:15px; letter-spacing:0.04em; text-decoration:none; }
.brand .vmark { height:18px; }
.brand .tag { color:var(--dim); font-weight:500; }
.toplink { font-size:13px; color:var(--dim); text-decoration:none; }
.toplink:hover { color:var(--ink); }
.btn { display:inline-flex; align-items:center; justify-content:center; gap:10px; padding:14px 24px; border-radius:12px; font-family:var(--display); font-size:15px; font-weight:600; cursor:pointer; border:none; text-decoration:none; transition:transform .15s ease, opacity .15s ease; }
.btn:active { transform:scale(.97); }
.btn-primary { background:var(--ink); color:var(--green); }
.btn-primary:hover { opacity:.9; }
.btn-green { background:var(--green); color:var(--ink); }
.footnote { font-size:12px; color:var(--dim); line-height:1.6; }
.footnote a { color:var(--dim); }
`;

const HONESTY = `Virtual credits, not a token sale. Credits never convert to $VANTIS or any other token &mdash; no airdrop, now or later. Balances live in a database, are non-transferable, have no monetary value, and are redeemable only against AI inference on the Vantis rail. &ldquo;Burn&rdquo; here is a virtual ledger: the dollar cost of each call is converted to $VANTIS at the live market price and retired from your balance &mdash; no on-chain tokens are transferred or destroyed. On-chain burns, when they happen, are tracked at <a href="https://vantis.sh/burns" target="_blank" rel="noopener">vantis.sh/burns</a>.`;

// ─── Landing ───
// Structure mirrors byteplus.com/en: sticky white nav, split hero with the
// product object on the right, hairline proof row, alternating section wash,
// the dark developer panel with live code, a bento pair, a grouped catalogue,
// a quiet trust strip and a closing CTA band.

const CURL_SAMPLE = `curl -s https://card.vantis.sh/v1/chat/completions \\
  -H "Authorization: Bearer $VANTIS_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"model":"deepseek-v4-flash-0731","messages":[{"role":"user","content":"Ship it."}]}'`;

const RESPONSE_SAMPLE = `{
  "choices": [{ "message": { "content": "Shipped." } }],
  "usage": { "prompt_tokens": 12, "completion_tokens": 29 },
  "vantis": {
    "cost_usd": 0.000010,
    "vantis_burned": 5.31,
    "vantis_price_usd": 0.001883,
    "balance_usd": 24.99999,
    "model_served": "deepseek-v4-flash-0731"
  }
}`;

export interface LandingData {
  vantis_burned_total: number;
  usd_consumed_total: number;
  inference_calls: number;
  cards_issued: number;
  vantis_price_usd: number;
  serving: string;
  pricing: { model: string; label?: string; usd_per_1m_input: number; usd_per_1m_output: number }[];
  signIn?: boolean; // Privy gate armed → landing shows a returning-user entry
  // Signed-in state, read from the session cookie at render time.
  viewer?: { cardHandle: string | null };
}

const fmtV = (n: number) =>
  n >= 1e6 ? (n / 1e6).toFixed(2) + "M" : n >= 1e3 ? (n / 1e3).toFixed(1) + "K" : n >= 1 ? n.toFixed(2) : n.toFixed(4);
const fmtM = (n: number) => (n >= 1e6 ? (n / 1e6).toFixed(0) + "M" : (n / 1e3).toFixed(0) + "K");

export function landingHtml(d: LandingData): string {
  const p = d.pricing?.[0];
  const usd = d.usd_consumed_total;
  const usdStr = usd === 0 ? "$0" : usd < 0.01 ? "$" + usd.toFixed(6) : "$" + usd.toFixed(2);
  const tokensFor = (grant: number) => (p?.usd_per_1m_output ? fmtM((grant / p.usd_per_1m_output) * 1e6) : "—");
  const TIERS = [
    { k: "whale", name: "Whale", desc: "High influence, deep technical signal and real purchasing power.", score: "SCORE 80–100", grant: 25, cls: "rung--whale" },
    { k: "builder", name: "Builder", desc: "Strong technical depth. You are visibly shipping things.", score: "SCORE 60–79", grant: 15, cls: "rung--plain rung--b" },
    { k: "explorer", name: "Explorer", desc: "Real signals present, still early in the public record.", score: "SCORE 40–59", grant: 10, cls: "rung--plain rung--e" },
    { k: "noise", name: "Noise", desc: "Minimal public signal. Score 10+ still lands a grant; below that, a card without one.", score: "SCORE 0–39", grant: 5, cls: "rung--plain rung--n" },
  ];
  const GUARANTEES = ["OpenAI-compatible", "Bearer auth", "Non-streaming", "Billed on real token counts", "Six-decimal settlement", "One card per identity", "Price from the deepest DexScreener pool", "Off-chain burn ledger"];
  const TERMS: [string, string][] = [
    ["<b>A dollar balance</b> in a database, spendable on metered routes through this endpoint &mdash; inference today, developer tools as they open.", "Not a token sale, not an allocation, and not a claim on any $VANTIS supply."],
    ["<b>Non-transferable.</b> The balance is bound to your card and cannot be sent, sold or withdrawn.", "Not a wallet. Nothing is custodied for you and no private key is ever created."],
    ["<b>Granted free.</b> Scoring is the only qualification and there is nothing to purchase at any point.", "Not an investment, and not consideration for anything you hold."],
    ["<b>A virtual burn ledger.</b> Each call&rsquo;s dollar cost is converted to $VANTIS at the live market price and retired from your balance.", "Not an on-chain burn. No tokens are transferred, sent to a burn address, or destroyed."],
    ["<b>Backed by real spend.</b> Every call is billable inference bought on our own upstream account.", "Not a simulation, and not a demo key running a fake meter."],
    ["<b>Auditable per call:</b> cost_usd, vantis_burned, vantis_price_usd, balance_usd and model_served ride in every response.", "Not reconcilable against a public chain — this ledger is off-chain by design."],
  ];

  const heroCard = cardObject({
    handle: "@yourhandle",
    tierLabel: "Whale",
    grantStr: "25",
    stamp: "AUGUST / 2026",
    variant: "ink",
  });

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Vantis Cards — AI-scored credits for the Vantis inference rail</title>
<meta name="description" content="Connect your profiles, get AI-scored, receive $VANTIS inference credits. One model, DeepSeek V4 Flash 0731 — every call virtually burns $VANTIS at the live market price.">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<meta property="og:title" content="Vantis Cards">
<meta property="og:description" content="Get AI-scored, receive $VANTIS credits, build on the rail. Every call burns $VANTIS.">
<style>
${SYSTEM_CSS}
${CARD_CSS}
${CODE_CSS}

/* hero card sizing + a soft signal glow behind it */
.hero-visual { position:relative; }
.hero-visual::before {
  content:''; position:absolute; width:78%; height:62%; left:11%; top:19%;
  background:radial-gradient(ellipse at center, rgba(9,248,117,0.20) 0%, transparent 68%);
  filter:blur(48px); pointer-events:none;
}
.hero-visual .scene { --card-w:min(480px, 100%); }
.hero-visual .headline, .hero-visual .tier-badge { display:none; }

/* the model price grid inside the ink bento card */
.pricegrid { display:grid; grid-template-columns:1fr 1fr; gap:1px; background:rgba(255,255,255,0.12); border-radius:14px; overflow:hidden; width:100%; }
.pricecell { background:var(--ink); padding:18px 16px; }
.pricecell .k { font-size:11px; text-transform:uppercase; letter-spacing:0.1em; color:rgba(255,255,255,0.5); }
.pricecell .v { font-family:var(--display); font-size:26px; font-weight:700; margin-top:6px; }
.pricecell .v.green { color:var(--green); }
.pricecell .s { font-size:11px; color:rgba(255,255,255,0.45); margin-top:3px; }
.serving { margin-top:16px; font-family:var(--mono); font-size:11.5px; color:rgba(255,255,255,0.55); line-height:1.6; }

/* burn flow diagram inside the green bento card */
.flow { display:flex; align-items:stretch; gap:8px; width:100%; }
.flowstep { flex:1; background:rgba(255,255,255,0.42); border-radius:12px; padding:14px 10px; text-align:center; box-shadow:inset 0 0 0 1px rgba(255,255,255,0.35); }
.flowstep .fk { font-family:var(--mono); font-size:9.5px; letter-spacing:0.1em; text-transform:uppercase; color:rgba(10,10,10,0.62); }
.flowstep .fv { font-family:var(--display); font-weight:700; font-size:14px; margin-top:5px; line-height:1.2; }
.flowarrow { display:flex; align-items:center; justify-content:center; color:rgba(10,10,10,0.45); }
@media (max-width: 560px) {
  .flow { flex-direction:column; gap:6px; }
  .flowarrow svg { transform:rotate(90deg); }
  .flowstep { padding:11px 10px; }
}

/* live ticker pulse on the proof row */
.dot { display:inline-block; width:6px; height:6px; border-radius:50%; background:var(--green-ink); margin-right:6px; vertical-align:1px; animation:pulse 2.4s ease-in-out infinite; }
@keyframes pulse { 0%,100% { opacity:1; } 50% { opacity:.35; } }
</style>
</head>
<body>

<div class="announce" id="announce">
  <div class="announce-t"><b>DeepSeek V4 Flash 0731</b> is the only model on the rail &mdash; $0.14 in / $0.28 out per 1M tokens.</div>
  <a class="announce-cta" href="/reserve">Reserve your card</a>
  <button class="announce-x" id="announce-x" aria-label="Dismiss">&times;</button>
</div>

<nav class="nav">
  <div class="nav-in">
    <a class="brand" href="/">${V_MARK} VANTIS <span class="sub">CARDS</span></a>
    <div class="navlinks">
      <a href="#how">How it works</a>
      <a href="#api">API</a>
      <a href="#model">Model</a>
      <a href="#tiers">Tiers</a>
    </div>
    <div class="navactions">
      ${
        d.viewer
          ? d.viewer.cardHandle
            ? `<a class="btn btn--ghost btn--sm" href="/account">Account</a>
      <a class="btn btn--primary btn--sm" href="/card/${esc(d.viewer.cardHandle)}">Your card</a>`
            : `<a class="btn btn--primary btn--sm" href="/onboard">Finish signing up</a>`
          : `${d.signIn ? `<a class="btn btn--ghost btn--sm" href="/login">Sign in</a>` : ""}
      <a class="btn btn--primary btn--sm" href="/onboard">Get your card</a>`
      }
    </div>
  </div>
</nav>

<header class="hero">
  <div class="wrap hero-grid">
    <div>
      <div class="eyebrow eyebrow--green">Vantis Cards</div>
      <h1>Get scored.<br>Get credits.<br>Burn <span class="mark">$VANTIS</span>.</h1>
      <p class="lede">An AI research agent reads your public builder profile and grants you up to $25 in $VANTIS inference credits. Spend them on inference today &mdash; and on developer tools like search and data APIs through the same balance as routes open. Every call retires $VANTIS at the live market price.</p>
      <div class="btnrow">
        <a class="btn btn--primary" href="/onboard">Get your card</a>
        <a class="btn btn--ghost" href="#api">Read the API</a>
      </div>
      <div class="hero-note">X sign-in required for identity. No wallet, no seed phrase, no purchase.</div>
    </div>
    <div class="hero-visual">${heroCard}</div>
  </div>
</header>

<section class="sec--tight">
  <div class="wrap">
    <div class="proof">
      <div class="proof-i">
        <div class="proof-k"><span class="dot"></span>$VANTIS burned</div>
        <div class="proof-v num green" id="s-burn">${fmtV(d.vantis_burned_total)}</div>
        <div class="proof-s" id="s-burn-usd">${usdStr} of inference retired</div>
      </div>
      <div class="proof-i">
        <div class="proof-k">Inference calls</div>
        <div class="proof-v num" id="s-calls">${d.inference_calls.toLocaleString()}</div>
        <div class="proof-s">settled from real token usage</div>
      </div>
      <div class="proof-i">
        <div class="proof-k">Cards issued</div>
        <div class="proof-v num" id="s-cards">${d.cards_issued.toLocaleString()}</div>
        <div class="proof-s">one of one, per builder</div>
      </div>
      <div class="proof-i">
        <div class="proof-k">$VANTIS price</div>
        <div class="proof-v num" id="s-price">$${d.vantis_price_usd.toFixed(6)}</div>
        <div class="proof-s">live, deepest pool</div>
      </div>
    </div>
  </div>
</section>

<section class="sec" id="api">
  <div class="wrap">
    <div class="devpanel">
      <div class="devpanel-copy">
        <div class="eyebrow eyebrow--onDark">One endpoint</div>
        <h2>Drop-in OpenAI-compatible. Nothing new to learn.</h2>
        <p class="lede lede--onDark">Change the base URL and the key. Every response carries a <span style="font-family:var(--mono);color:var(--green)">vantis</span> block telling you exactly what the call cost, what it burned, and which model actually ran.</p>
        <div class="btnrow">
          <a class="btn btn--onDark" href="/onboard">Get a key</a>
          <a class="arrowlink arrowlink--onDark" href="#model">See the price ${ARROW}</a>
        </div>
      </div>
      <div class="devpanel-code">
        <div class="codeblk">
          <div class="codeblk-h">Request</div>
          <div class="code">${codeBlock(CURL_SAMPLE, "shell")}</div>
        </div>
        <div class="codeblk">
          <div class="codeblk-h">Response</div>
          <div class="code">${codeBlock(RESPONSE_SAMPLE, "json")}</div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="sec sec--wash" id="how">
  <div class="wrap">
    <div class="sechead">
      <div>
        <div class="eyebrow">How it works</div>
        <h2>Four steps from profile to production key</h2>
        <p class="lede">The whole grant is automatic. You connect, an agent scores what is already public about you, and the credits and key land on the same page.</p>
      </div>
    </div>
    <div class="steps">
      <div class="step">
        <div class="step-n">01</div>
        <h3>Connect X</h3>
        <p>X sign-in is the identity check and the anti-bot gate. GitHub and LinkedIn are optional and raise your score.</p>
      </div>
      <div class="step">
        <div class="step-n">02</div>
        <h3>An agent scores you</h3>
        <p>It reads your OAuth profile, enriches it with live web search, and rates five dimensions &mdash; running on the same model you are about to get.</p>
      </div>
      <div class="step">
        <div class="step-n">03</div>
        <h3>Credits, key, card</h3>
        <p>Your score sets your tier. You receive up to $25 in $VANTIS credits, an API key, and a one-of-one card you can share.</p>
      </div>
      <div class="step">
        <div class="step-n">04</div>
        <h3>Burn as you build</h3>
        <p>Point any OpenAI-compatible client at the endpoint. Each call bills its real cost and retires the $VANTIS equivalent.</p>
      </div>
    </div>
  </div>
</section>



<section class="sec sec--wash" id="model">
  <div class="wrap">
    <div class="sechead">
      <div>
        <div class="eyebrow">The mechanics</div>
        <h2>One model, and a burn you can audit</h2>
        <p class="lede">No routing, no model zoo, no surprise bills. One model at one published price, and a burn ledger that moves with the market.</p>
      </div>
    </div>
    <div class="bento">

      <div class="bcard bcard--ink">
        <div class="bcard-art">
          <div class="pricegrid">
            <div class="pricecell">
              <div class="k">Input</div>
              <div class="v" id="m-in">$${p ? p.usd_per_1m_input.toFixed(2) : "—"}</div>
              <div class="s">per 1M tokens</div>
            </div>
            <div class="pricecell">
              <div class="k">Output</div>
              <div class="v" id="m-out">$${p ? p.usd_per_1m_output.toFixed(2) : "—"}</div>
              <div class="s">per 1M tokens</div>
            </div>
            <div class="pricecell">
              <div class="k">Burned per 1M out</div>
              <div class="v green num" id="m-burn">${p && d.vantis_price_usd > 0 ? fmtV(p.usd_per_1m_output / d.vantis_price_usd) : "—"}</div>
              <div class="s">at the live price</div>
            </div>
            <div class="pricecell">
              <div class="k">A $25 grant buys</div>
              <div class="v num" id="m-buys">${p ? tokensFor(25) : "—"}</div>
              <div class="s">output tokens</div>
            </div>
          </div>
        </div>
        <div class="eyebrow eyebrow--onDark">Sole model</div>
        <h3 id="m-name">${esc(p?.label || p?.model || "DeepSeek V4 Flash 0731")}</h3>
        <p class="lede">Published first-party pricing, billed to six decimal places. Any other model id is refused rather than quietly rerouted.</p>
        <div class="serving" id="m-serving">${esc(d.serving || "")}</div>
      </div>

      <div class="bcard bcard--green">
        <div class="bcard-art">
          <div class="flow">
            <div class="flowstep"><div class="fk">Step 01</div><div class="fv">Real token usage</div></div>
            <div class="flowarrow">${ARROW}</div>
            <div class="flowstep"><div class="fk">Step 02</div><div class="fv">Cost in USD</div></div>
            <div class="flowarrow">${ARROW}</div>
            <div class="flowstep"><div class="fk">Step 03</div><div class="fv">$VANTIS retired</div></div>
          </div>
        </div>
        <div class="eyebrow" style="color:rgba(10,10,10,0.6)">The burn</div>
        <h3>Every call retires $VANTIS at the live price</h3>
        <p class="lede">We take the real cost of your call, convert it at the deepest-pool market price of $VANTIS, and retire that amount from your balance &mdash; recording the price snapshot with it. It is a virtual, off-chain ledger: no tokens move on chain.</p>
        <a class="arrowlink" href="https://vantis.sh/burns" target="_blank" rel="noopener" style="margin-top:14px">On-chain burns live at vantis.sh/burns ${ARROW}</a>
      </div>

    </div>
  </div>
</section>

<section class="sec" id="tiers">
  <div class="wrap">
    <div class="sechead">
      <div>
        <div class="eyebrow">Grants</div>
        <h2>The ladder</h2>
      </div>
      <div style="font-size:14px; color:var(--muted);">Score 0&ndash;100 &middot; thresholds are fixed and applied automatically</div>
    </div>
    <div class="ladder">
      ${TIERS.map((t) => `
      <div class="rung ${t.cls}">
        <div class="rung-name">${t.name}</div>
        <div class="rung-desc">${t.desc}</div>
        <div class="rung-score">${t.score}</div>
        <div class="rung-grant">
          <div class="g">$${t.grant}</div>
          <div class="t">≈ ${tokensFor(t.grant)} output tokens</div>
        </div>
      </div>`).join("")}
    </div>
    <div class="ladder-caps">
      <p>There is no upgrade path you can buy and no manual override. One grant per identity; a referral thanks the referrer with a small credit &mdash; it never changes your own grant.</p>
      <p>Everyone who finishes the flow receives a card. Grants start at score 10 &mdash; the floor filters bot accounts, not people.</p>
    </div>
  </div>
</section>

<section class="sec--tight">
  <div class="wrap">
    <div class="guarantees">
      <div class="glist">
        ${GUARANTEES.map((g) => `<div class="gitem">${g}</div>`).join("")}
      </div>
    </div>
  </div>
</section>

<section class="sec sec--wash" id="terms">
  <div class="wrap terms">
    <div class="terms-l">
      <div class="eyebrow">Plain terms</div>
      <h3>What this is, and what it is not.</h3>
    </div>
    <div class="terms-r">
      <div class="tt-head">
        <div class="tt-h a">What a Vantis card is</div>
        <div></div>
        <div class="tt-h b">What it is not</div>
      </div>
      ${TERMS.map(([a, b]) => `
      <div class="tt-row">
        <div class="tt-a">${a}</div>
        <div class="tt-div"></div>
        <div class="tt-b">${b}</div>
      </div>`).join("")}
      <p class="tt-note">${HONESTY}</p>
    </div>
  </div>
</section>

<section class="band">
  <div class="wrap">
    <h2>Find out what your public work is worth in inference.</h2>
    <p class="lede">Five dimensions, one score, a card that exists once, and up to $25 in $VANTIS credits that burn as you spend them.</p>
    <div class="btnrow" style="justify-content:center;">
      <a class="btn btn--band" href="/onboard">Get your card</a>
    </div>
    <div class="band-note">About a minute end to end. Provider sign-in opens shortly.</div>
  </div>
</section>

<footer class="foot--ink">
  <div class="wrap">
    <div class="foot-cols">
      <div>
        <a class="brand" href="/">${V_MARK} VANTIS <span class="sub">CARDS</span></a>
        <p class="foot-bl">AI-scored inference credits on the Vantis rail.</p>
      </div>
      <div class="foot-col">
        <div class="foot-ct">Product</div>
        <a href="/onboard">Get your card</a>
        <a href="/card/lucaxyzz">See a live card</a>
        <a href="#how">How it works</a>
        <a href="#tiers">Tiers</a>
      </div>
      <div class="foot-col">
        <div class="foot-ct">Developers</div>
        <a href="#api">The endpoint</a>
        <a href="#model">The model</a>
        <a href="/burn/stats">Burn stats (JSON)</a>
      </div>
      <div class="foot-col">
        <div class="foot-ct">Vantis</div>
        <a href="https://vantis.sh" target="_blank" rel="noopener">vantis.sh</a>
        <a href="https://vantis.sh/burns" target="_blank" rel="noopener">On-chain burns</a>
        <a href="#terms">Plain terms</a>
      </div>
    </div>
    <div class="foot-legal">
      Virtual credits, not a token sale &mdash; non-transferable, no monetary value, redeemable only against AI inference on the Vantis rail. The burn is an off-chain ledger; on-chain burns are tracked at <a href="https://vantis.sh/burns" target="_blank" rel="noopener">vantis.sh/burns</a>.
      <div class="foot-bot">
        <span>&copy; 2026 Vantis. Nothing on this page is an offer to sell, or a solicitation of an offer to buy, any asset.</span>
        <span>card.vantis.sh</span>
      </div>
    </div>
  </div>
</footer>

<script>
function fmtV(n){ if(n>=1e6)return (n/1e6).toFixed(2)+'M'; if(n>=1e3)return (n/1e3).toFixed(1)+'K'; if(n>=1)return n.toFixed(2); return n.toFixed(4); }
function load(){
  fetch('/burn/stats').then(function(r){return r.json();}).then(function(d){
    document.getElementById('s-burn').textContent = fmtV(d.vantis_burned_total);
    var usd = d.usd_consumed_total;
    document.getElementById('s-burn-usd').textContent = (usd === 0 ? '$0' : usd < 0.01 ? '$'+usd.toFixed(6) : '$'+usd.toFixed(2)) + ' of inference retired';
    document.getElementById('s-calls').textContent = d.inference_calls.toLocaleString();
    document.getElementById('s-cards').textContent = d.cards_issued.toLocaleString();
    document.getElementById('s-price').textContent = '$'+Number(d.vantis_price_usd).toFixed(6);

    var p = d.pricing && d.pricing[0];
    if (p) {
      document.getElementById('m-name').textContent = p.label || p.model;
      document.getElementById('m-in').textContent = '$'+p.usd_per_1m_input.toFixed(2);
      document.getElementById('m-out').textContent = '$'+p.usd_per_1m_output.toFixed(2);
      document.getElementById('m-burn').textContent = d.vantis_price_usd > 0 ? fmtV(p.usd_per_1m_output / d.vantis_price_usd) : '—';
      document.getElementById('m-buys').textContent = p.usd_per_1m_output > 0 ? (25 / p.usd_per_1m_output).toFixed(0)+'M' : '—';
    }
    if (d.serving) document.getElementById('m-serving').textContent = d.serving;
  }).catch(function(){});
}
load(); setInterval(load, 60000);
document.addEventListener('visibilitychange', function(){ if(!document.hidden) load(); });

(function(){
  var bar = document.getElementById('announce');
  try { if (sessionStorage.getItem('vc-announce') === 'off') bar.style.display = 'none'; } catch(e){}
  document.getElementById('announce-x').addEventListener('click', function(){
    bar.style.display = 'none';
    try { sessionStorage.setItem('vc-announce', 'off'); } catch(e){}
  });
})();
</script>
</body>
</html>`;
}

// ─── Onboard ───
// Shared styles for the Privy gate island (login page + onboard page).
const PV_CSS = `
.pv-box { border:1px solid var(--line); border-radius:20px; padding:26px; background:var(--white); }
.pv-cta { display:inline-flex; align-items:center; justify-content:center; width:100%; padding:15px 22px; border-radius:999px; background:var(--ink); color:var(--green); font-family:var(--display); font-weight:700; font-size:15px; border:0; cursor:pointer; transition:transform .16s var(--ease); text-decoration:none; }
.pv-cta:active { transform:scale(.985); }
.pv-cta--sm { width:auto; padding:9px 16px; font-size:13px; }
.pv-cta--ghost { background:var(--white); color:var(--ink); border:1px solid var(--line-strong); }
.pv-continue { margin-top:16px; }
.pv-row { display:flex; align-items:center; justify-content:space-between; gap:16px; padding:16px 0; border-bottom:1px solid var(--line); }
.pv-row-n { font-family:var(--display); font-size:16px; font-weight:700; }
.pv-row-d { font-size:13px; color:var(--body); margin-top:3px; }
.pv-ok { font-family:var(--mono); font-size:10px; letter-spacing:0.1em; text-transform:uppercase; background:var(--ink); color:var(--green); padding:5px 9px; border-radius:20px; white-space:nowrap; }
.pv-note { font-size:13.5px; color:var(--body); line-height:1.6; }
.pv-out { margin-top:16px; background:none; border:0; color:var(--muted); font-size:12.5px; cursor:pointer; text-decoration:underline; padding:0; }
`;

// The first gate: a Privy sign-in page in front of /onboard. Signing in
// creates the Vantis account (and embedded wallet); the X requirement is
// enforced on the next step, not here.
//
// Split-screen in the /hub login idiom (our own system, ported not cloned):
// left = ink art panel carrying the rotating card object, right = auth
// column. Full-bleed, no app chrome — the back link lives in the column.
export function loginHtml(privy: { appId: string; islandFile: string }, next: string): string {
  const art = cardObject({
    handle: "@yourhandle",
    tierLabel: "Whale",
    grantStr: "25",
    stamp: "AUGUST / 2026",
    variant: "signal",
  });

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Sign in — Vantis Cards</title>
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<style>
${SYSTEM_CSS}
${CARD_CSS}
${PV_CSS}
.gate { display:grid; grid-template-columns:minmax(0,1.08fr) minmax(0,1fr); min-height:100vh; min-height:100svh; }
.gart { background:var(--ink); color:#fff; display:flex; flex-direction:column; padding:30px 44px 40px; overflow:hidden; }
.gbrand { display:inline-flex; align-items:center; gap:10px; color:#fff; text-decoration:none; font-family:var(--display); font-weight:700; letter-spacing:0.02em; }
.gbrand svg { width:22px; height:22px; }
.gbrand .sub { color:var(--green); font-weight:600; letter-spacing:0.14em; font-size:12px; }
.gart-card { flex:1; display:flex; align-items:center; justify-content:center; padding:34px 0 26px; }
.gart-h { font-family:var(--display); font-size:clamp(28px,3vw,42px); font-weight:700; letter-spacing:-0.02em; line-height:1.24; margin:14px 0 12px; color:#fff; }
.gart-h em { font-style:normal; background:var(--green); color:var(--ink); padding:0 8px; }
.geyebrow { font-family:var(--mono); font-size:11px; letter-spacing:0.16em; text-transform:uppercase; color:var(--green); }
.gart-p { font-size:14.5px; line-height:1.65; color:rgba(255,255,255,.72); max-width:380px; }
.gauth { background:var(--wash); display:flex; align-items:center; justify-content:center; padding:56px 28px; }
.gauth-in { width:100%; max-width:400px; }
.gmark svg { width:34px; height:34px; }
.gwelcome { font-family:var(--mono); font-size:11px; letter-spacing:0.18em; text-transform:uppercase; color:var(--muted); margin:20px 0 8px; }
.gauth-h { font-family:var(--display); font-size:clamp(26px,2.6vw,32px); font-weight:700; letter-spacing:-0.02em; margin-bottom:10px; }
.gauth-p { font-size:14px; line-height:1.65; color:var(--body); margin-bottom:24px; }
.gback { display:inline-block; margin-top:20px; font-size:13px; color:var(--muted); text-decoration:none; }
.gback:hover { color:var(--ink); }
.gauth-legal { margin-top:28px; font-size:11.5px; }
@media (max-width:1000px) {
  .gate { grid-template-columns:1fr; }
  .gart { padding:24px 24px 30px; }
  .gart-card { padding:22px 0 16px; }
  .gart-card .scene { transform:scale(.82); }
  .gauth { padding:40px 24px 56px; }
}
</style>
</head>
<body>
<div class="gate">
  <aside class="gart">
    <a class="gbrand" href="/">${V_MARK} VANTIS <span class="sub">CARDS</span></a>
    <div class="gart-card">${art}</div>
    <div>
      <div class="geyebrow">Vantis account</div>
      <h1 class="gart-h">One sign-in.<br><em>The whole rail.</em></h1>
      <p class="gart-p">Your score, credits, API key and the card itself follow one account &mdash; an embedded wallet included, no seed phrase to manage.</p>
    </div>
  </aside>
  <main class="gauth">
    <div class="gauth-in">
      <div class="gmark">${V_MARK}</div>
      <div class="gwelcome">Welcome</div>
      <h2 class="gauth-h">Sign in to Vantis.</h2>
      <p class="gauth-p">Pick up where you left off, or create your account on first sign-in.</p>
      <div id="privy-root"><div class="pv-note">Preparing sign-in&hellip;</div></div>
      <a class="gback" href="/">&larr; Back to overview</a>
      <p class="legal gauth-legal">${HONESTY}</p>
    </div>
  </main>
</div>

<script>window.__PRIVY = { appId: ${JSON.stringify(privy.appId)}, mode: "login", next: ${JSON.stringify(next)} };</script>
<script type="module" src="/assets/${privy.islandFile}"></script>
</body>
</html>`;
}

export function onboardHtml(
  providers: { twitter: boolean; github: boolean; linkedin: boolean },
  privy?: { appId: string; islandFile: string },
  opts?: { account?: boolean } // account = the persistent home for connections, post-onboarding
): string {
  const account = !!opts?.account;
  const row = (
    id: string,
    name: string,
    note: string,
    required: boolean,
    ready: boolean
  ) => `
      <a href="/oauth/connect/${id}" class="prow${ready ? "" : " prow--off"}" id="${id}-row">
        <div class="prow-l">
          <div class="prow-n">${name}</div>
          <div class="prow-d">${note}</div>
        </div>
        <div class="prow-r">
          ${required ? '<span class="ptag ptag--req">Required</span>' : '<span class="ptag">Optional</span>'}
          ${ready ? `<span class="ptag ptag--go">Connect</span>` : '<span class="ptag ptag--soon">Opening soon</span>'}
        </div>
      </a>`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Get your card — Vantis Cards</title>
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<style>
${SYSTEM_CSS}
.shell { max-width:620px; margin:0 auto; padding:64px 24px 80px; }
.prow {
  display:flex; align-items:center; justify-content:space-between; gap:16px;
  padding:20px; border:1px solid var(--line); border-radius:16px; background:var(--white);
  margin-bottom:12px; transition:border-color .16s var(--ease), transform .16s var(--ease);
}
.prow:hover { border-color:var(--ink); transform:translateY(-1px); }
.prow--off { opacity:.55; pointer-events:none; }
.prow-n { font-family:var(--display); font-size:17px; font-weight:700; }
.prow-d { font-size:13.5px; color:var(--body); margin-top:3px; }
.prow-r { display:flex; align-items:center; gap:8px; flex-shrink:0; }
.ptag { font-family:var(--mono); font-size:10px; letter-spacing:0.1em; text-transform:uppercase; color:var(--muted); border:1px solid var(--line); padding:5px 9px; border-radius:20px; white-space:nowrap; }
.ptag--req { color:var(--ink); border-color:var(--line-strong); }
.ptag--go { background:var(--ink); color:var(--green); border-color:var(--ink); }
.ptag--soon { color:#8A6D3B; border-color:#E8DCC0; background:#FDF8EC; }
.panel { border:1px solid var(--line); border-radius:16px; padding:22px; background:var(--wash); margin-top:26px; }
.panel h3 { font-size:16px; margin-bottom:10px; }
.panel p { font-size:14px; color:var(--body); line-height:1.65; }
.panel .hl { background:var(--green); color:var(--ink); padding:0 5px; font-weight:600; }
.divider { display:flex; align-items:center; gap:14px; margin:22px 0 14px; }
.divider::before, .divider::after { content:''; flex:1; height:1px; background:var(--line); }
.divider span { font-family:var(--mono); font-size:11px; letter-spacing:0.12em; text-transform:uppercase; color:var(--muted); }
${PV_CSS}
</style>
</head>
<body>
<nav class="nav">
  <div class="nav-in">
    <a class="brand" href="/">${V_MARK} VANTIS <span class="sub">CARDS</span></a>
    <div class="navactions"><a class="arrowlink" href="/">Back to overview</a></div>
  </div>
</nav>

<div class="shell">
  <div class="eyebrow eyebrow--green">${account ? "Vantis account" : "Step 1 of 2"}</div>
  <h1 style="font-size:clamp(30px,4.4vw,42px); margin:14px 0 14px;">${account ? "Your account" : privy ? "Verify your identity" : "Connect your profiles"}</h1>
  <p class="lede" style="margin-bottom:32px;">${
    account
      ? "Your connected accounts and embedded wallet live here &mdash; they stay with you after onboarding. Link more whenever you like."
      : privy
      ? "You are signed in. Cards are issued against a verified X account &mdash; one each, which is what keeps bots out. Linking GitHub is optional; more real signal usually means a larger grant."
      : "X sign-in verifies who you are. GitHub and LinkedIn are optional &mdash; each one gives the scoring agent more real signal, which usually means a larger grant."
  }</p>

${
  privy
    ? `  <div id="privy-root" class="pv-box"><div class="pv-note">Preparing sign-in&hellip;</div></div>`
    : `${row("twitter", "X / Twitter", "Identity and anti-bot check. This is the one that signs you in.", true, providers.twitter)}

  <div class="divider"><span>Raise your score</span></div>

${row("github", "GitHub", "Repositories, languages and contribution activity.", false, providers.github)}
${row("linkedin", "LinkedIn", "Role, company and industry signals.", false, providers.linkedin)}`
}

  <div class="panel">
    <h3>What you get</h3>
    <p><span class="hl">up to $25 in $VANTIS credits</span>, an OpenAI-compatible API key, and a one-of-one card. Credits are spent on real inference with DeepSeek V4 Flash 0731 &mdash; every call retires $VANTIS at the live market price.</p>
  </div>

  <p class="legal" style="margin-top:26px;">${HONESTY}</p>
</div>

${
  privy
    ? `<script>window.__PRIVY = { appId: ${JSON.stringify(privy.appId)}, mode: "onboard" };</script>
<script type="module" src="/assets/${privy.islandFile}"></script>`
    : `<script>
const providers = ${JSON.stringify(providers)};
const uid = new URLSearchParams(window.location.search).get('uid');
if (uid) {
  for (const p of ['github','linkedin']) {
    if (!providers[p]) continue;
    const row = document.getElementById(p + '-row');
    row.classList.remove('prow--off');
    row.href = '/oauth/connect/' + p + '?uid=' + encodeURIComponent(uid);
  }
}
</script>`
}
</body>
</html>`;
}

// ─── Reserve: the viral front door. Type your handle, hear the keys, watch
// the card fill, hold your place — claiming happens with X sign-in. ───
export function reserveHtml(prefill: string | null, opts?: { signedIn?: boolean }): string {
  const art = cardObject({
    handle: "@yourhandle",
    tierLabel: "—",
    grantStr: "",
    stamp: "AUGUST / 2026",
    variant: "signal",
  });

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Reserve your card — Vantis Cards</title>
<meta name="description" content="Type your X handle, reserve your one-of-one Vantis Card, and claim it with X sign-in. An AI agent scores your public record into up to $25 of inference credits.">
<meta property="og:title" content="Reserve your Vantis Card">
<meta property="og:description" content="One-of-one cards, claimed with X sign-in. An agent scores your public record into up to $25 of inference credits.">
<meta property="og:image" content="https://card.vantis.sh/reserve/og.png?v=1">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="https://card.vantis.sh/reserve/og.png?v=1">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<style>
${SYSTEM_CSS}
${CARD_CSS}
.shell { max-width:640px; margin:0 auto; padding:40px 24px 80px; text-align:center; }
.rsv-card { display:flex; justify-content:center; margin:8px 0 34px; --card-w:min(430px,94vw); }
.rsv-h { font-family:var(--display); font-size:clamp(34px,5.4vw,54px); font-weight:700; letter-spacing:-0.025em; line-height:1.12; margin:0 0 12px; }
.rsv-lede { font-size:15.5px; color:var(--body); line-height:1.65; max-width:460px; margin:0 auto 30px; }
.rsv-box { position:relative; max-width:430px; margin:0 auto; }
.rsv-input { width:100%; font-family:var(--display); font-size:20px; font-weight:700; letter-spacing:0.01em;
  padding:17px 44px 17px 46px; border:1.5px solid var(--line-strong); border-radius:999px; background:var(--white);
  outline:none; transition:border-color .16s var(--ease), box-shadow .16s var(--ease); }
.rsv-input:focus { border-color:var(--ink); box-shadow:0 0 0 4px rgba(9,248,117,.18); }
.rsv-at { position:absolute; left:22px; top:50%; transform:translateY(-50%); font-family:var(--display); font-size:20px; font-weight:700; color:var(--muted); pointer-events:none; }
.rsv-tick { position:absolute; right:20px; top:50%; transform:translateY(-50%); font-size:15px; color:var(--green-ink); opacity:0; transition:opacity .16s; }
.rsv-state { font-family:var(--mono); font-size:12px; letter-spacing:0.06em; margin:14px 0 22px; min-height:18px; color:var(--muted); }
.rsv-state.ok { color:var(--green-ink); }
.rsv-state.warn { color:#8A6D3B; }
.rsv-btn { display:inline-flex; align-items:center; justify-content:center; gap:8px; min-width:min(430px,94vw); padding:17px 26px;
  border-radius:999px; border:0; background:var(--ink); color:var(--green); font-family:var(--display); font-size:16.5px; font-weight:700;
  cursor:pointer; transition:transform .16s var(--ease), opacity .16s; }
.rsv-btn:active { transform:scale(.985); }
.rsv-btn:disabled { opacity:.45; cursor:default; }
.rsv-note { font-size:12.5px; color:var(--muted); margin-top:16px; }
.rsv-legal { margin-top:30px; }
@media (max-width:520px) { .rsv-btn { min-width:100%; } }
</style>
</head>
<body>
<nav class="nav">
  <div class="nav-in">
    <a class="brand" href="/">${V_MARK} VANTIS <span class="sub">CARDS</span></a>
    <div class="navactions">${opts?.signedIn
      ? `<a class="btn btn--ghost btn--sm" href="/account">Account</a>`
      : `<a class="btn btn--ghost btn--sm" href="/login">Sign in</a>`}</div>
  </div>
</nav>

<div class="shell">
  <div class="rsv-card" id="rsv-card">${art}</div>
  <h1 class="rsv-h">Reserve your<br>Vantis Card.</h1>
  <p class="rsv-lede">Type your X handle. Claiming happens with X sign-in &mdash; the agent reads your public record and scores your grant.</p>

  <div class="rsv-box">
    <span class="rsv-at">@</span>
    <input class="rsv-input" id="handle" maxlength="15" autocomplete="off" spellcheck="false" placeholder="yourhandle" value="${esc(prefill || "")}" aria-label="Your X handle">
    <span class="rsv-tick" id="tick">&#10003;</span>
  </div>
  <div class="rsv-state" id="state"></div>

  <button class="rsv-btn" id="reserve" disabled>Reserve</button>
  <p class="rsv-note">A reservation marks your handle. The card itself is claimed by signing in with X &mdash; it takes about a minute.</p>


  <p class="legal rsv-legal">${HONESTY} Vantis may decline any reservation.</p>
</div>

<script>
const input = document.getElementById('handle');
const stateEl = document.getElementById('state');
const btn = document.getElementById('reserve');
const tick = document.getElementById('tick');
const scene = document.querySelector('#rsv-card .scene');

// ── Key sound: synthesized, no assets. Quiet mechanical ticks. ──
let AC = null;
function keySound() {
  try {
    if (!AC) AC = new (window.AudioContext || window.webkitAudioContext)();
    if (AC.state === 'suspended') AC.resume();
    const t = AC.currentTime;
    const len = Math.floor(AC.sampleRate * 0.045);
    const buf = AC.createBuffer(1, len, AC.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2.6);
    const src = AC.createBufferSource(); src.buffer = buf;
    const bp = AC.createBiquadFilter(); bp.type = 'bandpass';
    bp.frequency.value = 1900 + Math.random() * 1400; bp.Q.value = 1.1;
    const g = AC.createGain(); g.gain.setValueAtTime(0.14, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.05);
    src.connect(bp); bp.connect(g); g.connect(AC.destination);
    src.start(t);
  } catch (e) {}
}

// ── Live card fill ──
function fillHandle(h) {
  const shown = '@' + (h || 'yourhandle');
  const eh = scene.querySelector('.chandle');
  eh.textContent = shown;
  eh.className = 'chandle' + (shown.length > 21 ? ' xlong' : shown.length > 15 ? ' long' : '');
  scene.querySelector('.curl').textContent = 'card.vantis.sh/' + (h || 'yourhandle');
}

// ── Availability, debounced ──
let deb = null, lastOk = false;
function setState(cls, text) { stateEl.className = 'rsv-state' + (cls ? ' ' + cls : ''); stateEl.textContent = text; }
async function check() {
  const h = input.value.trim().replace(/^@/, '');
  lastOk = false; btn.disabled = true; tick.style.opacity = '0';
  if (!h) { setState('', ''); btn.textContent = 'Reserve'; return; }
  if (!/^[A-Za-z0-9_]{1,15}$/.test(h)) { setState('warn', 'letters, numbers and underscore only — max 15'); btn.textContent = 'Reserve'; return; }
  try {
    const r = await fetch('/api/reserve/check?handle=' + encodeURIComponent(h));
    const j = await r.json();
    if (j.state === 'carded') { setState('warn', '@' + h + ' is already carded'); btn.textContent = 'Reserve'; return; }
    if (j.state === 'reserved') { setState('ok', '@' + h + ' is reserved — sign in with X to claim it'); lastOk = true; btn.disabled = false; btn.textContent = 'Claim @' + h; tick.style.opacity = '1'; return; }
    setState('ok', '@' + h + ' is unclaimed');
    lastOk = true; btn.disabled = false; btn.textContent = 'Reserve @' + h; tick.style.opacity = '1';
  } catch (e) { setState('', ''); }
}
input.addEventListener('input', () => {
  fillHandle(input.value.trim().replace(/^@/, ''));
  clearTimeout(deb); deb = setTimeout(check, 240);
});
input.addEventListener('keydown', (e) => { if (e.key.length === 1 || e.key === 'Backspace') keySound(); });

btn.addEventListener('click', async () => {
  if (!lastOk) return;
  const h = input.value.trim().replace(/^@/, '');
  // Reserving IS signing in — the reservation records, the button opens the
  // Privy gate immediately. No parking page (Luca: "it need literally sign
  // in"); the share moment lives on the minted-card ceremony instead.
  btn.disabled = true; btn.textContent = 'Opening…';
  try {
    await fetch('/api/reserve', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ handle: h }),
    });
  } catch (e) {}
  setTimeout(() => { window.location.href = '/login?next=%2Fonboard'; }, 450);
});

if (input.value) { fillHandle(input.value.trim().replace(/^@/, '')); check(); }
</script>
</body>
</html>`;
}

// ─── OG stage: 1200x630, static card front, shot once by headless chrome ───
export function ogViewHtml(card: any): string {
  const tier = tierInfo(card.tier);
  const grantStr = Number(card.grant_usd || 0).toFixed(2).replace(/\.00$/, "");
  const created = new Date((card.created_at || "").replace(" ", "T") + "Z");
  const stamp = isNaN(created.getTime()) ? "2026" : `${created.toLocaleString("en-US", { month: "long" }).toUpperCase()} / ${created.getFullYear()}`;
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="robots" content="noindex">
<style>
${SYSTEM_CSS}
${CARD_CSS}
html, body { width:1200px; height:630px; overflow:hidden; background:var(--wash); }
.og-stage { width:1200px; height:630px; display:flex; align-items:center; justify-content:center; position:relative; }
.og-stage .scene { --card-w:820px; }
/* freeze all card motion — this is a photograph */
.og-stage .scene::after { animation:none; }
.og-stage .float, .og-stage .flip { animation:none; transform:none; }
.og-stage .face.back { display:none; }
.og-brand { position:absolute; left:44px; top:36px; display:flex; align-items:center; gap:12px; font-family:var(--display); font-weight:700; font-size:22px; }
.og-brand svg { width:26px; height:26px; }
.og-brand .sub { color:var(--muted); font-weight:600; letter-spacing:0.14em; font-size:13px; }
.og-url { position:absolute; right:44px; bottom:34px; font-family:var(--mono); font-size:15px; color:var(--muted); }
</style>
</head>
<body>
<div class="og-stage">
  <div class="og-brand">${V_MARK} VANTIS <span class="sub">CARDS</span></div>
  ${cardObject({ handle: card.handle, tierLabel: tier.label, grantStr, stamp, variant: card.design_variant })}
  <div class="og-url">card.vantis.sh/${esc(String(card.handle || "").replace("@", ""))}</div>
</div>
</body>
</html>`;
}

// ─── Agent report: the permanent record of how a score was decided ───
export function reportHtml(
  user: any,
  card: any,
  enrichment: any | null
): string {
  const breakdown = user.score_breakdown ? JSON.parse(user.score_breakdown) : null;
  const log: any[] = user.score_log ? JSON.parse(user.score_log) : [];
  const LABELS: Record<string, string> = {
    technicalDepth: "Technical depth", influence: "Influence", purchasingPower: "Purchasing power",
    cryptoNative: "Crypto native", realWorldSignals: "Real-world signals",
  };
  const LANES: [string, string][] = [
    ["webPresence", "Web presence"], ["communityReputation", "Community reputation"],
    ["pressMentions", "Press and media"], ["companySignals", "Company signals"],
  ];
  const scoredOn = user.scored_at ? new Date(user.scored_at).toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" }) : null;

  const dimsHtml = breakdown
    ? `<div class="dims">${Object.keys(LABELS).map((k) => {
        const v = Number(breakdown[k] || 0);
        return `<div class="dim"><div class="dim-t">${LABELS[k]}</div><div class="dim-bar"><div class="dim-fill" style="width:${Math.min(100, (v / 20) * 100)}%"></div></div><div class="dim-v">${v}/20</div></div>`;
      }).join("")}</div>`
    : `<p class="rp-empty">No dimension breakdown on record &mdash; this score predates recorded runs.</p>`;

  const lanesHtml = enrichment
    ? LANES.map(([key, label]) => {
        const rows: any[] = Array.isArray(enrichment[key]) ? enrichment[key] : [];
        if (!rows.length) return `<div class="rp-lane"><div class="rp-lane-t">${label}</div><div class="rp-empty">Nothing found.</div></div>`;
        return `<div class="rp-lane"><div class="rp-lane-t">${label}</div>${rows.map((r) =>
          `<a class="rp-src" href="${esc(r.url || "#")}" target="_blank" rel="noopener noreferrer">${esc(String(r.title || r.url || "Untitled").slice(0, 90))}<span class="rp-arrow">&nearr;</span></a>`
        ).join("")}</div>`;
      }).join("")
    : `<p class="rp-empty">No research trail on record for this score.</p>`;

  const logHtml = log.length
    ? `<div class="aglog" style="max-height:none;">${log.map((e) =>
        `<div class="ln"><span class="tm">+${(Number(e.t || 0) / 1000).toFixed(1)}s</span><span${e.kind === "stage" || e.kind === "done" ? ' class="st"' : ""}>${esc(e.label)}</span></div>`
      ).join("")}</div>`
    : `<p class="rp-empty">No agent log on record &mdash; logs are kept for runs from August 8 onward.</p>`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Agent report — Vantis Cards</title>
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<style>
${SYSTEM_CSS}
.shell { max-width:640px; margin:0 auto; padding:64px 24px 80px; }
.scorehero { display:flex; align-items:baseline; gap:14px; }
.scorenum { font-family:var(--display); font-size:64px; font-weight:700; letter-spacing:-0.03em; line-height:1; }
.scoreof { font-family:var(--mono); font-size:14px; color:var(--muted); }
.tierpill { display:inline-block; background:var(--ink); color:var(--green); font-family:var(--display); font-size:12px; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; padding:6px 14px; border-radius:20px; }
.dims { display:grid; grid-template-columns:1fr; gap:9px; margin:22px 0 0; }
.dim { display:grid; grid-template-columns:150px 1fr 34px; align-items:center; gap:12px; font-size:13px; }
.dim-t { color:var(--body); }
.dim-bar { height:6px; background:var(--line); border-radius:999px; overflow:hidden; }
.dim-fill { height:100%; background:var(--green-ink); border-radius:999px; }
.dim-v { font-family:var(--mono); font-size:12px; color:var(--muted); text-align:right; }
@media (max-width:520px) { .dim { grid-template-columns:120px 1fr 30px; gap:9px; font-size:12px; } }
.rp-sec { margin-top:38px; }
.rp-sec h2 { font-family:var(--display); font-size:19px; font-weight:700; margin-bottom:6px; }
.rp-sub { font-size:13.5px; color:var(--body); line-height:1.6; margin-bottom:14px; }
.rp-lane { margin-bottom:16px; }
.rp-lane-t { font-family:var(--mono); font-size:11px; letter-spacing:0.12em; text-transform:uppercase; color:var(--muted); margin-bottom:7px; }
.rp-src { display:flex; align-items:center; justify-content:space-between; gap:12px; padding:11px 14px; border:1px solid var(--line); border-radius:12px; background:var(--white); margin-bottom:7px; font-size:13.5px; color:var(--ink); text-decoration:none; transition:border-color .16s var(--ease); }
.rp-src:hover { border-color:var(--ink); }
.rp-arrow { color:var(--muted); flex-shrink:0; }
.rp-empty { font-size:13.5px; color:var(--muted); }
.rp-reason { border-left:3px solid var(--green); padding:4px 0 4px 16px; font-size:15px; line-height:1.7; color:var(--body); }
.aglog { background:var(--ink); border-radius:14px; padding:16px 18px; text-align:left;
  font-family:var(--mono); font-size:12px; line-height:1.75; color:#D9D9D2; overflow-y:auto; }
.aglog .ln { display:flex; gap:10px; align-items:baseline; }
.aglog .tm { color:rgba(255,255,255,.34); flex-shrink:0; min-width:44px; }
.aglog .st { color:var(--green); font-weight:600; }
</style>
</head>
<body>
<nav class="nav">
  <div class="nav-in">
    <a class="brand" href="/">${V_MARK} VANTIS <span class="sub">CARDS</span></a>
    <div class="navactions"><a class="arrowlink" href="/account">Your account</a></div>
  </div>
</nav>

<div class="shell">
  <div class="eyebrow eyebrow--green">Agent report</div>
  <h1 style="font-size:clamp(30px,4.4vw,42px); margin:14px 0 10px;">How your score was decided</h1>
  <p class="lede" style="margin-bottom:30px;">@${esc(String(user.x_username || ""))}${scoredOn ? ` &middot; scored ${scoredOn}` : ""}</p>

  <div class="scorehero"><div class="scorenum">${Number(user.score || 0)}</div><div class="scoreof">/ 100</div></div>
  <div class="tierpill" style="margin-top:10px;">${esc(String(user.score_tier || "unscored"))}</div>
  ${card ? `<p style="font-family:var(--mono); font-size:13px; color:var(--muted); margin-top:12px;">Grant $${Number(card.grant_usd || 0).toFixed(2).replace(/\\.00$/, "")} &middot; card <a href="/card/${esc(String(card.handle || "").replace("@", ""))}" style="color:var(--green-ink);">${esc(String(card.handle || ""))}</a></p>` : ""}
  ${(5 - (user.score_reruns || 0)) > 0
    ? `<div style="margin-top:18px;"><a class="btn btn--ghost btn--sm" href="/onboard/score?uid=${esc(String(user.id))}&step=rescore">Re-run the agent</a><span style="font-family:var(--mono); font-size:11.5px; color:var(--muted); margin-left:12px;">${5 - (user.score_reruns || 0)} of 5 re-runs left &middot; refreshes the verdict, never the grant</span></div>`
    : `<p style="font-family:var(--mono); font-size:11.5px; color:var(--muted); margin-top:16px;">Re-runs used up &mdash; 5 of 5.</p>`}

  <div class="rp-sec">
    <h2>Five dimensions</h2>
    ${dimsHtml}
  </div>

  ${user.score_reasoning ? `<div class="rp-sec"><h2>The agent&rsquo;s verdict</h2><p class="rp-reason">${esc(user.score_reasoning)}</p></div>` : ""}

  <div class="rp-sec">
    <h2>What the research found</h2>
    <p class="rp-sub">Live web sources the agent read while scoring &mdash; each one opens in a new tab.</p>
    ${lanesHtml}
  </div>

  <div class="rp-sec">
    <h2>The run, as it happened</h2>
    <p class="rp-sub">The agent log from your scoring run, replayed.</p>
    ${logHtml}
  </div>

  <p class="legal" style="margin-top:34px;">${HONESTY}</p>
</div>
</body>
</html>`;
}

// ─── Score page ───
export function scorePageHtml(uid: string | null, step: string | null, providers: { github: boolean; linkedin: boolean }, orbIslandFile?: string | null): string {
  if (!uid) {
    return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Vantis Cards</title><style>${SYSTEM_CSS}</style></head><body><div style="max-width:520px;margin:0 auto;padding:80px 24px;text-align:center;"><h1 style="font-size:32px;">No session</h1><p class="lede" style="margin:12px 0 24px;">That link has expired. Start again and you will be back here in a moment.</p><a class="btn btn--primary" href="/onboard">Start over</a></div></body></html>`;
  }

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Scoring — Vantis Cards</title>
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<style>
${SYSTEM_CSS}
.shell { max-width:620px; margin:0 auto; padding:64px 24px 80px; }
.prow { display:flex; align-items:center; justify-content:space-between; gap:16px; padding:18px 20px; border:1px solid var(--line); border-radius:16px; background:var(--white); margin-bottom:12px; }
.prow:hover { border-color:var(--ink); }
.prow-n { font-family:var(--display); font-size:16px; font-weight:700; }
.prow-d { font-size:13px; color:var(--body); margin-top:2px; }
.ptag { font-family:var(--mono); font-size:10px; letter-spacing:0.1em; text-transform:uppercase; background:var(--ink); color:var(--green); padding:5px 9px; border-radius:20px; white-space:nowrap; }

/* scoring state */
.runner { border:1px solid var(--line); border-radius:20px; padding:34px; background:var(--wash); text-align:center; }
.bars { display:flex; flex-direction:column; gap:11px; margin:24px auto 0; max-width:340px; text-align:left; }
.brow { display:flex; align-items:center; gap:11px; font-size:13.5px; color:var(--body); }
.bdot { width:9px; height:9px; border-radius:50%; background:var(--line-strong); flex-shrink:0; }
.brow.on .bdot { background:var(--green-ink); animation:blip 1.1s ease-in-out infinite; }
.brow.done .bdot { background:var(--ink); }
.brow.on { color:var(--ink); font-weight:600; }
@keyframes blip { 0%,100% { opacity:1; transform:scale(1);} 50% { opacity:.4; transform:scale(.82);} }

/* the agent orb — thinking-orbs canvas, driven by real pipeline states */
.orbwrap { display:flex; justify-content:center; margin:6px auto 24px; min-height:96px; }
.orb-caption { font-family:var(--mono); font-size:11px; letter-spacing:0.14em; text-transform:uppercase; color:var(--muted); }

/* the reveal — verdict lands as a ceremony, not a form */
${CARD_CSS}
.rv { animation:rvin .55s var(--ease) backwards; animation-delay:var(--d, 0ms); }
@keyframes rvin { from { opacity:0; transform:translateY(16px); } }
.rv-h { font-family:var(--display); font-size:clamp(34px,5vw,48px); font-weight:700; letter-spacing:-0.02em; margin:12px 0 8px; }
.rv-card { display:flex; justify-content:center; margin:30px 0 6px; --card-w:min(370px,92vw); }
@media (prefers-reduced-motion: reduce) { .rv { animation:none; } }

/* social scan strip — each connected account gets its scan moment */
.socialscan { display:flex; gap:20px; justify-content:center; margin:0 0 24px; }
.ss { opacity:.38; text-align:center; transition:opacity .3s var(--ease); }
.ss-tile { width:58px; height:58px; border:1px solid var(--line-strong); border-radius:16px; background:var(--white);
  display:flex; align-items:center; justify-content:center; position:relative; overflow:hidden;
  transition:border-color .3s var(--ease), box-shadow .3s var(--ease); }
.ss-glyph { font-family:var(--display); font-size:22px; font-weight:700; }
.ss-tile svg { width:26px; height:26px; fill:var(--ink); }
.ss-n { font-family:var(--mono); font-size:9.5px; letter-spacing:0.12em; text-transform:uppercase; color:var(--muted); margin-top:8px; }
.ss.scan { opacity:1; }
.ss.scan .ss-tile { border-color:var(--green-ink); box-shadow:0 0 0 4px rgba(9,248,117,.14); }
.ss.scan .ss-tile::after { content:''; position:absolute; left:7px; right:7px; height:2px; background:var(--green);
  box-shadow:0 0 12px 2px rgba(9,248,117,.75); animation:ssscan 1.05s ease-in-out infinite; }
@keyframes ssscan { 0%,100% { top:12%; } 50% { top:84%; } }
.ss.done { opacity:1; }
.ss.done .ss-tile { border-color:var(--green-ink); }
.ss-badge { position:absolute; right:-6px; top:-6px; width:20px; height:20px; border-radius:50%; background:var(--green);
  color:var(--ink); font-size:12px; font-weight:700; line-height:20px; text-align:center; display:none; }
.ss.done .ss-badge { display:block; }
.ss.skip { opacity:.26; }
.ss.skip .ss-tile { border-style:dashed; }
@media (prefers-reduced-motion: reduce) { .ss.scan .ss-tile::after { animation:none; top:48%; } }

/* live agent log — real pipeline events, appended as they happen */
.aglog { background:var(--ink); border-radius:14px; padding:16px 18px; margin-top:18px; text-align:left;
  font-family:var(--mono); font-size:12px; line-height:1.75; color:#D9D9D2; max-height:280px; overflow-y:auto; }
.aglog .ln { display:flex; gap:10px; align-items:baseline; }
.aglog .tm { color:rgba(255,255,255,.34); flex-shrink:0; min-width:44px; }
.aglog .st { color:var(--green); font-weight:600; }
.aglog .caret { display:inline-block; width:7px; height:13px; background:var(--green); vertical-align:text-bottom; animation:caretblink 1s steps(1) infinite; }
.aglog .lnin { animation:lnin .28s var(--ease) backwards; }
@keyframes lnin { from { opacity:0; transform:translateY(7px); } }
@keyframes caretblink { 50% { opacity:0; } }
@media (prefers-reduced-motion: reduce) { .aglog .caret { animation:none; } .aglog .lnin { animation:none; } }

/* result */
.scorehero { display:flex; align-items:baseline; gap:14px; }
.scorenum { font-family:var(--display); font-size:64px; font-weight:700; letter-spacing:-0.03em; line-height:1; }
.scoreof { font-family:var(--mono); font-size:14px; color:var(--muted); }
.tierpill { display:inline-block; background:var(--ink); color:var(--green); font-family:var(--display); font-size:12px; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; padding:6px 14px; border-radius:20px; }
.dims { display:grid; grid-template-columns:1fr; gap:9px; margin:24px 0 0; }
.dim { display:grid; grid-template-columns:150px 1fr 34px; align-items:center; gap:12px; font-size:13px; }
.dim-t { color:var(--body); }
.dim-bar { height:6px; background:var(--line); border-radius:999px; overflow:hidden; }
.dim-fill { height:100%; background:var(--green-ink); border-radius:999px; width:0; transition:width .8s var(--ease); }
.dim-v { font-family:var(--mono); font-size:12px; color:var(--muted); text-align:right; }
.keybox { background:var(--ink); color:var(--green); font-family:var(--mono); font-size:12.5px; padding:15px 16px; border-radius:12px; word-break:break-all; margin-top:8px; }
.grantline { font-family:var(--display); font-size:24px; font-weight:700; color:var(--green-ink); }
@media (max-width:520px) { .dim { grid-template-columns:120px 1fr 30px; gap:9px; font-size:12px; } }
</style>
</head>
<body>
<nav class="nav">
  <div class="nav-in">
    <a class="brand" href="/">${V_MARK} VANTIS <span class="sub">CARDS</span></a>
    <div class="navactions"><a class="arrowlink" href="/">Overview</a></div>
  </div>
</nav>

<div class="shell">

  <div id="connect-more">
    <div class="eyebrow eyebrow--green">Step 2 of 2</div>
    <h1 style="font-size:clamp(30px,4.4vw,42px); margin:14px 0 14px;">Add signal, or score now</h1>
    <p class="lede" style="margin-bottom:28px;">Every profile you connect gives the agent more to work with. You can also stop here and be scored on X alone.</p>
    ${providers.github ? `<a href="/oauth/connect/github?uid=${esc(uid)}" class="prow"><div><div class="prow-n">GitHub</div><div class="prow-d">Repositories, languages, contribution activity.</div></div><span class="ptag">Connect</span></a>` : ""}
    ${providers.linkedin ? `<a href="/oauth/connect/linkedin?uid=${esc(uid)}" class="prow"><div><div class="prow-n">LinkedIn</div><div class="prow-d">Role, company and industry signals.</div></div><span class="ptag">Connect</span></a>` : ""}
    <div class="btnrow" style="margin-top:22px;">
      <button onclick="runScore()" class="btn btn--primary">Score me now</button>
    </div>
  </div>

  <div id="loading" style="display:none;">
    <div class="eyebrow eyebrow--green">Working</div>
    <h1 style="font-size:clamp(28px,4vw,38px); margin:14px 0 24px;">Reading the public record</h1>
    <div class="runner">
      <div class="orbwrap"><div id="orb-root"></div></div>
      <div class="socialscan">
        <div class="ss" id="ss-x"><div class="ss-tile"><span class="ss-glyph">&#120143;</span><span class="ss-badge">&#10003;</span></div><div class="ss-n">X</div></div>
        <div class="ss" id="ss-github"><div class="ss-tile"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z"/></svg><span class="ss-badge">&#10003;</span></div><div class="ss-n">GitHub</div></div>
        <div class="ss" id="ss-linkedin"><div class="ss-tile"><span class="ss-glyph">in</span><span class="ss-badge">&#10003;</span></div><div class="ss-n">LinkedIn</div></div>
      </div>
      <div class="bars">
        <div class="brow" id="b1"><span class="bdot"></span>Reading your connected profiles</div>
        <div class="brow" id="b2"><span class="bdot"></span>Searching the web for corroborating signal</div>
        <div class="brow" id="b3"><span class="bdot"></span>Scoring five dimensions on the rail</div>
        <div class="brow" id="b4"><span class="bdot"></span>Minting your card and key</div>
      </div>
      <div class="aglog" id="aglog"><div class="ln" id="caretln"><span class="tm">&middot;</span><span><span class="caret"></span></span></div></div>
    </div>
    <p class="legal" style="margin-top:20px; text-align:center;">This is the agent working live &mdash; usually under a minute.</p>
  </div>

  <div id="result" style="display:none;">
    <div class="rv" style="--d:0ms;">
      <div class="eyebrow eyebrow--green" id="rv-eyebrow">Card minted</div>
      <h1 class="rv-h" id="rv-title">Congratulations.</h1>
      <p class="lede" id="rv-sub"></p>
    </div>
    <div class="rv rv-card" style="--d:140ms;" id="rv-card">
${cardObject({ handle: "@—", tierLabel: "—", grantStr: "", stamp: "", variant: "ink" })}
    </div>
    <div class="rv" style="--d:320ms;">
    <div class="scorehero" style="margin:14px 0 10px;">
      <div class="scorenum" id="score">0</div>
      <div class="scoreof">/ 100</div>
    </div>
    <div class="tierpill" id="tier">&mdash;</div>
    </div>
    <div class="rv" style="--d:430ms;">
    <div class="dims" id="dims"></div>
    <p class="lede" id="reasoning" style="margin:22px 0 26px; font-size:15px;"></p>
    </div>

    <div class="rv" style="--d:540ms; border-top:1px solid var(--line); padding-top:22px;">
      <div class="grantline" id="grant">&mdash;</div>
      <div style="font-family:var(--mono); font-size:12.5px; color:var(--muted); margin-top:4px;" id="grant-v"></div>
    </div>

    <div class="rv" style="--d:650ms; margin-top:24px;" id="keysec">
      <div class="eyebrow">Your API key</div>
      <div class="keybox" id="api-key">&mdash;</div>
      <p style="font-size:12.5px; color:var(--muted); margin-top:8px;">Send it as <span style="font-family:var(--mono)">Authorization: Bearer &lt;key&gt;</span> to <span style="font-family:var(--mono)">card.vantis.sh/v1/chat/completions</span>. Copy it now &mdash; this is the only time it is shown in full.</p>
    </div>

    <div class="rv btnrow" style="--d:760ms; margin-top:28px;">
      <a class="btn btn--primary" id="card-link" href="#">View your card</a>
      <a class="btn btn--ghost" id="share-btn" href="#">Share on X</a>
      <a class="btn btn--ghost" href="/report">Agent report</a>
    </div>
  </div>

  <p class="legal" style="margin-top:34px;">${HONESTY}</p>
</div>

<script>
const uid = ${JSON.stringify(uid)};
const step = ${JSON.stringify(step || "")};
const CV = ${JSON.stringify(CARD_VARIANTS)};
const isRerun = step === 'rescore';
const show = (id, on) => { document.getElementById(id).style.display = on ? 'block' : 'none'; };
// Orb choreography: the pipeline's real stages pick the agent's verb.
const setOrb = (s) => { window.__orbLast = s; window.dispatchEvent(new CustomEvent('orbstate', { detail: s })); };
const ORB_BY_STAGE = { 1:'listening', 2:'searching', 3:'solving', 4:'shaping' };

function stage(n) {
  for (let i = 1; i <= 4; i++) {
    const el = document.getElementById('b' + i);
    el.classList.toggle('on', i === n);
    el.classList.toggle('done', i < n);
  }
}

// The log renders REAL pipeline events polled from /onboard/progress — the
// stage rows flip when the server says so, not on a timer.
let rendered = 0, polling = null, runDone = false;
function fmtT(ms) { return '+' + (ms / 1000).toFixed(1) + 's'; }
function appendLog(ev) {
  const log = document.getElementById('aglog');
  const caret = document.getElementById('caretln');
  const ln = document.createElement('div');
  ln.className = 'ln lnin';
  const tm = document.createElement('span'); tm.className = 'tm'; tm.textContent = fmtT(ev.t);
  const tx = document.createElement('span'); tx.textContent = ev.label;
  if (ev.kind === 'stage' || ev.kind === 'done') tx.className = 'st';
  ln.appendChild(tm); ln.appendChild(tx);
  log.insertBefore(ln, caret);
  log.scrollTo({ top: log.scrollHeight, behavior: 'smooth' });
}
// Each social gets its scan moment: the truth stream (log) is immediate,
// while the strip queues ~1.5s of scanner per linked account so reading
// your profiles is something you can watch, not a flash.
const scanQ = []; let scanBusy = false;
function enqueueScan(icon, skipped) {
  scanQ.push({ icon, skipped });
  drainScans();
}
function drainScans() {
  if (scanBusy) return;
  const next = scanQ.shift();
  if (!next) return;
  scanBusy = true;
  const el = document.getElementById('ss-' + next.icon);
  if (!el) { scanBusy = false; drainScans(); return; }
  if (next.skipped) {
    el.classList.add('skip');
    setTimeout(() => { scanBusy = false; drainScans(); }, 500);
  } else {
    el.classList.add('scan');
    setTimeout(() => {
      el.classList.remove('scan');
      el.classList.add('done');
      scanBusy = false; drainScans();
    }, 1500);
  }
}

let firstPoll = true;
async function pollProgress() {
  try {
    // fresh=1 on the opening poll clears a FINISHED previous run server-side,
    // so a re-run never replays the old log or desyncs the event index.
    const r = await fetch('/onboard/progress/' + encodeURIComponent(uid) + (firstPoll ? '?fresh=1' : ''));
    firstPoll = false;
    if (!r.ok) return;
    const p = await r.json();
    if (p.done) runDone = true;
    for (; rendered < p.events.length; rendered++) {
      const ev = p.events[rendered];
      appendLog(ev);
      if (ev.icon) enqueueScan(ev.icon, / not linked/.test(ev.label));
      if (ev.stage) {
        stage(ev.kind === 'done' ? 5 : ev.stage);
        setOrb(ev.kind === 'done' ? 'breathing' : (ORB_BY_STAGE[ev.stage] || 'working'));
      }
    }
  } catch (e) {}
}
function stopPolling() {
  if (polling) { clearInterval(polling); polling = null; }
  document.getElementById('caretln').style.display = 'none';
}

async function runScore() {
  show('connect-more', false); show('result', false); show('loading', true);
  stage(1);
  setOrb('connecting');
  rendered = 0;
  runDone = false;
  // The box speaks immediately — a live feed should never open silent.
  appendLog({ t: 0, kind: 'log', label: isRerun ? 'Agent connected — re-reading your record' : 'Agent connected — opening your record' });
  polling = setInterval(pollProgress, 500);
  pollProgress();

  try {
    const res = await fetch('/onboard/score', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ uid, rerun: isRerun }),
    });
    let data = await res.json();
    if (data.error) throw new Error(data.error);
    // The POST only STARTS the run — no long request for a proxy to kill.
    // The poll loop we already watch reports done; then collect the verdict.
    if (data.started) {
      while (!runDone) { await new Promise(r => setTimeout(r, 450)); await pollProgress(); }
      let rd = null;
      for (let i = 0; i < 12; i++) {
        const rr = await fetch('/onboard/result/' + encodeURIComponent(uid));
        if (rr.status !== 202) { rd = await rr.json(); break; }
        await new Promise(r => setTimeout(r, 300));
      }
      if (!rd || rd.error) throw new Error((rd && rd.error) || 'result_unavailable');
      data = rd;
    }
    await pollProgress();
    stopPolling();

    show('loading', false); show('result', true);

    // The ceremony: card fills from the verdict, celebration bursts once.
    document.getElementById('rv-eyebrow').textContent = data.rerun ? 'Verdict refreshed' : 'Card minted';
    document.getElementById('rv-title').textContent = data.rerun ? 'The agent has spoken.' : 'Congratulations.';
    document.getElementById('rv-sub').textContent = data.rerun
      ? 'A fresh read of your public record — grant and key unchanged.'
      : 'One of one, scored from your real record — welcome to the rail.';
    fillCard(data);
    setTimeout(fireConfetti, 300);

    const n = document.getElementById('score');
    const target = data.score || 0;
    let cur = 0;
    const t0 = performance.now();
    (function tick(now){
      const p = Math.min(1, (now - t0) / 900);
      cur = Math.round(target * (1 - Math.pow(1 - p, 3)));
      n.textContent = cur;
      if (p < 1) requestAnimationFrame(tick);
    })(t0);

    document.getElementById('tier').textContent = data.tier;
    document.getElementById('grant').textContent = data.rerun
      ? '$' + data.grantUsd + ' — granted at issuance, unchanged'
      : '$' + data.grantUsd + ' in $VANTIS credits';
    document.getElementById('grant-v').textContent = data.rerun
      ? 'Re-runs left: ' + (data.reruns_left ?? 0) + ' of 5'
      : '≈ ' + Number(data.grantVantis).toLocaleString(undefined,{maximumFractionDigits:0}) + ' VANTIS at $' + Number(data.vantisPrice).toFixed(6);
    document.getElementById('reasoning').textContent = data.reasoning || '';
    if (data.rerun) {
      show('keysec', false); // the existing key keeps working; never reprint it
    } else {
      document.getElementById('api-key').textContent = data.apiKey || 'Error generating key';
    }

    const LABELS = { technicalDepth:'Technical depth', influence:'Influence', purchasingPower:'Purchasing power', cryptoNative:'Crypto native', realWorldSignals:'Real-world signals' };
    const wrap = document.getElementById('dims');
    wrap.innerHTML = Object.keys(LABELS).map(function(k){
      const v = (data.breakdown && data.breakdown[k]) || 0;
      return '<div class="dim"><div class="dim-t">'+LABELS[k]+'</div><div class="dim-bar"><div class="dim-fill" data-w="'+(v/20*100)+'"></div></div><div class="dim-v">'+v+'/20</div></div>';
    }).join('');
    requestAnimationFrame(function(){
      wrap.querySelectorAll('.dim-fill').forEach(function(f){ f.style.width = f.dataset.w + '%'; });
    });

    const handle = ((data.card && data.card.handle) || '').replace('@','');
    document.getElementById('card-link').href = '/card/' + handle;
    // Share copy is PINNED token-free (card + score + credits only) and the
    // link carries ?via= attribution back to the card owner.
    const shareText = encodeURIComponent('The agent scored my public record ' + data.score + '/100 — ' + String(data.tier).toUpperCase() + ' tier, $' + data.grantUsd + ' in inference credits. One-of-one card:');
    document.getElementById('share-btn').href = 'https://twitter.com/intent/tweet?text=' + shareText + '&url=' + encodeURIComponent('https://card.vantis.sh/card/' + handle + '?via=' + handle);
  } catch (err) {
    stopPolling();
    show('loading', false); show('connect-more', true);
    alert('Scoring failed: ' + err.message + ' — please try again.');
  }
}

// Fill the pre-rendered card object with the verdict's real values.
function fillCard(data) {
  const scene = document.querySelector('#rv-card .scene');
  if (!scene || !data.card) return;
  const v = CV[data.card.designVariant] || CV.ink;
  scene.style.setProperty('--cbg', v.bg);
  scene.style.setProperty('--ctex', v.texture);
  scene.style.setProperty('--cfg', v.fg);
  scene.style.setProperty('--cacc', v.accent);
  scene.style.setProperty('--csub', v.sub);
  scene.style.setProperty('--cedge', v.edge);
  const handle = String(data.card.handle || '');
  const bare = handle.replace('@', '');
  const eh = scene.querySelector('.chandle');
  eh.textContent = handle;
  eh.className = 'chandle' + (handle.length > 21 ? ' xlong' : handle.length > 15 ? ' long' : '');
  const now = new Date();
  const stamp = now.toLocaleString('en-US', { month: 'long' }).toUpperCase() + ' / ' + now.getFullYear();
  scene.querySelector('.cdate').textContent = stamp;
  scene.querySelector('.curl').textContent = 'card.vantis.sh/' + bare;
  const vals = scene.querySelectorAll('.cvalue');
  if (vals[1]) vals[1].textContent = String(data.tier).charAt(0).toUpperCase() + String(data.tier).slice(1) + ' · $' + data.grantUsd;
  const back = scene.querySelector('.backinfo');
  if (back) back.innerHTML = '<div class="bh">VANTIS CARDS</div>card.vantis.sh/' + bare + '<br>ONE OF ONE · ' + stamp + '<br>Virtual identity card. Not a payment instrument.';
}

// One celebration burst from the card — brand dots and slips, then gone.
function fireConfetti() {
  if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const cv = document.createElement('canvas');
  cv.style.cssText = 'position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:60;';
  document.body.appendChild(cv);
  const ctx = cv.getContext('2d');
  const dpr = devicePixelRatio || 1;
  const W = cv.width = innerWidth * dpr, H = cv.height = innerHeight * dpr;
  const rect = document.getElementById('rv-card').getBoundingClientRect();
  const ox = (rect.left + rect.width / 2) * dpr, oy = (rect.top + rect.height / 2) * dpr;
  const COLORS = ['#09F875', '#0AA855', '#0B7A3E', '#0B0B0A'];
  const P = [];
  for (let i = 0; i < 130; i++) {
    const a = Math.random() * Math.PI * 2, sp = (220 + Math.random() * 420) * dpr;
    P.push({ x: ox, y: oy, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 260 * dpr,
      s: (2 + Math.random() * 3.5) * dpr, c: COLORS[i % 4], r: Math.random() * Math.PI,
      vr: (Math.random() - .5) * 8, rect: i % 3 === 0, life: 1.5 + Math.random() * .7, t: 0 });
  }
  let last = performance.now();
  (function tick(now) {
    const dt = Math.min(.05, (now - last) / 1000); last = now;
    ctx.clearRect(0, 0, W, H);
    let alive = 0;
    for (const p of P) {
      p.t += dt; if (p.t >= p.life) continue;
      alive++;
      p.vy += 1500 * dpr * dt; p.x += p.vx * dt; p.y += p.vy * dt; p.r += p.vr * dt;
      ctx.globalAlpha = Math.min(1, (p.life - p.t) / .4);
      ctx.fillStyle = p.c;
      if (p.rect) { ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r); ctx.fillRect(-p.s, -p.s * .45, p.s * 2, p.s * .9); ctx.restore(); }
      else { ctx.beginPath(); ctx.arc(p.x, p.y, p.s * .55, 0, 7); ctx.fill(); }
    }
    if (alive) requestAnimationFrame(tick); else cv.remove();
  })(last);
}

// Auto-run stays BELOW every declaration: runScore is hoisted but the let
// bindings above are not — calling from the top of the script threw a
// TemporalDeadZone ReferenceError after stage 1 lit, and the run never left
// the browser. Keep this line last.
if (step === 'score' || isRerun) runScore();
</script>
${orbIslandFile ? `<script type="module" src="/assets/${orbIslandFile}"></script>` : ""}
</body>
</html>`;
}

// ─── Card page ───
// The card is a physical object: brushed-metal face, holo chip, sweeping
// sheen, and a clean continuous 360° rotation revealing a designed back
// (canonical green, ink V). Hover pauses the spin. Pure CSS — no JS.
const CARD_VARIANTS: Record<string, { bg: string; texture: string; fg: string; accent: string; sub: string; edge: string }> = {
  ink: {
    bg: "linear-gradient(135deg,#0C0C0B 0%,#191917 55%,#0E0E0D 100%)",
    texture: "rgba(255,255,255,0.022)",
    fg: "#FFFFFF", accent: "#09F875", sub: "rgba(255,255,255,0.52)", edge: "rgba(255,255,255,0.10)",
  },
  carbon: {
    bg: "linear-gradient(135deg,#151515 0%,#2B2B29 60%,#1A1A18 100%)",
    texture: "rgba(255,255,255,0.02)",
    fg: "#E8E8E4", accent: "#09F875", sub: "rgba(232,232,228,0.5)", edge: "rgba(255,255,255,0.09)",
  },
  signal: {
    bg: "linear-gradient(135deg,#0AF77A 0%,#07DE6C 55%,#05C75F 100%)",
    texture: "rgba(10,10,10,0.05)",
    fg: "#0A0A0A", accent: "#0A0A0A", sub: "rgba(10,10,10,0.55)", edge: "rgba(10,10,10,0.14)",
  },
  mint: {
    bg: "linear-gradient(135deg,#F2FFF8 0%,#D3FFE7 60%,#BFFADA 100%)",
    texture: "rgba(10,10,10,0.035)",
    fg: "#0A0A0A", accent: "#0B7A3E", sub: "rgba(10,10,10,0.5)", edge: "rgba(10,10,10,0.10)",
  },
  mono: {
    bg: "linear-gradient(135deg,#FFFFFF 0%,#F1F1ED 60%,#E8E8E2 100%)",
    texture: "rgba(10,10,10,0.03)",
    fg: "#0A0A0A", accent: "#0B7A3E", sub: "rgba(10,10,10,0.5)", edge: "rgba(10,10,10,0.10)",
  },
};

export const CARD_CSS = `
/* ── 3D scene: ground shadow (static) → float (bob) → flip (360 spin) ── */
.scene { position:relative; width:var(--card-w, min(400px,94vw)); aspect-ratio:400/252; margin:0 auto 8px; perspective:1300px; }
.scene::after { content:''; position:absolute; left:10%; right:10%; bottom:-34px; height:30px; border-radius:50%;
  background:radial-gradient(ellipse at center, rgba(10,10,10,0.28) 0%, rgba(10,10,10,0.10) 55%, transparent 75%);
  filter:blur(6px); animation:shadowpulse 6s ease-in-out infinite; }
.float { position:absolute; inset:0; transform-style:preserve-3d; animation:floaty 6s ease-in-out infinite; }
.flip { position:absolute; inset:0; transform-style:preserve-3d; animation:spin 10s linear infinite; }
.scene:hover .flip, .scene:hover .float { animation-play-state:paused; }

@keyframes spin { from { transform:rotateY(0deg); } to { transform:rotateY(360deg); } }
@keyframes floaty { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-9px); } }
@keyframes shadowpulse { 0%,100% { transform:scale(1); opacity:1; } 50% { transform:scale(0.94); opacity:0.8; } }

.face { position:absolute; inset:0; border-radius:20px; overflow:hidden; backface-visibility:hidden; -webkit-backface-visibility:hidden;
  padding:24px; display:flex; flex-direction:column; justify-content:space-between; text-align:left;
  border:1px solid var(--cedge); box-shadow:inset 0 1px 0 rgba(255,255,255,0.14), inset 0 -1px 0 rgba(0,0,0,0.18); }
.front { color:var(--cfg);
  background:
    repeating-linear-gradient(105deg, var(--ctex) 0 1px, transparent 1px 5px),
    radial-gradient(120% 90% at 18% 0%, rgba(255,255,255,0.09) 0%, transparent 55%),
    var(--cbg); }
.back { transform:rotateY(180deg); color:#0A0A0A; padding:0;
  background:
    repeating-linear-gradient(105deg, rgba(10,10,10,0.045) 0 1px, transparent 1px 5px),
    radial-gradient(120% 90% at 80% 100%, rgba(255,255,255,0.22) 0%, transparent 55%),
    linear-gradient(135deg,#0AF77A 0%,#07DE6C 55%,#05C75F 100%); }

/* sheen sweep — a specular band gliding across each face */
.face::after { content:''; position:absolute; inset:-40%; pointer-events:none;
  background:linear-gradient(100deg, transparent 34%, rgba(255,255,255,0.14) 45%, rgba(255,255,255,0.34) 50%, rgba(255,255,255,0.14) 55%, transparent 66%);
  transform:translateX(-90%) rotate(8deg); animation:sheen 5.2s cubic-bezier(.4,0,.2,1) infinite; }
.back::after { animation-delay:2.6s; }
@keyframes sheen { 0% { transform:translateX(-90%) rotate(8deg); } 46% { transform:translateX(90%) rotate(8deg); } 100% { transform:translateX(90%) rotate(8deg); } }

/* holo chip */
.chip { width:44px; height:32px; border-radius:7px; position:relative; margin-top:4px;
  background:linear-gradient(120deg,#9BFFC9,#09F875 22%,#58D5FF 45%,#C79BFF 65%,#FFE79B 82%,#09F875);
  background-size:320% 320%; animation:holo 7s linear infinite;
  box-shadow:inset 0 1px 1px rgba(255,255,255,0.5), inset 0 -1px 1px rgba(0,0,0,0.25), 0 1px 2px rgba(0,0,0,0.3); }
.chip::before { content:''; position:absolute; inset:0; border-radius:7px;
  background:
    linear-gradient(to right, transparent 46%, rgba(10,10,10,0.35) 46%, rgba(10,10,10,0.35) 54%, transparent 54%),
    linear-gradient(to bottom, transparent 30%, rgba(10,10,10,0.35) 30%, rgba(10,10,10,0.35) 36%, transparent 36%, transparent 64%, rgba(10,10,10,0.35) 64%, rgba(10,10,10,0.35) 70%, transparent 70%); }
@keyframes holo { 0% { background-position:0% 50%; } 100% { background-position:320% 50%; } }

.ch { display:flex; justify-content:space-between; align-items:flex-start; z-index:1; position:relative; }
.clogo { font-family:var(--display); font-size:14px; font-weight:700; letter-spacing:0.08em; display:flex; align-items:center; gap:8px; }
.clogo .vmark { height:16px; color:var(--cacc); }
.cdate { font-family:var(--mono); font-size:11px; color:var(--csub); }
.chandle { font-family:var(--display); font-size:30px; font-weight:700; z-index:1; position:relative; letter-spacing:-0.01em; overflow-wrap:anywhere; }
.chandle.long { font-size:24px; }
.chandle.xlong { font-size:19px; }
.cf { display:flex; justify-content:space-between; align-items:flex-end; z-index:1; position:relative; }
.clabel { font-size:9px; color:var(--csub); text-transform:uppercase; letter-spacing:0.14em; }
.cvalue { font-size:12px; font-weight:600; margin-top:2px; }
.crarity { font-family:var(--mono); font-size:10px; color:var(--cacc); font-weight:700; letter-spacing:0.1em; }
.curl { font-family:var(--mono); font-size:10px; color:var(--csub); margin-top:4px; }

/* back layout */
.stripe { margin-top:26px; height:44px; background:linear-gradient(180deg,#111 0%,#1D1D1B 45%,#0C0C0B 100%);
  box-shadow:inset 0 1px 0 rgba(255,255,255,0.08); }
.backbody { flex:1; display:flex; justify-content:space-between; align-items:flex-end; padding:0 24px 20px; position:relative; }
.backinfo { font-family:var(--mono); font-size:10px; line-height:1.9; color:rgba(10,10,10,0.75); }
.backinfo .bh { font-family:var(--display); font-size:12px; font-weight:700; letter-spacing:0.08em; color:#0A0A0A; }
.backmark { height:104px; color:#0A0A0A; opacity:0.92; }
.backmark .vmark { height:100%; width:auto; }

@media (prefers-reduced-motion: reduce) {
  .flip, .float, .face::after, .chip, .scene::after { animation:none; }
}
`;

// The card object itself — used full-size on /card/:handle and as the hero
// visual on the landing page. Sized by its container via --card-w.
export function cardObject(o: {
  handle: string; tierLabel: string; grantStr: string; stamp: string; variant?: string;
}): string {
  const v = CARD_VARIANTS[o.variant || "ink"] || CARD_VARIANTS.ink;
  const handle = String(o.handle || "").replace("@", "");
  const cls = String(o.handle).length > 21 ? " xlong" : String(o.handle).length > 15 ? " long" : "";
  return `<div class="scene" style="--cbg:${v.bg}; --ctex:${v.texture}; --cfg:${v.fg}; --cacc:${v.accent}; --csub:${v.sub}; --cedge:${v.edge};">
    <div class="float"><div class="flip">
      <div class="face front">
        <div class="ch">
          <div class="clogo">${V_MARK} VANTIS</div>
          <div class="cdate">${esc(o.stamp)}</div>
        </div>
        <div class="chip"></div>
        <div class="chandle${cls}">${esc(o.handle)}</div>
        <div class="cf">
          <div>
            <div class="clabel">Identity</div>
            <div class="cvalue">Account &amp; Agent</div>
            <div class="curl">card.vantis.sh/${esc(handle)}</div>
          </div>
          <div style="text-align:right;">
            <div class="crarity">ONE OF ONE</div>
            <div class="clabel" style="margin-top:6px;">Tier</div>
            <div class="cvalue">${esc(o.tierLabel)}${o.grantStr ? ` · $${esc(o.grantStr)}` : ""}</div>
          </div>
        </div>
      </div>
      <div class="face back">
        <div class="stripe"></div>
        <div class="backbody">
          <div class="backinfo">
            <div class="bh">VANTIS CARDS</div>
            card.vantis.sh/${esc(handle)}<br>
            ONE OF ONE · ${esc(o.stamp)}<br>
            Virtual identity card. Not a payment instrument.
          </div>
          <div class="backmark">${V_MARK}</div>
        </div>
      </div>
    </div></div>
  </div>`;
}

export function cardHtml(card: any, opts: { vantisPrice: number; userBurned: number; balanceUsd: number; own?: boolean }): string {
  const tier = tierInfo(card.tier);
  const handle = String(card.handle || "").replace("@", "");
  const v = CARD_VARIANTS[card.design_variant] || CARD_VARIANTS.ink;
  const created = new Date((card.created_at || "").replace(" ", "T") + "Z");
  const stamp = isNaN(created.getTime())
    ? "2026"
    : `${created.toLocaleString("en-US", { month: "long" }).toUpperCase()} / ${created.getFullYear()}`;
  const grantVantis = card.grant_vantis || 0;
  const burnedStr = formatVantis(opts.userBurned || 0);
  const grantStr = Number(card.grant_usd || 0).toFixed(2).replace(/\.00$/, "");
  const handleCls = String(card.handle).length > 21 ? " xlong" : String(card.handle).length > 15 ? " long" : "";

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>@${esc(handle)} — Vantis Card</title>
<meta property="og:title" content="@${esc(handle)} — Vantis Card">
<meta property="og:description" content="One-of-one, ${esc(tier.label)} tier — $${esc(grantStr)} in inference credits, scored by an agent from the public record.">
<meta property="og:image" content="https://card.vantis.sh/card/${esc(handle)}/og.png?v=${esc(String(card.tier))}-${esc(grantStr)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="https://card.vantis.sh/card/${esc(handle)}/og.png?v=${esc(String(card.tier))}-${esc(grantStr)}">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<style>
${BASE_CSS}
body { display:flex; }
.wrap { margin:auto; text-align:center; padding:48px 16px; }

${CARD_CSS}
}

.headline { margin:44px 0 8px; font-family:var(--display); font-size:26px; font-weight:700; }
.tier-badge { display:inline-block; padding:4px 16px; border-radius:20px; font-family:var(--display); font-size:13px; font-weight:600; letter-spacing:0.06em; margin:6px 0; background:var(--ink); color:var(--green); text-transform:uppercase; }
.grant-amount { font-family:var(--display); font-size:20px; color:#0B7A3E; font-weight:700; margin:10px 0 2px; }
.grant-sub { font-family:var(--mono); font-size:12px; color:var(--dim); }
.burn-sub { font-size:13px; color:var(--dim); margin-top:10px; }
.burn-sub b { color:var(--ink); }
.share-btn { display:inline-flex; align-items:center; gap:8px; background:var(--ink); color:#fff; padding:12px 24px; border-radius:30px; text-decoration:none; font-family:var(--display); font-weight:600; margin-top:18px; }
.foot2 { max-width:520px; margin:32px auto 0; }
</style>
</head>
<body>
<div class="wrap">
  ${cardObject({ handle: card.handle, tierLabel: tier.label, grantStr, stamp, variant: card.design_variant })}

  <div class="headline">It&rsquo;s yours.</div>
  <div class="tier-badge">${esc(tier.label)}</div>
  <div class="grant-amount">$${esc(grantStr)} in $VANTIS credits</div>
  <div class="grant-sub">≈ ${esc(Math.round(grantVantis).toLocaleString())} VANTIS at grant</div>
  <div class="burn-sub">Burned so far: <b>${esc(burnedStr)} VANTIS</b> · every inference call on the key retires more.</div>

  <a href="https://twitter.com/intent/tweet?text=${encodeURIComponent(`My one-of-one Vantis Card — ${tier.label} tier, $${grantStr} in inference credits, scored from my public record.`)}&url=${encodeURIComponent(`https://card.vantis.sh/card/${handle}?via=${handle}`)}" class="share-btn">
    𝕏 Share on X
  </a>
  ${opts.own
    ? `<div style="margin-top:14px;"><a href="/account" style="color:var(--dim); font-size:13px; text-decoration:underline;">Manage your account &rarr;</a></div>`
    : `<div style="margin-top:14px;"><a href="/reserve" style="color:#0B7A3E; font-size:14px; font-weight:600; text-decoration:none;">Reserve yours &rarr;</a></div>`}

  <div class="foot2"><div class="footnote">${HONESTY}</div></div>
</div>
</body>
</html>`;
}

export function cardNotFoundHtml(handle: string): string {
  return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Card not found</title><style>${BASE_CSS} body{display:flex;} .c{margin:auto;text-align:center;} h1{font-family:var(--display);font-size:64px;} a.go{color:#0B7A3E;font-weight:600;text-decoration:none;}</style></head><body><div class="c"><h1>404</h1><p style="color:var(--dim);margin:10px 0 18px;">Card @${esc(handle)} not found</p><a class="go" href="/onboard">Get your card →</a></div></body></html>`;
}

export function providerPendingHtml(provider: string): string {
  return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Vantis Cards — ${esc(provider)} pending</title><style>${BASE_CSS} body{display:flex;} .c{margin:auto;text-align:center;max-width:420px;padding:24px;} h1{font-family:var(--display);font-size:22px;margin-bottom:10px;} p{color:var(--dim);font-size:14px;line-height:1.6;} a.go{display:inline-block;margin-top:18px;color:#0B7A3E;font-weight:600;text-decoration:none;}</style></head><body><div class="c"><h1>${esc(provider)} sign-in opens soon</h1><p>This provider&rsquo;s OAuth app is still being registered. X, GitHub and LinkedIn connections flip on one by one — check back shortly.</p><a class="go" href="/onboard">← Back to onboarding</a></div></body></html>`;
}
