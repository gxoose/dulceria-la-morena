"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { CssSparkles } from "@/components/ui/css-sparkles";

const heritageStories = [
  {
    quote:
      "Dulcería La Morena started with a simple dream — to share the authentic candy of Mexico with everyone who craves a taste of home. Every mazapán, every tamarindo, every cajeta we carry connects us to the mercados and tienditas where these traditions began.",
    name: "Our Beginning",
    designation: "The Story of La Morena",
    src: "/placeholder-about-1.jpg",
  },
  {
    quote:
      "As a family-owned business, we pour our hearts into curating the finest Mexican dulces. We work directly with traditional candy makers to bring you recipes passed down through generations — the same flavors your abuela knew and loved.",
    name: "Family Tradition",
    designation: "Passed Down Through Generations",
    src: "/placeholder-about-2.jpg",
  },
  {
    quote:
      "From the spicy kick of chamoy to the sweet crumble of obleas, our shelves tell the story of Mexico's incredible candy culture. We believe every dulce carries a memory, and we're honored to be part of yours.",
    name: "Our Mission",
    designation: "Preserving Mexican Candy Culture",
    src: "/placeholder-about-3.jpg",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-morena-dark">
      {/* ═══════════════════════════════════ HERO ═══════════════════════════════════ */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <CssSparkles particleColor="#C5A55A" particleCount={25} />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <p className="text-morena-gold font-body text-sm uppercase tracking-[0.3em] mb-4">
            Our Story
          </p>
          <h1 className="font-heading text-5xl sm:text-7xl font-bold text-white mb-6">
            A Heritage of
            <br />
            <span className="text-morena-gold">Sweet Tradition</span>
          </h1>
          <p className="text-neutral-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Dulcería La Morena is more than a candy shop — it&apos;s a bridge
            between generations, a celebration of Mexican candy culture, and a
            family&apos;s love letter to tradition.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════ STORY SECTIONS ═══════════════════════════════ */}
      <section className="py-20 sm:py-28 px-4">
        <div className="max-w-6xl mx-auto space-y-24">
          {/* Block 1 — Origins */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-morena-gold font-body text-sm uppercase tracking-[0.3em] mb-3">
                Where It All Began
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-6">
                Born From Nostalgia
              </h2>
              <p className="text-neutral-300 leading-relaxed mb-4">
                Every Mexican knows the joy of a dulcería — the colorful walls
                lined with tamarindo, the glass jars of chamoy-coated fruits,
                the mazapán wrapped in cellophane that crumbles perfectly with
                every bite. Dulcería La Morena was created to preserve that
                magic.
              </p>
              <p className="text-neutral-400 leading-relaxed">
                What started as a family passion for authentic Mexican sweets
                grew into a brand dedicated to bringing the real flavors of
                Mexico to candy lovers everywhere. No shortcuts, no imitations —
                just the genuine dulces we grew up with.
              </p>
            </div>
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-morena-red/20 via-morena-surface to-morena-dark border border-morena-surface flex items-center justify-center">
              <div className="text-center p-8">
                <span className="font-heading text-6xl text-morena-gold/20">
                  Est.
                </span>
                <p className="text-neutral-500 text-xs mt-2 uppercase tracking-widest">
                  Photo placeholder
                </p>
              </div>
            </div>
          </div>

          {/* Block 2 — Tradition */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 aspect-[4/3] rounded-3xl bg-gradient-to-br from-morena-gold/10 via-morena-surface to-morena-dark border border-morena-surface flex items-center justify-center">
              <div className="text-center p-8">
                <span className="font-heading text-6xl text-morena-gold/20">
                  Dulces
                </span>
                <p className="text-neutral-500 text-xs mt-2 uppercase tracking-widest">
                  Photo placeholder
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <p className="text-morena-gold font-body text-sm uppercase tracking-[0.3em] mb-3">
                Our Promise
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-6">
                Authentic, Always
              </h2>
              <p className="text-neutral-300 leading-relaxed mb-4">
                We work with traditional candy makers across Mexico to source
                dulces made the way they&apos;ve always been made — with real
                ingredients, time-honored recipes, and the care that mass
                production can never replicate.
              </p>
              <p className="text-neutral-400 leading-relaxed">
                From the cajeta of Celaya to the obleas of Puebla, every product
                on our shelves has a story. We know where it comes from, who
                makes it, and why it tastes the way it does. That&apos;s the La
                Morena difference.
              </p>
            </div>
          </div>

          {/* Block 3 — Family */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-morena-gold font-body text-sm uppercase tracking-[0.3em] mb-3">
                Family First
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-6">
                More Than Business
              </h2>
              <p className="text-neutral-300 leading-relaxed mb-4">
                La Morena is family-owned and always will be. When you walk
                through our doors, you&apos;re not just a customer — you&apos;re
                part of the family. We treat every visitor the way we&apos;d
                treat a guest in our home: with warmth, generosity, and a
                handful of free samples.
              </p>
              <p className="text-neutral-400 leading-relaxed">
                Our team knows every candy on the shelf. Need help building a
                piñata package for a quinceañera? Looking for that specific
                tamarindo candy from your childhood? We&apos;ll find it for you
                — or we&apos;ll find out where to get it.
              </p>
            </div>
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-morena-red/10 via-morena-surface to-morena-dark border border-morena-surface flex items-center justify-center">
              <div className="text-center p-8">
                <span className="font-heading text-6xl text-morena-gold/20">
                  Familia
                </span>
                <p className="text-neutral-500 text-xs mt-2 uppercase tracking-widest">
                  Photo placeholder
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ ANIMATED TESTIMONIALS ═══════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-morena-surface/20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-morena-gold font-body text-sm uppercase tracking-[0.3em] mb-3">
              Our Journey
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white">
              The Heart of La Morena
            </h2>
          </div>
          <AnimatedTestimonials testimonials={heritageStories} autoplay />
        </div>
      </section>

      {/* ═══════════════════════════════ VALUES ═══════════════════════════════ */}
      <section className="py-20 sm:py-28 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-morena-gold font-body text-sm uppercase tracking-[0.3em] mb-3">
              What We Stand For
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white">
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                title: "Authenticity",
                description:
                  "Every dulce we carry is the real thing — sourced from traditional Mexican candy makers using time-honored recipes.",
              },
              {
                title: "Family",
                description:
                  "We're family-owned, family-run, and we treat every customer like part of the familia. That will never change.",
              },
              {
                title: "Tradition",
                description:
                  "Mexican candy culture is a living tradition. We honor it by preserving the flavors and methods that make it special.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="p-8 rounded-2xl border border-morena-surface bg-morena-surface/20 hover:border-morena-gold/20 transition-colors duration-300"
              >
                <h3 className="font-heading text-xl font-bold text-morena-gold mb-3">
                  {value.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
