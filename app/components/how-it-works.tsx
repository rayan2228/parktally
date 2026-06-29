import Container from "./ui/container";
import Section from "./ui/section";
import SectionTitle from "./ui/section-title";
import StepRow from "./ui/step-row";
import FadeUp from "./ui/fade-up";

export default function HowItWorks() {
  return (
    <Section
      className="bg-[#f9f9f9]"
      id="how-steps"
    >
      <Container>
        <FadeUp>
          <SectionTitle
            title="Let's See How It Works"
            description="Automated parking entry and vehicle tracking powered by AI."
          />
        </FadeUp>

        <FadeUp>
          <StepRow
            step="STEP 01"
            title="Car Arrival at Entry Gate"
            description="When a vehicle arrives, the system automatically detects its presence and prepares the recognition process."
            image="/images/step-1.jpg"
          />
        </FadeUp>

        <FadeUp delay={0.15}>
          <StepRow
            reverse
            step="STEP 02"
            title="Scan Number Plate"
            description="AI-powered recognition instantly identifies the vehicle and stores entry data securely in the cloud."
            image="/images/step-2.jpg"
          />
        </FadeUp>

        <FadeUp delay={0.25}>
          <StepRow
            step="STEP 03"
            title="Open Gate Automatically"
            description="After successful verification the gate opens automatically without requiring manual intervention."
            image="/images/step-3.jpg"
          />
        </FadeUp>

        <FadeUp delay={0.35}>
          <StepRow
            reverse
            step="STEP 04"
            title="Track Parking Activity"
            description="Live monitoring and analytics continuously update occupancy, duration and revenue reports."
            image="/images/step-4.jpg"
          />
        </FadeUp>
      </Container>
    </Section>
  );
}