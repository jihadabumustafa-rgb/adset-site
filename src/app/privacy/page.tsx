export default function Privacy() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Privacy Policy</h1>
      <p className="mt-4 text-sm text-zinc-600">
        This Privacy Policy explains how AdSet collects, uses, and protects personal data when you visit our website,
        join our waitlist, or use our services.
      </p>

      <h2 className="mt-8 text-lg font-semibold">Who we are</h2>
      <p className="mt-2 text-sm text-zinc-600">
        AdSet, by Digital Land BV (Genk, Belgium, VAT/BTW 0784.725.050).
      </p>

      <h2 className="mt-8 text-lg font-semibold">Data we collect</h2>
      <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-zinc-600">
        <li><span className="font-medium">Contact data:</span> email address (and optional details you provide).</li>
        <li><span className="font-medium">Website usage data:</span> basic analytics such as pages viewed, device/browser info, and similar technical data.</li>
        <li><span className="font-medium">Support data:</span> information you send us when contacting support.</li>
      </ul>

      <h2 className="mt-8 text-lg font-semibold">How we use data</h2>
      <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-zinc-600">
        <li>Operate the website and provide services.</li>
        <li>Manage the waitlist and send product updates (about once per month).</li>
        <li>Respond to inquiries and provide support.</li>
        <li>Improve security, reliability, and user experience.</li>
      </ul>

      <h2 className="mt-8 text-lg font-semibold">Sharing</h2>
      <p className="mt-2 text-sm text-zinc-600">
        We may use vetted service providers (hosting, analytics, email delivery) strictly to operate AdSet.
        We do not sell personal data.
      </p>

      <h2 className="mt-8 text-lg font-semibold">Retention</h2>
      <p className="mt-2 text-sm text-zinc-600">
        We keep personal data only as long as needed for the purposes described above, then delete or anonymize it.
      </p>

      <h2 className="mt-8 text-lg font-semibold">Your rights</h2>
      <p className="mt-2 text-sm text-zinc-600">
        Depending on your location (including the EU/EEA), you may have rights to access, correct, delete, restrict,
        or object to processing, and to data portability.
      </p>

      <h2 className="mt-8 text-lg font-semibold">Contact</h2>
      <p className="mt-2 text-sm text-zinc-600">
        Email: <a className="underline" href="mailto:info@adset.tech">info@adset.tech</a><br />
        Location: Genk, Belgium
      </p>
    </main>
  );
}
