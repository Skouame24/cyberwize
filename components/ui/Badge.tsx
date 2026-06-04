"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "cyan" | "green" | "purple" | "red" | "default";
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, children, variant = "default", ...props }, ref) => {
    const variants = {
      default: "bg-cyber-muted/20 text-cyber-gray border-cyber-muted/30",
      cyan: "bg-cyber-cyan/10 text-cyber-cyan border-cyber-cyan/30",
      green: "bg-cyber-green/10 text-cyber-green border-cyber-green/30",
      purple: "bg-cyber-purple/10 text-cyber-purple border-cyber-purple/30",
      red: "bg-cyber-red/10 text-cyber-red border-cyber-red/30",
    };

    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-none border px-3 py-1 text-xs font-medium uppercase tracking-wider",
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);
Badge.displayName = "Badge";
