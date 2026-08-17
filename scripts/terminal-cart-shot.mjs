// Visual probe: does the 3D terminal actually show the plugged Genesis
// cartridge? Seeds a staging throwaway with FIRST BURN plugged into its
// Inference lane, renders /wallets with SwiftShader (headless has no GPU),
// shoots the device stage, taps the cartridge in, shoots the booted screen.
import { createRequire } from "module";
const require2 = createRequire(import.meta.url);
const puppeteer = require2("/home/ubuntu/projects/vantis-swap/node_modules/puppeteer-core");
import { Database } from "bun:sqlite";
import { randomUUID } from "crypto";
import { sessionSetCookie } from "../server/session.ts";
import { ensureDeckTables, grantPreviewHolding, plugCartridge } from "../server/deck.ts";

const CHROME = "/home/ubuntu/.cache/puppeteer/chrome/linux-149.0.7827.22/chrome-linux64/chrome";
const OUT = process.env.OUT || "/home/ubuntu/projects/vantis-card";
const db = new Database("/home/ubuntu/projects/vantis-card/data/vantis-cards.db");
if (!process.env.VANTIS_CARD_SESSION_SECRET) throw new Error("source .env first");

let pass = 0, fail = 0;
const ok = (n, c, d = "") => { if (c) { pass++; console.log(`  PASS ${n}`); } else { fail++; console.log(`  FAIL ${n} ${d}`); } };

const uid = randomUUID();
const tag = `tcs_${Date.now().toString(36)}`;
db.run(`INSERT INTO users (id, x_username, x_user_id, x_name, scored_at, score, score_tier, usd_balance, usd_granted, staging)
        VALUES (?, ?, ?, ?, datetime('now'), 66, 'builder', 12.5, 15, 1)`, [uid, tag, tag, "Terminal Cart Shot"]);
db.run(`INSERT INTO cards (user_id, handle, tier, grant_usd, design_variant) VALUES (?, ?, 'builder', 15, 'signal')`, [uid, tag]);
ensureDeckTables();
grantPreviewHolding(uid, "first-burn");
// lane comes from the server's ensurePurposeWallets on first page hit — plug
// after we know the lane id, below.

const cookie = sessionSetCookie("did:privy:tcs", uid).split(";")[0].slice("vc_session=".length);

function teardown() {
  for (const t of ["lane_cartridges", "genesis_holdings", "cartridge_usage", "credit_transactions", "api_requests", "api_keys", "agent_wallets", "cards"]) {
    try { db.run(`DELETE FROM ${t} WHERE user_id = ?`, [uid]); } catch {}
  }
  db.run("DELETE FROM users WHERE id = ?", [uid]);
}

const browser = await puppeteer.launch({
  executablePath: CHROME, headless: "new",
  // SwiftShader: software WebGL. --disable-gpu would kill the context.
  args: ["--no-sandbox", "--disable-dev-shm-usage", "--enable-unsafe-swiftshader", "--use-angle=swiftshader"],
});

try {
  const page = await browser.newPage();
  await page.setCookie({ name: "vc_session", value: cookie, domain: "127.0.0.1", path: "/" });
  await page.setViewport({ width: 1440, height: 1100, deviceScaleFactor: 1 });

  // First hit mints the lanes server-side; then plug and reload so the
  // island boots with the cartridge already in meta.
  await page.goto("http://127.0.0.1:8240/wallets", { waitUntil: "domcontentloaded", timeout: 30000 });
  await new Promise((r) => setTimeout(r, 1500));
  const lane = db.query("SELECT id FROM agent_wallets WHERE user_id = ? AND purpose = 'inference'").get(uid);
  ok("inference lane minted", !!lane);
  if (lane) plugCartridge(uid, lane.id, "first-burn");

  await page.goto("http://127.0.0.1:8240/wallets", { waitUntil: "domcontentloaded", timeout: 30000 });
  // SwiftShader is slow — give the scene time to assemble and bake faces.
  await new Promise((r) => setTimeout(r, 9000));

  const state = await page.evaluate(() => {
    const canvas = document.querySelector("#device-stage canvas");
    const meta = fetch("/api/playground/meta").then((r) => r.json());
    return meta.then((m) => ({
      canvas: !!canvas,
      canvasH: canvas ? canvas.getBoundingClientRect().height : 0,
      cartInMeta: m?.cartridge?.slug || null,
    }));
  });
  ok("device canvas is up under SwiftShader", state.canvas && state.canvasH > 200, `h=${Math.round(state.canvasH)}`);
  ok("island meta sees the cartridge", state.cartInMeta === "first-burn", String(state.cartInMeta));

  // The first-run tour + cookie banner sit exactly over the easel — dismiss
  // both or every "tap the cartridge" lands on an overlay instead.
  await page.evaluate(() => {
    for (const b of document.querySelectorAll("button")) {
      const t = (b.textContent || "").trim().toLowerCase();
      if (t === "skip" || t === "accept all") b.click();
    }
  });
  await new Promise((r) => setTimeout(r, 1200));

  const stage = await page.$("#device-stage");
  await stage.screenshot({ path: `${OUT}/terminal-cart-idle.png` });

  // Tap the cartridge: the island listens on the canvas; the card sits on the
  // easel lower-left of the stage. Click there, then let the insert+boot run.
  const box = await stage.boundingBox();
  await page.mouse.click(box.x + box.width * 0.24, box.y + box.height * 0.78);
  await new Promise((r) => setTimeout(r, 12000)); // insert arc + typed boot, SwiftShader pace
  await stage.screenshot({ path: `${OUT}/terminal-cart-booted.png` });
  console.log("  shots: terminal-cart-idle.png, terminal-cart-booted.png");
} finally {
  await browser.close();
  teardown();
}

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
