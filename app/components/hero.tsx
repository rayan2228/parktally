import Image from "next/image";
import FadeUp from "./ui/fade-up";

export default function Hero() {
    return (
        <section className="">
            <FadeUp>
                <div
                    className="
            mx-4
            overflow-hidden
            rounded-3xl
            md:mx-10
            lg:mx-16
          "
                >
                    <Image
                        src="/images/hero.svg"
                        alt="AI Parking System"
                        className="
                        w-dvw
                        h-auto
              object-cover
            "
                        width={1320}
                        height={625}
                    />
                </div>
            </FadeUp>

            <div
                className="
          mx-auto
          mt-10
          flex
          max-w-6xl
          flex-col
          items-center
          px-5
          text-center
          md:mt-16
        "
            >
                <FadeUp delay={0.1}>
                    <h1
                        className="
              font-[var(--font-geist)]
              text-4xl
              font-semibold
              leading-tight
              md:text-6xl
            "
                    >
                        We Stop Parking Revenue
                        Leakage with AI Number
                        Plate Detection
                    </h1>
                </FadeUp>

                <FadeUp delay={0.2}>
                    <p
                        className="
              mt-6
              max-w-3xl
              text-lg
              text-zinc-600
            "
                    >
                        Automated vehicle entry,
                        real-time tracking and full
                        revenue transparency for
                        parking operators and owners.
                    </p>
                </FadeUp>

                <FadeUp delay={0.3}>
                    <button
                        className="
              mt-8
              rounded-xl
              bg-primary
              px-8
              py-4
              text-white
              transition-all
              hover:-translate-y-1
            "
                    >
                        Request For Demo
                    </button>
                </FadeUp>
            </div>
        </section>
    );
}