// src/app/cookies/page.tsx
export default function Cookies() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Cookie Policy — AdSet</h1>
      <p className="mt-2 text-sm text-zinc-500">Last updated: December 27, 2025</p>

      <p className="mt-6 text-sm leading-relaxed text-zinc-700">
        This Cookie Policy explains how AdSet (“we”, “us”, “our”) uses cookies and similar technologies on{" "}
        <span className="font-medium">adset.tech</span>.
      </p>

      <section className="mt-10 space-y-3">
        <h2 className="text-lg font-semibold">What are cookies?</h2>
        <p className="text-sm leading-relaxed text-zinc-700">
          Cookies are small text files stored on your device when you visit a website. Similar technologies (like local storage) may also be
          used for related purposes.
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-lg font-semibold">How we use cookies</h2>
        <p className="text-sm leading-relaxed text-zinc-700">
          We use cookies to:
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm text-zinc-700">
          <li>Run the website reliably and securely</li>
          <li>Remember basic preferences (where applicable)</li>
          <li>Understand site usage and improve performance (analytics)</li>
          <li>Prevent abuse and protect the Service</li>
        </ul>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-lg font-semibold">Types of cookies</h2>
        <ul className="list-disc space-y-2 pl-5 text-sm text-zinc-700">
          <li>
            <span className="font-medium">Strictly necessary</span>: required for core website functionality and security.
          </li>
          <li>
            <span className="font-medium">Analytics</span>: helps us understand how visitors use the site so we can improve it.
          </li>
          <li>
            <span className="font-medium">Preferences</span>: stores settings you choose (if applicable).
          </li>
        </ul>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-lg font-semibold">Managing cookies</h2>
        <p className="text-sm leading-relaxed text-zinc-700">
          You can control cookies through your browser settings. You can delete existing cookies and set your browser to block cookies.
          Note that blocking some cookies may impact site functionality.
        </p>
        <p className="text-sm leading-relaxed text-zinc-700">
          If we implement a cookie consent banner, you will be able to manage analytics/optional cookies through that banner.
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-lg font-semibold">Contact</h2>
        <p className="text-sm leading-relaxed text-zinc-700">
          Questions? Email{" "}
          <a className="underline" href="mailto:info@adset.tech">
            info@adset.tech
          </a>
          .
        </p>
      </section>
    </main>
  );
}
