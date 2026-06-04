"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ease } from "@/lib/motion";

export function CtaFinal() {
  return (
    <section className="bg-navy-cta text-white">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.75, ease: ease.out }}
        className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 section-pad md:flex-row md:items-center"
      >
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-wide text-white/60">Et maintenant ?</p>
          <h2 className="mt-2 font-serif text-[1.75rem] leading-snug md:text-[2.25rem]">
            Protégez votre foyer dès aujourd&apos;hui
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-white/75">
            Essai gratuit 14 jours · Devis personnalisé · Accompagnement Agilly
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <Link href="/essai" className="btn-primary px-8 py-3.5 text-center">
            Démarrer l&apos;essai gratuit
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-none border border-white/40 px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            Nous contacter
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
