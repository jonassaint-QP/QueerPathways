import React, { useState, useEffect, useRef } from 'react';  
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';  
import {   
  Shield, Sparkles, Brain, Scale, Compass, ArrowRight, Menu, X,   
  Heart, Gem, CheckCircle2, Zap, Quote, ExternalLink, Mail, BookOpen, Users, Lightbulb,
  ChevronDown
} from 'lucide-react';

const NavLink = ({ href, children, external = false }: any) => {
  const isInternal = !external && !href.startsWith('#') && !href.startsWith('http') && !href.startsWith('mailto') && !href.startsWith('tel');
  if (isInternal) {
    return (
      <Link
        to={href}
        className="text-xs uppercase tracking-[0.2em] font-medium text-amber-100/60 hover:text-amber-50 transition-colors"
      >
        {children}
      </Link>
    );
  }
  return (
    <a
      href={href}
      target={external ? "_blank" : "_self"}
      rel={external ? "noopener noreferrer" : undefined}
      className="text-xs uppercase tracking-[0.2em] font-medium text-amber-100/60 hover:text-amber-50 transition-colors"
    >
      {children}
    </a>
  );
};

const carepatronButtonStyle: React.CSSProperties = {
  WebkitTextSizeAdjust: '100%',
  WebkitFontSmoothing: 'antialiased',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  WebkitTapHighlightColor: 'transparent',
  outline: 0,
  border: 0,
  margin: 0,
  cursor: 'pointer',
  userSelect: 'none',
  verticalAlign: 'middle',
  WebkitAppearance: 'none',
  textDecoration: 'none',
  fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
  fontWeight: 500,
  letterSpacing: '0.02857em',
  transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  color: '#fff',
  backgroundColor: '#104714',
  textTransform: 'none',
  boxSizing: 'border-box',
  borderRadius: '4px',
  boxShadow: 'none',
  minWidth: 0,
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  height: '36px',
  padding: '6px 16px',
  fontSize: '14px',
  lineHeight: '26px',
};

const PROGRAMS = [
  { href: '/ica', label: 'Ideal Client (Alex)', external: false },
  { href: '/acoustic-ecology', label: 'Acoustic Ecology', external: false },
  { href: '/kink-affirming', label: 'Kink-Affirming Care', external: false },
  { href: '/presence', label: 'Pathways to Presence', external: false },
  { href: '/somatic-signals', label: 'Somatic Signals Podcast', external: false },
];

export default function App() {  
  const [scrolled, setScrolled] = useState(false);  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const programsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {  
    const handleScroll = () => setScrolled(window.scrollY > 50);  
    window.addEventListener('scroll', handleScroll);  
    return () => window.removeEventListener('scroll', handleScroll);  
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (programsRef.current && !programsRef.current.contains(e.target as Node)) {
        setIsProgramsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (  
    <div className="relative bg-emerald-950 text-amber-50">  
      {/* Navigation */}  
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-4 bg-emerald-950/80 backdrop-blur-md border-b border-emerald-900/50' : 'py-8 bg-emerald-950/40'}`}>  
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">  
          <div className="flex items-center">
            <img
              src="/Images/Color logo with background.webp"
              alt="Queer Pathways"
              className="h-12 w-auto object-contain"
            />
          </div>  
            
          <div className="hidden lg:flex gap-8 items-center">  
            <NavLink href="#philosophy">Philosophy</NavLink>  
            <NavLink href="#specialists">Specialists</NavLink>  
            <NavLink href="#referrals">Referrals</NavLink>  
            <NavLink href="#sanctuary">Sanctuary</NavLink>

            {/* Programs Dropdown */}
            <div className="relative" ref={programsRef}>
              <button
                onClick={() => setIsProgramsOpen((v) => !v)}
                className="flex items-center gap-1 text-xs uppercase tracking-[0.2em] font-medium text-amber-100/60 hover:text-amber-50 transition-colors"
              >
                Programs
                <ChevronDown
                  size={12}
                  className={`transition-transform duration-200 ${isProgramsOpen ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence>
                {isProgramsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-0 mt-3 w-52 bg-emerald-950/95 border border-emerald-800/70 rounded-xl shadow-xl backdrop-blur-md py-2 z-50"
                  >
                    {PROGRAMS.map((p) => (
                      <a
                        key={p.href}
                        href={p.href}
                        onClick={() => setIsProgramsOpen(false)}
                        className="block px-4 py-2.5 text-xs text-amber-100/70 hover:text-amber-50 hover:bg-emerald-900/40 transition-colors"
                      >
                        {p.label}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/resources/internal-auditor-guide"
              className="text-xs text-amber-100/80 hover:text-amber-50 transition-colors px-3 py-2 rounded-md border border-amber-300/30 hover:border-amber-200/50"
              style={{ fontFamily: 'Roboto, Helvetica, Arial, sans-serif', letterSpacing: '0.02857em' }}
            >
              Dignity Investment
            </Link>
            <NavLink href="https://blog.queerpathways.org" external>Newsletter</NavLink>
            <a   
              href="https://book.carepatron.com/Queer-Pathways/Joshua?p=1achg8U5QhGVWM9fIz.Kig&s=VI4IFsMw&e=b"   
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-50 text-emerald-950 px-8 py-2 rounded-full text-xs font-bold hover:bg-amber-100 transition-all duration-300"  
            >  
              BOOK NOW  
            </a>  
          </div>

          <button className="lg:hidden text-amber-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>  
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}  
          </button>  
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="px-6 py-6 space-y-4 bg-emerald-950/90 backdrop-blur-md border-b border-emerald-900/50">
                <div className="flex flex-col gap-4">
                  <a
                    href="#philosophy"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-sm uppercase tracking-[0.2em] font-medium text-amber-100/60 hover:text-amber-50 transition-colors py-2"
                  >
                    Philosophy
                  </a>
                  <a
                    href="#specialists"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-sm uppercase tracking-[0.2em] font-medium text-amber-100/60 hover:text-amber-50 transition-colors py-2"
                  >
                    Specialists
                  </a>
                  <a
                    href="#referrals"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-sm uppercase tracking-[0.2em] font-medium text-amber-100/60 hover:text-amber-50 transition-colors py-2"
                  >
                    Referrals
                  </a>
                  <a
                    href="#sanctuary"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-sm uppercase tracking-[0.2em] font-medium text-amber-100/60 hover:text-amber-50 transition-colors py-2"
                  >
                    Sanctuary
                  </a>
                  <a
                    href="https://blog.queerpathways.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-sm uppercase tracking-[0.2em] font-medium text-amber-100/60 hover:text-amber-50 transition-colors py-2"
                  >
                    Newsletter
                  </a>
                  <Link
                    to="/resources/internal-auditor-guide"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-sm text-amber-100 hover:text-amber-50 transition-colors py-2 px-3 rounded border border-amber-300/30"
                    style={{ fontFamily: 'Roboto, Helvetica, Arial, sans-serif' }}
                  >
                    Dignity Investment
                  </Link>
                  <div className="pt-2 pb-1">
                    <p className="text-xs uppercase tracking-widest text-amber-400/60 font-semibold px-1 pb-2">Programs</p>
                    {PROGRAMS.map((p) => (
                      <a
                        key={p.href}
                        href={p.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-sm text-amber-100/60 hover:text-amber-50 transition-colors py-2 pl-3"
                      >
                        {p.label}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="pt-4 border-t border-emerald-900/50">
                  <a
                    href="https://book.carepatron.com/Queer-Pathways/Joshua?p=1achg8U5QhGVWM9fIz.Kig&s=VI4IFsMw&e=b"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full bg-amber-50 text-emerald-950 px-8 py-3 rounded-full text-xs font-bold hover:bg-amber-100 transition-all duration-300 text-center"
                  >
                    BOOK NOW
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}  
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">  
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(217,119,6,0.08),transparent_70%)]" />  
        <div className="max-w-5xl mx-auto px-6 text-center z-10 space-y-8">  
          <motion.div  
            initial={{ opacity: 0, y: 30 }}  
            animate={{ opacity: 1, y: 0 }}  
            transition={{ duration: 1 }}  
            className="space-y-8"
          >  
            <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight font-serif">  
              You are tired of being the only Defense Attorney in a courtroom where the Judge, the Prosecutor, and the Jury are all your own voice.
            </h1>  
            <p className="text-lg md:text-xl text-amber-100 max-w-3xl mx-auto" style={{ lineHeight: '1.75', paddingBottom: '6pt' }}>  
              Professional telehealth for the Double-Outsider. We don't just "affirm" your identity; we dismantle the Internal Legal System that tells you that your neurodivergent brilliance is a character flaw.
            </p>  
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">  
              <a   
                href="#book"   
                className="bg-amber-50 text-emerald-950 px-12 py-4 rounded-full font-bold text-base hover:bg-amber-100 transition-all shadow-lg"  
              >  
                Adjourn the Court: Book Your Intake
              </a>  
              <a 
                href="https://blog.queerpathways.org"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-amber-50 text-amber-50 px-12 py-4 rounded-full font-bold text-base hover:bg-amber-50/10 transition-all"  
              >  
                Read the Manifesto  
              </a>  
            </div>  
          </motion.div>  
        </div>  
      </section>

      {/* The Framework Section */}  
      <section id="philosophy" className="py-32 px-6 bg-emerald-900/20">  
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">  
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >  
            <div className="space-y-2">
              <span className="text-amber-400 uppercase tracking-widest text-xs font-bold">The Internal Legal System</span>
              <h2 className="text-5xl md:text-6xl font-bold font-serif leading-tight">The Courtroom You Never Agreed to Enter.</h2>
            </div>
            <div className="space-y-6 text-amber-100 text-lg border-l-2 border-amber-400 pl-6" style={{ lineHeight: '1.75' }}>  
              <p>Many queer and neurodivergent visionaries arrive carrying <strong>Systemic Exhaustion</strong>—the psychological mechanism that tracks the <strong>Ambiguity Tax</strong>: the exhausting mental cost of decoding how to act "normal" in corporate or social spaces while your actual genius is being mis-filed as a character flaw.</p>  
              <p style={{ paddingTop: '6pt' }}>Trauma isn't just a memory. It is an <strong>Exhibit in a trial that never ends</strong>—stored in an Evidence Locker your nervous system keeps sealed shut. We help you open that locker without being buried by it.</p>
              <p style={{ paddingTop: '6pt' }}>We dismantle the "garbage coat" of shame. <strong>Somatic Sovereignty</strong> is not a coping strategy. It is the moment you stop litigating your right to exist and start owning your Nervous System Machine.</p>
            </div>  
          </motion.div>  
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >  
            <div className="bg-emerald-900/40 border border-emerald-800/50 p-8 rounded-2xl space-y-3">  
              <h4 className="text-xl font-bold flex items-center gap-2">
                <Lightbulb className="text-amber-400" size={24} />
                Systemic Exhaustion
              </h4>  
              <p className="text-amber-100 text-base" style={{ lineHeight: '1.75' }}>The mechanism that runs the Ambiguity Tax ledger. Every social interaction, every corporate meeting, every moment of masking—it keeps score. We shut the ledger.</p>  
            </div>  
            <div className="bg-emerald-900/40 border border-emerald-800/50 p-8 rounded-2xl space-y-3">  
              <h4 className="text-xl font-bold flex items-center gap-2">
                <Scale className="text-amber-400" size={24} />
                The Evidence Locker
              </h4>  
              <p className="text-amber-100 text-base" style={{ lineHeight: '1.75' }}>Your trauma is not a character witness against you. It is an Exhibit in a trial that never rested. We help you sort the evidence—and finally close the case.</p>  
            </div>  
            <div className="bg-emerald-900/40 border border-emerald-800/50 p-8 rounded-2xl space-y-3">  
              <h4 className="text-xl font-bold flex items-center gap-2">
                <Compass className="text-amber-400" size={24} />
                Somatic Sovereignty
              </h4>  
              <p className="text-amber-100 text-base" style={{ lineHeight: '1.75' }}>Not "coping." Not management. The moment you stop litigating your right to exist and start running your own Nervous System Machine on your own terms.</p>  
            </div>  
          </motion.div>  
        </div>  
      </section>

      {/* Specialist Triptych Section */}  
      <section id="specialists" className="py-32 px-6">  
        <div className="max-w-6xl mx-auto">  
          <div className="text-center mb-20 space-y-4">  
            <h2 className="text-5xl font-bold font-serif">How We Specialize.</h2>  
            <p className="text-amber-100 max-w-2xl mx-auto text-lg" style={{ lineHeight: '1.75' }}>Three strategic partnerships. One sanctuary. Each designed for the visionary who is too professional for the protest and too queer for the boardroom.</p>  
          </div>  
            
          <div className="grid lg:grid-cols-3 gap-10">  
            {/* Card 1: Specialist Scaffolding */}  
            <motion.div 
              whileHover={{ y: -8 }} 
              className="bg-emerald-900/20 border border-emerald-800/50 p-10 rounded-2xl space-y-6 hover:border-amber-400/50 transition-colors"
            >  
              <div className="w-12 h-12 bg-amber-400/20 rounded-lg flex items-center justify-center">
                <Brain className="text-amber-400" size={24} />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold font-serif">Specialist Scaffolding</h3>  
                <p className="text-amber-400 text-sm uppercase tracking-widest">Performance Advocacy for the Visionary</p>
              </div>
              <p className="text-amber-100" style={{ lineHeight: '1.75' }}>For the neurodivergent queer staring at an email draft for 45 minutes—the Cognitive Friction that makes the Email Stare feel like a character flaw when it is actually a systems mismatch. We build scaffolding around your brilliance, not around your deficits.</p>  
              <div className="space-y-3 text-sm text-amber-100 pt-4">  
                <p><strong>1. Shame Cycle Interruption</strong></p>
                <p style={{ paddingBottom: '6pt' }}>Dismantling the garbage coat, layer by layer.</p>
                <p><strong>2. Masking Recovery</strong></p>
                <p style={{ paddingBottom: '6pt' }}>Rebuilding the self beneath the performance.</p>
                <p><strong>3. Executive Function Advocacy</strong></p>
                <p>Strategic scaffolding for the ADHD and RSD nervous system.</p>
              </div>  
            </motion.div>

            {/* Card 2: Relational Sovereignty */}  
            <motion.div 
              whileHover={{ y: -8 }} 
              className="bg-emerald-900/20 border border-emerald-800/50 p-10 rounded-2xl space-y-6 hover:border-amber-400/50 transition-colors"
            >  
              <div className="w-12 h-12 bg-amber-400/20 rounded-lg flex items-center justify-center">
                <Heart className="text-amber-400" size={24} />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold font-serif">Relational Sovereignty</h3>  
                <p className="text-amber-400 text-sm uppercase tracking-widest">Negotiation as Love Language</p>
              </div>
              <p className="text-amber-100" style={{ lineHeight: '1.75' }}>For those building love on your own terms. We move past "non-judgment" into the active, somatic exploration of desire. Kink and Polyamory are not edge cases here. They are fully integrated into how we understand attachment, consent, and the architecture of radical relational freedom.</p>  
              <div className="space-y-3 text-sm text-amber-100 pt-4">  
                <p><strong>1. Attachment Pattern Work</strong></p>
                <p style={{ paddingBottom: '6pt' }}>Understanding the map before you re-draw it.</p>
                <p><strong>2. Polyam Communication</strong></p>
                <p style={{ paddingBottom: '6pt' }}>Negotiation frameworks for multi-partner structures.</p>
                <p><strong>3. Kink-Affirming Somatic Exploration</strong></p>
                <p>Active, embodied work with desire and consent—no gatekeeping.</p>
              </div>  
            </motion.div>

            {/* Card 3: Gender Story Prep */}  
            <motion.div 
              whileHover={{ y: -8 }} 
              className="bg-emerald-900/20 border border-emerald-800/50 p-10 rounded-2xl space-y-6 hover:border-amber-400/50 transition-colors"
            >  
              <div className="w-12 h-12 bg-amber-400/20 rounded-lg flex items-center justify-center">
                <Shield className="text-amber-400" size={24} />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold font-serif">Gender Story Prep</h3>  
                <p className="text-amber-400 text-sm uppercase tracking-widest">Pre-op Advocacy Without Gatekeeping</p>
              </div>
              <p className="text-amber-100" style={{ lineHeight: '1.75' }}>For trans and gender-expansive clients on any pathway. We explore your gender story without imposed timelines or required regrets. Your narrative is not evidence to be evaluated. It is a map you already hold.</p>  
              <div className="space-y-3 text-sm text-amber-100 pt-4">  
                <p><strong>1. Gender Identity Exploration</strong></p>
                <p style={{ paddingBottom: '6pt' }}>Your story, your terms, your timeline.</p>
                <p><strong>2. Somatic Dysphoria Work</strong></p>
                <p style={{ paddingBottom: '6pt' }}>Embodied tools for navigating body-based distress.</p>
                <p><strong>3. Non-Gatekeeping Letters</strong></p>
                <p>Advocacy documentation written for your care, not the system's comfort.</p>
              </div>  
            </motion.div>  
          </div>  
        </div>  
      </section>

      {/* Surgical Advocacy Checklist Section */}
      <section id="surgical-advocacy" className="py-24 px-6 bg-emerald-900/30">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-950/60 border border-emerald-800/60 rounded-3xl p-8 md:p-12 space-y-8">
            <div className="space-y-4">
              <p className="text-amber-400 uppercase tracking-widest text-xs font-bold">Before You Schedule</p>
              <h2 className="text-4xl md:text-5xl font-bold font-serif">Your Surgical Advocacy Checklist</h2>
              <p className="text-amber-100 leading-relaxed text-lg">
                We believe in a non-gatekeeper approach. My job isn't to "assess" your gender - it's to advocate for your care and help you navigate the medical system's requirements with dignity.
              </p>
              <p className="text-amber-100 leading-relaxed">
                To ensure we can get your letter signed and sent as quickly as possible, please have the following ready before booking your session:
              </p>
            </div>

            <ul className="space-y-4 text-amber-100">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-5 w-5 border border-amber-300/70 rounded-sm shrink-0" aria-hidden="true" />
                <span><strong>The Specific Procedure:</strong> Are we prepping for Top Surgery, HRT, or a Gender-Affirming Genital procedure?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-5 w-5 border border-amber-300/70 rounded-sm shrink-0" aria-hidden="true" />
                <span><strong>Your Surgeon's Details:</strong> I will need the surgeon's name, clinic name, and their fax number or secure email address to send the final letter.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-5 w-5 border border-amber-300/70 rounded-sm shrink-0" aria-hidden="true" />
                <span><strong>Insurance Requirements:</strong> Check with your insurance provider. Do they require one letter (usually for Top/Hormones) or two letters (usually for genital/sterilization procedures)?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-5 w-5 border border-amber-300/70 rounded-sm shrink-0" aria-hidden="true" />
                <span><strong>The "Magic Words":</strong> Does your insurance or surgeon require a specific template or specific clinical buzzwords to ensure coverage? If you're not sure, bring your policy's Gender Reassignment Surgery criteria document.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-5 w-5 border border-amber-300/70 rounded-sm shrink-0" aria-hidden="true" />
                <span><strong>Your Timeline:</strong> When is your surgery date or your deadline for submitting paperwork?</span>
              </li>
            </ul>

            <div className="space-y-6 border-t border-emerald-800/60 pt-6">
              <h3 className="text-2xl font-bold font-serif">Note on the Session</h3>
              <div className="space-y-2">
                <p className="font-semibold text-amber-200">The Session:</p>
                <p className="text-amber-100 leading-relaxed">
                  This is a 60–90 minute collaborative session. We will map out your Gender Story and discuss your support plan for post-op recovery. This is about making sure you are somatically and practically ready for major surgery—not proving who you are.
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-amber-200">The Timeline:</p>
                <p className="text-amber-100 leading-relaxed">
                  90% of the time, we wrap this up in one or two sessions. On rare occasions, a third might be necessary to get the details right. At Queer Pathways, we strive to eliminate unnecessary hurdles to your care. Our goal is to get you your letter and get you on your way.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://book.carepatron.com/Queer-Pathways/Joshua?p=1achg8U5QhGVWM9fIz.Kig&s=VI4IFsMw&e=b"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-amber-50 text-emerald-950 px-10 py-4 rounded-full font-bold text-base hover:bg-amber-100 transition-all shadow-lg"
              >
                Book Your Advocacy Session
              </a>
            </div>

            <div className="bg-emerald-900/40 border border-emerald-800/60 rounded-2xl p-6 space-y-4">
              <img
                src="/Images/Alex ICA.webp"
                alt="Alex ICA archetype"
                className="w-full max-w-md rounded-xl border border-emerald-700/50"
              />
              <p className="text-amber-300 font-semibold">Implementation Tip for the Alex Archetype</p>
              <p className="text-amber-100 text-sm leading-relaxed">
                The Magic Words checklist item is intentionally included for clients who feel anxious about doing paperwork wrong. It supports executive-function clarity while keeping the identity tone soft, affirming, and non-gatekeeping.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Referrals Section */}  
      <section id="referrals" className="py-32 px-6 bg-emerald-900/20">  
        <div className="max-w-4xl mx-auto text-center space-y-8">  
          <Shield className="w-16 h-16 text-amber-400 mx-auto" />  
          <h2 className="text-5xl font-bold font-serif">Strictly 7: The Fast-Track Referral.</h2>
          <div className="bg-amber-400/10 border-2 border-amber-400/40 rounded-2xl p-8 text-left space-y-4">
            <p className="text-xl font-bold text-amber-300 font-serif">The 7-Day Safety Net</p>
            <p className="text-lg text-amber-100" style={{ lineHeight: '1.75' }}>
              We stop the Leaky Bucket. If you are stepping down from PHP or IOP in Pennsylvania, we guarantee a consultation within 7 days to ensure your momentum isn't lost to a 90-day waitlist.
            </p>
          </div>
          <p className="text-xl text-amber-100" style={{ lineHeight: '1.75' }}>  
            We understand the vulnerability of stepping down from PHP or IOP. Queer Pathways offers <strong>priority access</strong> fast-track consultations to ensure clinical momentum is never lost.  
          </p>  
          <div className="grid md:grid-cols-2 gap-6 text-left pt-10">  
            <div className="bg-emerald-900/40 border border-emerald-800/50 p-6 rounded-2xl flex items-start gap-4">  
              <CheckCircle2 className="text-amber-400 shrink-0" size={20} />  
              <div>  
                <p className="font-bold">Direct Integration</p>  
                <p className="text-sm text-amber-100">In-Network with Aetna (PA) and UPMC (PA). No executive function hurdle to verify your benefits.</p>  
              </div>  
            </div>  
            <div className="bg-emerald-900/40 border border-emerald-800/50 p-6 rounded-2xl flex items-start gap-4">  
              <CheckCircle2 className="text-amber-400 shrink-0" size={20} />  
              <div>  
                <p className="font-bold">Telehealth-First</p>  
                <p className="text-sm text-amber-100">Serving the entirety of Pennsylvania.</p>  
              </div>  
            </div>  
          </div>  
        </div>  
      </section>

      {/* Booking Section */}
      <section id="book" className="py-32 px-6 bg-emerald-900/40">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold font-serif">Dignity Investment.</h2>
            <p className="text-xl text-amber-100 max-w-2xl mx-auto" style={{ lineHeight: '1.75' }}>
              We don't charge an "Ambiguity Tax." You are paying for a specialist who understands the mechanics of a neuro-atypical heart without you having to explain the glossary.
            </p>
          </div>

          {/* Session Rates */}
          <div className="border border-amber-400/20 rounded-2xl p-8 bg-emerald-950/40">
            <p className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-6">Session Rates</p>
            <div className="grid grid-cols-3 divide-x divide-amber-400/20">
              <div className="px-6 text-center">
                <p className="text-3xl font-bold font-serif text-amber-50">$150</p>
                <p className="text-sm text-amber-100/70 mt-1">Individual</p>
              </div>
              <div className="px-6 text-center">
                <p className="text-3xl font-bold font-serif text-amber-50">$200</p>
                <p className="text-sm text-amber-100/70 mt-1">Relationship</p>
              </div>
              <div className="px-6 text-center">
                <p className="text-3xl font-bold font-serif text-amber-50">$225</p>
                <p className="text-sm text-amber-100/70 mt-1">Intake</p>
              </div>
            </div>
          </div>

          {/* Thrizer OON Benefits */}
          <div className="text-center">
            <div dangerouslySetInnerHTML={{
              __html: `<script src="https://eligibility.thrizer.com/embed.js" data-src="https://eligibility.thrizer.com/facility/thrizer7t1oh?type=iframe" data-title="Check Your Insurance Benefits" async crossorigin="anonymous"><\/script>`
            }} />
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-emerald-900/40 border border-emerald-800/50 p-8 rounded-2xl space-y-3 text-left">
              <h4 className="font-bold text-lg flex items-center gap-2">
                <CheckCircle2 className="text-amber-400" size={20} />
                Initial Consultation
              </h4>
              <p className="text-sm text-amber-100" style={{ lineHeight: '1.75' }}>15-minute intake to understand your needs and goals. Call us to book @ <a href="tel:3655999002" className="text-amber-300 hover:text-amber-200 transition">365-599-9002</a></p>
            </div>
            <div className="bg-emerald-900/40 border border-emerald-800/50 p-8 rounded-2xl space-y-3 text-left">
              <h4 className="font-bold text-lg flex items-center gap-2">
                <CheckCircle2 className="text-amber-400" size={20} />
                Intake Assessment
              </h4>
              <p className="text-sm text-amber-100" style={{ lineHeight: '1.75' }}>A comprehensive biopsychosocial evaluation designed to understand your internal landscape, attachment history, and neurobiological profile. Somatic stabilization and identity affirmation from session one.</p>
            </div>
            <div className="bg-emerald-900/40 border border-emerald-800/50 p-8 rounded-2xl space-y-4 text-left">
              <h4 className="font-bold text-lg flex items-center gap-2">
                <CheckCircle2 className="text-amber-400" size={20} />
                Dignity Investment
              </h4>
              <div className="space-y-3 text-sm text-amber-100">
                <p className="font-semibold text-amber-50">Direct Integration:</p>
                <p style={{ lineHeight: '1.75' }}>Proudly In-Network with Aetna (PA) and UPMC (PA). Direct Integration means no executive function hurdle to verify your benefits before you walk in.</p>
                <p className="font-semibold text-amber-50 pt-2">The OON Solution:</p>
                <p style={{ lineHeight: '1.75' }}>For all other providers, we use Thrizer to remove the financial friction. You only pay your co-insurance upfront. Thrizer handles the rest so you aren't waiting months for reimbursements or chasing superbills.</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-sm text-amber-100">Questions? <a href="mailto:hello@queerpathways.org" className="text-amber-300 hover:text-amber-200 transition">Reach out directly.</a></p>
            <div>
              <a
                href="https://book.carepatron.com/Queer-Pathways/Joshua?p=1achg8U5QhGVWM9fIz.Kig&s=VI4IFsMw&e=b"
                rel="noopener"
                title="Book appointment"
                style={carepatronButtonStyle}
                target="_blank"
              >
                Book appointment
              </a>
            </div>
          </div>

          <div className="space-y-4 text-left">
            <p className="text-sm uppercase tracking-widest text-amber-400 font-semibold text-center">Book directly below</p>
            <div style={{ display: 'grid', width: '100%', height: '100%', minWidth: '320px', minHeight: '600px' }}>
              <iframe
                title="Carepatron Online Booking"
                aria-label="Book appointments online via Carepatron"
                width="100%"
                height="100%"
                src="https://book.carepatron.com/Queer-Pathways/Joshua?p=1achg8U5QhGVWM9fIz.Kig&s=VI4IFsMw&e=i"
                style={{ border: 0 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Weekend Resource Guide Section */}
      <section id="weekend-safety-net" className="py-24 px-6 bg-emerald-950/70 border-y border-emerald-800/50">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4 text-center">
            <p className="text-amber-400 uppercase tracking-widest text-xs font-bold">Friday Push</p>
            <h2 className="text-4xl md:text-5xl font-bold font-serif">The Weekend Safety Net: Friday Decompression</h2>
            <p className="text-amber-100 leading-relaxed text-lg max-w-3xl mx-auto">
              The transition from the work week to the weekend often feels less like a break and more like a collapse. If you're feeling the weight of the Double-Outsider burnout - navigating a world not built for your neurobiology or your identity - this space is for you.
            </p>
          </div>

          <div className="bg-emerald-900/30 border border-emerald-800/60 rounded-3xl p-8 md:p-10 space-y-6">
            <h3 className="text-2xl font-bold font-serif">Don't Let the Momentum Drain</h3>
            <p className="text-amber-100" style={{ lineHeight: '1.75' }}>
              You are a brilliant leader by day and a ghost in burnout-recovery by night. We call this the Leaky Bucket: you work hard in the week, but without structural scaffolding, that progress can drain away. Use this time to secure your spot for next week.
            </p>

            <div className="space-y-6">
              <h4 className="text-xl font-bold">Your Weekend Framework:</h4>
              <div className="space-y-5 text-amber-100">
                <div>
                  <p style={{ lineHeight: '1.75' }}><strong>1. Stop Litigating Your Worth.</strong> You don't need to earn your rest. The weekend is for re-regulation, not just recovering so you can perform again on Monday.</p>
                </div>
                <div>
                  <p style={{ lineHeight: '1.75' }}><strong>2. Audit Your Capacity.</strong> If your Internal Legal System is screaming about all the things you didn't accomplish, give it a recess. The court is adjourned.</p>
                </div>
                <div>
                  <p style={{ lineHeight: '1.75' }}><strong>3. Secure Your Monday.</strong> We reserve priority slots for Monday morning intakes. Booking now means you start your week with a plan already in place.</p>
                </div>
              </div>
            </div>

            <div className="pt-2 text-center">
              <Link
                to="/resources/internal-auditor-guide"
                className="inline-flex items-center gap-2 text-amber-300 hover:text-amber-200 font-semibold transition mb-4"
              >
                Read The Systemic Exhaustion Guide Online
                <ArrowRight size={16} />
              </Link>
              <br />
              <a
                href="/pathways-to-presence.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-amber-200 hover:text-amber-100 font-medium transition px-4 py-2 rounded"
                style={{ border: '1px solid rgba(251, 191, 36, 0.65)', fontFamily: 'Roboto, Helvetica, Arial, sans-serif' }}
              >
                Download the Full Sovereign Sanctuary Resource PDF
                <ArrowRight size={16} />
              </a>
              <p className="text-xs text-amber-100/70 mt-2">Optional email capture link for Friday resource leads.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sanctuary Section */}
      <section id="sanctuary" className="py-32 px-6">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold font-serif">The Sanctuary.</h2>
            <p className="text-xl text-amber-100" style={{ lineHeight: '1.75' }}>A space designed for the visionary who is exhausted from being brilliant by day and a ghost in burnout-recovery by night.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-3">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <Compass className="text-amber-400" size={24} />
                  Somatic Navigation
                </h3>
                <p className="text-amber-100" style={{ lineHeight: '1.75' }}>
                  We slow down and track your nervous system. Healing isn't just cognitive—it's embodied. We use somatic experiencing, sensory mapping, and trauma-informed techniques to help you reclaim your body as a sanctuary.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <Heart className="text-amber-400" size={24} />
                  Relational Safety
                </h3>
                <p className="text-amber-100" style={{ lineHeight: '1.75' }}>
                  Authentic connection is the medicine. We meet you with curiosity, not judgment. Your identity, your pronouns, your story—all held with genuine care and clinical expertise.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <Sparkles className="text-amber-400" size={24} />
                  Neurodivergent-Affirming Care
                </h3>
                <p className="text-amber-100" style={{ lineHeight: '1.75' }}>
                  We understand masking, sensory overwhelm, and the unique intersections of queerness and neurodivergence. Your neurotype is not a problem to fix. It is part of your design.
                </p>
              </div>
            </div>

            <div className="bg-emerald-900/40 border border-emerald-800/50 p-10 rounded-3xl space-y-6">
              <Quote className="text-amber-400" size={32} />
              <blockquote className="text-lg italic text-amber-50" style={{ lineHeight: '1.75' }}>
                "Therapy isn't about becoming someone else. It's about dismantling the voices that told you who you couldn't be, and remembering who you always were."
              </blockquote>
              <p className="text-sm text-amber-300 font-semibold">— Joshua, LCSW</p>
              <div className="pt-4 border-t border-emerald-800/50 space-y-3">
                <p className="text-sm text-amber-100"><strong>Specializations:</strong></p>
                <p className="text-sm text-amber-100" style={{ lineHeight: '1.75' }}>
                  LGBTQ+ identity exploration and affirmation. Complex trauma and PTSD. Anxiety and depression in queer and BIPOC communities. Relationship and attachment patterns. Neurodivergence and sensory experiences.
                </p>
              </div>
            </div>
          </div>

          {/* Bespoke Anchor: Lyrical Closing */}
          <div className="text-center pt-8 space-y-4 border-t border-emerald-800/40">
            <p className="text-2xl md:text-3xl font-serif italic text-amber-100" style={{ lineHeight: '1.75' }}>
              Like Zach Bryan said, you're just a "man who's tryin' to find a way back home."
            </p>
            <p className="text-xl text-amber-300 font-semibold">We're the map for the home you haven't built yet.</p>
          </div>
        </div>
      </section>

      {/* Footer */}  
      <footer className="py-20 border-t border-emerald-900/50 px-6 bg-emerald-950/50">  
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">  
          <div className="max-w-xs space-y-4">  
            <img
              src="/Images/Color logo with background.webp"
              alt="Queer Pathways"
              className="h-14 w-auto object-contain"
            />  
            <p className="text-sm text-amber-100/70">Specialized Affirming Care <br /> Philadelphia | Pittsburgh | PA | Ontario, Canada</p>  
          </div>  
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-16">  
            <div className="space-y-4">  
              <h5 className="text-xs font-bold uppercase tracking-widest text-amber-400">Navigate</h5>  
              <ul className="space-y-2 text-sm text-amber-100/70">  
                <li><a href="#philosophy" className="hover:text-amber-50 transition">Philosophy</a></li>  
                <li><a href="#specialists" className="hover:text-amber-50 transition">Specialists</a></li>  
                <li><a href="#book" className="hover:text-amber-50 transition">Booking</a></li>  
              </ul>  
            </div>  
            <div className="space-y-4">  
              <h5 className="text-xs font-bold uppercase tracking-widest text-amber-400">Connect</h5>  
              <ul className="space-y-2 text-sm text-amber-100/70">  
                <li><a href="https://blog.queerpathways.org" target="_blank" rel="noopener noreferrer" className="hover:text-amber-50 transition">Substack</a></li>  
                <li><a href="mailto:hello@queerpathways.org" className="hover:text-amber-50 transition">Email</a></li>  
                <li><a href="tel:+13655999002" className="hover:text-amber-50 transition">365-599-9002</a></li>  
              </ul>  
            </div>  
          </div>  
        </div>  
        <div className="max-w-7xl mx-auto pt-12 mt-12 border-t border-emerald-900/50 text-center text-xs text-amber-100/50">  
          © 2026 Samuel Jonassaint, LCSW. All rights reserved.  
        </div>  
      </footer>  
    </div>  
  );  
}  
