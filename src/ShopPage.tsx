import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Flame, Music2, Layers, Box, BookOpen, Briefcase, ArrowRight, ShieldCheck, ShoppingCart, Plus, Check } from 'lucide-react';
import { useCart } from './CartContext';
import CartDrawer from './CartDrawer';

/*
 * ── PRICES ─────────────────────────────────────────────────
 * priceCents : price in CAD cents (e.g. 6800 = $68.00 CAD)
 * priceDisplay: human-readable string shown on the card
 * Update these values once final pricing is confirmed.
 * ───────────────────────────────────────────────────────────
 */

/* ── Product Catalogue (Site Bible SB-MASTER-01) ─────────── */
const CATALOGUE = [
  {
    category: 'Category I — Olfactory & Sonic Grounding',
    tagline: 'Bypass intellectual defenses. Lower blood pressure. Anchor focus.',
    products: [
      {
        id: 'f150-candle',
        name: 'The F-150 Performance Armor Candle',
        icon: <Flame className="text-amber-400" size={22} />,
        description:
          'Heavy matte deep forest green vessel. Signature scent: Cedarwood, dark amber, earthy patchouli. An intentional behavioral transition that adjourns the Internal Prosecutor and marks the shift from performance to restoration.',
        tag: 'Olfactory Anchor',
        priceCents: 6800,        // CAD — update before launch
        priceDisplay: '$68.00 CAD',
      },
      {
        id: 'vagal-soundscapes',
        name: 'Vagal Tone Continuous Soundscapes',
        icon: <Music2 className="text-amber-400" size={22} />,
        description:
          'Digital audio engineered to stimulate the vagus nerve. Ultra-low frequencies override sensory gating static and anchor focus without an energy crash. No effort required — let the waveform do the regulatory work.',
        tag: 'Sonic Architecture',
        priceCents: 2400,        // CAD — digital product
        priceDisplay: '$24.00 CAD',
      },
    ],
  },
  {
    category: 'Category II — Tactile Anchors & Rest Zones',
    tagline: 'Externalized executive function. Physical sovereignty, made tangible.',
    products: [
      {
        id: 'stonewall-drapes',
        name: 'The Stonewall Defense Heavy Velvet Drapes',
        icon: <Layers className="text-amber-400" size={22} />,
        description:
          'Light-absorbing pine green velvet. Establishes a protective perimeter that eases chronic bracing and permits the deliberate dropping of Defensive Armor. Your room becomes your secure base.',
        tag: 'Environmental Scaffold',
        priceCents: 24500,       // CAD — update before launch
        priceDisplay: '$245.00 CAD',
      },
      {
        id: 'teakwood-block',
        name: 'The Sovereign Body Teakwood Block',
        icon: <Box className="text-amber-400" size={22} />,
        description:
          'Solid raw teakwood. A physical reference point that signals to the nervous system: surroundings are stable, safe, and entirely under your sovereignty. Weight, grain, temperature — all working as somatic data.',
        tag: 'Tactile Anchor',
        priceCents: 8500,        // CAD — update before launch
        priceDisplay: '$85.00 CAD',
      },
    ],
  },
  {
    category: 'Category III — Double-Outsider Supply Co.',
    tagline: 'Rugged, heavy-weight gear engineered to clear Garbage Code from the neurodivergent mind.',
    products: [
      {
        id: 'auditor-ledger',
        name: 'The Internal Auditor Ledger',
        icon: <BookOpen className="text-amber-400" size={22} />,
        description:
          'Heritage-quality paper archive with cold steel bindings. A Physical Sovereignty Lab — map task allocation, revenue projections, and identity architecture without rejection-sensitive anxiety derailing the process.',
        tag: 'Administrative Scaffold',
        priceCents: 4800,        // CAD — update before launch
        priceDisplay: '$48.00 CAD',
      },
      {
        id: 'cowhide-portfolio',
        name: 'The Identity Switch Cowhide Portfolio',
        icon: <Briefcase className="text-amber-400" size={22} />,
        description:
          'Distressed cowhide sleeve. The functional balance of raw somatic instinct and high-fidelity executive presentation — because the Double-Outsider should not have to choose between being authentic and being taken seriously.',
        tag: 'Presence Object',
        priceCents: 14500,       // CAD — update before launch
        priceDisplay: '$145.00 CAD',
      },
    ],
  },
];

export default function ShopPage() {
  const { addItem, itemCount, openCart, state } = useCart();
  // Track recently added items for visual feedback
  const [addedIds, setAddedIds] = React.useState<Set<string>>(new Set());

  function handleAddToCart(product: typeof CATALOGUE[0]['products'][0]) {
    addItem({
      id: product.id,
      name: product.name,
      tag: product.tag,
      price: product.priceCents,
      priceDisplay: product.priceDisplay,
    });
    // Flash check-mark for 1.5 s
    setAddedIds((prev) => new Set(prev).add(product.id));
    setTimeout(() => {
      setAddedIds((prev) => {
        const next = new Set(prev);
        next.delete(product.id);
        return next;
      });
    }, 1500);
  }

  return (
    <div className="min-h-screen bg-[#001807] text-amber-50">
      {/* Cart drawer */}
      <CartDrawer />

      {/* Nav bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#001807] border-b border-emerald-900/40 px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="text-xs uppercase tracking-[0.2em] text-amber-100/60 hover:text-amber-50 transition-colors"
        >
          ← Queer Pathways
        </Link>
        <span className="text-xs uppercase tracking-[0.25em] text-amber-400 font-semibold">
          The Centaur's Apothecary
        </span>
        <div className="flex items-center gap-3">
          {/* Cart icon */}
          <button
            onClick={openCart}
            aria-label={`Open cart, ${itemCount} item${itemCount !== 1 ? 's' : ''}`}
            className="relative text-amber-100/70 hover:text-amber-50 transition p-1"
          >
            <ShoppingCart size={20} />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-amber-400 text-emerald-950 text-[10px] font-bold rounded-full min-w-[16px] h-4 flex items-center justify-center px-1">
                {itemCount}
              </span>
            )}
          </button>
          <a
            href="https://book.carepatron.com/Queer-Pathways/Joshua?p=1achg8U5QhGVWM9fIz.Kig&s=VI4IFsMw&e=b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs bg-amber-50 text-emerald-950 px-5 py-2 rounded-full font-bold hover:bg-amber-100 transition-all"
          >
            Book Now
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="space-y-6"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-amber-400">
            The Centaur's Apothecary & Double-Outsider Supply Co.
          </p>
          <h1 className="text-5xl md:text-6xl font-bold font-serif leading-tight">
            Heritage-Grade Scaffolding<br />for the ADHD Engine.
          </h1>
          <p className="text-lg text-amber-100/80 max-w-2xl mx-auto leading-relaxed">
            You were never broken. You were running high-performance hardware in environments built for
            standard issue. These objects don't fix you — they externalize your executive function so
            you stop burning bandwidth on maintenance and start reclaiming territory.
          </p>
          <div className="flex items-center justify-center gap-3 pt-2">
            <span className="block h-px w-16 bg-amber-400/40" />
            <span className="text-amber-400 text-sm">The court is adjourned here.</span>
            <span className="block h-px w-16 bg-amber-400/40" />
          </div>
        </motion.div>
      </section>

      {/* Cart CTA strip — visible when cart has items */}
      {itemCount > 0 && (
        <div className="mx-6 mb-6 max-w-4xl md:mx-auto border border-amber-400/30 bg-amber-400/5 rounded-2xl px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-amber-100/80">
            <span className="font-bold text-amber-300">{itemCount} item{itemCount !== 1 ? 's' : ''}</span> in your cart
          </p>
          <Link
            to="/cart"
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest bg-amber-400 hover:bg-amber-300 text-emerald-950 px-6 py-3 rounded-full transition-all whitespace-nowrap"
          >
            Review Order & Checkout <ArrowRight size={14} />
          </Link>
        </div>
      )}

      {/* Waitlist Banner — shown when cart is empty */}
      {itemCount === 0 && (
        <div className="mx-6 mb-16 max-w-4xl md:mx-auto border border-amber-400/30 bg-amber-400/5 rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <p className="text-sm font-bold text-amber-300 uppercase tracking-widest">Catalogue Live</p>
            <p className="text-sm text-amber-100/70 leading-relaxed">
              Add items to your cart and check out securely with Stripe.
            </p>
          </div>
          <a
            href="https://blog.queerpathways.org"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest border border-amber-400/50 text-amber-300 px-6 py-3 rounded-full hover:bg-amber-400/10 transition-all whitespace-nowrap"
          >
            Join the Queer Times <ArrowRight size={14} />
          </a>
        </div>
      )}

      {/* Catalogue */}
      <main className="max-w-6xl mx-auto px-6 pb-32 space-y-24">
        {CATALOGUE.map((section, si) => (
          <motion.div
            key={section.category}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: si * 0.1 }}
            className="space-y-10"
          >
            {/* Category header */}
            <div className="border-b border-emerald-800/50 pb-6 space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] text-amber-400">{section.category}</p>
              <p className="text-amber-100/60 text-sm">{section.tagline}</p>
            </div>

            {/* Product cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {section.products.map((product) => {
                const inCart = state.items.some((i) => i.id === product.id);
                const justAdded = addedIds.has(product.id);
                return (
                  <div
                    key={product.id}
                    className="border border-emerald-800/40 rounded-2xl p-8 space-y-5 bg-emerald-950/20 hover:bg-emerald-950/40 transition-all flex flex-col"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        {product.icon}
                        <h3 className="text-lg font-bold font-serif leading-snug">{product.name}</h3>
                      </div>
                      <span className="shrink-0 text-xs bg-emerald-900/60 text-emerald-300 px-3 py-1 rounded-full font-medium border border-emerald-700/40">
                        {product.tag}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-amber-100/75 leading-relaxed flex-1">{product.description}</p>

                    {/* Price + Add to Cart */}
                    <div className="pt-2 space-y-3">
                      <p className="text-base font-bold text-amber-300">{product.priceDisplay}</p>
                      <button
                        onClick={() => handleAddToCart(product)}
                        className={`w-full flex items-center justify-center gap-2 py-3 px-5 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                          justAdded
                            ? 'bg-emerald-600 text-white'
                            : inCart
                            ? 'bg-emerald-900/60 border border-emerald-600/50 text-emerald-300 hover:bg-emerald-800/60'
                            : 'bg-amber-400 hover:bg-amber-300 text-emerald-950'
                        }`}
                      >
                        {justAdded ? (
                          <><Check size={13} /> Added to Cart</>
                        ) : inCart ? (
                          <><Plus size={13} /> Add Another</>
                        ) : (
                          <><ShoppingCart size={13} /> Add to Cart</>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </main>

      {/* Unboxing Protocol */}
      <section className="border-y border-emerald-800/40 py-24 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-400">The Unboxing Protocol</p>
            <h2 className="text-4xl font-bold font-serif">A Three-Step Somatic Practice</h2>
            <p className="text-amber-100/60 text-sm">Every shipment arrives in a Deep Forest Green matte box, accompanied by an official ritual card.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                phase: 'Phase One',
                title: 'Establish the Secure Base',
                body: 'Place the box on a flat surface. Sit back, plant feet flat, and take a deliberate breath. Let the physical structure support your weight.',
              },
              {
                phase: 'Phase Two',
                title: 'Engage the Sensory Anchors',
                body: 'Break the seal. Pause to take in the scent of cedarwood and patchouli. Run fingers along the matte edges to pull awareness out of racing thoughts.',
              },
              {
                phase: 'Phase Three',
                title: 'Adjourn the Internal Courtroom',
                body: 'Lift the tool and note its weight, temperature, and texture. Mentally notify the Internal Prosecutor that the session is over. Step into the role of the Architect.',
              },
            ].map((step) => (
              <div key={step.phase} className="space-y-3">
                <p className="text-xs uppercase tracking-[0.25em] text-amber-400">{step.phase}</p>
                <h4 className="font-bold font-serif text-lg">{step.title}</h4>
                <p className="text-sm text-amber-100/70 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance note */}
      <section className="py-20 px-6 max-w-3xl mx-auto text-center space-y-6">
        <ShieldCheck className="mx-auto text-emerald-400" size={32} />
        <h3 className="text-2xl font-bold font-serif">Ethical Standard</h3>
        <p className="text-amber-100/70 text-sm leading-relaxed max-w-xl mx-auto">
          Our loyalty lies with the client's healing and autonomy, never the transaction.
          Every engagement — clinical or commercial — is protected by the Sovereign Pause.
          Apothecary products are sensory scaffolds, not clinical interventions. For clinical
          care, book directly with Queer Pathways.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
          <a
            href="https://book.carepatron.com/Queer-Pathways/Joshua?p=1achg8U5QhGVWM9fIz.Kig&s=VI4IFsMw&e=b"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-50 text-emerald-950 px-10 py-3 rounded-full font-bold text-sm hover:bg-amber-100 transition-all"
          >
            Book Clinical Intake
          </a>
          <Link
            to="/"
            className="border border-amber-50/30 text-amber-50 px-10 py-3 rounded-full font-bold text-sm hover:bg-amber-50/10 transition-all"
          >
            Back to Queer Pathways
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-emerald-900/50 py-10 px-6 text-center text-xs text-amber-100/40 space-y-2">
        <p>
          © 2026 The Centaur's Apothecary & Double-Outsider Supply Co. — a Queer Pathways venture.
          Products are not intended to replace clinical intervention.
        </p>
        <p className="flex items-center justify-center gap-3 flex-wrap">
          <Link to="/privacy" className="underline hover:text-amber-100/70 transition">Privacy Policy</Link>
          <span aria-hidden>·</span>
          <Link to="/fee-disclosure" className="underline hover:text-amber-100/70 transition">Terms of Sale & Refund Policy</Link>
          <span aria-hidden>·</span>
          <Link to="/cart" className="underline hover:text-amber-100/70 transition">View Cart</Link>
        </p>
      </footer>
    </div>
  );
}
