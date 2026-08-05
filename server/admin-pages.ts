// Admin console UI — same design system as the public site, but ink-first,
// because it is an operations surface rather than a shopfront.

import { SYSTEM_CSS, ARROW } from "./system";
import { V_MARK } from "./pages";

const ADMIN_CSS = `
body { background:#0B0B0A; color:#E9E9E4; }
.abar { position:sticky; top:0; z-index:40; background:rgba(11,11,10,0.92); backdrop-filter:blur(12px);
  border-bottom:1px solid rgba(255,255,255,0.1); height:60px; display:flex; align-items:center; }
.abar-in { max-width:1440px; margin:0 auto; padding:0 24px; width:100%; display:flex; align-items:center; justify-content:space-between; gap:20px; }
.abar .brand { color:#fff; font-size:15px; }
.abar .brand .sub { color:#09F875; }
.tabs { display:flex; gap:4px; }
.tab { font-family:var(--display); font-size:13px; font-weight:600; padding:8px 14px; border-radius:999px;
  color:rgba(255,255,255,0.6); cursor:pointer; border:none; background:none; }
.tab:hover { color:#fff; }
.tab.on { background:rgba(255,255,255,0.1); color:#fff; }
.awrap { max-width:1440px; margin:0 auto; padding:28px 24px 80px; }

.cards { display:grid; grid-template-columns:repeat(4,1fr); gap:12px; margin-bottom:26px; }
@media (max-width:1100px){ .cards { grid-template-columns:repeat(2,1fr); } }
@media (max-width:560px){ .cards { grid-template-columns:1fr; } }
.mcard { background:#131312; border:1px solid rgba(255,255,255,0.09); border-radius:14px; padding:16px 18px; }
.mcard .k { font-family:var(--mono); font-size:10px; letter-spacing:0.12em; text-transform:uppercase; color:rgba(255,255,255,0.42); }
.mcard .v { font-family:var(--display); font-weight:700; font-size:26px; margin-top:8px; font-variant-numeric:tabular-nums; }
.mcard .v.g { color:#09F875; }
.mcard .s { font-size:11.5px; color:rgba(255,255,255,0.4); margin-top:4px; }

.panel { background:#131312; border:1px solid rgba(255,255,255,0.09); border-radius:16px; overflow:hidden; margin-bottom:20px; }
.panel-h { display:flex; align-items:center; justify-content:space-between; gap:16px; padding:16px 20px; border-bottom:1px solid rgba(255,255,255,0.09); }
.panel-h h2 { font-size:16px; }
.panel-b { padding:4px 0; }

table { width:100%; border-collapse:collapse; font-size:13px; }
th { font-family:var(--mono); font-size:10px; letter-spacing:0.1em; text-transform:uppercase; color:rgba(255,255,255,0.4);
  text-align:left; padding:10px 16px; font-weight:600; white-space:nowrap; }
td { padding:12px 16px; border-top:1px solid rgba(255,255,255,0.07); vertical-align:middle; }
tr.click:hover td { background:rgba(255,255,255,0.035); cursor:pointer; }
td.n, th.n { text-align:right; font-family:var(--mono); font-variant-numeric:tabular-nums; }
.mono { font-family:var(--mono); font-size:12px; }
.dim { color:rgba(255,255,255,0.45); }
.tablewrap { overflow-x:auto; }

.pill { font-family:var(--mono); font-size:9.5px; letter-spacing:0.08em; text-transform:uppercase; padding:3px 8px; border-radius:999px; white-space:nowrap; }
.pill--ok { background:rgba(9,248,117,0.14); color:#09F875; }
.pill--warn { background:rgba(255,196,0,0.14); color:#FFC400; }
.pill--bad { background:rgba(255,84,84,0.14); color:#FF7A7A; }
.pill--dim { background:rgba(255,255,255,0.08); color:rgba(255,255,255,0.55); }

.abtn { font-family:var(--display); font-size:12.5px; font-weight:600; padding:7px 13px; border-radius:999px;
  border:1px solid rgba(255,255,255,0.2); background:none; color:#fff; cursor:pointer; }
.abtn:hover { border-color:#fff; }
.abtn--g { background:#09F875; color:#0A0A0A; border-color:#09F875; }
.abtn--r { border-color:rgba(255,122,122,0.5); color:#FF7A7A; }
.abtn--sm { font-size:11.5px; padding:5px 10px; }
input, select { font-family:var(--sans); font-size:13px; background:#0B0B0A; color:#fff;
  border:1px solid rgba(255,255,255,0.18); border-radius:10px; padding:9px 12px; }
input:focus, select:focus { outline:none; border-color:#09F875; }

/* sparkline */
.spark { display:flex; align-items:flex-end; gap:3px; height:56px; padding:0 20px 14px; }
.spark div { flex:1; background:rgba(9,248,117,0.5); border-radius:2px 2px 0 0; min-height:2px; }
.spark div:hover { background:#09F875; }

/* drawer */
.drawer { position:fixed; inset:0; background:rgba(0,0,0,0.6); display:none; z-index:60; }
.drawer.on { display:block; }
.drawer-in { position:absolute; right:0; top:0; bottom:0; width:min(660px,100%); background:#0F0F0E;
  border-left:1px solid rgba(255,255,255,0.12); overflow-y:auto; padding:24px; }
.drawer h3 { font-size:20px; }
.kv { display:grid; grid-template-columns:150px 1fr; gap:8px 14px; font-size:13px; margin:16px 0 22px; }
.kv .k { color:rgba(255,255,255,0.45); }
.act { display:flex; flex-wrap:wrap; gap:8px; align-items:center; margin:14px 0; }
.keyout { background:#000; border:1px solid #09F875; color:#09F875; font-family:var(--mono); font-size:12px;
  padding:12px; border-radius:10px; margin-top:10px; word-break:break-all; }

.login { max-width:380px; margin:14vh auto; padding:0 24px; }
.login h1 { font-size:26px; margin-bottom:8px; }
.login p { color:rgba(255,255,255,0.5); font-size:14px; margin-bottom:22px; }
.login input { width:100%; margin-bottom:12px; }
.login .abtn { width:100%; padding:12px; }
.err { color:#FF7A7A; font-size:13px; margin-top:12px; min-height:18px; }
@media (max-width:700px){ .kv { grid-template-columns:1fr; gap:2px 0; } .kv .k { margin-top:8px; } }
`;

export function adminLoginHtml(message?: string): string {
  return `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Gateway admin</title><meta name="robots" content="noindex,nofollow">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<style>${SYSTEM_CSS}${ADMIN_CSS}</style></head>
<body>
<div class="login">
  <h1>Gateway admin</h1>
  <p>${message ? message : "Operator token required."}</p>
  ${message ? "" : `
  <input type="password" id="tok" placeholder="Operator token" autocomplete="current-password" autofocus>
  <button class="abtn abtn--g" onclick="go()">Sign in</button>
  <div class="err" id="err"></div>`}
</div>
<script>
async function go(){
  const t = document.getElementById('tok').value;
  const e = document.getElementById('err');
  e.textContent = '';
  const r = await fetch('/admin/login', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ token: t }) });
  if (r.ok) { location.reload(); return; }
  const d = await r.json().catch(()=>({}));
  e.textContent = d.message || (d.error === 'invalid_token' ? 'That token is not right.' : 'Sign-in failed.');
}
document.getElementById('tok')?.addEventListener('keydown', (ev)=>{ if(ev.key==='Enter') go(); });
</script>
</body></html>`;
}

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
    <button class="tab on" data-tab="overview">Overview</button>
    <button class="tab" data-tab="users">Users</button>
    <button class="tab" data-tab="requests">Requests</button>
    <button class="tab" data-tab="events">Audit</button>
  </div>
  <div style="display:flex; gap:10px; align-items:center;">
    <span class="mono dim" id="clock" style="font-size:11px"></span>
    <button class="abtn abtn--sm" onclick="logout()">Sign out</button>
  </div>
</div></div>

<div class="awrap">

  <section id="v-overview">
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
        <input id="q" placeholder="Search handle or name" style="width:240px" oninput="loadUsers()">
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

  <section id="v-requests" hidden>
    <div class="panel">
      <div class="panel-h">
        <h2>Request log</h2>
        <select id="of" onchange="loadRequests()">
          <option value="all">All outcomes</option>
          <option value="ok">ok</option>
          <option value="unauthorized">unauthorized</option>
          <option value="rate_limited">rate_limited</option>
          <option value="insufficient_credits">insufficient_credits</option>
          <option value="suspended">suspended</option>
          <option value="daily_cap">daily_cap</option>
          <option value="unsupported_model">unsupported_model</option>
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

<div class="drawer" id="drawer" onclick="if(event.target===this) closeDrawer()">
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
  insufficient_credits:'warn', daily_cap:'warn', upstream_error:'bad', bad_request:'warn', unsupported_model:'warn' };
const pill = (o) => '<span class="pill pill--' + (OUTCOME_CLASS[o] || 'dim') + '">' + esc(o) + '</span>';

async function api(path, opts) {
  const r = await fetch('/admin/api' + path, opts);
  if (r.status === 401) { location.reload(); throw new Error('unauthorized'); }
  return r.json();
}

// ── tabs ──
document.querySelectorAll('.tab').forEach((t) => t.addEventListener('click', () => {
  document.querySelectorAll('.tab').forEach((x) => x.classList.toggle('on', x === t));
  ['overview','users','requests','events'].forEach((v) => { $('#v-' + v).hidden = v !== t.dataset.tab; });
  ({ overview: loadOverview, users: loadUsers, requests: loadRequests, events: loadEvents })[t.dataset.tab]();
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

// ── users ──
async function loadUsers() {
  const q = $('#q').value.trim();
  const d = await api('/users' + (q ? '?q=' + encodeURIComponent(q) : ''));
  $('#tb-users tbody').innerHTML = (d.users || []).length ? d.users.map((u) => \`
    <tr class="click" onclick="openUser('\${u.id}')">
      <td><b>@\${esc(u.x_username)}</b><div class="dim" style="font-size:11.5px">\${esc(u.x_name || '')}</div></td>
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
      <button class="abtn abtn--sm" onclick="closeDrawer()">Close</button>
    </div>
    <div class="kv">
      <div class="k">Status</div><div>\${u.status === 'suspended' ? '<span class="pill pill--bad">suspended</span>' : '<span class="pill pill--ok">active</span>'}</div>
      <div class="k">Score / tier</div><div>\${u.score ?? '—'} · \${esc(u.score_tier || '—')}</div>
      <div class="k">Key</div><div class="mono">\${esc(u.key_prefix || 'none')}</div>
      <div class="k">Balance</div><div>\${money(u.usd_balance)} <span class="dim">of \${money(u.usd_granted)} granted</span></div>
      <div class="k">Consumed</div><div>\${money(u.usd_consumed)}</div>
      <div class="k">Burned</div><div style="color:#09F875">\${fmtV(u.vantis_burned)} VANTIS</div>
      <div class="k">Spend today</div><div>\${money(d.spend_today)}\${u.daily_usd_cap > 0 ? ' <span class="dim">of ' + money(u.daily_usd_cap) + ' cap</span>' : ' <span class="dim">· no cap</span>'}</div>
      <div class="k">Rate limit</div><div>\${u.rate_limit_rpm || 60} req/min</div>
      <div class="k">Last seen</div><div class="dim">\${ago(u.last_seen_at)}</div>
      <div class="k">Note</div><div class="dim">\${esc(u.admin_note || '—')}</div>
    </div>

    <div class="act">
      <button class="abtn \${u.status === 'suspended' ? 'abtn--g' : 'abtn--r'}" onclick="setStatus('\${u.id}','\${u.status === 'suspended' ? 'active' : 'suspended'}')">
        \${u.status === 'suspended' ? 'Reactivate key' : 'Suspend key'}</button>
      <button class="abtn" onclick="rotate('\${u.id}')">Rotate key</button>
    </div>
    <div class="act">
      <input id="d-delta" type="number" step="0.01" placeholder="± USD" style="width:110px">
      <input id="d-reason" placeholder="Reason" style="width:200px">
      <button class="abtn" onclick="adjust('\${u.id}')">Adjust balance</button>
    </div>
    <div class="act">
      <input id="d-rpm" type="number" value="\${u.rate_limit_rpm || 60}" style="width:100px" title="requests per minute">
      <input id="d-cap" type="number" step="0.01" value="\${u.daily_usd_cap || 0}" style="width:120px" title="daily USD cap, 0 = off">
      <button class="abtn" onclick="limits('\${u.id}')">Save limits</button>
    </div>
    <div class="act">
      <input id="d-note" placeholder="Operator note" value="\${esc(u.admin_note || '')}" style="flex:1;min-width:200px">
      <button class="abtn" onclick="note('\${u.id}')">Save note</button>
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
}
function closeDrawer(){ $('#drawer').classList.remove('on'); loadUsers(); }

async function post(path, body) {
  const r = await api(path, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(body||{}) });
  return r;
}
async function setStatus(id, status){ await post('/users/'+id+'/status', { status }); openUser(id); }
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

setInterval(() => { $('#clock').textContent = new Date().toISOString().replace('T',' ').slice(0,19) + 'Z'; }, 1000);
loadOverview();
setInterval(() => { if (!$('#v-overview').hidden) loadOverview(); }, 30000);
</script>
</body></html>`;
}
