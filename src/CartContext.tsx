import React, { createContext, useContext, useReducer, useEffect } from 'react';

/* ── Currency ────────────────────────────────────────────── */
// USD only. The CAD lane was neutered 2026-09-16: the Ontario registration is
// closed, the refund policy ships to United States addresses only, and a
// hardcoded USD_TO_CAD = 1.38 had no business pricing a Pennsylvania practice.
//
// ⚠ The two exports below are SHAPE-ONLY. They survive because three files
// still import them and one of those, src/ShopPage.tsx (~57KB), has not been
// read in full — removing a module's public surface while an unread consumer
// imports it is how a broken build ships. Do not treat either as functional:
//
//   USD_TO_CAD   not a rate. Pinned to 1 so any surviving arithmetic is a
//                no-op rather than a silent conversion.
//   setCurrency  accepts any argument and always yields USD. A stale toggle
//                renders and does nothing instead of crashing.
//
// Both should be deleted when the retail cart surfaces come off the clinical
// domain (QP-POL-002), together with CartPage, CartDrawer and ShopPage.
export type Currency = 'USD';

export const USD_TO_CAD = 1;

export function formatPriceFn(usdCents: number, _currency: Currency = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(usdCents / 100);
}

/* ── Types ───────────────────────────────────────────────── */
export interface CartItem {
  id: string;
  name: string;
  tag: string;
  /** Price in USD cents */
  priceUsd: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  currency: Currency;
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: Omit<CartItem, 'quantity'> }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QTY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'OPEN_CART' }
  | { type: 'CLOSE_CART' }
  | { type: 'SET_CURRENCY'; payload: Currency };

interface CartContextValue {
  state: CartState;
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: string) => void;
  updateQty: (id: string, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  /**
   * Accepted and ignored. Kept permissive so existing callers that pass 'CAD'
   * still compile; the reducer always resolves to USD.
   */
  setCurrency: (c: string) => void;
  formatPrice: (usdCents: number) => string;
  subtotalUsd: number;
  itemCount: number;
}

/* ── Reducer ─────────────────────────────────────────────── */
function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find((i) => i.id === action.payload.id);
      if (existing) {
        return {
          ...state,
          isOpen: true,
          items: state.items.map((i) =>
            i.id === action.payload.id ? { ...i, quantity: i.quantity + 1 } : i,
          ),
        };
      }
      return {
        ...state,
        isOpen: true,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };
    }
    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter((i) => i.id !== action.payload) };
    case 'UPDATE_QTY':
      if (action.payload.quantity <= 0) {
        return { ...state, items: state.items.filter((i) => i.id !== action.payload.id) };
      }
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.payload.id ? { ...i, quantity: action.payload.quantity } : i,
        ),
      };
    case 'CLEAR_CART':
      return { ...state, items: [] };
    case 'OPEN_CART':
      return { ...state, isOpen: true };
    case 'CLOSE_CART':
      return { ...state, isOpen: false };
    case 'SET_CURRENCY':
      // No-op. USD is the only currency in the architecture.
      return state;
    default:
      return state;
  }
}

/* ── Storage helpers ─────────────────────────────────────── */
const STORAGE_KEY = 'qp_cart_v2'; // v2: priceUsd replaces price/priceDisplay
const CURRENCY_KEY = 'qp_currency';

function loadCart(): CartItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as CartItem[]) : [];
  } catch {
    return [];
  }
}

/**
 * Always returns 'USD'. A visitor may still hold a stored 'CAD' value from
 * before the CAD lane was neutered; it is cleared rather than trusted so no
 * stale preference can re-enable Canadian formatting.
 */
function loadCurrency(): Currency {
  try {
    localStorage.removeItem(CURRENCY_KEY);
  } catch {
    /* private mode — nothing to clean up */
  }
  return 'USD';
}

function saveCart(items: CartItem[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    /* private mode — fail silently */
  }
}

/* ── Context ─────────────────────────────────────────────── */
const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: loadCart(),
    isOpen: false,
    currency: loadCurrency(),
  });

  useEffect(() => {
    saveCart(state.items);
  }, [state.items]);

  const subtotalUsd = state.items.reduce((s, i) => s + i.priceUsd * i.quantity, 0);
  const itemCount = state.items.reduce((n, i) => n + i.quantity, 0);

  const value: CartContextValue = {
    state,
    addItem: (item) => dispatch({ type: 'ADD_ITEM', payload: item }),
    removeItem: (id) => dispatch({ type: 'REMOVE_ITEM', payload: id }),
    updateQty: (id, quantity) => dispatch({ type: 'UPDATE_QTY', payload: { id, quantity } }),
    clearCart: () => dispatch({ type: 'CLEAR_CART' }),
    openCart: () => dispatch({ type: 'OPEN_CART' }),
    closeCart: () => dispatch({ type: 'CLOSE_CART' }),
    setCurrency: () => dispatch({ type: 'SET_CURRENCY', payload: 'USD' }),
    formatPrice: (usdCents) => formatPriceFn(usdCents, 'USD'),
    subtotalUsd,
    itemCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside CartProvider');
  return ctx;
}
