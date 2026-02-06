import { Card } from "@/components/Card";

export default function BuildsPage() {
  const builds = [
    { slug: "rog-high-end", title: "ROG High-End Gaming Build", subtitle: "Featured build" },
    { slug: "white-theme-1440p", title: "White Theme 1440p Build", subtitle: "Clean aesthetic" },
    { slug: "compact-itx", title: "Compact ITX Build", subtitle: "Small form factor" },
  ] as const;

  return (
    <div className="py-12">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Builds</h1>
          <p className="mt-3 max-w-2xl opacity-80">
            A few examples of builds from D3SKTOP STUDIO. Click a build to view details.
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {builds.map((b) => (
          <Card
            key={b.slug}
            title={b.title}
            subtitle={b.subtitle}
            href={`/builds/${b.slug}`}
          />
        ))}
      </div>
    </div>
  );
}
