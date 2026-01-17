"use client";

import { cn } from "@/lib/utils/cn";
import { TIME_SLOTS } from "@/lib/utils/constants";
import { Sun, Moon } from "lucide-react";
import { TimeSlot } from "@/types/booking";

interface TimeSlotPickerProps {
  value: TimeSlot | "";
  onChange: (value: TimeSlot) => void;
  error?: string;
}

export function TimeSlotPicker({ value, onChange, error }: TimeSlotPickerProps) {
  const icons = {
    lunch: Sun,
    dinner: Moon,
  };

  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
        Preferred Time
      </label>

      <div className="grid grid-cols-2 gap-3">
        {TIME_SLOTS.map((slot) => {
          const Icon = icons[slot.id];
          const isSelected = value === slot.id;

          return (
            <button
              key={slot.id}
              type="button"
              onClick={() => onChange(slot.id as TimeSlot)}
              className={cn(
                "p-4 rounded-lg border transition-all duration-200 text-left",
                isSelected
                  ? "border-[var(--color-primary)] bg-[var(--color-primary)]/10"
                  : "border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[var(--border-accent)]",
                error && !isSelected && "border-[var(--color-accent)]/50"
              )}
            >
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center",
                    isSelected
                      ? "bg-[var(--color-primary)] text-[var(--bg-primary)]"
                      : "bg-[var(--bg-secondary)] text-[var(--text-secondary)]"
                  )}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <p
                    className={cn(
                      "font-medium",
                      isSelected ? "text-[var(--color-primary)]" : "text-[var(--text-primary)]"
                    )}
                  >
                    {slot.label}
                  </p>
                  <p className="text-xs text-[var(--text-muted)]">{slot.time}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {error && (
        <p className="mt-1.5 text-sm text-[var(--color-accent)]">{error}</p>
      )}
    </div>
  );
}
