import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, ArrowLeft, Sparkles } from 'lucide-react';

export default function NotFoundPage() {
  const pathname = window.location.pathname;

  return (
    <main className="relative min-h-screen overflow-hidden bg-emerald-950 text-amber-50">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,_rgba(251,191,36,0.14),transparent_42%),radial-gradient(circle_at_85%_70%,_rgba(251,191,36,0.1),transparent_44%)]" />

      <div className="relative mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 py-20 text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-emerald-900/45 px-4 py-2 text-xs uppercase tracking-[0.24em] text-amber-200/90">
          <Compass size={14} />
          Unmapped Territory
        </div>

        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-amber-300/70">Error 404</p>
        <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl qp-font-playfair">
          The clinical pathway you requested is not charted here.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-amber-100/90">
          You have arrived in unmapped territory. That does not mean you are lost. It means we need to reroute with intention and return you to a supported corridor.
        </p>
        <p className="mt-3 text-sm tracking-[0.08em] uppercase text-amber-300/70">
          Coordinate: {pathname} is currently unmapped.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-8 py-3 text-sm font-bold text-emerald-950 transition hover:bg-amber-100"
          >
            <ArrowLeft size={16} />
            Return Home
          </Link>
          <Link
            to="/intake-terminal"
            className="inline-flex items-center gap-2 rounded-full border border-amber-300/45 px-8 py-3 text-sm font-semibold text-amber-100 transition hover:border-amber-200/70 hover:text-amber-50"
          >
            <Sparkles size={16} />
            Open Intake Terminal
          </Link>
        </div>
      </div>
    </main>
  );
}
