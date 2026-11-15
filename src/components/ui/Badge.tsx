import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "red" | "orange" | "dark" | "outline";
  dot?: boolean;
}

export function Badge({
  className,
  variant = "red",
  dot = true,
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    red: "bg-td-red/10 text-td-red border-td-red/20",
    orange: "bg-td-orange/10 text-td-orange border-td-orange/20",
    dark: "bg-td-graphite-card text-white border-white/10",
    outline: "bg-transparent text-td-graphite border-td-graphite/20",
  };

  const dotColors = {
    red: "bg-td-red",
    orange: "bg-td-orange",
    dark: "bg-td-red",
    outline: "bg-td-red",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn("h-1.5 w-1.5 rounded-full animate-pulse", dotColors[variant])}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}
