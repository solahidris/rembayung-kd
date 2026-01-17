"use client";

import { cn } from "@/lib/utils/cn";
import { Minus, Plus, Users } from "lucide-react";
import { GUEST_LIMITS } from "@/lib/utils/constants";

interface GuestCounterProps {
  value: number;
  onChange: (value: number) => void;
  error?: string;
}

export function GuestCounter({ value, onChange, error }: GuestCounterProps) {
  const decrement = () => {
    if (value > GUEST_LIMITS.min) {
      onChange(value - 1);
    }
  };

  const increment = () => {
    if (value < GUEST_LIMITS.max) {
      onChange(value + 1);
    }
  };

  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
        Number of Guests
      </label>

      <div
        className={cn(
          "flex items-center justify-between p-3 rounded-lg",
          "bg-[var(--bg-card)] border",
          error ? "border-[var(--color-accent)]" : "border-[var(--border-color)]"
        )}
      >
        <div className="flex items-center gap-2 text-[var(--text-secondary)]">
          <Users className="w-5 h-5" />
          <span className="text-sm">Guests</span>
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={decrement}
            disabled={value <= GUEST_LIMITS.min}
            className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center transition-all",
              "border border-[var(--border-color)]",
              value <= GUEST_LIMITS.min
                ? "opacity-50 cursor-not-allowed"
                : "hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
            )}
            aria-label="Decrease guests"
          >
            <Minus className="w-4 h-4" />
          </button>

          <span className="text-2xl font-semibold text-[var(--text-primary)] w-8 text-center">
            {value}
          </span>

          <button
            type="button"
            onClick={increment}
            disabled={value >= GUEST_LIMITS.max}
            className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center transition-all",
              "border border-[var(--border-color)]",
              value >= GUEST_LIMITS.max
                ? "opacity-50 cursor-not-allowed"
                : "hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
            )}
            aria-label="Increase guests"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      <p className="mt-1.5 text-xs text-[var(--text-muted)]">
        {GUEST_LIMITS.min}-{GUEST_LIMITS.max} guests per reservation
      </p>

      {error && (
        <p className="mt-1.5 text-sm text-[var(--color-accent)]">{error}</p>
      )}
    </div>
  );
}
