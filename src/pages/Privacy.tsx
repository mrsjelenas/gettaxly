import { useEffect } from "react";

export default function Privacy() {
  useEffect(() => {
    document.title = "Privacy Policy | Taxly UK";
  }, []);

  return (
    <div className="w-full bg-background pt-28 pb-20">
      <article className="container mx-auto max-w-3xl px-4 prose prose-invert">
        <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground mb-10">Last updated: April 2026</p>

        <section className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            Taxly ("we", "our", "us") is an independent UK service that helps self-employed gig drivers
            understand and file their Self-Assessment with HMRC. This policy explains what personal data we
            collect, why we collect it, and your rights under the UK GDPR and the Data Protection Act 2018.
          </p>

          <h2 className="text-2xl font-semibold text-white">1. Who we are</h2>
          <p>
            Taxly is a trading name operating in the United Kingdom. If you have any questions about this
            policy or your data, contact us at <a className="text-primary" href="mailto:hello@taxly.co.uk">hello@taxly.co.uk</a>.
          </p>

          <h2 className="text-2xl font-semibold text-white">2. What we collect</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-white">Contact details</strong> — name, email and (optionally) phone number when you message us or sign up.</li>
            <li><strong className="text-white">Tax information</strong> — earnings, expenses and platform details you choose to share with our tax helper.</li>
            <li><strong className="text-white">Payment data</strong> — card payments are processed by our payment provider (Stripe). We do not store full card numbers on our servers.</li>
            <li><strong className="text-white">Technical data</strong> — basic browser data (IP address, device type) and one or two essential cookies for language and session.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white">3. Why we use it</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To answer your questions and provide a tax estimate.</li>
            <li>To prepare and file your Self-Assessment with HMRC, when you ask us to.</li>
            <li>To take payment and send a receipt.</li>
            <li>To meet our legal record-keeping obligations (HMRC require records to be kept for at least 5 years after the 31 January submission deadline).</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white">4. Who we share it with</h2>
          <p>
            We never sell your data. We share it only with: HMRC (for filing), our regulated UK accountants
            (for review), our payment processor (Stripe), and our hosting and email providers — all under
            strict data-processing agreements.
          </p>

          <h2 className="text-2xl font-semibold text-white">5. Your rights</h2>
          <p>
            You have the right to access, correct, export or delete your personal data. To exercise any of
            these rights, email <a className="text-primary" href="mailto:hello@taxly.co.uk">hello@taxly.co.uk</a>.
            You can also complain to the UK Information Commissioner's Office (ICO) at{" "}
            <a className="text-primary" href="https://ico.org.uk" target="_blank" rel="noreferrer">ico.org.uk</a>.
          </p>

          <h2 className="text-2xl font-semibold text-white">6. Security</h2>
          <p>
            All traffic to and from this site is encrypted via HTTPS. Sensitive data is stored on UK/EU servers
            and access is restricted to authorised staff.
          </p>

          <h2 className="text-2xl font-semibold text-white">7. Changes</h2>
          <p>
            We may update this policy from time to time. The date at the top of this page will always show the
            most recent version.
          </p>
        </section>
      </article>
    </div>
  );
}
