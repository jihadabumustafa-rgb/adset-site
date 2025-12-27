// src/app/imprint/page.tsx
export default function Imprint() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Imprint / Legal Notice — AdSet</h1>
      <p className="mt-2 text-sm text-zinc-500">Last updated: December 27, 2025</p>

      <section className="mt-10 space-y-3">
        <h2 className="text-lg font-semibold">Service</h2>
        <p className="text-sm leading-relaxed text-zinc-700">
          AdSet is a website and software service operated by Digital Land BV.
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-lg font-semibold">Operator</h2>
        <div className="text-sm text-zinc-700">
          <div className="font-medium">Digital Land BV</div>
          <div>Genk, Belgium</div>
          <div>VAT/BTW: 0784.725.050</div>
          <div className="mt-2">
            Email:{" "}
            <a className="underline" href="mailto:info@adset.tech">
              info@adset.tech
            </a>
          </div>
        </div>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-lg font-semibold">Responsible for content</h2>
        <p className="text-sm leading-relaxed text-zinc-700">
          Digital Land BV (contact: <a className="underline" href="mailto:info@adset.tech">info@adset.tech</a>).
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-lg font-semibold">Disclaimer</h2>
        <p className="text-sm leading-relaxed text-zinc-700">
          We make reasonable efforts to keep information on this website accurate and up to date. However, we do not guarantee completeness
          or accuracy. Use of this website is at your own risk, to the extent permitted by law.
        </p>
      </section>
    </main>
  );
}
