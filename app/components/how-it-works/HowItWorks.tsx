"use client";

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

      <div className="grid h-full grid-cols-1 items-center gap-4 px-[6%]  md:grid-cols-2 md:gap-12">
        <div className="h-40% md:h-full">
          <RoadScene />
        </div>

        <div className="relative h-[45%] w-full  md:h-[60%]">
          <h2 className="font-poppins m-0 max-w-127.5 text-3xl font-semibold capitalize leading-[1.1] text-black md:text-5xl">
            How to work our system
          </h2>
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