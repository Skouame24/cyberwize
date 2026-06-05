"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

/*
 * SECTION : PAGE HERO (En-tête des pages internes)
 *
 * Design : Minimaliste, Editorial et Humain.
 * On supprime l'image flottante générique et les petits badges SaaS.
 * L'accent est mis sur la typographie géante et une ligne orange de
 * soulignement pour asseoir la marque.
 */

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-[#fffcf9] border-b border-black/5 pt-32 pb-20 lg:pt-40 lg:pb-32",
        className
      )}
    >
      <div className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-16 text-center">

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2"
        >
          <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#f0822a]">
            // {eyebrow}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 font-sans font-bold leading-[1.05] text-[#000000] mx-auto"
          style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontFamily: 'Eurostile' }}
        >
          {title}
        </motion.h1>

        {/* Ligne décorative centrale */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto my-10 h-[2px] w-24 bg-[#f0822a]"
        />

        {description && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mx-auto max-w-2xl text-[18px] leading-[1.8] text-[#535b6a] lg:text-[20px]"
          >
            {description}
          </motion.p>
        )}

      </div>

      {/* Léger glow d'arrière plan */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f0822a]/5 blur-[120px]" />
    </section>
  );
}
