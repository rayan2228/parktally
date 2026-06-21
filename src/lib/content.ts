// Centralized content for the landing page.
// Keeping copy here (rather than scattered in JSX) makes it trivial to
// localize, A/B test, or hand off to non-engineers for edits later.

export const nav = {
  logoFirst: "Park",
  logoLast: "Tally",
  links: [
    { label: "Home", href: "/", active: true },
    { label: "How it Works", href: "#how" },
    { label: "Features", href: "#features", hasChevron: true },
    { label: "Pricing", href: "#impact" },
    { label: "Dashboard", href: "#impact" },
  ],
};

export const hero = {
  heading: "We Stop Parking Revenue Leakage with AI Number Plate Detection",
  subheading:
    "Automated vehicle entry, real-time tracking, and full revenue transparency for parking operators & owners.",
  ctaLabel: "Request For Demo",
  ctaHref: "#cta",
  image: {
    src: "https://www.figma.com/api/mcp/asset/727b7173-c0fa-4f45-a765-d5dab6c01ff3",
    alt: "AI-powered parking lot with automated number plate detection gate",
  },
};

export const revenueLossSection = {
  stepNumber: "01",
  heading: "How Parking Owners are Losing Revenue",
  description:
    "Manual systems are prone to errors and manipulation. We identify and seal every loophole.",
  ctaLabel: "Read Full Survey Result",
  panel: {
    heading: "Reasons for Loss of Revenue",
    description:
      "Manual systems are prone to errors and manipulation. We identify and seal every loophole.",
  },
  reasons: [
    {
      title: "Cash Manipulation",
      description:
        "Lack of digital logs allows manual ticket tampering and pocketing of parking fees by staff.",
    },
    {
      title: "Unauthorized Entry or Exit",
      description:
        'Vehicles entering without records through "favoritism" or broken physical gate protocols.',
    },
    {
      title: "No Real-time Tracking",
      description:
        "Impossible to know exact occupancy or dwell time, leading to inefficient space utilization.",
    },
  ],
};

export const featuresSection = {
  stepNumber: "02",
  heading: "Our Powerful Features for Parking",
  description:
    "An intelligent IoT-powered system that automates vehicle entry, monitors parking capacity in real time, and gives operators complete control through a unified dashboard.",
  ctaLabel: "Request For Demo",
  panel: {
    heading: "Features for Parking",
    description:
      "From automated gate control to live analytics, everything works together to create a seamless parking experience.",
  },
  features: [
    { label: "AI Number Plate Recognition", icon: "scan" },
    { label: "Real-time Entry Tracking", icon: "clock" },
    { label: "Tamper-proof Cloud Logs", icon: "shield" },
    { label: "Automated Gate Control", icon: "gate" },
    { label: "Live Analytics Dashboard", icon: "chart" },
    { label: "Minimal / Unmanned Operation", icon: "users" },
  ] as const,
};

export const howItWorksSection = {
  heading: "Let's See How it Works",
  description:
    "Lorem ipsum dolor sit amet consectetur. Nullam gravida scelerisque sit id augue urna nibh erat. Pretium varius odio cursus nulla nisi.",
  steps: [
    {
      label: "Step – 1",
      title: "Car Arrival at Entry Gate",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nullam gravida scelerisque sit id augue urna nibh erat. Pretium varius odio cursus nulla nisi. Consectetur quis egestas magna ullamcorper posuere massa elit. Vehicula eget ac proin duis ac sit.",
      image: {
        src: "https://www.figma.com/api/mcp/asset/7a0ba4c6-1b85-4602-9463-2a286050cdf7",
        alt: "Car arriving at an automated parking entry gate",
      },
      muted: false,
    },
    {
      label: "Step – 2",
      title: "Scan Number Plate",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nullam gravida scelerisque sit id augue urna nibh erat. Pretium varius odio cursus nulla nisi. Consectetur quis egestas magna ullamcorper posuere massa elit. Vehicula eget ac proin duis ac sit.",
      image: {
        src: "https://www.figma.com/api/mcp/asset/209091ee-09c0-4d1c-9124-39d09b65dff6",
        alt: "AI system scanning a vehicle's number plate",
      },
      muted: true,
    },
  ],
};

export const impactSection = {
  heading: "The impact of our system on your business",
  description:
    "Maximize your revenue, slash operational costs, and drastically reduce entry times with our automated solution.",
  image: {
    src: "https://www.figma.com/api/mcp/asset/685bc6a5-05e1-4e49-bef3-ed62cd7b58bf",
    alt: "Chart comparing manual versus automated parking system performance",
  },
  table: {
    headers: ["Feature", "Manual Parking", "Using Our ParkTally"],
    rows: [
      ["Revenue Leakage", "High (15–20%)", "Near Zero (<0.5%)"],
      ["Entry Speed", "10–20 seconds", "2–4 seconds"],
      ["Labor Costs", "Multi-staff required", "Minimal / Unmanned"],
      ["Data Integrity", "Easily manipulable", "Tamper-proof Cloud Logs"],
    ],
  },
};

export const profitableSection = {
  heading: "Let's make your Parking system more profitable",
  description:
    "Lorem ipsum dolor sit amet consectetur. Nullam gravida scelerisque sit id augue urna nibh erat. Pretium varius odio cursus nulla nisi.",
  demo: {
    title: "Demonstration",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nullam gravida scelerisque sit id augue urna nibh erat. Pretium varius odio cursus nulla nisi.",
    ctaLabel: "Request For Demo",
    image: {
      src: "https://www.figma.com/api/mcp/asset/1316a538-0181-47b9-b857-f10c156a6aa7",
      alt: "ParkTally system live demonstration",
    },
  },
  cards: [
    {
      title: "Hardware Device",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nullam gravida scelerisque sit id augue urna nibh erat. Pretium varius odio cursus nulla nisi.",
      ctaLabel: "Buy Now",
      image: {
        src: "https://www.figma.com/api/mcp/asset/921d9845-e88d-46fc-b68d-e143360e5972",
        alt: "ParkTally ANPR hardware device",
      },
    },
    {
      title: "Dashboard / Software",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nullam gravida scelerisque sit id augue urna nibh erat. Pretium varius odio cursus nulla nisi.",
      ctaLabel: "Go To Dashboard",
      image: {
        src: "https://www.figma.com/api/mcp/asset/12c7a498-0c6c-47ef-be16-ee0d0a0945e7",
        alt: "ParkTally analytics dashboard interface",
      },
    },
  ],
};

export const teamSection = {
  heading: "Meet the Engineers Behind the System",
  description:
    "Built by passionate engineers focused on solving real parking challenges through intelligent automation, IoT technology, and data-driven design.",
  ctaLabel: "Watch Full Profile",
  panel: {
    heading: "They are behind the system",
    description:
      "A team dedicated to transforming traditional parking into a smarter, more efficient digital system.",
  },
  members: [
    {
      name: "Engineer",
      role: "Hardware",
      image: "https://www.figma.com/api/mcp/asset/d94f224d-4598-4ac8-b791-1dc93ae75f5a",
      featured: false,
    },
    {
      name: "Team Lead",
      role: "Engineering",
      image: "https://www.figma.com/api/mcp/asset/ab260142-739f-45e6-a05b-6a818089d877",
      featured: true,
    },
    {
      name: "Engineer",
      role: "AI / ML",
      image: "https://www.figma.com/api/mcp/asset/a2cf7673-3b2b-404a-975a-3cd96474266b",
      featured: false,
    },
    {
      name: "Engineer",
      role: "Backend",
      image: "https://www.figma.com/api/mcp/asset/ca9852d5-994f-47a9-9381-265af0e13921",
      featured: false,
    },
    {
      name: "Engineer",
      role: "Product",
      image: "https://www.figma.com/api/mcp/asset/92d232cb-fefb-4d4d-bafa-4504770a73c0",
      featured: false,
    },
  ],
};

export const ctaSection = {
  heading: "Let's make your Parking system more profitable",
  description:
    "Lorem ipsum dolor sit amet consectetur. Nullam gravida scelerisque sit id augue urna nibh erat. Pretium varius odio cursus nulla nisi.",
  emailPlaceholder: "Enter Your Email",
  submitLabel: "Let's Talk",
};

export const footer = {
  links: [
    { label: "Home", href: "/" },
    { label: "How it Works", href: "#how" },
    { label: "Features", href: "#features", hasChevron: true },
    { label: "Pricing", href: "#impact" },
    { label: "Dashboard", href: "#impact" },
  ],
  copyright:
    "© 2026 ParkTally. All rights reserved | Powered by Wings, Institute of Research, Innovation, Incubation and Commercialization",
};
