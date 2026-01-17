"use client";

import { cn } from "@/lib/utils/cn";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "success" | "warning" | "danger" | "outline";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants = {
    default: "bg-[var(--bg-card)] text-[var(--text-secondary)] border border-[var(--border-color)]",
    success: "bg-green-900/50 text-green-400 border border-green-800",
    warning: "bg-yellow-900/50 text-yellow-400 border border-yellow-800",
    danger: "bg-red-900/50 text-red-400 border border-red-800",
    outline: "border border-[var(--color-primary)] text-[var(--color-primary)]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}

export { Badge };
