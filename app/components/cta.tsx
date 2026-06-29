"use client";

import { Mail } from "lucide-react";
import FadeUp from "./ui/fade-up";

export default function CTA() {
    return (
        <section
            id="cta"
            className="
        bg-linear-to-b
        from-transparent
        to-blue-100
        px-5
        py-28
        text-center
      "
        >
            <FadeUp>
                <h2 className="mx-auto max-w-5xl text-5xl font-semibold">
                    Let's Make Your Parking
                    System More Profitable
                </h2>
            </FadeUp>

            <FadeUp delay={0.1}>
                <p className="mx-auto mt-6 max-w-2xl text-zinc-500">
                    Talk with our team and discover how AI-powered
                    parking management can increase your revenue.
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
        </section>
    );
}