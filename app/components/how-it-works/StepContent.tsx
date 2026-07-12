// StepContent.tsx
// -----------------------------------------------------------------------------
// A single step's text block (eyebrow number, heading, description, CTA).
// Every step is stacked in the exact same spot (absolute inset-0); which one
// is visible is driven entirely by HowItWorks.tsx's GSAP timeline targeting
// this panel via `[data-step-panel]` — no animation logic lives here.
//
// Only the active step's panel is exposed to keyboard/screen-reader users
// (aria-hidden + tabIndex=-1 on the rest) — otherwise every step's CTA button
// stays focusable at once, since they're all permanently mounted at the same
// position and only distinguished by opacity.
// -----------------------------------------------------------------------------

import { memo } from "react";
import type { Step } from "./steps.data";

interface StepContentProps {
  step: Step;
  active: boolean;
  onCtaClick?: () => void;
}

const StepContentImpl = ({ step, active, onCtaClick }: StepContentProps) => {
  return (
    <div
      data-step-panel={step.id}
      aria-hidden={!active}
      className="step-content pointer-events-none absolute inset-0 flex flex-col items-start justify-center gap-6 opacity-0"
    >
      <div className="flex w-full flex-col items-start gap-4 text-left not-italic">
        <p className="font-poppins m-0 text-2xl font-semibold leading-[1.1] text-[#e0e0e0]">
          {step.number}
        </p>
        <h3 className="font-poppins m-0 w-full max-w-[510px] text-3xl font-semibold leading-[1.1] text-black md:text-[40px]">
          {step.title}
        </h3>
        <p className="font-poppins m-0 w-full max-w-[520px] text-sm font-light leading-[1.5] text-gray-custom">
          {step.description}
        </p>
      </div>

      <button
        type="button"
        tabIndex={active ? 0 : -1}
        onClick={onCtaClick}
        className="pointer-events-auto rounded-[30px] bg-[#6e62e5] px-8 py-3 text-sm font-medium capitalize text-white transition-colors duration-200 hover:bg-[#5a4fd1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6e62e5]"
      >
        Get Started Free
      </button>
    </div>
  );
};

// HowItWorks re-renders once per active-step change to update `active`;
// without memoizing, that re-renders all StepContent instances instead of
// just the 2 whose `active` flag flipped.
const StepContent = memo(StepContentImpl);

export default StepContent;
