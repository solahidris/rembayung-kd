"use client";

import Image from "next/image";
import { MENU_ITEMS } from "@/lib/utils/constants";
import { Card } from "@/components/ui/Card";

export function MenuPreview() {
  return (
    <section id="menu" className="py-24 bg-[var(--bg-primary)] relative">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-primary)]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--color-accent)]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[var(--color-primary)] text-sm uppercase tracking-[0.2em] mb-4">
            Taste of Heritage
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-[var(--text-primary)] mb-6"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Signature Dishes
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            Each dish is crafted with recipes passed down through generations,
            using the freshest local ingredients and traditional cooking methods.
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MENU_ITEMS.map((item, index) => (
            <Card
              key={item.id}
              variant="elevated"
              hover
              className="group p-0 overflow-hidden"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent opacity-60" />
                {/* Price Tag */}
                <div className="absolute top-4 right-4 bg-[var(--color-primary)] text-[var(--bg-primary)] text-sm font-medium px-3 py-1 rounded-full">
                  {item.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3
                  className="text-lg font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-primary)] transition-colors"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  {item.name}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] line-clamp-2">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-[var(--text-muted)] text-sm mt-12">
          Full menu available upon reservation. Seasonal specials rotate weekly.
        </p>
      </div>
    </section>
  );
}
