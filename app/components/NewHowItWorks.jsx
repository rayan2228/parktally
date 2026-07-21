"use client";

import { useCallback, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/* ─── Figma scenes 2–11 → Steps 01–10 ─────────────────────────────────────── */
const STEPS = [
  {
    id: "step-01",
    number: "Step 01",
    title: "Car Arrival at Entry Gate",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nullam gravida scelerisque sit id augue urna nibh erat. Pretium varius odio cursus nulla nisi. Consectetur quis egestas magna ullamcorper posuere massa elit. Vehicula eget ac proin duis ac sit.",
    flags: {},
  },
  {
    id: "step-02",
    number: "Step 02",
    title: "Number Plate Detection",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nullam gravida scelerisque sit id augue urna nibh erat. Pretium varius odio cursus nulla nisi. Consectetur quis egestas magna ullamcorper posuere massa elit. Vehicula eget ac proin duis ac sit.",
    flags: { cameraRay: true, ticket: true, carZoom: true },
  },
  {
    id: "step-03",
    number: "Step 03",
    title: "Verification & Gate Open",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nullam gravida scelerisque sit id augue urna nibh erat. Pretium varius odio cursus nulla nisi. Consectetur quis egestas magna ullamcorper posuere massa elit. Vehicula eget ac proin duis ac sit.",
    /* Gate opens here and stays open through the drive-in to step 04 */
    flags: { cameraRay: true, ticket: true, gateOpenEntry: true, carZoom: true },
  },
  {
    id: "step-04",
    number: "Step 04",
    title: "Auto Count the Parking Time",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nullam gravida scelerisque sit id augue urna nibh erat. Pretium varius odio cursus nulla nisi. Consectetur quis egestas magna ullamcorper posuere massa elit. Vehicula eget ac proin duis ac sit.",
    flags: { slotSign: true, hideHardware: true, carZoom: true },
  },
  {
    id: "step-05",
    number: "Step 05",
    title: "Car Arrival at Exit Gate",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nullam gravida scelerisque sit id augue urna nibh erat. Pretium varius odio cursus nulla nisi. Consectetur quis egestas magna ullamcorper posuere massa elit. Vehicula eget ac proin duis ac sit.",
    flags: { carZoom: true },
  },
  {
    id: "step-06",
    number: "Step 06",
    title: "Again Number Plate Detection",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nullam gravida scelerisque sit id augue urna nibh erat. Pretium varius odio cursus nulla nisi. Consectetur quis egestas magna ullamcorper posuere massa elit. Vehicula eget ac proin duis ac sit.",
    flags: { cameraRay: true, ticket: true, carZoom: true },
  },
  {
    id: "step-07",
    number: "Step 07",
    title: "Auto Billing Generate",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nullam gravida scelerisque sit id augue urna nibh erat. Pretium varius odio cursus nulla nisi. Consectetur quis egestas magna ullamcorper posuere massa elit. Vehicula eget ac proin duis ac sit.",
    flags: { ticket: true, cash: true, carZoom: true },
  },
  {
    id: "step-08",
    number: "Step 08",
    title: "Receive Bill",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nullam gravida scelerisque sit id augue urna nibh erat. Pretium varius odio cursus nulla nisi. Consectetur quis egestas magna ullamcorper posuere massa elit. Vehicula eget ac proin duis ac sit.",
    flags: { ticket: true, cash: true, carZoom: true },
  },
  {
    id: "step-09",
    number: "Step 09",
    title: "Auto Exit Gate Open",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nullam gravida scelerisque sit id augue urna nibh erat. Pretium varius odio cursus nulla nisi. Consectetur quis egestas magna ullamcorper posuere massa elit. Vehicula eget ac proin duis ac sit.",
    flags: { ticket: true, cash: true, gateOpen: true, carZoom: true },
  },
  {
    id: "step-10",
    number: "Step 10",
    title: "Car Exit",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nullam gravida scelerisque sit id augue urna nibh erat. Pretium varius odio cursus nulla nisi. Consectetur quis egestas magna ullamcorper posuere massa elit. Vehicula eget ac proin duis ac sit.",
    flags: { ticket: true, cash: true, gateOpen: true, carExit: true },
  },
];

const TOTAL = STEPS.length;
/** Longer edge fades = softer step handoffs while scrubbing */
const EDGE = 0.3;

/**
 * Shared step windows for BOTH road (left) and cards (right).
 * One timeline clock so scene + text change together.
 */
function windowOf(i) {
  const unit = 1 / TOTAL;
  const start = i * unit;
  const end = start + unit;
  return {
    start,
    inEnd: start + unit * EDGE,
    outStart: end - unit * EDGE,
    end,
  };
}

function stepIndexFromProgress(p) {
  return Math.min(
    TOTAL - 1,
    Math.max(0, Math.floor(p * TOTAL - 1e-6))
  );
}

function StepCard({ step, index, active = false, alignRight = false }) {
  return (
    <div
      data-step-card
      aria-current={active ? "step" : undefined}
      className="relative w-[min(100%,540px)] will-change-[opacity,transform]"
    >
      {/*
        Union sits beside the card but stays INSIDE the padded row
        (see step row px) so the viewport can keep overflow-hidden
        and the GSAP y-slide still clips cards as they move up.
      */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/Union.png"
        alt=""
        aria-hidden
        className={`pointer-events-none absolute top-1/2 z-0 h-auto w-[70px] -translate-y-1/2 object-contain md:w-[110px] ${
          alignRight ? "right-full mr-3" : "left-full ml-3"
        }`}
        draggable={false}
      />
      <article
        className={`relative z-10 w-full rounded-2xl border bg-white p-6 md:p-7 ${
          active ? "border-zinc-300 shadow-sm" : "border-zinc-100"
        }`}
      >
        <span
          className={`font-poppins text-xs font-bold uppercase tracking-wider ${
            active ? "text-zinc-900" : "text-zinc-300"
          }`}
        >
          STEP - {index + 1}
        </span>
        <h3
          className={`font-poppins mt-3 m-0 text-xl font-semibold leading-[1.25] md:text-2xl ${
            active ? "text-zinc-900" : "text-zinc-300"
          }`}
        >
          {step.title}
        </h3>
        <p
          className={`font-poppins mt-3 m-0 text-sm font-normal leading-7 ${
            active ? "text-zinc-600" : "text-zinc-300"
          }`}
        >
          {step.description}
        </p>
      </article>
    </div>
  );
}

/** Curved connector SVG — light base + dark wipe (top → bottom) on step switch */
function StepConnector({ toRight = true }) {
  const flip = toRight ? "-scale-x-100" : "";

  return (
    <div
      data-step-connector
      className={`relative flex h-[88px] w-full items-center ${
        toRight ? "justify-start pl-[10%]" : "justify-end pr-[10%]"
      }`}
      aria-hidden
    >
      <div className={`relative h-full w-[58%] max-w-[280px] ${flip}`}>
        {/* Light (always visible) */}
        <svg
          viewBox="0 0 549 220"
          className="absolute inset-0 h-full w-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M547 0V37.1638C547 67.5394 522.376 92.1637 492 92.1637H72C41.6244 92.1637 17 116.788 17 147.164V197"
            stroke="#E4E4E4"
            strokeWidth="3"
          />
          <path
            d="M15.2916 217.193C16.0708 218.473 17.9292 218.473 18.7084 217.193L29.8722 198.851C30.6834 197.519 29.724 195.812 28.1638 195.812H5.83621C4.27595 195.812 3.31657 197.519 4.12778 198.851L15.2916 217.193Z"
            fill="#E4E4E4"
          />
        </svg>

        {/* Dark layer — GSAP wipes clip top → bottom to full dark */}
        <div
          data-arrow-dark
          className="absolute inset-0"
          style={{ clipPath: "inset(0 0 100% 0)" }}
        >
          <svg
            viewBox="0 0 549 220"
            className="h-full w-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M547 0V37.1638C547 67.5394 522.376 92.1637 492 92.1637H72C41.6244 92.1637 17 116.788 17 147.164V197"
              stroke="#2F2F2F"
              strokeWidth="3"
            />
            <path
              d="M15.2916 217.193C16.0708 218.473 17.9292 218.473 18.7084 217.193L29.8722 198.851C30.6834 197.519 29.724 195.812 28.1638 195.812H5.83621C4.27595 195.812 3.31657 197.519 4.12778 198.851L15.2916 217.193Z"
              fill="#2F2F2F"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function NewHowItWorks() {
  const section = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToCta = useCallback(() => {
    document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useGSAP(
    () => {
      const root = section.current;
      if (!root) return;
      const q = gsap.utils.selector(root);

      const car = q("[data-car]")[0];
      const carImg = q("[data-car-img]")[0];
      const dashes = q("[data-dashes]")[0];
      const slot = q("[data-slot]")[0];
      const camera = q("[data-camera]")[0];
      const ray = q("[data-ray]")[0];
      const ticket = q("[data-ticket]")[0];
      const cash = q("[data-cash]")[0];
      const gate = q("[data-gate]")[0];
      const arm = q("[data-gate-arm]")[0];
      const stepsTrack = q("[data-steps-track]")[0];
      const stepItems = gsap.utils.toArray(q("[data-step-item]"));

      /* Resting: car waits off-road above the frame until Step 01 scrub */
      gsap.set(car, { autoAlpha: 0, y: -220 });
      gsap.set(carImg, { scale: 0.72, transformOrigin: "center top" });
      gsap.set(arm, { scaleX: 1, transformOrigin: "left center" });
      gsap.set([slot, ray, ticket, cash], { autoAlpha: 0 });
      gsap.set([camera, gate], { autoAlpha: 1 });
      gsap.set(dashes, { y: 0 });
      if (stepsTrack) gsap.set(stepsTrack, { y: 0, force3D: true });
      stepItems.forEach((item, i) => {
        const card = item.querySelector("[data-step-card]");
        if (card) gsap.set(card, { opacity: i === 0 ? 1 : 0.38 });
      });

      /* Align each card's top to the same viewport slot (not drifting down) */
      const yForStep = (i) => {
        const item = stepItems[i];
        if (!item || !stepsTrack) return 0;
        return -(item.offsetTop || 0);
      };

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: root,
          start: "top top",
          /* Moderate pin — not too fast, not a long lag behind scroll */
          end: () => `+=${(TOTAL - 1) * window.innerHeight * 0.82}`,
          scrub: 0.7,
          pin: true,
          pinSpacing: true,
          anticipatePin: 0,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const idx = stepIndexFromProgress(self.progress);
            setActiveIndex((prev) => (prev === idx ? prev : idx));
          },
        },
      });

      requestAnimationFrame(() => ScrollTrigger.refresh());

      /*
       * Cards move WITH the left column step enter (same window start→inEnd).
       * Tiny natural hold in the middle of each step; no big left/right lag.
       */
      if (stepsTrack && stepItems.length) {
        gsap.set(stepsTrack, { position: "relative" });

        for (let i = 1; i < TOTAL; i++) {
          const curr = windowOf(i);
          const moveDur = Math.max(0.001, curr.inEnd - curr.start);
          tl.to(
            stepsTrack,
            {
              y: () => yForStep(i),
              duration: moveDur,
              ease: "none",
              immediateRender: false,
            },
            curr.start
          );
        }

        stepItems.forEach((item, i) => {
          const card = item.querySelector("[data-step-card]");
          if (!card) return;
          const { start, inEnd, outStart, end } = windowOf(i);
          if (i > 0) {
            tl.to(card, { opacity: 1, duration: inEnd - start, ease: "sine.out" }, start);
          }
          if (i < TOTAL - 1) {
            tl.to(card, { opacity: 0.38, duration: end - outStart, ease: "sine.in" }, outStart);
          }
        });

        /* Arrow dark wipe: light → must-dark, top → bottom, synced to card switch */
        stepItems.forEach((item, i) => {
          if (i >= TOTAL - 1) return;
          const dark = item.querySelector("[data-arrow-dark]");
          if (!dark) return;

          const cur = windowOf(i);
          const next = windowOf(i + 1);
          const revealDur = Math.max(0.001, next.inEnd - cur.outStart);

          gsap.set(dark, { clipPath: "inset(0px 0px 100% 0px)" });

          tl.fromTo(
            dark,
            { clipPath: "inset(0px 0px 100% 0px)" },
            {
              clipPath: "inset(0px 0px 0% 0px)",
              duration: revealDur,
              ease: "none",
              immediateRender: false,
            },
            cur.outStart
          );
        });
      }

      /* Step 01: car drives in from outside (scrubbed with scroll) */
      {
        const w = windowOf(0);
        const dur = w.inEnd - w.start;
        tl.to(car, { autoAlpha: 1, duration: dur * 0.4, ease: "sine.out" }, w.start);
        tl.to(car, { y: 0, duration: dur, ease: "sine.out" }, w.start);
        tl.to(dashes, { y: -40, duration: dur, ease: "none" }, w.start);
      }

      /**
       * Merge consecutive steps that share a flag into one visible range.
       * Prevents ticket/cash from flickering out+in between steps 07→08→09.
       */
      const rangesFor = (flag) => {
        const ranges = [];
        let run = null;
        STEPS.forEach((s, i) => {
          if (s.flags[flag]) {
            if (!run) run = { from: i, to: i };
            else run.to = i;
          } else if (run) {
            ranges.push(run);
            run = null;
          }
        });
        if (run) ranges.push(run);
        return ranges;
      };

      const showRange = (el, from, to) => {
        if (!el) return;
        const a = windowOf(from);
        const b = windowOf(to);
        tl.to(el, { autoAlpha: 1, duration: Math.max(0.001, a.inEnd - a.start) }, a.start);
        /* Stay visible through the hold of the last step in the run; fade on its out */
        if (to < TOTAL - 1) {
          tl.to(el, { autoAlpha: 0, duration: Math.max(0.001, b.end - b.outStart) }, b.outStart);
        }
      };

      /* Car zoom: Figma scene 2 (small) → scenes 3–10 (close-up) */
      {
        const w = windowOf(1);
        tl.to(
          carImg,
          { scale: 1, duration: w.inEnd - w.start, ease: "sine.out" },
          w.start
        );
      }

      rangesFor("cameraRay").forEach(({ from, to }) => showRange(ray, from, to));
      rangesFor("ticket").forEach(({ from, to }) => showRange(ticket, from, to));
      rangesFor("cash").forEach(({ from, to }) => showRange(cash, from, to));
      rangesFor("slotSign").forEach(({ from, to }) => showRange(slot, from, to));

      /* Step 03→04: smooth drive-through (no hard snap) */
      {
        const i3 = STEPS.findIndex((s) => s.flags.gateOpenEntry);
        const i4 = STEPS.findIndex((s) => s.flags.hideHardware);
        if (i3 !== -1 && i4 !== -1) {
          const s3 = windowOf(i3);
          const s4 = windowOf(i4);
          const handoff = s3.outStart;
          const settleEnd = s4.inEnd;
          const dur = Math.max(0.001, settleEnd - handoff);

          /* Open barricade gently on step 03 */
          tl.to(arm, { scaleX: 0, duration: s3.inEnd - s3.start, ease: "sine.inOut" }, s3.start);
          /* Keep arm open until gate is fully gone */
          tl.to(arm, { scaleX: 0, duration: s4.inEnd - s3.inEnd, ease: "none" }, s3.inEnd);

          /*
           * One continuous car path: ease forward through the gate, then
           * settle into the bay — avoids the old y:180 → y:0 whip.
           */
          tl.to(
            car,
            {
              keyframes: [
                { y: 70, duration: dur * 0.55, ease: "sine.inOut" },
                { y: 0, duration: dur * 0.45, ease: "sine.inOut" },
              ],
            },
            handoff
          );
          tl.to(
            carImg,
            {
              keyframes: [
                { scale: 0.94, duration: dur * 0.55, ease: "sine.inOut" },
                { scale: 1, duration: dur * 0.45, ease: "sine.inOut" },
              ],
            },
            handoff
          );
          tl.to(
            dashes,
            {
              keyframes: [
                { y: -130, duration: dur * 0.55, ease: "none" },
                { y: -120, duration: dur * 0.45, ease: "sine.out" },
              ],
            },
            handoff
          );

          /* Hardware fades across the same handoff window */
          tl.to(
            [camera, gate],
            { autoAlpha: 0, duration: dur * 0.7, ease: "sine.inOut" },
            handoff
          );

          /* Snap closed only once invisible (for later exit sequence) */
          tl.set(arm, { scaleX: 1 }, s4.inEnd);

          /* Leaving bay → restore exit-gate hardware (arm already closed) */
          tl.to([camera, gate], { autoAlpha: 1, duration: s4.end - s4.outStart, ease: "sine.inOut" }, s4.outStart);
          tl.to(dashes, { y: -260, duration: s4.end - s4.outStart, ease: "sine.inOut" }, s4.outStart);
        }
      }

      /* Exit gate opens and stays open (Figma scenes 10–11) */
      {
        const i = STEPS.findIndex((s) => s.flags.gateOpen && !s.flags.carExit);
        if (i !== -1) {
          const { start, inEnd } = windowOf(i);
          tl.to(arm, { scaleX: 0, duration: inEnd - start, ease: "power2.inOut" }, start);
        }
      }

      /* Car exit + clear hardware (Figma scene 11) */
      {
        const i = STEPS.findIndex((s) => s.flags.carExit);
        if (i !== -1) {
          const { start, inEnd } = windowOf(i);
          const dur = inEnd - start;
          tl.to(car, { autoAlpha: 0, y: 220, duration: dur, ease: "power2.in" }, start);
          tl.to(carImg, { scale: 0.85, duration: dur, ease: "power2.in" }, start);
          tl.to([camera, gate, ticket, cash, ray], { autoAlpha: 0, duration: dur }, start);
          tl.to(dashes, { y: -420, duration: dur, ease: "power1.in" }, start);
        }
      }

      /* Pin timeline duration to full 0→1 so scrub positions stay aligned */
      tl.set({}, {}, 1);
    },
    { scope: section }
  );

  return (
    <section
      ref={section}
      className="relative h-screen w-full overflow-hidden bg-white"
      aria-label="How our parking system works"
    >
      <div className="mx-auto flex h-full max-w-7xl flex-col items-start gap-4 pt-6 md:flex-row md:items-center md:gap-8 md:pt-8">
        {/* ── Road scene — 40% ── */}
        <div className="pointer-events-none relative hidden h-[calc(100%-2rem)] md:block md:w-[40%]">
          {/* Top/bottom edge fade only — anchored to viewport top */}
          <div
            className="absolute left-1/2 top-0 h-full w-[min(320px,85%)] -translate-x-1/2"
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, #000 10%, #000 90%, transparent 100%)",
              maskImage:
                "linear-gradient(to bottom, transparent 0%, #000 10%, #000 90%, transparent 100%)",
            }}
          >
            {/* Road bed */}
            <div className="absolute inset-0 overflow-hidden bg-[#ebebeb]">
              <div className="absolute inset-y-0 left-0 w-[14%] bg-[#dfdfdf]" />
              <div className="absolute inset-y-0 right-0 w-[14%] bg-[#dfdfdf]" />
              <div
                data-dashes
                className="absolute left-1/2 top-[-40%] h-[180%] w-[6%] -translate-x-1/2 will-change-transform"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(to bottom, #fff 0, #fff 40px, transparent 40px, transparent 76px)",
                }}
              />
            </div>

            {/* Car */}
            <div data-car className="absolute left-1/2 top-[15%] w-[72%] -translate-x-1/2 will-change-transform">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                data-car-img
                src="/images/car%202.png"
                alt="Parked car, top-down view"
                className="h-auto w-full origin-top drop-shadow-[11px_11px_22px_rgba(0,0,0,0.25)] will-change-transform"
                draggable={false}
              />
            </div>

            {/* Slot bay outline */}
            <div
              data-slot
              className="absolute left-1/2 top-[5%] flex h-[70%] w-[70%] -translate-x-1/2 flex-col items-center justify-end rounded-md border-[5px] border-dashed border-white py-6"
            >
             
              <span className="font-poppins text-sm font-semibold tracking-wide text-white">
                Slot 02
              </span>
            </div>

            {/* Camera + detection ray */}
            <div data-camera className="absolute right-[10%] top-[65%] w-[16%] will-change-transform">
              <div
                data-ray
                className="absolute right-[70%] top-[10%] w-[380%] origin-right -translate-y-1/2 rotate-6"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/camera-ray.svg" alt="" className="h-auto w-full" draggable={false} />
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/camera.png"
                alt="Plate-scanner camera"
                className="relative h-auto w-full rotate-[-8deg]"
                draggable={false}
              />
            </div>

            {/* Ticket */}
            <div data-ticket className="absolute right-[6%] top-[43%] w-[16%]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/ticket.png" alt="" className="h-auto w-full" draggable={false} />
            </div>

            {/* Cash */}
            <div data-cash className="absolute right-[8%] top-[40%] w-[28%]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/money.png" alt="" className="h-auto w-full" draggable={false} />
            </div>

            {/* Gate: post (fixed) + striped arm (scaleX) */}
            <div data-gate className="absolute inset-x-[9%] bottom-[20%] will-change-transform">
              <div className="relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/barrier-gate.png"
                  alt=""
                  className="relative z-10 h-auto w-[12%]"
                  draggable={false}
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  data-gate-arm
                  src="/images/barrier.png"
                  alt=""
                  className="absolute left-0 top-1/2 z-0 h-auto w-full origin-left -translate-y-1/2 will-change-transform"
                  draggable={false}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── Copy column — 60% ── */}
        <div className="relative flex h-[85%] w-full flex-col justify-start gap-4 self-center overflow-hidden py-6 md:w-[60%] md:gap-5 md:py-8">
          <h2 className="font-poppins m-0 shrink-0 text-3xl font-semibold capitalize leading-[1.1] text-black md:text-[48px]">
            How to work our system
          </h2>
          <p className="font-poppins m-0 shrink-0 text-sm font-light leading-[1.6] text-[#636363] md:text-base">
            Lorem ipsum dolor sit amet consectetur. Nullam gravida scelerisque sit
            id augue urna nibh erat. Pretium varius odio cursus nulla nisi. Conse
          </p>

          {/*
            Horizontal padding keeps absolute Union inside the clip box.
            overflow-hidden is required so cards hide as the track slides up.
          */}
          <div
            data-steps-viewport
            className="relative mt-6 min-h-0 w-full max-w-[780px] flex-1 overflow-hidden  md:mt-8 md:px-[50px]"
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, #000 6%, #000 90%, transparent 100%)",
              maskImage:
                "linear-gradient(to bottom, transparent 0%, #000 6%, #000 90%, transparent 100%)",
            }}
          >
            <div
              data-steps-track
              className="relative flex w-full flex-col will-change-transform"
            >
              {STEPS.map((step, i) => {
                const alignRight = i % 2 === 1;
                return (
                  <div key={step.id} data-step-item className="flex w-full flex-col">
                    <div
                      className={`flex w-full ${alignRight ? "justify-end" : "justify-start"}`}
                    >
                      <StepCard
                        step={step}
                        index={i}
                        active={i === activeIndex}
                        alignRight={alignRight}
                      />
                    </div>
                    {i < TOTAL - 1 ? <StepConnector toRight={!alignRight} /> : null}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
