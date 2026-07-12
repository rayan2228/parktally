"use client";

// HowItWorks.tsx
// -----------------------------------------------------------------------------
// "How to work our system" — pinned vertical scrollytelling section.
// Rebuilt from Figma (fileKey 5PBRANPH8zqiGXEBIYEQTm, scenes 1-11).
//
// Driven by a single GSAP timeline attached to one scrubbed, pinned
// ScrollTrigger — every step's text crossfade and every road-scene icon
// pulse is just a tween on that one timeline, positioned via `stepWindow`'s
// 0..1 fractions (the timeline's own duration is 1, so scroll progress maps
// directly onto timeline time). This replaced an earlier framer-motion
// version built from ~30 independent `useTransform` subscriptions to a
// shared scroll MotionValue — functionally fine, but visibly janky under
// real scroll load. One ScrollTrigger + one timeline is GSAP's intended
// shape for this exact use case and is dramatically cheaper per scroll tick.
// -----------------------------------------------------------------------------

import { useCallback, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import RoadScene from "./RoadScene";
import StepContent from "./StepContent";
import { steps } from "./steps.data";
import { stepWindow } from "./scrollWindows";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function HowItWorks() {
  const section = useRef<HTMLElement | null>(null);
  const total = steps.length;

  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToCta = useCallback(() => {
    document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useGSAP(
    () => {
      if (!section.current) return;
      const q = gsap.utils.selector(section);

      const carEl = q("[data-road-car]")[0];
      const slotSignEl = q("[data-road-slot-sign]")[0];
      const cameraEl = q("[data-road-camera]")[0];
      const cameraRayEl = q("[data-road-camera-ray]")[0];
      const ticketEl = q("[data-road-ticket]")[0];
      const cashEl = q("[data-road-cash]")[0];
      const gateEl = q("[data-road-gate]")[0];
      const gateClosedEl = q("[data-road-gate-closed]")[0];
      const gateOpenEl = q("[data-road-gate-open]")[0];

      // Resting state: car hidden (plays in once below), gate closed, every
      // flagged overlay + step panel hidden except the first step.
      gsap.set(carEl, { autoAlpha: 0, y: -160 });
      gsap.set(gateClosedEl, { autoAlpha: 1 });
      gsap.set(gateOpenEl, { autoAlpha: 0 });
      gsap.set([slotSignEl, cameraRayEl, ticketEl, cashEl], { autoAlpha: 0 });

      steps.forEach((step, i) => {
        const panel = q(`[data-step-panel="${step.id}"]`)[0];
        gsap.set(panel, i === 0 ? { autoAlpha: 1, y: 0 } : { autoAlpha: 0, y: 32 });
      });

      // One-off entrance: the car drives in from further up the road as soon
      // as the section is mostly in view. It becomes visible quickly (0.25s)
      // but keeps travelling for another 0.65s after that, so it reads as
      // "driving down into frame" rather than "fading in while dropping" —
      // not part of the scrubbed timeline below, plays once.
      const entrance = gsap.timeline({
        scrollTrigger: {
          trigger: section.current,
          start: "top 75%",
          once: true,
        },
      });
      entrance
        .to(carEl, { autoAlpha: 1, duration: 0.25, ease: "power1.out" })
        .to(carEl, { y: 0, duration: 0.9, ease: "power2.out" }, 0);

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: section.current,
          start: "top top",
          end: () => `+=${(total - 1) * window.innerHeight}`,
          scrub: true,
          pin: true,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const next = Math.min(total - 1, Math.max(0, Math.floor(self.progress * total)));
            setActiveIndex((prev) => (prev === next ? prev : next));
          },
        },
      });

      const pulseAt = (target: Element | undefined, index: number) => {
        if (!target) return;
        const { start, inEnd, outStart, end } = stepWindow(index, total);
        tl.to(target, { autoAlpha: 1, duration: inEnd - start }, start);
        tl.to(target, { autoAlpha: 0, duration: end - outStart }, outStart);
      };

      // Like pulseAt, but swaps the two barrier elements instead of fading
      // one target — the gate opens, then closes again by the end of the
      // step (unlike gateOpen below, which opens once and stays open).
      const gatePulseAt = (index: number) => {
        const { start, inEnd, outStart, end } = stepWindow(index, total);
        tl.to(gateOpenEl, { autoAlpha: 1, duration: inEnd - start }, start);
        tl.to(gateClosedEl, { autoAlpha: 0, duration: inEnd - start }, start);
        tl.to(gateOpenEl, { autoAlpha: 0, duration: end - outStart }, outStart);
        tl.to(gateClosedEl, { autoAlpha: 1, duration: end - outStart }, outStart);
      };

      steps.forEach((step, i) => {
        const panel = q(`[data-step-panel="${step.id}"]`)[0];
        const isFirst = i === 0;
        const isLast = i === total - 1;
        const { start, inEnd, outStart, end } = stepWindow(i, total);

        if (panel) {
          if (!isFirst) {
            tl.to(panel, { autoAlpha: 1, y: 0, duration: inEnd - start }, start);
          }
          if (!isLast) {
            tl.to(panel, { autoAlpha: 0, y: -32, duration: end - outStart }, outStart);
          }
        }

        if (step.cameraRay) pulseAt(cameraRayEl, i);
        if (step.ticket) pulseAt(ticketEl, i);
        if (step.cash) pulseAt(cashEl, i);
        if (step.slotSign) pulseAt(slotSignEl, i);
        if (step.gatePulse) gatePulseAt(i);
      });

      const gateOpenIndex = steps.findIndex((step) => step.gateOpen);
      if (gateOpenIndex !== -1) {
        const { start, inEnd } = stepWindow(gateOpenIndex, total);
        tl.to(gateOpenEl, { autoAlpha: 1, duration: inEnd - start }, start);
        tl.to(gateClosedEl, { autoAlpha: 0, duration: inEnd - start }, start);
      }

      // The camera and gate are absent from the reference during "Auto
      // Count the Parking Time" (only the slot-sign box is shown) — hide
      // them for that step's hold, then bring them back for the exit
      // sequence that follows.
      const slotSignIndex = steps.findIndex((step) => step.slotSign);
      if (slotSignIndex !== -1) {
        const { start, inEnd, outStart, end } = stepWindow(slotSignIndex, total);
        tl.to([cameraEl, gateEl], { autoAlpha: 0, duration: inEnd - start }, start);
        tl.to([cameraEl, gateEl], { autoAlpha: 1, duration: end - outStart }, outStart);
      }

      const carExitIndex = steps.findIndex((step) => step.carExit);
      if (carExitIndex !== -1) {
        const { start, inEnd } = stepWindow(carExitIndex, total);
        tl.to(carEl, { autoAlpha: 0, y: 100, duration: inEnd - start }, start);
        // The reference's final scene is a fully empty road — camera and
        // gate fade out along with the car rather than staying put.
        tl.to([cameraEl, gateEl], { autoAlpha: 0, duration: inEnd - start }, start);
      }

      // GSAP sizes a timeline's duration to its last tween's end time. The
      // last step never fades out, so without this the timeline would end
      // around 0.93 instead of 1 — scrub would then rescale every position
      // above to fit that shorter span, throwing off their alignment with
      // raw scroll progress (which activeIndex, below, uses unscaled).
      tl.set({}, { opacity: 1 }, 1);
    },
    { scope: section }
  );

  return (
    <section
      ref={section}
      className="how-it-works relative w-full h-screen overflow-hidden bg-white"
      aria-label="How our parking system works"
    >
      {/* Top bar + section heading (Figma "Frame 78") */}
      <div className="absolute inset-x-0 top-0 z-20 flex h-[81px] w-full items-center bg-white px-[6%]">
        <h2 className="font-poppins m-0 max-w-[510px] text-3xl font-semibold capitalize leading-[1.1] text-black md:text-5xl">
          How to work our system
        </h2>
      </div>
      <div className="absolute inset-x-0 top-[154px] z-10 h-px w-full bg-border-custom" />

      {/* Fade masks matching Figma's top/bottom gradient overlays */}
      <div className="pointer-events-none absolute inset-x-0 top-[81px] z-10 h-[150px] w-full bg-gradient-to-b from-white to-white/0" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[150px] w-full bg-gradient-to-t from-white to-white/0" />

      {/* Two-column stage: road scene on the left, step text on the right.
          Neither column ever translates horizontally — only the content
          driven by the GSAP timeline fades/slides vertically in place. */}
      <div className="grid h-full grid-cols-1 items-center gap-4 px-[6%] pt-[81px] md:grid-cols-2 md:gap-12">
        <div className="h-[40%] md:h-full">
          <RoadScene />
        </div>

        <div className="relative h-[45%] w-full max-w-[520px] md:h-[60%]">
          {steps.map((step, i) => (
            <StepContent
              key={step.id}
              step={step}
              active={i === activeIndex}
              onCtaClick={scrollToCta}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
