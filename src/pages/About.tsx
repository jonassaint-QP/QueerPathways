// src/pages/About.tsx
// Built for queerpathways.org | Marblism / React Stack
// Compliant with Project Bible: Policy QP-POL-002 & QP-ICP-LANG-001
// Outlaw Therapist & Sovereignty Foundry Philosophy Anchor

import React from 'react';
import { PRACTICE_CONFIG } from '../config/practice.config';

export const AboutPage: React.FC = () => {
  return (
    <div className="space-y-16 py-6">
      
      {/* ==========================================
          HEADER / BIOGRAPHICAL HERO BLOCK
         ========================================== */}
      <section className="relative bg-obsidian-card border border-obsidian-border rounded-2xl p-8 md:p-12 overflow-hidden">
        {/* Ambient Glow Effects */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-somatic-skin/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-somatic-warmth/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="relative z-10 max-w-4xl space-y-6">
          
          {/* Dual License Badge Header */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs text-somatic-warmth uppercase tracking-widest bg-obsidian-deep border border-obsidian-border px-3.5 py-1.5 rounded-full">
              PA LCSW CW023073
            </span>
            <span className="font-mono text-xs text-somatic-skin uppercase tracking-widest bg-obsidian-deep border border-obsidian-border px-3.5 py-1.5 rounded-full">
              ONTARIO RSW 842649
            </span>
            <span className="font-mono text-xs text-somatic-warmth border border-somatic-warmth/30 px-3 py-1.5 rounded-full">
              Dual-Jurisdiction Sovereignty
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary tracking-tight leading-[1.1]">
            Joshua Jonassaint <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-somatic-warmth via-text-primary to-somatic-skin">
              The Outlaw Therapist
            </span>
          </h1>

          <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-3xl">
            Founder and Clinical Director of QueerPathways. Operating at the intersection of somatic precision, neurodivergent liberation, and uncompromised self-ownership.
          </p>

          <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-text-secondary">
            <div className="flex items-center space-x-2 border border-obsidian-border bg-obsidian-deep px-3 py-1.5 rounded">
              <span className="text-somatic-warmth">✓</span>
              <span>7-Day Safety Net Protocol</span>
            </div>
            <div className="flex items-center space-x-2 border border-obsidian-border bg-obsidian-deep px-3 py-1.5 rounded">
              <span className="text-somatic-skin">✓</span>
              <span>7-Slot Total Capacity Ceiling</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 1: THE OUTLAW THERAPIST FRAMEWORK
         ========================================== */}
      <section className="grid md:grid-cols-2 gap-8 items-stretch">
        
        {/* Left Column: Narrative Philosophy */}
        <div className="bg-obsidian-card border border-obsidian-border rounded-xl p-6 md:p-8 space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <span className="font-mono text-xs text-somatic-warmth uppercase tracking-widest">Clinical Stance</span>
            <h2 className="font-display text-2xl font-bold text-text-primary">
              Why "Outlaw"?
            </h2>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              Traditional therapeutic models were designed around compliance—teaching marginal individuals how to adapt to, absorb, and tolerate oppressive, normative structures. They ask you to sit in a chair and politely analyze your suffering while the world continues to extract your bandwidth.
            </p>
            <p className="text-xs sm:text-sm text-text-primary font-medium leading-relaxed border-l-2 border-somatic-warmth pl-4">
              The <em>Outlaw Therapist</em> framework refuses to act as an agent of institutional compliance. We do not nod passively while you exhaust yourself translating your trauma into palatable terms.
            </p>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              Instead, we operate as a **Sovereignty Foundry**: dismantling the internal defense attorney, restoring autonomic nervous system regulation, and forging actionable boundaries so you can live uncompromised.
            </p>
          </div>
          <div className="pt-4 border-t border-obsidian-border font-mono text-xs text-somatic-warmth">
            "We burn the docket so you can build your ground."
          </div>
        </div>

        {/* Right Column: Key Principles */}
        <div className="space-y-4 flex flex-col justify-between">
          
          <div className="bg-obsidian-card border border-obsidian-border rounded-xl p-6 hover:border-somatic-warmth/40 transition-all">
            <div className="font-mono text-xs text-somatic-warmth mb-1">01 / INTEGRITY</div>
            <h3 className="font-display text-lg font-bold text-text-primary">Zero-Explanation Baseline</h3>
            <p className="text-xs text-text-secondary mt-1 leading-relaxed">
              You never have to educate your clinician on neurodivergent burnout, trans survival, polyamory, or the exhaustion of living outside normative boxes. We start at Step 10 on Day One.
            </p>
          </div>

          <div className="bg-obsidian-card border border-obsidian-border rounded-xl p-6 hover:border-somatic-skin/40 transition-all">
            <div className="font-mono text-xs text-somatic-skin mb-1">02 / PHYSIOLOGY</div>
            <h3 className="font-display text-lg font-bold text-text-primary">Somatic Precision</h3>
            <p className="text-xs text-text-secondary mt-1 leading-relaxed">
              Trauma and chronic masking are stored in muscular holding patterns and autonomic dysregulation. We integrate somatic experiencing to discharge survival energy directly from the tissue.
            </p>
          </div>

          <div className="bg-obsidian-card border border-obsidian-border rounded-xl p-6 hover:border-somatic-warmth/40 transition-all">
            <div className="font-mono text-xs text-somatic-warmth mb-1">03 / BOUNDARIES</div>
            <h3 className="font-display text-lg font-bold text-text-primary">Ambiguity Tax Refusal</h3>
            <p className="text-xs text-text-secondary mt-1 leading-relaxed">
              We target the hidden cognitive and metabolic overhead spent parsing unwritten social rules and second-guessing relational safety, replacing masking with sovereign authority.
            </p>
          </div>

        </div>
      </section>

      {/* ==========================================
          SECTION 2: DUAL-JURISDICTIONAL CREDENTIALS & PRACTICE DISCLOSURE
         ========================================== */}
      <section className="bg-obsidian-card border border-obsidian-border rounded-xl p-6 md:p-8 space-y-6">
        <div className="border-b border-obsidian-border pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="font-mono text-xs text-somatic-skin uppercase tracking-widest">Cross-Border Authority</span>
            <h2 className="font-display text-2xl font-bold text-text-primary mt-1">
              Dual-Jurisdiction Clinical Practice
            </h2>
          </div>
          <span className="text-xs font-mono text-text-secondary">
            Strict Multi-Region Compliance
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-6 text-xs font-mono">
          
          {/* Commonwealth of Pennsylvania */}
          <div className="bg-obsidian-deep border border-obsidian-border p-5 rounded-lg space-y-3">
            <div className="flex justify-between items-center text-text-primary font-bold text-sm">
              <span>COMMONWEALTH OF PENNSYLVANIA</span>
              <span className="text-somatic-warmth">CW023073</span>
            </div>
            <p className="text-text-secondary font-sans leading-relaxed">
              Licensed Clinical Social Worker (LCSW) providing tele-health and clinical services across Pennsylvania. Fully HIPAA compliant with in-network insurance processing available via Headway PA.
            </p>
            <div className="text-[11px] text-somatic-warmth">
              Status: Active • Verified Board Registration • NPI: 1922592591
            </div>
          </div>

          {/* Province of Ontario */}
          <div className="bg-obsidian-deep border border-obsidian-border p-5 rounded-lg space-y-3">
            <div className="flex justify-between items-center text-text-primary font-bold text-sm">
              <span>PROVINCE OF ONTARIO</span>
              <span className="text-somatic-skin">RSW 842649</span>
            </div>
            <p className="text-text-secondary font-sans leading-relaxed">
              Registered Social Worker (RSW) with the Ontario College of Social Workers and Social Service Workers (OCSWSSW). Fully PHIPA compliant with services covered under extended health benefits.
            </p>
            <div className="text-[11px] text-somatic-warmth">
              Status: Active • Verified College Registration
            </div>
          </div>

        </div>
      </section>

      {/* ==========================================
          SECTION 3: BASE BOOKING ANCHOR (THERAPYNOTES)
         ========================================== */}
      <section id="intake-portal" className="bg-obsidian-card border border-obsidian-border rounded-2xl p-6 md:p-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-somatic-warmth to-somatic-skin"></div>
        
        <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-somatic-warmth mb-1">
              <span className="w-2 h-2 rounded-full bg-somatic-warmth animate-pulse"></span>
              Secure Your Ground
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-text-primary">
              Step into the Foundry
            </h2>
            <p className="text-xs sm:text-sm text-text-secondary mt-1 max-w-xl">
              Strict 7-slot capacity discipline across both jurisdictions. Direct consultation guaranteed within 7 business days of intake submission.
            </p>
          </div>
          <div className="text-right font-mono text-[11px] text-text-secondary border-l md:border-l-0 md:border-t border-obsidian-border pt-2 md:pt-0 pl-3 md:pl-0">
            <div>CardConnect MID: <span className="text-text-primary">496649211885</span></div>
            <div className="text-somatic-warmth">Policy QP-POL-002 Compliant</div>
          </div>
        </div>

        {/* Embedded TherapyNotes iFrame Container */}
        <div className="w-full h-[650px] bg-obsidian-deep border border-obsidian-border rounded-xl overflow-hidden relative shadow-2xl">
          <iframe 
            src={PRACTICE_CONFIG.portals.therapyNotes}
            title="QueerPathways TherapyNotes Booking Portal"
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>
      </section>

    </div>
  );
};
