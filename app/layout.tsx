import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "D3SKTOP STUDIO — Custom PC Builds",
  description:
    "D3SKTOP STUDIO builds custom gaming PCs and workstations, upgrades parts, and tunes thermals and noise.",
  openGraph: {
    title: "D3SKTOP STUDIO — Custom PC Builds",
    description:
      "Custom gaming PCs and workstations. Upgrades, thermals/noise tuning, and clean cable management.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "D3SKTOP STUDIO — Custom PC Builds",
    description:
      "Custom gaming PCs and workstations. Upgrades, thermals/noise tuning, and clean cable management.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/yok2lhd.css" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          background: "var(--bg)",
          color: "var(--fg)",
        }}
      >
        <nav className="border-b" style={{ borderColor: "var(--border)" }}>
          <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-inherit no-underline"
            >
              <Image
                src="/logo.png"
                alt="D3SKTOP STUDIO PNG logo"
                width={32}
                height={32}
              />
              <span className="font-semibold tracking-tight">
                D3SKTOP STUDIO
              </span>
            </Link>

            <div className="flex items-center gap-6 text-sm">
              <Link href="/services" className="opacity-80 hover:opacity-100">
                Services
              </Link>
              <Link href="/builds" className="opacity-80 hover:opacity-100">
                Builds
              </Link>
              <Link href="/pcs" className="opacity-80 hover:opacity-100">
                PCs
              </Link>
              <Link href="/contact" className="opacity-80 hover:opacity-100">
                Contact
              </Link>
            </div>
          </div>
        </nav>
        <main className="mx-auto max-w-5xl px-6">
          <div
            className="my-10 rounded-2xl border shadow-sm"
            style={{
              background: "var(--surface)",
              color: "var(--surface-fg)",
              borderColor: "var(--surface-border)",
            }}
          >
            <div className="p-6 sm:p-8">{children}</div>
          </div>
        </main>

        <footer
          className="mt-16 border-t"
          style={{ borderColor: "var(--border)" }}
        >
          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-6 py-6 text-sm opacity-80">
            <span>© {new Date().getFullYear()} D3SKTOP STUDIO</span>
            <span>Custom PC building & upgrades</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
