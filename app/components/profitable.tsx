import Image from "next/image";
import Container from "./ui/container";
import FadeUp from "./ui/fade-up";
import Section from "./ui/section";
import SectionTitle from "./ui/section-title";

export default function Profitable() {
    return (
        <Section className="bg-white">
            <Container>
                <FadeUp>
                    <SectionTitle
                        title="Let's Make Your Parking System More Profitable"
                        description="Upgrade your facility with our all-in-one automation ecosystem. Seamlessly integrate hardware and cloud software to eliminate revenue leakage, lower operational overhead, and maximize daily turnover."
                    />
                </FadeUp>

                <div className="grid gap-6 lg:grid-cols-2">
                    <FadeUp>
                        <div className="rounded-3xl border border-zinc-200 bg-white p-6">
                            <div className="overflow-hidden rounded-2xl">
                                <Image
                                    src="/images/demo.svg"
                                    alt="Demo"
                                    className="h-80 w-full object-cover"
                                    width={562}
                                    height={358}
                                />
                            </div>

                            <h3 className="mt-6 text-xl font-semibold">
                                Demonstration
                            </h3>

                            <p className="mt-3 text-primary-black leading-7">
                                Experience how our intelligent ANPR cameras and automated barriers streamline entry and exit paths. Watch how the system automatically logs vehicles, calculates exact fees, and prevents manual tampering in real time.
                            </p>

                            <button className="mt-6 w-full rounded-xl bg-primary py-4 text-white">
                                Request For Demo
                            </button>
                        </div>
                    </FadeUp>

                    <div className="flex flex-col gap-6">
                        <ProductCard
                            image="/images/device.svg"
                            width={275}
                            height={238}
                            title="Hardware Device"
                            description="Connect your existing gates to the cloud with our secure IoT gateway. Enjoy fast offline processing, multi-port scalability, and zero downtime."
                            button="Order Now"
                        />

                        <ProductCard
                            image="/images/dashboard.svg"
                            width={275}
                            height={238}
                            title="Dashboard Software"
                            description="Monitor operations from anywhere. Track live occupancy, view real-time revenue analytics, and access tamper-proof audit logs on any device."
                            button="Go To Dashboard"
                        />
                    </div>
                </div>
            </Container>
        </Section>
    );
}

function ProductCard({
    image,
    title,
    description,
    button,
    width,
    height
}: {
    image: string;
    title: string;
    description: string;
    button: string;
    width: number,
    height: number
}) {
    return (
        <FadeUp>
            <div className="flex flex-col gap-6 rounded-3xl border border-zinc-200 bg-white p-6 md:flex-row">
                <Image
                    src={image}
                    alt={title}
                    width={width}
                    height={height}
                    className="h-55 w-full rounded-2xl object-cover md:w-55"
                />

                <div className="flex flex-1 flex-col justify-between">
                    <div>
                        <h3 className="text-xl font-semibold">
                            {title}
                        </h3>

                        <p className="mt-3 text-primary-black leading-7">
                            {description}
                        </p>
                    </div>

                    <button className="mt-6 rounded-xl bg-primary py-4 text-white">
                        {button}
                    </button>
                </div>
            </div>
        </FadeUp>
    );
}