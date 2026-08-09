import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Copy, Check, ChevronDown, Rss, Zap } from 'lucide-react';

const FEED_URL = 'https://queerpathways.org/feed.xml';

function FeedUrlCopy() {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(FEED_URL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <div className="flex items-center gap-2 bg-obsidian-deep border border-obsidian-border rounded-xl px-4 py-3 font-mono text-sm">
      <Rss size={13} className="text-orange-400 shrink-0" />
      <span className="flex-1 text-somatic-warmth truncate">{FEED_URL}</span>
      <button onClick={copy} className="shrink-0 flex items-center gap-1.5 text-xs text-text-secondary hover:text-text-primary transition-colors">
        {copied ? <><Check size={12} className="text-somatic-warmth" /> Copied</> : <><Copy size={12} /> Copy</>}
      </button>
    </div>
  );
}

const FLOW = [
  { label: 'Add post to posts-data.json', color: 'text-amber-400' },
  { label: 'Push & deploy to Netlify', color: 'text-somatic-warmth' },
  { label: 'RSS feed regenerates', color: 'text-somatic-warmth' },
  { label: 'Zapier polls feed (hourly)', color: 'text-violet-400' },
  { label: '48-hour delay trigger', color: 'text-orange-400' },
  { label: 'Publish to Substack + LinkedIn', color: 'text-rose-400' },
];

const STEPS = [
  {
    number: '01',
    title: 'Create a Zapier Account',
    color: 'border-amber-400/30',
    bg: 'bg-amber-400/5',
    label: 'text-amber-400',
    content: 'Go to zapier.com and create a free account. The RSS-to-email automation is available on the free tier for Substack; LinkedIn posting requires a paid plan.',
  },
  {
    number: '02',
    title: 'Set Up the RSS Trigger',
    color: 'border-somatic-warmth/30',
    bg: 'bg-somatic-warmth/5',
    label: 'text-somatic-warmth',
    content: 'Create a new Zap. Choose "RSS by Zapier" as the trigger app, then "New Item in Feed" as the trigger event. Paste the feed URL above.',
  },
  {
    number: '03',
    title: 'Add the 48-Hour Delay',
    color: 'border-violet-400/30',
    bg: 'bg-violet-400/5',
    label: 'text-violet-400',
    content: 'Add a "Delay" step between the RSS trigger and the publishing actions. Set it to 48 hours. This creates the site-first publishing window.',
  },
  {
    number: '04',
    title: 'Connect Substack (via Email)',
    color: 'border-orange-400/30',
    bg: 'bg-orange-400/5',
    label: 'text-orange-400',
    content: 'Substack supports post-by-email on paid plans. In your Substack settings, enable email posting and get your unique post address. Add a "Send Email" action in Zapier targeting that address with the post title and description from the RSS item.',
  },
  {
    number: '05',
    title: 'Connect LinkedIn Newsletter',
    color: 'border-blue-400/30',
    bg: 'bg-blue-400/5',
    label: 'text-blue-400',
    content: 'Add a second action: "LinkedIn" app, "Create Share Update" action. Authenticate with your LinkedIn account. Map the post title and URL from the RSS item to the share text.',
  },
  {
    number: '06',
    title: 'Test & Activate',
    color: 'border-somatic-warmth/30',
    bg: 'bg-somatic-warmth/5',
    label: 'text-somatic-warmth',
    content: 'Run a test using the most recent RSS item. Verify the content looks correct in both Zapier previews. Turn the Zap on. From this point, every new post-data.json entry that deploys will auto-distribute 48 hours later.',
  },
];

function StepCard({ step, index }: { step: typeof STEPS[0]; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className={`border ${step.color} ${open ? step.bg : 'bg-obsidian-card'} rounded-2xl overflow-hidden transition-colors`}
    >
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-5 py-4 text-left">
        <div className="flex items-center gap-3">
          <span className={`text-xs font-bold font-mono ${step.label}`}>{step.number}</span>
          <span className="text-sm font-semibold text-text-primary">{step.title}</span>
        </div>
        <ChevronDown size={14} className={`text-text-disabled transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="px-5 pb-5">
          <p className="text-sm text-text-secondary leading-relaxed">{step.content}</p>
        </div>
      )}
    </motion.div>
  );
}

export default function DistributionSetupPage() {
  return (
    <div className="min-h-screen bg-obsidian-deep text-text-primary">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-12">

        <a href="/blog" className="inline-flex items-center gap-1 text-xs font-mono text-text-secondary hover:text-somatic-warmth transition-colors">
          <ArrowLeft size={12} /> Master Map
        </a>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p className="text-[10px] font-mono uppercase tracking-widest text-somatic-warmth mb-3">Automation</p>
          <h1 className="text-4xl font-display font-bold text-text-primary mb-4">RSS Distribution Setup</h1>
          <p className="text-text-secondary leading-relaxed">
            Connect your site RSS feed to Zapier so posts auto-distribute to Substack and LinkedIn 48 hours after publishing.
          </p>
        </motion.div>

        <div className="space-y-2">
          <p className="text-xs font-mono text-text-disabled uppercase tracking-widest">Your Feed URL</p>
          <FeedUrlCopy />
        </div>

        <div className="space-y-3">
          <h2 className="text-sm font-mono uppercase tracking-widest text-text-disabled">How It Works</h2>
          <div className="flex flex-wrap gap-2">
            {FLOW.map((f, i) => (
              <React.Fragment key={f.label}>
                <span className={`text-xs font-mono ${f.color}`}>{f.label}</span>
                {i < FLOW.length - 1 && <span className="text-text-disabled text-xs">→</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        <section className="space-y-3">
          <h2 className="text-2xl font-display font-bold text-text-primary">Zapier Setup — Step by Step</h2>
          {STEPS.map((step, i) => (
            <React.Fragment key={step.number}>
              <StepCard step={step} index={i} />
            </React.Fragment>
          ))}
        </section>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center justify-between gap-4 bg-obsidian-card border border-obsidian-border rounded-2xl p-6"
        >
          <div>
            <p className="font-bold text-text-primary text-sm mb-1">Ready to automate?</p>
            <p className="text-xs text-text-secondary">Takes about 15 minutes to set up. Works on Zapier free tier (with limitations).</p>
          </div>
          <a href="https://zapier.com" target="_blank" rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-somatic-warmth/10 border border-somatic-warmth text-somatic-warmth hover:bg-somatic-warmth hover:text-obsidian-deep px-5 py-2.5 rounded-full text-xs font-bold font-mono uppercase tracking-widest transition-all">
            <Zap size={12} /> Open Zapier
          </a>
        </motion.div>

      </div>
    </div>
  );
}
