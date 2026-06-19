import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Briefcase, ArrowRight, ShieldCheck, ShoppingCart, Plus, Check, Droplets, EyeOff, Zap, Crosshair, PenLine, ChevronLeft, ChevronRight } from 'lucide-react';
import { useCart } from './CartContext';
import CartDrawer from './CartDrawer';

/* ── Image Carousel ─────────────────────────────────────── */
function ProductCarousel({ images }: { images: string[] }) {
  const [idx, setIdx] = React.useState(0);
  const [visible, setVisible] = React.useState(true);
  if (!visible) return null;
  const single = images.length === 1;
  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);
  const next = () => setIdx((i) => (i + 1) % images.length);
  return (
    <div className="relative rounded-xl overflow-hidden group">
      <img
        key={images[idx]}
        src={images[idx]}
        alt=""
        aria-hidden="true"
        className="w-full object-contain"
        onError={() => {
          // if current image fails, try next; if all fail, hide carousel
          if (images.length === 1) { setVisible(false); return; }
          setIdx((i) => (i + 1) % images.length);
        }}
      />
      {!single && (
        <>
          <button
            onClick={prev}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            aria-label="Next image"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronRight size={18} />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Image ${i + 1}`}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  i === idx ? 'bg-amber-400' : 'bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

/*
 * ── PRICES (USD base) ─────────────────────────────────────────
 * priceUsd : price in USD cents (e.g. 4900 = $49.00 USD)
 * CAD is derived automatically via CartContext (USD_TO_CAD rate).
 * Update these values once final pricing is confirmed.
 * ───────────────────────────────────────────────────────────
 */

/* ── Product type ────────────────────────────────────────── */
interface Product {
  id: string;
  name: string;
  icon: React.ReactElement;
  description: string;
  tag: string;
  priceUsd: number; // USD cents; 0 = price not yet set
  images?: string[]; // paths relative to /public; carousel when >1
}

/* ── Product Catalogue (Site Bible SB-MASTER-01) ─────────── */
const CATALOGUE: { category: string; tagline: string; products: Product[] }[] = [


  {
    category: 'Category III — Double-Outsider Supply Co.',
    tagline: 'Rugged, heavy-weight gear engineered to clear Garbage Code from the neurodivergent mind.',
    products: [

      {
        id: 'cowhide-portfolio',
        name: 'The Identity Switch Cowhide Portfolio',
        icon: <Briefcase className="text-amber-400" size={22} />,
        description:
          'Distressed cowhide sleeve. The functional balance of raw somatic instinct and high-fidelity executive presentation — because the Double-Outsider should not have to choose between being authentic and being taken seriously.',
        tag: 'Presence Object',
        priceUsd: 10500,         // $105.00 USD
      },
    ],
  },

  // ── The Somatic Toolkit ──────────────────────────────────────────────────

  {
    category: 'Category IV — The Somatic Toolkit: Cleanse & Fluidity',
    tagline: 'The foundations of grounding — reduce cognitive friction before entering the space of surrender.',
    products: [
      {
        id: 'cleanstream-enema-bulb',
        name: 'Cleanstream Deluxe Enema Bulb',
        icon: <Droplets className="text-amber-400" size={22} />,
        images: ['/Images/somatic-toolkit/cleanstream-enema-bulb.jpg'],
        description:
          'The reset button for physical peace. Before you enter the space of total surrender, you clear the field. An act of administrative advocacy for your own comfort — removing the baseline anxiety of the unexpected so your nervous system can settle into absolute presence.',
        tag: 'Somatic Reset',
        priceUsd: 3499, // $34.99 USD
      },
      {
        id: 'swiss-navy-silicone-32oz',
        name: 'Swiss Navy Silicone Lubricant (32 oz)',
        icon: <Droplets className="text-amber-400" size={22} />,
        images: [
          '/Images/somatic-toolkit/swiss-navy-silicone-32oz.jpg',
          '/Images/somatic-toolkit/swiss-navy-silicone-32oz-2.jpg',
        ],
        description:
          'Uncoupling friction from focus. Premium-grade insulation for deep somatic exploration. Dramatically reduces baseline sensory drag, turning intense physical impact into a seamless, controlled flow state for the brain that craves high-stimulation input.',
        tag: 'Lubrication',
        priceUsd: 7999, // $79.99 USD
      },
      {
        id: 'boy-butter-gold-16oz',
        name: 'Boy Butter Gold (16 oz Tub)',
        icon: <Droplets className="text-amber-400" size={22} />,
        images: [
          '/Images/somatic-toolkit/boy-butter-gold-16oz.jpg',
          '/Images/somatic-toolkit/boy-butter-gold-16oz-2.jpg',
          '/Images/somatic-toolkit/boy-butter-gold-16oz-3.jpg',
        ],
        description:
          'High-end mitigation for high-intensity needs. When your physical armor requires premium-grade protection for deep somatic exploration, Boy Butter Gold delivers — eliminating sensory drag so you can maintain complete focus on the architecture of your experience.',
        tag: 'Lubrication',
        priceUsd: 4499, // $44.99 USD
      },

    ],
  },
  {
    category: 'Category V — The Somatic Toolkit: Structural Rigor',
    tagline: 'The architecture of containment — unyielding precision that drops the analytical mind into the present.',
    products: [
      {
        id: 'spartacus-glass-medium-clear',
        name: 'Blown Realistic Glass — Medium Clear',
        icon: <Crosshair className="text-amber-400" size={22} />,
        images: ['/Images/somatic-toolkit/spartacus-glass-medium-clear.jpg'],
        description:
          'The heavy gravity of unyielding truth. Unlike materials that warp or adjust, blown glass offers a frozen geometry of absolute precision. It does not perform, code-switch, or compromise — it provides a cold, dense somatic weight that forces an interest-based nervous system to drop out of analytical circles and land hard into present tissue.',
        tag: 'Glass',
        priceUsd: 8499, // $84.99 USD
      },
      {
        id: 'spartacus-glass-large-clear',
        name: 'Blown Realistic Glass — Large Clear',
        icon: <Crosshair className="text-amber-400" size={22} />,
        images: [
          '/Images/somatic-toolkit/spartacus-glass-large-clear.jpg',
          '/Images/somatic-toolkit/spartacus-glass-large-clear-2.jpg',
          '/Images/somatic-toolkit/spartacus-glass-large-clear-3.jpg',
        ],
        description:
          'Expanded geometry of absolute precision. The same cold, dense somatic weight as the medium format, scaled for those whose nervous system demands a more emphatic landing. The glass does not negotiate or compromise — it simply is.',
        tag: 'Glass',
        priceUsd: 9499, // $94.99 USD
      },
      {
        id: 'pivot-positioner-ss360',
        name: 'Pivot Positioner SS360 / Plus Black',
        icon: <Crosshair className="text-amber-400" size={22} />,
        images: [
          '/Images/somatic-toolkit/pivot-positioner-ss360-black.jpg',
          '/Images/somatic-toolkit/pivot-positioner-ss360-black-2.jpg',
          '/Images/somatic-toolkit/pivot-positioner-ss360-black-3.jpg',
          '/Images/somatic-toolkit/pivot-positioner-ss360-black-4.jpg',
          '/Images/somatic-toolkit/pivot-positioner-ss360-black-5.jpg',
        ],
        description:
          'The secure base of suspension. For the high-achieving professional accustomed to holding up the sky, true relief comes when you are completely forbidden from holding your own weight. A prosthetic environment in structural form — dismantling the hyper-vigilant posture of survival so you can surrender volition entirely.',
        tag: 'Positional',
        priceUsd: 11500, // $115.00 USD
      },
      {
        id: 'sportsheets-everlaster-stud-white',
        name: 'Sportsheets Everlaster-Stud (White)',
        icon: <Crosshair className="text-amber-400" size={22} />,
        images: ['/Images/somatic-toolkit/sportsheets-everlaster-stud-white.jpg'],
        description:
          'A hollow strap-on harness engineered for the body you actually have. The prosthetic architecture of sovereign intimacy — precision-adjustable strapping eliminates the cognitive overhead of improvisation, freeing your full attention for the architecture of the experience itself.',
        tag: 'Harness',
        priceUsd: 0, // TODO: confirm price from BigCommerce catalogue
      },
    ],
  },
  {
    category: 'Category VI — The Somatic Toolkit: Sensory Gating',
    tagline: 'Dismantling the boardroom mask — an intentional, tactical sanctuary where the internal prosecutor is muted.',
    products: [
      {
        id: 'mouth-hood-fetish',
        name: 'Fetish Fashion Mouth Hood',
        icon: <EyeOff className="text-amber-400" size={22} />,
        images: [
          '/Images/somatic-toolkit/mouth-hood-fetish.jpg',
          '/Images/somatic-toolkit/mouth-hood-fetish-3.jpg',
        ],
        description:
          'The Masking Visionary spends 80 hours a week code-switching, exhausted from performing normal. By explicitly reshaping your sensory horizon, this hood gives your overloaded processing system a total intermission — not hiding, but an intentional sanctuary where the labor of being observed is fully suspended.',
        tag: 'Sensory Gate',
        priceUsd: 4499, // $44.99 USD
      },
      {
        id: 'fort-troff-black-ops-hood',
        name: 'Fort Troff Black Ops Hood',
        icon: <EyeOff className="text-amber-400" size={22} />,
        images: [
          '/Images/somatic-toolkit/fort-troff-black-ops-hood.jpg',
          '/Images/somatic-toolkit/fort-troff-black-ops-hood-2.jpg',
          '/Images/somatic-toolkit/fort-troff-black-ops-hood-3.jpg',
          '/Images/somatic-toolkit/fort-troff-black-ops-hood-6.jpg',
        ],
        description:
          'Total blackout for the overloaded processing system. By eliminating your visual field completely, this hood gives the eyes permission to shut, silences the internal prosecutor, and removes the labor of being observed. Maximum sensory containment for maximum nervous system relief.',
        tag: 'Sensory Gate',
        priceUsd: 5999, // $59.99 USD
      },
      {
        id: 'spandex-3-hole-hood',
        name: 'Spandex 3-Hole Hood',
        icon: <EyeOff className="text-amber-400" size={22} />,
        images: [
          '/Images/somatic-toolkit/spandex-3-hole-hood.jpg',
          '/Images/somatic-toolkit/spandex-3-hole-hood-2.jpg',
          '/Images/somatic-toolkit/spandex-3-hole-hood-3.jpg',
        ],
        description:
          'Calibrated containment with maintained access. The spandex architecture compresses the field of awareness without total blackout — a precise middle register between full exposure and complete enclosure, for those who need the containment of the mask without full sensory withdrawal.',
        tag: 'Sensory Gate',
        priceUsd: 4499, // $44.99 USD
      },
      {
        id: 'ouch-puppy-play-hood',
        name: 'Shots Ouch Puppy Play Hood',
        icon: <EyeOff className="text-amber-400" size={22} />,
        images: [
          '/Images/somatic-toolkit/ouch-puppy-play-hood.jpg',
          '/Images/somatic-toolkit/ouch-puppy-play-hood-2.jpg',
          '/Images/somatic-toolkit/ouch-puppy-play-hood-3.jpg',
          '/Images/somatic-toolkit/ouch-puppy-play-hood-4.jpg',
          '/Images/somatic-toolkit/ouch-puppy-play-hood-5.jpg',
        ],
        description:
          'Persona as somatic technology. By assuming the puppy architecture, the neurotype that has spent years code-switching is granted explicit permission to abandon the human performance register entirely. The hood externalizes the permission slip the nervous system has been waiting for.',
        tag: 'Persona Gate',
        priceUsd: 6499, // $64.99 USD
      },
    ],
  },
  {
    category: 'Category VII — The Somatic Toolkit: Impact, Edge & Everyday Friction',
    tagline: 'Shock the vagus nerve back online — precision-engineered tools for bottom-up nervous system regulation.',
    products: [
      {
        id: 'romantic-sting-crop',
        name: 'Sex Mischief Romantic Sting Crop',
        icon: <Zap className="text-amber-400" size={22} />,
        images: ['/Images/somatic-toolkit/romantic-sting-crop.jpg'],
        description:
          'The sharp shock of bottom-up regulation. You cannot always think your way out of a deep emotional freeze — sometimes you have to shock the vagus nerve back online. This crop provides a clean, sharp sensory marker that punctures the gray fog of anhedonia, replacing obsessive rumination with sudden, beautiful clarity.',
        tag: 'Impact',
        priceUsd: 2999, // $29.99 USD
      },
      {
        id: 'spartacus-donut-ring-blue',
        name: 'Spartacus Wide Silicone Donut Ring',
        icon: <Zap className="text-amber-400" size={22} />,
        images: [
          '/Images/somatic-toolkit/spartacus-donut-ring-blue.jpg',
          '/Images/somatic-toolkit/spartacus-donut-ring-blue-2.jpg',
          '/Images/somatic-toolkit/spartacus-donut-ring-blue-3.jpg',
        ],
        description:
          'The engine room of focus. Precision-engineered containment that tightens the steering wheel of physical arousal, grounding your energy exactly where it belongs — without the cognitive friction of cheap, uncalibrated alternatives.',
        tag: 'Precision',
        priceUsd: 2499, // $24.99 USD
      },
      {
        id: 'perfect-fit-ergoflo-director',
        name: 'Perfect Fit Ergoflo Director',
        icon: <Zap className="text-amber-400" size={22} />,
        images: ['/Images/somatic-toolkit/perfect-fit-ergoflo-director.jpg'],
        description:
          'Precision-engineered direction of somatic focus. Calibrated to eliminate the cognitive overhead of improvisation and deliver the kind of reliable, repeatable physical architecture that an interest-based nervous system can actually settle into.',
        tag: 'Precision',
        priceUsd: 4999, // $49.99 USD (updated from $74.99 — SKU EF-DIR-08)
      },
      {
        id: 'wood-rocket-passive-aggressive-pens',
        name: 'Wood Rocket Passive Aggressive Pens (3-Pack)',
        icon: <PenLine className="text-amber-400" size={22} />,
        images: ['/Images/somatic-toolkit/wood-rocket-passive-aggressive-pens.jpg'],
        description:
          'A playful nod to boardroom friction. For the days you are stuck staring at a corporate analytics report feeling Too Professional for the Protest. A tiny, high-contrast tool to externalize the frustration of low-stimulation bureaucracy before you head home to your real sanctuary.',
        tag: 'Everyday Friction',
        priceUsd: 1999, // $19.99 USD
      },
      {
        id: 'OW-BL-CLAMP',
        name: 'Open Wide Blackline Clamps',
        icon: <Zap className="text-amber-400" size={22} />,
        images: ['/Images/somatic-toolkit/spartacus-open-wide-clamps.jpg'],
        description:
          'Precision bite without the bureaucratic drag. Adjustable tension delivers a clean, sharp sensory signal that cuts through anhedonic fog — a calibrated interruption that pulls the overloaded processing system back into the body and out of the recursive loop.',
        tag: 'Impact',
        priceUsd: 2499, // $24.99 USD
      },

    ],
  },
];

export default function ShopPage() {
  const { addItem, itemCount, openCart, state, formatPrice, setCurrency } = useCart();
  const { currency } = state;
  // Track recently added items for visual feedback
  const [addedIds, setAddedIds] = React.useState<Set<string>>(new Set());

  function handleAddToCart(product: Product) {
    addItem({
      id: product.id,
      name: product.name,
      tag: product.tag,
      priceUsd: product.priceUsd,
    });
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
          {/* Currency toggle */}
          <div className="flex items-center text-xs rounded-full border border-emerald-700/50 overflow-hidden">
            <button
              onClick={() => setCurrency('USD')}
              className={`px-2.5 py-1 font-bold transition-all ${currency === 'USD' ? 'bg-amber-400 text-emerald-950' : 'text-amber-100/50 hover:text-amber-100'}`}
            >
              USD
            </button>
            <button
              onClick={() => setCurrency('CAD')}
              className={`px-2.5 py-1 font-bold transition-all ${currency === 'CAD' ? 'bg-amber-400 text-emerald-950' : 'text-amber-100/50 hover:text-amber-100'}`}
            >
              CAD
            </button>
          </div>
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
                    {/* Product images — carousel when multiple, single otherwise */}
                    {product.images && product.images.length > 0 && (
                      <ProductCarousel images={product.images} />
                    )}
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
                      {product.priceUsd === 0 ? (
                        <>
                          <p className="text-sm text-amber-100/40 italic">— Price loading from catalogue —</p>
                          <button
                            disabled
                            className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-full text-xs font-bold uppercase tracking-widest bg-emerald-900/30 border border-emerald-800/40 text-emerald-600/50 cursor-not-allowed"
                          >
                            <ShoppingCart size={13} /> Coming Soon
                          </button>
                        </>
                      ) : (
                        <>
                          <p className="text-base font-bold text-amber-300">{formatPrice(product.priceUsd)}</p>
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
                        </>
                      )}
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
