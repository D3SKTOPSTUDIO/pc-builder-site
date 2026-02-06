import Link from "next/link";

export default function PCsPage() {
  return (
    <div className="py-12">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">PCs for Sale</h1>
          <p className="mt-3 max-w-2xl opacity-80">
            Current builds available from D3SKTOP STUDIO. Enquire to reserve.
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
        <div className="rounded-lg border border-black/10 p-4">
          <div className="text-sm opacity-60">Available</div>
          <div className="mt-2 font-medium">Starter Gaming PC</div>
          <div className="mt-1 text-sm opacity-80">
            CPU/GPU/RAM/Storage placeholders
          </div>
          <div className="mt-4 text-sm font-medium">$0 (placeholder)</div>
        </div>

        <div className="rounded-lg border border-black/10 p-4">
          <div className="text-sm opacity-60">Available</div>
          <div className="mt-2 font-medium">Creator Workstation</div>
          <div className="mt-1 text-sm opacity-80">
            CPU/GPU/RAM/Storage placeholders
          </div>
          <div className="mt-4 text-sm font-medium">$0 (placeholder)</div>
        </div>

        <div className="rounded-lg border border-black/10 p-4">
          <div className="text-sm opacity-60">Sold</div>
          <div className="mt-2 font-medium">High-End ROG Build</div>
          <div className="mt-1 text-sm opacity-80">
            CPU/GPU/RAM/Storage placeholders
          </div>
          <div className="mt-4 text-sm font-medium">$0 (placeholder)</div>
        </div>
      </div>
    </div>
  );
}
