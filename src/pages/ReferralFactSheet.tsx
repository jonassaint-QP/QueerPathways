// src/pages/ReferralFactSheet.tsx
// Phase 3 Unified: Deep Route Sovereign Foundry Conversion
// Compliant with Project Bible: Policy QP-POL-002 & QP-ICP-LANG-001

import React from 'react';
import { PRACTICE_CONFIG } from '../config/practice.config';

export const ReferralFactSheet: React.FC = () => {
  return (
    <div className="space-y-12 py-6">
      <section className="relative bg-obsidian-card border border-obsidian-border rounded-2xl p-8 md:p-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-somatic-warmth/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-somatic-warmth uppercase tracking-widest bg-obsidian-deep border border-obsidian-border px-3 py-1 rounded-full">
            <span>Provider & Referral Information</span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
            Clinical Practice Fact Sheet & <br />
            <span className="text-somatic-warmth">Referral Architecture</span>
          </h1>

          <p className="text-sm text-text-secondary leading-relaxed">
            Essential reference data for medical providers, social workers, community organizations, and legal advocates seeking to route clients to QueerPathways.
          </p>
        </div>
      </section>

      {/* Grid: Credentials & Capacity Protocol */}
      <div className="grid md:grid-cols-2 gap-6 font-mono text-xs">
        <div className="bg-obsidian-card border border-obsidian-border rounded-xl p-6 space-y-3">
          <div className="text-somatic-warmth font-bold text-sm uppercase">Pennsylvania License</div>
          <div className="text-text-primary text-lg font-bold">LCSW CW023073</div>
          <p className="text-text-secondary font-sans text-xs">
            Direct clinical care across PA. In-network billing supported via Headway PA partnership.
          </p>
          <div className="text-[11px] text-somatic-warmth">NPI: 1922592591</div>
        </div>

        <div className="bg-obsidian-card border border-obsidian-border rounded-xl p-6 space-y-3">
          <div className="text-somatic-warmth font-bold text-sm uppercase">Ontario Registration</div>
          <div className="text-text-primary text-lg font-bold">RSW 842649</div>
          <p className="text-text-secondary font-sans text-xs">
            Registered Social Work services across Ontario. Covered under standard extended health benefits.
          </p>
          <div className="text-[11px] text-somatic-skin">PHIPA Compliant</div>
        </div>
      </div>

      {/* Operational Protocol Highlights */}
      <section className="bg-obsidian-card border border-obsidian-border rounded-xl p-6 md:p-8 space-y-4">
        <h2 className="font-display text-xl font-bold text-text-primary">Referral Parameters & Capacity</h2>
        <ul className="text-xs font-mono text-text-secondary space-y-3">
          <li className="flex items-start space-x-2">
            <span className="text-somatic-warmth">►</span>
            <span><strong>7-Day Safety Net Protocol:</strong> Direct consultation secured within 7 business days of intake.</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-somatic-warmth">►</span>
            <span><strong>7-Slot Capacity Ceiling:</strong> Active client capacity strictly capped at seven total across both jurisdictions to ensure uncompromised clinical focus.</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-somatic-skin">►</span>
            <span><strong>CardConnect MID 496649211885:</strong> Direct processing into Found Bank Clinical Sub-Account via TherapyNotes.</span>
          </li>
        </ul>

        <div className="pt-4">
          <a
            href={PRACTICE_CONFIG.portals.therapyNotes}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-somatic-warmth text-obsidian-deep px-5 py-2.5 rounded font-mono text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
          >
            Route Referral via TherapyNotes Portal
          </a>
        </div>
      </section>
    </div>
  );
};
