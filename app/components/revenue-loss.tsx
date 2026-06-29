import { ChartDownIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Container from "./ui/container";
import FadeUp from "./ui/fade-up";
import InfoBlock from "./ui/info-block";
import Section from "./ui/section";

export default function RevenueLoss() {
  return (
    <Section
      id="how"
      className="bg-white"
    >
      <Container>
        <FadeUp>
          <InfoBlock
            sidebar={
              <>
                <span
                  className="
                    text-6xl
                    font-bold
                    text-zinc-200
                  "
                >
                  01
                </span>

                <h2
                  className="
                    mt-6
                    text-3xl
                    font-semibold
                  "
                >
                  How Parking Owners
                  are Losing Revenue
                </h2>

                <p
                  className="
                    mt-4
                    text-zinc-500
                  "
                >
                  Manual systems are
                  prone to errors and
                  manipulation.
                </p>

                <button
                  className="
                    mt-8
                    w-full
                    rounded-xl
                    bg-primary
                    py-4
                    text-white
                  "
                >
                  Read Full Survey
                </button>
              </>
            }
          >
            <div>
              <div className="flex gap-4">
                <HugeiconsIcon icon={ChartDownIcon} />
                <h3
                  className="
                  text-2xl
                  font-semibold
                  
                "
                >
                  Reasons for Loss
                  of Revenue
                </h3>
              </div>

              <p
                className="
                max-w-125
                  mt-3
                  text-zinc-500
                "
              >
                Manual systems are prone to errors and manipulation. We identify and seal every loophole.
              </p>
            </div>

            <div
              className="
                mt-10
                grid
                gap-5
                md:grid-cols-2
                xl:grid-cols-3
              "
            >
              <Card
                title="Cash Manipulation"
                description="Lack of digital logs allows manual ticket tampering and pocketing of fees."
              />

              <Card
                title="Unauthorized Entry"
                description="Vehicles entering without records through favoritism or broken protocols."
              />

              <Card
                title="No Real-time Tracking"
                description="Impossible to know occupancy or dwell time accurately."
              />
            </div>
          </InfoBlock>
        </FadeUp>
      </Container>
    </Section>
  );
}

function Card({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div
      className="
        rounded-2xl
        bg-white
        p-6
        shadow-sm
      "
    >
      <h4
        className="
          text-lg
          font-semibold
        "
      >
        {title}
      </h4>

      <p
        className="
          mt-3
          text-sm
          leading-6
          text-zinc-500
        "
      >
        {description}
      </p>
    </div>
  );
}