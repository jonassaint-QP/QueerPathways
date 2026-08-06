import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Linkedin, Rss, UserCheck, Shield } from 'lucide-react';

const FOCUS_AREAS = [
  { icon: <Shield size={14} />, label: 'Trauma-informed practice updates', color: 'text-cyan-cyber' },
  { icon: <UserCheck size={14} />, label: 'Kink-affirming care education', color: 'text-violet-400' },
  { icon: <UserCheck size={14} />, label: 'LGBTQ+ clinical competency', color: 'text-rose-400' },
  { icon: <Shield size={14} />, label: 'Neurodivergent-affirming approaches', color: 'text-amber-400' },
];

const TESTIMONIALS = [
  { quote: 'Finally — clinical writing that treats kink-informed care as a standard of competence, not a specialty niche.', role: 'Licensed Clinical Social Worker, PA' },
  { quote: 'The ILS framework gave me a new vocabulary for what my neurodivergent clients are describing in relationships.', role: 'Marriage & Family Therapist' },
  { quote: 'Joshua writes about the double bind of being queer and neurodivergent with more precision than anything in the literature.', role: 'Psychologist, Ontario' },
];

export default function LinkedInPage() {
  return (
    <div className="min-h-screen bg-obsidian-deep text-text-primary">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-12">

        <a href="/" className="inline-flex items-center gap-1 text-xs font-mono text-text-secondary hover:text-blue-400 transition-colors">
          <ArrowLeft size={12} /> Home
        </a>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p className="text-[10px] font-mono uppercase tracking-widest text-blue-400 mb-3">Professional Network</p>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-text-primary mb-4">Specialist Advocacy</h1>
          <p className="text-text-secondary max-w-xl leading-relaxed">
            Clinical education for practitioners, referral partners, and allies on LinkedIn. Focused on the gaps mainstream training does not cover.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}
          className="bg-obsidian-card border border-obsidian-border rounded-2xl p-6 space-y-4">
          <h2 className="font-display font-bold text-text-primary">Content Focus Areas</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {FOCUS_AREAS.map(f => (
              <div key={f.label} className="flex items-center gap-3 text-sm text-text-secondary">
                <span className={f.color}>{f.icon}</span>
                {f.label}
              </div>
            ))}
          </div>
        </motion.div>

        <section className="space-y-3">
          <h2 className="font-display font-bold text-text-primary">From the Community</h2>
          <div className="space-y-3">
            {TESTIMONIALS.map((t, i) => (
              <React.Fragment key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="bg-obsidian-card border border-blue-400/15 rounded-2xl p-5 space-y-2"
                >
                  <p className="text-text-secondary italic leading-relaxed text-sm">&ldquo;{t.quote}&rdquo;</p>
                  <p className="text-xs text-text-disabled font-semibold uppercase tracking-wide font-mono">— {t.role}</p>
                </motion.div>
              </React.Fragment>
            ))}
          </div>
        </section>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-blue-500/10 border border-blue-400/30 rounded-2xl p-7"
        >
          <div className="space-y-2">
            <p className="text-xl font-bold font-serif text-text-primary">Referral Partner?</p>
            <p className="text-sm text-text-secondary">Queer Pathways accepts warm referrals from aligned clinicians.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7428204908253904896" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-text-primary px-7 py-2.5 rounded-full font-bold text-sm transition-all">
              <Linkedin size={14} /> Follow Newsletter
            </a>
            <a href="/referral"
              className="inline-flex items-center gap-2 border border-amber-400/30 text-amber-300 hover:text-text-primary px-7 py-2.5 rounded-full font-semibold text-sm transition-all">
              Referral Info <ArrowRight size={13} />
            </a>
          </div>
        </motion.div>

        <div className="flex items-center gap-2 text-xs text-text-disabled font-mono">
          <Rss size={11} className="text-blue-400/50" />
          Posts distribute here automatically via RSS ·
          <a href="/distribution" className="text-blue-400/70 hover:text-blue-300 transition-colors inline-flex items-center gap-1">
            Automation Setup <ArrowRight size={10} />
          </a>
        </div>

      </div>
    </div>
  );
}
