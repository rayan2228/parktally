import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { howItWorksSection } from "@/lib/content";
import styles from "./HowItWorks.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how-steps" aria-labelledby="how-it-works-heading">
      <div className={styles.container}>
        <Reveal className={styles.header}>
          <h2 id="how-it-works-heading">{howItWorksSection.heading}</h2>
          <p>{howItWorksSection.description}</p>
        </Reveal>

        {howItWorksSection.steps.map((step, i) => (
          <Reveal
            key={step.title}
            delay={i === 1 ? 1 : 0}
            className={`${styles.row} ${i === 1 ? styles.right : ""}`}
          >
            <div
              className={styles.card}
              style={step.muted ? { opacity: 0.65 } : undefined}
            >
              <div className={styles.label}>{step.label}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
            <div className={styles.visual}>
              <Image
                src={step.image.src}
                alt={step.image.alt}
                width={380}
                height={260}
                sizes="(max-width: 640px) 100vw, 380px"
                style={{ width: "100%", height: "260px", objectFit: "cover" }}
              />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
