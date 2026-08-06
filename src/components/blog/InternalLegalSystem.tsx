import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface ILSProps {
  variant: 'sidebar' | 'callout';
  showRoles?: ('prosecutor' | 'auditor' | 'judge')[];
}

const ROLES = {
  prosecutor: {
    label: 'The Prosecutor',
    color: 'text-rose-400',
    border: 'border-rose-400/30',
    bg: 'bg-rose-400/5',
    summary: 'Brings charges against the self',
    detail: 'Obsessed with blame and punishment. Shows up as self-criticism spirals — the voice that rehearses every mistake as evidence of fundamental unworthiness. The Prosecutor does not seek truth; it seeks a conviction.',
  },
  auditor: {
    label: 'The Auditor',
    color: 'text-amber-400',
    border: 'border-amber-400/30',
    bg: 'bg-amber-400/5',
    summary: 'Tracks every perceived failure',
    detail: 'Creates the "Ambiguity Tax" in relationships — the exhausting cost of hypervigilance when connection is unclear. Shows up as constant monitoring of tone, silence, and response time. The Auditor runs the books on every interaction.',
  },
  judge: {
    label: 'The Judge',
    color: 'text-violet-400',
    border: 'border-violet-400/30',
    bg: 'bg-violet-400/5',
    summary: 'Delivers the verdict on worthiness',
    detail: 'The final gatekeeper of belonging. Shows up as all-or-nothing thinking — you are either fully accepted or fully rejected, never partially, never in process. The Judge issues verdicts that feel permanent.',
  },
};

export const InternalLegalSystem: React.FC<ILSProps> = ({
  variant,
  showRoles = ['prosecutor', 'auditor', 'judge'],
}) => {
  const [open, setOpen] = useState<string | null>(null);

  const roles = showRoles.map(key => ({ key, ...ROLES[key] }));

  if (variant === 'callout') {
    return (
      <div className="bg-obsidian-card border border-obsidian-border rounded-2xl p-6 space-y-4">
        <p className="text-[10px] font-mono uppercase tracking-widest text-text-disabled">Internal Legal System (ILS)</p>
        <div className="space-y-3">
          {roles.map(r => (
            <div key={r.key} className={`${r.bg} border ${r.border} rounded-xl p-4`}>
              <p className={`text-sm font-bold font-mono ${r.color} mb-1`}>{r.label}</p>
              <p className="text-xs text-text-secondary leading-relaxed">{r.detail}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-obsidian-card border border-obsidian-border rounded-2xl overflow-hidden">
      <div className="px-5 py-4 border-b border-obsidian-border">
        <p className="text-[10px] font-mono uppercase tracking-widest text-text-disabled">Internal Legal System</p>
      </div>
      <div className="divide-y divide-obsidian-border">
        {roles.map(r => (
          <div key={r.key}>
            <button
              onClick={() => setOpen(open === r.key ? null : r.key)}
              className="w-full flex items-center justify-between px-5 py-3 text-left hover:bg-obsidian-border/20 transition-colors"
            >
              <div>
                <span className={`text-xs font-bold font-mono ${r.color}`}>{r.label}</span>
                <span className="ml-2 text-xs text-text-disabled">— {r.summary}</span>
              </div>
              <ChevronDown
                size={14}
                className={`text-text-disabled transition-transform duration-200 ${open === r.key ? 'rotate-180' : ''}`}
              />
            </button>
            {open === r.key && (
              <div className={`px-5 pb-4 pt-1 ${r.bg}`}>
                <p className="text-xs text-text-secondary leading-relaxed">{r.detail}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InternalLegalSystem;
