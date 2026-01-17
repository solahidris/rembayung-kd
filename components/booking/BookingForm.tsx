"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { DatePicker } from "./DatePicker";
import { TimeSlotPicker } from "./TimeSlotPicker";
import { GuestCounter } from "./GuestCounter";
import { BookingConfirmation } from "./BookingConfirmation";
import { Booking, BookingFormData, TimeSlot } from "@/types/booking";
import { GUEST_LIMITS } from "@/lib/utils/constants";

interface FormErrors {
  booking_date?: string;
  time_slot?: string;
  guest_count?: string;
  customer_name?: string;
  customer_phone?: string;
  customer_email?: string;
}

export function BookingForm() {
  const [formData, setFormData] = useState<BookingFormData>({
    booking_date: "",
    time_slot: "" as TimeSlot,
    guest_count: 2,
    customer_name: "",
    customer_phone: "",
    customer_email: "",
    special_requests: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState<Booking | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.booking_date) {
      newErrors.booking_date = "Please select a date";
    }

    if (!formData.time_slot) {
      newErrors.time_slot = "Please select a time slot";
    }

    if (formData.guest_count < GUEST_LIMITS.min || formData.guest_count > GUEST_LIMITS.max) {
      newErrors.guest_count = `Guests must be between ${GUEST_LIMITS.min} and ${GUEST_LIMITS.max}`;
    }

    if (!formData.customer_name.trim()) {
      newErrors.customer_name = "Name is required";
    }

    if (!formData.customer_phone.trim()) {
      newErrors.customer_phone = "Phone number is required";
    } else if (!/^[\d\s+\-()]+$/.test(formData.customer_phone)) {
      newErrors.customer_phone = "Please enter a valid phone number";
    }

    if (!formData.customer_email.trim()) {
      newErrors.customer_email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.customer_email)) {
      newErrors.customer_email = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setConfirmedBooking(result.data);
      } else {
        setSubmitError(result.error || "Failed to create booking. Please try again.");
      }
    } catch (error) {
      setSubmitError("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNewBooking = () => {
    setConfirmedBooking(null);
    setFormData({
      booking_date: "",
      time_slot: "" as TimeSlot,
      guest_count: 2,
      customer_name: "",
      customer_phone: "",
      customer_email: "",
      special_requests: "",
    });
    setErrors({});
  };

  // Show confirmation if booking was successful
  if (confirmedBooking) {
    return (
      <BookingConfirmation
        booking={confirmedBooking}
        onNewBooking={handleNewBooking}
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Date and Time */}
      <div className="grid sm:grid-cols-2 gap-6">
        <DatePicker
          value={formData.booking_date}
          onChange={(value) => {
            setFormData({ ...formData, booking_date: value });
            if (errors.booking_date) setErrors({ ...errors, booking_date: undefined });
          }}
          error={errors.booking_date}
        />
        <GuestCounter
          value={formData.guest_count}
          onChange={(value) => {
            setFormData({ ...formData, guest_count: value });
            if (errors.guest_count) setErrors({ ...errors, guest_count: undefined });
          }}
          error={errors.guest_count}
        />
      </div>

      {/* Time Slot */}
      <TimeSlotPicker
        value={formData.time_slot}
        onChange={(value) => {
          setFormData({ ...formData, time_slot: value });
          if (errors.time_slot) setErrors({ ...errors, time_slot: undefined });
        }}
        error={errors.time_slot}
      />

      {/* Contact Details */}
      <div className="pt-4 border-t border-[var(--border-color)]">
        <p className="text-sm font-medium text-[var(--text-primary)] mb-4">
          Contact Details
        </p>
        <div className="space-y-4">
          <Input
            label="Full Name"
            placeholder="e.g., Ahmad bin Ibrahim"
            value={formData.customer_name}
            onChange={(e) => {
              setFormData({ ...formData, customer_name: e.target.value });
              if (errors.customer_name) setErrors({ ...errors, customer_name: undefined });
            }}
            error={errors.customer_name}
          />

          <div className="grid sm:grid-cols-2 gap-4">
            <Input
              label="Phone Number"
              type="tel"
              placeholder="+60 12-345 6789"
              value={formData.customer_phone}
              onChange={(e) => {
                setFormData({ ...formData, customer_phone: e.target.value });
                if (errors.customer_phone) setErrors({ ...errors, customer_phone: undefined });
              }}
              error={errors.customer_phone}
            />
            <Input
              label="Email Address"
              type="email"
              placeholder="your@email.com"
              value={formData.customer_email}
              onChange={(e) => {
                setFormData({ ...formData, customer_email: e.target.value });
                if (errors.customer_email) setErrors({ ...errors, customer_email: undefined });
              }}
              error={errors.customer_email}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
              Special Requests (Optional)
            </label>
            <textarea
              placeholder="Any dietary requirements, allergies, or special occasions?"
              value={formData.special_requests || ""}
              onChange={(e) => setFormData({ ...formData, special_requests: e.target.value })}
              rows={3}
              className="w-full px-4 py-3 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all duration-200 resize-none"
            />
          </div>
        </div>
      </div>

      {/* Error Message */}
      {submitError && (
        <div className="p-4 rounded-lg bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/30">
          <p className="text-sm text-[var(--color-accent)]">{submitError}</p>
        </div>
      )}

      {/* Submit Button */}
      <Button type="submit" className="w-full" size="lg" isLoading={isSubmitting}>
        {isSubmitting ? "Confirming..." : "Confirm Reservation"}
      </Button>

      {/* Note */}
      <p className="text-center text-xs text-[var(--text-muted)]">
        By making a reservation, you agree to our cancellation policy.
        Please arrive 10 minutes before your reservation time.
      </p>
    </form>
  );
}
