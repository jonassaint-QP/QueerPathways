"use client";

import React, { useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";

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
    somaticMap: "Formula 1 engine with bicycle brakes; task initiation deadbolt; sensory gating static.",
    kinkIrony: "Masculinity performance masking a \"withdraw to survive\" freeze state.",
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
    somaticMap: "RSD-driven metabolic spikes; Lexapro \"mute\"; high-empathy sensory overload.",
    kinkIrony: "Scenes as nervous system regulation masking a deep fear of rejection (RSD).",
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
    somaticMap: "Sensory burnout; healthcare crisis \"cool head\" vs domestic collapse; AIDS crisis legacy.",
    kinkIrony: "Late-blooming advocacy masking the grief of \"lost years\" and touch-aversion.",
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
  const [activeMatch, setActiveMatch] = React.useState<string | null>(null);

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const matchId = params.get("match");
    if (matchId) {
      setActiveMatch(matchId.toLowerCase());
    }
  }, []);

  const isMatchedDossier = (id: string) => {
    if (!activeMatch) {
      return false;
    }
    const normalizedId = id.toLowerCase();
    const shortId = normalizedId.split("-")[0];
    return activeMatch === normalizedId || activeMatch === shortId || normalizedId.startsWith(activeMatch);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0a0c11] px-4 py-10 text-zinc-100 sm:px-6 lg:px-10">
      <div className="pointer-events-none absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noisy-grid.png')] opacity-25" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.15),transparent_46%),radial-gradient(circle_at_82%_80%,rgba(239,68,68,0.14),transparent_46%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <header className="mb-8 rounded-md border border-zinc-700/80 bg-zinc-900/70 px-5 py-4 backdrop-blur-sm">
          <h1 className="text-xl font-black uppercase tracking-[0.24em] sm:text-2xl">Sovereign Harbor // Evidence Locker</h1>
          <p className="mt-2 text-xs uppercase tracking-[0.16em] text-zinc-400 sm:text-sm">Unmasking Pass</p>
        </header>

        <section className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {dossiers.map((ica) => (
            <DossierCard key={ica.id} ica={ica} isMatched={isMatchedDossier(ica.id)} />
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
    damping: ica.folderWeight / 2,
    stiffness: Math.max(60, 150 - ica.folderWeight),
  };

  const mouseXSpring = useSpring(x, springConfig);
  const mouseYSpring = useSpring(y, springConfig);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);
  const armorX = useTransform(mouseXSpring, [-0.5, 0.5], [-8, 8]);
  const armorY = useTransform(mouseYSpring, [-0.5, 0.5], [-8, 8]);

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
      className={`group relative h-[550px] w-full max-w-[400px] cursor-crosshair transition-all duration-500 ${
        isMatched ? "ring-4 ring-red-600/50 shadow-[0_0_50px_rgba(220,38,38,0.3)]" : ""
      }`}
    >
      {isMatched && (
        <div className="absolute -top-4 right-2 z-40 rounded-sm border border-red-500/60 bg-red-950/80 px-2 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-red-200">
          [ACTIVE_PROBE_MATCH: DETECTED]
        </div>
      )}

      <div className="absolute inset-0 rounded-r-2xl rounded-tl-md border border-[#b7a37d] bg-[#efe2bf] shadow-[0_30px_55px_rgba(0,0,0,0.45)]" />
      <div className="pointer-events-none absolute inset-0 rounded-r-2xl rounded-tl-md bg-[url('https://www.transparenttextures.com/patterns/cardboard-flat.png')] opacity-45 mix-blend-multiply" />

      <div className="absolute left-4 top-0 z-20 -translate-y-1/2 rounded-t-md border border-zinc-800 bg-[#d5c29a] px-4 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-zinc-900">
        ICA_REF_{ica.id.split("-")[1]}
      </div>

      <div className="relative z-10 flex h-full flex-col p-4 text-zinc-900">
        <div className="rounded-md border border-zinc-700/50 bg-[#f7ebd1] p-3 text-[10px] font-bold uppercase tracking-[0.12em] text-zinc-700">
          <p>PROCESS // {ica.metadata.neuralEngine}</p>
          <p className="mt-1">ARMOR // {ica.metadata.armorLabel}</p>
          <p className="mt-1">AUDIT // {ica.metadata.internalAuditor}</p>
        </div>

        <div className="relative mt-4 flex-1 overflow-hidden rounded-md border border-zinc-700/40 bg-[#f7ebd1] p-3">
          <img src={ica.assets.truth} alt={`${ica.name} truth`} className="absolute inset-0 h-full w-full object-cover opacity-90" />
          <motion.img
            src={ica.assets.armor}
            alt={`${ica.name} armor`}
            style={{ x: armorX, y: armorY }}
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent" />

          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -8 }}
                animate={{ opacity: 1, scale: 1, rotate: -5 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="absolute right-4 top-4 border-4 border-red-600 px-3 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-red-600"
              >
                UNMASKED
              </motion.div>
            )}
          </AnimatePresence>

          <div className="absolute bottom-3 left-3 right-3 text-zinc-100">
            <p className="text-xl font-black tracking-tight">{ica.name}</p>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-red-300">{ica.clinicalStamp}</p>
            <p className="mt-2 text-sm leading-snug">{ica.somaticMap}</p>
            <p className="mt-2 text-sm leading-snug">{ica.kinkIrony}</p>
          </div>
        </div>

        <div className="mt-3 text-right text-[11px] font-black uppercase tracking-[0.16em] text-zinc-700">
          <p>FOLDER_WEIGHT: {ica.folderWeight}%</p>
          <p>VOL_{ica.folderWeight}.SH</p>
        </div>
      </div>
    </motion.article>
  );
}
