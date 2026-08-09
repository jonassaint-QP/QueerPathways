import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Shield, AlertCircle } from 'lucide-react';
import { InternalLegalSystem } from '../components/blog/InternalLegalSystem';

const SAFETY_NET = [
  { day: 'Day 0', label: 'Notice', color: 'text-rose-400', desc: 'I identify that my scope, capacity, or specialization does not fully serve your needs. I name this directly — with care, not as rejection.' },
  { day: 'Days 1–2', label: 'Active Search', color: 'text-amber-400', desc: 'I begin actively identifying referral options: trusted colleagues, specialized practices, and sliding-scale resources within your jurisdiction.' },
  { day: 'Days 3–5', label: 'Warm Handoff', color: 'text-somatic-warmth', desc: 'I make direct contact with the receiving clinician (with your consent). You are never handed a list and left to navigate alone.' },
  { day: 'Day 7', label: 'Follow-Up', color: 'text-somatic-warmth', desc: 'I check in to confirm the transition is working, answer questions, and close the loop. Continuity of care does not end when the session does.' },
];

export default function AdvocacyPage() {
  return (
    <div className="min-h-screen bg-obsidian-deep text-text-primary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">

        <a href="/blog" className="inline-flex items-center gap-1 text-xs font-mono text-text-secondary hover:text-violet-400 transition-colors mb-10 block">
          <ArrowLeft size={12} /> Master Map
        </a>

        <div className="grid lg:grid-cols-[1fr_300px] gap-10">
          <div className="space-y-12">

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <p className="text-[10px] font-mono uppercase tracking-widest text-violet-400 mb-3">Bridge Pillar</p>
              <h1 className="text-4xl sm:text-5xl font-display font-bold text-text-primary mb-4 leading-tight">Clinical Advocacy</h1>
              <p className="text-text-secondary max-w-xl leading-relaxed text-lg">
                Navigating specialized care and the healthcare system as a Double-Outsider. Because finding a clinician who actually gets it should not be a second trauma.
              </p>
            </motion.div>

            <motion.section initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }} className="space-y-5">
              <div className="flex items-center gap-3">
                <Shield size={18} className="text-violet-400" />
                <h2 className="text-xl font-display font-bold text-text-primary">The 7-Day Safety Net</h2>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">
                When a referral is needed in Pennsylvania, this is the protocol. Not a policy document — a lived commitment.
              </p>
              <div className="space-y-3">
                {SAFETY_NET.map((step, i) => (
                  <motion.div
                    key={step.day}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                    className="flex gap-4 bg-obsidian-card border border-obsidian-border rounded-xl p-4"
                  >
                    <div className="shrink-0 text-right w-20">
                      <p className={`text-xs font-bold font-mono ${step.color}`}>{step.day}</p>
                      <p className="text-[10px] text-text-disabled">{step.label}</p>
                    </div>
                    <div className="w-px bg-obsidian-border" />
                    <p className="text-sm text-text-secondary leading-relaxed">{step.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="bg-obsidian-card border border-violet-400/20 rounded-2xl p-6 space-y-3">
              <div className="flex items-center gap-2">
                <AlertCircle size={16} className="text-violet-400" />
                <h3 className="font-bold font-display text-text-primary">Trauma-Informed Kink Care</h3>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">
                Kink-affirming care is not about endorsing or facilitating specific practices. It is about understanding that BDSM and kink communities have their own consent frameworks, relational structures, and psychological dynamics that require specialized clinical training — and that pathologizing these is itself a harm.
              </p>
              <p className="text-sm text-text-secondary leading-relaxed">
                A clinician who treats kink as inherently traumatic will cause harm. Full stop.
              </p>
            </motion.section>

            <div className="flex items-center justify-between pt-6 border-t border-obsidian-border">
              <a href="/blog/architecture" className="text-xs font-mono text-text-secondary hover:text-somatic-warmth transition-colors inline-flex items-center gap-1">
                <ArrowLeft size={11} /> Relational Architecture
              </a>
              <a href="/blog/sovereignty" className="text-xs font-mono text-violet-400 hover:text-text-primary transition-colors inline-flex items-center gap-1">
                Somatic Sovereignty <ArrowRight size={11} />
              </a>
            </div>

          </div>

          <aside className="space-y-4">
            <p className="text-[10px] font-mono uppercase tracking-widest text-text-disabled">ILS Framework</p>
            <InternalLegalSystem variant="sidebar" showRoles={['prosecutor', 'judge']} />
            <a href="/substack" className="block mt-4 text-center border border-amber-400/30 text-amber-300 hover:text-amber-100 px-5 py-3 rounded-full text-xs font-mono transition-colors">
              Read series on Substack →
            </a>
          </aside>
        </div>

      </div>
    </div>
  );
}
