// The wallet device — /wallets rendered as a physical object.
//
// An ink countertop terminal (payment-terminal archetype, deliberately NOT a
// handheld console): a control deck raked toward you, a screen head rising
// off its back edge, one hairline of green light where the two volumes meet.
// Your card seats into a dock on the right. One knurled knob dials the OS
// through its tools, a two-position lever picks the lane, and one square
// green key fires the mode's real action — including live, billed inference.
//
// The mascot: the striped V of the brand mark is the creature asleep. On the
// screen's bottom rail it unfolds into a small geometric dart-bird that
// works when you spend, celebrates when you fund, droops when a lane runs
// dry, and folds back into the logo when you leave it alone.
//
// Discipline notes:
//   * three.js is tree-shaken and self-hosted — CSP script-src 'self'.
//   * The screen is a CanvasTexture; DOM keeps all text entry (input row +
//     soft keys under the stage) so forms stay native and accessible.
//   * prefers-reduced-motion: no float, no boot, no typewriter, no flapping —
//     render on demand. No WebGL at all: the classic console view below the
//     stage simply stays open.
//   * Sound is synthesized on user action only — same triangle-blip voice
//     family as the reserve keys and the move-funds sheet.

import {
  Scene, PerspectiveCamera, WebGLRenderer, Group, Mesh,
  MeshStandardMaterial, MeshBasicMaterial, PlaneGeometry, CylinderGeometry,
  BoxGeometry, CanvasTexture, SRGBColorSpace, ACESFilmicToneMapping, LinearFilter,
  Raycaster, Vector2, PMREMGenerator, InstancedMesh, Object3D, Color,
} from "three";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";

// ── palette (house tokens, mirrored from system.ts) ──
const GREEN = 0x09f875;
const GREEN_CSS = "#09F875";
const GREEN_DIM = "rgba(9,248,117,0.55)";
const GREEN_FAINT = "rgba(9,248,117,0.28)";
const INK_CSS = "#0A0A0A";
const SCREEN_BG = "#070808";
const WHITE_CSS = "#F2F4F2";
const MONO = "'SF Mono', ui-monospace, Menlo, Consolas, monospace";
const DISPLAY = "'Space Grotesk', -apple-system, sans-serif";

const MODES = ["HOME", "CHAT", "SEARCH", "X LOOKUP", "LEDGER", "LANES"] as const;
type ModeName = (typeof MODES)[number];

const RM = matchMedia("(prefers-reduced-motion: reduce)").matches;

// ─────────────────────────── audio ───────────────────────────
let AC: AudioContext | null = null;
const ac = () => (AC = AC || new (window.AudioContext || (window as any).webkitAudioContext)());
function blip(freq: number, at: number, vol: number, dur = 0.045, type: OscillatorType = "triangle") {
  const a = ac(), o = a.createOscillator(), g = a.createGain();
  o.type = type; o.frequency.value = freq;
  g.gain.setValueAtTime(vol, at);
  g.gain.exponentialRampToValueAtTime(0.0001, at + dur);
  o.connect(g); g.connect(a.destination); o.start(at); o.stop(at + dur + 0.02);
}
const sound = {
  // detent pitch rises with the dial position — you can hear where you are
  detent(step = 0) { try { const a = ac(); if (a.state === "suspended") a.resume(); blip(640 + step * 46, a.currentTime + 0.01, 0.022, 0.03); } catch {} },
  lever() { try { const a = ac(); blip(420, a.currentTime + 0.01, 0.04, 0.05); blip(640, a.currentTime + 0.06, 0.03, 0.04); } catch {} },
  press() { try { const a = ac(); blip(120, a.currentTime + 0.01, 0.09, 0.08, "sine"); blip(88, a.currentTime + 0.05, 0.05, 0.09, "sine"); } catch {} },
  ok() { try { const a = ac(); blip(660, a.currentTime + 0.02, 0.05); blip(880, a.currentTime + 0.1, 0.045); } catch {} },
  err() { try { const a = ac(); blip(220, a.currentTime + 0.02, 0.05, 0.07); blip(180, a.currentTime + 0.1, 0.05, 0.09); } catch {} },
  dock() { try { const a = ac(); blip(240, a.currentTime + 0.01, 0.05, 0.05, "sine"); blip(180, a.currentTime + 0.07, 0.07, 0.06, "sine"); } catch {} },
};

// ─────────────────────────── springs ───────────────────────────
// Critically-damped spring toward a target — every physical motion on the
// device (tilt, knob, key travel, card slide) runs through one of these.
class Spring {
  v: number; target: number; vel = 0;
  constructor(v0: number, public k = 120, public d = 18) { this.v = v0; this.target = v0; }
  step(dt: number) {
    const a = -this.k * (this.v - this.target) - this.d * this.vel;
    this.vel += a * dt; this.v += this.vel * dt;
    return this.v;
  }
  settled() { return Math.abs(this.v - this.target) < 1e-4 && Math.abs(this.vel) < 1e-4; }
}

// ─────────────────────────── the mascot ───────────────────────────
// The premise, audited against the REAL mark (V_MARK in pages.ts): the logo
// is a vertical stem, one broad diagonal band, and one detached parallel
// stripe. Folded, the creature IS that geometry — the band is its body with
// the wing plate lying flush on top (the two quads are collinear halves of
// the band), the stem is its tail, the stripe is its head. Waking is a
// geometrically true unfold, not a poetic one. Glyph discipline from the
// design panel: one ink eye, a beak terminal on the leading stripe, no
// mouth, no limbs — the silhouette has a front and survives at 16px.
type Quad = { x: number; y: number; w: number; h: number; r: number };
const DIAG = -0.78; // the mark's band angle
const V_FOLDED: Quad[] = [
  { x: 9.4, y: 15.4, w: 13.6, h: 6.6, r: DIAG },  // band, lower half  → body
  { x: 16.8, y: 7.2, w: 13.6, h: 6.6, r: DIAG },  // band, upper half  → wing
  { x: 3.2, y: 12.0, w: 2.6, h: 24.0, r: 0 },     // stem              → tail
  { x: 19.4, y: 20.4, w: 11.6, h: 4.0, r: DIAG }, // detached stripe   → head
];
const BIRD: Quad[] = [
  { x: 12.4, y: 15.0, w: 11.4, h: 6.0, r: -0.08 }, // body
  { x: 11.6, y: 11.8, w: 9.2, h: 4.2, r: -0.36 },  // wing (flaps)
  { x: 5.6, y: 13.2, w: 2.4, h: 9.4, r: 0.62 },    // tail
  { x: 19.6, y: 11.2, w: 5.4, h: 4.6, r: -0.12 },  // head
];
const WING = 1; // index of the wing quad
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const easeOutBack = (t: number) => { const c = 1.70158; return 1 + (c + 1) * Math.pow(t - 1, 3) + c * Math.pow(t - 1, 2); };
const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

type VireoState = "sleep" | "wake" | "idle" | "work" | "happy" | "droop" | "alert";
class Vireo {
  state: VireoState = "sleep";
  t = 0;                 // seconds in state
  unfold = 0;            // 0 = brand mark, 1 = bird
  flapRate = 0;          // wing beats/sec while working
  blinkAt = 2.5;
  hopV = 0; hopY = 0;
  tilt = 0;              // droop tilt
  set(next: VireoState) {
    if (this.state === next) return;
    if (next === "wake" && this.state !== "sleep") return;
    this.state = next; this.t = 0;
    if (next === "happy") { this.hopV = -46; }
  }
  poke() { if (this.state === "sleep") this.set("wake"); }
  step(dt: number) {
    this.t += dt;
    const target = this.state === "sleep" ? 0 : 1;
    this.unfold += (target - this.unfold) * Math.min(1, dt * (this.state === "wake" ? 7 : 4));
    if (this.state === "wake" && this.unfold > 0.985) { this.set("idle"); this.hopV = -34; }
    if (this.state === "happy" && this.t > 1.5) this.set("idle");
    if (this.state === "alert" && this.t > 1.1) this.set("idle");
    if (this.state === "idle" && this.t > 45) { this.state = "sleep"; this.t = 0; }
    // hop physics
    this.hopV += 340 * dt; this.hopY = Math.max(0, this.hopY - this.hopV * dt * 0.28);
    if (this.hopY === 0 && this.hopV > 0) this.hopV = 0;
    if (this.state === "happy" && this.hopY === 0 && this.t < 1.0 && this.hopV === 0) this.hopV = -40;
    // droop tilt
    const tiltTarget = this.state === "droop" ? 0.34 : 0;
    this.tilt += (tiltTarget - this.tilt) * Math.min(1, dt * 5);
    if (this.t > this.blinkAt) this.blinkAt = this.t + 2.5 + Math.random() * 3.5;
  }
  // wing angle offset for the 3 wing quads
  wingPhase(now: number) {
    if (this.state === "work") return Math.sin(now * Math.PI * 2 * Math.max(2.4, this.flapRate)) * 0.5;
    if (this.state === "happy") return Math.sin(now * 14) * 0.42;
    if (this.state === "droop") return 0.30;
    return Math.sin(now * 1.7) * 0.05; // breathing hover of the folded wing
  }
  blinking() { return this.state !== "sleep" && this.t > this.blinkAt - 0.09 && this.t < this.blinkAt; }
  draw(ctx: CanvasRenderingContext2D, ox: number, oy: number, S: number, now: number) {
    // Stepped time — the sprite animates at 10fps deliberately. The charm is
    // in the step, and it keeps the screen texture cheap.
    const ts = Math.floor(now * 10) / 10;
    const u = easeInOut(Math.min(1, this.unfold));
    const wing = this.wingPhase(ts);
    const breathe = this.state === "sleep" ? 1 + Math.sin(ts * 1.2) * 0.015 : 1;
    ctx.save();
    ctx.translate(ox + 12 * S, oy + 12 * S + this.hopY * (S / 24));
    ctx.rotate(this.tilt);
    ctx.scale(breathe, breathe);
    ctx.translate(-12 * S, -12 * S);
    for (let i = 0; i < V_FOLDED.length; i++) {
      const a = V_FOLDED[i], b = BIRD[i];
      let r = lerp(a.r, b.r, u);
      let x = lerp(a.x, b.x, u), y = lerp(a.y, b.y, u);
      if (i === WING && u > 0.6) { r += wing * 0.7; y -= wing * 1.9; }
      const w = lerp(a.w, b.w, u), h = lerp(a.h, b.h, u);
      ctx.save();
      ctx.translate(x * S, y * S);
      ctx.rotate(r);
      ctx.fillStyle = GREEN_CSS;
      ctx.fillRect((-w / 2) * S, (-h / 2) * S, w * S, h * S);
      ctx.restore();
    }
    if (u > 0.75) {
      // beak — the leading terminal that gives the silhouette a front
      ctx.fillStyle = GREEN_CSS;
      ctx.beginPath();
      ctx.moveTo(22.2 * S, (10.6 + this.tilt * 2) * S);
      ctx.lineTo(24.0 * S, (11.4 + this.tilt * 2) * S);
      ctx.lineTo(22.2 * S, (12.2 + this.tilt * 2) * S);
      ctx.fill();
      // one ink eye, blinking
      if (!this.blinking()) {
        ctx.fillStyle = SCREEN_BG;
        ctx.fillRect(20.2 * S, (10.4 + this.tilt * 2) * S, 1.3 * S, 1.3 * S);
      }
    }
    ctx.restore();
  }
}

// ─────────────────────────── screen OS ───────────────────────────
const W = 1024, H = 640;
type Meta = any;
class ScreenOS {
  canvas = document.createElement("canvas");
  ctx: CanvasRenderingContext2D;
  tex: CanvasTexture;
  vireo = new Vireo();
  mode = 0;
  lane: "inference" | "devtools" = "inference";
  meta: Meta = null;
  history: any[] = [];
  booted = RM; bootT = 0;
  busy = false;
  status = "";
  // chat / search / x result state
  chat: { prompt: string; text: string; shown: number; line: string } | null = null;
  search: { query: string; results: any[]; left: number } | null = null;
  xprof: { profile: any; left: number } | null = null;
  err: string | null = null;
  armed: { until: number; quote: string } | null = null;
  dirty = true;
  private acc = 0;

  private lastKey = "";

  constructor() {
    this.canvas.width = W; this.canvas.height = H;
    this.ctx = this.canvas.getContext("2d")!;
    this.tex = new CanvasTexture(this.canvas);
    this.tex.colorSpace = SRGBColorSpace;
    // Every needsUpdate would otherwise regenerate a full NPOT mip chain —
    // the single biggest per-frame stall on real GPUs. The screen is viewed
    // near 1:1; plain linear filtering is indistinguishable and free.
    this.tex.generateMipmaps = false;
    this.tex.minFilter = LinearFilter;
  }

  modeName(): ModeName { return MODES[this.mode]; }

  // Everything the draw depends on, folded into one deterministic key. If
  // the key is unchanged, the frame is pixel-identical — skip the draw AND
  // the upload. Animation states quantize wall time to 10Hz so they redraw
  // at sprite rate; an idle screen (mascot asleep) uploads nothing at all.
  private frameKey(now: number): string {
    const v = this.vireo;
    const animating = v.state !== "sleep" || v.unfold > 0.001;
    const phase = !this.booted || animating || this.busy ? Math.floor(now * 10) : 0;
    const m = this.meta;
    return [
      this.mode, this.lane, this.booted, this.busy, this.err, this.status,
      this.armed?.quote, phase, v.state,
      this.chat ? `${this.chat.prompt}|${Math.floor(this.chat.shown)}|${this.chat.line}` : "",
      this.search?.query, this.search?.results?.length, this.xprof?.profile?.handle,
      this.history.length,
      m ? `${m.main_balance_usd}|${m.lanes?.inference?.balance_usd}|${m.lanes?.devtools?.balance_usd}|${m.handle}` : "",
    ].join("~");
  }

  step(dt: number, now: number) {
    if (!this.booted) { this.bootT += dt; if (this.bootT > 1.5) this.booted = true; }
    this.vireo.step(dt);
    if (this.armed && now * 1000 > this.armed.until) this.armed = null;
    if (this.chat && this.chat.shown < this.chat.text.length) {
      const speed = RM ? 1e9 : 60; // chars/sec
      this.chat.shown = Math.min(this.chat.text.length, this.chat.shown + speed * dt);
      // wingbeat rate IS the stream meter — the bird earns its screen space
      this.vireo.flapRate = Math.max(2.5, speed / 12);
      if (this.chat.shown >= this.chat.text.length && !this.busy) this.vireo.set("idle");
    }
    // Repaint at most at 10fps (20 during boot), and only when the frame key
    // says the pixels would differ. The key is complete by construction —
    // the dirty-flag class of stale-screen bug cannot come back through it.
    this.acc += dt;
    const interval = !this.booted ? 0.05 : 0.1;
    if (this.acc >= interval) {
      this.acc = 0;
      const key = this.frameKey(now);
      if (key !== this.lastKey) {
        this.lastKey = key;
        this.draw(now);
        this.tex.needsUpdate = true;
        this.dirty = false;
        return true; // drew — the loop must present this frame
      }
    }
    return false;
  }

  private text(s: string, x: number, y: number, px: number, color = GREEN_CSS, font = MONO, weight = "500") {
    this.ctx.fillStyle = color;
    this.ctx.font = `${weight} ${px}px ${font}`;
    this.ctx.textBaseline = "top";
    this.ctx.fillText(s, x, y);
  }
  private wrap(s: string, maxChars: number): string[] {
    const out: string[] = [];
    for (const para of s.split(/\n+/)) {
      let line = "";
      for (const w of para.split(/\s+/)) {
        if ((line + " " + w).trim().length > maxChars) { out.push(line.trim()); line = w; }
        else line += " " + w;
      }
      if (line.trim()) out.push(line.trim());
    }
    return out;
  }

  draw(now: number) {
    const c = this.ctx;
    c.fillStyle = SCREEN_BG;
    c.fillRect(0, 0, W, H);

    if (!this.booted) {
      // boot: stripes sweep in, wordmark, card detect line
      const t = this.bootT;
      const sweep = Math.min(1, t / 0.55);
      c.fillStyle = GREEN_CSS;
      const BANDS = [56, 30, 18]; // logo-weight: band, band, stripe
      for (let i = 0; i < 3; i++) {
        const x = -320 + (W + 560) * easeInOut(Math.min(1, sweep * 1.3 - i * 0.09));
        c.save(); c.translate(x, 96 + i * 74); c.transform(1, 0, -0.7, 1, 0, 0);
        c.fillRect(0, 0, 210, BANDS[i]); c.restore();
      }
      if (t > 0.55) this.text("VANTIS WALLET TERMINAL", 64, 330, 40, WHITE_CSS, DISPLAY, "700");
      if (t > 0.85) this.text("WLT-01 · SESSION OPEN", 64, 392, 22, GREEN_DIM);
      if (t > 1.1 && this.meta?.handle) this.text(`CARD DETECTED — @${this.meta.handle}`.toUpperCase(), 64, 430, 22, GREEN_CSS);
      return;
    }

    // ── chrome: mode tabs + balance ──
    let x = 40;
    for (let i = 0; i < MODES.length; i++) {
      const on = i === this.mode;
      c.font = `600 21px ${MONO}`;
      const w = c.measureText(MODES[i]).width;
      if (on) { c.fillStyle = GREEN_CSS; c.fillRect(x - 10, 26, w + 20, 36); }
      this.text(MODES[i], x, 34, 21, on ? SCREEN_BG : GREEN_FAINT);
      x += w + 34;
    }
    const main = this.meta ? `$${(this.meta.main_balance_usd || 0).toFixed(2)}` : "$—";
    c.font = `600 21px ${MONO}`;
    this.text(`MAIN ${main}`, W - 40 - c.measureText(`MAIN ${main}`).width, 34, 21, GREEN_DIM);
    c.fillStyle = GREEN_FAINT; c.fillRect(40, 78, W - 80, 2);

    const body = 108;
    const name = this.modeName();
    if (this.err) {
      this.text("PROBLEM", 64, body + 8, 22, GREEN_DIM);
      this.wrap(this.err, 52).slice(0, 4).forEach((l, i) => this.text(l, 64, body + 46 + i * 34, 24, WHITE_CSS));
    } else if (name === "HOME") this.drawHome(body);
    else if (name === "CHAT") this.drawChat(body);
    else if (name === "SEARCH") this.drawSearch(body);
    else if (name === "X LOOKUP") this.drawX(body);
    else if (name === "LEDGER") this.drawLedger(body);
    else this.drawLanes(body);

    // ── bottom rail: mascot + status ──
    c.fillStyle = GREEN_FAINT; c.fillRect(40, H - 152, W - 80, 2);
    this.vireo.draw(c, 46, H - 150, 6.1, now);
    const hint = this.busy ? "WORKING…" : this.status || "TURN THE KNOB · GREEN KEY FIRES";
    c.font = `600 20px ${MONO}`;
    this.text(hint, W - 40 - c.measureText(hint).width, H - 66, 20, this.busy ? GREEN_CSS : GREEN_DIM);
  }

  private drawHome(y: number) {
    const m = this.meta;
    this.text("ONE CARD. EVERY RAIL.", 64, y + 6, 22, GREEN_DIM);
    this.text(m ? `$${(m.main_balance_usd || 0).toFixed(2)}` : "$—", 64, y + 44, 88, WHITE_CSS, DISPLAY, "700");
    this.text("MAIN BALANCE", 64, y + 150, 20, GREEN_DIM);
    const inf = m?.lanes?.inference, dev = m?.lanes?.devtools;
    const bar = (label: string, bal: number, yy: number, live: boolean) => {
      this.text(label, 460, yy, 22, live ? GREEN_CSS : GREEN_DIM);
      this.text(`$${bal.toFixed(2)}`, 700, yy, 22, WHITE_CSS);
      const total = (m?.main_balance_usd || 0) + (inf?.balance_usd || 0) + (dev?.balance_usd || 0);
      const w = total > 0 ? Math.max(4, (bal / total) * 280) : 4;
      this.ctx.fillStyle = GREEN_FAINT; this.ctx.fillRect(460, yy + 34, 280, 8);
      this.ctx.fillStyle = live ? GREEN_CSS : GREEN_DIM; this.ctx.fillRect(460, yy + 34, w, 8);
    };
    if (inf) bar("INFERENCE", inf.balance_usd, y + 44, true);
    if (dev) bar("DEV TOOLS", dev.balance_usd, y + 128, false);
    if (m?.tier) this.text(`TIER ${String(m.tier).toUpperCase()} · BURNED ${(m.vantis_burned || 0).toFixed(2)} VANTIS`, 64, y + 196, 20, GREEN_DIM);
    this.status = "GREEN KEY = FUND INFERENCE";
  }

  private drawChat(y: number) {
    const ch = this.chat;
    if (this.armed) {
      this.text("QUOTE", 64, y + 6, 22, GREEN_DIM);
      this.text(this.armed.quote, 64, y + 44, 25, WHITE_CSS);
      this.text("ARMED — PRESS AGAIN TO FIRE", 64, y + 100, 30, GREEN_CSS, DISPLAY, "700");
      this.status = "SETTLES FROM REAL USAGE";
      return;
    }
    if (!ch) {
      this.text("TEST-FIRE THE RAIL", 64, y + 6, 22, GREEN_DIM);
      this.text("DeepSeek V4 Flash. Real call, real cost,", 64, y + 44, 26, WHITE_CSS);
      this.text("billed to your Inference lane.", 64, y + 80, 26, WHITE_CSS);
      this.text("Type below, then press the green key.", 64, y + 138, 24, GREEN_DIM);
      this.status = "TYPE A PROMPT · GREEN KEY FIRES";
      return;
    }
    this.text("> " + ch.prompt.slice(0, 46), 64, y + 4, 22, GREEN_DIM);
    const shown = ch.text.slice(0, Math.floor(ch.shown));
    const lines = this.wrap(shown, 62);
    const max = 8;
    lines.slice(-max).forEach((l, i) => this.text(l, 64, y + 42 + i * 34, 24, WHITE_CSS));
    if (ch.line && ch.shown >= ch.text.length) this.text(ch.line, 64, y + 42 + Math.min(lines.length, max) * 34 + 10, 20, GREEN_CSS);
  }

  private drawSearch(y: number) {
    const s = this.search;
    if (!s) {
      this.text("WEB SEARCH — EXA CLASS", 64, y + 6, 22, GREEN_DIM);
      this.text("One real query against the open web.", 64, y + 44, 26, WHITE_CSS);
      const t = this.meta?.tools?.find((t: any) => t.key === "search");
      this.text(t ? `${t.left_today} OF ${t.per_day} ON THE HOUSE TODAY` : "", 64, y + 100, 22, GREEN_DIM);
      this.status = "TYPE A QUERY · GREEN KEY FIRES";
      return;
    }
    this.text("? " + s.query.slice(0, 46), 64, y + 4, 22, GREEN_DIM);
    s.results.slice(0, 5).forEach((r: any, i: number) => {
      this.text((r.title || "").slice(0, 54), 64, y + 42 + i * 62, 24, WHITE_CSS);
      this.text((r.url || "").replace(/^https?:\/\//, "").slice(0, 58), 64, y + 42 + i * 62 + 28, 19, GREEN_DIM);
    });
    this.text(`${s.left} LEFT TODAY`, 64, y + 358, 20, GREEN_CSS);
  }

  private drawX(y: number) {
    const p = this.xprof?.profile;
    if (!p) {
      this.text("X PROFILE LOOKUP", 64, y + 6, 22, GREEN_DIM);
      this.text("Public metrics for any handle —", 64, y + 44, 26, WHITE_CSS);
      this.text("the same read the scoring agent makes.", 64, y + 80, 26, WHITE_CSS);
      const t = this.meta?.tools?.find((t: any) => t.key === "x");
      this.text(t?.status === "off" ? "ROUTE OFFLINE" : t ? `${t.left_today} OF ${t.per_day} ON THE HOUSE TODAY` : "", 64, y + 138, 22, GREEN_DIM);
      this.status = "TYPE @HANDLE · GREEN KEY FIRES";
      return;
    }
    this.text(`@${p.handle}`, 64, y + 4, 34, WHITE_CSS, DISPLAY, "700");
    this.text(String(p.name || "").slice(0, 40), 64, y + 50, 22, GREEN_DIM);
    const fmt = (n: number) => (n >= 1e6 ? (n / 1e6).toFixed(1) + "M" : n >= 1e3 ? (n / 1e3).toFixed(1) + "K" : String(n));
    this.text(`${fmt(p.followers)} FOLLOWERS · ${fmt(p.posts)} POSTS`, 64, y + 96, 26, GREEN_CSS);
    if (p.created_at) this.text(`SINCE ${String(p.created_at).slice(0, 4)}`, 64, y + 138, 22, GREEN_DIM);
    this.wrap(p.bio || "", 58).slice(0, 3).forEach((l, i) => this.text(l, 64, y + 182 + i * 30, 21, WHITE_CSS));
  }

  private drawLedger(y: number) {
    this.text("RECENT MOVES", 64, y + 6, 22, GREEN_DIM);
    if (!this.history.length) this.text("Nothing yet — fund a lane, fire a call.", 64, y + 48, 24, WHITE_CSS);
    this.history.slice(0, 7).forEach((r: any, i: number) => {
      const amt = r.amount_usd >= 0 ? `+$${r.amount_usd.toFixed(2)}` : `−$${Math.abs(r.amount_usd).toFixed(2)}`;
      this.text(amt.padStart(9), 64, y + 46 + i * 42, 23, r.amount_usd >= 0 ? GREEN_CSS : GREEN_DIM);
      this.text(String(r.description || r.type || "").slice(0, 44), 220, y + 46 + i * 42, 23, WHITE_CSS);
    });
    this.status = "THE FULL LEDGER LIVES IN THE BELL";
  }

  private drawLanes(y: number) {
    const m = this.meta;
    const inf = m?.lanes?.inference, dev = m?.lanes?.devtools;
    const panel = (label: string, w: any, x: number, active: boolean, live: boolean, note: string) => {
      const c = this.ctx;
      c.strokeStyle = active ? GREEN_CSS : GREEN_FAINT;
      c.lineWidth = active ? 3 : 2;
      c.strokeRect(x, y + 10, 420, 300);
      this.text(label, x + 28, y + 34, 24, active ? GREEN_CSS : GREEN_DIM);
      this.text(w ? `$${w.balance_usd.toFixed(2)}` : "$—", x + 28, y + 76, 56, WHITE_CSS, DISPLAY, "700");
      this.text(w ? `SPENT $${w.consumed_usd.toFixed(2)}` : "", x + 28, y + 152, 20, GREEN_DIM);
      this.wrap(note, 30).slice(0, 3).forEach((l, i) => this.text(l, x + 28, y + 196 + i * 28, 19, live ? WHITE_CSS : GREEN_DIM));
    };
    panel("INFERENCE", inf, 64, this.lane === "inference", true, "Bills the model rail. Live now.");
    panel("DEV TOOLS", dev, 64 + 456, this.lane === "devtools", false, "Metered catalog — routes opening. Fund ahead if you like.");
    this.status = "LEVER PICKS LANE · KEY FUNDS · HOLD = SWEEP";
  }
}

// ─────────────────────────── the device ───────────────────────────
function buildCardTexture(handle: string | null, variant: string | null): CanvasTexture {
  const cv = document.createElement("canvas");
  cv.width = 512; cv.height = 320;
  const c = cv.getContext("2d")!;
  const faces: Record<string, { top: string; bottom: string; fg: string; accent: string }> = {
    ink: { top: "#0C0C0B", bottom: "#191917", fg: "#FFFFFF", accent: GREEN_CSS },
    carbon: { top: "#151515", bottom: "#2B2B29", fg: "#E8E8E4", accent: GREEN_CSS },
    signal: { top: "#0AF77A", bottom: "#05C75F", fg: "#0A0A0A", accent: "#0A0A0A" },
    mint: { top: "#F2FFF8", bottom: "#BFFADA", fg: "#0A0A0A", accent: "#0B7A3E" },
    mono: { top: "#FFFFFF", bottom: "#E8E8E2", fg: "#0A0A0A", accent: "#0B7A3E" },
  };
  const v = faces[variant || "ink"] || faces.ink;
  const g = c.createLinearGradient(0, 0, 512, 320);
  g.addColorStop(0, v.top); g.addColorStop(1, v.bottom);
  c.fillStyle = g; c.fillRect(0, 0, 512, 320);
  // stripe V mark
  // the real mark: stem + band + detached stripe
  c.fillStyle = v.accent;
  c.fillRect(48, 40, 14, 96);
  c.save(); c.translate(66, 118); c.rotate(-0.78); c.fillRect(0, -16, 118, 32); c.restore();
  c.save(); c.translate(148, 128); c.rotate(-0.78); c.fillRect(0, -9, 56, 18); c.restore();
  c.font = `700 44px ${DISPLAY}`; c.fillStyle = v.fg;
  c.fillText(handle ? `@${handle}` : "VANTIS", 44, 250);
  c.font = `600 20px ${MONO}`; c.fillStyle = v.accent;
  c.fillText("VANTIS CARD", 46, 286);
  const tex = new CanvasTexture(cv);
  tex.colorSpace = SRGBColorSpace;
  tex.generateMipmaps = false;
  tex.minFilter = LinearFilter;
  return tex;
}

function contactShadowTexture(): CanvasTexture {
  const cv = document.createElement("canvas");
  cv.width = cv.height = 256;
  const c = cv.getContext("2d")!;
  const g = c.createRadialGradient(128, 128, 10, 128, 128, 126);
  g.addColorStop(0, "rgba(8,10,9,0.5)");
  g.addColorStop(0.6, "rgba(8,10,9,0.22)");
  g.addColorStop(1, "rgba(8,10,9,0)");
  c.fillStyle = g; c.fillRect(0, 0, 256, 256);
  const tex = new CanvasTexture(cv);
  tex.colorSpace = SRGBColorSpace;
  return tex;
}

function main() {
  const stage = document.getElementById("device-stage");
  if (!stage) return;

  const DPR = Math.min(1.5, devicePixelRatio || 1);
  let renderer: WebGLRenderer;
  try {
    renderer = new WebGLRenderer({ antialias: DPR < 1.5, alpha: true, powerPreference: "high-performance" });
  } catch {
    document.body.classList.add("dv-fail");
    return;
  }
  renderer.setPixelRatio(DPR);
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.12;
  stage.appendChild(renderer.domElement);
  renderer.domElement.setAttribute("aria-hidden", "true");

  const scene = new Scene();
  const pmrem = new PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

  const camera = new PerspectiveCamera(30, 1, 0.1, 20);
  camera.position.set(0, 0.98, 2.9);
  camera.lookAt(0, 0.3, 0);

  // materials
  const bodyMat = new MeshStandardMaterial({ color: 0x111312, roughness: 0.52, metalness: 0.3, envMapIntensity: 0.65 });
  const bezelMat = new MeshStandardMaterial({ color: 0x0a0b0a, roughness: 0.75, metalness: 0.25 });
  // The one saturated object: low env influence + a little self-emission so
  // tone mapping cannot wash the brand green toward mint.
  const greenMat = new MeshStandardMaterial({ color: GREEN, roughness: 0.42, metalness: 0, envMapIntensity: 0.3, emissive: GREEN, emissiveIntensity: 0.42 });
  greenMat.toneMapped = false;
  const seamMat = new MeshBasicMaterial({ color: GREEN });
  seamMat.toneMapped = false;
  const dimPipe = new Color(0x14402a);

  const device = new Group();
  scene.add(device);

  // deck — the control surface, raked gently toward the viewer
  const deck = new Group();
  const deckBody = new Mesh(new RoundedBoxGeometry(1.72, 0.15, 0.86, 4, 0.045), bodyMat);
  deck.add(deckBody);
  deck.position.set(0, 0, 0.16);
  deck.rotation.x = 0.1;
  device.add(deck);

  // head — the screen volume, hinged off the deck's back edge
  const head = new Group();
  const headBody = new Mesh(new RoundedBoxGeometry(1.72, 0.82, 0.13, 4, 0.045), bodyMat);
  head.add(headBody);
  const bezel = new Mesh(new BoxGeometry(1.5, 0.68, 0.02), bezelMat);
  bezel.position.set(0, 0.015, 0.062);
  head.add(bezel);
  const os = new ScreenOS();
  const screen = new Mesh(new PlaneGeometry(1.42, 0.6), new MeshBasicMaterial({ map: os.tex }));
  screen.position.set(0, 0.015, 0.078);
  head.add(screen);
  const glass = new Mesh(new PlaneGeometry(1.48, 0.66), new MeshStandardMaterial({ color: 0xffffff, transparent: true, opacity: 0.05, roughness: 0.12, metalness: 0, envMapIntensity: 1.6 }));
  glass.position.set(0, 0.015, 0.084);
  head.add(glass);
  head.position.set(0, 0.46, -0.32);
  head.rotation.x = -0.42;
  device.add(head);

  // the green seam where head meets deck — the only light on the body
  const seam = new Mesh(new BoxGeometry(1.66, 0.012, 0.012), seamMat);
  seam.position.set(0, 0.115, -0.30);
  device.add(seam);

  // knob — knurled cylinder on the deck's right
  const knob = new Group();
  const knobBody = new Mesh(new CylinderGeometry(0.135, 0.145, 0.1, 48), new MeshStandardMaterial({ color: 0x121413, roughness: 0.5, metalness: 0.45, envMapIntensity: 0.55 }));
  knob.add(knobBody);
  const fins = new InstancedMesh(new BoxGeometry(0.012, 0.085, 0.02), new MeshStandardMaterial({ color: 0x0d0e0d, roughness: 0.55, metalness: 0.5 }), 28);
  const dummy = new Object3D();
  for (let i = 0; i < 28; i++) {
    const a = (i / 28) * Math.PI * 2;
    dummy.position.set(Math.cos(a) * 0.138, 0, Math.sin(a) * 0.138);
    dummy.rotation.y = -a;
    dummy.updateMatrix();
    fins.setMatrixAt(i, dummy.matrix);
  }
  knob.add(fins);
  const index = new Mesh(new BoxGeometry(0.016, 0.012, 0.09), seamMat);
  index.position.set(0, 0.053, -0.085);
  knob.add(index);
  knob.position.set(0.56, 0.13, 0.28);
  deck.add(knob);

  // fire key — the one saturated green object
  const keyGroup = new Group();
  const keyCap = new Mesh(new RoundedBoxGeometry(0.3, 0.075, 0.3, 3, 0.03), greenMat);
  keyGroup.add(keyCap);
  const keyWell = new Mesh(new BoxGeometry(0.36, 0.02, 0.36), bezelMat);
  keyWell.position.y = -0.045;
  keyGroup.add(keyWell);
  keyGroup.position.set(-0.52, 0.11, 0.30);
  deck.add(keyGroup);

  // lane lever — two-position toggle between key and knob
  const lever = new Group();
  const leverBase = new Mesh(new RoundedBoxGeometry(0.24, 0.035, 0.1, 2, 0.015), bezelMat);
  lever.add(leverBase);
  const leverStick = new Mesh(new CylinderGeometry(0.022, 0.028, 0.09, 16), bodyMat);
  leverStick.position.y = 0.05;
  lever.add(leverStick);
  const leverTip = new Mesh(new CylinderGeometry(0.034, 0.034, 0.03, 16), greenMat);
  leverTip.position.y = 0.1;
  lever.add(leverTip);
  lever.position.set(0.05, 0.1, 0.3);
  deck.add(lever);

  // status pipes: INF / DEV
  const pipeGeom = new CylinderGeometry(0.016, 0.016, 0.02, 12);
  const infPipe = new Mesh(pipeGeom, new MeshBasicMaterial({ color: GREEN }));
  infPipe.position.set(-0.1, 0.085, 0.3);
  deck.add(infPipe);
  const devPipe = new Mesh(pipeGeom, new MeshBasicMaterial({ color: dimPipe }));
  devPipe.position.set(0.2, 0.085, 0.3);
  deck.add(devPipe);

  // the mark on the deck front bevel — the REAL logo geometry: vertical
  // stem, broad diagonal band, one detached parallel stripe (the same three
  // shapes the mascot folds back into)
  const markGroup = new Group();
  const stem = new Mesh(new BoxGeometry(0.016, 0.088, 0.008), seamMat);
  stem.position.set(-0.052, 0, 0);
  markGroup.add(stem);
  const band = new Mesh(new BoxGeometry(0.102, 0.03, 0.008), seamMat);
  band.rotation.z = 0.78;
  band.position.set(-0.006, 0, 0);
  markGroup.add(band);
  const stripe = new Mesh(new BoxGeometry(0.05, 0.018, 0.008), seamMat);
  stripe.rotation.z = 0.78;
  stripe.position.set(0.052, -0.028, 0);
  markGroup.add(stripe);
  // laid flat on the deck's raked top, near the front edge
  markGroup.position.set(0, 0.088, 0.5);
  markGroup.rotation.x = -Math.PI / 2 + 0.1;
  deck.add(markGroup);

  // card dock on the right side of the deck — the card stands mostly
  // seated, its face a plane with canonical UVs (no box-mapping guesswork)
  const cardGroup = new Group();
  const slot = new Mesh(new BoxGeometry(0.09, 0.03, 0.62), bezelMat);
  cardGroup.add(slot);
  // green hairline around the slot mouth — green means touchable
  const slotLip = new Mesh(new BoxGeometry(0.094, 0.004, 0.62), seamMat);
  slotLip.position.y = 0.017;
  cardGroup.add(slotLip);
  const card = new Group();
  const cardEdge = new Mesh(new BoxGeometry(0.016, 0.54, 0.86), new MeshStandardMaterial({ color: 0x1c1e1c, roughness: 0.5, metalness: 0.2 }));
  card.add(cardEdge);
  const cardFaceMat = new MeshStandardMaterial({ roughness: 0.38, metalness: 0.25, envMapIntensity: 0.7 });
  const cardFace = new Mesh(new PlaneGeometry(0.86, 0.54), cardFaceMat);
  cardFace.rotation.y = Math.PI / 2;
  cardFace.position.x = 0.0085;
  card.add(cardFace);
  const cardBack = new Mesh(new PlaneGeometry(0.86, 0.54), cardFaceMat);
  cardBack.rotation.y = -Math.PI / 2;
  cardBack.position.x = -0.0085;
  card.add(cardBack);
  card.rotation.z = -0.06;
  cardGroup.add(card);
  cardGroup.position.set(0.78, 0.05, 0.02);
  cardGroup.rotation.z = 0.1;
  device.add(cardGroup);

  // ground shadow
  const shadow = new Mesh(new PlaneGeometry(2.9, 1.9), new MeshBasicMaterial({ map: contactShadowTexture(), transparent: true, depthWrite: false }));
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = -0.14;
  scene.add(shadow);

  device.position.y = 0.02;

  // ── springs + interaction state ──
  const tiltX = new Spring(0, 60, 14), tiltY = new Spring(0, 60, 14);
  const knobRot = new Spring(0, 170, 20);
  const keyY = new Spring(0, 400, 24);
  const leverX = new Spring(-0.22, 240, 20);
  const cardSlide = new Spring(RM ? 0.18 : -0.5, 90, 16);
  const floatT = { t: 0 };

  const os_setMode = (m: number, quiet = false) => {
    const n = ((m % MODES.length) + MODES.length) % MODES.length;
    if (n === os.mode) return;
    os.mode = n; os.err = null; os.armed = null; os.dirty = true;
    knobRot.target = -n * (Math.PI * 2 / 8);
    if (!quiet) sound.detent(n);
    os.vireo.poke();
    syncDom();
    announce(`Mode: ${MODES[n]}`);
  };

  // ── DOM bridge ──
  const inputRow = document.getElementById("dv-input-row") as HTMLElement | null;
  const input = document.getElementById("dv-input") as HTMLInputElement | null;
  const goBtn = document.getElementById("dv-go") as HTMLButtonElement | null;
  const altBtn = document.getElementById("dv-alt") as HTMLButtonElement | null;
  const liveEl = document.getElementById("dv-live");
  const announce = (s: string) => { if (liveEl) liveEl.textContent = s; };

  const INPUT_MODES: Record<string, { ph: string; go: string }> = {
    CHAT: { ph: "Ask the rail anything…", go: "Fire" },
    SEARCH: { ph: "Search the open web…", go: "Search" },
    "X LOOKUP": { ph: "@handle", go: "Look up" },
  };
  function syncDom() {
    const name = os.modeName();
    const im = INPUT_MODES[name];
    if (inputRow) inputRow.style.display = im ? "flex" : "none";
    if (im && input) { input.placeholder = im.ph; }
    if (im && goBtn) goBtn.textContent = im.go;
    if (altBtn) {
      if (name === "HOME" || name === "LANES") { altBtn.style.display = ""; altBtn.textContent = name === "LANES" ? "Sweep lane" : "Fund lane"; }
      else altBtn.style.display = "none";
    }
  }

  // ── data ──
  async function loadMeta() {
    try {
      const r = await fetch("/api/playground/meta");
      if (!r.ok) return;
      os.meta = await r.json();
      if (os.meta?.handle) {
        cardFaceMat.map = buildCardTexture(os.meta.handle, os.meta.variant);
        cardFaceMat.needsUpdate = true;
        if (cardSlide.target < 0.18) { cardSlide.target = 0.18; if (!RM) setTimeout(() => sound.dock(), 380); }
      }
      os.dirty = true;
    } catch {}
  }
  async function loadHistory() {
    try {
      const r = await fetch("/api/credits/history");
      if (!r.ok) return;
      const j = await r.json();
      os.history = j.entries || [];
      os.dirty = true;
    } catch {}
  }

  addEventListener("vc-balances", ((e: CustomEvent) => {
    const d = e.detail || {};
    if (!os.meta) return;
    const prevMain = os.meta.main_balance_usd;
    os.meta.main_balance_usd = d.main ?? os.meta.main_balance_usd;
    for (const w of d.wallets || []) {
      const lane = w.purpose === "inference" ? os.meta.lanes?.inference : os.meta.lanes?.devtools;
      if (lane) { lane.balance_usd = w.balance_usd; lane.consumed_usd = w.consumed_usd; }
    }
    if (typeof d.main === "number" && d.main !== prevMain) os.vireo.set("happy");
    os.dirty = true;
    loadHistory();
  }) as EventListener);

  // ── actions ──
  function laneOf(name: "inference" | "devtools") {
    const l = os.meta?.lanes?.[name];
    return l ? { id: l.id, name: name === "inference" ? "Inference" : "Developer tools" } : null;
  }
  function requestFund(name: "inference" | "devtools") {
    const l = laneOf(name);
    if (!l) return;
    dispatchEvent(new CustomEvent("vc-device-fund", { detail: l }));
  }
  async function requestSweep(name: "inference" | "devtools") {
    const l = laneOf(name);
    if (!l) return;
    dispatchEvent(new CustomEvent("vc-device-sweep", { detail: l }));
  }

  let holdTimer: any = null, heldFired = false;

  // A press can be refused: the key does not sink when there is nothing to
  // fire. Returns whether the press was accepted, so the caller can skip the
  // travel animation and play the refusal instead.
  function canFire(): boolean {
    if (os.busy) return false;
    const im = INPUT_MODES[os.modeName()];
    if (im && !(input?.value || "").trim()) {
      input?.focus();
      os.vireo.set("alert"); os.dirty = true;
      sound.err();
      return false;
    }
    return true;
  }

  async function fire() {
    if (os.busy) return;
    const name = os.modeName();
    os.err = null;
    if (name === "HOME") { requestFund("inference"); return; }
    if (name === "LANES") { requestFund(os.lane); return; }
    if (name === "LEDGER") { loadHistory(); return; }
    const im = INPUT_MODES[name];
    const val = (input?.value || "").trim();
    if (im && !val) { input?.focus(); os.vireo.set("alert"); sound.err(); return; }

    // CHAT spends real money — so it arms first. First press prints the
    // quote (worst case at list price); the second press inside the window
    // actually fires. The anti-anxiety pattern the design panel converged on.
    if (name === "CHAT" && !os.armed) {
      const estIn = Math.ceil((val.length + 180) / 4);
      const worst = (estIn * 0.14 + 400 * 0.28) / 1e6;
      const burn = os.meta?.vantis_price_usd ? worst / os.meta.vantis_price_usd : null;
      os.armed = {
        until: performance.now() + 3000,
        quote: `UP TO $${worst.toFixed(6)}${burn ? ` · ~${burn.toFixed(4)} VANTIS` : ""} AT LIST`,
      };
      os.dirty = true;
      announce("Armed. Press again to fire.");
      return;
    }
    os.armed = null;

    os.busy = true; os.vireo.set("work"); os.vireo.flapRate = 3; os.dirty = true;
    try {
      if (name === "CHAT") {
        os.chat = { prompt: val, text: "", shown: 0, line: "" };
        const r = await fetch("/api/playground/fire", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ prompt: val }) });
        const j = await r.json();
        if (!r.ok) {
          os.chat = null;
          if (j.error === "lane_empty") {
            os.err = `Inference lane is empty — it needs about $${(j.required_usd || 0.001).toFixed(4)} for this call. Green key on HOME funds it.`;
            os.vireo.set("droop");
          } else if (j.error === "rate_limited") { os.err = "Easy — a few seconds between fires."; os.vireo.set("alert"); }
          else { os.err = "The rail refused that one. Try again."; os.vireo.set("alert"); }
          sound.err();
        } else {
          os.chat.text = j.text || "";
          os.chat.line = `${(j.latency_ms / 1000).toFixed(1)}s · ${j.tokens_out} TOK OUT · $${(j.cost_usd || 0).toFixed(6)} → ${(j.vantis_burned || 0).toFixed(4)} VANTIS BURNED`;
          if (os.meta?.lanes?.inference) os.meta.lanes.inference.balance_usd = j.lane_balance_usd;
          sound.ok();
          announce(`Answer: ${j.text}`);
        }
      } else if (name === "SEARCH") {
        const r = await fetch("/api/playground/search", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ query: val }) });
        const j = await r.json();
        if (!r.ok) {
          if (j.error === "demo_exhausted") os.err = "Today's free searches are spent — more tomorrow.";
          else os.err = "Search did not go through.";
          os.vireo.set("alert"); sound.err();
        } else { os.search = { query: val, results: j.results, left: j.left_today }; os.vireo.set("happy"); sound.ok(); announce(`${j.results.length} results`); }
      } else if (name === "X LOOKUP") {
        const r = await fetch("/api/playground/x", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ handle: val }) });
        const j = await r.json();
        if (!r.ok) {
          os.err = j.error === "demo_exhausted" ? "Today's free lookups are spent — more tomorrow."
            : j.error === "handle_not_found" ? "No such handle — check the spelling."
            : j.error === "tool_off" ? "This route is offline right now." : "Lookup did not go through.";
          os.vireo.set("alert"); sound.err();
        } else { os.xprof = { profile: j.profile, left: j.left_today }; os.vireo.set("happy"); sound.ok(); announce(`@${j.profile.handle}: ${j.profile.followers} followers`); }
      }
    } catch {
      os.err = "Network hiccup — try again.";
      os.vireo.set("alert"); sound.err();
    } finally {
      os.busy = false;
      if (os.vireo.state === "work") os.vireo.set("idle");
      os.dirty = true;
    }
  }

  let lastPointerAt = -1e9; // set by pointer handlers, read by the render loop

  // ── input plumbing ──
  // Raycasting the visible meshes (48-seg cylinder, 28 knurl instances,
  // rounded boxes) on every pointer event was a measurable stutter source.
  // Hit-testing runs against five invisible 12-triangle proxy boxes instead
  // — parented to the controls so they track every transform for free.
  const ray = new Raycaster();
  const ptr = new Vector2();
  let knobDrag: { x: number; base: number; acc: number } | null = null;

  const hitMat = new MeshBasicMaterial({ visible: false });
  const mkHit = (name: string, w: number, h: number, d: number, parent: Group, x = 0, y = 0, z = 0) => {
    const m = new Mesh(new BoxGeometry(w, h, d), hitMat);
    m.position.set(x, y, z);
    m.userData.hit = name;
    parent.add(m);
    return m;
  };
  const hitBoxes = [
    mkHit("knob", 0.34, 0.16, 0.34, knob),
    mkHit("key", 0.34, 0.14, 0.34, keyGroup),
    mkHit("lever", 0.26, 0.2, 0.14, lever, 0, 0.06, 0),
    mkHit("card", 0.1, 0.6, 0.9, cardGroup, 0, 0.28, 0),
    mkHit("screen", 1.44, 0.62, 0.06, head, 0, 0.015, 0.08),
  ];

  function pick(e: PointerEvent): string | null {
    const rect = renderer.domElement.getBoundingClientRect();
    ptr.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    ptr.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    ray.setFromCamera(ptr, camera);
    const hits = ray.intersectObjects(hitBoxes, false);
    return hits.length ? hits[0].object.userData.hit : null;
  }

  renderer.domElement.addEventListener("pointerdown", (e) => {
    lastPointerAt = performance.now();
    const what = pick(e);
    if (!what) return;
    os.vireo.poke();
    if (what === "knob") {
      knobDrag = { x: e.clientX, base: os.mode, acc: 0 };
      renderer.domElement.setPointerCapture(e.pointerId);
    } else if (what === "key") {
      if (!canFire()) return; // the key refuses to sink — tactile "no"
      keyY.target = -0.032;
      sound.press();
      heldFired = false;
      holdTimer = setTimeout(() => {
        heldFired = true;
        if (os.modeName() === "LANES") requestSweep(os.lane);
      }, 650);
    } else if (what === "lever") {
      os.lane = os.lane === "inference" ? "devtools" : "inference";
      leverX.target = os.lane === "inference" ? -0.22 : 0.22;
      sound.lever(); os.dirty = true;
      if (os.modeName() !== "LANES") os_setMode(5, true);
      announce(`Lane: ${os.lane}`);
    } else if (what === "card" || what === "screen") {
      os_setMode(0);
    }
  });
  let lastHoverAt = 0;
  let hover: string | null = null;
  renderer.domElement.addEventListener("pointermove", (e) => {
    lastPointerAt = performance.now();
    // parallax targets are just numbers — always cheap
    const rect = renderer.domElement.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    if (!RM) { tiltY.target = nx * 0.1; tiltX.target = ny * 0.055; }
    if (knobDrag) {
      const d = e.clientX - knobDrag.x;
      const steps = Math.round(d / 52);
      if (steps !== knobDrag.acc) {
        os_setMode(knobDrag.base + steps);
        knobDrag.acc = steps;
      }
      renderer.domElement.style.cursor = "grabbing";
      return;
    }
    // hover raycast at most every 80ms — pointermove can fire at 120Hz+
    const now = performance.now();
    if (now - lastHoverAt > 80) {
      lastHoverAt = now;
      hover = pick(e);
      renderer.domElement.style.cursor = hover ? "pointer" : "default";
    }
  });
  const endPointer = (e: PointerEvent) => {
    if (knobDrag) { knobDrag = null; try { renderer.domElement.releasePointerCapture(e.pointerId); } catch {} }
    if (keyY.target !== 0) {
      keyY.target = 0;
      clearTimeout(holdTimer);
      if (!heldFired) fire();
    }
  };
  renderer.domElement.addEventListener("pointerup", endPointer);
  renderer.domElement.addEventListener("pointerleave", (e) => { if (!knobDrag) { tiltX.target = 0; tiltY.target = 0; } endPointer(e as PointerEvent); });

  // Wheel turns the knob ONLY while hovering it — a trackpad scrolling the
  // page must never be hijacked into machine-gun mode changes. Deltas
  // accumulate to one detent per ~100 units so continuous trackpad wheels
  // step like a real detented dial.
  let wheelAcc = 0, wheelIdle: any = null;
  renderer.domElement.addEventListener("wheel", (e) => {
    if (hover !== "knob" && !knobDrag) return; // let the page scroll
    e.preventDefault();
    wheelAcc += e.deltaY;
    clearTimeout(wheelIdle);
    wheelIdle = setTimeout(() => (wheelAcc = 0), 200);
    while (Math.abs(wheelAcc) >= 100) {
      os_setMode(os.mode + (wheelAcc > 0 ? 1 : -1));
      wheelAcc -= Math.sign(wheelAcc) * 100;
    }
  }, { passive: false });

  const pressAndFire = () => {
    if (!canFire()) return;
    keyY.target = -0.032; setTimeout(() => (keyY.target = 0), 130);
    sound.press();
    fire();
  };
  addEventListener("keydown", (e) => {
    if (e.target === input) {
      if (e.key === "Enter") { e.preventDefault(); pressAndFire(); }
      return;
    }
    if ((e.target as HTMLElement)?.tagName === "INPUT" || (e.target as HTMLElement)?.tagName === "TEXTAREA") return;
    if (e.key === "ArrowRight") os_setMode(os.mode + 1);
    else if (e.key === "ArrowLeft") os_setMode(os.mode - 1);
    else if (e.key === "Enter") pressAndFire();
    else if (e.key.toLowerCase() === "l") {
      os.lane = os.lane === "inference" ? "devtools" : "inference";
      leverX.target = os.lane === "inference" ? -0.22 : 0.22;
      sound.lever(); os.dirty = true;
    }
  });

  goBtn?.addEventListener("click", pressAndFire);
  altBtn?.addEventListener("click", () => {
    const name = os.modeName();
    if (name === "LANES") requestSweep(os.lane);
    else requestFund("inference");
  });

  // ── sizing ──
  function resize() {
    const w = stage.clientWidth;
    const h = Math.max(360, Math.min(640, Math.round(w * 0.62)));
    renderer.setSize(w, h);
    camera.aspect = w / h;
    // keep the device fully framed on narrow screens
    camera.position.z = w < 560 ? 3.9 : w < 760 ? 3.4 : 3.05;
    camera.updateProjectionMatrix();
    os.dirty = true;
  }
  new ResizeObserver(resize).observe(stage);
  resize();

  // ── loop ──
  let last = performance.now();
  let raf = 0;
  // ── demand-driven rendering ──
  // The GPU renders only while something is worth watching: springs in
  // flight, the mascot awake, a call in flight, the pointer on the device,
  // or a fresh screen frame to present. Left alone, the device eases to
  // rest and rendering STOPS COMPLETELY — zero GPU at idle is the
  // difference between "smooth" and "why is my fan on" on weaker machines.
  const springs = [tiltX, tiltY, knobRot, keyY, leverX, cardSlide];
  function frame(now: number) {
    raf = requestAnimationFrame(frame);
    // Springs integrate on a clamped dt (stability); the OS runs on real
    // elapsed time — on a slow renderer the boot, typewriter and mascot
    // clocks must not crawl with the frame rate.
    const rawDt = Math.min(0.25, (now - last) / 1000);
    const dt = Math.min(0.05, rawDt);
    last = now;
    const t = now / 1000;
    floatT.t = t;

    const drew = os.step(rawDt, t);
    const pointerLive = now - lastPointerAt < 2500;
    // The mascot and typewriter live on the SCREEN — their motion reaches
    // the GPU through `drew` at sprite rate, so they never force full-rate
    // 3D rendering on their own.
    const active =
      !os.booted || os.busy || drew || pointerLive ||
      springs.some((s) => !s.settled());

    if (!active) {
      // ease the float to rest, then let the loop go quiet
      if (Math.abs(device.position.y - 0.02) > 0.0004) {
        device.position.y += (0.02 - device.position.y) * Math.min(1, dt * 3);
      } else {
        return; // nothing moving, nothing new — skip the render entirely
      }
    } else if (!RM && pointerLive) {
      device.position.y = 0.02 + Math.sin(t * 0.9) * 0.012;
    }
    if (!RM) {
      device.rotation.x = tiltX.step(dt);
      device.rotation.y = tiltY.step(dt);
    }
    knob.rotation.y = knobRot.step(dt);
    keyCap.position.y = keyY.step(dt);
    leverStick.rotation.z = leverX.step(dt);
    leverTip.position.x = Math.sin(leverX.v) * 0.06;
    leverTip.rotation.z = leverX.v;
    card.position.y = cardSlide.step(dt);
    (devPipe.material as MeshBasicMaterial).color.set(os.lane === "devtools" ? GREEN : 0x14402a);
    (infPipe.material as MeshBasicMaterial).color.set(os.lane === "inference" ? GREEN : 0x14402a);
    seamMat.color.setHex(GREEN).multiplyScalar(os.busy ? 0.75 + Math.sin(t * 9) * 0.25 : 1);

    renderer.render(scene, camera);
  }

  if (RM) {
    // render on demand: a slow interval catches state changes without a hot loop
    const tick = () => { os.step(1 / 30, performance.now() / 1000); knob.rotation.y = knobRot.target; keyCap.position.y = keyY.target; leverStick.rotation.z = leverX.target; card.position.y = cardSlide.target; renderer.render(scene, camera); };
    setInterval(tick, 250);
    tick();
  } else {
    // the loop runs only while the stage is actually on screen AND the tab
    // is visible — scrolling down the page must not keep the GPU warm
    let onScreen = true, running = false;
    const setLoop = () => {
      const want = onScreen && !document.hidden;
      if (want && !running) { running = true; last = performance.now(); raf = requestAnimationFrame(frame); }
      else if (!want && running) { running = false; cancelAnimationFrame(raf); }
    };
    new IntersectionObserver((entries) => { onScreen = entries[0]?.isIntersecting !== false; setLoop(); }, { threshold: 0.02 }).observe(stage);
    document.addEventListener("visibilitychange", setLoop);
    setLoop();
  }

  // boot — the console view folds away once the device is live (it reopens
  // from its summary at any time, and stays open when WebGL never starts)
  document.body.classList.add("dv-on");
  document.getElementById("dv-console")?.removeAttribute("open");
  syncDom();
  loadMeta().then(loadHistory);

  // probe hook — the headless checks read state and take deterministic shots
  (window as any).__device = {
    ready: true,
    os,
    setMode: (m: number) => os_setMode(m),
    pickAt: (x: number, y: number) => pick({ clientX: x, clientY: y } as any),
    frames: () => renderer.info.render.frame,
    fire,
    snapshot: () => { renderer.render(scene, camera); return renderer.domElement.toDataURL("image/png"); },
  };
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", main);
else main();
