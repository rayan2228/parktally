import Hero from "@/components/sections/Hero";
import RevenueLoss from "@/components/sections/RevenueLoss";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import Impact from "@/components/sections/Impact";
import Profitable from "@/components/sections/Profitable";
import Team from "@/components/sections/Team";
import Cta from "@/components/sections/Cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <RevenueLoss />
      <Features />
      <HowItWorks />
      <Impact />
      <Profitable />
      <Team />
      <Cta />
    </>
  );
}
