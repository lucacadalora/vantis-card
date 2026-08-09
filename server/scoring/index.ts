// AI Scoring Agent — OAuth + Exa data in, score + credit grant out.
// Runs on the same single-model rail the public API serves, so the scoring
// call itself is real, paid inference.

import { resolveUpstream, resolveFailover, applyUpstreamDefaults } from "../upstream";
import { noteUpstreamCall } from "../gateway";

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
  githubOrgs?: string[];
  githubActivity?: { events_90d?: number; pushes_90d?: number; prs_90d?: number; issues_90d?: number; last_active?: string } | null;
  githubTotalStars?: number;
  githubAccountCreated?: string;
  linkedinName?: string;
  linkedinCompany?: string;
  linkedinVerifiedDomain?: string;
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

const SCORING_PROMPT = `You are a developer scoring agent for Vantis, an AI software factory.
You analyze developer profiles and score them on how likely they are to use and pay for AI inference APIs.

Score each profile 0-100 across these dimensions:
- technicalDepth (0-20): repo count and quality, language range, total stars, org memberships, and githubActivity — pushes/PRs/issues in the last 90 days. Weight RECENT activity over lifetime totals: someone shipping this quarter beats a dormant account with old stars.
- influence (0-20): X followers, engagement, verified status, community presence
- purchasingPower (0-20): linkedinVerifiedDomain is a VERIFIED work email domain (absent means a free provider or no LinkedIn) — a corporate domain plus company signals in the enrichment is the strongest evidence here. Treat a missing domain as unknown, not as zero.
- cryptoNative (0-20): X bio keywords (AI, crypto, web3, agent), crypto-related repos/tweets
- realWorldSignals (0-20): web enrichment — press mentions, HN/Reddit reputation, talks, blog

DATA HONESTY — this is a hard rule: fields that are ABSENT from the profile were NOT COLLECTED, they are not zero. If X metrics (followers/posts) are absent, score influence from the web enrichment alone and NEVER write claims like "0 followers", "0 tweets", "no X presence" or "dormant account" — say the metrics were not part of this scan, if you mention them at all. Only cite numbers that literally appear in the profile. Enrichment results are identity-filtered but treat any that do not clearly concern THIS person (different name or handle) as absent — never let a look-alike's achievements or silence affect the score.

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

export async function scoreProfile(
  profile: ProfileData,
  emit?: (kind: "log", label: string) => void
): Promise<ScoreResult> {
  const profileText = JSON.stringify(profile, null, 2);

  let result: ScoreResult | null = null;

  // The model can reason for 10–60s with nothing to say — a silent log reads
  // as a hang. Tick real elapsed time while the verdict is being thought out.
  const started = Date.now();
  const heartbeat = emit
    ? setInterval(() => {
        const s = Math.round((Date.now() - started) / 1000);
        emit("log", `Still reasoning — ${s}s in. Long thoughts are normal for the verdict.`);
      }, 8000)
    : null;

  // The upstream pool occasionally throws transient 502s — one retry before
  // degrading to the heuristic, since scoring is a one-shot user moment.
  // The retry dials the FAILOVER route when one exists: a primary that just
  // failed is the least likely place for the retry to succeed.
  for (let attempt = 1; attempt <= 2 && !result; attempt++) {
    const primary = resolveUpstream();
    const up = attempt === 1 ? primary : (primary && resolveFailover(primary)) || primary;
    if (!up) {
      console.error("Scoring: no inference route configured");
      break;
    }
    try {
      noteUpstreamCall(); // scoring spends the same account quota
      emit?.("log", attempt === 1 ? "Model weighing five dimensions — reasoning tokens burn here" : "Retrying the model once");
      const scoringBody: any = {
        model: up.model,
        messages: [
          { role: "system", content: SCORING_PROMPT },
          { role: "user", content: `Score this developer profile:\n\n${profileText}` },
        ],
        temperature: 0.3,
        // V4 Flash is a reasoning model — it spent ~1,250 tokens thinking
        // on a realistic scoring payload, so the budget needs real headroom
        // or the JSON arrives truncated.
        max_tokens: 2000,
        response_format: { type: "json_object" },
      };
      applyUpstreamDefaults(scoringBody, up); // the verdict depends on reasoning being on
      const res = await fetch(`${up.baseUrl}/chat/completions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${up.apiKey}`,
          ...(up.headers || {}),
        },
        body: JSON.stringify(scoringBody),
        signal: AbortSignal.timeout(60_000),
      });

      if (!res.ok) {
        throw new Error(`Scoring LLM error: ${res.status}`);
      }

      const data = await res.json();
      if (data.usage?.completion_tokens) {
        emit?.("log", `Model returned — ${data.usage.completion_tokens} tokens of reasoning and verdict`);
      }
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
  if (heartbeat) clearInterval(heartbeat);
  if (!result) result = fallbackScore(profile);

  result.score = Math.max(0, Math.min(100, Math.round(result.score || 0)));
  // Red-team fix: the scorer marks farmed/bot accounts 0-5, and a $5 floor
  // made every $0.05 secondhand X account worth $5 of real inference. Below
  // the floor score, the grant is zero — card and key still mint, honestly.
  const minGrantScore = parseFloat(process.env.CAMPAIGN_MIN_GRANT_SCORE || "10");
  result.grantUsd = result.score < minGrantScore ? 0 : Math.max(5, Math.min(25, result.grantUsd || 5));
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

  // GitHub signals (max 30) — recent shipping counts for more than old stars
  if (profile.githubUsername) {
    score += Math.min(10, (profile.githubPublicRepos || 0) * 0.4);
    score += Math.min(8, (profile.githubFollowers || 0) * 0.1);
    score += Math.min(4, (profile.githubTotalStars || 0) * 0.05);
    const a = profile.githubActivity;
    if (a) score += Math.min(8, ((a.pushes_90d || 0) * 0.2) + ((a.prs_90d || 0) * 0.5));
  }

  // X signals (max 30)
  if (profile.xUsername) {
    score += Math.min(15, (profile.xFollowers || 0) * 0.01);
    if (profile.xVerified) score += 10;
    score += Math.min(5, (profile.xTweetCount || 0) * 0.001);
  }

  // LinkedIn (max 15) — a verified corporate address is the real signal here;
  // headline and industry are Partner-Program-only and never arrive.
  if (profile.linkedinName) score += 3;
  if (profile.linkedinVerifiedDomain) score += 8;
  if (profile.githubOrgs?.length) score += Math.min(4, profile.githubOrgs.length * 2);

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
