import Link from "next/link";
import { footer } from "@/lib/content";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          Park<span>Tally</span>
        </Link>
        <nav className={styles.links} aria-label="Footer navigation">
          {footer.links.map((link) => (
            <Link key={link.label} href={link.href}>
              {link.label}
              {link.hasChevron && (
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <path d="M4 6l4 4 4-4" />
                </svg>
              )}
            </Link>
          ))}
        </nav>
      </div>
      <div className={styles.divider} />
      <p className={styles.copy}>{footer.copyright}</p>
    </footer>
  );
}
