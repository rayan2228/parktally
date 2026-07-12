// scrollWindows.ts
// -----------------------------------------------------------------------------
// Pure math: which slice of the scrubbed GSAP timeline (0..1) a given step
// owns. The timeline's scrollTrigger scrub maps scroll progress directly onto
// timeline time, so these fractions double as the timeline positions passed
// to tl.to()/tl.fromTo() in HowItWorks.tsx.
// -----------------------------------------------------------------------------

// Each step owns an equal slice of scroll progress (0..1). A slice fades its
// content in over the first 30%, holds, then fades out over the last 30% —
// except the very first (nothing to enter from) and very last (nothing to
// exit to) steps, which skip the missing half.
const IN_OUT_FRACTION = 0.3;

export interface StepWindow {
  start: number;
  inEnd: number;
  outStart: number;
  end: number;
}

export function stepWindow(index: number, total: number): StepWindow {
  const unit = 1 / total;
  const start = index * unit;
  const end = start + unit;
  const inEnd = start + unit * IN_OUT_FRACTION;
  const outStart = end - unit * IN_OUT_FRACTION;
  return { start, inEnd, outStart, end };
}
