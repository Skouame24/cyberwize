"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Terminal } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Dynamic Visual Identity Layer */}
      <div className="absolute inset-0 z-0">
        <div className="hero-mesh" />
        <motion.div style={{ y, scale }} className="relative h-full w-full opacity-40">
          <Image
            src="/hero-bg.png"
            alt="Cyber Architecture"
            fill
            className="object-cover mix-blend-overlay"
            priority
          />
        </motion.div>
        
        {/* Technical Grid Overlay */}
        <div className="absolute inset-0 grid-pattern opacity-[0.03] z-10" />
      </div>

      <div className="relative z-20 mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Tactical Badge - Softer & Orange */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-12 flex items-center gap-3 rounded-full border border-black/[0.05] bg-white/80 backdrop-blur-xl px-6 py-2.5 text-[10px] font-bold uppercase tracking-[0.4em] text-black/60 shadow-sm"
          >
            <div className="h-2 w-2 rounded-full bg-[#FF990A] animate-pulse" />
            Agilly Sentinel v4.0 Active
          </motion.div>

          {/* Headline - Balanced & Powerful */}
          <div className="max-w-4xl">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-sans font-black leading-[0.9] tracking-tight text-black mb-8">
              L'Intelligence Cyber, <br />
              <span className="text-[#FF990A]">Résilience Active.</span>
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg sm:text-xl text-black/50 font-medium tracking-tight"
          >
            Monitoring en temps réel. Automatisation Cloud. Intelligence prédictive. L'élite de la cybersécurité moderne pour l'Afrique et le monde.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-14 flex flex-wrap justify-center gap-5"
          >
            <Link href="/services">
              <button className="bg-[#FF990A] text-white px-10 py-5 rounded-full text-lg font-bold transition-all duration-500 hover:scale-105 active:scale-95 shadow-[0_20px_40px_-10px_rgba(255,153,10,0.3)]">
                Commencer l'expérience
              </button>
            </Link>
            <Link href="/devis">
              <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-full text-lg font-bold transition-all duration-500 hover:bg-white/20 active:scale-95">
                Parler à un expert
              </button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Decorative Blur Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
}