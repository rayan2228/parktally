"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";


import useScroll from "../hooks/use-scroll";
import { NAV_LINKS } from "../lib/constants";
import Container from "./ui/container";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const scrolled = useScroll();

    return (
        <>
            <nav
                className={`
          sticky
          top-0
          z-50
          transition-all
          duration-300
          backdrop-blur-md

          ${scrolled
                        ? "border-b border-zinc-200 bg-white/90"
                        : "bg-white/70"
                    }
        `}
            >
                <Container>
                    <div className="flex h-20 items-center justify-between">
                        <Link
                            href="/"
                            className="text-2xl font-bold tracking-tight"
                        >
                            <span className="text-primary">
                                Park
                            </span>
                            <span>Tally</span>
                        </Link>

                        <div className="hidden items-center gap-2 md:flex">
                            {NAV_LINKS.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="
                    rounded-full
                    px-4
                    py-2
                    text-sm
                    text-zinc-600
                    transition-all
                    hover:bg-primary/10
                  "
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>

                        <button
                            onClick={() => setOpen(true)}
                            className="
                flex
                items-center
                justify-center
                md:hidden
              "
                        >
                            <Menu size={26} />
                        </button>
                    </div>
                </Container>
            </nav>

            <MobileMenu
                open={open}
                onClose={() => setOpen(false)}
            />
        </>
    );
}

interface MobileProps {
    open: boolean;
    onClose: () => void;
}

function MobileMenu({
    open,
    onClose,
}: MobileProps) {
    if (!open) return null;

    return (
        <div
            className="
        fixed
        inset-0
        z-60
        flex
        flex-col
        bg-white
      "
        >
            <div className="flex justify-end p-6">
                <button onClick={onClose}>
                    <X size={28} />
                </button>
            </div>

            <div
                className="
          flex
          flex-1
          flex-col
          items-center
          justify-center
          gap-8
        "
            >
                {NAV_LINKS.map((item) => (
                    <Link
                        key={item.label}
                        href={item.href}
                        onClick={onClose}
                        className="
              text-2xl
              font-medium
            "
                    >
                        {item.label}
                    </Link>
                ))}

                <button
                    className="
            mt-8
            rounded-xl
            bg-primary
            px-8
            py-4
            text-white
          "
                >
                    Request Demo
                </button>
            </div>
        </div>
    );
}