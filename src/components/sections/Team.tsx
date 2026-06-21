import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { TeamIcon } from "@/components/icons";
import { teamSection } from "@/lib/content";
import styles from "./Team.module.css";

export default function Team() {
  return (
    <section className={styles.section} aria-labelledby="team-heading">
      <div className={styles.container}>
        <div className={styles.block}>
          <Reveal className={styles.left}>
            <div>
              <h2 id="team-heading">{teamSection.heading}</h2>
              <p>{teamSection.description}</p>
            </div>
            <Button href="#">{teamSection.ctaLabel}</Button>
          </Reveal>

          <Reveal delay={1} className={styles.right}>
            <div>
              <div className={styles.titleRow}>
                <TeamIcon />
                <h3>{teamSection.panel.heading}</h3>
              </div>
              <p className={styles.sub}>{teamSection.panel.description}</p>
            </div>

            <div className={styles.avatars}>
              {teamSection.members.map((member) =>
                member.featured ? (
                  <div key={member.name + member.role} className={styles.featured}>
                    <Image
                      src={member.image}
                      alt={`${member.name}, ${member.role}`}
                      width={220}
                      height={270}
                      sizes="220px"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                    <div className={styles.overlay} />
                    <div className={styles.info}>
                      <h4>{member.name}</h4>
                      <p>{member.role}</p>
                    </div>
                  </div>
                ) : (
                  <div key={member.name + member.role} className={styles.pill}>
                    <Image
                      src={member.image}
                      alt={`${member.name}, ${member.role}`}
                      width={108}
                      height={270}
                      sizes="108px"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                )
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
