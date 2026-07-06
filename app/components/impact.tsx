import Image from "next/image";
import Container from "./ui/container";
import FadeUp from "./ui/fade-up";
import Section from "./ui/section";

export default function Impact() {
    return (
        <Section
            id="impact"
            className="bg-white font-poppins"
        >
            <Container>
                <FadeUp>
                    <div
                        className="
              mb-14
              flex
              flex-col
              gap-8
              lg:flex-row
              lg:items-center
            "
                    >
                        <div className="flex-1">
                            <h2
                                className="
                  text-4xl
                  font-semibold
                  font-geist
                  max-w-126
                "
                            >
                                The Impact Of Our
                                System On Your Business
                            </h2>

                            <p
                                className="
                  mt-5
                  max-w-xl
                  text-zinc-500
                  leading-7
                  font-light text-sm
                "
                            >
                           Maximize your revenue, slash operational costs, and drastically reduce entry times with our automated solution.
                            </p>
                        </div>

                        <div
                            className="
                lg:w-105
              "
                        >
                            <Image
                                src="/images/impact.svg"
                                alt="Impact"
                                className="w-full h-auto"
                                width={480}
                                height={152}
                            />
                        </div>
                    </div>
                </FadeUp>

                <FadeUp delay={0.15}>
                    <div
                        className="
              overflow-x-auto
            "
                    >
                        <table
                            className="
                w-full
                min-w-175
                border-collapse
              "
                        >
                            <thead>
                                <tr
                                    className="
                    border-b
                    border-zinc-200
                  "
                                >
                                    <th className="py-4 text-left">
                                        Feature
                                    </th>

                                    <th className="py-4 text-left">
                                        Manual Parking
                                    </th>

                                    <th className="py-4 text-left">
                                        Using Our ParkTally
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                <TableRow
                                    feature="Revenue Leakage"
                                    oldValue="15-20%"
                                    newValue="Below 0.5%"
                                />

                                <TableRow
                                    feature="Entry Speed"
                                    oldValue="10-20 Seconds"
                                    newValue="2-4 Seconds"
                                />

                                <TableRow
                                    feature="Labor Cost"
                                    oldValue="Multiple Staff"
                                    newValue="Minimal / Unmanned"
                                />

                                <TableRow
                                    feature="Data Integrity"
                                    oldValue="Manipulable"
                                    newValue="Cloud Secured"
                                />

                                <TableRow
                                    feature="Real Time Monitoring"
                                    oldValue="No"
                                    newValue="Yes"
                                />
                            </tbody>
                        </table>
                    </div>
                </FadeUp>
            </Container>
        </Section>
    );
}

function TableRow({
    feature,
    oldValue,
    newValue,
}: {
    feature: string;
    oldValue: string;
    newValue: string;
}) {
    return (
        <tr
            className="
        border-b
        border-zinc-200
        text-zinc-500
      "
        >
            <td className="py-5  ">
                {feature}
            </td>

            <td className="py-5 ">
                {oldValue}
            </td>

            <td
                className="
          py-5
        "
            >
                {newValue}
            </td>
        </tr>
    );
}