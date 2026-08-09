import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Rss, BookOpen } from 'lucide-react';

const SERIES = [
  {
    title: 'The Outlaw Therapist',
    badge: 'Flagship Series',
    badgeColor: 'bg-orange-400/10 text-orange-300 border-orange-400/30',
    desc: 'Clinical theory meets lived experience. The framework behind the practice — written for people who are tired of therapy that makes them feel broken.',
  },
  {
    title: 'Double-Outsider Dispatches',
    badge: 'Intersection Series',
    badgeColor: 'bg-rose-400/10 text-rose-300 border-rose-400/30',
    desc: 'At the intersection of LGBTQ+ and neurodivergent, where the maps run out. Essays, frameworks, and honest dispatches from the overlap.',
  },
  {
    title: 'Letters from the Foundry',
    badge: 'Practice Reflections',
    badgeColor: 'bg-amber-400/10 text-amber-300 border-amber-400/30',
    desc: 'Behind-the-scenes reflections on building a clinical practice outside the mainstream — the decisions, the ethics, the contradictions.',
  },
];

export default function SubstackPage() {
  return (
    <div className="min-h-screen bg-obsidian-deep text-text-primary">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-12">

        <a href="/" className="inline-flex items-center gap-1 text-xs font-mono text-text-secondary hover:text-orange-400 transition-colors">
          <ArrowLeft size={12} /> Home
        </a>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p className="text-[10px] font-mono uppercase tracking-widest text-orange-400 mb-3">Editorial</p>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-text-primary mb-4">The Outlaw Therapist</h1>
          <p className="text-text-secondary max-w-xl leading-relaxed">
            Clinical writing for people who have been failed by mainstream mental health — on Substack, 48 hours after it drops on the Master Map.
          </p>
        </motion.div>

        <div className="space-y-4">
          {SERIES.map((s, i) => (
            <React.Fragment key={s.title}>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                className="bg-obsidian-card border border-obsidian-border rounded-2xl p-6 space-y-3"
              >
                <div className={`inline-flex text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full border ${s.badgeColor}`}>
                  {s.badge}
                </div>
                <h3 className="text-lg font-display font-bold text-text-primary">{s.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{s.desc}</p>
              </motion.div>
            </React.Fragment>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-orange-500/10 border border-orange-400/30 rounded-2xl p-7"
        >
          <div className="space-y-2">
            <p className="text-xl font-bold font-serif text-text-primary">Get it in your inbox.</p>
            <p className="text-sm text-text-secondary">Free. No algorithm. Direct from the sanctuary to you.</p>
            <p className="text-xs text-text-disabled font-mono">Content publishes to the Master Map first, then drops here 48 hours later.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a href="https://queerpathways.substack.com" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-obsidian-deep font-bold px-7 py-2.5 rounded-full text-sm transition-all">
              <Rss size={14} /> Subscribe
            </a>
            <a href="/blog" className="inline-flex items-center gap-2 border border-amber-400/30 text-amber-300 hover:text-text-primary px-7 py-2.5 rounded-full font-semibold text-sm transition-all">
              <BookOpen size={14} /> Master Map
            </a>
          </div>
        </motion.div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-text-secondary">
          <span>Read the pillars:</span>
          <a href="/blog/architecture" className="text-somatic-warmth hover:text-text-primary transition-colors inline-flex items-center gap-1 text-xs">Architecture <ArrowRight size={11} /></a>
          <a href="/blog/advocacy" className="text-violet-400 hover:text-text-primary transition-colors inline-flex items-center gap-1 text-xs">Advocacy <ArrowRight size={11} /></a>
          <a href="/blog/sovereignty" className="text-rose-400 hover:text-text-primary transition-colors inline-flex items-center gap-1 text-xs">Sovereignty <ArrowRight size={11} /></a>
        </div>

        <div className="flex items-center gap-2 text-xs text-text-disabled font-mono">
          <Rss size={11} className="text-orange-400/50" />
          Auto-distribution via RSS ·
          <a href="/distribution" className="text-orange-400/70 hover:text-orange-300 transition-colors inline-flex items-center gap-1">
            Setup Guide <ArrowRight size={10} />
          </a>
        </div>

      </div>
    </div>
  );
}
