// src/pages/ICAPage.tsx
// Phase 3 Unified: Deep Route Sovereign Foundry Conversion

import React from 'react';

export const ICAPage: React.FC = () => {
  return (
    <div className="space-y-8 py-6 max-w-4xl mx-auto">
      <div className="border-b border-obsidian-border pb-4">
        <span className="font-mono text-xs text-somatic-skin uppercase tracking-widest">Governance & Practice Structure</span>
        <h1 className="font-display text-3xl font-bold text-text-primary mt-1">
          Independent Clinical Agreement (ICA)
        </h1>
      </div>

      <div className="bg-obsidian-card border border-obsidian-border rounded-xl p-6 md:p-8 space-y-6 text-xs font-mono text-text-secondary leading-relaxed">
        <p className="text-text-primary text-sm font-sans">
          This document outlines the independent clinical operating structure of QueerPathways under dual-jurisdictional practice regulations (Pennsylvania LCSW CW023073 and Ontario RSW 842649).
        </p>

        <div className="space-y-2 border-l-2 border-somatic-warmth pl-4">
          <h2 className="text-text-primary font-bold text-sm">1. Dual-Lane Financial Segregation (Policy QP-POL-002)</h2>
          <p>
            Clinical processing is managed strictly via CardPointe / CardConnect (MID: 496649211885) and TherapyNotes, settling exclusively into Found Bank Clinical Sub-Account. Retail transactions are firewalled via NMI Gateway.
          </p>
        </div>

        <div className="space-y-2 border-l-2 border-somatic-skin pl-4">
          <h2 className="text-text-primary font-bold text-sm">2. Capacity & Intake Governance</h2>
          <p>
            Direct consultation is guaranteed within 7 business days under the 7-Day Safety Net protocol, subject to the strict 7-slot operational ceiling per jurisdiction.
          </p>
        </div>

        <div className="space-y-2 border-l-2 border-somatic-warmth pl-4">
          <h2 className="text-text-primary font-bold text-sm">3. Data & Privacy Protections</h2>
          <p>
            Compliant with HIPAA (US) and PHIPA (Ontario). Zero public physical addresses are published to preserve safety and operational boundary integrity.
          </p>
        </div>
      </div>
    </div>
  );
};
