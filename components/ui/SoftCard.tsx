"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { spring } from "@/lib/motion";

interface SoftCardProps {
  children: React.ReactNode;
  className?: string;
  accent?: boolean;
}

export function SoftCard({ children, className, accent }: SoftCardProps) {
  return (
    <motion.div
      className={cn(
        "group relative overflow-hidden rounded-[1.25rem] bg-white p-7 lg:p-8",
        "border border-[#ebe8e4] shadow-[0_2px_0_#f5f2ee,0_12px_40px_-20px_rgba(149,74,0,0.12)]",
        accent && "md:col-span-2 md:row-span-2",
        className
      )}
      whileHover={{
        y: -6,
        boxShadow: "0 4px 0 #f5f2ee, 0 28px 56px -16px rgba(255, 92, 0, 0.18)",
        transition: spring.pop,
      }}
    >
      <span
        className="absolute bottom-0 left-0 h-[3px] w-0 bg-primary transition-[width] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full"
        aria-hidden
      />
      <span
        className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/[0.06] blur-2xl transition-transform duration-700 group-hover:scale-150"
        aria-hidden
      />
      <div className="relative">{children}</div>
    </motion.div>
  );
}
