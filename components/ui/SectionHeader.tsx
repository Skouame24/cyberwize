"use client";

import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

type SectionHeaderProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
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
      <h2 className="mt-3 font-serif text-[1.75rem] leading-tight text-ink md:text-[2.25rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[15px] leading-relaxed text-muted md:text-base">{description}</p>
      )}
    </Reveal>
  );
}
