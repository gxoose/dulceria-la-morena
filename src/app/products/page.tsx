"use client";

import { CssSparkles } from "@/components/ui/css-sparkles";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import Link from "next/link";

const categories = [
  {
    title: "Mazapán & Dulces de Leche",
    description:
      "The iconic peanut mazapán, glorias, borrachitos, and creamy dulce de leche confections that melt in your mouth.",
    items: ["Mazapán De La Rosa", "Glorias", "Borrachitos", "Jamoncillo", "Dulce de Leche"],
    gradient: "from-amber-900/30 via-morena-surface/50 to-morena-dark",
    accent: "text-amber-400",
  },
  {
    title: "Tamarindo & Chile",
    description:
      "Spicy, tangy, and absolutely addictive — tamarind pulp, lollipops, and chile-coated treats that define Mexican candy.",
    items: ["Pulparindo", "Lucas", "Pelón Pelo Rico", "Tamarind Lollipops", "Rockaleta"],
    gradient: "from-orange-900/30 via-morena-surface/50 to-morena-dark",
    accent: "text-orange-400",
  },
  {
    title: "Chamoy & Enchilados",
    description:
      "The beloved chamoy flavor in all its forms — sauces, candies, gummies, and the iconic chamoy-coated fruits.",
    items: ["Chamoy Sauce", "Skwinkles", "Miguelito", "Chamoy Gummies", "Cham-Hoy"],
    gradient: "from-rose-900/30 via-morena-surface/50 to-morena-dark",
    accent: "text-rose-400",
  },
  {
    title: "Chocolates & Cajeta",
    description:
      "Rich Mexican chocolate with cinnamon, cajeta caramels, and chocolate-covered treats made the traditional way.",
    items: ["Carlos V", "Ricolino", "Cajeta Quemada", "Chocolate Abuelita", "Obleas con Cajeta"],
    gradient: "from-yellow-900/30 via-morena-surface/50 to-morena-dark",
    accent: "text-yellow-500",
  },
  {
    title: "Obleas & Wafers",
    description:
      "Delicate wafer rounds filled with cajeta, covered in sprinkles, or layered with sweet cream — a timeless classic.",
    items: ["Obleas Grandes", "Mini Obleas", "Obleas con Cajeta", "Wafer Rolls", "Barquillos"],
    gradient: "from-stone-700/30 via-morena-surface/50 to-morena-dark",
    accent: "text-stone-300",
  },
  {
    title: "Piñatas & Party Supplies",
    description:
      "Traditional piñatas in every shape and size, plus complete party packages with balloons, decorations, and bulk candy.",
    items: ["Star Piñatas", "Character Piñatas", "Balloon Packages", "Party Decor", "Candy Mixes"],
    gradient: "from-red-900/30 via-morena-surface/50 to-morena-dark",
    accent: "text-red-400",
  },
  {
    title: "Snacks & Botanas",
    description:
      "Chicharrones, Japanese peanuts, chile-lime chips, and all the salty, crunchy Mexican snacks you love.",
    items: ["Chicharrones", "Cacahuates Japoneses", "Duros", "Churritos", "Takis"],
    gradient: "from-green-900/30 via-morena-surface/50 to-morena-dark",
    accent: "text-green-400",
  },
  {
    title: "Salsas & Chiles",
    description:
      "Hot sauces, chili powders, and condiments to spice up everything — from Tajín to Valentina and beyond.",
    items: ["Tajín", "Valentina", "Chamoy Mega", "Chile en Polvo", "Salsa Huichol"],
    gradient: "from-red-800/30 via-morena-surface/50 to-morena-dark",
    accent: "text-red-300",
  },
];

export default function ProductsPage() {
  return (
    <div className="bg-morena-dark">
      {/* ═══════════════════════════════════ HERO ═══════════════════════════════════ */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <CssSparkles particleColor="#C5A55A" particleCount={25} />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <p className="text-morena-gold font-body text-sm uppercase tracking-[0.3em] mb-4">
            Our Collection
          </p>
          <h1 className="font-heading text-5xl sm:text-7xl font-bold text-white mb-6">
            Dulces <span className="text-morena-gold">&</span> More
          </h1>
          <p className="text-neutral-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            From the classics you grew up with to rare finds you won&apos;t see
            anywhere else — explore our full collection of authentic Mexican
            candy and supplies.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════ CATEGORIES GRID ═══════════════════════════════ */}
      <section className="py-16 sm:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((category) => (
              <div
                key={category.title}
                className={`group relative rounded-2xl overflow-hidden border border-morena-surface hover:border-morena-gold/30 transition-all duration-300 bg-gradient-to-br ${category.gradient}`}
              >
                <div className="p-8 sm:p-10">
                  <h3
                    className={`font-heading text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:${category.accent} transition-colors duration-200`}
                  >
                    {category.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                    {category.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs px-3 py-1.5 rounded-full bg-morena-dark/60 text-neutral-300 border border-morena-surface/60"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ BULK / PARTY ═══════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-morena-surface/20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-morena-gold font-body text-sm uppercase tracking-[0.3em] mb-3">
            Celebrations
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6">
            Party Packages & Bulk Orders
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Planning a birthday, quinceañera, or fiesta? We offer complete party
            packages with piñatas, decorations, balloons, and bulk candy at
            wholesale prices. Let us help you make it unforgettable.
          </p>
          <Link href="/contact">
            <ShimmerButton
              shimmerColor="#C5A55A"
              background="rgba(139, 0, 0, 0.9)"
              className="text-white font-body text-base px-8 py-4"
            >
              Get in Touch for Bulk Orders
            </ShimmerButton>
          </Link>
        </div>
      </section>
    </div>
  );
}
