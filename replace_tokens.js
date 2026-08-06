import fs from 'fs';

const files = ['src/PhilosophyPage.tsx', 'src/ServicesPage.tsx'];

const tokenMap = [
  ['bg-[#001807]', 'bg-obsidian-deep'],
  ['bg-emerald-950', 'bg-obsidian-deep'],
  ['bg-emerald-900', 'bg-obsidian-card'],
  ['border-emerald-800', 'border-obsidian-border'],
  ['border-emerald-900', 'border-obsidian-border'],
  ['border-amber-500', 'border-cyan-cyber'],
  ['text-emerald-400', 'text-cyan-cyber'],
  ['text-amber-400', 'text-magenta-neon'],
  ['text-amber-300', 'text-cyan-cyber'], // Added mapping based on usual usage
  ['text-amber-200', 'text-somatic-warmth'],
  ['text-amber-100', 'text-text-secondary'],
  ['text-amber-50', 'text-text-primary'],
  ['text-slate-100', 'text-text-primary'],
  ['bg-amber-50', 'bg-cyan-cyber'],
  ['text-emerald-950', 'text-obsidian-deep'],
  ['border-amber-50', 'border-text-primary'],
  ['bg-amber-400/10', 'bg-magenta-neon/10'],
  ['border-amber-400/30', 'border-magenta-neon/30'],
  ['hover:bg-amber-100', 'hover:bg-cyan-cyber/80'],
  ['hover:text-amber-100', 'hover:text-text-primary'],
  ['hover:bg-amber-50/10', 'hover:bg-text-primary/10'],
  ['hover:border-amber-400/50', 'hover:border-magenta-neon/50']
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  for (const [oldToken, newToken] of tokenMap) {
    content = content.split(oldToken).join(newToken);
  }
  fs.writeFileSync(file, content);
  console.log(`Updated ${file}`);
}
