import Image from "next/image";
import Navbar from "./navbar";
import FadeUp from "./ui/fade-up";

export default function Hero() {
    return (
        <section className="mt-12 relative bg-linear-to-l from-[#F9F9F9] to-[#F8F8F8]">
            <Navbar />
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
                        loading="eager"
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
            font-geist
            font-semibold
              text-4xl
              leading-tight
              md:text-5xl
            "
                    >
                        Transform Parking Operations with AI-Powered Security and Revenue Control.
                    </h1>
                </FadeUp>

                <FadeUp delay={0.2}>
                    <p
                        className="
              mt-6
            max-w-221.5
              text-lg
              text-primary-black
              leading-[160%]
            "
                    >
                        Automate vehicle entry, billing and parking operations with real-time intelligence built for hospitals, shopping malls, commercial or residential buildings and smart cities.
                    </p>
                </FadeUp>

                <FadeUp delay={0.3}>
                    <button
                        className="
              mt-8
              rounded-xl
              bg-primary
              px-8
              py-3
              text-white
              translate-y-1/2
            "
                    >
                        Request For Demo
                    </button>
                </FadeUp>
            </div>
        </section>
    );
}