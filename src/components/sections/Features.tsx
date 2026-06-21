import InfoBlock from "./InfoBlock";
import { GridIcon, FeatureIcon } from "@/components/icons";
import { featuresSection } from "@/lib/content";
import styles from "./Features.module.css";

export default function Features() {
  return (
    <InfoBlock
      id="features"
      stepNumber={featuresSection.stepNumber}
      heading={featuresSection.heading}
      description={featuresSection.description}
      ctaLabel={featuresSection.ctaLabel}
      reverse
      panelIcon={<GridIcon />}
      panelHeading={featuresSection.panel.heading}
      panelDescription={featuresSection.panel.description}
    >
      <div className={styles.grid}>
        {featuresSection.features.map((feature) => (
          <div key={feature.label} className={styles.item}>
            <div className={styles.icon}>
              <FeatureIcon name={feature.icon} />
            </div>
            <span>{feature.label}</span>
          </div>
        ))}
      </div>
    </InfoBlock>
  );
}
