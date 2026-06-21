import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { impactSection } from "@/lib/content";
import styles from "./Impact.module.css";

export default function Impact() {
  return (
    <section className={styles.section} id="impact" aria-labelledby="impact-heading">
      <div className={styles.container}>
        <Reveal className={styles.header}>
          <div className={styles.headerText}>
            <h2 id="impact-heading">{impactSection.heading}</h2>
            <p>{impactSection.description}</p>
          </div>
          <Image
            src={impactSection.image.src}
            alt={impactSection.image.alt}
            width={420}
            height={300}
            sizes="(max-width: 1024px) 60vw, 420px"
            style={{ width: "100%", maxWidth: "420px", height: "auto" }}
          />
        </Reveal>

        <Reveal delay={1} className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                {impactSection.table.headers.map((h) => (
                  <th key={h} style={{ width: "33%" }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {impactSection.table.rows.map((row) => (
                <tr key={row[0]}>
                  <td>{row[0]}</td>
                  <td>{row[1]}</td>
                  <td className={styles.good}>{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>
  );
}
