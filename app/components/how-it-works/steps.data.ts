// steps.data.ts
// -----------------------------------------------------------------------------
// Single source of truth for the "How to work our system" vertical scrollytelling
// sequence. Flags below are derived 1:1 from the Figma reference scenes: scene 1
// is the empty pre-roll road (reproduced as the section's resting state, not its
// own step); scenes 2-11 map onto steps 1-10 in order.
//
// Each flag controls one persistent visual layer in RoadScene.tsx:
//  - cameraRay  : the plate-scanner camera flashes its purple detection cone
//  - ticket     : the printed ticket/receipt icon appears beside the car
//  - slotSign   : the dashed "P / Slot 02" parking-bay outline appears
//  - cash       : the cash-in-hand billing icon appears beside the car
//  - gateOpen   : the barrier swings open (and stays open for the rest of the run)
//  - gatePulse  : the barrier swings open, then closes again by the end of the step
//  - carExit    : the car itself fades/slides away, leaving an empty road
//
// The car itself never moves or drives further into frame — matched against
// the reference scenes, it stays fixed in the same spot for the whole entry
// -to-exit sequence and only fades out completely at the very end (carExit).
// -----------------------------------------------------------------------------

export interface Step {
  id: string;
  number: string;
  title: string;
  description: string;
  cameraRay: boolean;
  ticket: boolean;
  slotSign: boolean;
  cash: boolean;
  gateOpen: boolean;
  gatePulse: boolean;
  carExit: boolean;
}

export const steps: Step[] = [
  {
    id: "step-01",
    number: "Step 01",
    title: "Car Arrival at Entry Gate",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nullam gravida scelerisque sit id augue urna nibh erat. Pretium varius odio cursus nulla nisi. Consectetur quis egestas magna ullamcorper posuere massa elit. Vehicula eget ac proin duis ac sit.",
    cameraRay: false,
    ticket: false,
    slotSign: false,
    cash: false,
    gateOpen: false,
    gatePulse: false,
    carExit: false,
  },
  {
    id: "step-02",
    number: "Step 02",
    title: "Number Plate Detection",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nullam gravida scelerisque sit id augue urna nibh erat. Pretium varius odio cursus nulla nisi. Consectetur quis egestas magna ullamcorper posuere massa elit. Vehicula eget ac proin duis ac sit.",
    cameraRay: true,
    ticket: false,
    slotSign: false,
    cash: false,
    gateOpen: false,
    gatePulse: false,
    carExit: false,
  },
  {
    id: "step-03",
    number: "Step 03",
    title: "Verification & Gate Open",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nullam gravida scelerisque sit id augue urna nibh erat. Pretium varius odio cursus nulla nisi. Consectetur quis egestas magna ullamcorper posuere massa elit. Vehicula eget ac proin duis ac sit.",
    cameraRay: false,
    ticket: true,
    slotSign: false,
    cash: false,
    gateOpen: false,
    gatePulse: true,
    carExit: false,
  },
  {
    id: "step-04",
    number: "Step 04",
    title: "Auto Count the Parking Time",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nullam gravida scelerisque sit id augue urna nibh erat. Pretium varius odio cursus nulla nisi. Consectetur quis egestas magna ullamcorper posuere massa elit. Vehicula eget ac proin duis ac sit.",
    cameraRay: false,
    ticket: false,
    slotSign: true,
    cash: false,
    gateOpen: false,
    gatePulse: false,
    carExit: false,
  },
  {
    id: "step-05",
    number: "Step 05",
    title: "Car Arrival at Exit Gate",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nullam gravida scelerisque sit id augue urna nibh erat. Pretium varius odio cursus nulla nisi. Consectetur quis egestas magna ullamcorper posuere massa elit. Vehicula eget ac proin duis ac sit.",
    cameraRay: false,
    ticket: false,
    slotSign: false,
    cash: false,
    gateOpen: false,
    gatePulse: false,
    carExit: false,
  },
  {
    id: "step-06",
    number: "Step 06",
    title: "Again Number Plate Detection",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nullam gravida scelerisque sit id augue urna nibh erat. Pretium varius odio cursus nulla nisi. Consectetur quis egestas magna ullamcorper posuere massa elit. Vehicula eget ac proin duis ac sit.",
    cameraRay: true,
    ticket: false,
    slotSign: false,
    cash: false,
    gateOpen: false,
    gatePulse: false,
    carExit: false,
  },
  {
    id: "step-07",
    number: "Step 07",
    title: "Auto Billing Generate",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nullam gravida scelerisque sit id augue urna nibh erat. Pretium varius odio cursus nulla nisi. Consectetur quis egestas magna ullamcorper posuere massa elit. Vehicula eget ac proin duis ac sit.",
    cameraRay: false,
    ticket: true,
    slotSign: false,
    cash: false,
    gateOpen: false,
    gatePulse: false,
    carExit: false,
  },
  {
    id: "step-08",
    number: "Step 08",
    title: "Receive Bill",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nullam gravida scelerisque sit id augue urna nibh erat. Pretium varius odio cursus nulla nisi. Consectetur quis egestas magna ullamcorper posuere massa elit. Vehicula eget ac proin duis ac sit.",
    cameraRay: false,
    ticket: false,
    slotSign: false,
    cash: true,
    gateOpen: false,
    gatePulse: false,
    carExit: false,
  },
  {
    id: "step-09",
    number: "Step 09",
    title: "Auto Exit Gate Open",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nullam gravida scelerisque sit id augue urna nibh erat. Pretium varius odio cursus nulla nisi. Consectetur quis egestas magna ullamcorper posuere massa elit. Vehicula eget ac proin duis ac sit.",
    cameraRay: false,
    ticket: false,
    slotSign: false,
    cash: false,
    gateOpen: true,
    gatePulse: false,
    carExit: false,
  },
  {
    id: "step-10",
    number: "Step 10",
    title: "Car Exit",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nullam gravida scelerisque sit id augue urna nibh erat. Pretium varius odio cursus nulla nisi. Consectetur quis egestas magna ullamcorper posuere massa elit. Vehicula eget ac proin duis ac sit.",
    cameraRay: false,
    ticket: false,
    slotSign: false,
    cash: false,
    gateOpen: true,
    gatePulse: false,
    carExit: true,
  },
];
