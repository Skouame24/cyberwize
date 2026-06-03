"use client";

import { motion } from "motion/react";
import React from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: React.ReactNode[];
  direction?: "left" | "right";
  speed?: number;
  pauseOnHover?: boolean;
  itemClassName?: string;
}

export function Marquee({
  items,
  direction = "left",
  speed = 40,
  pauseOnHover = true,
  itemClassName,
}: MarqueeProps) {
  const defaultItemClass = "grayscale opacity-40 hover:grayscale-0 hover:opacity-100";
  const finalItemClass = itemClassName !== undefined ? itemClassName : defaultItemClass;

  return (
    <div className="relative flex overflow-hidden group">
      <motion.div
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
        className="flex flex-nowrap shrink-0 items-center gap-16 py-4"
        style={{ width: "fit-content" }}
      >
        {/* First set of items */}
        {items.map((item, idx) => (
          <div
            key={`marquee-1-${idx}`}
            className={cn(
              "flex-shrink-0 transition-all duration-500 cursor-default",
              finalItemClass
            )}
          >
            {item}
          </div>
        ))}
        {/* Duplicate set for infinite effect */}
        {items.map((item, idx) => (
          <div
            key={`marquee-2-${idx}`}
            className={cn(
              "flex-shrink-0 transition-all duration-500 cursor-default",
              finalItemClass
            )}
          >
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

