"use client";

import * as React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { mobbinCardHover } from "@/lib/animations";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hover?: boolean;
  glow?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, hover = false, glow: _glow, ...props }, ref) => {
    const classes = cn("glass-card p-6", className);

    if (hover) {
      return (
        <motion.div
          ref={ref}
          whileHover={mobbinCardHover}
          className={classes}
        >
          {children}
        </motion.div>
      );
    }

    return (
      <div ref={ref} className={classes} {...props}>
        {children}
      </div>
    );
  }
);
Card.displayName = "Card";
