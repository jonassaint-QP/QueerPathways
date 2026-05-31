"use client";

import React, { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import SovereignHero from "./components/SovereignHero";

interface ICAProfile {
  id: string;
  name: string;
  clinicalStamp: string;
  somaticMap: string;
  kinkIrony: string;
  folderWeight: number;
  assets: {
    armor: string;
    truth: string;
  };
  metadata: {
    neuralEngine: string;
    armorLabel: string;
    internalAuditor: string;
  };
}

const dossiers: ICAProfile[] = [
  {
    id: "alex-01",
    name: "Alex",
    clinicalStamp: "THE_F-150",
    somaticMap: "Metabolic drain; dissociative deadbolt logic; high-tensile rib compression.",
    kinkIrony: "Service Top performance masking an urgent need for executive surrender.",
    folderWeight: 65,
    assets: {
      armor: "/Images/sovereign-harbor/alex.webp",
      truth: "/Images/sovereign-harbor/alex.webp",
    },
    metadata: {
      neuralEngine: "HYPER_VIGILANT_TASK_PROCESSOR",
      armorLabel: "INDUSTRIAL_GRIT_MASK",
      internalAuditor: "THE_PRODUCTIVITY_JUDGE",
    },
  },
  {
    id: "brian-02",
    name: "Brian",
    clinicalStamp: "CAPACITY_CATFISH",
    somaticMap: "Somatic freeze; sub-diaphragmatic bracing; boardroom-grade rigidity.",
    kinkIrony: "Type-A authority masking a profound, unaddressed loneliness and need for play.",
    folderWeight: 94,
    assets: {
      armor: "/Images/sovereign-harbor/brian.webp",
      truth: "/Images/sovereign-harbor/brian.webp",
    },
    metadata: {
      neuralEngine: "BOARDROOM_MAINTENANCE_OS",
      armorLabel: "TYPE_A_RIGIDITY",
      internalAuditor: "THE_SENIOR_EXECUTIVE",
    },
  },
  {
    id: "xavier-03",
    name: "Xavier",
    clinicalStamp: "EMBODIED_PIONEER",
    somaticMap: "Formula 1 engine with bicycle brakes; task initiation deadbolt; sensory gating static.",
    kinkIrony: "Masculinity performance masking a withdraw to survive freeze state.",
    folderWeight: 72,
    assets: {
      armor: "/Images/sovereign-harbor/xavier.webp",
      truth: "/Images/sovereign-harbor/xavier.webp",
    },
    metadata: {
      neuralEngine: "F1_SENSORY_PROCESSOR",
      armorLabel: "MASCULINE_PERFORMANCE",
      internalAuditor: "SNARKY_TIKTOK_COMMENTER",
    },
  },
  {
    id: "justin-04",
    name: "Justin",
    clinicalStamp: "RELATIONSHIP_ALCHEMIST",
    somaticMap: "RSD-driven metabolic spikes; Lexapro mute; high-empathy sensory overload.",
    kinkIrony: "Scenes as nervous system regulation masking a deep fear of rejection (RSD).",
    folderWeight: 45,
    assets: {
      armor: "/Images/sovereign-harbor/justin.webp",
      truth: "/Images/sovereign-harbor/justin.webp",
    },
    metadata: {
      neuralEngine: "RSD_FILTER_OS",
      armorLabel: "HIGH_EMPATHY_SHIELD",
      internalAuditor: "DISAPPOINTED_ART_CRITIC",
    },
  },
  {
    id: "william-05",
    name: "William",
    clinicalStamp: "LATE_BLOOMING_ADVOCATE",
    somaticMap: "Sensory burnout; healthcare crisis cool head vs domestic collapse; AIDS crisis legacy.",
    kinkIrony: "Late-blooming advocacy masking the grief of lost years and touch-aversion.",
    folderWeight: 88,
    assets: {
      armor: "/Images/sovereign-harbor/william.webp",
      truth: "/Images/sovereign-harbor/william.webp",
    },
    metadata: {
      neuralEngine: "CRISIS_COOL_HEAD",
      armorLabel: "HYPER_FUNCTIONAL_SURVIVOR",
      internalAuditor: "THE_GHOST_OF_MENTORS",
    },
  },
];

export default function EvidenceLocker() {
  const [searchParams] = useSearchParams();
  const activeMatch = searchParams.get("match")?.toLowerCase() || null;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#060b11] text-[#d6c793]">
      <SovereignHero />

      <div className="px-4 py-10 sm:px-6 lg:px-10">
      <div className="pointer-events-none absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-35" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(transparent_96%,rgba(214,199,147,0.08)_96%)] bg-[length:100%_4px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_16%,rgba(175,36,36,0.2),transparent_42%),radial-gradient(circle_at_84%_80%,rgba(13,89,77,0.2),transparent_48%)]" />

      <section className="relative z-10 mx-auto w-full max-w-7xl">
        <header className="mb-8 flex flex-col items-center gap-3 border-b border-[#d6c793]/25 pb-6">
          <div className="inline-flex items-center gap-3 rounded-sm border border-[#d6c793]/35 bg-[#0b1511]/70 px-4 py-2">
            <img src="/favicon.png" alt="Queer Pathways icon" className="h-7 w-7 object-contain" />
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#d6c793]/90">Evidence Locker</span>
          </div>
          <img
            src="/branding/header-logo.svg"
            alt="Queer Pathways"
            className="h-auto w-full max-w-[320px] object-contain"
          />
        </header>

        <div className="flex flex-wrap gap-8">
        {dossiers.map((ica) => {
          const isMatched = !!activeMatch && ica.id.toLowerCase().startsWith(activeMatch);
          return <DossierCard key={ica.id} ica={ica} isMatched={isMatched} />;
        })}
        </div>
      </section>
      </div>
    </main>
  );
}

function DossierCard({ ica, isMatched }: { ica: ICAProfile; isMatched: boolean }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: ica.folderWeight / 2, stiffness: 150 - ica.folderWeight };
  const mouseXSpring = useSpring(x, springConfig);
  const mouseYSpring = useSpring(y, springConfig);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);
  const armorX = useTransform(mouseXSpring, [-0.5, 0.5], [18, -18]);
  const armorY = useTransform(mouseYSpring, [-0.5, 0.5], [12, -12]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect() ?? e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
        setIsHovered(false);
      }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative h-[550px] w-full max-w-[400px] cursor-crosshair transition-all duration-500 ${
        isMatched ? "ring-4 ring-red-600/50 shadow-[0_0_50px_rgba(220,38,38,0.3)]" : ""
      }`}
    >
      {isMatched && (
        <div className="absolute left-3 top-3 z-30 rounded-sm border border-red-500/70 bg-red-950/85 px-2 py-1 font-mono text-[10px] font-black uppercase tracking-[0.14em] text-red-200">
          [ACTIVE_PROBE_MATCH: DETECTED]
        </div>
      )}

      <div className="absolute inset-0 rounded-sm border border-[#b8a67a] bg-[#d8c8a7] shadow-[0_26px_56px_rgba(0,0,0,0.5)]" />
      <div className="pointer-events-none absolute inset-0 rounded-sm bg-[url('https://www.transparenttextures.com/patterns/cardboard-flat.png')] opacity-45 mix-blend-multiply" />

      <div className="absolute -top-3 left-4 z-20 rounded-sm border border-[#8f7d57] bg-[#c7b28a] px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#3f3425]">
        ICA_REF_{ica.id.split("-")[1]}
      </div>

      <div className="absolute inset-x-4 top-6 z-10 rounded-sm border border-[#8f7d57] bg-[#e3d4b5] p-3 font-mono text-[10px] uppercase leading-relaxed tracking-[0.12em] text-[#433827]">
        <p>Process // {ica.metadata.neuralEngine}</p>
        <p className="mt-1">Armor // {ica.metadata.armorLabel}</p>
        <p className="mt-1">Audit // {ica.metadata.internalAuditor}</p>
      </div>

      <div className="absolute inset-x-5 top-32 z-10 h-[260px] overflow-hidden rounded-sm border-2 border-[#4f4330] bg-black">
        <img src={ica.assets.truth} alt={`${ica.name} truth layer`} className="absolute inset-0 h-full w-full object-cover" />

        <motion.img
          src={ica.assets.armor}
          alt={`${ica.name} armor layer`}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ x: armorX, y: armorY }}
        />

        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: -8 }}
              transition={{ duration: 0.2 }}
              className="absolute right-3 top-3 border-4 border-red-700 bg-red-50/85 px-3 py-2 font-mono text-[10px] font-black uppercase tracking-[0.16em] text-red-800"
            >
              UNMASKED
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="absolute inset-x-5 bottom-12 z-10 rounded-sm border border-[#8f7d57] bg-[#efe2c7] p-4 text-[#2f2519]">
        <div className="flex items-start justify-between gap-3 border-b border-[#b7a37c] pb-2">
          <h2 className="font-mono text-xl font-black uppercase tracking-[0.12em]">{ica.name}</h2>
          <span className="rounded-sm border-2 border-red-700 bg-red-100/70 px-2 py-1 font-mono text-[10px] font-black uppercase tracking-[0.14em] text-red-800">
            {ica.clinicalStamp}
          </span>
        </div>

        <p className="mt-3 text-sm leading-relaxed">
          <span className="block font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#6f5c3b]">Somatic Map</span>
          {ica.somaticMap}
        </p>

        <p className="mt-2 text-sm leading-relaxed">
          <span className="block font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#6f5c3b]">Kink Irony</span>
          {ica.kinkIrony}
        </p>
      </div>

      <div className="absolute bottom-4 left-5 z-10 flex items-center gap-3 rounded-sm border border-[#917f59] bg-[#ddcfb0] px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#433827]">
        <span>Folder_Weight: {ica.folderWeight}%</span>
        <span>VOL_{ica.folderWeight}.SH</span>
      </div>
    </motion.article>
  );
}
