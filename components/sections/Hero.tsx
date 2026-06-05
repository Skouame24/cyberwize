"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";

/* ═══════════════════════════════════════════════════════════
   RIDEAU ORANGE — le geste d'ouverture
   Le Hero démarre caché derrière un voile orange plein.
   Ce voile glisse vers la droite (scaleX 1 → 0, origine gauche).
   Aucun fondu. Aucun fade. Une révélation physique.
═══════════════════════════════════════════════════════════ */
function OrangeCurtain() {
  return (
    <motion.div
      className="pointer-events-none absolute inset-0 z-50 origin-left bg-[#f08222]"
      initial={{ scaleX: 1 }}
      animate={{ scaleX: 0 }}
      transition={{ duration: 0.95, ease: [0.76, 0, 0.24, 1], delay: 0.15 }}
      aria-hidden
    />
  );
}

/* ═══════════════════════════════════════════════════════════
   BOUTON MAGNÉTIQUE
   Le bouton "respire" vers la souris — 12px max.
   Cela donne l'impression que le bouton est vivant.
═══════════════════════════════════════════════════════════ */
function MagneticButton({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 150, damping: 18 });
  const springY = useSpring(my, { stiffness: 150, damping: 18 });

  const handleMove = useCallback((e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    mx.set((e.clientX - cx) * 0.25);
    my.set((e.clientY - cy) * 0.25);
  }, [mx, my]);

  const handleLeave = useCallback(() => {
    mx.set(0);
    my.set(0);
  }, [mx, my]);

  return (
    <motion.a
      ref={ref}
      href={href}
      className={className}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.a>
  );
}

/* ═══════════════════════════════════════════════════════════
   TITRE — chaque mot tombe en place avec spring overshoot
   Pas un fade-up. Un spring tendu qui dépasse puis se stabilise.
   Chaque mot a un décalage différent → "posé à la main"
═══════════════════════════════════════════════════════════ */
function SpringTitle({
  line1,
  line2,
  orangeWord,
}: {
  line1: string;
  line2: string;
  orangeWord: string;
}) {
  // on découpe chaque ligne en mots pour les animer individuellement
  const words1 = line1.split(" ");
  const words2 = line2.split(" ");

  return (
    <h1 className="font-serif" aria-label={`${line1} ${line2} ${orangeWord}`}>
      {/* Ligne 1 */}
      <span className="block overflow-hidden">
        <span className="flex flex-wrap gap-x-[0.28em]">
          {words1.map((word, i) => (
            <motion.span
              key={`l1-${i}`}
              className="inline-block font-black text-white"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4.4rem)", lineHeight: 1.05 }}
              initial={{ y: "115%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 220,
                damping: 16,
                mass: 0.9,
                delay: 1.1 + i * 0.07, // démarre APRÈS le rideau (0.95s + 0.15s delay)
              }}
            >
              {word}
            </motion.span>
          ))}
        </span>
      </span>

      {/* Ligne 2 + mot orange */}
      <span className="block overflow-hidden mt-1">
        <span className="flex flex-wrap gap-x-[0.28em]">
          {words2.map((word, i) => (
            <motion.span
              key={`l2-${i}`}
              className="inline-block font-black text-white"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4.4rem)", lineHeight: 1.05 }}
              initial={{ y: "115%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 220,
                damping: 16,
                mass: 0.9,
                delay: 1.1 + words1.length * 0.07 + i * 0.07,
              }}
            >
              {word}
            </motion.span>
          ))}
          {/* Mot orange — arrivé en dernier, spring plus rebondissant */}
          <motion.span
            className="inline-block font-black text-[#f08222]"
            style={{ fontSize: "clamp(2.2rem, 5vw, 4.4rem)", lineHeight: 1.05 }}
            initial={{ y: "115%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 160,  // ← moins rigide = plus de rebond = plus vivant
              damping: 12,
              mass: 1.1,
              delay: 1.1 + (words1.length + words2.length) * 0.07,
            }}
          >
            {orangeWord}
          </motion.span>
        </span>
      </span>
    </h1>
  );
}

/* ═══════════════════════════════════════════════════════════
   HERO PRINCIPAL
═══════════════════════════════════════════════════════════ */
export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);

  // Temps après la fin du rideau (0.95 + 0.15 = ~1.1s)
  const curtainDone = 1.1;

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#0d0f16]"
      style={{ minHeight: "min(92vh, 860px)" }}
    >
      {/* ── Rideau d'ouverture ── */}
      <OrangeCurtain />

      {/* ── Image Ken Burns + parallaxe scroll ── */}
      <motion.div className="absolute inset-0 will-change-transform" style={{ y: imageY }}>
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 12, ease: "linear" }}
        >
          <Image
            src="/hero_human.png"
            alt="Équipe Agilly — environnement professionnel et humain"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
        </motion.div>
      </motion.div>

      {/* Overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(10,12,22,0.93) 0%, rgba(10,12,22,0.78) 50%, rgba(10,12,22,0.35) 100%)",
        }}
        aria-hidden
      />

      {/* ── Contenu ── */}
      <div
        className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-16"
        style={{
          minHeight: "min(92vh, 860px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingTop: "7rem",
          paddingBottom: "5rem",
        }}
      >
        <div className="max-w-[680px]">

          {/* Label — clipPath horizontal après le rideau */}
          <motion.div
            className="mb-8 inline-flex items-center gap-3"
            initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
            animate={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: curtainDone + 0.05 }}
          >
            <span className="font-bold text-[11px] text-[#f08222]">//</span>
            <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-white/55">
              Cyberwize Family
            </span>
            <span className="block h-px w-14 bg-white/15" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#f08222]">
              Agilly
            </span>
          </motion.div>

          {/* Titre — spring par mot */}
          <SpringTitle
            line1="Protégez votre famille"
            line2="dans un monde"
            orangeWord="numérique."
          />

          {/* Paragraphe — grow vertical (top clip) */}
          <div className="overflow-hidden mt-7">
            <motion.p
              className="max-w-[52ch] text-[16px] leading-[1.85] text-white/55"
              initial={{ clipPath: "inset(0 0 100% 0)" }}
              animate={{ clipPath: "inset(0 0 0% 0)" }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: curtainDone + 0.7 }}

            >
              La cybersécurité professionnelle d'Agilly — expertise certifiée depuis 2015
              en Côte d'Ivoire — désormais accessible à votre foyer. Contrôle parental,
              antivirus, navigation sécurisée.
            </motion.p>
          </div>

          {/* Boutons */}
          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: curtainDone + 1.0 }}
          >
            {/* Bouton principal — magnétique */}
            <MagneticButton
              href="#pricing"
              className="group inline-flex items-center justify-center gap-3 bg-[#f0822a] px-8 py-4 text-[13px] font-bold uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:bg-[#c7610c]"
            >
              Découvrez les offres
              <motion.span
                className="inline-flex"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.span>
            </MagneticButton>

            <Link
              href="/essai"
              className="relative inline-flex items-center justify-center gap-3 overflow-hidden border border-white/30 px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-white/65 transition-all duration-300 hover:border-white/60 hover:text-white"
            >
              Essai gratuit
            </Link>
          </motion.div>

          {/* Valeurs Agilly — pastilles */}
          <motion.div
            className="mt-9 flex flex-wrap gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: curtainDone + 1.2 }}
          >
            {["Excellence", "Agilité", "Proximité", "Innovation", "Intégrité"].map((v) => (
              <span
                key={v}
                className="border border-white/20 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80"
              >
                {v}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
