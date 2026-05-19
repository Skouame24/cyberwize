"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, Shield } from "lucide-react";
import { ease } from "@/lib/motion";
import { brand } from "@/lib/brand-copy";

const highlights = [
  "Barrière proactive",
  "Contrôle parental",
  "Équipe Agilly en Côte d'Ivoire",
];

export function Hero() {
  return (
    <section className="relative min-h-[min(92vh,820px)] w-full overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: ease.out }}
      >
        <Image
          src="/hero-bg.png"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
      </motion.div>

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0f1419]/90 via-[#1b263b]/78 to-[#1b263b]/30"
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-[min(92vh,820px)] max-w-6xl flex-col justify-end px-6 pb-16 pt-28 sm:px-10 sm:pb-20 lg:justify-center lg:pb-24 lg:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: ease.out }}
        >
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.6, ease: ease.out }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium text-white/90 backdrop-blur-sm"
          >
            <Shield className="h-3.5 w-3.5 text-primary" />
            {brand.name} · {brand.poweredBy}
          </motion.div>

          <h1 className="max-w-3xl font-serif text-[2rem] leading-[1.1] text-white sm:text-[2.85rem] lg:text-[3.35rem]">
            {brand.hero.title},{" "}
            <span className="italic text-primary">{brand.hero.titleAccent}</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7, ease: ease.out }}
            className="mt-5 max-w-2xl text-[15px] leading-[1.85] text-white/80 sm:text-base"
          >
            {brand.hero.subtitle}
          </motion.p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {highlights.map((h, i) => (
              <motion.li
                key={h}
                initial={{ opacity: 0, y: 16, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.55, ease: ease.out }}
                className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/75"
              >
                {h}
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.65, ease: ease.out }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Link href="/essai" className="btn-primary text-center">
              Essai gratuit 14 jours
            </Link>
            <Link href="/devis" className="btn-hero-outline justify-center">
              Demander un devis
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
