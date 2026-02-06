export default function BuildsPage() {
  return (
    <div className="py-12">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Builds</h1>
          <p className="mt-3 max-w-2xl opacity-80">
            A few examples of builds from D3SKTOP STUDIO. Photos and full specs coming soon.
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="overflow-hidden rounded-xl border border-black/10">
            <div className="aspect-video bg-black/5" />
            <div className="p-4">
              <div className="text-sm opacity-60">Build #{i + 1}</div>
              <div className="mt-2 font-medium">Title placeholder</div>
              <div className="mt-1 text-sm opacity-80">
                CPU • GPU • RAM • Storage
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
