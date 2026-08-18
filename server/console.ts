// ─── /console — the inference console (embedded on /wallets) ─────────────
// Wafer-function (Models · Usage · Billing), Vantis house style. GA Aug 13:
// any CARDED session reads its own data; staging accounts and a valid
// operator /admin session also pass (cardless rigs, operator debugging).
// Everyone else gets a plain 404 so the surface stays invisible to anon. All figures are REAL reads over
// api_requests / credit_transactions / agent_wallets scoped to the console
// user — nothing simulated, no invented prices (catalog rates come from
// server/upstream STAGING_CATALOG, which only carries documented list rates).
import { getDb, getUser, getCard, countActiveKeys } from "./db";
import { perksFor } from "./perks";
import { readSession } from "./session";
import { hasAdminSession } from "./admin";
import { SYSTEM_CSS, ARROW } from "./system";
import { V_MARK } from "./pages";
import { STAGING_CATALOG, TARGET_MODEL, TARGET_LABEL, resolveUpstream, servingNote, allowlistModels, fastModel, FAST_MODEL_ID, kimiModel } from "./upstream";
import { PRICING } from "./credits";

const db = () => getDb();

// ── gate ──
export function consoleUser(cookieHeader: string | undefined): any | null {
  const sess = readSession(cookieHeader);
  if (sess?.uid) {
    const u = getUser(sess.uid);
    // GA Aug 13 (rode along with the /wallets deck GA): any CARDED account
    // reads its own console data — every query in this module is scoped to
    // the session user, so the gate is ownership, not cohort. Staging kept
    // for cardless test rigs; cardless real accounts have no console UI.
    if (u && (u.staging === 1 || getCard(u.id))) return u;
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
  const topKeys = d.query(`SELECT key_prefix, COUNT(*) n, COALESCE(SUM(tokens_in),0) tin,
      COALESCE(SUM(tokens_out),0) tout, COALESCE(SUM(cost_usd),0) cost,
      (SELECT name FROM api_keys k WHERE substr(k.key,1,12) || '…' = key_prefix LIMIT 1) key_name
      ${base} GROUP BY key_prefix ORDER BY cost DESC, n DESC LIMIT 10`).all(userId) as any[];
  return {
    range: RANGES[range] ? range : "24h",
    bucket_sec: r.bucket,
    since_sec: r.sec,
    tiles: {
      requests: tot.n, ok: tot.ok || 0, tokens_in: tot.tin, tokens_out: tot.tout,
      cost_usd: tot.cost, burned: tot.burned, p50_ms: p50, p95_ms: p95,
      err_rate: tot.n ? Math.round(((tot.n - (tot.ok || 0)) / tot.n) * 100) : 0,
    },
    buckets, by_model: byModel, outcomes, top_keys: topKeys,
  };
}

// One row per request, newest first — the OpenRouter-logs shape. `before` is
// a ROWID cursor for load-more; the window bound keeps the scan short.
export function logsData(userId: string, range: string, before?: number) {
  const r = RANGES[range] || RANGES["24h"];
  const d = db();
  const cursor = before && before > 0 ? `AND rowid < ${Math.floor(before)}` : "";
  const rows = d.query(`SELECT rowid rid, created_at, COALESCE(model, '—') model,
      key_prefix, tokens_in, tokens_out, cost_usd, vantis_burned, latency_ms, outcome, error,
      (SELECT name FROM api_keys k WHERE substr(k.key,1,12) || '…' = key_prefix LIMIT 1) key_name
      FROM api_requests WHERE user_id = ? AND created_at > datetime('now','-${r.sec} seconds') ${cursor}
      ORDER BY rowid DESC LIMIT 50`).all(userId) as any[];
  return { range: RANGES[range] ? range : "24h", rows, more: rows.length === 50 };
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
// The pool card's script, emitted ONLY for allow-listed accounts so every
// other account's console stays byte-identical to the pre-pool build. Same
// no-escape-sequence rule as the main console script (NL/BS/Q are defined
// there and in scope where this is spliced in).
const POOL_JS = `// GPT frontier pool card
  var poolSel = document.getElementById('wlc-pool-model');
  if (poolSel) {
    var poolEff = document.getElementById('wlc-pool-effort');
    var renderPool = function(){
      var id = poolSel.value;
      var cont = ' ' + BS + NL + '  ';
      var body, ep;
      if (id === 'gpt-image-2') {
        ep = '/v1/images/generations';
        body = '{' + NL + '    "model": "gpt-image-2",' + NL + '    "prompt": "A brushed-metal card catching the light"' + NL + '  }';
      } else {
        ep = '/v1/chat/completions';
        body = '{' + NL + '    "model": "' + id + '",' + NL + '    "messages": [{"role": "user", "content": "Hello!"}],' + NL + '    "max_tokens": 64';
        if (poolEff && poolEff.value) body += ',' + NL + '    "reasoning_effort": "' + poolEff.value + '"';
        body += NL + '  }';
      }
      var el = document.getElementById('wlc-pool-snippet');
      if (el) el.textContent = 'curl -sS https://card.vantis.sh' + ep + cont + '-H "Authorization: Bearer $VANTIS_CARD_KEY"' + cont + '-H "Content-Type: application/json"' + cont + '-d ' + Q + body + Q;
      var pid = document.getElementById('wlc-pool-id');
      if (pid) pid.textContent = id;
    };
    poolSel.addEventListener('change', renderPool);
    if (poolEff) poolEff.addEventListener('change', renderPool);
    renderPool();
  }`;

// The GPT frontier pool card, rendered only for allow-listed accounts
// (users.pool_access=1). ONE card with a model picker rather than seven cards
// — the same restraint as the single DeepSeek card. The picker and effort
// select rewrite the quick-start live, exactly like the DeepSeek card's
// toggles; choosing gpt-image-2 swaps the snippet to the images endpoint.
// The $0.00 rates are true by construction (the pool lane is unmetered) and
// the copy says why, so the zeros never read as a broken price feed.
function poolCard(): string {
  const models = allowlistModels();
  if (!models.length) return "";
  return `
    <div class="mcardx">
      <div class="mhead">
        <h3>GPT frontier pool</h3>
        <span class="mtag mtag--allow">ALLOWLIST</span>
      </div>
      <div class="mid" id="wlc-pool-id">${models[0].id}</div>
      <p class="wl-sub" style="margin:10px 0 0">The frontier GPT family, served from the rail&rsquo;s own pooled subscription capacity. SSE streaming. This lane is not metered: calls bill $0.00 and retire no $VANTIS.</p>
      <div class="mrates">
        <div><b>$0.00</b>/1M input</div>
        <div><b>$0.00</b>/1M output</div>
      </div>
      <div class="wtogs">
        <label class="weffort">Model
          <select id="wlc-pool-model">
            ${models.map((m) => `<option value="${m.id}">${m.label}</option>`).join("")}
          </select>
        </label>
        <!-- The ladder the POOL actually honors, checked against codex-lb's
             wire log (request_logs.reasoning_effort = what reached upstream):
             minimal is silently rewritten to low (the ChatGPT backend rejects
             it, and codex-lb substitutes rather than let the request hang), so
             offering it was a duplicate option that read as a distinct
             setting. xhigh and max pass through unchanged and were missing —
             they are the two strongest levels. ultra also exists upstream but
             is rewritten to max; its extra effect is client-side multi-agent
             behaviour, meaningless over an API. -->
        <label class="weffort">Reasoning effort
          <select id="wlc-pool-effort">
            <option value="">default</option>
            <option value="low">low</option>
            <option value="medium">medium</option>
            <option value="high">high</option>
            <option value="xhigh">xhigh</option>
            <option value="max">max</option>
          </select>
        </label>
      </div>
      <div class="mcurl" style="margin-top:12px">
        <div class="mono" style="font-size:10.5px;letter-spacing:0.08em;color:var(--green-ink);margin-bottom:8px">QUICK START</div>
        <pre id="wlc-pool-snippet"></pre>
      </div>
      <p class="wl-note" style="margin-top:12px">Allow-listed per account: these ids resolve only for accounts the operator has approved and return <span class="mono">403 model_allowlist_only</span> for everyone else. <span class="mono">gpt-image-2</span> serves on <span class="mono">POST /v1/images/generations</span> &mdash; the picker rewrites the snippet. Reasoning effort passes through where the route supports it. Names and logos are trademarks of their owners; no partnership implied.</p>
    </div>`;
}

// The Kimi K3 card (Luca, Aug 19 2026: "implement to /wallets like other
// models"). Same restraint as the two cards around it: one card, the numbers
// straight off the catalog entry, a quick-start that IS the request. It has
// fewer controls than the DeepSeek card because the route has fewer honest
// ones — no ZDR path, no fast tier, and reasoning cannot be switched off (the
// vendor's own doc: "always reasons"; the gateway refuses `thinking: {type:
// "disabled"}` on it with 400 reasoning_always_on), so the Reasoning toggle
// is rendered fixed ON. The effort picker carries the vendor's documented
// ladder (low / high / max, default max) — measured through this line it is
// a weak trend inside run-to-run noise, so the copy says "passes through".
// Rates show the cache-hit input price too: the line reports prompt-cache
// reads and they bill at it. The initial snippet is server-rendered from
// plain strings (interpolated verbatim, so "\\" in the source is ONE curl
// continuation backslash on the page); KIMI_JS rewrites it when the picker
// moves. The mark is Kimi's own app icon (black rounded tile, white K,
// #1783FF dot), rebuilt as /logos/kimi.svg from the vendor's favicon geometry
// (measured 2026-08-19) with the K/dot paths from the MIT-licensed lobe-icons
// set — the same treatment as the DeepSeek whale next to it.
function kimiCard(): string {
  const K = kimiModel();
  const snippet = [
    "curl -sS https://card.vantis.sh/v1/chat/completions \\",
    '  -H "Authorization: Bearer $VANTIS_CARD_KEY" \\',
    '  -H "Content-Type: application/json" \\',
    "  -d '{",
    `    "model": "${K.id}",`,
    '    "messages": [{"role": "user", "content": "Hello!"}],',
    '    "max_tokens": 64',
    "  }'",
  ].join("\n");
  return `
    <div class="mcardx" id="wlc-kimi">
      <div class="mhead">
        <img src="/logos/kimi.svg" alt="" style="width:22px;height:22px;display:block;border-radius:5px">
        <h3>${K.label}</h3>
        <span class="mtag mtag--live">PRODUCTION</span>
      </div>
      <div class="mid" id="wlc-kimi-id">${K.id} · alias: ${K.upstreamModel}</div>
      <p class="wl-sub" style="margin:10px 0 0">${K.vendor}&rsquo;s flagship open-weights reasoning model on the rail &mdash; ${(K.contextWindow! / 1024 / 1024).toFixed(0)}M context, image input, tool calls, SSE streaming. Settles from real usage; every call retires $VANTIS on the burn ledger.</p>
      <div class="mrates">
        <div><b>$${K.rate.input.toFixed(2)}</b>/1M input</div>
        <div><b>$${K.rate.output.toFixed(2)}</b>/1M output</div>
        <div><b>$${K.rate.cachedInput!.toFixed(2)}</b>/1M cached input</div>
      </div>
      <div class="wtogs">
        <div class="wtog on locked" id="wlc-kimi-reason" role="switch" aria-checked="true" aria-disabled="true" title="Reasoning cannot be switched off on this route">
          <span class="wt-track"><span class="wt-knob"></span></span>
          <span class="wt-label">Reasoning</span>
          <span class="wt-state">ALWAYS ON</span>
        </div>
        <label class="weffort">Reasoning effort
          <select id="wlc-kimi-effort">
            <option value="">default (max)</option>
            <option value="low">low</option>
            <option value="high">high</option>
            <option value="max">max</option>
          </select>
        </label>
      </div>
      <div class="mcurl" style="margin-top:12px">
        <div class="mono" style="font-size:10.5px;letter-spacing:0.08em;color:var(--green-ink);margin-bottom:8px">QUICK START</div>
        <pre id="wlc-kimi-snippet">${snippet}</pre>
      </div>
      <p class="wl-note" style="margin-top:12px"><b>Priced at the vendor&rsquo;s list.</b> $${K.rate.input.toFixed(2)} in / $${K.rate.output.toFixed(2)} out per 1M is ${K.vendor}&rsquo;s own published rate for this model; the route reports prompt-cache reads (<span class="mono">prompt_tokens_details.cached_tokens</span>) and they bill at the published cache-hit price, $${K.rate.cachedInput!.toFixed(2)}/1M. Reasoning tokens bill as output.</p>
      <p class="wl-note" style="margin-top:8px"><b>Reasoning is always on.</b> The model always reasons and this route cannot switch the pass off &mdash; a request carrying <span class="mono">thinking: {"type": "disabled"}</span>, <span class="mono">enable_thinking: false</span> or <span class="mono">reasoning_effort: "none"</span> is refused with <span class="mono">400 reasoning_always_on</span> rather than billed for a pass it asked not to have. <span class="mono">reasoning_effort</span> <span class="mono">low</span> / <span class="mono">high</span> / <span class="mono">max</span> (the vendor&rsquo;s ladder, default max) passes through where the route supports it. Non-streamed responses return the pass in <span class="mono">reasoning_content</span>; streamed responses carry the answer only. Image input is accepted (<span class="mono">image_url</span> parts, as on the OpenAI API). No zero-data-retention route: <span class="mono">"zdr": true</span> on this id is refused by name. Pinned to one gateway route with no failover &mdash; if it is unavailable the call fails rather than answering from another model. We measured ~${K.throughput!.tokensPerSec} tok/s on ${K.throughput!.measured}. Names and logos are trademarks of their owners; no partnership implied.</p>
    </div>`;
}

// The Kimi card's script — the effort picker rewrites the quick-start. Same
// no-escape-sequence rule as every other inline script here (NL/BS/Q are
// defined in the main console script and in scope where this is spliced in).
const KIMI_JS = `// Kimi K3 card
  var kimiEff = document.getElementById('wlc-kimi-effort');
  if (kimiEff) {
    var renderKimi = function(){
      var body = '{' + NL + '    "model": "kimi-k3",' + NL + '    "messages": [{"role": "user", "content": "Hello!"}],' + NL + '    "max_tokens": 64';
      if (kimiEff.value) body += ',' + NL + '    "reasoning_effort": "' + kimiEff.value + '"';
      body += NL + '  }';
      var cont = ' ' + BS + NL + '  ';
      var el = document.getElementById('wlc-kimi-snippet');
      if (el) el.textContent = 'curl -sS https://card.vantis.sh/v1/chat/completions' + cont + '-H "Authorization: Bearer $VANTIS_CARD_KEY"' + cont + '-H "Content-Type: application/json"' + cont + '-d ' + Q + body + Q;
    };
    kimiEff.addEventListener('change', renderKimi);
  }`;

export function walletsConsoleSection(user: any): string {
  const up = resolveUpstream();
  const FAST = fastModel(); // the fast tier's rate + measured throughput, straight off the catalog
  // ONE model card (Luca: "no need to emphasize each providers, just 1 only
  // the deepseek, with logo, with price"). The provider routes stay valid
  // API ids; the ZDR toggle pins the Wafer-served route, where the gateway
  // sends Wafer-ZDR: required upstream. The controls rewrite the quick-start
  // snippet live — they ARE the request the client would send.
  //
  // Allow-listed accounts (users.pool_access=1) get a SECOND card below it:
  // the GPT frontier pool, one card with a model picker rather than seven
  // cards — same restraint as the DeepSeek decision above. It renders ONLY
  // for pool accounts; everyone else's console is byte-identical to before.
  const models = `
    <div class="mcardx">
      <div class="mhead">
        <img src="/logos/deepseek-whale.svg" alt="" style="width:30px;height:22px;display:block">
        <h3>${TARGET_LABEL}</h3>
        <span class="mtag mtag--live">PRODUCTION</span>
      </div>
      <div class="mid" id="wlc-route-id">${TARGET_MODEL}</div>
      <p class="wl-sub" style="margin:10px 0 0">${servingNote(up)} SSE streaming. Settles from real usage; every call retires $VANTIS on the burn ledger.</p>
      <div class="mrates" id="wlc-rates" data-tier="standard">
        <div><b id="wlc-rate-in">$${PRICING.input.toFixed(2)}</b>/1M input</div>
        <div><b id="wlc-rate-out">$${PRICING.output.toFixed(2)}</b>/1M output</div>
        <div id="wlc-rate-cached-cell" hidden><b id="wlc-rate-cached">$${FAST.rate.cachedInput!.toFixed(2)}</b>/1M cached input</div>
        <div id="wlc-rate-tier" class="wl-tier" hidden>Fast tier &middot; 2&times; the standard rate</div>
      </div>
      <div class="wtogs">
        <div class="wtog" id="wlc-tog-zdr" role="switch" aria-checked="false" tabindex="0">
          <span class="wt-track"><span class="wt-knob"></span></span>
          <span class="wt-label">Require ZDR</span>
          <span class="wt-state">OFF</span>
        </div>
        <div class="wtog" id="wlc-tog-fast" role="switch" aria-checked="false" tabindex="0">
          <span class="wt-track"><span class="wt-knob"></span></span>
          <span class="wt-label">Fast mode</span>
          <span class="wt-state">OFF</span>
        </div>
        <span class="winfo" id="wlc-fast-info">
          <button type="button" class="winfo-btn" aria-label="About Fast mode" aria-expanded="false" aria-controls="wlc-fast-tip">i</button>
          <span class="winfo-tip" id="wlc-fast-tip" role="tooltip">
            <b>Fast mode</b> serves the same DeepSeek V4 Flash 0731 checkpoint on its high-throughput tier &mdash; up to 400 tok/s (we measured ~${FAST.throughput!.tokensPerSec} tok/s from this rail on ${FAST.throughput!.measured}), against roughly 60&ndash;100 tok/s on the standard line.
            <span class="winfo-rates">$${FAST.rate.input.toFixed(2)} in &middot; $${FAST.rate.output.toFixed(2)} out &middot; $${FAST.rate.cachedInput!.toFixed(2)} cached input, per 1M &mdash; twice the standard rate.</span>
            Model id <span class="mono">${FAST_MODEL_ID}</span>. ZDR-capable; a ZDR call is served on this tier and billed at this rate. No failover: if the tier is unavailable the call fails rather than silently answering from the standard line.
          </span>
        </span>
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
      <p class="wl-note" style="margin-top:12px"><b>Two tiers, one model.</b> The standard line is <span class="mono">${TARGET_MODEL}</span> at $${PRICING.input.toFixed(2)} / $${PRICING.output.toFixed(2)} per 1M. <b>Fast mode</b> is the same checkpoint on its high-throughput tier, <span class="mono">${FAST_MODEL_ID}</span>, at $${FAST.rate.input.toFixed(2)} in / $${FAST.rate.output.toFixed(2)} out / $${FAST.rate.cachedInput!.toFixed(2)} cached input &mdash; twice the standard rate; the tier reports prompt-cache reads and they are billed at the cached price. Every response names the tier it was billed on (<span class="mono">X-Vantis-Tier</span> and <span class="mono">vantis.tier</span>).</p>
      <p class="wl-note" style="margin-top:8px"><span class="mono">"zdr": true</span> runs the call in zero-data-retention mode: it is served only on ZDR-capable infrastructure — prompts and completions are processed for the response, not retained — and the rail itself stores usage metering only (tokens, cost, latency; never content). The ZDR route is the fast tier, so a ZDR call is billed at the fast rate whichever id it names. Every successful ZDR response carries <span class="mono">X-Vantis-ZDR: honored</span>, so the guarantee is verifiable per call; if ZDR capacity is unavailable the call fails rather than serving without it. Reasoning is on by default on both tiers; effort passes through where the route supports it. Names and logos are trademarks of their owners; no partnership implied.</p>
    </div>${kimiCard()}${user.pool_access === 1 || perksFor(user.id).has("gpt_unlimited") ? poolCard() : ""}`;

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
.mtag--allow { background:#FDF4E3; border-color:#E3CFA1; color:#8A6D3B; }
.wtogs { display:flex; gap:22px; align-items:center; flex-wrap:wrap; margin:16px 0 0; }
.wtog { display:inline-flex; align-items:center; gap:9px; cursor:pointer; outline-offset:3px; }
.wt-track { width:34px; height:19px; border:1.5px solid var(--line-strong); border-radius:999px; background:var(--white); position:relative; transition:background .16s, border-color .16s; display:inline-block; }
.wt-knob { position:absolute; top:1.5px; left:2px; width:12px; height:12px; background:var(--ink); border-radius:3px; transition:transform .16s cubic-bezier(.23,1,.32,1); display:block; }
.wtog.on .wt-track { background:var(--green); border-color:var(--green); }
.wtog.on .wt-knob { transform:translateX(15px); }
.wt-label { font-family:var(--display); font-size:13px; font-weight:600; color:var(--ink); }
.wt-state { font-family:var(--mono); font-size:9.5px; font-weight:700; letter-spacing:0.1em; color:var(--muted); }
.wtog.locked { cursor:default; }
.wtog.locked .wt-track { opacity:.9; }
.wtog.locked .wt-state { color:var(--green-ink); }
/* Fast-mode info: an "i" glyph that reveals a card on hover, keyboard focus, or tap. */
.winfo { position:relative; display:inline-flex; align-items:center; margin-left:-12px; }
.winfo-btn { width:18px; height:18px; border-radius:999px; border:1.5px solid var(--line-strong); background:var(--white); color:var(--muted); font-family:var(--mono); font-size:10.5px; font-weight:700; line-height:1; cursor:pointer; padding:0; display:inline-flex; align-items:center; justify-content:center; }
.winfo-btn:hover, .winfo-btn:focus-visible, .winfo.open .winfo-btn { border-color:var(--ink); color:var(--ink); outline:none; }
.winfo-tip { display:none; position:absolute; left:0; top:calc(100% + 8px); z-index:30; width:min(340px, 78vw); background:var(--white); color:var(--body); border:1px solid var(--line-strong); border-radius:12px; padding:12px 14px; font-size:12px; line-height:1.55; box-shadow:0 10px 30px rgba(10,10,10,.10); }
.winfo-tip b { color:var(--ink); }
.winfo-rates { display:block; margin:8px 0; font-family:var(--mono); font-size:11px; color:var(--ink); }
.winfo:hover .winfo-tip, .winfo:focus-within .winfo-tip, .winfo.open .winfo-tip { display:block; }
.wl-tier { font-family:var(--mono); font-size:10px; letter-spacing:0.08em; text-transform:uppercase; color:var(--green-ink); align-self:end; padding-bottom:2px; }
.mrates[data-tier="fast"] b { color:var(--green-ink); }
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
.wlc .lmore { font-family:var(--mono); font-size:10.5px; font-weight:700; border:1px solid var(--line-strong); background:var(--white); border-radius:999px; padding:5px 14px; cursor:pointer; }
.wlc .oc-ok { color:var(--green-ink); font-family:var(--mono); font-size:10.5px; }
.wlc .oc-bad { color:#C0392B; font-family:var(--mono); font-size:10.5px; }
</style>
<details class="wlc" id="wlc" open>
<summary>Inference console</summary>
<div class="wlc-head">
  <div class="wlc-tabs" id="wlc-tabs">
    <button data-wlc-tab="models" class="on">Models</button>
    <button data-wlc-tab="usage">Activity</button>
    <button data-wlc-tab="logs">Logs</button>
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
  <div class="panelx"><h2>Top API keys</h2><table class="ct" id="wlc-topkeys"><thead><tr><th>Key</th><th class="n">Requests</th><th class="n">In</th><th class="n">Out</th><th class="n">Cost</th></tr></thead><tbody></tbody></table></div>
  <div class="panelx"><h2>By model</h2><table class="ct" id="wlc-bymodel"><thead><tr><th>Model</th><th class="n">Calls</th><th class="n">In</th><th class="n">Out</th><th class="n">Cost</th></tr></thead><tbody></tbody></table></div>
</div>
<div id="wlc-logs" hidden>
  <div class="ranges" id="wlc-lranges">
    ${["1h", "6h", "24h", "7d", "30d"].map((r) => `<button data-r="${r}" class="${r === "24h" ? "on" : ""}">${r}</button>`).join("")}
  </div>
  <div class="panelx"><h2>Requests</h2>
    <div style="overflow-x:auto;"><table class="ct" id="wlc-logtable"><thead><tr>
      <th>Time</th><th>Model</th><th>Key</th><th class="n">In</th><th class="n">Out</th><th class="n">Cost</th><th class="n">VANTIS</th><th class="n">ms</th><th>Outcome</th>
    </tr></thead><tbody></tbody></table></div>
    <div style="margin-top:10px;"><button class="lmore" id="wlc-more" hidden>Load older</button></div>
  </div>
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
  var loaded = { usage: false, billing: false, logs: false };
  var logCursor = 0;
  // ── model controls drive the quick-start snippet ──
  // NOTE: this script is emitted through a server template literal, so it
  // must contain NO escape sequences — newline/backslash/quote come from
  // fromCharCode instead.
  var NL = String.fromCharCode(10), BS = String.fromCharCode(92), Q = String.fromCharCode(39);
  var snip = { zdr: false, fast: false, reasoning: true, effort: '' };
  var PROD_ID = '${TARGET_MODEL}';
  var FAST_ID = '${FAST_MODEL_ID}';
  // Rates come from the catalog (numbers only). Standard = the default line;
  // fast = the high-throughput tier, which is ALSO where ZDR calls are served
  // and billed — so the price flips when either toggle is on.
  var RATE_STD = { i: ${PRICING.input}, o: ${PRICING.output} };
  var RATE_FAST = { i: ${FAST.rate.input}, o: ${FAST.rate.output}, c: ${FAST.rate.cachedInput!} };
  var money2 = function(n){ return '$' + Number(n).toFixed(2); };
  function renderRates(){
    var fastBilled = snip.zdr || snip.fast;
    var r = fastBilled ? RATE_FAST : RATE_STD;
    var wrap = document.getElementById('wlc-rates');
    if (wrap) wrap.setAttribute('data-tier', fastBilled ? 'fast' : 'standard');
    var i = document.getElementById('wlc-rate-in'), o = document.getElementById('wlc-rate-out');
    if (i) i.textContent = money2(r.i);
    if (o) o.textContent = money2(r.o);
    var cc = document.getElementById('wlc-rate-cached-cell'), t = document.getElementById('wlc-rate-tier');
    if (cc) cc.hidden = !fastBilled;
    if (t) t.hidden = !fastBilled;
  }
  function renderSnippet(){
    // Fast is a Vantis model id (no provider in it); ZDR stays a flag. ZDR on
    // the default id is served on the fast tier too — the rate block says so.
    var id = snip.fast ? FAST_ID : PROD_ID;
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
    var parts = [];
    if (snip.zdr) parts.push('ZDR routed - served on the fast tier, billed at the fast rate; the response will carry X-Vantis-ZDR: honored.');
    else if (snip.fast) parts.push('Fast tier - up to 400 tok/s, billed at the fast rate; the response will carry X-Vantis-Tier: fast.');
    if (!snip.reasoning) parts.push('Reasoning disabled - responses skip the thinking pass and bill fewer output tokens.');
    if (note) note.textContent = parts.join(' ');
    renderRates();
  }
  // Fast-mode info card: hover/focus via CSS, tap/click via this toggle
  // (touch has no hover; the button is the affordance on phones).
  var info = document.getElementById('wlc-fast-info');
  var infoBtn = info ? info.querySelector('.winfo-btn') : null;
  if (info && infoBtn) {
    infoBtn.addEventListener('click', function(e){
      e.preventDefault();
      var open = !info.classList.contains('open');
      info.classList.toggle('open', open);
      infoBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('click', function(e){
      if (info.classList.contains('open') && !info.contains(e.target)) { info.classList.remove('open'); infoBtn.setAttribute('aria-expanded', 'false'); }
    });
    document.addEventListener('keydown', function(e){
      if (e.key === 'Escape' && info.classList.contains('open')) { info.classList.remove('open'); infoBtn.setAttribute('aria-expanded', 'false'); }
    });
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
  wireToggle('wlc-tog-fast', 'fast');
  wireToggle('wlc-tog-reason', 'reasoning');
  var eff = document.getElementById('wlc-effort');
  if (eff) eff.addEventListener('change', function(){ snip.effort = eff.value; renderSnippet(); });
  renderSnippet();
  ${KIMI_JS}
  ${user.pool_access === 1 || perksFor(user.id).has("gpt_unlimited") ? POOL_JS : ""}
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
      document.querySelector('#wlc-topkeys tbody').innerHTML = (d.top_keys || []).map(function(k){
        var label = k.key_prefix === 'session' ? 'Wallet terminal' : (k.key_name ? k.key_name + ' <span class="mono dim">' + k.key_prefix + '</span>' : '<span class="mono">' + (k.key_prefix || '—') + '</span>');
        return '<tr><td>' + label + '</td><td class="n">' + fmt(k.n) + '</td><td class="n">' + fmt(k.tin) + '</td><td class="n">' + fmt(k.tout) + '</td><td class="n">' + money(k.cost) + '</td></tr>';
      }).join('') || '<tr><td colspan="5" class="dim">No traffic in this window.</td></tr>';
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
  function when(t){
    var d = new Date(String(t).replace(' ', 'T') + 'Z');
    if (isNaN(d)) return String(t);
    return d.toLocaleString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
  }
  function loadLogs(range, append){
    var q = '/console/api/logs?range=' + range + (append && logCursor ? '&before=' + logCursor : '');
    fetch(q).then(function(r){ return r.json(); }).then(function(d){
      var rows = (d.rows || []).map(function(x){
        var key = x.key_prefix === 'session' ? 'Wallet terminal' : (x.key_name || x.key_prefix || '—');
        var oc = x.outcome === 'ok'
          ? '<span class="oc-ok">ok</span>'
          : '<span class="oc-bad" title="' + (x.error ? String(x.error).replace(/"/g, '&quot;') : '') + '">' + x.outcome + '</span>';
        return '<tr><td class="mono dim">' + when(x.created_at) + '</td><td class="mono">' + x.model + '</td>' +
          '<td>' + key + '</td><td class="n">' + fmt(x.tokens_in) + '</td><td class="n">' + fmt(x.tokens_out) + '</td>' +
          '<td class="n">' + money(x.cost_usd) + '</td><td class="n">' + (x.vantis_burned ? Number(x.vantis_burned).toFixed(4) : '—') + '</td>' +
          '<td class="n">' + (x.latency_ms != null ? fmt(x.latency_ms) : '—') + '</td><td>' + oc + '</td></tr>';
      }).join('');
      var tb = document.querySelector('#wlc-logtable tbody');
      if (append) tb.innerHTML += rows;
      else tb.innerHTML = rows || '<tr><td colspan="9" class="dim">No requests in this window.</td></tr>';
      if (d.rows && d.rows.length) logCursor = d.rows[d.rows.length - 1].rid;
      document.getElementById('wlc-more').hidden = !d.more;
      loaded.logs = true;
    }).catch(function(){});
  }
  document.addEventListener('click', function(e){
    var b = e.target.closest('[data-wlc-tab]'); if (!b) return;
    var t = b.getAttribute('data-wlc-tab');
    document.querySelectorAll('[data-wlc-tab]').forEach(function(x){ x.classList.toggle('on', x.getAttribute('data-wlc-tab') === t); });
    ['models','usage','logs','billing'].forEach(function(k){ document.getElementById('wlc-' + k).hidden = k !== t; });
    document.getElementById('wlc').scrollIntoView({ block: 'start', behavior: 'smooth' });
    if (t === 'usage' && !loaded.usage) loadUsage('24h');
    if (t === 'logs' && !loaded.logs) { logCursor = 0; loadLogs('24h', false); }
    if (t === 'billing' && !loaded.billing) loadBilling();
  });
  document.getElementById('wlc-lranges').addEventListener('click', function(e){
    var b = e.target.closest('button'); if (!b) return;
    document.querySelectorAll('#wlc-lranges button').forEach(function(x){ x.classList.toggle('on', x === b); });
    logCursor = 0;
    loadLogs(b.dataset.r, false);
  });
  document.getElementById('wlc-more').addEventListener('click', function(){
    var on = document.querySelector('#wlc-lranges button.on');
    loadLogs(on ? on.dataset.r : '24h', true);
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
  <a href="#wl-deck">Deck</a>
  <a href="#dv-console">Console view</a>
  <a href="#wl-keys">API keys</a>
  <div class="rl-eyebrow">Inference console</div>
  <button data-wlc-tab="models" class="on">Models</button>
  <button data-wlc-tab="usage">Activity</button>
  <button data-wlc-tab="logs">Logs</button>
  <button data-wlc-tab="billing">Billing</button>
  <div class="rl-eyebrow">Collection</div>
  <a href="/marketplace">Marketplace <span class="rl-out" aria-hidden="true">&#8599;</span></a>
  <a href="#wl-topup">Top up</a>
</aside>`;
}
