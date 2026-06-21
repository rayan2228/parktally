"use client";

import { useState, type FormEvent } from "react";
import { MailIcon, ArrowRightIcon } from "@/components/icons";
import { ctaSection } from "@/lib/content";
import styles from "./CtaForm.module.css";

type Status = "idle" | "submitting" | "success" | "error";

export default function CtaForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || status === "submitting") return;

    setStatus("submitting");
    try {
      // Replace with a real lead-capture endpoint (e.g. /api/leads).
      // Left as a stub so this is wired correctly without a backend dependency.
      await new Promise((resolve) => setTimeout(resolve, 600));
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form className={styles.bar} onSubmit={handleSubmit} noValidate>
      <div className={styles.left}>
        <MailIcon />
        <label htmlFor="cta-email" className="sr-only">
          Email address
        </label>
        <input
          id="cta-email"
          type="email"
          required
          placeholder={ctaSection.emailPlaceholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
        />
      </div>
      <button type="submit" className={styles.btn} disabled={status === "submitting"}>
        {status === "success" ? "Sent!" : ctaSection.submitLabel}
        <ArrowRightIcon />
      </button>
    </form>
  );
}
