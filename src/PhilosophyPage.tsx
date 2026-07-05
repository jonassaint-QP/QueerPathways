import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Brain, Scale, Shield, Heart } from 'lucide-react';

export default function PhilosophyPage() {
  return (
    <div className="min-h-screen bg-[#001807] text-amber-50">
      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#001807] border-b border-emerald-900/70 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-amber-300 hover:text-amber-100 transition text-sm"
          >
            <ArrowLeft size={16} />
            Queer Pathways
          </Link>
          <a
            href="https://book.carepatron.com/Queer-Pathways/Joshua?p=1achg8U5QhGVWM9fIz.Kig&s=VI4IFsMw&e=b"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-50 text-emerald-950 px-6 py-2 rounded-full text-xs font-bold hover:bg-amber-100 transition"
          >
            Book Now
          </a>
        </div>
      </div>

      <main className="pt-24 pb-32 px-6">
        <div className="max-w-4xl mx-auto space-y-24">

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="text-amber-400 uppercase tracking-widest text-xs font-bold">Philosophy</span>
            <h1 className="text-5xl md:text-6xl font-bold font-serif leading-tight">
              We Don't Believe in Broken.
            </h1>
            <p className="text-xl text-amber-100 qp-leading-175 max-w-3xl">
              Every framework at Queer Pathways starts from the same radical premise: you are not a problem to be solved. You're a whole person navigating a world that wasn't built for your wiring, your desire, or your brilliance.
            </p>
            <p className="text-lg text-amber-100 qp-leading-175">
              The clinical industrial complex has spent decades telling queer and neurodivergent people that the problem is inside them. That their processing speed is a "deficit." That their gender is a "confusion." That their kink is a "behavioral issue" requiring correction.
            </p>
            <p className="text-lg font-semibold text-amber-300">We think that's backwards.</p>
          </motion.div>

          {/* The Double-Outsider Framework */}
          <section className="space-y-8 border-t border-emerald-900/40 pt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-4"
            >
              <span className="text-amber-400 uppercase tracking-widest text-xs font-bold">The Framework</span>
              <h2 className="text-4xl font-bold font-serif">The Double-Outsider Framework</h2>
            </motion.div>
            <div className="space-y-5 text-amber-100 text-lg qp-leading-175">
              <p>You're queer in spaces built for straight neurotypicals. Neurodivergent in spaces that penalize your actual wiring. Brilliant in a culture that calls your processing speed a "disability."</p>
              <p>That's not a contradiction. That's pattern recognition in a world that doesn't want to be seen.</p>
              <p>The Double-Outsider doesn't lack insight — they <em>oversee</em>. They've learned to scan every room for exits, decode social scripts in real-time, and carry the mental load of existing at intersections that most people don't have to think about.</p>
            </div>
            <div className="bg-emerald-900/40 border border-emerald-800/50 p-8 rounded-2xl">
              <p className="text-lg italic text-amber-50 qp-leading-175">
                That hypervigilance? That's your survival architecture. It kept you safe. And it's also exhausting you.
              </p>
            </div>
          </section>

          {/* The Internal Courtroom */}
          <section className="space-y-8 border-t border-emerald-900/40 pt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-4"
            >
              <span className="text-amber-400 uppercase tracking-widest text-xs font-bold">The Mechanism</span>
              <h2 className="text-4xl font-bold font-serif">The Internal Courtroom</h2>
              <p className="text-amber-100/70 text-sm uppercase tracking-widest">
                This is what we mean when we say "litigating your existence."
              </p>
            </motion.div>
            <div className="space-y-5 text-amber-100 text-lg qp-leading-175">
              <p>
                Every conversation becomes cross-examination. Every email draft gets re-litigated. Every moment of being "too much" or "not enough" plays on a loop with you as judge, jury, and defendant — all at once.
              </p>
            </div>
            <div className="bg-amber-400/10 border-2 border-amber-400/30 rounded-2xl p-8">
              <p className="text-xl font-semibold text-amber-200">
                We don't help you win the case. We help you adjourn the court.
              </p>
            </div>
          </section>

          {/* The Ambiguity Tax */}
          <section className="space-y-8 border-t border-emerald-900/40 pt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-4"
            >
              <span className="text-amber-400 uppercase tracking-widest text-xs font-bold">The Cost</span>
              <h2 className="text-4xl font-bold font-serif">The Ambiguity Tax</h2>
            </motion.div>
            <div className="space-y-5 text-amber-100 text-lg qp-leading-175">
              <p>
                There's a specific cost to being queer, neurodivergent, or both — and it's not just emotional. It's cognitive. Financial. Relational.
              </p>
              <p>
                It's the extra 45 minutes you spend decoding a group text. The career ceiling that appears when you stop masking. The medical appointments where you have to explain your own identity before you can get care.
              </p>
              <p className="font-semibold text-amber-200">
                We name the tax so you can stop paying it in silence.
              </p>
            </div>
          </section>

          {/* What We Offer Instead */}
          <section className="space-y-8 border-t border-emerald-900/40 pt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-4"
            >
              <span className="text-amber-400 uppercase tracking-widest text-xs font-bold">Our Approach</span>
              <h2 className="text-4xl font-bold font-serif">What We Offer Instead</h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  icon: <Brain className="text-amber-400" size={22} />,
                  title: 'Scaffolding, not fixing.',
                  body: "We don't believe your executive function needs \"correction.\" We build systems around your actual operating system.",
                },
                {
                  icon: <Scale className="text-amber-400" size={22} />,
                  title: 'Relational sovereignty.',
                  body: 'Desire is not an edge case in this room. Kink, polyamory, non-monogamy, celibacy — your relational architecture is yours to design.',
                },
                {
                  icon: <Shield className="text-amber-400" size={22} />,
                  title: 'Gender on your timeline.',
                  body: 'No required regrets. No gatekeeping. No proving you\'re "trans enough."',
                },
                {
                  icon: <Heart className="text-amber-400" size={22} />,
                  title: 'Trauma-informed by default.',
                  body: "Not a checkbox. Not a certification on the wall. It's how we structure every session.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-emerald-900/30 border border-emerald-800/40 p-6 rounded-2xl space-y-3"
                >
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <h3 className="font-bold text-amber-50">{item.title}</h3>
                  </div>
                  <p className="text-amber-100 text-sm qp-leading-175">{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Closing CTA */}
          <section className="border-t border-emerald-900/40 pt-16 text-center space-y-8">
            <h2 className="text-4xl font-bold font-serif">You're Not Broken. You're Just Tired.</h2>
            <p className="text-xl text-amber-100 qp-leading-175 max-w-2xl mx-auto">
              Come as you are — over-explained, under-slept, running on cognitive fumes and a stubborn refusal to shrink. We'll meet you there.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://book.carepatron.com/Queer-Pathways/Joshua?p=1achg8U5QhGVWM9fIz.Kig&s=VI4IFsMw&e=b"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-50 text-emerald-950 px-10 py-4 rounded-full font-bold text-base hover:bg-amber-100 transition shadow-lg"
              >
                Book Your Consultation
              </a>
              <Link
                to="/team"
                className="border-2 border-amber-50 text-amber-50 px-10 py-4 rounded-full font-bold text-base hover:bg-amber-50/10 transition"
              >
                Meet the Team →
              </Link>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
