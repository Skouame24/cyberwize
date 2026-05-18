"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";
import { softItem, softStagger, viewport } from "@/lib/motion";

type StaggerProps = HTMLMotionProps<"div"> & {
  as?: "div" | "ul";
};

export function Stagger({ as = "div", className, children, ...props }: StaggerProps) {
  const Tag = as === "ul" ? motion.ul : motion.div;

  return (
    <Tag
      variants={softStagger}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className={cn(className)}
      {...props}
    >
      {children}
    </Tag>
  );
}

type StaggerItemProps = HTMLMotionProps<"li"> & {
  as?: "li" | "div";
};

export function StaggerItem({ as = "li", className, children, ...props }: StaggerItemProps) {
  const Tag = as === "div" ? motion.div : motion.li;

  return (
    <Tag variants={softItem} className={cn(className)} {...props}>
      {children}
    </Tag>
  );
}
