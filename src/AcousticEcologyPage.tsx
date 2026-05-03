import React from 'react';
import { ArrowLeft, Music, Waves, Brain, Heart, CheckCircle2, Headphones, Quote } from 'lucide-react';

const tracks = [
  {
    title: 'Grounding Frequencies',
    description: 'Low-frequency binaural tones calibrated for nervous system downregulation. Ideal for pre-session somatic preparation.',
    use: 'Pre-session / Dysregulation',
    hz: '40Hz Delta',
  },
  {
    title: 'Sensory Threshold',
    description: 'Ambient soundscape designed for hypervigilant nervous systems. Reduces auditory overwhelm while maintaining gentle alertness.',
    use: 'Sensory overload / Masking recovery',
    hz: '528Hz Solfeggio',
  },
  {
    title: 'Internal Auditor Recess',
    description: 'Rhythmic, repetitive patterns that interrupt shame-loop rumination by engaging the pattern-recognition circuitry.',
    use: 'RSD episodes / Shame spirals',
    hz: 'Alpha wave 10Hz',
  },
  {
    title: 'Unmasked',
    description: 'Open, spacious soundscape for exploratory identity work. Used in sessions focused on gender story and authentic self-expression.',
    use: 'Gender narrative / Identity work',
    hz: 'Theta 6Hz',
  },
];

export default function AcousticEcologyPage() {
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
          <p className="text-xs uppercase tracking-widest text-amber-400 font-semibold">Acoustic Ecology</p>
          <h1 className="text-4xl md:text-6xl font-bold font-serif leading-tight">
            Music as Treatment.
          </h1>
          <p className="text-lg text-amber-100 leading-relaxed max-w-4xl">
            Sound is not a backdrop. For neurodivergent and queer nervous systems, it is a clinical tool. We integrate intentional sonic environments — what we call <em>Acoustic Ecology</em> — into the therapeutic frame.
          </p>
        </header>

        <section className="bg-emerald-900/35 border border-emerald-800/60 rounded-3xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold font-serif flex items-center gap-3">
            <Waves className="text-amber-400" size={28} />
            The Clinical Theory
          </h2>
          <p className="text-amber-100 leading-relaxed text-lg">
            The polyvagal theory tells us that the auditory pathway is one of the fastest routes to nervous system state change. For clients with sensory processing differences, music is not entertainment — it is <strong>environmental scaffolding</strong>.
          </p>
          <div className="grid md:grid-cols-3 gap-4 pt-2">
            <div className="bg-emerald-950/60 rounded-xl p-5 space-y-2 border border-emerald-800/40">
              <p className="font-semibold text-amber-300 flex items-center gap-2">
                <Brain size={16} />
                Neurodivergent Resonance
              </p>
              <p className="text-sm text-amber-100">ADHD and Autistic nervous systems respond differently to auditory input. We calibrate accordingly, not against factory settings.</p>
            </div>
            <div className="bg-emerald-950/60 rounded-xl p-5 space-y-2 border border-emerald-800/40">
              <p className="font-semibold text-amber-300 flex items-center gap-2">
                <Heart size={16} />
                Somatic Attunement
              </p>
              <p className="text-sm text-amber-100">Rhythm and frequency support the body's return to ventral vagal safety — before words become available.</p>
            </div>
            <div className="bg-emerald-950/60 rounded-xl p-5 space-y-2 border border-emerald-800/40">
              <p className="font-semibold text-amber-300 flex items-center gap-2">
                <Music size={16} />
                Identity Expression
              </p>
              <p className="text-sm text-amber-100">Musical autobiography as a clinical tool: what you listened to during your coming-out, your masking years, your first unmasked moment.</p>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold font-serif flex items-center gap-3">
            <Headphones className="text-amber-400" size={28} />
            The Therapeutic Soundtrack
          </h2>
          <p className="text-amber-100 leading-relaxed">
            Below are the sonic environments used in and around Queer Pathways sessions. Each is designed for a specific clinical context — not as background music, but as active co-regulators.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {tracks.map((track) => (
              <div
                key={track.title}
                className="bg-emerald-900/30 border border-emerald-800/60 rounded-2xl p-6 space-y-3"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-bold text-lg font-serif">{track.title}</h3>
                  <span className="text-xs text-amber-400 font-mono shrink-0 mt-1">{track.hz}</span>
                </div>
                <p className="text-sm text-amber-100 leading-relaxed">{track.description}</p>
                <p className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
                  Use: {track.use}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-emerald-900/40 border border-emerald-800/50 p-10 rounded-3xl space-y-6">
          <Quote className="text-amber-400" size={32} />
          <blockquote className="text-lg leading-relaxed italic text-amber-50">
            "Before a client can access narrative, they need to be in their body. Sound gets them there faster than any intervention I know."
          </blockquote>
          <p className="text-sm text-amber-300 font-semibold">— Joshua, LCSW</p>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-bold font-serif">How It Works in Practice</h2>
          <ul className="space-y-4 text-amber-100 leading-relaxed">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-amber-400 mt-1 shrink-0" size={18} />
              <span><strong>Pre-session calibration:</strong> Clients receive a curated track to listen to for 10 minutes before the session begins, to arrive in window-of-tolerance.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-amber-400 mt-1 shrink-0" size={18} />
              <span><strong>In-session ambient environment:</strong> Low-level soundscapes are used during body-based work to maintain somatic presence without auditory distraction.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-amber-400 mt-1 shrink-0" size={18} />
              <span><strong>Musical autobiography:</strong> Clients are invited to share a song that represents a pivotal moment in their identity narrative as a clinical intake tool.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="text-amber-400 mt-1 shrink-0" size={18} />
              <span><strong>Post-session integration:</strong> A closing track anchors the insight from the session to a sensory memory, reinforcing neuroplastic change.</span>
            </li>
          </ul>
        </section>

        <div className="text-center pt-4">
          <a
            href="https://book.carepatron.com/Queer-Pathways/Joshua?p=1achg8U5QhGVWM9fIz.Kig&s=VI4IFsMw&e=b"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-amber-50 text-emerald-950 px-12 py-4 rounded-full font-bold text-base hover:bg-amber-100 transition-all shadow-lg"
          >
            Book a Session
          </a>
        </div>
      </div>
    </div>
  );
}
