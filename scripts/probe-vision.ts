// Does the rail accept IMAGE input, and on which models?
//
// A model that merely returns 200 on an image payload proves nothing — some
// routes silently drop the image part and answer from the text alone. So the
// test image carries content the answer must contain (a red circle and the
// string "VANTIS 4271"); anything that cannot name both did not see it.
//
//   bun run scripts/probe-vision.ts [imagePath]

import { publicModels } from "../server/upstream/catalog";

const BASE = process.env.JATEVO_BASE_URL || "https://api.jatevo.ai/v1";
const KEY = process.env.JATEVO_API_KEY!;
const IMG = process.argv[2] || "/tmp/claude-1000/-home-ubuntu/92e70fcc-141d-4f27-99ba-7d26ae8a0f3b/scratchpad/vision-test.png";

const b64 = Buffer.from(await Bun.file(IMG).arrayBuffer()).toString("base64");
const dataUrl = `data:image/png;base64,${b64}`;

// Upstream ids, plus the models we do not list — the question is what the rail
// can do, not only what the page currently shows.
const TARGETS = [
  ...publicModels().map((m) => m.upstreamModel),
  "spark/gemma-4-26B-A4B",
  "zai/GLM-5.2",
  "kimi/kimi-k3",
];

console.log(`image: ${IMG} (${Math.round(b64.length / 1024)}KB base64)\n`);

for (const model of TARGETS) {
  try {
    const res = await fetch(`${BASE}/chat/completions`, {
      method: "POST",
      headers: { Authorization: `Bearer ${KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model,
        messages: [{
          role: "user",
          content: [
            { type: "text", text: "What shape and what exact text is in this image? Answer in one short line." },
            { type: "image_url", image_url: { url: dataUrl } },
          ],
        }],
        max_tokens: 300,
      }),
      signal: AbortSignal.timeout(120_000),
    });
    const text = await res.text();
    if (!res.ok) {
      console.log(`XX  ${model.padEnd(34)} ${res.status}  ${text.replace(/\s+/g, " ").slice(0, 110)}`);
      continue;
    }
    const j = JSON.parse(text);
    const answer = (j.choices?.[0]?.message?.content || "").replace(/\s+/g, " ").trim();
    // Did it actually READ the image, or answer past it?
    const sawText = /4271/.test(answer);
    const sawShape = /circle|ellipse|round/i.test(answer);
    const verdict = sawText && sawShape ? "SEES" : sawText || sawShape ? "PART" : "BLIND";
    console.log(`${verdict.padEnd(6)}${model.padEnd(34)} ${answer.slice(0, 95)}`);
  } catch (err: any) {
    console.log(`XX  ${model.padEnd(34)} ${err?.message || err}`);
  }
}
