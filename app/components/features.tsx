
import { DashboardSquare03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Container from "./ui/container";
import FadeUp from "./ui/fade-up";
import FeatureItem from "./ui/feature-item";
import InfoBlock from "./ui/info-block";
import Section from "./ui/section";

export default function Features() {
    return (
        <Section id="features" className=" font-poppins!">
            <Container>
                <FadeUp>
                    <InfoBlock
                        reverse
                        sidebar={
                            <>
                                <span
                                    className="
                    text-6xl
                    font-bold
                    text-zinc-200
                  "
                                >
                                    02
                                </span>

                                <h2
                                    className="
                    mt-6
                    text-3xl
                    font-semibold
                    font-geist
                  "
                                >
                                    Our Powerful Features for  Parking
                                </h2>

                                <p
                                    className="
                    mt-4
                    text-zinc-500
                    font-light
                  "
                                >
                                    An intelligent IoT-powered system that automates vehicle entry, monitors parking capacity in real time, and gives operators complete control through a unified dashboard.
                                </p>

                                <button
                                    className="
                    mt-8
                    w-full
                    rounded-xl
                    bg-primary
                    py-4
                    text-white
                  "
                                >
                                    Request Demo
                                </button>
                            </>
                        }
                    >
                        <div>
                            <div className="flex items-center gap-2">
                                <HugeiconsIcon icon={DashboardSquare03Icon} size={40} />
                                <h3
                                    className="
                  text-[32px]
                  font-semibold
                 
                "
                                >
                                    Features for Parking
                                </h3>
                            </div>

                            <p
                                className="
                  mt-3
                  text-zinc-500
                  font-light
                  max-w-126.5
                "
                            >
                                From automated gate control to live analytics, everything works together to create a seamless parking experience.
                            </p>
                        </div>

                        <div
                            className="
                mt-10
                grid
                gap-4
                md:grid-cols-2
                xl:grid-cols-3
              "
                        >
                            <FeatureItem
                                icon={<HugeiconsIcon icon={DashboardSquare03Icon} size={30} />}
                                title="AI Number Plate Recognition"
                            />

                            <FeatureItem
                                icon={<HugeiconsIcon icon={DashboardSquare03Icon} size={30} />}
                                title="Real-time Entry Tracking"
                            />

                            <FeatureItem
                                icon={<HugeiconsIcon icon={DashboardSquare03Icon} size={30} />}
                                title="Tamper-proof Cloud Logs"
                            />

                            <FeatureItem
                                icon={<HugeiconsIcon icon={DashboardSquare03Icon} size={30} />}
                                title="Automated Gate Control"
                            />

                            <FeatureItem
                                icon={<HugeiconsIcon icon={DashboardSquare03Icon} size={30} />}
                                title="Live Analytics Dashboard"
                            />

                            <FeatureItem
                                icon={<HugeiconsIcon icon={DashboardSquare03Icon} />}
                                title="Minimal Unmanned Operation"
                            />
                        </div>
                    </InfoBlock>
                </FadeUp>
            </Container>
        </Section>
    );
}