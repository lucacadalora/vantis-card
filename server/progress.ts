// Live progress for the scoring run. The pipeline emits real events as it
// works (GitHub read, each Exa query, the model call, minting) and the score
// page polls them — no theatrical setTimeout stages. In-memory by design:
// one process serves this app (same constraint the gateway limiter documents).

export type ProgressEvent = {
  t: number; // ms since run start
  kind: "stage" | "log" | "done" | "error";
  stage?: number; // 1 read · 2 research · 3 score · 4 mint
  label: string;
  icon?: string; // social slot this event narrates: x | github | linkedin
};

type Run = { startedAt: number; events: ProgressEvent[]; done: boolean };
const runs = new Map<string, Run>();

const TTL_MS = 15 * 60 * 1000;
function sweep() {
  const now = Date.now();
  for (const [uid, run] of runs) if (now - run.startedAt > TTL_MS) runs.delete(uid);
}

export function progressStart(uid: string) {
  sweep();
  runs.set(uid, { startedAt: Date.now(), events: [], done: false });
}

export function progressEmit(uid: string, kind: ProgressEvent["kind"], label: string, stage?: number, icon?: string) {
  const run = runs.get(uid);
  if (!run) return;
  run.events.push({ t: Date.now() - run.startedAt, kind, stage, label, icon });
  if (kind === "done" || kind === "error") run.done = true;
}

export function progressGet(uid: string): { events: ProgressEvent[]; done: boolean } | null {
  const run = runs.get(uid);
  return run ? { events: run.events, done: run.done } : null;
}

// A page starting a NEW run clears a finished predecessor, so a re-run never
// flashes the previous run's log. A live (not-done) run is never cleared —
// if the new POST already called progressStart, that run is the live one.
export function progressClearIfDone(uid: string) {
  const run = runs.get(uid);
  if (run?.done) runs.delete(uid);
}

// Emitter bound to one uid — what the pipeline stages receive.
export type Emit = (kind: ProgressEvent["kind"], label: string, stage?: number, icon?: string) => void;
export const emitterFor = (uid: string): Emit => (kind, label, stage, icon) => progressEmit(uid, kind, label, stage, icon);
