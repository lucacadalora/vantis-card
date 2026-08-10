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
  Raycaster, Vector2, Vector3, PMREMGenerator, InstancedMesh, Object3D, Color, DirectionalLight,
  TextureLoader, RepeatWrapping, Quaternion, Euler, Shape, ExtrudeGeometry,
  LinearMipmapLinearFilter,
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
const PHOS_HI = "#CFFFE2";   // phosphor peak — takes the place of white on-screen
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
// At rest it IS the brand mark — drawn from the real V_MARK vector paths,
// pixel-perfect, not an approximation. Woken, it swaps (300ms crossfade +
// hop) into a crisp axis-aligned PIXEL-ART dart-bird: every rect sits on
// the sprite grid, the wing flaps by shifting cells (classic two-frame
// sprite), never by rotating — rotation is what made it mush. One ink eye,
// a stepped beak, no mouth, no limbs.
const MARK_PATHS = [
  new Path2D("M20 0 L47 1 L47 213 L238 23 L239 104 L90 253 L0 253 L0 20 Z"),
  new Path2D("M238 151 L239 215 L203 253 L134 253 Z"),
];
const MARK_VB = { w: 240, h: 254 };
function drawMark(ctx: CanvasRenderingContext2D, x: number, y: number, size: number, color: string, alpha = 1) {
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.translate(x, y);
  ctx.scale(size / MARK_VB.w, size / MARK_VB.w);
  ctx.fillStyle = color;
  for (const path of MARK_PATHS) ctx.fill(path);
  ctx.restore();
}

// Bird cells on a 24×18 grid — [x, y, w, h] per rect, PERCHED (no legs —
// legs are what made it read as a dog). Rounded corners on the big cells
// keep it pixel-chunky but smooth.
const BIRD_BODY: number[][] = [
  [5, 8, 12, 7],    // body
  [12, 3, 6, 6],    // head, sitting ON the body — no neck gap
  [1, 6, 3, 3],     // tail tick, raised
  [3, 8, 3, 3],     // tail joint
];
const BEAK: number[][] = [[18, 5, 3, 2]];
const WING_UP: number[][] = [[6, 4, 8, 4]];
const WING_MID: number[][] = [[6, 9, 8, 4]];
const WING_DN: number[][] = [[7, 12, 7, 3]];
const EYE: number[] = [15.2, 4.6, 1.6, 1.6];

type VireoState = "sleep" | "wake" | "idle" | "work" | "happy" | "droop" | "alert";
class Vireo {
  state: VireoState = "sleep";
  t = 0;                 // seconds in state
  unfold = 0;            // 0 = brand mark, 1 = bird (crossfade)
  flapRate = 0;          // wing beats/sec while working
  blinkAt = 2.5;
  hopV = 0; hopY = 0;
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
    this.unfold += (target - this.unfold) * Math.min(1, dt * (this.state === "wake" ? 9 : 5));
    if (this.state === "wake" && this.unfold > 0.98) { this.set("idle"); this.hopV = -34; }
    if (this.state === "happy" && this.t > 1.5) this.set("idle");
    if (this.state === "alert" && this.t > 1.1) this.set("idle");
    if (this.state === "idle" && this.t > 45) { this.state = "sleep"; this.t = 0; }
    // hop physics
    this.hopV += 340 * dt; this.hopY = Math.max(0, this.hopY - this.hopV * dt * 0.28);
    if (this.hopY === 0 && this.hopV > 0) this.hopV = 0;
    if (this.state === "happy" && this.hopY === 0 && this.t < 1.0 && this.hopV === 0) this.hopV = -40;
    if (this.t > this.blinkAt) this.blinkAt = this.t + 2.5 + Math.random() * 3.5;
  }
  blinking() { return this.state !== "sleep" && this.t > this.blinkAt - 0.12 && this.t < this.blinkAt; }
  // which flap frame is showing at stepped time
  private wingCells(ts: number): number[][] {
    if (this.state === "work") {
      const rate = Math.max(3, this.flapRate);
      return Math.floor(ts * rate * 2) % 2 ? WING_UP : WING_DN;
    }
    if (this.state === "happy") return Math.floor(ts * 8) % 2 ? WING_UP : WING_DN;
    if (this.state === "droop") return WING_DN;
    // idle: an occasional lazy adjust
    return Math.floor(ts) % 7 === 6 ? WING_UP : WING_MID;
  }
  draw(ctx: CanvasRenderingContext2D, ox: number, oy: number, S: number, now: number) {
    // Stepped time — the sprite animates at 10fps deliberately.
    const ts = Math.floor(now * 10) / 10;
    const markAlpha = 1 - Math.min(1, this.unfold * 1.6);
    const birdAlpha = Math.max(0, this.unfold * 1.4 - 0.4);
    const H_SPRITE = 18 * S;
    if (markAlpha > 0.01) {
      const breathe = 1 + Math.sin(ts * 1.1) * 0.012;
      const size = 15 * S * breathe;
      drawMark(ctx, ox + (24 * S - size) / 2, oy + H_SPRITE - size * (MARK_VB.h / MARK_VB.w), size, GREEN_CSS, markAlpha);
    }
    if (birdAlpha > 0.01) {
      const droop = this.state === "droop";
      const bob = this.state === "idle" && Math.floor(ts * 2) % 4 === 3 ? 0.6 : 0; // soft breathing dip
      ctx.save();
      ctx.globalAlpha = birdAlpha;
      ctx.fillStyle = GREEN_CSS;
      const cell = (cx: number, cy: number, cw: number, ch: number, r = 0) => {
        const px = ox + cx * S, py = oy + (cy + bob - this.hopY / 24) * S;
        if (r > 0) { ctx.beginPath(); (ctx as any).roundRect(px, py, cw * S, ch * S, r * S); ctx.fill(); }
        else ctx.fillRect(px, py, cw * S, ch * S);
      };
      for (const [x, y, w, h] of BIRD_BODY) {
        const dy = droop && x >= 12 && y <= 4 ? y + 2 : y;
        cell(x, dy, w, h, Math.min(w, h) * 0.42);
      }
      for (const [x, y, w, h] of BEAK) cell(x, droop ? y + 2 : y, w, h, 0.6);
      for (const [x, y, w, h] of this.wingCells(ts)) cell(x, droop ? y + 2 : y, w, h, 1.1);
      if (!this.blinking()) {
        ctx.fillStyle = SCREEN_BG;
        const ey = droop ? EYE[1] + 2 : EYE[1];
        ctx.fillRect(ox + EYE[0] * S, oy + (ey + bob - this.hopY / 24) * S, EYE[2] * S, EYE[3] * S);
      }
      ctx.restore();
    }
  }
}

const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

// ─────────────────────────── screen OS ───────────────────────────
const W = 1024, H = 768;
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
  powered = RM; // the screen stays dark until the card seats — the ritual
  busy = false;
  status = "";
  // chat / search / x result state
  chat: { prompt: string; text: string; shown: number; line: string } | null = null;
  chatLog: { prompt: string; text: string; line: string }[] = [];
  search: { query: string; results: any[]; left: number } | null = null;
  xprof: { profile: any; left: number } | null = null;
  err: string | null = null;
  armed: { until: number; quote: string } | null = null;
  tabRects: { x: number; y: number; w: number; h: number; mode: number }[] = [];
  stepRan = 0; drawRan = 0; // instrumentation
  private lastDrawAt = -1e9;
  private crt: HTMLCanvasElement | null = null;

  // Scanlines + vignette, drawn once and composited over every frame — the
  // cheap 90% of a CRT. The rest (glow) is per-element shadowBlur on
  // headline text only.
  private crtOverlay(): HTMLCanvasElement {
    if (this.crt) return this.crt;
    const cv = document.createElement("canvas");
    cv.width = W * 1.5; cv.height = H * 1.5;
    const c = cv.getContext("2d")!;
    c.fillStyle = "rgba(0,0,0,0.16)";
    for (let y = 0; y < cv.height; y += 5) c.fillRect(0, y, cv.width, 2);
    const g = c.createRadialGradient(cv.width / 2, cv.height / 2, cv.height * 0.34, cv.width / 2, cv.height / 2, cv.height * 0.92);
    g.addColorStop(0, "rgba(0,0,0,0)");
    g.addColorStop(1, "rgba(0,6,3,0.42)");
    c.fillStyle = g;
    c.fillRect(0, 0, cv.width, cv.height);
    this.crt = cv;
    return cv;
  }
  dirty = true;
  private acc = 0;

  private lastKey = "";

  constructor() {
    // logical space stays 1024×768; the backing store renders 1.5x so the
    // texture is crisp at DPR 2 on a large stage — "HD" is literal
    this.canvas.width = W * 1.5; this.canvas.height = H * 1.5;
    this.ctx = this.canvas.getContext("2d")!;
    this.ctx.setTransform(1.5, 0, 0, 1.5, 0, 0);
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
    const phase = !this.powered ? Math.floor(now * 2) : !this.booted || animating || this.busy ? Math.floor(now * 10) : 0;
    const m = this.meta;
    return [
      this.mode, this.lane, this.powered, this.booted, this.busy, this.err, this.status,
      this.armed?.quote, phase, v.state,
      this.chat ? `${this.chat.prompt}|${Math.floor(this.chat.shown)}|${this.chat.line}` : "",
      this.chatLog.length,
      this.search?.query, this.search?.results?.length, this.xprof?.profile?.handle,
      this.history.length,
      m ? `${m.main_balance_usd}|${m.lanes?.inference?.balance_usd}|${m.lanes?.devtools?.balance_usd}|${m.handle}` : "",
    ].join("~");
  }

  step(dt: number, now: number) {
    this.stepRan++;
    if (this.powered && !this.booted) { this.bootT += dt; if (this.bootT > 2.1) this.booted = true; }
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
    this.acc = Math.max(0, this.acc + dt);
    const interval = !this.booted ? 0.05 : 0.1;
    // the keepalive must be able to fire even when the accumulator is unwell
    if (this.acc >= interval || now - this.lastDrawAt > 2) {
      this.acc = 0;
      const key = this.frameKey(now);
      // The 2s keepalive repaints even an unchanged frame: browsers are
      // allowed to evict canvas/texture memory behind our back (canvas
      // hibernation, context restore), and a periodic repaint+upload
      // self-heals every flavor of that within two seconds.
      if (key !== this.lastKey || now - this.lastDrawAt > 2) {
        this.lastKey = key;
        this.lastDrawAt = now;
        this.drawRan++;
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

    if (!this.powered) {
      // dark screen, a patient cursor — the card is on its way in
      this.ctx.shadowColor = GREEN_CSS; this.ctx.shadowBlur = 8;
      this.text("NO CARD", W / 2 - 118, H / 2 - 64, 52, GREEN_CSS, DISPLAY, "700");
      this.ctx.shadowBlur = 0;
      if (Math.floor(now * 2) % 2 === 0) this.text("TAP THE CARTRIDGE TO START", W / 2 - 196, H / 2 + 22, 24, GREEN_DIM);
      this.compositeCrt();
      return;
    }
    if (!this.booted) {
      // boot: a terminal self-test types itself out, then the OS takes over
      const t = this.bootT;
      const name = this.meta?.handle ? "@" + String(this.meta.handle).replace(/^@+/, "").toUpperCase() : "…";
      const LINES = [
        "VANTIS UNIFIED OPERATING SYSTEM",
        "COPYRIGHT 2026 VANTIS.SH",
        "WLT-01 WALLET TERMINAL",
        "",
        "MEMORY CHECK ............... OK",
        "RAIL LINK .................. OK",
        `CARD ....................... ${name}`,
        "LANES ...................... INF · DEV",
        "",
        "BOOT COMPLETE",
      ];
      const CHARS_PER_SEC = 340;
      let budget = Math.floor(t * CHARS_PER_SEC);
      let y = 96;
      this.ctx.shadowColor = GREEN_CSS; this.ctx.shadowBlur = 7;
      for (const line of LINES) {
        if (budget <= 0) break;
        const shown = line.slice(0, budget);
        budget -= line.length + 6; // line pause
        this.text(shown, 72, y, 24, GREEN_CSS);
        y += 40;
      }
      this.ctx.shadowBlur = 0;
      if (Math.floor(now * 3) % 2 === 0) { this.ctx.fillStyle = GREEN_CSS; this.ctx.fillRect(72, y + 4, 15, 26); }
      this.compositeCrt();
      return;
    }

    // ── chrome: mode tabs (clickable — rects recorded for the ray→uv map) ──
    this.tabRects = [];
    let x = 44;
    for (let i = 0; i < MODES.length; i++) {
      const on = i === this.mode;
      c.font = `600 22px ${MONO}`;
      const w = c.measureText(MODES[i]).width;
      if (on) {
        c.fillStyle = GREEN_CSS;
        c.beginPath(); (c as any).roundRect(x - 14, 24, w + 28, 40, 8); c.fill();
      }
      this.text(MODES[i], x, 33, 22, on ? SCREEN_BG : GREEN_DIM);
      this.tabRects.push({ x: x - 14, y: 16, w: w + 28, h: 56, mode: i });
      x += w + 42;
    }
    const main = this.meta ? `$${(this.meta.main_balance_usd || 0).toFixed(2)}` : "$—";
    c.font = `600 22px ${MONO}`;
    this.text(`MAIN ${main}`, W - 44 - c.measureText(`MAIN ${main}`).width, 33, 22, PHOS_HI);
    c.fillStyle = GREEN_FAINT; c.fillRect(44, 80, W - 88, 2);

    const body = 108;
    const name = this.modeName();
    if (this.err) {
      this.text("PROBLEM", 64, body + 8, 22, GREEN_DIM);
      this.wrap(this.err, 52).slice(0, 4).forEach((l, i) => this.text(l, 64, body + 46 + i * 34, 24, PHOS_HI));
    } else if (name === "HOME") this.drawHome(body);
    else if (name === "CHAT") this.drawChat(body);
    else if (name === "SEARCH") this.drawSearch(body);
    else if (name === "X LOOKUP") this.drawX(body);
    else if (name === "LEDGER") this.drawLedger(body);
    else this.drawLanes(body);

    // ── bottom rail: mascot + status ──
    c.fillStyle = GREEN_FAINT; c.fillRect(44, H - 140, W - 88, 2);
    this.vireo.draw(c, 52, H - 126, 6, now);
    const hint = this.busy ? "WORKING…" : this.status || "TAP A TAB · GREEN KEY FIRES";
    c.font = `600 21px ${MONO}`;
    this.text(hint, W - 44 - c.measureText(hint).width, H - 72, 21, this.busy ? GREEN_CSS : GREEN_DIM);
    this.compositeCrt();
  }

  private compositeCrt() {
    const c = this.ctx;
    c.save();
    c.setTransform(1, 0, 0, 1, 0, 0);
    c.drawImage(this.crtOverlay(), 0, 0);
    c.restore();
  }

  private drawHome(y: number) {
    const m = this.meta;
    const inf = m?.lanes?.inference, dev = m?.lanes?.devtools;
    // left column — the money
    this.text("ONE CARD. EVERY RAIL.", 44, y + 2, 21, GREEN_DIM);
    this.ctx.shadowColor = GREEN_CSS; this.ctx.shadowBlur = 10;
    this.text(m ? `$${(m.main_balance_usd || 0).toFixed(2)}` : "$—", 44, y + 34, 104, PHOS_HI, DISPLAY, "700");
    this.ctx.shadowBlur = 0;
    this.text("MAIN BALANCE", 46, y + 156, 20, GREEN_DIM);
    if (m?.tier) {
      const c = this.ctx;
      c.font = `600 20px ${MONO}`;
      const tierTxt = `TIER ${String(m.tier).toUpperCase()}`;
      const tw = c.measureText(tierTxt).width;
      c.strokeStyle = GREEN_DIM; c.lineWidth = 2;
      c.beginPath(); (c as any).roundRect(44, y + 198, tw + 28, 38, 19); c.stroke();
      this.text(tierTxt, 58, y + 207, 20, GREEN_CSS);
      this.text(`${(m.vantis_burned || 0).toFixed(2)} VANTIS BURNED`, 94 + tw, y + 207, 20, GREEN_DIM);
    }
    // right column — the lanes
    const lane = (label: string, w: any, yy: number, live: boolean) => {
      const c = this.ctx;
      this.text(label, 560, yy, 22, live ? GREEN_CSS : GREEN_DIM);
      const bal = w ? `$${w.balance_usd.toFixed(2)}` : "$—";
      c.font = `700 30px ${DISPLAY}`;
      this.text(bal, W - 44 - c.measureText(bal).width, yy - 6, 30, PHOS_HI, DISPLAY, "700");
      const total = Math.max(0.01, (m?.main_balance_usd || 0) + (inf?.balance_usd || 0) + (dev?.balance_usd || 0));
      const bw = Math.max(6, ((w?.balance_usd || 0) / total) * 420);
      c.fillStyle = "rgba(9,248,117,0.16)"; c.fillRect(560, yy + 44, 420, 10);
      c.fillStyle = live ? GREEN_CSS : GREEN_DIM; c.fillRect(560, yy + 44, bw, 10);
      this.text(live ? "LIVE — BILLS THE MODEL RAIL" : "ROUTES OPENING — FUND AHEAD", 560, yy + 68, 18, GREEN_DIM);
    };
    lane("INFERENCE", inf, y + 10, true);
    lane("DEV TOOLS", dev, y + 130, false);
    // footer of the body — the latest move keeps the screen alive
    const last = this.history[0];
    if (last) {
      const amt = last.amount_usd >= 0 ? `+$${last.amount_usd.toFixed(2)}` : `−$${Math.abs(last.amount_usd).toFixed(2)}`;
      this.text("LAST MOVE", 44, y + 268, 18, GREEN_DIM);
      this.text(`${amt}  ${String(last.description || "").slice(0, 52)}`, 200, y + 268, 20, PHOS_HI);
    }
    this.status = "GREEN KEY = FUND INFERENCE";
  }

  private drawChat(y: number) {
    const ch = this.chat;
    if (this.armed) {
      this.text("QUOTE", 64, y + 6, 22, GREEN_DIM);
      this.text(this.armed.quote, 64, y + 44, 25, PHOS_HI);
      this.text("ARMED — PRESS AGAIN TO FIRE", 64, y + 100, 30, GREEN_CSS, DISPLAY, "700");
      this.status = "FIRST FIRE ARMS · AFTER THAT IT JUST FIRES";
      return;
    }
    if (!ch && !this.chatLog.length) {
      this.text("TEST-FIRE THE RAIL", 64, y + 6, 22, GREEN_DIM);
      this.text("DeepSeek V4 Flash. Real call, real cost,", 64, y + 44, 26, PHOS_HI);
      this.text("billed to your Inference lane.", 64, y + 80, 26, PHOS_HI);
      this.text("Type below, then press the green key.", 64, y + 138, 24, GREEN_DIM);
      this.status = "TYPE A PROMPT · GREEN KEY FIRES";
      return;
    }
    // rolling transcript — history dim, the live exchange bright
    const lines: { t: string; c: string; px: number }[] = [];
    for (const e of this.chatLog.slice(-3)) {
      lines.push({ t: "> " + e.prompt.slice(0, 58), c: GREEN_FAINT, px: 21 });
      for (const l of this.wrap(e.text, 62).slice(0, 4)) lines.push({ t: l, c: GREEN_DIM, px: 22 });
      if (e.line) lines.push({ t: e.line, c: GREEN_FAINT, px: 18 });
    }
    if (ch) {
      lines.push({ t: "> " + ch.prompt.slice(0, 58), c: GREEN_DIM, px: 21 });
      const shown = ch.text.slice(0, Math.floor(ch.shown));
      for (const l of this.wrap(shown, 62)) lines.push({ t: l, c: PHOS_HI, px: 24 });
      if (this.busy && !ch.text) lines.push({ t: Math.floor(Date.now() / 400) % 2 ? "▍" : "", c: GREEN_CSS, px: 24 });
      if (ch.line && ch.shown >= ch.text.length) lines.push({ t: ch.line, c: GREEN_CSS, px: 19 });
    }
    const max = 13;
    const view = lines.slice(-max);
    view.forEach((l, i) => this.text(l.t, 64, y + 4 + i * 33, l.px, l.c));
    this.status = "SETTLES FROM REAL USAGE";
  }

  private drawSearch(y: number) {
    const s = this.search;
    if (!s) {
      this.text("WEB SEARCH — EXA CLASS", 64, y + 6, 22, GREEN_DIM);
      this.text("One real query against the open web.", 64, y + 44, 26, PHOS_HI);
      const t = this.meta?.tools?.find((t: any) => t.key === "search");
      this.text(t ? `${t.left_today} OF ${t.per_day} ON THE HOUSE TODAY` : "", 64, y + 100, 22, GREEN_DIM);
      this.status = "TYPE A QUERY · GREEN KEY FIRES";
      return;
    }
    this.text("? " + s.query.slice(0, 46), 64, y + 4, 22, GREEN_DIM);
    s.results.slice(0, 5).forEach((r: any, i: number) => {
      this.text((r.title || "").slice(0, 54), 64, y + 42 + i * 62, 24, PHOS_HI);
      this.text((r.url || "").replace(/^https?:\/\//, "").slice(0, 58), 64, y + 42 + i * 62 + 28, 19, GREEN_DIM);
    });
    this.text(`${s.left} LEFT TODAY`, 64, y + 358, 20, GREEN_CSS);
  }

  private drawX(y: number) {
    const p = this.xprof?.profile;
    if (!p) {
      this.text("X PROFILE LOOKUP", 64, y + 6, 22, GREEN_DIM);
      this.text("Public metrics for any handle —", 64, y + 44, 26, PHOS_HI);
      this.text("the same read the scoring agent makes.", 64, y + 80, 26, PHOS_HI);
      const t = this.meta?.tools?.find((t: any) => t.key === "x");
      this.text(t?.status === "off" ? "ROUTE OFFLINE" : t ? `${t.left_today} OF ${t.per_day} ON THE HOUSE TODAY` : "", 64, y + 138, 22, GREEN_DIM);
      this.status = "TYPE @HANDLE · GREEN KEY FIRES";
      return;
    }
    this.text(`@${p.handle}`, 64, y + 4, 34, PHOS_HI, DISPLAY, "700");
    this.text(String(p.name || "").slice(0, 40), 64, y + 50, 22, GREEN_DIM);
    const fmt = (n: number) => (n >= 1e6 ? (n / 1e6).toFixed(1) + "M" : n >= 1e3 ? (n / 1e3).toFixed(1) + "K" : String(n));
    this.text(`${fmt(p.followers)} FOLLOWERS · ${fmt(p.posts)} POSTS`, 64, y + 96, 26, GREEN_CSS);
    if (p.created_at) this.text(`SINCE ${String(p.created_at).slice(0, 4)}`, 64, y + 138, 22, GREEN_DIM);
    this.wrap(p.bio || "", 58).slice(0, 3).forEach((l, i) => this.text(l, 64, y + 182 + i * 30, 21, PHOS_HI));
  }

  private drawLedger(y: number) {
    this.text("RECENT MOVES", 64, y + 6, 22, GREEN_DIM);
    if (!this.history.length) this.text("Nothing yet — fund a lane, fire a call.", 64, y + 48, 24, PHOS_HI);
    this.history.slice(0, 7).forEach((r: any, i: number) => {
      const amt = r.amount_usd >= 0 ? `+$${r.amount_usd.toFixed(2)}` : `−$${Math.abs(r.amount_usd).toFixed(2)}`;
      this.text(amt.padStart(9), 64, y + 46 + i * 42, 23, r.amount_usd >= 0 ? GREEN_CSS : GREEN_DIM);
      this.text(String(r.description || r.type || "").slice(0, 44), 220, y + 46 + i * 42, 23, PHOS_HI);
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
      this.text(w ? `$${w.balance_usd.toFixed(2)}` : "$—", x + 28, y + 76, 56, PHOS_HI, DISPLAY, "700");
      this.text(w ? `SPENT $${w.consumed_usd.toFixed(2)}` : "", x + 28, y + 152, 20, GREEN_DIM);
      this.wrap(note, 30).slice(0, 3).forEach((l, i) => this.text(l, x + 28, y + 196 + i * 28, 19, live ? PHOS_HI : GREEN_DIM));
    };
    panel("INFERENCE", inf, 64, this.lane === "inference", true, "Bills the model rail. Live now.");
    panel("DEV TOOLS", dev, 64 + 456, this.lane === "devtools", false, "Metered catalog — routes opening. Fund ahead if you like.");
    this.status = "LEVER PICKS LANE · KEY FUNDS · HOLD = SWEEP";
  }
}

// ─────────────────────────── the device ───────────────────────────
// ─────────────── the minted card, replicated exactly ───────────────
// Reference grid = the live card object (400×252 CSS px) at 3× → 1200×756.
// Every position below is spec px ×3 from server/pages.ts CARD_CSS. The
// font stack matches the site's CSS stack — the fleet ships no webfonts, so
// canvas + DOM resolve identically.
const CARD_W = 1200, CARD_H = 756, CARD_R = 60;
const F_DISPLAY = "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
const F_MONO = "'SF Mono', ui-monospace, Menlo, Consolas, monospace";
const CARD_PALETTES: Record<string, { bg: [string, string, string]; tex: string; fg: string; acc: string; sub: string; edge: string }> = {
  ink: { bg: ["#0C0C0B", "#191917", "#0E0E0D"], tex: "rgba(255,255,255,0.022)", fg: "#FFFFFF", acc: "#09F875", sub: "rgba(255,255,255,0.52)", edge: "rgba(255,255,255,0.10)" },
  carbon: { bg: ["#151515", "#2B2B29", "#1A1A18"], tex: "rgba(255,255,255,0.02)", fg: "#E8E8E4", acc: "#09F875", sub: "rgba(232,232,228,0.5)", edge: "rgba(255,255,255,0.09)" },
  signal: { bg: ["#0AF77A", "#07DE6C", "#05C75F"], tex: "rgba(10,10,10,0.05)", fg: "#0A0A0A", acc: "#0A0A0A", sub: "rgba(10,10,10,0.55)", edge: "rgba(10,10,10,0.14)" },
  mint: { bg: ["#F2FFF8", "#D3FFE7", "#BFFADA"], tex: "rgba(10,10,10,0.035)", fg: "#0A0A0A", acc: "#0B7A3E", sub: "rgba(10,10,10,0.5)", edge: "rgba(10,10,10,0.10)" },
  mono: { bg: ["#FFFFFF", "#F1F1ED", "#E8E8E2"], tex: "rgba(10,10,10,0.03)", fg: "#0A0A0A", acc: "#0B7A3E", sub: "rgba(10,10,10,0.5)", edge: "rgba(10,10,10,0.10)" },
};

function cardCanvasBase(c: CanvasRenderingContext2D, bg: [string, string, string], tex: string, edge: string, glowAt: [number, number], glowA: number) {
  // rounded clip — corners stay transparent, the extruded rim shows through
  c.clearRect(0, 0, CARD_W, CARD_H);
  c.beginPath();
  (c as any).roundRect(0, 0, CARD_W, CARD_H, CARD_R);
  c.clip();
  const g = c.createLinearGradient(0, 0, CARD_W, CARD_H); // 135°
  g.addColorStop(0, bg[0]); g.addColorStop(0.55, bg[1]); g.addColorStop(1, bg[2]);
  c.fillStyle = g;
  c.fillRect(0, 0, CARD_W, CARD_H);
  const glow = c.createRadialGradient(glowAt[0], glowAt[1], 0, glowAt[0], glowAt[1], 740);
  glow.addColorStop(0, `rgba(255,255,255,${glowA})`); glow.addColorStop(0.55, "rgba(255,255,255,0)");
  c.fillStyle = glow;
  c.fillRect(0, 0, CARD_W, CARD_H);
  // brushed stripes, 105° field
  c.save();
  c.translate(CARD_W / 2, CARD_H / 2);
  c.rotate((15 * Math.PI) / 180);
  c.fillStyle = tex;
  for (let x = -CARD_W; x < CARD_W; x += 15) c.fillRect(x, -CARD_H, 3, CARD_H * 2);
  c.restore();
  // edge hairline + bevels
  c.strokeStyle = edge; c.lineWidth = 3;
  c.beginPath(); (c as any).roundRect(1.5, 1.5, CARD_W - 3, CARD_H - 3, CARD_R - 1.5); c.stroke();
  c.strokeStyle = "rgba(255,255,255,0.14)";
  c.beginPath(); c.moveTo(CARD_R, 3.5); c.lineTo(CARD_W - CARD_R, 3.5); c.stroke();
  c.strokeStyle = "rgba(0,0,0,0.18)";
  c.beginPath(); c.moveTo(CARD_R, CARD_H - 3.5); c.lineTo(CARD_W - CARD_R, CARD_H - 3.5); c.stroke();
}

function cardText(c: CanvasRenderingContext2D, txt: string, x: number, y: number, font: string, color: string, opts: { align?: CanvasTextAlign; ls?: number } = {}) {
  c.font = font;
  c.fillStyle = color;
  c.textAlign = opts.align || "left";
  c.textBaseline = "alphabetic";
  if (opts.ls && "letterSpacing" in c) { (c as any).letterSpacing = `${opts.ls}px`; }
  c.fillText(txt, x, y);
  if ("letterSpacing" in c) (c as any).letterSpacing = "0px";
}

function mkCardTexture(cv: HTMLCanvasElement): CanvasTexture {
  const tex = new CanvasTexture(cv);
  tex.colorSpace = SRGBColorSpace;
  // deliberate deviation from the no-mip recipe: the 3px stripe fields
  // shimmer at oblique angles without mips
  tex.generateMipmaps = true;
  tex.minFilter = LinearMipmapLinearFilter;
  tex.anisotropy = 4;
  return tex;
}

function buildCardFaces(o: { handle: string | null; variant: string | null; stamp?: string; tierLabel?: string; grantStr?: string }): { front: CanvasTexture; back: CanvasTexture } {
  const v = CARD_PALETTES[o.variant || "ink"] || CARD_PALETTES.ink;
  const handle = (o.handle || "").replace(/^@+/, "");
  const shown = handle ? `@${handle}` : "VANTIS";
  const stamp = o.stamp || "RESERVED";

  // ── FRONT ──
  const fcv = document.createElement("canvas");
  fcv.width = CARD_W; fcv.height = CARD_H;
  const f = fcv.getContext("2d")!;
  f.save();
  cardCanvasBase(f, v.bg, v.tex, v.edge, [216, 0], 0.09);
  // header: V mark + wordmark left, stamp right
  drawMark(f, 72, 60, 45.4, v.acc);
  cardText(f, "VANTIS", 141, 102, `700 42px ${F_DISPLAY}`, v.fg, { ls: 3.36 });
  cardText(f, stamp, 1128, 96, `500 33px ${F_MONO}`, v.sub, { align: "right" });
  // holo chip
  f.save();
  f.beginPath(); (f as any).roundRect(72, 204, 132, 96, 21); f.clip();
  const holo = f.createLinearGradient(72, 204, 204, 300); // 120°-ish across the chip
  holo.addColorStop(0, "#9BFFC9"); holo.addColorStop(0.22, "#09F875"); holo.addColorStop(0.45, "#58D5FF");
  holo.addColorStop(0.65, "#C79BFF"); holo.addColorStop(0.82, "#FFE79B"); holo.addColorStop(1, "#09F875");
  f.fillStyle = holo;
  f.fillRect(72, 204, 132, 96);
  f.fillStyle = "rgba(10,10,10,0.35)";
  f.fillRect(72 + 132 * 0.46, 204, 132 * 0.08, 96);            // vertical contact band
  f.fillRect(72, 204 + 96 * 0.30, 132, 96 * 0.06);              // upper band
  f.fillRect(72, 204 + 96 * 0.64, 132, 96 * 0.06);              // lower band
  f.strokeStyle = "rgba(255,255,255,0.5)"; f.lineWidth = 3;
  f.beginPath(); f.moveTo(78, 206.5); f.lineTo(198, 206.5); f.stroke();
  f.strokeStyle = "rgba(0,0,0,0.25)";
  f.beginPath(); f.moveTo(78, 297.5); f.lineTo(198, 297.5); f.stroke();
  f.restore();
  // handle
  const hsize = shown.length > 21 ? 57 : shown.length > 15 ? 72 : 90;
  cardText(f, shown, 72, 453, `700 ${hsize}px ${F_DISPLAY}`, v.fg, { ls: -hsize * 0.01 });
  // footer left: identity block
  cardText(f, "IDENTITY", 72, 594, `600 27px ${F_DISPLAY}`, v.sub, { ls: 3.78 });
  cardText(f, "Account & Agent", 72, 636, `600 36px ${F_DISPLAY}`, v.fg);
  cardText(f, `card.vantis.sh/${handle || "yourhandle"}`, 72, 681, `500 30px ${F_MONO}`, v.sub);
  // footer right: rarity + tier
  cardText(f, "ONE OF ONE", 1128, 588, `700 30px ${F_MONO}`, v.acc, { align: "right", ls: 3 });
  cardText(f, "TIER", 1128, 630, `600 27px ${F_DISPLAY}`, v.sub, { align: "right", ls: 3.78 });
  const tierLine = o.tierLabel ? `${o.tierLabel}${o.grantStr ? ` · $${o.grantStr}` : ""}` : "—";
  cardText(f, tierLine, 1128, 672, `600 36px ${F_DISPLAY}`, v.fg, { align: "right" });
  f.restore();

  // ── BACK — canonical signal green for every variant ──
  const bcv = document.createElement("canvas");
  bcv.width = CARD_W; bcv.height = CARD_H;
  const bc = bcv.getContext("2d")!;
  bc.save();
  cardCanvasBase(bc, ["#0AF77A", "#07DE6C", "#05C75F"], "rgba(10,10,10,0.045)", "rgba(10,10,10,0.14)", [960, 756], 0.22);
  // mag stripe
  const mg = bc.createLinearGradient(0, 78, 0, 210);
  mg.addColorStop(0, "#111111"); mg.addColorStop(0.45, "#1D1D1B"); mg.addColorStop(1, "#0C0C0B");
  bc.fillStyle = mg;
  bc.fillRect(0, 78, CARD_W, 132);
  bc.strokeStyle = "rgba(255,255,255,0.08)"; bc.lineWidth = 3;
  bc.beginPath(); bc.moveTo(0, 79.5); bc.lineTo(CARD_W, 79.5); bc.stroke();
  // legal block, bottom-left
  cardText(bc, "VANTIS CARDS", 72, 525, `700 36px ${F_DISPLAY}`, "#0A0A0A", { ls: 2.88 });
  const inkSub = "rgba(10,10,10,0.75)";
  cardText(bc, `card.vantis.sh/${handle || "yourhandle"}`, 72, 582, `500 30px ${F_MONO}`, inkSub);
  cardText(bc, `ONE OF ONE · ${stamp}`, 72, 639, `500 30px ${F_MONO}`, inkSub);
  cardText(bc, "Virtual identity card. Not a payment instrument.", 72, 696, `500 30px ${F_MONO}`, inkSub);
  // big ink V mark, bottom-right
  bc.globalAlpha = 0.92;
  drawMark(bc, 1128 - 294.8, 696 - 312, 294.8, "#0A0A0A");
  bc.globalAlpha = 1;
  bc.restore();

  return { front: mkCardTexture(fcv), back: mkCardTexture(bcv) };
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

  const DPR = Math.min(2, devicePixelRatio || 1);
  let renderer: WebGLRenderer;
  try {
    renderer = new WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
  } catch {
    document.body.classList.add("dv-fail");
    return;
  }
  renderer.setPixelRatio(DPR);
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  stage.appendChild(renderer.domElement);
  renderer.domElement.setAttribute("aria-hidden", "true");

  const scene = new Scene();
  const pmrem = new PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  const keyLight = new DirectionalLight(0xffffff, 1.15);
  keyLight.position.set(-1.6, 2.4, 1.8);
  scene.add(keyLight);
  const fill = new DirectionalLight(0xdfffee, 0.16);
  fill.position.set(1.8, 0.6, 1.2);
  scene.add(fill);
  const rim = new DirectionalLight(0x9fffcd, 0.4);
  rim.position.set(2.2, 1.4, -2.0);
  scene.add(rim);

  // The wrist-unit read: you are looking AT your own device, close up. The
  // home framing already fills the stage; tapping the screen raises it the
  // rest of the way (Fallout's gesture) so the terminal is the whole view.
  const camera = new PerspectiveCamera(28, 1, 0.1, 20);
  const camHome = new Vector3(0.1, 0.7, 4.3);
  const camHomeLook = new Vector3(0, 0.44, 0);
  camera.position.copy(camHome);
  camera.lookAt(camHomeLook);

  function makeLabel(text: string, px: number, color = "rgba(9,248,117,0.65)"): Mesh {
    const cv = document.createElement("canvas");
    const w = Math.max(64, text.length * px * 0.75), h = px * 2;
    cv.width = w * 2; cv.height = h * 2;
    const c = cv.getContext("2d")!;
    c.scale(2, 2);
    c.font = `600 ${px}px ${MONO}`;
    c.fillStyle = color;
    c.textBaseline = "middle"; c.textAlign = "center";
    c.fillText(text, w / 2, h / 2);
    const tex = new CanvasTexture(cv);
    tex.colorSpace = SRGBColorSpace; tex.generateMipmaps = false; tex.minFilter = LinearFilter;
    const m = new Mesh(new PlaneGeometry(w / 640, h / 640), new MeshBasicMaterial({ map: tex, transparent: true }));
    (m.material as MeshBasicMaterial).toneMapped = false;
    return m;
  }

  // materials
  const bodyMat = new MeshStandardMaterial({ color: 0x0b0d0c, roughness: 0.64, metalness: 0.2, envMapIntensity: 0.3 });
  const bezelMat = new MeshStandardMaterial({ color: 0x0a0b0a, roughness: 0.75, metalness: 0.25 });
  const rubberMat = new MeshStandardMaterial({ color: 0x0c0e0d, roughness: 0.92, metalness: 0.05 });
  const greenMat = new MeshStandardMaterial({ color: GREEN, roughness: 0.42, metalness: 0, envMapIntensity: 0.3, emissive: GREEN, emissiveIntensity: 0.42 });
  greenMat.toneMapped = false;
  const seamMat = new MeshBasicMaterial({ color: GREEN });
  seamMat.toneMapped = false;
  const dimPipe = new Color(0x14402a);

  const texLoader = new TextureLoader();
  const loadMap = (url: string, cb: (t: any) => void) =>
    texLoader.load(url, (t) => {
      t.wrapS = t.wrapT = RepeatWrapping;
      t.anisotropy = 4;
      cb(t); // the 2s screen keepalive guarantees a re-render presents it
    });
  loadMap("/tex/metal030-normal-v1.jpg", (t) => {
    t.repeat.set(2.0, 1.4);
    bodyMat.normalMap = t; bodyMat.normalScale.set(0.65, 0.65); bodyMat.needsUpdate = true;
  });
  loadMap("/tex/metal030-rough-v1.jpg", (t) => {
    t.repeat.set(2.0, 1.4);
    bodyMat.roughnessMap = t; bodyMat.roughness = 0.9; bodyMat.needsUpdate = true;
  });

  const device = new Group();
  scene.add(device);

  // housing — one chunky landscape unit: screen fills the left two-thirds,
  // the control column stacks on the right, exactly a wrist instrument
  const body = new Group();
  const slab = new Mesh(new RoundedBoxGeometry(1.9, 1.25, 0.34, 4, 0.07), bodyMat);
  body.add(slab);
  body.position.set(0, 0.62, 0);
  body.rotation.x = -0.06;
  device.add(body);
  const head = body; // coach + probes address the screen volume by this name

  const SCREEN_W = 1.15, SCREEN_H = 0.8625;
  const bezel = new Mesh(new BoxGeometry(1.23, 0.94, 0.02), bezelMat);
  bezel.position.set(-0.26, 0.02, 0.164);
  body.add(bezel);
  const os = new ScreenOS();
  const screen = new Mesh(new PlaneGeometry(SCREEN_W, SCREEN_H), new MeshBasicMaterial({ map: os.tex }));
  screen.position.set(-0.26, 0.02, 0.178);
  body.add(screen);
  const glass = new Mesh(new PlaneGeometry(1.21, 0.92), new MeshStandardMaterial({ color: 0xffffff, transparent: true, opacity: 0.045, roughness: 0.12, metalness: 0, envMapIntensity: 1.5 }));
  glass.position.set(-0.26, 0.02, 0.184);
  body.add(glass);
  // green hairline parting screen bay from control column
  const seam = new Mesh(new BoxGeometry(0.01, 1.08, 0.012), seamMat);
  seam.position.set(0.4, 0, 0.172);
  body.add(seam);

  // control column — dial up top, fire key, then the lane paddle
  const knob = new Group();
  const knobBody = new Mesh(new CylinderGeometry(0.155, 0.155, 0.075, 48), new MeshStandardMaterial({ color: 0x101211, roughness: 0.5, metalness: 0.35, envMapIntensity: 0.45 }));
  knobBody.rotation.x = Math.PI / 2;
  knob.add(knobBody);
  const knobCap = new Mesh(new CylinderGeometry(0.135, 0.135, 0.014, 40), new MeshStandardMaterial({ color: 0x0c0e0d, roughness: 0.42, metalness: 0.4, envMapIntensity: 0.45 }));
  knobCap.rotation.x = Math.PI / 2;
  knobCap.position.z = 0.042;
  knob.add(knobCap);
  const fins = new InstancedMesh(new BoxGeometry(0.016, 0.032, 0.062), new MeshStandardMaterial({ color: 0x1a1c1b, roughness: 0.5, metalness: 0.5, envMapIntensity: 0.7 }), 28);
  const dummy = new Object3D();
  for (let i = 0; i < 28; i++) {
    const a = (i / 28) * Math.PI * 2;
    dummy.position.set(Math.cos(a) * 0.157, Math.sin(a) * 0.157, 0);
    dummy.rotation.z = a;
    dummy.updateMatrix();
    fins.setMatrixAt(i, dummy.matrix);
  }
  knob.add(fins);
  const index = new Mesh(new BoxGeometry(0.014, 0.072, 0.012), seamMat);
  index.position.set(0, 0.1, 0.046);
  knob.add(index);
  knob.position.set(0.67, 0.3, 0.17);
  body.add(knob);
  const tickCv = document.createElement("canvas");
  tickCv.width = tickCv.height = 256;
  const tc = tickCv.getContext("2d")!;
  tc.translate(128, 128);
  tc.strokeStyle = "rgba(9,248,117,0.4)";
  tc.lineWidth = 3;
  for (let i = 0; i < 24; i++) {
    tc.beginPath(); tc.moveTo(0, -104); tc.lineTo(0, i % 6 === 0 ? -88 : -96); tc.stroke(); tc.rotate(Math.PI / 12);
  }
  const tickTex = new CanvasTexture(tickCv);
  tickTex.colorSpace = SRGBColorSpace; tickTex.generateMipmaps = false; tickTex.minFilter = LinearFilter;
  const tickRing = new Mesh(new PlaneGeometry(0.43, 0.43), new MeshBasicMaterial({ map: tickTex, transparent: true }));
  (tickRing.material as MeshBasicMaterial).toneMapped = false;
  tickRing.position.set(0.67, 0.3, 0.165);
  body.add(tickRing);
  const knobLabel = makeLabel("DIAL", 12);
  knobLabel.position.set(0.67, 0.06, 0.168);
  body.add(knobLabel);

  const keyGroup = new Group();
  const keyCap = new Mesh(new RoundedBoxGeometry(0.24, 0.24, 0.07, 3, 0.024), greenMat);
  keyGroup.add(keyCap);
  const keyMarkCv = document.createElement("canvas");
  keyMarkCv.width = keyMarkCv.height = 128;
  drawMark(keyMarkCv.getContext("2d")!, 28, 24, 72, INK_CSS);
  const keyMarkTex = new CanvasTexture(keyMarkCv);
  keyMarkTex.colorSpace = SRGBColorSpace; keyMarkTex.generateMipmaps = false; keyMarkTex.minFilter = LinearFilter;
  const keyMark = new Mesh(new PlaneGeometry(0.11, 0.11), new MeshBasicMaterial({ map: keyMarkTex, transparent: true }));
  (keyMark.material as MeshBasicMaterial).toneMapped = false;
  keyMark.position.z = 0.037;
  keyCap.add(keyMark);
  const keyWell = new Mesh(new BoxGeometry(0.3, 0.3, 0.02), bezelMat);
  keyWell.position.z = -0.028;
  keyGroup.add(keyWell);
  keyGroup.position.set(0.67, -0.14, 0.17);
  body.add(keyGroup);
  const keyLabel = makeLabel("FIRE", 12);
  keyLabel.position.set(0.67, -0.32, 0.168);
  body.add(keyLabel);

  const lever = new Group();
  const leverBase = new Mesh(new RoundedBoxGeometry(0.24, 0.09, 0.03, 2, 0.012), bezelMat);
  lever.add(leverBase);
  const leverArm = new Group();
  const leverStick = new Mesh(new BoxGeometry(0.04, 0.085, 0.04), new MeshStandardMaterial({ color: 0x141615, roughness: 0.5, metalness: 0.35, envMapIntensity: 0.45 }));
  leverStick.position.y = 0.042;
  leverArm.add(leverStick);
  const leverTip = new Mesh(new RoundedBoxGeometry(0.06, 0.048, 0.048, 2, 0.014), greenMat);
  leverTip.position.y = 0.095;
  leverArm.add(leverTip);
  leverArm.position.z = 0.03;
  lever.add(leverArm);
  lever.position.set(0.67, -0.52, 0.17);
  body.add(lever);
  const infLabel = makeLabel("INF", 11);
  infLabel.position.set(0.51, -0.42, 0.168);
  body.add(infLabel);
  const devLabel = makeLabel("DEV", 11);
  devLabel.position.set(0.83, -0.42, 0.168);
  body.add(devLabel);
  const pipeGeom = new CylinderGeometry(0.012, 0.012, 0.014, 12);
  const infPipe = new Mesh(pipeGeom, new MeshBasicMaterial({ color: GREEN }));
  (infPipe.material as MeshBasicMaterial).toneMapped = false;
  infPipe.rotation.x = Math.PI / 2;
  infPipe.position.set(0.51, -0.48, 0.17);
  body.add(infPipe);
  const devPipe = new Mesh(pipeGeom, new MeshBasicMaterial({ color: dimPipe }));
  (devPipe.material as MeshBasicMaterial).toneMapped = false;
  devPipe.rotation.x = Math.PI / 2;
  devPipe.position.set(0.83, -0.48, 0.17);
  body.add(devPipe);

  // face furniture — mark, unit plate, vents, corner screws
  const markCv = document.createElement("canvas");
  markCv.width = 240; markCv.height = 254;
  drawMark(markCv.getContext("2d")!, 0, 0, 240, GREEN_CSS);
  const markTex = new CanvasTexture(markCv);
  markTex.colorSpace = SRGBColorSpace; markTex.generateMipmaps = false; markTex.minFilter = LinearFilter;
  const mark = new Mesh(new PlaneGeometry(0.07, 0.074), new MeshBasicMaterial({ map: markTex, transparent: true }));
  (mark.material as MeshBasicMaterial).toneMapped = false;
  mark.position.set(-0.82, -0.55, 0.172);
  body.add(mark);
  const unitLabel = makeLabel("WLT-01", 11, "rgba(9,248,117,0.5)");
  unitLabel.position.set(-0.62, -0.56, 0.168);
  body.add(unitLabel);
  for (let i = 0; i < 5; i++) {
    const vent = new Mesh(new BoxGeometry(0.14, 0.008, 0.006), bezelMat);
    vent.position.set(0.06 + (i % 2) * 0.0, -0.5 - Math.floor(i) * 0.022, 0.17);
    vent.position.x = -0.2;
    vent.position.y = -0.5 - i * 0.024;
    body.add(vent);
  }
  const steelMat = new MeshStandardMaterial({ color: 0x2a2d2b, roughness: 0.42, metalness: 0.75, envMapIntensity: 0.9 });
  const screwGeom = new CylinderGeometry(0.016, 0.016, 0.01, 12);
  for (const [sx, sy] of [[-0.88, 0.56], [0.88, 0.56], [-0.88, -0.56], [0.88, -0.56]]) {
    const screw = new Mesh(screwGeom, steelMat);
    screw.rotation.x = Math.PI / 2;
    screw.position.set(sx, sy, 0.172);
    body.add(screw);
    const slotCut = new Mesh(new BoxGeometry(0.02, 0.003, 0.004), bezelMat);
    slotCut.position.set(sx, sy, 0.178);
    slotCut.rotation.z = sx * sy > 0 ? 0.6 : -0.5;
    body.add(slotCut);
  }

  // the wrist cuff — a ribbed barrel under the housing sells the watch
  const cuff = new Group();
  const barrel = new Mesh(new CylinderGeometry(0.4, 0.4, 1.5, 36), rubberMat);
  barrel.rotation.z = Math.PI / 2;
  cuff.add(barrel);
  for (const rx of [-0.56, -0.2, 0.16, 0.52]) {
    const ring = new Mesh(new CylinderGeometry(0.412, 0.412, 0.05, 36), bezelMat);
    ring.rotation.z = Math.PI / 2;
    ring.position.x = rx;
    cuff.add(ring);
  }
  const endRingL = new Mesh(new CylinderGeometry(0.425, 0.425, 0.06, 36), rubberMat);
  endRingL.rotation.z = Math.PI / 2; endRingL.position.x = -0.76;
  cuff.add(endRingL);
  const endRingR = endRingL.clone(); endRingR.position.x = 0.76;
  cuff.add(endRingR);
  cuff.position.set(0, 0.12, -0.62); // fully behind the housing — only the under-arc peeks out
  device.add(cuff);

  // cartridge slot on the housing's top edge — the ritual is unchanged
  const cardHolder = new Group();
  cardHolder.position.set(-0.26, 0.645, 0.06);
  body.add(cardHolder);
  const slotMouth = new Mesh(new RoundedBoxGeometry(0.74, 0.07, 0.11, 2, 0.02), bezelMat);
  cardHolder.add(slotMouth);
  const slotLip = new Mesh(new BoxGeometry(0.68, 0.005, 0.004), seamMat);
  slotLip.position.set(0, 0.037, 0.056);
  cardHolder.add(slotLip);
  // the cartridge IS the minted card: ISO 400:252 ratio, 35% of slab width
  const SEAT_DEPTH = -0.065;
  const card = new Group();
  const cardShape = new Shape();
  const CW = 0.66, CH = 0.4158, CR = 0.033;
  cardShape.moveTo(-CW / 2 + CR, -CH / 2);
  cardShape.lineTo(CW / 2 - CR, -CH / 2);
  cardShape.absarc(CW / 2 - CR, -CH / 2 + CR, CR, -Math.PI / 2, 0, false);
  cardShape.lineTo(CW / 2, CH / 2 - CR);
  cardShape.absarc(CW / 2 - CR, CH / 2 - CR, CR, 0, Math.PI / 2, false);
  cardShape.lineTo(-CW / 2 + CR, CH / 2);
  cardShape.absarc(-CW / 2 + CR, CH / 2 - CR, CR, Math.PI / 2, Math.PI, false);
  cardShape.lineTo(-CW / 2, -CH / 2 + CR);
  cardShape.absarc(-CW / 2 + CR, -CH / 2 + CR, CR, Math.PI, Math.PI * 1.5, false);
  const cardBodyGeom = new ExtrudeGeometry(cardShape, { depth: 0.018, bevelEnabled: false });
  cardBodyGeom.translate(0, 0, -0.009);
  const cardEdgeMat = new MeshStandardMaterial({ color: 0x191b19, roughness: 0.45, metalness: 0.3, envMapIntensity: 0.8 });
  const cardEdge = new Mesh(cardBodyGeom, cardEdgeMat);
  card.add(cardEdge);
  const cardFrontMat = new MeshBasicMaterial({ transparent: true, alphaTest: 0.5 });
  cardFrontMat.toneMapped = false;
  const cardBackMat = new MeshBasicMaterial({ transparent: true, alphaTest: 0.5 });
  cardBackMat.toneMapped = false;
  const cardFace = new Mesh(new PlaneGeometry(CW, CH), cardFrontMat);
  cardFace.position.z = 0.0105;
  card.add(cardFace);
  const cardBack = new Mesh(new PlaneGeometry(CW, CH), cardBackMat);
  cardBack.rotation.y = Math.PI;
  cardBack.position.z = -0.0105;
  card.add(cardBack);
  // never white: a RESERVED ink card bakes immediately, real identity re-bakes
  const bakeCard = (o: { handle: string | null; variant: string | null; stamp?: string; tierLabel?: string; grantStr?: string }) => {
    const faces = buildCardFaces(o);
    cardFrontMat.map?.dispose();
    cardBackMat.map?.dispose();
    cardFrontMat.map = faces.front; cardFrontMat.needsUpdate = true;
    cardBackMat.map = faces.back; cardBackMat.needsUpdate = true;
    if (o.variant === "mint" || o.variant === "mono") cardEdgeMat.color.setHex(0xd8d8d2);
  };
  bakeCard({ handle: null, variant: "ink" });
  card.position.y = SEAT_DEPTH;
  cardHolder.add(card);

  // the cartridge EASEL — grounded furniture on the device's left, where the
  // card rests leaned back and readable. The lower-right floor belongs to
  // the control column; the left side keeps the card below the screen edge.
  const tray = new Group();
  const trayBase = new Mesh(new RoundedBoxGeometry(0.72, 0.05, 0.3, 2, 0.015), bezelMat);
  trayBase.position.set(0, 0.025, 0);
  tray.add(trayBase);
  const trayBack = new Mesh(new RoundedBoxGeometry(0.68, 0.3, 0.028, 2, 0.012), bezelMat);
  trayBack.rotation.x = -0.64;
  trayBack.position.set(0, 0.16, -0.1);
  tray.add(trayBack);
  const trayLipF = new Mesh(new BoxGeometry(0.68, 0.03, 0.03), bezelMat);
  trayLipF.position.set(0, 0.065, 0.09);
  tray.add(trayLipF);
  const trayGroove = new Mesh(new BoxGeometry(0.64, 0.02, 0.05), new MeshStandardMaterial({ color: 0x060707, roughness: 0.9, metalness: 0.1 }));
  trayGroove.position.set(0, 0.045, 0.05);
  tray.add(trayGroove);
  const trayLip = new Mesh(new BoxGeometry(0.64, 0.004, 0.004), seamMat);
  trayLip.position.set(0, 0.082, 0.075);
  tray.add(trayLip);
  const trayShadow = new Mesh(new PlaneGeometry(0.9, 0.55), new MeshBasicMaterial({ map: contactShadowTexture(), transparent: true, depthWrite: false }));
  trayShadow.rotation.x = -Math.PI / 2;
  trayShadow.position.y = 0.002;
  tray.add(trayShadow);
  tray.position.set(-0.84, -0.2, 0.56);
  tray.rotation.y = 0.32;
  device.add(tray);

  // seat pose captured from the real slot transform, then the card moves to
  // DEVICE space and lives on the arc
  device.updateMatrixWorld(true);
  const seatPos = device.worldToLocal(cardHolder.localToWorld(new Vector3(0, SEAT_DEPTH, 0)));
  const seatQuat = new Quaternion();
  cardHolder.getWorldQuaternion(seatQuat);
  cardHolder.remove(card);
  device.add(card);
  const trayCardPos = new Vector3(-0.865, 0.02, 0.485);
  const trayQuat = new Quaternion().setFromEuler(new Euler(-0.64, 0.32, 0, "YXZ"));
  const arcCtrl = new Vector3(-0.55, 1.55, 0.42);
  const smooth = (t: number) => t * t * (3 - 2 * t);
  function placeCard(p: number) {
    const t = Math.max(0, Math.min(1, p));
    const q = 1 - t;
    card.position.set(
      q * q * trayCardPos.x + 2 * q * t * arcCtrl.x + t * t * seatPos.x,
      q * q * trayCardPos.y + 2 * q * t * arcCtrl.y + t * t * seatPos.y,
      q * q * trayCardPos.z + 2 * q * t * arcCtrl.z + t * t * seatPos.z
    );
    card.quaternion.slerpQuaternions(trayQuat, seatQuat, smooth(t));
  }
  placeCard(0);

  // ground shadow
  const shadow = new Mesh(new PlaneGeometry(3.0, 1.8), new MeshBasicMaterial({ map: contactShadowTexture(), transparent: true, depthWrite: false }));
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = -0.2;
  scene.add(shadow);

  device.position.y = 0.02;

  // ── springs + interaction state ──
  const tiltX = new Spring(0, 60, 14), tiltY = new Spring(0, 60, 14);
  const zoomT = new Spring(0, 70, 15);
  let zoomed = false;
  const zoomPos = new Vector3(), zoomLook = new Vector3(), zoomNrm = new Vector3();
  function toggleZoom(want?: boolean) {
    zoomed = want ?? !zoomed;
    zoomT.target = zoomed ? 1 : 0;
    sound.lever();
    announce(zoomed ? "Screen raised" : "Screen lowered");
  }
  const knobRot = new Spring(0, 170, 20);
  const keyY = new Spring(0, 400, 24);
  const leverX = new Spring(-0.22, 240, 20);
  const cardSlide = new Spring(0, 60, 12); // path parameter: 0 = in tray, 1 = seated
  let cardState: "hover" | "inserting" | "seated" | "ejecting" = "hover";
  let hoverT = 0; // bob budget — the un-inserted card cannot keep the GPU warm forever
  function insertCard() {
    if (cardState !== "hover") return;
    cardState = "inserting";
    cardSlide.target = 1;
    os.vireo.poke();
  }
  function ejectCard() {
    if (cardState !== "seated" || os.busy) { if (os.busy) sound.err(); return; }
    cardState = "ejecting";
    cardSlide.target = 0;
    os.powered = false; os.booted = RM; os.bootT = 0;
    os.dirty = true;
    try { const a = ac(); blip(500, a.currentTime + 0.01, 0.05, 0.05, "sine"); blip(340, a.currentTime + 0.08, 0.06, 0.07, "sine"); } catch {}
    announce("Card ejected — screen off");
  }
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
  let lastInputMode = "";
  function syncDom() {
    const name = os.modeName();
    const im = INPUT_MODES[name];
    if (inputRow) inputRow.style.display = im ? "flex" : "none";
    if (im && input && name !== lastInputMode) {
      if (lastInputMode) drafts[lastInputMode] = input.value;
      input.value = drafts[name] || "";
      lastInputMode = name;
    }
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
        bakeCard({
          handle: os.meta.handle,
          variant: os.meta.variant,
          stamp: os.meta.stamp,
          tierLabel: os.meta.tier_label,
          grantStr: os.meta.grant_str,
        });
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
  let hasFiredOk = false; // the arm ceremony runs once — after that, chat just fires
  const drafts: Record<string, string> = {}; // each tool keeps its own draft

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
    if (name === "CHAT" && !os.armed && !hasFiredOk) {
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
        if (os.chat && os.chat.text) os.chatLog.push({ prompt: os.chat.prompt, text: os.chat.text, line: os.chat.line });
        if (os.chatLog.length > 6) os.chatLog.shift();
        os.chat = { prompt: val, text: "", shown: 0, line: "" };
        // REAL token speed: the screen shows each delta the moment the rail
        // produces it — no artificial typewriter pacing anywhere.
        const t1 = performance.now();
        const r = await fetch("/api/playground/fire", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ prompt: val, stream: true }) });
        if (!r.ok) {
          const j = await r.json().catch(() => ({} as any));
          os.chat = null;
          if (j.error === "lane_empty") {
            os.err = `Inference lane is empty — it needs about $${(j.required_usd || 0.001).toFixed(4)} for this call. Green key on HOME funds it.`;
            os.vireo.set("droop");
          } else if (j.error === "rate_limited") { os.err = "Easy — a few seconds between fires."; os.vireo.set("alert"); }
          else { os.err = "The rail refused that one. Try again."; os.vireo.set("alert"); }
          sound.err();
        } else {
          const reader = r.body!.getReader();
          const dec = new TextDecoder();
          let buf = "";
          let usage: any = null, vantis: any = null;
          for (;;) {
            const { value, done } = await reader.read();
            if (done) break;
            buf += dec.decode(value, { stream: true });
            let idx;
            while ((idx = buf.indexOf("\n\n")) >= 0) {
              const frame = buf.slice(0, idx);
              buf = buf.slice(idx + 2);
              for (const line of frame.split("\n")) {
                if (!line.startsWith("data: ")) continue;
                const payload = line.slice(6);
                if (payload === "[DONE]") continue;
                let j: any; try { j = JSON.parse(payload); } catch { continue; }
                const delta = j.choices?.[0]?.delta?.content;
                if (delta && os.chat) {
                  os.chat.text += delta;
                  os.chat.shown = os.chat.text.length; // arrival IS the reveal
                  os.vireo.flapRate = 6;
                  os.dirty = true;
                }
                if (j.usage) usage = j.usage;
                if (j.vantis) vantis = j.vantis;
              }
            }
          }
          const secs = ((performance.now() - t1) / 1000).toFixed(1);
          if (os.chat && os.chat.text) {
            const tokOut = usage?.completion_tokens ?? Math.round(os.chat.text.length / 4);
            os.chat.line = vantis && vantis.cost_usd != null
              ? `${secs}s · ${tokOut} TOK OUT · $${Number(vantis.cost_usd).toFixed(6)} → ${Number(vantis.vantis_burned || 0).toFixed(4)} VANTIS BURNED`
              : `${secs}s · ${tokOut} TOK OUT`;
            if (vantis && vantis.balance_usd != null && os.meta?.lanes?.inference) os.meta.lanes.inference.balance_usd = vantis.balance_usd;
            hasFiredOk = true;
            if (input) { input.value = ""; drafts[name] = ""; }
            sound.ok();
            announce(`Answer: ${os.chat.text}`);
          } else {
            os.chat = null;
            os.err = "The stream came back empty — try again.";
            os.vireo.set("alert");
            sound.err();
          }
        }
      } else if (name === "SEARCH") {
        const r = await fetch("/api/playground/search", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ query: val }) });
        const j = await r.json();
        if (!r.ok) {
          if (j.error === "demo_exhausted") os.err = "Today's free searches are spent — more tomorrow.";
          else os.err = "Search did not go through.";
          os.vireo.set("alert"); sound.err();
        } else { os.search = { query: val, results: j.results, left: j.left_today }; if (input) { input.value = ""; drafts[name] = ""; } os.vireo.set("happy"); sound.ok(); announce(`${j.results.length} results`); }
      } else if (name === "X LOOKUP") {
        const r = await fetch("/api/playground/x", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ handle: val }) });
        const j = await r.json();
        if (!r.ok) {
          os.err = j.error === "demo_exhausted" ? "Today's free lookups are spent — more tomorrow."
            : j.error === "handle_not_found" ? "No such handle — check the spelling."
            : j.error === "tool_off" ? "This route is offline right now." : "Lookup did not go through.";
          os.vireo.set("alert"); sound.err();
        } else { os.xprof = { profile: j.profile, left: j.left_today }; if (input) { input.value = ""; drafts[name] = ""; } os.vireo.set("happy"); sound.ok(); announce(`@${j.profile.handle}: ${j.profile.followers} followers`); }
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
  let cardDrag: { startX: number; startY: number; startV: number; moved: boolean; pulledOut: boolean } | null = null;

  const hitMat = new MeshBasicMaterial({ visible: false });
  const mkHit = (name: string, w: number, h: number, d: number, parent: Group, x = 0, y = 0, z = 0) => {
    const m = new Mesh(new BoxGeometry(w, h, d), hitMat);
    m.position.set(x, y, z);
    m.userData.hit = name;
    parent.add(m);
    return m;
  };
  const hitBoxes = [
    mkHit("knob", 0.42, 0.42, 0.22, knob),
    mkHit("key", 0.34, 0.34, 0.2, keyGroup),
    mkHit("lever", 0.3, 0.26, 0.18, lever, 0, 0.05, 0.03),
    mkHit("card", 0.74, 0.5, 0.26, card as any, 0, 0, 0),
    mkHit("screen", 1.17, 0.88, 0.06, head, -0.26, 0.02, 0.19),
  ];

  function pick(e: PointerEvent): string | null {
    const rect = renderer.domElement.getBoundingClientRect();
    ptr.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    ptr.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    ray.setFromCamera(ptr, camera);
    const hits = ray.intersectObjects(hitBoxes, false);
    return hits.length ? hits[0].object.userData.hit : null;
  }

  // The screen is a UI — clicks on it map through the ray hit's UV straight
  // onto the OS canvas, so the tabs (and the LANES panels) are real targets.
  function screenCanvasPoint(e: PointerEvent): { cx: number; cy: number } | null {
    const rect = renderer.domElement.getBoundingClientRect();
    ptr.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    ptr.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    ray.setFromCamera(ptr, camera);
    const hit = ray.intersectObject(screen, false)[0];
    if (!hit?.uv) return null;
    return { cx: hit.uv.x * W, cy: (1 - hit.uv.y) * H };
  }

  function tapScreen(e: PointerEvent) {
    const p = screenCanvasPoint(e);
    if (!p) return;
    for (const r of os.tabRects) {
      if (p.cx >= r.x && p.cx <= r.x + r.w && p.cy >= r.y && p.cy <= r.y + r.h) {
        os_setMode(r.mode);
        return;
      }
    }
    if (os.modeName() === "LANES" && p.cy > 100 && p.cy < 460) {
      const want = p.cx < W / 2 ? "inference" : "devtools";
      if (want !== os.lane) {
        os.lane = want;
        leverX.target = want === "inference" ? -0.22 : 0.22;
        sound.lever(); os.dirty = true;
        announce(`Lane: ${os.lane}`);
        return;
      }
    }
    toggleZoom(); // the Fallout gesture — raise the screen to your face
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
    } else if (what === "screen") {
      tapScreen(e);
    } else if (what === "card") {
      if (cardState === "inserting" || cardState === "ejecting") return;
      cardDrag = { startX: e.clientX, startY: e.clientY, startV: cardSlide.v, moved: false, pulledOut: false };
      renderer.domElement.setPointerCapture(e.pointerId);
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
    if (cardDrag) {
      const rect2 = renderer.domElement.getBoundingClientRect();
      // scrubbing the path: toward the slot (left/up) raises p, back lowers it
      const dp = ((cardDrag.startY - e.clientY) / rect2.height) * 1.5 - ((cardDrag.startX - e.clientX) / rect2.width) * 1.1;
      if (Math.abs(e.clientY - cardDrag.startY) + Math.abs(e.clientX - cardDrag.startX) > 8) cardDrag.moved = true;
      const floor = os.busy ? 0.9 : 0; // mid-fire the card refuses to leave
      cardSlide.v = Math.max(floor, Math.min(1, cardDrag.startV + dp)); cardSlide.target = cardSlide.v; cardSlide.vel = 0;
      // the moment it leaves the slot, the screen dies — Switch rules
      if (!cardDrag.pulledOut && cardSlide.v < 0.86 && os.powered) {
        cardDrag.pulledOut = true;
        os.powered = false; os.booted = RM; os.bootT = 0; os.dirty = true;
        try { const a = ac(); blip(500, a.currentTime + 0.01, 0.05, 0.05, "sine"); blip(340, a.currentTime + 0.08, 0.06, 0.07, "sine"); } catch {}
        announce("Card out — screen off");
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
    if (cardDrag) {
      const wasTap = !cardDrag.moved;
      const v = cardSlide.v;
      cardDrag = null;
      try { renderer.domElement.releasePointerCapture(e.pointerId); } catch {}
      if (wasTap) {
        if (cardState === "hover") insertCard();
        else if (cardState === "seated") ejectCard();
      } else if (v > 0.55) {
        cardState = "inserting"; cardSlide.target = 1; // closer to the slot → it seats
      } else {
        cardState = "ejecting"; cardSlide.target = 0; // otherwise home to the tray
      }
      return;
    }
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
    else if (e.key === "Escape") { if (zoomed) toggleZoom(false); }
    else if (e.key.toLowerCase() === "z") toggleZoom();
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
    const h = Math.max(440, Math.min(700, Math.round(w * 0.72)));
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camHome.z = w < 560 ? 6.0 : w < 760 ? 4.9 : 4.3;
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
    // rAF timestamps can arrive behind a just-taken performance.now() — a
    // negative dt once poisoned the accumulator and darkened the screen
    const rawDt = Math.max(0, Math.min(0.25, (now - last) / 1000));
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
      (os.powered && !os.booted) || os.busy || drew || pointerLive ||
      !zoomT.settled() ||
      cardState === "inserting" || cardState === "ejecting" || !!cardDrag ||
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
      const damp = 1 - zoomT.v * 0.75;
      device.rotation.x = tiltX.step(dt) * damp;
      device.rotation.y = tiltY.step(dt) * damp;
    }
    const zt = zoomT.step(dt);
    if (zt > 0.001) {
      screen.getWorldPosition(zoomPos);
      zoomNrm.set(0, 0, 1);
      screen.getWorldQuaternion(camera.quaternion); // borrow, restored by lookAt below
      zoomNrm.applyQuaternion(camera.quaternion);
      zoomLook.lerpVectors(camHomeLook, zoomPos, zt);
      camera.position.lerpVectors(camHome, zoomPos.clone().addScaledVector(zoomNrm, 1.92), zt);
      camera.lookAt(zoomLook);
    } else {
      camera.position.copy(camHome);
      camera.lookAt(camHomeLook);
    }
    knob.rotation.z = knobRot.step(dt);
    keyCap.position.z = keyY.step(dt);
    leverArm.rotation.z = leverX.step(dt);
    placeCard(cardDrag ? cardSlide.v : cardSlide.step(dt));
    if (!cardDrag && cardState === "inserting" && Math.abs(cardSlide.v - 1) < 0.01) {
      cardState = "seated";
      sound.dock();
      os.powered = true; os.dirty = true;
    } else if (!cardDrag && cardState === "ejecting" && cardSlide.v < 0.02) {
      cardState = "hover"; hoverT = 0;
    }
    (devPipe.material as MeshBasicMaterial).color.set(os.lane === "devtools" ? GREEN : 0x14402a);
    (infPipe.material as MeshBasicMaterial).color.set(os.lane === "inference" ? GREEN : 0x14402a);
    seamMat.color.setHex(GREEN).multiplyScalar(os.busy ? 0.75 + Math.sin(t * 9) * 0.25 : 1);

    renderer.render(scene, camera);
  }

  if (RM) {
    // render on demand: a slow interval catches state changes without a hot loop
    const tick = () => {
      os.step(1 / 30, performance.now() / 1000);
      knob.rotation.z = knobRot.target; keyCap.position.z = keyY.target; leverArm.rotation.z = leverX.target;
      cardSlide.v = cardSlide.target; placeCard(cardSlide.v);
      if (cardState === "inserting") { cardState = "seated"; os.powered = true; os.dirty = true; }
      else if (cardState === "ejecting") { cardState = "hover"; }
      renderer.render(scene, camera);
    };
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

  // ── first-run coach — four beats, each ringing the real control ──
  const V3 = new Vector3();
  function stagePoint(obj: any) {
    obj.getWorldPosition(V3);
    V3.project(camera);
    return { x: ((V3.x + 1) / 2) * renderer.domElement.clientWidth, y: ((1 - V3.y) / 2) * renderer.domElement.clientHeight };
  }
  function startCoach() {
    const steps = [
      { obj: screen, ring: 200, k: "The screen", txt: "Everything happens here. Tap the tabs to switch tools — and tap the screen itself to raise it closer." },
      { obj: keyGroup, ring: 110, k: "The green key", txt: "Fires the current tool. Spending arms first with a printed quote — nothing costs money on a single press." },
      { obj: knob, ring: 110, k: "The dial", txt: "Steps through the same tools. Drag it, scroll over it, or use the arrow keys." },
      { obj: lever, ring: 110, k: "The lanes", txt: "The paddle picks which lane spends — Inference is live today. Your card up top is the session cartridge." },
    ];
    const wrap = document.createElement("div");
    wrap.className = "dv-coach";
    wrap.innerHTML = '<div class="dv-coach-ring"></div><div class="dv-coach-card"><div class="dv-coach-step"></div><div class="dv-coach-txt"></div><div class="dv-coach-row"><button data-a="skip">Skip</button><button class="pri" data-a="next">Next</button></div></div>';
    stage.appendChild(wrap);
    const ring = wrap.querySelector(".dv-coach-ring") as HTMLElement;
    const stepEl = wrap.querySelector(".dv-coach-step") as HTMLElement;
    const txtEl = wrap.querySelector(".dv-coach-txt") as HTMLElement;
    const nextBtn = wrap.querySelector('[data-a="next"]') as HTMLElement;
    let i = 0;
    const show = () => {
      const st = steps[i];
      const p = stagePoint(st.obj);
      ring.style.left = p.x + "px"; ring.style.top = p.y + "px";
      ring.style.width = ring.style.height = st.ring + "px";
      stepEl.textContent = `${i + 1} / ${steps.length} — ${st.k}`;
      txtEl.textContent = st.txt;
      nextBtn.textContent = i === steps.length - 1 ? "Start" : "Next";
      sound.detent(i);
    };
    const done = () => { try { localStorage.setItem("vc-device-coach", "1"); } catch {} wrap.remove(); };
    wrap.querySelector('[data-a="skip"]')!.addEventListener("click", done);
    nextBtn.addEventListener("click", () => { i++; if (i >= steps.length) done(); else show(); });
    show();
  }
  let coachSeen = false;
  try { coachSeen = !!localStorage.getItem("vc-device-coach"); } catch {}
  if (!coachSeen && !RM) setTimeout(startCoach, RM ? 0 : 2200);

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
    insertCard, ejectCard,
    cardState: () => cardState,
    frames: () => renderer.info.render.frame,
    // client coords of a point on the screen plane (u right, v up) — probes
    // use this to genuinely click tabs through the 3D projection
    screenClientPoint: (u: number, v: number) => {
      const local = new Vector3((u - 0.5) * 1.15, (v - 0.5) * 0.8625, 0);
      screen.localToWorld(local);
      local.project(camera);
      const r = renderer.domElement.getBoundingClientRect();
      return { x: r.left + ((local.x + 1) / 2) * r.width, y: r.top + ((1 - local.y) / 2) * r.height };
    },
    fire,
    snapshot: () => { renderer.render(scene, camera); return renderer.domElement.toDataURL("image/png"); },
  };
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", main);
else main();
