"use client";

import { useEffect } from "react";
import Button from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Hook up to an error-reporting service (e.g. Sentry) in production.
    console.error(error);
  }, [error]);

  return (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
        textAlign: "center",
        padding: 20,
      }}
    >
      <h2 style={{ fontSize: 24, fontWeight: 600 }}>Something went wrong</h2>
      <p style={{ color: "#636363", fontSize: 14, maxWidth: 420 }}>
        An unexpected error occurred while loading this page. Please try again.
      </p>
      <Button onClick={reset}>Try Again</Button>
    </div>
  );
}
