// HTML pages — Vantis light system: canvas white, ink black, signal green
// #09F875, striped-V mark dark-on-green. Display face is Space Grotesk when
// available, falling back to the system stack.

import { existsSync } from "node:fs";
import { tierInfo } from "./credits";
import { formatVantis } from "./price";
import { SYSTEM_CSS, ARROW, V_MARK, appNav, onboardSteps, type NavViewer } from "./system";
import { codeBlock, CODE_CSS } from "./code";

// V mark now lives in system.ts beside appNav; re-exported for docs.ts.
export { V_MARK };

export const esc = (s: any) =>
  String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));

// NAV_BELL moved to system.ts beside appNav — one home for header chrome.

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

const HONESTY = `Virtual credits, not a token sale. Credits never convert to $VANTIS or any other token &mdash; no airdrop, now or later. Balances live in a database, are non-transferable, have no monetary value, and are redeemable only against AI inference on the Vantis rail. &ldquo;Burn&rdquo; is a metered ledger: the dollar cost of each call is converted to $VANTIS at the live market price and retired from your balance. Accrued totals are settled on-chain on a fixed weekly cycle &mdash; treasury $VANTIS destroyed from the public burn reserve, never tokens moving to or from users &mdash; tracked at <a href="https://vantis.sh/burns" target="_blank" rel="noopener">vantis.sh/burns</a>.`;

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
  zdr?: boolean;    // live route runs under required zero data retention
  // Signed-in state, read from the session cookie at render time.
  viewer?: { cardHandle: string | null };
  menuCard?: string; // pre-rendered navMenuPanel() for the account menu
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
  // "Zero data retention" appears ONLY while the live route actually runs
  // under required ZDR (d.zdr from resolveUpstream) — never as aspiration.
  const GUARANTEES = ["OpenAI-compatible", "Bearer auth", "SSE streaming", "Reasoning on by default", ...(d.zdr ? ["Zero data retention"] : []), "Billed on real token counts", "Six-decimal settlement", "One card per identity", "Price from the deepest DexScreener pool", "Off-chain burn ledger"];
  const TERMS: [string, string][] = [
    ["<b>A dollar balance</b> in a database, spendable on metered routes through this endpoint &mdash; inference today, developer tools as they open.", "Not a token sale, not an allocation, and not a claim on any $VANTIS supply."],
    ["<b>Non-transferable.</b> The balance is bound to your card and cannot be sent, sold or withdrawn.", "Not a wallet. Nothing is custodied for you and no private key is ever created."],
    ["<b>Granted free.</b> Scoring is the only qualification and there is nothing to purchase at any point.", "Not an investment, and not consideration for anything you hold."],
    ["<b>A virtual burn ledger.</b> Each call&rsquo;s dollar cost is converted to $VANTIS at the live market price and retired from your balance.", "Not a per-call on-chain event. Accrued totals settle weekly &mdash; treasury $VANTIS destroyed from the public burn reserve, never tokens moving to or from users."],
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
<meta name="description" content="Connect your profiles, get AI-scored, receive $VANTIS inference credits. Open-weights models at published prices — every billed call virtually burns $VANTIS at the live market price.">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<script defer src="/consent.js?v=1"></script>
<meta property="og:title" content="Vantis Cards">
<meta property="og:description" content="Get AI-scored, receive $VANTIS credits, build on the rail. Every call burns $VANTIS.">
<style>
${SYSTEM_CSS}
${CARD_CSS}
${API_MARQUEE_CSS}
${CODE_CSS}
${BURN_TOAST_CSS}

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
  <div class="announce-t"><b>DeepSeek V4 Flash 0731</b> is the only model on the rail &mdash; $0.14 in / $0.28 out per 1M tokens on the standard tier.</div>
  <a class="announce-cta" href="/reserve">Reserve your card</a>
  <button class="announce-x" id="announce-x" aria-label="Dismiss">&times;</button>
</div>

${appNav(d.viewer ?? null, "overview", { menuCard: d.menuCard })}

<header class="hero">
  <div class="wrap hero-grid">
    <div>
      <div class="eyebrow eyebrow--green">Vantis Cards</div>
      <h1>Get scored.<br>Get credits.<br>Burn <span class="mark">$VANTIS</span>.</h1>
      <p class="lede">An AI research agent reads your public builder profile and grants you up to $25 in $VANTIS inference credits. Spend them on inference today &mdash; and on developer tools like search and data APIs through the same balance as routes open. Every call retires $VANTIS at the live market price.</p>
      <div class="btnrow">
        <a class="btn btn--primary" href="/onboard">Get your card</a>
        <a class="btn btn--ghost" href="/docs">Read the docs</a>
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
        <p class="lede lede--onDark">Change the base URL and the key. Every buffered response &mdash; and every stream that asks for <span style="font-family:var(--mono);color:var(--green)">include_usage</span> &mdash; carries a <span style="font-family:var(--mono);color:var(--green)">vantis</span> block telling you exactly what the call cost, what it burned, and which model actually ran.</p>
        <div class="btnrow">
          <a class="btn btn--onDark" href="/onboard">Get a key</a>
          <a class="arrowlink arrowlink--onDark" href="/models">See the models ${ARROW}</a>
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
        <h2>Published prices, and a burn you can audit</h2>
        <p class="lede">Open weights at their vendor&rsquo;s published rate, the allow-listed frontier GPT family on the same key &mdash; and a burn ledger that moves with the market.</p>
      </div>
      <a class="arrowlink" href="/models">See all models ${ARROW}</a>
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
        <div class="eyebrow eyebrow--onDark">Default model</div>
        <h3 id="m-name">${esc(p?.label || p?.model || "DeepSeek V4 Flash 0731")}</h3>
        <p class="lede">What you get when you name no model &mdash; the cheapest tokens on the catalogue, billed to six decimal places. Off-catalogue ids are refused rather than quietly rerouted.</p>
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
        <p class="lede">We take the real cost of your call, convert it at the deepest-pool market price of $VANTIS, and retire that amount from your balance &mdash; recording the price snapshot with it. Per call it is a ledger entry; accrued totals settle on-chain weekly &mdash; treasury $VANTIS destroyed from the public burn reserve, nothing moving to or from your wallet.</p>
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

<section class="sec" id="catalog">
  <div class="sec-in" style="padding-top:56px; padding-bottom:56px;">
    ${apiMarqueeHtml()}
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
        <a href="/docs">Documentation</a>
        <a href="/models">Models</a>
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
      Virtual credits, not a token sale &mdash; non-transferable, no monetary value, redeemable only against AI inference on the Vantis rail. Per-call burn is a metered ledger, settled on-chain weekly from the public burn reserve &mdash; tracked at <a href="https://vantis.sh/burns" target="_blank" rel="noopener">vantis.sh/burns</a>.
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
${burnToastHtml()}
${BURN_TOAST_JS}
</body>
</html>`;
}

// ─── Onboard ───
// ─── The catalog carousel: one card, 3,000+ APIs. Chips carry real brand
// favicons where a self-hosted mark exists in public/logos/ (Luca ordered
// logos Aug 8; scripts/fetch-logos.ts), text fallback otherwise. The
// footer legal line covers names AND logos. Two counter-scrolling
// marquee rows, house style. ───
const API_ROSTER_A = ["Nansen", "Exa", "Brave Search", "Firecrawl", "Dune", "CoinGecko", "DefiLlama", "Alchemy", "Helius", "Etherscan", "The Graph", "Tavily", "Serper", "Jina"];
const API_ROSTER_B = ["ElevenLabs", "Deepgram", "AssemblyAI", "Replicate", "Together", "Groq", "OpenRouter", "Moralis", "OpenWeather", "Twilio", "Resend", "Pinecone", "Weaviate", "…and the rest of the catalog"];

export const API_MARQUEE_CSS = `
.apis { text-align:center; }
.apis-h { font-family:var(--display); font-size:clamp(24px,3.4vw,34px); font-weight:700; letter-spacing:-0.02em; margin-bottom:8px; }
.apis-h em { font-style:normal; background:var(--green); padding:0 6px; }
.apis-p { font-size:14.5px; color:var(--body); line-height:1.65; max-width:520px; margin:0 auto 24px; }
.mq { overflow:hidden; -webkit-mask-image:linear-gradient(90deg,transparent,#000 10%,#000 90%,transparent); mask-image:linear-gradient(90deg,transparent,#000 10%,#000 90%,transparent); margin-bottom:10px; }
.mq-track { display:flex; gap:10px; width:max-content; animation:mqscroll 46s linear infinite; }
.mq--rev .mq-track { animation:mqscroll 58s linear infinite reverse; }
.mq-chip { flex-shrink:0; display:inline-flex; align-items:center; gap:8px; font-family:var(--mono); font-size:12px; letter-spacing:0.04em; color:var(--ink); border:1px solid var(--line-strong); border-radius:999px; padding:7px 14px 7px 9px; background:var(--white); white-space:nowrap; }
.mq-chip img { width:20px; height:20px; border-radius:5px; display:block; }
.mq-chip--bare { padding-left:14px; }
@keyframes mqscroll { to { transform:translateX(-50%); } }
.apis-legal { font-size:11.5px; color:var(--muted); margin-top:14px; }
@media (prefers-reduced-motion: reduce) { .mq-track { animation:none; } .mq { overflow-x:auto; } }
`;

// Slim single-row variant for the reserve hero's bottom strip.
export function apiStripHtml(): string {
  const all = [...API_ROSTER_A, ...API_ROSTER_B];
  const chips = all.map((n) => {
    const slug = n.toLowerCase().replace(/[^a-z0-9]+/g, "");
    const hasLogo = existsSync(`public/logos/${slug}.png`);
    return hasLogo
      ? `<span class="mq-chip"><img src="/logos/${slug}.png" alt="" loading="lazy">${esc(n)}</span>`
      : `<span class="mq-chip mq-chip--bare">${esc(n)}</span>`;
  }).join("");
  return `<div class="mq"><div class="mq-track" style="animation-duration:64s;">${chips}${chips}</div></div>
  <p class="apis-legal" style="margin-top:10px;">Target catalog &mdash; routes open progressively. Names and logos are trademarks of their owners; no partnership implied.</p>`;
}

export function apiMarqueeHtml(): string {
  const chips = (names: string[]) => names.map((n) => {
    const slug = n.toLowerCase().replace(/[^a-z0-9]+/g, "");
    const hasLogo = existsSync(`public/logos/${slug}.png`);
    return hasLogo
      ? `<span class="mq-chip"><img src="/logos/${slug}.png" alt="" loading="lazy">${esc(n)}</span>`
      : `<span class="mq-chip mq-chip--bare">${esc(n)}</span>`;
  }).join("");
  // Two copies per track = seamless -50% loop.
  return `<div class="apis">
    <h2 class="apis-h">One card. <em>3,000+ APIs.</em></h2>
    <p class="apis-p">Inference today. Next, the metered catalog opens on the same balance &mdash; search, on-chain data, web crawling, voice, and the long tail of developer APIs.</p>
    <div class="mq"><div class="mq-track">${chips(API_ROSTER_A)}${chips(API_ROSTER_A)}</div></div>
    <div class="mq mq--rev"><div class="mq-track">${chips(API_ROSTER_B)}${chips(API_ROSTER_B)}</div></div>
    <p class="apis-legal">Target catalog &mdash; routes open progressively. Names and logos are examples and trademarks of their owners; no partnership implied.</p>
  </div>`;
}

// ── Live settlement toast: the ledger, surfaced. ─────────────────────
// A notification card that drops in top-right, under the nav's Sign in,
// when someone actually burns $VANTIS on the rail — truncated consumer
// wallet, amount, model, and an honest ticking age. REAL-TIME: primary
// feed is /burn/stream (SSE off the same in-process bus the cable rides —
// a settlement toasts the instant its ledger row lands; a new one replaces
// the current toast). /burn/stats stays as the on-load replay and the 60s
// polling fallback. Real rows only, never fabricated; the wallet is
// truncated server-side. Freshness rules keep it honest and calm: on load
// it replays up to 3 settlements from the last 45 minutes, falls back to
// the single newest if the ledger moved within a day, and stays silent
// beyond that — a quiet page beats advertising staleness. Click-through =
// the public settlement ledger; the dismiss lasts the session. The box
// sits below the measured nav bottom, so the /overview announce bar never
// collides; the consent banner lives in the opposite corner.
export const BURN_TOAST_CSS = `
.bt { position:fixed; right:20px; top:78px; z-index:55; width:min(400px, calc(100vw - 32px));
  background:var(--white); border:1px solid var(--line-strong); border-radius:16px;
  box-shadow:0 22px 60px -20px rgba(10,10,10,0.32); opacity:0; transform:translateY(-14px);
  transition:opacity .32s var(--ease), transform .32s var(--ease); pointer-events:none; }
.bt.on { opacity:1; transform:translateY(0); pointer-events:auto; }
.bt-link { display:flex; gap:13px; align-items:flex-start; padding:15px 42px 15px 15px; text-decoration:none; color:inherit; }
.bt-tile { flex:none; width:36px; height:36px; border-radius:10px; background:#E6FBEF; border:1px solid rgba(11,122,62,.25);
  display:flex; align-items:center; justify-content:center; margin-top:1px; }
.bt-tile img { width:16px; height:16px; display:block; }
.bt.fresh .bt-tile { animation:btp .8s var(--ease); }
@keyframes btp { 0% { box-shadow:0 0 0 0 rgba(9,248,117,.55); } 100% { box-shadow:0 0 0 16px rgba(9,248,117,0); } }
.bt-body { min-width:0; display:block; }
.bt-k { display:block; font-family:var(--mono); font-size:10px; letter-spacing:.12em; text-transform:uppercase; color:var(--muted); }
.bt-main { display:block; margin-top:5px; font-size:15px; color:var(--body); line-height:1.5; overflow-wrap:anywhere; }
.bt-wallet { font-family:var(--mono); font-size:13.5px; color:var(--ink); }
.bt-amt { font-family:var(--display); font-size:16.5px; font-weight:700; color:var(--green-ink); white-space:nowrap; }
.bt-sub { display:block; margin-top:4px; font-family:var(--mono); font-size:11.5px; color:var(--muted); overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
.bt-x { position:absolute; top:7px; right:7px; width:32px; height:32px; border:0; background:none; color:var(--muted);
  font-size:18px; line-height:1; cursor:pointer; border-radius:9px; }
.bt-x:hover { background:var(--wash); color:var(--ink); }
/* phones: snackbar at the bottom — pinned top-right it sat squarely on
   the hero card art (UX panel P3) */
@media (max-width:620px) { .bt { left:12px; right:12px; width:auto; top:auto; bottom:14px; transform:translateY(14px); } }
@media (prefers-reduced-motion: reduce) { .bt { transform:none; transition:opacity .3s; } .bt.fresh .bt-tile { animation:none; } }
`;

export function burnToastHtml(): string {
  return `<div class="bt" id="bt" role="complementary" aria-label="Recent settlement activity" hidden>
  <a class="bt-link" href="https://vantis.sh/statistics/payments/" target="_blank" rel="noopener" title="View the settlement ledger">
    <span class="bt-tile"><img src="/favicon.svg" alt=""></span>
    <span class="bt-body">
      <span class="bt-k">Settled on the rail &middot; <span id="bt-ago"></span></span>
      <span class="bt-main"><span class="bt-wallet" id="bt-wallet"></span> burned <b class="bt-amt" id="bt-amt"></b></span>
      <span class="bt-sub" id="bt-sub"></span>
    </span>
  </a>
  <button class="bt-x" id="bt-x" aria-label="Dismiss settlement activity">&times;</button>
</div>`;
}

// Inline client JS emitted through a TS template: keep it ESCAPE-FREE
// (no backslashes, backticks or dollar-brace) — see the console-tab trap.
export const BURN_TOAST_JS = `<script>
(function(){
  var box = document.getElementById("bt");
  if (!box) return;
  try { if (sessionStorage.getItem("vc-burntoast") === "off") return; } catch (e) {}
  var agoEl = document.getElementById("bt-ago"), wEl = document.getElementById("bt-wallet"),
      aEl = document.getElementById("bt-amt"), sEl = document.getElementById("bt-sub");
  var seen = {}, queue = [], showing = null, shownAt = 0, hovering = false, killed = false;
  var coolUntil = Date.now() + 2500;

  function ago(sec){
    if (sec < 60) return "just now";
    if (sec < 3600) { var m = Math.floor(sec / 60); return m + (m === 1 ? " min ago" : " mins ago"); }
    if (sec < 86400) { var h = Math.floor(sec / 3600); return h + (h === 1 ? " hr ago" : " hrs ago"); }
    var d = Math.floor(sec / 86400); return d + (d === 1 ? " day ago" : " days ago");
  }
  function fmtV(n){ n = Number(n || 0); return n >= 1000 ? n.toLocaleString("en-US", { maximumFractionDigits: 2 }) : n.toFixed(4); }
  // The same settlement arrives twice — instantly via the stream, later via
  // the poll — with timestamps that can straddle a second, so the key skips
  // ts. Identical repeated calls dedupe too; that only suppresses a toast
  // that would have looked fake anyway.
  function rowKey(r){ return r.consumer + "|" + r.vantis_burned + "|" + (r.tokens_in || 0) + "|" + (r.tokens_out || 0); }

  function place(){
    var nav = document.querySelector(".nav"), top = 14;
    if (nav) { var rct = nav.getBoundingClientRect(); top = Math.max(rct.bottom, 0) + 14; }
    box.style.top = top + "px";
  }
  function paint(r){
    var age = Math.max(0, Date.now() / 1000 - r.ts);
    agoEl.textContent = ago(age);
    wEl.textContent = r.consumer;
    aEl.textContent = fmtV(r.vantis_burned) + " $VANTIS";
    var toks = (r.tokens_in || 0) + (r.tokens_out || 0);
    sEl.textContent = (r.model || "inference") + (toks ? " · " + toks.toLocaleString("en-US") + " tokens" : "") + (r.agent ? " · " + r.agent : "");
    box.classList.toggle("fresh", age < 120);
    place();
    box.hidden = false;
    requestAnimationFrame(function(){ box.classList.add("on"); });
    showing = r; shownAt = Date.now();
  }
  function drop(cool){
    box.classList.remove("on");
    showing = null;
    coolUntil = Date.now() + cool;
    setTimeout(function(){ if (!showing) box.hidden = true; }, 350);
  }

  setInterval(function(){
    if (killed) return;
    var t = Date.now();
    if (showing) {
      agoEl.textContent = ago(Math.max(0, t / 1000 - showing.ts));
      place();
      if (!hovering && t - shownAt > 8000) drop(5000);
      return;
    }
    if (document.hidden || t < coolUntil || !queue.length) return;
    paint(queue.shift());
  }, 1000);

  function fresh(rows){
    var out = [], i;
    for (i = 0; i < rows.length; i++) {
      var r = rows[i];
      if (!r || !r.consumer || !r.ts || r.vantis_burned == null) continue;
      var k = rowKey(r);
      if (seen[k]) continue;
      seen[k] = 1;
      out.push(r);
    }
    return out;
  }
  function ingest(rows, first){
    var rowsFresh = fresh(rows || []), now = Date.now() / 1000, i;
    if (!rowsFresh.length) return;
    if (first) {
      var q = [];
      for (i = 0; i < rowsFresh.length && q.length < 3; i++) { if (now - rowsFresh[i].ts < 2700) q.push(rowsFresh[i]); }
      if (!q.length && now - rowsFresh[0].ts < 86400) q.push(rowsFresh[0]);
      queue = q;
    } else {
      var live = rowsFresh.slice(0, 3);
      live.reverse();
      queue = queue.concat(live).slice(-3);
    }
  }
  // A streamed settlement is THE live moment: it jumps the queue, and if a
  // toast is up it replaces it after a quick beat.
  function ingestLive(r){
    var rowsFresh = fresh([r]);
    if (!rowsFresh.length || killed) return;
    queue.unshift(rowsFresh[0]);
    queue = queue.slice(0, 3);
    if (showing && !hovering) drop(600);
  }

  function pull(first){
    fetch("/burn/stats").then(function(r){ return r.ok ? r.json() : null; })
      .then(function(d){ if (d) ingest(d.recent_burns || [], first); })
      .catch(function(){});
  }
  pull(true);
  setInterval(function(){ if (!document.hidden && !killed) pull(false); }, 60000);
  document.addEventListener("visibilitychange", function(){ if (!document.hidden && !killed) pull(false); });

  if (window.EventSource) {
    var es = new EventSource("/burn/stream");
    es.onmessage = function(ev){
      try {
        var e = JSON.parse(ev.data);
        if (e && e.t === "settle" && e.consumer) ingestLive(e);
      } catch (err) {}
    };
  }

  box.addEventListener("mouseenter", function(){ hovering = true; });
  box.addEventListener("mouseleave", function(){ hovering = false; });
  document.getElementById("bt-x").addEventListener("click", function(ev){
    ev.preventDefault();
    killed = true; queue = []; showing = null;
    box.classList.remove("on");
    setTimeout(function(){ box.hidden = true; }, 250);
    try { sessionStorage.setItem("vc-burntoast", "off"); } catch (e) {}
  });
})();
</script>`;

// ── DeepSeek is coming: the whale swims in. ──────────────────────────
// DeepSeek's mark IS a whale, so the teaser is the mark doing what whales
// do: an ambient swim across the reserve hero on a long sinuous
// offset-path — in at the top-left, along the whitespace, a dive behind
// the rotating card, out the other side — trailing a snake of halftone
// dots that shade from DeepSeek blue into Vantis green. The first pass is
// already mid-scene at first paint (negative animation delay), then one
// pass every ~44s: a moment, not a marquee. The stage is
// a fixed coordinate space (1440x760 desktop, 430x620 stacked) scaled to
// the hero width by a tiny script, so the path holds its shape at any
// viewport. Browsers without offset-path support (and reduced-motion
// users) never see a stuck whale — .ds-swim only displays inside
// @supports — and the static bay pill below carries the message instead.
export const DS_SEA_CSS = `
.hero-wrap { position:relative; }
.hgrid, .hstrip, .ds-bayrow { position:relative; z-index:1; }
.ds-sea { position:absolute; inset:0; overflow:hidden; z-index:0; pointer-events:none;
  -webkit-mask-image:linear-gradient(90deg,transparent 0,#000 90px,#000 calc(100% - 90px),transparent 100%);
  mask-image:linear-gradient(90deg,transparent 0,#000 90px,#000 calc(100% - 90px),transparent 100%); }
/* Hidden by dsFit on heroes too short for the top lane (short laptops):
   the whale would swim through the eyebrow, so restraint wins there. */
.ds-sea.ds-tight { display:none; }
.ds-stage { position:absolute; top:0; left:50%; width:1440px; height:760px;
  transform:translateX(-50%) translateY(var(--ds-y,0px)) scale(var(--ds-s,1)); transform-origin:top center; }
/* Entry/exit legs run far past the stage so the whale still enters from
   off-hero when the scale is clamped on wide viewports (the sea's edge
   mask fades the residual case on ultrawides).
   Choreography: dolphin-crest across the top lane → a full loop-the-loop
   in the open air above the card (four quarter-circle cubics, r=72 —
   offset-rotate:auto carries the whale upside down over the top of it;
   NOT in the right margin, where the sea's edge mask would ghost it) →
   confident dive behind the card → re-emerge → glide off. The NEGATIVE
   base delay starts the first pass mid-scene: the whale is already
   inside the hero, wake formed, on the first paint — no entrance wait. */
.ds-swim { position:absolute; top:0; left:0; display:none;
  offset-rotate:auto; offset-distance:0%;
  offset-path:path('M -660 62 C -450 46 -250 26 -90 42 C 130 10 340 82 580 44 C 730 20 820 30 880 56 C 940 78 988 104 988 160 C 988 200 1020 232 1060 232 C 1100 232 1132 200 1132 160 C 1132 120 1100 88 1060 88 C 1020 88 988 120 988 160 C 988 216 1020 280 1060 330 C 1096 372 1110 390 1140 420 C 1180 460 1260 500 1340 484 C 1420 468 1490 420 1570 380 C 1700 322 1950 300 2140 296');
  animation:ds-swim 44s linear infinite; animation-delay:calc(-3.3s + var(--ds-d,0s)); }
@supports (offset-path: path('M 0 0 L 1 1')) { .ds-swim { display:block; } }
@keyframes ds-swim { 0% { offset-distance:0%; } 34% { offset-distance:100%; } 100% { offset-distance:100%; } }
.ds-whale { width:72px; }
.ds-whale img { display:block; width:100%; height:auto; animation:ds-kick 1.9s ease-in-out infinite; }
@keyframes ds-kick { 0%,100% { transform:rotate(2.4deg) translateY(0); } 50% { transform:rotate(-2.8deg) translateY(-3px); } }
.ds-dot { border-radius:50%; background:var(--ds-c); width:var(--ds-r); height:var(--ds-r); opacity:var(--ds-o); }
@media (max-width:1000px) {
  /* Stacked layout: the card fills the width, so a behind-content swim
     would be invisible. Ride ABOVE instead — the little whale crossing
     the big green card IS the message, and it stays pointer-transparent.
     dsFit clamps the stage scale to 1.15 so tablet widths keep the path
     over the card instead of stretching it down onto the headline. */
  .ds-sea { z-index:2; }
  .ds-stage { width:430px; height:620px; }
  /* Phone pass carries its own acrobatics: a mini loop-the-loop (r=36)
     stamped right on the card face mid-crossing. */
  .ds-swim { offset-path:path('M -290 186 C -190 172 -120 150 -60 166 C 60 130 130 200 205 172 C 270 146 336 212 336 168 C 336 148 320 132 300 132 C 280 132 264 148 264 168 C 264 188 280 204 300 204 C 320 204 336 188 336 168 C 336 146 360 138 400 146 C 470 158 560 140 640 138 C 720 136 760 136 780 136'); }
  .ds-whale { width:40px; }
  /* Tail dots cross the green card face — green-on-green vanishes, ink reads. */
  i.ds-dot:nth-of-type(n+4) { --ds-c:#0A0A0A; opacity:.3; }
}
.ds-bayrow { display:flex; justify-content:center; padding:0 24px 14px; }
.ds-bay { display:inline-flex; align-items:center; gap:9px; border:1px solid var(--line-strong); border-radius:999px;
  background:var(--white); padding:8px 15px 8px 11px; text-decoration:none;
  transition:border-color .16s var(--ease), transform .16s var(--ease); }
.ds-bay:active { transform:scale(.97); }
@media (hover:hover) and (pointer:fine) { .ds-bay:hover { border-color:var(--ink); } }
.ds-bay img { width:19px; height:14px; display:block; animation:ds-bob 3.2s ease-in-out infinite; }
@keyframes ds-bob { 0%,100% { transform:translateY(0) rotate(0deg); } 50% { transform:translateY(-1.5px) rotate(-2deg); } }
.ds-bay-t { font-family:var(--mono); font-size:10.5px; font-weight:600; letter-spacing:0.13em; text-transform:uppercase; color:var(--ink); text-wrap:balance; }
.ds-bay-a { color:var(--muted); font-size:11px; }
@media (max-width:560px) { .ds-bay-t { font-size:9.5px; letter-spacing:0.1em; } }
@media (prefers-reduced-motion: reduce) { .ds-sea { display:none; } .ds-bay img, .ds-whale img { animation:none; } }
`;

// The swim layer: whale + 7-dot trail on the same path, each dot lagging
// a little further behind. Sizes shrink and colors hand off DeepSeek blue
// into the house green-ink (NOT raw #09F875 — brand green at tail-dot
// opacity is invisible on white), so the wake reads as DeepSeek flowing
// into Vantis.
export function dsSeaHtml(): string {
  const dots = [
    { r: 8, c: "#4D6BFE", o: 0.8, d: 0.16 },
    { r: 7, c: "#4569EF", o: 0.72, d: 0.34 },
    { r: 6, c: "#3576C9", o: 0.66, d: 0.54 },
    { r: 5.5, c: "#2782A0", o: 0.58, d: 0.76 },
    { r: 5, c: "#1A8A72", o: 0.5, d: 1.0 },
    { r: 4, c: "#10824F", o: 0.44, d: 1.26 },
    { r: 3.5, c: "#0B7A3E", o: 0.36, d: 1.54 },
  ].map((t) => `<i class="ds-swim ds-dot" style="--ds-r:${t.r}px; --ds-c:${t.c}; --ds-o:${t.o}; --ds-d:${t.d}s;"></i>`).join("");
  return `<div class="ds-sea" aria-hidden="true"><div class="ds-stage" id="ds-stage">
    <div class="ds-swim ds-whale"><img src="/logos/deepseek-whale.svg" alt=""></div>${dots}
  </div></div>`;
}

// The standing message under the hero — for reduced-motion users, browsers
// without offset-path, and anyone who blinked during the pass.
// Copy names the MODEL, not the company — "DeepSeek V4 Flash is coming"
// reads as a catalog/feature announcement (nominative use), where
// "DeepSeek is coming" would read as a corporate partnership tease.
export function dsBayHtml(): string {
  return `<div class="ds-bayrow"><a class="ds-bay" href="/overview" title="DeepSeek V4 Flash — the model behind inference credits. API access opens at launch.">
    <img src="/logos/deepseek-whale.svg" alt="">
    <span class="ds-bay-t">DeepSeek V4 Flash is coming to your card</span>
    <span class="ds-bay-a">${ARROW}</span>
  </a></div>`;
}

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

/* ── custom auth panel (headless Privy: our UI, their rails) ── */
.pv-panel { display:flex; flex-direction:column; gap:10px; }
.pv-panel-h { font-family:var(--display); font-size:18px; font-weight:700; }
.pv-in { width:100%; padding:14px 16px; border:1px solid var(--line-strong); border-radius:12px; background:var(--white); font:inherit; font-size:15px; color:var(--ink); transition:border-color .16s var(--ease); }
.pv-in:focus { outline:none; border-color:var(--ink); }
.pv-in::placeholder { color:var(--muted); }
.pv-in--code { font-family:var(--mono); font-size:22px; letter-spacing:0.45em; text-align:center; padding:12px 8px 12px 18px; }
.pv-err { font-size:13px; color:#B42318; margin:-2px 0 0; }
.pv-or { display:flex; align-items:center; gap:12px; color:var(--muted); font-family:var(--mono); font-size:10px; letter-spacing:0.12em; text-transform:uppercase; margin:2px 0; }
.pv-or::before, .pv-or::after { content:""; flex:1; height:1px; background:var(--line); }
.pv-sso { display:flex; align-items:center; justify-content:center; gap:9px; width:100%; padding:13px 18px; border-radius:999px; border:1px solid var(--line-strong); background:var(--white); color:var(--ink); font-family:var(--display); font-weight:700; font-size:14px; cursor:pointer; transition:border-color .16s var(--ease), transform .16s var(--ease); }
.pv-sso:hover { border-color:var(--ink); }
.pv-sso:active { transform:scale(.985); }
.pv-morelink { background:none; border:0; padding:0; color:var(--muted); font-size:12.5px; text-decoration:underline; cursor:pointer; }
.pv-morelink:hover { color:var(--ink); }
.pv-morelink--c { align-self:center; margin-top:4px; }
.pv-morebox { display:flex; flex-direction:column; gap:8px; border-top:1px solid var(--line); padding-top:12px; margin-top:2px; }
.pv-panel-foot { display:flex; justify-content:space-between; gap:12px; margin-top:2px; }

/* ── tool cards: report / wallets / re-run with live previews ── */
.pv-tools { display:grid; grid-template-columns:repeat(3, 1fr); gap:10px; margin-top:12px; }
@media (max-width:560px) { .pv-tools { grid-template-columns:1fr; } }
.pv-tool { display:block; border:1px solid var(--line); border-radius:14px; background:var(--white); padding:12px; text-decoration:none; transition:border-color .16s var(--ease), transform .16s var(--ease); }
.pv-tool:hover { border-color:var(--ink); transform:translateY(-2px); }
.pv-tool--off { opacity:.55; }
.pv-tool-th { height:78px; border-radius:10px; background:var(--wash); border:1px solid var(--line); padding:10px 12px; display:flex; flex-direction:column; justify-content:center; gap:5px; overflow:hidden; }
.pv-tool-th--c { align-items:center; gap:7px; }
.pv-tool-n { font-family:var(--display); font-weight:700; font-size:14px; margin-top:9px; color:var(--ink); }
.pv-tool-d { font-size:11.5px; color:var(--muted); line-height:1.45; margin-top:2px; }
.pv-th-score { font-family:var(--display); font-weight:700; font-size:19px; line-height:1; color:var(--ink); display:flex; align-items:baseline; gap:3px; font-variant-numeric:tabular-nums; }
.pv-th-score span { font-size:10.5px; color:var(--muted); font-weight:600; }
.pv-th-tier { font-family:var(--mono); font-style:normal; font-size:8.5px; letter-spacing:.1em; text-transform:uppercase; background:var(--ink); color:var(--green); padding:2px 6px; border-radius:20px; margin-left:auto; }
.pv-th-bars { display:flex; flex-direction:column; gap:3px; }
.pv-th-bar { height:4px; border-radius:99px; background:var(--line); overflow:hidden; }
.pv-th-bar i { display:block; height:100%; background:var(--green-ink); }
.pv-th-split { height:6px; border-radius:99px; overflow:hidden; display:flex; background:var(--line); }
.pv-th-split i { display:block; height:100%; }
.pv-th-lane { display:flex; font-family:var(--mono); font-size:9.5px; letter-spacing:.06em; color:var(--muted); text-transform:uppercase; white-space:nowrap; }
`;

// The first gate: a Privy sign-in page in front of /onboard. Signing in
// creates the Vantis account (and embedded wallet); the X requirement is
// enforced on the next step, not here.
//
// Split-screen in the /hub login idiom (our own system, ported not cloned):
// left = ink art panel carrying the rotating card object, right = auth
// column. Full-bleed, no app chrome — the back link lives in the column.
// Sign-up capacity notice. The auth provider's test app caps total accounts;
// when it is reached NEW sign-ups fail inside the provider's own modal (our
// server never sees it), while EXISTING accounts keep signing in normally.
// So this is a truthful banner, never a wall — env PRIVY_SIGNUP_PAUSED=1.
export const SIGNUP_PAUSED_HTML = `<div class="cappanel">
  <div class="cap-h">New sign-ups are paused</div>
  <p class="cap-p">We hit the account ceiling on our auth provider while we finish upgrading it &mdash; brand-new accounts can&rsquo;t be created for a short while. <b>Your reserved handle is held for you</b>, and if you already have an account you can sign in below as usual.</p>
</div>`;

export function loginHtml(privy: { appId: string; islandFile: string; methods?: { primary: string[]; overflow: string[] } | null }, next: string, opts?: { signupPaused?: boolean }): string {
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
<link rel="preconnect" href="https://auth.privy.io" crossorigin>
<link rel="modulepreload" href="/assets/${privy.islandFile}">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<script defer src="/consent.js?v=1"></script>
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
.cappanel { border:1px solid #E8DCC0; background:#FDF8EC; border-radius:14px; padding:16px 18px; margin:0 0 18px; }
.cap-h { font-family:var(--display); font-weight:700; font-size:14.5px; color:#8A6D3B; }
.cap-p { font-size:13px; line-height:1.6; color:#6B5730; margin-top:5px; }
.cap-p b { color:#4A3D1F; }
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
      <p class="gauth-p">${opts?.signupPaused ? "Existing accounts sign in normally. New accounts are paused for a short while." : "Pick up where you left off, or create your account on first sign-in."}</p>
      ${opts?.signupPaused ? SIGNUP_PAUSED_HTML : ""}
      <div id="privy-root"><div class="pv-note">Preparing sign-in&hellip;</div></div>
      <a class="gback" href="/">&larr; Back to card.vantis.sh</a>
      <p class="legal gauth-legal">${HONESTY}</p>
    </div>
  </main>
</div>

<script>window.__PRIVY = { appId: ${JSON.stringify(privy.appId)}, mode: "login", next: ${JSON.stringify(next)}, signupPaused: ${opts?.signupPaused ? "true" : "false"}, methods: ${JSON.stringify(privy.methods || null)} };</script>
<script type="module" src="/assets/${privy.islandFile}"></script>
</body>
</html>`;
}

export function onboardHtml(
  providers: { twitter: boolean; github: boolean; linkedin: boolean },
  privy?: { appId: string; islandFile: string; methods?: { primary: string[]; overflow: string[] } | null },
  opts?: {
    account?: boolean; // account = the persistent home for connections, post-onboarding
    viewer?: NavViewer; // session state for appNav — carded users get the member nav
    reserved?: string | null; // booked handle, shown done in the stepper
    menuCard?: string; // pre-rendered navMenuPanel() for the account menu
  }
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
${privy ? `<link rel="preconnect" href="https://auth.privy.io" crossorigin>
<link rel="modulepreload" href="/assets/${privy.islandFile}">` : ""}
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<script defer src="/consent.js?v=1"></script>
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
${CARD_CSS}
${PV_CSS}
</style>
</head>
<body>
${appNav(opts?.viewer ?? (privy ? { cardHandle: null } : null), account ? null : "onboard", { menuCard: opts?.menuCard })}

<div class="shell">
  ${account ? `<div class="eyebrow eyebrow--green">Vantis account</div>` : onboardSteps({ reserved: opts?.reserved, current: "connect" })}
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
    ? `  <div id="resv-moment" style="display:none; text-align:center; margin-bottom:30px;">
    <div style="display:flex; justify-content:center; --card-w:min(360px,88vw); margin-bottom:18px;">
${cardObject({ handle: "@—", tierLabel: "—", grantStr: "", stamp: "RESERVED", variant: "signal" })}
    </div>
    <h2 style="font-family:var(--display); font-size:clamp(30px,4.5vw,44px); font-weight:700; letter-spacing:-0.02em; margin-bottom:8px;">It&rsquo;s yours.</h2>
    <p class="lede" style="margin-bottom:14px;"><span id="resv-h" style="font-weight:700; color:var(--ink);">@&mdash;</span> is booked &mdash; verify with an X account below and the card mints under this handle.</p>
    <a class="btn btn--ghost" id="resv-share" href="#" target="_blank" rel="noopener">&#120143; Share on X</a>
  </div>
  <div id="privy-root" class="pv-box"><div class="pv-note">Preparing sign-in&hellip;</div></div>`
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
    ? `<script>window.__PRIVY = { appId: ${JSON.stringify(privy.appId)}, mode: "onboard", methods: ${JSON.stringify(privy.methods || null)} };</script>
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
export function reserveHtml(prefill: string | null, opts?: { signedIn?: boolean; signupPaused?: boolean; viewer?: NavViewer; menuCard?: string }): string {
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
<meta property="og:image" content="https://card.vantis.sh/reserve/og.png?v=2">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="https://card.vantis.sh/reserve/og.png?v=2">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<script defer src="/consent.js?v=1"></script>
<style>
${SYSTEM_CSS}
${CARD_CSS}
${API_MARQUEE_CSS}
${DS_SEA_CSS}
${BURN_TOAST_CSS}
/* one-viewport hero: pitch + input left, card right, catalog strip below */
.hero-wrap { min-height:calc(100svh - 64px); display:flex; flex-direction:column; }
.hgrid { flex:1; display:grid; grid-template-columns:minmax(0,1fr) minmax(0,auto); align-items:center; gap:clamp(28px,5vw,72px); width:100%; max-width:1140px; margin:0 auto; padding:24px 32px; }
.hleft { text-align:left; }
.rsv-eyebrow { font-family:var(--mono); font-size:11px; letter-spacing:0.16em; text-transform:uppercase; color:var(--green-ink); margin-bottom:14px; }
.rsv-h { font-family:var(--display); font-size:clamp(38px,4.6vw,60px); font-weight:700; letter-spacing:-0.028em; line-height:1.06; margin:0 0 14px; }
.rsv-h em { font-style:normal; background:var(--green); padding:0 10px; }
.rsv-lede { font-size:15px; color:var(--body); line-height:1.6; max-width:440px; margin:0 0 24px; }
.rsv-card { display:flex; justify-content:center; --card-w:min(400px,38vw); }
.rsv-box { position:relative; max-width:430px; }
.hstrip { padding:0 0 20px; }
@media (max-width:1000px) {
  .hero-wrap { min-height:0; }
  .hgrid { grid-template-columns:1fr; padding:20px 24px 8px; gap:22px; }
  .hleft { text-align:center; order:2; }
  .rsv-lede { margin:0 auto 22px; }
  .rsv-box { margin:0 auto; }
  .rsv-card { order:1; --card-w:min(340px,92vw); }
  .hstrip { padding:16px 0 20px; }
}
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
${appNav(opts?.viewer ?? (opts?.signedIn ? { cardHandle: null } : null), "reserve", { menuCard: opts?.menuCard })}

<div class="hero-wrap">
  ${dsSeaHtml()}
  <div class="hgrid">
    <div class="hleft">
      <div class="rsv-eyebrow">Reserve your Vantis Card</div>
      <h1 class="rsv-h">One card.<br><em>3,000+ APIs.</em></h1>
      <p class="rsv-lede">An agent reads your public record and grants inference credits today &mdash; the metered catalog opens next: search, on-chain data, crawling, voice. Claimed with X sign-in.</p>

      <div class="rsv-box">
        <span class="rsv-at">@</span>
        <input class="rsv-input" id="handle" maxlength="15" autocomplete="off" spellcheck="false" placeholder="yourhandle" value="${esc(prefill || "")}" aria-label="Your X handle">
        <span class="rsv-tick" id="tick">&#10003;</span>
      </div>
      <div class="rsv-state" id="state"></div>

      <button class="rsv-btn" id="reserve" disabled>Reserve</button>
      <p class="rsv-note">A reservation marks your handle &mdash; claiming takes about a minute.</p>
    </div>
    <div class="rsv-card" id="rsv-card">${art}</div>
  </div>
  ${dsBayHtml()}
  <div class="hstrip">${apiStripHtml()}</div>
</div>

<div style="max-width:720px; margin:0 auto; padding:8px 24px 56px;">
  <p class="legal rsv-legal">${HONESTY} Vantis may decline any reservation.</p>
</div>

<script>
const input = document.getElementById('handle');
const stateEl = document.getElementById('state');
const btn = document.getElementById('reserve');
const tick = document.getElementById('tick');
const scene = document.querySelector('#rsv-card .scene');

// ── DeepSeek sea: scale the fixed-coordinate swim stage to the hero ──
// All rects are measured against the HERO (the sea's parent), never the
// sea itself — a hidden sea has zero-size rects and clientWidth 0, which
// once made the gate oscillate between decisions.
const dsSea = document.querySelector('.ds-sea');
if (dsSea) {
  const dsHero = dsSea.parentElement;
  const dsFit = () => {
    const st = document.getElementById('ds-stage');
    if (!st) return;
    const base = parseFloat(getComputedStyle(st).width) || 1440;
    // Clamp the scale: the content grid caps at 1140px, so past a 1440
    // hero the card stops moving — an unclamped stage overshoots the
    // dive (and doubles the whale) on wide monitors. Mobile stage (430)
    // clamps at 1.15 so tablets keep the path over the card, not the
    // headline. Entry/exit legs + the sea's edge mask cover the gap
    // between a clamped stage and the hero edges.
    const s = Math.min(dsHero.clientWidth / base, base === 430 ? 1.15 : 1);
    dsSea.style.setProperty('--ds-s', s.toFixed(4));
    if (base === 430) {
      // Mobile path is authored against the stacked card zone — no shift.
      dsSea.style.setProperty('--ds-y', '0px');
      dsSea.classList.remove('ds-tight');
      return;
    }
    // Desktop: the top lane must live in the REAL whitespace between the
    // hero top and the eyebrow, which moves with viewport height (content
    // is vertically centred). Anchor the lane there: centre it in the
    // measured gap, capped so the whale's belly stays clear of the text.
    // Lane centre in stage coords ≈ 36; whale half-envelope ≈ 29-33*s.
    const eb = document.querySelector('.rsv-eyebrow');
    if (!eb) return;
    const room = eb.getBoundingClientRect().top - dsHero.getBoundingClientRect().top;
    if (room < 66 * s) {
      // Cramped hero (short laptops): no lane fits — skip the swim,
      // the bay pill still carries the message.
      dsSea.classList.add('ds-tight');
      return;
    }
    dsSea.classList.remove('ds-tight');
    const centre = Math.min(room / 2, room - 33 * s);
    dsSea.style.setProperty('--ds-y', (centre - 36 * s).toFixed(1) + 'px');
  };
  let dsRaf = 0;
  dsFit();
  // Measure SETTLED layouts only: the webfont swap transiently re-centres
  // the grid (~90ms window) and load/fonts.ready fire inside it — a beat
  // later is truthful; the whale's 1.2s delay hides the flip.
  const dsSettle = () => setTimeout(dsFit, 400);
  window.addEventListener('load', dsSettle);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(dsSettle);
  window.addEventListener('resize', () => { cancelAnimationFrame(dsRaf); dsRaf = requestAnimationFrame(dsFit); });
}

// ── Key sound: synthesized, no assets. Mechanical ticks; honors the
//    site-wide vc_sound mute preference (toggle lives on /wallets). ──
let AC = null;
function keySound() {
  try {
    if (localStorage.getItem('vc_sound') === 'off') return;
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
    const g = AC.createGain(); g.gain.setValueAtTime(0.3, t);
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
    if (j.state === 'reserved') { setState('warn', '@' + h + ' is already booked'); btn.textContent = 'Reserve'; return; }
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
  // While new sign-ups are paused the reservation is still recorded — but
  // sending someone into a sign-in that cannot create their account is a
  // dead end, so the page says so and holds the handle instead.
  if (${opts?.signupPaused ? "true" : "false"}) {
    btn.textContent = '@' + h + ' is held for you';
    var note = document.querySelector('.rsv-note');
    if (note) note.innerHTML = '<b>Your handle is held.</b> New accounts are paused for a short while as we upgrade our sign-in provider — come back shortly and it will be waiting. Already have an account? <a href="/login?next=%2Fonboard" style="color:var(--green-ink)">Sign in</a>.';
    return;
  }
  setTimeout(() => { window.location.href = '/login?next=%2Fonboard'; }, 450);
});

if (input.value) { fillHandle(input.value.trim().replace(/^@/, '')); check(); }
</script>
${burnToastHtml()}
${BURN_TOAST_JS}
</body>
</html>`;
}

// ─── OG stages: 1200x630 share compositions, shot once by headless chrome.
// Fleet idiom: message left, object right — never a floating crop. ───
function ogStage(opts: { title: string; tierLine: string; sub: string; url: string; cardHtmlStr: string }): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="robots" content="noindex">
<style>
${SYSTEM_CSS}
${CARD_CSS}
html, body { width:1200px; height:630px; overflow:hidden; background:var(--wash); }
.og-stage { width:1200px; height:630px; display:grid; grid-template-columns: 1fr auto; align-items:center; gap:48px; padding:56px 64px; position:relative; }
.og-left { display:flex; flex-direction:column; justify-content:center; min-width:0; }
.og-brand { display:flex; align-items:center; gap:12px; font-family:var(--display); font-weight:700; font-size:21px; margin-bottom:34px; }
.og-brand svg { width:25px; height:25px; }
.og-brand .sub { color:var(--muted); font-weight:600; letter-spacing:0.15em; font-size:12px; }
.og-h { font-family:var(--display); font-weight:700; font-size:64px; letter-spacing:-0.03em; line-height:1.04; margin:0 0 18px; overflow-wrap:anywhere; }
.og-h em { font-style:normal; background:var(--green); padding:0 10px; }
.og-tier { font-family:var(--mono); font-size:16px; letter-spacing:0.08em; text-transform:uppercase; color:var(--green-ink); font-weight:700; margin-bottom:14px; }
.og-sub { font-size:19px; color:var(--body); line-height:1.5; max-width:420px; margin-bottom:30px; }
.og-url { font-family:var(--mono); font-size:15px; color:var(--muted); text-decoration:underline; text-underline-offset:3px; }
.og-card { --card-w:520px; }
.og-card .scene::after { animation:none; }
.og-card .float, .og-card .flip { animation:none; transform:none; }
.og-card .face { animation:none; } /* base visibility: front shown, back hidden */
.og-card .face.back { display:none; }
</style>
</head>
<body>
<div class="og-stage">
  <div class="og-left">
    <div class="og-brand">${V_MARK} VANTIS <span class="sub">CARDS</span></div>
    <h1 class="og-h">${opts.title}</h1>
    ${opts.tierLine ? `<div class="og-tier">${opts.tierLine}</div>` : ""}
    <p class="og-sub">${opts.sub}</p>
    <div class="og-url">${esc(opts.url)}</div>
  </div>
  <div class="og-card">${opts.cardHtmlStr}</div>
</div>
</body>
</html>`;
}

export function ogViewHtml(card: any): string {
  const tier = tierInfo(card.tier);
  const grantStr = Number(card.grant_usd || 0).toFixed(2).replace(/\.00$/, "");
  const created = new Date((card.created_at || "").replace(" ", "T") + "Z");
  const stamp = isNaN(created.getTime()) ? "2026" : `${created.toLocaleString("en-US", { month: "long" }).toUpperCase()} / ${created.getFullYear()}`;
  const handle = String(card.handle || "").replace("@", "");
  return ogStage({
    title: `@${esc(handle)}`,
    tierLine: `${esc(tier.label)} tier &middot; $${esc(grantStr)} in inference credits`,
    sub: "One of one, scored by an agent from the public record.",
    url: `card.vantis.sh/${handle}`,
    cardHtmlStr: cardObject({ handle: card.handle, tierLabel: tier.label, grantStr, stamp, variant: card.design_variant }),
  });
}

export function ogReserveHtml(): string {
  return ogStage({
    title: `One card.<br><em>3,000+ APIs.</em>`,
    tierLine: "",
    sub: "Reserve your handle, claim with X sign-in — an agent scores your public record into inference credits.",
    url: "card.vantis.sh",
    cardHtmlStr: cardObject({ handle: "@yourhandle", tierLabel: "—", grantStr: "", stamp: "RESERVED", variant: "signal" }),
  });
}

// ─── Agent report: the permanent record of how a score was decided ───
export function reportHtml(
  user: any,
  card: any,
  enrichment: any | null,
  availUsd?: number
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
<script defer src="/consent.js?v=1"></script>
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
${appNav({ cardHandle: card?.handle || null }, "report", { menuCard: card ? navMenuPanel(user, card, availUsd) : "" })}

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
export function scorePageHtml(uid: string | null, step: string | null, providers: { github: boolean; linkedin: boolean }, orbIslandFile?: string | null, opts?: { viewer?: NavViewer; reserved?: string | null; menuCard?: string }): string {
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
<script defer src="/consent.js?v=1"></script>
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

/* live agent log — real pipeline events, revealed at a readable cadence */
.aglog { background:var(--white); border:1px solid var(--line); border-radius:14px; padding:16px 18px; margin-top:18px; text-align:left;
  font-family:var(--mono); font-size:12px; line-height:1.75; color:var(--body); max-height:280px; overflow-y:auto;
  scrollbar-width:thin; scrollbar-color:var(--line-strong) transparent; }
.aglog::-webkit-scrollbar { width:4px; }
.aglog::-webkit-scrollbar-track { background:transparent; }
.aglog::-webkit-scrollbar-thumb { background:var(--line-strong); border-radius:999px; }
.aglog::-webkit-scrollbar-thumb:hover { background:var(--muted); }
.aglog .ln { display:flex; gap:10px; align-items:baseline; }
.aglog .tm { color:var(--muted); opacity:.6; flex-shrink:0; min-width:44px; }
.aglog .st { color:var(--green-ink); font-weight:700; }
.aglog .caret { display:inline-block; width:7px; height:13px; background:var(--green-ink); vertical-align:text-bottom; animation:caretblink 1s steps(1) infinite; }
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
${appNav(opts?.viewer ?? { cardHandle: null }, "onboard", { menuCard: opts?.menuCard })}

<div class="shell">

  <div id="connect-more">
    ${onboardSteps({ reserved: opts?.reserved, current: "score" })}
    <h1 style="font-size:clamp(30px,4.4vw,42px); margin:14px 0 14px;">Add signal, or score now</h1>
    <p class="lede" style="margin-bottom:28px;">Every profile you connect gives the agent more to work with. You can also stop here and be scored on X alone.</p>
    ${providers.github ? `<a href="/oauth/connect/github?uid=${esc(uid)}" class="prow"><div><div class="prow-n">GitHub</div><div class="prow-d">Repositories, languages, contribution activity.</div></div><span class="ptag">Connect</span></a>` : ""}
    ${providers.linkedin ? `<a href="/oauth/connect/linkedin?uid=${esc(uid)}" class="prow"><div><div class="prow-n">LinkedIn</div><div class="prow-d">Role, company and industry signals.</div></div><span class="ptag">Connect</span></a>` : ""}
    <div class="btnrow" style="margin-top:22px;">
      <button id="score-now" class="btn btn--primary">Score me now</button>
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
      <a class="btn btn--primary" href="/wallets">Make your first call &rarr;</a>
      <a class="btn btn--ghost" id="card-link" href="#">View your card</a>
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
// The pipeline streams real events; the page REVEALS them at a readable
// cadence so the run is watchable — a floor of 30s of presentation, never
// invented work. Reveal-side effects (stages, orb, scan strip) fire when a
// line becomes visible, keeping the whole stage in sync with the story.
const MIN_RUN_MS = 30000;
const REVEAL_MS = { stage: 900, log: 1450, done: 400, error: 400 };
let rendered = 0, polling = null, runDone = false, runT0 = 0;
const revealQ = []; let revealing = false, revealedDone = false;
function fmtT(ms) { return '+' + (ms / 1000).toFixed(1) + 's'; }
function revealNext() {
  if (revealing) return;
  const ev = revealQ[0];
  if (!ev) return;
  // The done event is held until the run result is in AND the floor is met.
  if (ev.kind === 'done' && (!runDone || Date.now() - runT0 < MIN_RUN_MS)) return;
  revealQ.shift();
  revealing = true;
  appendLog(ev);
  if (ev.icon) enqueueScan(ev.icon, / not linked/.test(ev.label));
  if (ev.stage) {
    stage(ev.kind === 'done' ? 5 : ev.stage);
    setOrb(ev.kind === 'done' ? 'breathing' : (ORB_BY_STAGE[ev.stage] || 'working'));
  }
  if (ev.kind === 'done') revealedDone = true;
  setTimeout(() => { revealing = false; revealNext(); }, REVEAL_MS[ev.kind] || REVEAL_MS.log);
}
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
      revealQ.push(p.events[rendered]);
    }
    revealNext();
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
  runT0 = Date.now();
  revealQ.length = 0; revealing = false; revealedDone = false;
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
    const wasAsync = !!data.started;
    if (wasAsync) {
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
    // Let the story finish: the queue drains at reading pace, and the done
    // beat itself is gated on the 30s floor. Only then, the ceremony.
    if (wasAsync) {
      while (!revealedDone) { revealNext(); await new Promise(r => setTimeout(r, 250)); }
      await new Promise(r => setTimeout(r, 500));
    }
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
      ? (data.true_up
          ? '$' + data.grantUsd + ' — topped up $' + data.true_up + ' on tier upgrade'
          : '$' + data.grantUsd + ' — granted at issuance, unchanged')
      : '$' + data.grantUsd + ' in $VANTIS credits';
    document.getElementById('grant-v').textContent = data.rerun
      ? 'Re-runs left: ' + (data.reruns_left ?? 0) + ' of 5'
      : '≈ ' + Number(data.grantVantis).toLocaleString(undefined,{maximumFractionDigits:0}) + ' VANTIS at $' + Number(data.vantisPrice).toFixed(6);
    document.getElementById('reasoning').textContent = data.reasoning || '';
    if (data.rerun) {
      show('keysec', false); // the existing key keeps working; never reprint it
    } else if (data.apiKey) {
      document.getElementById('api-key').textContent = data.apiKey;
    } else {
      document.getElementById('api-key').textContent = 'CREATE IN YOUR WALLET';
      document.querySelector('#keysec p').textContent = 'Your credits are on the card. Create named API keys any time in your wallet — Wallets, then API keys.';
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

// CSP: inline event handlers (onclick=) are not covered by a script nonce,
// so the manual trigger binds here instead of in the markup.
document.getElementById('score-now')?.addEventListener('click', () => runScore());

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
.scene:hover .flip, .scene:hover .float, .scene:hover .face { animation-play-state:paused; }

@keyframes spin { from { transform:rotateY(0deg); } to { transform:rotateY(360deg); } }
@keyframes floaty { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-9px); } }
@keyframes shadowpulse { 0%,100% { transform:scale(1); opacity:1; } 50% { transform:scale(0.94); opacity:0.8; } }

.face { position:absolute; inset:0; border-radius:20px; overflow:hidden; backface-visibility:hidden; -webkit-backface-visibility:hidden;
  padding:24px; display:flex; flex-direction:column; justify-content:space-between; text-align:left;
  border:1px solid var(--cedge); box-shadow:inset 0 1px 0 rgba(255,255,255,0.14), inset 0 -1px 0 rgba(0,0,0,0.18); }
/* Face visibility is driven by keyframes on the SAME 10s timeline as the
   spin (switch at 25%/75% = 90°/270°), NOT by backface-visibility alone —
   mobile WebKit/WebViews (Telegram in-app, iOS Safari) can flatten
   preserve-3d and paint the front face's mirrored backface over the back
   (live user report Aug 9). With the timeline approach, at most one face
   exists at any moment on ANY renderer. backface-visibility stays as a
   progressive extra; translateZ separates the coplanar faces. Every
   context that pins the flip (hover pause, reduced-motion, .og-card) must
   pin the face animations too or they desync — all handled below. */
.front { color:var(--cfg); transform:rotateY(0deg) translateZ(0.4px); animation:facefront 10s linear infinite;
  background:
    repeating-linear-gradient(105deg, var(--ctex) 0 1px, transparent 1px 5px),
    radial-gradient(120% 90% at 18% 0%, rgba(255,255,255,0.09) 0%, transparent 55%),
    var(--cbg); }
.back { transform:rotateY(180deg) translateZ(0.4px); visibility:hidden; animation:faceback 10s linear infinite; color:#0A0A0A; padding:0;
  background:
    repeating-linear-gradient(105deg, rgba(10,10,10,0.045) 0 1px, transparent 1px 5px),
    radial-gradient(120% 90% at 80% 100%, rgba(255,255,255,0.22) 0%, transparent 55%),
    linear-gradient(135deg,#0AF77A 0%,#07DE6C 55%,#05C75F 100%); }
@keyframes facefront { 0%,24.99% { visibility:visible; } 25%,74.99% { visibility:hidden; } 75%,100% { visibility:visible; } }
@keyframes faceback { 0%,24.99% { visibility:hidden; } 25%,74.99% { visibility:visible; } 75%,100% { visibility:hidden; } }

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
  /* .face included: with animations off, base visibility applies — front
     shown, back hidden — matching the flip pinned at 0°. */
  .flip, .float, .face, .face::after, .chip, .scene::after { animation:none; }
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

// The account menu's identity cluster: a FLAT chip of the user's card
// (its mint variant, click-through to the card page) plus the Privy
// embedded wallet with one-tap copy. Deliberately not the 3D object —
// that belongs to pages that celebrate it (hero, /card); two spinning
// cards on one screen read as slop (Luca, Aug 11).
export function navMenuPanel(user: any, card: any, availUsd?: number): string {
  if (!card) return "";
  const tier = tierInfo(card.tier);
  const handle = String(card.handle || "").replace(/^@/, "");
  const v = CARD_VARIANTS[card.design_variant] || CARD_VARIANTS.ink;
  const grantStr = Number(card.grant_usd || 0).toFixed(2).replace(/\.00$/, "");
  const addr = String(user?.wallet_address || "");
  const wallet = /^0x[0-9a-fA-F]{40}$/.test(addr)
    ? `<div class="nd-wallet"><div class="nd-wallet-k">Embedded wallet &middot; Privy</div><div class="nd-wallet-row"><span class="nd-wallet-a">${esc(addr.slice(0, 6))}&hellip;${esc(addr.slice(-4))}</span><button type="button" class="nd-copy" data-addr="${esc(addr)}" aria-label="Copy wallet address">Copy</button></div></div>`
    : "";
  const balance = typeof availUsd === "number"
    ? `<a class="nd-balance" href="/wallets"><span class="nd-wallet-k" style="margin:0;">Credits</span><span class="nd-balance-v">$${availUsd.toFixed(2)}<em>Spend &rarr;</em></span></a>`
    : "";
  return `<a class="nd-chip" href="/card/${esc(handle)}" aria-label="Open your card">
    <span class="nd-chipface" style="background:${v.bg};"></span>
    <span class="nd-chip-t"><span class="nd-chip-n">Your card</span><span class="nd-chip-d" style="display:block;">${esc(tier.label)} &middot; $${esc(grantStr)}</span></span>
  </a>${balance}${wallet}`;
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
<meta property="og:image" content="https://card.vantis.sh/card/${esc(handle)}/og.png?v=2-${esc(String(card.tier))}-${esc(grantStr)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="https://card.vantis.sh/card/${esc(handle)}/og.png?v=2-${esc(String(card.tier))}-${esc(grantStr)}">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<script defer src="/consent.js?v=1"></script>
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

// ─── Wallets: the card balance and the agent wallets carved from it ───
// Since the device build, this page is two experiences stacked: the 3D
// wallet terminal (device-island, WebGL) as the hero, and the classic
// console view beneath it — which is ALSO the no-WebGL / no-JS fallback, so
// it keeps its full markup and behavior untouched.
export function walletsHtml(deviceIsland?: string | null, consoleSection = "", consoleRail = "", viewer?: NavViewer, menuCard = "", firstRun: { laneId: string; laneUsd: number; mainUsd: number } | null = null, deck: { section?: string; topup?: string; css?: string; js?: string } = {}): string {
  const deckSectionHtml = deck.section || "";
  const deckTopupHtml = deck.topup || "";
  const deckCss = deck.css || "";
  const deckJs = deck.js || "";
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Wallets — Vantis Cards</title>
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<script defer src="/consent.js?v=1"></script>
<style>
${SYSTEM_CSS}
.shell { max-width:860px; margin:0 auto; padding:36px 24px 80px; }
/* staging left rail — the vantis.sh landing grammar: sticky panel, wash pill on the active item */
.shell--rail { max-width:1150px; display:grid; grid-template-columns:225px minmax(0,1fr); gap:44px; align-items:start; }
.wl-rail { position:sticky; top:84px; align-self:start; }
.wl-rail .rl-eyebrow { font-family:var(--mono); font-size:10px; letter-spacing:.12em; text-transform:uppercase; color:var(--muted); margin:20px 0 8px; }
.wl-rail .rl-eyebrow:first-child { margin-top:4px; }
.wl-rail a, .wl-rail button { display:block; width:100%; text-align:left; font-family:var(--display); font-size:14px; font-weight:600; color:var(--body); background:none; border:0; padding:8px 12px; border-radius:9px; cursor:pointer; text-decoration:none; margin-bottom:2px; }
.wl-rail a:hover, .wl-rail button:hover { color:var(--ink); }
.wl-rail .on { background:var(--wash); color:var(--ink); }
.wl-rail .rl-stg { display:inline-flex; font-family:var(--mono); font-size:9px; font-weight:700; letter-spacing:0.11em; color:#8A6D3B; background:#FDF4E3; border:1px solid #E3CFA1; border-radius:999px; padding:3px 8px; margin:2px 0 8px; }
.wl-rail .rl-out { color:var(--muted); font-size:11px; margin-left:3px; }
@media (max-width:1024px) { .shell--rail { display:block; max-width:860px; } .wl-rail { display:none; } }
@media (min-width:1025px) { .shell--rail .wlc-head .wlc-tabs { display:none; } }

/* ── the device stage ── */
#device-stage { position:relative; border-radius:20px; overflow:hidden; background:radial-gradient(120% 130% at 50% 8%, #2A302B 0%, #171A18 55%, #0C0E0D 100%); border:1px solid var(--line); display:none; }
body.dv-on #device-stage { display:block; }
#device-stage canvas { display:block; width:100%; height:auto; touch-action:none; }
/* the control bar lives ON the device, docked to the stage bottom */
.dv-bar { position:absolute; left:50%; bottom:18px; transform:translateX(-50%); width:min(640px, calc(100% - 32px)); display:none; gap:10px; align-items:center; justify-content:center; z-index:5; }
body.dv-on .dv-bar { display:flex; }
#dv-input-row { flex:1; display:none; gap:10px; min-width:0; }
#dv-input { flex:1; min-width:0; font-family:var(--display); font-size:15px; padding:12px 20px; border:1.5px solid rgba(255,255,255,.14); border-radius:999px; background:rgba(12,14,13,.82); color:#F2F4F2; outline:none; backdrop-filter:blur(10px); -webkit-backdrop-filter:blur(10px); }
#dv-input::placeholder { color:rgba(242,244,242,.42); }
#dv-input:focus { border-color:var(--green); }
.dv-bar .btnx { border-color:rgba(255,255,255,.16); background:rgba(12,14,13,.82); color:#F2F4F2; backdrop-filter:blur(10px); -webkit-backdrop-filter:blur(10px); }
.dv-bar .btnx--pri { background:var(--green); color:var(--ink); border-color:var(--green); font-weight:700; }
/* first-run coach */
.dv-coach { position:absolute; inset:0; z-index:8; pointer-events:none; }
.dv-coach-ring { position:absolute; width:92px; height:92px; border:2.5px solid var(--green); border-radius:50%; transform:translate(-50%,-50%); box-shadow:0 0 0 6px rgba(9,248,117,.14), 0 0 30px rgba(9,248,117,.25); transition:left .45s cubic-bezier(.22,1,.36,1), top .45s cubic-bezier(.22,1,.36,1), width .45s, height .45s; }
.dv-coach-card { position:absolute; left:18px; bottom:18px; max-width:340px; background:rgba(10,12,11,.92); border:1px solid rgba(9,248,117,.3); border-radius:14px; padding:16px 18px; pointer-events:auto; backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px); }
.dv-coach-step { font-family:var(--mono); font-size:10px; letter-spacing:.14em; color:var(--green); text-transform:uppercase; margin-bottom:7px; }
.dv-coach-txt { font-size:14px; line-height:1.5; color:#F2F4F2; margin-bottom:12px; }
.dv-coach-row { display:flex; gap:8px; justify-content:flex-end; }
.dv-coach-row button { font-family:var(--display); font-weight:700; font-size:12.5px; border-radius:999px; padding:7px 16px; cursor:pointer; border:1px solid rgba(255,255,255,.2); background:transparent; color:rgba(242,244,242,.75); }
.dv-coach-row button.pri { background:var(--green); color:var(--ink); border-color:var(--green); }
@media (max-width:560px) { .dv-coach-card { left:12px; right:12px; max-width:none; } }
.vmode-row { display:flex; justify-content:flex-end; margin:0 0 12px; }
/* first-call activation panel — shown only while the user has never had
   an ok call; the fire is a REAL billed inference via the playground path */
.fr { border:1px solid var(--line-strong); background:var(--wash); border-radius:16px; padding:24px; margin:0 0 26px; }
.fr-h { font-family:var(--display); font-size:22px; margin:10px 0 8px; }
.fr-p { font-size:14px; color:var(--body); line-height:1.6; max-width:60ch; }
.fr-row { display:flex; gap:10px; margin-top:16px; }
.fr-row input { flex:1; min-width:0; font-family:var(--mono); font-size:13px; padding:12px 14px; border:1px solid var(--line-strong); border-radius:12px; background:var(--white); color:var(--ink); }
.fr-row input:focus { outline:2px solid var(--green); outline-offset:1px; }
.fr-note { font-family:var(--mono); font-size:10.5px; letter-spacing:0.08em; text-transform:uppercase; color:var(--muted); margin-top:9px; }
.fr-reply { font-size:14.5px; line-height:1.65; background:var(--white); border:1px solid var(--line); border-radius:12px; padding:16px; margin-top:16px; white-space:pre-wrap; }
.fr-settle { font-family:var(--mono); font-size:12px; color:var(--green-ink); margin-top:10px; }
.fr-next { display:flex; gap:10px; margin-top:14px; flex-wrap:wrap; }
.fr-err { font-family:var(--mono); font-size:12.5px; color:#9B2C2C; background:#FAEAEA; border:1px solid #E7C3C3; border-radius:10px; padding:10px 13px; margin-top:14px; }
@media (max-width:560px) { .fr-row { flex-direction:column; } }
/* EZ mode: the terminal never shows; the classic console IS the page */
body.ez #device-stage, body.ez .dv-bar { display:none !important; }
body.ez #dv-console { margin-top:6px; }
body.ez #dv-console > summary { display:none !important; }
#dv-console { margin-top:26px; }
#dv-console > summary { display:none; font-family:var(--mono); font-size:11px; letter-spacing:.1em; text-transform:uppercase; color:var(--muted); cursor:pointer; padding:8px 0; list-style:none; }
#dv-console > summary::-webkit-details-marker { display:none; }
body.dv-on #dv-console > summary { display:block; }
.sr-only { position:absolute; width:1px; height:1px; margin:-1px; padding:0; overflow:hidden; clip:rect(0 0 0 0); white-space:nowrap; border:0; }
.wl-total { border:1px solid var(--line); border-radius:16px; background:var(--white); padding:22px; display:flex; align-items:center; gap:26px; flex-wrap:wrap; }
.wl-total b { font-family:var(--display); font-size:30px; display:block; font-variant-numeric:tabular-nums; transform-origin:left center; }
.wl-total span { font-family:var(--mono); font-size:10.5px; letter-spacing:.1em; text-transform:uppercase; color:var(--muted); }
.wl-bar { flex:1; min-width:180px; height:8px; border-radius:999px; background:var(--line); overflow:hidden; display:flex; }
.wl-bar i { display:block; height:100%; background:var(--green-ink); transition:width .7s var(--ease); }
.wl-bar em { display:block; height:100%; background:var(--green); transition:width .7s var(--ease); }
@keyframes bumpUp { 0% { transform:scale(1); } 30% { transform:scale(1.07); color:var(--green-ink); } 100% { transform:scale(1); } }
@keyframes bumpDn { 0% { transform:scale(1); } 30% { transform:scale(.95); color:var(--muted); } 100% { transform:scale(1); } }
.bump-up { animation:bumpUp .7s var(--ease); }
.bump-dn { animation:bumpDn .7s var(--ease); }
.wl-sec { font-family:var(--display); font-size:19px; font-weight:700; margin:34px 0 6px; }
.wl-sub { font-size:13.5px; color:var(--body); margin-bottom:14px; }
.wl-row { display:flex; align-items:center; justify-content:space-between; gap:14px; border:1px solid var(--line); border-radius:14px; background:var(--white); padding:16px 18px; margin-bottom:10px; flex-wrap:wrap; }
.wl-n { font-family:var(--display); font-weight:700; font-size:15.5px; }
.wl-d { font-family:var(--mono); font-size:11.5px; color:var(--muted); margin-top:3px; }
.wl-bal { font-family:var(--mono); font-size:15px; font-weight:700; font-variant-numeric:tabular-nums; transform-origin:right center; }
.wl-st { font-family:var(--mono); font-size:10px; letter-spacing:.1em; text-transform:uppercase; padding:4px 9px; border-radius:20px; }
.wl-st--ok { background:#E6FBEF; color:#0B7A3E; }
.wl-st--nf { background:#FDF4E3; color:#8A6D3B; }
.wl-act { display:flex; gap:8px; }
.btnx { font-family:var(--display); font-weight:700; font-size:12.5px; border:1px solid var(--line-strong); background:var(--white); border-radius:999px; padding:7px 14px; cursor:pointer; transition:border-color .15s, opacity .15s; }
.btnx:hover { border-color:var(--ink); }
.btnx--pri { background:var(--ink); color:var(--green); border-color:var(--ink); }
.btnx--pri:disabled { opacity:.35; cursor:default; }
.btnx--lg { font-size:13.5px; padding:10px 20px; }
.wl-form { display:flex; gap:10px; margin-top:14px; flex-wrap:wrap; }
.wl-input { font-family:var(--display); font-size:14px; padding:10px 16px; border:1.5px solid var(--line-strong); border-radius:999px; background:var(--white); outline:none; }
.wl-input:focus { border-color:var(--ink); }
.wl-key { font-family:var(--mono); font-size:12px; background:var(--ink); color:var(--green); padding:12px 14px; border-radius:10px; word-break:break-all; margin-top:10px; width:100%; }
.wl-note { font-size:12.5px; color:var(--muted); margin-top:10px; }
.mn { font-family:var(--mono); font-size:0.92em; }
.wl-keyrow { display:flex; align-items:center; justify-content:space-between; gap:12px; border:1px solid var(--line); border-radius:14px; background:var(--white); padding:15px 18px; margin-bottom:8px; }
.wl-keyrow .kl { font-family:var(--display); font-weight:700; font-size:14px; }
.wl-keyrow .kp { font-family:var(--mono); font-size:13px; color:var(--muted); margin-top:3px; letter-spacing:0.01em; }
.wl-reveal { border:1px solid var(--ink); border-radius:14px; background:var(--wash); padding:14px 18px; margin-top:12px; }
.wl-reveal .rt { font-family:var(--display); font-weight:700; font-size:13px; margin-bottom:9px; }
.wl-reveal .rk { display:flex; align-items:center; gap:10px; flex-wrap:wrap; }
.wl-reveal code { font-family:var(--mono); font-size:13px; background:var(--white); border:1px solid var(--line); border-radius:8px; padding:7px 11px; user-select:all; overflow-wrap:anywhere; max-width:100%; }
#wlk-tabs { display:flex; gap:8px; margin:2px 0 12px; flex-wrap:wrap; }
#wlk-tabs[hidden] { display:none; }
.ktab { font-family:var(--mono); font-size:11px; letter-spacing:0.08em; text-transform:uppercase; border:1px solid var(--line-strong); background:var(--white); border-radius:999px; padding:9px 16px; cursor:pointer; transition:border-color .15s; }
.ktab:hover { border-color:var(--ink); }
.ktab.on { background:var(--ink); color:var(--green); border-color:var(--ink); }
.ktab .n { opacity:0.65; margin-left:7px; }
#wlk-bar { margin:2px 0 12px; }
#wlk-form { display:flex; gap:8px; flex-wrap:wrap; align-items:center; border:1px solid var(--line-strong); border-radius:14px; background:var(--white); padding:12px 14px; margin-bottom:12px; }
#wlk-form[hidden] { display:none; }
#wlk-form input, #wlk-form select { font-family:var(--display); font-size:13.5px; border:1px solid var(--line); border-radius:10px; padding:9px 12px; background:var(--white); }
#wlk-form input { flex:1 1 220px; min-width:0; }
#wlk-form input:focus, #wlk-form select:focus { outline:none; border-color:var(--ink); }
.wl-keyrow .kmeta { display:flex; gap:8px; align-items:center; flex-wrap:wrap; margin-top:4px; }
.wl-keyrow .kscope { font-family:var(--mono); font-size:10px; letter-spacing:0.08em; text-transform:uppercase; border:1px solid var(--line); border-radius:999px; padding:2px 8px; color:var(--body); }
.wl-keyrow .kdate { font-size:11.5px; color:var(--muted); }
.wl-keyrow .kacts { display:flex; gap:8px; flex-shrink:0; }

/* ── move-funds sheet ── */
.mfog { position:fixed; inset:0; z-index:60; background:rgba(10,10,10,.44); backdrop-filter:blur(7px); -webkit-backdrop-filter:blur(7px); opacity:0; transition:opacity .28s var(--ease); display:none; }
.mfog.on { opacity:1; }
.msheet { position:fixed; z-index:61; left:50%; top:50%; width:min(430px, calc(100vw - 32px)); background:var(--white); border:1px solid var(--line); border-radius:20px; padding:26px 26px 22px; box-shadow:0 32px 90px -28px rgba(10,10,10,.4); opacity:0; transform:translate(-50%,-45%) scale(.96); transition:opacity .28s var(--ease), transform .36s var(--ease); display:none; }
.msheet.on { opacity:1; transform:translate(-50%,-50%) scale(1); }
.mamt { display:flex; align-items:baseline; gap:7px; border:1.5px solid var(--line-strong); border-radius:14px; padding:13px 18px; margin:18px 0 12px; transition:border-color .2s; }
.mamt:focus-within { border-color:var(--ink); }
.mamt b { font-family:var(--display); font-size:24px; font-weight:700; color:var(--muted); }
.mamt input { flex:1; min-width:0; border:0; outline:0; background:transparent; font-family:var(--display); font-size:30px; font-weight:700; letter-spacing:-.02em; color:var(--ink); }
.mamt input::placeholder { color:var(--line-strong); }
.mchips { display:flex; gap:8px; flex-wrap:wrap; min-height:30px; }
.mchip { font-family:var(--mono); font-size:12px; border:1px solid var(--line-strong); background:var(--white); border-radius:999px; padding:5px 13px; cursor:pointer; transition:border-color .15s; }
.mchip:hover { border-color:var(--ink); }
.merr { font-family:var(--mono); font-size:11.5px; line-height:1.5; color:#B3261E; margin-top:12px; display:none; }
.mhint { font-family:var(--mono); font-size:11px; letter-spacing:.06em; text-transform:uppercase; color:var(--muted); margin-top:4px; }
.mrow { display:flex; gap:10px; justify-content:flex-end; margin-top:18px; }
@media (max-width:560px) {
  .msheet { left:0; right:0; top:auto; bottom:0; width:100%; border-radius:20px 20px 0 0; border-left:0; border-right:0; border-bottom:0; transform:translateY(26px); padding-bottom:calc(22px + env(safe-area-inset-bottom)); }
  .msheet.on { transform:translateY(0); }
}

/* ── toast ── */
.toast { position:fixed; left:50%; bottom:28px; z-index:70; transform:translate(-50%, 12px); background:var(--ink); color:var(--white); font-family:var(--mono); font-size:12px; letter-spacing:.02em; padding:11px 20px; border-radius:999px; opacity:0; transition:opacity .32s var(--ease), transform .32s var(--ease); pointer-events:none; white-space:nowrap; }
.toast.on { opacity:1; transform:translate(-50%, 0); }
.toast b { color:var(--green); font-weight:600; }
${deckCss}
</style>
</head>
<body>
${appNav(viewer ?? { cardHandle: null }, "wallets", { menuCard })}

<div class="shell${consoleRail ? " shell--rail" : ""}">
  ${consoleRail}
  <div class="wl-main">
  <div class="eyebrow eyebrow--green">Console</div>
  <h1 style="font-size:clamp(30px,4.4vw,42px); margin:14px 0 10px;">One card, many agents.</h1>
  <p class="lede" style="margin-bottom:26px;">Your card meters two rails &mdash; inference and developer tools. Main holds your credits and funds the lanes; spending happens in a lane. Each one is a payment identity with its own key and budget, allocated from Main and swept back whenever you want.</p>

  ${firstRun ? `
  <section class="fr" id="fr-panel" data-lane="${esc(firstRun.laneId)}" data-lane-usd="${Number(firstRun.laneUsd || 0).toFixed(6)}" data-main-usd="${Number(firstRun.mainUsd || 0).toFixed(6)}">
    <div class="eyebrow eyebrow--green" id="fr-eyebrow">First call</div>
    <h2 class="fr-h">Your credits are live. Spend your first cent.</h2>
    <p class="fr-p">One real inference call on the rail, settled from your balance &mdash; you will see exactly what it cost and how much $VANTIS it retired. ${Number(firstRun.laneUsd || 0) < 0.1 && Number(firstRun.mainUsd || 0) >= 1 ? "Firing moves $1 from Main into your Inference lane first — that is the lane mechanic, live." : ""}</p>
    <div class="fr-row">
      <input id="fr-prompt" maxlength="600" value="Explain, in one sentence, what it means to burn a token.">
      <button class="btn btn--primary" id="fr-fire">Fire</button>
    </div>
    <div class="fr-note">Real call &middot; roughly $0.003 &middot; DeepSeek V4 Flash 0731</div>
    <div id="fr-out" hidden>
      <div class="fr-reply" id="fr-reply"></div>
      <div class="fr-settle num" id="fr-settle"></div>
      <div class="fr-next">
        <a class="btn btn--ghost btn--sm" href="#wl-keys">Create an API key</a>
        <a class="btn btn--ghost btn--sm" href="/docs">Read the docs</a>
      </div>
    </div>
    <div class="fr-err" id="fr-err" hidden></div>
  </section>` : ""}

  <div class="vmode-row"><button class="btnx" id="vmode" hidden>Switch to simple view</button></div>

  <div id="device-stage" aria-label="Wallet terminal">
    <div class="dv-bar">
      <div id="dv-input-row">
        <input id="dv-input" type="text" autocomplete="off" maxlength="600" aria-label="Playbook input">
        <button class="btnx btnx--pri btnx--lg" id="dv-go">Fire</button>
      </div>
      <button class="btnx btnx--lg" id="dv-model" hidden>Model</button>
      <button class="btnx btnx--lg" id="dv-alt">Fund lane</button>
      <button class="btnx btnx--lg" id="dv-sound" aria-pressed="true" title="Toggle interface sound">Sound on</button>
    </div>
  </div>
  <div id="dv-live" class="sr-only" role="status" aria-live="polite"></div>

${deckSectionHtml}

  <details id="dv-console" open>
  <summary>Console view</summary>
  <div class="wl-total">
    <div><b id="wl-main">$&mdash;</b><span>Main &mdash; funds your lanes</span></div>
    <div class="wl-bar" aria-hidden="true"><i id="wl-bar-main" style="width:100%"></i><em id="wl-bar-agents" style="width:0%"></em></div>
    <div><b id="wl-agents">$&mdash;</b><span>Across agent wallets</span></div>
  </div>

  <div class="wl-sec">Two lanes, one card</div>
  <p class="wl-sub">Credits are allocated from Main into the rail that spends them &mdash; fund each lane, sweep back to main anytime. Main itself never pays for a call.</p>
  <div id="wl-list"></div>
  <div id="wl-keys-note"></div>
  </details>

  <div id="wl-keys" style="margin-top:34px;">
    <div class="wl-sec">API keys</div>
    <p class="wl-sub">Bearer tokens for <code class="mn">card.vantis.sh/v1</code>. Keys exist only when you create them — named, scoped to a lane, up to ten. Every key spends its lane's budget, never Main directly. The full key is shown exactly once, at creation or rotation.</p>
    <div id="wlk-tabs" hidden></div>
    <div id="wlk-bar"><button class="btnx btnx--pri" id="wlk-new">New key</button></div>
    <form id="wlk-form" hidden>
      <input id="wlk-name" maxlength="40" placeholder="Key name — e.g. my-agent, staging, laptop" autocomplete="off">
      <select id="wlk-scope"></select>
      <button class="btnx btnx--pri" type="submit">Create key</button>
      <button class="btnx" type="button" id="wlk-cancel">Cancel</button>
    </form>
    <div id="wl-keys-list"></div>
    <div id="wl-keys-reveal"></div>
  </div>

  ${consoleSection}

${deckTopupHtml}

  <p class="legal" style="margin-top:34px;">${HONESTY}</p>
  </div>
</div>

<script>
// ── EZ mode: one click back to the simple wallet (Luca: the gamified
// terminal is hard to onboard). Preference persists; reload gives a clean
// boot either way — the island itself refuses to start when vc_ez=1. ──
(function(){
  var ez = false;
  try { ez = localStorage.getItem('vc_ez') === '1'; } catch (e) {}
  if (ez) {
    document.body.classList.add('ez');
    var dc = document.getElementById('dv-console');
    if (dc) dc.setAttribute('open', '');
  }
  var b = document.getElementById('vmode');
  if (b) {
    b.hidden = false;
    b.textContent = ez ? 'Switch to terminal view' : 'Switch to simple view';
    b.addEventListener('click', function(){
      try { localStorage.setItem('vc_ez', ez ? '0' : '1'); } catch (e) {}
      location.reload();
    });
  }
})();
</script>

<div class="mfog" id="mfog"></div>
<div class="msheet" id="msheet" role="dialog" aria-modal="true" aria-labelledby="m-title">
  <div class="eyebrow eyebrow--green">Move funds</div>
  <h3 id="m-title" style="font-size:21px; margin:10px 0 3px;">Fund lane</h3>
  <p class="mhint" id="m-avail"></p>
  <div class="mamt"><b>$</b><input id="m-amt" type="text" inputmode="decimal" placeholder="0.00" autocomplete="off" aria-label="Amount in dollars"></div>
  <div class="mchips" id="m-chips"></div>
  <p class="merr" id="m-err"></p>
  <div class="mrow">
    <button class="btnx btnx--lg" id="m-cancel">Cancel</button>
    <button class="btnx btnx--pri btnx--lg" id="m-go" disabled>Move funds</button>
  </div>
</div>
<div class="toast" id="toast"></div>

<script>
const $id = (i) => document.getElementById(i);
let mainBal = 0, fundTarget = null, toastTimer = null;

// ── the feel: coin-counter sound + rolling numbers ──
// Same WebAudio voice as the reserve page's keys — synthesized, no assets.
// Fund ticks rise in pitch (money flowing into the lane), sweep ticks fall
// (flowing home), both settling on a soft two-note confirm.
let AC = null;
function ac() { AC = AC || new (window.AudioContext || window.webkitAudioContext)(); return AC; }
function blip(freq, at, vol) {
  const a = ac(), o = a.createOscillator(), g = a.createGain();
  o.type = 'triangle'; o.frequency.value = freq;
  g.gain.setValueAtTime(vol, at);
  g.gain.exponentialRampToValueAtTime(0.0001, at + 0.045);
  o.connect(g); g.connect(a.destination); o.start(at); o.stop(at + 0.06);
}
function moveSound(dir) {
  try {
    const a = ac(); if (a.state === 'suspended') a.resume();
    const t0 = a.currentTime + 0.02, N = 9;
    for (let i = 0; i < N; i++) {
      const p = i / (N - 1);
      blip(dir === 'fund' ? 470 + 430 * p : 900 - 430 * p, t0 + i * 0.055, 0.035);
    }
    blip(660, t0 + N * 0.055 + 0.03, 0.06);
    blip(880, t0 + N * 0.055 + 0.1, 0.05);
  } catch {}
}

// Roll a $ element from its previous value to the new one, pulsing green on
// the way up, muted on the way down. Tabular digits keep the roll steady.
const prevVals = { main: null, agents: null, lanes: {} };
function rollMoney(el, from, to) {
  if (from == null || Math.abs(to - from) < 0.005) { el.textContent = '$' + to.toFixed(2); return; }
  el.classList.remove('bump-up', 'bump-dn');
  void el.offsetWidth;
  el.classList.add(to > from ? 'bump-up' : 'bump-dn');
  const t0 = performance.now(), D = 700;
  function frame(now) {
    const p = Math.min(1, (now - t0) / D), e = 1 - Math.pow(1 - p, 3);
    el.textContent = '$' + (from + (to - from) * e).toFixed(2);
    if (p < 1) requestAnimationFrame(frame);
    else setTimeout(() => el.classList.remove('bump-up', 'bump-dn'), 200);
  }
  requestAnimationFrame(frame);
}

function toast(html) {
  const t = $id('toast');
  t.innerHTML = html;
  t.classList.add('on');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('on'), 3200);
}

const ERRS = {
  insufficient_main_balance: "Main doesn't hold that much — lower the amount or sweep a lane back first.",
  bad_amount: 'Enter an amount above zero.',
  wallet_not_found: "That lane isn't available — refresh the page.",
  not_signed_in: 'Session expired — sign in again.',
};

function parseAmt() { return parseFloat($id('m-amt').value) || 0; }

function validateFund() {
  const usd = parseAmt();
  const ok = usd > 0 && usd <= mainBal + 1e-9;
  const go = $id('m-go');
  go.disabled = !ok;
  go.textContent = ok ? 'Move $' + usd.toFixed(2) : 'Move funds';
  if (ok) $id('m-err').style.display = 'none';
}

function openFund(w) {
  clearTimeout(toastTimer);
  $id('toast').classList.remove('on');
  fundTarget = w;
  $id('m-title').textContent = 'Fund ' + w.name;
  $id('m-avail').textContent = 'From Main · $' + mainBal.toFixed(2) + ' available';
  $id('m-amt').value = '';
  $id('m-err').style.display = 'none';
  const chips = $id('m-chips');
  chips.innerHTML = '';
  for (const v of [1, 5, 10].filter((v) => v <= mainBal)) {
    const b = document.createElement('button');
    b.className = 'mchip';
    b.textContent = '$' + v;
    b.onclick = () => { $id('m-amt').value = String(v); validateFund(); $id('m-amt').focus(); };
    chips.appendChild(b);
  }
  if (mainBal > 0) {
    const b = document.createElement('button');
    b.className = 'mchip';
    b.textContent = 'Max · $' + mainBal.toFixed(2);
    b.onclick = () => { $id('m-amt').value = mainBal.toFixed(2); validateFund(); $id('m-amt').focus(); };
    chips.appendChild(b);
  } else {
    const s = document.createElement('span');
    s.className = 'mhint';
    s.style.margin = '5px 0 0';
    s.textContent = 'Main is empty — sweep a lane back first';
    chips.appendChild(s);
  }
  const fog = $id('mfog'), sheet = $id('msheet');
  fog.style.display = 'block'; sheet.style.display = 'block';
  void sheet.offsetHeight;
  fog.classList.add('on'); sheet.classList.add('on');
  validateFund();
  setTimeout(() => $id('m-amt').focus(), 120);
}

function closeFund() {
  const fog = $id('mfog'), sheet = $id('msheet');
  fog.classList.remove('on'); sheet.classList.remove('on');
  fundTarget = null;
  setTimeout(() => { fog.style.display = 'none'; sheet.style.display = 'none'; }, 300);
}

async function submitFund() {
  const usd = parseAmt();
  if (!fundTarget || !(usd > 0)) return;
  const go = $id('m-go');
  go.disabled = true; go.textContent = 'Moving…';
  const target = fundTarget;
  try {
    const r = await fetch('/api/wallets/' + target.id + '/fund', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ usd }) });
    const j = await r.json();
    if (!r.ok) {
      const e = $id('m-err');
      e.textContent = ERRS[j.error] || "That didn't go through — try again.";
      e.style.display = 'block';
      validateFund();
      return;
    }
    closeFund();
    moveSound('fund');
    toast('Moved <b>$' + usd.toFixed(2) + '</b> to ' + target.name);
    load();
  } catch {
    const e = $id('m-err');
    e.textContent = 'Network hiccup — try again.';
    e.style.display = 'block';
    validateFund();
  }
}

$id('m-cancel').onclick = closeFund;
$id('mfog').onclick = closeFund;
$id('m-go').onclick = submitFund;
$id('m-amt').addEventListener('input', (e) => {
  const clean = e.target.value.replace(/[^0-9.]/g, '').replace(/(\\..*)\\./g, '$1');
  if (clean !== e.target.value) e.target.value = clean;
  validateFund();
});
$id('m-amt').addEventListener('keydown', (e) => { if (e.key === 'Enter') submitFund(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && fundTarget) closeFund(); });

  var armedAct = null; // 'rotate:<id>' | 'revoke:<id>'
  var keyTab = 'inference';
  var keysCache = null;
  function esc(t){ var d = document.createElement('div'); d.textContent = t == null ? '' : String(t); return d.innerHTML; }
  function scopeLabel(scope){ return scope === 'main' ? 'MAIN' : scope === 'inference' ? 'INFERENCE LANE' : 'DEV TOOLS LANE'; }
  function shortDate(t){
    if (!t) return null;
    var d = new Date(String(t).replace(' ', 'T') + 'Z');
    if (isNaN(d)) return null;
    return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
  }
  function revealBlock(title, key){
    return '<div class="wl-reveal"><div class="rt">' + esc(title) + ' — shown once, copy it now</div>' +
      '<div class="rk"><code>' + esc(key) + '</code><button class="btnx" data-copy="' + esc(key) + '">Copy</button></div></div>';
  }
  function renderKeys(d){
    if (d) keysCache = d;
    d = keysCache;
    if (!d) return;
    var list = document.getElementById('wl-keys-list');
    var bar = document.getElementById('wlk-bar');
    var tabs = document.getElementById('wlk-tabs');
    if (!d.scored) {
      bar.hidden = true;
      tabs.hidden = true;
      list.innerHTML =
        '<div class="wl-keyrow"><div><div class="kl">No keys yet</div>' +
        '<div class="kp">API keys unlock when your card is minted.</div></div>' +
        '<a class="btnx" style="text-decoration:none;" href="/onboard">Get your card</a></div>';
      return;
    }
    bar.hidden = false;
    tabs.hidden = false;
    var counts = { main: 0, inference: 0, devtools: 0 };
    (d.keys || []).forEach(function(k){ counts[k.scope] = (counts[k.scope] || 0) + 1; });
    // Keys are lane-scoped. A main-scoped key can only be a leftover the boot
    // migration could not re-point — surface it rather than hide it, and the
    // tab disappears by itself once the account has none.
    var TABS = [['inference', 'Inference lane'], ['devtools', 'Dev tools lane']];
    if (counts.main > 0) TABS.push(['main', 'Unscoped']);
    if (keyTab === 'main' && !counts.main) keyTab = 'inference';
    tabs.innerHTML = TABS.map(function(t){
      return '<button class="ktab' + (keyTab === t[0] ? ' on' : '') + '" data-ktab="' + t[0] + '">' + t[1] + '<span class="n">' + (counts[t[0]] || 0) + '</span></button>';
    }).join('');
    var scope = document.getElementById('wlk-scope');
    var opts = '';
    (d.wallets || []).forEach(function(w){
      var lbl = w.purpose === 'inference' ? 'Inference lane' : 'Developer tools lane';
      opts += '<option value="' + esc(w.id) + '">Spends: ' + lbl + '</option>';
    });
    scope.innerHTML = opts;
    var rows = (d.keys || []).filter(function(k){ return k.scope === keyTab; });
    if (!rows.length) {
      var msg = (d.keys || []).length === 0
        ? 'Create your first key to call the API.'
        : (keyTab === 'main' ? 'No unscoped keys — every key spends a lane.' : keyTab === 'inference' ? 'No keys for the Inference lane yet.' : 'No keys for the Developer tools lane yet.');
      list.innerHTML = '<div class="wl-keyrow"><div><div class="kl">No keys here</div>' +
        '<div class="kp">' + msg + '</div></div></div>';
      return;
    }
    list.innerHTML = rows.map(function(k){
      var made = shortDate(k.created_at);
      var used = shortDate(k.last_used_at);
      return '<div class="wl-keyrow"><div><div class="kl">' + esc(k.name) + '</div>' +
        '<div class="kp">' + esc(k.prefix) + '&hellip;</div>' +
        '<div class="kmeta"><span class="kscope">' + scopeLabel(k.scope) + '</span>' +
        '<span class="kdate">' + (made ? 'created ' + made : '') + (used ? ' &middot; last used ' + used : ' &middot; never used') + '</span></div></div>' +
        '<div class="kacts"><button class="btnx" data-krot="' + esc(k.id) + '">Rotate</button>' +
        '<button class="btnx" data-krev="' + esc(k.id) + '">Revoke</button></div></div>';
    }).join('');
  }
  function copyText(txt, done){
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(txt).then(done, function(){ copyFallback(txt); done(); });
    } else { copyFallback(txt); done(); }
  }
  function copyFallback(txt){
    var ta = document.createElement('textarea');
    ta.value = txt; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.left = '-9999px';
    document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); } catch (err) {}
    document.body.removeChild(ta);
  }
  function keyAction(path, payload, btn, idle, after){
    btn.disabled = true;
    fetch(path, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      .then(function(r){ return r.json(); })
      .then(function(j){ btn.disabled = false; btn.textContent = idle; after(j); })
      .catch(function(){ btn.disabled = false; btn.textContent = idle; });
  }
  document.getElementById('wlk-new').addEventListener('click', function(){
    document.getElementById('wlk-form').hidden = false;
    document.getElementById('wlk-bar').hidden = true;
    var sel = document.getElementById('wlk-scope');
    if (keyTab !== 'main' && keysCache) {
      var w = (keysCache.wallets || []).filter(function(x){ return x.purpose === keyTab; })[0];
      if (w) sel.value = w.id;
    }
    document.getElementById('wlk-name').focus();
  });
  document.getElementById('wlk-cancel').addEventListener('click', function(){
    document.getElementById('wlk-form').hidden = true;
    document.getElementById('wlk-bar').hidden = false;
  });
  document.getElementById('wlk-form').addEventListener('submit', function(e){
    e.preventDefault();
    var name = document.getElementById('wlk-name').value.trim();
    if (!name) { document.getElementById('wlk-name').focus(); return; }
    var btn = document.querySelector('#wlk-form [type=submit]');
    var scopeVal = document.getElementById('wlk-scope').value;
    keyAction('/api/keys/create', { name: name, scope: scopeVal }, btn, 'Create key', function(j){
      if (!j.ok) return;
      if (keysCache) {
        var w = (keysCache.wallets || []).filter(function(x){ return x.id === scopeVal; })[0];
        if (w) keyTab = w.purpose;
      }
      document.getElementById('wlk-name').value = '';
      document.getElementById('wlk-form').hidden = true;
      document.getElementById('wlk-bar').hidden = false;
      document.getElementById('wl-keys-reveal').innerHTML = revealBlock(j.name, j.key_reveal);
      load();
    });
  });
  document.addEventListener('click', function(e){
    var kt = e.target.closest('[data-ktab]');
    if (kt) { keyTab = kt.getAttribute('data-ktab'); renderKeys(null); return; }
    var cp = e.target.closest('[data-copy]');
    if (cp) {
      copyText(cp.getAttribute('data-copy'), function(){
        cp.textContent = 'Copied';
        setTimeout(function(){ cp.textContent = 'Copy'; }, 1600);
      });
      return;
    }
    var rot = e.target.closest('[data-krot]');
    var rev = e.target.closest('[data-krev]');
    var b = rot || rev; if (!b) return;
    var id = b.getAttribute(rot ? 'data-krot' : 'data-krev');
    var act = (rot ? 'rotate:' : 'revoke:') + id;
    var idle = rot ? 'Rotate' : 'Revoke';
    if (armedAct !== act) {
      armedAct = act;
      b.textContent = rot ? 'Confirm — old key dies' : 'Confirm — key dies';
      setTimeout(function(){ if (armedAct === act) { armedAct = null; b.textContent = idle; } }, 3500);
      return;
    }
    armedAct = null;
    keyAction(rot ? '/api/keys/rotate' : '/api/keys/revoke', { id: id }, b, idle, function(j){
      if (!j.ok) return;
      if (rot) document.getElementById('wl-keys-reveal').innerHTML = revealBlock(j.name, j.key_reveal);
      load();
    });
  });

async function load() {
  const r = await fetch('/api/wallets');
  if (!r.ok) { location.href = '/login?next=%2Fwallets'; return; }
  const d = await r.json();
  const agents = d.wallets.reduce((a, w) => a + w.balance_usd, 0);
  const total = d.main_balance_usd + agents;
  mainBal = d.main_balance_usd;
  rollMoney(document.getElementById('wl-main'), prevVals.main, d.main_balance_usd);
  rollMoney(document.getElementById('wl-agents'), prevVals.agents, agents);
  prevVals.main = d.main_balance_usd;
  prevVals.agents = agents;
  document.getElementById('wl-bar-main').style.width = total > 0 ? (d.main_balance_usd / total * 100) + '%' : '100%';
  document.getElementById('wl-bar-agents').style.width = total > 0 ? (agents / total * 100) + '%' : '0%';
  renderKeys(d);
  const COPY = {
    inference: 'Spends on the model rail — DeepSeek V4 Flash today, more models as they land.',
    devtools: 'Reserved for the metered catalog — search, on-chain data, crawling, voice. Routes opening soon.',
  };
  const list = document.getElementById('wl-list');
  list.innerHTML = '';
  for (const w of d.wallets) {
    const row = document.createElement('div');
    row.className = 'wl-row';
    const st = w.status === 'ready' ? '<span class="wl-st wl-st--ok">Ready to spend</span>'
      : w.status === 'routes_soon' ? '<span class="wl-st wl-st--nf">Routes opening soon</span>'
      : '<span class="wl-st wl-st--nf">Needs funds</span>';
    row.innerHTML = '<div style="max-width:420px;"><div class="wl-n"></div><div class="wl-d"></div><div class="wl-sub" style="margin:6px 0 0;"></div></div>' +
      st + '<span class="wl-bal"></span>' +
      '<span class="wl-act"><button class="btnx btnx--pri" data-a="fund">Fund</button><button class="btnx" data-a="sweep">Sweep</button></span>';
    rollMoney(row.querySelector('.wl-bal'), prevVals.lanes[w.id], w.balance_usd);
    prevVals.lanes[w.id] = w.balance_usd;
    row.querySelector('.wl-n').textContent = w.name;
    row.querySelector('.wl-d').textContent = (w.key_prefix ? w.key_prefix + '…' : 'key at launch') + ' · spent $' + w.consumed_usd.toFixed(2);
    row.querySelector('.wl-sub').textContent = COPY[w.purpose] || '';
    row.querySelector('[data-a="fund"]').onclick = () => openFund(w);
    row.querySelector('[data-a="sweep"]').onclick = async () => {
      const rr = await fetch('/api/wallets/' + w.id + '/sweep', { method: 'POST' });
      const j = await rr.json().catch(() => ({}));
      if (rr.ok && j.swept > 0) { moveSound('sweep'); toast('Swept <b>$' + j.swept.toFixed(2) + '</b> back to Main'); }
      else if (rr.ok) toast(w.name + ' is already empty');
      load();
    };
    list.appendChild(row);
  }
  // the device island renders these same numbers on its screen
  dispatchEvent(new CustomEvent('vc-balances', { detail: { main: d.main_balance_usd, wallets: d.wallets } }));
}
load();

// ── bridge: the 3D device asks, this page's existing machinery answers ──
addEventListener('vc-device-fund', (e) => {
  const w = e.detail || {};
  if (w.id) openFund({ id: w.id, name: w.name || 'lane' });
});
addEventListener('vc-device-sweep', async (e) => {
  const w = e.detail || {};
  if (!w.id) return;
  const rr = await fetch('/api/wallets/' + w.id + '/sweep', { method: 'POST' });
  const j = await rr.json().catch(() => ({}));
  if (rr.ok && j.swept > 0) { moveSound('sweep'); toast('Swept <b>$' + j.swept.toFixed(2) + '</b> back to Main'); }
  else if (rr.ok) toast((w.name || 'Lane') + ' is already empty');
  load();
});

// ── first-call activation: auto-fund an empty lane, fire one REAL call ──
(function () {
  const panel = document.getElementById('fr-panel');
  if (!panel) return;
  const fire = document.getElementById('fr-fire'), promptEl = document.getElementById('fr-prompt');
  const out = document.getElementById('fr-out'), err = document.getElementById('fr-err');
  const fail = (m) => { err.textContent = m; err.hidden = false; fire.disabled = false; fire.textContent = 'Fire'; };
  fire.addEventListener('click', async () => {
    err.hidden = true; fire.disabled = true; fire.textContent = 'Firing…';
    try {
      // The lane mechanic, taught live: grants sit on Main; the playground
      // bills the Inference lane, so a dry lane gets $1 moved in first.
      const laneUsd = parseFloat(panel.dataset.laneUsd || '0'), mainUsd = parseFloat(panel.dataset.mainUsd || '0');
      if (laneUsd < 0.1) {
        if (mainUsd < 0.05) return fail('Your balance is empty — earn credits from the tasks in your account, then come back.');
        const fr = await fetch('/api/wallets/' + panel.dataset.lane + '/fund', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ usd: Math.min(1, mainUsd) }) });
        if (!fr.ok) return fail('Could not fund the Inference lane — try the Fund button on the lane below.');
        panel.dataset.laneUsd = '1';
      }
      const r = await fetch('/api/playground/fire', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ prompt: promptEl.value || 'Say hello.', stream: false }) });
      const j = await r.json().catch(() => ({}));
      if (!r.ok) {
        if (j.error === 'rate_limited') return fail('Rate limited — wait ' + (j.retry_after_sec || 10) + 's and fire again.');
        if (j.error === 'insufficient_credits' || j.error === 'lane_empty') return fail('Not enough in the Inference lane — use Fund on the lane below.');
        return fail('The rail did not answer (' + (j.error || r.status) + ') — try again in a moment.');
      }
      document.getElementById('fr-reply').textContent = j.text || '';
      document.getElementById('fr-settle').textContent =
        j.tokens_in + ' in / ' + j.tokens_out + ' out · $' + Number(j.cost_usd || 0).toFixed(6) +
        ' settled · ' + Number(j.vantis_burned || 0).toFixed(4) + ' $VANTIS retired @ $' +
        Number(j.vantis_price_usd || 0).toFixed(6) + ' · lane $' + Number(j.lane_balance_usd || 0).toFixed(2);
      document.getElementById('fr-eyebrow').textContent = 'First call — settled';
      panel.querySelector('.fr-h').textContent = 'That was real. The meter ran, the burn is on your ledger.';
      out.hidden = false; fire.textContent = 'Fire again';
      fire.disabled = false; load();
    } catch (e) { fail('Network hiccup — fire again.'); }
  });
})();
</script>
${deckJs}
${deviceIsland ? `<script type="module" src="/assets/${deviceIsland}"></script>` : ""}
</body>
</html>`;
}
