
/** Per-call output ceiling, shared with server.ts (VANTIS_CARD_MAX_TOKENS). DeepSeek documents 384K max output for V4 Flash; Wafer publishes no cap below the 1M model length. */
const MAX_TOKENS_CAP = parseInt(process.env.VANTIS_CARD_MAX_TOKENS || "32768");
// Vantis Cards documentation portal.
//
// The docs ship with the gateway so the examples and behavioral guarantees
// can be reviewed and deployed in the same commit as the API. The HTML works
// without JavaScript; search, copy buttons and keyboard shortcuts progressively
// enhance it. Machine readers get /docs/openapi.json and /docs/llms.txt.

import { V_MARK, esc } from "./pages";
import { publicModels, isAllowlisted } from "./upstream";

type DocSection = { id: string; title: string; body: string };
type DocPage = {
  slug: string;
  group: string;
  title: string;
  eyebrow: string;
  summary: string;
  keywords: string[];
  sections: DocSection[];
};

const BASE_URL = "https://card.vantis.sh/v1";
const MODEL = "deepseek-v4-flash-0731";
const FAST_MODEL = "deepseek-v4-flash-0731-fast";

const inline = (s: string) => `<code class="inline">${esc(s)}</code>`;
const code = (label: string, language: string, source: string) => `
  <div class="codeblock">
    <div class="codehead"><span>${esc(label)}</span><button type="button" class="copy" data-copy aria-label="Copy ${esc(label)}">Copy</button></div>
    <pre><code class="language-${esc(language)}">${esc(source.trim())}</code></pre>
  </div>`;
const note = (title: string, body: string, tone: "note" | "warn" | "ok" = "note") => `
  <aside class="callout callout--${tone}"><strong>${esc(title)}</strong><div>${body}</div></aside>`;
const table = (headers: string[], rows: string[][]) => `
  <div class="tablewrap"><table><thead><tr>${headers.map((h) => `<th>${esc(h)}</th>`).join("")}</tr></thead>
  <tbody>${rows.map((r) => `<tr>${r.map((v) => `<td>${v}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
const steps = (items: { title: string; body: string }[]) => `
  <ol class="steps">${items.map((x, i) => `<li><span>${String(i + 1).padStart(2, "0")}</span><div><strong>${esc(x.title)}</strong>${x.body}</div></li>`).join("")}</ol>`;

const CURL_BASIC = `curl ${BASE_URL}/chat/completions \\
  -H "Authorization: Bearer $VANTIS_CARD_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "${MODEL}",
    "messages": [
      {"role": "user", "content": "Explain this repository in three bullets."}
    ],
    "max_tokens": 512
  }'`;

const CURL_STREAM = `curl -N ${BASE_URL}/chat/completions \\
  -H "Authorization: Bearer $VANTIS_CARD_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "${MODEL}",
    "messages": [{"role": "user", "content": "Plan the implementation."}],
    "stream": true,
    "stream_options": {"include_usage": true},
    "max_tokens": 1024
  }'`;

const OPENCLAW_CONFIG = `{
  "models": {
    "mode": "merge",
    "providers": {
      "vantis-card": {
        "baseUrl": "https://card.vantis.sh/v1",
        "apiKey": "\${VANTIS_CARD_API_KEY}",
        "api": "openai-completions",
        "timeoutSeconds": 600,
        "models": [{
          "id": "deepseek-v4-flash-0731",
          "name": "Vantis DeepSeek V4 Flash 0731",
          "reasoning": true,
          "input": ["text"],
          "cost": {
            "input": 0.14,
            "output": 0.28,
            "cacheRead": 0.14,
            "cacheWrite": 0.14
          },
          "contextWindow": 1048576,
          "maxTokens": ${MAX_TOKENS_CAP},
          "compat": {
            "thinkingFormat": "deepseek",
            "requiresReasoningContentOnAssistantMessages": true,
            "supportsUsageInStreaming": true,
            "maxTokensField": "max_tokens"
          }
        }]
      }
    }
  },
  "agents": {
    "defaults": {
      "models": {
        "vantis-card/deepseek-v4-flash-0731": {
          "alias": "vantis"
        }
      }
    }
  }
}`;

const TOOL_REQUEST = `{
  "model": "${MODEL}",
  "messages": [
    {"role": "user", "content": "Use the tool to add 17 and 25."}
  ],
  "tools": [{
    "type": "function",
    "function": {
      "name": "add_numbers",
      "description": "Add two numbers",
      "parameters": {
        "type": "object",
        "properties": {
          "a": {"type": "number"},
          "b": {"type": "number"}
        },
        "required": ["a", "b"],
        "additionalProperties": false
      }
    }
  }],
  "tool_choice": "auto",
  "stream": true,
  "stream_options": {"include_usage": true}
}`;

const pages: DocPage[] = [
  {
    slug: "overview", group: "Start", eyebrow: "Documentation", title: "Build agents on the Vantis rail",
    summary: "One OpenAI-compatible endpoint, a priced model catalog, real metering, and agentic streaming that preserves tool calls.",
    keywords: ["introduction", "base url", "features", "deepseek", "agent"],
    sections: [
      {
        id: "what-it-is", title: "What Vantis Cards provides", body: `
          <p>Vantis Cards turns a scored developer identity into metered inference infrastructure. Your card carries a dollar-denominated credit balance, named API keys, an Inference wallet, and an auditable virtual $VANTIS burn ledger.</p>
          <p>The rail serves a published catalog: open weights alongside the frontier GPT-5.x family, each billed at its vendor's own list price. ${inline(MODEL)} is the default &mdash; what a request with no ${inline("model")} field gets. Model IDs outside the catalog are refused instead of silently rerouting to a different model. The full list and its prices live at <a href="/models">/models</a>.</p>
          ${note("Base URL", `<a href="${BASE_URL}">${BASE_URL}</a>`, "ok")}`
      },
      {
        id: "guarantees", title: "Operating guarantees", body: `
          <ul class="checks">
            <li>OpenAI-compatible Chat Completions API</li>
            <li>SSE streaming with usage-aware settlement</li>
            <li>Function and tool-call deltas preserved for agent loops</li>
            <li>Reasoning enabled by default</li>
            <li>Real token counts and six-decimal USD settlement</li>
            <li>OpenAI-shaped errors, rate headers, and retry guidance</li>
            <li>No prompt or response bodies stored by the Card gateway</li>
          </ul>`
      },
      {
        id: "first-call", title: "Your first call", body: `
          <p>Create a named key in the <a href="/wallets">Console</a>, keep it in an environment variable, then make a completion.</p>
          ${code("cURL", "bash", CURL_BASIC)}
          <p class="after-code">Continue with the <a href="/docs/quickstart">five-minute quickstart</a> or install the <a href="/docs/openclaw">OpenClaw provider</a>.</p>`
      },
    ],
  },
  {
    slug: "quickstart", group: "Start", eyebrow: "Start", title: "Five-minute quickstart",
    summary: "Create a key, call the model, stream a response, and inspect the remaining balance.",
    keywords: ["getting started", "curl", "environment", "balance", "stream"],
    sections: [
      {
        id: "create-key", title: "1. Create a named key", body: `
          <p>Sign in, finish scoring, then open the <a href="/wallets">Console</a>. Create a key against your main card balance or the Inference wallet. The plaintext key is shown once.</p>
          ${code("Environment", "bash", `export VANTIS_CARD_API_KEY="vcard_..."`)}
          ${note("Keep it secret", "Do not commit keys, paste them into screenshots, or expose them in browser-side code.", "warn")}`
      },
      {
        id: "call-model", title: "2. Call the model", body: `
          ${code("Chat completion", "bash", CURL_BASIC)}
          <p>The response follows the OpenAI Chat Completions shape and adds a top-level ${inline("vantis")} settlement object.</p>`
      },
      {
        id: "stream", title: "3. Stream the response", body: `
          ${code("Streaming completion", "bash", CURL_STREAM)}
          <p>Pass ${inline("stream_options.include_usage: true")} to receive the final usage frame with Vantis settlement metadata before ${inline("[DONE]")}.</p>`
      },
      {
        id: "balance", title: "4. Check the balance", body: `
          ${code("Balance", "bash", `curl ${BASE_URL}/balance \\
  -H "Authorization: Bearer $VANTIS_CARD_API_KEY"`)}
          <p>A key returns the balance of the lane it spends, with the live $VANTIS conversion. The main card balance — granted, consumed and lifetime virtual burn — is on your console at ${BASE_URL}/wallets.</p>`
      },
    ],
  },
  {
    slug: "authentication", group: "API", eyebrow: "API", title: "Authentication",
    summary: "Use named Bearer keys, scope them to a balance, and rotate or revoke them without changing your card.",
    keywords: ["bearer", "api key", "rotate", "revoke", "security", "scope"],
    sections: [
      {
        id: "bearer", title: "Bearer authentication", body: `
          <p>Every ${inline("/v1")} request that reads private account data or runs inference requires an API key in the Authorization header.</p>
          ${code("Header", "http", `Authorization: Bearer $VANTIS_CARD_API_KEY`)}
          <p>Missing and invalid keys return OpenAI-shaped ${inline("401")} errors so standard SDKs surface useful messages.</p>`
      },
      {
        id: "key-lifecycle", title: "Key lifecycle", body: `
          ${steps([
            { title: "Create", body: "<p>Name the key and choose its spending scope. Up to 10 active keys can exist per card.</p>" },
            { title: "Store", body: "<p>The plaintext is revealed once. Vantis only displays a short prefix afterward.</p>" },
            { title: "Rotate", body: "<p>Rotation invalidates the previous secret immediately and reveals the replacement once.</p>" },
            { title: "Revoke", body: "<p>Revocation is permanent. Create a new key if the integration returns later.</p>" },
          ])}`
      },
      {
        id: "scopes", title: "Spending scopes", body: `
          ${table(["Scope", "Pays from", "Use"], [
            ["Inference lane", "Inference wallet balance", "All inference — general integrations, personal agents, delegated keys"],
            ["Developer tools", "Developer-tools wallet", "Reserved for future metered tool routes; inference is refused"],
          ])}
          <p>Every key is scoped to a lane. The main card balance is a funding pool: it holds granted credits and allocates them into a lane, but it never pays for a call itself. A key that still points at the main balance is refused with ${inline("wallet_scope")} — allocate credits to your Inference lane and use that lane's key.</p>`
      },
    ],
  },
  {
    slug: "models", group: "API", eyebrow: "API", title: "Models",
    summary: "The catalog: open-weights routes at published per-token prices, and the allow-listed frontier GPT family.",
    keywords: ["model", "deepseek", "context", "pricing", "reasoning", "max tokens"],
    sections: [
      {
        id: "catalog", title: "The catalog", body: `
          ${table(["Model ID", "Context", "Input types", "Input / 1M", "Cached input / 1M", "Output / 1M"],
            publicModels().map((m) => [
              inline(m.id),
              m.contextWindow ? m.contextWindow.toLocaleString() : "&mdash;",
              m.vision ? "Text, image" : "Text",
              isAllowlisted(m) ? "Allowlist" : `$${m.rate.input.toFixed(2)}`,
              isAllowlisted(m) ? "Allowlist" : m.rate.cachedInput != null ? `$${m.rate.cachedInput.toFixed(2)}` : "&mdash;",
              isAllowlisted(m) ? "Allowlist" : `$${m.rate.output.toFixed(2)}`,
            ]))}
          <p>Maximum output through Card is ${MAX_TOKENS_CAP.toLocaleString()} tokens per call (DeepSeek&rsquo;s documented 384K output limit); a model&rsquo;s own smaller ceiling still applies. Billed prices are published list prices and are what the gateway bills, to six decimal places.</p>
          ${note("Two tiers, one checkpoint", `${inline(FAST_MODEL)} is the same DeepSeek V4 Flash 0731 build on its high-throughput serving tier (up to 400 tok/s; ~290 tok/s measured from the rail on 2026-08-17), priced separately at twice the standard rate. Where the tier reports prompt-cache reads (${inline("usage.prompt_tokens_details.cached_tokens")}), those input tokens bill at the cached price. It is also the zero-data-retention route: ${inline('"zdr": true')} on either DeepSeek id is served on the fast tier and billed at the fast rate. Every DeepSeek response names the tier it was billed on in ${inline("X-Vantis-Tier")} (${inline("fast")} or ${inline("standard")}) and in ${inline("vantis.tier")}. The fast tier has no failover: if it is unavailable the call returns ${inline("503 catalog_route_unavailable")} rather than quietly answering from the standard line.`)}
          ${note("Allowlist", `The frontier GPT ids (including ${inline("gpt-image-2")}) run on the rail's pooled capacity and are allow-listed per account &mdash; access is granted by the operator, not self-serve. On an allow-listed key the lane is not metered: calls bill $0.00 and retire no $VANTIS. From any other key these ids return ${inline("403 model_allowlist_only")}.`)}
          ${note("Image input", `Pass an ${inline("image_url")} content part exactly as you would to the OpenAI API. The GPT-5.x models and Kimi K3 accept images; the DeepSeek tiers are text only and the gateway refuses image parts on them with ${inline("400 image_input_unsupported")} rather than forwarding a request the model cannot honour.`)}
          ${note("Reasoning on Kimi K3", `Kimi K3 runs with reasoning always on and does not adjust its effort. A request on it that carries ${inline('thinking: {"type": "disabled"}')}, ${inline("enable_thinking: false")} or ${inline('reasoning_effort: "none"')} is refused with ${inline("400 reasoning_always_on")} rather than billed for a pass it asked not to have. Reasoning tokens bill as output; non-streamed responses return the pass in ${inline("reasoning_content")}, streamed responses carry the answer only.`)}
          ${note("Pinned identity", "Provider-specific upstream IDs may differ. The public Vantis model ID remains stable, while every response records the model actually served.")}`
      },
      {
        id: "default-model", title: "Default and failover", body: `
          <p>A request with no ${inline("model")} field is served by ${inline(MODEL)}, the cheapest route on the catalog. It is also the only model with a failover behind it: if its primary route fails mid-flight, the call is retried on an independent second route serving the same build.</p>
          <p>Every other catalog ID is pinned to a single gateway. If that route is unavailable the call returns ${inline("503 catalog_route_unavailable")} rather than answering with a different model.</p>`
      },
      {
        id: "list-models", title: "List models", body: `
          ${code("Request", "bash", `curl ${BASE_URL}/models`)}
          <p>This endpoint is public. Anonymous calls (and keys without pool access) list the open-access catalog; a key on the frontier-pool allowlist also sees the allowlist ids, marked ${inline('"access": "allowlist"')}. The response carries Vantis list pricing and the current serving statement.</p>`
      },
      {
        id: "reasoning", title: "Reasoning messages", body: `
          <p>DeepSeek can return ${inline("reasoning_content")} alongside ${inline("content")}. Agent runners must preserve that reasoning field on assistant messages when continuing a multi-turn tool loop.</p>
          ${note("OpenClaw compatibility", `Set ${inline("thinkingFormat: deepseek")} and ${inline("requiresReasoningContentOnAssistantMessages: true")}.`, "ok")}`
      },
    ],
  },
  {
    slug: "chat-completions", group: "API", eyebrow: "API", title: "Chat completions",
    summary: "Send OpenAI-compatible messages, tools, and streaming options to the Vantis completion endpoint.",
    keywords: ["chat completions", "messages", "parameters", "response", "usage"],
    sections: [
      {
        id: "endpoint", title: "Create a completion", body: `
          ${code("Endpoint", "http", `POST ${BASE_URL}/chat/completions`)}
          ${table(["Field", "Required", "Behavior"], [
            [inline("model"), "Recommended", `Use ${inline(MODEL)}. Supported aliases resolve to the same public model.`],
            [inline("messages"), "Yes", "OpenAI-compatible system, user, assistant, and tool messages."],
            [inline("max_tokens"), "No", "Defaults to 1,024 and is capped at the gateway maximum."],
            [inline("stream"), "No", "Truthy values are normalized to true and returned as SSE."],
            [inline("stream_options.include_usage"), "No", "Returns the final metered usage frame when streaming."],
            [inline("tools"), "No", "OpenAI function-tool definitions."],
            [inline("tool_choice"), "No", "Automatic or explicitly selected tool behavior."],
          ])}`
      },
      {
        id: "response", title: "Settlement metadata", body: `
          ${code("Response excerpt", "json", `{
  "usage": {
    "prompt_tokens": 1200,
    "completion_tokens": 320,
    "total_tokens": 1520
  },
  "vantis": {
    "cost_usd": 0.000258,
    "vantis_burned": 0.147092,
    "vantis_price_usd": 0.001754,
    "balance_usd": 9.999742,
    "model_served": "deepseek-ai/DeepSeek-V4-Flash-0731",
    "note": "burn ledger — settles on-chain weekly"
  }
}`)}
          <p>Cost is calculated from the completed response's real token counts. The virtual $VANTIS amount uses the live deepest-pool price captured at settlement.</p>`
      },
      {
        id: "reservation", title: "Preflight balance reservation", body: `
          <p>Before inference, Card reserves the worst-case cost of the estimated input plus every requested output token. Parallel calls create independent holds, preventing a nearly empty balance from being overspent.</p>
          ${note("Large agent contexts are allowed", "Card has no user-facing token-per-minute cap. Large inputs are accepted when the selected balance can cover their real cost.", "ok")}`
      },
    ],
  },
  {
    slug: "streaming-tools", group: "Agent workflows", eyebrow: "Agents", title: "Streaming and tool loops",
    summary: "Preserve reasoning, function-call deltas, usage, and settlement across multi-turn agent workflows.",
    keywords: ["sse", "streaming", "tool calls", "functions", "agentic", "loop"],
    sections: [
      {
        id: "stream-contract", title: "Streaming contract", body: `
          <p>Streaming responses use Server-Sent Events. Content, reasoning, and tool-call deltas pass through immediately. Card holds the final usage frame long enough to settle the balance, augments it with ${inline("vantis")}, then emits ${inline("[DONE]")}.</p>
          ${code("Streaming request", "bash", CURL_STREAM)}`
      },
      {
        id: "tool-call", title: "Tool-call request", body: `
          ${code("Request body", "json", TOOL_REQUEST)}
          <p>Accumulate partial ${inline("delta.tool_calls")} entries by index. Execute the requested tool, append the assistant message with its complete tool call, then append a ${inline("role: tool")} result carrying the same ${inline("tool_call_id")}.</p>`
      },
      {
        id: "loop", title: "The two-turn loop", body: `
          ${steps([
            { title: "Model requests a tool", body: `<p>The stream ends with ${inline("finish_reason: tool_calls")} and one or more complete tool calls.</p>` },
            { title: "Harness executes", body: "<p>Your runner validates the arguments, runs the local or remote tool, and captures the result.</p>" },
            { title: "Harness continues", body: `<p>Send the assistant tool-call message plus a matching ${inline("role: tool")} message.</p>` },
            { title: "Model answers", body: `<p>The final turn normally ends with ${inline("finish_reason: stop")}.</p>` },
          ])}
          ${note("Production regression", "Vantis continuously exercises a real two-turn streaming tool loop against the public endpoint. The probe validates the tool-call delta, second turn, final answer, settlement, and cleanup.", "ok")}`
      },
      {
        id: "disconnects", title: "Disconnects and partial output", body: `
          <p>If a client disconnects, Card continues reading the upstream response so the account is settled for what the provider actually served. If the upstream stream stalls or breaks, partial output is billed from real usage when available or a conservative character estimate, and the client receives a ${inline("stream_interrupted")} error event.</p>`
      },
    ],
  },
  {
    slug: "openclaw", group: "Agent workflows", eyebrow: "Integration", title: "OpenClaw",
    summary: "Register Vantis Card as an OpenAI-compatible DeepSeek provider with full reasoning and tool-loop compatibility.",
    keywords: ["openclaw", "provider", "models json", "compat", "probe", "alias"],
    sections: [
      {
        id: "environment", title: "1. Store the Card key", body: `
          <p>Add the key to ${inline("~/.openclaw/.env")} and keep that file private.</p>
          ${code("~/.openclaw/.env", "bash", `VANTIS_CARD_API_KEY=vcard_...\nchmod 600 ~/.openclaw/.env`)}`
      },
      {
        id: "provider", title: "2. Register the provider", body: `
          <p>Merge this provider into ${inline("~/.openclaw/openclaw.json")}. It registers one Vantis model and the short alias ${inline("vantis")}.</p>
          ${code("openclaw.json", "json", OPENCLAW_CONFIG)}`
      },
      {
        id: "validate", title: "3. Validate and probe", body: `
          ${code("OpenClaw CLI", "bash", `openclaw config validate --json
openclaw models list --provider vantis-card --plain
openclaw models status --probe \\
  --probe-provider vantis-card \\
  --probe-concurrency 1 \\
  --probe-max-tokens 8 \\
  --probe-timeout 60000 \\
  --json`)}
          <p>Switch with ${inline("/model vantis")}. If an existing session remains pinned to its previous model, start ${inline("/new")}.</p>`
      },
      {
        id: "agentic", title: "4. Verify a real tool loop", body: `
          <p>A model probe proves inference, not agency. Ask the OpenClaw session to perform a harmless tool action such as reading the current directory, then verify it returns a final response after the tool result.</p>
          ${note("Required compatibility flag", `${inline("requiresReasoningContentOnAssistantMessages: true")} is necessary for reliable multi-turn DeepSeek reasoning.`, "warn")}`
      },
    ],
  },
  {
    slug: "other-runners", group: "Agent workflows", eyebrow: "Integration", title: "OpenCode, Hermes, and SDKs",
    summary: "Use the standard OpenAI Chat Completions surface from common coding harnesses and SDKs.",
    keywords: ["opencode", "hermes", "python", "typescript", "sdk", "base url"],
    sections: [
      {
        id: "generic", title: "Generic OpenAI-compatible configuration", body: `
          ${table(["Setting", "Value"], [
            ["Base URL", inline(BASE_URL)],
            ["API key", inline("VANTIS_CARD_API_KEY")],
            ["Model", inline(MODEL)],
            ["API", "OpenAI Chat Completions"],
            ["Streaming", "SSE"],
            ["Tool calls", "Supported"],
          ])}`
      },
      {
        id: "python", title: "Python SDK", body: `
          ${code("Python", "python", `import os
from openai import OpenAI

client = OpenAI(
    api_key=os.environ["VANTIS_CARD_API_KEY"],
    base_url="${BASE_URL}",
)

response = client.chat.completions.create(
    model="${MODEL}",
    messages=[{"role": "user", "content": "Review this function."}],
    max_tokens=1024,
)
print(response.choices[0].message.content)`)}
          <p>Keep the key in the process environment and out of source control.</p>`
      },
      {
        id: "runner", title: "Harness requirements", body: `
          <ul class="checks">
            <li>Accept OpenAI-compatible ${inline("reasoning_content")}</li>
            <li>Preserve reasoning on assistant messages across turns</li>
            <li>Accumulate streamed tool-call arguments by index</li>
            <li>Send tool results using the original ${inline("tool_call_id")}</li>
            <li>Honor ${inline("Retry-After")} on 429 responses</li>
            <li>Use a timeout suitable for long reasoning and tool loops</li>
          </ul>`
      },
    ],
  },
  {
    slug: "keys-wallets", group: "Accounts", eyebrow: "Accounts", title: "Keys and wallets",
    summary: "Create named credentials, isolate agent budgets, and understand which balance pays for each call.",
    keywords: ["keys", "wallets", "budget", "fund", "sweep", "agent wallet"],
    sections: [
      {
        id: "model", title: "One card, multiple credentials", body: `
          <p>A card owns a main balance and two fixed-purpose wallets. Named API keys point at a wallet, never at the main balance: credits are allocated from main into the lane that spends them. This lets one person isolate automation budgets without opening another Vantis account.</p>
          ${table(["Object", "Purpose"], [
            ["Card balance", "The funding pool — holds granted credits, allocates them to lanes, never pays a call"],
            ["Inference wallet", "Delegated budget for agents and harnesses"],
            ["Developer-tools wallet", "Reserved for future tool routes"],
            ["Named API key", "Revocable credential bound to one spending scope"],
          ])}`
      },
      {
        id: "movement", title: "Moving credits", body: `
          <p>Fund a wallet from the main balance, or sweep the remaining wallet balance back. Transfers are double-entry ledger movements and do not create or destroy credits.</p>
          ${note("Closed wallets", "Closing a wallet invalidates its scoped credentials. Sweep any remaining balance first.", "warn")}`
      },
      {
        id: "visibility", title: "Credential visibility", body: `
          <p>After creation or rotation, only the first 12 characters are displayed. Admin APIs never return live secrets. Request logs store the same short prefix so operators can identify traffic without recovering the key.</p>`
      },
    ],
  },
  {
    slug: "credits-billing", group: "Accounts", eyebrow: "Accounts", title: "Credits, billing, and virtual burn",
    summary: "Understand grants, real inference cost, balance holds, settlement, and the off-chain $VANTIS ledger.",
    keywords: ["credits", "billing", "cost", "burn", "balance", "pricing", "virtual"],
    sections: [
      {
        id: "credits", title: "What a credit is", body: `
          <p>The internal ledger is denominated in USD. Credits are non-transferable, have no monetary value, and can only pay for metered Vantis routes. They are not a token allocation, wallet balance, airdrop, investment, or claim on $VANTIS supply.</p>`
      },
      {
        id: "grants", title: "Scoring grants", body: `
          ${table(["Card tier", "Score", "Initial credit grant"], [
            ["Whale", "80–100", "$25"],
            ["Builder", "60–79", "$15"],
            ["Explorer", "40–59", "$10"],
            ["Noise", "0–39", "Up to $5, subject to campaign rules"],
          ])}`
      },
      {
        id: "settlement", title: "How a call settles", body: `
          ${steps([
            { title: "Reserve", body: "<p>Card holds the request's worst-case affordable cost before dialing upstream.</p>" },
            { title: "Serve", body: "<p>The model runs and returns its actual input and output token counts.</p>" },
            { title: "Price", body: "<p>Token counts are multiplied by the published Vantis list rates.</p>" },
            { title: "Burn", body: "<p>USD cost converts at the live deepest-pool $VANTIS price and enters the virtual ledger.</p>" },
            { title: "Release", body: "<p>The hold is released and the actual six-decimal charge remains.</p>" },
          ])}`
      },
      {
        id: "honesty", title: "Virtual means off-chain", body: `
          ${note("How the burn settles", "The burn ledger accrues per call as an accounting expression of inference spend. On a fixed weekly cycle the accrued total is burned on-chain from the Vantis burn reserve via the token's own burn function — supply falls, verifiable at vantis.sh/burns. Settlement destroys treasury $VANTIS; no tokens ever move to or from users, and credits never convert to tokens.", "warn")}`
      },
    ],
  },
  {
    slug: "limits", group: "Accounts", eyebrow: "Accounts", title: "Limits and fair use",
    summary: "Request-based limits protect agent loops without penalizing large cached prompts or tool schemas.",
    keywords: ["rpm", "rate limit", "tier", "tokens", "429", "retry"],
    sections: [
      {
        id: "request-limits", title: "Request-based limits", body: `
          <p>Vantis does not impose a user-facing token-per-minute limit. Long agent histories, tool definitions, and large cached prompts are accepted when the selected balance can pay their real cost.</p>
          ${table(["Account class", "Current RPM"], [
            ["Standard card and agent wallet", "240 requests per minute"],
            ["Founder / staging", "500 requests per minute"],
          ])}
          <p>Limits use a rolling 60-second window per API key. Account-specific overrides may be applied by the operator.</p>`
      },
      {
        id: "headers", title: "Rate headers", body: `
          ${table(["Header", "Meaning"], [
            [inline("X-RateLimit-Limit"), "The key's requests-per-minute ceiling"],
            [inline("X-RateLimit-Remaining"), "Requests remaining in the current rolling window"],
            [inline("X-Upstream-Remaining"), "Shared rail capacity observed at authorization time"],
            [inline("Retry-After"), "Minimum seconds to wait after a 429"],
          ])}`
      },
      {
        id: "saturation", title: "Shared serving capacity", body: `
          <p>Card protects the shared inference rail with a separate safety ceiling. Public traffic is spread across a pooled primary route, while an independent route absorbs provider saturation and short outages automatically.</p>
          <p>If all serving capacity is exhausted, the request receives ${inline("rate_limit_exceeded")} and ${inline("Retry-After")} instead of leaking an opaque provider refusal.</p>
          ${note("Retry correctly", "Use exponential backoff with jitter and always honor Retry-After. Do not immediately replay a large parallel volley.", "warn")}`
      },
      {
        id: "spend", title: "Cost safeguards", body: `
          <p>Balance availability and optional daily spend caps remain the economic controls. They protect runaway loops without rejecting an agent solely because its input context is large.</p>`
      },
    ],
  },
  {
    slug: "errors", group: "Reference", eyebrow: "Reference", title: "Errors and retries",
    summary: "Handle authentication, balance, request, saturation, and upstream failures using stable OpenAI-shaped errors.",
    keywords: ["error codes", "401", "402", "403", "429", "500", "retry after"],
    sections: [
      {
        id: "shape", title: "Error envelope", body: `
          ${code("Error", "json", `{
  "error": {
    "code": "rate_limited",
    "type": "rate_limit_error",
    "message": "Rate limit of 240 requests per minute reached. Retry in 12s.",
    "limit_rpm": 240,
    "retry_after_seconds": 12
  }
}`)}`
      },
      {
        id: "codes", title: "Common errors", body: `
          ${table(["HTTP", "Code", "Retry?", "Action"], [
            ["400", inline("invalid_json"), "No", "Send a valid JSON request body."],
            ["400", inline("unsupported_model"), "No", `Use ${inline(MODEL)}.`],
            ["400", inline("zdr_unsupported_model"), "No", `${inline('"zdr": true')} is honoured on the DeepSeek rail only (${inline(MODEL)} and ${inline(FAST_MODEL)}); the call was not served.`],
            ["401", inline("unauthorized"), "No", "Add the Bearer header."],
            ["401", inline("invalid_api_key"), "No", "Check, rotate, or replace the key."],
            ["402", inline("insufficient_credits"), "No", "Lower max_tokens, fund the scope, or top up."],
            ["403", inline("key_suspended"), "No", "Contact the operator."],
            ["429", inline("rate_limited"), "Yes", "Honor Retry-After and add jitter."],
            ["429", inline("rate_limit_exceeded"), "Yes", "The server is at capacity. Retry after the supplied delay."],
            ["502", inline("server_error"), "Yes", "Retry with bounded exponential backoff."],
            ["503", inline("service_unavailable"), "Yes", "No serving capacity right now. Back off before retrying."],
            ["503", inline("model_unavailable"), "Later", "That model cannot be served at the moment; other models may still work."],
          ])}`
      },
      {
        id: "policy", title: "Retry policy", body: `
          <ul class="checks">
            <li>Retry only transient 429, 502, and 503 responses</li>
            <li>Honor ${inline("Retry-After")} when present</li>
            <li>Add random jitter to avoid synchronized retries</li>
            <li>Cap attempts and total elapsed time</li>
            <li>Do not retry authentication, model, or balance errors unchanged</li>
          </ul>`
      },
    ],
  },
  {
    slug: "security", group: "Reference", eyebrow: "Reference", title: "Security and data handling",
    summary: "Understand what Card records, how credentials are protected, and when zero-data-retention can be claimed.",
    keywords: ["security", "privacy", "zdr", "retention", "logs", "prompts"],
    sections: [
      {
        id: "logging", title: "Gateway records", body: `
          <p>Card stores request metadata needed for settlement and operations: user ID, key prefix, endpoint, model, status, outcome, token counts, cost, virtual burn, latency, IP, user agent, and a bounded error detail.</p>
          ${note("Prompt content", "The Card gateway does not store request messages, tool arguments, generated content, or reasoning content in its request ledger.", "ok")}`
      },
      {
        id: "zdr", title: "Zero data retention", body: `
          <p>Do not assume ZDR from the Vantis endpoint alone. Any carded key may request the dedicated ZDR route on the DeepSeek rail with ${inline('"zdr": true')} in the body or ${inline("X-ZDR: required")} as a header. The gateway then serves the call only on ZDR-capable infrastructure &mdash; prompts and completions are processed for the response, not retained &mdash; and if that capacity is unavailable the call fails (${inline("503 zdr_route_unavailable")} or a ${inline("429")}) rather than serving without the guarantee. Success is attested only when the response includes ${inline("X-Vantis-ZDR: honored")}.</p>
          <p>The ZDR route is the fast tier, so a ZDR call is billed at the fast rate whichever DeepSeek id it names; the response also carries ${inline("X-Vantis-Tier: fast")}. On any other model id the flag is refused with ${inline("400 zdr_unsupported_model")} &mdash; never silently dropped.</p>
          ${note("Proof, not aspiration", "If the attestation header is absent, the request must not be described as ZDR. Traffic without the flag follows the standard route, which makes no retention guarantee beyond the gateway's own metering-only records.", "warn")}`
      },
      {
        id: "keys", title: "Credential safety", body: `
          <ul class="checks">
            <li>Secrets are revealed only at creation or rotation</li>
            <li>Revoked key rows no longer authenticate</li>
            <li>Request logs carry prefixes, never full keys</li>
            <li>Wallet closure invalidates keys scoped to that wallet</li>
            <li>Admin login and mutations are separately authenticated and audited</li>
          </ul>`
      },
    ],
  },
];

const GROUPS = [...new Set(pages.map((p) => p.group))];
const pageMap = new Map(pages.map((p) => [p.slug, p]));

const navHtml = (active: string) => GROUPS.map((group) => `
  <div class="navgroup"><div class="navlabel">${esc(group)}</div>
  ${pages.filter((p) => p.group === group).map((p) => `<a href="/docs/${p.slug}"${p.slug === active ? ' aria-current="page"' : ""}>${esc(p.title)}</a>`).join("")}
  </div>`).join("");

const DOCS_CSS = `
:root{--green:#09F875;--green-ink:#0B7A3E;--ink:#0A0A0A;--panel:#0C0D0E;--paper:#FFFFFF;--wash:#F4F6F4;--line:#E4E6E2;--line-strong:#D3D6D1;--body:#4C5055;--muted:#6A6F74;--display:'Space Grotesk',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;--sans:'Inter','Helvetica Neue',-apple-system,BlinkMacSystemFont,Arial,sans-serif;--mono:'SF Mono',ui-monospace,Menlo,Consolas,monospace;--top:64px;--ease:cubic-bezier(.23,1,.32,1)}
*{box-sizing:border-box}html{scroll-behavior:smooth;scroll-padding-top:88px}body{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);font-size:15px;line-height:1.68;-webkit-font-smoothing:antialiased}a{color:inherit;text-decoration:none}button,input{font:inherit}.vmark{height:18px;width:auto;display:inline-block;vertical-align:-.08em}.top{height:var(--top);position:sticky;top:0;z-index:30;background:rgba(255,255,255,.94);border-bottom:1px solid var(--line);backdrop-filter:blur(12px)}.topin{height:100%;max-width:1440px;margin:auto;padding:0 24px;display:grid;grid-template-columns:250px minmax(240px,520px) 1fr;align-items:center;gap:28px}.brand{display:flex;align-items:center;gap:9px;font-family:var(--display);font-weight:700;letter-spacing:.035em}.brand em{font-style:normal;color:var(--muted);font-weight:500}.search{position:relative}.search input{width:100%;height:38px;border:1px solid var(--line-strong);border-radius:9px;background:var(--wash);padding:0 70px 0 36px;color:var(--ink);outline:none}.search input:focus{border-color:var(--ink);box-shadow:0 0 0 3px rgba(9,248,117,.28);background:var(--paper)}.search svg{position:absolute;left:12px;top:11px;color:var(--muted)}.shortcut{position:absolute;right:9px;top:8px;border:1px solid var(--line-strong);border-radius:5px;background:var(--paper);font:10px var(--mono);padding:2px 6px;color:var(--muted)}.results{display:none;position:absolute;top:44px;left:0;right:0;background:var(--paper);border:1px solid var(--line-strong);border-radius:12px;box-shadow:0 18px 50px rgba(10,10,10,.14);padding:7px;max-height:380px;overflow:auto}.results.on{display:block}.result{display:block;padding:10px 11px;border-radius:7px}.result:hover,.result:focus{background:var(--wash);outline:none}.result strong{display:block;font-family:var(--display);font-size:14px}.result span{display:block;color:var(--muted);font-size:12px;line-height:1.45;margin-top:2px}.noresult{padding:14px;color:var(--muted);font-size:13px}.toplinks{justify-self:end;display:flex;align-items:center;gap:18px}.toplinks a{font-weight:600;font-size:13px}.toplinks .cta{background:var(--ink);color:var(--green);height:38px;padding:0 17px;border-radius:999px;display:flex;align-items:center}.shell{max-width:1440px;margin:auto;display:grid;grid-template-columns:250px minmax(0,760px) 220px;gap:52px;padding:0 24px}.side{position:sticky;top:var(--top);height:calc(100vh - var(--top));overflow:auto;padding:34px 14px 50px 0;border-right:1px solid var(--line)}.navgroup+.navgroup{margin-top:26px}.navlabel{font:600 10px var(--mono);letter-spacing:.14em;text-transform:uppercase;color:var(--muted);padding:0 10px 7px}.navgroup a{display:block;padding:6px 10px;border-radius:7px;color:var(--body);font-size:13px;line-height:1.45}.navgroup a:hover{color:var(--ink);background:var(--wash)}.navgroup a[aria-current=page]{background:var(--wash);color:var(--ink);font-weight:650}.doc{min-width:0;padding:64px 0 100px}.eyebrow{font:600 10px var(--mono);letter-spacing:.16em;text-transform:uppercase;color:var(--green-ink)}h1,h2,h3{font-family:var(--display);letter-spacing:-.02em;line-height:1.16}h1{font-size:38px;margin:12px 0 17px}h2{font-size:24px;margin:0 0 16px;scroll-margin-top:88px}h3{font-size:17px;margin:28px 0 8px}.lede{font-size:18px;line-height:1.62;color:var(--body);max-width:66ch;margin:0}.statusline{margin-top:28px;display:flex;align-items:center;gap:10px;font:12px var(--mono);color:var(--muted)}.statusdot{width:7px;height:7px;border-radius:50%;background:var(--green-ink);box-shadow:0 0 0 4px rgba(9,248,117,.18)}.section{padding-top:48px;margin-top:48px;border-top:1px solid var(--line)}.section:first-of-type{margin-top:58px}.section p{color:var(--body);max-width:72ch;margin:0 0 16px}.section p:last-child{margin-bottom:0}.section a{color:var(--green-ink);text-decoration:underline;text-underline-offset:3px}.section ul{padding-left:20px;color:var(--body)}.inline{font:12.5px var(--mono);background:var(--wash);border:1px solid var(--line);border-radius:5px;padding:2px 5px;color:var(--ink);word-break:break-word}.codeblock{background:var(--panel);border-radius:12px;overflow:hidden;margin:22px 0;color:#ECEFEA}.codehead{height:40px;padding:0 12px 0 16px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid rgba(255,255,255,.09);font:600 10px var(--mono);letter-spacing:.11em;text-transform:uppercase;color:rgba(255,255,255,.56)}.copy{border:1px solid rgba(255,255,255,.18);border-radius:6px;background:transparent;color:rgba(255,255,255,.72);font:11px var(--mono);padding:5px 9px;cursor:pointer}.copy:hover,.copy:focus-visible{color:var(--green);border-color:var(--green);outline:none}.codeblock pre{margin:0;padding:18px 20px 21px;overflow:auto;font:12.5px/1.7 var(--mono);tab-size:2}.codeblock code{font:inherit}.after-code{margin-top:4px}.callout{margin:22px 0;border:1px solid var(--line-strong);border-radius:10px;background:var(--wash);padding:16px 18px}.callout strong{font-family:var(--display);display:block;margin-bottom:3px}.callout div{color:var(--body)}.callout--ok{background:#EFFBF4;border-color:#B9E8CC}.callout--warn{background:#FBF8ED;border-color:#E7DCB0}.tablewrap{overflow:auto;border:1px solid var(--line);border-radius:10px;margin:22px 0}table{border-collapse:collapse;width:100%;min-width:540px;font-size:13px}th,td{text-align:left;padding:12px 14px;border-bottom:1px solid var(--line);vertical-align:top}th{font:600 10px var(--mono);letter-spacing:.1em;text-transform:uppercase;color:var(--muted);background:var(--wash)}tr:last-child td{border-bottom:0}td:first-child{color:var(--ink);font-weight:560}.steps{list-style:none;padding:0!important;margin:22px 0}.steps li{display:grid;grid-template-columns:42px 1fr;gap:14px;padding:18px 0;border-top:1px solid var(--line)}.steps li:last-child{border-bottom:1px solid var(--line)}.steps li>span{font:11px var(--mono);color:var(--muted);padding-top:3px}.steps strong{font-family:var(--display);display:block;margin-bottom:4px}.steps p{margin:0;color:var(--body)}.checks{list-style:none!important;padding:0!important;display:grid;gap:10px}.checks li{position:relative;padding-left:27px}.checks li:before{content:'✓';position:absolute;left:0;top:0;color:var(--green-ink);font-weight:800}.pager{margin-top:68px;padding-top:24px;border-top:1px solid var(--line);display:grid;grid-template-columns:1fr 1fr;gap:14px}.pager a{border:1px solid var(--line);border-radius:10px;padding:14px 16px;transition:border-color .16s,background .16s}.pager a:hover{border-color:var(--ink);background:var(--wash)}.pager a.next{text-align:right}.pager span{display:block;font:10px var(--mono);letter-spacing:.1em;text-transform:uppercase;color:var(--muted)}.pager strong{display:block;font-family:var(--display);margin-top:4px}.toc{position:sticky;top:var(--top);height:calc(100vh - var(--top));padding-top:38px}.toc label{font:600 10px var(--mono);letter-spacing:.13em;text-transform:uppercase;color:var(--muted)}.toc a{display:block;margin-top:9px;color:var(--muted);font-size:12px;line-height:1.45}.toc a:hover{color:var(--ink)}.tocmeta{margin-top:28px;padding-top:20px;border-top:1px solid var(--line);font-size:11px;color:var(--muted);line-height:1.6}.mobile-menu{display:none}.mobile-menu summary{list-style:none}.mobile-menu summary::-webkit-details-marker{display:none}.mobile-panel{position:absolute;top:63px;left:0;right:0;max-height:calc(100vh - 64px);overflow:auto;background:var(--paper);border-bottom:1px solid var(--line);padding:22px 24px 40px;box-shadow:0 18px 40px rgba(10,10,10,.12)}.mobile-panel .navgroup a{padding:9px 10px;min-height:40px}.notfound{padding-top:90px}.notfound h1{font-size:44px}.notfound .lede{margin-bottom:28px}@media(max-width:1080px){.topin{grid-template-columns:220px minmax(220px,1fr) auto}.shell{grid-template-columns:220px minmax(0,1fr);gap:40px}.toc{display:none}}@media(max-width:760px){:root{--top:64px}.topin{display:flex;padding:0 16px;gap:12px}.brand{flex:1}.top .search{display:none}.toplinks>a:not(.cta){display:none}.toplinks .cta{height:36px;padding:0 14px}.mobile-menu{display:block;position:relative}.mobile-menu summary{width:38px;height:38px;border:1px solid var(--line-strong);border-radius:8px;display:grid;place-items:center;cursor:pointer}.mobile-menu summary:focus-visible{outline:3px solid rgba(9,248,117,.35);outline-offset:2px}.shell{display:block;padding:0 18px}.side{display:none}.doc{padding:44px 0 72px}h1{font-size:31px}.lede{font-size:16px}.section{padding-top:36px;margin-top:36px}.section:first-of-type{margin-top:44px}.tablewrap{margin-left:0;margin-right:0}.pager{grid-template-columns:1fr}.pager a.next{text-align:left}.codeblock pre{padding:16px;font-size:11.5px}.statusline{align-items:flex-start}.toplinks{gap:8px}}@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}*{transition:none!important}}
/* Route changes keep the docs shell mounted. Dim the existing article only
   while an uncached page is in flight, so slow mobile links have feedback. */
.doc{transition:opacity .16s var(--ease)}body.docs-loading{cursor:progress}body.docs-loading .doc{opacity:.58}.sr-status{position:fixed;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);clip-path:inset(50%);white-space:nowrap}::view-transition-old(root){animation:90ms var(--ease) both fade-out}::view-transition-new(root){animation:160ms var(--ease) both fade-in}@keyframes fade-out{to{opacity:.82}}@keyframes fade-in{from{opacity:.82}}@media(prefers-reduced-motion:reduce){::view-transition-old(root),::view-transition-new(root){animation:none}}
`;

const DOCS_JS = `
(function(){
  var input=document.getElementById('doc-search'),box=document.getElementById('search-results'),items=window.__DOCS_INDEX__||[];
  var cache=new Map(),pending=new Map(),reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var status=document.getElementById('docs-status');

  function show(){
    var q=input.value.trim().toLowerCase();
    if(!q){box.classList.remove('on');input.setAttribute('aria-expanded','false');return}
    var found=items.filter(function(x){return [x.title,x.summary,x.group].concat(x.keywords||[]).join(' ').toLowerCase().includes(q)}).slice(0,8);
    box.innerHTML=found.length?found.map(function(x){return '<a class="result" href="/docs/'+x.slug+'"><strong>'+x.title.replace(/</g,'&lt;')+'</strong><span>'+x.summary.replace(/</g,'&lt;')+'</span></a>'}).join(''):'<div class="noresult">No matching documentation.</div>';
    box.classList.add('on');input.setAttribute('aria-expanded','true');
  }

  function docsUrl(href){
    var url;
    try{url=new URL(href,location.href)}catch(err){return null}
    if(url.origin!==location.origin)return null;
    if(!/^\\/docs(?:\\/[a-z0-9-]+)?$/.test(url.pathname))return null;
    return url;
  }

  function load(url){
    var key=url.pathname;
    if(cache.has(key))return Promise.resolve(cache.get(key));
    if(pending.has(key))return pending.get(key);
    var request=fetch(key,{headers:{'X-Vantis-Docs-Navigation':'1'}}).then(function(res){
      if(!res.ok)throw new Error('Documentation request failed');
      return res.text();
    }).then(function(html){cache.set(key,html);pending.delete(key);return html},function(err){pending.delete(key);throw err});
    pending.set(key,request);return request;
  }

  function replaceFrom(next,selector){
    var current=document.querySelector(selector),incoming=next.querySelector(selector);
    if(current&&incoming)current.replaceWith(incoming);
  }

  function commit(next,url,mode){
    var title=next.querySelector('title'),description=next.querySelector('meta[name="description"]'),canonical=next.querySelector('link[rel="canonical"]');
    var update=function(){
      replaceFrom(next,'.side');replaceFrom(next,'.doc');replaceFrom(next,'.toc');replaceFrom(next,'.mobile-panel');
      if(title)document.title=title.textContent;
      if(description&&document.querySelector('meta[name="description"]'))document.querySelector('meta[name="description"]').content=description.content;
      if(canonical&&document.querySelector('link[rel="canonical"]'))document.querySelector('link[rel="canonical"]').href=canonical.href;
    };
    var menu=document.querySelector('.mobile-menu');if(menu)menu.open=false;
    if(document.startViewTransition&&!reduced)document.startViewTransition(update);else update();
    if(mode==='push')history.pushState({docs:true},'',url.pathname+url.search+url.hash);
    document.body.classList.remove('docs-loading');
    var main=document.querySelector('.doc');if(main)main.removeAttribute('aria-busy');
    requestAnimationFrame(function(){
      var target=url.hash&&document.getElementById(url.hash.slice(1));
      if(target)target.scrollIntoView();else scrollTo({top:0,behavior:'auto'});
      if(status)status.textContent='Loaded '+document.title.replace(' | Vantis Cards Docs','');
    });
    warmNearby();
  }

  function navigate(url,mode){
    if(url.pathname===location.pathname&&url.hash){
      if(mode==='push')history.pushState({docs:true},'',url.pathname+url.hash);
      var same=document.getElementById(url.hash.slice(1));if(same)same.scrollIntoView();return;
    }
    document.body.classList.add('docs-loading');
    var main=document.querySelector('.doc');if(main)main.setAttribute('aria-busy','true');
    load(url).then(function(html){
      var next=new DOMParser().parseFromString(html,'text/html');
      if(!next.querySelector('.doc'))throw new Error('Incomplete documentation response');
      commit(next,url,mode);
    }).catch(function(){location.href=url.href});
  }

  function warm(link){var url=docsUrl(link&&link.href);if(url&&url.pathname!==location.pathname)load(url).catch(function(){})}
  function warmNearby(){
    var links=document.querySelectorAll('.pager a,.navgroup a');
    var run=function(){Array.prototype.slice.call(links,0,6).forEach(warm)};
    if('requestIdleCallback' in window)requestIdleCallback(run,{timeout:1200});else setTimeout(run,300);
  }

  input&&input.addEventListener('input',show);
  document.addEventListener('keydown',function(e){if(e.key==='/'&&!/input|textarea/i.test(document.activeElement.tagName)){e.preventDefault();input.focus()}if(e.key==='Escape'){box.classList.remove('on');input.blur()}});
  document.addEventListener('click',function(e){
    if(input&&!input.parentElement.contains(e.target))box.classList.remove('on');
    var copy=e.target.closest('[data-copy]');
    if(copy){var txt=copy.closest('.codeblock').querySelector('code').innerText;navigator.clipboard.writeText(txt).then(function(){copy.textContent='Copied';setTimeout(function(){copy.textContent='Copy'},1400)});return}
    if(e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;
    var link=e.target.closest('a[href]');if(!link||link.target||link.hasAttribute('download'))return;
    var url=docsUrl(link.href);if(!url)return;
    e.preventDefault();navigate(url,'push');
  });
  document.addEventListener('pointerover',function(e){var link=e.target.closest&&e.target.closest('a[href]');if(link)warm(link)},{passive:true});
  document.addEventListener('touchstart',function(e){var link=e.target.closest&&e.target.closest('a[href]');if(link)warm(link)},{passive:true});
  addEventListener('popstate',function(){var url=docsUrl(location.href);if(url)navigate(url,'pop')});
  history.replaceState({docs:true},'',location.href);warmNearby();
})();`;

function docsHtml(page: DocPage): string {
  const index = pages.findIndex((p) => p.slug === page.slug);
  const prev = index > 0 ? pages[index - 1] : null;
  const next = index < pages.length - 1 ? pages[index + 1] : null;
  const searchIndex = JSON.stringify(pages.map(({ slug, title, summary, group, keywords }) => ({ slug, title, summary, group, keywords }))).replace(/</g, "\\u003c");
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(page.title)} | Vantis Cards Docs</title><meta name="description" content="${esc(page.summary)}"><link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="canonical" href="https://card.vantis.sh/docs/${esc(page.slug)}"><style>${DOCS_CSS}</style></head><body>
  <header class="top"><div class="topin">
    <a class="brand" href="/docs">${V_MARK} VANTIS <em>DOCS</em></a>
    <div class="search"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="1.8"/><path d="m16.5 16.5 4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg><input id="doc-search" type="search" placeholder="Search documentation" autocomplete="off" aria-label="Search documentation" aria-expanded="false"><span class="shortcut">/</span><div class="results" id="search-results"></div></div>
    <div class="toplinks"><a href="/overview">Card</a><a href="/wallets">Console</a><a class="cta" href="/onboard">Get a card</a>
      <details class="mobile-menu"><summary aria-label="Open documentation menu"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></summary><div class="mobile-panel">${navHtml(page.slug)}</div></details>
    </div>
  </div></header>
  <div class="shell"><aside class="side" aria-label="Documentation navigation">${navHtml(page.slug)}</aside>
  <main class="doc"><div class="eyebrow">${esc(page.eyebrow)}</div><h1>${esc(page.title)}</h1><p class="lede">${esc(page.summary)}</p><div class="statusline"><i class="statusdot"></i><span>Production endpoint: ${BASE_URL}</span></div>
  ${page.sections.map((s) => `<section class="section" id="${esc(s.id)}"><h2>${esc(s.title)}</h2>${s.body}</section>`).join("")}
  <nav class="pager" aria-label="Documentation pagination">${prev ? `<a href="/docs/${prev.slug}"><span>Previous</span><strong>${esc(prev.title)}</strong></a>` : "<span></span>"}${next ? `<a class="next" href="/docs/${next.slug}"><span>Next</span><strong>${esc(next.title)}</strong></a>` : ""}</nav></main>
  <aside class="toc"><label>On this page</label>${page.sections.map((s) => `<a href="#${esc(s.id)}">${esc(s.title.replace(/^\d+\.\s*/, ""))}</a>`).join("")}<div class="tocmeta"><a href="/docs/openapi.json">OpenAPI JSON</a><br><a href="/docs/llms.txt">llms.txt</a><br>Updated with the gateway.</div></aside></div>
  <div class="sr-status" id="docs-status" role="status" aria-live="polite"></div>
  <script>window.__DOCS_INDEX__=${searchIndex};${DOCS_JS}</script>
  </body></html>`;
}

function notFoundHtml(): string {
  const page = pages[0];
  return docsHtml({ ...page, slug: "missing", eyebrow: "404", title: "Documentation page not found", summary: "The page moved or the address is incomplete.", sections: [{ id: "return", title: "Continue reading", body: `<p>Start from the <a href="/docs/overview">documentation overview</a>, search the docs, or inspect the <a href="/docs/openapi.json">OpenAPI document</a>.</p>` }] });
}

const OPENAPI = {
  openapi: "3.1.0",
  info: {
    title: "Vantis Cards API",
    version: "1.0.0",
    description: "OpenAI-compatible, metered inference through the Vantis Cards rail.",
  },
  servers: [{ url: BASE_URL }],
  security: [{ bearerAuth: [] }],
  paths: {
    "/models": {
      get: { summary: "List public models", security: [], responses: { "200": { description: "Model catalog" } } },
    },
    "/balance": {
      get: { summary: "Read the selected key scope balance", responses: { "200": { description: "Balance" }, "401": { description: "Invalid API key" } } },
    },
    "/chat/completions": {
      post: {
        summary: "Create a chat completion",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["messages"],
                properties: {
                  model: { type: "string", default: MODEL },
                  messages: { type: "array", items: { type: "object", additionalProperties: true } },
                  max_tokens: { type: "integer", minimum: 1, maximum: MAX_TOKENS_CAP, default: 1024 },
                  stream: { type: "boolean", default: false },
                  stream_options: { type: "object", properties: { include_usage: { type: "boolean" } } },
                  tools: { type: "array", items: { type: "object", additionalProperties: true } },
                  tool_choice: {},
                },
                additionalProperties: true,
              },
            },
          },
        },
        responses: {
          "200": { description: "Completion JSON or text/event-stream" },
          "400": { description: "Invalid request or unsupported model" },
          "401": { description: "Authentication error" },
          "402": { description: "Insufficient credits" },
          "429": { description: "Key limit or shared rail saturation" },
          "502": { description: "Inference route unreachable" },
        },
      },
    },
  },
  components: {
    securitySchemes: { bearerAuth: { type: "http", scheme: "bearer", bearerFormat: "Vantis Card API key" } },
  },
};

const LLMS = `# Vantis Cards

> Vantis Cards is an OpenAI-compatible, metered inference gateway at ${BASE_URL}. It serves ${MODEL}, supports SSE streaming and function tool calls, and settles real token usage against a scoped Card balance.

## Start
- [Overview](https://card.vantis.sh/docs/overview): Product contract and first call
- [Quickstart](https://card.vantis.sh/docs/quickstart): Create a key, call, stream, and check balance
- [Authentication](https://card.vantis.sh/docs/authentication): Named Bearer keys and spending scopes

## API
- [Models](https://card.vantis.sh/docs/models): The model catalog, pricing, and reasoning behavior
- [Chat completions](https://card.vantis.sh/docs/chat-completions): Request and settlement contract
- [Streaming and tools](https://card.vantis.sh/docs/streaming-tools): SSE and multi-turn agent loops
- [OpenAPI](https://card.vantis.sh/docs/openapi.json): Machine-readable API description

## Integrations
- [OpenClaw](https://card.vantis.sh/docs/openclaw): Exact provider configuration and probe
- [Other runners](https://card.vantis.sh/docs/other-runners): OpenCode, Hermes, and OpenAI-compatible SDKs

## Accounts and operations
- [Keys and wallets](https://card.vantis.sh/docs/keys-wallets)
- [Credits and billing](https://card.vantis.sh/docs/credits-billing)
- [Limits](https://card.vantis.sh/docs/limits)
- [Errors](https://card.vantis.sh/docs/errors)
- [Security](https://card.vantis.sh/docs/security)
`;

export function registerDocs(app: any) {
  app.get("/docs", (c: any) => c.redirect("/docs/overview", 302));
  app.get("/docs/openapi.json", (c: any) => c.json(OPENAPI, 200, { "Cache-Control": "public, max-age=300" }));
  app.get("/docs/llms.txt", (c: any) => c.text(LLMS, 200, { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=300" }));
  app.get("/docs/:slug", (c: any) => {
    const page = pageMap.get(c.req.param("slug"));
    if (!page) return c.html(notFoundHtml(), 404);
    return c.html(docsHtml(page), 200, { "Cache-Control": "public, max-age=300, stale-while-revalidate=86400" });
  });
}

export const DOC_PAGES = pages.map(({ slug, group, title, summary }) => ({ slug, group, title, summary }));
