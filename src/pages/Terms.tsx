import { useEffect } from "react";

export default function Terms() {
  useEffect(() => {
    document.title = "Terms of Service | Taxly UK";
  }, []);

  return (
    <div className="w-full bg-background pt-28 pb-20">
      <article className="container mx-auto max-w-3xl px-4">
        <h1 className="text-4xl font-bold text-white mb-2">Terms of Service</h1>
        <p className="text-muted-foreground mb-10">Last updated: April 2026</p>

        <section className="space-y-6 text-muted-foreground leading-relaxed">
          <h2 className="text-2xl font-semibold text-white">1. Agreement</h2>
          <p>
            By placing an order, ticking the consent box at checkout, or otherwise paying any fee to
            Taxly ("we", "us", "our"), you ("the Client") confirm that you have read, understood and
            agree to be legally bound by these Terms of Service. These Terms form the entire agreement
            between you and Taxly and supersede any prior representations.
          </p>

          <h2 className="text-2xl font-semibold text-white">2. Our service</h2>
          <p>
            Taxly is an independent UK service that helps self-employed gig drivers prepare and file
            their Self-Assessment tax return with HMRC. We are not HMRC and we are not affiliated with
            Uber, Bolt, Deliveroo, Amazon Flex or any other platform. On the Starter plan we provide an
            estimate only. On the Standard and Pro plans, a qualified UK accountant reviews and files
            your return with HMRC. All output from our online tax helper is guidance only — your final
            return is always reviewed by a human before submission.
          </p>

          <h2 className="text-2xl font-semibold text-white">3. Pricing and payment</h2>
          <p>
            All prices are quoted in GBP and shown on our Pricing page. Each fee is a <strong className="text-white">one-off
            charge per Self-Assessment year</strong>. There is no subscription, no auto-renewal, and no
            recurring billing. Payment is taken securely via Stripe at the moment you confirm your
            order. The Pro tier is quoted "from" — a full quote is sent before any work begins, and
            no additional fee is charged without your prior written agreement.
          </p>

          <h2 className="text-2xl font-semibold text-white">4. Cancellations and refunds</h2>
          <p className="text-white font-semibold">
            Please read this section carefully. By ticking "I agree to the Terms" at checkout, you
            acknowledge and accept the following:
          </p>
          <p>
            <strong className="text-white">4.1 Express request to begin work immediately.</strong> Our
            service is digital and is performed on demand. By placing an order you expressly request
            that we begin performing the service immediately and you acknowledge that, under regulation
            36(1) of the Consumer Contracts (Information, Cancellation and Additional Charges)
            Regulations 2013, your statutory 14-day right to cancel will be lost as soon as the service
            has been fully performed (and is reduced proportionally for partial performance).
          </p>
          <p>
            <strong className="text-white">4.2 What "starting work" means.</strong> We treat work as
            having started as soon as <em>any</em> of the following occurs: (a) you submit any income,
            expense or personal information through our chat, forms or upload tools; (b) we send your
            intake questionnaire or any preparatory document; (c) an accountant is assigned to your
            file; or (d) seven (7) days have passed since payment. Once work has started, all fees are
            <strong className="text-white"> strictly non-refundable</strong>, in whole or in part.
          </p>
          <p>
            <strong className="text-white">4.3 Before work has started.</strong> If you change your
            mind <em>and</em> none of the events in clause 4.2 has occurred, you may request a full
            refund within 14 days of payment by emailing{" "}
            <a className="text-primary" href="mailto:hello@taxly.co.uk">hello@taxly.co.uk</a>.
            Refunds are processed within 14 days via the original payment method, less any
            non-recoverable payment-processing fees charged to us by Stripe.
          </p>
          <p>
            <strong className="text-white">4.4 No refund for client-caused failure.</strong> No refund
            is due if HMRC rejects, queries, fines or penalises a return because of information you
            withheld, supplied late or supplied incorrectly; because you missed a deadline despite our
            reminders; because you failed to respond to our requests for information; or because you
            cancelled access to your Government Gateway, bank feed or platform statements.
          </p>
          <p>
            <strong className="text-white">4.5 No refund for change of mind after delivery.</strong>{" "}
            Once your draft return, advice document or filing confirmation has been delivered to you,
            no refund will be made on the grounds that you "no longer need" the service or have chosen
            another accountant.
          </p>
          <p>
            <strong className="text-white">4.6 Chargeback waiver.</strong> You agree not to initiate a
            payment-card chargeback for any reason covered by clauses 4.1–4.5. We will dispute any such
            chargeback with full evidence of your acceptance of these Terms (timestamped checkout
            consent, account log-ins and message history). Costs reasonably incurred by us in
            defending an unjustified chargeback may be recovered from you.
          </p>

          <h2 className="text-2xl font-semibold text-white">5. Your responsibilities</h2>
          <p>
            You are solely responsible for the accuracy, completeness and lawfulness of every piece of
            information you give us. We rely entirely on what you tell us to prepare your return.
            Knowingly providing false information to HMRC is a criminal offence under the Finance Act
            and may carry penalties including imprisonment. You agree to keep your supporting records
            (mileage logs, app statements, receipts) for at least 5 years after the 31 January
            submission deadline, as required by HMRC.
          </p>

          <h2 className="text-2xl font-semibold text-white">6. Limitation of liability</h2>
          <p>
            Nothing in these Terms limits our liability for fraud, fraudulent misrepresentation, death
            or personal injury caused by our negligence, or any other liability that cannot lawfully be
            excluded under English law. Subject to that, our total aggregate liability arising out of or
            in connection with the service (whether in contract, tort, statute or otherwise) is{" "}
            <strong className="text-white">strictly limited to the fee you actually paid us for the
            engagement giving rise to the claim</strong>. We will not be liable for any indirect,
            consequential, special or punitive loss, loss of profits, loss of business opportunity, or
            HMRC penalties caused by any matter falling within clause 4.4.
          </p>

          <h2 className="text-2xl font-semibold text-white">7. AI-assisted output</h2>
          <p>
            Our online tax helper uses automated language technology to provide draft estimates and
            general guidance. Such output may contain errors and must not be relied on as a substitute
            for a qualified accountant or solicitor. Only the final return submitted on your behalf
            after human review carries our professional opinion.
          </p>

          <h2 className="text-2xl font-semibold text-white">8. Termination</h2>
          <p>
            We may suspend or terminate the service without refund if you breach these Terms, supply
            fraudulent information, abuse our staff, or attempt to use the service for an illegal
            purpose.
          </p>

          <h2 className="text-2xl font-semibold text-white">9. Governing law and jurisdiction</h2>
          <p>
            These Terms are governed by the law of England and Wales. The courts of England and Wales
            shall have exclusive jurisdiction to settle any dispute arising out of or in connection
            with the service or these Terms.
          </p>

          <h2 className="text-2xl font-semibold text-white">10. Severability</h2>
          <p>
            If any provision of these Terms is held by a court to be unenforceable, the remaining
            provisions shall continue in full force and effect.
          </p>

          <h2 className="text-2xl font-semibold text-white">11. Contact</h2>
          <p>
            Questions? Email <a className="text-primary" href="mailto:hello@taxly.co.uk">hello@taxly.co.uk</a>.
          </p>
        </section>
      </article>
    </div>
  );
}
