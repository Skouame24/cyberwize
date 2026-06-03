"use client";

import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

type SectionHeaderProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
  theme?: "light" | "dark";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  theme = "light",
}: SectionHeaderProps) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2 className={cn(
        "mt-3 font-serif text-[1.75rem] leading-tight md:text-[2.25rem]",
        theme === "dark" ? "text-white" : "text-ink"
      )}>
        {title}
      </h2>
      {description && (
        <p className={cn(
          "mt-4 text-[15px] leading-relaxed md:text-base",
          theme === "dark" ? "text-white/70" : "text-muted"
        )}>{description}</p>
      )}
    </Reveal>
  );
}
