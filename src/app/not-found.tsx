import Button from "@/components/ui/Button";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
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
      <h1 style={{ fontFamily: "var(--font-geist)", fontSize: 48, fontWeight: 600 }}>
        404
      </h1>
      <h2 style={{ fontSize: 22, fontWeight: 600 }}>Page Not Found</h2>
      <p style={{ color: "#636363", fontSize: 14, maxWidth: 420 }}>
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Button href="/">Back To Home</Button>
    </div>
  );
}
