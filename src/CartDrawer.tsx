import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, Trash2, ShoppingBag, ArrowRight, ShieldCheck } from 'lucide-react';
import { useCart } from './CartContext';

export default function CartDrawer() {
  const { state, closeCart, removeItem, updateQty, itemCount, subtotalUsd, formatPrice, setCurrency } = useCart();
  const { currency } = state;

  return (
    <AnimatePresence>
      {state.isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/60 z-[60]"
            onClick={closeCart}
          />

          {/* Drawer */}
          <motion.aside
            key="drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed right-0 top-0 h-full w-full sm:w-[420px] bg-[#001807] border-l border-emerald-800/50 z-[70] flex flex-col"
            aria-label="Shopping cart"
            role="dialog"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-emerald-800/40">
              <div className="flex items-center gap-3">
                <ShoppingBag size={18} className="text-amber-400" />
                <span className="text-sm font-bold uppercase tracking-widest text-amber-100">
                  Your Cart
                </span>
                {itemCount > 0 && (
                  <span className="bg-amber-400 text-emerald-950 text-xs font-bold rounded-full px-2 py-0.5">
                    {itemCount}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-3">
                {/* Currency toggle */}
                <div className="flex items-center text-xs rounded-full border border-emerald-700/50 overflow-hidden">
                  <button
                    onClick={() => setCurrency('USD')}
                    className={`px-3 py-1 font-bold transition-all ${currency === 'USD' ? 'bg-amber-400 text-emerald-950' : 'text-amber-100/50 hover:text-amber-100'}`}
                  >
                    USD
                  </button>
                  <button
                    onClick={() => setCurrency('CAD')}
                    className={`px-3 py-1 font-bold transition-all ${currency === 'CAD' ? 'bg-amber-400 text-emerald-950' : 'text-amber-100/50 hover:text-amber-100'}`}
                  >
                    CAD
                  </button>
                </div>
                <button
                  onClick={closeCart}
                  aria-label="Close cart"
                  className="text-amber-100/50 hover:text-amber-50 transition p-1"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {state.items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 py-16 text-center">
                  <ShoppingBag size={40} className="text-emerald-700" />
                  <p className="text-amber-100/50 text-sm">Your cart is empty.</p>
                  <button
                    onClick={closeCart}
                    className="text-xs uppercase tracking-widest text-amber-400 hover:text-amber-200 transition"
                  >
                    Continue Browsing
                  </button>
                </div>
              ) : (
                state.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 border border-emerald-800/40 rounded-xl p-4 bg-emerald-950/20"
                  >
                    <div className="flex-1 space-y-1 min-w-0">
                      <p className="text-sm font-semibold text-amber-100 leading-snug line-clamp-2">
                        {item.name}
                      </p>
                      <span className="text-xs text-emerald-400/80 bg-emerald-900/40 px-2 py-0.5 rounded-full">
                        {item.tag}
                      </span>
                      <p className="text-sm font-bold text-amber-300 pt-1">
                        {formatPrice(item.priceUsd * item.quantity)}
                      </p>
                    </div>
                    <div className="flex flex-col items-end justify-between gap-2">
                      {/* Qty controls */}
                      <div className="flex items-center gap-2 border border-emerald-700/40 rounded-full px-2 py-1">
                        <button
                          onClick={() => updateQty(item.id, item.quantity - 1)}
                          aria-label="Decrease quantity"
                          className="text-amber-100/60 hover:text-amber-50 transition"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-xs font-bold text-amber-100 w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQty(item.id, item.quantity + 1)}
                          aria-label="Increase quantity"
                          className="text-amber-100/60 hover:text-amber-50 transition"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        aria-label={`Remove ${item.name}`}
                        className="text-rose-400/60 hover:text-rose-300 transition"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {state.items.length > 0 && (
              <div className="border-t border-emerald-800/40 px-6 py-5 space-y-4">
                {/* Subtotal */}
                <div className="flex items-center justify-between text-sm">
                  <span className="text-amber-100/60">Subtotal ({currency})</span>
                  <span className="font-bold text-amber-300 text-base">{formatPrice(subtotalUsd)}</span>
                </div>
                <p className="text-xs text-amber-100/40 -mt-2">
                  Tax and shipping calculated at checkout.
                </p>

                {/* Trust badge */}
                <div className="flex items-center gap-2 text-xs text-emerald-400/70">
                  <ShieldCheck size={13} />
                  <span>Secured by Stripe — your card data never touches our servers.</span>
                </div>

                {/* CTA */}
                <Link
                  to="/cart"
                  onClick={closeCart}
                  className="flex items-center justify-center gap-2 w-full bg-amber-400 hover:bg-amber-300 text-emerald-950 font-bold text-sm uppercase tracking-widest py-3.5 rounded-full transition-all"
                >
                  Review Order & Checkout
                  <ArrowRight size={15} />
                </Link>

                <button
                  onClick={closeCart}
                  className="w-full text-center text-xs text-amber-100/40 hover:text-amber-100/70 transition py-1"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
