"use client";
import { useState } from "react";

const ARCHETYPES = [
  {
    id: "alex",
    label: "The Masking Visionary",
    question:
      "Do you experience 'The Hum'—performing at 100% in the boardroom while your domestic life is in total executive collapse?",
    evidence:
      "High-achievement lineage utilized as a survival mask. Executive collapse detected post-18:00. Evidence of 'ADHD Debt' found in unopened mail and metabolic drain.",
    verdict:
      "Your 'creative edge' is being taxed by a system not built for your engine. Sovereignty is non-negotiable.",
  },
  {
    id: "william",
    label: "The High-Functioning Ghost",
    question:
      "Is your default setting 'I'll do it myself' because asking for help feels like an indictment of your survival?",
    evidence:
      "Somatic signature of a 'Silent Martyr.' Late-life ADHD grief detected. Mentorship void found in historical records.",
    verdict:
      "Self-reliance has served you, but it has also become your cage. The Harbor is for those ready to be seen.",
  },
  {
    id: "xavier",
    label: "The Embodied Pioneer",
    question:
      "Does your brain feel like a Formula 1 engine with bicycle brakes, specifically when task initiation is required?",
    evidence:
      "Sensory static detected. 'Formula 1' engine signature found with bicycle-grade braking systems. Task-initiation blockade active.",
    verdict:
      "Somatic stabilization is the priority. Your engine requires a specific environment to reach peak performance without the crash.",
  },
  {
    id: "justin",
    label: "The Relationship Alchemist",
    question:
      "Is 70% of your cognitive bandwidth dedicated to 'reading the room' to mitigate Rejection Sensitivity?",
    evidence:
      "Identity Fragmentation detected. 70% bandwidth bleed via Rejection Sensitive Dysphoria (RSD). Performance binary active in professional vs. personal spaces.",
    verdict:
      "The Sovereign Pause is required. Reclaim your bandwidth from the rooms you are trying to 'solve'.",
  },
  {
    id: "brian",
    label: "The Exhausted Architect",
    question:
      "Have you transitioned from 'living' to 'maintenance,' where your body is just a machine to be tuned for productivity?",
    evidence:
      "Type-A rigidity mask detected. 'Maintenance Mode' active since religious/conservative upbringing. Boardroom-level hyper-focus masking core loneliness.",
    verdict:
      "The transition from 'Maintenance' to 'Play' is authorized. Your worth is not tethered to your output.",
  },
];

export default function DiagnosticProbe() {
  const [step, setStep] = useState(0);
  const [results, setResults] = useState<string[]>([]);
  const [scanning, setScanning] = useState(false);
  const [finalReport, setFinalReport] = useState<(typeof ARCHETYPES)[number] | null>(null);

  const handleResponse = (id: string) => {
    const updatedResults = [...results, id];
    setResults(updatedResults);

    if (step < ARCHETYPES.length - 1) {
      setStep(step + 1);
      return;
    }

    runAnalysis(id);
  };

  const runAnalysis = (lastId: string) => {
    setScanning(true);

    setTimeout(() => {
      setScanning(false);
      const matched = ARCHETYPES.find((archetype) => archetype.id === lastId);
      setFinalReport(matched || ARCHETYPES[0]);
    }, 2000);
  };

  if (finalReport) {
    return (
      <div className="border border-[#CBB26A]/30 bg-[#153009]/10 p-8 font-serif text-[#CBB26A] animate-in fade-in slide-in-from-bottom-4">
        <div className="mb-6 flex items-start justify-between gap-4 border-b border-[#CBB26A]/10 pb-4">
          <h2 className="text-xl italic tracking-widest">[ SCAN COMPLETE ]</h2>
          <p className="text-[10px] uppercase tracking-[0.3em] opacity-60">
            RESULT_CODE: {finalReport.id.toUpperCase()}_77
          </p>
        </div>

        <div className="space-y-8 text-left">
          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-[0.2em] opacity-50">Signature Detected:</p>
            <p className="text-3xl font-light text-white">{finalReport.label}</p>
          </div>

          <div className="space-y-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#CBB26A]">
              Evidence Locker Audit
            </p>
            <p className="border-l border-[#CBB26A]/20 pl-6 text-lg italic leading-relaxed opacity-80">
              {finalReport.evidence}
            </p>
          </div>

          <div className="relative overflow-hidden border border-[#CBB26A]/10 bg-[#CBB26A]/5 p-6">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-red-500/70" />
            <p className="mb-2 text-[10px] uppercase tracking-widest opacity-50">Verdict:</p>
            <p className="text-lg font-light leading-relaxed text-white">"{finalReport.verdict}"</p>
          </div>

          <button
            onClick={() => {
              window.location.href = `/sovereign-harbor?match=${finalReport.id}`;
            }}
            className="mt-4 w-full border border-[#CBB26A] py-5 text-xs font-light uppercase tracking-[0.3em] text-[#CBB26A] transition-all duration-500 hover:bg-[#CBB26A] hover:text-[#153009]"
          >
            View Your Dossier in the Locker →
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden border border-[#CBB26A]/20 bg-[#0A0D08] p-12 font-serif backdrop-blur-sm">
      {scanning ? (
        <div className="py-20 text-center">
          <p className="animate-pulse italic tracking-[0.4em] text-white">
            ANALYZING BIOMETRIC DATA...
          </p>
          <div className="mx-auto mt-8 h-[1px] w-64 overflow-hidden bg-[#CBB26A]/10">
            <div className="h-full w-full origin-left bg-[#CBB26A] animate-[loading_3s_ease-in-out]" />
          </div>
        </div>
      ) : (
        <>
          <div className="mb-12 flex justify-between text-[10px] uppercase tracking-[0.3em] opacity-30">
            <span>Probe_Index: 00{step + 1}</span>
            <span>Status: Analyzing</span>
          </div>

          <h3 className="mb-16 text-2xl font-light italic leading-tight text-white md:text-4xl">
            "{ARCHETYPES[step].question}"
          </h3>

          <div className="flex flex-col gap-6 md:flex-row">
            <button
              onClick={() => handleResponse(ARCHETYPES[step].id)}
              className="flex-1 border border-[#CBB26A] py-5 text-xs font-bold uppercase tracking-widest text-[#CBB26A] transition-all duration-500 hover:bg-[#CBB26A] hover:text-[#153009]"
            >
              Affirmative
            </button>
            <button
              onClick={() => {
                if (step < ARCHETYPES.length - 1) {
                  setStep(step + 1);
                  return;
                }

                runAnalysis(results[0] || "alex");
              }}
              className="flex-1 border border-white/10 py-5 text-xs font-bold uppercase tracking-widest text-white/40 transition-all hover:border-white/30"
            >
              Negative
            </button>
          </div>
        </>
      )}
    </div>
  );
}
