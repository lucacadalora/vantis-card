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

/* ── buttons: full pills, per BytePlus ── */
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

/* inner feature tiles (the BytePlus 2x2 inside a bento card) */
.tiles { display:grid; grid-template-columns:1fr 1fr; gap:10px; width:100%; }
.tile { background:rgba(10,10,10,0.07); border-radius:12px; padding:16px 14px; text-align:center; }
.bcard--ink .tile { background:rgba(255,255,255,0.06); }
.tile-k { font-size:13px; font-weight:600; }
.tile-s { font-size:11px; color:rgba(10,10,10,0.6); margin-top:3px; }
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
@media (max-width: 620px) {
  .sec { padding:60px 0; }
  .sec--tight { padding:44px 0; }
  .hero { padding:44px 0 40px; }
  .wrap, .nav-in { padding:0 18px; }
  .navlinks { display:none; }
  .proof, .steps, .cat-grid { grid-template-columns:1fr; }
  .cat-i { padding:0; border-left:none; }
  .cat, .bcard { padding:26px 22px; }
  .devpanel-copy { padding:34px 24px; }
  .sechead { flex-direction:column; align-items:flex-start; gap:14px; }
  .btnrow .btn { flex:1 1 auto; }
}

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior:auto; }
  * { animation-duration:.001ms !important; animation-iteration-count:1 !important; transition-duration:.001ms !important; }
}
`;

export const ARROW = `<svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9M8.5 4.5L12 8l-3.5 3.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
