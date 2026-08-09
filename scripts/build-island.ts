// Bundles the Privy island to public/privy-island-<hash>.js and records the
// filename in public/manifest.json. Hash lives in the FILENAME, not ?v= —
// Cloudflare ignores query strings on cached JS and our purge token is
// DNS-scoped, so a stale bundle would be unfixable for hours otherwise.

import { readdirSync, unlinkSync } from "node:fs";

const out = await Bun.build({
  entrypoints: ["client/privy-island.tsx", "client/orb-island.tsx", "client/device-island.ts"],
  outdir: "public",
  naming: "[name]-[hash].[ext]",
  // splitting:true hits a Bun bundler bug here (chunk exports an undefined
  // symbol: "Export 'N1' is not defined") — single-file until Bun fixes it.
  splitting: false,
  minify: true,
  define: { "process.env.NODE_ENV": '"production"' },
});

if (!out.success) {
  for (const log of out.logs) console.error(log);
  process.exit(1);
}

const manifest: Record<string, string> = {};
const liveFiles = new Set(out.outputs.map((o) => o.path.split("/").pop()!));
for (const name of ["privy-island", "orb-island", "device-island"]) {
  const built = out.outputs.find((o) => o.path.includes(`/${name}-`) && o.path.endsWith(".js"));
  if (!built) throw new Error(`no js output for ${name}`);
  const file = built.path.split("/").pop()!;
  manifest[name] = file;
  console.log(`built public/${file} (${(built.size / 1024).toFixed(0)} KB)`);
}
for (const o of out.outputs) {
  const f = o.path.split("/").pop()!;
  if (f.startsWith("chunk-") || f.startsWith("privy-gate-")) console.log(`  chunk public/${f} (${(o.size / 1024).toFixed(0)} KB)`);
}
// Sweep anything from previous builds that this build did not emit.
for (const f of readdirSync("public")) {
  if (/^(privy-island-|orb-island-|device-island-|privy-gate-|chunk-).+\.js$/.test(f) && !liveFiles.has(f)) unlinkSync(`public/${f}`);
}

await Bun.write("public/manifest.json", JSON.stringify(manifest, null, 2));
