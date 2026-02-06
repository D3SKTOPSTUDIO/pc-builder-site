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
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="border-b border-black/10">
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
        <main className="mx-auto max-w-5xl px-6">{children}</main>
        <footer className="mt-16 border-t border-black/10">
          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-6 py-6 text-sm opacity-80">
            <span>© {new Date().getFullYear()} D3SKTOP STUDIO</span>
            <span>Custom PC building & upgrades</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
