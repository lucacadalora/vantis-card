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

async function exaSearch(query: string, numResults = 5, type?: "keyword" | "neural"): Promise<ExaResult[]> {
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
      ...(type ? { type } : { useAutoprompt: true }),
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

// Human-readable names for the research lanes, used in the live agent log.
const LANE_LABELS: Record<string, string> = {
  webPresence: "web presence",
  communityReputation: "community reputation",
  pressMentions: "press and media",
  companySignals: "company signals",
};

export async function enrichProfile(
  profile: {
    xUsername?: string;
    githubUsername?: string;
    name?: string;
    company?: string;
    domain?: string;
  },
  emit?: (kind: "log", label: string) => void
): Promise<EnrichmentResult> {
  const queries: Record<string, string> = {};

  if (profile.name) {
    queries.webPresence = `"${profile.name}" developer engineer AI`;
  }
  if (profile.githubUsername) {
    queries.communityReputation = `"${profile.githubUsername}" site:reddit.com OR site:news.ycombinator.com OR site:dev.to`;
  }
  if (profile.xUsername) {
    queries.pressMentions = `@${profile.xUsername} ${profile.name || ""} AI startup`;
  }
  // A verified email domain is a far better company query than a self-typed
  // company name, so prefer it when LinkedIn gave us one.
  if (profile.domain) {
    queries.companySignals = `${profile.domain} company funding OR revenue OR headcount OR valuation`;
  } else if (profile.company) {
    queries.companySignals = `${profile.company} ${profile.name || ""} funding OR revenue OR contract OR valuation`;
  }

  // Identity anchors: a result that mentions none of these is a look-alike
  // (same first name, different person) and must never reach the scorer.
  const anchors = [profile.name, profile.xUsername, profile.githubUsername, profile.domain]
    .filter(Boolean)
    .map((a) => String(a).toLowerCase());
  const aboutThisPerson = (r: ExaResult) => {
    const hay = `${r.title || ""} ${r.url || ""} ${r.text || ""}`.toLowerCase();
    return anchors.some((a) => hay.includes(a));
  };

  const entries = Object.entries(queries);
  const results = await Promise.all(
    entries.map(async ([key, query]) => {
      emit?.("log", `Researching ${LANE_LABELS[key] || key}: “${query}”`);
      const raw = await exaSearch(query, 5, key === "communityReputation" ? "keyword" : undefined).catch(() => []);
      const res = raw.filter(aboutThisPerson).slice(0, 3);
      const dropped = raw.length - res.length;
      // One line per source actually KEPT — the log shows the real browsing.
      for (const r of res) {
        let host = "";
        try { host = new URL(r.url).hostname.replace(/^www\./, ""); } catch {}
        emit?.("log", `Reading ${host ? host + ": " : ""}“${String(r.title || r.url).slice(0, 72)}”`);
      }
      if (dropped > 0) emit?.("log", `Discarded ${dropped} look-alike result${dropped === 1 ? "" : "s"} — not this person`);
      emit?.(
        "log",
        res.length
          ? `${LANE_LABELS[key] || key}: ${res.length} verified source${res.length === 1 ? "" : "s"} weighed`
          : `${LANE_LABELS[key] || key}: nothing verifiably about this person`
      );
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
