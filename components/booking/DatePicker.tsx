"use client";

import { cn } from "@/lib/utils/cn";
import { Calendar } from "lucide-react";
import { format, addDays, isBefore, startOfDay, getDay } from "date-fns";

interface DatePickerProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export function DatePicker({ value, onChange, error }: DatePickerProps) {
  // Minimum date is tomorrow, maximum is 30 days from now
  const minDate = format(addDays(new Date(), 1), "yyyy-MM-dd");
  const maxDate = format(addDays(new Date(), 30), "yyyy-MM-dd");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value;
    // Check if it's a Monday (day 1)
    const dayOfWeek = getDay(new Date(selectedDate));
    if (dayOfWeek === 1) {
      // Show alert or handle Monday selection
      alert("We are closed on Mondays. Please select another day.");
      return;
    }
    onChange(selectedDate);
  };

  // Format display value
  const displayValue = value
    ? format(new Date(value), "EEEE, MMMM d, yyyy")
    : "";

  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
        Date
      </label>

      <div className="relative">
        <input
          type="date"
          value={value}
          onChange={handleChange}
          min={minDate}
          max={maxDate}
          className={cn(
            "w-full px-4 py-3 pl-12 rounded-lg appearance-none",
            "bg-[var(--bg-card)] border",
            "text-[var(--text-primary)]",
            "transition-all duration-200",
            "focus:outline-none focus:ring-1",
            error
              ? "border-[var(--color-accent)] focus:border-[var(--color-accent)] focus:ring-[var(--color-accent)]"
              : "border-[var(--border-color)] focus:border-[var(--color-primary)] focus:ring-[var(--color-primary)]",
            "[&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:cursor-pointer"
          )}
        />
        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--text-muted)] pointer-events-none" />
      </div>

      {displayValue && (
        <p className="mt-1.5 text-xs text-[var(--text-muted)]">{displayValue}</p>
      )}

      <p className="mt-1 text-xs text-[var(--text-muted)]">
        Reservations available up to 30 days in advance
      </p>

      {error && (
        <p className="mt-1.5 text-sm text-[var(--color-accent)]">{error}</p>
      )}
    </div>
  );
}
