"use client";

import { useState } from "react";

type Archetype = {
  id: string;
  label: string;
  question: string;
  evidence: string;
  verdict: string;
};

const ARCHETYPES: Archetype[] = [
  {
    id: "alex",
    label: "The Masking Visionary",
    question:
      "Do you experience 'The Hum'-performing at 100% in the boardroom while your domestic life is in total executive collapse?",
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
    verdict: "Self-reliance has served you, but it has also become your cage. The Harbor is for those ready to be seen.",
  },
  {
    id: "xavier",
    label: "The Embodied Pioneer",
    question:
      "Does your brain feel like a Formula 1 engine with bicycle brakes, specifically when task initiation is required?",
    evidence:
      "Sensory static detected. 'Formula 1' engine signature found with bicycle-grade braking systems. Task-initiation blockade active.",
    verdict: "Somatic stabilization is the priority. Your engine requires a specific environment to reach peak performance without the crash.",
  },
  {
    id: "justin",
    label: "The Relationship Alchemist",
    question:
      "Is 70% of your cognitive bandwidth dedicated to 'reading the room' to mitigate Rejection Sensitivity?",
    evidence:
      "Identity Fragmentation detected. 70% bandwidth bleed via Rejection Sensitive Dysphoria (RSD). Performance binary active in professional vs. personal spaces.",
    verdict: "The Sovereign Pause is required. Reclaim your bandwidth from the rooms you are trying to 'solve'.",
  },
  {
    id: "brian",
    label: "The Exhausted Architect",
    question:
      "Have you transitioned from 'living' to 'maintenance,' where your body is just a machine to be tuned for productivity?",
    evidence:
      "Type-A rigidity mask detected. 'Maintenance Mode' active since religious/conservative upbringing. Boardroom-level hyper-focus masking core loneliness.",
    verdict: "The transition from 'Maintenance' to 'Play' is authorized. Your worth is not tethered to your output.",
  },
];

export default function DiagnosticProbe() {
  const [step, setStep] = useState(0);
  const [results, setResults] = useState<string[]>([]);
  const [scanning, setScanning] = useState(false);
  const [finalReport, setFinalReport] = useState<Archetype | null>(null);

  const startScan = (updatedResults: string[]) => {
    setScanning(true);
    setTimeout(() => {
      setScanning(false);
      const lastId = updatedResults[updatedResults.length - 1];
      const matched = ARCHETYPES.find((a) => a.id === lastId);
      setFinalReport(matched || ARCHETYPES[0]);
    }, 2000);
  };

  const handleResponse = (id: string) => {
    const updatedResults = [...results, id];
    setResults(updatedResults);

    if (step < ARCHETYPES.length - 1) {
      setStep(step + 1);
      return;
    }

    startScan(updatedResults);
  };

  const handleNegative = () => {
    if (step < ARCHETYPES.length - 1) {
      setStep(step + 1);
      return;
    }

    startScan(results);
  };

  if (finalReport) {
    return (
      <section className="mx-auto max-w-3xl border border-[#CBB26A]/40 bg-[#101e11] p-6 text-[#CBB26A]">
        <header className="border-b border-[#CBB26A]/30 pb-4">
          <p className="text-xs uppercase tracking-[0.35em]">[ Scan Complete ]</p>
          <p className="mt-2 text-sm uppercase tracking-[0.2em]">RESULT_CODE: {finalReport.id.toUpperCase()}_77</p>
        </header>

        <div className="mt-6 space-y-5">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#CBB26A]/70">Signature Detected:</p>
            <p className="mt-1 text-2xl font-semibold tracking-wide">{finalReport.label}</p>
          </div>

          <div className="border border-[#CBB26A]/30 bg-[#0d170f] p-4">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#CBB26A]/70">Evidence Locker Audit</p>
            <p className="mt-3 text-sm leading-relaxed">{finalReport.evidence}</p>
          </div>

          <div className="relative border border-[#CBB26A]/30 bg-[#0d170f] p-4">
            <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-red-500/40" />
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#CBB26A]/70">Verdict:</p>
            <p className="mt-3 text-sm leading-relaxed">"{finalReport.verdict}"</p>
          </div>

          <button
            onClick={() => {
              window.location.href = `/sovereign-harbor?match=${finalReport.id}`;
            }}
            className="mt-2 w-full border border-[#CBB26A] py-5 text-xs font-light uppercase tracking-[0.3em] text-[#CBB26A] transition-all duration-500 hover:bg-[#CBB26A] hover:text-[#153009]"
          >
            View Your Dossier in the Locker -&gt;
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-3xl border border-[#CBB26A]/40 bg-[#101e11] p-6 text-[#CBB26A]">
      {scanning ? (
        <div className="py-16 text-center">
          <p className="text-xs uppercase tracking-[0.35em]">Analyzing Biometric Data...</p>
          <div className="mx-auto mt-5 h-1.5 w-60 overflow-hidden rounded bg-[#CBB26A]/20">
            <div className="h-full w-1/2 animate-pulse bg-[#CBB26A]" />
          </div>
        </div>
      ) : (
        <>
          <header className="mb-8 border-b border-[#CBB26A]/30 pb-4 text-xs uppercase tracking-[0.26em]">
            <p>Probe_Index: 00{step + 1}</p>
            <p className="mt-2 text-[#CBB26A]/70">Status: Analyzing</p>
          </header>

          <p className="text-lg leading-relaxed">"{ARCHETYPES[step].question}"</p>

          <div className="mt-8 flex gap-3">
            <button
              onClick={() => handleResponse(ARCHETYPES[step].id)}
              className="flex-1 border border-[#CBB26A] py-5 text-xs font-bold uppercase tracking-widest text-[#CBB26A] transition-all duration-500 hover:bg-[#CBB26A] hover:text-[#153009]"
            >
              Affirmative
            </button>
            <button
              onClick={handleNegative}
              className="flex-1 border border-[#CBB26A]/50 py-5 text-xs font-bold uppercase tracking-widest text-[#CBB26A]/70 transition-all duration-500 hover:border-[#CBB26A] hover:text-[#CBB26A]"
            >
              Negative
            </button>
          </div>
        </>
      )}
    </section>
  );
}
