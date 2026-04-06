import { motion } from "motion/react";
import { Menu, X, ArrowRight, Instagram, Facebook, Linkedin, BookOpen, Mail, LogIn, Globe } from "lucide-react";
import { useState } from "react";

const NAV_LINKS = [
  { name: "Philosophy", href: "#philosophy" },
  { name: "Services", href: "#services" },
  { name: "Referrals", href: "#referrals" },
  { name: "Sanctuary", href: "#sanctuary" },
  { name: "Resonance", href: "resonance" },
  { name: "Booking", href: "#booking" },
  { name: "Newsletter", href: "https://blog.QueerPathways.org", external: true },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'resonance'>('home');

  const handleNavClick = (link: typeof NAV_LINKS[0]) => {
    if (link.external) return;
    
    if (link.href.startsWith("#")) {
      if (currentPage !== 'home') {
        setCurrentPage('home');
        // Wait for render then scroll
        setTimeout(() => {
          const el = document.getElementById(link.href.replace("#", ""));
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const el = document.getElementById(link.href.replace("#", ""));
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    } else if (link.href === "resonance") {
      setCurrentPage('resonance');
      window.scrollTo(0, 0);
    }
    setIsMenuOpen(false);
  };

  const scrollTo = (id: string) => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const el = document.getElementById(id.replace("#", ""));
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById(id.replace("#", ""));
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-brand-green/90 backdrop-blur-md border-b border-white/5" aria-label="Main Navigation">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-serif text-brand-gold tracking-tight whitespace-nowrap"
          >
            <a href="/" aria-label="Queer Pathways Home">Queer Pathways</a>
          </motion.div>

          {/* Centered Nav Links */}
          <div className="hidden sm:flex flex-1 justify-center items-center gap-6 lg:gap-12 mx-8">
            {NAV_LINKS.map((link) => (
              link.external ? (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gold-link text-[11px] lg:text-xs uppercase tracking-[0.2em] font-semibold whitespace-nowrap"
                >
                  {link.name}
                </a>
              ) : (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link)}
                  className={`gold-link text-[11px] lg:text-xs uppercase tracking-[0.2em] font-semibold whitespace-nowrap ${currentPage === 'resonance' && link.href === 'resonance' ? 'text-white' : ''}`}
                >
                  {link.name}
                </button>
              )
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden sm:flex items-center">
            <a 
              href="https://book.carepatron.com/Queer-Pathways/Joshua?p=1achg8U5QhGVWM9fIz.Kig&s=VI4IFsMw&e=b"
              target="_blank"
              rel="noopener noreferrer"
              className="gold-button text-[10px] lg:text-sm px-4 lg:px-6 py-2 lg:py-3"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="sm:hidden text-brand-gold" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="sm:hidden bg-brand-green border-b border-white/5 px-6 py-8 flex flex-col gap-6"
          >
            {NAV_LINKS.map((link) => (
              link.external ? (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gold-link text-xl font-serif text-left"
                >
                  {link.name}
                </a>
              ) : (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link)}
                  className="gold-link text-xl font-serif text-left"
                >
                  {link.name}
                </button>
              )
            ))}
            <a 
              href="https://book.carepatron.com/Queer-Pathways/Joshua?p=1achg8U5QhGVWM9fIz.Kig&s=VI4IFsMw&e=b"
              target="_blank"
              rel="noopener noreferrer"
              className="gold-button text-center"
            >
              Book Appointment
            </a>
          </motion.div>
        )}
      </nav>

      <main className="flex-grow">
        {currentPage === 'home' ? (
          <>
            {/* Hero Section */}
            <section id="philosophy" className="pt-40 pb-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h1 className="text-5xl md:text-7xl mb-8 leading-tight">
              From Defending <br />
              <span className="italic text-stone-100">to Thriving.</span>
            </h1>
            <p className="text-xl text-stone-300 leading-relaxed mb-10 max-w-xl">
              Joshua Jonassaint, LCSW, provides a structural scaffolding for those navigating deep trauma recovery and transitions from higher levels of care. We specialize in the "Internal Auditor"—moving beyond survival into a grounded, visionary existence.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => scrollTo("#booking")} className="gold-button flex items-center gap-2">
                Begin Your Journey <ArrowRight size={18} />
              </button>
              <button onClick={() => handleNavClick({ name: 'Resonance', href: 'resonance' })} className="px-6 py-3 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-green transition-all duration-300">
                Explore Resonance
              </button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card flex flex-col justify-center items-center text-center p-12 min-h-[500px] border-brand-gold/20 bg-brand-gold/5"
          >
            <h2 className="text-3xl mb-6">Secure Booking Portal</h2>
            <p className="text-stone-300 mb-10 max-w-xs leading-relaxed">
              Low-friction entry for those with executive function hurdles.
            </p>
            <a 
              href="https://book.carepatron.com/Queer-Pathways/Joshua?p=1achg8U5QhGVWM9fIz.Kig&s=VI4IFsMw&e=b"
              target="_blank"
              rel="noopener noreferrer"
              className="gold-button"
            >
              Book Appointment
            </a>
          </motion.div>
        </div>
      </section>

      {/* Archetype × Modality Roadmap */}
      <section className="py-24 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl mb-16 text-center">The Archetype × Modality Roadmap</h2>
          <div className="flex flex-col gap-16">
            {[
              {
                name: "Xavier",
                archetype: "The Embodied Pioneer",
                modality: "Somatic Sovereignty",
                struggle: "His body is shifting, his ADHD is humming, and his \"Armor\" is on high alert.",
                treatment: "We don't just talk about the changes; we use Somatic Sovereignty to help him ground into his new physical reality. We’re teaching him to listen to his nervous system so he can inhabit his body instead of just \"operating\" it.",
                image: "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?auto=format&fit=crop&q=80&w=800",
                icon: "01"
              },
              {
                name: "Justin",
                archetype: "The Relationship Alchemist",
                modality: "DBT & \"The Marble Jar\"",
                struggle: "RSD is telling him everyone is about to leave, making polyamory and kink feel like a minefield.",
                treatment: "We use DBT (Distress Tolerance & Interpersonal Effectiveness) to give him a toolkit for the \"Marble Jar.\" We’re teaching him how to negotiate trust and manage the \"Internal Auditor\" when it tries to sabotage his connections.",
                image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800",
                icon: "02"
              },
              {
                name: "Brian",
                archetype: "The Exhausted Architect",
                modality: "Radical Acceptance",
                struggle: "52 years of \"Old Guard\" rigidity and performing \"strength\" have left him lonely and tired.",
                treatment: "Radical Acceptance is the sledgehammer. We’re helping him stop the war against his own history and his own queer identity. Once he accepts \"what is,\" he can finally stop building walls and start building a life.",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800",
                icon: "03"
              },
              {
                name: "Alex",
                archetype: "The Masking Visionary",
                modality: "The Internal Courtroom Audit",
                struggle: "High-functioning burnout and the massive metabolic cost of neurodivergent masking.",
                treatment: "We perform a full Internal Courtroom Audit to identify the Internal Prosecutor's latest case—the voice that argues they are \"inherently broken\"—and dismantle the Evidence Locker of past medical gaslighting and systemic exclusion. The Verdict? We aren't just solving a problem; we are Dismissing the Case entirely.",
                image: "https://images.unsplash.com/photo-1531123897727-8f129e16fd8c?auto=format&fit=crop&q=80&w=800",
                icon: "04"
              },
              {
                name: "William",
                archetype: "The Late-Blooming Advocate",
                modality: "Pathways to Presence",
                struggle: "Grieving the \"lost years\" of the AIDS crisis while trying to find joy in the present.",
                treatment: "We use Pathways to Presence to help him anchor in the \"now.\" We’re moving him out of the trauma of the past and into the somatic reality of his current resilience, building a bridge to Radical Trust.",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800",
                icon: "05"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col md:flex-row gap-8 lg:gap-16 items-center md:items-stretch"
              >
                {/* Image Side */}
                <div className="w-full md:w-1/3 lg:w-1/4 shrink-0">
                  <div className="aspect-[3/4] md:h-full overflow-hidden relative glass-card p-0 border-brand-gold/20">
                    <img 
                      src={item.image} 
                      alt={`Portrait of ${item.name}, representing ${item.archetype}`} 
                      className="w-full h-full object-cover opacity-60 mix-blend-luminosity grayscale hover:grayscale-0 hover:opacity-90 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-green/80 via-transparent to-transparent" />
                    <span className="absolute top-6 left-6 text-brand-gold/40 font-serif text-6xl leading-none select-none" aria-hidden="true">{item.icon}</span>
                  </div>
                </div>

                {/* Profile Content Right */}
                <div className="flex-grow flex flex-col justify-center py-4">
                  <div className="border-b border-brand-gold/10 pb-8 mb-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                      <div>
                        <span className="text-brand-gold text-xs uppercase tracking-[0.4em] font-bold block mb-3">{item.modality}</span>
                        <h3 className="text-4xl md:text-5xl font-serif italic text-stone-100">{item.name}</h3>
                      </div>
                      <div className="md:text-right">
                        <h4 className="text-[10px] uppercase tracking-[0.2em] text-brand-gold mb-1 opacity-60">The Archetype</h4>
                        <p className="text-brand-gold font-serif text-xl italic">{item.archetype}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                    <div className="relative">
                      <div className="absolute -left-6 top-0 bottom-0 w-px bg-brand-gold/10 hidden lg:block" />
                      <h4 className="text-[10px] uppercase tracking-[0.3em] text-brand-gold/50 mb-3 font-bold">The Struggle</h4>
                      <p className="text-stone-300 text-lg leading-relaxed font-light">{item.struggle}</p>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-6 top-0 bottom-0 w-px bg-brand-gold/10 hidden lg:block" />
                      <h4 className="text-[10px] uppercase tracking-[0.3em] text-brand-gold/50 mb-3 font-bold">The Treatment</h4>
                      <p className="text-stone-400 text-lg leading-relaxed italic font-light border-l-2 border-brand-gold/20 pl-8 md:border-l-0 md:pl-0">
                        {item.treatment}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <button 
              onClick={() => handleNavClick({ name: 'Resonance', href: 'resonance' })}
              className="group inline-flex items-center gap-4 text-brand-gold hover:text-white transition-colors"
            >
              <span className="text-xs uppercase tracking-[0.4em] font-bold">Next: The Country Music Connection</span>
              <div className="w-12 h-px bg-brand-gold group-hover:w-20 group-hover:bg-white transition-all" />
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Services & Rates */}
      <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">Specialist Rates: The Dignity Investment Protocol</h2>
          <p className="text-stone-400 mb-2">Bespoke, dedicated care for the 2SLGBTQI+ community.</p>
          <p className="text-brand-gold/60 text-[10px] uppercase tracking-[0.2em] font-medium max-w-2xl mx-auto leading-relaxed">
            "Our Private-Pay model is a commitment to the Dignity Investment Protocol—ensuring your care is never dictated by the 'Internal Auditor' of an insurance company."
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {[
            { name: "Intake Assessment", price: "$225", detail: "90-minute foundational deep-dive" },
            { name: "Individual Therapy", price: "$150", detail: "50-minute investigative session" },
            { name: "Relationship Therapy", price: "$200", detail: "50-minute session focusing on attachment security" },
            { name: "Coaching", price: "$150 - $200", detail: "1 hour ($150) or 2 hours ($200)" },
            { name: "Trans Care & Surgery Letters", price: "$200", detail: "Comprehensive assessment and documentation" },
            { name: "DBT Consultation Group", price: "Free", detail: "Community resource for clinical colleagues" },
          ].map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex justify-between items-start border-b border-white/10 pb-6"
            >
              <div>
                <h3 className="text-xl mb-1">{service.name}</h3>
                <p className="text-stone-400 text-sm">{service.detail}</p>
              </div>
              <div className="text-brand-gold font-serif text-xl">{service.price}</div>
            </motion.div>
          ))}
        </div>

        {/* Financial Framing */}
        <div className="mt-20 glass-card bg-brand-gold/5 border-brand-gold/20">
          <h3 className="text-2xl mb-6">Financial & Insurance Framing</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <p className="text-stone-300">
                We operate on a <span className="text-brand-gold">Private Pay and Superbill</span> model to prioritize bespoke care. We are explicitly <span className="text-brand-gold">In-Network with Aetna</span> for Pennsylvania residents.
              </p>
              <p className="text-stone-300">
                For out-of-network clients, we partner with <span className="text-brand-gold">Thrizer</span> to help you skip the reimbursement wait.
              </p>
            </div>
            <ul className="space-y-3 text-stone-400 text-sm">
              <li className="flex gap-3">
                <span className="text-brand-gold">→</span>
                Pay only your co-insurance after sessions.
              </li>
              <li className="flex gap-3">
                <span className="text-brand-gold">→</span>
                Thrizer fronts the rest of the fee and waits for reimbursement.
              </li>
              <li className="flex gap-3">
                <span className="text-brand-gold">→</span>
                Therapists earn their full rate upfront, ensuring practice sustainability.
              </li>
              <li className="flex gap-3">
                <span className="text-brand-gold">→</span>
                <span className="text-brand-gold font-medium">Cancellation Policy:</span> To respect the metabolic cost of our time and the structural scaffolding of the practice, please provide 24 hours notice for cancellations.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Fast-Track Referrals */}
      <section id="referrals" className="py-24 bg-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl mb-8">Fast-Track Referrals</h2>
          <p className="text-xl text-stone-300 mb-10 leading-relaxed">
            Specializing in PHP and IOP step-down transitions. We understand the urgency of structural scaffolding during higher levels of care transitions. Our goal is a <span className="text-brand-gold">seven-day consultation turnaround</span> for all clinical referrals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <a 
              href="https://form.jotform.com/260945943283163" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-b-2 border-brand-gold text-brand-gold pb-1 hover:text-white hover:border-white transition-all text-sm uppercase tracking-widest font-medium"
            >
              Clinical Referral Inquiry
            </a>
            <a 
              href="https://forms.gle/dMuACUyhLjJFwQx98" 
              target="_blank"
              rel="noopener noreferrer"
              className="gold-button text-sm"
            >
              DBT Consultation Group Interest List
            </a>
          </div>
        </div>
      </section>

      {/* Digital Sanctuary */}
      <section id="sanctuary" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl mb-8">Digital Sanctuary</h2>
            <p className="text-stone-300 mb-6 leading-relaxed">
              Our practice is a 100% telehealth model, serving Philadelphia and the rural stretches of Pennsylvania. We provide a secure, HIPAA-compliant space that respects the metabolic cost of high-functioning neurodivergence.
            </p>
            <p className="text-stone-300 mb-8 leading-relaxed">
              No commute, no sensory-overwhelming waiting rooms—just deep, investigative work from the safety of your own territory.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-4 text-brand-gold">
                <div className="w-12 h-[1px] bg-brand-gold" />
                <span className="uppercase tracking-widest text-xs font-medium">Serving All of Pennsylvania</span>
              </div>
              <button 
                onClick={() => handleNavClick({ name: 'Resonance', href: 'resonance' })}
                className="text-brand-gold border-b border-brand-gold/30 pb-1 hover:border-brand-gold transition-all text-xs uppercase tracking-widest font-medium"
              >
                Explore Resonance
              </button>
            </div>
          </motion.div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square bg-stone-800 rounded-sm overflow-hidden">
              <img src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=1000" alt="A serene, professional library sanctuary representing the safe territory of our telehealth practice." className="w-full h-full object-cover opacity-60 mix-blend-luminosity" referrerPolicy="no-referrer" />
            </div>
            <div className="aspect-square bg-stone-800 rounded-sm overflow-hidden mt-8">
              <img src="https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?auto=format&fit=crop&q=80&w=1000" alt="A relaxing and professional space designed for deep, investigative clinical work." className="w-full h-full object-cover opacity-60 mix-blend-luminosity" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Booking Portal */}
      <section id="booking" className="py-24 bg-brand-gold/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl mb-4">Secure Booking Portal</h2>
          <p className="text-stone-400 mb-4">Low-friction entry for those with executive function hurdles.</p>
          <p className="text-brand-gold text-sm uppercase tracking-widest font-medium mb-12 italic">
            "To respect the metabolic cost of our time and the structural scaffolding of the practice, please provide 24 hours notice for cancellations."
          </p>
          
          <div className="bg-white rounded-sm overflow-hidden shadow-2xl" style={{ minHeight: '600px' }}>
            <iframe 
              title="Carepatron Online Booking" 
              alt="Book appointments online via Carepatron" 
              width="100%" 
              height="600" 
              src="https://book.carepatron.com/Queer-Pathways/Joshua?p=1achg8U5QhGVWM9fIz.Kig&s=VI4IFsMw&e=i" 
              style={{ border: 0 }}
            />
          </div>
        </div>
      </section>
          </>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="pt-40 pb-24 px-6 max-w-4xl mx-auto"
          >
            <button 
              onClick={() => { setCurrentPage('home'); window.scrollTo(0, 0); }}
              className="text-brand-gold flex items-center gap-2 mb-12 uppercase tracking-widest text-xs hover:text-white transition-colors"
            >
              <ArrowRight size={16} className="rotate-180" /> Back to Home
            </button>
            
            <h1 className="text-5xl md:text-7xl mb-12 font-serif italic">Resonance: The Country Music Connection</h1>
            
            <div className="aspect-video mb-16 rounded-sm overflow-hidden glass-card p-0">
              <img 
                src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=1200" 
                alt="A vintage guitar and a lone microphone under soft stage lights, representing the emotional depth of country music." 
                className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-16 text-stone-300 text-lg md:text-xl leading-relaxed">
              <div className="space-y-8">
                <p className="font-serif italic text-2xl md:text-3xl text-brand-gold leading-snug">
                  There is a specific kind of silence that exists in the moments before a needle drops on a record or a performer steps into the pool of light on a darkened stage.
                </p>
                <p>
                  It is a heavy, expectant silence that feels like the breath we hold right before we admit something we’ve been hiding from ourselves. In our clinical practice at Queer Pathways, we often talk about the <strong>"Internal Auditor"</strong>—that relentless, invisible force that tracks our every move, tabulates our "ADHD tax," and keeps a running ledger of our perceived failures.
                </p>
                <p>
                  We find that when the Auditor’s voice becomes too loud to bear, there is a strange, grounding medicine found in the three chords and the truth of country music. It is an architecture of the human condition that doesn’t demand we be better, faster, or more "normal." It simply asks us to sit in the dust of our own lives for a while.
                </p>
              </div>

              <div className="glass-card border-brand-gold/20 p-8 md:p-12 bg-brand-gold/5">
                <p className="italic text-stone-200">
                  "When we look at the vintage guitar leaning against a lone microphone under soft stage lights, we aren't just seeing instruments. We are seeing a structural scaffolding for grief."
                </p>
              </div>

              <div className="space-y-8">
                <p>
                  For the 2SLGBTQI+ community and our neurodivergent kin, life often feels like a series of high-stakes performances. We mask our neurobiology to fit into neurotypical corporate structures, and we curate our identities to stay safe in a world that isn't always kind. This has a massive metabolic cost.
                </p>
                <p>
                  In his 2015 song <em>"Something More Than Free,"</em> Jason Isbell sings about the weight of the work and the relief of the weekend, capturing that somatic hum of exhaustion that many of us feel deep in our marrow. He sings about being "something more than free," a line that resonates with anyone who has ever felt the crushing weight of their own autonomy when they are too tired to carry it.
                </p>
              </div>

              <div className="space-y-8 pt-8">
                <h2 className="text-3xl md:text-4xl font-serif italic text-brand-gold">The Internal Auditor and the Evidence Locker</h2>
                <p>
                  In our work with the "Alex" archetype—the high-achieving, queer, neurodivergent professional—we often encounter an internal legal system that is constantly in session. Alex comes into the room with a sense of cold dread, that familiar somatic cue that the Internal Prosecutor is about to present a new case.
                </p>
                <p>
                  The Prosecutor uses the <strong>"Evidence Locker"</strong> of past medical gaslighting, systemic exclusion, and "ADHD tax" moments to argue that Alex is inherently broken. When Alex misses a deadline or forgets a social cue, the Auditor doesn't just see a mistake; it sees a character flaw. This is where the metabolic cost of living starts to bankrupt us. We are spending so much energy on the "Internal Courtroom Audit" that we have nothing left for our own joy.
                </p>
                <p>
                  Country music, in its rawest form, acts as a counter-narrative to this internal litigation. It refuses to look away from the hard truths of being human. It doesn't ask us to "cheer up" or "look on the bright side." Instead, it provides a melody for the resilience we didn't know we had.
                </p>
              </div>

              <div className="border-l-2 border-brand-gold/30 pl-8 py-4">
                <p className="text-stone-400 italic">
                  For Alex, listening to the grit and honesty of a well-crafted song is a way to "Master the Pause." It is a moment where the "Smoke Detector of the Brain"—the amygdala—can finally stop screaming.
                </p>
              </div>

              <div className="space-y-8 pt-8">
                <h2 className="text-3xl md:text-4xl font-serif italic text-brand-gold">Somatic Sovereignty and the Metabolic Cost</h2>
                <p>
                  Healing the soul requires us to acknowledge the metabolic cost of our history. For many in the queer community, our bodies are holding onto years of "high-alert" states. We are constantly scanning for danger—a process that Brené Brown describes as the armor we put on to protect our vulnerabilities.
                </p>
                <p>
                  But that armor is heavy. It creates a chronic depletion that we call <strong>"metabolic bankruptcy."</strong> When we are neurodivergent, the cognitive load of executive dysfunction adds another layer of weight. Russell Barkley speaks to this as a "point of performance" issue; we often know what to do, but the bridge between knowing and doing is out.
                </p>
                <p>
                  Country music serves as a <strong>"Silver-Lined Bridge"</strong> in these moments of burnout. It provides a structural scaffolding for our emotions, allowing us to sit with our pain until it becomes a bridge to something else. It is a constant companion that doesn't demand we mask our "spicy brains" or hide our queer identities.
                </p>
              </div>

              <div className="space-y-8 pt-8">
                <h2 className="text-3xl md:text-4xl font-serif italic text-brand-gold">Reclaiming the Executive Suite</h2>
                <p>
                  Transitioning from a state of constant audit to a state of presence is not a dramatic, overnight transformation. It is quiet and incremental. It’s about the small decisions we make every day to stop the "biometric spectatoring" of our own lives.
                </p>
                <p>
                  When we talk about <strong>"Pittsburgh vs. Cleveland"</strong> in the context of radical acceptance, we are talking about accepting the reality of where we are, even if it’s not where we planned to be. If you are in Pittsburgh, you can’t get to the game in Cleveland by pretending you’re already in Ohio. You have to start where you are.
                </p>
                <p>
                  Country music is the ultimate "Pittsburgh" genre. It’s about the mud, the rust, and the reality of the front porch. It’s about the "Vulnerability Hangover" after a long night of being honest. By embracing this raw storytelling, we can begin to audit the Auditor.
                </p>
              </div>

              <div className="space-y-8 pt-8">
                <h2 className="text-3xl md:text-4xl font-serif italic text-brand-gold">Weaving New Threads</h2>
                <p>
                  We invite you to consider what your own "architecture of the human condition" looks like. Is it built on the rigid, cold lines of the Internal Courtroom, or is it a space that can hold the complexity of your queer, neurodivergent life?
                </p>
                <p>
                  The journey toward self-acceptance is messy and non-linear. There will be days when the "Internal Prosecutor" is louder than any song. But there will also be days when you find resonance in the unexpected—a lyric that mirrors your exact brand of loneliness, or a melody that reminds you of your own resilience.
                </p>
                <p className="font-serif italic text-xl text-brand-gold">
                  In those moments, you are building your sanctuary. You are investing in your own dignity.
                </p>
              </div>

              <div className="space-y-8 pt-8">
                <h2 className="text-3xl md:text-4xl font-serif italic text-brand-gold">Current Resonance</h2>
                <div className="glass-card border-brand-gold/20 p-8 bg-brand-gold/5 flex flex-col md:flex-row items-center gap-8">
                  <div className="w-24 h-24 shrink-0 bg-stone-800 rounded-sm overflow-hidden border border-brand-gold/20">
                    <img 
                      src="https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=200" 
                      alt="Song of the Month cover art" 
                      className="w-full h-full object-cover opacity-80"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex-grow text-center md:text-left">
                    <h3 className="text-brand-gold uppercase tracking-widest text-xs font-bold mb-2">Song of the Month</h3>
                    <p className="text-2xl font-serif italic mb-1">"Something More Than Free"</p>
                    <p className="text-stone-400 text-sm mb-4">Jason Isbell</p>
                    <a 
                      href="https://open.spotify.com/playlist/37i9dQZF1DX48TTZM32S97" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-brand-gold hover:text-white transition-colors text-xs uppercase tracking-widest font-bold"
                    >
                      Listen to the Sanctuary Playlist <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-12 border-t border-brand-gold/10 flex flex-col md:flex-row gap-6">
                <button 
                  onClick={() => scrollTo("#booking")}
                  className="gold-button flex-1"
                >
                  Begin Your Journey
                </button>
                <button 
                  onClick={() => { setCurrentPage('home'); window.scrollTo(0, 0); }}
                  className="px-8 py-4 border border-brand-gold/30 text-brand-gold hover:bg-brand-gold/10 transition-all flex-1"
                >
                  Return to Sanctuary
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="text-brand-gold font-serif text-xl mb-2">Queer Pathways</div>
            <p className="text-stone-500 text-sm">© 2026 Joshua Jonassaint, LCSW. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-8 items-center">
            <a 
              href="https://forms.gle/dMuACUyhLjJFwQx98" 
              target="_blank"
              rel="noopener noreferrer"
              className="gold-button text-xs px-4 py-2"
            >
              DBT Consultation Interest List
            </a>
            <button 
              onClick={() => handleNavClick({ name: 'Resonance', href: 'resonance' })}
              className="gold-link text-sm uppercase tracking-widest"
            >
              Resonance
            </button>
            <a href="https://blog.QueerPathways.org" target="_blank" rel="noopener noreferrer" className="gold-link p-2" title="Newsletter">
              <Globe size={20} />
            </a>
            <a href="https://queerpathways.substack.com/" target="_blank" rel="noopener noreferrer" className="gold-link p-2" title="Substack: The Kink & Relationship Lab">
              <BookOpen size={20} />
            </a>
            <a href="https://www.linkedin.com/newsletters/queer-pathways-newsletter-7428204908253904896" target="_blank" rel="noopener noreferrer" className="gold-link p-2" title="LinkedIn Newsletter: Queer Pathways Newsletter">
              <Linkedin size={20} />
            </a>
            <a href="https://www.instagram.com/queerpathways/" target="_blank" rel="noopener noreferrer" className="gold-link p-2" title="Instagram: queerpathways">
              <Instagram size={20} />
            </a>
            <a href="https://www.facebook.com/queerpathways/" target="_blank" rel="noopener noreferrer" className="gold-link p-2" title="Facebook: queerpathways">
              <Facebook size={20} />
            </a>
            <a href="mailto:jonassaint@queerpathways.org" className="gold-link p-2" title="Email">
              <Mail size={20} />
            </a>
            <a href="https://app.carepatron.com/Login" target="_blank" rel="noopener noreferrer" className="gold-link p-2" title="Portal">
              <LogIn size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
