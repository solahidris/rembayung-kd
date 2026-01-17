"use client";

import { Button } from "@/components/ui/Button";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1920&h=1080&fit=crop')`,
          }}
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)]/80 via-[var(--bg-primary)]/50 to-[var(--bg-primary)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-primary)]/60 to-transparent" />
      </div>

      {/* Grain Overlay */}
      <div className="absolute inset-0 grain-overlay pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Tagline */}
        <p className="text-[var(--color-primary)] text-sm sm:text-base uppercase tracking-[0.3em] mb-6 animate-fade-in-up">
          Khairul Aming's First Restaurant
        </p>

        {/* Main Heading */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[var(--text-primary)] mb-6 animate-fade-in-up"
          style={{ fontFamily: 'var(--font-playfair)', animationDelay: '0.1s' }}
        >
          Rasa Kampung,
          <br />
          <span className="text-[var(--color-primary)]">Sentuhan Moden</span>
        </h1>

        {/* Subheading */}
        <p
          className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-10 animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          Experience authentic Malay kampung cuisine crafted with love and tradition.
          Every dish tells a story of heritage, passed down through generations.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
          style={{ animationDelay: '0.3s' }}
        >
          <Button size="lg" href="#booking">
            Book Your Table
          </Button>
          <Button variant="secondary" size="lg" href="#menu">
            View Menu
          </Button>
        </div>

        {/* Stats */}
        <div
          className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          <div className="text-center">
            <p className="text-3xl font-bold text-[var(--color-primary)]">250</p>
            <p className="text-sm text-[var(--text-muted)]">Seats</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-[var(--color-primary)]">50+</p>
            <p className="text-sm text-[var(--text-muted)]">Dishes</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-[var(--color-primary)]">2026</p>
            <p className="text-sm text-[var(--text-muted)]">Est.</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Link
          href="#about"
          className="flex flex-col items-center text-[var(--text-muted)] hover:text-[var(--color-primary)] transition-colors"
        >
          <span className="text-xs uppercase tracking-wider mb-2">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
