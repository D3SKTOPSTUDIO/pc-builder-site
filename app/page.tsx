import Link from "next/link";
export default function HomePage() {
  return (
    <main style={{ padding: 24, maxWidth: 1000, margin: "0 auto" }}>
      <section style={{ padding: "48px 0" }}>
        <h1 style={{ fontSize: 48, lineHeight: 1.1, marginBottom: 16 }}>
          D3SKTOP STUDIO
        </h1>

        <p style={{ fontSize: 18, maxWidth: 700, marginBottom: 24 }}>
          Your local Custom PC Expert- Custom gaming PCs, quiet workstations, and clean upgrades — built with
          care, tested properly, and tailored to your budget.
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link
            href="/contact"
            style={{
              padding: "12px 16px",
              border: "1px solid #111",
              textDecoration: "none",
            }}
          >
            Get a Quote
          </Link>

          <Link
            href="/builds"
            style={{
              padding: "12px 16px",
              border: "1px solid #ddd",
              textDecoration: "none",
            }}
          >
            View Builds
          </Link>
        </div>
      </section>

      <section style={{ padding: "24px 0", borderTop: "1px solid #eee" }}>
        <h2 style={{ fontSize: 24, marginBottom: 12 }}>What I can do</h2>

        <ul style={{ lineHeight: 1.8 }}>
          <li>Full custom builds (parts advice + assembly + testing)</li>
          <li>Upgrades (GPU/CPU/RAM/SSD, BIOS updates, Windows setup)</li>
          <li>Thermals + noise tuning (fan curves, airflow, repaste)</li>
          <li>Cable management + clean presentation</li>
        </ul>
      </section>
    </main>
  );
}
