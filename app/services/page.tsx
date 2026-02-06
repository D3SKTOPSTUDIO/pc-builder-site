export default function ServicesPage() {
  return (
    <div className="py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Services</h1>
      <p className="mt-3 max-w-2xl opacity-80">
        What D3SKTOP STUDIO can do for you.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-black/10 p-5">
          <h2 className="font-semibold">Custom PC Builds</h2>
          <p className="mt-2 text-sm opacity-80">
            Parts advice, full assembly, BIOS setup, stress testing, and clean cable
            management.
          </p>
        </div>

        <div className="rounded-xl border border-black/10 p-5">
          <h2 className="font-semibold">Upgrades</h2>
          <p className="mt-2 text-sm opacity-80">
            CPU/GPU/RAM/SSD upgrades, Windows refresh, drivers, and performance tuning.
          </p>
        </div>

        <div className="rounded-xl border border-black/10 p-5">
          <h2 className="font-semibold">Thermals & Noise</h2>
          <p className="mt-2 text-sm opacity-80">
            Fan curves, airflow improvements, repaste, and quieter builds.
          </p>
        </div>

        <div className="rounded-xl border border-black/10 p-5">
          <h2 className="font-semibold">Diagnostics</h2>
          <p className="mt-2 text-sm opacity-80">
            Troubleshooting boot issues, crashes, overheating, and stability problems.
          </p>
        </div>
      </div>
    </div>
  );
}
