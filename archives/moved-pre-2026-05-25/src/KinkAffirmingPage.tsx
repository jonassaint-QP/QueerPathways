import React from 'react';
import { ArrowLeft, Heart, Shield, CheckCircle2, Lock, Sparkles, Quote } from 'lucide-react';

const pillars = [
  {
    icon: Shield,
    title: 'Consent-Centered Practice',
    body: 'We use a consent-forward clinical lens. What you explore in your erotic and relational life is your domain. Our role is to help you explore it with intention, safety, and self-knowledge — not to assess or pathologize your desires.',
  },
  {
    icon: Lock,
    title: 'Risk-Aware, Not Risk-Averse',
    body: 'We understand the distinction between RACK (Risk Aware Consensual Kink) and SSC (Safe, Sane, Consensual). We use a trauma-informed and harm reduction framework — not a harm elimination one.',
  },
  {
    icon: Heart,
    title: 'Aftercare as Clinical Tool',
    body: 'The neurochemical drop after intense scenes — "sub drop" or "dom drop" — is a real physiological event. We incorporate aftercare planning and nervous system regulation into the therapeutic frame.',
  },
  {
    icon: Sparkles,
    title: 'Identity Integration',
    body: 'Kink and BDSM identities are valid expressions of self. We help clients integrate their erotic identity with their broader sense of worth, belonging, and relational safety.',
  },
];

export default function KinkAffirmingPage() {
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
          <p className="text-xs uppercase tracking-widest text-amber-400 font-semibold">Kink-Affirming Care</p>
          <h1 className="text-4xl md:text-6xl font-bold font-serif leading-tight">
            No Gatekeeping.<br />No Moralizing.<br />Full Presence.
          </h1>
          <p className="text-lg text-amber-100 leading-relaxed max-w-4xl">
            Queer Pathways is a kink-affirming practice. We provide specialized therapeutic support for individuals and relationships that include BDSM, kink, and power-exchange dynamics — from a trauma-informed, consent-forward, and non-judgmental clinical lens.
          </p>
        </header>

        <div className="bg-amber-400/10 border border-amber-400/30 rounded-2xl p-6">
          <p className="text-amber-200 leading-relaxed">
            <strong className="text-amber-50">A note on DSM-V:</strong> The DSM-V distinguishes between paraphilias (atypical sexual interests) and paraphilic disorders (which require distress or harm). Consensual kink and BDSM activity between adults is not a disorder. We do not treat kink as pathology.
          </p>
        </div>

        <section className="grid md:grid-cols-2 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-emerald-900/35 border border-emerald-800/60 rounded-2xl p-8 space-y-4"
            >
              <h3 className="text-xl font-bold flex items-center gap-2 font-serif">
                <pillar.icon className="text-amber-400 shrink-0" size={22} />
                {pillar.title}
              </h3>
              <p className="text-amber-100 leading-relaxed text-sm">{pillar.body}</p>
            </div>
          ))}
        </section>

        <section className="bg-emerald-900/35 border border-emerald-800/60 rounded-3xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold font-serif">Who This Is For</h2>
          <ul className="space-y-4 text-amber-100 leading-relaxed">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-amber-400 mt-1 shrink-0" size={18} />
              <span>Individuals processing shame, guilt, or fear around their kink identity — often stemming from religious, familial, or community messaging.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-amber-400 mt-1 shrink-0" size={18} />
              <span>People navigating complex power-exchange relationships who want relational therapy without being pathologized by their therapist.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-amber-400 mt-1 shrink-0" size={18} />
              <span>Submissives, dominants, and switches processing the intersection of their relational role with anxiety, depression, or trauma.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-amber-400 mt-1 shrink-0" size={18} />
              <span>Those who have experienced trauma within kink spaces and need a clinician who can hold both the harm and the validity of the identity.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-amber-400 mt-1 shrink-0" size={18} />
              <span>Neurodivergent clients for whom kink dynamics offer needed structure, predictability, or sensory engagement.</span>
            </li>
          </ul>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-bold font-serif">What Sessions Look Like</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-emerald-950/60 rounded-xl p-5 space-y-2 border border-emerald-800/40">
              <p className="font-semibold text-amber-300">Intake & History</p>
              <p className="text-sm text-amber-100">We explore your relational and erotic history without judgment. You set the disclosure pace.</p>
            </div>
            <div className="bg-emerald-950/60 rounded-xl p-5 space-y-2 border border-emerald-800/40">
              <p className="font-semibold text-amber-300">Somatic & Attachment Work</p>
              <p className="text-sm text-amber-100">We examine how your nervous system responds in dominant or submissive roles, and what that activates somatically.</p>
            </div>
            <div className="bg-emerald-950/60 rounded-xl p-5 space-y-2 border border-emerald-800/40">
              <p className="font-semibold text-amber-300">Integration & Identity</p>
              <p className="text-sm text-amber-100">We work toward coherent self-narrative: one where your kink identity is integrated, not compartmentalized.</p>
            </div>
          </div>
        </section>

        <section className="bg-emerald-900/40 border border-emerald-800/50 p-10 rounded-3xl space-y-6">
          <Quote className="text-amber-400" size={32} />
          <blockquote className="text-lg leading-relaxed italic text-amber-50">
            "Consent isn't just a kink principle. It's the foundation of all therapeutic work. If I can't hold your erotic self with the same respect I hold your grief, I'm not doing my job."
          </blockquote>
          <p className="text-sm text-amber-300 font-semibold">— Joshua, LCSW</p>
        </section>

        <div className="text-center pt-4">
          <a
            href="https://book.carepatron.com/Queer-Pathways/Joshua?p=1achg8U5QhGVWM9fIz.Kig&s=VI4IFsMw&e=b"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-amber-50 text-emerald-950 px-12 py-4 rounded-full font-bold text-base hover:bg-amber-100 transition-all shadow-lg"
          >
            Book a Kink-Affirming Session
          </a>
        </div>
      </div>
    </div>
  );
}
