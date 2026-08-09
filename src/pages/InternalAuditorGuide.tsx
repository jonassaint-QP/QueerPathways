// src/pages/InternalAuditorGuide.tsx
// Phase 3 Unified: Deep Route Sovereign Foundry Conversion

import React from 'react';

export const InternalAuditorGuide: React.FC = () => {
  return (
    <div className="space-y-8 py-6 max-w-4xl mx-auto font-mono text-xs">
      <div className="bg-obsidian-card border border-somatic-warmth/40 rounded-xl p-6 md:p-8 space-y-4">
        <span className="text-somatic-warmth uppercase tracking-widest">Internal Compliance Document</span>
        <h1 className="font-display text-2xl font-bold text-text-primary">
          System Architecture & Financial Compliance Auditor Guide
        </h1>
        <p className="text-text-secondary leading-relaxed font-sans text-sm">
          Verification guide for internal systems compliance across clinical, retail, and editorial estates.
        </p>
      </div>

      <div className="grid gap-4">
        <div className="bg-obsidian-card border border-obsidian-border p-5 rounded-lg space-y-2">
          <div className="text-somatic-warmth font-bold">Policy QP-POL-002 Routing Verification</div>
          <p className="text-text-secondary">
            Clinical Lane MID: <strong className="text-text-primary">496649211885</strong> (CardConnect / TherapyNotes) ➔ Found Bank Clinical Sub-Account.<br />
            Retail Lane: NMI Gateway ➔ Found Bank Retail Sub-Account.<br />
            Forbidden Processors: Stripe, PayPal, Square (0% presence verified).
          </p>
        </div>

        <div className="bg-obsidian-card border border-obsidian-border p-5 rounded-lg space-y-2">
          <div className="text-somatic-skin font-bold">Language Governance (QP-ICP-LANG-001)</div>
          <p className="text-text-secondary">
            Keyword "Sibling" restricted 100% to retail storefront (queerpathways.com). Editorial and clinical surfaces enforce "queer neurodivergent people", "Double-Outsiders", or "you".
          </p>
        </div>

        <div className="bg-obsidian-card border border-obsidian-border p-5 rounded-lg space-y-2">
          <div className="text-somatic-warmth font-bold">Zero-White Compiler Verification</div>
          <p className="text-text-secondary">
            All high-contrast text locked to #E2E8F0 (`text-text-primary`). Zero instances of raw #FFFFFF in production build.
          </p>
        </div>
      </div>
    </div>
  );
};
