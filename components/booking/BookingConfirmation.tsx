"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Booking } from "@/types/booking";
import { format } from "date-fns";
import { CheckCircle, Calendar, Clock, Users, Phone, Mail } from "lucide-react";

interface BookingConfirmationProps {
  booking: Booking;
  onNewBooking: () => void;
}

export function BookingConfirmation({ booking, onNewBooking }: BookingConfirmationProps) {
  const formattedDate = format(new Date(booking.booking_date), "EEEE, MMMM d, yyyy");
  const timeLabel = booking.time_slot === "lunch" ? "Lunch (12:00 PM - 3:00 PM)" : "Dinner (6:00 PM - 10:00 PM)";

  return (
    <div className="text-center animate-fade-in-up">
      {/* Success Icon */}
      <div className="w-20 h-20 rounded-full bg-green-900/30 border border-green-700 flex items-center justify-center mx-auto mb-6">
        <CheckCircle className="w-10 h-10 text-green-500" />
      </div>

      {/* Heading */}
      <h3
        className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-2"
        style={{ fontFamily: 'var(--font-playfair)' }}
      >
        Reservation Confirmed!
      </h3>
      <p className="text-[var(--text-secondary)] mb-8">
        Thank you for choosing Rembayung. We look forward to hosting you.
      </p>

      {/* Booking Details Card */}
      <Card variant="elevated" className="max-w-md mx-auto text-left mb-8">
        <div className="space-y-4">
          {/* Name */}
          <div className="pb-4 border-b border-[var(--border-color)]">
            <p className="text-sm text-[var(--text-muted)]">Reservation for</p>
            <p className="text-lg font-semibold text-[var(--text-primary)]">
              {booking.customer_name}
            </p>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-[var(--color-primary)] mt-0.5" />
              <div>
                <p className="text-xs text-[var(--text-muted)]">Date</p>
                <p className="text-sm text-[var(--text-primary)]">{formattedDate}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-[var(--color-primary)] mt-0.5" />
              <div>
                <p className="text-xs text-[var(--text-muted)]">Time</p>
                <p className="text-sm text-[var(--text-primary)] capitalize">{booking.time_slot}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Users className="w-5 h-5 text-[var(--color-primary)] mt-0.5" />
              <div>
                <p className="text-xs text-[var(--text-muted)]">Guests</p>
                <p className="text-sm text-[var(--text-primary)]">{booking.guest_count} people</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-[var(--color-primary)] mt-0.5" />
              <div>
                <p className="text-xs text-[var(--text-muted)]">Phone</p>
                <p className="text-sm text-[var(--text-primary)]">{booking.customer_phone}</p>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-3 pt-4 border-t border-[var(--border-color)]">
            <Mail className="w-5 h-5 text-[var(--color-primary)] mt-0.5" />
            <div>
              <p className="text-xs text-[var(--text-muted)]">Confirmation sent to</p>
              <p className="text-sm text-[var(--text-primary)]">{booking.customer_email}</p>
            </div>
          </div>

          {/* Special Requests */}
          {booking.special_requests && (
            <div className="pt-4 border-t border-[var(--border-color)]">
              <p className="text-xs text-[var(--text-muted)] mb-1">Special Requests</p>
              <p className="text-sm text-[var(--text-secondary)]">{booking.special_requests}</p>
            </div>
          )}
        </div>
      </Card>

      {/* Note */}
      <p className="text-sm text-[var(--text-muted)] mb-6">
        A confirmation email has been sent to your email address.
        Please arrive 10 minutes before your reservation time.
      </p>

      {/* Action */}
      <Button variant="secondary" onClick={onNewBooking}>
        Make Another Reservation
      </Button>
    </div>
  );
}
