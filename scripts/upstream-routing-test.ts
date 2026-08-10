// Pure routing regression: pooled Jatevo is primary, its independent Ark key
// takes over during a cooldown, and lane identity remains internal telemetry.

const saved = {
  JATEVO_API_KEY: process.env.JATEVO_API_KEY,
  JATEVO_MODEL: process.env.JATEVO_MODEL,
  ARK_API_KEY: process.env.ARK_API_KEY,
};

process.env.JATEVO_API_KEY = "test-jatevo";
delete process.env.JATEVO_MODEL;
process.env.ARK_API_KEY = "test-ark";

const {
  clearJatevoCooldown,
  coolDownJatevo,
  jatevoCooldownSeconds,
  resolveFailover,
  resolveUpstream,
  tracedEndpoint,
} = await import("../server/upstream");

let failed = false;
const check = (name: string, ok: boolean, detail?: unknown) => {
  console.log(`${ok ? "PASS" : "FAIL"}  ${name}${detail === undefined ? "" : ` — ${JSON.stringify(detail)}`}`);
  if (!ok) failed = true;
};

clearJatevoCooldown();
const primary = resolveUpstream();
check("Jatevo is primary", primary?.provider === "jatevo", primary?.provider);
check("public traffic uses the bare pooled model", primary?.model === "DeepSeek-V4-Flash-0731", primary?.model);
check("Ark is an independent failover", primary ? resolveFailover(primary)?.provider === "ark" : false);

const response = new Response("", { headers: { "X-Served-By": "Wafer" } });
check("Jatevo lane is retained in internal endpoint telemetry", primary ? tracedEndpoint(primary, response, "chat.completions") === "chat.completions:wafer" : false);

coolDownJatevo(30);
check("cooldown is active", jatevoCooldownSeconds() > 0);
check("new requests move directly to Ark during cooldown", resolveUpstream()?.provider === "ark", resolveUpstream()?.provider);

clearJatevoCooldown();
check("Jatevo returns after cooldown", resolveUpstream()?.provider === "jatevo", resolveUpstream()?.provider);

for (const [key, value] of Object.entries(saved)) {
  if (value === undefined) delete process.env[key];
  else process.env[key] = value;
}

if (failed) process.exit(1);
