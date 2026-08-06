// src/pages/PresencePage.tsx
// Phase 3 Unified: Deep Route Sovereign Foundry Conversion

import React from 'react';
import { PRACTICE_CONFIG } from '../config/practice.config';

export const PresencePage: React.FC = () => {
  return (
    <div className="space-y-12 py-6 max-w-4xl mx-auto">
      <section className="bg-obsidian-card border border-obsidian-border rounded-2xl p-8 md:p-12 space-y-4">
        <span className="font-mono text-xs text-somatic-warmth uppercase tracking-widest">Somatic Practice</span>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-text-primary">
          Pathways to Presence: Somatic Grounding
        </h1>
        <p className="text-sm text-text-secondary leading-relaxed font-sans">
          Therapeutic presence is not a passive mental state—it is a physiological capacity forged through autonomic nervous system regulation and boundary clarity.
        </p>
      </section>

      <div className="bg-obsidian-card border border-obsidian-border rounded-xl p-6 md:p-8 space-y-6">
        <h2 className="font-display text-xl font-bold text-text-primary">Somatic Regulation Protocol</h2>
        <div className="space-y-4 font-mono text-xs text-text-secondary">
          <div className="p-4 bg-obsidian-deep border border-obsidian-border rounded-lg space-y-1">
            <span className="text-cyan-cyber font-bold">01 / DISCHARGE</span>
            <p className="font-sans text-text-primary text-xs">Unclench jaw, drop shoulders, and allow voluntary tremors or shaking to release truncated motor energy.</p>
          </div>
          <div className="p-4 bg-obsidian-deep border border-obsidian-border rounded-lg space-y-1">
            <span className="text-magenta-neon font-bold">02 / ORIENTATION</span>
            <p className="font-sans text-text-primary text-xs">Locate three physical contact points in your current environment to anchor present safety.</p>
          </div>
          <div className="p-4 bg-obsidian-deep border border-obsidian-border rounded-lg space-y-1">
            <span className="text-somatic-warmth font-bold">03 / SOVEREIGN BOUNDARY</span>
            <p className="font-sans text-text-primary text-xs">Exhale completely and refuse to over-explain internal bodily states to external demands.</p>
          </div>
        </div>

        <div className="pt-4 border-t border-obsidian-border">
          <a
            href={PRACTICE_CONFIG.portals.therapyNotes}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-cyan-cyber text-obsidian-deep px-6 py-3 rounded font-mono text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
          >
            Adjourn the Courtroom — Book Intake
          </a>
        </div>
      </div>
    </div>
  );
};
