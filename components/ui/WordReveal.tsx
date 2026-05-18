"use client";

import { motion } from "motion/react";
import { wordContainer, wordReveal } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface WordRevealProps {
  text: string;
  className?: string;
  highlightFrom?: number;
  highlightClassName?: string;
  as?: "h1" | "h2" | "h3";
}

export function WordReveal({
  text,
  className,
  highlightFrom,
  highlightClassName = "text-primary",
  as: Tag = "h1",
}: WordRevealProps) {
  const words = text.split(" ");
  const MotionTag = motion[Tag];

  return (
    <MotionTag
      variants={wordContainer}
      initial="hidden"
      animate="visible"
      className={cn("flex flex-wrap gap-x-[0.28em] gap-y-1", className)}
    >
      {words.map((word, i) => {
        const isHighlight = highlightFrom !== undefined && i >= highlightFrom;
        return (
          <span key={`${word}-${i}`} className="overflow-hidden inline-block">
            <motion.span
              variants={wordReveal}
              className={cn("inline-block", isHighlight && highlightClassName)}
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </MotionTag>
  );
}
