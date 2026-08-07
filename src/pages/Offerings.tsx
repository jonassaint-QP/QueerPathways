// src/pages/Offerings.tsx
// Built for queerpathways.org | Marblism / React Stack
// Compliant with Project Bible: Policy QP-POL-002 & QP-ICP-LANG-001
// MID: 496649211885 (CardConnect Clinical Lane)

import React from 'react';
import { PRACTICE_CONFIG } from '../config/practice.config';

export const ClinicalOfferingsPage: React.FC = () => {
  return (
    <div className="space-y-16 py-6">
      
      {/* ==========================================
          HEADER BLOCK: CLINICAL PHILOSOPHY
         ========================================== */}
      <section className="relative bg-obsidian-card border border-obsidian-border rounded-2xl p-8 md:p-12 overflow-hidden">
        {/* Ambient Glow Effects */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-cyber/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-magenta-neon/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-cyan-cyber uppercase tracking-widest bg-obsidian-deep border border-obsidian-border px-3 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-cyan-cyber animate-pulse"></span>
            <span>Radical Clarity & Capacity Discipline</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary tracking-tight">
            Clinical Offerings & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-cyber to-magenta-neon">
              Dignity Investment Matrix
            </span>
          </h1>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
            Care should never require you to translate your trauma or justify your baseline existence. We provide dual-licensed clinical depth (PA & Ontario) grounded in somatic precision, neuro-affirming principles, and radical financial transparency.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-text-primary pt-2">
            <span className="border border-obsidian-border bg-obsidian-deep px-3 py-1.5 rounded-md">
              PA License: <strong className="text-somatic-warmth">{PRACTICE_CONFIG.licenses.PA}</strong>
            </span>
            <span className="border border-obsidian-border bg-obsidian-deep px-3 py-1.5 rounded-md">
              Ontario RSW: <strong className="text-somatic-warmth">{PRACTICE_CONFIG.licenses.ONTARIO}</strong>
            </span>
            <span className="border border-cyan-cyber/30 bg-cyan-cyber/10 text-cyan-cyber px-3 py-1.5 rounded-md">
              7-Day Safety Net Active
            </span>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 1: DIGNITY INVESTMENT PRICING MATRIX
         ========================================== */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-obsidian-border pb-4 gap-2">
          <div>
            <span className="font-mono text-xs text-magenta-neon tracking-widest uppercase">Fee Schedule</span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-text-primary mt-1">
              Dignity Investment Protocol
            </h2>
          </div>
          <div className="text-xs font-mono text-cyan-cyber bg-obsidian-card border border-cyan-cyber/30 px-3 py-1.5 rounded-md">
            🔒 Rates Locked Through March 30, 2027
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          
          {/* 01. INTAKE ASSESSMENT */}
          <div className="bg-obsidian-card border border-obsidian-border rounded-xl p-6 flex flex-col justify-between hover:border-cyan-cyber/50 transition-all group relative overflow-hidden">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <span className="font-mono text-xs text-cyan-cyber">01 / FIRST BOUNDARY</span>
                <span className="text-xs font-mono text-text-secondary">75 MIN</span>
              </div>
              
              <div>
                <h3 className="font-display text-xl font-bold text-text-primary">Intake Assessment</h3>
                <p className="text-xs text-text-secondary mt-1">Comprehensive somatic baseline, nervous system assessment, and goals mapping.</p>
              </div>

              <div className="py-4 border-y border-obsidian-border">
                <div className="font-display text-4xl font-bold text-text-primary">
                  $225 <span className="text-xs font-mono text-text-secondary font-normal">USD / CAD</span>
                </div>
              </div>

              <ul className="text-xs font-mono text-text-secondary space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="text-cyan-cyber">✓</span>
                  <span>75-minute dedicated initial session</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-cyan-cyber">✓</span>
                  <span>Somatic & interoceptive baseline evaluation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-cyan-cyber">✓</span>
                  <span>Immediate access to TherapyNotes portal</span>
                </li>
              </ul>
            </div>
            
            <a 
              href="#intake-portal"
              className="mt-6 w-full py-2.5 bg-cyan-cyber/10 border border-cyan-cyber text-cyan-cyber hover:bg-cyan-cyber hover:text-obsidian-deep text-center font-mono text-xs font-bold uppercase tracking-wider rounded transition-all"
            >
              Book Intake
            </a>
          </div>

          {/* 02. INDIVIDUAL SOVEREIGNTY */}
          <div className="bg-obsidian-card border border-cyan-cyber/40 rounded-xl p-6 flex flex-col justify-between hover:border-cyan-cyber transition-all group relative overflow-hidden shadow-[0_0_20px_rgba(0,240,255,0.05)]">
            <div className="absolute top-0 right-0 bg-cyan-cyber text-obsidian-deep font-mono text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase">
              Core Practice
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <span className="font-mono text-xs text-cyan-cyber">02 / INDIVIDUAL</span>
                <span className="text-xs font-mono text-text-secondary">50 MIN</span>
              </div>
              
              <div>
                <h3 className="font-display text-xl font-bold text-text-primary">Individual Sovereignty</h3>
                <p className="text-xs text-text-secondary mt-1">Targeted clinical depth for ADHD, trauma recovery, and Ambiguity Tax refusal.</p>
              </div>

              <div className="py-4 border-y border-obsidian-border">
                <div className="font-display text-4xl font-bold text-text-primary">
                  $150 <span className="text-xs font-mono text-text-secondary font-normal">USD / CAD</span>
                </div>
              </div>

              <ul className="text-xs font-mono text-text-secondary space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="text-cyan-cyber">✓</span>
                  <span>Zero-explanation clinical environment</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-cyan-cyber">✓</span>
                  <span>Actionable somatic regulation tools</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-cyan-cyber">✓</span>
                  <span>Direct TherapyNotes booking available</span>
                </li>
              </ul>
            </div>
            
            <a 
              href="#intake-portal"
              className="mt-6 w-full py-2.5 bg-cyan-cyber text-obsidian-deep font-mono text-xs font-bold uppercase tracking-wider rounded hover:opacity-90 transition-all text-center"
            >
              Select Individual
            </a>
          </div>

          {/* 03. RELATIONSHIP DYNAMICS */}
          <div className="bg-obsidian-card border border-obsidian-border rounded-xl p-6 flex flex-col justify-between hover:border-magenta-neon/50 transition-all group relative overflow-hidden">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <span className="font-mono text-xs text-magenta-neon">03 / RELATIONAL</span>
                <span className="text-xs font-mono text-text-secondary">50 MIN</span>
              </div>
              
              <div>
                <h3 className="font-display text-xl font-bold text-text-primary">Relationship & Relational</h3>
                <p className="text-xs text-text-secondary mt-1">Relational dynamics beyond normative frameworks, polyamory, and boundary realignment.</p>
              </div>

              <div className="py-4 border-y border-obsidian-border">
                <div className="font-display text-4xl font-bold text-text-primary">
                  $200 <span className="text-xs font-mono text-text-secondary font-normal">USD / CAD</span>
                </div>
              </div>

              <ul className="text-xs font-mono text-text-secondary space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="text-magenta-neon">✓</span>
                  <span>Non-normative relational framework support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-magenta-neon">✓</span>
                  <span>Somatic conflict & bracing resolution</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-magenta-neon">✓</span>
                  <span>Multi-partner agreement forging</span>
                </li>
              </ul>
            </div>
            
            <a 
              href="#intake-portal"
              className="mt-6 w-full py-2.5 bg-magenta-neon/10 border border-magenta-neon text-magenta-neon hover:bg-magenta-neon hover:text-obsidian-deep text-center font-mono text-xs font-bold uppercase tracking-wider rounded transition-all"
            >
              Book Relational
            </a>
          </div>

        </div>
      </section>

      {/* ==========================================
          SECTION 2: INSURANCE & JURISDICTION ACCESS
         ========================================== */}
      <section className="bg-obsidian-card border border-obsidian-border rounded-xl p-6 md:p-8 space-y-6">
        <div className="border-b border-obsidian-border pb-4">
          <span className="font-mono text-xs text-somatic-warmth tracking-widest uppercase">Coverage & Compliance</span>
          <h2 className="font-display text-2xl font-bold text-text-primary mt-1">
            Insurance & Regional Processing
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 text-xs font-mono">
          
          {/* Pennsylvania Jurisdiction */}
          <div className="space-y-3 bg-obsidian-deep border border-obsidian-border p-5 rounded-lg">
            <div className="flex justify-between items-center text-text-primary font-bold text-sm">
              <span>PENNSYLVANIA PRACTICE (NPI: 1922592591)</span>
              <span className="text-cyan-cyber">CW023073</span>
            </div>
            <p className="text-text-secondary leading-relaxed font-sans">
              In-network billing for eligible Pennsylvania residents is processed seamlessly through our CardPointe integration.
            </p>
            <div className="pt-2">
              <a 
                href="https://www.therapyportal.com/p/queercharts/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-cyan-cyber hover:underline"
              >
                <span>Book Your Intake Assessment</span>
                <span>→</span>
              </a>
            </div>
            <p className="text-text-disabled text-[11px] font-sans">
              *Out-of-network superbills provided automatically for secondary insurance reimbursement.
            </p>
          </div>

          {/* Ontario Jurisdiction */}
          <div className="space-y-3 bg-obsidian-deep border border-obsidian-border p-5 rounded-lg">
            <div className="flex justify-between items-center text-text-primary font-bold text-sm">
              <span>ONTARIO PRACTICE</span>
              <span className="text-magenta-neon">RSW 842649</span>
            </div>
            <p className="text-text-secondary leading-relaxed font-sans">
              Services provided by a Registered Social Worker (RSW) are recognized as medical tax deductions and covered under most Canadian extended health plans.
            </p>
            <div className="pt-2 text-somatic-warmth">
              <span>Receipts issued immediately post-session for insurer submission.</span>
            </div>
            <p className="text-text-disabled text-[11px] font-sans">
              *Full PHIPA compliance enforced. Zero cross-border clinical data transfer.
            </p>
          </div>

        </div>
      </section>

      {/* ==========================================
          SECTION 3: BASE BOOKING ANCHOR (THERAPYNOTES)
         ========================================== */}
      <section id="intake-portal" className="bg-obsidian-card border border-obsidian-border rounded-2xl p-6 md:p-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-cyan-cyber to-magenta-neon"></div>
        
        <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-cyber mb-1">
              <span className="w-2 h-2 rounded-full bg-cyan-cyber animate-pulse"></span>
              7-Day Safety Net Protocol Active
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-text-primary">
              Access Clinical Portal
            </h2>
            <p className="text-xs sm:text-sm text-text-secondary mt-1 max-w-xl">
              Strict 7-slot capacity discipline per region. Direct consultation guaranteed within 7 business days of intake submission.
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
