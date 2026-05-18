import Image from "next/image";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  image?: string;
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  image = "/hero-cloud.png",
  className,
}: PageHeroProps) {
  return (
    <section className={cn("relative min-h-[42vh] overflow-hidden", className)}>
      <Image src={image} alt="" fill className="object-cover object-center" sizes="100vw" priority />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0f1419]/90 via-[#1b263b]/78 to-[#1b263b]/40"
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-[42vh] max-w-6xl flex-col justify-end px-6 pb-14 pt-24 sm:px-10 sm:pb-16 lg:justify-center lg:pb-20">
        <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-primary">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-serif text-[2rem] leading-[1.15] text-white md:text-[2.75rem]">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-white/80 md:text-base">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
