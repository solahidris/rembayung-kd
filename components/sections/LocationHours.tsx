"use client";

import { Card } from "@/components/ui/Card";
import { CONTACT_INFO, OPERATING_HOURS } from "@/lib/utils/constants";
import { MapPin, Clock, Phone, Car } from "lucide-react";

export function LocationHours() {
  return (
    <section id="location" className="py-24 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[var(--color-primary)] text-sm uppercase tracking-[0.2em] mb-4">
            Find Us
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-[var(--text-primary)] mb-6"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Location & Hours
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            Nestled in the heart of Kampung Baru, we're easily accessible from anywhere in KL.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map */}
          <div className="lg:col-span-2 relative rounded-2xl overflow-hidden aspect-[16/10] lg:aspect-auto lg:min-h-[400px]">
            {/* Placeholder Map with Styled Background */}
            <div className="absolute inset-0 bg-[var(--bg-secondary)]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.7675901686973!2d101.70185307426076!3d3.1571359968001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc37d3a42c4be1%3A0xea495b17e9f33c6a!2sKampung%20Baru%2C%20Kuala%20Lumpur%2C%20Federal%20Territory%20of%20Kuala%20Lumpur!5e0!3m2!1sen!2smy!4v1704067200000!5m2!1sen!2smy"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Rembayung Location"
              />
            </div>
            {/* Map Overlay Pin */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <div className="relative">
                <div className="w-12 h-12 bg-[var(--color-primary)] rounded-full flex items-center justify-center shadow-lg">
                  <MapPin className="w-6 h-6 text-[var(--bg-primary)]" />
                </div>
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-4 bg-[var(--color-primary)] rotate-45 -z-10" />
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="space-y-6">
            {/* Address */}
            <Card variant="elevated">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--text-primary)] mb-1">Address</h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    {CONTACT_INFO.address}
                  </p>
                </div>
              </div>
            </Card>

            {/* Hours */}
            <Card variant="elevated">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--text-primary)] mb-2">Opening Hours</h3>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between text-[var(--text-secondary)]">
                      <span>Lunch</span>
                      <span>12:00 PM - 3:00 PM</span>
                    </div>
                    <div className="flex justify-between text-[var(--text-secondary)]">
                      <span>Dinner</span>
                      <span>6:00 PM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between text-[var(--color-accent)] font-medium pt-1">
                      <span>Monday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Contact */}
            <Card variant="elevated">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--text-primary)] mb-1">Reservations</h3>
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="text-sm text-[var(--color-primary)] hover:underline"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                  <p className="text-xs text-[var(--text-muted)] mt-1">
                    Reservation only. Walk-ins subject to availability.
                  </p>
                </div>
              </div>
            </Card>

            {/* Parking */}
            <Card variant="elevated">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0">
                  <Car className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--text-primary)] mb-1">Parking</h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Complimentary valet parking available for dinner service.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
