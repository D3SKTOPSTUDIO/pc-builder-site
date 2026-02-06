import Link from "next/link";

export default function PCsPage() {
  const pcs = [
    { slug: "1080p-gaming", status: "Available", name: "1080p Gaming PC", price: "$0 (placeholder)" },
    { slug: "1440p-high-fps", status: "Available", name: "1440p High FPS Build", price: "$0 (placeholder)" },
    { slug: "creator-workstation", status: "Sold", name: "Creator Workstation", price: "$0 (placeholder)" },
  ] as const;

  return (
    <div className="py-12">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">PCs for Sale</h1>
          <p className="mt-3 max-w-2xl opacity-80">
            Current builds available from D3SKTOP STUDIO. Enquire to reserve or request a custom build.
          </p>
        </div>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-md border border-black px-4 py-3 text-sm font-medium hover:opacity-90"
        >
          Enquire
        </Link>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {pcs.map((pc) => (
          <Link
            key={pc.slug}
            href={`/pcs/${pc.slug}`}
            className="block rounded-xl border border-black/10 p-5 hover:border-black/30"
          >
            <div className="text-sm opacity-60">{pc.status}</div>
            <div className="mt-2 font-semibold">{pc.name}</div>
            <div className="mt-2 text-sm opacity-80">
              CPU • GPU • RAM • Storage (placeholders)
            </div>
            <div className="mt-4 text-sm font-medium">{pc.price}</div>
            <div className="mt-3 text-sm opacity-70">View details →</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
