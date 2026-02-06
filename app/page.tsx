import Link from "next/link";
export default function HomePage() {
  return (
    <main style={{ padding: 24, maxWidth: 1000, margin: "0 auto" }}>
      <section style={{ padding: "48px 0" }}>
        <h1 style={{ fontSize: 48, lineHeight: 1.1, marginBottom: 16 }}>
          D3SKTOP STUDIO
        </h1>

        <p style={{ fontSize: 18, maxWidth: 700, marginBottom: 24 }}>
          Your local Custom PC Expert- Custom gaming PCs, quiet workstations,
          and clean upgrades — built with care, tested properly, and tailored to
          your budget.
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
            href="/services"
            className="inline-flex items-center justify-center rounded-md border border-black/20 px-4 py-3 text-sm font-medium hover:opacity-90"
          >
            Services
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

      <section className="mt-12 border-t border-black/10 pt-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold">Featured Builds</h2>
            <p className="mt-2 max-w-2xl text-sm opacity-80">
              A few highlights from recent builds. Full gallery on the Builds
              page.
            </p>
          </div>

          <Link href="/builds" className="text-sm opacity-80 hover:opacity-100">
            View all →
          </Link>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl border border-black/10"
            >
              <div className="aspect-video bg-black/5" />
              <div className="p-4">
                <div className="text-sm opacity-60">Featured #{i + 1}</div>
                <div className="mt-2 font-medium">Build title placeholder</div>
                <div className="mt-1 text-sm opacity-80">
                  CPU • GPU • RAM • Storage
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 border-t border-black/10 pt-8">
        <h2 className="text-xl font-semibold">Why D3SKTOP STUDIO?</h2>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-black/10 p-5">
            <div className="text-sm opacity-60">Quality</div>
            <div className="mt-2 font-medium">Built clean, tested properly</div>
            <p className="mt-2 text-sm opacity-80">
              Stress testing, temps/noise checks, and a tidy finish so your PC
              feels premium.
            </p>
          </div>

          <div className="rounded-xl border border-black/10 p-5">
            <div className="text-sm opacity-60">Advice</div>
            <div className="mt-2 font-medium">Parts that match your budget</div>
            <p className="mt-2 text-sm opacity-80">
              No overspending. Clear recommendations based on what you play or
              what you create.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
