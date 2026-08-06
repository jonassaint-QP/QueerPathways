import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { InternalLegalSystem } from '../components/blog/InternalLegalSystem';

const CONCEPTS = [
  {
    term: 'RACK',
    full: 'Risk-Aware Consensual Kink',
    color: 'border-cyan-cyber/30 text-cyan-cyber',
    bg: 'bg-cyan-cyber/5',
    desc: 'A framework that centers informed awareness of risk as the foundation of consensual engagement. Not just consent, but consent with eyes fully open.',
  },
  {
    term: 'PRICK',
    full: 'Personal Responsibility in Consensual Kink',
    color: 'border-violet-400/30 text-violet-400',
    bg: 'bg-violet-400/5',
    desc: 'Extends RACK by placing the responsibility for managing that risk explicitly on the individual — both parties own their participation.',
  },
  {
    term: 'Ambiguity Tax',
    full: 'The cost of unclear relationship agreements',
    color: 'border-amber-400/30 text-amber-400',
    bg: 'bg-amber-400/5',
    desc: 'Every unanswered question, every undefined expectation, extracts a neurological toll. The Ambiguity Tax is what hypervigilant systems pay when the agreement is unclear.',
  },
  {
    term: 'Negotiation as Love Language',
    full: 'Explicit agreements as relational care',
    color: 'border-somatic-warmth/30 text-somatic-warmth',
    bg: 'bg-somatic-warmth/5',
    desc: 'For neurodivergent and LGBTQ+ individuals, explicit negotiation is not a sign of distrust. It is the most direct form of relational safety.',
  },
];

const ATTACHMENTS = [
  {
    name: 'The Anxious Auditor',
    tagline: 'Hypervigilance as an attachment strategy',
    color: 'border-amber-400/40 bg-amber-400/5',
    label: 'text-amber-400',
    body: 'When the nervous system learned early that connection was inconsistent, it developed a monitoring system. The Anxious Auditor tracks tone, silence, read receipts, and micro-expressions — not out of manipulation, but out of survival. The goal: prevent the next abandonment before it happens.',
  },
  {
    name: 'The Avoidant Judge',
    tagline: 'Distance as self-protection',
    color: 'border-rose-400/40 bg-rose-400/5',
    label: 'text-rose-400',
    body: 'When closeness was historically unsafe, the system learned that distance was the only reliable protection. The Avoidant Judge does not become cold — it issues a preemptive verdict of disconnection before vulnerability can be weaponized.',
  },
];

export default function ArchitecturePage() {
  return (
    <div className="min-h-screen bg-obsidian-deep text-text-primary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">

        <a href="/blog" className="inline-flex items-center gap-1 text-xs font-mono text-text-secondary hover:text-cyan-cyber transition-colors mb-10 block">
          <ArrowLeft size={12} /> Master Map
        </a>

        <div className="grid lg:grid-cols-[1fr_300px] gap-10">
          <div className="space-y-12">

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <p className="text-[10px] font-mono uppercase tracking-widest text-cyan-cyber mb-3">Connection Pillar</p>
              <h1 className="text-4xl sm:text-5xl font-display font-bold text-text-primary mb-4 leading-tight">Relational Architecture</h1>
              <p className="text-text-secondary max-w-xl leading-relaxed text-lg">
                Dismantling the Internal Legal System within relationships. How we build safer, clearer, more honest connection.
              </p>
            </motion.div>

            <motion.section initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }} className="space-y-4">
              <h2 className="text-xl font-display font-bold text-text-primary">Key Frameworks</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {CONCEPTS.map(c => (
                  <div key={c.term} className={`${c.bg} border ${c.color.split(' ')[0]} rounded-xl p-5 space-y-2`}>
                    <p className={`text-sm font-bold font-mono ${c.color.split(' ')[1]}`}>{c.term}</p>
                    <p className="text-[11px] text-text-disabled font-mono">{c.full}</p>
                    <p className="text-sm text-text-secondary leading-relaxed">{c.desc}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }} className="space-y-4">
              <h2 className="text-xl font-display font-bold text-text-primary">Attachment Archetypes</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {ATTACHMENTS.map(a => (
                  <div key={a.name} className={`border ${a.color} rounded-xl p-5 space-y-2`}>
                    <p className={`font-bold font-mono text-sm ${a.label}`}>{a.name}</p>
                    <p className="text-[11px] text-text-disabled italic">{a.tagline}</p>
                    <p className="text-sm text-text-secondary leading-relaxed">{a.body}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            <div className="flex items-center justify-between pt-6 border-t border-obsidian-border">
              <a href="/blog" className="text-xs font-mono text-text-secondary hover:text-cyan-cyber transition-colors inline-flex items-center gap-1">
                <ArrowLeft size={11} /> Master Map
              </a>
              <a href="/blog/advocacy" className="text-xs font-mono text-cyan-cyber hover:text-text-primary transition-colors inline-flex items-center gap-1">
                Clinical Advocacy <ArrowRight size={11} />
              </a>
            </div>

          </div>

          <aside className="space-y-4">
            <p className="text-[10px] font-mono uppercase tracking-widest text-text-disabled">ILS Framework</p>
            <InternalLegalSystem variant="sidebar" showRoles={['prosecutor', 'auditor', 'judge']} />
            <a href="/substack" className="block mt-4 text-center border border-amber-400/30 text-amber-300 hover:text-amber-100 px-5 py-3 rounded-full text-xs font-mono transition-colors">
              Read series on Substack →
            </a>
          </aside>
        </div>

      </div>
    </div>
  );
}
