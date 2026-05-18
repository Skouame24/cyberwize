"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";
import { softReveal, viewport } from "@/lib/motion";

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
};

export function Reveal({ delay = 0, className, children, ...props }: RevealProps) {
  return (
    <motion.div
      variants={softReveal(delay)}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
