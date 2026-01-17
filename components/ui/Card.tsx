"use client";

import { cn } from "@/lib/utils/cn";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "glass";
  hover?: boolean;
}

function Card({ className, variant = "default", hover = false, children, ...props }: CardProps) {
  const variants = {
    default: "bg-[var(--bg-card)] border border-[var(--border-color)]",
    elevated: "bg-[var(--bg-card)] shadow-lg border border-[var(--border-color)]",
    glass: "glass",
  };

  return (
    <div
      className={cn(
        "rounded-2xl p-6",
        variants[variant],
        hover && "transition-all duration-300 hover:shadow-lg hover:border-[var(--border-accent)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mb-4", className)} {...props} />;
}

function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "text-xl font-semibold text-[var(--text-primary)]",
        className
      )}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-sm text-[var(--text-secondary)] mt-1", className)}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("", className)} {...props} />;
}

function CardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mt-4 pt-4 border-t border-[var(--border-color)]", className)}
      {...props}
    />
  );
}

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
