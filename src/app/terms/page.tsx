// src/app/terms/page.tsx
export default function Terms() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Terms of Service — AdSet</h1>
      <p className="mt-2 text-sm text-zinc-500">Last updated: December 27, 2025</p>

      <p className="mt-6 text-sm leading-relaxed text-zinc-700">
        These Terms of Service (“Terms”) govern your access to and use of the AdSet website and service (“AdSet”, “Service”).
        AdSet is operated by <span className="font-medium">Digital Land BV</span> (Genk, Belgium, VAT/BTW 0784.725.050).
        By accessing or using the Service, you agree to these Terms.
      </p>

      <section className="mt-10 space-y-3">
        <h2 className="text-lg font-semibold">1) Who can use AdSet</h2>
        <p className="text-sm leading-relaxed text-zinc-700">
          AdSet is intended for business users. You must be able to form a binding contract and comply with applicable laws.
          If you use AdSet on behalf of an organization, you represent you have authority to bind that organization.
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-lg font-semibold">2) The Service</h2>
        <p className="text-sm leading-relaxed text-zinc-700">
          AdSet provides tools to organize and analyze marketing performance data within workspaces. Features may change as we improve the Service.
          During development, access may be limited (e.g., invite-only/beta).
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-lg font-semibold">3) Accounts & security</h2>
        <p className="text-sm leading-relaxed text-zinc-700">
          You are responsible for maintaining the confidentiality of your account and for all activity under your account.
          You agree to notify us promptly if you suspect unauthorized access.
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-lg font-semibold">4) Acceptable use</h2>
        <p className="text-sm leading-relaxed text-zinc-700">
          You agree not to misuse the Service. This includes (but is not limited to):
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm text-zinc-700">
          <li>Attempting to gain unauthorized access to systems, accounts, or data</li>
          <li>Interfering with or disrupting the integrity or performance of the Service</li>
          <li>Using the Service to violate laws or third-party rights</li>
          <li>Introducing malware, scraping in a way that harms the Service, or abusing rate limits</li>
          <li>Reverse engineering or attempting to extract source code except to the extent allowed by law</li>
        </ul>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-lg font-semibold">5) Third-party services</h2>
        <p className="text-sm leading-relaxed text-zinc-700">
          The Service may allow you to connect third-party services. Your use of third-party services is governed by their own terms and policies.
          You are responsible for ensuring you have the right to access and use any data you connect to AdSet.
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-lg font-semibold">6) Your content and data</h2>
        <p className="text-sm leading-relaxed text-zinc-700">
          You retain ownership of your data. You grant us a limited right to process your data solely to provide and improve the Service,
          maintain security, and comply with legal obligations. We do not sell your personal data.
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-lg font-semibold">7) Intellectual property</h2>
        <p className="text-sm leading-relaxed text-zinc-700">
          The Service, including its software, design, and branding, is owned by Digital Land BV or its licensors.
          You receive a limited, non-exclusive, non-transferable right to use the Service as permitted by these Terms.
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-lg font-semibold">8) Disclaimers</h2>
        <p className="text-sm leading-relaxed text-zinc-700">
          The Service is provided “as is” and “as available”, to the maximum extent permitted by law.
          We do not warrant uninterrupted or error-free operation, or that results will be accurate for every use case.
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-lg font-semibold">9) Limitation of liability</h2>
        <p className="text-sm leading-relaxed text-zinc-700">
          To the maximum extent permitted by law, Digital Land BV will not be liable for indirect, incidental, special, consequential,
          or punitive damages, or for any loss of profits, revenues, data, or goodwill arising from your use of the Service.
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-lg font-semibold">10) Suspension and termination</h2>
        <p className="text-sm leading-relaxed text-zinc-700">
          We may suspend or terminate access to the Service if you violate these Terms, if required by law, or to protect the Service.
          You may stop using the Service at any time.
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-lg font-semibold">11) Changes to these Terms</h2>
        <p className="text-sm leading-relaxed text-zinc-700">
          We may update these Terms from time to time by posting a new version on this page.
          Changes will apply from the effective date shown above.
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-lg font-semibold">12) Governing law</h2>
        <p className="text-sm leading-relaxed text-zinc-700">
          These Terms are governed by the laws of Belgium, without regard to conflict of law principles.
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-lg font-semibold">13) Contact</h2>
        <p className="text-sm leading-relaxed text-zinc-700">
          Questions about these Terms? Email{" "}
          <a className="underline" href="mailto:info@adset.tech">
            info@adset.tech
          </a>
          .
        </p>
      </section>
    </main>
  );
}
