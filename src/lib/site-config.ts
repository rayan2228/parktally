export const siteConfig = {
  name: "ParkTally",
  title: "ParkTally — Stop Parking Revenue Leakage with AI Number Plate Detection",
  description:
    "ParkTally is an AI-powered parking management system using ANPR (number plate detection) for automated vehicle entry, real-time tracking, and full revenue transparency for parking operators and owners.",
  url: "https://parktally.com",
  ogImage: "/images/og-cover.jpg",
  keywords: [
    "ANPR parking system",
    "AI number plate detection",
    "parking management software",
    "automated parking system",
    "parking revenue leakage",
    "smart parking Bangladesh",
    "license plate recognition parking",
    "IoT parking system",
  ],
  links: {
    twitter: "https://twitter.com/parktally",
    linkedin: "https://linkedin.com/company/parktally",
  },
  locale: "en_US",
  themeColor: "#027ef9",
} as const;

export type SiteConfig = typeof siteConfig;
