import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-3 max-w-2xl opacity-80">
        The page you’re looking for doesn’t exist (or it was moved).
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-md border border-black px-4 py-3 text-sm font-medium hover:opacity-90"
        >
          Go home
        </Link>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-md border border-black/20 px-4 py-3 text-sm font-medium hover:opacity-90"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
