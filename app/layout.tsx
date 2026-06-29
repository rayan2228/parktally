import type { Metadata } from "next";
import { Geist, Manrope, Poppins } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "ParkTally | AI Parking Management",
  description:
    "AI Number Plate Recognition Parking System",
  keywords: [
    "Parking Management",
    "ANPR",
    "AI Parking",
    "Vehicle Detection",
    "Smart Parking"
  ],

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${geist.variable}
          ${poppins.variable}
          ${manrope.variable}
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}