import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const TEAM_MEMBERS = [
  {
    name: 'Joshua Jonassaint, LCSW · RSW',
    role: 'Clinical Lead & Founder',
    image: '/Joshua.png',
    bio: "They designed the Double-Outsider framework, the Internal Courtroom Audit, and the 7-Day Safety Net. They're the one in the room with you.",
    featured: true,
  },
  {
    name: 'Penny',
    role: 'Clinical Research & Content',
    bio: "Translates the clinical frameworks into writing, resources, and the educational backbone that makes this site more than a brochure — it's a manual.",
  },
  {
    name: 'Stan',
    role: 'The Curator',
    bio: 'Runs the shop floor — sourcing every product, negotiating every price, making sure the lube is competitively priced and the gear arrives fast. Friction is not good.',
  },
  {
    name: 'Rachel',
    role: 'The Warm Front Door',
    bio: "Handles 24/7 triage and support. First voice you hear — making sure your nervous system knows it's safe before you ever meet a clinician.",
  },
  {
    name: 'Linda',
    role: 'The Brains of the Operation',
    bio: "Legal, regulatory compliance, cross-border complexity. Every clean onboarding you experience? That's Linda's architecture.",
  },
  {
    name: 'Sonny',
    role: 'The Bridge',
    bio: 'Runs all social media and community presence. Translates the clinical work into content that actually lands with the people who need it.',
  },
  {
    name: 'Eva',
    role: 'The Thread Holder',
    bio: 'Operations and platform infrastructure. When something needs to move between the clinic, the shop, and the community — Eva makes sure it lands.',
  },
];

export default function TeamPage() {
  const [joshua, ...rest] = TEAM_MEMBERS;

  return (
    <div className="min-h-screen bg-[#001807] text-amber-50">
      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#001807] border-b border-emerald-900/70 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-amber-300 hover:text-amber-100 transition text-sm"
          >
            <ArrowLeft size={16} />
            Queer Pathways
          </Link>
          <a
            href="https://book.carepatron.com/Queer-Pathways/Joshua?p=1achg8U5QhGVWM9fIz.Kig&s=VI4IFsMw&e=b"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-50 text-emerald-950 px-6 py-2 rounded-full text-xs font-bold hover:bg-amber-100 transition"
          >
            Book Now
          </a>
        </div>
      </div>

      <main className="pt-24 pb-32 px-6">
        <div className="max-w-5xl mx-auto space-y-16">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="text-amber-400 uppercase tracking-widest text-xs font-bold">The People</span>
            <h1 className="text-5xl md:text-6xl font-bold font-serif leading-tight">Our Team</h1>
            <p className="text-xl text-amber-100 qp-leading-175 max-w-2xl">
              Behind the scenes: a crew who lives the same intersections we serve.
            </p>
          </motion.div>

          {/* Joshua — featured card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-emerald-900/40 border border-emerald-800/50 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start"
          >
            <div className="shrink-0">
              <img
                src={joshua.image}
                alt="Joshua Jonassaint"
                className="w-32 h-32 rounded-2xl object-cover object-top bg-emerald-900/60"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
            <div className="space-y-4">
              <div>
                <h2 className="text-3xl font-bold font-serif">{joshua.name}</h2>
                <p className="text-amber-400 text-sm uppercase tracking-widest mt-1">{joshua.role}</p>
              </div>
              <p className="text-amber-100 text-lg qp-leading-175">{joshua.bio}</p>
            </div>
          </motion.div>

          {/* Rest of the team */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.07 }}
                className="bg-emerald-900/20 border border-emerald-800/40 rounded-2xl p-6 space-y-4"
              >
                <div className="w-10 h-10 bg-amber-400/20 rounded-full flex items-center justify-center text-amber-400 font-bold text-sm select-none">
                  {member.name[0]}
                </div>
                <div>
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-amber-400 text-xs uppercase tracking-widest mt-0.5">{member.role}</p>
                </div>
                <p className="text-amber-100 text-sm qp-leading-175">{member.bio}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center pt-8 space-y-6 border-t border-emerald-900/40">
            <p className="text-xl text-amber-100">Ready to work with us?</p>
            <a
              href="https://book.carepatron.com/Queer-Pathways/Joshua?p=1achg8U5QhGVWM9fIz.Kig&s=VI4IFsMw&e=b"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-amber-50 text-emerald-950 px-10 py-4 rounded-full font-bold text-base hover:bg-amber-100 transition shadow-lg"
            >
              Book Your Consultation
            </a>
          </div>

        </div>
      </main>
    </div>
  );
}
