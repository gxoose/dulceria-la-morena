"use client";

import { ShimmerButton } from "@/components/ui/shimmer-button";
import { SparklesCore } from "@/components/ui/sparkles";
import { FeaturesSectionWithHoverEffects } from "@/components/blocks/feature-section-with-hover-effects";
import { TestimonialsSection } from "@/components/blocks/testimonials-with-marquee";
import Link from "next/link";

const testimonials = [
  {
    author: {
      name: "María G.",
      handle: "Verified Customer",
      avatar: "",
    },
    text: "This place reminds me of the dulcerías in Mexico. They have candy I haven't had since I was a child! A huge selection and the prices are very reasonable.",
  },
  {
    author: {
      name: "Carlos R.",
      handle: "Verified Customer",
      avatar: "",
    },
    text: "The best mazapán and tamarindo candies I've found. It's like stepping into a candy shop straight from Mexico. My kids love it!",
  },
  {
    author: {
      name: "Diana O.",
      handle: "Verified Customer",
      avatar: "",
    },
    text: "Excellent service, very well organized and affordable prices. They have everything you need for your party — it's a one stop store!",
  },
  {
    author: {
      name: "Jesús H.",
      handle: "Verified Customer",
      avatar: "",
    },
    text: "This place has A LOT of Mexican candy. Lots of options, piñatas, chips, and even piñata packages! Friendly people who help you find exactly what you need.",
  },
  {
    author: {
      name: "Christina T.",
      handle: "Verified Customer",
      avatar: "",
    },
    text: "They have a large selection of chamoy, beautiful home decorations, and imported snacks. A great place for piñatas and Mexican treats.",
  },
  {
    author: {
      name: "Aliza C.",
      handle: "Verified Customer",
      avatar: "",
    },
    text: "Found all I needed — lots and lots of choices. Bought everything to start making my own Tajín candies. Definitely recommend this place!",
  },
];

const featuredProducts = [
  {
    title: "Mazapán",
    description: "Classic peanut confection, crumbly and sweet",
    gradient: "from-amber-900/40 to-morena-dark",
  },
  {
    title: "Tamarindo",
    description: "Tangy tamarind candy in every form",
    gradient: "from-orange-900/40 to-morena-dark",
  },
  {
    title: "Cajeta",
    description: "Rich caramelized goat milk dulce",
    gradient: "from-yellow-900/40 to-morena-dark",
  },
  {
    title: "Obleas",
    description: "Thin wafers filled with cajeta and more",
    gradient: "from-red-900/40 to-morena-dark",
  },
  {
    title: "Chamoy",
    description: "Spicy, sweet, sour — the iconic Mexican flavor",
    gradient: "from-rose-900/40 to-morena-dark",
  },
  {
    title: "Chocolates",
    description: "Mexican chocolate with cinnamon and spice",
    gradient: "from-stone-800/40 to-morena-dark",
  },
];

export default function Home() {
  return (
    <div className="bg-morena-dark">
      {/* ═══════════════════════════════════ HERO ═══════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Video background — visible on md+, hidden on mobile */}
        <div className="absolute inset-0 z-0">
          <video
            className="hidden md:block w-full h-full object-cover object-center"
            autoPlay
            muted
            loop
            playsInline
            poster=""
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          {/* Static logo fallback for mobile */}
          <div className="md:hidden absolute inset-0 bg-morena-dark flex items-center justify-center">
            <span className="font-heading text-[8rem] font-bold text-morena-gold/15 select-none">LM</span>
          </div>
          {/* Light overlay — just enough to anchor text, not kill the video */}
          <div className="absolute inset-0 bg-gradient-to-b from-morena-dark/30 via-transparent to-morena-dark/80" />
        </div>

        {/* Sparkles overlay */}
        <div className="absolute inset-0 z-[1]">
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1.4}
            particleDensity={40}
            particleColor="#C5A55A"
            speed={1.5}
            className="w-full h-full"
          />
        </div>

        {/* Hero content — frosted glass panel behind text only */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="bg-black/55 backdrop-blur-md rounded-3xl border border-morena-gold/15 px-8 py-12 sm:px-14 sm:py-16 shadow-[0_8px_60px_rgba(0,0,0,0.5)]">
            <p className="text-morena-gold font-body text-sm uppercase tracking-[0.3em] mb-4">
              Authentic Mexican Candy
            </p>
            <h1 className="font-heading text-5xl sm:text-7xl lg:text-8xl font-bold text-white leading-[0.95] mb-6">
              Dulcería
              <br />
              <span className="text-morena-gold">La Morena</span>
            </h1>
            <p className="text-neutral-200 font-body text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              A family-owned heritage brand bringing you the finest traditional
              Mexican dulces — from mazapán to cajeta, tamarindo to chamoy.
              Taste the tradition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <ShimmerButton
                  shimmerColor="#C5A55A"
                  background="rgba(139, 0, 0, 0.9)"
                  className="text-white font-body text-base px-8 py-4"
                >
                  Explore Our Dulces
                </ShimmerButton>
              </Link>
              <Link href="/about">
                <button className="border border-morena-gold/30 text-morena-gold hover:bg-morena-gold/10 px-8 py-4 rounded-full font-body text-base transition-colors duration-200">
                  Our Story
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-morena-dark to-transparent z-[2]" />
      </section>

      {/* ═══════════════════════════════ FEATURED PRODUCTS ═══════════════════════════════ */}
      <section className="py-20 sm:py-28 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-morena-gold font-body text-sm uppercase tracking-[0.3em] mb-3">
              Our Selection
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white">
              Dulces Tradicionales
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product.title}
                className="group relative rounded-2xl overflow-hidden border border-morena-surface hover:border-morena-gold/30 transition-all duration-300"
              >
                <div
                  className={`bg-gradient-to-br ${product.gradient} p-8 sm:p-10 min-h-[200px] flex flex-col justify-end`}
                >
                  <h3 className="font-heading text-2xl font-bold text-white group-hover:text-morena-gold transition-colors duration-200">
                    {product.title}
                  </h3>
                  <p className="text-neutral-400 text-sm mt-2">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/products"
              className="text-morena-gold hover:text-morena-gold-light font-body text-sm uppercase tracking-wide transition-colors"
            >
              View All Products &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ WHY LA MORENA ═══════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-morena-surface/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-4">
            <p className="text-morena-gold font-body text-sm uppercase tracking-[0.3em] mb-3">
              Why Choose Us
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">
              More Than a Candy Shop
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Every candy tells a story. Every visit brings you closer to the
              heart of Mexican tradition.
            </p>
          </div>
          <FeaturesSectionWithHoverEffects />
        </div>
      </section>

      {/* ═══════════════════════════════ ABOUT PREVIEW ═══════════════════════════════ */}
      <section className="py-20 sm:py-28 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-morena-gold font-body text-sm uppercase tracking-[0.3em] mb-3">
              Our Heritage
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              A Tradition of
              <br />
              <span className="text-morena-gold">Sweet Memories</span>
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              Dulcería La Morena was born from a love of Mexican candy culture —
              the kind of sweets that transport you back to childhood, to
              mercados and fiestas, to the simple joy of unwrapping a mazapán
              with careful hands.
            </p>
            <p className="text-neutral-400 leading-relaxed mb-8">
              As a family-owned brand, we carry on the tradition of bringing
              authentic Mexican dulces to those who crave the real thing —
              traditional recipes, premium quality, and flavors that connect
              generations.
            </p>
            <Link
              href="/about"
              className="text-morena-gold hover:text-morena-gold-light font-body text-sm uppercase tracking-wide transition-colors"
            >
              Read Our Full Story &rarr;
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-morena-red/20 via-morena-surface to-morena-dark border border-morena-surface overflow-hidden flex items-center justify-center">
              <div className="text-center p-8">
                <span className="font-heading text-8xl text-morena-gold/20">
                  LM
                </span>
                <p className="text-neutral-500 text-xs mt-4 uppercase tracking-widest">
                  Photo placeholder
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ TESTIMONIALS ═══════════════════════════════ */}
      <section className="bg-morena-surface/20">
        <TestimonialsSection
          title="What Our Customers Say"
          description="Real reviews from people who love our dulces as much as we do."
          testimonials={testimonials}
        />
      </section>

      {/* ═══════════════════════════════ CTA ═══════════════════════════════ */}
      <section className="py-20 sm:py-28 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Taste
            <br />
            <span className="text-morena-gold">the Tradition?</span>
          </h2>
          <p className="text-neutral-400 mb-10 max-w-xl mx-auto">
            Visit us in store or get in touch — we&apos;d love to help you find
            the perfect dulces for any occasion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <ShimmerButton
                shimmerColor="#C5A55A"
                background="rgba(139, 0, 0, 0.9)"
                className="text-white font-body text-base px-8 py-4"
              >
                Contact Us
              </ShimmerButton>
            </Link>
            <Link href="/products">
              <button className="border border-morena-gold/30 text-morena-gold hover:bg-morena-gold/10 px-8 py-4 rounded-full font-body text-base transition-colors duration-200">
                Browse Products
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
