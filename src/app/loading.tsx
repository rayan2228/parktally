export default function Loading() {
  // Instant loading UI shown by Next.js while the page segment streams in.
  return (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#636363",
        fontSize: 14,
      }}
      role="status"
      aria-live="polite"
    >
      Loading…
    </div>
  );
}
