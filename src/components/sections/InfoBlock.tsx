import type { ReactNode } from "react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import styles from "./InfoBlock.module.css";

type InfoBlockProps = {
  stepNumber: string;
  heading: string;
  description: string;
  ctaLabel: string;
  ctaHref?: string;
  reverse?: boolean;
  panelIcon: ReactNode;
  panelHeading: string;
  panelDescription: string;
  children: ReactNode;
  id?: string;
};

export default function InfoBlock({
  stepNumber,
  heading,
  description,
  ctaLabel,
  ctaHref = "#",
  reverse = false,
  panelIcon,
  panelHeading,
  panelDescription,
  children,
  id,
}: InfoBlockProps) {
  return (
    <section className={styles.section} id={id}>
      <div className={styles.container}>
        <Reveal
          className={`${styles.block} ${reverse ? styles.reverse : ""}`}
        >
          <div className={styles.side}>
            <div>
              <div className={styles.stepNumber} aria-hidden="true">
                {stepNumber}
              </div>
              <h2 className={styles.heading}>{heading}</h2>
              <p className={styles.description}>{description}</p>
            </div>
            <Button href={ctaHref}>{ctaLabel}</Button>
          </div>

          <div className={styles.body}>
            <div>
              <div className={styles.titleRow}>
                {panelIcon}
                <h3>{panelHeading}</h3>
              </div>
              <p className={styles.sub}>{panelDescription}</p>
            </div>
            {children}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
