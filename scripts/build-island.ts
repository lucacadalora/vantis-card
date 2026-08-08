// Bundles the Privy island to public/privy-island-<hash>.js and records the
// filename in public/manifest.json. Hash lives in the FILENAME, not ?v= —
// Cloudflare ignores query strings on cached JS and our purge token is
// DNS-scoped, so a stale bundle would be unfixable for hours otherwise.

import { readdirSync, unlinkSync } from "node:fs";

const out = await Bun.build({
  entrypoints: ["client/privy-island.tsx", "client/orb-island.tsx"],
  outdir: "public",
  naming: "[name]-[hash].[ext]",
  minify: true,
  define: { "process.env.NODE_ENV": '"production"' },
});

if (!out.success) {
  for (const log of out.logs) console.error(log);
  process.exit(1);
}

const manifest: Record<string, string> = {};
for (const name of ["privy-island", "orb-island"]) {
  const built = out.outputs.find((o) => o.path.includes(`/${name}-`) && o.path.endsWith(".js"));
  if (!built) throw new Error(`no js output for ${name}`);
  const file = built.path.split("/").pop()!;
  manifest[name] = file;
  // Sweep older hashes so public/ holds exactly one live bundle per entry.
  for (const f of readdirSync("public")) {
    if (f.startsWith(`${name}-`) && f.endsWith(".js") && f !== file) unlinkSync(`public/${f}`);
  }
  console.log(`built public/${file} (${(built.size / 1024).toFixed(0)} KB)`);
}

await Bun.write("public/manifest.json", JSON.stringify(manifest, null, 2));
