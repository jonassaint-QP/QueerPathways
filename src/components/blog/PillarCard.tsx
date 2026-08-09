import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface PillarCardProps {
  title: string;
  subtitle: string;
  description: string;
  href: string;
  variant: 'presence' | 'architecture' | 'advocacy' | 'sovereignty';
  icon?: React.ReactNode;
}

const variantStyles = {
  presence: {
    border: 'border-amber-400/30 hover:border-amber-400/70',
    glow: 'hover:shadow-[0_0_30px_rgba(199,174,106,0.15)]',
    badge: 'bg-amber-400/10 text-amber-300',
    arrow: 'text-amber-400',
    dot: 'bg-amber-400',
  },
  architecture: {
    border: 'border-somatic-warmth/30 hover:border-somatic-warmth/70',
    glow: 'hover:shadow-[0_0_30px_rgba(163, 177, 138,0.15)]',
    badge: 'bg-somatic-warmth/10 text-somatic-warmth',
    arrow: 'text-somatic-warmth',
    dot: 'bg-somatic-warmth',
  },
  advocacy: {
    border: 'border-violet-400/30 hover:border-violet-400/70',
    glow: 'hover:shadow-[0_0_30px_rgba(167,139,250,0.15)]',
    badge: 'bg-violet-400/10 text-violet-300',
    arrow: 'text-violet-400',
    dot: 'bg-violet-400',
  },
  sovereignty: {
    border: 'border-rose-400/30 hover:border-rose-400/70',
    glow: 'hover:shadow-[0_0_30px_rgba(251,113,133,0.15)]',
    badge: 'bg-rose-400/10 text-rose-300',
    arrow: 'text-rose-400',
    dot: 'bg-rose-400',
  },
};

export const PillarCard: React.FC<PillarCardProps> = ({ title, subtitle, description, href, variant, icon }) => {
  const s = variantStyles[variant];
  return (
    <motion.a
      href={href}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={`block bg-obsidian-card border ${s.border} ${s.glow} rounded-2xl p-6 transition-all duration-300 group`}
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className={`inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded-full ${s.badge}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
          {subtitle}
        </div>
        {icon && <div className="text-text-secondary">{icon}</div>}
      </div>
      <h3 className="text-lg font-display font-bold text-text-primary mb-2 leading-tight">{title}</h3>
      <p className="text-sm text-text-secondary leading-relaxed mb-4">{description}</p>
      <div className={`flex items-center gap-1 text-xs font-mono ${s.arrow} group-hover:gap-2 transition-all`}>
        Read pillar <ArrowRight size={12} />
      </div>
    </motion.a>
  );
};

export default PillarCard;
