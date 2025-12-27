// src/app/privacy/page.tsx
export default function Privacy() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Privacy Policy — AdSet</h1>
      <p className="mt-2 text-sm text-zinc-500">Last updated: December 27, 2025</p>

      <p className="mt-6 text-sm leading-relaxed text-zinc-700">
        This Privacy Policy explains how <span className="font-medium">AdSet</span>, operated by{" "}
        <span className="font-medium">Digital Land BV</span> (“AdSet”, “we”, “us”, “our”), collects,
        uses, shares, and protects personal data when you visit <span className="font-medium">adset.tech</span>,
        join our waitlist, or use our services.
      </p>

      <section className="mt-10 space-y-3">
        <h2 className="text-lg font-semibold">Controller</h2>
        <div className="text-sm text-zinc-700">
          <div>AdSet, by Digital Land BV</div>
          <div>Genk, Belgium</div>
          <div>VAT/BTW: 0784.725.050</div>
          <div>
            Contact:{" "}
            <a className="underline" href="mailto:info@adset.tech">
              info@adset.tech
            </a>
          </div>
        </div>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-lg font-semibold">1) Scope</h2>
        <p className="text-sm leading-relaxed text-zinc-700">
          This policy applies to visitors of <span className="font-medium">adset.tech</span>, people who join our waitlist,
          and users of the AdSet service (as available).
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-lg font-semibold">2) Data we collect</h2>
        <p className="text-sm leading-relaxed text-zinc-700">
          We collect the minimum data needed to operate the site and service.
        </p>

        <h3 className="mt-4 text-sm font-semibold text-zinc-900">A. Waitlist and communications</h3>
        <ul className="list-disc space-y-2 pl-5 text-sm text-zinc-700">
          <li>Email address</li>
          <li>Any optional details you choose to provide (e.g., name/company)</li>
        </ul>

        <h3 className="mt-6 text-sm font-semibold text-zinc-900">B. Account and service usage (when you use AdSet)</h3>
        <ul className="list-disc space-y-2 pl-5 text-sm text-zinc-700">
          <li>Account identifiers needed to provide access to the service (e.g., user ID, workspace membership)</li>
          <li>Configuration you create inside the product (e.g., workspace settings)</li>
          <li>
            Data you authorize us to access from third-party services you connect to AdSet (e.g., advertising account identifiers and
            performance metrics).
            <span className="block mt-2 text-zinc-600">
              Note: we do not display or publish your private account data publicly.
            </span>
          </li>
        </ul>

        <h3 className="mt-6 text-sm font-semibold text-zinc-900">C. Support and contact</h3>
        <ul className="list-disc space-y-2 pl-5 text-sm text-zinc-700">
          <li>Messages you send us and related contact details</li>
        </ul>

        <h3 className="mt-6 text-sm font-semibold text-zinc-900">D. Technical and security data</h3>
        <ul className="list-disc space-y-2 pl-5 text-sm text-zinc-700">
          <li>IP address, device/browser information, and basic logs used for security, reliability, and abuse prevention</li>
          <li>Website analytics data (aggregated where possible)</li>
        </ul>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-lg font-semibold">3) How we use your data (purposes)</h2>
        <ul className="list-disc space-y-2 pl-5 text-sm text-zinc-700">
          <li>Provide and operate the website and AdSet service</li>
          <li>Manage the waitlist and send product updates (about once per month) and important service notices</li>
          <li>Respond to inquiries and provide customer support</li>
          <li>Improve performance, reliability, and user experience</li>
          <li>Maintain security, prevent fraud, and enforce our Terms</li>
        </ul>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-lg font-semibold">4) Legal bases (EEA/UK GDPR)</h2>
        <p className="text-sm leading-relaxed text-zinc-700">
          Depending on the context, we process personal data under one or more of:
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm text-zinc-700">
          <li><span className="font-medium">Consent</span> (e.g., waitlist emails)</li>
          <li><span className="font-medium">Contract</span> (to provide the service you request)</li>
          <li><span className="font-medium">Legitimate interests</span> (security, service improvements, preventing abuse)</li>
          <li><span className="font-medium">Legal obligations</span> (where applicable)</li>
        </ul>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-lg font-semibold">5) How we share data</h2>
        <p className="text-sm leading-relaxed text-zinc-700">
          We may share data with vetted service providers that help us operate AdSet (e.g., hosting, email delivery, analytics, security).
          These providers are authorized to process data only on our instructions and for the purposes described in this policy.
        </p>
        <p className="text-sm leading-relaxed text-zinc-700">
          We do not sell personal data.
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-lg font-semibold">6) International transfers</h2>
        <p className="text-sm leading-relaxed text-zinc-700">
          If we transfer personal data outside the EEA/UK, we use appropriate safeguards where required (such as contractual protections).
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-lg font-semibold">7) Retention</h2>
        <p className="text-sm leading-relaxed text-zinc-700">
          We keep personal data only as long as needed for the purposes described above, then delete or anonymize it unless a longer
          retention period is required by law.
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-lg font-semibold">8) Your rights</h2>
        <p className="text-sm leading-relaxed text-zinc-700">
          Depending on your location (including the EU/EEA), you may have rights to access, correct, delete, restrict, or object to
          processing, and to data portability. To exercise your rights, contact us at{" "}
          <a className="underline" href="mailto:info@adset.tech">
            info@adset.tech
          </a>
          .
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-lg font-semibold">9) Security</h2>
        <p className="text-sm leading-relaxed text-zinc-700">
          We use reasonable technical and organizational measures to protect personal data. No method of transmission or storage is
          completely secure.
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-lg font-semibold">10) Children</h2>
        <p className="text-sm leading-relaxed text-zinc-700">
          AdSet is intended for business users and is not directed to children. We do not knowingly collect personal data from children.
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-lg font-semibold">11) Changes</h2>
        <p className="text-sm leading-relaxed text-zinc-700">
          We may update this Privacy Policy from time to time by posting a new version on this page.
        </p>
      </section>
    </main>
  );
}
