"use client";

import { Card } from "@/components/ui/Card";
import { BookingForm } from "@/components/booking/BookingForm";

export function BookingSection() {
  return (
    <section id="booking" className="py-24 bg-[var(--bg-primary)] relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-[var(--color-primary)]/5 to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-[var(--color-accent)]/5 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Info */}
          <div className="lg:sticky lg:top-24">
            <p className="text-[var(--color-primary)] text-sm uppercase tracking-[0.2em] mb-4">
              Reserve Your Table
            </p>
            <h2
              className="text-4xl sm:text-5xl font-bold text-[var(--text-primary)] mb-6"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Make a
              <br />
              Reservation
            </h2>
            <p className="text-[var(--text-secondary)] mb-8">
              Join us for an unforgettable dining experience. Reserve your table
              now and let us take you on a culinary journey through authentic
              Malay flavors.
            </p>

            {/* Info Points */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[var(--color-primary)]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[var(--color-primary)] text-xs font-bold">1</span>
                </div>
                <div>
                  <p className="text-[var(--text-primary)] font-medium">Reservation Only</p>
                  <p className="text-sm text-[var(--text-muted)]">
                    We operate on a reservation-only basis to ensure the best experience.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[var(--color-primary)]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[var(--color-primary)] text-xs font-bold">2</span>
                </div>
                <div>
                  <p className="text-[var(--text-primary)] font-medium">2-8 Guests</p>
                  <p className="text-sm text-[var(--text-muted)]">
                    For larger groups, please contact us directly for special arrangements.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[var(--color-primary)]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[var(--color-primary)] text-xs font-bold">3</span>
                </div>
                <div>
                  <p className="text-[var(--text-primary)] font-medium">Confirmation</p>
                  <p className="text-sm text-[var(--text-muted)]">
                    You'll receive a confirmation email within minutes of booking.
                  </p>
                </div>
              </div>
            </div>

            {/* Note */}
            <div className="mt-8 p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)]">
              <p className="text-sm text-[var(--text-secondary)]">
                <span className="text-[var(--color-primary)] font-medium">Note:</span>{" "}
                We are closed on Mondays. Reservations can be made up to 30 days in advance.
              </p>
            </div>
          </div>

          {/* Right Column - Form */}
          <Card variant="elevated" className="lg:p-8">
            <BookingForm />
          </Card>
        </div>
      </div>
    </section>
  );
}
