import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { hero } from "@/lib/content";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Introduction">
      <Reveal className={styles.imgWrap}>
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          fill
          priority
          sizes="(max-width: 640px) 100vw, 90vw"
          style={{ objectFit: "cover" }}
        />
      </Reveal>

      <div className={styles.text}>
        <Reveal as="h1" className={styles.heading}>
          {hero.heading}
        </Reveal>
        <Reveal as="p" delay={1} className={styles.subheading}>
          {hero.subheading}
        </Reveal>
        <Reveal delay={2}>
          <Button href={hero.ctaHref}>{hero.ctaLabel}</Button>
        </Reveal>
      </div>
    </section>
  );
}
