import InfoBlock from "./InfoBlock";
import { ChartIcon } from "@/components/icons";
import { revenueLossSection } from "@/lib/content";
import styles from "./RevenueLoss.module.css";

export default function RevenueLoss() {
  return (
    <InfoBlock
      id="how"
      stepNumber={revenueLossSection.stepNumber}
      heading={revenueLossSection.heading}
      description={revenueLossSection.description}
      ctaLabel={revenueLossSection.ctaLabel}
      panelIcon={<ChartIcon />}
      panelHeading={revenueLossSection.panel.heading}
      panelDescription={revenueLossSection.panel.description}
    >
      <div className={styles.grid}>
        {revenueLossSection.reasons.map((reason) => (
          <div key={reason.title} className={styles.card}>
            <h4>{reason.title}</h4>
            <p>{reason.description}</p>
          </div>
        ))}
      </div>
    </InfoBlock>
  );
}
