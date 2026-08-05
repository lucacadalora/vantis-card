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

const HONESTY = `Virtual credits, not a token sale. Balances live in a database, are non-transferable, have no monetary value, and are redeemable only against AI inference on the Vantis rail. &ldquo;Burn&rdquo; here is a virtual ledger: the dollar cost of each call is converted to $VANTIS at the live market price and retired from your balance &mdash; no on-chain tokens are transferred or destroyed. On-chain burns, when they happen, are tracked at <a href="https://vantis.sh/burns" target="_blank" rel="noopener">vantis.sh/burns</a>.`;

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

export function landingHtml(): string {
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
  <a class="announce-cta" href="/onboard">Get $5&ndash;25 free</a>
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
      <a class="btn btn--primary btn--sm" href="/onboard">Get your card</a>
    </div>
  </div>
</nav>

<header class="hero">
  <div class="wrap hero-grid">
    <div>
      <div class="eyebrow eyebrow--green">Vantis Cards</div>
      <h1>Get scored.<br>Get credits.<br>Burn <span class="mark">$VANTIS</span>.</h1>
      <p class="lede">An AI research agent reads your public builder profile and grants you $5&ndash;25 in $VANTIS inference credits. Spend them on one model through one endpoint &mdash; and every call retires $VANTIS at the live market price.</p>
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
        <div class="proof-v num green" id="s-burn">&mdash;</div>
        <div class="proof-s" id="s-burn-usd">retired against real inference</div>
      </div>
      <div class="proof-i">
        <div class="proof-k">Inference calls</div>
        <div class="proof-v num" id="s-calls">&mdash;</div>
        <div class="proof-s">settled from real token usage</div>
      </div>
      <div class="proof-i">
        <div class="proof-k">Cards issued</div>
        <div class="proof-v num" id="s-cards">&mdash;</div>
        <div class="proof-s">one of one, per builder</div>
      </div>
      <div class="proof-i">
        <div class="proof-k">$VANTIS price</div>
        <div class="proof-v num" id="s-price">&mdash;</div>
        <div class="proof-s">live, deepest pool</div>
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
        <p>Your score sets your tier. You receive $5&ndash;25 in $VANTIS credits, an API key, and a one-of-one card you can share.</p>
      </div>
      <div class="step">
        <div class="step-n">04</div>
        <h3>Burn as you build</h3>
        <p>Point any OpenAI-compatible client at the endpoint. Each call bills its real cost and retires the $VANTIS equivalent.</p>
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
              <div class="v" id="m-in">&mdash;</div>
              <div class="s">per 1M tokens</div>
            </div>
            <div class="pricecell">
              <div class="k">Output</div>
              <div class="v" id="m-out">&mdash;</div>
              <div class="s">per 1M tokens</div>
            </div>
            <div class="pricecell">
              <div class="k">Burned per 1M out</div>
              <div class="v green num" id="m-burn">&mdash;</div>
              <div class="s">at the live price</div>
            </div>
            <div class="pricecell">
              <div class="k">A $25 grant buys</div>
              <div class="v num" id="m-buys">&mdash;</div>
              <div class="s">output tokens</div>
            </div>
          </div>
        </div>
        <div class="eyebrow eyebrow--onDark">Sole model</div>
        <h3 id="m-name">DeepSeek V4 Flash 0731</h3>
        <p class="lede">Published first-party pricing, billed to six decimal places. Any other model id is refused rather than quietly rerouted.</p>
        <div class="serving" id="m-serving"></div>
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
        <h2>Four tiers, scored on five dimensions</h2>
        <p class="lede">Technical depth, influence, purchasing power, crypto fluency and real-world signals &mdash; each rated out of 20 by the research agent.</p>
      </div>
      <a class="arrowlink" href="/onboard">Get scored ${ARROW}</a>
    </div>
    <div class="cat">
      <div class="cat-grid">
        <div class="cat-i">
          <div class="cat-n">Whale <span class="cat-b">TOP</span></div>
          <div class="cat-d">High influence, deep technical signal and real purchasing power.</div>
          <div class="cat-m">Score 80&ndash;100 · $25</div>
        </div>
        <div class="cat-i">
          <div class="cat-n">Builder</div>
          <div class="cat-d">Strong technical depth. You are visibly shipping things.</div>
          <div class="cat-m">Score 60&ndash;79 · $15</div>
        </div>
        <div class="cat-i">
          <div class="cat-n">Explorer</div>
          <div class="cat-d">Real signals present, still early in the public record.</div>
          <div class="cat-m">Score 40&ndash;59 · $10</div>
        </div>
        <div class="cat-i">
          <div class="cat-n">Noise</div>
          <div class="cat-d">Minimal public signal. The grant still works.</div>
          <div class="cat-m">Score 0&ndash;39 · $5</div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="sec--tight sec--wash">
  <div class="wrap">
    <div class="trust">
      <div class="trust-i">Virtual credits</div>
      <div class="trust-i">Non-transferable</div>
      <div class="trust-i">No monetary value</div>
      <div class="trust-i">Off-chain ledger</div>
      <div class="trust-i">Inference only</div>
      <div class="trust-i">No purchase required</div>
    </div>
  </div>
</section>

<section class="sec cta">
  <div class="wrap">
    <h2>Your card is one sign-in away.</h2>
    <p class="lede">Connect X, get scored, and start burning $VANTIS on real inference in about a minute.</p>
    <div class="btnrow">
      <a class="btn btn--primary" href="/onboard">Get your card</a>
    </div>
  </div>
</section>

<footer class="foot">
  <div class="wrap">
    <div class="foot-top">
      <a class="brand" href="/">${V_MARK} VANTIS <span class="sub">CARDS</span></a>
      <div class="foot-links">
        <a href="#how">How it works</a>
        <a href="#api">API</a>
        <a href="#model">Model</a>
        <a href="#tiers">Tiers</a>
        <a href="https://vantis.sh" target="_blank" rel="noopener">vantis.sh</a>
        <a href="https://vantis.sh/burns" target="_blank" rel="noopener">Burns</a>
      </div>
    </div>
    <p class="legal">${HONESTY}</p>
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
export function onboardHtml(providers: { twitter: boolean; github: boolean; linkedin: boolean }): string {
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
  <div class="eyebrow eyebrow--green">Step 1 of 2</div>
  <h1 style="font-size:clamp(30px,4.4vw,42px); margin:14px 0 14px;">Connect your profiles</h1>
  <p class="lede" style="margin-bottom:32px;">X sign-in verifies who you are. GitHub and LinkedIn are optional &mdash; each one gives the scoring agent more real signal, which usually means a larger grant.</p>

${row("twitter", "X / Twitter", "Identity and anti-bot check. This is the one that signs you in.", true, providers.twitter)}

  <div class="divider"><span>Raise your score</span></div>

${row("github", "GitHub", "Repositories, languages and contribution activity.", false, providers.github)}
${row("linkedin", "LinkedIn", "Role, company and industry signals.", false, providers.linkedin)}

  <div class="panel">
    <h3>What you get</h3>
    <p><span class="hl">$5&ndash;25 in $VANTIS credits</span>, an OpenAI-compatible API key, and a one-of-one card. Credits are spent on real inference with DeepSeek V4 Flash 0731 &mdash; every call retires $VANTIS at the live market price.</p>
  </div>

  <p class="legal" style="margin-top:26px;">${HONESTY}</p>
</div>

<script>
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
</script>
</body>
</html>`;
}

// ─── Score page ───
export function scorePageHtml(uid: string | null, step: string | null, providers: { github: boolean; linkedin: boolean }): string {
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
      <div class="bars">
        <div class="brow" id="b1"><span class="bdot"></span>Reading your connected profiles</div>
        <div class="brow" id="b2"><span class="bdot"></span>Searching the web for corroborating signal</div>
        <div class="brow" id="b3"><span class="bdot"></span>Scoring five dimensions on the rail</div>
        <div class="brow" id="b4"><span class="bdot"></span>Minting your card and key</div>
      </div>
    </div>
    <p class="legal" style="margin-top:20px; text-align:center;">This usually takes under a minute.</p>
  </div>

  <div id="result" style="display:none;">
    <div class="eyebrow eyebrow--green">Scored</div>
    <div class="scorehero" style="margin:14px 0 10px;">
      <div class="scorenum" id="score">0</div>
      <div class="scoreof">/ 100</div>
    </div>
    <div class="tierpill" id="tier">&mdash;</div>
    <div class="dims" id="dims"></div>
    <p class="lede" id="reasoning" style="margin:22px 0 26px; font-size:15px;"></p>

    <div style="border-top:1px solid var(--line); padding-top:22px;">
      <div class="grantline" id="grant">&mdash;</div>
      <div style="font-family:var(--mono); font-size:12.5px; color:var(--muted); margin-top:4px;" id="grant-v"></div>
    </div>

    <div style="margin-top:24px;">
      <div class="eyebrow">Your API key</div>
      <div class="keybox" id="api-key">&mdash;</div>
      <p style="font-size:12.5px; color:var(--muted); margin-top:8px;">Send it as <span style="font-family:var(--mono)">Authorization: Bearer &lt;key&gt;</span> to <span style="font-family:var(--mono)">card.vantis.sh/v1/chat/completions</span>. Copy it now &mdash; this is the only time it is shown in full.</p>
    </div>

    <div class="btnrow" style="margin-top:28px;">
      <a class="btn btn--primary" id="card-link" href="#">View your card</a>
      <a class="btn btn--ghost" id="share-btn" href="#">Share on X</a>
    </div>
  </div>

  <p class="legal" style="margin-top:34px;">${HONESTY}</p>
</div>

<script>
const uid = ${JSON.stringify(uid)};
const step = ${JSON.stringify(step || "")};
const show = (id, on) => { document.getElementById(id).style.display = on ? 'block' : 'none'; };

if (step === 'score') runScore();

function stage(n) {
  for (let i = 1; i <= 4; i++) {
    const el = document.getElementById('b' + i);
    el.classList.toggle('on', i === n);
    el.classList.toggle('done', i < n);
  }
}

async function runScore() {
  show('connect-more', false); show('result', false); show('loading', true);
  stage(1);
  const t2 = setTimeout(() => stage(2), 1800);
  const t3 = setTimeout(() => stage(3), 6000);
  const t4 = setTimeout(() => stage(4), 16000);

  try {
    const res = await fetch('/onboard/score', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ uid }),
    });
    const data = await res.json();
    if (data.error) throw new Error(data.error);
    [t2,t3,t4].forEach(clearTimeout);

    show('loading', false); show('result', true);

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
    document.getElementById('grant').textContent = '$' + data.grantUsd + ' in $VANTIS credits';
    document.getElementById('grant-v').textContent = '≈ ' + Number(data.grantVantis).toLocaleString(undefined,{maximumFractionDigits:0}) + ' VANTIS at $' + Number(data.vantisPrice).toFixed(6);
    document.getElementById('reasoning').textContent = data.reasoning || '';
    document.getElementById('api-key').textContent = data.apiKey || 'Error generating key';

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
    const shareText = encodeURIComponent('Just minted my Vantis Card — $' + data.grantUsd + ' in $VANTIS inference credits. Score ' + data.score + '/100 · ' + String(data.tier).toUpperCase() + ' tier. Every call burns $VANTIS.');
    document.getElementById('share-btn').href = 'https://twitter.com/intent/tweet?text=' + shareText + '&url=' + encodeURIComponent('https://card.vantis.sh/card/' + handle);
  } catch (err) {
    [t2,t3,t4].forEach(clearTimeout);
    show('loading', false); show('connect-more', true);
    alert('Scoring failed: ' + err.message + ' — please try again.');
  }
}
</script>
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

export function cardHtml(card: any, opts: { vantisPrice: number; userBurned: number; balanceUsd: number }): string {
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
<meta property="og:description" content="$${esc(grantStr)} in $VANTIS inference credits · ${esc(tier.label)} tier. Every call burns $VANTIS.">
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

  <a href="https://twitter.com/intent/tweet?text=${encodeURIComponent(`Just minted my Vantis Card — $${grantStr} in $VANTIS inference credits. ${tier.label} tier. Every call burns $VANTIS.`)}&url=${encodeURIComponent(`https://card.vantis.sh/card/${handle}`)}" class="share-btn">
    𝕏 Share on X
  </a>

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
