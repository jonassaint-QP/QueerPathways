"use client";

import { Link } from "react-router-dom";

export default function SovereignHero() {
  return (
    <section className="relative overflow-hidden border border-[#CBB26A]/20 bg-[#090d10] px-6 py-14 text-[#E8DFC4] md:px-10 md:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(203,178,106,0.18),transparent_42%),radial-gradient(circle_at_85%_20%,rgba(239,68,68,0.1),transparent_35%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-20 bg-[linear-gradient(transparent_49%,rgba(255,255,255,0.03)_50%,transparent_51%)] bg-[length:100%_4px]" />

      <div className="pointer-events-none absolute left-4 top-4 h-8 w-8 border-l border-t border-[#CBB26A]/60 md:left-6 md:top-6" />
      <div className="pointer-events-none absolute bottom-4 right-4 h-8 w-8 border-b border-r border-[#CBB26A]/60 md:bottom-6 md:right-6" />

      <div className="relative mx-auto w-full max-w-5xl">
        <div className="mb-8 inline-flex border border-[#CBB26A]/35 bg-[#0f1417]/80 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.24em] text-[#CBB26A]">
          SYSTEM_STATE: READY_FOR_AUDIT
        </div>

        <header className="space-y-6">
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">
            The Prosecution Rests.
            <br />
            Your Sovereignty Begins.
          </h1>

          <p className="max-w-3xl text-base leading-relaxed text-[#E8DFC4]/85 md:text-lg">
            Affirming telehealth designed specifically for the high-functioning, the
            neurodivergent, and the double-outsider. It&apos;s time to dismantle the Internal
            Prosecutor.
          </p>
        </header>

        <div className="mt-10 max-w-xl">
          <Link
            to="/#probe"
            className="group relative block overflow-hidden border border-[#CBB26A] bg-transparent px-6 py-5 text-center font-mono text-xs font-bold uppercase tracking-[0.28em] text-[#CBB26A] transition-all duration-500 hover:bg-[#CBB26A] hover:text-[#153009]"
          >
            <span className="pointer-events-none absolute inset-x-0 -top-px h-px origin-left scale-x-0 bg-red-500/80 transition-transform duration-500 group-hover:scale-x-100" />
            [ INITIATE BIOMETRIC PROBE ]
          </Link>

          <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.22em] text-[#CBB26A]/65">
            Authorization Required // Entry Subject to Audit
          </p>
        </div>

        <div className="mt-12 grid gap-4 border-t border-[#CBB26A]/15 pt-6 md:grid-cols-3">
          <article className="space-y-2 border border-[#CBB26A]/15 bg-[#11171b]/70 p-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#CBB26A]/70">
              Protocol 01
            </p>
            <p className="text-sm text-[#E8DFC4]/90">
              Trauma-Informed Advocacy over Clinical Neutrality.
            </p>
          </article>

          <article className="space-y-2 border border-[#CBB26A]/15 bg-[#11171b]/70 p-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#CBB26A]/70">
              Protocol 02
            </p>
            <p className="text-sm text-[#E8DFC4]/90">
              Somatic Stabilization for the ADHD Engine.
            </p>
          </article>

          <article className="space-y-2 border border-[#CBB26A]/15 bg-[#11171b]/70 p-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#CBB26A]/70">
              Protocol 03
            </p>
            <p className="text-sm text-[#E8DFC4]/90">
              Building a Secure Base in a World of Static.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
