export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <header className="mx-auto max-w-6xl px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="text-lg font-semibold tracking-tight">AdSet</div>

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

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700">
              Unified performance analytics • Built for agencies & teams
            </div>

            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              One place for your
              <br />
              performance answers.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-600">
              AdSet helps marketing teams bring reporting into one workspace, track outcomes,
              and move faster—without messy spreadsheets.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#waitlist"
                className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800"
              >
                Join the waitlist
              </a>
              <span
                aria-disabled="true"
                className="cursor-not-allowed inline-flex items-center justify-center rounded-xl border border-zinc-200 px-5 py-3 text-sm font-medium text-zinc-400"
                title="Coming soon"
              >
                Product tour
              </span>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6 text-sm">
              <div className="rounded-2xl border border-zinc-200 p-5">
                <div className="text-zinc-500">For</div>
                <div className="mt-2 font-semibold">Agencies & growth teams</div>
              </div>
              <div className="rounded-2xl border border-zinc-200 p-5">
                <div className="text-zinc-500">Focus</div>
                <div className="mt-2 font-semibold">Clarity, speed, control</div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6">
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold">Preview</div>
                <div className="text-xs text-zinc-500">Invite-only</div>
              </div>

              <div className="mt-5 grid gap-3">
                <div className="rounded-xl border border-zinc-200 p-4">
                  <div className="text-xs text-zinc-500">Account</div>
                  <div className="mt-1 font-medium">Your ad account</div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <Stat label="Spend" value="—" />
                  <Stat label="Impressions" value="—" />
                  <Stat label="Clicks" value="—" />
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <Stat label="CTR" value="—" />
                  <Stat label="CPM" value="—" />
                  <Stat label="CPC" value="—" />
                </div>

                <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-xs text-zinc-600">
                  No account details are shown publicly. Product access is invite-only during development.
                </div>
              </div>
            </div>

            <div className="mt-6 text-xs text-zinc-500">
              Marketing preview only. Dashboard buttons are intentionally disabled.
            </div>
          </div>
        </div>
      </section>

      <section id="waitlist" className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-3xl border border-zinc-200 bg-white p-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="text-xl font-semibold tracking-tight">Join the waitlist</div>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                Get early access updates (about once per month). We only need your email.
              </p>
            </div>

            <form action="/api/waitlist" method="post" className="flex flex-col gap-3">
              {/* honeypot (spam trap) */}
              <input
                name="company"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
              />

              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm outline-none focus:border-zinc-400"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800"
                >
                  Join
                </button>
              </div>

              <label className="flex items-start gap-2 text-xs text-zinc-600">
                <input type="checkbox" name="consent" required className="mt-0.5" />
                <span>
                  I agree to receive product updates (about once per month). I can unsubscribe anytime.
                  See{" "}
                  <a className="underline" href="/privacy">
                    Privacy Policy
                  </a>
                  .
                </span>
              </label>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-zinc-600">© {new Date().getFullYear()} AdSet</div>
          <div className="flex flex-wrap gap-4 text-sm">
            <a className="text-zinc-600 hover:text-zinc-900" href="/privacy">Privacy</a>
            <a className="text-zinc-600 hover:text-zinc-900" href="/terms">Terms</a>
            <a className="text-zinc-600 hover:text-zinc-900" href="/cookies">Cookies</a>
            <a className="text-zinc-600 hover:text-zinc-900" href="/imprint">Imprint</a>
            <a className="text-zinc-600 hover:text-zinc-900" href="/data-deletion">Data Deletion</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-4">
      <div className="text-xs text-zinc-500">{label}</div>
      <div className="mt-1 text-sm font-semibold">{value}</div>
    </div>
  );
}
