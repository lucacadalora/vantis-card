// In-process pub/sub feeding CARD CABLE's live stream. The db write paths
// emit here the moment a row lands, so the map is push-real-time rather
// than poll-delayed. Emits must NEVER throw into the write path — same
// discipline as metering: telemetry never fails a call. Zero imports, so
// both db/index.ts and cable.ts can use it without a cycle.
export type CableEvent = Record<string, unknown>;

const listeners = new Set<(e: CableEvent) => void>();

export function cableSubscribe(fn: (e: CableEvent) => void): () => void {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

export function cableEmit(e: CableEvent) {
  for (const fn of listeners) {
    try {
      fn(e);
    } catch {}
  }
}
