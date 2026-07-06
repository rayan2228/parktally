import { ChartDownIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Container from "./ui/container";
import FadeUp from "./ui/fade-up";
import InfoBlock from "./ui/info-block";
import Section from "./ui/section";
import Image from "next/image";

export default function RevenueLoss() {
  return (
    <Section
      id="how"
      className="bg-white font-poppins! pb-[31.5px]!"
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
                    font-geist
                  "
                >
                  How Parking Owners
                  are Losing Revenue
                </h2>

                <p
                  className="
                    mt-4
                    text-zinc-500
                    font-light
                    text-sm
                  "
                >
                  Manual systems are prone to errors and manipulation. We identify and seal every
                  loophole.
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
                <HugeiconsIcon icon={ChartDownIcon} size={40} />
                <h3
                  className="
                  text-[32px]
                  font-semibold
                "
                >
                  Reasons for Loss
                  of Revenue
                </h3>
              </div>

              <p
                className="
                max-w-125.25
                  mt-3
                  text-zinc-500
                  font-light
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
                description="Lack of digital logs allows manual ticket tampering and pocketing of parking fees by staff."
              />

              <Card
                title="Unauthorized Entry or exit"
                description={`Vehicles entering without records through "favoritism" or broken physical
gate protocols.`}
              />

              <Card
                title="No Real-time Tracking"
                description="Impossible to know exact occupancy or dwell time, leading to inefficient space
utilization."
              />
            </div>
          </InfoBlock>
        </FadeUp>
        <Image src={"/icons/down-arrow.svg"} alt="down arrow" width={547} height={220} className="m-auto" />
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
        font-poppins
      "
    >
      <h4
        className="
          text-xl
          font-medium
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
          font-light
        "
      >
        {description}
      </p>
    </div>
  );
}