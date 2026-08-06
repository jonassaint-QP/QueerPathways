import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ReceiptText, ArrowRight } from 'lucide-react';

export default function FeeDisclosurePage() {
  return (
    <main className="min-h-screen bg-[#001807] text-amber-50 px-6 py-14">
      <div className="max-w-4xl mx-auto space-y-14">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-amber-300 hover:text-amber-100 transition"
        >
          <ArrowLeft size={16} />
          Back to Queer Pathways
        </Link>

        <header className="space-y-4 border-b border-emerald-800/60 pb-8">
          <p className="text-xs uppercase tracking-widest text-amber-400 font-semibold">The Dignity Investment</p>
          <h1 className="text-4xl md:text-5xl font-bold font-serif leading-tight">
            Fees
          </h1>
          <p className="text-lg text-amber-100 qp-leading-175 max-w-2xl">
            We don't believe in hidden fees, surprise bills, or making you decode a benefits statement while your nervous system is already at capacity.
          </p>
          <p className="text-amber-300 font-medium">
            Radical transparency — because the Ambiguity Tax has no place in the financial part of your healing.
          </p>
        </header>

        {/* Session Rates */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold font-serif">Session Rates</h2>
          <div className="space-y-3">
            {[
              { service: 'Individual Therapy', duration: '50 minutes', usd: '$200 USD', cad: '$275 CAD' },
              { service: 'Couples / Relational Therapy', duration: '75 minutes', usd: '$275 USD', cad: '$375 CAD' },
              { service: 'Gender Story Prep', duration: '60 minutes', usd: '$225 USD', cad: '$310 CAD' },
              { service: 'DBT Consultation Group', duration: 'per session', usd: '$75 USD', cad: '$100 CAD' },
            ].map((row) => (
              <div
                key={row.service}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-emerald-900/30 border border-emerald-800/40 rounded-xl px-6 py-4"
              >
                <div>
                  <p className="font-semibold">{row.service}</p>
                  <p className="text-xs text-amber-100/60 uppercase tracking-widest">{row.duration}</p>
                </div>
                <div className="flex gap-4 shrink-0">
                  <span className="text-amber-50 font-bold">{row.usd}</span>
                  <span className="text-amber-100/60">/</span>
                  <span className="text-amber-100/80">{row.cad}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-amber-100/70 qp-leading-175">
            All rates are per session. We're happy to provide a superbill for out-of-network reimbursement.
          </p>
          <div className="bg-amber-400/10 border border-amber-400/30 rounded-2xl p-6 space-y-2">
            <p className="font-semibold text-amber-200">If these numbers don't fit your life right now —</p>
            <p className="text-amber-100 text-sm qp-leading-175">
              Reach out. We believe care shouldn't be locked behind a price tag.{' '}
              <a
                href="mailto:Joshua@QueerPathways.org"
                className="text-amber-300 hover:text-amber-200 transition underline underline-offset-2"
              >
                Email Joshua directly
              </a>{' '}
              to discuss options.
            </p>
          </div>
        </section>

        {/* Insurance */}
        <section className="space-y-6 border-t border-emerald-900/40 pt-10">
          <h2 className="text-2xl font-bold font-serif">We Take Your Insurance Seriously</h2>
          <p className="text-amber-100 qp-leading-175">
            We're in-network so you don't have to fight a claims department on top of everything else.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-emerald-900/30 border border-emerald-800/40 rounded-2xl p-6 space-y-4">
              <p className="font-bold text-amber-200 uppercase tracking-widest text-xs">Ontario (Direct Billing)</p>
              <ul className="space-y-2">
                {['Sun Life', 'Manulife', 'Canada Life', 'Desjardins'].map((ins) => (
                  <li key={ins} className="flex items-center gap-2 text-amber-100">
                    <CheckCircle2 className="text-amber-400 shrink-0" size={16} />
                    {ins}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-amber-100/60">
                If your provider isn't listed, we can still work with you — superbills available.
              </p>
            </div>
            <div className="bg-emerald-900/30 border border-emerald-800/40 rounded-2xl p-6 space-y-4">
              <p className="font-bold text-amber-200 uppercase tracking-widest text-xs">Pennsylvania (In-Network)</p>
              <ul className="space-y-2">
                {['Aetna', 'Highmark BCBS', 'CIGNA'].map((ins) => (
                  <li key={ins} className="flex items-center gap-2 text-amber-100">
                    <CheckCircle2 className="text-amber-400 shrink-0" size={16} />
                    {ins}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-amber-100/60">
                Out-of-network? We provide detailed superbills for reimbursement.
              </p>
            </div>
          </div>
        </section>

        {/* No Surprises */}
        <section className="space-y-6 border-t border-emerald-900/40 pt-10">
          <h2 className="text-2xl font-bold font-serif">No Surprises. No 90-Day Waitlists.</h2>
          <div className="space-y-3">
            {[
              'First appointment within 7 days — your motivation shouldn\'t have to survive a quarter',
              'Transparent pricing — what you see is what you pay, no admin fees, no cancellation penalties for illness',
              'Thrizer-powered billing — we use Thrizer to handle the insurance paperwork so you don\'t pay the ADHD tax just to get reimbursed',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 text-amber-100">
                <span className="text-lg shrink-0" aria-hidden="true">🟢</span>
                <p className="text-sm qp-leading-175">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Lower-Friction Entry */}
        <section className="space-y-6 border-t border-emerald-900/40 pt-10">
          <h2 className="text-2xl font-bold font-serif">Not Ready for Full Sessions?</h2>
          <p className="text-amber-400 font-medium">Lower-Friction Entry.</p>
          <div className="bg-emerald-900/30 border border-emerald-800/40 rounded-2xl p-6 space-y-4">
            <p className="text-amber-100 qp-leading-175">
              You know you need something. But another intake form, another zoom square, another 50 minutes of explaining your own existence to a stranger? That's not a threshold — that's a wall.
            </p>
            <p className="text-amber-100 qp-leading-175">
              The store is the side door. Browse at 2am. Buy the lube that's priced like we're not trying to fund a second office. Wear the gear that says <em>I'm figuring it out</em> without having to say a damn thing.
            </p>
            <p className="text-amber-100/70 text-sm">No intake. No waitlist. No insurance battle. Just well-priced, carefully sourced items for your actual life.</p>
            <a
              href="https://queerpathways.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-amber-300 hover:text-amber-200 font-semibold transition text-sm"
            >
              Visit the Store
              <ArrowRight size={16} />
            </a>
          </div>
        </section>

        {/* Cancellation Policy */}
        <section className="space-y-6 border-t border-emerald-900/40 pt-10">
          <h2 className="text-2xl font-bold font-serif">Cancellation & No-Show Policy</h2>
          <div className="space-y-4 text-amber-100 qp-leading-175">
            <div className="flex items-start gap-3">
              <span className="text-amber-400 font-bold shrink-0 text-sm mt-0.5">24-Hour Rule</span>
              <p className="text-sm">Full session fee charged for late cancels or no-shows (all services).</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-amber-400 font-bold shrink-0 text-sm mt-0.5">The Sovereign Pause (Ontario)</span>
              <p className="text-sm">Crisis or functional freeze exception at clinician discretion.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-amber-400 font-bold shrink-0 text-sm mt-0.5">PA Policy</span>
              <p className="text-sm">Same 24-hour policy per the Sanctuary Agreement.</p>
            </div>
          </div>
          <p className="text-xs text-amber-100/60 qp-leading-175">
            This policy exists for practice sustainability, not punishment.
          </p>
        </section>

        {/* Legal Documents */}
        <section className="space-y-4 border-t border-emerald-900/40 pt-10">
          <h2 className="text-2xl font-bold font-serif">Legal & Policy Documents</h2>
          <ul className="space-y-2 text-sm text-amber-100/70">
            <li><Link to="/fee-disclosure" className="text-amber-300 hover:text-amber-200 transition">Terms of Service</Link></li>
            <li><Link to="/privacy" className="text-amber-300 hover:text-amber-200 transition">Privacy Policy</Link></li>
            <li><a href="https://queerpathways.com" target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:text-amber-200 transition">Return &amp; Refund Policy</a></li>
            <li><span className="text-amber-300">Full Fee Disclosure & Insurance Policy (Ontario)</span> — this page</li>
          </ul>
        </section>

        {/* CTA */}
        <div className="border-t border-emerald-900/40 pt-10 text-center space-y-6">
          <a
            href="https://www.therapyportal.com/p/queercharts/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-amber-50 text-emerald-950 px-10 py-4 rounded-full font-bold text-base hover:bg-amber-100 transition shadow-lg"
          >
              Adjourn the Courtroom — Book Your Intake Assessment
            </a>
          <p className="text-xs text-amber-100/60">
            Questions?{' '}
            <a href="mailto:joshua@queerpathways.org" className="text-amber-300 hover:text-amber-200 transition">
              joshua@queerpathways.org
            </a>
          </p>
        </div>

      </div>
    </main>
  );
}

