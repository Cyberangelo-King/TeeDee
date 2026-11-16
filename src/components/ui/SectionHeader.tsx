import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeader({
  title,
  description,
  align = "left",
  theme = "light",
  className,
}: SectionHeaderProps) {
  const isCenter = align === "center";
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "flex flex-col gap-3 max-w-3xl",
        isCenter && "mx-auto items-center text-center",
        className
      )}
    >
      <h2
        className={cn(
          "font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl",
          isDark ? "text-white" : "text-td-graphite"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-base sm:text-lg leading-relaxed",
            isDark ? "text-slate-300" : "text-slate-600"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
