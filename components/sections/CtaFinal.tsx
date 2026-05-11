"use client";

import { motion } from "motion/react";
import { ArrowRight, Zap, Shield } from "lucide-react";
import Link from "next/link";

export function CtaFinal() {
  return (
    <section className="relative overflow-hidden bg-white py-64">
      {/* Background Depth & Soft Glows */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,153,10,0.03)_0%,transparent_70%)]" />
      <div className="absolute inset-0 grid-pattern opacity-[0.03]" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-black/5 border border-black/[0.05] text-[#FF990A] text-[10px] font-bold uppercase tracking-[0.5em] mb-12"
        >
          <Shield className="h-4 w-4" />
          Prêt pour la Résilience ?
        </motion.div>

        <h2 className="text-6xl md:text-9xl font-sans font-black text-black tracking-tighter leading-[0.85] mb-16">
          Votre Futur, <br />
          <span className="text-[#FF990A]">Sécurisé</span> par Agilly.
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          <Link href="/devis">
            <button className="group relative bg-[#FF990A] text-white px-12 py-6 rounded-full text-xl font-black uppercase tracking-[0.2em] transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_50px_-10px_rgba(255,153,10,0.3)] active:scale-95">
              Obtenir mon Audit <ArrowRight className="inline-block ml-3 transition-transform group-hover:translate-x-2" />
            </button>
          </Link>
          <Link href="/contact">
            <button className="bg-white border border-black/[0.1] text-black px-12 py-6 rounded-full text-xl font-black uppercase tracking-[0.2em] transition-all duration-500 hover:bg-black/[0.02] active:scale-95">
              Parler à un Expert
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
