"use client";

import { useEffect, useRef, useState, type ReactNode, type ElementType } from "react";
import styles from "./Reveal.module.css";

type RevealProps = {
  children: ReactNode;
  delay?: 0 | 1 | 2 | 3;
  as?: ElementType;
  className?: string;
};

/**
 * Scroll-triggered fade-up animation wrapper.
 * Uses IntersectionObserver (client-only) so the initial server-rendered
 * HTML is fully visible/crawlable — animation is purely progressive
 * enhancement and never hides content from bots or no-JS users.
 */
export default function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const classes = [
    styles.reveal,
    visible ? styles.visible : "",
    delay ? styles[`d${delay}`] : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag ref={ref} className={classes}>
      {children}
    </Tag>
  );
}
