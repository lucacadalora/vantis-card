// Top-up UI: the live section on /wallets (replaces the placeholder for the
// launch cohort), the Stripe return page, and the sandbox checkout page.
// Light, mono labels, no emoji, no inline handlers (CSP nonce covers inline
// <script> blocks only). Copy never says deposit / wallet / money held.

import { esc } from "../pages";
import { SYSTEM_CSS, appNav, type NavViewer } from "../system";

type Cfg = ReturnType<typeof import("./routes").topupConfigFor>;

const money = (n: number) => `$${Number(n || 0).toFixed(2)}`;

export function topupSectionLive(user: any, cfg: Cfg, mainUsd: number, laneTotal: number): string {
  const card = cfg.card.provider;
  const sol = cfg.solana;
  const cardLabel = card === "stripe" ? (cfg.card.livemode ? "Pay by card" : "Pay by card (test mode)") : card === "sandbox" ? "Pay by card (sandbox)" : "Card — opening soon";
  const solLabel = sol.enabled ? (sol.cluster === "devnet" ? "Pay with USDC — Phantom (devnet)" : "Pay with USDC — Phantom") : "USDC — opening soon";
  const presets = cfg.presets.map((p, i) => `<button type="button" class="tu-preset${i === 1 ? " is-on" : ""}" data-amt="${p}">$${p}</button>`).join("");
  const initial = cfg.presets[1] || cfg.presets[0] || 10;
  const dests = cfg.destinations.map((d) =>
    `<option value="${esc(d.id)}"${d.id === cfg.default_destination ? " selected" : ""}>${esc(d.name)} — ${money(d.usd)}${d.has_live_key ? " · has a live key" : ""}</option>`).join("");
  const hist = cfg.history.length
    ? cfg.history.map((h) => `<div class="tu-hrow"><span class="tu-hwhen">${esc(String(h.created_at).slice(5, 16).replace("T", " "))}</span><span class="tu-hwhat">${esc(h.provider === "solana" ? "USDC" : h.provider === "sandbox" ? "Card · sandbox" : "Card")} · ${money(h.amount_usd)}</span><span class="tu-pill tu-pill--${esc(h.status)}">${esc(h.status)}</span></div>`).join("")
    : `<div class="tu-hempty">No top-ups yet.</div>`;
  const netNote = sol.enabled && sol.cluster === "devnet"
    ? `<p class="tu-fine tu-fine--warn">DEVNET — this rail is wired to Solana devnet: it moves test USDC only, and credits it mints are real on this account. Switch Phantom to Testnet mode (Settings → Developer settings) and get devnet USDC from a faucet to try it.</p>`
    : "";
  return `<section id="wl-topup" style="margin-top:38px; scroll-margin-top:84px;" data-topup-live="1">
  <div class="wl-sec">Top up</div>
  <p class="wl-sub">Buy prepaid inference credits for your card. 1 credit = $1 of inference at list price. Credits are closed-loop and non-refundable: they spend only on the rail, carry no monetary value and never leave the card.</p>
  <div class="dk-topup tu-grid">
    <div class="dk-tu">
      <div class="k">On the card now</div>
      <div class="v num" data-tu-total>${money(mainUsd + laneTotal)}</div>
      <p><span data-tu-main>${money(mainUsd)}</span> in Main, <span data-tu-lanes>${money(laneTotal)}</span> allocated to lanes. Main funds lanes; lanes pay for calls. A top-up lands where you point it.</p>
      <div class="k" style="margin-top:16px;">Recent top-ups</div>
      <div class="tu-hist" data-tu-hist>${hist}</div>
    </div>
    <div class="dk-tu tu-form">
      <div class="k">Amount</div>
      <div class="tu-presets" data-tu-presets>${presets}</div>
      <div class="tu-custom"><span class="tu-cur">$</span><input type="number" inputmode="decimal" min="${cfg.min_usd}" max="${cfg.max_usd}" step="1" value="${initial}" data-tu-amount aria-label="Amount in USD"><span class="tu-lim">min $${cfg.min_usd} · max $${cfg.max_usd}</span></div>
      <div class="k" style="margin-top:14px;">Credit to</div>
      <select class="tu-dest" data-tu-dest aria-label="Destination">${dests}</select>
      <div class="tu-actions">
        <button type="button" class="btnx btnx--pri tu-btn" data-tu-card ${card ? "" : "disabled"}>${esc(cardLabel)}</button>
        <button type="button" class="btnx tu-btn tu-btn--sol" data-tu-sol ${sol.enabled ? "" : "disabled"}>${esc(solLabel)}</button>
      </div>
      <p class="tu-err" data-tu-err hidden></p>
      <p class="tu-fine">Card payments in USD${card === "stripe" ? " via Stripe" : card === "sandbox" ? " — SANDBOX: a mock checkout that charges nothing" : ""}. USDC is settled on Solana from your own wallet; no key ever touches this server. Prepaid credits, closed-loop, non-refundable, no monetary value.</p>
      ${netNote}
    </div>
    <div class="dk-tu tu-pay" data-tu-pay hidden>
      <div class="k">USDC on Solana</div>
      <div class="v" data-tu-pay-amt></div>
      <p data-tu-pay-sub></p>
      <div class="tu-steps">
        <div class="tu-step" data-step="connect"><span class="tu-dot"></span>Connect Phantom</div>
        <div class="tu-step" data-step="approve"><span class="tu-dot"></span>Approve the transfer</div>
        <div class="tu-step" data-step="confirm"><span class="tu-dot"></span>Confirming on Solana</div>
        <div class="tu-step" data-step="done"><span class="tu-dot"></span>Credited</div>
      </div>
      <div class="tu-payactions">
        <button type="button" class="btnx btnx--pri" data-tu-phantom>Open Phantom</button>
        <a class="btnx" data-tu-deeplink hidden target="_blank" rel="noopener">Open in Phantom app</a>
        <button type="button" class="btnx" data-tu-cancel>Cancel</button>
      </div>
      <p class="tu-err" data-tu-pay-err hidden></p>
      <details class="tu-qr"><summary>No Phantom on this device? Scan or open the pay link</summary>
        <div class="tu-qrbox" data-tu-qr></div>
        <a class="tu-paylink" data-tu-paylink target="_blank" rel="noopener">Open in a Solana wallet</a>
        <p class="tu-fine">The QR is a Solana Pay request for the exact amount to the Vantis treasury with a one-time reference. This page keeps checking the chain and credits your card the moment it lands.</p>
      </details>
      <p class="tu-done" data-tu-done hidden></p>
    </div>
  </div>
</section>`;
}

export const TOPUP_LIVE_CSS = `
.tu-grid .dk-tu { display:flex; flex-direction:column; }
.tu-grid .dk-tu[hidden] { display:none !important; }
#wl-topup [hidden] { display:none !important; }
.tu-presets { display:flex; flex-wrap:wrap; gap:8px; margin-top:8px; }
.tu-preset { font-family:var(--mono); font-size:12.5px; font-weight:600; border:1px solid var(--line-strong); background:var(--white); border-radius:999px; padding:8px 13px; min-height:34px; cursor:pointer; }
.tu-preset.is-on { background:var(--ink); color:var(--green); border-color:var(--ink); }
.tu-custom { display:flex; align-items:center; gap:8px; margin-top:10px; }
.tu-cur { font-family:var(--mono); color:var(--muted); }
.tu-custom input { font-family:var(--mono); font-size:15px; width:120px; padding:6px 10px; border:1px solid var(--line-strong); border-radius:8px; }
.tu-lim { font-family:var(--mono); font-size:10.5px; color:var(--muted); }
.tu-dest { font-family:var(--sans); font-size:13px; padding:7px 10px; border:1px solid var(--line-strong); border-radius:8px; margin-top:6px; width:100%; background:var(--white); }
.tu-actions { display:flex; flex-direction:column; gap:8px; margin-top:16px; }
.tu-btn { width:100%; padding:10px 14px; font-size:13px; }
.tu-btn:disabled { opacity:.45; cursor:default; }
.tu-btn--sol { border-color:var(--ink); }
.tu-err { font-family:var(--mono); font-size:11.5px; color:#B42318; margin-top:8px; }
.tu-err.is-note { color:var(--body); font-family:var(--sans); font-size:12.5px; }
.tu-fine { font-size:11.5px; color:var(--muted); line-height:1.55; margin-top:12px; }
.tu-fine--warn { color:#8A5A00; background:#FDF4E3; border-radius:8px; padding:8px 10px; }
.tu-hist { margin-top:6px; display:flex; flex-direction:column; gap:4px; }
.tu-hrow { display:grid; grid-template-columns:auto 1fr auto; gap:10px; align-items:center; font-size:12px; padding:5px 0; border-top:1px solid var(--line); }
.tu-hwhen { font-family:var(--mono); font-size:10.5px; color:var(--muted); }
.tu-hempty { font-size:12px; color:var(--muted); padding:6px 0; }
.tu-pill { font-family:var(--mono); font-size:10px; letter-spacing:.06em; text-transform:uppercase; padding:2px 8px; border-radius:999px; background:var(--wash); color:var(--muted); }
.tu-pill--credited { background:#E6FBEF; color:var(--green-ink); }
.tu-pill--pending, .tu-pill--created, .tu-pill--paid { background:#FDF4E3; color:#8A5A00; }
.tu-pill--failed, .tu-pill--expired, .tu-pill--canceled { background:#FDECEC; color:#B42318; }
.tu-pay .v { color:var(--green-ink); }
.tu-steps { margin-top:12px; display:flex; flex-direction:column; gap:6px; }
.tu-step { font-family:var(--mono); font-size:11.5px; color:var(--muted); display:flex; align-items:center; gap:8px; }
.tu-dot { width:8px; height:8px; border-radius:50%; background:var(--line-strong); display:inline-block; }
.tu-step.is-on { color:var(--ink); }
.tu-step.is-on .tu-dot { background:#E5A100; box-shadow:0 0 0 3px #FDF4E3; }
.tu-step.is-done { color:var(--green-ink); }
.tu-step.is-done .tu-dot { background:var(--green); }
.tu-payactions { display:flex; gap:8px; margin-top:14px; flex-wrap:wrap; }
.tu-qr { margin-top:14px; font-size:12px; }
.tu-qr summary { cursor:pointer; color:var(--body); }
.tu-qrbox { margin-top:10px; width:200px; height:200px; }
.tu-qrbox svg { width:200px; height:200px; display:block; border:1px solid var(--line); border-radius:8px; }
.tu-paylink { display:inline-block; margin-top:8px; font-family:var(--mono); font-size:11.5px; color:var(--green-ink); word-break:break-all; }
.tu-done { margin-top:12px; font-size:13px; color:var(--green-ink); font-weight:600; }
.tu-done a { color:var(--green-ink); text-decoration:underline; }
`;

// Inline, nonce'd by the central injector. Wallet Standard first (raw wire
// bytes go straight to Phantom), then the injected provider as a fallback.
export const TOPUP_LIVE_JS = `<script>
(function () {
  var sec = document.getElementById("wl-topup");
  if (!sec || !sec.getAttribute("data-topup-live")) return;
  var $ = function (s, r) { return (r || sec).querySelector(s); };
  var amountEl = $("[data-tu-amount]"), destEl = $("[data-tu-dest]"), errEl = $("[data-tu-err]");
  var cardBtn = $("[data-tu-card]"), solBtn = $("[data-tu-sol]");
  var pay = $("[data-tu-pay]"), payErr = $("[data-tu-pay-err]"), doneEl = $("[data-tu-done]");
  var busy = false, current = null, pollTimer = null;
  var isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  var preload = null;
  try { preload = JSON.parse(sec.getAttribute("data-tu-preload") || "null"); } catch (e) { preload = null; }
  function err(el, msg, note) { if (!el) return; el.textContent = msg || ""; el.hidden = !msg; el.classList.toggle("is-note", !!note); }
  function money(n) { return "$" + Number(n || 0).toFixed(2); }
  function post(url, body) {
    return fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body || {}) })
      .then(function (r) { return r.json().then(function (j) { return { ok: r.ok, status: r.status, j: j }; }); });
  }
  function amount() { var v = amountEl ? parseFloat(amountEl.value) : NaN; return isFinite(v) ? Math.round(v * 100) / 100 : NaN; }
  sec.addEventListener("click", function (e) {
    var p = e.target.closest("[data-amt]");
    if (p && amountEl) { amountEl.value = p.getAttribute("data-amt"); sec.querySelectorAll(".tu-preset").forEach(function (b) { b.classList.toggle("is-on", b === p); }); }
  });
  amountEl && amountEl.addEventListener("input", function () { sec.querySelectorAll(".tu-preset").forEach(function (b) { b.classList.toggle("is-on", Number(b.getAttribute("data-amt")) === amount()); }); });

  // ── card ──
  cardBtn && cardBtn.addEventListener("click", function () {
    if (busy) return; err(errEl, "");
    var a = amount(); if (!(a > 0)) { err(errEl, "Enter an amount."); return; }
    busy = true; cardBtn.disabled = true; var label = cardBtn.textContent; cardBtn.textContent = "Opening checkout…";
    post("/api/topup/create", { provider: "card", amount_usd: a, destination: destEl.value }).then(function (res) {
      if (!res.ok || !res.j.url) { busy = false; cardBtn.disabled = false; cardBtn.textContent = label; err(errEl, res.j && res.j.message ? res.j.message : "Could not open checkout."); return; }
      window.location.href = res.j.url;
    }).catch(function () { busy = false; cardBtn.disabled = false; cardBtn.textContent = label; err(errEl, "Network error."); });
  });

  // ── solana ──
  function step(name, state) {
    var order = ["connect", "approve", "confirm", "done"], hit = false;
    order.forEach(function (n) {
      var el = pay.querySelector('[data-step="' + n + '"]'); if (!el) return;
      el.classList.remove("is-on", "is-done");
      if (n === name) { el.classList.add(state === "done" ? "is-done" : "is-on"); hit = true; }
      else if (!hit) el.classList.add("is-done");
    });
  }
  function b58(bytes) {
    var A = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz", d = [], s = "";
    for (var i = 0; i < bytes.length; i++) { var c = bytes[i]; for (var j = 0; j < d.length; j++) { c += d[j] << 8; d[j] = c % 58; c = (c / 58) | 0; } while (c > 0) { d.push(c % 58); c = (c / 58) | 0; } }
    for (var k = 0; k < bytes.length && bytes[k] === 0; k++) s += "1";
    for (var q = d.length - 1; q >= 0; q--) s += A[d[q]];
    return s;
  }
  function b64bytes(b64) { var bin = atob(b64), out = new Uint8Array(bin.length); for (var i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i); return out; }
  // Wallet Standard discovery, by hand (the protocol is two events).
  function standardWallets() {
    var found = [];
    var api = { register: function () { for (var i = 0; i < arguments.length; i++) found.push(arguments[i]); return function () {}; } };
    try {
      window.addEventListener("wallet-standard:register-wallet", function (e) { try { e.detail(api); } catch (x) {} });
      window.dispatchEvent(new CustomEvent("wallet-standard:app-ready", { detail: api }));
    } catch (x) {}
    return found;
  }
  function pickPhantom() {
    // Phantom first; any other Wallet Standard Solana wallet (Solflare,
    // Backpack…) works the same way and is offered rather than refused.
    var ws = standardWallets().filter(function (w) { return w && w.features && w.features["solana:signAndSendTransaction"] && w.features["standard:connect"]; });
    var ph = ws.filter(function (w) { return /phantom/i.test(w.name || ""); });
    if (ph.length) return { kind: "standard", wallet: ph[0], name: ph[0].name };
    if (ws.length) return { kind: "standard", wallet: ws[0], name: ws[0].name || "wallet" };
    var inj = window.phantom && window.phantom.solana;
    if (inj && inj.isPhantom) return { kind: "injected", provider: inj, name: "Phantom" };
    return null;
  }
  function stopPoll() { if (pollTimer) { clearInterval(pollTimer); pollTimer = null; } }
  function showCredited(j) {
    step("done", "done");
    var url = j.explorer_url || (j.topup && j.topup.explorer_url);
    var bal = j.balance || null;
    var laneTxt = bal ? (bal.lane ? " — " + bal.lane.name + " now " + money(bal.lane.usd) : " — Main now " + money(bal.main)) : " to your card";
    doneEl.innerHTML = "Credited " + money(current.amount_usd) + laneTxt + (url ? '. <a href="' + url + '" target="_blank" rel="noopener">View on Solana Explorer</a>' : "");
    doneEl.hidden = false;
    var ph = $("[data-tu-phantom]"); if (ph) ph.hidden = true;
    var cn = $("[data-tu-cancel]"); if (cn) cn.textContent = "Done";
    if (bal && bal.total != null) { var t = $("[data-tu-total]"); if (t) t.textContent = money(bal.total); }
    if (bal && bal.main != null) { var m = $("[data-tu-main]"); if (m) m.textContent = money(bal.main); }
    if (bal && bal.total != null && bal.main != null) { var l = $("[data-tu-lanes]"); if (l) l.textContent = money(bal.total - bal.main); }
    stopPoll();
    window.dispatchEvent(new CustomEvent("vc-topup-credited"));
    // the wallets page's own loader re-reads balances and updates the terminal
    try { if (typeof window.load === "function") window.load(); } catch (e) {}
  }
  function startPoll() {
    stopPoll();
    var n = 0;
    pollTimer = setInterval(function () {
      if (!current || ++n > 120) { stopPoll(); return; }
      fetch("/api/topup/" + current.id + "/status").then(function (r) { return r.json(); }).then(function (j) {
        if (j.status === "credited") showCredited(j);
        else if (j.status === "expired" || j.status === "canceled" || j.status === "failed") { stopPoll(); err(payErr, "This top-up is " + j.status + ". Start a new one."); }
      }).catch(function () {});
    }, 3000);
  }
  function showPanel(data, autorun) {
    current = data;
    if (current.status === "expired" || current.status === "canceled" || current.status === "failed") { pay.hidden = true; return; }
    pay.hidden = false; doneEl.hidden = true; err(payErr, "");
    $("[data-tu-pay-amt]").textContent = current.amount_ui + " USDC";
    $("[data-tu-pay-sub]").textContent = "for " + money(current.amount_usd) + " in credits · " + (current.label || "USDC on Solana") + " · reference " + String(current.reference).slice(0, 8) + "…";
    $("[data-tu-qr]").innerHTML = current.qr_svg || "";
    var link = $("[data-tu-paylink]"); link.href = current.solana_pay_url; link.textContent = current.solana_pay_url.length > 64 ? current.solana_pay_url.slice(0, 64) + "…" : current.solana_pay_url;
    var ph = $("[data-tu-phantom]"); if (ph) ph.hidden = false;
    // Phone without an injected wallet: offer the in-app-browser deeplink to
    // the session-less pay page (Phantom's browser has no card session).
    var dl = $("[data-tu-deeplink]");
    if (dl) {
      var noWallet = !pickPhantom();
      dl.hidden = !(isMobile && noWallet && current.pay_url);
      if (!dl.hidden) dl.href = "https://phantom.app/ul/browse/" + encodeURIComponent(current.pay_url) + "?ref=" + encodeURIComponent(location.origin);
    }
    var cn = $("[data-tu-cancel]"); if (cn) cn.textContent = "Cancel";
    if (current.status === "credited") { showCredited({ topup: current }); return; }
    step("connect", "on");
    if (autorun) { pay.scrollIntoView({ behavior: "smooth", block: "nearest" }); }
    startPoll();
    if (autorun) runPhantom();
  }
  if (preload) { showPanel(preload, false); }
  var phantomBusy = false;
  function runPhantom() {
    if (!current || phantomBusy) return; err(payErr, "");
    var w = pickPhantom();
    if (!w) { err(payErr, "Phantom was not detected in this browser. Scan the QR with Phantom on your phone, or open this page inside Phantom's browser.", true); var q = $(".tu-qr"); if (q) q.open = true; return; }
    step("connect", "on");
    var stepEl = pay.querySelector('[data-step="connect"]'); if (stepEl && w.name) stepEl.lastChild.textContent = "Connect " + w.name;
    phantomBusy = true;
    var phBtn2 = $("[data-tu-phantom]"); if (phBtn2) phBtn2.disabled = true;
    var accountAddr = null, account = null;
    var connectP = w.kind === "standard"
      ? w.wallet.features["standard:connect"].connect().then(function (r) { var accs = (r && r.accounts) || w.wallet.accounts || []; var acc = null; for (var i = 0; i < accs.length; i++) { if ((accs[i].chains || []).indexOf(current.chain) >= 0) { acc = accs[i]; break; } } acc = acc || accs[0]; if (!acc) throw new Error("no_account"); account = acc; accountAddr = acc.address; })
      : w.provider.connect().then(function (r) { accountAddr = (r && r.publicKey ? r.publicKey : w.provider.publicKey).toString(); });
    connectP.then(function () {
      step("approve", "on");
      return post("/api/topup/" + current.id + "/solana/tx", { payer: accountAddr });
    }).then(function (res) {
      if (!res.ok) throw new Error(res.j && res.j.message ? res.j.message : (res.j && res.j.error) || "tx_build_failed");
      var bytes = b64bytes(res.j.tx_base64);
      if (w.kind === "standard") {
        return w.wallet.features["solana:signAndSendTransaction"].signAndSendTransaction({ transaction: bytes, account: account, chain: res.j.chain, options: { preflightCommitment: "confirmed" } })
          .then(function (out) { var o = out && out[0]; var sig = o && o.signature; return typeof sig === "string" ? sig : b58(new Uint8Array(sig)); });
      }
      // Injected provider: hand it the raw bytes through the minimal shape it serializes.
      var shim = { serialize: function () { return bytes; }, message: { version: 0 }, signatures: [], version: 0 };
      return w.provider.signAndSendTransaction(shim, { preflightCommitment: "confirmed" }).then(function (r) { return r.signature; });
    }).then(function (sig) {
      step("confirm", "on");
      return post("/api/topup/" + current.id + "/solana/confirm", { signature: sig }).then(function (res) {
        phantomBusy = false; if (phBtn2) phBtn2.disabled = false;
        if (res.j && res.j.status === "credited") { showCredited(res.j); return; }
        if (res.j && res.j.status === "pending") { err(payErr, "Sent. Waiting for confirmation on Solana…", true); startPoll(); return; }
        throw new Error(res.j && (res.j.error || res.j.message) || "not_confirmed");
      });
    }).catch(function (e) {
      phantomBusy = false; if (phBtn2) phBtn2.disabled = false;
      var msg = String(e && (e.message || e) || "");
      if (/reject|4001|denied|cancel/i.test(msg)) msg = "Cancelled in Phantom.";
      else if (/no USDC|payer_has_no_usdc_account/i.test(msg)) msg = "That wallet holds no USDC on this network.";
      else if (/not_found|no_account/i.test(msg)) msg = "Could not read a Solana account from Phantom.";
      else if (msg.length > 140) msg = msg.slice(0, 140) + "…";
      err(payErr, msg || "That did not work.");
      step("connect", "on");
    });
  }
  solBtn && solBtn.addEventListener("click", function () {
    if (busy) return; err(errEl, "");
    var a = amount(); if (!(a > 0)) { err(errEl, "Enter an amount."); return; }
    busy = true; solBtn.disabled = true; var label = solBtn.textContent; solBtn.textContent = "Preparing…";
    post("/api/topup/create", { provider: "solana", amount_usd: a, destination: destEl.value }).then(function (res) {
      busy = false; solBtn.disabled = false; solBtn.textContent = label;
      if (!res.ok) { err(errEl, res.j && res.j.message ? res.j.message : "Could not start a USDC top-up."); return; }
      showPanel(res.j, true);
    }).catch(function () { busy = false; solBtn.disabled = false; solBtn.textContent = label; err(errEl, "Network error."); });
  });
  var phBtn = $("[data-tu-phantom]"); phBtn && phBtn.addEventListener("click", runPhantom);
  var cnBtn = $("[data-tu-cancel]"); cnBtn && cnBtn.addEventListener("click", function () { if (preload) { if (doneEl && !doneEl.hidden) location.reload(); return; } stopPoll(); pay.hidden = true; current = null; if (doneEl && !doneEl.hidden) location.reload(); });
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
// Same panel + script as the wallets section, preloaded with one top-up. It
// can pay only this row; the owner was fixed when the row was created.
export function topupPayPageHtml(payload: any, t: any): string {
  const data = esc(JSON.stringify(payload));
  const dead = t.status === "expired" || t.status === "canceled" || t.status === "failed";
  const body = `<section id="wl-topup" data-topup-live="1" data-tu-preload="${data}">
  <div class="tu-k">Vantis Card top-up</div>
  <div class="tu-big">${esc(payload.amount_ui)} USDC</div>
  <p class="tu-p">for ${money(payload.amount_usd)} in prepaid inference credits · ${esc(payload.label || "USDC on Solana")}. Closed-loop, non-refundable, no monetary value.</p>
  ${dead ? `<p class="tu-err">This top-up is ${esc(t.status)}. Start a new one from your card.</p>` : ""}
  <div class="tu-card tu-pay" data-tu-pay ${dead ? "hidden" : ""} style="margin-top:18px;">
    <div class="tu-k">USDC on Solana</div>
    <div class="v" data-tu-pay-amt style="font-family:var(--display); font-size:24px; font-weight:700; margin-top:5px; color:var(--green-ink);"></div>
    <p class="tu-p" data-tu-pay-sub></p>
    <div class="tu-steps">
      <div class="tu-step" data-step="connect"><span class="tu-dot"></span>Connect Phantom</div>
      <div class="tu-step" data-step="approve"><span class="tu-dot"></span>Approve the transfer</div>
      <div class="tu-step" data-step="confirm"><span class="tu-dot"></span>Confirming on Solana</div>
      <div class="tu-step" data-step="done"><span class="tu-dot"></span>Credited</div>
    </div>
    <div class="tu-payactions">
      <button type="button" class="btnx btnx--pri" data-tu-phantom>Open Phantom</button>
      <a class="btnx" data-tu-deeplink hidden target="_blank" rel="noopener">Open in Phantom app</a>
      <button type="button" class="btnx" data-tu-cancel hidden>Done</button>
    </div>
    <p class="tu-err" data-tu-pay-err hidden></p>
    <details class="tu-qr"><summary>Scan or open the pay link with another wallet</summary>
      <div class="tu-qrbox" data-tu-qr></div>
      <a class="tu-paylink" data-tu-paylink target="_blank" rel="noopener">Open in a Solana wallet</a>
    </details>
    <p class="tu-done" data-tu-done hidden></p>
  </div>
  <p class="tu-fine">${payload.cluster === "devnet" ? "DEVNET — test USDC only; switch your wallet to Testnet mode / Solana Devnet. " : ""}Prepaid inference credits are ledger entries on a Vantis Card: not a deposit, not redeemable for money, consumed only by inference on the rail. <a href="/wallets#wl-topup" style="color:var(--green-ink)">Back to the card</a></p>
</section>`;
  return shell("Pay with USDC", body, null) .replace("</main>", `</main>${TOPUP_LIVE_JS}`);
}
