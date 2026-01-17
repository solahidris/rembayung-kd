"use client";

import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-24 bg-[var(--bg-secondary)] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[var(--color-primary)]/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&h=1000&fit=crop"
                alt="Khairul Aming"
                fill
                className="object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/50 to-transparent" />
            </div>
            {/* Decorative Frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[var(--color-primary)]/30 rounded-2xl -z-10" />
            {/* Quote Card */}
            <div className="absolute -bottom-6 -left-6 sm:left-6 bg-[var(--bg-card)] backdrop-blur-md border border-[var(--border-color)] rounded-xl p-4 sm:p-6 max-w-[280px]">
              <p className="text-[var(--color-primary)] text-3xl mb-2">"</p>
              <p className="text-[var(--text-secondary)] text-sm italic">
                Cooking is not just about food. It's about preserving our heritage, one dish at a time.
              </p>
              <p className="text-[var(--text-primary)] text-sm font-medium mt-3">
                — Khairul Aming
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <p className="text-[var(--color-primary)] text-sm uppercase tracking-[0.2em] mb-4">
              Our Story
            </p>
            <h2
              className="text-4xl sm:text-5xl font-bold text-[var(--text-primary)] mb-6 gold-underline"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              From Viral Sambal
              <br />
              to Dream Restaurant
            </h2>

            <div className="space-y-6 text-[var(--text-secondary)]">
              <p>
                What started as a passion for authentic Malay cooking shared through social media
                has blossomed into Rembayung — a RM4 million investment in bringing kampung
                flavors to the heart of Kuala Lumpur.
              </p>
              <p>
                Named after the Malay word for the magical twilight glow, Rembayung captures
                that fleeting moment when everything feels just right. It's the warmth of
                coming home, the comfort of familiar flavors, and the joy of sharing a meal
                with loved ones.
              </p>
              <p>
                Every recipe at Rembayung is a tribute to the kitchens of our mothers and
                grandmothers — traditional techniques honored, yet refined for the modern palate.
                We source locally, cook with heart, and serve with pride.
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="border-l-2 border-[var(--color-primary)] pl-4">
                <p className="text-2xl font-bold text-[var(--text-primary)]">RM4M</p>
                <p className="text-sm text-[var(--text-muted)]">Investment</p>
              </div>
              <div className="border-l-2 border-[var(--color-primary)] pl-4">
                <p className="text-2xl font-bold text-[var(--text-primary)]">Kampung Baru</p>
                <p className="text-sm text-[var(--text-muted)]">Location</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
