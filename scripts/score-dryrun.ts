// Runs the REAL enrichment + scoring pipeline against an existing user and
// prints what it would decide — without writing score/tier/grant. The one
// write it does make: backfilling github_* profile fields (public data the
// flow would have stored at link time).
// Usage: set -a; source ~/.openclaw/secrets/exa.env; source .env; set +a
//        bun run scripts/score-dryrun.ts lucaxyzz

import { getUserByX, updateUser } from "../server/db";
import { fetchGithubPublic } from "../server/oauth";
import { enrichProfile } from "../server/enrichment";
import { scoreProfile } from "../server/scoring";

const handle = process.argv[2] || "lucaxyzz";
const user = getUserByX(handle);
if (!user) throw new Error(`no user ${handle}`);

let gh: any = null;
if (user.github_username) {
  gh = await fetchGithubPublic(user.github_username);
  updateUser(user.id, {
    github_name: gh.profile.name,
    github_bio: gh.profile.bio,
    github_company: gh.profile.company,
    github_location: gh.profile.location,
    github_followers: gh.profile.followers,
    github_public_repos: gh.profile.public_repos,
    github_avatar: gh.profile.avatar,
    github_languages: JSON.stringify(gh.languages),
    github_top_repos: JSON.stringify(gh.repos),
    github_orgs: JSON.stringify(gh.orgs),
    github_activity: JSON.stringify(gh.activity),
    github_total_stars: gh.totalStars,
    github_created_at: gh.accountCreated,
  });
  console.log(`[github] @${user.github_username}: ${gh.profile.public_repos} repos, ${gh.totalStars} stars, ${gh.activity.pushes_90d} pushes/90d, langs ${gh.languages.slice(0, 5).join(",")}`);
}

const enrichment = await enrichProfile({
  xUsername: user.x_username,
  githubUsername: user.github_username,
  name: user.x_name || gh?.profile?.name,
});
const sigCount = Array.isArray((enrichment as any)?.signals) ? (enrichment as any).signals.length : Object.keys(enrichment || {}).length;
console.log(`[exa] enrichment gathered (${sigCount} signal groups)`);

const result = await scoreProfile({
  xUsername: user.x_username,
  xName: user.x_name,
  xBio: user.x_bio,
  xFollowers: user.x_followers,
  xFollowing: user.x_following,
  xTweetCount: user.x_tweet_count,
  xVerified: user.x_verified,
  xLocation: user.x_location,
  githubUsername: user.github_username,
  githubName: gh?.profile?.name,
  githubBio: gh?.profile?.bio,
  githubCompany: gh?.profile?.company,
  githubLocation: gh?.profile?.location,
  githubFollowers: gh?.profile?.followers,
  githubPublicRepos: gh?.profile?.public_repos,
  githubLanguages: gh?.languages || [],
  githubTopRepos: gh?.repos || [],
  githubOrgs: gh?.orgs || [],
  githubActivity: gh?.activity || null,
  githubTotalStars: gh?.totalStars,
  githubAccountCreated: gh?.accountCreated,
  linkedinName: user.linkedin_name,
  linkedinCompany: user.linkedin_company,
  linkedinVerifiedDomain: user.linkedin_domain,
  enrichment,
} as any);

console.log("\n=== DRY RUN — nothing written to score/tier/grant ===");
console.log(JSON.stringify({ score: result.score, tier: result.tier, grantUsd: result.grantUsd, breakdown: result.breakdown, reasoning: result.reasoning }, null, 2));
