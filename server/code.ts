// Tiny deterministic syntax highlighter for the developer panel.
// No dependencies, no client-side JS: the server emits the spans.
// Handles the two shapes we show — a shell/curl invocation and a JSON body.

const E = (s: string) =>
  s.replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]!));

// Highlights a JSON fragment: keys, string values, numbers, literals.
function hlJson(line: string): string {
  let out = "";
  let i = 0;
  while (i < line.length) {
    const ch = line[i];

    if (ch === '"') {
      // consume a full string token
      let j = i + 1;
      while (j < line.length && !(line[j] === '"' && line[j - 1] !== "\\")) j++;
      const raw = line.slice(i, j + 1);
      // a key is a string immediately followed by a colon
      const rest = line.slice(j + 1);
      const isKey = /^\s*:/.test(rest);
      out += `<span class="${isKey ? "t-key" : "t-str"}">${E(raw)}</span>`;
      i = j + 1;
      continue;
    }

    const num = /^-?\d+(\.\d+)?([eE][+-]?\d+)?/.exec(line.slice(i));
    if (num && !/[\w-]/.test(line[i - 1] || "")) {
      out += `<span class="t-num">${E(num[0])}</span>`;
      i += num[0].length;
      continue;
    }

    const lit = /^(true|false|null)\b/.exec(line.slice(i));
    if (lit) {
      out += `<span class="t-lit">${E(lit[0])}</span>`;
      i += lit[0].length;
      continue;
    }

    out += E(ch);
    i++;
  }
  return out;
}

// Highlights a shell line: command, flags, quoted strings, urls, comments.
// Tokenised rather than chained regexes — chained replaces would re-match the
// quotes inside the HTML they had just emitted.
function hlShell(line: string): string {
  if (/^\s*#/.test(line)) return `<span class="t-com">${E(line)}</span>`;

  // An inline JSON payload gets JSON colouring from its first brace on
  const jsonStart = line.search(/[{[]/);
  if (jsonStart > 0) {
    return hlShell(line.slice(0, jsonStart)) + hlJson(line.slice(jsonStart));
  }

  let out = "";
  let i = 0;
  let firstWord = true;

  while (i < line.length) {
    const rest = line.slice(i);

    // quoted string (single or double), quotes included
    const q = /^(["'])(?:\\.|(?!\1)[^\\])*\1?/.exec(rest);
    if (q) {
      out += `<span class="t-str">${E(q[0])}</span>`;
      i += q[0].length;
      continue;
    }

    const url = /^https?:\/\/[^\s'"\\]+/.exec(rest);
    if (url) {
      out += `<span class="t-url">${E(url[0])}</span>`;
      i += url[0].length;
      continue;
    }

    const flag = /^-{1,2}[A-Za-z][\w-]*/.exec(rest);
    if (flag) {
      out += `<span class="t-flag">${E(flag[0])}</span>`;
      i += flag[0].length;
      continue;
    }

    const word = /^[A-Za-z_][\w.-]*/.exec(rest);
    if (word) {
      const cls = firstWord && /^(curl|export|echo)$/.test(word[0]) ? "t-cmd" : null;
      out += cls ? `<span class="${cls}">${E(word[0])}</span>` : E(word[0]);
      firstWord = false;
      i += word[0].length;
      continue;
    }

    out += E(line[i]);
    i++;
  }
  return out;
}

export type CodeLang = "shell" | "json";

// Renders a block of code as pre-highlighted HTML lines.
export function codeBlock(src: string, lang: CodeLang): string {
  const hl = lang === "json" ? hlJson : hlShell;
  return src
    .split("\n")
    .map((l) => `<span class="cl">${l.trim() === "" ? "&nbsp;" : hl(l)}</span>`)
    .join("\n");
}

// Shared CSS for both blocks. Colours are tuned for the near-black panel and
// deliberately sit in the Vantis family — signal green for strings, no rainbow.
export const CODE_CSS = `
.code { font-family:var(--mono); font-size:12.5px; line-height:1.75; color:#C9CDD4; white-space:pre; overflow-x:auto; }
.code .cl { display:block; }
.t-cmd { color:#FFFFFF; font-weight:600; }
.t-flag { color:#8A93A0; }
.t-str { color:#09F875; }
.t-url { color:#7FD8FF; }
.t-key { color:#7FD8FF; }
.t-num { color:#FFD479; }
.t-lit { color:#C79BFF; }
.t-com { color:#6B7280; }
`;
