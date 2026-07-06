import Image from "next/image";
import Container from "./ui/container";
import FadeUp from "./ui/fade-up";
import Section from "./ui/section";
import SectionTitle from "./ui/section-title";

export default function Profitable() {
    return (
        <Section className="bg-[#f9f9f9]">
            <Container>
                <FadeUp>
                    <SectionTitle
                        title="Let's Make Your Parking System More Profitable"
                        description="Lorem ipsum dolor sit amet consectetur. Nullam gravida scelerisque sit id augue urna nibh erat. Pretium varius odio cursus nulla nisi. Conse"
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

                            <p className="mt-3 text-zinc-500 leading-7">
                                See how ParkTally transforms traditional parking
                                operations into a fully automated revenue machine.
                            </p>

                            <button className="mt-6 w-full rounded-xl bg-primary py-4 text-white">
                                Request Demo
                            </button>
                        </div>
                    </FadeUp>

                    <div className="flex flex-col gap-6">
                        <ProductCard
                            image="/images/device.svg"
                            width={275}
                            height={238}
                            title="Hardware Device"
                            description="AI Camera, Barrier Gate and Vehicle Detection Hardware."
                            button="Buy Now"
                        />

                        <ProductCard
                            image="/images/dashboard.svg"
                            width={275}
                            height={238}
                            title="Dashboard Software"
                            description="Monitor parking operations from anywhere in real time."
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

                        <p className="mt-3 text-zinc-500 leading-7">
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