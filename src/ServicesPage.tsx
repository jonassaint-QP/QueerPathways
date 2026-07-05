import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Brain, Scale, Shield, Users, CheckCircle2 } from 'lucide-react';

const SPECIALIST_SCAFFOLDING_ITEMS = [
  'Executive function mapping, not "get a planner"',
  'Rejection sensitivity dysphoria — treated as a nervous system pattern, not a character flaw',
  'Cognitive load audits for work, relationships, daily living',
  'Point-of-performance interventions — meeting your brain where it actually gets stuck',
];

const RELATIONAL_SOVEREIGNTY_ITEMS = [
  'Kink-fluent care — no explaining the basics, no pathologizing your desires',
  'Polyamory and ENM support — from opening up to de-escalation to NRE management',
  'Attachment repair for the multiply-relational brain',
  "Desire discrepancy navigation — when want doesn't match (and that's okay)",
  'Sex therapy that actually understands the queer body',
];

const GENDER_STORY_ITEMS = [
  'Pre-transition exploration and embodiment work',
  'Social, medical, and legal transition support',
  'Letters of readiness when needed — written from an affirming, informed position',
  'Post-transition integration (because the journey doesn\'t end at "passing")',
];

export default function ServicesPage() {
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
        <div className="max-w-5xl mx-auto space-y-24">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="text-amber-400 uppercase tracking-widest text-xs font-bold">Services</span>
            <h1 className="text-5xl md:text-6xl font-bold font-serif leading-tight">
              Three Pathways. One Radical Premise.
            </h1>
            <p className="text-2xl text-amber-300 font-semibold">
              Your identity is not a problem to be managed.
            </p>
            <p className="text-lg text-amber-100 qp-leading-175 max-w-3xl">
              We don't do "treatment plans" that treat your queerness or neurodivergence as a complication. We do scaffolding — clinical care built around the architecture you already have.
            </p>
          </motion.div>

          {/* Service 1: Specialist Scaffolding */}
          <section className="space-y-10 border-t border-emerald-900/40 pt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex items-start gap-6"
            >
              <div className="w-14 h-14 bg-amber-400/20 rounded-xl flex items-center justify-center shrink-0">
                <Brain className="text-amber-400" size={28} />
              </div>
              <div className="space-y-2">
                <span className="text-amber-400/70 text-sm font-mono">01</span>
                <h2 className="text-4xl font-bold font-serif">Specialist Scaffolding</h2>
                <p className="text-amber-300 text-lg">
                  For the ADHD/autistic brain running on cognitive friction.
                </p>
              </div>
            </motion.div>
            <div className="pl-20 space-y-5 text-amber-100 text-lg qp-leading-175">
              <p>
                You've got the intelligence. You've got the drive. What you don't have is a system that actually fits how your brain processes.
              </p>
              <p>
                We don't "fix" your executive function — we map it. Identify where the friction lives (transitions? task initiation? rejection sensitivity?) and build external scaffolding that lets your actual operating system run without the constant spin-up cost.
              </p>
            </div>
            <div className="pl-20 space-y-4">
              <p className="text-sm font-bold uppercase tracking-widest text-amber-400">What this looks like:</p>
              <ul className="space-y-3">
                {SPECIALIST_SCAFFOLDING_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-amber-100">
                    <CheckCircle2 className="text-amber-400 shrink-0 mt-0.5" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Service 2: Relational Sovereignty */}
          <section className="space-y-10 border-t border-emerald-900/40 pt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex items-start gap-6"
            >
              <div className="w-14 h-14 bg-amber-400/20 rounded-xl flex items-center justify-center shrink-0">
                <Scale className="text-amber-400" size={28} />
              </div>
              <div className="space-y-2">
                <span className="text-amber-400/70 text-sm font-mono">02</span>
                <h2 className="text-4xl font-bold font-serif">Relational Sovereignty</h2>
                <p className="text-amber-300 text-lg">
                  Kink, polyamory, attachment repair, desire exploration.
                </p>
              </div>
            </motion.div>
            <div className="pl-20 space-y-5 text-amber-100 text-lg qp-leading-175">
              <p>This is not an edge case here. It's the curriculum.</p>
              <p>
                Most therapy treats non-monogamy and kink as disclosures to make. We treat them as data — information about how you're wired for connection, intimacy, and pleasure.
              </p>
            </div>
            <div className="pl-20 space-y-4">
              <p className="text-sm font-bold uppercase tracking-widest text-amber-400">What this looks like:</p>
              <ul className="space-y-3">
                {RELATIONAL_SOVEREIGNTY_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-amber-100">
                    <CheckCircle2 className="text-amber-400 shrink-0 mt-0.5" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Service 3: Gender Story Prep */}
          <section className="space-y-10 border-t border-emerald-900/40 pt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex items-start gap-6"
            >
              <div className="w-14 h-14 bg-amber-400/20 rounded-xl flex items-center justify-center shrink-0">
                <Shield className="text-amber-400" size={28} />
              </div>
              <div className="space-y-2">
                <span className="text-amber-400/70 text-sm font-mono">03</span>
                <h2 className="text-4xl font-bold font-serif">Gender Story Prep</h2>
                <p className="text-amber-300 text-lg">
                  Transition support with zero gatekeeping. Your timeline. Your terms.
                </p>
              </div>
            </motion.div>
            <div className="pl-20 space-y-5 text-amber-100 text-lg qp-leading-175">
              <p>
                We don't require a "regret waiting period." We don't make you prove you're trans enough. We help you articulate your gender story — whatever it is, wherever it's going — and build the internal scaffolding to live it.
              </p>
            </div>
            <div className="pl-20 space-y-4">
              <p className="text-sm font-bold uppercase tracking-widest text-amber-400">What this looks like:</p>
              <ul className="space-y-3">
                {GENDER_STORY_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-amber-100">
                    <CheckCircle2 className="text-amber-400 shrink-0 mt-0.5" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* DBT Consultation Group */}
          <section className="border-t border-emerald-900/40 pt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="bg-emerald-900/30 border border-emerald-800/50 rounded-3xl p-8 md:p-12 space-y-6"
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-amber-400/20 rounded-xl flex items-center justify-center shrink-0">
                  <Users className="text-amber-400" size={28} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold font-serif">The DBT Consultation Group</h2>
                  <p className="text-amber-400 text-sm uppercase tracking-widest mt-2">For Licensed Therapists</p>
                </div>
              </div>
              <div className="space-y-4 text-amber-100 text-lg qp-leading-175">
                <p>
                  For licensed therapists who want to deepen their DBT practice in a space that actually gets queer and neurodivergent adults.
                </p>
                <p>
                  This is not a beginner's training. It's a consultation group for clinicians who want to refine their skills, sharpen their case conceptualization, and work with clients who've been failed by cookie-cutter DBT.
                </p>
              </div>
              <p className="text-sm text-amber-100/60">Per session: $75 USD / $100 CAD</p>
            </motion.div>
          </section>

          {/* Footer note + CTA */}
          <div className="text-center space-y-6 pt-8 border-t border-emerald-900/40">
            <p className="text-amber-100 qp-leading-175 max-w-2xl mx-auto">
              All services are trauma-informed, neuro-affirming, and kink-fluent by default. No explaining the glossary. No performing wellness.
            </p>
            <a
              href="https://book.carepatron.com/Queer-Pathways/Joshua?p=1achg8U5QhGVWM9fIz.Kig&s=VI4IFsMw&e=b"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-amber-50 text-emerald-950 px-10 py-4 rounded-full font-bold text-base hover:bg-amber-100 transition shadow-lg"
            >
              Find Your Path
              <ArrowRight size={18} />
            </a>
          </div>

        </div>
      </main>
    </div>
  );
}
