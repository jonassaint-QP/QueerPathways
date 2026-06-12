import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Minus,
  Plus,
  Trash2,
  ShieldCheck,
  Lock,
  FileText,
  RefreshCw,
  AlertCircle,
  Loader2,
  BarChart3,
} from 'lucide-react';
import { useCart, USD_TO_CAD } from './CartContext';
import type { CartItem } from './CartContext';

/* ── 3-D Bar Chart ───────────────────────────────────────── */
const PALETTE = [
  { front: '#f59e0b', top: '#fcd34d', side: '#b45309' },
  { front: '#10b981', top: '#34d399', side: '#047857' },
  { front: '#8b5cf6', top: '#c4b5fd', side: '#6d28d9' },
  { front: '#fb923c', top: '#fdba74', side: '#c2410c' },
  { front: '#38bdf8', top: '#7dd3fc', side: '#0284c7' },
  { front: '#f472b6', top: '#f9a8d4', side: '#be185d' },
];

function Chart3D({ items }: { items: CartItem[] }) {
  if (items.length === 0) return null;
  const maxLine = Math.max(...items.map((i) => i.priceUsd * i.quantity), 1);
  const CHART_H = 96;
  const BAR_W = 44;
  const DEPTH = 12;

  return (
    <div className="border border-emerald-800/40 rounded-2xl p-6 bg-emerald-950/20 space-y-5">
      <div className="flex items-center gap-2">
        <BarChart3 size={14} className="text-amber-400" />
        <p className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
          Order Breakdown
        </p>
      </div>

      {/* Chart viewport */}
      <div style={{ perspective: '600px' }} className="flex justify-center overflow-hidden py-2">
        <div
          style={{ transform: 'rotateX(20deg) rotateY(-5deg)', transformStyle: 'preserve-3d' }}
          className="flex items-end gap-6 pb-2"
        >
          {items.map((item, idx) => {
            const lineTotal = item.priceUsd * item.quantity;
            const barH = Math.max(18, Math.round((lineTotal / maxLine) * CHART_H));
            const c = PALETTE[idx % PALETTE.length];
            return (
              <div
                key={item.id}
                className="flex flex-col items-center gap-2"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div style={{ position: 'relative', width: BAR_W, height: barH, transformStyle: 'preserve-3d' }}>
                  {/* Front face */}
                  <div style={{ position: 'absolute', inset: 0, background: c.front, transform: `translateZ(${DEPTH / 2}px)`, borderRadius: '2px 2px 0 0' }} />
                  {/* Back face */}
                  <div style={{ position: 'absolute', inset: 0, background: c.side, transform: `translateZ(${-DEPTH / 2}px)` }} />
                  {/* Top face */}
                  <div style={{ position: 'absolute', top: 0, left: 0, width: BAR_W, height: DEPTH, background: c.top, transformOrigin: 'top center', transform: `rotateX(90deg) translateZ(${-DEPTH / 2}px)` }} />
                  {/* Right face */}
                  <div style={{ position: 'absolute', top: 0, right: -(DEPTH / 2), width: DEPTH, height: barH, background: c.side, opacity: 0.75, transformOrigin: 'left center', transform: 'rotateY(90deg)' }} />
                </div>
                <p className="text-[9px] text-amber-100/50 text-center leading-tight"
                   style={{ maxWidth: BAR_W + 8 }}>
                  {item.name.split(' ').slice(1, 3).join(' ')}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="h-px bg-emerald-700/40" />

      {/* Legend */}
      <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center">
        {items.map((item, idx) => (
          <div key={item.id} className="flex items-center gap-1.5">
            <div style={{ background: PALETTE[idx % PALETTE.length].front }} className="w-2.5 h-2.5 rounded-sm flex-shrink-0" />
            <span className="text-[10px] text-amber-100/60 truncate max-w-[90px]">
              {item.name.split(' ').slice(0, 3).join(' ')}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CartPage() {
  const { state, removeItem, updateQty, clearCart, subtotalUsd, itemCount, formatPrice, setCurrency } = useCart();
  const { currency } = state;

  const [termsAccepted, setTermsAccepted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleStripeCheckout() {
    if (!termsAccepted) {
      setError('Please accept the Terms of Sale and Refund Policy to continue.');
      return;
    }
    setError('');
    setLoading(true);

    try {
      const origin = window.location.origin;
      const res = await fetch('/.netlify/functions/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: state.items.map((i) => ({
            id: i.id,
            name: i.name,
            priceUsd: i.priceUsd,
            quantity: i.quantity,
          })),
          currency: currency.toLowerCase(),
          successUrl: `${origin}/order-confirmation?session_id={CHECKOUT_SESSION_ID}`,
          cancelUrl: `${origin}/cart`,
        }),
      });

      if (!res.ok) {
        const { error: msg } = await res.json().catch(() => ({ error: 'Checkout unavailable.' }));
        throw new Error(msg || `Server error (${res.status})`);
      }

      const { url } = await res.json();
      localStorage.setItem(
        'qp_last_order',
        JSON.stringify({ items: state.items, subtotalUsd, currency }),
      );
      clearCart();
      window.location.href = url;
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      setLoading(false);
    }
  }

  if (state.items.length === 0 && !loading) {
    return (
      <div className="min-h-screen bg-[#001807] text-amber-50 flex flex-col items-center justify-center gap-6 px-6">
        <p className="text-amber-100/50 text-lg">Your cart is empty.</p>
        <Link
          to="/shop"
          className="text-xs uppercase tracking-widest border border-amber-400/40 text-amber-300 px-6 py-3 rounded-full hover:bg-amber-400/10 transition"
        >
          Back to The Centaur's Apothecary
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#001807] text-amber-50">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#001807] border-b border-emerald-900/40 px-6 py-4 flex items-center justify-between">
        <Link
          to="/shop"
          className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-amber-100/60 hover:text-amber-50 transition-colors"
        >
          <ArrowLeft size={14} />
          Back to Shop
        </Link>
        <span className="text-xs uppercase tracking-[0.25em] text-amber-400 font-semibold">
          Review Your Order
        </span>
        <div className="flex items-center gap-3">
          {/* Currency toggle */}
          <div className="flex items-center text-xs rounded-full border border-emerald-700/50 overflow-hidden">
            <button
              onClick={() => setCurrency('USD')}
              className={`px-3 py-1.5 font-bold transition-all ${currency === 'USD' ? 'bg-amber-400 text-emerald-950' : 'text-amber-100/50 hover:text-amber-100'}`}
            >
              USD
            </button>
            <button
              onClick={() => setCurrency('CAD')}
              className={`px-3 py-1.5 font-bold transition-all ${currency === 'CAD' ? 'bg-amber-400 text-emerald-950' : 'text-amber-100/50 hover:text-amber-100'}`}
            >
              CAD
            </button>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-emerald-400/70">
            <Lock size={12} />
            <span className="hidden sm:inline">Secure Checkout</span>
          </div>
        </div>
      </nav>

      <main className="pt-28 pb-24 px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-[1fr_380px] gap-10"
        >
          {/* ── Left: 3D Chart + Cart Items ─────────── */}
          <section className="space-y-5" aria-label="Cart items">
            <div className="flex items-center justify-between border-b border-emerald-800/40 pb-4">
              <h1 className="text-2xl font-bold font-serif">
                Your Order ({itemCount} {itemCount === 1 ? 'item' : 'items'})
              </h1>
              <button
                onClick={clearCart}
                className="text-xs text-rose-400/60 hover:text-rose-300 transition flex items-center gap-1"
              >
                <RefreshCw size={11} />
                Clear all
              </button>
            </div>

            {/* 3D Bar Chart */}
            <Chart3D items={state.items} />

            {/* Item list */}
            {state.items.map((item) => (
              <div
                key={item.id}
                className="flex gap-5 border border-emerald-800/40 rounded-2xl p-5 bg-emerald-950/20"
              >
                <div className="flex-1 space-y-1 min-w-0">
                  <p className="font-semibold text-amber-100 leading-snug">{item.name}</p>
                  <span className="text-xs text-emerald-400/80 bg-emerald-900/40 px-2 py-0.5 rounded-full">
                    {item.tag}
                  </span>
                  <p className="text-sm font-bold text-amber-300 pt-1">
                    {formatPrice(item.priceUsd)} × {item.quantity} ={' '}
                    <span className="text-amber-200">{formatPrice(item.priceUsd * item.quantity)}</span>
                  </p>
                </div>
                <div className="flex flex-col items-end justify-between gap-3">
                  <div className="flex items-center gap-3 border border-emerald-700/40 rounded-full px-3 py-1.5">
                    <button onClick={() => updateQty(item.id, item.quantity - 1)} aria-label="Decrease quantity" className="text-amber-100/60 hover:text-amber-50 transition"><Minus size={13} /></button>
                    <span className="text-sm font-bold text-amber-100 w-5 text-center">{item.quantity}</span>
                    <button onClick={() => updateQty(item.id, item.quantity + 1)} aria-label="Increase quantity" className="text-amber-100/60 hover:text-amber-50 transition"><Plus size={13} /></button>
                  </div>
                  <button onClick={() => removeItem(item.id)} aria-label={`Remove ${item.name} from cart`} className="text-rose-400/60 hover:text-rose-300 transition"><Trash2 size={15} /></button>
                </div>
              </div>
            ))}
          </section>

          {/* ── Right: Order Summary & Checkout ──────── */}
          <aside className="space-y-5" aria-label="Order summary">
            <div className="border border-emerald-800/40 rounded-2xl p-6 bg-emerald-950/20 space-y-5">
              <h2 className="text-sm font-bold uppercase tracking-widest text-amber-400 border-b border-emerald-800/40 pb-4">
                Order Summary
              </h2>

              {/* Line items */}
              <ul className="space-y-2 text-sm">
                {state.items.map((item) => (
                  <li key={item.id} className="flex justify-between gap-4 text-amber-100/80">
                    <span className="truncate">
                      {item.name}
                      {item.quantity > 1 && <span className="text-amber-100/40"> ×{item.quantity}</span>}
                    </span>
                    <span className="shrink-0 font-medium">{formatPrice(item.priceUsd * item.quantity)}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-emerald-800/40 pt-4 space-y-2 text-sm">
                <div className="flex justify-between font-bold text-amber-200 text-base">
                  <span>Subtotal ({currency})</span>
                  <span>{formatPrice(subtotalUsd)}</span>
                </div>
                <div className="flex justify-between text-amber-100/50 text-xs">
                  <span>Tax &amp; shipping</span>
                  <span>Calculated at checkout</span>
                </div>
              </div>

              {currency === 'CAD' && (
                <p className="text-xs text-amber-100/30 leading-relaxed">
                  CAD amounts are approximate (rate: 1 USD = {USD_TO_CAD} CAD). Final charge is confirmed in {currency} at Stripe checkout.
                </p>
              )}

              {/* Terms acceptance */}
              <label className="flex gap-3 items-start cursor-pointer group">
                <input
                  type="checkbox"
                  checked={termsAccepted}
                  onChange={(e) => { setTermsAccepted(e.target.checked); if (e.target.checked) setError(''); }}
                  className="mt-0.5 h-4 w-4 accent-amber-400 rounded"
                />
                <span className="text-xs text-amber-100/60 leading-relaxed group-hover:text-amber-100/80 transition">
                  I agree to the{' '}
                  <Link to="/fee-disclosure" target="_blank" className="text-amber-400 underline hover:text-amber-200">Terms of Sale</Link>
                  {' '}and{' '}
                  <Link to="/fee-disclosure" target="_blank" className="text-amber-400 underline hover:text-amber-200">Refund Policy</Link>.
                  Digital products are final sale; physical items returnable within 14 days.
                </span>
              </label>

              <p className="text-xs text-amber-100/40 leading-relaxed">
                Billing processed securely by Stripe. See our{' '}
                <Link to="/privacy" className="text-amber-400/70 underline hover:text-amber-300">Privacy Policy</Link>.
              </p>

              {error && (
                <div className="flex items-start gap-2 bg-rose-950/40 border border-rose-500/30 rounded-xl px-4 py-3 text-sm text-rose-300">
                  <AlertCircle size={15} className="mt-0.5 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <button
                onClick={handleStripeCheckout}
                disabled={loading || !termsAccepted}
                className="flex items-center justify-center gap-2 w-full bg-[#635bff] hover:bg-[#7a74ff] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-sm uppercase tracking-widest py-4 rounded-full transition-all"
              >
                {loading ? (
                  <><Loader2 size={16} className="animate-spin" /> Redirecting to Stripe…</>
                ) : (
                  <><Lock size={15} /> Secure Checkout — {formatPrice(subtotalUsd)}</>
                )}
              </button>

              <div className="flex flex-col gap-2 pt-1">
                <div className="flex items-center gap-2 text-xs text-emerald-400/70">
                  <ShieldCheck size={13} />
                  <span>256-bit SSL · PCI DSS compliant via Stripe</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-emerald-400/70">
                  <FileText size={13} />
                  <span>Receipt emailed after payment</span>
                </div>
              </div>

              <div className="flex items-center justify-center pt-1">
                <a href="https://stripe.com" target="_blank" rel="noopener noreferrer" className="text-xs text-amber-100/30 hover:text-amber-100/50 transition">
                  Powered by <span className="font-bold">Stripe</span>
                </a>
              </div>
            </div>

            <Link to="/shop" className="flex items-center justify-center gap-2 w-full text-xs uppercase tracking-widest border border-emerald-800/50 text-amber-100/50 hover:text-amber-100 hover:border-emerald-700 px-6 py-3 rounded-full transition">
              <ArrowLeft size={12} />
              Continue Shopping
            </Link>
          </aside>
        </motion.div>
      </main>
    </div>
  );
}
