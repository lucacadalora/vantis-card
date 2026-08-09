// SSE settlement pump — the piece that makes streaming billable.
//
// The gateway forces stream_options.include_usage upstream, so BytePlus emits
// one final chunk carrying the real token counts before [DONE]. This pump
// forwards every content frame to the client verbatim as it arrives, holds
// back that usage frame and the [DONE] sentinel, settles credits from the
// captured usage, and only then emits the tail — the usage frame (when the
// client itself asked for include_usage) augmented with the same `vantis`
// settlement object non-streaming responses carry.
//
// A client that disconnects mid-generation still pays: the upstream read
// continues in the background purely to capture what the account was really
// billed for. If the upstream dies before its usage frame, settlement falls
// back to the input estimate plus streamed characters / 4.

export interface StreamReport {
  outcome: "ok" | "insufficient_credits" | "upstream_error";
  model: string;
  tokensIn: number;
  tokensOut: number;
  costUsd: number;
  burned: number;
  error: string | null;
}

export function settleStream(opts: {
  upstreamBody: ReadableStream<Uint8Array>;
  clientWantsUsage: boolean;
  fallback: { model: string; inputTokens: number };
  settle: (model: string, tokensIn: number, tokensOut: number) => Promise<any>;
  report: (r: StreamReport) => void;
}): ReadableStream<Uint8Array> {
  const dec = new TextDecoder();
  const enc = new TextEncoder();
  const reader = opts.upstreamBody.getReader();

  let buf = "";
  let servedModel = opts.fallback.model;
  let usageChunk: any = null; // the whole held chunk object, usage inside
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

  // Forward one SSE frame, capturing model/usage/output size along the way.
  // Anything unparseable is passed through untouched — this pump must never
  // be the reason a stream breaks.
  const handleFrame = (frame: string) => {
    const line = frame.startsWith("data:") ? frame.slice(5).trim() : null;
    if (line === "[DONE]") {
      doneSeen = true; // held back — emitted after settlement
      return;
    }
    if (line) {
      try {
        const obj = JSON.parse(line);
        if (obj.model) servedModel = obj.model;
        if (obj.usage) {
          usageChunk = obj; // held back — settlement reads it, tail emits it
          return;
        }
        const d = obj.choices?.[0]?.delta;
        if (d) approxOutChars += (d.content?.length || 0) + (d.reasoning_content?.length || 0);
      } catch {}
    }
    send(frame + "\n\n");
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
    opts.report({
      outcome: interrupted ? "upstream_error" : deduction?.ok ? "ok" : "insufficient_credits",
      model: servedModel,
      tokensIn,
      tokensOut,
      costUsd: deduction?.cost_usd || 0,
      burned: deduction?.vantis_burned || 0,
      error: interrupted || (deduction?.ok ? null : deduction?.error),
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
      send("data: " + JSON.stringify({ ...usageChunk, vantis }) + "\n\n");
    }
    if (doneSeen) send("data: [DONE]\n\n");
  };

  const pump = async () => {
    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buf += dec.decode(value, { stream: true });
        let idx;
        while ((idx = buf.indexOf("\n\n")) !== -1) {
          const frame = buf.slice(0, idx);
          buf = buf.slice(idx + 2);
          if (frame.trim()) handleFrame(frame);
        }
      }
      if (buf.trim()) handleFrame(buf);
      const deduction = await settleOnce(null);
      emitTail(deduction);
      if (!clientGone && controller) try { controller.close(); } catch {}
    } catch (err: any) {
      // Upstream died mid-stream. Settle for what was actually produced,
      // then end the client's stream without a [DONE] — truncation is
      // visible, never disguised as a clean finish.
      await settleOnce(err?.message || "stream_interrupted");
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
      // at the end is the only honest settlement record.
      clientGone = true;
    },
  });
}
