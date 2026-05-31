import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ReceiptText } from 'lucide-react';

export default function FeeDisclosurePage() {
  return (
    <main className="min-h-screen bg-emerald-950 text-amber-50 px-6 py-14">
      <div className="max-w-4xl mx-auto space-y-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-amber-300 hover:text-amber-100 transition"
        >
          <ArrowLeft size={16} />
          Back to Queer Pathways
        </Link>

        <header className="space-y-4 border-b border-emerald-800/60 pb-6">
          <p className="text-xs uppercase tracking-widest text-amber-400 font-semibold">Financial Policy</p>
          <h1 className="text-4xl md:text-5xl font-bold font-serif leading-tight">
            Fee Disclosure and Insurance Policy (Ontario / 2SLGBTQI+ Specialized Care)
          </h1>
          <div className="text-sm text-amber-100/85 space-y-1">
            <p><strong>Effective Date:</strong> May 30, 2026</p>
            <p><strong>Entity:</strong> Queer Pathways</p>
            <p><strong>Jurisdiction:</strong> Ontario, Canada</p>
          </div>
        </header>

        <section className="space-y-4">
          <p className="text-amber-100 qp-leading-175">
            This Fee Disclosure and Insurance Policy ("Policy") outlines the financial agreement between Queer Pathways (the "Practice") and the client ("Client," "you") regarding the provision of specialized mental health and telehealth services in the province of Ontario. Joshua Jonassaint (the "Practitioner") operates as a Registered Social Worker (RSW) authorized to provide services to residents of Ontario.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold font-serif">I. Philosophy of Care: Administrative Advocacy</h2>
          <p className="text-amber-100 qp-leading-175">
            Queer Pathways operates under a model of <strong>Administrative Advocacy</strong>. We recognize that "ADHD Debt" and executive function hurdles often prevent the "Double-Outsider" from accessing or maintaining specialized care. Our financial architecture is designed to minimize the cognitive load on the client.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold font-serif">II. Investment Rates (Dignity-Locked)</h2>
          <p className="text-amber-100 qp-leading-175">
            As a specialized practice for 2SLGBTQI+ and neurodivergent individuals, our rates reflect the "High-Complexity Premium" of our clinical frameworks (Internal Legal System, Somatic Sovereignty).
          </p>
          <ul className="space-y-3 text-amber-100 qp-leading-175 list-disc pl-6">
            <li><strong>Individual Therapy (50 mins):</strong> $[Standard Specialist Rate] CAD</li>
            <li><strong>Couples/Relational Therapy (50 mins):</strong> $[Standard Specialist Rate] CAD</li>
            <li><strong>The Sovereignty Foundry (Intensives):</strong> Custom pricing based on duration.</li>
          </ul>
          <p className="text-amber-100 qp-leading-175">
            <strong>Note:</strong> All fees are due at the time of service unless otherwise negotiated through a third-party sponsorship agreement.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold font-serif">III. Payment Procedures</h2>
          <p className="text-amber-100 qp-leading-175">Payment is due in full at the time of the scheduled service.</p>
          <ul className="space-y-3 text-amber-100 qp-leading-175 list-disc pl-6">
            <li><strong>Payment Method:</strong> The Practice utilizes a secure, PHIPA-compliant electronic health record (EHR) system for billing. Clients are required to keep a valid credit card or debit card on file.</li>
            <li><strong>Automatic Billing:</strong> By signing this Policy, you authorize Queer Pathways to automatically charge the card on file for the agreed-upon session fee, as well as any applicable cancellation fees or administrative costs.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold font-serif">IV. Insurance and Reimbursement (Ontario)</h2>
          <p className="text-amber-100 qp-leading-175">
            Queer Pathways is a <strong>Private-Pay Specialist Practice</strong>. While we do not bill OHIP, our services are eligible for reimbursement through most extended health care (EHC) plans in Canada.
          </p>

          <h3 className="text-xl font-bold font-serif">1. Authorized Insurers</h3>
          <p className="text-amber-100 qp-leading-175">Registered providers at Queer Pathways are recognized by major Canadian insurance carriers, including but not limited to:</p>
          <ul className="space-y-2 text-amber-100 qp-leading-175 list-disc pl-6">
            <li><strong>Sun Life Financial</strong></li>
            <li><strong>Manulife</strong></li>
            <li><strong>Canada Life</strong></li>
            <li><strong>Desjardins Insurance</strong></li>
          </ul>

          <h3 className="text-xl font-bold font-serif">2. The Superbill Protocol</h3>
          <p className="text-amber-100 qp-leading-175">
            To reduce executive function friction, we provide high-fidelity receipts (Superbills) containing all necessary clinical coding and provider registration numbers required for your claim.
          </p>

          <h3 className="text-xl font-bold font-serif">3. Out-of-Province/Cross-Border Note</h3>
          <p className="text-amber-100 qp-leading-175">
            For clients residing in Ontario, services are delivered by practitioners registered with the <strong>Ontario College of Social Workers and Social Service Workers (OCSWSSW)</strong> or equivalent governing bodies, ensuring your claims meet jurisdictional requirements.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold font-serif">V. Cancellation and "The Sovereign Pause"</h2>
          <p className="text-amber-100 qp-leading-175">To maintain practice sustainability and respect the clinical container:</p>
          <ul className="space-y-3 text-amber-100 qp-leading-175 list-disc pl-6">
            <li><strong>24-Hour Rule:</strong> Cancellations with less than 24 hours' notice are subject to the full session fee.</li>
            <li><strong>The Sovereign Pause:</strong> If a client is in a "Functional Freeze" or crisis, we prioritize stabilization over rigid billing, subject to the clinician's discretion.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold font-serif">VI. Administrative and Ancillary Fees</h2>
          <p className="text-amber-100 qp-leading-175">
            Services requested outside of the standard clinical hour are billed at a pro-rated hourly rate of $250.00 CAD, including:
          </p>
          <ul className="space-y-3 text-amber-100 qp-leading-175 list-disc pl-6">
            <li>Preparation of clinical summaries, letters of support, or specialized reports.</li>
            <li>Extended phone consultations exceeding fifteen (15) minutes.</li>
            <li>Coordination of care with other providers (with Client consent).</li>
            <li><strong>Legal/Court Fees:</strong> In the event the Practitioner is subpoenaed to provide testimony or attend legal proceedings, a premium rate of $500.00 CAD per hour (including travel and preparation) applies, with a minimum four-hour retainer due in advance.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold font-serif">VII. Financial Hardship and Sliding Scale</h2>
          <p className="text-amber-100 qp-leading-175">
            Queer Pathways maintains a limited number of sliding-scale slots dedicated to the 2SLGBTQI+ community facing significant financial barriers. These slots are distributed based on availability and periodic re-evaluation of financial need.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold font-serif">VIII. Acknowledgment and Agreement</h2>
          <p className="text-amber-100 qp-leading-175">
            By proceeding with services at Queer Pathways, the Client acknowledges that they have read, understood, and agreed to the terms of this Fee Disclosure and Insurance Policy. You acknowledge your responsibility for all fees incurred and authorize the Practice to process payments as described herein.
          </p>
        </section>

        <div className="bg-emerald-900/35 border border-emerald-800/60 rounded-2xl p-6 text-amber-100">
          <p className="font-semibold text-amber-50 flex items-center gap-2">
            <ReceiptText size={18} className="text-amber-300" />
            Questions about this policy
          </p>
          <p className="mt-2">
            Contact: <a href="mailto:joshua@queerpathways.org" className="text-amber-300 hover:text-amber-200 transition">joshua@queerpathways.org</a>
          </p>
        </div>
      </div>
    </main>
  );
}
