// Exa enrichment — web signals about a developer beyond what OAuth reports.
// Uses the fleet EXA_API_KEY (loaded via systemd EnvironmentFile).

const EXA_API_KEY = process.env.EXA_API_KEY || "";
const EXA_BASE = "https://api.exa.ai";

interface ExaResult {
  title: string;
  url: string;
  text: string;
  author: string;
  publishedDate: string;
  score: number;
}

async function exaSearch(query: string, numResults = 5): Promise<ExaResult[]> {
  if (!EXA_API_KEY) return [];

  const res = await fetch(`${EXA_BASE}/search`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": EXA_API_KEY,
    },
    body: JSON.stringify({
      query,
      numResults,
      useAutoprompt: true,
      contents: { text: { maxCharacters: 500 } },
    }),
    signal: AbortSignal.timeout(20_000),
  });

  if (!res.ok) {
    console.error("Exa error:", res.status, await res.text());
    return [];
  }

  const data = await res.json();
  return (data.results || []).map((r: any) => ({
    title: r.title,
    url: r.url,
    text: r.text || "",
    author: r.author || "",
    publishedDate: r.publishedDate || "",
    score: r.score || 0,
  }));
}

export interface EnrichmentResult {
  webPresence: ExaResult[];
  pressMentions: ExaResult[];
  communityReputation: ExaResult[];
  companySignals: ExaResult[];
  summary: string;
}

export async function enrichProfile(profile: {
  xUsername?: string;
  githubUsername?: string;
  name?: string;
  company?: string;
}): Promise<EnrichmentResult> {
  const queries: Record<string, string> = {};

  if (profile.name) {
    queries.webPresence = `${profile.name} developer engineer AI`;
  }
  if (profile.githubUsername) {
    queries.communityReputation = `${profile.githubUsername} site:reddit.com OR site:news.ycombinator.com OR site:dev.to`;
  }
  if (profile.xUsername) {
    queries.pressMentions = `@${profile.xUsername} ${profile.name || ""} AI startup`;
  }
  if (profile.company) {
    queries.companySignals = `${profile.company} ${profile.name || ""} funding OR revenue OR contract OR valuation`;
  }

  const entries = Object.entries(queries);
  const results = await Promise.all(
    entries.map(async ([key, query]) => {
      const res = await exaSearch(query, 3).catch(() => []);
      return [key, res] as const;
    })
  );

  const enrichment: any = {
    webPresence: [],
    pressMentions: [],
    communityReputation: [],
    companySignals: [],
    summary: "",
  };

  for (const [key, res] of results) {
    enrichment[key] = res;
  }

  const totalResults = Object.values(enrichment).flat().length;
  const hasPress = enrichment.pressMentions.length > 0;
  const hasCommunity = enrichment.communityReputation.length > 0;
  const hasCompany = enrichment.companySignals.length > 0;

  enrichment.summary = [
    `${totalResults} web signals found.`,
    hasPress ? "Has press/media mentions." : "No press mentions found.",
    hasCommunity ? "Has community presence (HN/Reddit/dev.to)." : "No community presence found.",
    hasCompany ? "Company has funding/revenue signals." : "No company signals found.",
  ].join(" ");

  return enrichment as EnrichmentResult;
}
