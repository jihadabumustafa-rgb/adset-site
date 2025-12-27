import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "AdSet",
  description: "Unified performance analytics for agencies & teams.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-zinc-900">
        <header className="mx-auto max-w-6xl px-6 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-lg font-semibold tracking-tight">
              AdSet
            </Link>

            <div className="flex items-center gap-3">
              <span
                aria-disabled="true"
                className="cursor-not-allowed rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-400"
                title="Coming soon"
              >
                Dashboard
              </span>
              <span
                aria-disabled="true"
                className="cursor-not-allowed rounded-full bg-zinc-200 px-4 py-2 text-sm font-medium text-zinc-500"
                title="Coming soon"
              >
                Sign in
              </span>
            </div>
          </div>
        </header>

        {children}

        <footer className="border-t border-zinc-200">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm text-zinc-600">© {new Date().getFullYear()} AdSet</div>
            <div className="flex flex-wrap gap-4 text-sm">
              <Link className="text-zinc-600 hover:text-zinc-900" href="/privacy">Privacy</Link>
              <Link className="text-zinc-600 hover:text-zinc-900" href="/terms">Terms</Link>
              <Link className="text-zinc-600 hover:text-zinc-900" href="/cookies">Cookies</Link>
              <Link className="text-zinc-600 hover:text-zinc-900" href="/imprint">Imprint</Link>
              <Link className="text-zinc-600 hover:text-zinc-900" href="/data-deletion">Data Deletion</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
