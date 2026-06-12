import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

export default function PrivacyPage() {
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
          <p className="text-xs uppercase tracking-widest text-amber-400 font-semibold">Privacy & Compliance</p>
          <h1 className="text-4xl md:text-5xl font-bold font-serif leading-tight">
            Privacy Page: PHIPA Compliance and Data Governance (Ontario)
          </h1>
          <div className="text-sm text-amber-100/85 space-y-1">
            <p><strong>Effective Date:</strong> May 26, 2026</p>
            <p><strong>Last Updated:</strong> May 26, 2026</p>
          </div>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold font-serif">1. Personal Health Information Protection Act (PHIPA)</h2>
          <p className="text-amber-100 qp-leading-175">
            In accordance with the <strong>Personal Health Information Protection Act, 2004</strong> (PHIPA), Queer Pathways (the "Practice") is committed to protecting the privacy and security of personal health information (PHI) for all clients located within the jurisdiction of Ontario.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold font-serif">2. Health Information Custodian (HIC) Status</h2>
          <p className="text-amber-100 qp-leading-175">
            The Practice operates as a <strong>Health Information Custodian (HIC)</strong> under PHIPA. As a HIC, the Practice is responsible for the collection, use, disclosure, and safeguarding of PHI, ensuring that all handling of information aligns with provincial privacy standards and clinical best practices.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold font-serif">3. Cross-Border Data Governance (US-Canada)</h2>
          <p className="text-amber-100 qp-leading-175">
            To facilitate the dual-specialist telehealth model, PHI may be stored on servers located in the United States. The Practice utilizes US-based Electronic Health Record (EHR) vendors, which are classified as <strong>Electronic Service Providers (ESPs)</strong> under PHIPA.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold font-serif">4. Collection, Use, and Disclosure of PHI</h2>
          <p className="text-amber-100 qp-leading-175">
            We collect personal health information, including name, contact details, clinical history, and session notes, solely for the purpose of providing affirming mental health therapy.
          </p>
          <ul className="space-y-3 text-amber-100 qp-leading-175 list-disc pl-6">
            <li><strong>Consent:</strong> We rely on express or implied consent to provide care. You have the right to withdraw or limit your consent at any time, subject to legal or contractual restrictions.</li>
            <li><strong>Purpose Limitation:</strong> PHI is only used for clinical treatment, healthcare administration, and billing Canadian insurers (e.g., Sun Life, Manulife, Canada Life).</li>
            <li><strong>Disclosure:</strong> We do not disclose PHI to third parties without your express consent, except where required by law (e.g., in cases of imminent risk of harm or as required by a court order).</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold font-serif">5. Client Rights</h2>
          <p className="text-amber-100 qp-leading-175">
            Clients in Ontario have the right to access their PHI, request corrections, and be notified in the event of a privacy breach that exceeds the "low risk" threshold.
          </p>
          <p className="text-amber-100 qp-leading-175">
            For inquiries regarding PHIPA compliance or data governance, please contact the Practice's Privacy Officer.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold font-serif">6. Technical and Administrative Safeguards</h2>
          <p className="text-amber-100 qp-leading-175">
            The Practice employs industrial-grade safeguards to protect cross-border data flows, including:
          </p>
          <ul className="space-y-3 text-amber-100 qp-leading-175 list-disc pl-6">
            <li><strong>Encryption:</strong> All PHI is protected via field-level AES-GCM encryption during transit and at rest.</li>
            <li><strong>Auditability:</strong> The EHR maintains tamper-evident electronic audit logs, documenting all instances of access, modification, or disclosure.</li>
            <li><strong>Compliance Documentation:</strong> The Practice maintains a formal Privacy Impact Assessment (PIA) and a Participation Agreement with all ESPs to ensure PHIPA-equivalent protections are maintained across jurisdictions.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold font-serif">7. Breach Notification</h2>
          <p className="text-amber-100 qp-leading-175">
            In the event of an unauthorized use, loss, or disclosure of PHI (a "privacy breach"), Queer Pathways will:
          </p>
          <ol className="space-y-2 text-amber-100 qp-leading-175 list-decimal pl-6">
            <li>Notify the affected individual at the first reasonable opportunity.</li>
            <li>Report the breach to the Information and Privacy Commissioner of Ontario (IPC) and the OCSWSSW as required by the <strong>Social Work and Social Service Work Act</strong>.</li>
          </ol>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold font-serif">8. Contact Information</h2>
          <div className="bg-emerald-900/35 border border-emerald-800/60 rounded-2xl p-6 space-y-2 text-amber-100">
            <p className="font-semibold text-amber-50 flex items-center gap-2">
              <ShieldCheck size={18} className="text-amber-300" />
              Joshua Jonassaint
            </p>
            <p>Owner/Privacy Officer, Queer Pathways</p>
            <p>
              Website: <a href="https://queerpathways.org" target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:text-amber-200 transition">queerpathways.org</a>
            </p>
            <p>
              Email: <a href="mailto:joshua@queerpathways.org" className="text-amber-300 hover:text-amber-200 transition">joshua@queerpathways.org</a>
            </p>
          </div>
          <p className="text-amber-100 qp-leading-175">
            If you believe your privacy rights have been violated, you have the right to complain to the Information and Privacy Commissioner of Ontario:
          </p>
          <p className="text-amber-100 qp-leading-175">
            2 Bloor Street East, Suite 1400<br />
            Toronto, ON M4W 1A8<br />
            Phone: 416-326-3333
          </p>
        </section>
      </div>
    </main>
  );
}
