export default function Cookies() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Cookie Policy</h1>
      <p className="mt-4 text-sm text-zinc-600">
        We use cookies and similar technologies to run the website reliably, understand basic usage, and improve performance.
      </p>

      <h2 className="mt-8 text-lg font-semibold">Types of cookies</h2>
      <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-zinc-600">
        <li><span className="font-medium">Necessary:</span> required for core functionality.</li>
        <li><span className="font-medium">Analytics:</span> helps us understand how visitors use the site.</li>
        <li><span className="font-medium">Preferences:</span> saves settings (if applicable).</li>
      </ul>

      <h2 className="mt-8 text-lg font-semibold">Manage cookies</h2>
      <p className="mt-2 text-sm text-zinc-600">
        You can control cookies in your browser settings. If we implement a cookie banner, you will be able to manage consent there.
      </p>
    </main>
  );
}
