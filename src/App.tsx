// src/App.tsx
// Phase 1 Migration: Replaces emerald/amber shell with Deep Obsidian Design System
// Fully wired routes: Home, About, Offerings
// Compliant with Project Bible: Policy QP-POL-002 & QP-ICP-LANG-001

import React, { useState } from 'react';
import { HeroManifesto } from './components/sections/HeroManifesto';
import { AboutPage } from './pages/About';
import { ClinicalOfferingsPage } from './pages/Offerings';
import { PRACTICE_CONFIG } from './config/practice.config';

export const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<'home' | 'about' | 'offerings'>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-obsidian-deep text-text-primary font-sans selection:bg-magenta-neon selection:text-obsidian-deep flex flex-col">
      
      {/* ==========================================
          GLOBAL NAVIGATION HEADER (AppShell)
         ========================================== */}
      <header className="sticky top-0 z-50 bg-obsidian-deep/90 backdrop-blur-md border-b border-obsidian-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Brand & Dual License Badge */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setCurrentTab('home')}
              className="text-left font-display text-xl font-bold tracking-wider text-text-primary hover:opacity-90 focus:outline-none"
            >
              QUEER<span className="text-cyan-cyber">PATHWAYS</span>
            </button>

            <div className="hidden lg:flex items-center space-x-2 text-[10px] font-mono text-somatic-warmth border border-somatic-warmth/30 bg-obsidian-card px-2.5 py-1 rounded-full">
              <span>PA {PRACTICE_CONFIG.licenses.PA}</span>
              <span className="text-obsidian-border">•</span>
              <span>ON {PRACTICE_CONFIG.licenses.ONTARIO}</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6 text-xs font-mono">
            <button
              onClick={() => setCurrentTab('home')}
              className={`transition-colors ${currentTab === 'home' ? 'text-cyan-cyber font-bold' : 'text-text-secondary hover:text-cyan-cyber'}`}
            >
              Manifesto
            </button>
            <button
              onClick={() => setCurrentTab('about')}
              className={`transition-colors ${currentTab === 'about' ? 'text-cyan-cyber font-bold' : 'text-text-secondary hover:text-cyan-cyber'}`}
            >
              About / Bio
            </button>
            <button
              onClick={() => setCurrentTab('offerings')}
              className={`transition-colors ${currentTab === 'offerings' ? 'text-cyan-cyber font-bold' : 'text-text-secondary hover:text-cyan-cyber'}`}
            >
              Clinical Offerings
            </button>
            <a
              href="https://queerpathways.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-magenta-neon transition-colors"
            >
              Sovereignty Store
            </a>
            <a
              href={PRACTICE_CONFIG.portals.therapyNotes}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-cyber/10 border border-cyan-cyber text-cyan-cyber hover:bg-cyan-cyber hover:text-obsidian-deep px-4 py-2 rounded font-bold uppercase tracking-widest transition-all shadow-[0_0_15px_rgba(0,240,255,0.15)]"
            >
              Step into the Foundry
            </a>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-text-secondary hover:text-cyan-cyber font-mono text-sm"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? '✕ CLOSE' : '☰ MENU'}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-obsidian-border bg-obsidian-card px-6 py-4 space-y-4 text-xs font-mono">
            <button
              onClick={() => { setCurrentTab('home'); setMobileMenuOpen(false); }}
              className="block w-full text-left py-2 text-text-primary hover:text-cyan-cyber"
            >
              Manifesto
            </button>
            <button
              onClick={() => { setCurrentTab('about'); setMobileMenuOpen(false); }}
              className="block w-full text-left py-2 text-text-primary hover:text-cyan-cyber"
            >
              About / Bio
            </button>
            <button
              onClick={() => { setCurrentTab('offerings'); setMobileMenuOpen(false); }}
              className="block w-full text-left py-2 text-text-primary hover:text-cyan-cyber"
            >
              Clinical Offerings
            </button>
            <a
              href="https://queerpathways.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-left py-2 text-magenta-neon"
            >
              Sovereignty Store
            </a>
            <a
              href={PRACTICE_CONFIG.portals.therapyNotes}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-3 bg-cyan-cyber text-obsidian-deep font-bold uppercase tracking-widest rounded"
            >
              Adjourn the Courtroom — Book Intake
            </a>
          </div>
        )}
      </header>

      {/* ==========================================
          MAIN VIEWPORT (DYNAMIC CONTENT RENDER)
         ========================================== */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {currentTab === 'home' && <HeroManifesto />}
        {currentTab === 'about' && <AboutPage />}
        {currentTab === 'offerings' && <ClinicalOfferingsPage />}
      </main>

      {/* ==========================================
          COMPLIANCE FOOTER
         ========================================== */}
      <footer className="border-t border-obsidian-border bg-obsidian-deep py-10 text-xs font-mono text-text-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p>© {new Date().getFullYear()} QueerPathways. Sovereign Clinical Practice.</p>
            <p className="text-[10px] text-text-disabled mt-1">Dual-Jurisdiction: Pennsylvania (CW023073) & Ontario (RSW 842649)</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-[11px]">
            <span>HIPAA Compliant (US)</span>
            <span>•</span>
            <span>PHIPA Compliant (ON)</span>
            <span>•</span>
            <span className="text-cyan-cyber">MID: 496649211885</span>
            <span>•</span>
            <span className="text-magenta-neon">Policy QP-POL-002</span>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;
