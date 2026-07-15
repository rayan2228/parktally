"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";


import { NAV_LINKS } from "../lib/constants";
import Container from "./ui/container";
import Image from "next/image";

export default function Navbar() {
    const [open, setOpen] = useState(false);


    return (
        <>
            <nav
                className={`
                    lg:absolute
                    z-50
                    transition-all
                    duration-300
                    lg:left-1/2
                    lg:-translate-x-1/2
                    w-dvw
                `}
            >
                <Container>
                    <div
                        className="
                            flex
                            items-center
                            justify-between
                            py-4
                            lg:flex-col
                            lg:justify-center
                            lg:py-6
                        "
                    >
                        <Link
                            href="/"
                            className="text-2xl font-bold tracking-tight lg:mb-2"
                        >
                            <Image src={"/images/logo.png"} className="w-auto h-auto" width={120} height={35} alt="parktally logo" loading="eager" />
                        </Link>

                        <div className="hidden items-center gap-2 lg:flex">
                            {NAV_LINKS.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="
                                    font-poppins
                                        rounded-full
                                        px-4
                                        py-2
                                        text-sm
                                        text-zinc-600
                                        transition-all
                                        hover:bg-primary
                                        hover:text-white
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
                                lg:hidden
                            "
                            aria-label="Open menu"
                        >
                            <Menu size={26} />
                        </button>
                    </div>
                </Container>
            </nav>

            <MobileMenu open={open} onClose={() => setOpen(false)} />
        </>
    );
}

interface MobileProps {
    open: boolean;
    onClose: () => void;
}

function MobileMenu({ open, onClose }: MobileProps) {
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
                <button onClick={onClose} aria-label="Close menu">
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
                        className="text-2xl font-medium font-poppins"
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