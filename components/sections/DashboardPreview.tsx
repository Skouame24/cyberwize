"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Activity, Lock, Eye, Zap, Terminal, Cpu } from "lucide-react";

interface SecurityLog {
  id: number;
  type: "blocked" | "monitored" | "alert";
  source: string;
  target: string;
  timestamp: string;
  severity: "critical" | "low" | "medium";
}

export function DashboardPreview() {
  const [logs, setLogs] = useState<SecurityLog[]>([]);

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
      ].slice(0, 5));
    };

    add();
    const interval = setInterval(add, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-28 lg:py-32">
      <div className="absolute inset-0 bg-agilly-gradient opacity-[0.4]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-16">

          {/* ── Colonne gauche : texte + stats ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-soft-gray/80 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink/55"
            >
              <div className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              Alertes en direct
            </motion.div>

            <p className="eyebrow mt-2">Votre tableau de bord</p>
            <h2 className="mt-3 font-serif text-[1.75rem] text-ink md:text-[2.25rem]">
              Tout le foyer,{" "}
              <span className="italic text-primary">en un coup d&apos;œil</span>
            </h2>

            <p className="mb-10 mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
              Menaces bloquées, appareils protégés et alertes claires — pour agir vite sans être
              expert.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-ink/[0.06] bg-gradient-to-br from-sky-50/60 to-white p-6 transition-all hover:border-accent/25">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm">
                  <Cpu className="h-5 w-5 text-ink" strokeWidth={1.6} />
                </div>
                <p className="mb-1 font-serif text-3xl text-ink">12</p>
                <p className="text-xs font-medium text-muted">Menaces bloquées / semaine</p>
              </div>
              <div className="rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/[0.07] to-white p-6 transition-all hover:border-primary/30">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm">
                  <Zap className="h-5 w-5 text-primary" strokeWidth={1.6} />
                </div>
                <p className="mb-1 font-serif text-3xl text-ink">5</p>
                <p className="text-xs font-medium text-muted">Appareils protégés</p>
              </div>
            </div>
          </div>

          {/* ── Colonne droite : dashboard live ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-[2.5rem] border border-ink/[0.06] bg-gradient-to-br from-ink/[0.04] via-transparent to-primary/10 p-2"
          >
            <div className="relative overflow-hidden rounded-[2.35rem] border border-ink/[0.06] bg-white p-8 shadow-xl sm:p-10">
              <div className="absolute inset-0 grid-pattern opacity-[0.03]" />

              <div className="relative z-10">
                {/* Header barre */}
                <div className="mb-10 flex items-center justify-between border-b border-black/[0.05] pb-6">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-black/5" />
                    <div className="h-3 w-3 rounded-full bg-black/5" />
                    <div className="h-3 w-3 rounded-full bg-black/5" />
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-black/20">
                    <Terminal className="h-4 w-4" />
                    SENTINEL_DASHBOARD_v4
                  </div>
                </div>

                {/* Feed logs — hauteur fixe pour ne pas décaler la colonne texte */}
                <div className="mb-10 h-[26rem] overflow-hidden">
                  <AnimatePresence initial={false}>
                    {logs.map((log) => (
                      <motion.div
                        key={log.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="mb-3 flex items-center justify-between rounded-2xl border border-black/[0.02] bg-gray-50/50 p-5 transition-all hover:border-black/[0.08] hover:bg-white"
                      >
                        <div className="flex items-center gap-5">
                          <div
                            className={`flex h-12 w-12 items-center justify-center rounded-xl transition-all ${
                              log.type === "alert"
                                ? "bg-red-50 text-red-500"
                                : log.type === "blocked"
                                ? "bg-green-50 text-green-600"
                                : "bg-black/5 text-black/50"
                            }`}
                          >
                            {log.type === "alert" ? (
                              <Activity size={20} />
                            ) : log.type === "blocked" ? (
                              <Lock size={20} />
                            ) : (
                              <Eye size={20} />
                            )}
                          </div>
                          <div>
                            <p className="text-sm font-black uppercase tracking-tighter text-black">
                              {log.source}
                            </p>
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/20">
                              {log.timestamp}
                            </p>
                          </div>
                        </div>

                        <span
                          className={`rounded-full px-3 py-1 text-[9px] font-black uppercase tracking-widest ${
                            log.severity === "critical"
                              ? "bg-red-500 text-white"
                              : log.severity === "medium"
                              ? "bg-primary text-white"
                              : "bg-ink/[0.06] text-ink/45"
                          }`}
                        >
                          {log.severity}
                        </span>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {/* Stats footer */}
                <div className="grid grid-cols-3 gap-6 border-t border-black/[0.05] pt-8">
                  <div className="text-center">
                    <p className="mb-2 text-[9px] font-bold uppercase text-black/20">Threats</p>
                    <p className="font-sans text-2xl font-black tracking-tight text-black">148k</p>
                  </div>
                  <div className="border-x border-black/[0.05] text-center">
                    <p className="mb-2 text-[9px] font-bold uppercase text-black/20">Nodes</p>
                    <p className="font-sans text-2xl font-black tracking-tight text-black">2.4k</p>
                  </div>
                  <div className="text-center">
                    <p className="mb-2 text-[9px] font-bold uppercase text-black/20">Load</p>
                    <p className="text-2xl font-semibold tracking-tight text-primary">Active</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}