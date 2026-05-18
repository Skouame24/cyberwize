"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";
import { fadeUp, staggerContainer } from "@/lib/animations";

type AnimatedSectionProps = HTMLMotionProps<"section"> & {
  stagger?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function AnimatedSection({
  stagger = false,
  className,
  children,
  ...props
}: AnimatedSectionProps) {
  return (
    <motion.section
      variants={stagger ? staggerContainer : fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15, margin: "-60px" }}
      className={cn("relative", className)}
      {...props}
    >
      {children}
    </motion.section>
  );
}
