"use client";

import { useState } from "react";
import Image from "next/image";
import { GALLERY_IMAGES } from "@/lib/utils/constants";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils/cn";

export function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? GALLERY_IMAGES.length - 1 : selectedIndex - 1);
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === GALLERY_IMAGES.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[var(--color-primary)] text-sm uppercase tracking-[0.2em] mb-4">
            Visual Journey
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-[var(--text-primary)] mb-6"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Gallery
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            A glimpse into the Rembayung experience — from our carefully curated
            interiors to the artful presentation of each dish.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {GALLERY_IMAGES.map((image, index) => (
            <button
              key={image.id}
              onClick={() => openLightbox(index)}
              className={cn(
                "relative aspect-square rounded-xl overflow-hidden group cursor-pointer",
                index === 0 && "md:col-span-2 md:row-span-2",
                index === 5 && "md:col-span-2"
              )}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[var(--bg-primary)]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-[var(--text-primary)] text-sm font-medium">View</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 bg-[var(--bg-primary)]/95 backdrop-blur-md flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors z-10"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 sm:left-8 p-3 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--color-primary)] transition-all z-10"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="absolute right-4 sm:right-8 p-3 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--color-primary)] transition-all z-10"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image */}
          <div className="relative max-w-5xl max-h-[80vh] mx-4 aspect-video">
            <Image
              src={GALLERY_IMAGES[selectedIndex].src}
              alt={GALLERY_IMAGES[selectedIndex].alt}
              fill
              className="object-contain"
            />
          </div>

          {/* Caption */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
            <p className="text-[var(--text-primary)] text-sm">
              {GALLERY_IMAGES[selectedIndex].alt}
            </p>
            <p className="text-[var(--text-muted)] text-xs mt-1">
              {selectedIndex + 1} / {GALLERY_IMAGES.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
