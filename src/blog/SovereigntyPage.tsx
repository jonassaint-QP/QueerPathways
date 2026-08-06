import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { InternalLegalSystem } from '../components/blog/InternalLegalSystem';

const HANGOVER_CYCLE = [
  { label: 'Disclosure', color: 'border-rose-400/50 text-rose-400', desc: 'Sharing something true and vulnerable. The moment the mask comes off.' },
  { label: 'Exposure Fear', color: 'border-amber-400/50 text-amber-400', desc: 'The immediate post-disclosure terror. Did I say too much? Will this be used against me?' },
  { label: 'NS Activation', color: 'border-orange-400/50 text-orange-400', desc: 'The nervous system escalates. Fight, flight, or shutdown — not because danger is present, but because the body remembers past danger.' },
  { label: 'Post-Disclosure Crash', color: 'border-violet-400/50 text-violet-400', desc: 'Exhaustion, shame, and the urge to retract or over-explain. This is not weakness. This is a metabolic event.' },
  { label: 'Recovery & Integration', color: 'border-somatic-warmth/50 text-somatic-warmth', desc: 'If the disclosure was received safely, the nervous system slowly recalibrates. If not, the cycle deepens.' },
];

export default function SovereigntyPage() {
  return (
    <div className="min-h-screen bg-obsidian-deep text-text-primary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">

        <a href="/blog" className="inline-flex items-center gap-1 text-xs font-mono text-text-secondary hover:text-rose-400 transition-colors mb-10 block">
          <ArrowLeft size={12} /> Master Map
        </a>

        <div className="grid lg:grid-cols-[1fr_300px] gap-10">
          <div className="space-y-12">

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <p className="text-[10px] font-mono uppercase tracking-widest text-rose-400 mb-3">Body Pillar</p>
              <h1 className="text-4xl sm:text-5xl font-display font-bold text-text-primary mb-4 leading-tight">Somatic Sovereignty</h1>
              <p className="text-text-secondary max-w-xl leading-relaxed text-lg">
                The neurobiology of the Double-Outsider. Your body is not broken — it is doing exactly what it learned to do.
              </p>
            </motion.div>

            <motion.section initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }} className="space-y-5">
              <h2 className="text-xl font-display font-bold text-text-primary">The Vulnerability Hangover Cycle</h2>
              <p className="text-sm text-text-secondary leading-relaxed">
                The post-disclosure crash is real, has a name, and has a neurobiological explanation that has nothing to do with weakness.
              </p>
              <div className="relative space-y-2">
                {HANGOVER_CYCLE.map((step, i) => (
                  <motion.div
                    key={step.label}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                    className={`flex gap-4 items-start bg-obsidian-card border ${step.color.split(' ')[0]} rounded-xl p-4`}
                  >
                    <div className="shrink-0 flex flex-col items-center gap-1">
                      <span className={`text-[10px] font-bold font-mono ${step.color.split(' ')[1]}`}>{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <div>
                      <p className={`text-sm font-bold font-mono ${step.color.split(' ')[1]} mb-1`}>{step.label}</p>
                      <p className="text-sm text-text-secondary leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="space-y-4">
              <h2 className="text-xl font-display font-bold text-text-primary">The Metabolic Cost of Masking</h2>
              <div className="bg-obsidian-card border border-obsidian-border rounded-2xl p-6 space-y-3">
                <p className="text-sm text-text-secondary leading-relaxed">
                  Code-switching and social masking are not free. Every adaptation — every adjusted tone, every suppressed stim, every performance of neurotypicality — extracts a real neurological and metabolic cost. This is not metaphor. This is biology.
                </p>
                <p className="text-sm text-text-secondary leading-relaxed">
                  For neurodivergent and LGBTQ+ individuals who have masked across multiple social contexts simultaneously, the cumulative debt is significant. Recovery is not laziness. It is physiological recalibration.
                </p>
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.38 }} className="bg-rose-400/5 border border-rose-400/20 rounded-2xl p-6 space-y-3">
              <h3 className="font-bold font-display text-text-primary">The Double-Outsider</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Someone who exists outside of mainstream culture at two or more intersecting axes simultaneously — for example, LGBTQ+ and neurodivergent. Each axis carries its own set of adaptations, stigmas, and survival strategies. At the intersection, these multiply rather than simply add.
              </p>
              <p className="text-sm text-text-secondary leading-relaxed">
                Somatic Sovereignty is the practice of reclaiming ownership of a body that has been shaped by double marginalization.
              </p>
            </motion.section>

            <div className="flex items-center justify-between pt-6 border-t border-obsidian-border">
              <a href="/blog/advocacy" className="text-xs font-mono text-text-secondary hover:text-violet-400 transition-colors inline-flex items-center gap-1">
                <ArrowLeft size={11} /> Clinical Advocacy
              </a>
              <a href="/blog" className="text-xs font-mono text-rose-400 hover:text-text-primary transition-colors inline-flex items-center gap-1">
                Back to Master Map <ArrowRight size={11} />
              </a>
            </div>

          </div>

          <aside className="space-y-4">
            <p className="text-[10px] font-mono uppercase tracking-widest text-text-disabled">ILS Framework</p>
            <InternalLegalSystem variant="sidebar" showRoles={['auditor', 'judge']} />
            <a href="/substack" className="block mt-4 text-center border border-amber-400/30 text-amber-300 hover:text-amber-100 px-5 py-3 rounded-full text-xs font-mono transition-colors">
              Subscribe for updates →
            </a>
          </aside>
        </div>

      </div>
    </div>
  );
}
