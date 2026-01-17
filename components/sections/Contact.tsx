"use client";

import { Card } from "@/components/ui/Card";
import { CONTACT_INFO } from "@/lib/utils/constants";
import { Phone, Mail, Instagram, Facebook, MessageCircle } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[var(--color-primary)] text-sm uppercase tracking-[0.2em] mb-4">
            Get in Touch
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-[var(--text-primary)] mb-6"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Contact Us
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            Have questions or special requests? We'd love to hear from you.
            Reach out through any of the channels below.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {/* Phone */}
          <a href={`tel:${CONTACT_INFO.phone}`}>
            <Card variant="elevated" hover className="text-center h-full">
              <div className="w-14 h-14 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-[var(--color-primary)]" />
              </div>
              <h3 className="font-semibold text-[var(--text-primary)] mb-1">Phone</h3>
              <p className="text-sm text-[var(--color-primary)]">{CONTACT_INFO.phone}</p>
            </Card>
          </a>

          {/* Email */}
          <a href={`mailto:${CONTACT_INFO.email}`}>
            <Card variant="elevated" hover className="text-center h-full">
              <div className="w-14 h-14 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-[var(--color-primary)]" />
              </div>
              <h3 className="font-semibold text-[var(--text-primary)] mb-1">Email</h3>
              <p className="text-sm text-[var(--color-primary)]">{CONTACT_INFO.email}</p>
            </Card>
          </a>

          {/* Instagram */}
          <a href={CONTACT_INFO.instagram} target="_blank" rel="noopener noreferrer">
            <Card variant="elevated" hover className="text-center h-full">
              <div className="w-14 h-14 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center mx-auto mb-4">
                <Instagram className="w-6 h-6 text-[var(--color-primary)]" />
              </div>
              <h3 className="font-semibold text-[var(--text-primary)] mb-1">Instagram</h3>
              <p className="text-sm text-[var(--color-primary)]">@rembayungmy</p>
            </Card>
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/60312345678`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card variant="elevated" hover className="text-center h-full">
              <div className="w-14 h-14 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-[var(--color-primary)]" />
              </div>
              <h3 className="font-semibold text-[var(--text-primary)] mb-1">WhatsApp</h3>
              <p className="text-sm text-[var(--color-primary)]">Quick Enquiries</p>
            </Card>
          </a>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <Card variant="glass" className="inline-block max-w-2xl mx-auto">
            <p className="text-[var(--text-secondary)] text-sm">
              <span className="text-[var(--color-primary)] font-medium">Pro Tip:</span>{" "}
              For reservations of 8 or more guests, please contact us directly via phone
              or WhatsApp for special arrangements and group menus.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
