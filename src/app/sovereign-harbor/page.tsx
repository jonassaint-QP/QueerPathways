"use client";

import React, { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

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
      armor: "https://cdn.marblism.com/HI_PXNjydwX.webp",
      truth: "https://cdn.marblism.com/54tKVJJYC3e.webp",
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
      armor: "https://cdn.marblism.com/OsVmZ9bk0gf.webp",
      truth: "https://cdn.marblism.com/6DzZvEuzmQM.webp",
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
    somaticMap:
      "Formula 1 engine with bicycle brakes; task initiation deadbolt; sensory gating static.",
    kinkIrony:
      "Masculinity performance masking a 'withdraw to survive' freeze state.",
    folderWeight: 72,
    assets: {
      armor: "https://cdn.marblism.com/A28dHBBJgxv.webp",
      truth: "https://cdn.marblism.com/BtliCQS4Xxq.webp",
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
    somaticMap: "RSD-driven metabolic spikes; Lexapro 'mute'; high-empathy sensory overload.",
    kinkIrony:
      "Scenes as nervous system regulation masking a deep fear of rejection (RSD).",
    folderWeight: 45,
    assets: {
      armor: "https://cdn.marblism.com/kzxypR7L_aI.webp",
      truth: "https://cdn.marblism.com/EFTXDG9lx9h.webp",
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
    somaticMap:
      "Sensory burnout; healthcare crisis 'cool head' vs domestic collapse; AIDS crisis legacy.",
    kinkIrony:
      "Late-blooming advocacy masking the grief of 'lost years' and touch-aversion.",
    folderWeight: 88,
    assets: {
      armor: "https://cdn.marblism.com/TWUoWDHBQzG.webp",
      truth: "https://cdn.marblism.com/wQ3HdoU5uAH.webp",
    },
    metadata: {
      neuralEngine: "CRISIS_COOL_HEAD",
      armorLabel: "HYPER_FUNCTIONAL_SURVIVOR",
      internalAuditor: "THE_GHOST_OF_MENTORS",
    },
  },
];

export default function EvidenceLocker() {
  const [activeMatch, setActiveMatch] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const matchId = params.get("match");
    setActiveMatch(matchId);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#090b0f] px-6 py-12 text-zinc-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(217,119,6,0.16),transparent_32%),radial-gradient(circle_at_85%_20%,rgba(220,38,38,0.12),transparent_30%),linear-gradient(180deg,rgba(10,12,17,0.94),rgba(6,7,10,1))]" />
      <div className="pointer-events-none absolute inset-0 opacity-25 bg-[linear-gradient(transparent_49%,rgba(255,255,255,0.03)_50%,transparent_51%)] bg-[length:100%_4px]" />

      <div className="relative mx-auto max-w-6xl">
        <header className="mb-8 border border-zinc-700/70 bg-zinc-950/65 p-5 backdrop-blur-sm">
          <p className="text-xs uppercase tracking-[0.35em] text-amber-200/80">Sovereign Harbor</p>
          <h1 className="mt-2 text-3xl font-black uppercase tracking-tight md:text-4xl">
            The Evidence Locker
          </h1>
          <p className="mt-2 text-sm uppercase tracking-[0.22em] text-zinc-300/85">
            Unmasking Pass // Somatic Portrait Dossiers
          </p>
        </header>

        <section className="grid gap-8 md:grid-cols-2 md:items-start xl:grid-cols-3">
          {dossiers.map((ica) => (
            <DossierCard
              key={ica.id}
              ica={ica}
              isMatched={activeMatch === ica.id || activeMatch === ica.name.toLowerCase()}
            />
          ))}
        </section>
      </div>
    </main>
  );
}

function DossierCard({ ica, isMatched }: { ica: ICAProfile; isMatched: boolean }) {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = {
    damping: Math.max(18, ica.folderWeight / 2),
    stiffness: Math.max(48, 150 - ica.folderWeight),
  };

  const mouseXSpring = useSpring(x, springConfig);
  const mouseYSpring = useSpring(y, springConfig);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-15, 15]);
  const armorX = useTransform(mouseXSpring, [-0.5, 0.5], [-14, 14]);
  const armorY = useTransform(mouseYSpring, [-0.5, 0.5], [-10, 10]);
  const truthX = useTransform(mouseXSpring, [-0.5, 0.5], [8, -8]);
  const truthY = useTransform(mouseYSpring, [-0.5, 0.5], [6, -6]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.article
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
        setIsHovered(false);
      }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`group relative mx-auto h-[550px] w-full max-w-[400px] cursor-crosshair overflow-hidden rounded-sm border border-[#bdaa88] bg-[#e3d5b5] text-zinc-900 shadow-[0_22px_55px_rgba(0,0,0,0.5)] transition-all duration-500 ${
        isMatched ? "ring-4 ring-red-600/50 shadow-[0_0_50px_rgba(220,38,38,0.3)]" : ""
      }`}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
    >
      {isMatched ? (
        <div className="absolute left-4 top-4 z-30 border border-red-700 bg-red-950/85 px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-red-100">
          [ACTIVE_PROBE_MATCH: DETECTED]
        </div>
      ) : null}

      <div className="pointer-events-none absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cardboard-flat.png')] opacity-45 mix-blend-multiply" />
      <div className="absolute inset-x-0 top-0 h-9 bg-[#d1bf96]" />

      <div className="relative z-20 ml-5 mt-4 inline-flex rounded-t-sm border border-b-0 border-zinc-900/25 bg-[#e7d9b8] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-700">
        ICA_REF_{ica.id.split("-")[1]}
      </div>

      <aside className="relative z-20 mx-5 mt-3 border border-zinc-900/25 bg-[#ecdfc4]/95 p-3 text-[10px] font-bold uppercase tracking-[0.14em] text-zinc-700">
        <p>PROCESS // {ica.metadata.neuralEngine}</p>
        <p className="mt-1">ARMOR // {ica.metadata.armorLabel}</p>
        <p className="mt-1">AUDIT // {ica.metadata.internalAuditor}</p>
      </aside>

      <div className="relative z-20 mx-5 mt-4 h-[252px] [transform-style:preserve-3d]">
        <motion.img
          src={ica.assets.truth}
          alt={`${ica.name} truth layer`}
          className="absolute inset-0 h-full w-full rounded-sm border border-zinc-900/20 object-cover saturate-[0.9]"
          style={{ x: truthX, y: truthY, z: 10 }}
        />

        <motion.img
          src={ica.assets.armor}
          alt={`${ica.name} armor layer`}
          className="absolute inset-0 h-full w-full rounded-sm border border-zinc-900/20 object-cover"
          style={{ x: armorX, y: armorY, z: 30 }}
          animate={{ opacity: isHovered ? 0.2 : 1, scale: isHovered ? 1.02 : 1 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        />

        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.92, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, rotate: -8 }}
              exit={{ opacity: 0, scale: 0.92, rotate: -8 }}
              className="pointer-events-none absolute right-4 top-5 border-2 border-red-700 bg-red-50/85 px-4 py-2 text-sm font-black uppercase tracking-[0.22em] text-red-700 shadow-sm"
              style={{ z: 60 }}
            >
              UNMASKED
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <section className="relative z-20 mx-5 mt-4 border border-zinc-900/25 bg-[#f0e5cb]/95 p-4">
        <div className="flex items-start justify-between gap-4 border-b border-zinc-900/15 pb-3">
          <h2 className="text-3xl font-black uppercase tracking-tight">{ica.name}</h2>
          <p className="rotate-[-7deg] border-2 border-red-700 px-2 py-1 text-xs font-black uppercase tracking-[0.12em] text-red-700">
            {ica.clinicalStamp}
          </p>
        </div>

        <div className="mt-3 space-y-3 text-sm leading-relaxed text-zinc-800">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-600">Somatic Map</p>
            <p className="mt-1">{ica.somaticMap}</p>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-600">Kink Irony</p>
            <p className="mt-1">{ica.kinkIrony}</p>
          </div>
        </div>
      </section>

      <footer className="absolute bottom-4 right-4 z-20 border border-zinc-900/35 bg-zinc-950 px-3 py-2 font-mono text-xs font-bold uppercase tracking-[0.12em] text-amber-100">
        <p>FOLDER_WEIGHT: {ica.folderWeight}%</p>
        <p className="mt-1">VOL_{ica.folderWeight}.SH</p>
      </footer>
    </motion.article>
  );
}
