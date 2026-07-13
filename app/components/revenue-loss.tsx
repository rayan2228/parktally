import Image from "next/image";
import { ChartDownIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import Container from "./ui/container";
import FadeUp from "./ui/fade-up";
import InfoBlock from "./ui/info-block";
import Section from "./ui/section";

const revenueLossReasons = [
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
];

export default function RevenueLoss() {
  return (
    <Section id="how" className="bg-white pb-4! font-poppins">
      <Container>
        <FadeUp>
          <InfoBlock sidebar={<Sidebar />}>
            <Header />

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {revenueLossReasons.map((item) => (
                <Card
                  key={item.title}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </InfoBlock>
        </FadeUp>

        <Image
          src="/icons/down-arrow.svg"
          alt="Down arrow"
          width={547}
          height={220}
          className="mx-auto"
        />
      </Container>
    </Section>
  );
}

function Sidebar() {
  return (
    <>
      <span className="text-6xl font-bold text-zinc-200">01</span>

      <h2 className="mt-6 font-geist text-3xl font-semibold capitalize">
        How parking owners are losing revenue
      </h2>

      <p className="mt-4 text-sm font-light text-primary-black">
        Manual systems are prone to errors and manipulation. We identify and
        seal every loophole.
      </p>

      <button
        type="button"
        className="mt-12 px-8 rounded-xl bg-primary py-4 text-white "
      >
        Read Full Survey Result
      </button>
    </>
  );
}

function Header() {
  return (
    <header>
      <div className="flex items-start gap-4">
        <HugeiconsIcon icon={ChartDownIcon} size={40} />

        <h3 className="text-[32px] font-semibold leading-tight capitalize">
          Reasons for Loss of Revenue
        </h3>
      </div>

      <p className="mt-3 max-w-169 font-light text-primary-black">
        Every missed entry, incorrect payment, or security gap reduces profitability. Understanding these challenges is the first step toward a smarter parking operation.
      </p>
    </header>
  );
}

type CardProps = {
  title: string;
  description: string;
};

function Card({ title, description }: CardProps) {
  return (
    <article className="rounded-2xl bg-white p-6 shadow-sm">
      <h4 className="text-xl font-medium">{title}</h4>

      <p className="mt-3 text-sm leading-6 font-light text-primary-black">
        {description}
      </p>
    </article>
  );
}