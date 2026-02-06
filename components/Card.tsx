import Link from "next/link";
import type { ReactNode } from "react";

export function Card({
  title,
  subtitle,
  href,
  meta,
  children,
}: {
  title: string;
  subtitle?: string;
  href?: string;
  meta?: string; // e.g. price or status
  children?: ReactNode;
}) {
  const content = (
    <div className="overflow-hidden rounded-xl border border-black/10 hover:border-black/30">
      <div className="aspect-video bg-black/5" />
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="text-sm opacity-60">{subtitle ?? "Placeholder"}</div>
          {meta ? <div className="text-sm font-medium">{meta}</div> : null}
        </div>

        <div className="mt-2 font-medium">{title}</div>

        {children ? (
          <div className="mt-2 text-sm opacity-80">{children}</div>
        ) : (
          <div className="mt-2 text-sm opacity-80">CPU • GPU • RAM • Storage</div>
        )}

        {href ? <div className="mt-3 text-sm opacity-70">View details →</div> : null}
      </div>
    </div>
  );

  return href ? (
    <Link href={href} className="block">
      {content}
    </Link>
  ) : (
    content
  );
}
