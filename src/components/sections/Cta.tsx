import Reveal from "@/components/ui/Reveal";
import CtaForm from "./CtaForm";
import { ctaSection } from "@/lib/content";
import styles from "./Cta.module.css";

export default function Cta() {
  return (
    <section className={styles.section} id="cta" aria-labelledby="cta-heading">
      <Reveal as="h2" className={styles.heading}>
        <span id="cta-heading">{ctaSection.heading}</span>
      </Reveal>
      <Reveal as="p" delay={1} className={styles.description}>
        {ctaSection.description}
      </Reveal>
      <Reveal delay={2}>
        <CtaForm />
      </Reveal>
    </section>
  );
}
