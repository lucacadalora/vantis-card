// Exa enrichment — web signals about a developer beyond what OAuth reports.
// Uses the fleet EXA_API_KEY (loaded via systemd EnvironmentFile).

import { traceVendor } from "../db";

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

async function exaSearch(query: string, numResults = 5, type?: "keyword" | "neural", category?: string): Promise<ExaResult[]> {
  if (!EXA_API_KEY) return [];

  const t0 = performance.now();
  let res: Response;
  try {
    res = await fetch(`${EXA_BASE}/search`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": EXA_API_KEY,
      },
      body: JSON.stringify({
        query,
        numResults,
        ...(type ? { type } : { useAutoprompt: true }),
        ...(category ? { category } : {}),
        contents: { text: { maxCharacters: 500 } },
      }),
      signal: AbortSignal.timeout(20_000),
    });
  } catch (err: any) {
    traceVendor({ vendor: "exa", endpoint: "search", latency_ms: Math.round(performance.now() - t0), error: err?.message || "network" });
    throw err;
  }
  traceVendor({
    vendor: "exa", endpoint: "search", status: res.status,
    latency_ms: Math.round(performance.now() - t0),
    cost_est_usd: 0.005, // Exa list price per search w/ contents
    error: res.ok ? null : `http_${res.status}`,
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
  linkedinProfile: ExaResult[];
  linkedinPosts: ExaResult[];
  summary: string;
}

// Human-readable names for the research lanes, used in the live agent log.
const LANE_LABELS: Record<string, string> = {
  webPresence: "web presence",
  communityReputation: "community reputation",
  pressMentions: "press and media",
  companySignals: "company signals",
  linkedinProfile: "LinkedIn profile",
  linkedinPosts: "LinkedIn posts",
};

// Lanes that use an Exa category or forced type instead of autoprompt.
const LANE_SHAPE: Record<string, { type?: "keyword" | "neural"; category?: string }> = {
  communityReputation: { type: "keyword" },
  linkedinProfile: { category: "linkedin profile" },
  linkedinPosts: { type: "keyword" },
};

export async function enrichProfile(
  profile: {
    xUsername?: string;
    githubUsername?: string;
    name?: string;
    linkedinName?: string;
    linkedinConnected?: boolean;
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
  // The person's PUBLIC LinkedIn — profile, role, company, posts. LinkedIn's
  // self-serve API returns nothing beyond a verified email, but the open web
  // has the rest; Exa carries a dedicated linkedin-profile index. The lane
  // runs whenever we have a name to anchor on; the LinkedIn-linked name wins.
  const liName = profile.linkedinName || profile.name;
  if (liName) {
    queries.linkedinProfile = `"${liName}"${profile.company ? ` ${profile.company}` : ""}`;
    queries.linkedinPosts = `"${liName}" site:linkedin.com/posts OR site:linkedin.com/pulse`;
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
      const shape = LANE_SHAPE[key] || {};
      const raw = await exaSearch(query, 5, shape.type, shape.category).catch(() => []);
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
    linkedinProfile: [],
    linkedinPosts: [],
    summary: "",
  };

  for (const [key, res] of results) {
    enrichment[key] = res;
  }

  // Second chance for the profile lane: the neural linkedin-profile index can
  // miss a person the keyword surface still finds by exact name on /in/ URLs.
  if (liName && enrichment.linkedinProfile.length === 0) {
    const retry = await exaSearch(`"${liName}" site:linkedin.com/in`, 5, "keyword").catch(() => []);
    enrichment.linkedinProfile = retry.filter(aboutThisPerson).slice(0, 3);
    emit?.(
      "log",
      enrichment.linkedinProfile.length
        ? `LinkedIn profile: found by exact name — ${enrichment.linkedinProfile.length} source${enrichment.linkedinProfile.length === 1 ? "" : "s"}`
        : "LinkedIn profile: no verifiable public profile surfaced"
    );
  }

  const totalResults = Object.values(enrichment).flat().length;
  const hasPress = enrichment.pressMentions.length > 0;
  const hasCommunity = enrichment.communityReputation.length > 0;
  const hasCompany = enrichment.companySignals.length > 0;
  const hasLinkedin = enrichment.linkedinProfile.length > 0 || enrichment.linkedinPosts.length > 0;

  enrichment.summary = [
    `${totalResults} web signals found.`,
    hasPress ? "Has press/media mentions." : "No press mentions found.",
    hasCommunity ? "Has community presence (HN/Reddit/dev.to)." : "No community presence found.",
    hasCompany ? "Company has funding/revenue signals." : "No company signals found.",
    hasLinkedin ? "Public LinkedIn presence found (profile/posts)." : "No public LinkedIn presence found.",
  ].join(" ");

  return enrichment as EnrichmentResult;
}
