// RoadScene.tsx
// -----------------------------------------------------------------------------
// The persistent left-column visual: a vertical road strip with the parked
// car, the plate-scanner camera, the printed ticket / cash icons, the dashed
// "P / Slot 02" bay outline, and the entry/exit barrier. All of it is one
// fixed-position layer — nothing here slides sideways.
//
// Purely presentational — no animation logic lives here. Every animated piece
// carries a stable `data-road-*` attribute; HowItWorks.tsx's single GSAP
// timeline (scoped to the section) targets them directly via selector, so
// there's exactly one scroll listener driving the whole scene instead of one
// per element.
// -----------------------------------------------------------------------------

import Image from "next/image";

const RoadScene = () => {
  return (
    <div className="road-scene pointer-events-none relative flex h-full w-full items-center justify-center">
      <div className="relative h-[60%] w-[320px] max-w-[85%]">
        {/* Road surface: asphalt strip + shoulder lines (static, decorative) */}
        <div className="absolute inset-0 overflow-hidden rounded-sm bg-border-custom">
          <div className="absolute inset-y-0 left-0 w-[14%] bg-[#dfdfdf]" />
          <div className="absolute inset-y-0 right-0 w-[14%] bg-[#dfdfdf]" />

          {/* Dashed centerline — a repeating-gradient background animated via
              background-position is a seamless loop by construction (unlike
              the previous flex-of-spans version, whose loop point depended on
              justify-content math lining up exactly — it didn't, hence the
              visible stutter once per cycle). */}
          <div
            className="road-dash-track absolute left-1/2 top-0 h-full w-[6%] -translate-x-1/2 rounded-full"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to bottom, #fff 0, #fff 40px, transparent 40px, transparent 76px)",
            }}
          />
        </div>

        {/* Parked car: drops in vertically once the section scrolls into
            view, then (at the "Car Exit" step) slides further down and out.
            Sized/positioned to match the Figma reference (scene 2.png):
            car spans ~52% of the road's width, starting ~11% from the top. */}
        <div data-road-car>
          <Image
            src="/images/car 2.png"
            alt="Parked car, top-down view"
            width={230}
            height={320}
            priority
            className="absolute top-0 left-1/2 -translate-x-1/2"
          />
        </div>



        {/* Dashed "P / Slot 02" parking-bay outline — only during step 04. */}
        <div
          data-road-slot-sign
          className="absolute left-1/2 top-[4%] flex h-[70%] w-[70%] -translate-x-1/2 flex-col items-center justify-end gap-2 rounded-md border-[5px] border-dashed border-white pb-3"
        >
        </div>

        {/* Plate-scanner camera + detection ray — mounted at the road's
            right edge (matching the reference: the housing sits just inside
            the road bounds, not floating off past it). Wrapped in
            data-road-camera so the whole unit can hide together (it's absent
            from the reference during "Auto Count the Parking Time" and
            "Car Exit"). Ray flashes during the two "Number Plate Detection"
            steps. */}
        <div data-road-camera className="absolute right-[2%] top-[76%] w-[14%]">
          <div
            data-road-camera-ray
            className="absolute right-[70%] top-[10%] w-[380%] origin-right -translate-y-1/2 rotate-6"
          >
            <Image
              src="/images/camera-ray.svg"
              alt=""
              width={513}
              height={157}
              className="h-auto w-full"
            />
          </div>
          <Image
            src="/images/camera.png"
            alt="Plate-scanner camera"
            width={127}
            height={138}
            className="relative h-auto w-full rotate-[-8deg]"
          />
        </div>

        {/* Printed ticket / receipt — handed through beside the car's rear
            window (matching the reference: it sits alongside the car's own
            body, not down by the gate). Flashes during verification +
            billing. */}
        <div data-road-ticket className="absolute right-[6%] top-[36%] w-[16%]">
          <Image
            src="/images/ticket.png"
            alt="Printed parking ticket"
            width={87}
            height={77}
            className="h-auto w-full"
          />
        </div>

        {/* Cash-in-hand billing icon — handed over at the same window as the
            ticket above. Flashes during "Receive Bill". */}
        <div data-road-cash className="absolute right-[10%] top-[32%] w-[30%]">
          <Image
            src="/images/money.png"
            alt="Cash payment"
            width={181}
            height={186}
            className="h-auto w-full"
          />
        </div>

        {/* Entry/exit barrier: closed by default, swings open (and stays
            open) from "Auto Exit Gate Open" onward. Sized to match the
            reference: the barrier spans ~80% of the road's width (not
            overflowing past its edges) and sits ~14% up from the bottom.
            Wrapped in data-road-gate so, like the camera, the whole unit can
            hide together during "Auto Count the Parking Time" / "Car Exit". */}
        <div data-road-gate className="absolute inset-x-[9%] bottom-[14%]">
          <div className="absolute inset-x-0 left-0">
            <Image
              data-road-gate-closed
              src="/images/barrier-gate.png"
              alt=" parking gate"
              width={40}
              height={156}
              className="z-20 relative"
            />
            <Image
              data-road-gate-open
              src="/images/barrier.png"
              alt=" parking barrier"
              width={720}
              height={155}
              className="absolute top-1/2 left-0 origin-left -translate-y-1/2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadScene;
