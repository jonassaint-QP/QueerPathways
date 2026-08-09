import React from 'react';
import { PRACTICE_CONFIG } from '../../config/practice.config';

interface AppShellProps {
  children: React.ReactNode;
}

export const AppShell: React.FC<AppShellProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-obsidian-deep text-text-primary font-sans selection:bg-somatic-skin selection:text-obsidian-deep">
      {/* Top Protocol Security & Credentials Bar */}
      <header className="border-b border-obsidian-border bg-obsidian/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <a href="/" className="font-display font-bold text-xl tracking-wider text-text-primary hover:opacity-90">
              QUEER<span className="text-somatic-warmth">PATHWAYS</span>
            </a>
            <div className="hidden md:flex items-center space-x-2 text-[10px] font-mono text-somatic-warmth border border-somatic-warmth/30 bg-obsidian-card px-3 py-1 rounded-full">
              <span>PA {PRACTICE_CONFIG.licenses.PA}</span>
              <span className="text-obsidian-border">•</span>
              <span>ON {PRACTICE_CONFIG.licenses.ONTARIO}</span>
            </div>
          </div>

          <nav className="flex items-center space-x-6 text-xs font-mono">
            <a href="/about" className="text-text-secondary hover:text-somatic-warmth transition-colors">Manifesto</a>
            <a href="/offerings" className="text-text-secondary hover:text-somatic-warmth transition-colors">Offerings</a>
            <a href="https://queerpathways.com" className="text-text-secondary hover:text-somatic-skin transition-colors">Store</a>
            <a 
              href={PRACTICE_CONFIG.portals.therapyNotes}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-somatic-warmth/10 border border-somatic-warmth text-somatic-warmth hover:bg-somatic-warmth hover:text-obsidian-deep px-4 py-2 rounded font-bold uppercase tracking-widest transition-all shadow-[0_0_15px_rgba(163, 177, 138,0.15)]"
            >
              Step into the Foundry
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content Viewport */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {children}
      </main>

      {/* Compliance Footer (Zero Physical Address Publicly Listed) */}
      <footer className="border-t border-obsidian-border bg-obsidian-deep py-12 text-xs font-mono text-text-secondary">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p>© {new Date().getFullYear()} QueerPathways. All Rights Reserved.</p>
            <p className="text-[10px] text-text-disabled mt-1">Dual-Jurisdiction Practice: Pennsylvania & Ontario</p>
          </div>
          <div className="flex space-x-6 text-[11px]">
            <span>HIPAA Compliant (US)</span>
            <span>PHIPA Compliant (CA)</span>
            <span className="text-somatic-warmth">MID: 496649211885</span>
            <span className="text-somatic-skin">Policy QP-POL-002</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
