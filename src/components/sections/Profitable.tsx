import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { profitableSection } from "@/lib/content";
import styles from "./Profitable.module.css";

export default function Profitable() {
  return (
    <section className={styles.section} aria-labelledby="profitable-heading">
      <div className={styles.container}>
        <Reveal className={styles.header}>
          <h2 id="profitable-heading">{profitableSection.heading}</h2>
          <p>{profitableSection.description}</p>
        </Reveal>

        <Reveal delay={1} className={styles.cards}>
          <div className={styles.demo}>
            <div className={styles.demoImg}>
              <Image
                src={profitableSection.demo.image.src}
                alt={profitableSection.demo.image.alt}
                width={500}
                height={340}
                sizes="(max-width: 1024px) 100vw, 33vw"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div className={styles.demoBody}>
              <div>
                <h3>{profitableSection.demo.title}</h3>
                <p>{profitableSection.demo.description}</p>
              </div>
              <Button href="#cta" fullWidth>
                {profitableSection.demo.ctaLabel}
              </Button>
            </div>
          </div>

          <div className={styles.stack}>
            {profitableSection.cards.map((card) => (
              <div key={card.title} className={styles.cardH}>
                <div className={styles.cardHImg}>
                  <Image
                    src={card.image.src}
                    alt={card.image.alt}
                    width={200}
                    height={200}
                    sizes="200px"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div className={styles.cardHBody}>
                  <div>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </div>
                  <Button href="#cta" fullWidth>
                    {card.ctaLabel}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
