// GENESIS — Series 001. The first ten Vantis cards on Robinhood Chain,
// each a one-of-one collectible. This module is the single source of
// truth for the set: the marketplace page renders from GENESIS, the
// /api/genesis endpoint serves it as JSON, and when the ERC-721 deploys
// on chain 4663 the same records become token metadata. The wallet
// terminal (/wallets device stage) reads the same endpoint when NFT
// cartridges land there.
//
// Visual rule (no reference cloning): the FUNCTION of top-grade TCG
// collecting — portrait card anatomy, rarity ladder, foil treatments,
// chase hierarchy, stats, flavor — rebuilt entirely in the Vantis
// system: ink, signal green, typographic art, pure-CSS foils. No raster
// art anywhere.
//
// Aug 13, second pass (Luca): page is LIGHT (dark showroom rejected —
// house pages are white/wash; ink stays for CTA band + footer only),
// fonts are now real (self-hosted Space Grotesk/Inter — before this the
// families were declared but never loaded, every page fell back), and
// the card object is a PORTRAIT trading card (63:88) with TCG anatomy:
// name bar, art window, event plate, stat row, flavor, serial line,
// holo seal. Foil escalates by grade: V·PROOF = full-art + iridescent
// rim + V-pattern foil field; F·STRIKE = holo frame; SPECIMEN = ink
// frame, spot foil on the seal.

import { esc } from "./pages";
import { SYSTEM_CSS, V_MARK, appNav, type NavViewer } from "./system";

// ─── The set ───────────────────────────────────────────────────────────

export type GenesisCard = {
  n: number;                 // serial 1..10
  slug: string;              // url-safe id, future tokenURI key
  name: string;
  title: string;             // registry title — the named provenance line
  grade: string;             // grade code, prints on the card corner
  gradeLabel: string;        // grade spelled out
  treatment: string;         // the foil/material, collector-facing name
  inscription: string;       // the event plate line under the art
  stats: Record<string, number>; // 0–100, shared schema across the set
  utility: string[];         // holder perks — never money, credits or yield
  flavor: string;
  artHtml: string;           // art-window content, pure markup + CSS
  status: "unlisted" | "listed" | "reserved" | "settled";
};

// Shared stat schema — the same four axes on every card, so the apex
// card is measurably apex. All values 0–100. Deliberately editorial
// measures (a strike grade, not a service level): nothing here mirrors
// a rail entitlement, so no number on a face reads as an SLA.
export const STAT_KEYS: Array<[string, string, string]> = [
  ["strike", "STR", "Strike"],
  ["finality", "FIN", "Finality"],
  ["provenance", "PRV", "Provenance"],
  ["gravity", "GRV", "Gravity"],
];

export const GENESIS_SERIES = {
  series: "GENESIS / 001",
  chain: "Robinhood Chain",
  chainId: 4663,
  standard: "ERC-721",
  supply: 10,
  contract: null as string | null, // set at deploy; null = pre-deploy
};

// The set — GENESIS, Vantis Set 001. Ten one-of-one artifacts of the
// first monetary events on the Vantis rail, treated as numismatics.
// Each card records one TRUE event, in the event's own numbers
// (31,002 · 999,968,998 · the canonical checksum · chain 4663 — all
// verifiable on-chain). Design settled by a 4-designer / 3-judge blind
// panel, Aug 13 2026; grafts applied from the runner-up sets.
const CANONICAL_ADDR = "0xB6d695d5fbcEbD837f6b9f214c9BeeE8bA90762B";
const addrArt = CANONICAL_ADDR.split("").map((ch) =>
  /[A-F]/.test(ch) ? `<b>${ch}</b>` : ch).join("");

export const GENESIS: GenesisCard[] = [
  {
    n: 1, slug: "first-burn", name: "FIRST BURN", title: "Keeper of Epoch One",
    grade: "V·PROOF", gradeLabel: "Vantis Proof",
    treatment: "Proof Black — full art, iridescent rim",
    inscription: "V · EPOCH 1 · 12 AUG 2026 · TX FINAL",
    stats: { strike: 100, finality: 100, provenance: 100, gravity: 97 },
    utility: [
      "Permanent first position in the Genesis registry — every future set checklist lists this card first",
      "Priority lane on the inference rail for the holding wallet, at the highest tier offered",
      "Standing first slot on the whitelist of every future Vantis drop",
      "A single sealed physical proof print, numbered 1/1, delivered to the holder",
    ],
    flavor: "31,002 gone — the first number the supply ever lost.",
    artHtml: `<div class="fb-num">31,002</div><div class="fb-ash"></div>`,
    status: "unlisted",
  },
  {
    n: 2, slug: "odometer", name: "THE ODOMETER", title: "Witness of the Ninth Digit",
    grade: "F·STRIKE", gradeLabel: "First Strike",
    treatment: "Rolling Silver — live wheels, click motion",
    inscription: "FIRST READ UNDER 1,000,000,000 · 12 AUG 2026",
    stats: { strike: 94, finality: 100, provenance: 98, gravity: 91 },
    utility: [
      "Priority lane on the inference rail for the holding wallet",
      "Terminal skin — Odometer: while this card is slotted, the terminal screen runs the live supply odometer",
      "Whitelist slot for the next Vantis drop",
      "First Strike entry in the Genesis registry",
    ],
    flavor: "Ten digits became nine.",
    artHtml: `<div class="od-k">TOTAL SUPPLY</div>
      <div class="od-win">
        <span class="od-c"><span>9</span></span><span class="od-c"><span>9</span></span><span class="od-c"><span>9</span></span><span class="od-sep">,</span>
        <span class="od-c"><span>9</span></span><span class="od-c"><span>6</span></span><span class="od-c"><span>8</span></span><span class="od-sep">,</span>
        <span class="od-c od-r1"><span class="od-strip"><i>9</i><i>8</i><i>7</i><i>6</i><i>9</i></span></span>
        <span class="od-c od-r2"><span class="od-strip"><i>9</i><i>8</i><i>7</i><i>6</i><i>9</i></span></span>
        <span class="od-c od-r3"><span class="od-strip"><i>8</i><i>7</i><i>6</i><i>5</i><i>8</i></span></span>
      </div>`,
    status: "unlisted",
  },
  {
    n: 3, slug: "canonical", name: "CANONICAL", title: "Holder of the Checksum",
    grade: "F·STRIKE", gradeLabel: "First Strike",
    treatment: "Checksum Foil — letterpressed hex",
    inscription: "CANONICAL CONTRACT · ROBINHOOD CHAIN",
    stats: { strike: 90, finality: 96, provenance: 100, gravity: 84 },
    utility: [
      "Higher rate cap on the inference rail for the holding wallet",
      "Card-back variant — Checksum: the holder's virtual card back renders the canonical address block",
      "Access to the Genesis holder channel",
      "First Strike entry in the Genesis registry",
    ],
    flavor: "There are clones. The checksum settles it.",
    artHtml: `<div class="cn-addr">${addrArt}</div>`,
    status: "unlisted",
  },
  {
    n: 4, slug: "whale", name: "THE WHALE", title: "Bearer of the Sounding Line",
    grade: "F·STRIKE", gradeLabel: "First Strike",
    treatment: "Abyss — depth gradient, one lit point",
    inscription: "DEPTH SOUNDING · 450 CARDS SCORED",
    stats: { strike: 92, finality: 78, provenance: 95, gravity: 70 },
    utility: [
      "Priority lane on the inference rail for the holding wallet",
      "Terminal device face — Abyss: dark hardware variant for the reader",
      "Early access to new catalog models on the rail",
      "First Strike entry in the Genesis registry",
    ],
    flavor: "Four hundred fifty cards. One went this deep.",
    artHtml: `<div class="wh-caustic"></div>
      <div class="wh-scale"><i style="top:8%"></i><i style="top:36%"></i><i style="top:62%"></i></div>
      <span class="wh-lb" style="top:6%">NOISE</span><span class="wh-lb" style="top:34%">EXPLORER</span><span class="wh-lb" style="top:60%">BUILDER</span>
      <span class="wh-pt"></span><span class="wh-call">WHALE &middot; 1 OF 450</span>`,
    status: "unlisted",
  },
  {
    n: 5, slug: "par", name: "PAR", title: "Keeper of the Even Billion",
    grade: "SPECIMEN", gradeLabel: "Specimen",
    treatment: "Mint Proof — the only unblemished face",
    inscription: "TOTAL SUPPLY · EVEN UNTIL 12 AUG 2026",
    stats: { strike: 71, finality: 100, provenance: 96, gravity: 60 },
    utility: [
      "Card-back variant — Mint Proof for the holder's virtual card",
      "Access to the Genesis holder channel",
      "Specimen entry in the Genesis registry",
    ],
    flavor: "One billion, even. Never again.",
    artHtml: `<div class="par-num">1,000,000,000</div>`,
    status: "unlisted",
  },
  {
    n: 6, slug: "friday", name: "FRIDAY", title: "Warden of the Cadence",
    grade: "SPECIMEN", gradeLabel: "Specimen",
    treatment: "Phosphor Dial — the seven-segment week",
    inscription: "EPOCH SETTLES WEEKLY · EVERY FRIDAY",
    stats: { strike: 66, finality: 82, provenance: 90, gravity: 74 },
    utility: [
      "Early access to epoch and settlement views as they ship",
      "Access to the Genesis holder channel",
      "Specimen entry in the Genesis registry",
    ],
    flavor: "Settlement keeps its appointments.",
    artHtml: `<span class="fr-glow"></span><span class="fr-ring"></span><span class="fr-fri">FRI</span>`,
    status: "unlisted",
  },
  {
    n: 7, slug: "ledger", name: "THE LEDGER", title: "Clerk of the Burn Ledger",
    grade: "SPECIMEN", gradeLabel: "Specimen",
    treatment: "Scrolling Ledger — ruled rows in motion",
    inscription: "USD COST → V RETIRED · EVERY CALL",
    stats: { strike: 74, finality: 91, provenance: 97, gravity: 80 },
    utility: [
      "A named provenance line on the public burns page crediting this card",
      "Early access to ledger and burns views as they ship",
      "Access to the Genesis holder channel",
      "Specimen entry in the Genesis registry",
    ],
    flavor: "Every call costs. Every cost is written.",
    artHtml: `<div class="lg-rows"></div>
      <div class="lg-col">0.0421\n0.0009\n0.1207\n0.0053\n0.0186\n0.0044\n0.0770\n0.0012</div>
      <div class="lg-line"><span>DEEPSEEK V4 FLASH</span><i class="lg-cur"></i></div>`,
    status: "unlisted",
  },
  {
    n: 8, slug: "chain-4663", name: "4663", title: "Engraver of 4663",
    grade: "SPECIMEN", gradeLabel: "Specimen",
    treatment: "Microetch Guilloché — interference moiré",
    inscription: "CHAIN ID 4663 · GAS 0.05 GWEI · RECORD HOLDS",
    stats: { strike: 62, finality: 88, provenance: 92, gravity: 55 },
    utility: [
      "Terminal skin — Guilloché: engraved screen frame for the reader",
      "Access to the Genesis holder channel",
      "Specimen entry in the Genesis registry",
    ],
    flavor: "0.05 gwei to make it permanent.",
    artHtml: `<div class="ch-g"></div><div class="ch-num">4663</div>`,
    status: "unlisted",
  },
  {
    n: 9, slug: "terminal", name: "THE TERMINAL", title: "Operator of the Reader",
    grade: "SPECIMEN", gradeLabel: "Specimen",
    treatment: "CRT Phosphor — scanlines, slow breathe",
    inscription: "READ OK · GENESIS 09/10",
    stats: { strike: 58, finality: 40, provenance: 85, gravity: 30 },
    utility: [
      "Unlocks the complete Genesis terminal skin set, all faces",
      "Terminal device face — Phosphor, with the CRT boot screen",
      "Access to the Genesis holder channel",
      "Specimen entry in the Genesis registry",
    ],
    flavor: "Every card meets the reader eventually.",
    artHtml: `<div class="tm-scan"></div><div class="tm-glow"></div>
      <div class="tm-dev"><span class="tm-slot"></span><span class="tm-knob"></span><span class="tm-scr">READ OK</span><span class="tm-v">V</span></div>
      <div class="tm-vig"></div>`,
    status: "unlisted",
  },
  {
    n: 10, slug: "off-register", name: "OFF-REGISTER", title: "Custodian of the Error",
    grade: "SPECIMEN", gradeLabel: "Specimen",
    treatment: "Misprint — the back, struck twice, kept",
    inscription: "MISREGISTERED · RETAINED BY THE MINT",
    stats: { strike: 12, finality: 100, provenance: 88, gravity: 20 },
    utility: [
      "Card-back variant — Misprint for the holder's virtual card",
      "Access to the Genesis holder channel",
      "Specimen entry in the Genesis registry, filed under errors",
    ],
    flavor: "The mint kept its only mistake.",
    artHtml: `<div class="or-frame"></div>
      <span class="or-v or-v2">${V_MARK}</span><span class="or-v or-v1">${V_MARK}</span>
      <div class="or-leg">VANTIS CAR&mdash;<br>ONE OF ONE &middot; AUG&mdash;<br><span class="or-fade">Virtual identity ca</span></div>`,
    status: "unlisted",
  },
];

// Grading-ladder rows for the marketplace table:
// [code, name, population, what earns it]
export const GENESIS_GRADING: Array<[string, string, string, string]> = [
  ["V·PROOF", "Vantis Proof", "1 of 10", "The apex strike. Full-art, iridescent rim, foil field. Reserved for the event that changed the ledger itself — the first burn, epoch one, 12 August 2026."],
  ["F·STRIKE", "First Strike", "3 of 10", "Holo-frame cards recording a fact the chain now carries forever: the supply's ninth digit, the canonical checksum, the only whale ever scored."],
  ["SPECIMEN", "Specimen", "6 of 10", "Ink-frame reference specimens of the working system — the cadence, the ledger, the chain, the reader, the even billion, and the mint's one retained error."],
];

// ─── OG — Series 000, the set before the set ───────────────────────────
// Luca, Aug 13: "make 5 cards for $JTVO jatevo.ai OG, since vantis is
// actually jatevo in the beginning." Five one-of-one heritage cards
// recording where Vantis came from, each in the event's own numbers, all
// verifiable: the pair created 1 Jun 2025 (DexScreener), the SPL mint
// with authority revoked (RugCheck), the x402 rail of Oct 2025 at $0.01
// USDC flat, the jtvo-card repo created AND last pushed 05 Aug 2026
// 09:31 UTC (GitHub — this site is its port), the hold-to-unlock quota
// shipped Jun 2026. Struck in HERITAGE BRASS on the same VSG anatomy so
// the two sets read as one lineage, different age. NOTE: the funnel
// provider-scrub rule (no "jatevo" on landing/onboard/score/card) does
// NOT apply here — the marketplace names Jatevo as ORIGIN, on Luca's
// explicit ask; e2e-live's provider-clean check deliberately excludes
// this page.

export const JTVO_SERIES = {
  series: "OG / 000",
  chain: "Robinhood Chain",
  chainId: 4663,
  standard: "ERC-721",
  supply: 5,
  contract: null as string | null, // set at deploy; null = pre-deploy
};

// $JTVO SPL mint on Solana — authority + freeze revoked, so the address
// itself is the artifact. The uppercase Vs light green: the mark was in
// the mint string before the company existed.
const JTVO_MINT = "9VY2rDbtsBmTsBxoRF8hWSEUKGqnoQoe9V6W3JnjNgfm";
const jtvoMintArt = JTVO_MINT.split("").map((ch) => (ch === "V" ? `<b>${ch}</b>` : ch)).join("");

export const JTVO_OG: GenesisCard[] = [
  {
    n: 1, slug: "og-beginning", name: "IN THE BEGINNING", title: "Bearer of the First Name",
    grade: "OG·PROOF", gradeLabel: "Origin Proof",
    treatment: "Heritage Black — full art, brass initial field",
    inscription: "JATEVO · BEFORE THE V · EST JUN 2025",
    stats: { strike: 86, finality: 100, provenance: 100, gravity: 90 },
    utility: [
      "Permanent first position in the OG registry — the set every Vantis checklist opens with",
      "Priority lane on the inference rail for the holding wallet",
      "Standing whitelist slot on every future OG-series release",
      "A single sealed physical proof print, numbered 1/1, delivered to the holder",
    ],
    flavor: "Before the mark had a name, the name carried the mark.",
    artHtml: `<div class="ogb-word">JATE<b>V</b>O</div><div class="ogb-sub">THE V WAS ALWAYS THERE</div><div class="ogb-est">SOLANA-BORN · JUN 2025</div>`,
    status: "unlisted",
  },
  {
    n: 2, slug: "og-mint", name: "THE MINT", title: "Keeper of the Revoked Key",
    grade: "OG·STRIKE", gradeLabel: "Origin Strike",
    treatment: "Base58 Foil — letterpressed mint, revocation stamp",
    inscription: "SPL MINT · AUTHORITY REVOKED · SUPPLY FIXED",
    stats: { strike: 84, finality: 100, provenance: 96, gravity: 74 },
    utility: [
      "Card-back variant — Base58: the holder's virtual card back renders the $JTVO mint block",
      "Access to the OG holder channel",
      "Origin Strike entry in the OG registry",
    ],
    flavor: "The keys were thrown away first. The supply never moved again.",
    artHtml: `<div class="ogm-addr">${jtvoMintArt}</div><div class="ogm-stamp">AUTHORITY REVOKED</div>`,
    status: "unlisted",
  },
  {
    n: 3, slug: "og-402", name: "FOUR OH TWO", title: "Answerer of the Status Code",
    grade: "OG·STRIKE", gradeLabel: "Origin Strike",
    treatment: "Status Foil — the reserved code, lit",
    inscription: "HTTP 402 · ANSWERED OCT 2025 · $0.01 / CALL",
    stats: { strike: 90, finality: 85, provenance: 93, gravity: 82 },
    utility: [
      "Terminal boot line — Payment Answered: the reader's self-test prints the 402 line for this holder",
      "Early access to x402 top-up lanes when they open on this rail",
      "Access to the OG holder channel",
      "Origin Strike entry in the OG registry",
    ],
    flavor: "The web reserved the code in 1997. Jatevo answered it.",
    artHtml: `<div class="og4-proto">HTTP/1.1</div><div class="og4-code">402</div><div class="og4-req"><s>PAYMENT REQUIRED</s><b>PAYMENT ANSWERED</b></div>`,
    status: "unlisted",
  },
  {
    n: 4, slug: "og-skeleton", name: "THE SKELETON", title: "Custodian of the Source",
    grade: "OG·SPECIMEN", gradeLabel: "Origin Specimen",
    treatment: "Blueprint — dashed strike, never inked",
    inscription: "JTVO-CARD · PUSHED ONCE · 05 AUG 2026 09:31 UTC",
    stats: { strike: 8, finality: 72, provenance: 99, gravity: 61 },
    utility: [
      "Terminal skin — Blueprint: wireframe face for the reader",
      "Access to the OG holder channel",
      "Origin Specimen entry in the OG registry, filed under sources",
    ],
    flavor: "Pushed once. Never ran. Runs everything here.",
    artHtml: `<div class="ogs-card"><i class="ogs-bar"></i><i class="ogs-win"></i><i class="ogs-st"></i><i class="ogs-st"></i><i class="ogs-st"></i><i class="ogs-st"></i></div><div class="ogs-err">server.ts:350 — SyntaxError</div>`,
    status: "unlisted",
  },
  {
    n: 5, slug: "og-quota", name: "THE QUOTA", title: "Warden of the Held Balance",
    grade: "OG·SPECIMEN", gradeLabel: "Origin Specimen",
    treatment: "Meter Brass — the dial that read wallets",
    inscription: "HELD BALANCE → DAILY QUOTA · JUN 2026",
    stats: { strike: 76, finality: 64, provenance: 91, gravity: 68 },
    utility: [
      "Card-back variant — Meter for the holder's virtual card",
      "Access to the OG holder channel",
      "Origin Specimen entry in the OG registry",
    ],
    flavor: "No checkout, no invoice — holding was the key.",
    artHtml: `<div class="ogq-dial"></div><div class="ogq-needle"></div><div class="ogq-line">HOLD &rarr; QUOTA · RESETS DAILY</div>`,
    status: "unlisted",
  },
];

export const OG_GRADING: Array<[string, string, string, string]> = [
  ["OG·PROOF", "Origin Proof", "1 of 5", "The origin statement itself — the name that carried the V before the V had a company."],
  ["OG·STRIKE", "Origin Strike", "2 of 5", "Heritage-holo cards recording a mechanism the origin shipped: the revoked mint, the answered status code."],
  ["OG·SPECIMEN", "Origin Specimen", "2 of 5", "Ink-and-brass specimens of the working origin — the source that never ran, the meter that read wallets."],
];

// ─── SUPPORTERS — Series 00S, struck for named $JTVO OGs ──────────────
// Luca, Aug 13: "make a dedicated jtvo og supporters [set] called Tux …
// a collection, only 1 card for him." One card per NAMED supporter,
// dedicated and never reassigned — the set grows a card at a time, each
// addition its own release. It opens with TUX — @megastuffs on X, whose
// display name IS Tux — AI maxi, inference and semis. Facts on the card
// are strike-date facts from the X API, 13 Aug 2026: display name Tux,
// verified, 14,378 followers, 86,154 posts, bio "I research plays for
// you, so you don't have to." He posted his one-of-one Vantis Card
// reservation the same morning (x.com/megastuffs/status/2087791794222506072).
// Struck GLACIAL — the third material after signal ink and heritage
// brass: penguin ice, aurora rim, the bolt in house green. Art is inline
// SVG, per the module rule: no raster anywhere. Status "reserved" is
// literal — dedicated to his name, not open for release.

export const SUPPORTERS_SERIES = {
  series: "SUPPORTERS / 00S",
  chain: "Robinhood Chain",
  chainId: 4663,
  standard: "ERC-721",
  supply: 1, // grows only when the next named supporter is struck
  contract: null as string | null, // set at deploy; null = pre-deploy
};

// The penguin, rebuilt in the house system (geometric ink + ice, amber
// bill and feet, the bolt in signal green) — function-matched from the
// supporter's own mark, never traced from it.
const TUX_ART = `<svg class="tux-fig" viewBox="0 0 200 220" aria-hidden="true">
  <path class="tux-bolt" d="M168 4 L140 50 L154 50 L132 98 L176 42 L160 42 Z"/>
  <path class="tux-body" d="M100 22 C64 22 46 58 46 112 C46 166 66 194 100 194 C134 194 154 166 154 112 C154 58 136 22 100 22 Z"/>
  <path class="tux-flip" d="M137 86 C150 76 158 62 160 47 C166 51 169 58 168 66 C166 80 156 92 143 98 Z"/>
  <path class="tux-flip" d="M55 90 C46 102 43 120 47 137 C39 130 34 116 36 103 C37 95 46 89 55 90 Z"/>
  <ellipse class="tux-face" cx="85" cy="65" rx="16" ry="19"/>
  <ellipse class="tux-face" cx="115" cy="65" rx="16" ry="19"/>
  <path class="tux-belly" d="M100 92 C77 92 63 114 63 142 C63 169 79 186 100 186 C121 186 137 169 137 142 C137 114 123 92 100 92 Z"/>
  <circle class="tux-eye" cx="87" cy="61" r="6"/><circle class="tux-eye" cx="113" cy="61" r="6"/>
  <circle class="tux-pupil" cx="88" cy="63" r="2.6"/><circle class="tux-pupil" cx="112" cy="63" r="2.6"/>
  <path class="tux-beak" d="M100 71 L114 80 L100 91 L86 80 Z"/>
  <path class="tux-feet" d="M71 191 C60 193 54 199 54 205 C54 210 61 212 71 211 C81 210 88 205 88 199 C88 194 81 189 71 191 Z"/>
  <path class="tux-feet" d="M129 191 C140 193 146 199 146 205 C146 210 139 212 129 211 C119 210 112 205 112 199 C112 194 119 189 129 191 Z"/>
</svg>
<div class="tux-cap">AI MAXI &middot; INFERENCE &middot; SEMIS</div>`;

export const SUPPORTERS_SET: GenesisCard[] = [
  {
    n: 1, slug: "tux", name: "TUX", title: "Herald of the Inference Age",
    grade: "S·PROOF", gradeLabel: "Supporter Proof",
    treatment: "Glacial Black — full art, aurora rim",
    inscription: "JTVO OG · @MEGASTUFFS · 13 AUG 2026",
    stats: { strike: 88, finality: 76, provenance: 94, gravity: 81 },
    utility: [
      "Permanent first position in the Supporters registry — every future supporter card lists behind this one",
      "Priority lane on the inference rail for the holding wallet",
      "Card-back variant — Aurora: the holder's virtual card back renders the glacial colourway",
      "Standing whitelist slot on every future Supporters-series release",
      "Access to the OG holder channel",
    ],
    flavor: "He researches the plays so you don't have to. This one he kept.",
    artHtml: TUX_ART,
    status: "reserved",
  },
];

export const SUPPORTERS_GRADING: Array<[string, string, string, string]> = [
  ["S·PROOF", "Supporter Proof", "1 of 1", "Dedicated by the house to a named $JTVO OG supporter — struck once for one name, never reassigned. Tux opens the ledger: AI maxi, inference and semis, @megastuffs on X."],
];

// Every card across all sets, for slug lookups (routes, card pages,
// share views). GENESIS stays the deck/cartridge set — OG and Supporters
// cards carry no defined rail rights until Luca sets them, so rightsFor
// enforces them at the SPECIMEN fallback.
export const ALL_CARDS: GenesisCard[] = [...GENESIS, ...JTVO_OG, ...SUPPORTERS_SET];

// Which set does a card belong to — face serial, card page, share view
// all print series strings from here rather than hardcoding 001.
export function setOf(c: GenesisCard): { meta: typeof GENESIS_SERIES; list: GenesisCard[]; tag: string; face: string } {
  if (JTVO_OG.some((x) => x.slug === c.slug))
    return { meta: JTVO_SERIES, list: JTVO_OG, tag: "OG / 000", face: "OG 000" };
  if (SUPPORTERS_SET.some((x) => x.slug === c.slug))
    return { meta: SUPPORTERS_SERIES, list: SUPPORTERS_SET, tag: "SUPPORTERS / 00S", face: "SUPPORTERS 00S" };
  return { meta: GENESIS_SERIES, list: GENESIS, tag: "GENESIS / 001", face: "GENESIS 001" };
}

// ─── Page CSS ──────────────────────────────────────────────────────────

// The trading card OBJECT, split out of the marketplace page sheet so
// other surfaces (the /wallets deck) can mount a real Genesis card
// without dragging in marketplace page layout. Every rule here must be
// page-independent — it is mounted on at least two documents.
export const TC_CSS = `
/* ════ THE TRADING CARD — portrait 63:88, TCG anatomy ════ */
.tc { position:relative; width:var(--tc-w, 100%); max-width:340px; perspective:1200px; cursor:pointer;
  -webkit-tap-highlight-color:transparent; outline:none; border:none; background:none; padding:0; text-align:left; display:block; }
/* two-layer ring: wash separator keeps it visible on the green holo frames */
.tc:focus-visible .tc-card { box-shadow:0 0 0 2px var(--wash), 0 0 0 5px var(--green-ink); }
.tc-tilt { transform-style:preserve-3d; transform:rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)); transition:transform .16s var(--ease); will-change:transform; }
.tc-card { position:relative; aspect-ratio:63/88; border-radius:5% / 3.58%; overflow:hidden; container-type:inline-size;
  transform:translateY(var(--lift,0)) scale(var(--press,1)); transition:transform .18s var(--ease), box-shadow .18s var(--ease);
  background:#101211; box-shadow:0 22px 44px -18px rgba(10,10,10,0.38), 0 4px 12px rgba(10,10,10,0.14); }
a.tc:active .tc-card { --press:0.98; }

/* pointer glare — whole card, all grades */
.tc-foil { position:absolute; inset:0; pointer-events:none; z-index:6; opacity:var(--o,0);
  background:radial-gradient(70cqw circle at var(--mx,50%) var(--my,50%), rgba(255,255,255,0.32) 0%, rgba(255,255,255,0.09) 36%, transparent 64%);
  mix-blend-mode:overlay; transition:opacity .3s; }

/* inner chrome */
.tc-inner { position:absolute; inset:0; display:flex; flex-direction:column; padding:5.2cqw; z-index:3; }
.tc-head { display:flex; justify-content:space-between; align-items:center; gap:2cqw; margin-bottom:4cqw; }
.tc-name { font-family:var(--display); font-weight:700; font-size:7.4cqw; letter-spacing:-0.01em; color:var(--tfg,#fff); line-height:1; }
.tc-grade { font-family:var(--mono); font-size:3.4cqw; font-weight:700; letter-spacing:0.08em; color:var(--tacc,#09F875);
  border:1px solid var(--tacc,#09F875); border-radius:1.8cqw; padding:1.4cqw 2.2cqw; white-space:nowrap; background:rgba(0,0,0,0.22); }
.tc-art { position:relative; width:100%; aspect-ratio:63/42; flex:none; border-radius:8px; overflow:hidden; container-type:inline-size;
  background:var(--abg,#0C0E0D); box-shadow:inset 0 1px 4px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.09); }
.tc-plate { margin-top:3.4cqw; font-family:var(--mono); font-size:2.9cqw; letter-spacing:0.12em; line-height:1.55; color:var(--tsub,rgba(255,255,255,0.62));
  text-align:center; border:1px solid var(--tline,rgba(255,255,255,0.14)); border-radius:2cqw; padding:1.8cqw 2cqw; background:var(--tplate,rgba(255,255,255,0.04)); }
.tc-stats { display:flex; gap:1.6cqw; margin-top:3.2cqw; }
.tc-stats > div { flex:1; text-align:center; border:1px solid var(--tline,rgba(255,255,255,0.14)); border-radius:2cqw;
  padding:2.2cqw 0 1.8cqw; background:var(--tplate,rgba(255,255,255,0.04)); }
.tc-stats b { display:block; font-family:var(--display); font-weight:700; font-size:5.6cqw; color:var(--tfg,#fff); line-height:1; font-variant-numeric:tabular-nums; }
.tc-stats span { display:block; margin-top:1.2cqw; font-size:2.6cqw; font-weight:600; letter-spacing:0.14em; color:var(--tsub,rgba(255,255,255,0.55)); }
.tc-flavor { margin-top:3.2cqw; font-family:var(--sans); font-style:italic; font-size:3.4cqw; line-height:1.45; color:var(--tsub,rgba(255,255,255,0.66));
  display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; }
.tc-foot { margin-top:auto; display:flex; justify-content:space-between; align-items:flex-end; gap:2cqw; }
.tc-serial { font-family:var(--mono); font-size:2.9cqw; letter-spacing:0.1em; color:var(--tsub,rgba(255,255,255,0.55)); }
.tc-serial b { color:var(--tfg,#fff); font-weight:700; }

/* holo authenticity seal — every card; the SPECIMEN's only foil */
.tc-seal { position:relative; width:9cqw; height:9cqw; border-radius:50%; flex:none; overflow:hidden;
  box-shadow:inset 0 0 0 1px rgba(255,255,255,0.25), 0 1px 3px rgba(0,0,0,0.4); }
.tc-seal::before { content:''; position:absolute; inset:-40%;
  background:conic-gradient(#9BFFC9,#09F875,#58D5FF,#C79BFF,#FFE79B,#9BFFC9);
  animation:sealspin 9s linear infinite; filter:saturate(0.85); }
.tc-seal svg { position:absolute; inset:22%; width:56%; height:56%; color:#0A0A0A; z-index:1; }
@keyframes sealspin { to { transform:rotate(360deg); } }

/* ── grade frames ── */
/* SPECIMEN — ink frame, matte */
.grade-specimen { --tfg:#FFFFFF; --tsub:rgba(255,255,255,0.6); --tacc:#09F875; --tline:rgba(255,255,255,0.14); --tplate:rgba(255,255,255,0.045);
  background:linear-gradient(160deg,#181A18 0%,#101211 55%,#141614 100%); }

/* F·STRIKE — holo frame: iridescent border band that shifts with tilt */
.grade-fstrike { --tfg:#FFFFFF; --tsub:rgba(255,255,255,0.62); --tacc:#09F875; --tline:rgba(255,255,255,0.16); --tplate:rgba(255,255,255,0.05);
  background:linear-gradient(160deg,#151715 0%,#0F1110 55%,#131513 100%); }
.grade-fstrike::before { content:''; position:absolute; inset:0; z-index:1; border-radius:14px; padding:2.4cqw;
  background:linear-gradient(calc(120deg), #0d5c34, #09F875 18%, #bafcd9 32%, #58d5ff 48%, #09F875 62%, #0d5c34 78%, #09F875 94%);
  background-size:260% 260%; background-position:var(--posx,50%) var(--posy,50%);
  -webkit-mask:linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite:xor;
  mask:linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); mask-composite:exclude;
  animation:fsholo 8s ease-in-out infinite alternate; }
.tc.live .grade-fstrike::before { animation-play-state:paused; }
@keyframes fsholo { 0% { background-position:0% 30%; } 100% { background-position:100% 70%; } }

/* V·PROOF — full art: chrome floats over the art, iridescent rim, V-pattern foil field */
.grade-vproof { --tfg:#FFFFFF; --tsub:rgba(255,255,255,0.66); --tacc:#09F875; --tline:rgba(255,255,255,0.2); --tplate:rgba(8,10,9,0.55);
  background:radial-gradient(130% 120% at 30% -10%, #191919 0%, #0A0A0A 55%, #060606 100%); }
.grade-vproof .tc-art { position:absolute; inset:0; aspect-ratio:auto; border-radius:5% / 3.58%; background:transparent; box-shadow:none; }
.grade-vproof .tc-inner { z-index:3; }
.grade-vproof .tc-head, .grade-vproof .tc-plate, .grade-vproof .tc-stats > div, .grade-vproof .tc-flavor, .grade-vproof .tc-foot { position:relative; }
.grade-vproof .tc-plate, .grade-vproof .tc-stats > div { background:rgba(8,10,9,0.55); backdrop-filter:blur(2px); }
/* the V-pattern foil field — the set's master-pattern, only on the apex */
.vp-field { position:absolute; inset:0; z-index:1; opacity:0.26; pointer-events:none;
  -webkit-mask-image:radial-gradient(120% 90% at 50% 30%, #000 30%, transparent 78%);
  mask-image:radial-gradient(120% 90% at 50% 30%, #000 30%, transparent 78%); }
.vp-field i { position:absolute; font-family:var(--display); font-weight:700; font-style:normal; color:transparent;
  background:linear-gradient(115deg,#3a3a3a,#6a6a6a 30%,#b9ffd9 46%,#58d5ff 52%,#6a6a6a 64%,#3a3a3a);
  background-size:300% 300%; background-position:var(--posx,50%) var(--posy,50%); -webkit-background-clip:text; background-clip:text; }
/* iridescent orbiting rim — apex only */
.vp-rim { position:absolute; inset:0; border-radius:14px; padding:2px; z-index:5; pointer-events:none;
  -webkit-mask:linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite:xor;
  mask:linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); mask-composite:exclude; overflow:hidden; }
.vp-rim i { position:absolute; left:50%; top:50%; width:300%; aspect-ratio:1; margin-left:-150%; margin-top:-150%;
  background:conic-gradient(transparent 0 62%, rgba(9,248,117,0.2) 74%, #09F875 84%, #baffd9 88%, rgba(9,248,117,0.2) 96%, transparent 100%);
  animation:vprim 12s linear infinite; }
@keyframes vprim { to { transform:rotate(360deg); } }

/* light-material cards keep dark chrome readable via per-card overrides below */

/* ── card detail page (traded-function: a PAGE per card, not a popup) ── */
.cp-crumb { display:flex; justify-content:space-between; align-items:center; gap:16px; padding:26px 0 0; }
.cp-crumb a { font-size:13.5px; font-weight:500; color:var(--body); display:inline-flex; align-items:center; gap:7px; }
.cp-crumb a:hover { color:var(--ink); }
.cp-crumb .tok { font-family:var(--mono); font-size:11px; letter-spacing:0.14em; color:var(--muted); }
.cp { display:grid; grid-template-columns:1fr 1fr; gap:56px; align-items:start; padding:34px 0 72px; }
@media (max-width:900px) { .cp { grid-template-columns:1fr; gap:36px; } }
/* Static by default: in the single-column layout sticky made body copy
   scroll OVER the card face (panel P0, reproduced at 390/360/768).
   Sticky is a desktop-only privilege. */
.cp-stage { position:static; border:1px solid var(--line); border-radius:20px; background:var(--wash);
  padding:52px 36px 64px; display:flex; align-items:center; justify-content:center; overflow:hidden; }
@media (min-width:901px) { .cp-stage { position:sticky; top:calc(var(--nav-h) + 24px); } }
.cp-stage::before { content:''; position:absolute; width:64%; height:52%; left:18%; top:22%;
  background:radial-gradient(ellipse at center, rgba(9,248,117,0.22) 0%, transparent 68%); filter:blur(44px); pointer-events:none; }
.cp-stage .tc { max-width:380px; width:100%; }
/* the stand: elliptical floor shadow under the displayed object */
.cp-stand { position:relative; width:100%; max-width:380px; margin:0 auto; }
.cp-stand::after { content:''; position:absolute; left:12%; right:12%; bottom:-30px; height:26px; border-radius:50%;
  background:radial-gradient(ellipse at center, rgba(10,10,10,0.22) 0%, rgba(10,10,10,0.08) 55%, transparent 75%); filter:blur(7px); }
.gd-serial { font-family:var(--mono); font-size:11px; letter-spacing:0.14em; color:var(--muted); }
.cp-body h1 { font-size:clamp(30px,3.4vw,42px); margin-top:8px; }
.gd-grade { display:inline-flex; align-items:center; gap:8px; margin-top:12px; font-family:var(--mono); font-size:11px;
  font-weight:700; letter-spacing:0.1em; color:var(--green-ink); border:1px solid var(--green-ink); border-radius:7px; padding:5px 10px; }
.cp-title { margin-left:10px; display:inline-flex; font-size:12.5px; color:var(--body); font-style:italic; }
.gd-flavor { margin-top:18px; color:var(--body); font-size:15px; line-height:1.65; border-left:2px solid var(--green); padding-left:14px; font-style:italic; max-width:56ch; }
h2.gd-sect, .gd-sect { font-family:var(--sans); font-size:10.5px; font-weight:600; letter-spacing:0.14em; text-transform:uppercase; color:var(--muted); margin:26px 0 10px; line-height:1.4; }
.cp-copy { font-family:var(--mono); font-size:10.5px; font-weight:700; letter-spacing:0.1em; color:var(--muted);
  border:1px solid var(--line-strong); border-radius:7px; background:var(--white); padding:6px 10px; margin-left:10px; cursor:pointer; vertical-align:middle; }
.cp-copy:hover { color:var(--ink); border-color:var(--ink); }
.cp-pop { display:block; margin-top:10px; font-size:12.5px; color:var(--body); }
.cp-pop a { color:var(--green-ink); font-weight:600; }
.skiplink { position:absolute; left:-9999px; top:0; z-index:99; background:var(--ink); color:var(--green); font-weight:600;
  padding:12px 18px; border-radius:0 0 10px 0; }
.skiplink:focus { left:0; }
.gd-stats { display:flex; flex-direction:column; gap:8px; }
.gd-stat { display:grid; grid-template-columns:110px 1fr 34px; align-items:center; gap:12px; }
.gd-stat .k { font-size:12.5px; color:var(--body); }
.gd-stat .bar { height:5px; border-radius:99px; background:var(--line); overflow:hidden; }
.gd-stat .bar i { display:block; height:100%; border-radius:99px; background:linear-gradient(90deg,#07C562,#09F875); width:var(--w,0%); }
.gd-stat .v { font-family:var(--mono); font-size:11px; color:var(--green-ink); font-weight:700; text-align:right; }
.gd-utility { list-style:none; display:flex; flex-direction:column; gap:8px; }
.gd-utility li { position:relative; padding-left:18px; font-size:13.5px; color:var(--body); line-height:1.5; }
.gd-utility li::before { content:''; position:absolute; left:0; top:7px; width:7px; height:7px; border-radius:2px; background:var(--green); }
.gd-prov { display:flex; flex-direction:column; border:1px solid var(--line); border-radius:12px; overflow:hidden; }
.gd-prov > div { display:flex; justify-content:space-between; gap:14px; padding:9px 14px; font-size:12.5px; border-bottom:1px solid var(--line); background:var(--white); }
.gd-prov > div:last-child { border-bottom:none; }
.gd-prov .k { color:var(--muted); }
.gd-prov .v { font-family:var(--mono); font-size:11.5px; color:var(--ink); text-align:right; }
.cp-status { display:inline-flex; margin-top:4px; font-size:11px; font-weight:600; letter-spacing:0.08em; text-transform:uppercase;
  padding:5px 10px; border-radius:6px; border:1px solid var(--line-strong); color:var(--muted); background:var(--white); }
/* prev / next — collectors browse the set in order; lives at the END of
   the text column so the sticky stage rides all the way through it */
.cp-nav { display:flex; justify-content:space-between; gap:14px; border-top:1px solid var(--line); padding-top:22px; margin-top:30px; }
.cp-nav a { display:flex; flex-direction:column; gap:4px; max-width:46%; }
.cp-nav a:last-child { text-align:right; align-items:flex-end; }
.cp-nav .d { font-size:10.5px; font-weight:600; letter-spacing:0.12em; text-transform:uppercase; color:var(--muted); }
.cp-nav .t { font-family:var(--display); font-weight:700; font-size:16px; color:var(--ink); }
.cp-nav a:hover .t { color:var(--green-ink); }

/* ── light sections ── */
.ladder-tbl, .util-tbl { width:100%; border-collapse:collapse; }
.ladder-tbl th, .ladder-tbl td { text-align:left; padding:13px 16px; border-bottom:1px solid var(--line); font-size:14px; vertical-align:top; }
.ladder-tbl th { font-size:10.5px; letter-spacing:0.12em; text-transform:uppercase; color:var(--muted); font-weight:600; }
.ladder-tbl .gcode { font-family:var(--mono); font-weight:700; font-size:12px; color:var(--green-ink); white-space:nowrap; }
.tblwrap { overflow-x:auto; border:1px solid var(--line); border-radius:14px; background:var(--white); }
.tblwrap table { min-width:560px; }

/* release steps */
.rel { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
@media (max-width:860px) { .rel { grid-template-columns:1fr; } }
.rel-step { border:1px solid var(--line); border-radius:16px; padding:22px; background:var(--white); }
.rel-step .n { font-family:var(--mono); font-size:11px; letter-spacing:0.14em; color:var(--green-ink); font-weight:700; }
.rel-step h3 { margin-top:10px; }
.rel-step p { margin-top:8px; font-size:14px; color:var(--body); line-height:1.6; }
.rel-step .tag { display:inline-block; margin-top:12px; font-size:10px; font-weight:600; letter-spacing:0.1em; text-transform:uppercase; color:var(--muted); border:1px solid var(--line-strong); border-radius:6px; padding:4px 8px; }

/* honesty */
.gterms { border:1px solid var(--line); border-radius:16px; background:var(--white); padding:26px 28px; font-size:14px; color:var(--body); line-height:1.7; max-width:860px; }
.gterms b { color:var(--ink); }

/* ladder restacks as definition cards on phones — the WHAT EARNS IT
   column was amputated inside an unsignaled scroller (panel P1) */
.ladder-stack { display:none; flex-direction:column; gap:14px; }
.ladder-card { border:1px solid var(--line); border-radius:14px; background:var(--white); padding:16px 18px; }
.ladder-card .row { display:flex; align-items:center; gap:10px; flex-wrap:wrap; }
.ladder-card .gcode { font-family:var(--mono); font-weight:700; font-size:12px; color:var(--green-ink);
  border:1px solid var(--green-ink); border-radius:6px; padding:3px 8px; }
.ladder-card .nm { font-family:var(--display); font-weight:700; font-size:15px; }
.ladder-card .pop { margin-left:auto; font-size:12px; color:var(--muted); }
.ladder-card p { margin-top:8px; font-size:13.5px; color:var(--body); line-height:1.6; }
@media (max-width:640px) { .tblwrap--ladder { display:none; } .ladder-stack { display:flex; } }

h1, .mk-hero h1, .apex-copy h2 { text-wrap:balance; }

/* touch targets: small type, real hit areas */
.mk-foot-links a { padding:11px 0; display:inline-block; }
.cp-crumb a { padding:10px 0; }

/* footer (compact ink) */
.foot--ink { background:var(--ink); color:var(--white); border-top:1px solid rgba(255,255,255,0.1); padding:44px 0 36px; }
.foot--ink .brand { color:var(--white); }
.mk-foot-in { display:flex; justify-content:space-between; align-items:center; gap:20px; flex-wrap:wrap; }
.mk-foot-links { display:flex; gap:22px; flex-wrap:wrap; font-size:13.5px; }
.mk-foot-links a { color:rgba(255,255,255,0.72); }
.mk-foot-links a:hover { color:var(--white); }

/* ── OG / 000 grade frames — heritage brass, same anatomy ── */
/* OG·SPECIMEN — ink frame struck warm */
.grade-ogspec { --tfg:#F6F1E6; --tsub:rgba(246,241,230,0.6); --tacc:#E2B45C; --tline:rgba(226,180,92,0.28); --tplate:rgba(226,180,92,0.06);
  background:linear-gradient(160deg,#1B1712 0%,#12100B 55%,#171410 100%); }

/* OG·STRIKE — heritage holo: the F·STRIKE band re-struck in brass */
.grade-ogstrike { --tfg:#F6F1E6; --tsub:rgba(246,241,230,0.62); --tacc:#E2B45C; --tline:rgba(226,180,92,0.3); --tplate:rgba(226,180,92,0.07);
  background:linear-gradient(160deg,#191510 0%,#100E0A 55%,#151210 100%); }
.grade-ogstrike::before { content:''; position:absolute; inset:0; z-index:1; border-radius:14px; padding:2.4cqw;
  background:linear-gradient(calc(120deg), #6B4A12, #E2B45C 18%, #F7E3B3 32%, #D9822B 48%, #E2B45C 62%, #6B4A12 78%, #E2B45C 94%);
  background-size:260% 260%; background-position:var(--posx,50%) var(--posy,50%);
  -webkit-mask:linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite:xor;
  mask:linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); mask-composite:exclude;
  animation:fsholo 8s ease-in-out infinite alternate; }
.tc.live .grade-ogstrike::before { animation-play-state:paused; }

/* OG·PROOF — full art like the apex, struck in heritage black + brass */
.grade-ogproof { --tfg:#F6F1E6; --tsub:rgba(246,241,230,0.66); --tacc:#E2B45C; --tline:rgba(226,180,92,0.34); --tplate:rgba(12,10,6,0.55);
  background:radial-gradient(130% 120% at 30% -10%, #1C1710 0%, #0C0A07 55%, #070604 100%); }
.grade-ogproof .tc-art { position:absolute; inset:0; aspect-ratio:auto; border-radius:5% / 3.58%; background:transparent; box-shadow:none; }
.grade-ogproof .tc-inner { z-index:3; }
.grade-ogproof .tc-head, .grade-ogproof .tc-plate, .grade-ogproof .tc-stats > div, .grade-ogproof .tc-flavor, .grade-ogproof .tc-foot { position:relative; }
.grade-ogproof .tc-plate, .grade-ogproof .tc-stats > div { background:rgba(12,10,6,0.55); backdrop-filter:blur(2px); }
.grade-ogproof .vp-rim { filter:hue-rotate(-96deg) saturate(0.72); }
/* the J-pattern field — the pre-V initial, only on the OG apex */
.ogp-field { position:absolute; inset:0; z-index:1; opacity:0.3; pointer-events:none;
  -webkit-mask-image:radial-gradient(120% 90% at 50% 30%, #000 30%, transparent 78%);
  mask-image:radial-gradient(120% 90% at 50% 30%, #000 30%, transparent 78%); }
.ogp-field i { position:absolute; font-family:var(--display); font-weight:700; font-style:normal; color:transparent;
  -webkit-text-stroke:1px rgba(226,180,92,0.5); }

/* ── SUPPORTERS / 00S grade frame — glacial, same anatomy ── */
/* S·PROOF — full art like the apexes, struck in glacial black + ice */
.grade-sproof { --tfg:#EAF6FC; --tsub:rgba(234,246,252,0.64); --tacc:#7DD8FF; --tline:rgba(125,216,255,0.3); --tplate:rgba(8,14,18,0.55);
  background:radial-gradient(130% 120% at 30% -10%, #17242D 0%, #0A1014 55%, #06090C 100%); }
.grade-sproof .tc-art { position:absolute; inset:0; aspect-ratio:auto; border-radius:5% / 3.58%; background:transparent; box-shadow:none; }
.grade-sproof .tc-inner { z-index:3; }
.grade-sproof .tc-head, .grade-sproof .tc-plate, .grade-sproof .tc-stats > div, .grade-sproof .tc-flavor, .grade-sproof .tc-foot { position:relative; }
.grade-sproof .tc-plate, .grade-sproof .tc-stats > div { background:rgba(8,14,18,0.55); backdrop-filter:blur(2px); }
.grade-sproof .vp-rim { filter:hue-rotate(52deg) saturate(0.78); }
/* the T-pattern field — the supporter's initial, only on the supporter apex */
.sp-field { position:absolute; inset:0; z-index:1; opacity:0.28; pointer-events:none;
  -webkit-mask-image:radial-gradient(120% 90% at 50% 30%, #000 30%, transparent 78%);
  mask-image:radial-gradient(120% 90% at 50% 30%, #000 30%, transparent 78%); }
.sp-field i { position:absolute; font-family:var(--display); font-weight:700; font-style:normal; color:transparent;
  -webkit-text-stroke:1px rgba(125,216,255,0.42); }

@media (prefers-reduced-motion: reduce) {
  .tc-tilt { transition:none; }
  .tc-seal::before, .grade-fstrike::before, .grade-ogstrike::before, .vp-rim i { animation:none; }
}
`;

const MARKET_CSS = `
/* ── light page; ink reserved for the CTA band and footer (house rhythm) ── */
.mk-hero { padding:84px 0 30px; }
.mk-hero h1 { max-width:17ch; }
.mk-hero .lede { max-width:62ch; margin-top:18px; }

/* series fact strip */
.mk-facts { display:flex; flex-wrap:wrap; gap:0; margin-top:40px; border:1px solid var(--line); border-radius:14px; overflow:hidden; background:var(--white); }
.mk-fact { flex:1 1 150px; padding:14px 18px; border-right:1px solid var(--line); }
.mk-fact:last-child { border-right:none; }
.mk-fact .k { font-size:10.5px; font-weight:600; letter-spacing:0.1em; text-transform:uppercase; color:var(--muted); }
.mk-fact .v { font-family:var(--display); font-size:16px; font-weight:700; margin-top:3px; white-space:nowrap; }
.mk-fact .v em { font-style:normal; color:var(--green-ink); }

/* ── apex showcase ── */
.apex { display:grid; grid-template-columns:0.9fr 1.1fr; gap:56px; align-items:center; padding:56px 0 8px; }
@media (max-width:900px) { .apex { grid-template-columns:1fr; gap:36px; } }
.apex-visual { position:relative; display:flex; justify-content:center; }
.apex-visual::before { content:''; position:absolute; width:74%; height:64%; left:13%; top:20%;
  background:radial-gradient(ellipse at center, rgba(9,248,117,0.22) 0%, transparent 68%); filter:blur(46px); pointer-events:none; }
.apex-visual .tc { --tc-w:min(360px, 82vw); }
.apex-copy .crest { font-family:var(--mono); font-size:11px; letter-spacing:0.16em; color:var(--green-ink); text-transform:uppercase; font-weight:600; }
.apex-copy h2 { font-size:clamp(28px,3.4vw,40px); margin-top:10px; }
.apex-copy .lede { margin-top:14px; max-width:54ch; }
.apex-stats { display:flex; gap:30px; margin-top:24px; flex-wrap:wrap; }
.apex-stat .k { font-size:10.5px; font-weight:600; letter-spacing:0.1em; text-transform:uppercase; color:var(--muted); }
.apex-stat .v { font-family:var(--display); font-size:24px; font-weight:700; color:var(--green-ink); }

/* ── the rack ── */
.rack-head { display:flex; align-items:baseline; justify-content:space-between; gap:16px; margin:26px 0 26px; }
.rack-head .sub { font-size:12px; font-weight:500; color:var(--muted); }
.rack-grid { display:grid; grid-template-columns:repeat(3, 1fr); gap:36px 28px; }
@media (max-width:1000px) { .rack-grid { grid-template-columns:repeat(2,1fr); } }
@media (max-width:620px)  { .rack-grid { grid-template-columns:1fr; } .rack-grid .tc { --tc-w:min(340px, 88vw); margin:0 auto; } }
.gcell { display:flex; flex-direction:column; gap:12px; min-width:0; align-items:center; }
.gcap { width:100%; max-width:340px; display:flex; justify-content:space-between; align-items:center; gap:10px; padding:0 4px; }
.gcap .nm { font-family:var(--display); font-weight:700; font-size:15px; color:var(--ink); }
.gcap .nm .no { color:var(--muted); font-family:var(--mono); font-weight:400; font-size:11px; margin-right:8px; }
.gcap-chips { display:flex; gap:6px; flex:none; }
.gcap-grade { font-family:var(--mono); font-size:10px; font-weight:700; letter-spacing:0.06em; white-space:nowrap;
  padding:4px 8px; border-radius:6px; border:1px solid var(--green-ink); color:var(--green-ink); background:var(--white); }
/* animations pause off-viewport / hidden-tab (panel: 24 idle loops ≈ half a core) */
.tc.offstage .tc-card, .tc.offstage .tc-card *, .tc.offstage .tc-card *::before, .tc.offstage .tc-card *::after,
.tc.offstage .tc-card::before, .tc.offstage .tc-card::after { animation-play-state:paused !important; }
.gstatus { font-size:10.5px; font-weight:600; letter-spacing:0.08em; text-transform:uppercase; white-space:nowrap;
  padding:4px 9px; border-radius:6px; border:1px solid var(--line-strong); color:var(--muted); background:var(--white); }
.gstatus--listed { border-color:var(--green-ink); color:var(--green-ink); }
/* rack tiles are links: lift on hover, ground shadow deepens */
.rack-grid a.tc:hover .tc-card { --lift:-6px; box-shadow:0 34px 54px -20px rgba(10,10,10,0.42), 0 6px 14px rgba(10,10,10,0.16); }

/* ── OG / 000 vault — the heritage annex, warm on the white page ── */
.og-vault { border:1px solid #E3CFA1; border-radius:20px; background:#FCF8EF; padding:clamp(24px, 4vw, 46px); }
.og-eyebrow { color:#8A6D3B; }
.og-vault .lede a { color:var(--ink); font-weight:600; }
.og-facts { margin-top:30px; border-color:#E3CFA1; }
.og-facts .mk-fact { border-right-color:#EFE3C8; }
.og-grid { margin-top:34px; }
.og-lad { margin-top:30px; display:grid; grid-template-columns:repeat(3, minmax(0,1fr)); gap:12px; }
.og-lad-row { border:1px solid #EFE3C8; border-radius:12px; background:var(--white); padding:14px 16px; }
.og-lad-row .gcode { font-family:var(--mono); font-size:11px; font-weight:700; letter-spacing:0.06em; color:#8A6D3B; }
.og-lad-row .nm { font-family:var(--display); font-weight:700; font-size:13.5px; margin-left:8px; }
.og-lad-row .pop { float:right; font-family:var(--mono); font-size:11px; color:var(--muted); }
.og-lad-row p { margin-top:8px; font-size:12.5px; line-height:1.55; color:var(--body); }
@media (max-width:760px) { .og-lad { grid-template-columns:1fr; } }

/* ── SUPPORTERS / 00S vault — the glacial annex, cool on the white page ── */
.sup-vault { border:1px solid #BFDCEC; border-radius:20px; background:#F2F9FD; padding:clamp(24px, 4vw, 46px); }
.sup-eyebrow { color:#3E708A; }
.sup-vault .lede a { color:var(--ink); font-weight:600; }
.sup-facts { margin-top:30px; border-color:#BFDCEC; }
.sup-facts .mk-fact { border-right-color:#DCEEF7; }
.sup-stage { padding:40px 0 0; align-items:start; }
.sup-stage .apex-visual::before { background:radial-gradient(ellipse at center, rgba(125,216,255,0.3) 0%, transparent 68%); }
.sup-copy .crest { color:#3E708A; }
.sup-copy .apex-stat .v { color:#3E708A; }
.sup-lad { margin-top:26px; }
.sup-lad .og-lad-row { border-color:#DCEEF7; }
.sup-lad .gcode { color:#3E708A; }

${TC_CSS}
`;

// ─── Art-window CSS (sizes in cqw of the art window container) ─────────

export const GENESIS_ART_CSS = `
/* ── 01 FIRST BURN — full-art proof black (window = whole card) ── */
.g-art-first-burn { --abg:transparent; }
.g-art-first-burn::before { content:''; position:absolute; inset:0;
  background:linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.05) 45%, rgba(255,255,255,0.11) 50%, rgba(255,255,255,0.05) 55%, transparent 70%);
  background-size:260% 260%; animation:fbsweep 9s ease-in-out infinite; }
@keyframes fbsweep { 0%,100% { background-position:0% 0%; } 50% { background-position:100% 100%; } }
.fb-num { position:absolute; left:0; right:0; top:24cqw; text-align:center; font-family:var(--display); font-weight:700;
  font-size:21cqw; line-height:1; letter-spacing:0.01em; color:rgba(255,255,255,0.95);
  text-shadow:0 1px 0 rgba(255,255,255,0.16), 0 -1px 2px rgba(0,0,0,0.6);
  -webkit-mask-image:linear-gradient(to bottom, #000 52%, rgba(0,0,0,0.5) 74%, rgba(0,0,0,0.1) 90%, transparent 98%);
  mask-image:linear-gradient(to bottom, #000 52%, rgba(0,0,0,0.5) 74%, rgba(0,0,0,0.1) 90%, transparent 98%); }
.fb-ash { position:absolute; left:16%; right:16%; top:38cqw; height:10cqw;
  background:radial-gradient(rgba(255,255,255,0.5) 0.6px, transparent 0.7px); background-size:5px 5px; opacity:0.45;
  -webkit-mask-image:linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.8) 45%, transparent 100%);
  mask-image:linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.8) 45%, transparent 100%); }

/* ── 02 THE ODOMETER — silver window, live wheels ── */
.g-art-odometer { --abg:linear-gradient(135deg,#E9ECE9 0%,#D5D8D5 55%,#C8CCC8 100%); }
.g-art-odometer::before { content:''; position:absolute; inset:0; background:repeating-linear-gradient(105deg, rgba(10,10,10,0.05) 0 1px, transparent 1px 5px); }
.od-k { position:absolute; left:0; right:0; top:11%; text-align:center; font-family:var(--mono);
  font-size:3.2cqw; letter-spacing:0.34em; color:rgba(10,10,10,0.55); }
.od-win { position:absolute; left:7%; right:7%; top:30%; height:40%; background:#0B0C0B; border-radius:6px;
  box-shadow:inset 0 3px 8px rgba(0,0,0,0.85), inset 0 -1px 0 rgba(255,255,255,0.07), 0 1px 0 rgba(255,255,255,0.5);
  display:flex; align-items:stretch; justify-content:center; gap:1.2%; padding:1.8% 2.4%; }
.od-c { flex:1; max-width:8.6%; position:relative; background:linear-gradient(180deg,#161816 0%,#0D0F0D 50%,#161816 100%);
  border-radius:3px; overflow:hidden; box-shadow:inset 0 1px 3px rgba(0,0,0,0.8);
  font-family:var(--mono); font-weight:700; font-size:6.4cqw; color:#EDFFF4; }
.od-c > span:not(.od-strip) { position:absolute; inset:0; display:flex; align-items:center; justify-content:center; }
.od-sep { align-self:center; color:rgba(237,255,244,0.5); font-family:var(--mono); font-size:5cqw; }
.od-strip { position:absolute; left:0; right:0; top:0; height:500%; display:flex; flex-direction:column; }
.od-strip i { height:20%; display:flex; align-items:center; justify-content:center; font-style:normal; }
.od-r1 .od-strip { animation:odroll 9s steps(1, end) infinite; }
.od-r2 .od-strip { animation:odroll 9s steps(1, end) infinite 0.35s; }
.od-r3 .od-strip { animation:odroll 9s steps(1, end) infinite 0.7s; }
@keyframes odroll {
  0%, 72% { transform:translateY(0); }
  78% { transform:translateY(-20%); }
  84% { transform:translateY(-40%); }
  90% { transform:translateY(-60%); }
  96%, 100% { transform:translateY(-80%); }
}
.g-art-odometer::after { content:'ODO 001 · ROLLING SILVER'; position:absolute; left:0; right:0; bottom:9%;
  text-align:center; font-family:var(--mono); font-size:2.8cqw; letter-spacing:0.3em; color:rgba(10,10,10,0.45); }

/* ── 03 CANONICAL — the address IS the art ── */
.g-art-canonical { --abg:linear-gradient(135deg,#0C0C0B 0%,#151514 55%,#0D0D0C 100%); }
.cn-addr { position:absolute; left:7%; right:7%; top:14%; font-family:var(--mono); font-weight:600;
  font-size:8.4cqw; line-height:1.5; letter-spacing:0.12em; word-break:break-all; color:rgba(255,255,255,0.58);
  text-shadow:0 1px 0 rgba(0,0,0,0.9), 0 -1px 0 rgba(255,255,255,0.05); }
.cn-addr b { color:#09F875; font-weight:700; text-shadow:0 0 10px rgba(9,248,117,0.35); }
.g-art-canonical::after { content:''; position:absolute; inset:-30%;
  background:linear-gradient(105deg, transparent 40%, rgba(9,248,117,0.05) 47%, rgba(255,255,255,0.10) 50%, rgba(88,213,255,0.05) 53%, transparent 60%);
  animation:cnsheen 7.5s cubic-bezier(.4,0,.2,1) infinite; mix-blend-mode:overlay; }
@keyframes cnsheen { 0% { transform:translateX(-55%); } 60%,100% { transform:translateX(55%); } }

/* ── 04 THE WHALE — depth chart ── */
.g-art-whale { --abg:linear-gradient(180deg,#0A0A0A 0%,#08150D 40%,#04120B 72%,#020B07 100%); }
.wh-caustic { position:absolute; inset:0;
  background:repeating-radial-gradient(circle at 20% -10%, rgba(9,248,117,0.05) 0 2px, transparent 2px 26px),
             repeating-radial-gradient(circle at 80% -20%, rgba(255,255,255,0.03) 0 2px, transparent 2px 34px);
  animation:whdrift 16s ease-in-out infinite alternate; }
@keyframes whdrift { to { background-position:4% 7%, -5% 9%; } }
.wh-scale { position:absolute; right:18%; top:8%; bottom:12%; width:1px; background:rgba(255,255,255,0.45); }
.wh-scale i { position:absolute; left:0; width:7px; height:1px; background:rgba(255,255,255,0.45); }
.wh-lb { position:absolute; right:18%; margin-right:12px; font-family:var(--mono); font-size:2.8cqw;
  letter-spacing:0.2em; color:rgba(255,255,255,0.42); }
.wh-pt { position:absolute; right:calc(18% - 3px); bottom:12%; width:7px; height:7px; border-radius:50%;
  background:#09F875; box-shadow:0 0 14px rgba(9,248,117,0.9), 0 0 30px rgba(9,248,117,0.4); }
.wh-call { position:absolute; right:calc(18% + 13px); bottom:11%; font-family:var(--mono); font-size:2.6cqw;
  letter-spacing:0.12em; color:#09F875; white-space:nowrap; }
.wh-call::after { content:''; position:absolute; right:-11px; top:50%; width:9px; height:1px; background:rgba(9,248,117,0.7); }

/* ── 05 PAR — mint proof, still ── */
.g-art-par { --abg:linear-gradient(180deg,#EDF9F1 0%,#DFF2E6 100%); }
.g-art-par::before { content:''; position:absolute; inset:0;
  background:linear-gradient(180deg, transparent 42%, rgba(255,255,255,0.6) 50%, transparent 58%); }
.par-num { position:absolute; left:0; right:0; top:40%; text-align:center; font-family:var(--display); font-weight:600;
  font-size:11.5cqw; letter-spacing:0.04em; color:#FFFFFF;
  text-shadow:0 2px 3px rgba(11,122,62,0.5), 0 1px 0 rgba(11,122,62,0.35), 0 -1px 0 rgba(255,255,255,1); }

/* ── 06 FRIDAY — the seven-segment week ── */
.g-art-friday { --abg:linear-gradient(135deg,#151515 0%,#242624 60%,#181A18 100%); }
.fr-ring, .fr-glow { position:absolute; left:50%; top:50%; width:52cqw; aspect-ratio:1; transform:translate(-50%,-50%); border-radius:50%;
  -webkit-mask:radial-gradient(circle, transparent 57%, #000 58.5%); mask:radial-gradient(circle, transparent 57%, #000 58.5%); }
.fr-ring { background:conic-gradient(from -13deg,
  #2E312E 0 51.4deg, #232623 51.4deg 102.8deg, #2E312E 102.8deg 154.2deg, #232623 154.2deg 205.6deg,
  #2E312E 205.6deg 257deg, #232623 257deg 308.4deg, #09F875 308.4deg 360deg);
  box-shadow:0 1px 0 rgba(255,255,255,0.06); }
.fr-glow { background:conic-gradient(from -13deg, transparent 0 308.4deg, rgba(9,248,117,0.9) 308.4deg 360deg);
  filter:blur(9px); animation:frpulse 3s ease-in-out infinite; }
@keyframes frpulse { 0%,100% { opacity:0.25; } 50% { opacity:0.9; } }
.fr-fri { position:absolute; left:50%; top:50%; transform:translate(-50%,-50%); font-family:var(--display);
  font-weight:700; font-size:11cqw; letter-spacing:0.04em; color:#FFFFFF; }

/* ── 07 THE LEDGER — ruled rows in motion ── */
.g-art-ledger { --abg:linear-gradient(135deg,#0C0C0B 0%,#131412 60%,#0D0E0C 100%); }
.lg-rows { position:absolute; inset:0;
  background:repeating-linear-gradient(180deg, rgba(255,255,255,0.055) 0 1px, transparent 1px 9px),
             repeating-linear-gradient(180deg, rgba(9,248,117,0.11) 0 9px, transparent 9px 81px);
  animation:lgscroll 10s linear infinite; }
@keyframes lgscroll { to { background-position:0 -81px, 0 -81px; } }
.lg-col { position:absolute; right:6%; top:8%; bottom:26%; font-family:var(--mono); font-size:3cqw;
  line-height:2.2; color:rgba(9,248,117,0.34); text-align:right; white-space:pre-line; overflow:hidden; }
.lg-line { position:absolute; left:6%; right:6%; top:44%; display:flex; justify-content:space-between; align-items:center;
  font-family:var(--mono); font-size:3.4cqw; letter-spacing:0.14em; color:#E6FFEF; padding:2% 2.4%;
  border-top:1px solid rgba(9,248,117,0.45); border-bottom:1px solid rgba(9,248,117,0.45);
  text-shadow:0 0 8px rgba(9,248,117,0.3); background:rgba(10,10,10,0.6); }
.lg-cur { display:inline-block; width:2.4cqw; height:3.8cqw; background:#09F875; animation:lgblink 1.1s steps(1) infinite; }
@keyframes lgblink { 50% { opacity:0; } }

/* ── 08 4663 — guilloché plate ── */
.g-art-chain-4663 { --abg:linear-gradient(135deg,#141514 0%,#1E201E 60%,#161816 100%); }
.ch-g { position:absolute; inset:0;
  background:repeating-conic-gradient(from 0deg at 30% 130%, rgba(255,255,255,0.05) 0deg 1deg, transparent 1deg 5deg),
             repeating-conic-gradient(from 8deg at 88% -30%, rgba(9,248,117,0.045) 0deg 1.4deg, transparent 1.4deg 6deg),
             repeating-radial-gradient(circle at 112% 55%, rgba(255,255,255,0.035) 0 1px, transparent 1px 9px); }
.ch-num { position:absolute; left:-2%; bottom:-4%; font-family:var(--display); font-weight:700;
  font-size:42cqw; line-height:0.8; letter-spacing:-0.03em; color:rgba(255,255,255,0.95);
  text-shadow:0 2px 0 rgba(0,0,0,0.5), 0 -1px 0 rgba(255,255,255,0.12); }

/* ── 09 THE TERMINAL — CRT elevation ── */
.g-art-terminal { --abg:radial-gradient(120% 130% at 50% 10%, #0B120D 0%, #060906 60%, #040604 100%); }
.tm-scan { position:absolute; inset:0; background:repeating-linear-gradient(180deg, rgba(9,248,117,0.07) 0 1px, transparent 1px 3px); }
.tm-vig { position:absolute; inset:0; background:radial-gradient(120% 120% at 50% 50%, transparent 52%, rgba(0,0,0,0.55) 100%); }
.tm-glow { position:absolute; inset:0; background:radial-gradient(60% 50% at 50% 48%, rgba(9,248,117,0.12), transparent 70%);
  animation:tmbreathe 4.5s ease-in-out infinite; }
@keyframes tmbreathe { 0%,100% { opacity:0.45; } 50% { opacity:1; } }
.tm-dev { position:absolute; left:16%; right:16%; top:14%; bottom:16%; border:1px solid rgba(217,255,233,0.5); border-radius:8px; }
.tm-slot { position:absolute; left:10%; right:38%; top:11%; height:8%; border:1px solid rgba(217,255,233,0.5); border-radius:99px; }
.tm-knob { position:absolute; right:7%; top:7%; width:19%; aspect-ratio:1; border:1px solid rgba(217,255,233,0.5); border-radius:50%; }
.tm-knob::after { content:''; position:absolute; left:50%; top:8%; width:1px; height:26%; background:rgba(217,255,233,0.7); }
.tm-scr { position:absolute; left:10%; right:34%; top:32%; bottom:13%; border:1px solid rgba(217,255,233,0.4); border-radius:4px;
  display:flex; align-items:center; justify-content:center; font-family:var(--mono); font-size:3cqw; letter-spacing:0.14em;
  color:#09F875; text-shadow:0 0 8px rgba(9,248,117,0.6); }
.tm-v { position:absolute; right:7.5%; bottom:13%; width:14%; aspect-ratio:1; border-radius:5px; background:rgba(9,248,117,0.92);
  box-shadow:0 0 12px rgba(9,248,117,0.55); display:flex; align-items:center; justify-content:center;
  font-family:var(--display); font-weight:700; font-size:4cqw; color:#0A0A0A; }

/* ── 10 OFF-REGISTER — misprint ── */
.g-art-off-register { --abg:linear-gradient(135deg,#0AF77A 0%,#07DE6C 55%,#05C75F 100%); }
.g-art-off-register::before { content:''; position:absolute; inset:0; background:repeating-linear-gradient(105deg, rgba(10,10,10,0.05) 0 1px, transparent 1px 5px); }
.or-frame { position:absolute; inset:6%; border:1px dashed rgba(10,10,10,0.4); transform:rotate(-0.8deg); }
.or-v { position:absolute; width:30%; top:16%; }
.or-v .vmark { width:100%; height:auto; }
.or-v1 { left:56%; color:#0A0A0A; opacity:0.92; }
.or-v2 { left:calc(56% + 6px); top:calc(16% + 6px); color:#FFFFFF; opacity:0.35; }
.or-leg { position:absolute; left:9%; top:30%; font-family:var(--mono); font-size:3.4cqw; line-height:2.1;
  color:rgba(10,10,10,0.75); letter-spacing:0.06em; }
.or-fade { display:inline-block;
  -webkit-mask-image:linear-gradient(to right, #000 55%, transparent 96%);
  mask-image:linear-gradient(to right, #000 55%, transparent 96%); }

/* ════ OG / 000 — heritage art ════ */

/* ── OG 01 IN THE BEGINNING — full-art, the name with the V lit ── */
.g-art-og-beginning { --abg:transparent; }
.g-art-og-beginning::before { content:''; position:absolute; inset:0;
  background:linear-gradient(115deg, transparent 30%, rgba(247,227,179,0.05) 45%, rgba(247,227,179,0.11) 50%, rgba(247,227,179,0.05) 55%, transparent 70%);
  background-size:260% 260%; animation:fbsweep 10s ease-in-out infinite; }
.ogb-word { position:absolute; left:0; right:0; top:27cqw; text-align:center; font-family:var(--display); font-weight:700;
  font-size:13.2cqw; line-height:1; letter-spacing:0.05em; color:rgba(246,241,230,0.92);
  text-shadow:0 1px 0 rgba(247,227,179,0.14), 0 -1px 2px rgba(0,0,0,0.6); }
.ogb-word b { color:#09F875; text-shadow:0 0 14px rgba(9,248,117,0.55), 0 0 30px rgba(9,248,117,0.25); }
.ogb-sub { position:absolute; left:0; right:0; top:42cqw; text-align:center; font-family:var(--mono);
  font-size:3cqw; letter-spacing:0.32em; color:rgba(226,180,92,0.8); }
.ogb-est { position:absolute; left:0; right:0; top:48cqw; text-align:center; font-family:var(--mono);
  font-size:2.6cqw; letter-spacing:0.24em; color:rgba(246,241,230,0.4); }

/* ── OG 02 THE MINT — the base58 IS the art, struck through with the stamp ── */
.g-art-og-mint { --abg:linear-gradient(135deg,#151210 0%,#1B1712 55%,#131009 100%); }
.ogm-addr { position:absolute; left:7%; right:7%; top:10%; font-family:var(--mono); font-weight:600;
  font-size:7.8cqw; line-height:1.5; letter-spacing:0.1em; word-break:break-all; color:rgba(246,241,230,0.52);
  text-shadow:0 1px 0 rgba(0,0,0,0.9), 0 -1px 0 rgba(247,227,179,0.05); }
.ogm-addr b { color:#09F875; font-weight:700; text-shadow:0 0 10px rgba(9,248,117,0.35); }
.ogm-stamp { position:absolute; left:50%; bottom:9%; transform:translateX(-50%) rotate(-5deg);
  font-family:var(--mono); font-size:3.6cqw; font-weight:700; letter-spacing:0.22em; white-space:nowrap;
  color:rgba(226,180,92,0.92); border:2px solid rgba(226,180,92,0.75); border-radius:1.4cqw;
  padding:1.6cqw 3cqw; background:rgba(10,8,5,0.45); box-shadow:0 0 0 1px rgba(0,0,0,0.4), inset 0 0 8px rgba(226,180,92,0.12); }
.g-art-og-mint::after { content:''; position:absolute; inset:-30%;
  background:linear-gradient(105deg, transparent 40%, rgba(226,180,92,0.06) 47%, rgba(247,227,179,0.1) 50%, rgba(226,180,92,0.06) 53%, transparent 60%);
  animation:cnsheen 8s cubic-bezier(.4,0,.2,1) infinite; mix-blend-mode:overlay; }

/* ── OG 03 FOUR OH TWO — the status code, answered ── */
.g-art-og-402 { --abg:linear-gradient(180deg,#0D0C0A 0%,#171208 100%); }
.g-art-og-402::before { content:''; position:absolute; inset:0;
  background:repeating-linear-gradient(0deg, rgba(246,241,230,0.03) 0 1px, transparent 1px 7px); }
.og4-proto { position:absolute; left:0; right:0; top:9%; text-align:center; font-family:var(--mono);
  font-size:3.2cqw; letter-spacing:0.36em; color:rgba(246,241,230,0.42); }
.og4-code { position:absolute; left:0; right:0; top:19%; text-align:center; font-family:var(--display); font-weight:700;
  font-size:24cqw; line-height:1; letter-spacing:0.02em; color:rgba(246,241,230,0.95);
  text-shadow:0 1px 0 rgba(247,227,179,0.18), 0 -1px 2px rgba(0,0,0,0.65), 0 0 34px rgba(226,180,92,0.18); }
.og4-req { position:absolute; left:0; right:0; bottom:10%; text-align:center; font-family:var(--mono); line-height:1.8; }
.og4-req s { display:block; font-size:2.8cqw; letter-spacing:0.26em; color:rgba(246,241,230,0.35); }
.og4-req b { display:block; font-size:3.2cqw; letter-spacing:0.26em; color:#09F875; font-weight:700;
  text-shadow:0 0 12px rgba(9,248,117,0.4); }

/* ── OG 04 THE SKELETON — the card drawn, never struck ── */
.g-art-og-skeleton { --abg:#0E100E; }
.g-art-og-skeleton::before { content:''; position:absolute; inset:0;
  background:repeating-linear-gradient(0deg, rgba(154,216,180,0.05) 0 1px, transparent 1px 12%),
             repeating-linear-gradient(90deg, rgba(154,216,180,0.05) 0 1px, transparent 1px 12%); }
.ogs-card { position:absolute; left:31%; right:31%; top:9%; bottom:20%; border:1.5px dashed rgba(154,216,180,0.55);
  border-radius:2.6cqw; padding:6% 5%; display:flex; flex-direction:column; gap:6%; }
.ogs-card i { display:block; border:1px dashed rgba(154,216,180,0.4); border-radius:1.2cqw; }
.ogs-bar { height:9%; width:62%; }
.ogs-win { flex:1; }
.ogs-st { height:7%; }
.ogs-err { position:absolute; left:0; right:0; bottom:6%; text-align:center; font-family:var(--mono);
  font-size:2.8cqw; letter-spacing:0.14em; color:rgba(246,241,230,0.4); }

/* ── OG 05 THE QUOTA — the meter that read wallets ── */
.g-art-og-quota { --abg:radial-gradient(120% 130% at 50% 0%, #1A1610 0%, #100E0A 60%, #0B0A07 100%); }
.ogq-dial { position:absolute; left:50%; top:52%; transform:translate(-50%,-50%); width:58cqw; height:58cqw; border-radius:50%;
  background:conic-gradient(from 214deg, rgba(226,180,92,0.16) 0deg 190deg, rgba(9,248,117,0.55) 190deg 252deg, transparent 252deg 360deg);
  -webkit-mask:radial-gradient(closest-side, transparent 60%, #000 61%);
  mask:radial-gradient(closest-side, transparent 60%, #000 61%); }
.ogq-needle { position:absolute; left:50%; top:52%; width:1.4cqw; height:24cqw; transform-origin:50% 92%;
  transform:translate(-50%,-88%) rotate(52deg); background:linear-gradient(180deg,#E2B45C 0%,rgba(226,180,92,0.2) 100%);
  border-radius:1cqw; box-shadow:0 0 8px rgba(226,180,92,0.5); }
.ogq-line { position:absolute; left:0; right:0; bottom:8%; text-align:center; font-family:var(--mono);
  font-size:2.9cqw; letter-spacing:0.22em; color:rgba(226,180,92,0.78); }

/* ════ SUPPORTERS / 00S — glacial art ════ */

/* ── S 01 TUX — full-art: the penguin under the aurora, bolt in house green ── */
.g-art-tux { --abg:transparent; }
.g-art-tux::before { content:''; position:absolute; inset:0;
  background:linear-gradient(115deg, transparent 26%, rgba(125,216,255,0.07) 42%, rgba(9,248,117,0.06) 50%, rgba(125,216,255,0.07) 58%, transparent 74%);
  background-size:260% 260%; animation:fbsweep 11s ease-in-out infinite; }
/* the ice shelf he stands on */
.g-art-tux::after { content:''; position:absolute; left:14%; right:14%; top:58cqw; height:5cqw; border-radius:50%;
  background:radial-gradient(ellipse at center, rgba(125,216,255,0.22) 0%, transparent 70%); }
.tux-fig { position:absolute; left:50%; top:13cqw; width:46cqw; transform:translateX(-50%); overflow:visible; }
.tux-body, .tux-flip { fill:#131A1F; stroke:rgba(140,205,240,0.4); stroke-width:1.5; }
.tux-face, .tux-belly, .tux-eye { fill:#F2F7F5; }
.tux-pupil { fill:#0A0A0A; }
.tux-beak, .tux-feet { fill:#E8A33D; }
.tux-bolt { fill:#09F875; filter:drop-shadow(0 0 5px rgba(9,248,117,0.75)); animation:tuxbolt 3.2s ease-in-out infinite; }
@keyframes tuxbolt { 0%,100% { opacity:0.82; } 50% { opacity:1; filter:drop-shadow(0 0 10px rgba(9,248,117,0.95)); } }
.tux-cap { position:absolute; left:0; right:0; top:66cqw; text-align:center; font-family:var(--mono);
  font-size:3cqw; letter-spacing:0.3em; color:rgba(125,216,255,0.75); }

@media (prefers-reduced-motion: reduce) {
  .g-art-first-burn::before, .od-strip, .g-art-canonical::after,
  .wh-caustic, .fr-glow, .lg-rows, .lg-cur, .tm-glow,
  .g-art-og-beginning::before, .g-art-og-mint::after,
  .g-art-tux::before, .tux-bolt { animation:none; }
}
`;

// ─── Face + page renderers ─────────────────────────────────────────────

function pad2(n: number) { return String(n).padStart(2, "0"); }

const gradeClass = (grade: string) =>
  grade === "V·PROOF" ? "grade-vproof"
  : grade === "F·STRIKE" ? "grade-fstrike"
  : grade === "OG·PROOF" ? "grade-ogproof"
  : grade === "OG·STRIKE" ? "grade-ogstrike"
  : grade === "OG·SPECIMEN" ? "grade-ogspec"
  : grade === "S·PROOF" ? "grade-sproof"
  : "grade-specimen";

// V-pattern foil field for the apex — a scatter of foil V glyphs, the
// set's master pattern. Deterministic layout (no randomness at render).
const VP_FIELD = (() => {
  const cells: string[] = [];
  const G = 5;
  for (let r = 0; r < G; r++) for (let c = 0; c < G; c++) {
    const x = 4 + c * 19 + (r % 2 ? 9 : 0);
    const y = 3 + r * 19;
    const s = 5 + ((r * G + c) % 3) * 2;
    const rot = ((r * 7 + c * 13) % 24) - 12;
    cells.push(`<i style="left:${x}%;top:${y}%;font-size:${s}cqw;transform:rotate(${rot}deg);">V</i>`);
  }
  return `<div class="vp-field" aria-hidden="true">${cells.join("")}</div>`;
})();

// J-pattern field for the OG apex — same deterministic scatter, struck
// with the pre-V initial instead of the V.
const OG_FIELD = (() => {
  const cells: string[] = [];
  const G = 5;
  for (let r = 0; r < G; r++) for (let c = 0; c < G; c++) {
    const x = 4 + c * 19 + (r % 2 ? 9 : 0);
    const y = 3 + r * 19;
    const s = 5 + ((r * G + c) % 3) * 2;
    const rot = ((r * 7 + c * 13) % 24) - 12;
    cells.push(`<i style="left:${x}%;top:${y}%;font-size:${s}cqw;transform:rotate(${rot}deg);">J</i>`);
  }
  return `<div class="ogp-field" aria-hidden="true">${cells.join("")}</div>`;
})();

// T-pattern field for the supporter apex — the same scatter again, struck
// with the supporter's initial.
const SP_FIELD = (() => {
  const cells: string[] = [];
  const G = 5;
  for (let r = 0; r < G; r++) for (let c = 0; c < G; c++) {
    const x = 4 + c * 19 + (r % 2 ? 9 : 0);
    const y = 3 + r * 19;
    const s = 5 + ((r * G + c) % 3) * 2;
    const rot = ((r * 7 + c * 13) % 24) - 12;
    cells.push(`<i style="left:${x}%;top:${y}%;font-size:${s}cqw;transform:rotate(${rot}deg);">T</i>`);
  }
  return `<div class="sp-field" aria-hidden="true">${cells.join("")}</div>`;
})();

export function genesisFace(c: GenesisCard, opts?: { link?: boolean }): string {
  const set = setOf(c);
  const vproof = c.grade === "V·PROOF";
  const ogproof = c.grade === "OG·PROOF";
  const sproof = c.grade === "S·PROOF";
  const apex = vproof || ogproof || sproof; // full-art layout, rim, foil field
  const open = opts?.link
    ? `<a class="tc" href="/marketplace/${esc(c.slug)}" aria-label="Open ${esc(c.name)}">`
    : `<div class="tc" style="cursor:default;">`;
  const close = opts?.link ? "</a>" : "</div>";
  return `${open}
    <div class="tc-tilt">
      <div class="tc-card ${gradeClass(c.grade)}">
        ${vproof ? VP_FIELD : ""}${ogproof ? OG_FIELD : ""}${sproof ? SP_FIELD : ""}
        <div class="tc-inner">
          <div class="tc-head"><span class="tc-name">${esc(c.name)}</span><span class="tc-grade">${esc(c.grade)}</span></div>
          <div class="tc-art g-art-${esc(c.slug)}" aria-hidden="true">${c.artHtml}</div>
          ${apex ? `<div style="flex:1;"></div>` : ""}
          <div class="tc-plate">${esc(c.inscription)}</div>
          <div class="tc-stats">
            ${STAT_KEYS.map(([k, ab]) => `<div><b>${c.stats[k] ?? "—"}</b><span>${ab}</span></div>`).join("")}
          </div>
          <div class="tc-flavor">${esc(c.flavor)}</div>
          <div class="tc-foot">
            <span class="tc-serial"><b>N&deg; ${pad2(c.n)}/${pad2(set.meta.supply)}</b> &middot; ${set.face} &middot; 1/1</span>
            <span class="tc-seal" aria-hidden="true">${V_MARK}</span>
          </div>
        </div>
        ${apex ? `<span class="vp-rim" aria-hidden="true"><i></i></span>` : ""}
        <div class="tc-foil" aria-hidden="true"></div>
      </div>
    </div>
  ${close}`;
}

// Shared pointer tilt + foil glare. Bound to every .tc on both the rack
// and the detail page; nonce is stamped by the CSP middleware.
const TILT_JS = `<script>
(function () {
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  document.querySelectorAll(".tc").forEach(function (el) {
    var face = el.querySelector(".tc-card");
    if (!face) return;
    el.addEventListener("pointermove", function (e) {
      var r = el.getBoundingClientRect();
      var px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
      el.style.setProperty("--ry", ((px - 0.5) * 8).toFixed(2) + "deg");
      el.style.setProperty("--rx", ((0.5 - py) * 7).toFixed(2) + "deg");
      face.style.setProperty("--mx", (px * 100).toFixed(1) + "%");
      face.style.setProperty("--my", (py * 100).toFixed(1) + "%");
      face.style.setProperty("--posx", (px * 100).toFixed(1) + "%");
      face.style.setProperty("--posy", (py * 100).toFixed(1) + "%");
      face.style.setProperty("--o", "1");
    });
    el.addEventListener("pointerleave", function () {
      el.style.setProperty("--rx", "0deg");
      el.style.setProperty("--ry", "0deg");
      face.style.setProperty("--o", "0");
      face.style.setProperty("--posx", "50%");
      face.style.setProperty("--posy", "50%");
    });
  });
})();
(function () {
  // Foils pause off-viewport and in hidden tabs — no visual change for
  // anyone actually looking at a card, roughly half a core saved idle.
  var cards = Array.prototype.slice.call(document.querySelectorAll(".tc"));
  if (!cards.length) return;
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { en.target.classList.toggle("offstage", !en.isIntersecting); });
    }, { rootMargin: "120px" });
    cards.forEach(function (el) { io.observe(el); });
  }
  document.addEventListener("visibilitychange", function () {
    cards.forEach(function (el) { if (document.hidden) el.classList.add("offstage"); });
  });
})();
(function () {
  // Detail pages: arrow keys page the set; the copy button shares the link.
  var prev = document.querySelector(".cp-nav a[data-dir=prev]");
  var next = document.querySelector(".cp-nav a[data-dir=next]");
  if (prev || next) document.addEventListener("keydown", function (e) {
    if (e.altKey || e.metaKey || e.ctrlKey) return;
    var t = e.target && e.target.tagName;
    if (t === "INPUT" || t === "TEXTAREA" || t === "SELECT") return;
    if (e.key === "ArrowLeft" && prev) location.href = prev.href;
    if (e.key === "ArrowRight" && next) location.href = next.href;
  });
  var cp = document.getElementById("cp-copy");
  if (cp && navigator.clipboard) cp.addEventListener("click", function () {
    navigator.clipboard.writeText(location.origin + location.pathname).then(function () {
      var o = cp.textContent; cp.textContent = "COPIED"; setTimeout(function () { cp.textContent = o; }, 1400);
    });
  });
})();
</script>`;

const STATUS_LABEL: Record<GenesisCard["status"], string> = {
  unlisted: "Awaits deploy",
  listed: "Listed",
  reserved: "Reserved",
  settled: "Settled",
};

// Caption carries number + full name only — the grade already prints on
// the face (panel: chip twice per tile + truncated names). Status chips
// return per-tile automatically the moment any card's status diverges
// from the rack-wide "unlisted".
function cell(c: GenesisCard): string {
  const chips = c.status === "unlisted" ? "" :
    `<span class="gcap-chips"><span class="gstatus gstatus--${esc(c.status)}">${STATUS_LABEL[c.status]}</span></span>`;
  return `<div class="gcell">
    ${genesisFace(c, { link: true })}
    <div class="gcap">
      <span class="nm"><span class="no">${pad2(c.n)}</span>${esc(c.name)}</span>
      ${chips}
    </div>
  </div>`;
}

// Tier population, for the checklist line ("one of 3 First Strike").
function gradePop(grade: string, list: GenesisCard[] = GENESIS): number {
  return list.filter((g) => g.grade === grade).length;
}

export function marketplaceHtml(viewer: NavViewer, opts?: { menuCard?: string; gradingRows?: Array<[string, string, string, string]> }): string {
  const apex = GENESIS[0];
  const rest = GENESIS.slice(1);
  const clientData = GENESIS.map((c) => ({
    n: c.n, slug: c.slug, name: c.name, title: c.title, grade: c.grade, gradeLabel: c.gradeLabel,
    treatment: c.treatment, stats: c.stats, utility: c.utility, flavor: c.flavor, status: c.status,
  }));

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Genesis, OG &amp; Supporters — Vantis cards on Robinhood Chain</title>
<meta name="description" content="Ten one-of-one Genesis cards, the five OG heritage cards from before the name, and the Supporters ledger struck for named $JTVO OGs — ERC-721 on Robinhood Chain. Graded, serialized, and slotting into the Vantis terminal.">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="preload" href="/fonts/SpaceGrotesk-var.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/Inter-var.woff2" as="font" type="font/woff2" crossorigin>
<script defer src="/consent.js?v=1"></script>
<meta property="og:title" content="Vantis cards — Genesis 001, OG 000 &amp; Supporters 00S">
<meta property="og:description" content="Ten Genesis one-of-ones, five OG heritage cards, and the Supporters ledger. One apex. Never reprinted.">
<style>
${SYSTEM_CSS}
${MARKET_CSS}
${GENESIS_ART_CSS}
</style>
</head>
<body>
<a class="skiplink" href="#rack">Skip to the rack</a>
${appNav(viewer, "marketplace" as any, { menuCard: opts?.menuCard })}

<header class="mk-hero">
  <div class="wrap">
    <div class="eyebrow eyebrow--green"><b>GENESIS</b> &middot; SERIES 001 &middot; ROBINHOOD CHAIN</div>
    <h1 style="margin-top:16px;">Ten cards. Struck once.</h1>
    <p class="lede">The first Vantis cards that can be owned. Each of the ten records one true monetary event from the rail&rsquo;s first season &mdash; the first burn, the supply&rsquo;s lost digit, the canonical checksum &mdash; in the event&rsquo;s own numbers, verifiable on-chain. One&#8209;of&#8209;one ${GENESIS_SERIES.standard} on ${GENESIS_SERIES.chain} (chain ${GENESIS_SERIES.chainId}), graded on the Vantis Strike Grade. No reprints, no second run.</p>
    <div class="mk-facts" role="list">
      <div class="mk-fact" role="listitem"><div class="k">Supply</div><div class="v"><em>10</em> &middot; one of one each</div></div>
      <div class="mk-fact" role="listitem"><div class="k">Standard</div><div class="v">${GENESIS_SERIES.standard}</div></div>
      <div class="mk-fact" role="listitem"><div class="k">Chain</div><div class="v">${esc(GENESIS_SERIES.chain)} &middot; ${GENESIS_SERIES.chainId}</div></div>
      <div class="mk-fact" role="listitem"><div class="k">Contract</div><div class="v">${GENESIS_SERIES.contract ? esc(GENESIS_SERIES.contract.slice(0, 6) + "…" + GENESIS_SERIES.contract.slice(-4)) : "Deploy pending"}</div></div>
      <div class="mk-fact" role="listitem"><div class="k">Market</div><div class="v">OpenSea &middot; native</div></div>
      <div class="mk-fact" role="listitem"><div class="k">Heritage</div><div class="v"><a href="#og" style="color:var(--ink); text-decoration:none;">OG / 000 &middot; five cards &darr;</a></div></div>
      <div class="mk-fact" role="listitem"><div class="k">Supporters</div><div class="v"><a href="#supporters" style="color:var(--ink); text-decoration:none;">00S &middot; TUX &darr;</a></div></div>
    </div>
  </div>
</header>

<section class="sec--tight" style="padding-top:8px;">
  <div class="wrap">
    <div class="apex">
      <div class="apex-visual">${genesisFace(apex, { link: true })}</div>
      <div class="apex-copy">
        <div class="crest">VSG &middot; ${esc(apex.grade)} &middot; 1/1 &middot; THE APEX CARD</div>
        <h2>${esc(apex.name)}</h2>
        <p class="lede">Epoch one settled on 12 August 2026: 31,002 $VANTIS destroyed from the public reserve &mdash; the first supply the ledger ever lost. One card records it: full-art proof black, numerals dissolving to ash, the set&rsquo;s master foil pattern and its only iridescent rim. Its holder signs the registry as ${esc(apex.title)}.</p>
        <div class="apex-stats">
          ${STAT_KEYS.map(([k, , label]) => `<div class="apex-stat"><div class="k">${label}</div><div class="v">${apex.stats[k] ?? "—"}</div></div>`).join("")}
        </div>
      </div>
    </div>
  </div>
</section>

<section class="sec sec--wash" aria-label="The Genesis rack" id="rack" style="padding-top:64px;">
  <div class="wrap">
    <div class="rack-head">
      <h2>The rack</h2>
      <span class="sub">Nine below the apex &middot; all ten await deploy &middot; tap a card</span>
    </div>
    <div class="rack-grid">
      ${rest.map(cell).join("\n")}
    </div>
    <p style="margin-top:28px; font-size:13px; color:var(--muted); max-width:74ch;">A Genesis card is a collectible record of a monetary event. It is not a financial instrument, carries no credits and no yield, and is never redeemable for tokens or money &mdash; what it carries is printed on the card.</p>
  </div>
</section>

<section class="sec" id="og" aria-label="OG Series 000">
  <div class="wrap">
    <div class="og-vault">
      <div class="eyebrow og-eyebrow">OG &middot; SERIES 000 &middot; WHERE VANTIS BEGAN</div>
      <h2 style="margin-top:12px;">Before the V, there was Jatevo.</h2>
      <p class="lede" style="margin-top:14px; max-width:70ch;">Vantis began inside <a href="https://jatevo.ai" target="_blank" rel="noopener">jatevo.ai</a> &mdash; the inference cloud, and its Solana-born token $JTVO, that came first. This site itself is the port of Jatevo Cards, a repository pushed once and never run. Five heritage cards record that provenance in the events&rsquo; own numbers &mdash; the name, the mint, the status code, the source, the meter &mdash; struck in heritage brass on the same Vantis Strike Grade. One&#8209;of&#8209;one ${JTVO_SERIES.standard}, same release discipline as Genesis: nothing moves before it is announced.</p>
      <div class="mk-facts og-facts" role="list">
        <div class="mk-fact" role="listitem"><div class="k">Supply</div><div class="v"><em>5</em> &middot; one of one each</div></div>
        <div class="mk-fact" role="listitem"><div class="k">Standard</div><div class="v">${JTVO_SERIES.standard}</div></div>
        <div class="mk-fact" role="listitem"><div class="k">Chain</div><div class="v">${esc(JTVO_SERIES.chain)} &middot; ${JTVO_SERIES.chainId}</div></div>
        <div class="mk-fact" role="listitem"><div class="k">Contract</div><div class="v">${JTVO_SERIES.contract ? esc(JTVO_SERIES.contract.slice(0, 6) + "…" + JTVO_SERIES.contract.slice(-4)) : "Deploy pending"}</div></div>
        <div class="mk-fact" role="listitem"><div class="k">Origin</div><div class="v"><a href="https://jatevo.ai" target="_blank" rel="noopener" style="color:var(--ink); text-decoration:none;">jatevo.ai &#8599;</a></div></div>
      </div>
      <div class="rack-grid og-grid">
        ${JTVO_OG.map(cell).join("\n")}
      </div>
      <div class="og-lad">
        ${OG_GRADING.map(([code, name, pop, what]) => `<div class="og-lad-row"><span class="gcode">${esc(code)}</span><span class="nm">${esc(name)}</span><span class="pop">${esc(pop)}</span><p>${esc(what)}</p></div>`).join("")}
      </div>
      <p style="margin-top:22px; font-size:13px; color:var(--muted); max-width:74ch;">An OG card is a collectible record of provenance. Like Genesis, it is not a financial instrument, carries no credits and no yield, is never redeemable for tokens or money, and makes no claim on $JTVO or $VANTIS supply or price &mdash; what it carries is printed on the card.</p>
    </div>
  </div>
</section>

<section class="sec" id="supporters" aria-label="Supporters Series 00S" style="padding-top:0;">
  <div class="wrap">
    <div class="sup-vault">
      <div class="eyebrow sup-eyebrow">SUPPORTERS &middot; SERIES 00S &middot; STRUCK FOR THE ONES WHO CARRIED IT</div>
      <h2 style="margin-top:12px;">One card per name. The ledger opens with Tux.</h2>
      <p class="lede" style="margin-top:14px; max-width:70ch;">A token is carried before it is anything, by people who read the filings nobody asked them to read. The Supporters set strikes one card per named $JTVO OG &mdash; dedicated, reserved to that name, never reassigned. Each addition is its own release. It opens with <b>TUX</b> &mdash; <a href="https://x.com/megastuffs" target="_blank" rel="noopener">@megastuffs</a> on X: AI maxi, inference and semis, struck glacial with the bolt in house green.</p>
      <div class="mk-facts sup-facts" role="list">
        <div class="mk-fact" role="listitem"><div class="k">Supply</div><div class="v"><em>1</em> &middot; grows a name at a time</div></div>
        <div class="mk-fact" role="listitem"><div class="k">Standard</div><div class="v">${SUPPORTERS_SERIES.standard}</div></div>
        <div class="mk-fact" role="listitem"><div class="k">Chain</div><div class="v">${esc(SUPPORTERS_SERIES.chain)} &middot; ${SUPPORTERS_SERIES.chainId}</div></div>
        <div class="mk-fact" role="listitem"><div class="k">Contract</div><div class="v">${SUPPORTERS_SERIES.contract ? esc(SUPPORTERS_SERIES.contract.slice(0, 6) + "…" + SUPPORTERS_SERIES.contract.slice(-4)) : "Deploy pending"}</div></div>
        <div class="mk-fact" role="listitem"><div class="k">Dedicated to</div><div class="v"><a href="https://x.com/megastuffs" target="_blank" rel="noopener" style="color:var(--ink); text-decoration:none;">@megastuffs &#8599;</a></div></div>
      </div>
      <div class="apex sup-stage">
        <div class="apex-visual">${cell(SUPPORTERS_SET[0])}</div>
        <div class="apex-copy sup-copy">
          <div class="crest">VSG &middot; S&middot;PROOF &middot; 1/1 &middot; RESERVED TO THE NAME</div>
          <h2>${esc(SUPPORTERS_SET[0].name)}</h2>
          <p class="lede">His display name on X is simply Tux, and the ledger takes him at his word: full-art glacial black, the penguin under the aurora, the bolt struck in signal green. The face records what he is &mdash; AI maxi, inference, semis &mdash; and the plate records when: 13 August 2026, the morning he posted his one-of-one Vantis Card reservation to the timeline. Its holder signs the registry as ${esc(SUPPORTERS_SET[0].title)}.</p>
          <div class="apex-stats">
            <div class="apex-stat"><div class="k">Followers at strike</div><div class="v">14,378</div></div>
            <div class="apex-stat"><div class="k">Posts at strike</div><div class="v">86,154</div></div>
            <div class="apex-stat"><div class="k">Verified</div><div class="v">Yes</div></div>
          </div>
          <div class="og-lad sup-lad" style="grid-template-columns:1fr;">
            ${SUPPORTERS_GRADING.map(([code, name, pop, what]) => `<div class="og-lad-row"><span class="gcode">${esc(code)}</span><span class="nm">${esc(name)}</span><span class="pop">${esc(pop)}</span><p>${esc(what)}</p></div>`).join("")}
          </div>
        </div>
      </div>
      <p style="margin-top:26px; font-size:13px; color:var(--muted); max-width:74ch;">A Supporters card is a collectible dedication. Like Genesis and OG, it is not a financial instrument, carries no credits and no yield, is never redeemable for tokens or money, and makes no claim on $JTVO or $VANTIS supply or price &mdash; what it carries is printed on the card.</p>
    </div>
  </div>
</section>

<section class="sec" id="ladder">
  <div class="wrap">
    <div class="sechead"><div><div class="eyebrow eyebrow--green">GRADING</div><h2 style="margin-top:10px;">One ladder, ten rungs occupied once</h2></div></div>
    <div class="tblwrap tblwrap--ladder"><table class="ladder-tbl">
      <thead><tr><th>Grade</th><th>Name</th><th>Population</th><th>What earns it</th></tr></thead>
      <tbody>
        ${(opts?.gradingRows || GENESIS_GRADING).map(([code, name, pop, what]) => `<tr><td class="gcode">${esc(code)}</td><td><b>${esc(name)}</b></td><td>${esc(pop)}</td><td>${esc(what)}</td></tr>`).join("")}
      </tbody>
    </table></div>
    <div class="ladder-stack">
      ${(opts?.gradingRows || GENESIS_GRADING).map(([code, name, pop, what]) => `<div class="ladder-card"><div class="row"><span class="gcode">${esc(code)}</span><span class="nm">${esc(name)}</span><span class="pop">${esc(pop)}</span></div><p>${esc(what)}</p></div>`).join("")}
    </div>
  </div>
</section>

<section class="sec sec--wash" id="release">
  <div class="wrap">
    <div class="sechead"><div><div class="eyebrow eyebrow--green">RELEASE</div><h2 style="margin-top:10px;">How the ten reach the market</h2></div></div>
    <div class="rel">
      <div class="rel-step"><div class="n">01 &middot; DEPLOY</div><h3>The contract lands on chain 4663</h3><p>One ${GENESIS_SERIES.standard} contract, supply hard-capped at ten. Faces render from on-chain data &mdash; no server keeps them alive. The contract address publishes here and on the $VANTIS registry the moment it is live.</p><span class="tag">Pending</span></div>
      <div class="rel-step"><div class="n">02 &middot; RELEASE</div><h3>Each card releases on its own terms</h3><p>Ten cards, released one at a time &mdash; not a bulk drop. Scored cardholders see each release first. Format and order publish before anything moves.</p><span class="tag">Announced at deploy</span></div>
      <div class="rel-step"><div class="n">03 &middot; TERMINAL</div><h3>Genesis slots into the terminal</h3><p>The wallet terminal on this site reads the cartridge you hold. A Genesis card in your connected wallet becomes a face the device recognizes &mdash; the collectible works where the product lives.</p><span class="tag">After deploy</span></div>
    </div>
  </div>
</section>

<section class="sec" id="terms">
  <div class="wrap">
    <div class="sechead"><div><div class="eyebrow eyebrow--green">PLAIN TERMS</div><h2 style="margin-top:10px;">What a Genesis card is</h2></div></div>
    <div class="gterms">
      <b>A collectible.</b> Each card is a one-of-one ${GENESIS_SERIES.standard} token on ${esc(GENESIS_SERIES.chain)} whose face and record live on-chain. Holding one grants the perks printed on it &mdash; access, cosmetics, provenance &mdash; and nothing else. It is <b>not</b> a financial instrument, carries <b>no</b> inference credits, <b>no</b> yield, <b>no</b> revenue share and <b>no</b> claim on $VANTIS or $JTVO supply or price. Credits on the rail stay bound to scored accounts and never travel with a token &mdash; Genesis, OG and Supporters alike. Trade it because you want the object, not because it owes you anything.
    </div>
  </div>
</section>

<div class="sec--ink" style="padding:72px 0;">
  <div class="wrap" style="text-align:center;">
    <h2 style="color:var(--white);">The rack opens with the deploy.</h2>
    <p class="lede lede--onDark" style="max-width:56ch; margin:14px auto 26px;">Scored cardholders see each release first. If you are not scored yet, that is the queue worth standing in.</p>
    <div class="btnrow" style="justify-content:center;">
      <a class="btn btn--onDark" href="/onboard">Get scored</a>
      <a class="btn btn--ghost" style="background:transparent; color:var(--white); border-color:rgba(255,255,255,0.35);" href="/wallets">Open the terminal</a>
    </div>
  </div>
</div>

<footer class="foot--ink">
  <div class="wrap mk-foot-in">
    <a class="brand" href="/">${V_MARK} VANTIS <span class="sub" style="color:rgba(255,255,255,0.5);">GENESIS</span></a>
    <div class="mk-foot-links">
      <a href="/marketplace">The rack</a>
      <a href="#og">OG 000</a>
      <a href="#supporters">Supporters 00S</a>
      <a href="#ladder">Grading</a>
      <a href="#terms">Plain terms</a>
      <a href="/api/genesis">Set data (JSON)</a>
      <a href="https://vantis.sh/burns" target="_blank" rel="noopener">On-chain burns</a>
    </div>
  </div>
</footer>

${TILT_JS}
<script>
// Legacy #slug deep links → the card's own page.
(function () {
  var SLUGS = ${JSON.stringify(ALL_CARDS.map((c) => c.slug))};
  var h = (location.hash || "").slice(1);
  if (h && SLUGS.indexOf(h) >= 0) location.replace("/marketplace/" + h);
})();
</script>
</body>
</html>`;
}

// ─── The card's own page — /marketplace/:slug ──────────────────────────
// Function-matched from how graded-card platforms present a single card
// (a page, not a popup): the object on a stand, registry data beside it,
// prev/next so the set browses in order. House style throughout.

export function cardPageHtml(c: GenesisCard, viewer: NavViewer, opts?: { menuCard?: string }): string {
  const set = setOf(c);
  const i = set.list.findIndex((g) => g.slug === c.slug);
  const prev = set.list[(i + set.list.length - 1) % set.list.length];
  const next = set.list[(i + 1) % set.list.length];
  // Anchor + label per set — three sets share this page template.
  const anchor = set.list === GENESIS ? "#rack" : set.list === JTVO_OG ? "#og" : "#supporters";
  const setLabel = set.list === GENESIS ? "Genesis 001" : set.list === JTVO_OG ? "OG 000" : "Supporters 00S";
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(c.name)} — ${set.face} · N&deg; ${pad2(c.n)}/${pad2(set.meta.supply)}</title>
<meta name="description" content="${esc(c.flavor)} ${esc(c.grade)} · ${esc(c.gradeLabel)} · one of one on ${esc(set.meta.chain)}.">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="preload" href="/fonts/SpaceGrotesk-var.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/Inter-var.woff2" as="font" type="font/woff2" crossorigin>
<script defer src="/consent.js?v=1"></script>
<meta property="og:title" content="${esc(c.name)} — VANTIS ${set.face}">
<meta property="og:description" content="${esc(c.flavor)} VSG ${esc(c.grade)}, N&deg; ${pad2(c.n)} of ${pad2(set.meta.supply)}, one of one.">
<meta property="og:image" content="https://card.vantis.sh/marketplace/${esc(c.slug)}/og.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<style>
${SYSTEM_CSS}
${MARKET_CSS}
${GENESIS_ART_CSS}
</style>
</head>
<body>
<a class="skiplink" href="#card-registry">Skip to card details</a>
${appNav(viewer, "marketplace" as any, { menuCard: opts?.menuCard })}

<div class="wrap">
  <div class="cp-crumb">
    <a href="/marketplace${anchor}">&larr; The rack</a>
    <span class="tok">${set.tag} &mdash; N&deg; ${pad2(c.n)} OF ${pad2(set.meta.supply)}</span>
  </div>

  <div class="cp">
    <div class="cp-stage">
      <div class="cp-stand">${genesisFace(c)}</div>
    </div>
    <div class="cp-body" id="card-registry">
      <div class="gd-serial">VANTIS STRIKE GRADE &middot; ${esc(c.gradeLabel).toUpperCase()}</div>
      <h1>${esc(c.name)}</h1>
      <div><span class="gd-grade">${esc(c.grade)} &middot; 1/1</span><button class="cp-copy" type="button" id="cp-copy">COPY LINK</button></div>
      <span class="cp-pop">${esc(c.title)} &middot; one of <a href="/marketplace${set.list === GENESIS ? "#ladder" : anchor}">${gradePop(c.grade, set.list)} ${esc(c.gradeLabel)}</a> in ${setLabel}</span>
      <p class="gd-flavor">${esc(c.flavor)}</p>

      <h2 class="gd-sect">Registry</h2>
      <div class="gd-stats">
        ${STAT_KEYS.map(([k, , label]) => {
          const v = c.stats[k] ?? 0;
          return `<div class="gd-stat"><span class="k">${label}</span><span class="bar"><i style="--w:${v}%"></i></span><span class="v">${v}</span></div>`;
        }).join("")}
      </div>

      <h2 class="gd-sect">Holder utility</h2>
      <ul class="gd-utility">
        ${c.utility.map((u) => `<li>${esc(u)}</li>`).join("")}
      </ul>

      <h2 class="gd-sect">Provenance</h2>
      <div class="gd-prov">
        <div><span class="k">Series</span><span class="v">${set.tag}</span></div>
        <div><span class="k">Registry title</span><span class="v">${esc(c.title)}</span></div>
        <div><span class="k">Token</span><span class="v">N&deg; ${pad2(c.n)} / ${pad2(set.meta.supply)}</span></div>
        <div><span class="k">Inscription</span><span class="v">${esc(c.inscription)}</span></div>
        <div><span class="k">Standard</span><span class="v">${set.meta.standard}</span></div>
        <div><span class="k">Chain</span><span class="v">${esc(set.meta.chain)} &middot; ${set.meta.chainId}</span></div>
        <div><span class="k">Contract</span><span class="v">${set.meta.contract ? esc(set.meta.contract) : "Deploy pending"}</span></div>
        <div><span class="k">Registry data</span><span class="v"><a href="/api/genesis" style="color:var(--green-ink);">/api/genesis (JSON)</a></span></div>
        <div><span class="k">Treatment</span><span class="v">${esc(c.treatment)}</span></div>
        <div><span class="k">Status</span><span class="v">${STATUS_LABEL[c.status]}</span></div>
      </div>

      ${set.list.length < 2 ? "" : `<div class="cp-nav">
        <a href="/marketplace/${esc(prev.slug)}" data-dir="prev"><span class="d">&larr; Previous &middot; ${esc(prev.grade)}</span><span class="t">${pad2(prev.n)} &middot; ${esc(prev.name)}</span></a>
        <a href="/marketplace/${esc(next.slug)}" data-dir="next"><span class="d">Next &middot; ${esc(next.grade)} &rarr;</span><span class="t">${pad2(next.n)} &middot; ${esc(next.name)}</span></a>
      </div>`}
    </div>
  </div>
</div>

<footer class="foot--ink">
  <div class="wrap mk-foot-in">
    <a class="brand" href="/">${V_MARK} VANTIS <span class="sub" style="color:rgba(255,255,255,0.5);">${set.list === GENESIS ? "GENESIS" : set.list === JTVO_OG ? "OG" : "SUPPORTERS"}</span></a>
    <div class="mk-foot-links">
      <a href="/marketplace">The rack</a>
      <a href="/marketplace#og">OG 000</a>
      <a href="/marketplace#supporters">Supporters 00S</a>
      <a href="/marketplace#ladder">Grading</a>
      <a href="/marketplace#terms">Plain terms</a>
      <a href="/api/genesis">Set data (JSON)</a>
    </div>
  </div>
</footer>

${TILT_JS}
</body>
</html>`;
}

// ─── OG share image stage — 1200x630, shot once by the existing
// renderOgPng puppeteer lane and cached. Static by design. ────────────
// The bare portrait face at asset size — shot once by renderOgPng and served
// as /marketplace/:slug/face.png. Background matches the terminal slab base
// so the rounded corners disappear when the PNG is textured onto it.
export function genesisFaceViewHtml(c: GenesisCard): string {
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
${SYSTEM_CSS}
${MARKET_CSS}
${GENESIS_ART_CSS}
* { animation:none !important; transition:none !important; }
html, body { width:900px; height:1257px; overflow:hidden; background:#0B0C0B; }
.tc { width:900px; max-width:900px; }
</style></head><body>${genesisFace(c)}</body></html>`;
}

export function genesisOgViewHtml(c: GenesisCard): string {
  const set = setOf(c);
  const isOg = set.list === JTVO_OG;
  const isSup = set.list === SUPPORTERS_SET;
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
${SYSTEM_CSS}
${MARKET_CSS}
${GENESIS_ART_CSS}
* { animation:none !important; transition:none !important; }
html, body { width:1200px; height:630px; overflow:hidden; }
body { background:var(--wash); display:flex; align-items:center; }
.og-wrap { display:flex; align-items:center; gap:70px; padding:0 90px; width:100%; }
.og-card { flex:none; width:340px; position:relative; }
.og-card::before { content:''; position:absolute; width:120%; height:110%; left:-10%; top:-5%;
  background:radial-gradient(ellipse at center, ${isOg ? "rgba(226,180,92,0.28)" : isSup ? "rgba(125,216,255,0.3)" : "rgba(9,248,117,0.25)"} 0%, transparent 68%); filter:blur(46px); }
.og-copy .k { font-family:var(--mono); font-size:15px; letter-spacing:0.18em; color:var(--green-ink); font-weight:700; }
.og-copy h1 { font-size:64px; margin-top:14px; letter-spacing:-0.02em; }
.og-copy .f { margin-top:18px; font-size:22px; color:var(--body); font-style:italic; line-height:1.5; max-width:24ch; }
.og-copy .s { margin-top:26px; font-family:var(--mono); font-size:16px; letter-spacing:0.12em; color:var(--muted); }
</style></head><body>
<div class="og-wrap">
  <div class="og-card">${genesisFace(c)}</div>
  <div class="og-copy">
    <div class="k"${isOg ? ` style="color:#8A6D3B;"` : isSup ? ` style="color:#3E708A;"` : ""}>VANTIS ${isOg ? "OG &middot; SERIES 000" : isSup ? "SUPPORTERS &middot; SERIES 00S" : "GENESIS &middot; SERIES 001"} &middot; ${esc(c.grade)}</div>
    <h1>${esc(c.name)}</h1>
    <div class="f">${esc(c.flavor)}</div>
    <div class="s">N&deg; ${pad2(c.n)} / ${pad2(set.meta.supply)} &middot; ONE OF ONE &middot; ROBINHOOD CHAIN</div>
  </div>
</div>
</body></html>`;
}
