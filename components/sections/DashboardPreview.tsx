"use client";

import { motion, AnimatePresence, useScroll, useTransform, useInView } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { Activity, Lock, Eye, Terminal } from "lucide-react";
import { brand } from "@/lib/brand-copy";

/*
 * SECTION : DASHBOARD PREVIEW
 *
 * Animations humaines et créatives :
 * 1. Le Dashboard entre avec une rotation 3D (perspective) et un scale, 
 *    comme si on posait un écran devant soi, pas juste un "fade up".
 * 2. Le texte de gauche utilise la technique "TextReveal" ligne par ligne
 *    déjà validée, pour une cohérence éditoriale.
 * 3. Effet parallaxe léger sur l'ensemble de la section.
 */

interface SecurityLog {
  id: number;
  type: "blocked" | "monitored" | "alert";
  source: string;
  target: string;
  timestamp: string;
  severity: "critical" | "low" | "medium";
}

function TextRevealLine({ text, delay = 0 }: { text: string, delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <div ref={ref} className="overflow-hidden">
      <motion.p
        initial={{ y: "110%" }}
        animate={isInView ? { y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
        className="text-[15px] leading-[1.8] text-white/70"
      >
        {text}
      </motion.p>
    </div>
  );
}

export function DashboardPreview() {
  const [logs, setLogs] = useState<SecurityLog[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(textRef, { once: true, amount: 0.3 });

  // Parallaxe douce
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const dashRotate = useTransform(scrollYProgress, [0, 1], [8, -2]);

  useEffect(() => {
    const types: SecurityLog["type"][] = ["blocked", "monitored", "alert"];
    const sources = ["Téléphone Léa", "PC salon", "Tablette", "Wi-Fi maison"];
    const targets = ["Site phishing", "App suspecte", "Contenu filtré", "Tentative SMS"];

    const add = () => {
      const r = Math.random();
      const severity: SecurityLog["severity"] =
        r > 0.8 ? "critical" : r > 0.4 ? "medium" : "low";
      setLogs(prev => [
        {
          id: Math.random(),
          type: types[Math.floor(Math.random() * 3)],
          source: sources[Math.floor(Math.random() * 4)],
          target: targets[Math.floor(Math.random() * 4)],
          timestamp: new Date().toLocaleTimeString(),
          severity,
        },
        ...prev,
      ].slice(0, 4)); // Limité à 4 pour garder la même hauteur
    };

    add();
    const interval = setInterval(add, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#0a0d14] py-24 md:py-28 lg:py-32">
      {/* ── Background minimaliste ── */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(240,130,34,0.06)_0%,transparent_60%)]" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">

          {/* ── Colonne gauche : texte ── */}
          <div ref={textRef} className="space-y-6">
            <motion.div
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={isInView ? { clipPath: "inset(0 0% 0 0)" } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8 inline-flex items-center gap-3"
            >
              <span className="font-bold text-[#f08222] text-[11px]">//</span>
              <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#f08222]">
                Votre tableau de bord
              </span>
            </motion.div>

            <div className="overflow-hidden mb-6">
              <motion.h2
                initial={{ y: "110%" }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="font-serif text-[clamp(2rem,3.5vw,2.8rem)] font-bold leading-[1.05] text-white"
              >
                Tout le foyer, <br />
                <span className="text-[#f08222]">en un coup d'œil</span>
              </motion.h2>
            </div>

            <div className="space-y-3">
              <TextRevealLine text="Menaces bloquées, appareils protégés et alertes claires" delay={0.3} />
              <TextRevealLine text="— pour agir vite sans être un expert informatique." delay={0.4} />
            </div>

            {/* Chiffres animés */}
            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-white/10 pt-8">
              {[
                { v: "12", l: "Menaces stoppées" },
                { v: "5", l: "Appareils actifs" }
              ].map((s, i) => (
                <motion.div
                  key={s.l}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
                >
                  <p className="font-sans text-[2.5rem] font-black text-white leading-none">{s.v}</p>
                  <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#f08222]">{s.l}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Colonne droite : dashboard live (3D Rotate In) ── */}
          <div className="perspective-[1000px]">
            <motion.div
              initial={{ opacity: 0, rotateX: 15, rotateY: -10, scale: 0.95 }}
              whileInView={{ opacity: 1, rotateX: 0, rotateY: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ rotateX: dashRotate }} // rotation liée au scroll
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0e131f] shadow-2xl shadow-black/50"
            >
              {/* Header UI */}
              <div className="flex items-center justify-between border-b border-white/5 bg-white/5 px-6 py-4">
                <div className="flex gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
                </div>
                <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-white/30">
                  <Terminal className="h-3 w-3" />
                  Live Activity
                </div>
              </div>

              {/* Contenu */}
              <div className="p-6 h-[400px] overflow-hidden">
                <AnimatePresence initial={false}>
                  {logs.map((log) => (
                    <motion.div
                      key={log.id}
                      initial={{ opacity: 0, height: 0, scale: 0.9 }}
                      animate={{ opacity: 1, height: "auto", scale: 1 }}
                      exit={{ opacity: 0, height: 0, scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                      className="mb-3"
                    >
                      <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] p-4">
                        <div className="flex items-center gap-4">
                          <div
                            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                              log.type === "alert"
                                ? "bg-red-500/10 text-red-400"
                                : log.type === "blocked"
                                ? "bg-green-500/10 text-green-400"
                                : "bg-white/5 text-[#f08222]"
                            }`}
                          >
                            {log.type === "alert" ? <Activity size={18} /> : log.type === "blocked" ? <Lock size={18} /> : <Eye size={18} />}
                          </div>
                          <div>
                            <p className="text-[13px] font-bold text-white">{log.source}</p>
                            <p className="text-[11px] text-white/40">{log.target}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className={`inline-block px-2 py-1 text-[9px] font-black uppercase tracking-widest rounded ${
                            log.severity === "critical" ? "bg-red-500 text-white" : log.severity === "medium" ? "bg-[#f08222] text-white" : "bg-white/10 text-white/60"
                          }`}>
                            {log.severity}
                          </span>
                          <p className="mt-1 text-[10px] font-medium text-white/30">{log.timestamp}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}