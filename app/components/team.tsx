import Container from "./ui/container";
import FadeUp from "./ui/fade-up";
import Section from "./ui/section";

export default function Team() {
    return (
        <Section className="bg-[#f9f9f9]">
            <Container>
                <div className="flex flex-col gap-8 lg:flex-row">
                    <div className="lg:w-[320px]">
                        <FadeUp>
                            <h2 className="text-4xl font-semibold">
                                Meet The Engineers
                                Behind The System
                            </h2>

                            <p className="mt-5 text-zinc-500 leading-7">
                                Built by passionate engineers focused on
                                solving parking challenges using AI and IoT.
                            </p>

                            <button className="mt-8 rounded-xl bg-primary px-8 py-4 text-white">
                                Watch Profile
                            </button>
                        </FadeUp>
                    </div>

                    <FadeUp>
                        <div className="rounded-3xl bg-[#fbfbfb] p-8">
                            <h3 className="text-2xl font-semibold">
                                They Are Behind The System
                            </h3>

                            <p className="mt-4 text-zinc-500">
                                A team dedicated to transforming parking
                                management through intelligent technology.
                            </p>

                            <div className="mt-10 flex gap-4 overflow-x-auto pb-2">
                                <Avatar image="/images/team-1.jpg" />

                                <FeaturedAvatar />

                                <Avatar image="/images/team-2.jpg" />
                                <Avatar image="/images/team-3.jpg" />
                                <Avatar image="/images/team-4.jpg" />
                            </div>
                        </div>
                    </FadeUp>
                </div>
            </Container>
        </Section>
    );
}

function Avatar({ image }: { image: string }) {
    return (
        <img
            src={image}
            alt="Team Member"
            className="
        h-[240px]
        w-[80px]
        rounded-full
        object-cover
        flex-shrink-0
      "
        />
    );
}

function FeaturedAvatar() {
    return (
        <div className="relative flex-0">
            <img
                src="/images/team-lead.jpg"
                alt="Team Lead"
                className="
          h-60
          w-60
          rounded-3xl
          object-cover
        "
            />

            <div
                className="
          absolute
          inset-0
          rounded-3xl
          bg-linear-to-t
          from-black/80
          to-transparent
        "
            />

            <div className="absolute bottom-4 left-0 w-full text-center text-white">
                <h4 className="font-semibold">
                    Team Lead
                </h4>

                <p className="text-sm">
                    Engineering
                </p>
            </div>
        </div>
    );
}