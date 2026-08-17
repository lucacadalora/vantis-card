// Image input THROUGH the card gateway, not straight to the upstream.
//
// Two things to establish: (1) a vision call survives the proxy and bills
// correctly, and (2) what the pre-flight reserve does with a base64 image.
// The reserve estimates input tokens as JSON.stringify(messages).length / 4,
// which is roughly right for prose and very wrong for base64 — so a large
// image can reserve far more than the call can possibly cost.
//
//   VANTIS_CARD_DB=<copy> bun run scripts/vision-gateway-test.ts [baseUrl] [img]

import { getDb, createUser, getUserByX, grantCredits, generateApiKey, createCard } from "../server/db";
import { getVantisPrice, usdToVantis } from "../server/price";
import { catalogModelFor } from "../server/upstream/catalog";
import { calculateCost } from "../server/credits";
import { estimateInputTokens } from "../server/gateway";

const BASE = process.argv[2] || "http://127.0.0.1:8249";
const IMG = process.argv[3] || "/tmp/claude-1000/-home-ubuntu/92e70fcc-141d-4f27-99ba-7d26ae8a0f3b/scratchpad/vision-test.png";
const HANDLE = "vision_throwaway";

let failed = false;
const check = (n: string, ok: boolean, d?: unknown) => {
  console.log(`${ok ? "PASS" : "FAIL"}  ${n}${d === undefined ? "" : ` — ${JSON.stringify(d)}`}`);
  if (!ok) failed = true;
};

const b64 = Buffer.from(await Bun.file(IMG).arrayBuffer()).toString("base64");
const dataUrl = `data:image/png;base64,${b64}`;

function purge(id: string) {
  const db = getDb();
  for (const t of ["api_requests", "credit_transactions", "api_keys", "agent_wallets", "cards", "reservations", "users"]) {
    try { db.run(`DELETE FROM ${t} WHERE ${t === "users" ? "id" : "user_id"} = ?`, [id]); } catch {}
  }
}

let user = getUserByX("0");
if (!user) user = createUser({ username: HANDLE, id: "0", name: "Vision Throwaway", public_metrics: {} });
grantCredits(user!.id, 5.0, "vision-test seed");
const key = generateApiKey(user!.id);
const { price } = await getVantisPrice();
getDb().run("UPDATE users SET score = 66, score_tier = 'builder', scored_at = datetime('now') WHERE id = ?", [user!.id]);
createCard(user!.id, `@${HANDLE}`, "builder", 5.0, usdToVantis(5.0, price), price);
console.log(`seeded @${HANDLE} $5.00 · image ${Math.round(b64.length / 1024)}KB base64\n`);

try {
  for (const id of ["gpt-5.6-luna", "gpt-5.4-mini", "deepseek-v4-flash-0731"]) {
    const model = catalogModelFor(id, false)!;
    const res = await fetch(`${BASE}/v1/chat/completions`, {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: id,
        messages: [{
          role: "user",
          content: [
            { type: "text", text: "What exact text appears in this image? Reply with just the text." },
            { type: "image_url", image_url: { url: dataUrl } },
          ],
        }],
        max_tokens: 300,
      }),
      signal: AbortSignal.timeout(180_000),
    });
    const j: any = await res.json().catch(() => ({}));

    if (id.startsWith("deepseek")) {
      // Text-only upstream, and the lanes disagree about how to say so. The
      // gateway must refuse DETERMINISTICALLY at our door, before dialling.
      check(`${id}: image input refused with a stable error`,
        res.status === 400 && j.error?.code === "image_input_unsupported",
        { status: res.status, code: j.error?.code });
      check(`${id}: the refusal names the models that DO take images`,
        Array.isArray(j.error?.vision_models) && j.error.vision_models.length === 6,
        j.error?.vision_models?.length);
      continue;
    }

    const answer = (j.choices?.[0]?.message?.content || "").replace(/\s+/g, " ").trim();
    const v = j.vantis || {};
    check(`${id}: vision call survives the proxy`, res.status === 200, res.status);
    check(`${id}: model actually READ the image`, /4271/.test(answer), answer.slice(0, 70));
    if (res.status === 200) {
      const tin = j.usage?.prompt_tokens ?? 0;
      const tout = j.usage?.completion_tokens ?? 0;
      check(`${id}: billed at the catalog rate`,
        Math.abs((v.cost_usd ?? -1) - calculateCost(tin, tout, model.rate)) < 1e-9,
        { charged: v.cost_usd, tin, tout });

      // The reserve must not balloon with the file size. Compare the estimator
      // the gateway actually uses against the real prompt, and against the old
      // chars/4 rule this replaced.
      const msgs = [{ role: "user", content: [
        { type: "text", text: "What exact text appears in this image? Reply with just the text." },
        { type: "image_url", image_url: { url: dataUrl } }] }];
      const estimated = estimateInputTokens(msgs);
      const naive = Math.ceil(JSON.stringify(msgs).length / 4);
      console.log(`      reserve estimate ${estimated} vs real ${tin} (old chars/4 rule: ${naive})`);
      check(`${id}: reserve does not scale with the base64 payload`, estimated < naive,
        { estimator: estimated, naive });
    }
  }
} finally {
  purge(user!.id);
  check("throwaway purged", !getUserByX("0"));
}

console.log(failed ? "\nFAILURES" : "\nAll checks passed");
if (failed) process.exit(1);
