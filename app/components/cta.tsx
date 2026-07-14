"use client";

import { Mail } from "lucide-react";
import Footer from "./footer";
import FadeUp from "./ui/fade-up";

export default function CTA() {
    return (
        <section
            id="cta"
            className="
        bg-linear-to-b
        from-transparent
        to-blue-100
        text-center
        px-8
      "
        >
            <FadeUp>
                <h2 className="mx-auto max-w-3xl text-5xl font-semibold">
                    Let’s Build a Smarter Parking System Together
                </h2>
            </FadeUp>

            <FadeUp delay={0.1}>
                <p className="mx-auto mt-6 max-w-2xl text-primary-black">
                    Drop your email below to get in touch with our team and get a personalized demo for your business. Let’s take your parking operations to the next level.
                </p>
            </FadeUp>

            <FadeUp delay={0.2}>
                <div
                    className="
            mx-auto
            mt-10
            flex
            max-w-xl
            flex-col
            gap-4
            rounded-2xl
            border
            border-zinc-200
            bg-white/70
            p-4
            backdrop-blur
            md:flex-row
          "
                >
                    <div className="flex flex-1 items-center gap-3">
                        <Mail size={20} />

                        <input
                            placeholder="Enter your email"
                            className="
                w-full
                bg-transparent
                outline-none
              "
                        />
                    </div>

                    <button
                        className="
              rounded-xl
              bg-primary
              px-6
              py-3
              text-white
            "
                    >
                        Let's Talk
                    </button>
                </div>
            </FadeUp>
            <Footer />
            <div className=" text-center text-sm text-primary-black py-8">
                © 2026 ParkTally. All rights reserved     |     Powered by Wings, Institute of Research, Innovation, Incubation and Commercialization
            </div>
        </section>
    );
}