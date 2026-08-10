// ─── /console — the staging inference console ────────────────────────────
// Wafer-function (Models · Usage · Billing), Vantis house style. Gated to
// staging accounts only (users.staging=1 — today: the founder) or a valid
// operator /admin session; everyone else gets a plain 404 so the surface
// stays invisible. Unlisted + noindex. All figures are REAL reads over
// api_requests / credit_transactions / agent_wallets scoped to the console
// user — nothing simulated, no invented prices (catalog rates come from
// server/upstream STAGING_CATALOG, which only carries documented list rates).
import { getDb, getUser, countActiveKeys } from "./db";
import { readSession } from "./session";
import { hasAdminSession } from "./admin";
import { SYSTEM_CSS, ARROW } from "./system";
import { V_MARK } from "./pages";
import { STAGING_CATALOG, TARGET_MODEL, TARGET_LABEL, resolveUpstream, servingNote } from "./upstream";
import { PRICING } from "./credits";

const db = () => getDb();

// ── gate ──
export function consoleUser(cookieHeader: string | undefined): any | null {
  const sess = readSession(cookieHeader);
  if (sess?.uid) {
    const u = getUser(sess.uid);
    if (u && u.staging === 1) return u;
  }
  if (hasAdminSession(cookieHeader)) {
    const u = db().query("SELECT * FROM users WHERE staging=1 ORDER BY created_at ASC LIMIT 1").get();
    if (u) return u;
  }
  return null;
}

// ── data ──
const RANGES: Record<string, { sec: number; bucket: number }> = {
  "1h": { sec: 3600, bucket: 300 },
  "6h": { sec: 21600, bucket: 1800 },
  "24h": { sec: 86400, bucket: 3600 },
  "7d": { sec: 604800, bucket: 21600 },
  "30d": { sec: 2592000, bucket: 86400 },
};

export function usageData(userId: string, range: string) {
  const r = RANGES[range] || RANGES["24h"];
  const since = `datetime('now','-${r.sec} seconds')`;
  const base = `FROM api_requests WHERE user_id = ? AND created_at > ${since}`;
  const d = db();
  const tot = d.query(`SELECT COUNT(*) n, COALESCE(SUM(tokens_in),0) tin, COALESCE(SUM(tokens_out),0) tout,
      COALESCE(SUM(cost_usd),0) cost, COALESCE(SUM(vantis_burned),0) burned,
      SUM(CASE WHEN outcome='ok' THEN 1 ELSE 0 END) ok ${base}`).get(userId) as any;
  const lat = d.query(`SELECT latency_ms ${base} AND outcome='ok' AND latency_ms IS NOT NULL ORDER BY latency_ms`).all(userId) as any[];
  const p50 = lat.length ? lat[Math.floor(lat.length / 2)].latency_ms : null;
  const p95 = lat.length ? lat[Math.min(lat.length - 1, Math.floor(lat.length * 0.95))].latency_ms : null;
  const buckets = d.query(`SELECT (strftime('%s',created_at)/${r.bucket})*${r.bucket} b,
      COALESCE(SUM(tokens_in),0) tin, COALESCE(SUM(tokens_out),0) tout, COUNT(*) n ${base}
      GROUP BY b ORDER BY b`).all(userId) as any[];
  const byModel = d.query(`SELECT COALESCE(model,'—') model, COUNT(*) n, COALESCE(SUM(tokens_in),0) tin,
      COALESCE(SUM(tokens_out),0) tout, COALESCE(SUM(cost_usd),0) cost ${base} AND outcome='ok'
      GROUP BY model ORDER BY cost DESC, n DESC`).all(userId) as any[];
  const outcomes = d.query(`SELECT outcome, COUNT(*) n ${base} GROUP BY outcome`).all(userId) as any[];
  return {
    range: RANGES[range] ? range : "24h",
    bucket_sec: r.bucket,
    since_sec: r.sec,
    tiles: {
      requests: tot.n, ok: tot.ok || 0, tokens_in: tot.tin, tokens_out: tot.tout,
      cost_usd: tot.cost, burned: tot.burned, p50_ms: p50, p95_ms: p95,
      err_rate: tot.n ? Math.round(((tot.n - (tot.ok || 0)) / tot.n) * 100) : 0,
    },
    buckets, by_model: byModel, outcomes,
  };
}

export function billingData(user: any) {
  const d = db();
  const lanes = d.query("SELECT id, purpose, status, usd_balance, usd_consumed, vantis_burned FROM agent_wallets WHERE user_id = ? AND status != 'closed'").all(user.id) as any[];
  const ledger = d.query(`SELECT type, amount_usd, balance_after, description, wallet_id, created_at
      FROM credit_transactions WHERE user_id = ? ORDER BY id DESC LIMIT 30`).all(user.id) as any[];
  const days = d.query(`SELECT date(created_at) d, COALESCE(SUM(cost_usd),0) cost, COUNT(*) n,
      COALESCE(SUM(vantis_burned),0) burned FROM api_requests
      WHERE user_id = ? AND outcome='ok' AND created_at > datetime('now','-14 days')
      GROUP BY date(created_at) ORDER BY d`).all(user.id) as any[];
  return {
    handle: user.x_username,
    main_balance_usd: user.usd_balance || 0,
    granted_usd: user.usd_granted || 0,
    consumed_usd: user.usd_consumed || 0,
    vantis_burned: user.vantis_burned || 0,
    active_keys: countActiveKeys(user.id),
    lanes, ledger, spend_days: days,
  };
}

// ── shell ──
const CONSOLE_CSS = `
.cw { display:grid; grid-template-columns:210px minmax(0,1fr); gap:0; max-width:1240px; margin:0 auto; padding:0 32px; }
.crail { border-right:1px solid var(--line); padding:34px 22px 34px 0; min-height:calc(100vh - 64px); }
.crail .stg { display:inline-flex; align-items:center; gap:7px; font-family:var(--mono); font-size:10px; font-weight:700; letter-spacing:0.12em; color:#8A6D3B; background:#FDF4E3; border:1px solid #E3CFA1; border-radius:999px; padding:4px 10px; margin-bottom:22px; }
.crail a { display:block; font-family:var(--display); font-size:14.5px; font-weight:600; color:var(--body); text-decoration:none; padding:9px 12px; border-radius:9px; margin-bottom:2px; }
.crail a.on { background:var(--wash); color:var(--ink); }
.crail a:hover { color:var(--ink); }
.cmain { padding:34px 0 60px 34px; }
.cmain h1 { font-size:clamp(26px,3vw,34px); margin:0 0 6px; }
.csub { font-size:14px; color:var(--body); margin:0 0 26px; max-width:640px; }
.mcardx { border:1px solid var(--line); border-radius:14px; padding:22px; margin-bottom:14px; background:var(--white); }
.mhead { display:flex; align-items:center; gap:10px; flex-wrap:wrap; }
.mhead h3 { font-size:18px; margin:0; }
.mid { font-family:var(--mono); font-size:12px; color:var(--muted); }
.mtag { font-family:var(--mono); font-size:9.5px; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; border:1px solid var(--line-strong); border-radius:20px; padding:3px 8px; color:var(--body); }
.mtag--live { background:#E6FBEF; border-color:#9FE7C0; color:#0B7A3E; }
.mtag--zdr { background:#EDF3FD; border-color:#B9CDEA; color:#2E5FA8; }
.mrates { display:flex; gap:26px; margin:14px 0 0; font-size:13px; color:var(--body); flex-wrap:wrap; }
.mrates b { font-family:var(--display); font-size:16px; color:var(--ink); display:block; }
.mcurl { margin-top:14px; }
.mcurl summary { font-family:var(--mono); font-size:11px; letter-spacing:0.08em; color:var(--green-ink); cursor:pointer; }
.mcurl pre { background:#0F1110; color:#DFE5DF; border-radius:10px; padding:14px 16px; font-family:var(--mono); font-size:11.5px; line-height:1.6; overflow-x:auto; margin:10px 0 0; }
.tiles { display:grid; grid-template-columns:repeat(auto-fit,minmax(130px,1fr)); gap:10px; margin-bottom:18px; }
.tile { border:1px solid var(--line); border-radius:12px; padding:14px 16px; background:var(--white); }
.tile b { font-family:var(--display); font-size:20px; font-weight:700; display:block; font-variant-numeric:tabular-nums; }
.tile span { font-size:10px; letter-spacing:0.09em; text-transform:uppercase; color:var(--muted); }
.ranges { display:flex; gap:6px; margin-bottom:16px; }
.ranges button { font-family:var(--mono); font-size:11px; font-weight:700; border:1px solid var(--line-strong); background:var(--white); border-radius:999px; padding:5px 12px; cursor:pointer; color:var(--body); }
.ranges button.on { background:var(--ink); color:var(--green); border-color:var(--ink); }
.panelx { border:1px solid var(--line); border-radius:14px; padding:20px 22px; background:var(--white); margin-bottom:14px; }
.panelx h2 { font-size:15px; margin:0 0 12px; }
.chart { width:100%; height:200px; }
.legendx { display:flex; gap:16px; font-size:11px; color:var(--muted); margin-top:8px; }
.legendx i { display:inline-block; width:9px; height:9px; border-radius:3px; margin-right:5px; vertical-align:-1px; }
table.ct { width:100%; border-collapse:collapse; font-size:12.5px; }
table.ct th { text-align:left; font-family:var(--mono); font-size:9.5px; letter-spacing:0.1em; text-transform:uppercase; color:var(--muted); padding:6px 8px; border-bottom:1px solid var(--line); }
table.ct td { padding:8px; border-bottom:1px solid var(--line); font-variant-numeric:tabular-nums; }
table.ct td.n, table.ct th.n { text-align:right; }
.mono { font-family:var(--mono); }
.dim { color:var(--muted); }
@media (max-width:860px) { .cw { grid-template-columns:1fr; } .crail { min-height:0; border-right:0; border-bottom:1px solid var(--line); padding:20px 0 12px; display:flex; gap:6px; align-items:center; flex-wrap:wrap; } .crail a { margin:0; } .cmain { padding-left:0; } }
`;

function shell(active: "models" | "usage" | "billing", title: string, inner: string, script = ""): string {
  const link = (href: string, id: string, label: string) =>
    `<a href="${href}" class="${active === id ? "on" : ""}">${label}</a>`;
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex,nofollow">
<title>${title} — Vantis Console</title>
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<style>${SYSTEM_CSS}${CONSOLE_CSS}</style>
</head>
<body>
<nav class="nav"><div class="nav-in">
  <a class="brand" href="/console">${V_MARK} VANTIS <span class="sub">CONSOLE</span></a>
  <div class="navactions"><a class="arrowlink" href="/wallets">Wallets ${ARROW}</a><a class="arrowlink" href="/account">Account ${ARROW}</a></div>
</div></nav>
<div class="cw">
  <aside class="crail">
    <div class="stg">STAGING</div>
    ${link("/console", "models", "Models")}
    ${link("/console/usage", "usage", "Usage")}
    ${link("/console/billing", "billing", "Billing")}
  </aside>
  <main class="cmain">${inner}</main>
</div>
${script ? `<script>${script}</script>` : ""}
</body></html>`;
}

// ── models page ──
export function consoleModelsHtml(user: any): string {
  const up = resolveUpstream();
  const curl = (model: string, extra = "") => `curl -sS https://card.vantis.sh/v1/chat/completions \\
  -H "Authorization: Bearer $VANTIS_CARD_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "${model}",
    "messages": [{"role": "user", "content": "Hello!"}],
    "max_tokens": 64${extra}
  }'`;
  const prod = `<div class="mcardx">
    <div class="mhead"><h3>${TARGET_LABEL}</h3><span class="mtag mtag--live">PRODUCTION</span></div>
    <div class="mid">${TARGET_MODEL} · aliases: deepseek-v4-flash, deepseek-flash, deepseek-chat</div>
    <p class="csub" style="margin:10px 0 0">${servingNote(up)} Reasoning on by default; <span class="mono">thinking: {"type":"disabled"}</span> switches it off. SSE streaming supported.</p>
    <div class="mrates">
      <div><b>$${PRICING.input.toFixed(2)}</b>/1M input</div>
      <div><b>$${PRICING.output.toFixed(2)}</b>/1M output</div>
    </div>
    <details class="mcurl"><summary>QUICK START</summary><pre>${curl(TARGET_MODEL)}</pre></details>
  </div>`;
  const staged = STAGING_CATALOG.map((m) => `<div class="mcardx">
    <div class="mhead"><h3>${m.label}</h3><span class="mtag">STAGING</span>${m.zdrCapable ? '<span class="mtag mtag--zdr">ZDR-CAPABLE ROUTE</span>' : ""}</div>
    <div class="mid">${m.id}</div>
    <div class="mrates">
      <div><b>$${m.rate.input.toFixed(2)}</b>/1M input</div>
      <div><b>$${m.rate.output.toFixed(2)}</b>/1M output</div>
    </div>
    <details class="mcurl"><summary>QUICK START</summary><pre>${curl(m.id)}</pre></details>
  </div>`).join("");
  const inner = `
  <h1>Models</h1>
  <p class="csub">The production rail plus the staging catalog, serverless through the Jatevo gateway — pay per token on your card key (<span class="mono">${user.api_key ? String(user.api_key).slice(0, 12) + "…" : "no key issued"}</span>). Staging models bill at their listed rate, are visible to staging accounts only, and never fail over across providers.</p>
  ${prod}
  <h1 style="font-size:20px; margin-top:30px">Staging catalog</h1>
  <p class="csub">Rates are documented list prices only — DeepSeek routes at the card's DeepSeek rate, Kimi at Wafer's published serverless rate. ZDR on wafer routes is requested per call; the public ZDR claim stays off until the end-to-end forward is confirmed.</p>
  ${staged}`;
  return shell("models", "Models", inner);
}

// ── usage page ──
export function consoleUsageHtml(): string {
  const inner = `
  <h1>Usage</h1>
  <p class="csub">Your account's real gateway traffic — every figure is a live read of the metering table.</p>
  <div class="ranges" id="ranges">
    ${["1h", "6h", "24h", "7d", "30d"].map((r) => `<button data-r="${r}" class="${r === "24h" ? "on" : ""}">${r}</button>`).join("")}
  </div>
  <div class="tiles" id="tiles"></div>
  <div class="panelx">
    <h2>Tokens</h2>
    <svg class="chart" id="chart" viewBox="0 0 960 200" preserveAspectRatio="none"></svg>
    <div class="legendx"><span><i style="background:#0B7A3E"></i>Output</span><span><i style="background:#9AD8B4"></i>Input</span></div>
  </div>
  <div class="panelx"><h2>By model</h2><table class="ct" id="bymodel"><thead><tr><th>Model</th><th class="n">Calls</th><th class="n">In</th><th class="n">Out</th><th class="n">Cost</th></tr></thead><tbody></tbody></table></div>
  <div class="panelx"><h2>Outcomes</h2><table class="ct" id="outcomes"><tbody></tbody></table></div>`;
  const script = `
(function(){
  var money = function(n){ n = Number(n||0); return n >= 0.01 ? '$' + n.toFixed(2) : '$' + n.toFixed(6); };
  var fmt = function(n){ return Number(n||0).toLocaleString('en-US'); };
  function load(range){
    fetch('/console/api/usage?range=' + range).then(function(r){ return r.json(); }).then(function(d){
      var t = d.tiles;
      document.getElementById('tiles').innerHTML = [
        ['Requests', fmt(t.requests), ''], ['OK', fmt(t.ok), ''], ['Error rate', t.err_rate + '%', ''],
        ['P50 latency', t.p50_ms != null ? t.p50_ms + 'ms' : '—', ''], ['P95', t.p95_ms != null ? t.p95_ms + 'ms' : '—', ''],
        ['Tokens in', fmt(t.tokens_in), ''], ['Tokens out', fmt(t.tokens_out), ''],
        ['Cost', money(t.cost_usd), ''], ['VANTIS retired', Number(t.burned||0).toFixed(4), '']
      ].map(function(x){ return '<div class="tile"><b>' + x[1] + '</b><span>' + x[0] + '</span></div>'; }).join('');
      // stacked bars over the FULL range window, empty buckets included
      var W = 960, H = 200, PAD = 2;
      var now = Math.floor(Date.now() / 1000);
      var start = (Math.floor((now - d.since_sec) / d.bucket_sec) + 1) * d.bucket_sec;
      var slots = [];
      for (var b = start; b <= now; b += d.bucket_sec) slots.push(b);
      var map = {};
      (d.buckets || []).forEach(function(x){ map[x.b] = x; });
      var max = 1;
      slots.forEach(function(b){ var x = map[b]; if (x) max = Math.max(max, x.tin + x.tout); });
      var bw = Math.max(2, (W - PAD * slots.length) / Math.max(1, slots.length));
      var svg = '';
      slots.forEach(function(b, i){
        var x = map[b]; if (!x) return;
        var hIn = (x.tin / max) * (H - 8), hOut = (x.tout / max) * (H - 8);
        var px = i * (bw + PAD);
        svg += '<rect x="' + px + '" y="' + (H - hOut) + '" width="' + bw + '" height="' + hOut + '" fill="#0B7A3E" rx="1"></rect>';
        svg += '<rect x="' + px + '" y="' + (H - hOut - hIn) + '" width="' + bw + '" height="' + hIn + '" fill="#9AD8B4" rx="1"></rect>';
      });
      document.getElementById('chart').innerHTML = svg || '<text x="12" y="24" font-size="12" fill="#6A6F74">No traffic in this window.</text>';
      document.querySelector('#bymodel tbody').innerHTML = (d.by_model || []).map(function(m){
        return '<tr><td class="mono">' + m.model + '</td><td class="n">' + fmt(m.n) + '</td><td class="n">' + fmt(m.tin) + '</td><td class="n">' + fmt(m.tout) + '</td><td class="n">' + money(m.cost) + '</td></tr>';
      }).join('') || '<tr><td colspan="5" class="dim">No billed calls in this window.</td></tr>';
      document.querySelector('#outcomes tbody').innerHTML = (d.outcomes || []).map(function(o){
        return '<tr><td class="mono">' + o.outcome + '</td><td class="n">' + fmt(o.n) + '</td></tr>';
      }).join('') || '<tr><td class="dim">Nothing yet.</td></tr>';
    });
  }
  document.getElementById('ranges').addEventListener('click', function(e){
    var b = e.target.closest('button'); if (!b) return;
    document.querySelectorAll('#ranges button').forEach(function(x){ x.classList.toggle('on', x === b); });
    load(b.dataset.r);
  });
  load('24h');
  setInterval(function(){ var on = document.querySelector('#ranges button.on'); if (on && !document.hidden) load(on.dataset.r); }, 30000);
})();`;
  return shell("usage", "Usage", inner, script);
}

// ── billing page ──
export function consoleBillingHtml(): string {
  const inner = `
  <h1>Billing</h1>
  <p class="csub">Credits are ledger entries with no monetary value, spendable only on the rail. Top-ups open with x402 later — until then the scoring grant funds the card.</p>
  <div class="tiles" id="btiles"></div>
  <div class="panelx"><h2>Spend — last 14 days</h2><table class="ct" id="days"><thead><tr><th>Day</th><th class="n">Calls</th><th class="n">Cost</th><th class="n">VANTIS retired</th></tr></thead><tbody></tbody></table></div>
  <div class="panelx"><h2>Lanes</h2><table class="ct" id="lanes"><thead><tr><th>Lane</th><th>Status</th><th class="n">Balance</th><th class="n">Consumed</th><th class="n">Burned</th></tr></thead><tbody></tbody></table></div>
  <div class="panelx"><h2>Ledger — last 30 movements</h2><table class="ct" id="ledger"><thead><tr><th>When</th><th>Type</th><th class="n">Amount</th><th class="n">Balance after</th><th>Description</th></tr></thead><tbody></tbody></table></div>`;
  const script = `
(function(){
  var money = function(n){ n = Number(n||0); var s = n < 0 ? '−$' + Math.abs(n).toFixed(Math.abs(n) >= 0.01 ? 2 : 6) : '$' + n.toFixed(n >= 0.01 ? 2 : 6); return s; };
  fetch('/console/api/billing').then(function(r){ return r.json(); }).then(function(d){
    document.getElementById('btiles').innerHTML = [
      ['Main balance', money(d.main_balance_usd)], ['Granted all time', money(d.granted_usd)],
      ['Consumed all time', money(d.consumed_usd)], ['VANTIS retired', Number(d.vantis_burned||0).toFixed(4)],
      ['Active API keys', String(d.active_keys || 0)]
    ].map(function(x){ return '<div class="tile"><b>' + x[1] + '</b><span>' + x[0] + '</span></div>'; }).join('');
    document.querySelector('#days tbody').innerHTML = (d.spend_days || []).map(function(x){
      return '<tr><td class="mono">' + x.d + '</td><td class="n">' + x.n + '</td><td class="n">' + money(x.cost) + '</td><td class="n">' + Number(x.burned||0).toFixed(4) + '</td></tr>';
    }).reverse().join('') || '<tr><td colspan="4" class="dim">No billed calls in the last 14 days.</td></tr>';
    document.querySelector('#lanes tbody').innerHTML = (d.lanes || []).map(function(l){
      return '<tr><td class="mono">' + l.purpose + '</td><td>' + l.status + '</td><td class="n">' + money(l.usd_balance) + '</td><td class="n">' + money(l.usd_consumed) + '</td><td class="n">' + Number(l.vantis_burned||0).toFixed(4) + '</td></tr>';
    }).join('') || '<tr><td colspan="5" class="dim">No lanes.</td></tr>';
    document.querySelector('#ledger tbody').innerHTML = (d.ledger || []).map(function(t){
      return '<tr><td class="mono dim">' + t.created_at + '</td><td class="mono">' + t.type + '</td><td class="n">' + money(t.amount_usd) + '</td><td class="n">' + money(t.balance_after) + '</td><td class="dim">' + (t.description || '') + '</td></tr>';
    }).join('') || '<tr><td colspan="5" class="dim">No movements yet.</td></tr>';
  });
})();`;
  return shell("billing", "Billing", inner, script);
}


// ─── Embedded variant: the console as a SECTION of /wallets ──────────────
// Luca (Aug 10): "that console must be in a place with the /wallets, i
// confuse too many slug/pages" — so the standalone /console pages redirect
// to /wallets and this fragment renders there for staging accounts. Models
// is server-rendered; Usage and Billing fetch from /console/api/* lazily on
// first open and refresh only while their tab is active.
export function walletsConsoleSection(user: any): string {
  const up = resolveUpstream();
  // ONE model card (Luca: "no need to emphasize each providers, just 1 only
  // the deepseek, with logo, with price"). The provider routes stay valid
  // API ids; the ZDR toggle pins the Wafer-served route, where the gateway
  // sends Wafer-ZDR: required upstream. The controls rewrite the quick-start
  // snippet live — they ARE the request the client would send.
  const models = `
    <div class="mcardx">
      <div class="mhead">
        <img src="/logos/deepseek-whale.svg" alt="" style="width:30px;height:22px;display:block">
        <h3>${TARGET_LABEL}</h3>
        <span class="mtag mtag--live">PRODUCTION</span>
      </div>
      <div class="mid" id="wlc-route-id">${TARGET_MODEL}</div>
      <p class="wl-sub" style="margin:10px 0 0">${servingNote(up)} SSE streaming. Settles from real usage; every call retires $VANTIS on the burn ledger.</p>
      <div class="mrates">
        <div><b>$${PRICING.input.toFixed(2)}</b>/1M input</div>
        <div><b>$${PRICING.output.toFixed(2)}</b>/1M output</div>
      </div>
      <div class="wtogs">
        <div class="wtog" id="wlc-tog-zdr" role="switch" aria-checked="false" tabindex="0">
          <span class="wt-track"><span class="wt-knob"></span></span>
          <span class="wt-label">Require ZDR</span>
          <span class="wt-state">OFF</span>
        </div>
        <div class="wtog on" id="wlc-tog-reason" role="switch" aria-checked="true" tabindex="0">
          <span class="wt-track"><span class="wt-knob"></span></span>
          <span class="wt-label">Reasoning</span>
          <span class="wt-state">ON</span>
        </div>
        <label class="weffort">Reasoning effort
          <select id="wlc-effort">
            <option value="">default</option>
            <option value="low">low</option>
            <option value="medium">medium</option>
            <option value="high">high</option>
          </select>
        </label>
      </div>
      <p class="wl-note" id="wlc-route-note" style="margin-top:10px"></p>
      <div class="mcurl" style="margin-top:12px">
        <div class="mono" style="font-size:10.5px;letter-spacing:0.08em;color:var(--green-ink);margin-bottom:8px">QUICK START</div>
        <pre id="wlc-snippet"></pre>
      </div>
      <p class="wl-note" style="margin-top:12px"><span class="mono">"zdr": true</span> runs the call in zero-data-retention mode: it is served only on ZDR-capable infrastructure — prompts and completions are processed for the response, not retained — and the rail itself stores usage metering only (tokens, cost, latency; never content). Every successful ZDR response carries <span class="mono">X-Vantis-ZDR: honored</span>, so the guarantee is verifiable per call; if ZDR capacity is unavailable the call fails rather than serving without it. Reasoning is on by default on this build; effort passes through where the route supports it. Names and logos are trademarks of their owners; no partnership implied.</p>
    </div>`;

  return `
<style>
.wlc { margin-top:34px; }
.wlc > summary { font-family:var(--mono); font-size:11px; letter-spacing:.1em; text-transform:uppercase; color:var(--muted); cursor:pointer; padding:8px 0; list-style:none; }
.wlc > summary::-webkit-details-marker { display:none; }
.wlc-head { display:flex; align-items:center; gap:10px; margin:10px 0 14px; flex-wrap:wrap; }
.wlc-stg { display:inline-flex; font-family:var(--mono); font-size:9.5px; font-weight:700; letter-spacing:0.12em; color:#8A6D3B; background:#FDF4E3; border:1px solid #E3CFA1; border-radius:999px; padding:3px 9px; }
.wlc-tabs { display:flex; gap:6px; }
.wlc-tabs button { font-family:var(--display); font-size:12.5px; font-weight:700; border:1px solid var(--line-strong); background:var(--white); border-radius:999px; padding:6px 14px; cursor:pointer; color:var(--body); }
.wlc-tabs button.on { background:var(--ink); color:var(--green); border-color:var(--ink); }
.mcardx { border:1px solid var(--line); border-radius:14px; padding:20px; margin-bottom:12px; background:var(--white); }
.mhead { display:flex; align-items:center; gap:10px; flex-wrap:wrap; }
.mhead h3 { font-size:16px; margin:0; }
.mid { font-family:var(--mono); font-size:11.5px; color:var(--muted); margin-top:2px; }
.mtag { font-family:var(--mono); font-size:9px; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; border:1px solid var(--line-strong); border-radius:20px; padding:3px 8px; color:var(--body); }
.mtag--live { background:#E6FBEF; border-color:#9FE7C0; color:#0B7A3E; }
.mtag--zdr { background:#EDF3FD; border-color:#B9CDEA; color:#2E5FA8; }
.wtogs { display:flex; gap:22px; align-items:center; flex-wrap:wrap; margin:16px 0 0; }
.wtog { display:inline-flex; align-items:center; gap:9px; cursor:pointer; outline-offset:3px; }
.wt-track { width:34px; height:19px; border:1.5px solid var(--line-strong); border-radius:999px; background:var(--white); position:relative; transition:background .16s, border-color .16s; display:inline-block; }
.wt-knob { position:absolute; top:1.5px; left:2px; width:12px; height:12px; background:var(--ink); border-radius:3px; transition:transform .16s cubic-bezier(.23,1,.32,1); display:block; }
.wtog.on .wt-track { background:var(--green); border-color:var(--green); }
.wtog.on .wt-knob { transform:translateX(15px); }
.wt-label { font-family:var(--display); font-size:13px; font-weight:600; color:var(--ink); }
.wt-state { font-family:var(--mono); font-size:9.5px; font-weight:700; letter-spacing:0.1em; color:var(--muted); }
.weffort { display:inline-flex; align-items:center; gap:9px; font-family:var(--display); font-size:13px; font-weight:600; color:var(--ink); }
.weffort select { font-family:var(--mono); font-size:12px; border:1.5px solid var(--line-strong); border-radius:9px; padding:5px 9px; background:var(--white); color:var(--ink); }
.mrates { display:flex; gap:22px; margin:12px 0 0; font-size:12.5px; color:var(--body); flex-wrap:wrap; }
.mrates b { font-family:var(--display); font-size:15px; color:var(--ink); display:block; }
.mcurl { margin-top:12px; }
.mcurl summary { font-family:var(--mono); font-size:10.5px; letter-spacing:0.08em; color:var(--green-ink); cursor:pointer; }
.mcurl pre { background:#0F1110; color:#DFE5DF; border-radius:10px; padding:13px 15px; font-family:var(--mono); font-size:11px; line-height:1.6; overflow-x:auto; margin:9px 0 0; }
.wlc .tiles { display:grid; grid-template-columns:repeat(auto-fit,minmax(124px,1fr)); gap:9px; margin-bottom:14px; }
.wlc .tile { border:1px solid var(--line); border-radius:12px; padding:12px 14px; background:var(--white); }
.wlc .tile b { font-family:var(--display); font-size:18px; font-weight:700; display:block; font-variant-numeric:tabular-nums; }
.wlc .tile span { font-size:9.5px; letter-spacing:0.09em; text-transform:uppercase; color:var(--muted); }
.wlc .ranges { display:flex; gap:6px; margin-bottom:14px; }
.wlc .ranges button { font-family:var(--mono); font-size:10.5px; font-weight:700; border:1px solid var(--line-strong); background:var(--white); border-radius:999px; padding:4px 11px; cursor:pointer; color:var(--body); }
.wlc .ranges button.on { background:var(--ink); color:var(--green); border-color:var(--ink); }
.panelx { border:1px solid var(--line); border-radius:14px; padding:18px 20px; background:var(--white); margin-bottom:12px; }
.panelx h2 { font-size:14px; margin:0 0 10px; }
.chart { width:100%; height:180px; }
.legendx { display:flex; gap:16px; font-size:10.5px; color:var(--muted); margin-top:8px; }
.legendx i { display:inline-block; width:9px; height:9px; border-radius:3px; margin-right:5px; vertical-align:-1px; }
table.ct { width:100%; border-collapse:collapse; font-size:12px; }
table.ct th { text-align:left; font-family:var(--mono); font-size:9px; letter-spacing:0.1em; text-transform:uppercase; color:var(--muted); padding:5px 7px; border-bottom:1px solid var(--line); }
table.ct td { padding:7px; border-bottom:1px solid var(--line); font-variant-numeric:tabular-nums; }
table.ct td.n, table.ct th.n { text-align:right; }
.wlc .mono { font-family:var(--mono); } .wlc .dim { color:var(--muted); }
</style>
<details class="wlc" id="wlc" open>
<summary>Inference console</summary>
<div class="wlc-head">
  <span class="wlc-stg">STAGING — VISIBLE TO YOU ONLY</span>
  <div class="wlc-tabs" id="wlc-tabs">
    <button data-wlc-tab="models" class="on">Models</button>
    <button data-wlc-tab="usage">Usage</button>
    <button data-wlc-tab="billing">Billing</button>
  </div>
</div>
<div id="wlc-models">${models}</div>
<div id="wlc-usage" hidden>
  <div class="ranges" id="wlc-ranges">
    ${["1h", "6h", "24h", "7d", "30d"].map((r) => `<button data-r="${r}" class="${r === "24h" ? "on" : ""}">${r}</button>`).join("")}
  </div>
  <div class="tiles" id="wlc-tiles"></div>
  <div class="panelx"><h2>Tokens</h2><svg class="chart" id="wlc-chart" viewBox="0 0 960 180" preserveAspectRatio="none"></svg>
  <div class="legendx"><span><i style="background:#0B7A3E"></i>Output</span><span><i style="background:#9AD8B4"></i>Input</span></div></div>
  <div class="panelx"><h2>By model</h2><table class="ct" id="wlc-bymodel"><thead><tr><th>Model</th><th class="n">Calls</th><th class="n">In</th><th class="n">Out</th><th class="n">Cost</th></tr></thead><tbody></tbody></table></div>
</div>
<div id="wlc-billing" hidden>
  <div class="tiles" id="wlc-btiles"></div>
  <div class="panelx"><h2>Spend — last 14 days</h2><table class="ct" id="wlc-days"><thead><tr><th>Day</th><th class="n">Calls</th><th class="n">Cost</th><th class="n">VANTIS retired</th></tr></thead><tbody></tbody></table></div>
  <div class="panelx"><h2>Ledger — last 30 movements</h2><table class="ct" id="wlc-ledger"><thead><tr><th>When</th><th>Type</th><th class="n">Amount</th><th class="n">Balance after</th><th>Description</th></tr></thead><tbody></tbody></table></div>
</div>
</details>
<script>
(function(){
  var money = function(n){ n = Number(n||0); return (n < 0 ? '−$' + Math.abs(n).toFixed(Math.abs(n) >= 0.01 ? 2 : 6) : '$' + n.toFixed(n >= 0.01 ? 2 : 6)); };
  var fmt = function(n){ return Number(n||0).toLocaleString('en-US'); };
  var loaded = { usage: false, billing: false };
  // ── model controls drive the quick-start snippet ──
  // NOTE: this script is emitted through a server template literal, so it
  // must contain NO escape sequences — newline/backslash/quote come from
  // fromCharCode instead.
  var NL = String.fromCharCode(10), BS = String.fromCharCode(92), Q = String.fromCharCode(39);
  var snip = { zdr: false, reasoning: true, effort: '' };
  var PROD_ID = 'deepseek-v4-flash-0731';
  function renderSnippet(){
    var id = PROD_ID; // the model id never names a provider — zdr is a flag
    var body = '{' + NL + '    "model": "' + id + '",' + NL + '    "messages": [{"role": "user", "content": "Hello!"}],' + NL + '    "max_tokens": 64';
    if (snip.zdr) body += ',' + NL + '    "zdr": true';
    if (!snip.reasoning) body += ',' + NL + '    "thinking": {"type": "disabled"}';
    if (snip.effort) body += ',' + NL + '    "reasoning_effort": "' + snip.effort + '"';
    body += NL + '  }';
    var cont = ' ' + BS + NL + '  ';
    var el = document.getElementById('wlc-snippet');
    if (el) el.textContent = 'curl -sS https://card.vantis.sh/v1/chat/completions' + cont + '-H "Authorization: Bearer $VANTIS_CARD_KEY"' + cont + '-H "Content-Type: application/json"' + cont + '-d ' + Q + body + Q;
    var rid = document.getElementById('wlc-route-id');
    if (rid) rid.textContent = id;
    var note = document.getElementById('wlc-route-note');
    if (note) note.textContent = snip.zdr
      ? 'ZDR routed - the response will carry X-Vantis-ZDR: honored.'
      : (snip.reasoning ? '' : 'Reasoning disabled - responses skip the thinking pass and bill fewer output tokens.');
  }
  function wireToggle(id, key){
    var el = document.getElementById(id);
    if (!el) return;
    var flip = function(){
      snip[key] = !snip[key];
      el.classList.toggle('on', snip[key]);
      el.setAttribute('aria-checked', snip[key] ? 'true' : 'false');
      el.querySelector('.wt-state').textContent = snip[key] ? 'ON' : 'OFF';
      renderSnippet();
    };
    el.addEventListener('click', flip);
    el.addEventListener('keydown', function(e){ if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); flip(); } });
  }
  wireToggle('wlc-tog-zdr', 'zdr');
  wireToggle('wlc-tog-reason', 'reasoning');
  var eff = document.getElementById('wlc-effort');
  if (eff) eff.addEventListener('change', function(){ snip.effort = eff.value; renderSnippet(); });
  renderSnippet();
  function loadUsage(range){
    fetch('/console/api/usage?range=' + range).then(function(r){ return r.json(); }).then(function(d){
      var t = d.tiles;
      document.getElementById('wlc-tiles').innerHTML = [
        ['Requests', fmt(t.requests)], ['OK', fmt(t.ok)], ['Error rate', t.err_rate + '%'],
        ['P50', t.p50_ms != null ? t.p50_ms + 'ms' : '—'], ['P95', t.p95_ms != null ? t.p95_ms + 'ms' : '—'],
        ['Tokens in', fmt(t.tokens_in)], ['Tokens out', fmt(t.tokens_out)],
        ['Cost', money(t.cost_usd)], ['VANTIS retired', Number(t.burned||0).toFixed(4)]
      ].map(function(x){ return '<div class="tile"><b>' + x[1] + '</b><span>' + x[0] + '</span></div>'; }).join('');
      var W = 960, H = 180, PAD = 2;
      var now = Math.floor(Date.now() / 1000);
      var start = (Math.floor((now - d.since_sec) / d.bucket_sec) + 1) * d.bucket_sec;
      var slots = []; for (var b = start; b <= now; b += d.bucket_sec) slots.push(b);
      var map = {}; (d.buckets || []).forEach(function(x){ map[x.b] = x; });
      var max = 1; slots.forEach(function(b){ var x = map[b]; if (x) max = Math.max(max, x.tin + x.tout); });
      var bw = Math.max(2, (W - PAD * slots.length) / Math.max(1, slots.length));
      var svg = '';
      slots.forEach(function(b, i){
        var x = map[b]; if (!x) return;
        var hIn = (x.tin / max) * (H - 8), hOut = (x.tout / max) * (H - 8), px = i * (bw + PAD);
        svg += '<rect x="' + px + '" y="' + (H - hOut) + '" width="' + bw + '" height="' + hOut + '" fill="#0B7A3E" rx="1"></rect>';
        svg += '<rect x="' + px + '" y="' + (H - hOut - hIn) + '" width="' + bw + '" height="' + hIn + '" fill="#9AD8B4" rx="1"></rect>';
      });
      document.getElementById('wlc-chart').innerHTML = svg || '<text x="12" y="24" font-size="12" fill="#6A6F74">No traffic in this window.</text>';
      document.querySelector('#wlc-bymodel tbody').innerHTML = (d.by_model || []).map(function(m){
        return '<tr><td class="mono">' + m.model + '</td><td class="n">' + fmt(m.n) + '</td><td class="n">' + fmt(m.tin) + '</td><td class="n">' + fmt(m.tout) + '</td><td class="n">' + money(m.cost) + '</td></tr>';
      }).join('') || '<tr><td colspan="5" class="dim">No billed calls in this window.</td></tr>';
      loaded.usage = true;
    }).catch(function(){});
  }
  function loadBilling(){
    fetch('/console/api/billing').then(function(r){ return r.json(); }).then(function(d){
      document.getElementById('wlc-btiles').innerHTML = [
        ['Main balance', money(d.main_balance_usd)], ['Granted all time', money(d.granted_usd)],
        ['Consumed all time', money(d.consumed_usd)], ['VANTIS retired', Number(d.vantis_burned||0).toFixed(4)],
        ['Active API keys', String(d.active_keys || 0)]
      ].map(function(x){ return '<div class="tile"><b>' + x[1] + '</b><span>' + x[0] + '</span></div>'; }).join('');
      document.querySelector('#wlc-days tbody').innerHTML = (d.spend_days || []).map(function(x){
        return '<tr><td class="mono">' + x.d + '</td><td class="n">' + x.n + '</td><td class="n">' + money(x.cost) + '</td><td class="n">' + Number(x.burned||0).toFixed(4) + '</td></tr>';
      }).reverse().join('') || '<tr><td colspan="4" class="dim">No billed calls in the last 14 days.</td></tr>';
      document.querySelector('#wlc-ledger tbody').innerHTML = (d.ledger || []).map(function(t){
        return '<tr><td class="mono dim">' + t.created_at + '</td><td class="mono">' + t.type + '</td><td class="n">' + money(t.amount_usd) + '</td><td class="n">' + money(t.balance_after) + '</td><td class="dim">' + (t.description || '') + '</td></tr>';
      }).join('') || '<tr><td colspan="5" class="dim">No movements yet.</td></tr>';
      loaded.billing = true;
    }).catch(function(){});
  }
  document.addEventListener('click', function(e){
    var b = e.target.closest('[data-wlc-tab]'); if (!b) return;
    var t = b.getAttribute('data-wlc-tab');
    document.querySelectorAll('[data-wlc-tab]').forEach(function(x){ x.classList.toggle('on', x.getAttribute('data-wlc-tab') === t); });
    ['models','usage','billing'].forEach(function(k){ document.getElementById('wlc-' + k).hidden = k !== t; });
    document.getElementById('wlc').scrollIntoView({ block: 'start', behavior: 'smooth' });
    if (t === 'usage' && !loaded.usage) loadUsage('24h');
    if (t === 'billing' && !loaded.billing) loadBilling();
  });
  document.getElementById('wlc-ranges').addEventListener('click', function(e){
    var b = e.target.closest('button'); if (!b) return;
    document.querySelectorAll('#wlc-ranges button').forEach(function(x){ x.classList.toggle('on', x === b); });
    loadUsage(b.dataset.r);
  });
  setInterval(function(){
    if (document.hidden) return;
    if (!document.getElementById('wlc-usage').hidden) { var on = document.querySelector('#wlc-ranges button.on'); loadUsage(on ? on.dataset.r : '24h'); }
  }, 30000);
})();
</script>`;
}


// The staging left rail for /wallets — vantis.sh landing grammar. Anchors
// scroll to the page's own sections; the console group switches the same
// panels the mobile tab pills drive (shared [data-wlc-tab] delegation).
export function walletsConsoleRail(): string {
  return `<aside class="wl-rail" id="wl-rail">
  <div class="rl-eyebrow">Wallets</div>
  <a href="#device-stage">Terminal</a>
  <a href="#dv-console">Console view</a>
  <a href="#wl-keys">API keys</a>
  <div class="rl-eyebrow">Inference console</div>
  <span class="rl-stg">STAGING — YOU ONLY</span>
  <button data-wlc-tab="models" class="on">Models</button>
  <button data-wlc-tab="usage">Usage</button>
  <button data-wlc-tab="billing">Billing</button>
</aside>`;
}
