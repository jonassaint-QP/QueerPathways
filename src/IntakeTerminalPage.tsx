import React, { Suspense } from 'react';
import { useSearchParams } from 'react-router-dom';

function ContactForm() {
  const [searchParams] = useSearchParams();
  const match = searchParams.get('match') || 'GENERAL_ENQUIRY';

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#090c10] px-6 py-12 text-zinc-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(217,119,6,0.18),transparent_40%),radial-gradient(circle_at_85%_15%,rgba(220,38,38,0.1),transparent_35%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-20 bg-[linear-gradient(transparent_49%,rgba(255,255,255,0.035)_50%,transparent_51%)] bg-[length:100%_4px]" />

      <div className="relative mx-auto w-full max-w-4xl border border-zinc-700/70 bg-zinc-950/80 shadow-[0_25px_70px_rgba(0,0,0,0.55)] backdrop-blur-sm">
        <div className="flex items-center justify-between border-b border-zinc-700/70 bg-zinc-900/80 px-6 py-3 font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-300">
          <p>Form_ID: QP-INTAKE-2026</p>
          <p>
            [ STATUS: {match === 'GENERAL_ENQUIRY' ? 'PENDING_INPUT' : 'IDENTITY_MATCH_DETECTED'} ]
          </p>
        </div>

        <section className="space-y-8 px-6 py-8 md:px-10">
          <header className="space-y-3 border-l-2 border-amber-500/70 pl-4">
            <h1 className="text-3xl font-semibold uppercase tracking-[0.08em] text-amber-100 md:text-4xl">
              The Intake Terminal
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-zinc-300 md:text-base">
              Submit your Statement of Intent to the Sovereign Harbor. This is the first step in
              dismantling the Internal Prosecutor&apos;s jurisdiction.
            </p>
          </header>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-5 md:grid-cols-2">
              <label className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-400">
                  Filing Party (Full Name)
                </span>
                <input
                  type="text"
                  name="fullName"
                  required
                  className="w-full border border-zinc-700 bg-zinc-900/70 px-4 py-3 text-sm text-zinc-100 outline-none transition focus:border-amber-400"
                />
              </label>

              <label className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-400">
                  Secure Channel (Email)
                </span>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full border border-zinc-700 bg-zinc-900/70 px-4 py-3 text-sm text-zinc-100 outline-none transition focus:border-amber-400"
                />
              </label>
            </div>

            <label className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-400">
                Dossier Reference
              </span>
              <div className="border border-zinc-700 bg-zinc-900/70 px-4 py-3 text-sm font-mono uppercase tracking-[0.12em] text-amber-200">
                ARCHETYPE_MATCH: {match.toUpperCase()}
              </div>
            </label>

            <label className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-400">
                Statement of Intent / Evidence of Need
              </span>
              <textarea
                name="intent"
                required
                rows={7}
                className="w-full resize-y border border-zinc-700 bg-zinc-900/70 px-4 py-3 text-sm leading-relaxed text-zinc-100 outline-none transition focus:border-amber-400"
              />
            </label>

            <div className="group relative border border-zinc-700 bg-zinc-900/65 p-4">
              <div className="pointer-events-none absolute right-4 top-3 border border-red-700 px-2 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-red-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Submit_Final
              </div>

              <button
                type="submit"
                className="w-full border border-amber-300/70 bg-amber-50 px-6 py-4 text-sm font-bold uppercase tracking-[0.2em] text-zinc-950 transition hover:bg-amber-100"
              >
                File Injunction &amp; Request Entry
              </button>

              <p className="mt-3 text-xs uppercase tracking-[0.16em] text-zinc-400">
                By clicking, you authorize the start of your Internal Courtroom Audit.
              </p>
            </div>
          </form>
        </section>

        <footer className="border-t border-zinc-700/70 bg-zinc-900/70 px-6 py-3 font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-400 md:px-10">
          <p>COORD: 39.9526° N, 75.1652° W [PHL]</p>
          <p className="mt-1">ENCRYPTION_LEVEL: AES-256-V_ARCHITECT</p>
        </footer>
      </div>
    </main>
  );
}

export default function IntakeTerminalPage() {
  return (
    <Suspense fallback={<div className="p-6 text-sm text-zinc-300">Loading Intake Terminal...</div>}>
      <ContactForm />
    </Suspense>
  );
}
