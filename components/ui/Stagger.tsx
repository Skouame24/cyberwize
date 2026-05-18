"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { softItem, softStagger, viewport } from "@/lib/motion";

const staggerMotionProps = {
  variants: softStagger,
  initial: "hidden" as const,
  whileInView: "visible" as const,
  viewport,
};

type StaggerProps = {
  as?: "div" | "ul";
  className?: string;
  children: React.ReactNode;
};

export function Stagger({ as = "div", className, children }: StaggerProps) {
  const classes = cn(className);

  if (as === "ul") {
    return (
      <motion.ul {...staggerMotionProps} className={classes}>
        {children}
      </motion.ul>
    );
  }

  return (
    <motion.div {...staggerMotionProps} className={classes}>
      {children}
    </motion.div>
  );
}

type StaggerItemProps = {
  as?: "li" | "div";
  className?: string;
  children: React.ReactNode;
};

export function StaggerItem({ as = "li", className, children }: StaggerItemProps) {
  const classes = cn(className);

  if (as === "div") {
    return (
      <motion.div variants={softItem} className={classes}>
        {children}
      </motion.div>
    );
  }

  return (
    <motion.li variants={softItem} className={classes}>
      {children}
    </motion.li>
  );
}
