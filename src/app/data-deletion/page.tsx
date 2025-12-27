// src/app/data-deletion/page.tsx
export default function DataDeletion() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">User Data Deletion Instructions — AdSet</h1>
      <p className="mt-2 text-sm text-zinc-500">Last updated: December 27, 2025</p>

      <p className="mt-6 text-sm leading-relaxed text-zinc-700">
        AdSet is operated by <span className="font-medium">Digital Land BV</span> (Genk, Belgium, VAT/BTW 0784.725.050).
        This page explains how you can request deletion of your personal data.
      </p>

      <section className="mt-10 space-y-3">
        <h2 className="text-lg font-semibold">Option A — Request deletion by email</h2>
        <p className="text-sm leading-relaxed text-zinc-700">
          Email{" "}
          <a className="underline" href="mailto:info@adset.tech">
            info@adset.tech
          </a>{" "}
          with the subject line <span className="font-medium">“Data Deletion Request”</span> and include:
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm text-zinc-700">
          <li>The email address you used with AdSet</li>
          <li>Your workspace/company name (if known)</li>
          <li>If applicable, any identifiers that help us locate your account (do not include passwords)</li>
        </ul>
        <p className="text-sm leading-relaxed text-zinc-700">
          We may ask for additional information to verify your identity before deleting data. We typically complete deletion or anonymization
          within <span className="font-medium">30 days</span>, unless a longer period is required by law.
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-lg font-semibold">Option B — Remove AdSet access from third-party settings</h2>
        <p className="text-sm leading-relaxed text-zinc-700">
          If you connected AdSet using a third-party login or permissions, you can also remove AdSet’s access from your account settings
          on that third-party service. Removing access may prevent further data access going forward.
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-lg font-semibold">What we delete</h2>
        <p className="text-sm leading-relaxed text-zinc-700">
          Upon a valid deletion request, we delete or anonymize personal data associated with your AdSet account, including waitlist and support
          communications where applicable, unless retention is required by law or for legitimate interests (e.g., security, fraud prevention,
          or compliance).
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-lg font-semibold">Contact</h2>
        <p className="text-sm leading-relaxed text-zinc-700">
          For deletion requests or questions, contact{" "}
          <a className="underline" href="mailto:info@adset.tech">
            info@adset.tech
          </a>
          .
        </p>
      </section>
    </main>
  );
}
