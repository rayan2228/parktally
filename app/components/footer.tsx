import Link from "next/link";
import Container from "./ui/container";

export default function Footer() {
    return (
        <footer className="border-t border-zinc-200 bg-white">
            <Container>
                <div className="flex flex-col gap-8 py-8 md:flex-row md:items-center md:justify-between">
                    <Link
                        href="/"
                        className="text-2xl font-bold"
                    >
                        <span className="text-primary">
                            Park
                        </span>
                        Tally
                    </Link>

                    <div className="flex flex-wrap gap-6">
                        <Link href="#">Home</Link>
                        <Link href="#how">How It Works</Link>
                        <Link href="#features">Features</Link>
                        <Link href="#impact">Pricing</Link>
                        <Link href="#">Dashboard</Link>
                    </div>
                </div>

                <div className="border-t border-zinc-200 py-6 text-center text-sm text-zinc-500">
                    © 2026 ParkTally. All rights reserved.
                </div>
            </Container>
        </footer>
    );
}