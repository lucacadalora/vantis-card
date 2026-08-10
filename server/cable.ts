// ─── CARD CABLE — the toll road ──────────────────────────────────────────
// Helicopter view of live request traffic, sibling of the fleet CABLE map
// (vantis.sh/cable-dd1a95be/): unlisted hash path, dark control-room
// surface, wire-class palette (traffic #0DA355 · auth #3A87C8 · ai #8266E3
// · data #B8860B · chain #C24F8C; brand #09F875 reserved for burn glow and
// live dots, never a lane). Every car is a REAL event polled from
// api_requests / vendor_requests — no fabricated traffic, ever. The feed is
// sanitized: outcomes, tokens, latency, vendor only; no user ids, key
// prefixes, IPs, or UAs leave the box.
import { getDb } from "./db";

export const CABLE_SLUG = "cable-9b3e51c7";
const db = () => getDb();

type ApiEvent = { id: number; o: string; s: number; ti: number; to: number; b: number; ms: number | null };
type VendorEvent = { id: number; v: string; s: number | null; ms: number | null };

export function cableFeed(afterApi: number, afterVendor: number) {
  const api = db()
    .query(
      `SELECT id, outcome o, status s, tokens_in ti, tokens_out t_o, vantis_burned b, latency_ms ms
       FROM api_requests WHERE id > ? ORDER BY id ASC LIMIT 60`
    )
    .all(afterApi)
    .map((r: any): ApiEvent => ({ id: r.id, o: r.o, s: r.s, ti: r.ti || 0, to: r.t_o || 0, b: r.b || 0, ms: r.ms }));
  const vendors = db()
    .query(
      `SELECT id, vendor v, status s, latency_ms ms FROM vendor_requests WHERE id > ? ORDER BY id ASC LIMIT 80`
    )
    .all(afterVendor)
    .map((r: any): VendorEvent => ({ id: r.id, v: r.v, s: r.s, ms: r.ms }));
  return { api, vendors, stats: cableStats() };
}

export function cableStats() {
  return {
    calls_1h: (db().query(`SELECT COUNT(*) n FROM api_requests WHERE created_at > datetime('now','-1 hour')`).get() as any).n,
    ok_1h: (db().query(`SELECT COUNT(*) n FROM api_requests WHERE outcome='ok' AND created_at > datetime('now','-1 hour')`).get() as any).n,
    up60: (db().query(`SELECT COUNT(*) n FROM vendor_requests WHERE vendor IN ('jatevo','ark') AND created_at > datetime('now','-60 seconds')`).get() as any).n,
    burned_today: (db().query(`SELECT COALESCE(SUM(vantis_burned),0) b FROM api_requests WHERE created_at > date('now')`).get() as any).b,
    outcomes_1h: Object.fromEntries(
      (db().query(`SELECT outcome o, COUNT(*) n FROM api_requests WHERE created_at > datetime('now','-1 hour') GROUP BY outcome`).all() as any[]).map((r) => [r.o, r.n])
    ),
  };
}

export function cableHtml(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex,nofollow">
<title>CARD CABLE — live request traffic</title>
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<style>
/* light Vantis system (card.vantis.sh SYSTEM_CSS tokens) — Luca: never dark */
:root{ --white:#FFFFFF; --wash:#F4F6F4; --ink:#0A0A0A; --body:#4C5055; --muted:#6A6F74;
  --line:#E4E6E2; --line2:#D3D6D1; --green:#09F875; --green-ink:#0B7A3E;
  --traffic:#0B7A3E; --auth:#2E6FA8; --ai:#6B4FD8; --data:#8A6D3B; --chain:#B2447E; --bad:#C0392B;
  --display:'Space Grotesk',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif; --mono:'SF Mono',ui-monospace,Menlo,Consolas,monospace; }
*{box-sizing:border-box;} html,body{margin:0;}
body{background:var(--white);color:var(--ink);font-family:var(--mono);-webkit-font-smoothing:antialiased;}
.hud{display:flex;align-items:center;gap:26px;flex-wrap:wrap;padding:18px 28px;border-bottom:1px solid var(--line);background:var(--white);}
.hud h1{font-family:var(--display);font-size:15px;font-weight:700;letter-spacing:0.06em;margin:0;color:var(--ink);}
.hud h1 span{color:var(--muted);font-family:var(--mono);font-size:12px;font-weight:400;letter-spacing:0.04em;}
.live{display:inline-flex;align-items:center;gap:7px;font-size:10px;letter-spacing:0.12em;color:var(--green-ink);font-weight:700;}
.live i{width:7px;height:7px;border-radius:50%;background:var(--green);display:block;animation:pulse 2.1s ease-in-out infinite;}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.3}}
.tiles{display:flex;gap:26px;margin-left:auto;flex-wrap:wrap;}
.tile{min-width:86px;}
.tile b{display:block;font-family:var(--display);font-size:19px;font-weight:700;color:var(--ink);font-variant-numeric:tabular-nums;}
.tile span{font-size:9px;letter-spacing:0.1em;color:var(--muted);text-transform:uppercase;}
.wrap{overflow-x:auto;background:var(--wash);}
svg{display:block;min-width:1200px;width:100%;height:auto;}
.road{stroke:var(--line2);stroke-width:10;fill:none;stroke-linecap:round;}
.flow{stroke:rgba(10,10,10,0.16);stroke-width:2;fill:none;stroke-dasharray:2 14;animation:flow 1.6s linear infinite;}
@keyframes flow{to{stroke-dashoffset:-16;}}
.ramp{stroke:var(--line2);stroke-width:6;fill:none;stroke-linecap:round;}
.ramp.dash{stroke-dasharray:1 10;}
.gpost{stroke:var(--line2);stroke-width:4;stroke-linecap:round;}
.gsign{fill:var(--white);stroke:var(--line2);}
.gname{fill:var(--ink);font-family:var(--display);font-size:13px;font-weight:700;letter-spacing:0.1em;text-anchor:middle;}
.gsub{fill:var(--muted);font-family:var(--mono);font-size:8.5px;letter-spacing:0.12em;text-anchor:middle;}
.lane-price{stroke:rgba(178,68,126,0.5);stroke-width:2;stroke-dasharray:1 7;}
.booth rect{fill:var(--white);stroke:var(--line2);rx:6;}
.booth text{fill:var(--ink);font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:0.08em;text-anchor:middle;}
.booth .sub{fill:var(--muted);font-size:8px;font-weight:400;letter-spacing:0.12em;}
.chipo rect{fill:#FDECEC;stroke:#E8B5B0;rx:11;}
.chipo.warn rect{fill:#FDF4E3;stroke:#E3CFA1;}
.chipo text{fill:var(--ink);font-family:var(--mono);font-size:9px;letter-spacing:0.08em;text-anchor:middle;}
.chipo .n{fill:var(--muted);font-size:8.5px;}
.node-label{fill:var(--muted);font-family:var(--mono);font-size:9px;letter-spacing:0.14em;text-anchor:middle;}
.node-label.big{fill:var(--ink);font-family:var(--display);font-size:12px;font-weight:700;}
#burnCore{fill:#E6FBEF;stroke:var(--green-ink);stroke-width:1.5;}
#burnCore.pulse{animation:burnp .65s ease-out;}
@keyframes burnp{0%{stroke-width:1.5;fill:#E6FBEF}30%{stroke-width:4;fill:var(--green)}100%{stroke-width:1.5;fill:#E6FBEF}}
.legend{display:flex;gap:20px;flex-wrap:wrap;padding:14px 28px 22px;border-top:1px solid var(--line);background:var(--white);}
.lg{display:inline-flex;align-items:center;gap:8px;font-size:9.5px;letter-spacing:0.1em;color:var(--muted);text-transform:uppercase;}
.lg i{width:9px;height:9px;border-radius:50%;display:block;}
.foot{padding:14px 28px 26px;font-size:9.5px;color:var(--muted);letter-spacing:0.04em;line-height:1.7;background:var(--white);}
@media (prefers-reduced-motion: reduce){.flow{animation:none;}.live i{animation:none;}}
</style>
</head>
<body>
<div class="hud">
  <h1>CARD CABLE <span>— card.vantis.sh request traffic, live</span></h1>
  <span class="live"><i></i>LIVE</span>
  <div class="tiles">
    <div class="tile"><b id="t-calls">—</b><span>calls · 1h</span></div>
    <div class="tile"><b id="t-ok">—</b><span>ok rate · 1h</span></div>
    <div class="tile"><b id="t-up">—</b><span>upstream · 60s</span></div>
    <div class="tile"><b id="t-burn">—</b><span>retired today</span></div>
  </div>
</div>

<div class="wrap">
<svg viewBox="0 0 1440 660" xmlns="http://www.w3.org/2000/svg" aria-label="Live map of API request traffic">
  <!-- main toll road -->
  <path class="road" d="M 60 200 L 1298 200"/>
  <path class="flow" d="M 60 200 L 1298 200"/>
  <!-- JATEVO gantry: a highway sign bridge over the upstream span; the
       road stays neutral — upstream cars carry the colour -->
  <g class="gantry">
    <line class="gpost" x1="921" y1="198" x2="921" y2="148"/>
    <line class="gpost" x1="1139" y1="198" x2="1139" y2="148"/>
    <rect class="gsign" x="896" y="104" width="268" height="46" rx="9"/>
    <text class="gname" x="1030" y="124">JATEVO</text>
    <text class="gsub" x="1030" y="141">DEEPSEEK V4 FLASH · WAFER RAIL</text>
  </g>
  <!-- ark failover ramp -->
  <path class="ramp dash" d="M 918 200 C 990 268 1070 268 1142 204"/>
  <!-- divert ramps -->
  <path class="ramp" id="rampKey" d="M 250 206 C 258 260 262 292 264 322" fill="none"/>
  <path class="ramp" id="rampStatus" d="M 380 206 C 388 260 392 292 394 322"/>
  <path class="ramp" id="rampRate" d="M 510 206 C 518 260 522 292 524 322"/>
  <path class="ramp" id="rampShape" d="M 640 206 C 648 260 652 292 654 322"/>
  <path class="ramp" id="rampReserve" d="M 770 206 C 778 260 782 292 784 322"/>
  <path class="ramp" id="rampSat" d="M 878 206 C 886 260 890 292 892 322"/>
  <path class="ramp" id="rampUerr" d="M 1030 206 C 1038 260 1042 292 1044 322"/>
  <!-- enrichment road (scoring signals) -->
  <path class="road" style="stroke-width:7" d="M 60 520 L 750 520"/>
  <path class="flow" d="M 60 520 L 750 520"/>
  <!-- price oracle line into the burn -->
  <path class="lane-price" fill="none" d="M 1210 520 C 1300 520 1330 420 1332 250"/>

  <!-- entries -->
  <g class="booth"><rect x="18" y="176" width="86" height="48"/><text x="61" y="196">API</text><text x="61" y="210" class="sub">/v1 CLIENTS</text></g>
  <g class="booth"><rect x="18" y="496" width="86" height="48"/><text x="61" y="516">SCORING</text><text x="61" y="530" class="sub">ENRICHMENT</text></g>

  <!-- toll booths, enforcement order -->
  <g class="booth"><rect x="212" y="182" width="76" height="36"/><text x="250" y="204">KEY</text><text x="250" y="170" class="sub">AUTH</text></g>
  <g class="booth"><rect x="342" y="182" width="76" height="36"/><text x="380" y="204">STATUS</text><text x="380" y="170" class="sub">SUSPENDED?</text></g>
  <g class="booth"><rect x="472" y="182" width="76" height="36"/><text x="510" y="204">RATE</text><text x="510" y="170" class="sub">RPM WINDOW</text></g>
  <g class="booth"><rect x="602" y="182" width="76" height="36"/><text x="640" y="204">SHAPE</text><text x="640" y="170" class="sub">MODEL·BODY</text></g>
  <g class="booth"><rect x="732" y="182" width="76" height="36"/><text x="770" y="204">RESERVE</text><text x="770" y="170" class="sub">BALANCE·CAP</text></g>

  <!-- upstream + settle + burn -->
  <text x="1030" y="252" class="node-label">ARK FAILOVER</text>
  <g class="booth"><rect x="1150" y="182" width="76" height="36"/><text x="1188" y="204">SETTLE</text><text x="1188" y="170" class="sub">USAGE→USD</text></g>
  <circle id="burnCore" cx="1332" cy="200" r="26"/>
  <text x="1332" y="204" class="node-label big" style="fill:#0B7A3E">BURN</text>
  <text x="1332" y="156" class="node-label">$VANTIS RETIRED</text>
  <text x="1332" y="246" class="node-label" id="burnAmt"></text>

  <!-- enrichment booths -->
  <g class="booth"><rect x="312" y="502" width="76" height="36"/><text x="350" y="524">EXA</text><text x="350" y="490" class="sub">PUBLIC SIGNALS</text></g>
  <g class="booth"><rect x="512" y="502" width="76" height="36"/><text x="550" y="524">X API</text><text x="550" y="490" class="sub">METRICS</text></g>
  <g class="booth"><rect x="692" y="502" width="86" height="36"/><text x="735" y="524">DOSSIER</text><text x="735" y="490" class="sub">TO THE AGENT</text></g>
  <g class="booth"><rect x="1130" y="502" width="80" height="36"/><text x="1170" y="524">PRICE</text><text x="1170" y="490" class="sub">DEXSCREENER</text></g>

  <!-- outcome chips -->
  <g class="chipo" id="c-unauthorized"><rect x="196" y="330" width="118" height="26"/><text x="255" y="343">UNAUTHORIZED</text><text x="255" y="352" class="n" id="n-unauthorized"></text></g>
  <g class="chipo" id="c-suspended"><rect x="334" y="330" width="106" height="26"/><text x="387" y="343">SUSPENDED</text><text x="387" y="352" class="n" id="n-suspended"></text></g>
  <g class="chipo warn" id="c-rate_limited"><rect x="458" y="330" width="112" height="26"/><text x="514" y="343">RATE LIMITED</text><text x="514" y="352" class="n" id="n-rate_limited"></text></g>
  <g class="chipo warn" id="c-bad_request"><rect x="588" y="330" width="112" height="26"/><text x="644" y="343">BAD REQUEST</text><text x="644" y="352" class="n" id="n-bad_request"></text></g>
  <g class="chipo warn" id="c-insufficient_credits"><rect x="718" y="330" width="118" height="26"/><text x="777" y="343">NO CREDITS</text><text x="777" y="352" class="n" id="n-insufficient_credits"></text></g>
  <g class="chipo warn" id="c-upstream_saturated"><rect x="852" y="330" width="104" height="26"/><text x="904" y="343">SATURATED</text><text x="904" y="352" class="n" id="n-upstream_saturated"></text></g>
  <g class="chipo" id="c-upstream_error"><rect x="984" y="330" width="122" height="26"/><text x="1045" y="343">UPSTREAM ERROR</text><text x="1045" y="352" class="n" id="n-upstream_error"></text></g>

  <!-- car paths (invisible guides) -->
  <defs>
    <path id="pOk" d="M 60 200 L 1160 200 L 1306 200"/>
    <path id="pKey" d="M 60 200 L 250 200 C 258 260 262 292 264 322"/>
    <path id="pStatus" d="M 60 200 L 380 200 C 388 260 392 292 394 322"/>
    <path id="pRate" d="M 60 200 L 510 200 C 518 260 522 292 524 322"/>
    <path id="pShape" d="M 60 200 L 640 200 C 648 260 652 292 654 322"/>
    <path id="pReserve" d="M 60 200 L 770 200 C 778 260 782 292 784 322"/>
    <path id="pSat" d="M 60 200 L 878 200 C 886 260 890 292 892 322"/>
    <path id="pUerr" d="M 60 200 L 1030 200 C 1038 260 1042 292 1044 322"/>
    <path id="pBridge" d="M 918 200 L 1142 200"/>
    <path id="pArk" d="M 918 200 C 990 268 1070 268 1142 204"/>
    <path id="pExa" d="M 60 520 L 350 520 L 735 520"/>
    <path id="pXapi" d="M 60 520 L 550 520 L 735 520"/>
    <path id="pPrice" d="M 1210 520 C 1300 520 1330 420 1332 250"/>
  </defs>
  <g id="cars"></g>
</svg>
</div>

<div class="legend">
  <span class="lg"><i style="background:var(--traffic)"></i>billed call</span>
  <span class="lg"><i style="background:var(--bad)"></i>auth refusal</span>
  <span class="lg"><i style="background:var(--data)"></i>policy refusal · enrichment</span>
  <span class="lg"><i style="background:var(--ai)"></i>upstream dial</span>
  <span class="lg"><i style="background:var(--auth)"></i>x api</span>
  <span class="lg"><i style="background:var(--chain)"></i>price oracle</span>
</div>
<div class="foot">Every car is a real event from the gateway and vendor traces, streamed the moment it happens (SSE push; polling fallback) — nothing simulated.
Feed is sanitized: outcomes, tokens, and latency only; no identities leave the box. Unlisted page; do not link publicly.</div>

<script>
(function(){
  var SLUG = '/${CABLE_SLUG}';
  var COLORS = { ok:'#0B7A3E', unauthorized:'#C0392B', suspended:'#C0392B',
    rate_limited:'#8A6D3B', daily_cap:'#8A6D3B', insufficient_credits:'#8A6D3B',
    bad_request:'#8A6D3B', unsupported_model:'#8A6D3B',
    upstream_saturated:'#8A6D3B', upstream_error:'#C0392B' };
  var PATHS = { ok:'pOk', unauthorized:'pKey', suspended:'pStatus', rate_limited:'pRate',
    unsupported_model:'pShape', bad_request:'pShape', daily_cap:'pReserve',
    insufficient_credits:'pReserve', upstream_saturated:'pSat', upstream_error:'pUerr' };
  var VEND = { jatevo:['pBridge','#6B4FD8'], ark:['pArk','#6B4FD8'], exa:['pExa','#8A6D3B'],
    xapi:['pXapi','#2E6FA8'], dexscreener:['pPrice','#B2447E'] };
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var svgNS = 'http://www.w3.org/2000/svg';
  var carsG = document.getElementById('cars');
  var guides = {}, lens = {};
  ['pOk','pKey','pStatus','pRate','pShape','pReserve','pSat','pUerr','pBridge','pArk','pExa','pXapi','pPrice'].forEach(function(id){
    var el = document.getElementById(id); guides[id] = el; lens[id] = el.getTotalLength();
  });
  var active = [], raf = 0;
  function spawn(pathId, color, opts){
    if (reduce) return;
    opts = opts || {};
    if (active.length > 70) return; // burst guard — counters still tell the truth
    var el = document.createElementNS(svgNS, 'circle');
    el.setAttribute('r', opts.r || 4);
    el.setAttribute('fill', color);
    el.setAttribute('opacity', '0.95');
    carsG.appendChild(el);
    active.push({ el: el, id: pathId, t0: performance.now() + (opts.delay || 0),
      dur: opts.dur || (900 + lens[pathId] * 1.9), burn: !!opts.burn });
    if (!raf) raf = requestAnimationFrame(tick);
  }
  function tick(now){
    for (var i = active.length - 1; i >= 0; i--) {
      var c = active[i];
      var p = (now - c.t0) / c.dur;
      if (p < 0) { c.el.setAttribute('opacity', '0'); continue; }
      if (p >= 1) {
        if (c.burn) burnPulse();
        c.el.remove(); active.splice(i, 1); continue;
      }
      var pt = guides[c.id].getPointAtLength(p * lens[c.id]);
      c.el.setAttribute('opacity', p < 0.04 ? String(p / 0.04) : '0.95');
      c.el.setAttribute('cx', pt.x); c.el.setAttribute('cy', pt.y);
    }
    raf = active.length ? requestAnimationFrame(tick) : 0;
  }
  var burnEl = document.getElementById('burnCore');
  function burnPulse(){
    burnEl.classList.remove('pulse'); void burnEl.getBoundingClientRect();
    burnEl.classList.add('pulse');
  }
  function fmtV(n){ n = Number(n || 0); return n >= 1000 ? n.toFixed(0) : n >= 1 ? n.toFixed(2) : n.toFixed(4); }
  function applyStats(st){
    var s = st || {};
    document.getElementById('t-calls').textContent = (s.calls_1h || 0).toLocaleString();
    document.getElementById('t-ok').textContent = s.calls_1h ? Math.round((s.ok_1h / s.calls_1h) * 100) + '%' : '—';
    document.getElementById('t-up').textContent = (s.up60 || 0) + ' / 500';
    document.getElementById('t-burn').textContent = fmtV(s.burned_today) + ' V';
    var oc = s.outcomes_1h || {};
    ['unauthorized','suspended','rate_limited','bad_request','insufficient_credits','upstream_saturated','upstream_error'].forEach(function(k){
      var el = document.getElementById('n-' + k);
      if (el) el.textContent = oc[k] ? oc[k] + ' · 1H' : '';
    });
  }
  function spawnApi(o, b, delay){
    spawn(PATHS[o] || 'pShape', COLORS[o] || '#8A6D3B', { delay: delay || 0, burn: o === 'ok' && b > 0 });
  }
  function spawnVendor(v, st, delay){
    var cfg = VEND[v]; if (!cfg) return;
    spawn(cfg[0], (st && st < 400) ? cfg[1] : '#C0392B', { delay: delay || 0, r: v === 'dexscreener' ? 3 : 3.5 });
  }
  // ── real time: SSE pushed straight off the write path (the server emits
  //    the moment a trace row lands). Polling survives only as a fallback. ──
  var aA = 0, aV = 0, pollTimer = null;
  function poll(){
    fetch(SLUG + '/feed?a=' + aA + '&v=' + aV).then(function(r){ return r.json(); }).then(function(d){
      (d.api || []).forEach(function(e, i){
        if (e.id > aA) aA = e.id;
        if (!document.hidden) spawnApi(e.o, e.b, i * 160);
      });
      (d.vendors || []).forEach(function(e, i){
        if (e.id > aV) aV = e.id;
        if (!document.hidden) spawnVendor(e.v, e.s, i * 160);
      });
      applyStats(d.stats);
    }).catch(function(){});
  }
  function startPolling(){
    if (pollTimer) return;
    fetch(SLUG + '/feed?tail=1').then(function(r){ return r.json(); }).then(function(d){
      if (d.cursors) { aA = d.cursors.a; aV = d.cursors.v; }
      pollTimer = setInterval(poll, 2500);
    });
  }
  function startStream(){
    if (!window.EventSource) { startPolling(); return; }
    var es = new EventSource(SLUG + '/stream');
    es.onmessage = function(ev){
      var m; try { m = JSON.parse(ev.data); } catch (e) { return; }
      if (m.t === 'stats') { applyStats(m.stats); return; }
      if (document.hidden) return;
      if (m.t === 'api') spawnApi(m.o, m.b || 0, 0);
      else if (m.t === 'vendor') spawnVendor(m.v, m.s, 0);
    };
    es.onerror = function(){ es.close(); startPolling(); };
  }
  // First paint replays the most recent real events so the road is never
  // falsely empty, then the live stream takes over.
  fetch(SLUG + '/feed?tail=1').then(function(r){ return r.json(); }).then(function(d){
    var ca = d.cursors ? d.cursors.a : 0, cv = d.cursors ? d.cursors.v : 0;
    aA = Math.max(0, ca - 10); aV = Math.max(0, cv - 14);
    fetch(SLUG + '/feed?a=' + aA + '&v=' + aV).then(function(r){ return r.json(); }).then(function(d2){
      (d2.api || []).forEach(function(e, i){ if (e.id > aA) aA = e.id; spawnApi(e.o, e.b, i * 320); });
      (d2.vendors || []).forEach(function(e, i){ if (e.id > aV) aV = e.id; spawnVendor(e.v, e.s, i * 320); });
      applyStats(d2.stats);
      startStream();
    });
  });
})();
</script>
</body>
</html>`;
}

export function cableCursors() {
  const a = (db().query(`SELECT COALESCE(MAX(id),0) m FROM api_requests`).get() as any).m;
  const v = (db().query(`SELECT COALESCE(MAX(id),0) m FROM vendor_requests`).get() as any).m;
  return { a, v };
}
