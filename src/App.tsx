import React from 'react';

/**  
 * QUEER PATHWAYS - FULL PRODUCTION ARCHITECTURE  
 * Palette:   
 * - Deep Green: #153009 (Primary Background)  
 * - Academic Gold: #cbb26a (Primary Accent)  
 * - Deep Sanctuary: #0a1804 (Section Backgrounds)  
 * - Off-White: #f4f4f4 (Readability)  
 */

const QueerPathwaysApp = () => {  
  return (  
    <div className="min-h-screen bg-[#153009] text-[#f4f4f4] font-sans selection:bg-[#cbb26a] selection:text-[#153009] overflow-x-hidden">  
        
      {/* --- 00: GLOBAL NAVIGATION --- */}  
      <nav className="fixed top-0 w-full z-[100] bg-[#153009]/95 backdrop-blur-md border-b border-[#cbb26a]/10 px-8 py-6 flex justify-between items-center">  
        <div className="flex flex-col group cursor-pointer">  
            <h1 className="text-[#cbb26a] font-serif text-2xl tracking-tighter uppercase italic leading-none group-hover:text-white transition-colors">Queer Pathways</h1>  
            <span className="text-[9px] tracking-[0.5em] text-gray-500 uppercase mt-1">PA & Telehealth Sanctuary</span>  
        </div>  
          
        <div className="hidden lg:flex items-center space-x-12 text-[10px] uppercase tracking-[0.25em] text-[#cbb26a]">  
          <a href="#moat" className="hover:text-white transition-colors">The Moat</a>  
          <a href="#sanctuary" className="hover:text-white transition-colors">Digital Sanctuary</a>  
          <a href="#referrals" className="hover:text-white transition-colors">PA Referrals</a>  
          <a href="#investment" className="hover:text-white transition-colors">Dignity Investment</a>  
          <a href="#clinician" className="hover:text-white transition-colors">Joshua</a>  
          <button className="bg-transparent border border-[#cbb26a] px-6 py-2.5 hover:bg-[#cbb26a] hover:text-[#153009] transition-all duration-500 font-bold">  
            Book a Consultation  
          </button>  
        </div>

        {/* Mobile Menu Icon (Visual Only) */}  
        <div className="lg:hidden text-[#cbb26a]">  
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">  
            <path d="M4 8h16M4 16h16" />  
          </svg>  
        </div>  
      </nav>

      {/* --- 01: HERO SECTION (ADJOURN THE TRIAL) --- */}  
      <section className="relative pt-60 pb-40 px-8 max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">  
        <div className="space-y-12 z-10">  
          <div className="space-y-4">  
            <p className="text-[#cbb26a] uppercase tracking-[0.4em] text-[10px] font-bold">Est. 2024 — Mental Health Specialty</p>  
            <h2 className="text-7xl lg:text-9xl font-serif leading-[0.82] tracking-tighter">  
              Adjourn <br />the <span className="italic text-[#cbb26a]">Internal <br />Trial.</span>  
            </h2>  
          </div>  
            
          <div className="max-w-lg space-y-8 border-l border-[#cbb26a]/20 pl-10 py-2">  
            <p className="text-xl text-gray-300 leading-relaxed font-light">  
              High-level, telehealth-based advocacy for queer and neurodivergent professionals across Pennsylvania.   
              We investigate the <span className="text-[#cbb26a] font-medium">Internal Legal System</span> of shame that governs your choices.  
            </p>  
            <p className="text-sm text-gray-500 uppercase tracking-widest font-medium">Appointments available within 7 days</p>  
          </div>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 pt-6">  
            <button className="bg-[#cbb26a] text-[#153009] px-12 py-6 font-bold uppercase tracking-widest text-[11px] hover:bg-white hover:scale-[1.02] transition-all shadow-2xl">  
              Enter The Territory  
            </button>  
            <button className="bg-transparent border border-white/10 px-12 py-6 font-bold uppercase tracking-widest text-[11px] hover:border-[#cbb26a] transition-all">  
              The Path Journal  
            </button>  
          </div>  
        </div>

        <div className="relative group">  
          <div className="absolute -inset-4 border border-[#cbb26a]/10 group-hover:border-[#cbb26a]/30 transition-colors pointer-events-none"></div>  
          <img   
            src="https://cdn.marblism.com/cOn4FeRyy-l.webp"   
            alt="Academic Noir Moody Study"   
            className="rounded-sm grayscale contrast-125 opacity-80 brightness-90 shadow-2xl transition-all duration-1000 group-hover:brightness-100"  
          />  
          <div className="absolute -bottom-12 -left-12 bg-[#0a1804] border border-[#cbb26a]/20 p-12 hidden xl:block shadow-3xl transform group-hover:-translate-y-2 transition-transform">  
            <p className="font-serif text-3xl italic text-[#cbb26a] leading-tight">  
              "Healing is a <br />Dignity Investment."  
            </p>  
          </div>  
        </div>  
      </section>

      {/* --- 02: THE MOAT (SERVICES & ARCHETYPES) --- */}  
      <section id="moat" className="py-40 px-8 bg-[#0a1804]">  
        <div className="max-w-7xl mx-auto space-y-24">  
          <div className="grid lg:grid-cols-2 gap-16 items-end">  
            <div className="space-y-6">  
              <p className="text-[#cbb26a] uppercase tracking-[0.4em] text-[10px] font-bold">01 — The Moat</p>  
              <h3 className="text-6xl font-serif tracking-tight">Specialized Reframes</h3>  
            </div>  
            <p className="text-gray-400 text-lg max-w-md pb-2">  
              We replace standard "services" with specialized advocacy that addresses the core friction of high-masking neurodivergent life.  
            </p>  
          </div>

          <div className="grid lg:grid-cols-3 gap-px bg-[#cbb26a]/10 border border-[#cbb26a]/10 shadow-2xl">  
            {/* Archetype 1: Justin (Refactored) */}  
            <div className="bg-[#153009] p-16 space-y-10 hover:bg-[#1c3d0c] transition-all duration-500 group">  
              <div className="flex justify-between items-start">  
                <span className="text-[#cbb26a] font-serif text-5xl italic opacity-20 group-hover:opacity-100 transition-opacity">01</span>  
                <div className="bg-[#cbb26a]/5 px-3 py-1 rounded-full text-[9px] uppercase tracking-widest text-[#cbb26a]">Active Profile</div>  
              </div>  
              <div className="space-y-4">  
                <h4 className="text-2xl font-serif text-[#cbb26a]">Justin: The Relationship Alchemist</h4>  
                <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-200 transition-colors">  
                  Navigating the intersection of high-intensity professional life, <span className="text-white font-medium italic underline decoration-[#cbb26a]">chemsex use</span>, and complex relational dynamics.   
                  We implement an explicit <span className="text-white font-medium uppercase tracking-tighter">Harm Reduction model</span>   
                  to prioritize agency and somatic safety over institutional judgment.  
                </p>  
              </div>  
              <div className="pt-4 flex items-center space-x-2 text-[9px] uppercase tracking-widest text-[#cbb26a]/60">  
                <span className="w-1 h-1 bg-[#cbb26a] rounded-full"></span>  
                <span>Substance Advocacy • Kink • ENM</span>  
              </div>  
            </div>

            {/* Archetype 2: RSD & Shame */}  
            <div className="bg-[#153009] p-16 space-y-10 hover:bg-[#1c3d0c] transition-all duration-500 group">  
              <div className="flex justify-between items-start">  
                <span className="text-[#cbb26a] font-serif text-5xl italic opacity-20 group-hover:opacity-100 transition-opacity">02</span>  
                <div className="bg-[#cbb26a]/5 px-3 py-1 rounded-full text-[9px] uppercase tracking-widest text-[#cbb26a]">Core Framework</div>  
              </div>  
              <div className="space-y-4">  
                <h4 className="text-2xl font-serif text-[#cbb26a]">The Internal Courtroom</h4>  
                <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-200 transition-colors">  
                  For those who feel like a defendant in their own head. We focus on dismantling the <span className="text-white italic">Internal Auditor</span>   
                  and reclaiming your territory from the soul-crushing trial of Rejection Sensitive Dysphoria (RSD).  
                </p>  
              </div>  
              <div className="pt-4 flex items-center space-x-2 text-[9px] uppercase tracking-widest text-[#cbb26a]/60">  
                <span className="w-1 h-1 bg-[#cbb26a] rounded-full"></span>  
                <span>Neurobiology • Masking • Shame Relief</span>  
              </div>  
            </div>

            {/* Archetype 3: Relational Diversity */}  
            <div className="bg-[#153009] p-16 space-y-10 hover:bg-[#1c3d0c] transition-all duration-500 group">  
              <div className="flex justify-between items-start">  
                <span className="text-[#cbb26a] font-serif text-5xl italic opacity-20 group-hover:opacity-100 transition-opacity">03</span>  
                <div className="bg-[#cbb26a]/5 px-3 py-1 rounded-full text-[9px] uppercase tracking-widest text-[#cbb26a]">Somatic Anchor</div>  
              </div>  
              <div className="space-y-4">  
                <h4 className="text-2xl font-serif text-[#cbb26a]">Somatic Sovereignty</h4>  
                <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-200 transition-colors">  
                  Framing kink and relational diversity as attachment repair. Your love language is neurodivergent,   
                  and we move beyond "tolerance" to clinical fluency in power exchange and non-traditional structures.  
                </p>  
              </div>  
              <div className="pt-4 flex items-center space-x-2 text-[9px] uppercase tracking-widest text-[#cbb26a]/60">  
                <span className="w-1 h-1 bg-[#cbb26a] rounded-full"></span>  
                <span>BDSM • Polycules • Attachment Repair</span>  
              </div>  
            </div>  
          </div>  
        </div>  
      </section>

      {/* --- 03: DIGITAL SANCTUARY (THE NEW SPATIAL REFRAME) --- */}  
      <section id="sanctuary" className="py-48 px-8 bg-[#153009] relative overflow-hidden">  
        {/* Decorative background element */}  
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#cbb26a]/[0.02] -skew-x-12"></div>  
          
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-24 items-center relative z-10">  
          <div className="space-y-10">  
            <div className="space-y-4">  
              <p className="text-[#cbb26a] uppercase tracking-[0.4em] text-[10px] font-bold">Telehealth Framework</p>  
              <h3 className="text-6xl font-serif leading-tight">Digital Sanctuary</h3>  
            </div>  
              
            <div className="space-y-8 text-xl leading-relaxed text-gray-300 font-light">  
              <p>  
                Our practice is a 100% telehealth model, serving Philadelphia and the rural stretches of Pennsylvania.   
                We provide a secure, HIPAA-compliant space that respects the   
                <span className="text-[#cbb26a] italic font-medium"> metabolic cost of high-functioning neurodivergence.</span>  
              </p>  
              <p>  
                No commute, no sensory-overwhelming waiting rooms—just deep, investigative work   
                from the safety of your own territory.  
              </p>  
            </div>

            <div className="flex items-center space-x-6 pt-6">  
                <div className="h-px w-20 bg-[#cbb26a]/30"></div>  
                <p className="font-bold uppercase tracking-[0.3em] text-[11px] text-[#cbb26a]">  
                  Serving All of Pennsylvania  
                </p>  
            </div>  
          </div>

          <div className="grid grid-cols-2 gap-8 items-start">  
            <div className="space-y-8 translate-y-16">  
              <img   
                src="https://cdn.marblism.com/HJCzfTp0-eF.webp"   
                alt="Sanctuary 1"   
                className="rounded-sm border border-[#cbb26a]/20 shadow-3xl hover:border-[#cbb26a]/50 transition-colors"   
              />  
              <div className="bg-[#0a1804]/50 p-6 border-l border-[#cbb26a]/20">  
                <p className="text-[10px] uppercase tracking-widest text-[#cbb26a]">Secure Base Architecture</p>  
              </div>  
            </div>  
            <img   
              src="https://cdn.marblism.com/BKayhLnpsN6.webp"   
              alt="Sanctuary 2"   
              className="rounded-sm border border-[#cbb26a]/20 shadow-3xl hover:border-[#cbb26a]/50 transition-colors"   
            />  
          </div>  
        </div>  
      </section>

      {/* --- 04: PA REFERRAL SHORTCUT (SAFETY NET) --- */}  
      <section id="referrals" className="py-40 px-8 bg-[#0a1804] border-y border-[#cbb26a]/10 relative">  
        <div className="max-w-4xl mx-auto text-center space-y-12">  
            <p className="text-[#cbb26a] uppercase tracking-[0.4em] text-[10px] font-bold">04 — The 7-Day Safety Net</p>  
            <h3 className="text-6xl font-serif tracking-tight">Pennsylvania Referral Shortcut</h3>  
            <p className="text-2xl text-gray-400 leading-relaxed font-light max-w-3xl mx-auto">  
                Addressing the "Leaky Bucket" of post-IOP care. We prioritize <span className="text-white italic underline decoration-[#cbb26a]/40 underline-offset-8">7-day consultation windows</span>   
                for 2SLGBTQI+ and ADHD clients stepping down from PHP/IOP care.  
            </p>  
            <div className="pt-12 flex justify-center space-x-12">  
                <div className="text-left space-y-2">  
                    <p className="text-[10px] text-[#cbb26a] uppercase tracking-widest">Fast-Track For</p>  
                    <p className="text-sm font-medium">Step-down Coordination</p>  
                </div>  
                <div className="text-left space-y-2">  
                    <p className="text-[10px] text-[#cbb26a] uppercase tracking-widest">Priority Intake</p>  
                    <p className="text-sm font-medium">Clinical Continuity</p>  
                </div>  
            </div>  
            <div className="pt-10">  
                <button className="bg-transparent border border-white/20 text-white px-12 py-6 font-bold uppercase tracking-widest text-[11px] hover:border-[#cbb26a] hover:text-[#cbb26a] transition-all">  
                    Direct Clinician Line  
                </button>  
            </div>  
        </div>  
      </section>

      {/* --- 05: DIGNITY INVESTMENT (THE FINANCIAL ARCHITECTURE) --- */}  
      <section id="investment" className="py-48 px-8 bg-[#153009]">  
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-32 items-center">  
            <div className="space-y-12">  
                <div className="space-y-4">  
                  <p className="text-[#cbb26a] uppercase tracking-widest text-[10px] font-bold">02 — Financial Framing</p>  
                  <h3 className="text-7xl font-serif leading-[1.1]">The Dignity <br />Investment</h3>  
                </div>  
                <div className="space-y-8 text-gray-400 text-xl leading-relaxed font-light">  
                  <p>  
                      Generalist therapy often requires you to spend months educating your therapist on your identity.   
                      At Queer Pathways, we speak <span className="text-white">2SLGBTQI+, Kink, and Neurodivergent</span> fluently.  
                  </p>  
                  <p className="text-lg italic">  
                    You aren't paying for "talk therapy"; you are investing in a specialist advocate who helps you recover your bandwidth and your time.  
                  </p>  
                </div>  
            </div>

            <div className="bg-[#0a1804] border border-[#cbb26a]/20 p-16 space-y-12 shadow-3xl transform rotate-1 hover:rotate-0 transition-transform duration-700">  
                <div className="space-y-10">  
                  <div className="flex justify-between items-end border-b border-[#cbb26a]/10 pb-6">  
                      <div className="space-y-1">  
                        <span className="font-serif text-2xl">Intake Assessment</span>  
                        <p className="text-[10px] text-gray-500 uppercase tracking-widest">90 Minute Deep Dive</p>  
                      </div>  
                      <span className="text-[#cbb26a] font-bold text-2xl">$225</span>  
                  </div>  
                  <div className="flex justify-between items-end border-b border-[#cbb26a]/10 pb-6">  
                      <div className="space-y-1">  
                        <span className="font-serif text-2xl">Individual Therapy</span>  
                        <p className="text-[10px] text-gray-500 uppercase tracking-widest">50 Minute Clinical Session</p>  
                      </div>  
                      <span className="text-[#cbb26a] font-bold text-2xl">$150</span>  
                  </div>  
                  <div className="flex justify-between items-end border-b border-[#cbb26a]/10 pb-6">  
                      <div className="space-y-1">  
                        <span className="font-serif text-2xl">Relationship Therapy</span>  
                        <p className="text-[10px] text-gray-500 uppercase tracking-widest">Polyam & ENM Friendly (50 min)</p>  
                      </div>  
                      <span className="text-[#cbb26a] font-bold text-2xl">$200</span>  
                  </div>  
                </div>

                <div className="space-y-8">  
                  <div className="bg-[#cbb26a]/5 p-6 rounded-sm text-center">  
                    <p className="text-[10px] text-gray-400 uppercase tracking-[0.3em] font-medium leading-relaxed">  
                        In-Network with Aetna • Automated Superbills via Thrizer <br />to maximize OON benefits without executive drain.  
                    </p>  
                  </div>  
                  <button className="w-full bg-[#cbb26a] text-[#153009] py-7 font-bold uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl">  
                      Secure Your Clinical Slot  
                  </button>  
                </div>  
            </div>  
        </div>  
      </section>

      {/* --- 06: THE CLINICIAN (JOSHUA BIO) --- */}  
      <section id="clinician" className="py-48 px-8 bg-[#0a1804] relative">  
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-24 items-center">  
          <div className="relative group overflow-hidden">  
            <img   
              src="/Joshua dark background.webp"   
              alt="Joshua Jonassaint LCSW"   
              className="rounded-sm grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2000ms] border border-[#cbb26a]/20 shadow-3xl"  
            />  
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1804] to-transparent opacity-60"></div>  
            <div className="absolute bottom-8 left-8">  
               <p className="text-[#cbb26a] font-serif text-xl italic">Joshua | They/Them</p>  
            </div>  
          </div>

          <div className="space-y-12">  
            <div className="space-y-4">  
              <p className="text-[#cbb26a] uppercase tracking-[0.4em] text-[10px] font-bold">03 — The Clinician</p>  
              <h3 className="text-8xl font-serif tracking-tighter leading-[0.85]">Joshua <br />Jonassaint</h3>  
              <p className="text-xl font-sans font-light tracking-[0.1em] text-gray-500 uppercase">LCSW (PA, ON) — WPATH Certified</p>  
            </div>  
              
            <p className="text-2xl text-gray-300 italic font-light leading-relaxed border-l-2 border-[#cbb26a]/40 pl-10">  
              "Healing isn't about fixing what's broken; it's about reclaiming the parts of yourself that were told they didn't belong."  
            </p>

            <div className="grid grid-cols-2 gap-12 pt-8">  
               <div className="space-y-4">  
                  <h5 className="text-[10px] uppercase tracking-widest text-[#cbb26a] font-bold">Clinical Specialties</h5>  
                  <ul className="text-sm text-gray-400 space-y-2 leading-relaxed">  
                    <li>Neurodivergent ASD/ADHD</li>  
                    <li>Kink & Power Exchange</li>  
                    <li>Gender Affirming Surgery Referral</li>  
                    <li>Complex Trauma & RSD</li>  
                  </ul>  
               </div>  
               <div className="space-y-4">  
                  <h5 className="text-[10px] uppercase tracking-widest text-[#cbb26a] font-bold">Frameworks</h5>  
                  <ul className="text-sm text-gray-400 space-y-2 leading-relaxed">  
                    <li>Integrated Pleasure Model</li>  
                    <li>Wabi-Sabi Body Acceptance</li>  
                    <li>Somatic Internal Legal System</li>  
                    <li>Harm Reduction Substance Use</li>  
                  </ul>  
               </div>  
            </div>  
          </div>  
        </div>  
      </section>

      {/* --- 07: THE ALEX FAQ (ADDRESSING THE FEARS) --- */}  
      <section className="py-40 px-8 bg-[#153009] border-t border-[#cbb26a]/10">  
        <div className="max-w-4xl mx-auto space-y-24">  
          <div className="text-center space-y-4">  
            <p className="text-[#cbb26a] uppercase tracking-widest text-[10px] font-bold">User Manual</p>  
            <h3 className="text-5xl font-serif italic text-white tracking-tight">Addressing The Fears</h3>  
          </div>

          <div className="grid md:grid-cols-2 gap-20">  
              <div className="space-y-6">  
                  <div className="w-12 h-px bg-[#cbb26a]/50 mb-8"></div>  
                  <h4 className="text-2xl font-serif text-[#cbb26a] tracking-tight">What if I forget my session?</h4>  
                  <p className="text-gray-400 leading-relaxed text-lg">  
                    We use multi-channel SMS/Email prompts to support your executive functioning. We build the <span className="italic">structural scaffolding</span> so you don't have to carry the mental load alone.  
                  </p>  
              </div>  
              <div className="space-y-6">  
                  <div className="w-12 h-px bg-[#cbb26a]/50 mb-8"></div>  
                  <h4 className="text-2xl font-serif text-[#cbb26a] tracking-tight">What if I’m 'too broken'?</h4>  
                  <p className="text-gray-400 leading-relaxed text-lg">  
                    The court is adjourned here; there is no 'broken,' only 'unmapped.' We aren't fixing you; we're reclaiming your territory from societal scripts that weren't yours to begin with.  
                  </p>  
              </div>  
          </div>  
        </div>  
      </section>

      {/* --- 08: QUEER RESILIENCE (COMMUNITY) --- */}  
      <section className="py-40 px-8 bg-[#0a1804]">  
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">  
           <div className="space-y-12">  
              <h3 className="text-6xl font-serif leading-tight">Queer Resilience <br /><span className="text-[#cbb26a] italic">Community Groups</span></h3>  
              <p className="text-xl text-gray-400 font-light leading-relaxed">  
                 Community is our greatest anchor. Our DBT-informed consultation and resilience groups are designed for those tired of explaining their identity to the world.  
              </p>  
              <div className="space-y-6 pt-6">  
                  {["DBT Consultation for Therapists", "Queer & Neurodivergent Peer Support", "Structured Relief & Regulation Workshops"].map((item, idx) => (  
                    <div key={idx} className="flex items-center space-x-6 group cursor-pointer">  
                        <span className="w-2 h-2 bg-[#cbb26a] rounded-full group-hover:scale-150 transition-transform"></span>  
                        <p className="text-sm uppercase tracking-[0.2em] group-hover:text-white transition-colors">{item}</p>  
                    </div>  
                  ))}  
              </div>  
              <button className="bg-[#cbb26a] text-[#153009] px-10 py-5 font-bold uppercase tracking-widest text-[11px] mt-8">  
                  Join the Circle  
              </button>  
           </div>  
           <div className="relative">  
              <img   
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1200"   
                alt="Community"   
                className="rounded-sm grayscale contrast-125 opacity-70 border border-[#cbb26a]/10 shadow-3xl"  
              />  
           </div>  
        </div>  
      </section>

      {/* --- 09: THE PATH (JOURNAL / BLOG) --- */}  
      <section id="journal" className="py-48 px-8 bg-[#153009]">  
        <div className="max-w-7xl mx-auto space-y-24">  
            <div className="flex justify-between items-end border-b border-[#cbb26a]/10 pb-12">  
                <div className="space-y-4">  
                  <p className="text-[#cbb26a] uppercase tracking-[0.4em] text-[10px] font-bold">04 — Journal</p>  
                  <h3 className="text-6xl font-serif">The Path</h3>  
                </div>  
                <a href="/journal" className="text-[#cbb26a] uppercase tracking-widest text-[11px] font-bold hover:text-white transition-colors">  
                  View Full Archives →  
                </a>  
            </div>

            <div className="grid md:grid-cols-3 gap-12">  
                {/* Entry 1: Resonance */}  
                <div className="space-y-8 group cursor-pointer">  
                    <div className="overflow-hidden">  
                      <img src="https://cdn.marblism.com/99KYkoEtGgD.webp" alt="Resonance" className="grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />  
                    </div>  
                    <div className="space-y-4">  
                      <p className="text-[#cbb26a] uppercase text-[10px] tracking-[0.3em] font-bold">Clinical • Somatic</p>  
                      <h4 className="text-2xl font-serif group-hover:italic transition-all">Resonance: The Country Music Connection</h4>  
                      <p className="text-sm text-gray-500 leading-relaxed">Exploring somatic listening and the Internal Courtroom through 24 frames of sound.</p>  
                    </div>  
                </div>

                {/* Entry 2: Bedroom */}  
                <div className="space-y-8 group cursor-pointer">  
                    <div className="overflow-hidden">  
                      <img src="https://cdn.marblism.com/p8vT6f0mHBR.webp" alt="Identity" className="grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />  
                    </div>  
                    <div className="space-y-4">  
                      <p className="text-[#cbb26a] uppercase text-[10px] tracking-[0.3em] font-bold">Identity • Sexuality</p>  
                      <h4 className="text-2xl font-serif group-hover:italic transition-all">Neurodivergence in the Bedroom</h4>  
                      <p className="text-sm text-gray-500 leading-relaxed">Dismantling performance anxiety and sensory overload in intimate spaces.</p>  
                    </div>  
                </div>

                {/* Entry 3: Ledger Resource */}  
                <div className="bg-[#cbb26a] p-12 text-[#153009] flex flex-col justify-between transform hover:-translate-y-4 transition-transform duration-700 shadow-3xl">  
                    <div className="space-y-6">  
                      <p className="uppercase text-[10px] tracking-widest font-black opacity-60">The Resource Vault</p>  
                      <h4 className="text-4xl font-serif italic tracking-tighter leading-none">The Internal Auditor's <br />Ledger</h4>  
                      <p className="text-sm font-medium leading-relaxed">  
                        Volume 01: Understanding neurobiology, RSD, and how kink acts as structured relief for the ND brain.  
                      </p>  
                    </div>  
                    <button className="bg-[#153009] text-white w-full py-6 text-[10px] font-black uppercase tracking-[0.3em] mt-12 hover:bg-black transition-colors">  
                      Download The Ledger  
                    </button>  
                </div>  
            </div>  
        </div>  
      </section>

      {/* --- 10: FINAL CTAS & FOOTER --- */}  
      <section className="py-40 px-8 bg-[#0a1804] text-center border-t border-[#cbb26a]/10">  
         <div className="max-w-3xl mx-auto space-y-16">  
            <h2 className="text-[#cbb26a] font-serif text-5xl italic tracking-tighter">Your territory is waiting.</h2>  
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-10">  
                <button className="bg-[#cbb26a] text-[#153009] px-16 py-7 font-black uppercase tracking-widest text-[11px] shadow-2xl hover:scale-110 transition-transform">  
                   Book Now (30 Seconds)  
                </button>  
                <div className="flex flex-col text-left">  
                   <p className="text-[10px] text-gray-500 uppercase tracking-widest">Questions?</p>  
                   <p className="text-sm font-serif text-[#cbb26a]">Joshua@QueerPathways.org</p>  
                </div>  
            </div>  
         </div>  
      </section>

      <footer className="py-24 px-8 border-t border-[#cbb26a]/5 bg-[#0a1804]">  
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-16">  
            <div className="col-span-2 space-y-6">  
                <h1 className="text-[#cbb26a] font-serif text-3xl italic tracking-tighter">Queer Pathways</h1>  
                <p className="text-xs text-gray-600 uppercase tracking-[0.4em] leading-relaxed max-w-sm">  
                   Specialized Telehealth for the 2SLGBTQI+ & Neurodivergent Community across Pennsylvania & Ontario.  
                </p>  
            </div>  
            <div className="space-y-6">  
                <h5 className="text-[10px] uppercase tracking-widest text-white font-bold">Clinical Hubs</h5>  
                <div className="text-gray-600 text-xs space-y-2 uppercase tracking-widest">  
                   <p>Philadelphia, PA</p>  
                   <p>Pittsburgh, PA</p>  
                   <p>Rural PA Territory</p>  
                </div>  
            </div>  
            <div className="space-y-6 text-right">  
                <h5 className="text-[10px] uppercase tracking-widest text-white font-bold">Archives</h5>  
                <div className="text-gray-600 text-xs space-y-2 uppercase tracking-widest">  
                   <p>Substack</p>  
                   <p>LinkedIn</p>  
                   <p>Instagram</p>  
                </div>  
            </div>  
        </div>  
        <div className="max-w-7xl mx-auto pt-24 text-center">  
            <p className="text-[9px] text-gray-700 uppercase tracking-[0.5em]">  
               © 2026 Joshua Jonassaint • LCSW • HIPAA Compliant • Designed for the Double-Outsider  
            </p>  
        </div>  
      </footer>

    </div>  
  );  
};

export default QueerPathwaysApp; 