"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { nav } from "@/lib/content";
import styles from "./Header.module.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.inner}>
          <Link href="/" className={styles.logo} aria-label="ParkTally home">
            {nav.logoFirst}
            <span>{nav.logoLast}</span>
          </Link>

          <nav className={styles.links} aria-label="Primary navigation">
            {nav.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={link.active ? styles.active : ""}
              >
                {link.label}
                {link.hasChevron && (
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    aria-hidden="true"
                  >
                    <path d="M4 6l4 4 4-4" />
                  </svg>
                )}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            className={`${styles.toggle} ${menuOpen ? styles.open : ""}`}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${menuOpen ? styles.menuOpen : ""}`}
      >
        {nav.links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={link.active ? styles.active : ""}
            onClick={closeMenu}
          >
            {link.label}
          </Link>
        ))}
        <Link href="#cta" className={styles.active} onClick={closeMenu}>
          Request Demo
        </Link>
      </div>
    </>
  );
}
