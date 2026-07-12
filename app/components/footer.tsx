import Link from "next/link";
import Container from "./ui/container";

export default function Footer() {
    return (
        <footer className="border-b pb-8 pt-28">
            <Container>
                <div className="flex flex-col gap-8  md:flex-row md:items-center md:justify-between">
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
            </Container>
        </footer>
    );
}