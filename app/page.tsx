import CTA from "./components/cta";
import Features from "./components/features";
import Footer from "./components/footer";
import Hero from "./components/hero";
import HowItWorks from "./components/how-it-works/HowItWorks";
import Impact from "./components/impact";
import Profitable from "./components/profitable";
import RevenueLoss from "./components/revenue-loss";
import Team from "./components/team";


export default function HomePage() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <RevenueLoss />
      <Features />
      <HowItWorks />
      <Impact />
      <Profitable />
      <Team />
      <CTA />
      {/* <Footer /> */}
    </>
  );
}