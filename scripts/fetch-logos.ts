// Fetches catalog brand marks ONCE (Google's favicon service, 64px) into
// public/logos/<slug>.png — the carousel serves them locally, no hotlinking.
// Re-run to refresh; a failed fetch just leaves that chip text-only.

const DOMAINS: Record<string, string> = {
  "Nansen": "nansen.ai",
  "Exa": "exa.ai",
  "Brave Search": "brave.com",
  "Firecrawl": "firecrawl.dev",
  "Dune": "dune.com",
  "CoinGecko": "coingecko.com",
  "DefiLlama": "defillama.com",
  "Alchemy": "alchemy.com",
  "Helius": "helius.dev",
  "Etherscan": "etherscan.io",
  "The Graph": "thegraph.com",
  "Tavily": "tavily.com",
  "Serper": "serper.dev",
  "Jina": "jina.ai",
  "ElevenLabs": "elevenlabs.io",
  "Deepgram": "deepgram.com",
  "AssemblyAI": "assemblyai.com",
  "Replicate": "replicate.com",
  "Together": "together.ai",
  "Groq": "groq.com",
  "OpenRouter": "openrouter.ai",
  "Moralis": "moralis.io",
  "OpenWeather": "openweathermap.org",
  "Twilio": "twilio.com",
  "Resend": "resend.com",
  "Pinecone": "pinecone.io",
  "Weaviate": "weaviate.io",
};

export const logoSlug = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, "");

const { mkdirSync } = await import("node:fs");
mkdirSync("public/logos", { recursive: true });

let ok = 0, fail = 0;
for (const [name, domain] of Object.entries(DOMAINS)) {
  const out = `public/logos/${logoSlug(name)}.png`;
  try {
    const res = await fetch(`https://www.google.com/s2/favicons?domain=${domain}&sz=64`, {
      signal: AbortSignal.timeout(10000),
    });
    if (!res.ok) throw new Error(String(res.status));
    const buf = await res.arrayBuffer();
    if (buf.byteLength < 200) throw new Error("placeholder-sized response");
    await Bun.write(out, buf);
    ok++;
  } catch (e: any) {
    console.log(`miss ${name}: ${e?.message || e}`);
    fail++;
  }
}
console.log(`logos: ${ok} fetched, ${fail} missing (text-only fallback)`);
