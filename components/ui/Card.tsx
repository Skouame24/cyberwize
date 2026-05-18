"use client";

import * as React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { mobbinCardHover } from "@/lib/animations";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hover?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, hover = false, ...props }, ref) => {
    const Comp = hover ? motion.div : "div";

    return (
      <Comp
        ref={ref as React.Ref<HTMLDivElement>}
        {...(hover ? { whileHover: mobbinCardHover } : {})}
        className={cn("glass-card p-6", className)}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
Card.displayName = "Card";
