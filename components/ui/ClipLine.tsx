"use client";

import { motion } from "motion/react";
import { clipFromLeft } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface ClipLineProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "p" | "motion";
}

export function ClipLine({ children, className, delay = 0, as = "motion" }: ClipLineProps) {
  const Tag = as === "motion" ? motion.div : motion[as];

  return (
    <Tag
      variants={clipFromLeft}
      initial="hidden"
      animate="visible"
      transition={{ delay }}
      className={cn("overflow-hidden", className)}
    >
      {children}
    </Tag>
  );
}
