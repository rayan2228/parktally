
import { HugeiconsIcon } from "@hugeicons/react";

import {
    CctvCameraIcon,
    CreditCardIcon,
    CreditCardValidationIcon,
    DashboardSquare03Icon,
    Key01FreeIcons,
    MoneyBag01Icon,
    MoneySendCircleFreeIcons,
    MoneySendCircleIcon,
    SecurityLockIcon
} from "@hugeicons/core-free-icons";
import Container from "./ui/container";
import FadeUp from "./ui/fade-up";
import FeatureItem from "./ui/feature-item";
import InfoBlock from "./ui/info-block";
import Section from "./ui/section";
export const features = [
    {
        title: "AI Number Plate Recognition",
        icon: CctvCameraIcon,
    },
    {
        title: "Smart Access Control",
        icon: Key01FreeIcons,
    },
    {
        title: "Automated Billing & Payments",
        icon: CreditCardValidationIcon,
    },
    {
        title: "Real-Time Parking Dashboard",
        icon: DashboardSquare03Icon,
    },
    {
        title: "Revenue Leakage Prevention",
        icon: MoneySendCircleFreeIcons,
    },
    {
        title: "Security & Vehicle Intelligence",
        icon: SecurityLockIcon,
    },
];

export default function Features() {
    return (
        <Section id="features" className="bg-white pt-4! font-poppins">
            <Container>
                <FadeUp>
                    <InfoBlock
                        reverse
                        sidebar={
                            <>
                                <span className="text-6xl font-bold text-zinc-200">02</span>

                                <h2 className="mt-6 font-geist text-3xl font-semibold capitalize">
                                    Our Powerful Features for Parking
                                </h2>

                                <p className="mt-4 text-primary-black">
                                    An intelligent IoT-powered system that automates vehicle entry,
                                    monitors parking capacity in real time, and gives operators
                                    complete control through a unified dashboard.
                                </p>

                                <button className="mt-8 w-full rounded-xl bg-primary py-4 text-white transition-colors hover:bg-primary/90">
                                    Get your device now
                                </button>
                            </>
                        }
                    >
                        <div>
                            <div className="flex items-center gap-3">
                                <HugeiconsIcon icon={DashboardSquare03Icon} size={40} />

                                <h3 className="text-[32px] font-semibold">
                                    Features for Parking
                                </h3>
                            </div>

                            <p className="mt-3 max-w-lg text-primary-black">
                                From automated gate control to live analytics, everything works
                                together to create a seamless parking experience.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                            {features.map(({ title, icon }) => (
                                <FeatureItem
                                    key={title}
                                    icon={<HugeiconsIcon icon={icon} size={30} />}
                                    title={title}
                                />
                            ))}
                        </div>
                    </InfoBlock>
                </FadeUp>
            </Container>
        </Section>
    );
}