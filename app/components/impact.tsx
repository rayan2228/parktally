import Image from "next/image";
import Container from "./ui/container";
import FadeUp from "./ui/fade-up";
import Section from "./ui/section";

const impactData = [
    {
        feature: "Revenue Leakage",
        manual: "High (15-20%)",
        automated: "Near Zero (<0.5%)",
        improvement: "Recover 15–20% of Revenue",
    },
    {
        feature: "Entry Speed",
        manual: "10–20 Seconds",
        automated: "2–4 Seconds",
        improvement: "Up to 5x Faster Entry",
    },
    {
        feature: "Staff Costs",
        manual: "Multi-staff required",
        automated: "Minimal / Unmanned",
        improvement: "Low Cost",
    },
    {
        feature: "Data Integrity",
        manual: "Easily manipulable",
        automated: "Tamper-proof Cloud Logs",
        improvement: "100% Fraud-Proof Records",
    },
];

export default function Impact() {
    return (
        <Section id="impact" className="bg-white font-poppins">
            <Container>
                <FadeUp>
                    <div className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                        <div className="flex-1">
                            <h2 className="max-w-xl font-geist text-4xl font-semibold">
                                The Impact of Our System on Your Business
                            </h2>

                            <p className="mt-5 max-w-xl text-sm font-light leading-7 text-primary-black">
                                Maximize your revenue, slash operational costs, and drastically
                                reduce entry times with our automated solution.
                            </p>
                        </div>

                        <div className="w-full max-w-md lg:w-105">
                            <Image
                                src="/images/impact.svg"
                                alt="Business impact illustration"
                                width={480}
                                height={152}
                                sizes="(max-width:1024px) 100vw, 420px"
                                className="h-auto w-full"
                            />
                        </div>
                    </div>
                </FadeUp>

                <FadeUp delay={0.15}>
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-160 border-collapse">
                            <thead>
                                <tr className="border-b border-zinc-200">
                                    <th className="py-4 text-left">Feature</th>
                                    <th className="py-4 text-left">Manual Parking</th>
                                    <th className="py-4 text-left">Using ParkTally</th>
                                    <th className="py-4 text-left">Improvement</th>
                                </tr>
                            </thead>

                            <tbody>
                                {impactData.map((item) => (
                                    <TableRow key={item.feature} {...item} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </FadeUp>
            </Container>
        </Section>
    );
}

type TableRowProps = {
    feature: string;
    manual: string;
    automated: string;
    improvement: string;
};
function TableRow({
    feature,
    manual,
    automated,
    improvement,
}: TableRowProps) {
    return (
        <tr className="border-b border-zinc-200 text-sm text-primary-black">
            <td className="py-5">{feature}</td>

            <td className="py-5">{manual}</td>

            <td className="py-5 font-medium text-primary-black">
                {automated}
            </td>

            <td className="py-5 font-semibold text-primary-black">
                {improvement}
            </td>
        </tr>
    );
}