// Admin console UI — the same light design system as the public site, so the
// operations surface and the product read as one thing.

import { SYSTEM_CSS, ARROW } from "./system";
import { V_MARK } from "./pages";

const ADMIN_CSS = `
/* Light operations surface — same tokens as the public site so the console
   and the product read as one system. */
body { background:var(--wash); color:var(--ink); }

.abar { position:sticky; top:0; z-index:40; background:rgba(255,255,255,0.92); backdrop-filter:blur(12px);
  border-bottom:1px solid var(--line); height:60px; display:flex; align-items:center; }
.abar-in { max-width:1440px; margin:0 auto; padding:0 24px; width:100%; display:flex; align-items:center; justify-content:space-between; gap:20px; }
.abar .brand { font-size:15px; }
.abar .brand .sub { color:var(--green-ink); font-weight:600; }
.tabs { display:flex; gap:4px; }
.tab { font-family:var(--display); font-size:13px; font-weight:600; padding:8px 14px; border-radius:999px;
  color:var(--muted); cursor:pointer; border:none; background:none; }
.tab:hover { color:var(--ink); }
.tab.on { background:var(--ink); color:#fff; }
.awrap { max-width:1440px; margin:0 auto; padding:28px 24px 80px; }

.cards { display:grid; grid-template-columns:repeat(4,1fr); gap:12px; margin-bottom:26px; }
@media (max-width:1100px){ .cards { grid-template-columns:repeat(2,1fr); } }
@media (max-width:560px){ .cards { grid-template-columns:1fr; } }
.mcard { background:#fff; border:1px solid var(--line); border-radius:14px; padding:16px 18px; }
.mcard .k { font-family:var(--mono); font-size:10px; letter-spacing:0.12em; text-transform:uppercase; color:var(--muted); }
.mcard .v { font-family:var(--display); font-weight:700; font-size:26px; margin-top:8px; font-variant-numeric:tabular-nums; }
.mcard .v.g { color:var(--green-ink); }
.mcard .s { font-size:11.5px; color:var(--muted); margin-top:4px; }

.panel { background:#fff; border:1px solid var(--line); border-radius:16px; overflow:hidden; margin-bottom:20px; }
.panel-h { display:flex; align-items:center; justify-content:space-between; gap:16px; padding:16px 20px; border-bottom:1px solid var(--line); }
.panel-h h2 { font-size:16px; }

table { width:100%; border-collapse:collapse; font-size:13px; }
th { font-family:var(--mono); font-size:10px; letter-spacing:0.1em; text-transform:uppercase; color:var(--muted);
  text-align:left; padding:10px 16px; font-weight:600; white-space:nowrap; background:#FCFCFA; }
td { padding:12px 16px; border-top:1px solid var(--line); vertical-align:middle; }
tr.click:hover td { background:#F7F9F7; cursor:pointer; }
td.n, th.n { text-align:right; font-family:var(--mono); font-variant-numeric:tabular-nums; }
.mono { font-family:var(--mono); font-size:12px; }
.dim { color:var(--muted); }
.tablewrap { overflow-x:auto; }

.pill { font-family:var(--mono); font-size:9.5px; letter-spacing:0.08em; text-transform:uppercase; padding:3px 8px; border-radius:999px; white-space:nowrap; }
.pill--ok { background:#E6FBEF; color:#0B7A3E; }
.pill--warn { background:#FDF4E3; color:#8A5A00; }
.pill--bad { background:#FDECEC; color:#B3261E; }
.pill--dim { background:#F0F0EC; color:var(--body); }

.abtn { font-family:var(--display); font-size:12.5px; font-weight:600; padding:8px 14px; border-radius:999px;
  border:1px solid var(--line-strong); background:#fff; color:var(--ink); cursor:pointer; }
.abtn:hover { border-color:var(--ink); }
.abtn--g { background:var(--ink); color:var(--green); border-color:var(--ink); }
.abtn--g:hover { background:#1C1C1A; }
.abtn--r { border-color:#E9B4B0; color:#B3261E; }
.abtn--r:hover { border-color:#B3261E; }
.abtn--sm { font-size:11.5px; padding:6px 11px; }
input, select { font-family:var(--sans); font-size:13px; background:#fff; color:var(--ink);
  border:1px solid var(--line-strong); border-radius:10px; padding:9px 12px; }
input:focus, select:focus { outline:none; border-color:var(--ink); }
input::placeholder { color:#9AA0A5; }

.spark { display:flex; align-items:flex-end; gap:3px; height:56px; padding:0 20px 14px; }
.spark div { flex:1; background:#BDEBD1; border-radius:2px 2px 0 0; min-height:2px; }
.spark div:hover { background:var(--green-ink); }

.drawer { position:fixed; inset:0; background:rgba(10,10,10,0.28); display:none; z-index:60; }
.drawer.on { display:block; }
.drawer-in { position:absolute; right:0; top:0; bottom:0; width:min(660px,100%); background:#fff;
  border-left:1px solid var(--line); overflow-y:auto; padding:24px; }
.drawer h3 { font-size:20px; }
.kv { display:grid; grid-template-columns:150px 1fr; gap:8px 14px; font-size:13px; margin:16px 0 22px; }
.kv .k { color:var(--muted); }
.act { display:flex; flex-wrap:wrap; gap:8px; align-items:center; margin:14px 0; }
.keyout { background:var(--ink); border:1px solid var(--ink); color:var(--green); font-family:var(--mono); font-size:12px;
  padding:12px; border-radius:10px; margin-top:10px; word-break:break-all; }

.login { max-width:400px; margin:12vh auto; padding:0 24px; }
.login .card { background:#fff; border:1px solid var(--line); border-radius:18px; padding:32px 28px; }
.login h1 { font-size:26px; margin-bottom:8px; }
.login p { color:var(--muted); font-size:14px; margin-bottom:22px; }
.login p b { color:var(--ink); font-weight:600; }
.login input { width:100%; margin-bottom:16px; }
.login .abtn { width:100%; padding:13px; }
.err { color:#B3261E; font-size:13px; margin-top:14px; min-height:18px; }
@media (max-width:700px){ .kv { grid-template-columns:1fr; gap:2px 0; } .kv .k { margin-top:8px; } }
@media (max-width:860px){
  .abar { height:auto; }
  .abar-in { flex-wrap:wrap; padding:10px 16px; row-gap:8px; }
  .tabs { order:3; width:100%; overflow-x:auto; scrollbar-width:none; }
  .tabs::-webkit-scrollbar { display:none; }
}

/* ── intelligence ── */
.viz { padding:6px 20px 16px; }
.viz svg { display:block; width:100%; }
.viz text { font-family:var(--mono); fill:#898781; }
.legend { display:flex; flex-wrap:wrap; gap:14px; padding:12px 20px 4px; }
.lg-chip { display:inline-flex; align-items:center; gap:7px; font-size:12px; color:var(--body,#3A3A36); }
.lg-chip i { width:10px; height:10px; border-radius:3px; flex:none; }
.viz-tip { position:fixed; z-index:80; background:#fff; border:1px solid var(--line-strong); border-radius:10px;
  box-shadow:0 6px 24px rgba(10,10,10,0.10); padding:9px 12px; font-size:12px; pointer-events:none;
  display:none; max-width:260px; }
.viz-tip b { font-family:var(--mono); font-size:11px; }
.viz-tip .row { display:flex; justify-content:space-between; gap:14px; margin-top:3px; }
.viz-tip .row i { width:8px; height:8px; border-radius:2px; display:inline-block; margin-right:6px; }
.sig { display:inline-block; font-family:var(--mono); font-size:9px; letter-spacing:0.05em; text-transform:uppercase;
  padding:2px 7px; border-radius:999px; background:#F0F0EC; color:#5A5A52; margin:1px 3px 1px 0; white-space:nowrap; }
.sig--hot { background:#FDECEC; color:#B3261E; }
.riskn { font-family:var(--mono); font-weight:700; font-size:12px; padding:3px 9px; border-radius:999px; }
.riskn--high { background:#FDECEC; color:#B3261E; }
.riskn--med { background:#FDF4E3; color:#8A5A00; }
.riskn--low { background:#F0F0EC; color:#5A5A52; }
.meter { height:6px; border-radius:999px; background:#cde2fb; overflow:hidden; }
.meter i { display:block; height:100%; background:#2a78d6; border-radius:999px; }
.toplist { display:grid; grid-template-columns:1fr 1fr; gap:4px 28px; padding:14px 20px 18px; }
@media (max-width:900px){ .toplist { grid-template-columns:1fr; } }
.toprow { display:grid; grid-template-columns:150px 1fr 74px; gap:12px; align-items:center; font-size:12.5px; padding:5px 0; }
.toprow .h { overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
.cloudtag { font-family:var(--mono); font-size:9px; letter-spacing:0.06em; text-transform:uppercase;
  padding:2px 6px; border-radius:6px; background:#EDF3FB; color:#1c5cab; margin-left:6px; }
.fx-note { font-family:var(--mono); font-size:10.5px; color:#898781; padding:0 20px 14px; }

/* ── cards & perks registry ── */
#nft-defs { grid-template-columns:repeat(2, minmax(0,1fr)); margin-bottom:20px; }
#nft-defs .mcard .k { color:var(--green-ink); }
#nft-defs .mcard .s { font-size:12.5px; color:var(--body); margin-top:7px; line-height:1.55; }
tr.nft-set td { background:#FCFCFA; font-family:var(--mono); font-size:10px; letter-spacing:0.12em;
  text-transform:uppercase; color:var(--muted); padding:9px 16px; }
tr.nft-set b { color:var(--ink); font-weight:700; letter-spacing:0.12em; }
.nft-name { display:flex; align-items:center; gap:10px; min-width:0; }
.nft-name .no { font-family:var(--mono); font-size:11px; color:var(--muted); font-variant-numeric:tabular-nums; }
.nft-name .nm { font-family:var(--display); font-size:13.5px; font-weight:600; white-space:nowrap; }
.gradechip { font-family:var(--mono); font-size:9px; letter-spacing:0.06em; padding:2px 8px; border-radius:999px;
  background:#F0F0EC; color:#5A5A52; white-space:nowrap; }
.gradechip--apex { background:#E6FBEF; color:#0B7A3E; }
.gradechip--og { background:#FDF4E3; color:#8A6D3B; }
.holderchip { display:inline-flex; align-items:center; gap:6px; font-family:var(--mono); font-size:11px;
  background:#F0F0EC; color:var(--body); border-radius:999px; padding:3px 6px 3px 10px; margin:2px 4px 2px 0; }
.holderchip .src { font-size:8.5px; letter-spacing:0.08em; text-transform:uppercase; color:var(--muted); }
.holderchip a { color:#B3261E; font-weight:700; text-decoration:none; font-size:12px; line-height:1;
  padding:0 4px; border-radius:999px; }
.holderchip a:hover { background:#FDECEC; }
.pk { font-family:var(--mono); font-size:9.5px; letter-spacing:0.07em; text-transform:uppercase;
  padding:4px 10px; border-radius:999px; border:1px solid var(--line-strong); background:#fff;
  color:var(--muted); cursor:pointer; white-space:nowrap; margin:2px 6px 2px 0; }
.pk:hover { border-color:var(--ink); color:var(--ink); }
.pk.on { background:#E6FBEF; border-color:#9FE7C0; color:#0B7A3E; }
.pk.on:hover { border-color:#0B7A3E; }
.nft-assigncell { text-align:right; white-space:nowrap; }
.nft-assigncell input { padding:6px 10px; font-size:12px; border-radius:8px; width:132px; font-family:var(--mono); }
`;

export function adminLoginHtml(message?: string, operatorEmail = ""): string {
  return `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Gateway admin</title><meta name="robots" content="noindex,nofollow">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<style>${SYSTEM_CSS}${ADMIN_CSS}</style></head>
<body>
<div class="login">
  <div class="card">
    <h1>Gateway admin</h1>
    ${message ? `<p>${message}</p>` : `
    <p>Signing in as <b><!--email_off-->${operatorEmail}<!--/email_off--></b></p>
    <input type="password" id="tok" placeholder="Operator token" autocomplete="current-password" autofocus>
    <button class="abtn abtn--g" id="signin">Sign in</button>
    <div class="err" id="err"></div>`}
  </div>
</div>
<script>
const OPERATOR = ${JSON.stringify(operatorEmail)};
async function go(){
  const t = document.getElementById('tok').value;
  const e = document.getElementById('err');
  e.textContent = '';
  const r = await fetch('/admin/login', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ email: OPERATOR, token: t }) });
  if (r.ok) { location.reload(); return; }
  const d = await r.json().catch(()=>({}));
  e.textContent = d.message || (d.error === 'invalid_credentials' ? 'That token is not right.' : 'Sign-in failed.');
}
// CSP is enforcing with nonced scripts — inline onclick attributes are
// BLOCKED (nonces never cover event handlers). Wire everything here.
document.getElementById('signin')?.addEventListener('click', go);
document.getElementById('tok')?.addEventListener('keydown', (ev)=>{ if(ev.key==='Enter') go(); });
</script>
</body></html>`;
}

// Intelligence tab. A separate classic <script> block: it uses the helpers the
// main block declares (classic top-level const/function bindings are visible to
// later classic scripts), and the main block calls loadForensics/loadIntel only
// at click/boot time, after this block has executed. The CSP nonce is injected
// centrally into every <script> tag, so a second block costs nothing.
// Written concat-only (no template literals) so it nests inside the outer
// template without escaping.
const INTEL_JS = `
<script>
// ── palette: dataviz-validated categorical slots (light surface) ──
var FAM = [['deepseek','DeepSeek Flash','#2a78d6'],['gpt','GPT-5.x','#eb6834'],['other','Other','#1baf7a']];
// House-paid deck spend (cartridge_usage) rides the daily chart as its own
// family; the slot only appears once it is nonzero. 4th validated slot.
var CART_FAM = ['cartridge','Cartridge (house)','#eda100'];
var HOURLY_HUE = '#2a78d6';
var GRID = '#E4E6E2', BASE = '#D3D6D1', INKC = '#0A0A0A', MUTED = '#8A8A80';

var __ix = null; // cached payloads so resize re-renders without refetching

function fmtTok(n){ n = Number(n||0); return n>=1e6 ? (n/1e6).toFixed(1)+'M' : n>=1e3 ? (n/1e3).toFixed(1)+'K' : String(Math.round(n)); }
function pct(n){ return (100*n).toFixed(n>=0.1?0:1)+'%'; }

// ── shared tooltip ──
var TIP = null;
function tipShow(html, x, y){
  if (!TIP){ TIP = document.createElement('div'); TIP.className = 'viz-tip'; document.body.appendChild(TIP); }
  TIP.innerHTML = html; TIP.style.display = 'block';
  var w = TIP.offsetWidth, h = TIP.offsetHeight;
  var left = Math.min(x + 14, window.innerWidth - w - 10);
  var top = y - h - 12; if (top < 8) top = y + 18;
  TIP.style.left = left + 'px'; TIP.style.top = top + 'px';
}
function tipHide(){ if (TIP) TIP.style.display = 'none'; }

function tickStep(max){
  if (max <= 0) return 1;
  var raw = max / 4, p = Math.pow(10, Math.floor(Math.log(raw)/Math.LN10)), n = raw / p;
  return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * p;
}
function moneyTick(v){ return '$' + (v === Math.round(v) ? String(v) : v >= 1 ? v.toFixed(1) : v.toFixed(2)); }
function roundTopRect(x, y, w, h, r){
  r = Math.min(r, w/2, h);
  return 'M' + x + ' ' + (y+h) + ' L' + x + ' ' + (y+r) +
    ' Q' + x + ' ' + y + ' ' + (x+r) + ' ' + y +
    ' L' + (x+w-r) + ' ' + y +
    ' Q' + (x+w) + ' ' + y + ' ' + (x+w) + ' ' + (y+r) +
    ' L' + (x+w) + ' ' + (y+h) + ' Z';
}

// ── daily stacked chart (14d, by model family) ──
function renderDaily(){
  var el = document.getElementById('ix-daily');
  if (!el || !__ix) return;
  var days = [];
  var byd = {};
  (__ix.overview.daily || []).forEach(function(r){ byd[r.d] = r; });
  var t = new Date(); // walk the last 14 UTC dates so gaps render as zero
  for (var i = 13; i >= 0; i--){
    var d = new Date(Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate() - i));
    var k = d.toISOString().slice(0,10);
    days.push(byd[k] || { d:k, deepseek:0, gpt:0, other:0, cartridge:0, calls:0 });
  }
  var cartSum = 0;
  days.forEach(function(d){ cartSum += (d.cartridge || 0); });
  var fams = cartSum > 0 ? FAM.concat([CART_FAM]) : FAM;
  el.__fams = fams;
  var W = Math.max(340, el.clientWidth), H = 232;
  var padL = 48, padR = 12, padT = 24, padB = 26, iw = W - padL - padR, ih = H - padT - padB;
  var totals = days.map(function(d){ return d.deepseek + d.gpt + d.other + (d.cartridge || 0); });
  var step = tickStep(Math.max.apply(null, totals.concat(0.01)));
  var top = Math.max(step, step * Math.ceil(Math.max.apply(null, totals.concat(0.01)) / step));
  var sx = iw / days.length, barW = Math.min(24, sx * 0.55);
  var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" width="' + W + '" height="' + H + '" role="img" aria-label="Daily spend, stacked by model family">';
  for (var gv = 0; gv <= top + 1e-9; gv += step){
    var gy = padT + ih - (gv / top) * ih;
    s += '<line x1="' + padL + '" y1="' + gy + '" x2="' + (W - padR) + '" y2="' + gy + '" stroke="' + (gv === 0 ? BASE : GRID) + '" stroke-width="1"/>';
    s += '<text x="' + (padL - 8) + '" y="' + (gy + 3.5) + '" font-size="10" text-anchor="end">' + moneyTick(gv) + '</text>';
  }
  var peakI = totals.indexOf(Math.max.apply(null, totals));
  for (var i = 0; i < days.length; i++){
    var x = padL + i * sx + (sx - barW) / 2, yCur = padT + ih, segs = [];
    for (var f = 0; f < fams.length; f++){
      var v = days[i][fams[f][0]] || 0;
      if (v <= 0) continue;
      var hpx = (v / top) * ih;
      if (hpx < 0.6) hpx = 0.6;
      segs.push([fams[f][2], yCur - hpx, hpx]);
      yCur -= hpx + 2; // 2px surface gap between stacked segments
    }
    for (var q = 0; q < segs.length; q++){
      var sg = segs[q];
      if (q === segs.length - 1)
        s += '<path d="' + roundTopRect(x, sg[1], barW, sg[2], 3) + '" fill="' + sg[0] + '"/>';
      else
        s += '<rect x="' + x + '" y="' + sg[1] + '" width="' + barW + '" height="' + sg[2] + '" fill="' + sg[0] + '"/>';
    }
    if (i === peakI && totals[i] > 0)
      s += '<text x="' + (x + barW/2) + '" y="' + (padT + ih - (totals[i]/top)*ih - 2 - segs.length*2 - 5) + '" font-size="10.5" font-weight="600" text-anchor="middle" fill="' + INKC + '">$' + totals[i].toFixed(2) + '</text>';
    if (i % 2 === (days.length - 1) % 2)
      s += '<text x="' + (x + barW/2) + '" y="' + (H - 8) + '" font-size="10" text-anchor="middle">' + days[i].d.slice(5) + '</text>';
    s += '<rect x="' + (padL + i * sx) + '" y="' + padT + '" width="' + sx + '" height="' + ih + '" fill="transparent" data-i="' + i + '"/>';
  }
  s += '</svg>';
  el.innerHTML = s;
  el.__days = days;
  var note = document.getElementById('ix-daily-note');
  if (note) note.textContent = 'UTC days · today so far $' + totals[totals.length - 1].toFixed(2);
  var legend = document.getElementById('ix-daily-legend');
  if (legend){
    var sums = {};
    days.forEach(function(d){ fams.forEach(function(f){ sums[f[0]] = (sums[f[0]] || 0) + (d[f[0]] || 0); }); });
    legend.innerHTML = fams.map(function(f){
      return '<span class="lg-chip"><i style="background:' + f[2] + '"></i>' + f[1] + ' · $' + (sums[f[0]] || 0).toFixed(2) + '</span>';
    }).join('');
  }
}

// ── hourly chart (48h, single series) ──
function renderHourly(){
  var el = document.getElementById('ix-hourly');
  if (!el || !__ix) return;
  var byh = {};
  (__ix.overview.hourly || []).forEach(function(r){ byh[r.h] = r; });
  var buckets = [];
  var now = new Date(); now.setUTCMinutes(0, 0, 0);
  for (var i = 47; i >= 0; i--){
    var d = new Date(now.getTime() - i * 3600e3), k = d.toISOString().slice(0, 13);
    var r = byh[k] || { cost: 0, calls: 0, users: 0 };
    buckets.push({ k: k, cost: r.cost, calls: r.calls, users: r.users });
  }
  var W = Math.max(340, el.clientWidth), H = 190;
  var padL = 48, padR = 12, padT = 14, padB = 24, iw = W - padL - padR, ih = H - padT - padB;
  var maxv = Math.max.apply(null, buckets.map(function(b){ return b.cost; }).concat(0.01));
  var step = tickStep(maxv), top = Math.max(step, step * Math.ceil(maxv / step));
  var sx = iw / buckets.length, barW = Math.max(3, Math.min(14, sx - 2)); // 2px air between bars
  var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" width="' + W + '" height="' + H + '" role="img" aria-label="Hourly spend, last 48 hours">';
  for (var gv = 0; gv <= top + 1e-9; gv += step){
    var gy = padT + ih - (gv / top) * ih;
    s += '<line x1="' + padL + '" y1="' + gy + '" x2="' + (W - padR) + '" y2="' + gy + '" stroke="' + (gv === 0 ? BASE : GRID) + '" stroke-width="1"/>';
    s += '<text x="' + (padL - 8) + '" y="' + (gy + 3.5) + '" font-size="10" text-anchor="end">' + moneyTick(gv) + '</text>';
  }
  for (var i = 0; i < buckets.length; i++){
    var b = buckets[i], x = padL + i * sx + (sx - barW) / 2;
    if (b.cost > 0){
      var hpx = Math.max(1.5, (b.cost / top) * ih);
      s += '<path d="' + roundTopRect(x, padT + ih - hpx, barW, hpx, 2.5) + '" fill="' + HOURLY_HUE + '"/>';
    }
    if (i % 8 === 7)
      s += '<text x="' + (x + barW / 2) + '" y="' + (H - 7) + '" font-size="10" text-anchor="middle">' + b.k.slice(11) + ':00</text>';
    s += '<rect x="' + (padL + i * sx) + '" y="' + padT + '" width="' + sx + '" height="' + ih + '" fill="transparent" data-i="' + i + '"/>';
  }
  s += '</svg>';
  el.innerHTML = s;
  el.__buckets = buckets;
}

function wireChartHover(){
  var daily = document.getElementById('ix-daily');
  if (daily && !daily.__wired){
    daily.__wired = true;
    daily.addEventListener('mousemove', function(e){
      var r = e.target.closest ? e.target.closest('rect[data-i]') : null;
      if (!r || !daily.__days) return tipHide();
      var d = daily.__days[+r.dataset.i], fams2 = daily.__fams || FAM, tot = 0;
      fams2.forEach(function(f){ tot += (d[f[0]] || 0); });
      var rows = fams2.map(function(f){
        return '<div class="row"><span><i style="background:' + f[2] + '"></i>' + f[1] + '</span><span>' + money(d[f[0]] || 0) + '</span></div>';
      }).join('');
      tipShow('<b>' + d.d + ' UTC</b>' + rows +
        '<div class="row" style="border-top:1px solid #EFEFE9;margin-top:5px;padding-top:5px"><span>Total · ' + d.calls + ' calls</span><span><b>' + money(tot) + '</b></span></div>', e.clientX, e.clientY);
    });
    daily.addEventListener('mouseleave', tipHide);
  }
  var hourly = document.getElementById('ix-hourly');
  if (hourly && !hourly.__wired){
    hourly.__wired = true;
    hourly.addEventListener('mousemove', function(e){
      var r = e.target.closest ? e.target.closest('rect[data-i]') : null;
      if (!r || !hourly.__buckets) return tipHide();
      var b = hourly.__buckets[+r.dataset.i];
      tipShow('<b>' + b.k.replace('T', ' ') + ':00 UTC</b>' +
        '<div class="row"><span>Spend</span><span><b>' + money(b.cost) + '</b></span></div>' +
        '<div class="row"><span>Calls</span><span>' + b.calls + '</span></div>' +
        '<div class="row"><span>Accounts</span><span>' + b.users + '</span></div>', e.clientX, e.clientY);
    });
    hourly.addEventListener('mouseleave', tipHide);
  }
}

// ── KPI cards ──
function renderIxCards(){
  var o = __ix.overview, t = o.today || {}, y = o.yesterday || {}, lh = o.lastHour || {},
      h = o.h24 || {}, d7 = o.d7 || {}, all = o.all || {}, li = o.liability || {}, mg = o.mega || {};
  var cg = o.cartridge || {}, cgT = (cg.today || {}).cost || 0, cg7 = (cg.d7 || {}).cost || 0, cgA = (cg.all || {}).cost || 0;
  var avgCall = (h.calls || 0) > 0 ? (h.cost || 0) / h.calls : 0;
  var megaShare = (mg.total || 0) > 0 ? (mg.count || 0) / mg.total : 0;
  var cards = [
    ['Spend today · UTC', money((t.cost || 0) + cgT), (t.calls || 0).toLocaleString() + ' calls · yesterday ' + money(y.cost) + ' full day' + (cgT > 0 ? ' · incl. cartridge ' + money(cgT) : ''), ((t.cost || 0) + cgT) > (y.cost || 0) ? 'r' : ''],
    ['Last hour', money(lh.cost), (lh.calls || 0) + ' calls · ' + (lh.users || 0) + ' accounts', ''],
    ['Last 24 h', money(h.cost), 'avg ' + money(avgCall) + ' per call' + (cgT > 0 ? ' · credit ledger only (cartridge is day-grain)' : ''), ''],
    ['Last 7 days', money((d7.cost || 0) + cg7), 'all time ' + money((all.cost || 0) + cgA) + ' · ' + (all.calls || 0).toLocaleString() + ' calls' + (cg7 > 0 ? ' · incl. cartridge ' + money(cg7) : ''), ''],
    ['Credits outstanding', money(li.balance), money(li.granted) + ' granted · ' + money(li.consumed) + ' consumed', ''],
    ['Mega-context · 24h', pct(megaShare), (mg.count || 0) + ' calls ≥100K tokens in · ' + money(mg.cost), ''],
    ['Active accounts · 24h', String(h.users || 0), '+' + (o.newUsers24h || 0) + ' new signups', ''],
    ['Suspended', String(li.suspended || 0), 'of ' + (li.users || 0) + ' accounts', ''],
  ];
  document.getElementById('ix-cards').innerHTML = cards.map(function(c){
    var vs = c[3] === 'r' ? ' style="color:#B3261E"' : '';
    return '<div class="mcard"><div class="k">' + c[0] + '</div><div class="v"' + vs + '>' + c[1] + '</div><div class="s">' + c[2] + '</div></div>';
  }).join('');
}

// ── top spenders ──
function renderIxTop(){
  var rows = __ix.overview.top24 || [], h24 = (__ix.overview.h24 || {}).cost || 0;
  var maxc = rows.length ? rows[0].cost : 0, sum = 0;
  rows.forEach(function(r){ sum += r.cost; });
  document.getElementById('ix-top').innerHTML = rows.length ? rows.map(function(r){
    return '<div class="toprow">' +
      '<span class="h"><b>@' + esc(r.x_username || '?') + '</b>' + (r.staging ? ' <span class="sig">team</span>' : '') +
      (r.status === 'suspended' ? ' <span class="sig sig--hot">susp</span>' : '') + '</span>' +
      '<span class="meter"><i style="width:' + (maxc > 0 ? Math.max(2, 100 * r.cost / maxc) : 0) + '%"></i></span>' +
      '<span class="n mono" style="text-align:right">' + money(r.cost) + '</span></div>';
  }).join('') : '<div class="dim" style="font-size:13px">No spend in the last 24 hours.</div>';
  var note = document.getElementById('ix-top-note');
  if (note) note.textContent = rows.length ? 'top ' + rows.length + ' = ' + pct(h24 > 0 ? sum / h24 : 0) + ' of 24h spend' : '';
}

// ── risk table ──
function renderIxRisk(){
  var rows = (__ix.risk && __ix.risk.accounts) || [];
  document.querySelector('#ix-risk tbody').innerHTML = rows.length ? rows.map(function(r){
    var cls = r.risk >= 50 ? 'riskn--high' : r.risk >= 25 ? 'riskn--med' : 'riskn--low';
    var sigs = (r.signals || []).map(function(sg){
      var hot = sg.indexOf('shares IP') === 0 || sg === 'mega-context' || sg === 'cloud IP';
      return '<span class="sig' + (hot ? ' sig--hot' : '') + '">' + esc(sg) + '</span>';
    }).join('');
    var act = (r.status !== 'suspended' && !r.staging)
      ? '<button class="abtn abtn--sm abtn--r" data-act="ix-suspend" data-uid="' + r.id + '" data-h="' + esc(r.x_username || '') + '">Suspend</button>'
      : (r.status === 'suspended' ? '<span class="pill pill--bad">suspended</span>' : '');
    return '<tr class="click" data-uid="' + r.id + '">' +
      '<td><b>@' + esc(r.x_username || '?') + '</b><div class="dim" style="font-size:11px">' + esc(r.score_tier || '') +
        (r.shared_with ? ' · with @' + esc(String(r.shared_with).split(',').slice(0, 3).join(', @')) : '') +
        (r.cart_cost > 0 ? ' · cartridge ' + money(r.cart_cost) : '') + '</div></td>' +
      '<td><span class="riskn ' + cls + '">' + r.risk + '</span></td>' +
      '<td style="max-width:300px">' + (sigs || '<span class="dim">—</span>') + '</td>' +
      '<td class="n">' + money(r.cost24) + '</td>' +
      '<td class="n">' + money(r.cost) + '</td>' +
      '<td class="n">' + money(r.usd_balance) + '</td>' +
      '<td class="n">' + (r.peak_rpm || 0) + '</td>' +
      '<td class="n">' + fmtTok(r.avg_in) + '</td>' +
      '<td class="n">' + (r.ips || 0) + '</td>' +
      '<td>' + act + '</td></tr>';
  }).join('') : '<tr><td colspan="10" class="dim">No metered accounts yet.</td></tr>';
}

// ── clusters ──
function renderIxClusters(){
  var rows = (__ix.clusters && __ix.clusters.clusters) || [];
  document.querySelector('#ix-clusters tbody').innerHTML = rows.length ? rows.map(function(r){
    var names = String(r.usernames || '').split(',');
    var shown = names.slice(0, 5).map(function(n){ return '@' + esc(n); }).join(', ') + (names.length > 5 ? ' +' + (names.length - 5) : '');
    return '<tr>' +
      '<td class="mono">' + esc(r.ip) + (r.cloud ? '<span class="cloudtag">' + esc(r.cloud) + '</span>' : '') + '</td>' +
      '<td class="n">' + r.accounts + '</td>' +
      '<td class="dim" style="max-width:320px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + shown + '</td>' +
      '<td class="n">' + r.reqs + '</td>' +
      '<td class="n">' + money(r.cost) + '</td>' +
      '<td class="dim">' + ago(r.last_seen) + '</td>' +
      '<td><button class="abtn abtn--sm abtn--r" data-act="ix-cluster" data-ip="' + esc(r.ip) + '" data-n="' + r.accounts + '">Suspend cluster</button></td></tr>';
  }).join('') : '<tr><td colspan="7" class="dim">No multi-account or heavy IPs.</td></tr>';
}

// ── models ──
function renderIxModels(){
  var rows = (__ix.overview.models7d) || [];
  document.querySelector('#ix-models tbody').innerHTML = rows.length ? rows.map(function(m){
    return '<tr><td class="mono">' + esc(m.model || '?') + '</td><td class="n">' + m.calls + '</td>' +
      '<td class="n">' + fmtTok(m.tin) + '</td><td class="n">' + fmtTok(m.tout) + '</td><td class="n">' + money(m.cost) + '</td></tr>';
  }).join('') : '<tr><td colspan="5" class="dim">No paid calls in the last 7 days.</td></tr>';
}

async function loadIntel(){
  var parts = await Promise.all([api('/intel/overview'), api('/intel/risk'), api('/intel/clusters')]);
  __ix = { overview: parts[0], risk: parts[1], clusters: parts[2] };
  renderIxCards(); renderDaily(); renderHourly(); wireChartHover();
  renderIxTop(); renderIxRisk(); renderIxClusters(); renderIxModels();
}

// ── drawer forensics (called by openUser in the main block) ──
async function loadForensics(id, capUsd){
  var box = document.getElementById('d-forensics');
  if (!box) return;
  try {
    var d = await api('/users/' + id + '/forensics');
    var capLine = capUsd > 0
      ? 'account cap ' + money(capUsd) + '/day'
      : (d.default_daily_cap > 0 ? 'fleet default cap ' + money(d.default_daily_cap) + '/day' : 'no daily cap');
    var ips = (d.ips || []).map(function(r){
      return '<tr><td class="mono">' + esc(r.ip) + (r.cloud ? '<span class="cloudtag">' + esc(r.cloud) + '</span>' : '') + '</td>' +
        '<td class="n">' + r.n + '</td>' +
        '<td class="n">' + (r.other_accounts > 0 ? '<span class="sig sig--hot">' + r.other_accounts + ' other</span>' : '—') + '</td>' +
        '<td class="dim">' + ago(r.last_seen) + '</td></tr>';
    }).join('');
    var uas = (d.uas || []).map(function(r){
      return '<div class="mono dim" style="font-size:11px;padding:2px 0;word-break:break-all">' + r.n + ' × ' + esc(String(r.ua).slice(0, 110)) + '</div>';
    }).join('');
    box.className = '';
    box.innerHTML = '<h3 style="font-size:15px;margin:6px 0 10px">Forensics</h3>' +
      '<div class="dim" style="font-size:12.5px;margin-bottom:10px">peak ' + (d.peak_rpm || 0) + ' rpm · avg context ' + fmtTok(d.avg_in) +
      ' · max ' + fmtTok(d.max_in) + ' · ' + (d.mega || 0) + ' calls ≥100K in · ' + capLine + '</div>' +
      '<div class="tablewrap"><table><thead><tr><th>IP</th><th class="n">Calls</th><th class="n">Shared</th><th>Last seen</th></tr></thead><tbody>' +
      (ips || '<tr><td colspan="4" class="dim">No IPs recorded.</td></tr>') + '</tbody></table></div>' +
      (uas ? '<div style="margin-top:10px">' + uas + '</div>' : '');
  } catch (e){ box.innerHTML = ''; }
}

// ── actions ──
document.querySelector('#ix-risk tbody').addEventListener('click', async function(e){
  var btn = e.target.closest('[data-act="ix-suspend"]');
  if (btn){
    if (!confirm('Suspend @' + btn.dataset.h + '? Their key stops working immediately.')) return;
    await api('/users/' + btn.dataset.uid + '/status', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ status: 'suspended' }) });
    loadIntel();
    return;
  }
  var row = e.target.closest('tr[data-uid]');
  if (row && typeof openUser === 'function') openUser(row.dataset.uid);
});
document.querySelector('#ix-clusters tbody').addEventListener('click', async function(e){
  var btn = e.target.closest('[data-act="ix-cluster"]');
  if (!btn) return;
  if (!confirm('Suspend all ' + btn.dataset.n + ' accounts that called from ' + btn.dataset.ip + '? Team and already-suspended accounts are skipped.')) return;
  var r = await api('/intel/suspend-cluster', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ip: btn.dataset.ip }) });
  alert(r.suspended && r.suspended.length ? 'Suspended: @' + r.suspended.join(', @') : 'Nothing to suspend (team / already suspended).');
  loadIntel();
});

var __rsz;
window.addEventListener('resize', function(){
  clearTimeout(__rsz);
  __rsz = setTimeout(function(){ if (!document.getElementById('v-intel').hidden){ renderDaily(); renderHourly(); } }, 200);
});

// ── boot: intelligence is the landing view ──
loadIntel();
setInterval(function(){ if (!document.getElementById('v-intel').hidden) loadIntel(); }, 60000);
</scr` + `ipt>
`;

export function adminHtml(): string {
  return `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Gateway admin — Vantis Cards</title><meta name="robots" content="noindex,nofollow">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<style>${SYSTEM_CSS}${ADMIN_CSS}</style></head>
<body>

<div class="abar"><div class="abar-in">
  <a class="brand" href="/admin">${V_MARK} VANTIS <span class="sub">GATEWAY</span></a>
  <div class="tabs">
    <button class="tab on" data-tab="intel">Intelligence</button>
    <button class="tab" data-tab="overview">Overview</button>
    <button class="tab" data-tab="users">Users</button>
    <button class="tab" data-tab="nft">Cards</button>
    <button class="tab" data-tab="requests">Requests</button>
    <button class="tab" data-tab="events">Audit</button>
  </div>
  <div style="display:flex; gap:10px; align-items:center;">
    <span class="mono dim" id="clock" style="font-size:11px"></span>
    <button class="abtn abtn--sm" id="logout">Sign out</button>
  </div>
</div></div>

<div class="awrap">

  <section id="v-intel">
    <div class="cards" id="ix-cards"></div>
    <div class="panel">
      <div class="panel-h"><h2>Spend per day &middot; 14 days</h2><span class="mono dim" id="ix-daily-note" style="font-size:11px"></span></div>
      <div class="legend" id="ix-daily-legend"></div>
      <div class="viz" id="ix-daily"></div>
    </div>
    <div class="panel">
      <div class="panel-h"><h2>Spend per hour &middot; 48 hours</h2><span class="mono dim" style="font-size:11px">UTC</span></div>
      <div class="viz" id="ix-hourly"></div>
    </div>
    <div class="panel">
      <div class="panel-h"><h2>Top spenders &middot; 24 hours</h2><span class="mono dim" id="ix-top-note" style="font-size:11px"></span></div>
      <div class="toplist" id="ix-top"></div>
    </div>
    <div class="panel">
      <div class="panel-h"><h2>Risk-ranked accounts</h2><span class="mono dim" style="font-size:11px">signals, not verdicts &middot; click a row for the full account</span></div>
      <div class="tablewrap"><table id="ix-risk">
        <thead><tr><th>Account</th><th>Risk</th><th>Signals</th><th class="n">24h</th><th class="n">Total</th>
        <th class="n">Balance</th><th class="n">Peak rpm</th><th class="n">Avg ctx</th><th class="n">IPs</th><th></th></tr></thead>
        <tbody></tbody></table></div>
    </div>
    <div class="panel">
      <div class="panel-h"><h2>IP clusters</h2><span class="mono dim" style="font-size:11px">multi-account IPs &amp; heavy single IPs &middot; cloud tags are heuristic</span></div>
      <div class="tablewrap"><table id="ix-clusters">
        <thead><tr><th>IP</th><th class="n">Accounts</th><th>Handles</th><th class="n">Calls</th><th class="n">Spend</th><th>Last seen</th><th></th></tr></thead>
        <tbody></tbody></table></div>
      <div class="fx-note">Suspend cluster suspends every non-team, non-suspended account that has called from that IP. Each action lands in the audit log.</div>
    </div>
    <div class="panel">
      <div class="panel-h"><h2>Models &middot; 7 days</h2></div>
      <div class="tablewrap"><table id="ix-models">
        <thead><tr><th>Model</th><th class="n">Calls</th><th class="n">Tokens in</th><th class="n">Tokens out</th><th class="n">Cost</th></tr></thead>
        <tbody></tbody></table></div>
    </div>
  </section>

  <section id="v-overview" hidden>
    <div class="cards" id="ov-cards"></div>
    <div class="panel">
      <div class="panel-h"><h2>Calls per day &middot; last 14 days</h2><span class="mono dim" id="ov-series-note"></span></div>
      <div class="spark" id="ov-spark"></div>
    </div>
    <div class="panel">
      <div class="panel-h"><h2>Outcomes &middot; last 24 hours</h2></div>
      <div class="tablewrap"><table id="ov-outcomes"><thead><tr><th>Outcome</th><th class="n">Count</th></tr></thead><tbody></tbody></table></div>
    </div>
  </section>

  <section id="v-users" hidden>
    <div class="panel">
      <div class="panel-h">
        <h2>Users &amp; metering</h2>
        <div style="display:flex;gap:8px;align-items:center">
          <input id="q" placeholder="Search handle, name or email" style="width:260px">
          <a class="btn" id="dl-contacts" href="/admin/api/contacts.csv" download>Export contacts</a>
        </div>
      </div>
      <div class="tablewrap"><table id="tb-users">
        <thead><tr>
          <th>Handle</th><th>Tier</th><th>Status</th><th>Key</th>
          <th class="n">Balance</th><th class="n">Consumed</th><th class="n">Burned</th>
          <th class="n">Calls</th><th class="n">24h</th><th class="n">Tokens</th><th>Last seen</th>
        </tr></thead><tbody></tbody>
      </table></div>
    </div>
  </section>

  <section id="v-nft" hidden>
    <div class="panel">
      <div class="panel-h">
        <h2>Cards &amp; perks</h2>
        <span class="dim" style="font-size:12.5px">Who holds each card, and what holding it unlocks on the rail. Grants here are operator access (source <b>admin</b>) — once the ERC-721 reads, chain holdings take over.</span>
      </div>
      <div class="cards" id="nft-defs" style="margin-bottom:14px"></div>
      <div class="tablewrap"><table id="tb-nft">
        <thead><tr>
          <th style="width:34%">Card</th><th>Holders</th><th>Perks</th><th class="n" style="width:170px">Assign</th>
        </tr></thead><tbody></tbody>
      </table></div>
    </div>
    <div class="panel">
      <div class="panel-h"><h2>Perk-covered usage &middot; 7 days</h2><span class="dim" style="font-size:12.5px">What perk calls cost US upstream — nothing here was charged to a user.</span></div>
      <div class="tablewrap"><table id="tb-nft-usage">
        <thead><tr><th>Perk</th><th>Account</th><th class="n">Calls</th><th class="n">Tokens</th><th class="n">Our cost</th></tr></thead><tbody></tbody>
      </table></div>
    </div>
  </section>

  <section id="v-requests" hidden>
    <div class="panel">
      <div class="panel-h">
        <h2>Request log</h2>
        <select id="of">
          <option value="all">All outcomes</option>
          <option value="ok">ok</option>
          <option value="unauthorized">unauthorized</option>
          <option value="rate_limited">rate_limited</option>
          <option value="insufficient_credits">insufficient_credits</option>
          <option value="suspended">suspended</option>
          <option value="daily_cap">daily_cap</option>
          <option value="unsupported_model">unsupported_model</option>
          <option value="upstream_saturated">upstream_saturated</option>
          <option value="upstream_error">upstream_error</option>
          <option value="bad_request">bad_request</option>
        </select>
      </div>
      <div class="tablewrap"><table id="tb-req">
        <thead><tr><th>When</th><th>User</th><th>Key</th><th>Outcome</th><th class="n">Status</th>
        <th class="n">In</th><th class="n">Out</th><th class="n">Cost</th><th class="n">Burned</th><th class="n">ms</th><th>Error</th></tr></thead>
        <tbody></tbody>
      </table></div>
    </div>
  </section>

  <section id="v-events" hidden>
    <div class="panel">
      <div class="panel-h"><h2>Admin audit log</h2></div>
      <div class="tablewrap"><table id="tb-ev">
        <thead><tr><th>When</th><th>Action</th><th>Target</th><th>Detail</th><th>IP</th></tr></thead><tbody></tbody>
      </table></div>
    </div>
  </section>

</div>

<div class="drawer" id="drawer">
  <div class="drawer-in" id="drawer-in"></div>
</div>

<script>
const $ = (s) => document.querySelector(s);
const money = (n) => '$' + Number(n || 0).toFixed(Number(n) >= 1 ? 2 : 6);
const fmtV = (n) => { n = Number(n||0); return n>=1e6 ? (n/1e6).toFixed(2)+'M' : n>=1e3 ? (n/1e3).toFixed(1)+'K' : n>=1 ? n.toFixed(2) : n.toFixed(4); };
const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const ago = (iso) => {
  if (!iso) return '—';
  const t = new Date(iso.replace(' ', 'T') + (iso.endsWith('Z') ? '' : 'Z'));
  const s = (Date.now() - t.getTime()) / 1000;
  if (s < 60) return Math.floor(s) + 's ago';
  if (s < 3600) return Math.floor(s/60) + 'm ago';
  if (s < 86400) return Math.floor(s/3600) + 'h ago';
  return Math.floor(s/86400) + 'd ago';
};
const OUTCOME_CLASS = { ok:'ok', unauthorized:'bad', suspended:'bad', rate_limited:'warn',
  insufficient_credits:'warn', daily_cap:'warn', upstream_error:'bad', upstream_saturated:'warn',
  bad_request:'warn', unsupported_model:'warn' };
const pill = (o) => '<span class="pill pill--' + (OUTCOME_CLASS[o] || 'dim') + '">' + esc(o) + '</span>';

async function api(path, opts) {
  const r = await fetch('/admin/api' + path, opts);
  if (r.status === 401) { location.reload(); throw new Error('unauthorized'); }
  return r.json();
}

// ── tabs ──
document.querySelectorAll('.tab').forEach((t) => t.addEventListener('click', () => {
  document.querySelectorAll('.tab').forEach((x) => x.classList.toggle('on', x === t));
  ['intel','overview','users','nft','requests','events'].forEach((v) => { $('#v-' + v).hidden = v !== t.dataset.tab; });
  ({ intel: loadIntel, overview: loadOverview, users: loadUsers, nft: loadNft, requests: loadRequests, events: loadEvents })[t.dataset.tab]();
}));

// ── overview ──
async function loadOverview() {
  const d = await api('/overview');
  const u = d.users || {}, h = d.last24h || {}, a = d.allTime || {};
  $('#ov-cards').innerHTML = [
    ['Users', u.total || 0, (u.with_key||0) + ' with a key · ' + (u.suspended||0) + ' suspended', ''],
    ['Calls · 24h', (h.calls||0).toLocaleString(), (h.ok||0) + ' ok · ' + Math.round(h.avg_ms||0) + 'ms avg', ''],
    ['Tokens · 24h', ((h.tin||0) + (h.tout||0)).toLocaleString(), (h.tin||0).toLocaleString() + ' in · ' + (h.tout||0).toLocaleString() + ' out', ''],
    ['Cost · 24h', money(h.cost), 'real upstream spend', ''],
    ['Burned · 24h', fmtV(h.burned), '$VANTIS retired', 'g'],
    ['Credit outstanding', money(u.balance), money(u.granted) + ' granted all time', ''],
    ['Consumed all time', money(u.consumed), (a.calls||0).toLocaleString() + ' calls total', ''],
    ['Burned all time', fmtV(u.burned), '$VANTIS retired', 'g'],
    ['Upstream capacity', (d.upstream ? d.upstream.used : 0) + ' / ' + (d.upstream ? d.upstream.limit : '—'), 'requests in the last minute', ''],
  ].map(([k,v,s,cls]) => '<div class="mcard"><div class="k">'+k+'</div><div class="v '+cls+'">'+v+'</div><div class="s">'+s+'</div></div>').join('');

  const series = d.series || [];
  const max = Math.max(1, ...series.map((s) => s.calls));
  $('#ov-spark').innerHTML = series.length
    ? series.map((s) => '<div style="height:' + Math.max(2, (s.calls / max) * 100) + '%" title="' + s.d + ': ' + s.calls + ' calls, ' + money(s.cost) + '"></div>').join('')
    : '<div class="dim" style="font-size:13px;padding-top:18px">No requests recorded yet.</div>';
  $('#ov-series-note').textContent = series.length ? 'peak ' + max + '/day' : '';

  $('#ov-outcomes tbody').innerHTML = (d.outcomes || []).length
    ? d.outcomes.map((o) => '<tr><td>' + pill(o.outcome) + '</td><td class="n">' + o.n + '</td></tr>').join('')
    : '<tr><td colspan="2" class="dim">Nothing in the last 24 hours.</td></tr>';
}

// ── cards / NFTs — registry, holdings, perks (concat-only strings) ──
var PERK_DEFS_CLIENT = {};
var NFT_SET_SUB = { 'GENESIS 001': 'Ten cards, struck once', 'OG 000': 'The set before the set' };
var NFT_PERK_SHORT = { gpt_unlimited: 'GPT unlimited', deepseek_unlimited: 'DeepSeek V4 unlimited' };
function nftGradeChip(grade) {
  const cls = grade === 'V·PROOF' ? ' gradechip--apex' : grade.indexOf('OG') === 0 ? ' gradechip--og' : '';
  return '<span class="gradechip' + cls + '">' + esc(grade) + '</span>';
}
async function loadNft() {
  const d = await api('/nft');
  PERK_DEFS_CLIENT = d.perk_defs || {};
  const defs = Object.keys(PERK_DEFS_CLIENT).map(function (k) { return [k, PERK_DEFS_CLIENT[k]]; });
  $('#nft-defs').innerHTML = defs.map(function (kv) {
    return '<div class="mcard"><div class="k">' + esc(kv[1].label) + '</div><div class="s">' + esc(kv[1].desc) + '</div></div>';
  }).join('');
  let lastSet = '';
  $('#tb-nft tbody').innerHTML = (d.cards || []).map(function (cd) {
    const holders = (cd.holders || []).map(function (h) {
      return '<span class="holderchip">@' + esc(h.handle) + ' <span class="src">' + esc(h.source) + '</span>' +
        '<a href="#" class="nft-revoke" data-slug="' + esc(cd.slug) + '" data-uid="' + esc(h.user_id) + '" title="Revoke this card from @' + esc(h.handle) + '">&times;</a></span>';
    }).join('') || '<span class="dim" style="font-size:12px">unassigned</span>';
    const perks = defs.map(function (kv) {
      const on = (cd.perks || []).indexOf(kv[0]) >= 0;
      const short = NFT_PERK_SHORT[kv[0]] || kv[1].label;
      return '<button class="pk' + (on ? ' on' : '') + ' nft-perk" data-slug="' + esc(cd.slug) + '" data-perk="' + esc(kv[0]) + '" data-on="' + (on ? 1 : 0) + '" title="' + esc(kv[1].label) + ' — ' + (on ? 'attached; click to remove' : 'click to attach') + '">' + (on ? '&#10003; ' : '+ ') + esc(short) + '</button>';
    }).join('');
    const setHead = cd.set !== lastSet
      ? '<tr class="nft-set"><td colspan="4"><b>' + esc(cd.set.replace(' ', ' / ')) + '</b> &middot; ' + esc(NFT_SET_SUB[cd.set] || '') + '</td></tr>'
      : '';
    lastSet = cd.set;
    return setHead + '<tr>' +
      '<td><div class="nft-name"><span class="no">' + String(cd.n).padStart(2, '0') + '</span><span class="nm">' + esc(cd.name) + '</span>' + nftGradeChip(cd.grade) + '</div></td>' +
      '<td>' + holders + '</td>' +
      '<td>' + perks + '</td>' +
      '<td class="nft-assigncell"><button class="abtn abtn--sm nft-assign" data-slug="' + esc(cd.slug) + '">Assign</button></td></tr>';
  }).join('');
  $('#tb-nft-usage tbody').innerHTML = (d.usage_7d || []).length
    ? d.usage_7d.map(function (u) {
        const lbl = (PERK_DEFS_CLIENT[u.perk] || {}).label || u.perk;
        return '<tr><td>' + esc(lbl) + '</td><td class="mono">@' + esc(u.handle) + '</td><td class="n">' + (u.calls || 0) + '</td><td class="n">' + Number(u.tokens || 0).toLocaleString() + '</td><td class="n">' + money(u.cost_usd) + '</td></tr>';
      }).join('')
    : '<tr><td colspan="5" class="dim">No perk-covered calls in the last 7 days.</td></tr>';
}
async function nftGrant(slug, input) {
  const handle = ((input && input.value) || '').trim();
  if (!handle) { input && input.focus(); return; }
  const r = await api('/nft/grant', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ slug: slug, handle: handle }) });
  if (r.error) { alert(r.message || r.error); input && input.focus(); } else loadNft();
}
document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter' && e.target && e.target.classList && e.target.classList.contains('nft-handle')) {
    e.preventDefault();
    nftGrant(e.target.dataset.slug, e.target);
  }
});
document.addEventListener('click', async function (e) {
  const post = function (path, payload) {
    return api(path, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
  };
  const as = e.target.closest ? e.target.closest('.nft-assign') : null;
  if (as) {
    // progressive disclosure: the input exists only while an assignment is
    // being made, so the registry never shows fifteen live forms at once
    const slug = as.dataset.slug;
    const cell = as.parentElement;
    cell.innerHTML = '<input class="nft-handle" data-slug="' + esc(slug) + '" placeholder="@handle">' +
      ' <button class="abtn abtn--g abtn--sm nft-grant" data-slug="' + esc(slug) + '">Grant</button>' +
      ' <button class="abtn abtn--sm nft-cancel" title="Cancel">&times;</button>';
    cell.querySelector('.nft-handle').focus();
    return;
  }
  const cn = e.target.closest ? e.target.closest('.nft-cancel') : null;
  if (cn) { loadNft(); return; }
  const g = e.target.closest ? e.target.closest('.nft-grant') : null;
  if (g) {
    nftGrant(g.dataset.slug, document.querySelector('.nft-handle[data-slug="' + g.dataset.slug + '"]'));
    return;
  }
  const rv = e.target.closest ? e.target.closest('.nft-revoke') : null;
  if (rv) {
    e.preventDefault();
    const r = await post('/nft/revoke', { slug: rv.dataset.slug, user_id: rv.dataset.uid });
    if (r.error) alert(r.message || r.error); else loadNft();
    return;
  }
  const pk = e.target.closest ? e.target.closest('.nft-perk') : null;
  if (pk) {
    const r = await post('/nft/perk', { slug: pk.dataset.slug, perk: pk.dataset.perk, on: pk.dataset.on !== '1' });
    if (r.error) alert(r.message || r.error); else loadNft();
    return;
  }
});

// ── users ──
async function loadUsers() {
  const q = $('#q').value.trim();
  const d = await api('/users' + (q ? '?q=' + encodeURIComponent(q) : ''));
  $('#tb-users tbody').innerHTML = (d.users || []).length ? d.users.map((u) => \`
    <tr class="click" data-uid="\${u.id}">
      <td><b>@\${esc(u.x_username)}</b><div class="dim" style="font-size:11.5px">\${esc(u.x_name || '')}</div>\${u.email ? '<div class="dim mono" style="font-size:11px">' + esc(u.email) + '</div>' : ''}</td>
      <td>\${u.score_tier ? '<span class="pill pill--dim">' + esc(u.score_tier) + '</span>' : '<span class="dim">—</span>'}</td>
      <td>\${u.status === 'suspended' ? '<span class="pill pill--bad">suspended</span>' : '<span class="pill pill--ok">active</span>'}</td>
      <td class="mono dim">\${u.key_prefix ? esc(u.key_prefix) : '—'}</td>
      <td class="n">\${money(u.usd_balance)}</td>
      <td class="n">\${money(u.usd_consumed)}</td>
      <td class="n" style="color:#09F875">\${fmtV(u.vantis_burned)}</td>
      <td class="n">\${u.calls || 0}</td>
      <td class="n">\${u.calls_24h || 0}</td>
      <td class="n">\${(u.tokens || 0).toLocaleString()}</td>
      <td class="dim">\${ago(u.last_seen_at)}</td>
    </tr>\`).join('') : '<tr><td colspan="11" class="dim">No users yet.</td></tr>';
}

// ── requests ──
async function loadRequests() {
  const d = await api('/requests?outcome=' + encodeURIComponent($('#of').value));
  $('#tb-req tbody').innerHTML = (d.requests || []).length ? d.requests.map((r) => \`
    <tr>
      <td class="dim">\${ago(r.created_at)}</td>
      <td>\${r.x_username ? '@' + esc(r.x_username) : '<span class="dim">—</span>'}</td>
      <td class="mono dim">\${r.key_prefix ? esc(r.key_prefix) : '—'}</td>
      <td>\${pill(r.outcome)}</td>
      <td class="n">\${r.status}</td>
      <td class="n">\${r.tokens_in || 0}</td>
      <td class="n">\${r.tokens_out || 0}</td>
      <td class="n">\${r.cost_usd ? money(r.cost_usd) : '—'}</td>
      <td class="n" style="color:#09F875">\${r.vantis_burned ? fmtV(r.vantis_burned) : '—'}</td>
      <td class="n">\${r.latency_ms ?? '—'}</td>
      <td class="dim mono" style="max-width:260px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">\${esc(r.error || '')}</td>
    </tr>\`).join('') : '<tr><td colspan="11" class="dim">No requests match.</td></tr>';
}

// ── audit ──
async function loadEvents() {
  const d = await api('/events');
  $('#tb-ev tbody').innerHTML = (d.events || []).length ? d.events.map((e) => \`
    <tr><td class="dim">\${ago(e.created_at)}</td><td><span class="pill pill--dim">\${esc(e.action)}</span></td>
    <td>\${e.x_username ? '@' + esc(e.x_username) : '<span class="dim">—</span>'}</td>
    <td class="dim">\${esc(e.detail || '')}</td><td class="mono dim">\${esc(e.ip || '')}</td></tr>\`).join('')
    : '<tr><td colspan="5" class="dim">No admin actions recorded.</td></tr>';
}

// ── user drawer ──
async function openUser(id) {
  const d = await api('/users/' + id);
  if (d.error) return;
  const u = d.user;
  $('#drawer-in').innerHTML = \`
    <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:16px">
      <div><h3>@\${esc(u.x_username)}</h3><div class="dim" style="font-size:13px">\${esc(u.x_name || '')}</div></div>
      <button class="abtn abtn--sm" data-act="close">Close</button>
    </div>
    <div class="kv">
      <div class="k">Status</div><div>\${u.status === 'suspended' ? '<span class="pill pill--bad">suspended</span>' : '<span class="pill pill--ok">active</span>'}</div>
      <div class="k">Email</div><div class="mono">\${u.email ? esc(u.email) + ' <span class="dim">via ' + esc(u.email_source || '?') + '</span>' : '<span class="dim">none on file</span>'}</div>
      <div class="k">Score / tier</div><div>\${u.score ?? '—'} · \${esc(u.score_tier || '—')}</div>
      <div class="k">Key</div><div class="mono">\${esc(u.key_prefix || 'none')}</div>
      <div class="k">Balance</div><div>\${money(u.usd_balance)} <span class="dim">of \${money(u.usd_granted)} granted</span></div>
      <div class="k">Consumed</div><div>\${money(u.usd_consumed)}</div>
      <div class="k">Burned</div><div style="color:#09F875">\${fmtV(u.vantis_burned)} VANTIS</div>
      <div class="k">Spend today</div><div>\${money(d.spend_today)}\${u.daily_usd_cap > 0 ? ' <span class="dim">of ' + money(u.daily_usd_cap) + ' cap</span>' : ''}</div>
      <div class="k">Rate limit</div><div>\${u.rate_limit_rpm || 240} req/min</div>
      <div class="k">Frontier pool</div><div>\${u.pool_access === 1 ? '<span class="pill pill--ok">allow-listed</span>' : '<span class="dim">not on the allowlist</span>'}</div>
      <div class="k">Last seen</div><div class="dim">\${ago(u.last_seen_at)}</div>
      <div class="k">Note</div><div class="dim">\${esc(u.admin_note || '—')}</div>
    </div>

    <div id="d-forensics" class="dim" style="font-size:12.5px">Loading forensics&hellip;</div>

    <div class="act">
      <button class="abtn \${u.status === 'suspended' ? 'abtn--g' : 'abtn--r'}" data-act="status" data-uid="\${u.id}" data-status="\${u.status === 'suspended' ? 'active' : 'suspended'}">
        \${u.status === 'suspended' ? 'Reactivate key' : 'Suspend key'}</button>
      <button class="abtn" data-act="rotate" data-uid="\${u.id}">Rotate key</button>
      <button class="abtn \${u.pool_access === 1 ? 'abtn--r' : 'abtn--g'}" data-act="pool" data-uid="\${u.id}" data-on="\${u.pool_access === 1 ? '0' : '1'}">
        \${u.pool_access === 1 ? 'Remove frontier pool' : 'Allow frontier pool'}</button>
    </div>
    <div class="act">
      <input id="d-delta" type="number" step="0.01" placeholder="± USD" style="width:110px">
      <input id="d-reason" placeholder="Reason" style="width:200px">
      <button class="abtn" data-act="adjust" data-uid="\${u.id}">Adjust balance</button>
    </div>
    <div class="act">
      <input id="d-rpm" type="number" value="\${u.rate_limit_rpm || 240}" style="width:100px" title="requests per minute">
      <input id="d-cap" type="number" step="0.01" value="\${u.daily_usd_cap || 0}" style="width:120px" title="daily USD cap, 0 = off">
      <button class="abtn" data-act="limits" data-uid="\${u.id}">Save limits</button>
    </div>
    <div class="act">
      <input id="d-note" placeholder="Operator note" value="\${esc(u.admin_note || '')}" style="flex:1;min-width:200px">
      <button class="abtn" data-act="note" data-uid="\${u.id}">Save note</button>
    </div>
    <div id="d-out"></div>

    <h3 style="font-size:15px;margin:26px 0 10px">Recent requests</h3>
    <div class="tablewrap"><table><thead><tr><th>When</th><th>Outcome</th><th class="n">In</th><th class="n">Out</th><th class="n">Cost</th><th class="n">ms</th></tr></thead>
    <tbody>\${(d.requests||[]).length ? d.requests.map((r)=>'<tr><td class="dim">'+ago(r.created_at)+'</td><td>'+pill(r.outcome)+'</td><td class="n">'+(r.tokens_in||0)+'</td><td class="n">'+(r.tokens_out||0)+'</td><td class="n">'+(r.cost_usd?money(r.cost_usd):'—')+'</td><td class="n">'+(r.latency_ms??'—')+'</td></tr>').join('') : '<tr><td colspan="6" class="dim">No calls yet.</td></tr>'}</tbody></table></div>

    <h3 style="font-size:15px;margin:26px 0 10px">Credit ledger</h3>
    <div class="tablewrap"><table><thead><tr><th>When</th><th>Type</th><th class="n">Amount</th><th class="n">Balance</th><th>Description</th></tr></thead>
    <tbody>\${(d.ledger||[]).map((l)=>'<tr><td class="dim">'+ago(l.created_at)+'</td><td><span class="pill pill--dim">'+esc(l.type)+'</span></td><td class="n">'+money(l.amount_usd)+'</td><td class="n">'+money(l.balance_after)+'</td><td class="dim">'+esc(l.description||'')+'</td></tr>').join('')}</tbody></table></div>
  \`;
  $('#drawer').classList.add('on');
  if (typeof loadForensics === 'function') loadForensics(u.id, Number(u.daily_usd_cap) || 0);
}
function closeDrawer(){ $('#drawer').classList.remove('on'); loadUsers(); }

async function post(path, body) {
  const r = await api(path, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(body||{}) });
  return r;
}
async function setStatus(id, status){ await post('/users/'+id+'/status', { status }); openUser(id); }
async function setPool(id, on){
  const grant = on === '1';
  if (!confirm(grant
    ? 'Allow-list this account for the frontier pool? The GPT ids start resolving for their key, unmetered.'
    : 'Remove this account from the frontier pool? The GPT ids stop resolving for their key immediately.')) return;
  await post('/users/'+id+'/pool', { on: grant });
  openUser(id);
}
async function limits(id){
  await post('/users/'+id+'/limits', { rate_limit_rpm: +$('#d-rpm').value, daily_usd_cap: +$('#d-cap').value });
  openUser(id);
}
async function note(id){ await post('/users/'+id+'/note', { note: $('#d-note').value }); openUser(id); }
async function adjust(id){
  const delta = parseFloat($('#d-delta').value);
  if (!delta) return;
  const r = await post('/users/'+id+'/balance', { delta_usd: delta, reason: $('#d-reason').value || 'manual adjustment' });
  if (r.error) { $('#d-out').innerHTML = '<div class="err">'+esc(r.message||r.error)+'</div>'; return; }
  openUser(id);
}
async function rotate(id){
  if (!confirm('Rotate this key? The current key stops working immediately.')) return;
  const r = await post('/users/'+id+'/rotate-key', {});
  if (r.api_key) {
    $('#d-out').innerHTML = '<div class="keyout">'+esc(r.api_key)+'</div><div class="dim" style="font-size:12px;margin-top:6px">Copy it now — it is not shown again.</div>';
  }
}
async function logout(){ await fetch('/admin/logout', { method:'POST' }); location.reload(); }

// ── wiring: CSP is enforcing with nonced scripts, so inline onclick/oninput
// attributes are BLOCKED (nonces never cover event handlers — the login
// button shipped dead that way). Static controls get listeners; rows and
// drawer actions are DYNAMIC HTML, so they route through delegation on
// stable ancestors via data-act/data-uid. Never emit on*="" in this file. ──
$('#logout').addEventListener('click', logout);
$('#q').addEventListener('input', loadUsers);
$('#of').addEventListener('change', loadRequests);
$('#tb-users tbody').addEventListener('click', (e) => {
  const row = e.target.closest('tr[data-uid]');
  if (row) openUser(row.dataset.uid);
});
$('#drawer').addEventListener('click', (e) => {
  const el = e.target.closest('[data-act]');
  if (el) {
    const { act, uid, status, on } = el.dataset;
    if (act === 'close') closeDrawer();
    else if (act === 'status') setStatus(uid, status);
    else if (act === 'pool') setPool(uid, on);
    else if (act === 'rotate') rotate(uid);
    else if (act === 'adjust') adjust(uid);
    else if (act === 'limits') limits(uid);
    else if (act === 'note') note(uid);
    return;
  }
  if (e.target === e.currentTarget) closeDrawer();
});

setInterval(() => { $('#clock').textContent = new Date().toISOString().replace('T',' ').slice(0,19) + 'Z'; }, 1000);
// Boot + refresh live in the intelligence script block below, which owns the
// default tab. loadIntel is defined there; classic scripts execute in order.
setInterval(() => { if (!$('#v-overview').hidden) loadOverview(); }, 30000);
</script>
${INTEL_JS}
</body></html>`;
}
