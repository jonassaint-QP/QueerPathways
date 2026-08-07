import { motion } from "framer-motion";

import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Brain, Scale, ArrowRight, CheckCircle2, Quote } from 'lucide-react';

export const HeroManifesto: React.FC = () => {

  return (
    <>
      {/* Hero Section */}  
      <section className="relative min-h-screen flex items-center justify-center pt-32 overflow-hidden">  
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(217,119,6,0.08),transparent_70%)]" />  
        <div className="max-w-5xl mx-auto px-6 text-center z-10 space-y-8">  
          <motion.div  
            initial={{ opacity: 0, y: 30 }}  
            animate={{ opacity: 1, y: 0 }}  
            transition={{ duration: 1 }}  
            className="space-y-8"
          >  
            <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight font-serif">  
              You're Not Broken. You're Just Tired of Litigating Your Existence.
            </h1>
            <p className="text-lg md:text-xl text-amber-100 max-w-3xl mx-auto qp-leading-175">  
              For queer and neurodivergent visionaries who've spent years running an Internal Courtroom — decoding social scripts, masking brilliance, tracking an Ambiguity Tax that never stops billing.
            </p>  
            <p className="text-xl md:text-2xl font-semibold text-amber-300">We help you adjourn the court.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">  
              <a   
                href="#book"   
                className="bg-amber-50 text-emerald-950 px-12 py-4 rounded-full font-bold text-base hover:bg-amber-100 transition-all shadow-lg"  
              >  
                Adjourn the Court → Book Your Consultation
              </a>  
              <Link
                to="/philosophy"
                className="border-2 border-amber-50 text-amber-50 px-12 py-4 rounded-full font-bold text-base hover:bg-amber-50/10 transition-all"  
              >  
                Read Our Philosophy
              </Link>  
            </div>  
          </motion.div>  
        </div>  
      </section>

      {/* Section 1: The Problem */}
      <section id="problem" className="py-32 px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <span className="text-amber-400 uppercase tracking-widest text-xs font-bold">Why You're Here at Midnight</span>
            <h2 className="text-4xl md:text-5xl font-bold font-serif leading-tight">The Problem.</h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-amber-100 text-lg qp-leading-175"
            >
              <p>You're a high-performer by day. By night, your nervous system is still cross-examining every conversation, every email draft, every moment of being "too much" or "not enough."</p>
              <p>That's not a character flaw. That's <strong className="text-amber-50">Systemic Exhaustion</strong> — and it has a treatment plan.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest">We specialize in the mechanics of the Double-Outsider:</p>
              <ul className="space-y-4">
                {[
                  'Queer in spaces built for straight neurotypicals',
                  'Neurodivergent in spaces that penalize your actual wiring',
                  'Brilliant in a culture that calls your processing speed a "deficit"',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-amber-100">
                    <CheckCircle2 className="text-amber-400 shrink-0 mt-0.5" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: How We Work */}
      <section id="services" className="py-32 px-6 border-t border-emerald-900/30">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <span className="text-amber-400 uppercase tracking-widest text-xs font-bold">How We Work</span>
            <h2 className="text-4xl md:text-5xl font-bold font-serif">Three Pathways. One Radical Premise.</h2>
            <p className="text-amber-100 max-w-2xl mx-auto text-lg">Your identity is not a problem to be managed.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="text-amber-400" size={24} />,
                title: 'Specialist Scaffolding',
                subtitle: 'For the ADHD/autistic brain running on cognitive friction.',
                body: "We don't fix your executive function — we build scaffolding around your genius.",
              },
              {
                icon: <Scale className="text-amber-400" size={24} />,
                title: 'Relational Sovereignty',
                subtitle: 'Kink, polyamory, attachment repair.',
                body: "Desire is not an edge case here. It's the curriculum.",
              },
              {
                icon: <Shield className="text-amber-400" size={24} />,
                title: 'Gender Story Prep',
                subtitle: 'Transition support with zero gatekeeping.',
                body: 'Your timeline. Your terms. No required regrets.',
              },
            ].map((service) => (
              <motion.div
                key={service.title}
                whileHover={{ y: -6 }}
                className="bg-emerald-900/30 border border-emerald-800/50 p-8 rounded-2xl space-y-5 hover:border-amber-400/50 transition-colors"
              >
                <div className="w-12 h-12 bg-amber-400/20 rounded-lg flex items-center justify-center">
                  {service.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold font-serif">{service.title}</h3>
                  <p className="text-amber-400 text-xs uppercase tracking-widest">{service.subtitle}</p>
                </div>
                <p className="text-amber-100 qp-leading-175">{service.body}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-amber-50 text-emerald-950 px-10 py-4 rounded-full font-bold text-base hover:bg-amber-100 transition-all shadow-lg"
            >
              Find Your Path
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 3: Why We're Different */}
      <section id="why-different" className="py-32 px-6 border-t border-emerald-900/30">
        <div className="max-w-4xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-serif">Why We're Different.</h2>
            <p className="text-lg text-amber-100 qp-leading-175">
              We don't do "coping strategies." We dismantle the garbage coat of shame — the internalized narrative that your neurodivergence is a liability and your queerness needs explaining.
            </p>
            <p className="text-lg text-amber-100 qp-leading-175">
              Every session is trauma-informed, neuro-affirming, and kink-fluent. No explaining the glossary. No performing wellness.
            </p>
          </motion.div>

          <div className="bg-emerald-900/40 border border-emerald-800/50 p-8 rounded-3xl">
            <Quote className="text-amber-400 mb-6" size={28} />
            <blockquote className="text-xl italic text-amber-50 qp-leading-175">
              "We don't help you win the case. We help you adjourn the court."
            </blockquote>
            <p className="mt-4 text-sm text-amber-300 font-semibold">— Queer Pathways</p>
          </div>
        </div>
      </section>

      {/* Section 4: Quick Facts */}
      <section id="quick-facts" className="py-24 px-6 border-t border-emerald-900/30">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold font-serif">Quick Facts.</h2>
            <p className="text-amber-100/60 text-sm">(For the burned-out brain.)</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              'Ontario: Direct billing for Sun Life, Manulife, Canada Life, Desjardins',
              'Pennsylvania: In-network with Aetna, BCBS, CIGNA',
              'First appointment within 7 days — no 90-day waitlists',
              'Telehealth across Ontario & PA',
            ].map((fact) => (
              <div key={fact} className="flex items-start gap-3 bg-emerald-900/30 border border-emerald-800/40 rounded-xl p-5">
                <span className="text-lg shrink-0" aria-hidden="true">🟢</span>
                <p className="text-amber-100 text-sm qp-leading-175">{fact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking / CTA Section */}
      <div id="probe" className="relative -top-24" aria-hidden="true" />
      <section id="book" className="py-32 px-6 border-t border-emerald-900/30">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold font-serif">Adjourn the Court.</h2>
            <p className="text-xl text-amber-100 max-w-2xl mx-auto qp-leading-175">
              We don't charge an Ambiguity Tax. You pay for a specialist who understands the mechanics of a neuro-atypical heart without you having to explain the glossary.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-emerald-900/40 border border-emerald-800/50 p-8 rounded-2xl space-y-3 text-left">
              <h4 className="font-bold text-lg flex items-center gap-2">
                <CheckCircle2 className="text-amber-400" size={20} />
                Initial Consultation
              </h4>
              <p className="text-sm text-amber-100 qp-leading-175">15-minute intake to understand your needs and goals. Call us to book @ <a href="tel:3655999002" className="text-amber-300 hover:text-amber-200 transition">365-599-9002</a></p>
            </div>
            <div className="bg-emerald-900/40 border border-emerald-800/50 p-8 rounded-2xl space-y-3 text-left">
              <h4 className="font-bold text-lg flex items-center gap-2">
                <CheckCircle2 className="text-amber-400" size={20} />
                Intake Assessment
              </h4>
              <p className="text-sm text-amber-100 qp-leading-175">A comprehensive biopsychosocial evaluation designed to understand your internal landscape, attachment history, and neurobiological profile. Somatic stabilization and identity affirmation from session one.</p>
            </div>
            <div className="bg-emerald-900/40 border border-emerald-800/50 p-8 rounded-2xl space-y-4 text-left">
              <h4 className="font-bold text-lg flex items-center gap-2">
                <CheckCircle2 className="text-amber-400" size={20} />
                Dignity Investment
              </h4>
              <div className="space-y-3 text-sm text-amber-100">
                <p className="font-semibold text-amber-50">Ontario (Direct Integration):</p>
                <p className="qp-leading-175">Receipt-ready for Sun Life, Manulife, Canada Life, and Desjardins.</p>
                <p className="font-semibold text-amber-50 pt-2">Pennsylvania (In-Network):</p>
                <p className="qp-leading-175">Aetna, Blue Cross Blue Shield, and CIGNA. Direct billing — no superbill required.</p>
                <p className="font-semibold text-amber-50 pt-2">All Other Providers:</p>
                <p className="qp-leading-175">Superbills are provided at every session for out-of-network reimbursement. We handle the paperwork — you handle the healing.</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-sm text-amber-100">Questions? <a href="mailto:hello@queerpathways.org" className="text-amber-300 hover:text-amber-200 transition">Reach out directly.</a></p>
            <div>
              <a
                href="https://www.therapyportal.com/p/queercharts/"
                rel="noopener"
                title="Book appointment"
                className="qp-booking-button"
                target="_blank"
              >
              Adjourn the Courtroom — Book Your Intake Assessment
            </a>
            </div>
          </div>

          <div className="space-y-4 text-left">
            <p className="text-sm uppercase tracking-widest text-amber-400 font-semibold text-center">Book directly below</p>
            <div className="qp-booking-embed">
              <iframe
                title="TherapyNotes Online Booking"
                aria-label="Book appointments online via TherapyNotes"
                width="100%"
                height="100%"
                src="https://www.therapyportal.com/p/queercharts/"
                className="qp-border-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Weekend Resource Guide Section */}
      <section id="weekend-safety-net" className="py-24 px-6 border-y border-emerald-800/50">
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
            <p className="text-amber-100 qp-leading-175">
              You are a brilliant leader by day and a ghost in burnout-recovery by night. We call this the Leaky Bucket: you work hard in the week, but without structural scaffolding, that progress can drain away. Use this time to secure your spot for next week.
            </p>

            <div className="space-y-6">
              <h4 className="text-xl font-bold">Your Weekend Framework:</h4>
              <div className="space-y-5 text-amber-100">
                <div>
                  <p className="qp-leading-175"><strong>1. Stop Litigating Your Worth.</strong> You don't need to earn your rest. The weekend is for re-regulation, not just recovering so you can perform again on Monday.</p>
                </div>
                <div>
                  <p className="qp-leading-175"><strong>2. Audit Your Capacity.</strong> If your Internal Legal System is screaming about all the things you didn't accomplish, give it a recess. The court is adjourned.</p>
                </div>
                <div>
                  <p className="qp-leading-175"><strong>3. Secure Your Monday.</strong> We reserve priority slots for Monday morning intakes. Booking now means you start your week with a plan already in place.</p>
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
                href="/pathways/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-amber-200 hover:text-amber-100 font-medium transition px-4 py-2 rounded qp-amber-border qp-font-roboto"
              >
                Full Sovereign Sanctuary Resource
                <ArrowRight size={16} />
              </a>
              <p className="text-xs text-amber-100/70 mt-2">Optional email capture link for Friday resource leads.</p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};
