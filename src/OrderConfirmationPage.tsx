import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ShoppingBag, Mail, Home } from 'lucide-react';
import { formatPriceFn } from './CartContext';
import type { Currency } from './CartContext';

interface OrderSnapshot {
  items: Array<{
    id: string;
    name: string;
    tag: string;
    priceUsd: number;
    quantity: number;
  }>;
  subtotalUsd: number;
  currency: Currency;
}

export default function OrderConfirmationPage() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [order, setOrder] = useState<OrderSnapshot | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem('qp_last_order');
      if (raw) {
        setOrder(JSON.parse(raw) as OrderSnapshot);
        // Remove so a page refresh doesn't re-show stale data
        localStorage.removeItem('qp_last_order');
      }
    } catch {
      // ignore
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#001807] text-amber-50 flex flex-col items-center justify-center px-6 py-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-lg space-y-8"
      >
        {/* Success header */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <CheckCircle2 size={56} className="text-emerald-400" strokeWidth={1.5} />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold font-serif leading-tight">
            Payment Confirmed
          </h1>
          <p className="text-amber-100/70 text-sm leading-relaxed max-w-sm mx-auto">
            Your order has been placed successfully. A receipt has been sent to your email by Stripe.
          </p>
          {sessionId && (
            <p className="text-xs text-amber-100/30 font-mono break-all">
              Reference: {sessionId}
            </p>
          )}
        </div>

        {/* Order summary */}
        {order && (
          <div className="border border-emerald-800/40 rounded-2xl p-6 bg-emerald-950/20 space-y-4">
            <h2 className="text-xs uppercase tracking-widest text-amber-400 font-semibold border-b border-emerald-800/40 pb-3">
              Order Summary ({order.currency})
            </h2>
            <ul className="space-y-2 text-sm">
              {order.items.map((item) => (
                <li key={item.id} className="flex justify-between gap-4 text-amber-100/80">
                  <span className="truncate">
                    {item.name}
                    {item.quantity > 1 && (
                      <span className="text-amber-100/40"> ×{item.quantity}</span>
                    )}
                  </span>
                  <span className="shrink-0 font-medium">
                    {formatPriceFn(item.priceUsd * item.quantity, order.currency)}
                  </span>
                </li>
              ))}
            </ul>
            <div className="border-t border-emerald-800/40 pt-3 text-sm">
              <div className="flex justify-between font-bold text-amber-200 text-base">
                <span>Subtotal Charged ({order.currency})</span>
                <span>{formatPriceFn(order.subtotalUsd, order.currency)}</span>
              </div>
              <p className="text-xs text-amber-100/30 mt-1">Tax and shipping confirmed at Stripe checkout.</p>
            </div>
          </div>
        )}

        {/* What happens next */}
        <div className="border border-emerald-800/30 rounded-2xl p-6 bg-emerald-950/10 space-y-3">
          <h2 className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
            What Happens Next
          </h2>
          <ul className="space-y-2 text-sm text-amber-100/70">
            <li className="flex gap-3">
              <Mail size={15} className="shrink-0 mt-0.5 text-emerald-400" />
              <span>
                Check your inbox — Stripe will send a payment receipt shortly.
              </span>
            </li>
            <li className="flex gap-3">
              <ShoppingBag size={15} className="shrink-0 mt-0.5 text-emerald-400" />
              <span>
                Digital products will be delivered via email. Physical orders ship within 5–10
                business days.
              </span>
            </li>
          </ul>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            to="/shop"
            className="flex-1 text-center text-xs uppercase tracking-widest border border-amber-400/40 text-amber-300 px-6 py-3.5 rounded-full hover:bg-amber-400/10 transition"
          >
            Back to Shop
          </Link>
          <Link
            to="/"
            className="flex-1 flex items-center justify-center gap-2 text-xs uppercase tracking-widest border border-emerald-800/50 text-amber-100/50 hover:text-amber-100 px-6 py-3.5 rounded-full transition"
          >
            <Home size={13} />
            Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
