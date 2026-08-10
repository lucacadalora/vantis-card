// SSE settlement pump — the piece that makes streaming billable.
//
// The gateway forces stream_options.include_usage upstream, so the provider
// emits a chunk carrying real token counts before [DONE]. This pump forwards
// content events to the client as they arrive, holds back the usage payload
// and the [DONE] sentinel, settles credits from the captured usage, and only
// then emits the tail — the usage event (when the client itself asked for
// include_usage) augmented with the same `vantis` settlement object
// non-streaming responses carry.
//
// Parsing is LINE-BASED per the SSE spec, not "split on \n\n": CRLF or CR
// separators, multi-line data:, event:/id:/retry: fields and comment
// heartbeats all pass through providers in the wild, and a framing miss here
// is a billing miss. Events are re-emitted LF-normalized.
//
// A client that disconnects mid-generation still pays: the upstream read
// continues purely to capture what the account was really billed for. An
// upstream that dies or stalls mid-stream settles from the input estimate
// plus streamed characters / 4, and the client receives an OpenAI-shaped
// error event — never a clean-looking silent truncation.

export interface StreamReport {
  outcome: "ok" | "insufficient_credits" | "upstream_error";
  model: string;
  tokensIn: number;
  tokensOut: number;
  costUsd: number;
  burned: number;
  error: string | null;
}

const IDLE_READ_MS = 60_000;      // max silence between upstream chunks
const MAX_BUF_BYTES = 1_000_000;  // a "line" longer than this is a broken peer

export function settleStream(opts: {
  upstreamBody: ReadableStream<Uint8Array>;
  clientWantsUsage: boolean;
  fallback: { model: string; inputTokens: number };
  settle: (model: string, tokensIn: number, tokensOut: number) => Promise<any>;
  report: (r: StreamReport) => void;
  /** called exactly once when the money story is finished (release reserve) */
  onSettled?: () => void;
}): ReadableStream<Uint8Array> {
  const dec = new TextDecoder();
  const enc = new TextEncoder();
  const reader = opts.upstreamBody.getReader();

  let buf = "";
  let eventLines: string[] = [];   // raw lines of the in-flight event
  let servedModel = opts.fallback.model;
  let usageChunk: any = null;      // held parsed object whose .usage settles the bill
  let approxOutChars = 0;
  let doneSeen = false;
  let clientGone = false;
  let settled = false;
  let controller: ReadableStreamDefaultController<Uint8Array> | null = null;

  const send = (text: string) => {
    if (clientGone || !controller) return;
    try {
      controller.enqueue(enc.encode(text));
    } catch {
      clientGone = true;
    }
  };

  const countDeltas = (obj: any) => {
    for (const ch of obj.choices || []) {
      const d = ch?.delta;
      if (d) approxOutChars += (d.content?.length || 0) + (d.reasoning_content?.length || 0);
    }
  };

  // A complete SSE event: raw lines + the joined data payload (spec: data
  // lines join with \n). Decides hold vs forward. Never the reason a stream
  // breaks: anything unrecognized forwards verbatim (LF-normalized).
  const handleEvent = () => {
    const lines = eventLines;
    eventLines = [];
    if (!lines.length) return;
    const dataPayload = lines
      .filter((l) => l.startsWith("data:"))
      .map((l) => (l.startsWith("data: ") ? l.slice(6) : l.slice(5)))
      .join("\n");

    if (dataPayload.trim() === "[DONE]") {
      doneSeen = true; // held — emitted after settlement
      return;
    }
    if (dataPayload) {
      try {
        const obj = JSON.parse(dataPayload);
        if (obj.model) servedModel = obj.model;
        if (obj.usage) {
          countDeltas(obj);
          usageChunk = obj; // held — settlement reads it, tail emits it
          // Some providers attach usage to EVERY chunk, including role,
          // content and tool-call deltas. Forward every non-empty delta with
          // usage stripped; otherwise an agent sees finish_reason=tool_calls
          // without the call itself and cannot continue its harness loop.
          if ((obj.choices || []).some((c: any) =>
            (c?.delta && Object.keys(c.delta).length > 0) || c?.finish_reason != null
          )) {
            const { usage: _u, ...rest } = obj;
            send("data: " + JSON.stringify(rest) + "\n\n");
          }
          return;
        }
        countDeltas(obj);
      } catch {} // non-JSON data — forward untouched
    }
    send(lines.join("\n") + "\n\n");
  };

  const settleOnce = async (interrupted: string | null): Promise<any> => {
    if (settled) return null;
    settled = true;
    const usage = usageChunk?.usage;
    const tokensIn = usage?.prompt_tokens ?? opts.fallback.inputTokens;
    const tokensOut = usage?.completion_tokens ?? Math.ceil(approxOutChars / 4);
    let deduction: any;
    try {
      deduction = await opts.settle(servedModel, tokensIn, tokensOut);
    } catch (e: any) {
      deduction = { ok: false, error: e?.message || "settle_failed" };
    }
    try { opts.onSettled?.(); } catch {}
    opts.report({
      outcome: interrupted ? "upstream_error" : deduction?.ok ? "ok" : "insufficient_credits",
      model: servedModel,
      tokensIn,
      tokensOut,
      costUsd: deduction?.cost_usd || 0,
      burned: deduction?.vantis_burned || 0,
      error: interrupted
        || (!deduction?.ok ? deduction?.error : null)
        || ((deduction?.shortfall_usd || 0) > 0 ? `settled_with_shortfall_$${deduction.shortfall_usd.toFixed(6)}` : null),
    });
    return deduction;
  };

  const emitTail = (deduction: any) => {
    if (opts.clientWantsUsage && usageChunk) {
      const vantis = deduction?.ok
        ? {
            cost_usd: deduction.cost_usd,
            vantis_burned: deduction.vantis_burned,
            vantis_price_usd: deduction.vantis_price_usd,
            balance_usd: deduction.balance_usd,
            balance_vantis: deduction.balance_vantis,
            total_vantis_burned: deduction.total_vantis_burned,
            model_served: servedModel,
            note: "virtual burn — off-chain ledger",
          }
        : { error: deduction?.error || "settlement_failed", cost_usd: deduction?.cost_usd };
      const tail = { ...usageChunk, choices: usageChunk.choices || [], vantis };
      send("data: " + JSON.stringify(tail) + "\n\n");
    }
    if (doneSeen) send("data: [DONE]\n\n");
  };

  const feed = (text: string) => {
    buf += text;
    if (buf.length > MAX_BUF_BYTES) throw new Error("sse_buffer_overflow");
    let m: RegExpMatchArray | null;
    // consume complete lines; CR, LF and CRLF all terminate a line per spec
    while ((m = buf.match(/\r\n|\r|\n/))) {
      const line = buf.slice(0, m.index!);
      buf = buf.slice(m.index! + m[0].length);
      if (line === "") handleEvent(); // blank line = event boundary
      else eventLines.push(line);
    }
  };

  const readWithIdleGuard = async () => {
    let timer: any;
    const idle = new Promise<never>((_, rej) => {
      timer = setTimeout(() => rej(new Error("upstream_idle_timeout")), IDLE_READ_MS);
    });
    try {
      return await Promise.race([reader.read(), idle]);
    } finally {
      clearTimeout(timer);
    }
  };

  const pump = async () => {
    try {
      while (true) {
        const { done, value } = await readWithIdleGuard();
        if (done) break;
        feed(dec.decode(value, { stream: true }));
      }
      feed(dec.decode()); // flush the decoder's tail bytes
      if (buf !== "") { eventLines.push(buf); buf = ""; }
      handleEvent(); // a final event without trailing blank line still counts
      const deduction = await settleOnce(null);
      emitTail(deduction);
      if (!clientGone && controller) try { controller.close(); } catch {}
    } catch (err: any) {
      // Upstream died, stalled, or spoke garbage. Settle for what was
      // actually produced, then tell the client in the shape OpenAI streams
      // use for errors — truncation must never look like a clean finish.
      try { reader.cancel(); } catch {}
      const note = err?.message || "stream_interrupted";
      await settleOnce(note);
      send("data: " + JSON.stringify({ error: { message: `The upstream stream was interrupted (${note}). Partial output was billed for what actually streamed.`, type: "upstream_error", code: "stream_interrupted" } }) + "\n\n");
      if (!clientGone && controller) try { controller.close(); } catch {}
    }
  };

  return new ReadableStream<Uint8Array>({
    start(c) {
      controller = c;
      pump();
    },
    cancel() {
      // Client hung up. Keep draining the upstream — the tokens are being
      // generated and billed to the account either way, and the usage frame
      // at the end is the only honest settlement record. The idle guard and
      // the route's overall timeout bound how long a drain can live.
      clientGone = true;
    },
  });
}
