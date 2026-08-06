import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Rss, Linkedin } from 'lucide-react';
import { PillarCard } from './components/blog/PillarCard';

const PILLARS = [
  {
    title: 'Pathways to Presence',
    subtitle: 'Master Map',
    description: 'The overarching clinical framework. Theory meets lived experience. The map and the territory together.',
    href: '/blog',
    variant: 'presence' as const,
  },
  {
    title: 'Relational Architecture',
    subtitle: 'Connection Pillar',
    description: 'Dismantling the Internal Legal System in relationships. Attachment, negotiation, and the Ambiguity Tax.',
    href: '/blog/architecture',
    variant: 'architecture' as const,
  },
  {
    title: 'Clinical Advocacy',
    subtitle: 'Bridge Pillar',
    description: 'Specialized care and navigating the healthcare system. Trauma-informed kink and the 7-Day Safety Net.',
    href: '/blog/advocacy',
    variant: 'advocacy' as const,
  },
  {
    title: 'Somatic Sovereignty',
    subtitle: 'Body Pillar',
    description: 'The neurobiology of the Double-Outsider. Vulnerability Hangovers, masking costs, and presence as practice.',
    href: '/blog/sovereignty',
    variant: 'sovereignty' as const,
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-obsidian-deep text-text-primary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-16">

        <a href="/" className="inline-flex items-center gap-1 text-xs font-mono text-text-secondary hover:text-cyan-cyber transition-colors">
          <ArrowLeft size={12} /> Home
        </a>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p className="text-[10px] font-mono uppercase tracking-widest text-amber-400 mb-3">The Master Map</p>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-text-primary mb-4 leading-tight">
            Pathways to Presence
          </h1>
          <p className="text-text-secondary max-w-2xl leading-relaxed text-lg">
            The clinical framework that maps the distance between who you perform yourself to be and who you actually are.
            Four pillars. One map. Infinite territory.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="grid sm:grid-cols-2 gap-4"
        >
          {PILLARS.map((p, i) => (
            <React.Fragment key={p.variant}>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
              >
                <PillarCard {...p} />
              </motion.div>
            </React.Fragment>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-obsidian-card border border-amber-400/20 rounded-2xl p-8 flex flex-col sm:flex-row gap-6 items-start sm:items-center"
        >
          <div className="flex-1 space-y-2">
            <p className="text-[10px] font-mono uppercase tracking-widest text-amber-400">Coming Soon</p>
            <h2 className="text-2xl font-display font-bold text-text-primary">Pathways to Presence</h2>
            <p className="text-sm text-text-secondary leading-relaxed">
              The hybrid text/book. Clinical theory, personal essays, and practical frameworks for the Double-Outsider.
              Subscribe to get notified on launch.
            </p>
          </div>
          <a href="/substack"
            className="shrink-0 inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/40 text-amber-300 hover:bg-amber-400 hover:text-obsidian-deep px-6 py-3 rounded-full text-sm font-bold font-mono uppercase tracking-widest transition-all">
            Get Notified
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap gap-4 pt-2 border-t border-obsidian-border"
        >
          <a href="/substack" className="inline-flex items-center gap-2 text-xs font-mono text-text-secondary hover:text-orange-400 transition-colors">
            <Rss size={12} /> Substack
          </a>
          <a href="/linkedin" className="inline-flex items-center gap-2 text-xs font-mono text-text-secondary hover:text-blue-400 transition-colors">
            <Linkedin size={12} /> LinkedIn Newsletter
          </a>
          <a href="/distribution" className="inline-flex items-center gap-2 text-xs font-mono text-text-secondary hover:text-cyan-cyber transition-colors">
            <BookOpen size={12} /> Distribution Setup
          </a>
        </motion.div>

      </div>
    </div>
  );
}
