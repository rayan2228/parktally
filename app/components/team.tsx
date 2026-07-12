"use client";

import { AddTeamIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useState } from "react";

import Container from "./ui/container";
import FadeUp from "./ui/fade-up";
import Section from "./ui/section";

export default function Team() {
    const [active, setActive] = useState(0);

    const members = [
        {
            image: "/images/team.png",
            name: "John Doe",
            role: "Team Lead",
        },
        {
            image: "/images/team.png",
            name: "Sarah",
            role: "Frontend Engineer",
        },
        {
            image: "/images/team.png",
            name: "David",
            role: "Backend Engineer",
        },
        {
            image: "/images/team.png",
            name: "Emily",
            role: "UI/UX Designer",
        },
    ];

    return (
        <Section className="bg-[#f9f9f9] font-poppins">
            <Container>
                <div className="flex flex-col gap-8 lg:flex-row">
                    {/* Left Content */}
                    <div className="lg:w-[320px]">
                        <FadeUp>
                            <h2 className="font-geist text-4xl font-semibold">
                                Meet The Engineers Behind The System
                            </h2>

                            <p className="mt-5 leading-7 font-light text-zinc-500">
                                Built by passionate engineers focused on solving real parking
                                challenges through intelligent automation, IoT technology, and
                                data-driven design.
                            </p>

                            <button className="mt-8 rounded-xl bg-primary px-8 py-4 text-white transition hover:opacity-90">
                                Watch Profile
                            </button>
                        </FadeUp>
                    </div>

                    {/* Right Content */}
                    <FadeUp>
                        <div className="rounded-3xl bg-bg-subtle p-8">
                            <div className="flex items-center gap-3">
                                <HugeiconsIcon icon={AddTeamIcon} size={40} />

                                <h3 className="text-2xl font-semibold">
                                    They Are Behind The System
                                </h3>
                            </div>

                            <p className="mt-4 max-w-2xl font-light text-zinc-500">
                                A team dedicated to transforming traditional parking into a
                                smarter, more efficient digital system.
                            </p>

                            <div className="mt-10 flex gap-4 overflow-x-auto pb-2">
                                {members.map((member, index) => (
                                    <Avatar
                                        key={member.name}
                                        {...member}
                                        active={active === index}
                                        onHover={() => setActive(index)}
                                    />
                                ))}
                            </div>
                        </div>
                    </FadeUp>
                </div>
            </Container>
        </Section>
    );
}

type AvatarProps = {
    image: string;
    name: string;
    role: string;
    active: boolean;
    onHover: () => void;
};

function Avatar({
    image,
    name,
    role,
    active,
    onHover,
}: AvatarProps) {
    return (
        <div
            onMouseEnter={onHover}
            className={`
    relative
    h-60
    shrink-0
    overflow-hidden
    cursor-pointer
    transition-[width]
    duration-500
    ease-in-out
    ${active ? "w-60 rounded-3xl" : "w-20 rounded-full hover:w-60"}
  `}
        >
            <img
                src={image}
                alt={name}
                className="h-full w-full object-cover"
            />

            {/* Overlay */}
            <div
                onMouseEnter={onHover}
                className={`
    relative
    h-60
    shrink-0
    overflow-hidden
    cursor-pointer
    transition-[width]
    duration-500
    ease-in-out
    ${active ? "w-60 rounded-3xl" : "w-20 rounded-full hover:w-60"}
  `}
            />

            {/* Content */}
            <div
                className={`
          absolute
          bottom-5
          left-0
          w-full
          px-4
          text-center
          text-white
          transition-all
          duration-300
          ${active
                        ? "translate-y-0 opacity-100"
                        : "translate-y-5 opacity-0"
                    }
        `}
            >
                <h4 className="font-semibold">{name}</h4>
                <p className="text-sm text-white/80">{role}</p>
            </div>
        </div>
    );
}