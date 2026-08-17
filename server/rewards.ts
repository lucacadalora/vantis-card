// Rewards & referrals — the campaign system's own page. The economy already
// exists (campaign.ts: follow/share tasks, referral bonus with cap, global
// budget brake); until now it only surfaced inside the account island. This
// page is plain server HTML off the same primitives: taskState() rows,
// the /r/<handle> link, and the user's Campaign:% ledger history.

import { SYSTEM_CSS, ARROW, appNav, type NavViewer } from "./system";
import { esc } from "./pages";
import { campaignConfig, taskState, referralEarnedUsd, campaignRemainingUsd } from "./campaign";
import { getDb } from "./db";

const RW_CSS = `
.rw-main { padding:52px 24px 96px; }
.rw-head h1 { font-size:clamp(30px,4.6vw,42px); }
.rw-sub { color:var(--body); font-size:15px; margin-top:10px; max-width:62ch; }
.rw-panel { border:1px solid var(--line); border-radius:22px; background:var(--white); padding:24px 26px; margin-top:20px; }
.rw-panel:first-of-type { margin-top:34px; }
.rw-k { font-family:var(--mono); font-size:11px; font-weight:600; letter-spacing:0.14em; text-transform:uppercase; color:var(--muted); }
.rw-row { display:flex; align-items:center; justify-content:space-between; gap:18px; padding:16px 0; border-bottom:1px solid var(--line); }
.rw-row:last-child { border-bottom:0; padding-bottom:0; }
.rw-row-n { font-weight:600; color:var(--ink); font-size:14.5px; }
.rw-row-d { color:var(--body); font-size:13px; margin-top:4px; max-width:52ch; line-height:1.5; }
.rw-claim { font-family:var(--display); font-size:13.5px; font-weight:600; color:var(--ink); background:none; border:1.5px solid var(--ink); border-radius:999px; height:38px; padding:0 20px; cursor:pointer; flex-shrink:0; }
.rw-claim:hover { background:var(--ink); color:var(--green); }
.rw-done { font-family:var(--mono); font-size:10px; font-weight:600; letter-spacing:0.12em; text-transform:uppercase; color:var(--green-ink); flex-shrink:0; }
.rw-paused { font-family:var(--mono); font-size:11px; color:var(--muted); border:1px solid var(--line); border-radius:10px; padding:10px 13px; margin-top:14px; line-height:1.5; }
.rw-link-row { display:flex; align-items:center; gap:10px; margin-top:14px; flex-wrap:wrap; }
.rw-link { font-family:var(--mono); font-size:12.5px; color:var(--ink); background:var(--wash); border:1px solid var(--line); border-radius:10px; padding:10px 13px; word-break:break-all; flex:1; min-width:220px; }
.rw-copy { font-family:var(--mono); font-size:10px; letter-spacing:0.08em; text-transform:uppercase; color:var(--muted); border:1px solid var(--line); border-radius:14px; padding:9px 14px; background:none; cursor:pointer; flex-shrink:0; }
.rw-copy:hover { color:var(--ink); border-color:var(--ink); }
.rw-meter { margin-top:16px; }
.rw-meter-k { display:flex; justify-content:space-between; font-family:var(--mono); font-size:10.5px; letter-spacing:0.06em; text-transform:uppercase; color:var(--muted); margin-bottom:7px; }
.rw-meter-k b { color:var(--ink); font-weight:600; }
.rw-bar { height:4px; background:var(--wash); border-radius:2px; overflow:hidden; }
.rw-bar i { display:block; height:100%; background:var(--green); }
.rw-hist { margin-top:6px; }
.rw-h-row { display:flex; align-items:baseline; justify-content:space-between; gap:14px; padding:11px 0; border-bottom:1px solid var(--line); }
.rw-h-row:last-child { border-bottom:0; }
.rw-h-d { font-size:13px; color:var(--body); min-width:0; }
.rw-h-t { font-family:var(--mono); font-size:10.5px; color:var(--muted); margin-top:3px; }
.rw-h-a { font-family:var(--mono); font-size:12.5px; color:var(--green-ink); font-variant-numeric:tabular-nums; flex-shrink:0; }
.rw-empty { font-size:13px; color:var(--muted); padding:6px 0; }
.rw-note { font-size:12.5px; color:var(--body); line-height:1.55; margin-top:14px; padding-top:14px; border-top:1px solid var(--line); }
`;

export function rewardsHtml(user: any, card: any, opts: { viewer: NavViewer; menuCard?: string }): string {
  const cfg = campaignConfig();
  const tasks = taskState(user.id);
  const earned = referralEarnedUsd(user.id);
  const remaining = campaignRemainingUsd();
  const active = remaining > 0;
  const handle = String(card.handle || "").replace(/^@/, "");
  const refLink = `https://card.vantis.sh/r/${handle}`;
  const shareUrl = `https://card.vantis.sh/card/${handle}?via=${handle}`;
  const followIntent = `https://twitter.com/intent/follow?screen_name=${encodeURIComponent(cfg.xHandle)}`;
  const shareIntent = `https://twitter.com/intent/tweet?text=${encodeURIComponent("My one-of-one Vantis Card:")}&url=${encodeURIComponent(shareUrl)}`;
  const pct = Math.max(0, Math.min(100, (earned / Math.max(cfg.refCapUsd, 0.01)) * 100));

  const history: any[] = getDb()
    .query("SELECT description, amount_usd, created_at FROM credit_transactions WHERE user_id = ? AND description LIKE 'Campaign:%' ORDER BY datetime(created_at) DESC LIMIT 20")
    .all(user.id) as any[];

  const taskRow = (key: "follow" | "share", name: string, desc: string, reward: number, intent: string) => `
      <div class="rw-row">
        <div>
          <div class="rw-row-n">${esc(name)}</div>
          <div class="rw-row-d">${esc(desc)}</div>
        </div>
        ${tasks[key]
          ? `<span class="rw-done">Claimed</span>`
          : active
            ? `<button type="button" class="rw-claim" data-task="${key}" data-open="${esc(intent)}">Claim $${reward.toFixed(2)}</button>`
            : `<span class="rw-done" style="color:var(--muted);">Paused</span>`}
      </div>`;

  const histRows = history.length
    ? history.map((h) => {
        const label = String(h.description || "").replace(/^Campaign:\s*/, "");
        const when = String(h.created_at || "").slice(0, 16).replace("T", " ");
        return `<div class="rw-h-row">
          <div class="rw-h-d">${esc(label)}<div class="rw-h-t">${esc(when)} UTC</div></div>
          <div class="rw-h-a">+$${Number(h.amount_usd || 0).toFixed(2)}</div>
        </div>`;
      }).join("")
    : `<div class="rw-empty">Nothing earned yet &mdash; the tasks above are the fastest start.</div>`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Rewards &amp; referrals &mdash; Vantis Cards</title>
<meta name="robots" content="noindex">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<style>${SYSTEM_CSS}${RW_CSS}</style>
<script defer src="/consent.js?v=1"></script>
</head>
<body>
${appNav(opts.viewer, null, { menuCard: opts.menuCard })}
<main class="wrap rw-main">
  <header class="rw-head">
    <h1>Rewards &amp; referrals</h1>
    <p class="rw-sub">Earn credits on your card &mdash; tasks pay once, referrals pay for every builder you bring who scores. Credits are closed-loop: they spend on inference, they never leave the card.</p>
  </header>

  <section class="rw-panel">
    <div class="rw-k">Tasks</div>
    ${taskRow("follow", "Follow on X", `@${cfg.xHandle} — claim $${cfg.taskFollowUsd.toFixed(2)} in credits, once.`, cfg.taskFollowUsd, followIntent)}
    ${taskRow("share", "Share your card", `Post your card on X — claim $${cfg.taskShareUsd.toFixed(2)} in credits, once.`, cfg.taskShareUsd, shareIntent)}
    ${active ? "" : `<div class="rw-paused">The campaign budget is fully allocated &mdash; tasks and referral bonuses are paused. Anything already claimed stays yours.</div>`}
    <div id="rw-err" class="rw-paused" style="display:none;"></div>
  </section>

  <section class="rw-panel">
    <div class="rw-k">Referrals</div>
    <div class="rw-row" style="border-bottom:0; padding-bottom:6px;">
      <div>
        <div class="rw-row-n">Your link</div>
        <div class="rw-row-d">$${cfg.refBonusUsd.toFixed(2)} per referred builder whose card scores ${cfg.refMinScore}+ &mdash; up to $${cfg.refCapUsd.toFixed(0)} total. It never changes their grant.</div>
      </div>
    </div>
    <div class="rw-link-row">
      <span class="rw-link" id="rw-link">${esc(refLink)}</span>
      <button type="button" class="rw-copy" id="rw-copy" data-link="${esc(refLink)}">Copy link</button>
    </div>
    <div class="rw-meter">
      <div class="rw-meter-k"><span>Earned</span><b>$${earned.toFixed(2)} of $${cfg.refCapUsd.toFixed(0)}</b></div>
      <div class="rw-bar"><i style="width:${pct.toFixed(1)}%;"></i></div>
    </div>
    ${user.referred_by ? `<p class="rw-note">You were referred by @${esc(String(user.referred_by).replace(/^@/, ""))}.</p>` : ""}
  </section>

  <section class="rw-panel">
    <div class="rw-k">History</div>
    <div class="rw-hist">${histRows}</div>
  </section>
</main>
<script>
(function () {
  var copy = document.getElementById("rw-copy");
  if (copy) copy.addEventListener("click", function () {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(copy.getAttribute("data-link") || "").then(function () {
      var o = copy.textContent; copy.textContent = "Copied";
      setTimeout(function () { copy.textContent = o; }, 1400);
    });
  });
  var err = document.getElementById("rw-err");
  document.querySelectorAll(".rw-claim").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var task = btn.getAttribute("data-task");
      var open = btn.getAttribute("data-open");
      if (open) window.open(open, "_blank", "noopener");
      btn.disabled = true;
      fetch("/api/task/claim", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ task: task })
      }).then(function (r) {
        return r.json().catch(function () { return {}; }).then(function (j) {
          if (r.ok || (r.status === 409 && j.error === "already_claimed")) {
            var s = document.createElement("span");
            s.className = "rw-done";
            s.textContent = "Claimed";
            btn.replaceWith(s);
          } else if (j.error === "campaign_budget_exhausted") {
            btn.remove();
            if (err) { err.style.display = "block"; err.textContent = "The campaign budget is fully allocated — tasks are paused. Anything already claimed stays yours."; }
          } else {
            btn.disabled = false;
            if (err) { err.style.display = "block"; err.textContent = "That claim did not go through — try again in a moment."; }
          }
        });
      }).catch(function () {
        btn.disabled = false;
        if (err) { err.style.display = "block"; err.textContent = "That claim did not go through — try again in a moment."; }
      });
    });
  });
})();
</script>
</body>
</html>`;
}
