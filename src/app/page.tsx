import WaitlistForm from "@/components/WaitlistForm";

export default function Home() {
  return (
    <main>
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
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold">Performance Snapshot</div>
                <div className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-[11px] font-medium text-zinc-600">
                  Private beta
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-zinc-200 p-4">
                <div className="text-xs text-zinc-500">Account</div>
                <div className="mt-1 text-base font-semibold tracking-tight">Your ad account</div>
                <div className="mt-3 flex items-center gap-2">
                  <span className="rounded-full bg-emerald-50 px-2 py-1 text-[11px] font-medium text-emerald-700">
                    Healthy delivery
                  </span>
                  <span className="rounded-full bg-zinc-100 px-2 py-1 text-[11px] font-medium text-zinc-700">
                    Last 7 days
                  </span>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <Kpi label="Spend" value="$12,480" sub="+14% WoW" />
                <Kpi label="Purchases" value="312" sub="+9% WoW" />
                <Kpi label="ROAS" value="4.2" sub="Stable" />
                <Kpi label="CTR" value="1.18%" sub="+0.11" />
              </div>

              <div className="mt-4 rounded-2xl border border-zinc-200 p-4">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-medium text-zinc-700">Trend</div>
                  <div className="text-[11px] text-zinc-500">Daily</div>
                </div>

                <div className="mt-3 grid grid-cols-12 items-end gap-1">
                  <Bar h="h-4" />
                  <Bar h="h-5" />
                  <Bar h="h-3" />
                  <Bar h="h-6" />
                  <Bar h="h-7" />
                  <Bar h="h-6" />
                  <Bar h="h-8" />
                  <Bar h="h-7" />
                  <Bar h="h-9" />
                  <Bar h="h-8" />
                  <Bar h="h-10" />
                  <Bar h="h-9" />
                </div>

                <div className="mt-3 text-xs text-zinc-500">
                  Clean KPIs, fast comparisons, and consistent reporting.
                </div>
              </div>
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

            <WaitlistForm />
          </div>
        </div>
      </section>
    </main>
  );
}

function Kpi({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-4">
      <div className="text-xs text-zinc-500">{label}</div>
      <div className="mt-1 text-lg font-semibold tracking-tight">{value}</div>
      <div className="mt-1 text-[11px] text-zinc-500">{sub}</div>
    </div>
  );
}

function Bar({ h }: { h: string }) {
  return <div className={`w-full rounded bg-zinc-200 ${h}`} />;
}
