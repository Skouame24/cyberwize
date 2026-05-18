"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";
import { ease } from "@/lib/motion";

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  highlights?: string[];
  image?: string;
  className?: string;
};

/**
 * En-tête interne — fond doux, visuel latéral (style cloud institutionnel).
 * Le hero plein écran reste réservé à l'accueil.
 */
export function PageHero({
  eyebrow,
  title,
  description,
  highlights,
  image = "/hero-cloud.png",
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "page-hero relative overflow-hidden border-b border-outline/60",
        className
      )}
    >
      <div className="page-hero__glow pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-primary/15 blur-[100px]" />
      <motion.div
        className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-accent/10 blur-[110px]"
        animate={{ opacity: [0.4, 0.65, 0.4], scale: [1, 1.06, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-6xl px-6 pb-14 pt-28 sm:px-10 sm:pb-16 sm:pt-32">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <Reveal>
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary-muted/80 px-4 py-1.5 text-xs font-semibold text-primary-deep shadow-sm">
              {eyebrow}
            </span>
            <h1 className="mt-5 max-w-xl font-serif text-[1.9rem] leading-[1.12] text-ink sm:text-[2.35rem] lg:text-[2.55rem]">
              {title}
            </h1>
            {description && (
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-muted md:text-base">
                {description}
              </p>
            )}
            {highlights && highlights.length > 0 && (
              <ul className="mt-6 flex flex-wrap gap-2">
                {highlights.map((h, i) => (
                  <motion.li
                    key={h}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.08, duration: 0.5, ease: ease.out }}
                    className="rounded-full border border-outline/90 bg-white/80 px-3.5 py-1.5 text-xs font-medium text-muted shadow-sm backdrop-blur-sm"
                  >
                    {h}
                  </motion.li>
                ))}
              </ul>
            )}
          </Reveal>

          <Reveal delay={0.12} className="relative mx-auto w-full max-w-md lg:max-w-none">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-primary/20 via-transparent to-accent/15 blur-xl" />
              <div className="page-hero__visual relative aspect-[5/4] overflow-hidden rounded-[1.75rem] border border-white/80 bg-white shadow-[0_24px_60px_-20px_rgba(25,28,29,0.18)] sm:aspect-[4/3]">
                <Image
                  src={image}
                  alt=""
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 90vw, 480px"
                  priority
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#1b263b]/50 via-transparent to-white/10"
                  aria-hidden
                />
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <p className="text-xs font-medium uppercase tracking-wide text-white/70">
                    Cyberwize Family
                  </p>
                  <p className="mt-1 font-serif text-lg text-white sm:text-xl">
                    Propulsé par Agilly
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 hidden rounded-2xl border border-outline/80 bg-white/95 px-4 py-3 shadow-lg backdrop-blur-md sm:block">
                <p className="text-[10px] font-semibold uppercase tracking-wide text-muted">
                  Protection
                </p>
                <p className="font-serif text-lg text-primary">24/7</p>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
