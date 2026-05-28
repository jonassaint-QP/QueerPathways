import React from 'react';
import { ArrowLeft, Brain, Compass, Heart, Sparkles, CheckCircle2, Zap, Quote } from 'lucide-react';

export default function ICAPage() {
  return (
    <div className="min-h-screen bg-emerald-950 text-amber-50 px-6 py-14">
      <div className="max-w-5xl mx-auto space-y-12">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-amber-300 hover:text-amber-100 transition"
        >
          <ArrowLeft size={16} />
          Back to Queer Pathways
        </a>

        <header className="space-y-4">
          <p className="text-xs uppercase tracking-widest text-amber-400 font-semibold">Ideal Client Architecture</p>
          <h1 className="text-4xl md:text-6xl font-bold font-serif leading-tight">
            Meet Alex.
          </h1>
          <p className="text-lg text-amber-100 leading-relaxed max-w-4xl">
            Alex is our Ideal Client Archetype — a composite of the brilliant, burned-out, Double-Outsider who arrives at Queer Pathways ready to build sovereignty architecture and step into radical belonging.
          </p>
        </header>

        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-emerald-900/35 border border-emerald-800/60 rounded-3xl p-8 space-y-5">
            <h2 className="text-2xl font-bold font-serif flex items-center gap-2">
              <Brain className="text-amber-400" size={22} />
              Who is Alex?
            </h2>
            <ul className="space-y-3 text-amber-100 leading-relaxed">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-amber-400 mt-1 shrink-0" size={18} />
                <span>Late-diagnosed ADHD or Autistic, or strongly suspecting they are neurodivergent.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-amber-400 mt-1 shrink-0" size={18} />
                <span>Queer, Trans, or gender-expansive — navigating identity in systems not built for them.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-amber-400 mt-1 shrink-0" size={18} />
                <span>Intellectually high-functioning but emotionally exhausted from masking.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-amber-400 mt-1 shrink-0" size={18} />
                <span>Carries Systemic Exhaustion — relentlessly litigating their worthiness.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-amber-400 mt-1 shrink-0" size={18} />
                <span>Ready for depth work — not just symptom management.</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <div className="bg-emerald-900/30 border border-emerald-800/60 rounded-2xl p-6 space-y-3">
              <h3 className="font-bold text-xl flex items-center gap-2">
                <Zap className="text-amber-400" size={20} />
                Alex's Core Wounds
              </h3>
              <p className="text-sm text-amber-100">Rejection sensitivity. Chronic self-auditing. The belief that authenticity is unsafe.</p>
            </div>
            <div className="bg-emerald-900/30 border border-emerald-800/60 rounded-2xl p-6 space-y-3">
              <h3 className="font-bold text-xl flex items-center gap-2">
                <Compass className="text-amber-400" size={20} />
                What Alex Needs
              </h3>
              <p className="text-sm text-amber-100">A clinician who doesn't flinch. Who meets them in their full complexity. Who has done their own work.</p>
            </div>
            <div className="bg-emerald-900/30 border border-emerald-800/60 rounded-2xl p-6 space-y-3">
              <h3 className="font-bold text-xl flex items-center gap-2">
                <Sparkles className="text-amber-400" size={20} />
                Alex's Vision
              </h3>
              <p className="text-sm text-amber-100">Unmasked joy. Sovereign relationships. A nervous system that finally feels like home.</p>
            </div>
          </div>
        </section>

        <section className="bg-emerald-900/35 border border-emerald-800/60 rounded-3xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold font-serif">The Double-Outsider Framework</h2>
          <p className="text-amber-100 leading-relaxed text-lg">
            Alex exists at the intersection of two marginalized identities — queer and neurodivergent — creating a compounded experience of otherness that most clinicians are unprepared to hold. This is the Double-Outsider dynamic.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-emerald-950/60 rounded-xl p-5 space-y-2 border border-emerald-800/40">
              <p className="font-semibold text-amber-300">Minority Stress</p>
              <p className="text-sm text-amber-100">Chronic vigilance from navigating heteronormative and neurotypical systems simultaneously.</p>
            </div>
            <div className="bg-emerald-950/60 rounded-xl p-5 space-y-2 border border-emerald-800/40">
              <p className="font-semibold text-amber-300">Double Masking</p>
              <p className="text-sm text-amber-100">Hiding queerness in neurodivergent spaces, and hiding neurodivergence in queer spaces.</p>
            </div>
            <div className="bg-emerald-950/60 rounded-xl p-5 space-y-2 border border-emerald-800/40">
              <p className="font-semibold text-amber-300">Somatic Depletion</p>
              <p className="text-sm text-amber-100">The body keeps the score of all that performed normalcy. Burnout isn't laziness — it's the cost of masking.</p>
            </div>
          </div>
        </section>

        <section className="bg-emerald-900/40 border border-emerald-800/50 p-10 rounded-3xl space-y-6">
          <Quote className="text-amber-400" size={32} />
          <blockquote className="text-lg leading-relaxed italic text-amber-50">
            "The goal isn't to function better inside a system that was never built for you. It's to build the internal infrastructure that makes your own system possible."
          </blockquote>
          <p className="text-sm text-amber-300 font-semibold">— Joshua, LCSW</p>
        </section>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a
            href="https://book.carepatron.com/Queer-Pathways/Joshua?p=1achg8U5QhGVWM9fIz.Kig&s=VI4IFsMw&e=b"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-amber-50 text-emerald-950 px-12 py-4 rounded-full font-bold text-base hover:bg-amber-100 transition-all shadow-lg text-center"
          >
            This Is Me — Book a Session
          </a>
          <a
            href="/resources/internal-auditor-guide"
            className="inline-block border-2 border-amber-50 text-amber-50 px-12 py-4 rounded-full font-bold text-base hover:bg-amber-50/10 transition-all text-center"
          >
            Read the Systemic Exhaustion Guide
          </a>
        </div>
      </div>
    </div>
  );
}
