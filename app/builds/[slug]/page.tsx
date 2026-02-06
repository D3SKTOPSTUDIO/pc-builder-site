import Link from "next/link";

const BUILD_DATA: Record<
  string,
  {
    title: string;
    date: string;
    summary: string;
    specs: string[];
    notes: string[];
  }
> = {
  "rog-high-end": {
    title: "ROG High-End Gaming Build",
    date: "2026 (placeholder)",
    summary: "High performance gaming build with clean cable management and tuned thermals.",
    specs: ["CPU: placeholder", "GPU: placeholder", "RAM: placeholder", "Storage: placeholder"],
    notes: ["Stress tested (placeholder)", "Fan curves tuned (placeholder)", "Windows setup (placeholder)"],
  },
  "white-theme-1440p": {
    title: "White Theme 1440p Build",
    date: "2026 (placeholder)",
    summary: "Clean white aesthetic build focused on 1440p gaming and low noise.",
    specs: ["CPU: placeholder", "GPU: placeholder", "RAM: placeholder", "Storage: placeholder"],
    notes: ["Cable management (placeholder)", "Airflow optimized (placeholder)", "Temps checked (placeholder)"],
  },
  "compact-itx": {
    title: "Compact ITX Build",
    date: "2026 (placeholder)",
    summary: "Small form factor build with balanced thermals and great portability.",
    specs: ["CPU: placeholder", "GPU: placeholder", "RAM: placeholder", "Storage: placeholder"],
    notes: ["SFF thermals tuning (placeholder)", "Noise balanced (placeholder)", "Stability tested (placeholder)"],
  },
};

export default async function BuildDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const build = BUILD_DATA[slug];

  if (!build) {
    return (
      <div className="py-12">
        <h1 className="text-3xl font-semibold tracking-tight">Build not found</h1>
        <p className="mt-3 opacity-80">This build page doesn’t exist.</p>
        <Link href="/builds" className="mt-6 inline-block text-sm opacity-80 hover:opacity-100">
          ← Back to Builds
        </Link>
      </div>
    );
  }

  return (
    <div className="py-12">
      <Link href="/builds" className="text-sm opacity-80 hover:opacity-100">
        ← Back to Builds
      </Link>

      <div className="mt-6">
        <div className="text-sm opacity-60">{build.date}</div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">{build.title}</h1>
        <p className="mt-3 max-w-2xl opacity-80">{build.summary}</p>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="overflow-hidden rounded-xl border border-black/10">
            <div className="aspect-video bg-black/5" />
            <div className="p-4">
              <div className="text-sm opacity-60">Photos placeholder</div>
              <div className="mt-2 text-sm opacity-80">
                Later we’ll show the full photo set and maybe benchmarks.
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-xl border border-black/10 p-5">
            <div className="text-sm font-medium">Build notes</div>
            <ul className="mt-3 space-y-2 text-sm opacity-80">
              {build.notes.map((n) => (
                <li key={n}>• {n}</li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="rounded-xl border border-black/10 p-5">
          <div className="text-sm font-medium">Specs</div>
          <ul className="mt-3 space-y-2 text-sm opacity-80">
            {build.specs.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-black bg-black px-4 py-3 text-sm font-medium text-white hover:opacity-90"
          >
            Request a similar build
          </Link>
        </aside>
      </div>
    </div>
  );
}
