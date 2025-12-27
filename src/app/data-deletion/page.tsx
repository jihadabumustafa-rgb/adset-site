export default function DataDeletion() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">User Data Deletion Instructions</h1>
      <p className="mt-4 text-sm text-zinc-600">
        If you want AdSet to delete your personal data, please email{" "}
        <a className="underline" href="mailto:info@adset.tech">info@adset.tech</a>{" "}
        with the subject <span className="font-medium">“Data Deletion Request”</span> and include:
      </p>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-600">
        <li>The email address you used with AdSet</li>
        <li>Your workspace/company name (if known)</li>
      </ul>
      <p className="mt-6 text-sm text-zinc-600">
        We will verify the request and delete or anonymize your data as required by law and platform requirements.
      </p>
    </main>
  );
}
