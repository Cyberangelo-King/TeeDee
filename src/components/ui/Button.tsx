import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "whatsapp";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  href,
  external,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-display font-semibold transition-all duration-200 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none select-none";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3.5 text-base",
  };

  const variantStyles = {
    primary:
      "bg-td-red text-white hover:bg-td-red-hover shadow-sm focus-visible:outline-td-red",
    secondary:
      "bg-td-orange text-white hover:bg-td-orange-hover shadow-sm focus-visible:outline-td-orange",
    outline:
      "border border-td-graphite/20 text-td-graphite hover:bg-td-graphite/5 focus-visible:outline-td-graphite dark:border-white/20 dark:text-white dark:hover:bg-white/10",
    ghost:
      "text-td-graphite hover:bg-td-graphite/5 focus-visible:outline-td-graphite dark:text-white dark:hover:bg-white/10",
    whatsapp:
      "bg-[#25D366] text-white hover:bg-[#20BD5A] shadow-sm focus-visible:outline-[#25D366]",
  };

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
