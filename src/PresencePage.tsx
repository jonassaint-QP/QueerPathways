import React from 'react';
import { ArrowLeft, Compass, Heart, Sparkles, Shield, Brain, ArrowRight } from 'lucide-react';

const tenets = [
  {
    number: '01',
    title: 'Presence is Not Performance',
    body: 'We live in a culture that monetizes authenticity while demanding conformity. True presence — the radical act of being fully here, as you are, without apology — cannot be performed. It can only be practiced.',
  },
  {
    number: '02',
    title: 'The Body is Not a Problem to Solve',
    body: 'Your nervous system is not a bug. Your sensory processing is not a disorder. Your body has been doing the best it can inside systems that were not designed to hold it. The work is not to fix the body — it is to return home to it.',
  },
  {
    number: '03',
    title: 'Shame is a Navigation Error',
    body: 'Shame says: you are wrong. Guilt says: you did something wrong. We work with the former. Systemic Exhaustion built its case from inherited verdicts — family systems, religious institutions, medical gatekeepers. We appeal every one.',
  },
  {
    number: '04',
    title: 'Sovereignty is Not Isolation',
    body: 'Radical self-governance does not mean radical aloneness. Building Somatic Sovereignty means you can enter into relationship — with others, with community, with the world — without losing your self. It means belonging without self-erasure.',
  },
  {
    number: '05',
    title: 'Joy is Not a Reward for Suffering',
    body: 'We are trained to believe we must earn our joy. That rest must be deserved. That pleasure requires justification. This practice rejects that calculus entirely. Joy is not the destination after healing — it is available now, in the practice itself.',
  },
  {
    number: '06',
    title: 'Pathways are Plural',
    body: 'There is no one way to be queer. No correct way to be neurodivergent. No required narrative of gender. No prescribed shape for love. This practice honors the multiplicity of your experience and refuses to collapse it into a diagnostic category.',
  },
];

export default function PresencePage() {
  return (
    <div className="min-h-screen bg-emerald-950 text-amber-50 px-6 py-14">
      <div className="max-w-5xl mx-auto space-y-16">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-amber-300 hover:text-amber-100 transition"
        >
          <ArrowLeft size={16} />
          Back to Queer Pathways
        </a>

        <header className="space-y-6 max-w-4xl">
          <p className="text-xs uppercase tracking-widest text-amber-400 font-semibold">Practice Manifesto</p>
          <h1 className="text-5xl md:text-7xl font-bold font-serif leading-tight">
            Pathways to Presence.
          </h1>
          <p className="text-xl text-amber-100 leading-relaxed">
            A manifesto for the Double-Outsider. A declaration for sovereignty architecture. A map toward Somatic Sovereignty, unmasked joy, and radical belonging.
          </p>
          <div className="h-px w-16 bg-amber-400" />
        </header>

        <section className="space-y-4">
          <p className="text-amber-100 leading-relaxed text-lg max-w-3xl">
            This practice was built in response to a gap in the mental health landscape: the brilliant, burned-out, queer and neurodivergent person who has tried every evidence-based protocol and still feels like a stranger in their own body.
          </p>
          <p className="text-amber-100 leading-relaxed text-lg max-w-3xl">
            Pathways to Presence is not a model. It is a set of commitments — clinical, ethical, and relational — that govern how we show up in this work.
          </p>
        </section>

        <section className="space-y-8">
          <h2 className="text-3xl font-bold font-serif">The Six Tenets</h2>
          <div className="space-y-6">
            {tenets.map((tenet) => (
              <div
                key={tenet.number}
                className="border-l-2 border-amber-400 pl-8 py-2 space-y-2"
              >
                <p className="text-xs font-mono text-amber-400 tracking-widest">{tenet.number}</p>
                <h3 className="text-xl font-bold font-serif">{tenet.title}</h3>
                <p className="text-amber-100 leading-relaxed">{tenet.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-emerald-900/35 border border-emerald-800/60 rounded-3xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold font-serif">What This Practice Is Not</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-emerald-950/60 rounded-xl p-5 space-y-2 border border-emerald-800/40">
              <p className="font-semibold text-amber-300">Not Symptom Management</p>
              <p className="text-sm text-amber-100">We are not here to help you cope with systems that harm you. We help you build the internal architecture to resist, transform, and transcend them.</p>
            </div>
            <div className="bg-emerald-950/60 rounded-xl p-5 space-y-2 border border-emerald-800/40">
              <p className="font-semibold text-amber-300">Not Identity Correction</p>
              <p className="text-sm text-amber-100">No part of your queerness, your neurodivergence, your kink, or your relational structure is pathology. We don't fix what isn't broken.</p>
            </div>
            <div className="bg-emerald-950/60 rounded-xl p-5 space-y-2 border border-emerald-800/40">
              <p className="font-semibold text-amber-300">Not Toxic Positivity</p>
              <p className="text-sm text-amber-100">Presence does not mean bypassing pain. It means developing the capacity to be with it — without collapsing, without dissociating, without litigating.</p>
            </div>
            <div className="bg-emerald-950/60 rounded-xl p-5 space-y-2 border border-emerald-800/40">
              <p className="font-semibold text-amber-300">Not a Linear Process</p>
              <p className="text-sm text-amber-100">Healing is non-linear, non-sequential, and non-hierarchical. We do not grade your progress. We track your pattern.</p>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold font-serif">The Tools of the Practice</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-emerald-900/30 border border-emerald-800/60 rounded-2xl p-6 space-y-3 text-center">
              <Brain className="text-amber-400 mx-auto" size={28} />
              <p className="font-semibold">Somatic Experiencing</p>
              <p className="text-xs text-amber-100">Bottom-up processing for the body that has outrun the mind.</p>
            </div>
            <div className="bg-emerald-900/30 border border-emerald-800/60 rounded-2xl p-6 space-y-3 text-center">
              <Heart className="text-amber-400 mx-auto" size={28} />
              <p className="font-semibold">Attachment Work</p>
              <p className="text-xs text-amber-100">Mapping relational patterns to their origin and interrupting the cycle.</p>
            </div>
            <div className="bg-emerald-900/30 border border-emerald-800/60 rounded-2xl p-6 space-y-3 text-center">
              <Compass className="text-amber-400 mx-auto" size={28} />
              <p className="font-semibold">Narrative Medicine</p>
              <p className="text-xs text-amber-100">Reclaiming your story from the systems that rewrote it.</p>
            </div>
            <div className="bg-emerald-900/30 border border-emerald-800/60 rounded-2xl p-6 space-y-3 text-center">
              <Shield className="text-amber-400 mx-auto" size={28} />
              <p className="font-semibold">DBT & ACT</p>
              <p className="text-xs text-amber-100">Evidence-based skills adapted for the neurodivergent and queer context.</p>
            </div>
          </div>
        </section>

        <section className="text-center space-y-8 py-8">
          <Sparkles className="text-amber-400 mx-auto" size={40} />
          <blockquote className="text-2xl md:text-3xl font-serif italic text-amber-50 max-w-3xl mx-auto leading-relaxed">
            "You were never too much. You were placed in containers too small."
          </blockquote>
          <p className="text-sm text-amber-300 font-semibold">— Joshua, LCSW</p>
        </section>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
          <a
            href="https://book.carepatron.com/Queer-Pathways/Joshua?p=1achg8U5QhGVWM9fIz.Kig&s=VI4IFsMw&e=b"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-amber-50 text-emerald-950 px-12 py-4 rounded-full font-bold text-base hover:bg-amber-100 transition-all shadow-lg text-center"
          >
            Begin Your Pathway
          </a>
          <a
            href="/pathways/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border-2 border-amber-50 text-amber-50 px-12 py-4 rounded-full font-bold text-base hover:bg-amber-50/10 transition-all"
          >
            Download PDF
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
