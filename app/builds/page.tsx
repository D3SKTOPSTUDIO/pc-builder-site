export default function BuildsPage() {
  return (
    <div className="py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Builds</h1>
      <p className="mt-3 max-w-2xl opacity-80">
        Gallery of my past PC builds will go here.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border border-black/10 p-4">
          <div className="text-sm opacity-60">Placeholder</div>
          <div className="mt-2 font-medium">Build #1</div>
          <div className="mt-1 text-sm opacity-80">Specs + photo later</div>
        </div>

        <div className="rounded-lg border border-black/10 p-4">
          <div className="text-sm opacity-60">Placeholder</div>
          <div className="mt-2 font-medium">Build #2</div>
          <div className="mt-1 text-sm opacity-80">Specs + photo later</div>
        </div>

        <div className="rounded-lg border border-black/10 p-4">
          <div className="text-sm opacity-60">Placeholder</div>
          <div className="mt-2 font-medium">Build #3</div>
          <div className="mt-1 text-sm opacity-80">Specs + photo later</div>
        </div>
      </div>
    </div>
  );
}
