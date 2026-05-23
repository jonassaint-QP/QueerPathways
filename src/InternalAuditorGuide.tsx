import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Brain, CheckCircle2, HeartHandshake, Shield } from 'lucide-react';

export default function InternalAuditorGuide() {
  return (
    <div className="min-h-screen bg-emerald-950 text-amber-50 px-6 py-14">
      <div className="max-w-5xl mx-auto space-y-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-amber-300 hover:text-amber-100 transition"
        >
          <ArrowLeft size={16} />
          Back to Queer Pathways
        </Link>

        <header className="space-y-4">
          <p className="text-xs uppercase tracking-widest text-amber-400 font-semibold">Resource Landing Page</p>
          <h1 className="text-4xl md:text-6xl font-bold font-serif leading-tight">
            The Internal Auditor&apos;s Guide to Kink and Internal Regulation
          </h1>
          <p className="text-lg text-amber-100 leading-relaxed max-w-4xl">
            A practical roadmap for queer and neurodivergent adults navigating rejection sensitivity,
            double-masking, and burnout. The goal is not to erase the Internal Auditor, but to demote it
            from CEO to junior accountant.
          </p>
        </header>

        <div className="w-full rounded-3xl overflow-hidden border border-emerald-800/50">
          <img
            src="/Images/Leatherdomsub.webp"
            alt="Two men in a leather-accented library — an evocative image representing power exchange, trust, and somatic presence"
            className="w-full max-h-[520px] object-cover object-top"
          />
        </div>

        <section className="bg-emerald-900/35 border border-emerald-800/60 rounded-3xl p-8 space-y-5">
          <h2 className="text-2xl font-bold font-serif flex items-center gap-2">
            <BookOpen className="text-amber-400" size={22} />
            Cliff Notes (TLDR)
          </h2>
          <ul className="space-y-3 text-amber-100 leading-relaxed">
            <li className="flex items-start gap-3"><CheckCircle2 className="text-amber-400 mt-1 shrink-0" size={18} /><span>The Internal Auditor is a nervous system safety strategy, not a character flaw.</span></li>
            <li className="flex items-start gap-3"><CheckCircle2 className="text-amber-400 mt-1 shrink-0" size={18} /><span>Somatic anchors bring attention back to the body when rumination and threat-scanning spike.</span></li>
            <li className="flex items-start gap-3"><CheckCircle2 className="text-amber-400 mt-1 shrink-0" size={18} /><span>Negotiation is executive functioning support in disguise: explicit agreements reduce ambiguity and cognitive load.</span></li>
            <li className="flex items-start gap-3"><CheckCircle2 className="text-amber-400 mt-1 shrink-0" size={18} /><span>Aftercare and DBT-based regulation prevent neurochemical drops from becoming shame spirals.</span></li>
          </ul>
        </section>

        <section className="grid md:grid-cols-3 gap-5">
          <article className="bg-emerald-900/30 border border-emerald-800/60 rounded-2xl p-6 space-y-3">
            <h3 className="font-bold text-xl flex items-center gap-2"><Brain className="text-amber-400" size={20} />Part 1</h3>
            <p className="font-semibold">Meeting the Internal Auditor</p>
            <p className="text-sm text-amber-100">Understand RSD, minority stress, and double-masking as a predictable neurobiological pattern.</p>
          </article>
          <article className="bg-emerald-900/30 border border-emerald-800/60 rounded-2xl p-6 space-y-3">
            <h3 className="font-bold text-xl flex items-center gap-2"><HeartHandshake className="text-amber-400" size={20} />Part 2-3</h3>
            <p className="font-semibold">Somatic Anchors and Negotiation</p>
            <p className="text-sm text-amber-100">Use structure, consent, and explicit agreements to reduce ambiguity and increase regulation.</p>
          </article>
          <article className="bg-emerald-900/30 border border-emerald-800/60 rounded-2xl p-6 space-y-3">
            <h3 className="font-bold text-xl flex items-center gap-2"><Shield className="text-amber-400" size={20} />Part 4</h3>
            <p className="font-semibold">Aftercare Audit</p>
            <p className="text-sm text-amber-100">Apply Check the Facts, Opposite Action, and somatic grounding to stabilize post-scene vulnerability.</p>
          </article>
        </section>

        <section className="bg-emerald-900/35 border border-emerald-800/60 rounded-3xl p-8 space-y-5">
          <h2 className="text-2xl font-bold font-serif">Clinical Exercises</h2>
          <ul className="space-y-3 text-amber-100 leading-relaxed">
            <li><strong>The Auditor&apos;s Awareness Log:</strong> Track trigger, narrative, and a quick fact-check.</li>
            <li><strong>The Somatic Anchor Inventory:</strong> Rate sensory inputs for present-moment return.</li>
            <li><strong>The Negotiation Sprint:</strong> Practice boundaries and safewords in a low-stakes context.</li>
            <li><strong>The TIPP Aftercare Protocol:</strong> Pre-pack regulation tools before high-intensity experiences.</li>
          </ul>
        </section>

        <section className="bg-emerald-900/35 border border-emerald-800/60 rounded-3xl p-8 space-y-6 text-center">
          <h2 className="text-3xl font-bold font-serif">Ready to Start Your Own Roadmap?</h2>
          <p className="text-amber-100 max-w-3xl mx-auto">
            We provide kink-aware, trauma-informed therapy for neurodivergent adults and the queer and
            2SLGBTQI+ community in Pennsylvania. Accepting Aetna (in-network) for PA clients.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://book.carepatron.com/Queer-Pathways/Joshua?p=1achg8U5QhGVWM9fIz.Kig&s=VI4IFsMw&e=b"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-amber-50 text-emerald-950 px-8 py-3 rounded-full font-bold"
            >
              Book a Session
            </a>
            <a
              href="https://queerpathways.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-amber-300/60 text-amber-100"
            >
              Read the Substack
            </a>
          </div>
          <p className="text-sm text-amber-100/80">Call-only: (365) 599-9002 | Joshua@QueerPathways.org</p>
        </section>
      </div>
    </div>
  );
}
