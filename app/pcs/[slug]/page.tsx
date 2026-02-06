import Link from "next/link";

const PC_DATA: Record<
  string,
  {
    name: string;
    status: "Available" | "Sold";
    price: string;
    summary: string;
    specs: string[];
  }
> = {
  "1080p-gaming": {
    name: "1080p Gaming PC",
    status: "Available",
    price: "$0 (placeholder)",
    summary: "Smooth esports + modern titles at 1080p. Great value build.",
    specs: ["CPU: placeholder", "GPU: placeholder", "RAM: placeholder", "Storage: placeholder"],
  },
  "1440p-high-fps": {
    name: "1440p High FPS Build",
    status: "Available",
    price: "$0 (placeholder)",
    summary: "High refresh-rate 1440p gaming focused on FPS performance.",
    specs: ["CPU: placeholder", "GPU: placeholder", "RAM: placeholder", "Storage: placeholder"],
  },
  "creator-workstation": {
    name: "Creator Workstation",
    status: "Sold",
    price: "$0 (placeholder)",
    summary: "Quiet workstation tuned for productivity and content creation.",
    specs: ["CPU: placeholder", "GPU: placeholder", "RAM: placeholder", "Storage: placeholder"],
  },
};

export default async function PCDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pc = PC_DATA[slug];

  if (!pc) {
    return (
      <div className="py-12">
        <h1 className="text-3xl font-semibold tracking-tight">PC not found</h1>
        <p className="mt-3 opacity-80">This listing doesn’t exist.</p>
        <Link href="/pcs" className="mt-6 inline-block text-sm opacity-80 hover:opacity-100">
          ← Back to PCs
        </Link>
      </div>
    );
  }

  return (
    <div className="py-12">
      <Link href="/pcs" className="text-sm opacity-80 hover:opacity-100">
        ← Back to PCs
      </Link>

      <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="text-sm opacity-60">{pc.status}</div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">{pc.name}</h1>
          <p className="mt-3 max-w-2xl opacity-80">{pc.summary}</p>
        </div>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-md border border-black px-4 py-3 text-sm font-medium hover:opacity-90"
        >
          Enquire
        </Link>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="overflow-hidden rounded-xl border border-black/10">
            <div className="aspect-video bg-black/5" />
            <div className="p-4">
              <div className="text-sm opacity-60">Photo placeholder</div>
              <div className="mt-2 text-sm opacity-80">
                Later we’ll show real photos and benchmarks here.
              </div>
            </div>
          </div>
        </div>

        <aside className="rounded-xl border border-black/10 p-5">
          <div className="text-sm opacity-60">Price</div>
          <div className="mt-2 text-lg font-semibold">{pc.price}</div>

          <div className="mt-6 text-sm font-medium">Specs</div>
          <ul className="mt-3 space-y-2 text-sm opacity-80">
            {pc.specs.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
}
