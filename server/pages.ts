// HTML pages — Vantis light system: canvas white, ink black, signal green
// #09F875, striped-V mark dark-on-green. Display face is Space Grotesk when
// available, falling back to the system stack.

import { tierInfo } from "./credits";
import { formatVantis } from "./price";

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

const HONESTY = `Virtual credits, not a token sale. Balances live in a database, are non-transferable, have no monetary value, and are redeemable only against AI inference on api.jatevo.ai. &ldquo;Burn&rdquo; here is a virtual ledger: the dollar cost of each call is converted to $VANTIS at the live market price and retired from your balance &mdash; no on-chain tokens are transferred or destroyed. On-chain burns, when they happen, are tracked at <a href="https://vantis.sh/burns" target="_blank" rel="noopener">vantis.sh/burns</a>.`;

// ─── Landing ───
export function landingHtml(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Vantis Cards — AI-scored onboarding for the Jatevo inference rail</title>
<meta name="description" content="Connect your profiles, get AI-scored, receive $VANTIS inference credits. Every call runs on api.jatevo.ai and virtually burns $VANTIS at live market price.">
<style>
${BASE_CSS}
.hero { max-width:880px; margin:0 auto; padding:72px 24px 40px; text-align:center; }
.hero h1 { font-family:var(--display); font-size:clamp(34px,6vw,58px); font-weight:700; letter-spacing:-0.02em; line-height:1.05; }
.hero h1 .g { background:var(--green); padding:0 10px; }
.hero .sub { margin:20px auto 0; max-width:560px; color:var(--dim); font-size:17px; line-height:1.6; }
.cta-row { margin-top:32px; display:flex; gap:12px; justify-content:center; flex-wrap:wrap; }
.stats { max-width:880px; margin:32px auto 0; padding:0 24px; display:grid; grid-template-columns:repeat(auto-fit,minmax(180px,1fr)); gap:12px; }
.stat { border:1px solid var(--line); background:#fff; border-radius:14px; padding:18px 16px; text-align:left; }
.stat .k { font-size:11px; text-transform:uppercase; letter-spacing:0.08em; color:var(--dim); }
.stat .v { font-family:var(--display); font-size:26px; font-weight:700; margin-top:6px; }
.stat .v.burn { color:#0B7A3E; }
.stat .s { font-size:11px; color:var(--dim); margin-top:4px; }
.section { max-width:880px; margin:56px auto 0; padding:0 24px; }
.section h2 { font-family:var(--display); font-size:22px; font-weight:700; margin-bottom:18px; }
.steps { display:grid; grid-template-columns:repeat(auto-fit,minmax(190px,1fr)); gap:12px; }
.step { border:1px solid var(--line); background:#fff; border-radius:14px; padding:18px 16px; }
.step .n { font-family:var(--mono); font-size:12px; color:var(--dim); }
.step .t { font-family:var(--display); font-weight:700; margin:8px 0 6px; }
.step p { font-size:13px; color:var(--dim); line-height:1.55; }
.tiers { display:grid; grid-template-columns:repeat(auto-fit,minmax(160px,1fr)); gap:12px; }
.tier { border:1px solid var(--line); background:#fff; border-radius:14px; padding:16px; }
.tier .e { font-size:22px; }
.tier .l { font-family:var(--display); font-weight:700; margin-top:6px; }
.tier .r { font-family:var(--mono); font-size:12px; color:var(--dim); }
.tier .a { color:#0B7A3E; font-weight:700; margin-top:4px; }
table.px { width:100%; border-collapse:collapse; background:#fff; border:1px solid var(--line); border-radius:14px; overflow:hidden; font-size:13px; }
table.px th, table.px td { text-align:left; padding:10px 14px; border-bottom:1px solid var(--line); }
table.px th { font-size:11px; text-transform:uppercase; letter-spacing:0.08em; color:var(--dim); font-weight:600; }
table.px td.m { font-family:var(--mono); font-size:12px; }
table.px td.n { font-family:var(--mono); font-size:12px; text-align:right; }
table.px th.n { text-align:right; }
table.px tr:last-child td { border-bottom:none; }
.tablewrap { overflow-x:auto; }
.burnline { margin-top:10px; font-size:13px; color:var(--dim); }
footer { max-width:880px; margin:64px auto 0; padding:24px; border-top:1px solid var(--line); }
</style>
</head>
<body>
<div class="topbar">
  <a class="brand" href="/">${V_MARK} VANTIS <span class="tag">CARDS</span></a>
  <a class="toplink" href="https://vantis.sh" target="_blank" rel="noopener">vantis.sh ↗</a>
</div>

<div class="hero">
  <h1>Connect. Get scored.<br>Build on the <span class="g">rail</span>.</h1>
  <div class="sub">An AI research agent scores your public builder profile and grants you $5&ndash;25 in <b>$VANTIS credits</b> for the Jatevo inference API. Every call you make runs real inference on <b>api.jatevo.ai</b> &mdash; and virtually burns $VANTIS at the live market price.</div>
  <div class="cta-row">
    <a class="btn btn-primary" href="/onboard">Get your card</a>
    <a class="btn btn-green" href="#burn">Watch the burn</a>
  </div>
</div>

<div class="stats" id="burn">
  <div class="stat"><div class="k">$VANTIS virtually burned</div><div class="v burn" id="s-burn">—</div><div class="s" id="s-burn-usd"></div></div>
  <div class="stat"><div class="k">Inference calls</div><div class="v" id="s-calls">—</div><div class="s">real calls on api.jatevo.ai</div></div>
  <div class="stat"><div class="k">Cards issued</div><div class="v" id="s-cards">—</div><div class="s">one per builder</div></div>
  <div class="stat"><div class="k">$VANTIS price</div><div class="v" id="s-price">—</div><div class="s" id="s-price-src">live · DexScreener deepest pool</div></div>
</div>

<div class="section">
  <h2>How it works</h2>
  <div class="steps">
    <div class="step"><div class="n">01</div><div class="t">Connect X</div><p>X login is required &mdash; it is your identity and the anti-bot gate. GitHub and LinkedIn are optional and raise your score.</p></div>
    <div class="step"><div class="n">02</div><div class="t">AI scores you</div><p>A research agent reads your OAuth data, enriches it with live web search, and scores five dimensions on Jatevo inference.</p></div>
    <div class="step"><div class="n">03</div><div class="t">Credits + card</div><p>Score sets your tier: $5&ndash;25 in $VANTIS credits, an API key, and a shareable card.</p></div>
    <div class="step"><div class="n">04</div><div class="t">Burn as you build</div><p>Point your OpenAI-style client at this endpoint. Each call bills its real Jatevo cost and virtually burns the $VANTIS equivalent.</p></div>
  </div>
</div>

<div class="section">
  <h2>Tiers</h2>
  <div class="tiers">
    <div class="tier"><div class="e">🐋</div><div class="l">Whale</div><div class="r">score 80&ndash;100</div><div class="a">$25 in $VANTIS</div></div>
    <div class="tier"><div class="e">🔨</div><div class="l">Builder</div><div class="r">score 60&ndash;79</div><div class="a">$15 in $VANTIS</div></div>
    <div class="tier"><div class="e">🧭</div><div class="l">Explorer</div><div class="r">score 40&ndash;59</div><div class="a">$10 in $VANTIS</div></div>
    <div class="tier"><div class="e">📡</div><div class="l">Noise</div><div class="r">score 0&ndash;39</div><div class="a">$5 in $VANTIS</div></div>
  </div>
</div>

<div class="section">
  <h2>Models &amp; burn rates</h2>
  <div class="tablewrap"><table class="px" id="px-table">
    <thead><tr><th>Model</th><th class="n">$ / 1M in</th><th class="n">$ / 1M out</th><th class="n">$VANTIS burned / 1M out</th></tr></thead>
    <tbody><tr><td colspan="4" style="color:var(--dim)">Loading…</td></tr></tbody>
  </table></div>
  <div class="burnline">Burn column moves with the live $VANTIS price. Endpoint: <code style="font-family:var(--mono)">POST https://card.vantis.sh/v1/chat/completions</code> — OpenAI-compatible, non-streaming.</div>
</div>

<footer>
  <div class="footnote">${HONESTY}</div>
</footer>

<script>
function fmtV(n){ if(n>=1e6)return (n/1e6).toFixed(2)+'M'; if(n>=1e3)return (n/1e3).toFixed(1)+'K'; if(n>=1)return n.toFixed(2); return n.toFixed(4); }
function load(){
  fetch('/burn/stats').then(r=>r.json()).then(d=>{
    document.getElementById('s-burn').textContent = fmtV(d.vantis_burned_total)+' VANTIS';
    var usd = d.usd_consumed_total;
    var usdStr = usd === 0 ? '$0' : usd < 0.01 ? '$'+usd.toFixed(6) : '$'+usd.toFixed(2);
    document.getElementById('s-burn-usd').textContent = usdStr+' of real inference retired';
    document.getElementById('s-calls').textContent = d.inference_calls.toLocaleString();
    document.getElementById('s-cards').textContent = d.cards_issued.toLocaleString();
    document.getElementById('s-price').textContent = '$'+Number(d.vantis_price_usd).toFixed(6);
    var tb = document.querySelector('#px-table tbody');
    if (d.pricing && d.pricing.length) {
      tb.innerHTML = d.pricing.map(function(p){
        var burnOut = d.vantis_price_usd > 0 ? p.usd_per_1m_output / d.vantis_price_usd : 0;
        return '<tr><td class="m">'+p.model+'</td><td class="n">$'+p.usd_per_1m_input.toFixed(2)+'</td><td class="n">$'+p.usd_per_1m_output.toFixed(2)+'</td><td class="n">'+fmtV(burnOut)+'</td></tr>';
      }).join('');
    }
  }).catch(function(){});
}
load(); setInterval(load, 60000);
</script>
</body>
</html>`;
}

// ─── Onboard ───
export function onboardHtml(providers: { twitter: boolean; github: boolean; linkedin: boolean }): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Vantis Cards — Get your card</title>
<style>
${BASE_CSS}
body { display:flex; flex-direction:column; }
.container { max-width:480px; width:92%; margin:auto; text-align:center; padding:48px 0; }
.logo { font-family:var(--display); font-size:26px; font-weight:700; margin-bottom:8px; display:flex; align-items:center; justify-content:center; gap:10px; }
.logo .vmark { height:24px; }
.subtitle { color:var(--dim); margin-bottom:32px; font-size:15px; line-height:1.6; }
.connect-btn { display:flex; align-items:center; justify-content:center; gap:10px; width:100%; padding:14px 20px; border-radius:12px; font-family:var(--display); font-size:15px; font-weight:600; cursor:pointer; border:1px solid var(--line); margin-bottom:12px; transition:transform .15s ease; text-decoration:none; }
.connect-btn:hover { transform:translateY(-1px); }
.btn-x { background:var(--ink); color:#fff; }
.btn-github { background:#24292e; color:#fff; }
.btn-linkedin { background:#0A66C2; color:#fff; }
.btn-disabled { opacity:0.4; cursor:not-allowed; pointer-events:none; }
.divider { color:var(--dim); margin:16px 0; font-size:13px; }
.required-tag { font-size:11px; color:var(--green); margin-left:4px; background:var(--ink); padding:2px 7px; border-radius:20px; }
.optional-tag { font-size:11px; color:var(--dim); margin-left:4px; }
.pending-tag { font-size:11px; color:#B45309; margin-left:4px; }
.bonus-info { margin-top:24px; padding:16px; background:#fff; border:1px solid var(--line); border-radius:12px; font-size:13px; color:var(--dim); line-height:1.6; text-align:left; }
.bonus-info b { color:var(--ink); }
.bonus-info .hl { background:var(--green); color:var(--ink); padding:0 4px; font-weight:600; }
.foot { margin:0 auto; max-width:480px; width:92%; padding:16px 0 32px; }
</style>
</head>
<body>
<div class="topbar">
  <a class="brand" href="/">${V_MARK} VANTIS <span class="tag">CARDS</span></a>
  <a class="toplink" href="https://vantis.sh" target="_blank" rel="noopener">vantis.sh ↗</a>
</div>
<div class="container">
  <div class="logo">${V_MARK} Vantis Cards</div>
  <div class="subtitle">Connect your profiles. Get scored. Receive $VANTIS credits and build on the Jatevo inference rail.</div>

  <a href="/oauth/connect/twitter" class="connect-btn btn-x ${providers.twitter ? "" : "btn-disabled"}" id="x-btn">
    𝕏 Connect X / Twitter <span class="${providers.twitter ? "required-tag" : "pending-tag"}">${providers.twitter ? "required" : "opening soon"}</span>
  </a>

  <div class="divider">— connect more for a higher score —</div>

  <a href="/oauth/connect/github" class="connect-btn btn-github btn-disabled" id="github-btn">
    🐙 Connect GitHub <span class="${providers.github ? "optional-tag" : "pending-tag"}">${providers.github ? "+higher score" : "opening soon"}</span>
  </a>

  <a href="/oauth/connect/linkedin" class="connect-btn btn-linkedin btn-disabled" id="linkedin-btn">
    in&nbsp; Connect LinkedIn <span class="${providers.linkedin ? "optional-tag" : "pending-tag"}">${providers.linkedin ? "+higher score" : "opening soon"}</span>
  </a>

  <div class="bonus-info">
    An AI research agent scores your profile and grants <span class="hl">$5&ndash;25 in $VANTIS credits</span>, an API key, and a shareable card.<br><br>
    Credits are spent on real inference at <b>api.jatevo.ai</b> — every call virtually burns $VANTIS at the live market price.
  </div>
</div>
<div class="foot"><div class="footnote">${HONESTY}</div></div>
<script>
const providers = ${JSON.stringify(providers)};
const urlParams = new URLSearchParams(window.location.search);
const uid = urlParams.get('uid');
if (uid) {
  if (providers.github) {
    const b = document.getElementById('github-btn');
    b.classList.remove('btn-disabled');
    b.href = '/oauth/connect/github?uid=' + encodeURIComponent(uid);
  }
  if (providers.linkedin) {
    const b = document.getElementById('linkedin-btn');
    b.classList.remove('btn-disabled');
    b.href = '/oauth/connect/linkedin?uid=' + encodeURIComponent(uid);
  }
}
</script>
</body>
</html>`;
}

// ─── Score page ───
export function scorePageHtml(uid: string | null, step: string | null, providers: { github: boolean; linkedin: boolean }): string {
  if (!uid) return `<!DOCTYPE html><html><body style="font-family:sans-serif;padding:40px;">Error: no user session. <a href="/onboard">Start over</a></body></html>`;
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Vantis Cards — Scoring</title>
<style>
${BASE_CSS}
body { display:flex; }
.container { max-width:520px; width:92%; margin:auto; text-align:center; padding:48px 0; }
.spinner { width:40px; height:40px; border:3px solid var(--line); border-top:3px solid var(--green); border-radius:50%; animation:spin 1s linear infinite; margin:0 auto 24px; }
@keyframes spin { to { transform:rotate(360deg); } }
.status { color:var(--dim); margin-bottom:8px; font-size:16px; }
.step { color:#0B7A3E; font-size:13px; margin-bottom:24px; font-family:var(--mono); }
.btn2 { display:inline-block; padding:12px 24px; border-radius:12px; font-family:var(--display); font-weight:600; text-decoration:none; margin:4px; font-size:14px; }
.btn-score { background:var(--ink); color:var(--green); border:none; cursor:pointer; }
.btn-connect { background:#fff; color:var(--ink); border:1px solid var(--line); }
.result { display:none; }
.score-num { font-family:var(--display); font-size:56px; font-weight:700; }
.score-num b { color:#0B7A3E; }
.tier { font-family:var(--display); font-size:20px; font-weight:700; margin:8px 0; }
.grant { font-family:var(--display); font-size:24px; font-weight:700; color:#0B7A3E; margin:14px 0 2px; }
.grant-v { font-size:13px; color:var(--dim); font-family:var(--mono); margin-bottom:14px; }
.reason { color:var(--dim); font-size:14px; line-height:1.6; margin-bottom:16px; }
.api-key { background:var(--ink); color:var(--green); padding:12px; border-radius:10px; font-family:var(--mono); font-size:12px; word-break:break-all; margin:16px 0 6px; }
.keynote { color:var(--dim); font-size:12px; margin-bottom:24px; }
.share-btn { background:var(--ink); color:#fff; padding:12px 24px; border-radius:12px; font-family:var(--display); font-weight:600; text-decoration:none; display:inline-flex; align-items:center; gap:8px; }
.cardlink { display:block; margin-top:14px; font-size:13px; color:var(--dim); }
</style>
</head>
<body>
<div class="container">
  <div id="loading" style="display:none;">
    <div class="spinner"></div>
    <div class="status">Analyzing your profile&hellip;</div>
    <div class="step">OAuth data &rarr; web enrichment &rarr; Jatevo LLM scoring</div>
  </div>

  <div id="result" class="result">
    <div class="score-num" id="score">--</div>
    <div class="tier" id="tier">--</div>
    <div class="grant" id="grant">--</div>
    <div class="grant-v" id="grant-v"></div>
    <div class="reason" id="reasoning"></div>
    <div class="api-key" id="api-key">Loading&hellip;</div>
    <div class="keynote">Your API key. Use it as a Bearer token on <span style="font-family:var(--mono)">card.vantis.sh/v1/chat/completions</span></div>
    <a href="#" class="share-btn" id="share-btn">𝕏 Share on X</a>
    <a href="#" class="cardlink" id="card-link"></a>
  </div>

  <div id="connect-more">
    <p style="color:var(--dim); margin-bottom:16px;">Connect more profiles for a higher score:</p>
    ${providers.github ? `<a href="/oauth/connect/github?uid=${esc(uid)}" class="btn2 btn-connect">🐙 Connect GitHub</a>` : ""}
    ${providers.linkedin ? `<a href="/oauth/connect/linkedin?uid=${esc(uid)}" class="btn2 btn-connect">in&nbsp;Connect LinkedIn</a>` : ""}
    <div style="margin-top:16px;"><button onclick="runScore()" class="btn2 btn-score">⚡ Score me now</button></div>
  </div>
</div>
<script>
const uid = ${JSON.stringify(uid)};
const step = ${JSON.stringify(step || "")};

if (step === 'score') { runScore(); }

async function runScore() {
  document.getElementById('loading').style.display = 'block';
  document.getElementById('connect-more').style.display = 'none';
  document.getElementById('result').style.display = 'none';

  try {
    const res = await fetch('/onboard/score', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ uid }),
    });
    const data = await res.json();
    if (data.error) throw new Error(data.error);

    document.getElementById('loading').style.display = 'none';
    document.getElementById('result').style.display = 'block';

    document.getElementById('score').innerHTML = '<b>' + data.score + '</b>/100';
    document.getElementById('tier').textContent = tierEmoji(data.tier) + ' ' + data.tier.toUpperCase();
    document.getElementById('grant').textContent = '$' + data.grantUsd + ' in $VANTIS credits';
    document.getElementById('grant-v').textContent = '≈ ' + Number(data.grantVantis).toLocaleString(undefined, {maximumFractionDigits:0}) + ' VANTIS at $' + Number(data.vantisPrice).toFixed(6);
    document.getElementById('reasoning').textContent = data.reasoning || '';
    document.getElementById('api-key').textContent = data.apiKey || 'Error generating key';

    const handle = (data.card && data.card.handle || '').replace('@','');
    const cardUrl = 'https://card.vantis.sh/card/' + handle;
    const shareText = encodeURIComponent('Just minted my Vantis Card — $' + data.grantUsd + ' in $VANTIS inference credits ⚡ Score ' + data.score + '/100 · ' + data.tier.toUpperCase() + ' tier. Every call burns $VANTIS.');
    document.getElementById('share-btn').href = 'https://twitter.com/intent/tweet?text=' + shareText + '&url=' + encodeURIComponent(cardUrl);
    const cl = document.getElementById('card-link');
    cl.href = '/card/' + handle;
    cl.textContent = 'View your card → card.vantis.sh/card/' + handle;
  } catch (err) {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('connect-more').style.display = 'block';
    alert('Scoring failed: ' + err.message + ' — try again.');
  }
}

function tierEmoji(tier) {
  return { whale: '🐋', builder: '🔨', explorer: '🧭', noise: '📡' }[tier] || '⚡';
}
</script>
</body>
</html>`;
}

// ─── Card page ───
const CARD_VARIANTS: Record<string, { bg: string; fg: string; accent: string; sub: string }> = {
  signal: { bg: "linear-gradient(135deg,#09F875,#06D465)", fg: "#0A0A0A", accent: "#0A0A0A", sub: "rgba(10,10,10,0.55)" },
  ink:    { bg: "linear-gradient(135deg,#0A0A0A,#1C1C1A)", fg: "#FFFFFF", accent: "#09F875", sub: "rgba(255,255,255,0.55)" },
  carbon: { bg: "linear-gradient(135deg,#141414,#2A2A28)", fg: "#E8E8E4", accent: "#09F875", sub: "rgba(232,232,228,0.5)" },
  mint:   { bg: "linear-gradient(135deg,#EAFFF3,#C6FFE0)", fg: "#0A0A0A", accent: "#0B7A3E", sub: "rgba(10,10,10,0.5)" },
  mono:   { bg: "linear-gradient(135deg,#FFFFFF,#F0F0EC)", fg: "#0A0A0A", accent: "#0B7A3E", sub: "rgba(10,10,10,0.5)" },
};

export function cardHtml(card: any, opts: { vantisPrice: number; userBurned: number; balanceUsd: number }): string {
  const tier = tierInfo(card.tier);
  const handle = String(card.handle || "").replace("@", "");
  const colors = CARD_VARIANTS[card.design_variant] || CARD_VARIANTS.ink;
  const created = new Date((card.created_at || "").replace(" ", "T") + "Z");
  const stamp = isNaN(created.getTime())
    ? "2026"
    : `${created.toLocaleString("en-US", { month: "long" }).toUpperCase()} / ${created.getFullYear()}`;
  const grantVantis = card.grant_vantis || 0;
  const burnedStr = formatVantis(opts.userBurned || 0);
  const grantStr = Number(card.grant_usd || 0).toFixed(2).replace(/\.00$/, "");

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>@${esc(handle)} — Vantis Card</title>
<meta property="og:title" content="@${esc(handle)} — Vantis Card">
<meta property="og:description" content="$${esc(card.grant_usd)} in $VANTIS inference credits · ${esc(tier.label)} tier. Every call burns $VANTIS.">
<style>
${BASE_CSS}
body { display:flex; }
.wrap { margin:auto; text-align:center; padding:48px 16px; }
.card {
  width:380px; max-width:92vw; height:240px; border-radius:20px;
  background:${colors.bg}; color:${colors.fg};
  padding:24px; display:flex; flex-direction:column; justify-content:space-between;
  box-shadow:0 20px 60px rgba(10,10,10,0.25); position:relative; overflow:hidden;
  transform:perspective(1000px) rotateY(-5deg) rotateX(2deg);
  transition:transform .3s; margin:0 auto; text-align:left;
}
.card:hover { transform:perspective(1000px) rotateY(0) rotateX(0); }
.card::before { content:''; position:absolute; top:-50%; left:-50%; width:200%; height:200%; background:radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 60%); animation:shimmer 4s linear infinite; }
@keyframes shimmer { to { transform:rotate(360deg); } }
@media (prefers-reduced-motion: reduce) { .card::before { animation:none; } .card { transform:none; } }
.ch { display:flex; justify-content:space-between; align-items:flex-start; z-index:1; position:relative; }
.clogo { font-family:var(--display); font-size:14px; font-weight:700; letter-spacing:0.06em; display:flex; align-items:center; gap:8px; }
.clogo .vmark { height:16px; color:${colors.accent}; }
.cdate { font-family:var(--mono); font-size:11px; color:${colors.sub}; }
.chandle { font-family:var(--display); font-size:32px; font-weight:700; z-index:1; position:relative; letter-spacing:-0.01em; overflow-wrap:anywhere; }
.chandle.long { font-size:24px; }
.chandle.xlong { font-size:19px; }
.cf { display:flex; justify-content:space-between; align-items:flex-end; z-index:1; position:relative; }
.clabel { font-size:9px; color:${colors.sub}; text-transform:uppercase; letter-spacing:0.12em; }
.cvalue { font-size:12px; font-weight:600; margin-top:2px; }
.crarity { font-family:var(--mono); font-size:10px; color:${colors.accent}; font-weight:700; letter-spacing:0.08em; }
.curl { font-family:var(--mono); font-size:10px; color:${colors.sub}; margin-top:4px; }
.headline { margin:28px 0 8px; font-family:var(--display); font-size:26px; font-weight:700; }
.tier-badge { display:inline-block; padding:4px 14px; border-radius:20px; font-family:var(--display); font-size:14px; font-weight:600; margin:6px 0; background:var(--ink); color:var(--green); }
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
  <div class="card">
    <div class="ch">
      <div class="clogo">${V_MARK} VANTIS</div>
      <div class="cdate">${esc(stamp)}</div>
    </div>
    <div class="chandle${String(card.handle).length > 21 ? " xlong" : String(card.handle).length > 15 ? " long" : ""}">${esc(card.handle)}</div>
    <div class="cf">
      <div>
        <div class="clabel">Identity</div>
        <div class="cvalue">Account &amp; Agent</div>
        <div class="curl">card.vantis.sh/${esc(handle)}</div>
      </div>
      <div style="text-align:right;">
        <div class="crarity">ONE OF ONE</div>
        <div class="clabel" style="margin-top:6px;">Tier</div>
        <div class="cvalue">${tier.emoji} ${esc(tier.label)}</div>
      </div>
    </div>
  </div>

  <div class="headline">It&rsquo;s yours.</div>
  <div class="tier-badge">${tier.emoji} ${esc(tier.label)}</div>
  <div class="grant-amount">$${esc(grantStr)} in $VANTIS credits</div>
  <div class="grant-sub">≈ ${esc(Math.round(grantVantis).toLocaleString())} VANTIS at grant</div>
  <div class="burn-sub">Burned so far: <b>${esc(burnedStr)} VANTIS</b> · every inference call on the key retires more.</div>

  <a href="https://twitter.com/intent/tweet?text=${encodeURIComponent(`Just minted my Vantis Card — $${card.grant_usd} in $VANTIS inference credits ⚡ ${tier.emoji} ${tier.label} tier. Every call burns $VANTIS.`)}&url=${encodeURIComponent(`https://card.vantis.sh/card/${handle}`)}" class="share-btn">
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
