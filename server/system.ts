// The Vantis Cards design system — BytePlus's structural vocabulary
// (sticky white nav, pill buttons, alternating section wash, dark developer
// panel, bento pair, grouped catalogue, trust strip, closing CTA band) built
// on Vantis tokens: ink #0A0A0A, signal green #09F875 as an accent only,
// Space Grotesk for display, Inter for body.

export const SYSTEM_CSS = `
:root {
  --green:#09F875;
  --green-ink:#0B7A3E;        /* accessible green for text on light */
  --ink:#0A0A0A;
  --panel:#0C0D0E;            /* dark developer panel ground */
  --white:#FFFFFF;
  --wash:#F4F6F4;             /* the alternating section wash */
  --line:#E4E6E2;             /* hairline */
  --line-strong:#D3D6D1;
  --body:#4C5055;             /* body copy on light */
  --muted:#6A6F74;            /* captions, labels — 5.3:1 on white, clears AA */
  --display:'Space Grotesk',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
  --sans:'Inter','Helvetica Neue',-apple-system,BlinkMacSystemFont,Arial,sans-serif;
  --mono:'SF Mono',ui-monospace,Menlo,Consolas,monospace;
  --nav-h:64px;
  --ease:cubic-bezier(.23,1,.32,1);
}

* { margin:0; padding:0; box-sizing:border-box; }
html { scroll-behavior:smooth; }
body {
  font-family:var(--sans); background:var(--white); color:var(--ink);
  -webkit-font-smoothing:antialiased; font-size:16px; line-height:1.6;
}
a { color:inherit; text-decoration:none; }
img, svg { max-width:100%; }
.vmark { height:1em; width:auto; display:inline-block; vertical-align:-0.09em; }

/* ── layout ── */
.wrap { max-width:1200px; margin:0 auto; padding:0 24px; }
.sec { padding:96px 0; }
.sec--tight { padding:64px 0; }
.sec--wash { background:var(--wash); }
.sec--ink { background:var(--ink); color:var(--white); }

/* ── type ── */
.eyebrow {
  font-family:var(--mono); font-size:11px; font-weight:600; letter-spacing:0.16em;
  text-transform:uppercase; color:var(--muted);
}
.eyebrow--green { color:var(--green-ink); }
.eyebrow--onDark { color:rgba(255,255,255,0.62); }
h1, h2, h3 { font-family:var(--display); font-weight:700; letter-spacing:-0.02em; line-height:1.08; }
h1 { font-size:clamp(34px, 5.4vw, 60px); }
h2 { font-size:clamp(26px, 3.4vw, 40px); }
h3 { font-size:clamp(18px, 1.6vw, 21px); letter-spacing:-0.01em; line-height:1.25; }
.lede { font-size:clamp(15px, 1.25vw, 18px); color:var(--body); line-height:1.62; }
.lede--onDark { color:rgba(255,255,255,0.72); }
.mark { background:var(--green); color:var(--ink); padding:0 .16em; }
.num { font-family:var(--display); font-weight:700; font-variant-numeric:tabular-nums; }

/* ── section headers: heading left, link right, aligned on the baseline ── */
.sechead { display:flex; align-items:flex-end; justify-content:space-between; gap:24px; margin-bottom:36px; }
.sechead .lede { margin-top:12px; max-width:62ch; }
.arrowlink {
  font-size:14px; font-weight:500; color:var(--ink); white-space:nowrap;
  display:inline-flex; align-items:center; gap:7px; padding:6px 0;
}
.arrowlink svg { transition:transform .2s var(--ease); }
.foot .brand { padding:8px 0; }
.arrowlink:hover svg { transform:translateX(3px); }
.arrowlink--onDark { color:var(--white); }

/* ── buttons: full pills, per the reference design ── */
.btn {
  display:inline-flex; align-items:center; justify-content:center; gap:9px;
  height:46px; padding:0 24px; border-radius:999px; border:1px solid transparent;
  font-family:var(--display); font-size:15px; font-weight:600; cursor:pointer;
  white-space:nowrap; transition:transform .16s var(--ease), background .16s, opacity .16s;
}
.btn:active { transform:scale(.975); }
.btn--primary { background:var(--ink); color:var(--green); }
.btn--primary:hover { background:#1C1C1A; }
.btn--ghost { background:var(--white); color:var(--ink); border-color:var(--line-strong); }
.btn--ghost:hover { border-color:var(--ink); }
.btn--onDark { background:var(--white); color:var(--ink); }
.btn--onDark:hover { background:#EFEFEA; }
.btn--sm { height:38px; padding:0 18px; font-size:14px; }
.btnrow { display:flex; flex-wrap:wrap; gap:12px; }

/* ── announcement bar (the reference design’s slim promo strip) ── */
.announce {
  background:var(--ink); color:var(--white);
  display:flex; align-items:center; justify-content:center; gap:14px;
  padding:9px 44px 9px 18px; position:relative; text-align:center;
}
.announce-t { font-size:13px; line-height:1.4; }
.announce-t b { font-weight:600; color:var(--green); }
.announce-cta {
  font-family:var(--display); font-size:12px; font-weight:600;
  border:1px solid rgba(255,255,255,0.35); border-radius:999px; padding:8px 14px;
  white-space:nowrap; transition:background .16s, border-color .16s;
}
.announce-cta:hover { background:var(--white); color:var(--ink); border-color:var(--white); }
.announce-x {
  position:absolute; right:12px; top:50%; transform:translateY(-50%);
  width:28px; height:28px; display:flex; align-items:center; justify-content:center;
  border:none; background:none; color:rgba(255,255,255,0.6); cursor:pointer; font-size:16px; line-height:1;
}
.announce-x:hover { color:var(--white); }
@media (max-width:620px) {
  .announce { flex-direction:column; gap:7px; padding:10px 40px; }
  .announce-t { font-size:12px; }
}

/* ── sticky nav ── */
.nav {
  position:sticky; top:0; z-index:50; height:var(--nav-h);
  background:rgba(255,255,255,0.88); backdrop-filter:blur(12px);
  border-bottom:1px solid var(--line);
}
.nav-in { max-width:1200px; margin:0 auto; padding:0 24px; height:100%; display:flex; align-items:center; justify-content:space-between; gap:20px; }
.brand { display:inline-flex; align-items:center; gap:10px; font-family:var(--display); font-weight:700; font-size:16px; letter-spacing:0.03em; padding:8px 0; }
.brand .vmark { height:19px; }
.brand .sub { color:var(--muted); font-weight:500; }
.navlinks { display:flex; align-items:center; gap:26px; }
.navlinks a { font-size:14px; font-weight:500; color:var(--body); padding:11px 0; display:inline-block; }
.navlinks a:hover { color:var(--ink); }
.navactions { display:flex; align-items:center; gap:14px; }

/* ── hero ── */
.hero { padding:72px 0 56px; }
.hero-grid { display:grid; grid-template-columns:1.04fr 0.96fr; gap:56px; align-items:center; }
.hero h1 { margin:14px 0 20px; }
.hero .lede { max-width:46ch; }
.hero .btnrow { margin-top:30px; }
.hero-note { margin-top:16px; font-size:13px; color:var(--muted); }
.hero-visual { display:flex; align-items:center; justify-content:center; min-height:320px; }

/* ── proof row under the hero: hairline above each item ── */
.proof { display:grid; grid-template-columns:repeat(4,1fr); gap:28px; padding-bottom:8px; }
.proof-i { border-top:1px solid var(--line-strong); padding-top:16px; }
.proof-k { font-size:12px; color:var(--muted); letter-spacing:0.01em; }
.proof-v { margin-top:7px; font-size:24px; }
.proof-v.green { color:var(--green-ink); }
.proof-s { margin-top:5px; font-size:12px; color:var(--muted); }

/* ── the dark developer panel ── */
.devpanel {
  background:var(--panel); border-radius:22px; overflow:hidden; color:var(--white);
  display:grid; grid-template-columns:0.86fr 1.14fr; align-items:stretch;
}
.devpanel-copy { padding:52px 44px; display:flex; flex-direction:column; justify-content:center; }
.devpanel-copy h2 { color:var(--white); margin:14px 0 16px; }
.devpanel-copy .btnrow { margin-top:28px; }
.devpanel-code {
  background:#08090A; border-left:1px solid rgba(255,255,255,0.07);
  padding:26px 0 26px 26px; display:flex; flex-direction:column; gap:18px; min-width:0;
}
.codeblk { min-width:0; }
.codeblk-h {
  font-family:var(--mono); font-size:10px; letter-spacing:0.16em; text-transform:uppercase;
  color:rgba(255,255,255,0.4); margin-bottom:10px;
}

/* ── bento pair ── */
.bento { display:grid; grid-template-columns:1fr 1fr; gap:20px; }
.bcard {
  border-radius:22px; padding:36px; display:flex; flex-direction:column;
  min-height:460px; border:1px solid var(--line);
}
.bcard--light { background:var(--white); }
.bcard--green { background:linear-gradient(150deg,#0AF77A 0%,#06DA6B 100%); border-color:transparent; color:var(--ink); }
.bcard--ink { background:var(--ink); border-color:transparent; color:var(--white); }
.bcard-art { flex:1; display:flex; align-items:center; justify-content:center; margin-bottom:28px; min-height:150px; }
.bcard h3 { margin:12px 0 10px; font-size:23px; }
.bcard .lede { font-size:15px; }
.bcard--ink .lede { color:rgba(255,255,255,0.7); }
.bcard--green .lede { color:rgba(10,10,10,0.72); }

/* inner feature tiles (the reference 2x2 inside a bento card) */
.tiles { display:grid; grid-template-columns:1fr 1fr; gap:10px; width:100%; }
.tile { background:rgba(255,255,255,0.42); border-radius:12px; padding:16px 14px; text-align:center; }
.bcard--ink .tile { background:rgba(255,255,255,0.06); }
.tile-k { font-size:13px; font-weight:600; }
.tile-s { font-size:11px; color:rgba(10,10,10,0.66); margin-top:3px; }
.bcard--ink .tile-s { color:rgba(255,255,255,0.55); }

/* ── grouped catalogue rows ── */
.cat { background:var(--white); border:1px solid var(--line); border-radius:22px; padding:36px; }
.cat + .cat { margin-top:20px; }
.cat-head { margin-bottom:26px; }
.cat-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:0; }
.cat-i { padding:0 22px; border-left:1px solid var(--line); }
.cat-i:first-child { padding-left:0; border-left:none; }
.cat-n { display:flex; align-items:center; gap:9px; font-family:var(--display); font-size:17px; font-weight:700; }
.cat-b {
  font-family:var(--mono); font-size:9px; font-weight:700; letter-spacing:0.1em;
  background:var(--ink); color:var(--green); padding:3px 7px; border-radius:4px;
}
.cat-d { margin-top:8px; font-size:13.5px; color:var(--body); line-height:1.55; }
.cat-m { margin-top:10px; font-family:var(--mono); font-size:12px; color:var(--green-ink); font-weight:600; }

/* ── steps ── */
.steps { display:grid; grid-template-columns:repeat(4,1fr); gap:20px; counter-reset:s; }
.step { border-top:2px solid var(--ink); padding-top:18px; }
.step-n { font-family:var(--mono); font-size:12px; color:var(--muted); }
.step h3 { margin:10px 0 8px; font-size:19px; }
.step p { font-size:14px; color:var(--body); line-height:1.6; }

/* ── the ladder: unequal rungs, so a 5x grant difference reads as 5x ── */
.ladder { margin-top:8px; }
.rung {
  display:grid; grid-template-columns:190px 1fr 130px 190px; align-items:center;
  column-gap:24px; padding:0 30px;
}
.rung--whale { background:var(--ink); color:var(--white); border-radius:var(--r-card, 20px); height:132px; margin-bottom:12px; }
.rung--plain { border-top:1px solid var(--line); padding-left:0; padding-right:30px; }
.rung--b { height:104px; } .rung--e { height:92px; } .rung--n { height:84px; }
.rung-name { font-family:var(--display); font-weight:700; text-transform:uppercase; letter-spacing:0.04em; font-size:20px; }
.rung--whale .rung-name { font-size:24px; }
.rung-desc { font-size:14px; line-height:1.5; color:var(--body); }
.rung--whale .rung-desc { color:rgba(255,255,255,0.62); }
.rung-score { font-family:var(--mono); font-size:13px; color:var(--muted); }
.rung--whale .rung-score { color:rgba(255,255,255,0.5); }
.rung-grant { text-align:right; }
.rung-grant .g { font-family:var(--mono); font-weight:700; font-size:22px; letter-spacing:-0.01em; }
.rung--whale .rung-grant .g { font-size:40px; color:var(--green); }
.rung--b .rung-grant .g { font-size:30px; } .rung--e .rung-grant .g { font-size:26px; }
.rung-grant .t { font-family:var(--mono); font-size:11px; color:var(--muted); margin-top:3px; }
.rung--whale .rung-grant .t { color:rgba(255,255,255,0.5); }
.ladder-caps { margin-top:26px; display:grid; gap:6px; }
.ladder-caps p { font-size:13.5px; color:var(--muted); }

/* ── operating guarantees: positive, each checkable elsewhere on the page ── */
.guarantees { border-top:1px solid var(--line); border-bottom:1px solid var(--line); padding:28px 0; }
.glist { display:flex; flex-wrap:wrap; align-items:center; justify-content:center; row-gap:12px; }
.gitem { font-family:var(--mono); font-size:12px; text-transform:uppercase; letter-spacing:0.08em; color:var(--muted); }
.gitem + .gitem::before { content:''; display:inline-block; width:1px; height:12px; background:var(--line); margin:0 20px; vertical-align:-1px; }

/* ── plain terms: the compliance block as a designed component ── */
.terms { display:grid; grid-template-columns:220px 1fr; column-gap:40px; align-items:start; }
.terms-l { position:sticky; top:96px; }
.terms-l h3 { font-size:28px; margin-top:12px; max-width:200px; }
.terms-r { max-width:780px; }
.tt-head, .tt-row { display:grid; grid-template-columns:1fr 1px 1fr; column-gap:32px; }
.tt-head { padding-bottom:12px; border-bottom:1px solid rgba(10,10,10,0.4); }
.tt-h { font-family:var(--mono); font-size:11px; text-transform:uppercase; letter-spacing:0.14em; }
.tt-h.a { color:var(--ink); } .tt-h.b { color:var(--muted); }
.tt-row { border-top:1px solid var(--line); padding:18px 0; }
.tt-row:first-of-type { border-top:none; }
.tt-div { background:var(--line); }
.tt-a { font-size:15px; line-height:1.55; color:var(--ink); }
.tt-a b { font-weight:600; }
.tt-b { font-size:14px; line-height:1.55; color:var(--body); }
.tt-note { margin-top:32px; font-size:15px; line-height:1.75; color:var(--body); max-width:780px; }
.tt-note a { color:var(--body); text-decoration:underline; text-underline-offset:3px; }

/* ── ink closing band + ink footer: the last screenful is the loudest ── */
.band { background:var(--ink); color:var(--white); padding:90px 0; text-align:center; }
.band h2 { color:var(--white); max-width:720px; margin:0 auto 16px; }
.band .lede { color:rgba(255,255,255,0.72); max-width:560px; margin:0 auto 32px; }
.btn--band { background:var(--green); color:var(--ink); height:52px; padding:0 32px; font-size:16px; }
.btn--band:hover { background:#0AFF7E; }
.band-note { margin-top:18px; font-family:var(--mono); font-size:12px; color:rgba(255,255,255,0.5); }
.foot--ink { background:var(--ink); color:var(--white); border-top:1px solid rgba(255,255,255,0.1); padding:56px 0 40px; }
.foot--ink .brand { color:var(--white); }
.foot--ink .brand .sub { color:rgba(255,255,255,0.5); }
.foot-cols { display:grid; grid-template-columns:1.4fr repeat(3, 1fr); gap:32px; margin-bottom:40px; }
.foot-bl { font-size:13px; color:rgba(255,255,255,0.55); margin-top:12px; max-width:34ch; line-height:1.6; }
.foot-ct { font-family:var(--mono); font-size:10.5px; letter-spacing:0.14em; text-transform:uppercase; color:rgba(255,255,255,0.42); margin-bottom:14px; }
.foot-col a { display:block; font-size:13.5px; color:rgba(255,255,255,0.78); padding:8px 0; }
.foot-col a:hover { color:var(--white); }
.foot-legal { border-top:1px solid rgba(255,255,255,0.1); padding-top:22px; font-size:12px; color:rgba(255,255,255,0.5); line-height:1.7; }
.foot-legal a { color:rgba(255,255,255,0.7); text-decoration:underline; text-underline-offset:2px; }
.foot-bot { display:flex; justify-content:space-between; gap:20px; flex-wrap:wrap; margin-top:16px; font-size:11.5px; color:rgba(255,255,255,0.38); }

/* ── trust strip ── */
.trust { display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:10px 30px; }
.trust-i { font-family:var(--mono); font-size:11.5px; letter-spacing:0.08em; color:var(--muted); text-transform:uppercase; }

/* ── closing CTA band ── */
.cta { text-align:center; }
.cta h2 { margin-bottom:14px; }
.cta .lede { margin:0 auto 28px; max-width:52ch; }
.cta .btnrow { justify-content:center; }

/* ── footer ── */
.foot { border-top:1px solid var(--line); padding:40px 0 56px; background:var(--white); }
.foot-top { display:flex; justify-content:space-between; align-items:flex-start; gap:28px; flex-wrap:wrap; margin-bottom:26px; }
.foot-links { display:flex; gap:24px; flex-wrap:wrap; }
.foot-links a { font-size:13.5px; color:var(--body); padding:8px 0; display:inline-block; }
.foot-links a:hover { color:var(--ink); }
.legal { font-size:12px; color:var(--muted); line-height:1.7; max-width:none; }
.legal a { color:var(--body); text-decoration:underline; text-underline-offset:2px; }

/* ── responsive ── */
@media (max-width: 1000px) {
  .hero-grid { grid-template-columns:1fr; gap:44px; }
  .hero .lede { max-width:none; }
  .devpanel { grid-template-columns:1fr; }
  .devpanel-code { border-left:none; border-top:1px solid rgba(255,255,255,0.07); padding:24px 0 24px 22px; }
  .bento { grid-template-columns:1fr; }
  .bcard { min-height:0; }
  .cat-grid { grid-template-columns:1fr 1fr; gap:26px 0; }
  .cat-i:nth-child(odd) { padding-left:0; border-left:none; }
  .steps { grid-template-columns:1fr 1fr; }
  .proof { grid-template-columns:1fr 1fr; gap:22px; }
}
@media (max-width: 900px) {
  .rung { grid-template-columns:1fr auto; row-gap:6px; column-gap:16px; padding:22px 24px; height:auto !important; }
  .rung--plain { padding-left:0; padding-right:0; }
  .rung-desc { grid-column:1 / -1; order:3; }
  .rung-score { order:4; grid-column:1; }
  .rung-grant { order:2; }
  .terms { grid-template-columns:1fr; row-gap:26px; }
  .terms-l { position:static; }
  .foot-cols { grid-template-columns:1fr 1fr; }
}
@media (max-width: 620px) {
  .sec { padding:60px 0; }
  .tt-head, .tt-row { grid-template-columns:1fr; row-gap:8px; }
  .tt-div { display:none; }
  .tt-head .tt-h.b { display:none; }
  .tt-b::before { content:'Not: '; font-weight:600; color:var(--ink); }
  .glist { justify-content:flex-start; }
  .gitem + .gitem::before { margin:0 14px; }
  .foot-cols { grid-template-columns:1fr; gap:24px; }
  .band { padding:64px 0; }
  .btn--band { width:100%; }
  .sec--tight { padding:44px 0; }
  .hero { padding:44px 0 40px; }
  .wrap, .nav-in { padding:0 18px; }
  .navlinks { display:none; }
  .nav-in { gap:10px; }
  .navactions { gap:8px; min-width:0; }
  .navactions > .arrowlink, .navactions > .btn--ghost { display:none; }
  .navactions > .btn--primary { height:36px; padding:0 14px; font-size:12px; }
  .brand { min-width:0; }
  .brand .sub { overflow:hidden; text-overflow:ellipsis; }
  .proof, .steps, .cat-grid { grid-template-columns:1fr; }
  .cat-i { padding:0; border-left:none; }
  .cat, .bcard { padding:26px 22px; }
  .devpanel-copy { padding:34px 24px; }
  .sechead { flex-direction:column; align-items:flex-start; gap:14px; }
  .btnrow .btn { flex:1 1 auto; }
}

/* ── header bell: credit-history feed ── */
.bellwrap { position:relative; display:inline-flex; }
.bellbtn { width:36px; height:36px; border-radius:999px; border:1px solid var(--line-strong); background:var(--white); display:inline-flex; align-items:center; justify-content:center; cursor:pointer; transition:border-color .15s; padding:0; color:var(--ink); }
.bellbtn:hover { border-color:var(--ink); }
.belldot { position:absolute; top:2px; right:2px; width:9px; height:9px; border-radius:999px; background:var(--green); border:2px solid var(--white); display:none; }
.bellpanel { position:absolute; right:0; top:calc(100% + 12px); width:min(360px, calc(100vw - 32px)); max-height:430px; overflow-y:auto; background:var(--white); border:1px solid var(--line); border-radius:14px; box-shadow:0 24px 70px -24px rgba(10,10,10,.28); z-index:80; display:none; }
.bellpanel.on { display:block; }
.bellhead { position:sticky; top:0; background:var(--white); font-family:var(--mono); font-size:10px; letter-spacing:.12em; text-transform:uppercase; color:var(--muted); padding:14px 16px 10px; border-bottom:1px solid var(--line); display:flex; justify-content:space-between; }
.bellrow { display:flex; align-items:baseline; justify-content:space-between; gap:12px; padding:11px 16px; border-bottom:1px solid var(--line); }
.bellrow:last-child { border-bottom:0; }
.bellrow.unread { background:#F2FCF6; }
.bellrow-d { font-size:12.5px; color:var(--ink); line-height:1.45; }
.bellrow-t { font-family:var(--mono); font-size:10px; color:var(--muted); margin-top:2px; }
.bellrow-a { font-family:var(--mono); font-size:12.5px; font-weight:700; white-space:nowrap; font-variant-numeric:tabular-nums; }
.bellrow-a.pos { color:var(--green-ink); }
.bellrow-a.neg { color:var(--muted); }
.bellempty { padding:22px 16px; font-size:13px; color:var(--muted); }

/* ── appNav: active link + account dropdown ── */
.navlinks a.on { color:var(--ink); text-decoration:underline; text-underline-offset:7px; text-decoration-thickness:1.5px; }
.navdrop { position:relative; }
.navdrop summary {
  list-style:none; cursor:pointer; user-select:none;
  display:inline-flex; align-items:center; gap:7px;
  font-family:var(--mono); font-size:12px; letter-spacing:0.02em; color:var(--ink);
  height:36px; padding:0 14px; border:1px solid var(--line-strong); border-radius:20px; background:var(--white);
  transition:border-color .16s var(--ease);
}
.navdrop summary::-webkit-details-marker { display:none; }
.navdrop summary:hover { border-color:var(--ink); }
.navdrop summary .nd-caret { transition:transform .16s var(--ease); flex-shrink:0; }
.navdrop[open] summary .nd-caret { transform:rotate(180deg); }
.navdrop-menu {
  position:absolute; right:0; top:calc(100% + 10px); min-width:248px;
  background:var(--white); border:1px solid var(--line); border-radius:14px;
  padding:8px; box-shadow:0 14px 36px rgba(10,10,10,0.10); z-index:60;
}
/* the wallet moment: YOUR spinning card tops the menu, click = card page.
   Rules carry .navdrop-menu so they out-rank ".navdrop-menu a". The card
   renders at its NATURAL 400px (CARD_CSS type is tuned to it — smaller
   --card-w overflows the face) then scales down; position:absolute keeps
   the 400px layout box from widening the menu. */
.navdrop-menu .nd-cardlink { display:block; position:relative; height:156px; padding:0; margin:2px 0 4px; border-radius:12px; overflow:visible; }
.navdrop-menu .nd-cardlink:hover { background:none; }
.nd-cardlink .scene { --card-w:400px; position:absolute; top:6px; left:50%; transform:translateX(-50%) scale(.55); transform-origin:top center; margin:0; }
.navdrop-menu a, .navdrop-menu button {
  display:block; width:100%; text-align:left; font-family:var(--sans); font-size:13.5px;
  color:var(--body); padding:10px 12px; border-radius:9px; background:none; border:0; cursor:pointer;
}
.navdrop-menu a:hover, .navdrop-menu button:hover { background:var(--wash); color:var(--ink); }
.nd-sep { height:1px; background:var(--line); margin:7px 4px; }
/* dup rows exist for mobile only — must out-rank ".navdrop-menu a"'s
   display:block (class+element), so the selector carries the menu class */
.navdrop-menu .nd-dup { display:none; }
@media (max-width:620px) {
  .navdrop-menu .nd-dup { display:block; }
  .navdrop summary { padding:0 12px; max-width:130px; }
  .navdrop summary .nd-handle { overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
}

/* ── onboarding stepper: numbered from where THIS user started ── */
.steps { display:flex; align-items:center; flex-wrap:wrap; gap:8px 10px; font-family:var(--mono); font-size:11px; font-weight:600; letter-spacing:0.14em; text-transform:uppercase; }
.stp { color:var(--muted); white-space:nowrap; }
.stp--done { color:var(--green-ink); }
.stp--done::before { content:"\\2713\\00a0"; }
.stp--now { color:var(--ink); text-decoration:underline; text-underline-offset:5px; text-decoration-thickness:1.5px; }
.stp-sep { color:var(--line-strong); }

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior:auto; }
  * { animation-duration:.001ms !important; animation-iteration-count:1 !important; transition-duration:.001ms !important; }
}
`;

export const ARROW = `<svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9M8.5 4.5L12 8l-3.5 3.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

export const V_MARK = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 254" role="img" aria-label="Vantis" class="vmark"><g fill="currentColor"><path d="M20 0 L47 1 L47 213 L238 23 L239 104 L90 253 L0 253 L0 20 Z"/><path d="M238 151 L239 215 L203 253 L134 253 Z"/></g></svg>`;

// Header bell — the credit ledger, one click from any page. Self-contained
// (markup + script); styles live in SYSTEM_CSS. Hides itself for signed-out
// visitors (the history endpoint 401s). Opening marks everything seen.
// Plain string on purpose: no backticks/interpolation so it embeds anywhere.
export const NAV_BELL =
  '<span class="bellwrap" id="bellwrap" style="display:none">' +
  '<button class="bellbtn" id="bellbtn" aria-label="Credit activity" aria-expanded="false">' +
  '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M18 9a6 6 0 1 0-12 0c0 5-2 6-2 6h16s-2-1-2-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.3 19.5a2 2 0 0 0 3.4 0" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>' +
  '<i class="belldot" id="belldot"></i></button>' +
  '<div class="bellpanel" id="bellpanel"><div class="bellhead"><span>Credit activity</span><span id="bellbal"></span></div><div id="bellrows"></div></div>' +
  "</span>" +
  "<script>(function(){" +
  'var w=document.getElementById("bellwrap"),btn=document.getElementById("bellbtn"),dot=document.getElementById("belldot"),panel=document.getElementById("bellpanel"),rowsEl=document.getElementById("bellrows"),balEl=document.getElementById("bellbal");' +
  "if(!w)return;var data=null,seenSent=false;" +
  'function fmtA(n){var s=Math.abs(n)>=0.01?Math.abs(n).toFixed(2):Math.abs(n).toFixed(6);return (n>0?"+$":"\\u2212$")+s}' +
  'function ago(t){var s=(Date.now()-new Date(t.replace(" ","T")+"Z").getTime())/1000;if(s<90)return "just now";if(s<3600)return Math.round(s/60)+"m ago";if(s<86400)return Math.round(s/3600)+"h ago";return Math.round(s/86400)+"d ago"}' +
  "function render(){rowsEl.innerHTML=\"\";if(!data.entries.length){var e=document.createElement(\"div\");e.className=\"bellempty\";e.textContent=\"No credit activity yet — your grant and task rewards will land here.\";rowsEl.appendChild(e);return}" +
  'data.entries.forEach(function(r){var row=document.createElement("div");row.className="bellrow"+(r.unread?" unread":"");var l=document.createElement("div");var d=document.createElement("div");d.className="bellrow-d";d.textContent=r.description;var t=document.createElement("div");t.className="bellrow-t";t.textContent=ago(r.when);l.appendChild(d);l.appendChild(t);var a=document.createElement("div");a.className="bellrow-a "+(r.amount_usd>0?"pos":"neg");a.textContent=fmtA(r.amount_usd);row.appendChild(l);row.appendChild(a);rowsEl.appendChild(row)})}' +
  'fetch("/api/credits/history").then(function(r){if(!r.ok)throw 0;return r.json()}).then(function(d){data=d;w.style.display="inline-flex";balEl.textContent="$"+d.balance_usd.toFixed(2);if(d.unread_count>0)dot.style.display="block"}).catch(function(){w.style.display="none"});' +
  'btn.addEventListener("click",function(ev){ev.stopPropagation();if(!data)return;var open=panel.classList.toggle("on");btn.setAttribute("aria-expanded",open?"true":"false");if(open){render();dot.style.display="none";if(!seenSent){seenSent=true;fetch("/api/credits/seen",{method:"POST"}).catch(function(){})}}});' +
  'document.addEventListener("click",function(ev){if(panel.classList.contains("on")&&!w.contains(ev.target)){panel.classList.remove("on");btn.setAttribute("aria-expanded","false")}});' +
  'document.addEventListener("keydown",function(ev){if(ev.key==="Escape"&&panel.classList.contains("on")){panel.classList.remove("on");btn.setAttribute("aria-expanded","false")}});' +
  "})()</script>";

// ─── appNav: THE navigation. Every public page calls this — nobody
// hand-rolls a <nav>. Three states: anonymous, signed-in-without-card,
// card holder. The label always matches the destination; the active page
// gets an underline so the visitor knows where they stand.
//
// Mobile (≤620px): .navlinks hides, so the carded dropdown carries
// duplicate .nd-dup rows — the full member menu survives on a phone.

const escNav = (s: string) =>
  s.replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]!));

export type NavViewer = { cardHandle: string | null } | null | undefined;
export type NavActive = "overview" | "docs" | "card" | "report" | "wallets" | "onboard" | "reserve" | null;

const ND_CARET = `<svg class="nd-caret" width="11" height="11" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3.5 6l4.5 4.5L12.5 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

export function appNav(viewer: NavViewer, active?: NavActive, opts?: { menuCard?: string }): string {
  const on = (k: string) => (active === k ? ' class="on"' : "");
  const carded = !!viewer?.cardHandle;
  const h = carded ? escNav(String(viewer!.cardHandle).replace(/^@/, "")) : null;
  const vantisLink = `<a class="arrowlink" href="https://vantis.sh">vantis.sh ${ARROW}</a>`;

  // Carded bar carries the working surfaces only (Luca: card and report
  // matter less after onboarding — they live in the account menu, where
  // the card is the spinning object itself, not a text row).
  const links = carded
    ? `<a href="/wallets"${on("wallets")}>Wallets</a>
      <a href="/docs"${on("docs")}>Docs</a>`
    : `<a href="/overview#how"${on("overview")}>How it works</a>
      <a href="/overview#model">Model</a>
      <a href="/overview#tiers">Tiers</a>
      <a href="/docs"${on("docs")}>Docs</a>`;

  // Self-links are noise: the funnel CTA drops on the page it points at —
  // and on /reserve, whose hero IS the funnel entrance (a nav CTA to
  // /onboard there would bypass handle booking).
  const cta = active === "onboard" || active === "reserve" ? "" : viewer
    ? `<a class="btn btn--primary btn--sm" href="/onboard">Finish signing up</a>`
    : `<a class="btn btn--primary btn--sm" href="/onboard">Get your card</a>`;

  const actions = carded
    ? `${vantisLink}${NAV_BELL}<details class="navdrop">
        <summary aria-haspopup="menu"><span class="nd-handle">@${h}</span>${ND_CARET}</summary>
        <div class="navdrop-menu" role="menu">
          ${opts?.menuCard ? `${opts.menuCard}<div class="nd-sep"></div>` : ""}
          <a href="/report">Agent report</a>
          <a href="/account">Account &amp; connections</a>
          <a class="nd-dup" href="/wallets">Wallets</a>
          <a class="nd-dup" href="/docs">Docs</a>
          <a class="nd-dup" href="https://vantis.sh">vantis.sh</a>
          <div class="nd-sep"></div>
          <form method="post" action="/auth/signout"><button type="submit">Sign out</button></form>
        </div>
      </details>
      <script>(function(){var d=document.querySelector(".navdrop");if(!d)return;document.addEventListener("click",function(e){if(d.open&&!d.contains(e.target))d.open=false});document.addEventListener("keydown",function(e){if(e.key==="Escape")d.open=false})})()</script>`
    : viewer
      ? `${vantisLink}${NAV_BELL}${cta}`
      : `${vantisLink}<a class="btn btn--ghost btn--sm" href="/login">Sign in</a>${cta}`;

  return `<nav class="nav">
  <div class="nav-in">
    <a class="brand" href="/">${V_MARK} VANTIS <span class="sub">CARDS</span></a>
    <div class="navlinks">${links}</div>
    <div class="navactions">${actions}</div>
  </div>
</nav>`;
}

// Honest onboarding progress, numbered from where THIS user actually
// started: reservers see four steps, direct sign-ups three. The counter
// never resets — that was the "Step 1 of 2 after two steps" defect.
export function onboardSteps(state: { reserved?: string | null; current: "connect" | "score" }): string {
  const items: Array<[string, "done" | "now" | "next"]> = [];
  if (state.reserved) items.push([`Reserved @${escNav(String(state.reserved).replace(/^@/, ""))}`, "done"]);
  items.push(["Signed in", "done"]);
  items.push(["Connect", state.current === "connect" ? "now" : "done"]);
  items.push(["Score", state.current === "score" ? "now" : "next"]);
  return `<div class="steps" aria-label="Onboarding progress">${items
    .map(([label, st]) => `<span class="stp${st === "done" ? " stp--done" : st === "now" ? " stp--now" : ""}">${label}</span>`)
    .join(`<span class="stp-sep" aria-hidden="true">&middot;</span>`)}</div>`;
}
