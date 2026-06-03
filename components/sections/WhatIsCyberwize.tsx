"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import { Shield, ArrowRight } from "lucide-react";
import { brand, demoPhotos } from "@/lib/brand-copy";

/*
 * SECTION : WHAT IS CYBERWIZE
 *
 * Animations humaines et créatives :
 * 1. Image principale s'ouvre comme un volet (clipPath de bas en haut),
 *    avec un effet de parallaxe très lent sur l'image elle-même.
 * 2. Les petites images (qui représentent l'humain/la famille)
 *    entrent avec un léger retard et une rotation infime qui se redresse (effet photo jetée sur une table).
 * 3. Le texte d'introduction se révèle mot par mot avec un masque (clipPath),
 *    comme si quelqu'un le tapait ou le posait délicatement.
 * 4. Pas de "Reveal" générique (fade-up).
 */

function TextReveal({ text }: { text: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const words = text.split(" ");

  return (
    <p ref={ref} className="mt-5 text-[15px] leading-[1.85] text-[#535b6a] md:text-[16px]">
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={{ y: "100%" }}
            animate={isInView ? { y: 0 } : {}}
            transition={{
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
              delay: i * 0.015, // très rapide, comme une lecture fluide
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </p>
  );
}

export function WhatIsCyberwize() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallaxe douce pour l'image principale
  const mainImageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  // InView hooks pour déclencher les animations
  const textRef = useRef<HTMLDivElement>(null);
  const textInView = useInView(textRef, { once: true, amount: 0.4 });

  const gridRef = useRef<HTMLDivElement>(null);
  const gridInView = useInView(gridRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-b border-black/5 bg-[#fffcf9]"
      id="qu-est-ce"
    >
      {/* Tache lumineuse de fond (discrète) */}
      <div
        className="pointer-events-none absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#f08222] opacity-[0.03] blur-[120px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          
          {/* ── COLONNE TEXTE ── */}
          <div ref={textRef} className="max-w-[540px]">
            {/* Tag */}
            <motion.div
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={textInView ? { clipPath: "inset(0 0% 0 0)" } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8 inline-flex items-center gap-3"
            >
              <span className="font-bold text-[#f08222] text-[11px]">//</span>
              <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#f08222]">
                {brand.whatIs.title}
              </span>
            </motion.div>

            {/* Titre */}
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "110%" }}
                animate={textInView ? { y: 0 } : {}}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="font-serif text-[clamp(2rem,3.5vw,2.8rem)] font-bold leading-[1.05] text-[#0e131f]"
              >
                Plus qu'un antivirus : <br />
                <span className="text-[#f08222]">un gardien pour votre foyer</span>
              </motion.h2>
            </div>

            {/* Paragraphes révélés mot par mot */}
            <div className="mt-8 space-y-4">
              <TextReveal text={brand.whatIs.lead} />
              <TextReveal text={brand.whatIs.body} />
            </div>

            {/* Bouton souligné magnétique (variante douce) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={textInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10"
            >
              <Link
                href="/about"
                className="group relative inline-flex items-center gap-3 text-[13px] font-bold uppercase tracking-[0.16em] text-[#0e131f] transition-colors hover:text-[#f08222]"
              >
                Découvrir l'expertise Agilly
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#f08222] transition-all duration-300 group-hover:w-full" />
              </Link>
            </motion.div>
          </div>

          {/* ── COLONNE IMAGES (La composition "jetée") ── */}
          <div ref={gridRef} className="grid gap-4 sm:grid-cols-2 relative">
            
            {/* Image principale — grand format, effet volet et parallaxe */}
            <motion.div
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              animate={gridInView ? { clipPath: "inset(0% 0 0 0)" } : {}}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative col-span-2 aspect-[16/10] overflow-hidden bg-[#111]"
            >
              <motion.div className="absolute inset-0" style={{ y: mainImageY }}>
                <Image
                  src={demoPhotos[0].src}
                  alt={demoPhotos[0].alt}
                  fill
                  className="object-cover scale-[1.15]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
              {/* Overlay léger */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-6 right-6">
                <p className="text-[12px] font-bold uppercase tracking-widest text-white">
                  {demoPhotos[0].caption}
                </p>
              </div>
            </motion.div>

            {/* Petites images — effet photo "posée sur la table" avec légère rotation */}
            {demoPhotos.slice(1).map((photo, i) => (
              <motion.div
                key={photo.src}
                initial={{ opacity: 0, y: 30, rotate: i % 2 === 0 ? -4 : 4 }}
                animate={gridInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: 0.3 + i * 0.15,
                }}
                className="relative aspect-[4/5] overflow-hidden bg-[#111] group"
              >
                {/* L'image zoome très lentement au hover, pas de rebond */}
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />
                <p className="absolute bottom-4 left-4 right-4 text-[10px] font-bold uppercase tracking-widest text-white/90">
                  {photo.caption}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
