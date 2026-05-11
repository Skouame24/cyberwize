"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { springs } from "@/lib/animations";

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

  const container = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: { 
        staggerChildren: 0.05, 
        delayChildren: delay + i * 0.1,
      },
    }),
  };

  const child = {
    hidden: {
      opacity: 0,
      y: "100%",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1], // Custom smooth ease
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
