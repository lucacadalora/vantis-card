// Top-up UI: the live section on /wallets (replaces the placeholder for the
// launch cohort), the Stripe return page, and the sandbox checkout page.
// Light, mono labels, no emoji, no inline handlers (CSP nonce covers inline
// <script> blocks only). Copy never says deposit / wallet / money held.

import { esc } from "../pages";
import { SYSTEM_CSS, appNav, type NavViewer } from "../system";

type Cfg = ReturnType<typeof import("./routes").topupConfigFor>;

const money = (n: number) => `$${Number(n || 0).toFixed(2)}`;


// ── The top-up flow: a Stripe-style stepper ──
//   1 Amount → 2 Pay with (Card | Stablecoin) → 3 Network → 4 Pay (wallet | any wallet) → credited
// One panel; steps swap in place; nothing is hidden behind a modal. The same
// pay step renders on the session-less /topup/pay/:id page.

function payStepHtml(): string {
  return `<div class="tu-step-pane" data-pane="pay" hidden>
      <div class="tu-payhead">
        <div>
          <div class="tu-k" data-tu-pay-k>Send</div>
          <div class="tu-payamt" data-tu-pay-amt></div>
          <div class="tu-paysub" data-tu-pay-sub></div>
        </div>
        <div class="tu-timer" data-tu-timer title="Time left to pay this request">30:00</div>
      </div>
      <div class="tu-tabs" role="tablist">
        <button type="button" class="tu-tab is-on" data-tu-tab="wallet" role="tab">Pay from a wallet</button>
        <button type="button" class="tu-tab" data-tu-tab="manual" role="tab">Send from any wallet</button>
      </div>
      <div class="tu-tabpane" data-tu-tabpane="wallet">
        <div class="tu-wallets" data-tu-wallets></div>
        <p class="tu-note" data-tu-wallet-note></p>
        <div class="tu-steps">
          <div class="tu-step" data-step="connect"><span class="tu-dot"></span>Connect wallet</div>
          <div class="tu-step" data-step="approve"><span class="tu-dot"></span>Approve the transfer</div>
          <div class="tu-step" data-step="confirm"><span class="tu-dot"></span>Confirming on the network</div>
          <div class="tu-step" data-step="done"><span class="tu-dot"></span>Credited to your card</div>
        </div>
        <a class="btnx" data-tu-deeplink hidden target="_blank" rel="noopener">Open in Phantom app</a>
      </div>
      <div class="tu-tabpane" data-tu-tabpane="manual" hidden>
        <div class="tu-manual">
          <div class="tu-qrbox" data-tu-qr></div>
          <div class="tu-fields">
            <div class="tu-field"><span class="tu-fk">Network</span><span class="tu-fv" data-tu-f-net></span></div>
            <div class="tu-field"><span class="tu-fk">Send exactly</span><span class="tu-fv num" data-tu-f-amt></span><button type="button" class="tu-copy" data-copy="amt">Copy</button></div>
            <div class="tu-field"><span class="tu-fk">To address</span><span class="tu-fv tu-addr" data-tu-f-addr></span><button type="button" class="tu-copy" data-copy="addr">Copy</button></div>
            <a class="tu-paylink" data-tu-paylink target="_blank" rel="noopener">Open in wallet</a>
          </div>
        </div>
        <p class="tu-warn" data-tu-manual-warn></p>
      </div>
      <p class="tu-err" data-tu-pay-err hidden></p>
      <div class="tu-status" data-tu-status><span class="tu-pulse"></span><span data-tu-status-text>Waiting for your payment…</span></div>
      <p class="tu-done" data-tu-done hidden></p>
      <div class="tu-nav"><button type="button" class="btnx" data-tu-cancel>Cancel</button><a class="btnx" data-tu-explorer hidden target="_blank" rel="noopener">View on explorer</a></div>
    </div>`;
}

export function topupSectionLive(user: any, cfg: Cfg, mainUsd: number, laneTotal: number): string {
  const card = cfg.card.provider;
  const sol = cfg.solana;
  const evm = (cfg as any).evm || { enabled: false, chains: [] as any[] };
  const cryptoOn = !!(sol.enabled || evm.enabled);
  const presets = cfg.presets.map((p, i) => `<button type="button" class="tu-preset${i === 1 ? " is-on" : ""}" data-amt="${p}">$${p}</button>`).join("");
  const initial = cfg.presets[1] || cfg.presets[0] || 10;
  const dests = cfg.destinations.map((d) =>
    `<option value="${esc(d.id)}"${d.id === cfg.default_destination ? " selected" : ""}>${esc(d.name)} — ${money(d.usd)}${d.has_live_key ? " · has a live key" : ""}</option>`).join("");
  const hist = cfg.history.length
    ? cfg.history.map((h) => `<div class="tu-hrow"><span class="tu-hwhen">${esc(String(h.created_at).slice(5, 16).replace("T", " "))}</span><span class="tu-hwhat">${esc(h.provider === "solana" ? "USDC · Solana" : h.provider === "evm" ? ((h as any).chain ? "Stablecoin · " + (h as any).chain : "Stablecoin") : h.provider === "sandbox" ? "Card · sandbox" : "Card")} · ${money(h.amount_usd)}</span><span class="tu-pill tu-pill--${esc(h.status)}">${esc(h.status)}</span></div>`).join("")
    : `<div class="tu-hempty">No top-ups yet.</div>`;
  const cardSub = card === "stripe" ? (cfg.card.livemode ? "Visa, Mastercard and more · via Stripe" : "Visa, Mastercard and more · Stripe test mode") : card === "sandbox" ? "SANDBOX — a mock checkout that charges nothing" : "Opening soon";
  const netRows: string[] = [];
  if (sol.enabled) netRows.push(`<button type="button" class="tu-net" data-net="solana" ${sol.cluster === "devnet" ? 'data-testnet="1"' : ""}><img src="/logos/sol.svg" alt=""><span class="tu-net-n">Solana${sol.cluster === "devnet" ? " <em>devnet</em>" : ""}</span><span class="tu-net-s">USDC${sol.sponsored ? " · network fee covered by Vantis" : " · you pay the network fee (~$0.001)"}</span><span class="tu-net-tag">Recommended</span></button>`);
  for (const ch of evm.chains || []) {
    const gasNote = ch.gasless ? "network fee covered by Vantis" : `you pay the network fee in ${esc(ch.native)}`;
    netRows.push(`<button type="button" class="tu-net" data-net="${esc(ch.key)}" ${ch.testnet ? 'data-testnet="1"' : ""}><img src="${esc(ch.logo)}" alt=""><span class="tu-net-n">${esc(ch.name)}</span><span class="tu-net-s">${esc(ch.token)} · ${gasNote}</span></button>`);
  }
  const cfgJson = esc(JSON.stringify({ solana: { enabled: sol.enabled, cluster: sol.cluster, chain: sol.chain, sponsored: sol.sponsored, label: sol.label }, evm: { enabled: evm.enabled, chains: evm.chains || [] }, card: cfg.card, min: cfg.min_usd, max: cfg.max_usd }));
  return `<section id="wl-topup" style="margin-top:38px; scroll-margin-top:84px;" data-topup-live="1" data-tu-cfg="${cfgJson}">
  <div class="wl-sec">Top up</div>
  <p class="wl-sub">Buy prepaid inference credits for your card. 1 credit = $1 of inference at list price. Credits are closed-loop and non-refundable: they spend only on the rail, carry no monetary value and never leave the card.</p>
  <div class="tu-grid2">
    <div class="dk-tu">
      <div class="k">On the card now</div>
      <div class="v num" data-tu-total>${money(mainUsd + laneTotal)}</div>
      <p><span data-tu-main>${money(mainUsd)}</span> in Main, <span data-tu-lanes>${money(laneTotal)}</span> allocated to lanes. Main funds lanes; lanes pay for calls. A top-up lands where you point it.</p>
      <div class="k" style="margin-top:16px;">Recent top-ups</div>
      <div class="tu-hist" data-tu-hist>${hist}</div>
    </div>
    <div class="dk-tu tu-flow" data-tu-flow>
      <ol class="tu-crumbs" data-tu-crumbs>
        <li class="is-on" data-crumb="amount"><b>1</b> Amount</li>
        <li data-crumb="method"><b>2</b> Pay with</li>
        <li data-crumb="network"><b>3</b> Network</li>
        <li data-crumb="pay"><b>4</b> Pay</li>
      </ol>

      <div class="tu-step-pane" data-pane="amount">
        <div class="k">Amount</div>
        <div class="tu-presets" data-tu-presets>${presets}</div>
        <div class="tu-custom"><span class="tu-cur">$</span><input type="number" inputmode="decimal" min="${cfg.min_usd}" max="${cfg.max_usd}" step="1" value="${initial}" data-tu-amount aria-label="Amount in USD"><span class="tu-lim">min $${cfg.min_usd} · max $${cfg.max_usd}</span></div>
        <div class="k" style="margin-top:14px;">Credit to</div>
        <select class="tu-dest" data-tu-dest aria-label="Destination">${dests}</select>
        <p class="tu-err" data-tu-err hidden></p>
        <div class="tu-nav"><span></span><button type="button" class="btnx btnx--pri tu-next" data-tu-go="method">Continue</button></div>
      </div>

      <div class="tu-step-pane" data-pane="method" hidden>
        <div class="k">Pay with</div>
        <div class="tu-opts">
          <button type="button" class="tu-opt" data-method="card" ${card ? "" : "disabled"}><span class="tu-opt-n">Card</span><span class="tu-opt-s">${esc(cardSub)}</span></button>
          <button type="button" class="tu-opt" data-method="crypto" ${cryptoOn ? "" : "disabled"}><span class="tu-opt-n">Stablecoin</span><span class="tu-opt-s">${cryptoOn ? "USDC on Solana" + ((evm.chains || []).length ? ", " + (evm.chains || []).map((c: any) => esc(c.name)).join(", ") : "") + (sol.sponsored ? " · on Solana you only need USDC, the network fee is on us" : "") : "Opening soon"}</span></button>
        </div>
        <p class="tu-err" data-tu-err2 hidden></p>
        <div class="tu-nav"><button type="button" class="btnx" data-tu-back="amount">Back</button><span></span></div>
      </div>

      <div class="tu-step-pane" data-pane="network" hidden>
        <div class="k">Choose a network</div>
        <div class="tu-nets">${netRows.join("")}</div>
        <p class="tu-fine">Send only the stablecoin shown, on the network shown. Other tokens or networks cannot be matched to your card automatically.</p>
        <p class="tu-err" data-tu-err3 hidden></p>
        <div class="tu-nav"><button type="button" class="btnx" data-tu-back="method">Back</button><span></span></div>
      </div>

      ${payStepHtml()}

      <p class="tu-fine">${card === "stripe" ? "Card payments in USD via Stripe. " : card === "sandbox" ? "Card = SANDBOX: a mock checkout that charges nothing. " : ""}Stablecoins are sent from your own wallet to Vantis; no key ever touches this server. Prepaid credits, closed-loop, non-refundable, no monetary value.</p>
      ${sol.enabled && sol.cluster === "devnet" ? `<p class="tu-fine tu-fine--warn">DEVNET — Solana here is wired to devnet: it moves test USDC only, and credits it mints are real on this account. Switch Phantom to Testnet mode (Settings → Developer settings) and get devnet USDC from a faucet to try it.</p>` : ""}
    </div>
  </div>
</section>`;
}

export const TOPUP_LIVE_CSS = `
.tu-grid2 { display:grid; grid-template-columns:minmax(0,1fr) minmax(0,2fr); gap:18px; margin-top:16px; }
@media (max-width:860px) { .tu-grid2 { grid-template-columns:1fr; } }
.tu-grid2 .dk-tu { display:flex; flex-direction:column; }
#wl-topup [hidden] { display:none !important; }
.tu-flow { padding:0 !important; overflow:hidden; }
.tu-crumbs { list-style:none; display:flex; gap:0; border-bottom:1px solid var(--line); background:var(--wash); }
.tu-crumbs li { flex:1; font-family:var(--mono); font-size:10.5px; letter-spacing:.08em; text-transform:uppercase; color:var(--muted); padding:10px 12px; display:flex; align-items:center; gap:8px; border-right:1px solid var(--line); }
.tu-crumbs li:last-child { border-right:0; }
.tu-crumbs li b { width:18px; height:18px; border-radius:50%; border:1px solid var(--line-strong); display:inline-flex; align-items:center; justify-content:center; font-size:10px; color:var(--muted); background:var(--white); }
.tu-crumbs li.is-on { color:var(--ink); }
.tu-crumbs li.is-on b { background:var(--ink); color:var(--green); border-color:var(--ink); }
.tu-crumbs li.is-done b { background:var(--green); color:var(--ink); border-color:var(--green); }
.tu-step-pane { padding:18px; }
.tu-presets { display:flex; flex-wrap:wrap; gap:8px; margin-top:8px; }
.tu-preset { font-family:var(--mono); font-size:12.5px; font-weight:600; border:1px solid var(--line-strong); background:var(--white); border-radius:999px; padding:8px 13px; min-height:34px; cursor:pointer; }
.tu-preset.is-on { background:var(--ink); color:var(--green); border-color:var(--ink); }
.tu-custom { display:flex; align-items:center; gap:8px; margin-top:10px; }
.tu-cur { font-family:var(--mono); color:var(--muted); }
.tu-custom input { font-family:var(--mono); font-size:15px; width:120px; padding:6px 10px; border:1px solid var(--line-strong); border-radius:8px; }
.tu-lim { font-family:var(--mono); font-size:10.5px; color:var(--muted); }
.tu-dest { font-family:var(--sans); font-size:13px; padding:7px 10px; border:1px solid var(--line-strong); border-radius:8px; margin-top:6px; width:100%; background:var(--white); }
.tu-nav { display:flex; justify-content:space-between; align-items:center; gap:8px; margin-top:16px; }
.tu-next { padding:9px 18px; }
.tu-opts, .tu-nets { display:flex; flex-direction:column; gap:8px; margin-top:8px; }
.tu-opt, .tu-net { text-align:left; border:1px solid var(--line-strong); background:var(--white); border-radius:12px; padding:12px 14px; cursor:pointer; display:grid; gap:2px; transition:border-color .15s; }
.tu-opt:hover, .tu-net:hover { border-color:var(--ink); }
.tu-opt:disabled, .tu-net:disabled { opacity:.45; cursor:default; }
.tu-opt-n { font-family:var(--display); font-weight:700; font-size:14px; }
.tu-opt-s { font-size:12px; color:var(--muted); }
.tu-net { grid-template-columns:28px 1fr auto; grid-template-rows:auto auto; column-gap:12px; align-items:center; }
.tu-net img { width:26px; height:26px; border-radius:50%; grid-row:1 / span 2; object-fit:contain; }
.tu-net-n { font-family:var(--display); font-weight:700; font-size:14px; }
.tu-net-n em { font-style:normal; font-family:var(--mono); font-size:10px; letter-spacing:.08em; text-transform:uppercase; color:#8A5A00; background:#FDF4E3; padding:2px 6px; border-radius:999px; margin-left:6px; }
.tu-net-s { font-size:12px; color:var(--muted); grid-column:2; }
.tu-net-tag { grid-column:3; grid-row:1 / span 2; font-family:var(--mono); font-size:10px; letter-spacing:.08em; text-transform:uppercase; color:var(--green-ink); background:#E6FBEF; padding:3px 8px; border-radius:999px; }
.tu-payhead { display:flex; justify-content:space-between; align-items:flex-start; gap:12px; }
.tu-payamt { font-family:var(--display); font-size:26px; font-weight:700; letter-spacing:-0.01em; margin-top:2px; }
.tu-paysub { font-size:12.5px; color:var(--muted); margin-top:2px; }
.tu-timer { font-family:var(--mono); font-size:12px; color:var(--muted); border:1px solid var(--line); border-radius:999px; padding:4px 10px; white-space:nowrap; }
.tu-timer.is-low { color:#B42318; border-color:#F3C4C0; }
.tu-tabs { display:flex; gap:0; margin-top:14px; border-bottom:1px solid var(--line); }
.tu-tab { font-family:var(--display); font-weight:700; font-size:12.5px; background:none; border:0; border-bottom:2px solid transparent; padding:8px 12px; cursor:pointer; color:var(--muted); }
.tu-tab.is-on { color:var(--ink); border-bottom-color:var(--ink); }
.tu-tabpane { padding-top:14px; }
.tu-wallets { display:flex; flex-wrap:wrap; gap:8px; }
.tu-wbtn { display:inline-flex; align-items:center; gap:8px; font-family:var(--display); font-weight:700; font-size:12.5px; border:1px solid var(--line-strong); background:var(--white); border-radius:999px; padding:8px 14px; cursor:pointer; }
.tu-wbtn img { width:18px; height:18px; border-radius:4px; }
.tu-wbtn.is-pri { background:var(--ink); color:var(--green); border-color:var(--ink); }
.tu-wbtn:disabled { opacity:.5; cursor:default; }
.tu-note { font-size:12px; color:var(--body); margin-top:8px; }
.tu-steps { margin-top:12px; display:flex; flex-direction:column; gap:6px; }
.tu-step { font-family:var(--mono); font-size:11.5px; color:var(--muted); display:flex; align-items:center; gap:8px; }
.tu-dot { width:8px; height:8px; border-radius:50%; background:var(--line-strong); display:inline-block; }
.tu-step.is-on { color:var(--ink); }
.tu-step.is-on .tu-dot { background:#E5A100; box-shadow:0 0 0 3px #FDF4E3; }
.tu-step.is-done { color:var(--green-ink); }
.tu-step.is-done .tu-dot { background:var(--green); }
.tu-manual { display:grid; grid-template-columns:172px 1fr; gap:16px; align-items:start; }
@media (max-width:560px) { .tu-manual { grid-template-columns:1fr; } }
.tu-qrbox svg { width:172px; height:172px; display:block; border:1px solid var(--line); border-radius:10px; }
.tu-fields { display:flex; flex-direction:column; gap:8px; min-width:0; }
.tu-field { display:grid; grid-template-columns:86px 1fr auto; gap:8px; align-items:center; font-size:13px; }
.tu-fk { font-family:var(--mono); font-size:10.5px; letter-spacing:.08em; text-transform:uppercase; color:var(--muted); }
.tu-fv { font-weight:600; min-width:0; }
.tu-addr { font-family:var(--mono); font-size:11.5px; word-break:break-all; font-weight:500; }
.tu-copy { font-family:var(--mono); font-size:10.5px; border:1px solid var(--line-strong); background:var(--white); border-radius:999px; padding:3px 9px; cursor:pointer; }
.tu-copy.is-ok { border-color:var(--green-ink); color:var(--green-ink); }
.tu-paylink { font-family:var(--mono); font-size:11.5px; color:var(--green-ink); }
.tu-warn { font-size:11.5px; color:#8A5A00; background:#FDF4E3; border-radius:8px; padding:8px 10px; margin-top:12px; line-height:1.5; }
.tu-status { display:flex; align-items:center; gap:10px; margin-top:14px; font-family:var(--mono); font-size:12px; color:var(--body); border-top:1px solid var(--line); padding-top:12px; }
.tu-status.is-ok { color:var(--green-ink); }
.tu-pulse { width:9px; height:9px; border-radius:50%; background:#E5A100; box-shadow:0 0 0 0 rgba(229,161,0,.5); animation:tupulse 1.6s ease-out infinite; }
.tu-status.is-ok .tu-pulse { background:var(--green); animation:none; }
@keyframes tupulse { 0% { box-shadow:0 0 0 0 rgba(229,161,0,.45); } 100% { box-shadow:0 0 0 9px rgba(229,161,0,0); } }
.tu-err { font-family:var(--mono); font-size:11.5px; color:#B42318; margin-top:8px; }
.tu-err.is-note { color:var(--body); font-family:var(--sans); font-size:12.5px; }
.tu-fine { font-size:11.5px; color:var(--muted); line-height:1.55; margin-top:12px; padding:0 18px 16px; }
.tu-fine--warn { color:#8A5A00; background:#FDF4E3; border-radius:8px; padding:8px 10px; margin:0 18px 16px; }
.tu-step-pane .tu-fine { padding:0; margin-top:10px; }
.tu-hist { margin-top:6px; display:flex; flex-direction:column; gap:4px; }
.tu-hrow { display:grid; grid-template-columns:auto 1fr auto; gap:10px; align-items:center; font-size:12px; padding:5px 0; border-top:1px solid var(--line); }
.tu-hwhen { font-family:var(--mono); font-size:10.5px; color:var(--muted); }
.tu-hempty { font-size:12px; color:var(--muted); padding:6px 0; }
.tu-pill { font-family:var(--mono); font-size:10px; letter-spacing:.06em; text-transform:uppercase; padding:2px 8px; border-radius:999px; background:var(--wash); color:var(--muted); }
.tu-pill--credited { background:#E6FBEF; color:var(--green-ink); }
.tu-pill--pending, .tu-pill--created, .tu-pill--paid { background:#FDF4E3; color:#8A5A00; }
.tu-pill--failed, .tu-pill--expired, .tu-pill--canceled { background:#FDECEC; color:#B42318; }
.tu-done { margin-top:12px; font-size:13px; color:var(--green-ink); font-weight:600; }
.tu-done a { color:var(--green-ink); text-decoration:underline; }
`;

// Inline, nonce'd by the central injector. Wallet Standard / EIP-6963 by hand.
export const TOPUP_LIVE_JS = `<script>
(function () {
  var sec = document.getElementById("wl-topup");
  if (!sec || !sec.getAttribute("data-topup-live")) return;
  var $ = function (s, r) { return (r || sec).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || sec).querySelectorAll(s)); };
  var CFG = {}; try { CFG = JSON.parse(sec.getAttribute("data-tu-cfg") || "{}"); } catch (e) {}
  var amountEl = $("[data-tu-amount]"), destEl = $("[data-tu-dest]");
  var isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  var busy = false, current = null, pollTimer = null, timerTimer = null, method = null, walletBusy = false;
  var preload = null; try { preload = JSON.parse(sec.getAttribute("data-tu-preload") || "null"); } catch (e) { preload = null; }

  function money(n) { return "$" + Number(n || 0).toFixed(2); }
  function err(el, msg, note) { if (!el) return; el.textContent = msg || ""; el.hidden = !msg; el.classList.toggle("is-note", !!note); }
  function post(url, body) {
    return fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body || {}) })
      .then(function (r) { return r.json().then(function (j) { return { ok: r.ok, status: r.status, j: j }; }); });
  }
  function amount() { var v = amountEl ? parseFloat(amountEl.value) : NaN; return isFinite(v) ? Math.round(v * 100) / 100 : NaN; }
  function b64bytes(b64) { var bin = atob(b64), out = new Uint8Array(bin.length); for (var i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i); return out; }
  function bytesB64(u8) { var s = ""; for (var i = 0; i < u8.length; i++) s += String.fromCharCode(u8[i]); return btoa(s); }
  function b58(bytes) {
    var A = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz", d = [], s = "";
    for (var i = 0; i < bytes.length; i++) { var c = bytes[i]; for (var j = 0; j < d.length; j++) { c += d[j] << 8; d[j] = c % 58; c = (c / 58) | 0; } while (c > 0) { d.push(c % 58); c = (c / 58) | 0; } }
    for (var k = 0; k < bytes.length && bytes[k] === 0; k++) s += "1";
    for (var q = d.length - 1; q >= 0; q--) s += A[d[q]];
    return s;
  }
  function copy(text, btn) {
    var done = function () { if (!btn) return; var l = btn.textContent; btn.textContent = "Copied"; btn.classList.add("is-ok"); setTimeout(function () { btn.textContent = l; btn.classList.remove("is-ok"); }, 1400); };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, function () { fallback(); });
    else fallback();
    function fallback() { var ta = document.createElement("textarea"); ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0"; document.body.appendChild(ta); ta.select(); try { document.execCommand("copy"); done(); } catch (e) {} document.body.removeChild(ta); }
  }

  // ── stepper ──
  var ORDER = ["amount", "method", "network", "pay"];
  function show(step) {
    $$(".tu-step-pane").forEach(function (p) { p.hidden = p.getAttribute("data-pane") !== step; });
    var idx = ORDER.indexOf(step);
    $$("[data-crumb]").forEach(function (li) { var i = ORDER.indexOf(li.getAttribute("data-crumb")); li.classList.toggle("is-on", i === idx); li.classList.toggle("is-done", i < idx); });
    if (step === "amount") { stopPoll(); stopTimer(); current = null; }
  }
  sec.addEventListener("click", function (e) {
    var p = e.target.closest("[data-amt]");
    if (p && amountEl) { amountEl.value = p.getAttribute("data-amt"); $$(".tu-preset").forEach(function (b) { b.classList.toggle("is-on", b === p); }); }
    var go = e.target.closest("[data-tu-go]");
    if (go) { var a = amount(); if (!(a >= (CFG.min || 5) && a <= (CFG.max || 500))) { err($("[data-tu-err]"), "Enter an amount between $" + (CFG.min || 5) + " and $" + (CFG.max || 500) + "."); return; } err($("[data-tu-err]"), ""); show(go.getAttribute("data-tu-go")); }
    var back = e.target.closest("[data-tu-back]");
    if (back) { show(back.getAttribute("data-tu-back")); }
    var m = e.target.closest("[data-method]");
    if (m && !m.disabled) { method = m.getAttribute("data-method"); if (method === "card") startCard(m); else show("network"); }
    var n = e.target.closest("[data-net]");
    if (n && !n.disabled) { startCrypto(n.getAttribute("data-net"), n); }
    var tab = e.target.closest("[data-tu-tab]");
    if (tab) { $$("[data-tu-tab]").forEach(function (b) { b.classList.toggle("is-on", b === tab); }); $$("[data-tu-tabpane]").forEach(function (p) { p.hidden = p.getAttribute("data-tu-tabpane") !== tab.getAttribute("data-tu-tab"); }); }
    var cp = e.target.closest("[data-copy]");
    if (cp && current) { copy(cp.getAttribute("data-copy") === "amt" ? String(current.amount_ui) : String(current.treasury), cp); }
    var wb = e.target.closest("[data-tu-wallet]");
    if (wb) { payWithWallet(wb.getAttribute("data-tu-wallet")); }
    var cn = e.target.closest("[data-tu-cancel]");
    if (cn) { if (preload) { location.reload(); return; } var wasDone = $("[data-tu-done]") && !$("[data-tu-done]").hidden; show("amount"); if (wasDone) location.reload(); }
  });
  amountEl && amountEl.addEventListener("input", function () { $$(".tu-preset").forEach(function (b) { b.classList.toggle("is-on", Number(b.getAttribute("data-amt")) === amount()); }); });

  // ── card ──
  function startCard(btn) {
    if (busy) return; busy = true; err($("[data-tu-err2]"), "");
    var label = btn.querySelector(".tu-opt-s").textContent; btn.querySelector(".tu-opt-s").textContent = "Opening checkout…";
    post("/api/topup/create", { provider: "card", amount_usd: amount(), destination: destEl ? destEl.value : "main" }).then(function (res) {
      if (!res.ok || !res.j.url) { busy = false; btn.querySelector(".tu-opt-s").textContent = label; err($("[data-tu-err2]"), res.j && res.j.message ? res.j.message : "Could not open checkout."); return; }
      window.location.href = res.j.url;
    }).catch(function () { busy = false; btn.querySelector(".tu-opt-s").textContent = label; err($("[data-tu-err2]"), "Network error."); });
  }

  // ── crypto: create the request, then show the pay step ──
  function startCrypto(net, btn) {
    if (busy) return; busy = true; err($("[data-tu-err3]"), "");
    var body = net === "solana" ? { provider: "solana", amount_usd: amount(), destination: destEl ? destEl.value : "main" } : { provider: "crypto", chain: net, amount_usd: amount(), destination: destEl ? destEl.value : "main" };
    var sub = btn.querySelector(".tu-net-s"), old = sub ? sub.textContent : ""; if (sub) sub.textContent = "Preparing your payment request…";
    post("/api/topup/create", body).then(function (res) {
      busy = false; if (sub) sub.textContent = old;
      if (!res.ok) { err($("[data-tu-err3]"), res.j && res.j.message ? res.j.message : "Could not start this payment."); return; }
      showPay(res.j, true);
    }).catch(function () { busy = false; if (sub) sub.textContent = old; err($("[data-tu-err3]"), "Network error."); });
  }

  // ── pay step ──
  function stepMark(name, state) {
    var order = ["connect", "approve", "confirm", "done"], hit = false;
    order.forEach(function (n) {
      var el = $('[data-step="' + n + '"]'); if (!el) return;
      el.classList.remove("is-on", "is-done");
      if (n === name) { el.classList.add(state === "done" ? "is-done" : "is-on"); hit = true; }
      else if (!hit) el.classList.add("is-done");
    });
  }
  function status(text, ok) { var s = $("[data-tu-status]"); if (!s) return; s.classList.toggle("is-ok", !!ok); var t = $("[data-tu-status-text]"); if (t) t.textContent = text; }
  function isSol() { return current && current.provider === "solana"; }
  function netName() { return isSol() ? ("Solana" + (current.cluster === "devnet" ? " devnet" : "")) : (current.chain && current.chain.name) || "network"; }
  function tokenSym() { return isSol() ? "USDC" : (current.token && current.token.symbol) || "USDC"; }

  function showPay(data, autorun) {
    current = data;
    show("pay");
    var dead = current.status === "expired" || current.status === "canceled" || current.status === "failed";
    err($("[data-tu-pay-err]"), ""); var dn = $("[data-tu-done]"); if (dn) dn.hidden = true;
    $("[data-tu-pay-k]").textContent = "Send on " + netName();
    $("[data-tu-pay-amt]").textContent = current.amount_ui + " " + tokenSym();
    $("[data-tu-pay-sub]").textContent = "for " + money(current.amount_usd) + " in credits" + (current.sponsored ? " · network fee covered by Vantis — you only need " + tokenSym() : "") + (isSol() && current.reference ? " · ref " + String(current.reference).slice(0, 8) + "…" : "");
    // manual tab
    $("[data-tu-qr]").innerHTML = current.qr_svg || "";
    $("[data-tu-f-net]").textContent = netName() + (isSol() ? "" : " (chain id " + (current.chain && current.chain.chain_id) + ")");
    $("[data-tu-f-amt]").textContent = current.amount_ui + " " + tokenSym();
    $("[data-tu-f-addr]").textContent = current.treasury || "";
    var link = $("[data-tu-paylink]"); var uri = isSol() ? current.solana_pay_url : current.eip681; if (link) { link.href = uri || "#"; link.textContent = isSol() ? "Open in a Solana wallet" : "Open in wallet (EIP-681)"; }
    $("[data-tu-manual-warn]").textContent = isSol()
      ? "Send exactly " + current.amount_ui + " USDC on " + netName() + " — the amount is unique to this request and is how a plain transfer (from an exchange or any wallet) is matched to your card. The QR and link add a Solana Pay reference for wallets that support it. Do not send other tokens."
      : "Send exactly " + current.amount_ui + " " + tokenSym() + " on " + netName() + " — the amount is unique to this request and is how we match your payment. Sending a different amount, another token, or on another network cannot be credited automatically.";
    // wallet tab
    renderWallets();
    stepMark("connect", "on");
    status("Waiting for your payment…", false);
    var ex = $("[data-tu-explorer]"); if (ex) ex.hidden = true;
    var cn = $("[data-tu-cancel]"); if (cn) cn.textContent = "Cancel";
    if (dead) { status("This request is " + current.status + ". Start a new one.", false); stopPoll(); stopTimer(); return; }
    if (current.status === "credited") { showCredited({ topup: current, explorer_url: current.explorer_url }); return; }
    startTimer(); startPoll();
    if (autorun) { var pane = $('[data-pane="pay"]'); if (pane) pane.scrollIntoView({ behavior: "smooth", block: "nearest" }); }
  }

  // ── wallets: Solana (Wallet Standard / injected Phantom) and EVM (EIP-6963) ──
  function standardWallets() {
    var found = [];
    var api = { register: function () { for (var i = 0; i < arguments.length; i++) found.push(arguments[i]); return function () {}; } };
    try { window.addEventListener("wallet-standard:register-wallet", function (e) { try { e.detail(api); } catch (x) {} }); window.dispatchEvent(new CustomEvent("wallet-standard:app-ready", { detail: api })); } catch (x) {}
    return found;
  }
  var evmProviders = [];
  try {
    window.addEventListener("eip6963:announceProvider", function (e) { var d = e.detail; if (!d || !d.info) return; if (evmProviders.some(function (p) { return p.info.uuid === d.info.uuid; })) return; evmProviders.push(d); if (current && !isSol()) renderWallets(); });
    window.dispatchEvent(new Event("eip6963:requestProvider"));
  } catch (x) {}
  function solWallets() {
    var ws = standardWallets().filter(function (w) { return w && w.features && w.features["solana:signAndSendTransaction"] && w.features["standard:connect"]; });
    var out = ws.map(function (w) { return { kind: "standard", wallet: w, name: w.name || "Wallet", icon: w.icon || "" }; });
    var inj = window.phantom && window.phantom.solana;
    if (inj && inj.isPhantom && !out.some(function (o) { return /phantom/i.test(o.name); })) out.push({ kind: "injected", provider: inj, name: "Phantom", icon: "" });
    out.sort(function (a, b) { return (/phantom/i.test(b.name) ? 1 : 0) - (/phantom/i.test(a.name) ? 1 : 0); });
    return out;
  }
  function evmWallets() {
    var list = evmProviders.slice();
    if (!list.length && window.ethereum) list.push({ info: { uuid: "window.ethereum", name: (window.ethereum.isMetaMask ? "MetaMask" : window.ethereum.isRabby ? "Rabby" : "Browser wallet"), icon: "" }, provider: window.ethereum });
    // Phantom's EVM provider cannot sign on Robinhood Chain — hide it there.
    if (current && current.chain && current.chain.key === "robinhood") list = list.filter(function (p) { return !/phantom/i.test(p.info.name); });
    return list.map(function (p) { return { kind: "evm", provider: p.provider, name: p.info.name, icon: p.info.icon || "", uuid: p.info.uuid }; });
  }
  var walletList = [];
  function renderWallets() {
    var host = $("[data-tu-wallets]"), note = $("[data-tu-wallet-note]"), dl = $("[data-tu-deeplink]");
    if (!host || !current) return;
    walletList = isSol() ? solWallets() : evmWallets();
    host.innerHTML = walletList.map(function (w, i) { return '<button type="button" class="tu-wbtn' + (i === 0 ? " is-pri" : "") + '" data-tu-wallet="' + i + '"' + (walletBusy ? " disabled" : "") + '>' + (w.icon ? '<img src="' + w.icon + '" alt="">' : "") + (w.name === "Phantom" ? "Pay with Phantom" : "Pay with " + w.name) + "</button>"; }).join("");
    if (!walletList.length) {
      note.textContent = isSol() ? "No Solana wallet was detected in this browser. Use “Send from any wallet”, or open this page inside the Phantom app." : "No wallet extension was detected in this browser. Use “Send from any wallet” (any exchange or wallet works), or open this page in your wallet’s browser.";
      if (dl) { dl.hidden = !(isSol() && isMobile && current.pay_url); if (!dl.hidden) dl.href = "https://phantom.app/ul/browse/" + encodeURIComponent(current.pay_url) + "?ref=" + encodeURIComponent(location.origin); }
      // switch to the manual tab so the user is never stuck
      var mt = $('[data-tu-tab="manual"]'); if (mt) mt.click();
    } else {
      note.textContent = current.sponsored ? "Your wallet signs the transfer; Vantis pays the network fee." : ("Your wallet sends " + current.amount_ui + " " + tokenSym() + " and pays the network fee" + (isSol() ? " (about $0.001)." : "."));
      if (dl) dl.hidden = true;
      var wt = $('[data-tu-tab="wallet"]'); if (wt && !wt.classList.contains("is-on")) wt.click();
    }
  }

  function payWithWallet(i) {
    var w = walletList[Number(i)]; if (!w || !current || walletBusy) return;
    walletBusy = true; renderWallets(); err($("[data-tu-pay-err]"), "");
    var done = function () { walletBusy = false; renderWallets(); };
    if (isSol()) paySolana(w).then(done, function (e) { done(); walletFail(e); });
    else payEvm(w).then(done, function (e) { done(); walletFail(e); });
  }
  function walletFail(e) {
    var msg = String(e && (e.message || e) || "");
    if (/reject|4001|denied|cancel/i.test(msg)) msg = "Cancelled in your wallet.";
    else if (/no USDC|payer_has_no_usdc_account/i.test(msg)) msg = "That wallet holds no " + tokenSym() + " on this network.";
    else if (/insufficient/i.test(msg)) msg = "Not enough " + tokenSym() + " (or gas) in that wallet.";
    else if (msg.length > 160) msg = msg.slice(0, 160) + "…";
    err($("[data-tu-pay-err]"), msg || "That did not work.");
    stepMark("connect", "on");
  }
  function afterSubmit(res) {
    if (res.j && res.j.status === "credited") { showCredited(res.j); return; }
    if (res.j && res.j.status === "pending") { status("Payment sent — confirming on the network…", false); stepMark("confirm", "on"); return; }
    throw new Error(res.j && (res.j.message || res.j.error) || "not_confirmed");
  }

  function paySolana(w) {
    stepMark("connect", "on");
    var account = null, addr = null;
    var connectP = w.kind === "standard"
      ? w.wallet.features["standard:connect"].connect().then(function (r) { var accs = (r && r.accounts) || w.wallet.accounts || []; var acc = null; for (var i = 0; i < accs.length; i++) { if ((accs[i].chains || []).indexOf(current.chain) >= 0) { acc = accs[i]; break; } } acc = acc || accs[0]; if (!acc) throw new Error("no_account"); account = acc; addr = acc.address; })
      : w.provider.connect().then(function (r) { addr = (r && r.publicKey ? r.publicKey : w.provider.publicKey).toString(); });
    return connectP.then(function () {
      stepMark("approve", "on");
      return post("/api/topup/" + current.id + "/solana/tx", { payer: addr, sponsored: !!current.sponsored });
    }).then(function (res) {
      if (!res.ok) throw new Error(res.j && res.j.message ? res.j.message : (res.j && res.j.error) || "tx_build_failed");
      var bytes = b64bytes(res.j.tx_base64);
      if (res.j.sponsored) {
        var signedP = (w.kind === "standard" && w.wallet.features["solana:signTransaction"])
          ? w.wallet.features["solana:signTransaction"].signTransaction({ transaction: bytes, account: account, chain: res.j.chain }).then(function (out) { return new Uint8Array(out[0].signedTransaction); })
          : w.provider.signTransaction({ serialize: function () { return bytes; }, message: { version: 0 }, signatures: [], version: 0 }).then(function (t) { return new Uint8Array(t.serialize()); });
        return signedP.then(function (signed) { stepMark("confirm", "on"); return post("/api/topup/" + current.id + "/solana/submit", { signed_tx: bytesB64(signed) }); });
      }
      var sendP = w.kind === "standard"
        ? w.wallet.features["solana:signAndSendTransaction"].signAndSendTransaction({ transaction: bytes, account: account, chain: res.j.chain, options: { preflightCommitment: "confirmed" } }).then(function (out) { var s = out[0].signature; return typeof s === "string" ? s : b58(new Uint8Array(s)); })
        : w.provider.signAndSendTransaction({ serialize: function () { return bytes; }, message: { version: 0 }, signatures: [], version: 0 }, { preflightCommitment: "confirmed" }).then(function (r) { return r.signature; });
      return sendP.then(function (sig) { stepMark("confirm", "on"); return post("/api/topup/" + current.id + "/solana/confirm", { signature: sig }); });
    }).then(afterSubmit);
  }

  function hexChain(id) { return "0x" + Number(id).toString(16); }
  function payEvm(w) {
    var p = w.provider, from = null, ch = current.chain;
    stepMark("connect", "on");
    return p.request({ method: "eth_requestAccounts" }).then(function (accs) {
      from = accs && accs[0]; if (!from) throw new Error("no_account");
      return p.request({ method: "eth_chainId" });
    }).then(function (cid) {
      if (String(cid).toLowerCase() === hexChain(ch.chain_id)) return;
      return p.request({ method: "wallet_switchEthereumChain", params: [{ chainId: hexChain(ch.chain_id) }] }).catch(function (e) {
        if (e && (e.code === 4902 || /unrecognized|not added|4902/i.test(String(e.message || "")))) return p.request({ method: "wallet_addEthereumChain", params: [ch.add_chain] });
        throw e;
      });
    }).then(function () {
      return p.request({ method: "eth_chainId" }).then(function (cid) { if (String(cid).toLowerCase() !== hexChain(ch.chain_id)) throw new Error("Please switch your wallet to " + ch.name + " and try again."); });
    }).then(function () {
      stepMark("approve", "on");
      return p.request({ method: "eth_sendTransaction", params: [{ from: from, to: current.token.address, data: current.calldata, value: "0x0" }] });
    }).then(function (hash) {
      stepMark("confirm", "on"); status("Payment sent — confirming on " + ch.name + "…", false);
      return post("/api/topup/" + current.id + "/evm/confirm", { tx_hash: hash });
    }).then(afterSubmit);
  }

  // ── polling + timer ──
  function stopPoll() { if (pollTimer) { clearInterval(pollTimer); pollTimer = null; } }
  function startPoll() {
    stopPoll(); var n = 0;
    pollTimer = setInterval(function () {
      if (!current || ++n > 240) { stopPoll(); return; }
      fetch("/api/topup/" + current.id + "/status").then(function (r) { return r.json(); }).then(function (j) {
        if (j.status === "credited") showCredited(j);
        else if (j.status === "expired" || j.status === "canceled" || j.status === "failed") { stopPoll(); stopTimer(); status("This request is " + j.status + ". Start a new one.", false); }
      }).catch(function () {});
    }, 4000);
  }
  function stopTimer() { if (timerTimer) { clearInterval(timerTimer); timerTimer = null; } }
  function startTimer() {
    stopTimer(); var el = $("[data-tu-timer]"); if (!el || !current || !current.expires_at) return;
    var end = Date.parse(current.expires_at);
    var tick = function () { var left = Math.max(0, Math.floor((end - Date.now()) / 1000)); el.textContent = String(Math.floor(left / 60)).padStart(2, "0") + ":" + String(left % 60).padStart(2, "0"); el.classList.toggle("is-low", left < 180); if (left <= 0) stopTimer(); };
    tick(); timerTimer = setInterval(tick, 1000);
  }
  function showCredited(j) {
    stepMark("done", "done"); stopPoll(); stopTimer();
    var url = j.explorer_url || (j.topup && j.topup.explorer_url);
    var bal = j.balance || null;
    var where = bal ? (bal.lane ? " — " + bal.lane.name + " now " + money(bal.lane.usd) : " — Main now " + money(bal.main)) : " to your card";
    status("Credited " + money(current.amount_usd) + where, true);
    var dn = $("[data-tu-done]"); if (dn) { dn.innerHTML = "Done. " + money(current.amount_usd) + " in prepaid inference credits is on your card." ; dn.hidden = false; }
    var ex = $("[data-tu-explorer]"); if (ex && url) { ex.href = url; ex.hidden = false; }
    var cn = $("[data-tu-cancel]"); if (cn) cn.textContent = "Close";
    var tm = $("[data-tu-timer]"); if (tm) tm.textContent = "paid";
    if (bal && bal.total != null) { var t = $("[data-tu-total]"); if (t) t.textContent = money(bal.total); }
    if (bal && bal.main != null) { var m = $("[data-tu-main]"); if (m) m.textContent = money(bal.main); }
    if (bal && bal.total != null && bal.main != null) { var l = $("[data-tu-lanes]"); if (l) l.textContent = money(bal.total - bal.main); }
    try { if (typeof window.load === "function") window.load(); } catch (e) {}
    window.dispatchEvent(new CustomEvent("vc-topup-credited"));
  }

  if (preload) { showPay(preload, false); }
})();
</script>`;

// ── Return page (Stripe success/cancel; also the sandbox's landing) ──

const PAGE_CSS = `
.tu-main { max-width:640px; margin:0 auto; padding:56px 24px 96px; }
.tu-card { border:1px solid var(--line); border-radius:16px; padding:28px; background:var(--white); }
.tu-k { font-family:var(--mono); font-size:11px; letter-spacing:.14em; text-transform:uppercase; color:var(--muted); }
.tu-big { font-family:var(--display); font-size:34px; font-weight:700; margin-top:8px; letter-spacing:-0.02em; }
.tu-p { color:var(--body); font-size:14.5px; line-height:1.6; margin-top:10px; }
.tu-row { display:flex; justify-content:space-between; gap:12px; font-size:13px; padding:8px 0; border-top:1px solid var(--line); }
.tu-row span:first-child { color:var(--muted); }
.tu-cta { display:inline-block; margin-top:22px; font-family:var(--display); font-weight:700; font-size:13px; background:var(--ink); color:var(--green); border-radius:999px; padding:10px 18px; border:1px solid var(--ink); cursor:pointer; }
.tu-cta--ghost { background:var(--white); color:var(--ink); border-color:var(--line-strong); margin-left:8px; }
.tu-band { font-family:var(--mono); font-size:11px; letter-spacing:.14em; text-transform:uppercase; background:#FDF4E3; color:#8A5A00; padding:8px 12px; border-radius:8px; display:inline-block; margin-bottom:16px; }
.tu-fine { font-size:11.5px; color:var(--muted); line-height:1.55; margin-top:14px; }
/* the wallets page owns .btnx; standalone pages need their own copy */
.btnx { font-family:var(--display); font-weight:700; font-size:12.5px; border:1px solid var(--line-strong); background:var(--white); color:var(--ink); border-radius:999px; padding:9px 16px; cursor:pointer; display:inline-block; transition:border-color .15s, opacity .15s; }
.btnx:hover { border-color:var(--ink); }
.btnx--pri { background:var(--ink); color:var(--green); border-color:var(--ink); }
.btnx--pri:disabled { opacity:.35; cursor:default; }
` + TOPUP_LIVE_CSS;

function shell(title: string, body: string, viewer: NavViewer, extraHead = ""): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(title)} &mdash; Vantis Cards</title>
<meta name="robots" content="noindex">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<style>${SYSTEM_CSS}${PAGE_CSS}</style>
${extraHead}
</head>
<body>
${appNav(viewer, "wallets")}
<main class="tu-main">${body}</main>
</body>
</html>`;
}

export function topupReturnHtml(t: any | null, mode: "return" | "cancel" | "cancel-unconfirmed" | "missing", viewer: NavViewer = null): string {
  if (!t || mode === "missing") {
    return shell("Top-up", `<div class="tu-card"><div class="tu-k">Top-up</div><div class="tu-big">Nothing to show</div><p class="tu-p">This top-up could not be found on your account.</p><a class="tu-cta" href="/wallets#wl-topup">Back to your card</a></div>`, viewer);
  }
  const credited = t.status === "credited";
  const canceled = t.status === "canceled";
  const dead = t.status === "failed" || t.status === "expired";
  const unconfirmedCancel = mode === "cancel-unconfirmed" && !credited && !canceled && !dead;
  const head = credited ? "Credits are on your card" : canceled ? "Payment cancelled" : dead ? `Top-up ${t.status}` : unconfirmedCancel ? "Checkout left open" : "Waiting for the payment to settle";
  const sub = credited
    ? `${money(t.amount_usd)} in prepaid inference credits was added${t.destination === "main" ? " to Main" : " to your lane"}. Closed-loop, non-refundable, spendable only on the rail.`
    : canceled ? "No charge was made. You can start another top-up any time."
    : dead ? (t.error ? `Reason: ${t.error}` : "The payment did not complete.")
    : unconfirmedCancel ? "We could not close the card checkout just now, so it may still complete for a while. If you did not pay, nothing is charged; if you do pay it, the credits land here automatically."
    : "Card payments usually settle within a few seconds. This page checks automatically; you can also head back to your card.";
  const rows = [
    ["Reference", t.id],
    ["Method", t.provider === "solana" ? "USDC on Solana" : t.provider === "sandbox" ? "Card (sandbox)" : "Card"],
    ["Amount", money(t.amount_usd)],
    ["Status", t.status],
    ...(t.signature ? [["Transaction", `<a href="${esc(t.explorer_url || "#")}" target="_blank" rel="noopener" style="color:var(--green-ink)">${esc(String(t.signature).slice(0, 20))}…</a>`]] : []),
  ].map(([k, v]) => `<div class="tu-row"><span>${esc(String(k))}</span><span class="num">${k === "Transaction" ? v : esc(String(v))}</span></div>`).join("");
  const poll = !credited && !canceled && !dead
    ? `<script>(function(){var n=0;var t=setInterval(function(){if(++n>60){clearInterval(t);return;}fetch("/api/topup/${esc(t.id)}/status").then(function(r){return r.json();}).then(function(j){if(j.status==="credited"||j.status==="failed"||j.status==="expired"||j.status==="canceled"){clearInterval(t);location.reload();}}).catch(function(){});},3000);})();</script>`
    : "";
  return shell("Top-up", `<div class="tu-card">
  ${t.provider === "sandbox" ? `<div class="tu-band">Sandbox — no charge was made</div>` : ""}
  <div class="tu-k">Top-up</div>
  <div class="tu-big">${esc(head)}</div>
  <p class="tu-p">${esc(sub)}</p>
  <div style="margin-top:18px;">${rows}</div>
  <a class="tu-cta" href="/wallets#wl-topup">Back to your card</a>
  <p class="tu-fine">Prepaid inference credits are ledger entries on your Vantis Card. They are not a deposit, are not redeemable for money, and are consumed only by inference on the rail.</p>
</div>${poll}`, viewer);
}

// ── Sandbox checkout: a mock of a hosted card page, clearly labelled ──

export function sandboxCheckoutHtml(t: any, user: any, viewer: NavViewer = null): string {
  const handle = user?.x_username ? `@${user.x_username}` : "your card";
  return shell("Sandbox checkout", `<div class="tu-card">
  <div class="tu-band">Sandbox — this page charges nothing</div>
  <div class="tu-k">Vantis Card inference credits</div>
  <div class="tu-big">${money(t.amount_usd)}</div>
  <p class="tu-p">Prepaid inference credits for ${esc(handle)}. Closed-loop and non-refundable: spendable only on the Vantis rail, no monetary value, not redeemable for cash.</p>
  <div style="margin-top:18px;">
    <div class="tu-row"><span>Card number</span><span class="num">4242 4242 4242 4242</span></div>
    <div class="tu-row"><span>Expiry · CVC</span><span class="num">12 / 34 · 567</span></div>
    <div class="tu-row"><span>Reference</span><span class="num">${esc(t.id)}</span></div>
    <div class="tu-row"><span>Status</span><span class="num">${esc(t.status)}</span></div>
  </div>
  ${t.status === "credited" ? `<a class="tu-cta" href="/topup/return?id=${esc(t.id)}&session_id=sandbox">Already paid — view receipt</a>`
    : (t.status === "canceled" || t.status === "expired" || t.status === "failed") ? `<p class="tu-p">This top-up is ${esc(t.status)} — nothing can be paid here.</p><a class="tu-cta" href="/wallets#wl-topup">Back to your card</a>`
    : `
  <form method="post" action="/topup/sandbox/${esc(t.id)}/pay" style="display:inline"><button type="submit" class="tu-cta">Pay ${money(t.amount_usd)} (test)</button></form>
  <form method="post" action="/topup/sandbox/${esc(t.id)}/cancel" style="display:inline"><button type="submit" class="tu-cta tu-cta--ghost">Cancel</button></form>`}
  <p class="tu-fine">When Stripe keys are configured this step is Stripe's hosted checkout instead; the rest of the flow (settlement, ledger, receipt) is identical.</p>
</div>`, viewer);
}

// ── Session-less pay page (Phantom in-app browser / shared to a phone) ──
// The same pay step + script as the wallets section, preloaded with one
// request. It can pay only this row; the owner was fixed at create.
export function topupPayPageHtml(payload: any, t: any): string {
  const data = esc(JSON.stringify(payload));
  const dead = t.status === "expired" || t.status === "canceled" || t.status === "failed";
  const netName = payload.provider === "solana" ? ("Solana" + (payload.cluster === "devnet" ? " devnet" : "")) : (payload.chain?.name || "network");
  const sym = payload.provider === "solana" ? "USDC" : (payload.token?.symbol || "USDC");
  const body = `<section id="wl-topup" data-topup-live="1" data-tu-preload="${data}" data-tu-cfg="{}">
  <div class="tu-k">Vantis Card top-up</div>
  <div class="tu-big">${esc(payload.amount_ui)} ${esc(sym)} <span style="font-size:16px; color:var(--muted); font-weight:500;">on ${esc(netName)}</span></div>
  <p class="tu-p">for ${money(payload.amount_usd)} in prepaid inference credits${payload.sponsored ? " · network fee covered by Vantis" : ""}. Closed-loop, non-refundable, no monetary value.</p>
  ${dead ? `<p class="tu-err">This request is ${esc(t.status)}. Start a new one from your card.</p>` : ""}
  <div class="tu-card tu-flow" style="margin-top:18px;">${payStepHtml()}</div>
  <p class="tu-fine">${payload.cluster === "devnet" || payload.chain?.testnet ? "TEST NETWORK — test tokens only. " : ""}Prepaid inference credits are ledger entries on a Vantis Card: not a deposit, not redeemable for money, consumed only by inference on the rail. <a href="/wallets#wl-topup" style="color:var(--green-ink)">Back to the card</a></p>
</section>`;
  return shell("Pay", body, null).replace("</main>", `</main>${TOPUP_LIVE_JS}`);
}
