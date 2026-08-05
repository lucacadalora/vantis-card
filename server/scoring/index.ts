// AI Scoring Agent — OAuth + Exa data in, score + credit grant out.
// Runs on Jatevo (api.jatevo.ai) via the fleet LLM_* env vars, so the scoring
// call itself is real, paid inference on our own rail.

const JATEVO_API_KEY = process.env.LLM_API_KEY || process.env.JATEVO_API_KEY || "";
const JATEVO_BASE = process.env.LLM_BASE_URL || process.env.JATEVO_BASE_URL || "https://api.jatevo.ai/v1";
const SCORING_MODEL = process.env.LLM_MODEL_PLANNER || "gpt-5.6-sol";

interface ProfileData {
  xUsername?: string;
  xName?: string;
  xBio?: string;
  xFollowers?: number;
  xFollowing?: number;
  xTweetCount?: number;
  xVerified?: string;
  xLocation?: string;
  githubUsername?: string;
  githubName?: string;
  githubBio?: string;
  githubCompany?: string;
  githubLocation?: string;
  githubFollowers?: number;
  githubPublicRepos?: number;
  githubLanguages?: string[];
  githubTopRepos?: any[];
  linkedinName?: string;
  linkedinHeadline?: string;
  linkedinIndustry?: string;
  linkedinCompany?: string;
  enrichment?: any;
}

export interface ScoreResult {
  score: number; // 0-100
  tier: "whale" | "builder" | "explorer" | "noise";
  grantUsd: number; // $5-25
  breakdown: {
    technicalDepth: number;
    influence: number;
    purchasingPower: number;
    cryptoNative: number;
    realWorldSignals: number;
  };
  reasoning: string;
}

const SCORING_PROMPT = `You are a developer scoring agent for Vantis, an AI software factory whose inference rail is api.jatevo.ai.
You analyze developer profiles and score them on how likely they are to use and pay for AI inference APIs.

Score each profile 0-100 across these dimensions:
- technicalDepth (0-20): GitHub repos, languages, repo quality, contribution activity
- influence (0-20): X followers, engagement, verified status, community presence
- purchasingPower (0-20): LinkedIn seniority, company size, funding signals
- cryptoNative (0-20): X bio keywords (AI, crypto, web3, agent), crypto-related repos/tweets
- realWorldSignals (0-20): web enrichment — press mentions, HN/Reddit reputation, talks, blog

Tiers:
- whale (80-100): $25 in credits — high influence + technical depth + purchasing power
- builder (60-79): $15 in credits — strong technical depth, building things
- explorer (40-59): $10 in credits — some signals, exploring
- noise (0-39): $5 in credits — minimal signals, possibly bot/low quality

Return JSON only:
{
  "score": <number>,
  "tier": "<tier>",
  "grantUsd": <number>,
  "breakdown": {
    "technicalDepth": <number>,
    "influence": <number>,
    "purchasingPower": <number>,
    "cryptoNative": <number>,
    "realWorldSignals": <number>
  },
  "reasoning": "<2-3 sentence summary>"
}`;

export async function scoreProfile(profile: ProfileData): Promise<ScoreResult> {
  const profileText = JSON.stringify(profile, null, 2);

  let result: ScoreResult | null = null;

  // The upstream pool occasionally throws transient 502s — one retry before
  // degrading to the heuristic, since scoring is a one-shot user moment.
  for (let attempt = 1; attempt <= 2 && !result; attempt++) {
    try {
      const res = await fetch(`${JATEVO_BASE}/chat/completions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${JATEVO_API_KEY}`,
        },
        body: JSON.stringify({
          model: SCORING_MODEL,
          messages: [
            { role: "system", content: SCORING_PROMPT },
            { role: "user", content: `Score this developer profile:\n\n${profileText}` },
          ],
          temperature: 0.3,
          max_tokens: 500,
          // NO response_format: the Jatevo balancer 502s on json_object once
          // the payload is a few KB (reproduced Aug 5 2026; same gotcha as
          // orc). The prompt contract + tolerant parsing below cover it.
        }),
        signal: AbortSignal.timeout(60_000),
      });

      if (!res.ok) {
        throw new Error(`Scoring LLM error: ${res.status}`);
      }

      const data = await res.json();
      let content: string = data.choices?.[0]?.message?.content || "";
      // Models may fence or preamble their JSON — extract the outermost object
      content = content.replace(/^```(?:json)?\s*/i, "").replace(/\s*```\s*$/, "");
      const first = content.indexOf("{");
      const last = content.lastIndexOf("}");
      if (first === -1 || last <= first) throw new Error("no JSON object in scoring response");
      result = JSON.parse(content.slice(first, last + 1));
      // Tolerate the old field name if a model echoes the JTVO-era contract
      if ((result as any).jtvoGrant != null && result!.grantUsd == null) {
        result!.grantUsd = (result as any).jtvoGrant;
      }
    } catch (err) {
      console.error(`Scoring attempt ${attempt} failed:`, err);
      if (attempt < 2) await new Promise((r) => setTimeout(r, 1500));
    }
  }
  if (!result) result = fallbackScore(profile);

  result.score = Math.max(0, Math.min(100, Math.round(result.score || 0)));
  result.grantUsd = Math.max(5, Math.min(25, result.grantUsd || 5));
  if (!["whale", "builder", "explorer", "noise"].includes(result.tier)) {
    result.tier = result.score >= 80 ? "whale" : result.score >= 60 ? "builder" : result.score >= 40 ? "explorer" : "noise";
  }
  if (!result.breakdown) {
    result.breakdown = { technicalDepth: 0, influence: 0, purchasingPower: 0, cryptoNative: 0, realWorldSignals: 0 };
  }

  return result;
}

function fallbackScore(profile: ProfileData): ScoreResult {
  let score = 0;

  // GitHub signals (max 30)
  if (profile.githubUsername) {
    score += Math.min(15, (profile.githubPublicRepos || 0) * 0.5);
    score += Math.min(10, (profile.githubFollowers || 0) * 0.1);
    if (profile.githubLanguages?.length) score += 5;
  }

  // X signals (max 30)
  if (profile.xUsername) {
    score += Math.min(15, (profile.xFollowers || 0) * 0.01);
    if (profile.xVerified) score += 10;
    score += Math.min(5, (profile.xTweetCount || 0) * 0.001);
  }

  // LinkedIn (max 15)
  if (profile.linkedinHeadline) {
    score += 5;
    if (profile.linkedinCompany) score += 5;
    if (profile.linkedinIndustry) score += 5;
  }

  // Exa (max 25)
  if (profile.enrichment?.pressMentions?.length) score += 10;
  if (profile.enrichment?.communityReputation?.length) score += 10;
  if (profile.enrichment?.companySignals?.length) score += 5;

  score = Math.round(score);
  const tier = score >= 80 ? "whale" : score >= 60 ? "builder" : score >= 40 ? "explorer" : "noise";
  const grantUsd = tier === "whale" ? 25 : tier === "builder" ? 15 : tier === "explorer" ? 10 : 5;

  return {
    score,
    tier,
    grantUsd,
    breakdown: {
      technicalDepth: 0,
      influence: 0,
      purchasingPower: 0,
      cryptoNative: 0,
      realWorldSignals: 0,
    },
    reasoning: "Fallback heuristic scoring (LLM unavailable).",
  };
}
