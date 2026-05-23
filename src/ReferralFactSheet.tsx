import React from 'react';
import { Link } from 'react-router-dom';
import {
  Shield, Brain, Heart, Compass, CheckCircle2, Quote, ArrowRight,
  Mail, Users, Zap, BookOpen, Sparkles, Scale, ExternalLink
} from 'lucide-react';

const carepatronButtonStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  outline: 0,
  border: 0,
  cursor: 'pointer',
  userSelect: 'none',
  textDecoration: 'none',
  fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
  fontWeight: 500,
  letterSpacing: '0.02857em',
  color: '#fff',
  backgroundColor: '#104714',
  borderRadius: '4px',
  height: '44px',
  padding: '8px 24px',
  fontSize: '15px',
  transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1)',
};

const Divider = () => (
  <div className="w-12 h-px bg-amber-400/40 mx-auto my-2" />
);

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="text-xs uppercase tracking-[0.25em] text-amber-400/80 font-semibold mb-4">
    {children}
  </p>
);

export default function ReferralFactSheet() {
  return (
    <div className="min-h-screen bg-emerald-950 text-amber-50" style={{ fontFamily: 'Inter, sans-serif' }}>

      {/* Back nav */}
      <div className="border-b border-emerald-800/40">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-amber-100/50 hover:text-amber-100 transition-colors"
          >
            <ArrowRight className="rotate-180" size={14} />
            Back to Queer Pathways
          </Link>
        </div>
      </div>

      {/* ── HEADER ─────────────────────────────────────── */}
      <header className="py-20 px-6 border-b border-emerald-800/40">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-end">
            <div className="space-y-4">
              <SectionLabel>Clinical Referral Document · Pennsylvania</SectionLabel>
              <h1
                className="text-5xl md:text-6xl font-bold leading-tight"
                style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
              >
                Queer Pathways
              </h1>
              <h2 className="text-xl md:text-2xl text-amber-100/80 font-light leading-snug">
                Pennsylvania Referral Fact Sheet
              </h2>
              <p className="text-amber-100/60 max-w-xl leading-relaxed text-sm">
                Specialized telehealth psychotherapy for 2SLGBTQI+ and neurodivergent adults
                across Pennsylvania. Affirming, somatic, and structurally informed care — built
                for clients whose nervous systems have been legislated against.
              </p>
            </div>
            <div className="shrink-0 text-right space-y-1">
              <p className="text-xs text-amber-100/40 uppercase tracking-widest">Provider</p>
              <p className="text-amber-50 font-semibold">Joshua Jonassaint, LCSW</p>
              <p className="text-amber-100/60 text-sm">Licensed Clinical Social Worker</p>
              <p className="text-amber-100/60 text-sm">Pennsylvania</p>
              <a
                href="mailto:Joshua@QueerPathways.org"
                className="inline-flex items-center gap-1 text-amber-300 hover:text-amber-200 transition text-sm mt-2"
              >
                <Mail size={13} />
                Joshua@QueerPathways.org
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-24">

        {/* ── CLINICAL PHILOSOPHY ────────────────────────── */}
        <section className="space-y-8">
          <SectionLabel>Clinical Philosophy</SectionLabel>
          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-emerald-900/30 border border-emerald-800/40 rounded-2xl p-8 space-y-4">
              <div className="flex items-start gap-3">
                <Scale className="text-amber-400 shrink-0 mt-1" size={22} />
                <div>
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
                  >
                    The Internal Legal System
                  </h3>
                  <p className="text-amber-100/70 text-sm leading-relaxed">
                    Clients arrive having internalized a courtroom — prosecuting themselves
                    for simply existing. Our framework treats these internalized laws as
                    inherited legal structures, not fixed truths. Therapy becomes the process
                    of auditing which statutes serve the client's flourishing and which must
                    be stricken from the record.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-emerald-900/30 border border-emerald-800/40 rounded-2xl p-8 space-y-4">
              <div className="flex items-start gap-3">
                <BookOpen className="text-amber-400 shrink-0 mt-1" size={22} />
                <div>
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
                  >
                    The Internal Auditor
                  </h3>
                  <p className="text-amber-100/70 text-sm leading-relaxed">
                    The part of the client that relentlessly monitors for evidence of wrongness.
                    Rather than silencing this voice, we work collaboratively with it —
                    teaching the Auditor to investigate <em>toward</em> compassion instead of
                    conviction. A trauma-informed, polyvagal-aware approach grounded in
                    2SLGBTQI+ affirming language and somatic attunement.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-amber-400/15 rounded-xl p-6 text-center">
            <p className="text-amber-100/60 text-sm max-w-2xl mx-auto leading-relaxed italic">
              "We don't ask clients to love themselves on command. We ask: what would it look
              like to stop litigating your own worth? That's where the work begins."
            </p>
            <p className="text-amber-400/60 text-xs mt-3 uppercase tracking-widest">
              — Clinical Orientation, Queer Pathways
            </p>
          </div>
        </section>

        {/* ── SPECIALIZATIONS ───────────────────────────── */}
        <section className="space-y-8">
          <SectionLabel>Specializations</SectionLabel>
          <h2
            className="text-3xl font-bold"
            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
          >
            Who We Serve Best
          </h2>
          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-emerald-900/30 border border-emerald-800/40 rounded-2xl p-7 space-y-4 flex flex-col">
              <Brain className="text-amber-400" size={24} />
              <h3 className="font-bold text-base">ADHD & Neurodivergence</h3>
              <p className="text-amber-100/60 text-sm leading-relaxed flex-1">
                Rejection Sensitive Dysphoria as a pathway to belonging, not pathology.
                Executive-function scaffolding, shame-cycle mapping, and identity-affirming
                strategies for masking fatigue.
              </p>
              <div className="flex flex-wrap gap-2">
                {['RSD', 'Masking Fatigue', 'Executive Function'].map(tag => (
                  <span key={tag} className="text-xs bg-emerald-800/60 text-amber-200/70 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-emerald-900/30 border border-emerald-800/40 rounded-2xl p-7 space-y-4 flex flex-col">
              <Shield className="text-amber-400" size={24} />
              <h3 className="font-bold text-base">Kink, BDSM & Non-Monogamy</h3>
              <p className="text-amber-100/60 text-sm leading-relaxed flex-1">
                Consensual play spaces as somatic antidotes to shame. Affirming exploration
                of erotic identity, power exchange dynamics, and relational sovereignty
                without pathologizing language.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Kink-Affirming', 'Poly/ENM', 'Somatic Safety'].map(tag => (
                  <span key={tag} className="text-xs bg-emerald-800/60 text-amber-200/70 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-emerald-900/30 border border-emerald-800/40 rounded-2xl p-7 space-y-4 flex flex-col">
              <Sparkles className="text-amber-400" size={24} />
              <h3 className="font-bold text-base">Gender & Identity Exploration</h3>
              <p className="text-amber-100/60 text-sm leading-relaxed flex-1">
                Non-gatekeeping gender story support. Letter-writing for surgical or medical
                procedures. Affirming care for clients navigating coming out, transition,
                and identity integration at any life stage.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Gender Letters', 'Coming Out', 'Trans-Affirming'].map(tag => (
                  <span key={tag} className="text-xs bg-emerald-800/60 text-amber-200/70 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── PRIORITY ACCESS ───────────────────────────── */}
        <section className="space-y-8">
          <SectionLabel>Referral Infrastructure</SectionLabel>
          <div className="bg-amber-400/5 border border-amber-400/25 rounded-2xl p-10 space-y-6">
            <div className="flex items-start gap-4">
              <Zap className="text-amber-400 shrink-0 mt-1" size={24} />
              <div className="space-y-3">
                <h2
                  className="text-2xl font-bold"
                  style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
                >
                  Fast-Track Referral Process
                </h2>
                <p className="text-amber-100/70 text-sm leading-relaxed max-w-2xl">
                  For clients stepping down from PHP or IOP programs, continuity of care is
                  not optional — it is the intervention. We maintain a <strong>7-day intake
                  goal</strong> for step-down referrals to minimize the gap between
                  structured support and outpatient care.
                </p>
              </div>
            </div>
            <Divider />
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="space-y-2">
                <div className="flex items-center gap-2 font-semibold text-amber-200">
                  <CheckCircle2 size={15} className="text-amber-400" />
                  Step 1
                </div>
                <p className="text-amber-100/60 pl-5">
                  Referring clinician contacts{' '}
                  <a href="mailto:Joshua@QueerPathways.org" className="text-amber-300 hover:text-amber-200 transition">
                    Joshua@QueerPathways.org
                  </a>{' '}
                  with clinical summary
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 font-semibold text-amber-200">
                  <CheckCircle2 size={15} className="text-amber-400" />
                  Step 2
                </div>
                <p className="text-amber-100/60 pl-5">
                  Client receives warm handoff with intake paperwork pre-loaded in Carepatron
                  portal within 48 hours
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 font-semibold text-amber-200">
                  <CheckCircle2 size={15} className="text-amber-400" />
                  Step 3
                </div>
                <p className="text-amber-100/60 pl-5">
                  Intake session scheduled. Treatment summary shared back with referring
                  provider upon client consent
                </p>
              </div>
            </div>
            <Divider />
            <div className="flex flex-wrap gap-3 text-xs">
              {[
                'PHP/IOP Step-Down',
                'Crisis Stabilization',
                'Dual Diagnosis',
                'Gender-Affirming Post-Op',
                'Trauma Reprocessing',
                'Burnout Recovery',
                'Relational Crisis',
              ].map(tag => (
                <span key={tag} className="border border-amber-400/25 text-amber-200/70 px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINANCIAL & INSURANCE ─────────────────────── */}
        <section className="space-y-8">
          <SectionLabel>Financial Transparency</SectionLabel>
          <h2
            className="text-3xl font-bold"
            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
          >
            Rates & Insurance
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Rates */}
            <div className="bg-emerald-900/30 border border-emerald-800/40 rounded-2xl p-8 space-y-6">
              <h3 className="font-semibold text-amber-200 text-sm uppercase tracking-widest">
                Session Rates — Radical Transparency
              </h3>
              <div className="space-y-4">
                {[
                  { label: 'Individual Session', rate: '$150', note: '50 min' },
                  { label: 'Relationship / Couples', rate: '$200', note: '50 min' },
                  { label: 'Intake Session', rate: '$225', note: '75 min' },
                ].map(({ label, rate, note }) => (
                  <div key={label} className="flex justify-between items-center border-b border-emerald-800/30 pb-4 last:border-0 last:pb-0">
                    <div>
                      <p className="font-medium text-amber-50">{label}</p>
                      <p className="text-xs text-amber-100/40">{note}</p>
                    </div>
                    <p
                      className="text-2xl font-bold"
                      style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
                    >
                      {rate}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-amber-100/40 leading-relaxed">
                Sliding-scale availability discussed during intake. Good Faith Estimate
                provided in compliance with the No Surprises Act.
              </p>
            </div>

            {/* Insurance */}
            <div className="bg-emerald-900/30 border border-emerald-800/40 rounded-2xl p-8 space-y-6">
              <h3 className="font-semibold text-amber-200 text-sm uppercase tracking-widest">
                Insurance Panels
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-emerald-800/30 pb-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-emerald-400 shrink-0" size={18} />
                    <div>
                      <p className="font-medium text-amber-50">Aetna</p>
                      <p className="text-xs text-amber-100/40">Individual &amp; Couples</p>
                    </div>
                  </div>
                  <span className="text-xs bg-emerald-700/60 text-emerald-200 px-3 py-1 rounded-full font-medium">
                    In-Network
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Heart className="text-amber-400/60 shrink-0" size={18} />
                    <div>
                      <p className="font-medium text-amber-50">Out-of-Network via Thrizer</p>
                      <p className="text-xs text-amber-100/40">Pay only your estimated copay — Thrizer handles the rest</p>
                    </div>
                  </div>
                  <span className="text-xs bg-amber-400/10 text-amber-300/70 px-3 py-1 rounded-full font-medium">
                    Available
                  </span>
                </div>
              </div>
              <p className="text-xs text-amber-100/40 leading-relaxed">
                Queer Pathways uses{' '}
                <a
                  href="https://eligibility.thrizer.com/facility/thrizer7t1oh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-300 hover:text-amber-200 transition"
                >
                  Thrizer
                </a>{' '}
                for out-of-network billing. Clients pay only their estimated coinsurance at
                the time of session — Thrizer submits the claim and fronts the reimbursement.
                Verify your benefits before intake.
              </p>
            </div>
          </div>
        </section>

        {/* ── ACOUSTIC ECOLOGY ──────────────────────────── */}
        <section className="space-y-6">
          <SectionLabel>Acoustic Ecology & Nervous System Regulation</SectionLabel>
          <div className="relative border border-amber-400/15 rounded-2xl p-10 overflow-hidden">
            {/* decorative quote mark */}
            <Quote
              className="absolute top-6 right-8 text-amber-400/8 pointer-events-none"
              size={120}
            />
            <div className="relative space-y-6 max-w-2xl">
              <p
                className="text-2xl md:text-3xl font-bold leading-snug"
                style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
              >
                Three chords and the truth.
              </p>
              <p className="text-amber-100/70 leading-relaxed text-sm">
                Country music's structural simplicity — tonic, dominant, subdominant, and
                an unflinching lyric — mirrors what effective trauma work requires: a
                predictable harmonic container and radical honesty. We draw on acoustic
                ecology as a clinical framework, recognizing that sound environments shape
                nervous system states. The right sonic backdrop isn't a preference; it is
                a somatic intervention.
              </p>
              <p className="text-amber-100/70 leading-relaxed text-sm">
                For clients whose identities sit at the intersection of queer and country,
                or rural and trans, or working-class and neurodivergent, we hold space for
                the full cultural landscape of the self — not just the parts that fit
                mainstream queer narratives.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Acoustic Regulation', 'Cultural Attunement', 'Somatic Safety', 'Rural Affirmation'].map(tag => (
                  <span key={tag} className="text-xs border border-amber-400/20 text-amber-200/60 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA FOOTER ────────────────────────────────── */}
        <section className="border-t border-emerald-800/40 pt-16 space-y-10">
          <SectionLabel>Next Steps</SectionLabel>
          <div className="grid md:grid-cols-2 gap-10">

            <div className="space-y-4">
              <h3
                className="text-2xl font-bold"
                style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
              >
                Book Directly
              </h3>
              <p className="text-amber-100/60 text-sm leading-relaxed">
                Clients can self-schedule their intake session directly through our
                Carepatron portal. Affirming intake forms included.
              </p>
              <a
                href="https://book.carepatron.com/Queer-Pathways/Joshua?p=1achg8U5QhGVWM9fIz.Kig&s=VI4IFsMw&e=b"
                target="_blank"
                rel="noopener noreferrer"
                style={carepatronButtonStyle}
              >
                Book appointment
              </a>
            </div>

            <div className="space-y-4">
              <h3
                className="text-2xl font-bold"
                style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
              >
                Contact for Clinical Inquiry
              </h3>
              <p className="text-amber-100/60 text-sm leading-relaxed">
                Referring clinicians, case managers, and treatment teams: contact Joshua
                directly for step-down coordination, case consultation, or co-treatment
                planning.
              </p>
              <div className="space-y-2">
                <a
                  href="mailto:Joshua@QueerPathways.org"
                  className="inline-flex items-center gap-2 text-amber-300 hover:text-amber-200 transition font-medium"
                >
                  <Mail size={16} />
                  Joshua@QueerPathways.org
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Telehealth disclosure */}
        <div className="border-t border-emerald-800/30 pt-8 pb-4 text-center">
          <p className="text-xs text-amber-100/30 max-w-xl mx-auto leading-relaxed">
            Queer Pathways provides telehealth services exclusively within the Commonwealth
            of Pennsylvania. Services rendered by Joshua Jonassaint, LCSW. This document
            is intended for clinical and referral use only.
          </p>
          <p className="text-xs text-amber-100/20 mt-3">
            © {new Date().getFullYear()} Queer Pathways — All rights reserved.
          </p>
        </div>

      </main>
    </div>
  );
}
