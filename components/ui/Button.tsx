"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cyber-black";

    const variants = {
      primary:
        "bg-cyber-cyan text-cyber-black hover:bg-cyber-green hover:shadow-[0_0_20px_rgba(240,156,60,0.4)] focus:ring-cyber-cyan",
      secondary:
        "bg-cyber-green text-cyber-black hover:bg-cyber-cyan hover:shadow-[0_0_20px_rgba(216,108,36,0.4)] focus:ring-cyber-green",
      outline:
        "border border-cyber-cyan/50 text-cyber-cyan hover:bg-cyber-cyan/10 hover:shadow-[0_0_15px_rgba(240,156,60,0.2)] focus:ring-cyber-cyan",
      ghost:
        "text-cyber-gray hover:text-cyber-white hover:bg-cyber-surface focus:ring-cyber-gray",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
