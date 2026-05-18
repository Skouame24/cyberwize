"use client";

import { motion, useInView, Variants } from "motion/react";
import { useRef } from "react";
import { easeNotion } from "@/lib/animations";

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  delay?: number;
  tag?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

export function AnimatedText({
  text,
  className = "",
  once = true,
  delay = 0,
  tag = "span",
}: AnimatedTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-50px" });

  const words = text.split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: delay + i * 0.03,
      },
    }),
  };

  const child: Variants = {
    hidden: {
      opacity: 0,
      y: 4,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.38,
        ease: easeNotion,
      },
    },
  };

  const Tag = motion[tag] as typeof motion.span;

  return (
    <Tag
      ref={ref}
      className={`inline-flex flex-wrap overflow-hidden py-1 ${className}`}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {words.map((word, index) => (
        <span key={index} className="overflow-hidden mr-[0.25em] inline-block">
          <motion.span
            variants={child}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
