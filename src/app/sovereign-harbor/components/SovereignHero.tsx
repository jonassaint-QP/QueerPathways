"use client";

import { Link } from "react-router-dom";

export default function SovereignHero() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-[#0a0d12] px-4 py-14 text-[#d8c58f] sm:px-6 lg:px-10">
      <img
        src="/branding/hero-image.webp"
        alt="Sovereign Harbor hero"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-[#091019]/55" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(transparent_96%,rgba(216,197,143,0.12)_96%)] bg-[length:100%_4px] opacity-45" />
      <div className="pointer-events-none absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-30" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(185,28,28,0.14),transparent_44%),radial-gradient(circle_at_80%_70%,rgba(6,95,70,0.2),transparent_48%)]" />

      <div className="pointer-events-none absolute left-6 top-6 h-10 w-10 border-l border-t border-[#d8c58f]/45" />
      <div className="pointer-events-none absolute bottom-6 right-6 h-10 w-10 border-b border-r border-[#d8c58f]/45" />

      <div className="relative z-10 mx-auto max-w-6xl border border-[#d8c58f]/35 bg-[#0f141b]/85 p-6 shadow-[0_32px_58px_rgba(0,0,0,0.5)] backdrop-blur-sm sm:p-8 lg:p-10">
        <div className="flex justify-center">
          <img
            src="/branding/header-logo.svg"
            alt="Queer Pathways"
            className="mb-8 h-auto w-full max-w-[360px] object-contain"
          />
        </div>

        <div className="inline-flex items-center border border-[#d8c58f]/35 bg-[#151c25] px-4 py-2 text-[11px] font-light uppercase tracking-[0.28em] text-[#d8c58f]">
          SYSTEM_STATE: READY_FOR_AUDIT
        </div>

        <div className="mt-8 max-w-4xl">
          <h1 className="text-4xl font-light uppercase leading-[1.05] tracking-[0.08em] text-[#efdfa9] sm:text-5xl lg:text-6xl">
            The Prosecution Rests.
            <br />
            Your Sovereignty Begins.
          </h1>
          <p className="mt-6 max-w-3xl text-sm font-light leading-relaxed text-[#cdbd94] sm:text-base">
            Affirming telehealth designed specifically for the high-functioning, the neurodivergent, and the
            double-outsider. It&apos;s time to dismantle the Internal Prosecutor.
          </p>
        </div>

        <div className="mt-10 max-w-3xl border border-[#d8c58f]/35 bg-[#121a22] p-4 sm:p-5">
          <Link
            to="/intake-terminal"
            className="group relative block w-full overflow-hidden border border-[#d8c58f] px-5 py-5 text-center text-xs font-light uppercase tracking-[0.28em] text-[#d8c58f] transition-all duration-500 hover:bg-[#d8c58f] hover:text-[#15210f]"
          >
            <span className="pointer-events-none absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-[#d8c58f]/35 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            [ INITIATE BIOMETRIC PROBE ]
          </Link>
          <p className="mt-3 text-center text-[10px] font-light uppercase tracking-[0.22em] text-[#bcae81]">
            Authorization Required // Entry Subject to Audit
          </p>
        </div>

        <div className="mt-10 grid gap-4 text-xs text-[#c6b889] sm:grid-cols-3 sm:gap-6">
          <article className="border border-[#d8c58f]/25 bg-[#121923] p-4">
            <p className="text-[10px] font-light uppercase tracking-[0.22em] text-[#a89a71]">Protocol 01</p>
            <p className="mt-2 font-light leading-relaxed">Trauma-Informed Advocacy over Clinical Neutrality.</p>
          </article>
          <article className="border border-[#d8c58f]/25 bg-[#121923] p-4">
            <p className="text-[10px] font-light uppercase tracking-[0.22em] text-[#a89a71]">Protocol 02</p>
            <p className="mt-2 font-light leading-relaxed">Somatic Stabilization for the ADHD Engine.</p>
          </article>
          <article className="border border-[#d8c58f]/25 bg-[#121923] p-4">
            <p className="text-[10px] font-light uppercase tracking-[0.22em] text-[#a89a71]">Protocol 03</p>
            <p className="mt-2 font-light leading-relaxed">Building a Secure Base in a World of Static.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
