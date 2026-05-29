"use client";

import { Suspense } from "react";
import { useSearchParams } from "react-router-dom";

function ContactForm() {
  const [searchParams] = useSearchParams();
  const match = searchParams.get("match") || "GENERAL_ENQUIRY";

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0b1310] px-4 py-10 text-[#d6c187] sm:px-6 lg:px-12">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(transparent_96%,rgba(214,193,135,0.1)_96%)] bg-[length:100%_4px] opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(180,36,36,0.18),transparent_46%),radial-gradient(circle_at_80%_75%,rgba(17,94,89,0.22),transparent_50%)]" />

      <div className="relative z-10 mx-auto w-full max-w-4xl border border-[#d6c187]/40 bg-[#0f1a14]/90 shadow-[0_30px_60px_rgba(0,0,0,0.45)] backdrop-blur-sm">
        <header className="border-b border-[#d6c187]/30 px-5 py-4 sm:px-8">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-3 border border-[#d6c187]/25 bg-[#121f18] px-3 py-2 text-[11px] uppercase tracking-[0.2em]">
            <span>Form_ID: QP-INTAKE-2026</span>
            <span>
              [ STATUS: {match === "GENERAL_ENQUIRY" ? "PENDING_INPUT" : "IDENTITY_MATCH_DETECTED"} ]
            </span>
          </div>

          <h1 className="text-2xl font-black uppercase tracking-[0.2em] text-[#dfcb92] sm:text-3xl">The Intake Terminal</h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#c8ba8e] sm:text-base">
            Submit your Statement of Intent to the Sovereign Harbor. This is the first step in dismantling the Internal
            Prosecutor&apos;s jurisdiction.
          </p>
        </header>

        <section className="space-y-6 px-5 py-6 sm:px-8 sm:py-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-xs uppercase tracking-[0.16em] text-[#ceb97d]">
              Filing Party (Full Name)
              <input
                type="text"
                name="fullName"
                autoComplete="name"
                className="mt-2 w-full border border-[#d6c187]/40 bg-[#101a14] px-3 py-3 text-sm text-[#edd8a1] outline-none transition focus:border-[#e7cd85]"
              />
            </label>

            <label className="text-xs uppercase tracking-[0.16em] text-[#ceb97d]">
              Secure Channel (Email)
              <input
                type="email"
                name="email"
                autoComplete="email"
                className="mt-2 w-full border border-[#d6c187]/40 bg-[#101a14] px-3 py-3 text-sm text-[#edd8a1] outline-none transition focus:border-[#e7cd85]"
              />
            </label>
          </div>

          <div className="border border-[#d6c187]/30 bg-[#111d16] px-4 py-3 text-xs uppercase tracking-[0.2em] text-[#d7c17f]">
            Dossier Reference
            <p className="mt-2 text-sm tracking-[0.12em] text-[#f0dcaa]">ARCHETYPE_MATCH: {match.toUpperCase()}</p>
          </div>

          <label className="block text-xs uppercase tracking-[0.16em] text-[#ceb97d]">
            Statement of Intent / Evidence of Need
            <textarea
              name="statement"
              rows={8}
              className="mt-2 w-full resize-y border border-[#d6c187]/40 bg-[#101a14] px-3 py-3 text-sm leading-relaxed text-[#edd8a1] outline-none transition focus:border-[#e7cd85]"
            />
          </label>

          <div className="group relative overflow-hidden border border-[#d6c187] p-4 text-center">
            <div className="pointer-events-none absolute right-4 top-4 rotate-6 border-2 border-red-600 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-red-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Submit_Final
            </div>

            <button
              type="button"
              className="group w-full border border-[#d6c187] py-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#d6c187] transition-all duration-500 hover:bg-[#d6c187] hover:text-[#153009]"
            >
              File Injunction &amp; Request Entry
            </button>
            <p className="mt-3 text-[11px] uppercase tracking-[0.14em] text-[#bcae83]">
              By clicking, you authorize the start of your Internal Courtroom Audit.
            </p>
          </div>
        </section>

        <footer className="border-t border-[#d6c187]/30 bg-[#121d16] px-5 py-4 text-[10px] uppercase tracking-[0.2em] text-[#bfae79] sm:px-8">
          <p>COORD: 39.9526° N, 75.1652° W [PHL]</p>
          <p className="mt-1">ENCRYPTION_LEVEL: AES-256-V_ARCHITECT</p>
        </footer>
      </div>
    </main>
  );
}

export default function IntakeTerminalPage() {
  return (
    <Suspense fallback={<div className="p-6 text-sm text-[#d6c187]">Loading Intake Terminal...</div>}>
      <ContactForm />
    </Suspense>
  );
}
