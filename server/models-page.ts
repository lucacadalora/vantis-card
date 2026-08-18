// /models — the public catalog.
//
// Every number on this page is read from server/upstream/catalog.ts, which is
// the same object the gateway bills from. There is no second list to keep in
// sync, so the page cannot quote a price the rail does not charge.

import { SYSTEM_CSS, appNav, ARROW, V_MARK, type NavViewer } from "./system";
import { openModels, frontierModels, isAllowlisted, type CatalogModel } from "./upstream";

const esc = (s: string) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));

const MODELS_CSS = `
.mhero { padding:64px 0 40px; }
.mhero h1 { margin:14px 0 18px; }
.mhero .lede { max-width:56ch; }

/* serving strip — what the rail is actually doing right now */
.serving-strip {
  display:flex; flex-wrap:wrap; align-items:center; gap:10px 26px;
  border-top:1px solid var(--line-strong); border-bottom:1px solid var(--line);
  padding:16px 0; margin-top:34px; font-size:13.5px; color:var(--body);
}
.serving-strip .sk { color:var(--muted); }
.serving-strip .sv { font-family:var(--mono); font-size:12.5px; color:var(--ink); font-weight:600; }

/* the catalog table */
.mtable-wrap { overflow-x:auto; -webkit-overflow-scrolling:touch; border:1px solid var(--line); border-radius:20px; background:var(--white); }
.mtable { width:100%; border-collapse:collapse; min-width:780px; }
.mtable th {
  text-align:right; font-size:11px; letter-spacing:0.07em; text-transform:uppercase;
  color:var(--muted); font-weight:600; padding:18px 22px; border-bottom:1px solid var(--line);
  white-space:nowrap;
}
.mtable th:first-child { text-align:left; }
.mtable td { padding:20px 22px; border-bottom:1px solid var(--line); text-align:right; vertical-align:middle; }
.mtable tr:last-child td { border-bottom:none; }
.mtable td:first-child { text-align:left; }
.mtable tbody tr:hover { background:var(--wash); }

.mname { font-family:var(--display); font-weight:700; font-size:17px; letter-spacing:-0.01em; display:flex; align-items:center; gap:10px; flex-wrap:wrap; }
.mid { font-family:var(--mono); font-size:12px; color:var(--muted); margin-top:5px; }
.mvendor { font-size:12.5px; color:var(--body); }
.mblurb { font-size:13px; color:var(--body); line-height:1.5; margin-top:7px; max-width:46ch; }
.mprice { font-family:var(--mono); font-weight:700; font-size:17px; letter-spacing:-0.01em; white-space:nowrap; }
.mprice .u { font-family:var(--sans, inherit); font-weight:500; font-size:11px; color:var(--muted); margin-left:3px; }
.mctx { font-family:var(--mono); font-size:13.5px; color:var(--body); white-space:nowrap; }
.mspeed { font-family:var(--mono); font-size:13.5px; color:var(--body); white-space:nowrap; }
.mspeed .u { font-size:11px; color:var(--muted); }

.mbadge {
  font-family:var(--mono); font-size:10px; letter-spacing:0.06em; text-transform:uppercase;
  font-weight:600; padding:3px 8px; border-radius:999px; white-space:nowrap;
}
.mbadge--default { background:var(--green); color:var(--ink); }
.mbadge--long { background:var(--wash); color:var(--muted); border:1px solid var(--line); }
.mbadge--vision { background:var(--ink); color:var(--white); }
.mbadge--allow { background:#FDF4E3; color:#8A6D3B; border:1px solid #E3CFA1; }
.mbadge--fast { background:#EDF3FD; color:#2E5FA8; border:1px solid #B9CDEA; }
.mcached { font-family:var(--mono); font-size:11.5px; color:var(--muted); margin-top:3px; white-space:nowrap; }
.mcached .u { font-family:var(--sans, inherit); font-size:10.5px; margin-left:3px; }
.mallow { font-family:var(--mono); font-weight:700; font-size:12px; letter-spacing:0.08em; color:#8A6D3B; white-space:nowrap; }

.mnote { margin-top:16px; font-size:13px; color:var(--muted); line-height:1.6; max-width:78ch; }
.mnote code { font-family:var(--mono); font-size:12px; color:var(--ink); }

/* fine print grid */
.finegrid { display:grid; grid-template-columns:repeat(2,1fr); gap:32px 0; margin-top:8px; }
.fine-i { padding:0 26px; border-left:1px solid var(--line); }
.fine-i:nth-child(odd) { padding-left:0; border-left:none; }
.fine-i h3 { font-size:16px; margin:0 0 9px; }
.fine-i p { font-size:13.5px; color:var(--body); line-height:1.6; }

@media (max-width: 1000px) {
  .finegrid { grid-template-columns:1fr; gap:26px; }
  .fine-i { padding:0; border-left:none; }
  .fine-i + .fine-i { border-top:1px solid var(--line); padding-top:24px; }
}
@media (max-width: 620px) {
  .mhero { padding:44px 0 30px; }
  .serving-strip { gap:8px 18px; font-size:12.5px; }
}
`;

const KI = 1024;
const MI = 1024 * 1024;
const fmtCtx = (n: number | null): string => {
  if (!n) return "&mdash;";
  if (n % MI === 0) return `${n / MI}M`;   // 1,048,576 → 1M
  if (n % KI === 0) return `${n / KI}K`;   // 262,144 → 256K
  if (n >= 1e6) return `${(n / 1e6).toFixed(2).replace(/\.?0+$/, "")}M`;
  return `${Math.round(n / 1000)}K`;
};

const fmtRate = (n: number): string => `$${n.toFixed(2)}`;

function row(m: CatalogModel): string {
  const band = m.rate.longContext;
  const gated = isAllowlisted(m);
  // Allowlist rows carry no price: the pool lane is per-account and unmetered,
  // and printing $0.00 on a public pricing page would read as a free tier.
  const price = (n: number) => gated
    ? `<span class="mallow">Allowlist</span>`
    : `<span class="mprice">${fmtRate(n)}</span><span class="u">/1M</span>`;
  // A published cache-read rate rides under the input price: the tier bills
  // prompt-cache reads at it, and a pricing page that hid it would overstate
  // what an agent re-sending its context actually pays.
  const cached = !gated && m.rate.cachedInput != null
    ? `<div class="mcached">${fmtRate(m.rate.cachedInput)}<span class="u">/1M cached</span></div>` : "";
  return `
      <tr>
        <td>
          <div class="mname">${esc(m.label)}${
            m.route === "primary" ? `<span class="mbadge mbadge--default">Default</span>` : ""
          }${m.zdrCapable && m.tier === "public" ? `<span class="mbadge mbadge--fast">Fast tier · ZDR</span>` : ""
          }${m.vision ? `<span class="mbadge mbadge--vision">Image input</span>` : ""}${
            gated ? `<span class="mbadge mbadge--allow">Allowlist</span>` : ""}${
            band ? `<span class="mbadge mbadge--long">Long-context band</span>` : ""}</div>
          <div class="mid">${esc(m.id)}</div>
          <div class="mblurb">${esc(m.blurb)}</div>
        </td>
        <td class="mvendor">${esc(m.vendor)}</td>
        <td class="mspeed">${m.throughput ? `~${m.throughput.tokensPerSec} <span class="u">tok/s</span>` : "&mdash;"}</td>
        <td class="mctx">${fmtCtx(m.contextWindow)}</td>
        <td>${price(m.rate.input)}${cached}</td>
        <td>${price(m.rate.output)}</td>
      </tr>`;
}

function table(models: CatalogModel[]): string {
  return `
    <div class="mtable-wrap">
      <table class="mtable">
        <thead>
          <tr>
            <th>Model</th><th>Vendor</th><th>Speed</th><th>Context</th><th>Input</th><th>Output</th>
          </tr>
        </thead>
        <tbody>${models.map(row).join("")}</tbody>
      </table>
    </div>`;
}

export function modelsPageHtml(d: {
  viewer: NavViewer;
  menuCard?: string;
  serving: string;
  maxOutputTokens: number;
}): string {
  const open = openModels();
  const frontier = frontierModels();
  const cheapest = [...open, ...frontier].filter((m) => !isAllowlisted(m)).sort((a, b) => a.rate.output - b.rate.output)[0];

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Models — Vantis Cards</title>
<meta name="description" content="Every model on the Vantis rail: DeepSeek V4 Flash 0731 and Kimi K3 open weights at published per-token prices, plus the allow-listed frontier GPT-5.x family. One key, one balance, billed on real token counts.">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="canonical" href="https://card.vantis.sh/models">
<script defer src="/consent.js?v=1"></script>
<meta property="og:title" content="Models — Vantis Cards">
<meta property="og:description" content="Open weights at published per-token prices, and the allow-listed frontier GPT family — text and image input — on one key.">
<style>
${SYSTEM_CSS}
${MODELS_CSS}
</style>
</head>
<body>
${appNav(d.viewer, "models", { menuCard: d.menuCard })}

<section class="mhero">
  <div class="wrap">
    <div class="eyebrow">Catalog</div>
    <h1>Models</h1>
    <p class="lede">Open weights and the frontier GPT family on one key and one balance. Every billed rate below is the model vendor&rsquo;s own published list price &mdash; the same number the gateway bills you at, to six decimal places. The frontier family is allow-listed per account and not metered at all.</p>
    <div class="serving-strip">
      <span><span class="sk">Serving now</span> &nbsp;<span class="sv">${esc(d.serving)}</span></span>
      <span><span class="sk">Endpoint</span> &nbsp;<span class="sv">POST /v1/chat/completions</span></span>
      <span><span class="sk">Catalog</span> &nbsp;<span class="sv">${open.length + frontier.length} models</span></span>
    </div>
  </div>
</section>

<section class="sec sec--tight">
  <div class="wrap">
    <div class="sechead">
      <div>
        <div class="eyebrow">Open weights</div>
        <h2>Open source models</h2>
        <p class="lede">Frontier open weights, served through the gateway at the cheapest tokens on the rail &mdash; ${fmtRate(cheapest.rate.output)} per 1M output.</p>
      </div>
    </div>
    ${table(open)}
    <p class="mnote">The default model is what you get when the <code>model</code> field is omitted, and the only route with a failover behind it. <strong>Two tiers, one checkpoint:</strong> the fast tier is the same DeepSeek V4 Flash 0731 build on high-throughput serving (up to 400 tok/s), priced separately at twice the standard rate with prompt-cache reads billed at its cached price. It is also the zero-data-retention route: a call with <code>"zdr": true</code> on either id is served there and billed at the fast rate, and attests itself with <code>X-Vantis-ZDR: honored</code>. Every other id is pinned to a single gateway: if that route is down the call returns an honest 503 rather than quietly answering with a different model or tier. The DeepSeek tiers are <strong>text only</strong> &mdash; send them an image and the gateway refuses with <code>image_input_unsupported</code> rather than letting a model answer about a picture it never received. <strong>Kimi K3</strong> takes image input, runs with reasoning always on (a request that asks to switch it off is refused with <code>reasoning_always_on</code> rather than billed for the pass), and has no zero-data-retention route.</p>
  </div>
</section>

<section class="sec sec--wash sec--tight">
  <div class="wrap">
    <div class="sechead">
      <div>
        <div class="eyebrow">Frontier</div>
        <h2>The GPT-5.x family</h2>
        <p class="lede">The frontier family, served from the rail&rsquo;s own pooled capacity. Access is allow-listed per account &mdash; granted by the operator, not self-serve &mdash; and the lane is not metered: nothing is billed and nothing reaches the burn ledger.</p>
      </div>
    </div>
    ${table(frontier)}
    <p class="mnote">Every chat model in this family takes <strong>image input</strong> as well as text &mdash; pass an <code>image_url</code> content part, the same shape as the OpenAI API; <code>gpt-image-2</code> generates images on <code>POST /v1/images/generations</code>. Calling any of these ids from a key that is not on the allowlist returns <code>403 model_allowlist_only</code>.</p>
  </div>
</section>

<section class="sec sec--tight">
  <div class="wrap">
    <div class="sechead">
      <div>
        <div class="eyebrow">Fine print</div>
        <h2>What these numbers are</h2>
      </div>
    </div>
    <div class="finegrid">
      <div class="fine-i">
        <h3>Published rates, not our markup</h3>
        <p>Every rate here is a published list price &mdash; DeepSeek&rsquo;s own first-party price for the DeepSeek line, the serving gateway&rsquo;s published per-model rate for Kimi K3, OpenAI&rsquo;s for the GPT family. A model we can serve but cannot price does not appear here at all, and the rail has never carried an invented number, because the cost basis is what settles as an on-chain $VANTIS burn.</p>
      </div>
      <div class="fine-i">
        <h3>Billed on real token counts</h3>
        <p>Cost comes from the usage the upstream reports on a completed response, never an estimate. Before dialling out, the gateway reserves the worst case &mdash; every requested output token &mdash; against your balance, and releases the remainder once the real numbers land. Output is capped at ${d.maxOutputTokens.toLocaleString()} tokens per call.</p>
      </div>
      <div class="fine-i">
        <h3>Speed is measured, not claimed</h3>
        <p>The tok/s figures are our own measurement, not a vendor number: median of three 600-token generations per model, run from the gateway on the date shown against each figure (13 August 2026 for most; the fast tier on 17 August; Kimi K3 on 19 August). Reasoning tokens count, because they are billed and they are time on the wire. Treat them as indicative &mdash; shared serverless routes vary with load, and DeepSeek in particular ranged from 62 to 188 tok/s across runs.</p>
      </div>
      <div class="fine-i">
        <h3>One balance across the catalog</h3>
        <p>Your grant is a dollar balance, not a per-model allowance. Spend it on the cheapest open-weights route or the dearest frontier one; the ledger records cost, the $VANTIS retired, and the price snapshot for every call, whichever model served it.</p>
      </div>
    </div>
  </div>
</section>

<section class="sec sec--ink sec--tight">
  <div class="wrap">
    <div class="sechead">
      <div>
        <div class="eyebrow eyebrow--onDark">Get started</div>
        <h2 style="color:var(--white)">Point any OpenAI-compatible client at the endpoint</h2>
        <p class="lede lede--onDark">Set the base URL, pass your card key as a bearer token, and name any model above.</p>
      </div>
      <div class="btnrow">
        <a class="btn btn--onDark" href="/docs/models">Read the model docs ${ARROW}</a>
        <a class="btn btn--ghost" href="/docs">All documentation</a>
      </div>
    </div>
  </div>
</section>

<footer class="foot--ink">
  <div class="wrap">
    <div class="foot-cols">
      <div>
        <a class="brand" href="/">${V_MARK} VANTIS <span class="sub">CARDS</span></a>
        <p class="foot-bl">AI-scored inference credits on the Vantis rail.</p>
      </div>
      <div class="foot-col">
        <div class="foot-ct">Product</div>
        <a href="/onboard">Get your card</a>
        <a href="/overview#how">How it works</a>
        <a href="/overview#tiers">Tiers</a>
      </div>
      <div class="foot-col">
        <div class="foot-ct">Developers</div>
        <a href="/docs">Documentation</a>
        <a href="/v1/models">Catalog (JSON)</a>
        <a href="/burn/stats">Burn stats (JSON)</a>
      </div>
      <div class="foot-col">
        <div class="foot-ct">Vantis</div>
        <a href="https://vantis.sh" target="_blank" rel="noopener">vantis.sh</a>
        <a href="https://vantis.sh/burns" target="_blank" rel="noopener">On-chain burns</a>
        <a href="/overview#terms">Plain terms</a>
      </div>
    </div>
    <div class="foot-legal">
      Virtual credits, not a token sale &mdash; non-transferable, no monetary value, redeemable only against AI inference on the Vantis rail. Per-call burn is a metered ledger, settled on-chain weekly from the public burn reserve &mdash; tracked at <a href="https://vantis.sh/burns" target="_blank" rel="noopener">vantis.sh/burns</a>.
      <div class="foot-bot">
        <span>&copy; 2026 Vantis. Nothing on this page is an offer to sell, or a solicitation of an offer to buy, any asset.</span>
        <span>card.vantis.sh</span>
      </div>
    </div>
  </div>
</footer>
</body>
</html>`;
}

export { MODELS_CSS };
