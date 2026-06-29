import {
    BarChart3,
    Clock3,
    GlassWater,
    Monitor,
    Shield,
    Users,
} from "lucide-react";

import Container from "./ui/container";
import FadeUp from "./ui/fade-up";
import FeatureItem from "./ui/feature-item";
import InfoBlock from "./ui/info-block";
import Section from "./ui/section";

export default function Features() {
    return (
        <Section id="features">
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
                  "
                                >
                                    Powerful Features
                                    for Parking
                                </h2>

                                <p
                                    className="
                    mt-4
                    text-zinc-500
                  "
                                >
                                    Intelligent AI-powered
                                    parking automation.
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
                            <h3
                                className="
                  text-2xl
                  font-semibold
                "
                            >
                                Features for Parking
                            </h3>

                            <p
                                className="
                  mt-3
                  text-zinc-500
                "
                            >
                                Everything needed
                                to automate your
                                parking operations.
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
                                icon={<Monitor size={18} />}
                                title="AI Number Plate Recognition"
                            />

                            <FeatureItem
                                icon={<Clock3 size={18} />}
                                title="Real-time Entry Tracking"
                            />

                            <FeatureItem
                                icon={<Shield size={18} />}
                                title="Tamper-proof Cloud Logs"
                            />

                            <FeatureItem
                                icon={<GlassWater size={18} />}
                                title="Automated Gate Control"
                            />

                            <FeatureItem
                                icon={<BarChart3 size={18} />}
                                title="Live Analytics Dashboard"
                            />

                            <FeatureItem
                                icon={<Users size={18} />}
                                title="Minimal Unmanned Operation"
                            />
                        </div>
                    </InfoBlock>
                </FadeUp>
            </Container>
        </Section>
    );
}