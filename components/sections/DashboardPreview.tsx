"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Activity, ShieldCheck, Lock, Eye, Zap, Server, Cloud, Terminal, Cpu } from "lucide-react";

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
    const interval = setInterval(() => {
      const types: SecurityLog["type"][] = ["blocked", "monitored", "alert"];
      const newLog: SecurityLog = {
        id: Math.random(),
        type: types[Math.floor(Math.random() * types.length)],
        source: `192.168.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`,
        target: "Cloud Infra",
        timestamp: new Date().toLocaleTimeString(),
        severity: Math.random() > 0.8 ? "critical" : Math.random() > 0.4 ? "medium" : "low"
      };
      setLogs(prev => [newLog, ...prev].slice(0, 5));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-28 lg:py-32">
      {/* Soft Background Tech Elements */}
      <div className="absolute inset-0 bg-agilly-gradient opacity-[0.4]" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-soft-gray/80 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink/55"
            >
              <div className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              Monitoring temps réel
            </motion.div>

            <h2 className="mb-5 text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.5rem] lg:leading-[1.12]">
              Contrôle unifié. <br />
              Visibilité <span className="text-primary">opérationnelle.</span>
            </h2>

            <p className="mb-10 max-w-xl text-base leading-relaxed text-ink/58 sm:text-lg">
              CyberWize n&apos;est pas qu&apos;une protection : c&apos;est une interface de pilotage
              pour votre sécurité cloud et on-premise, pensée comme une plateforme.
            </p>

            <div className="grid grid-cols-2 gap-4">
               <div className="rounded-2xl border border-ink/[0.06] bg-gradient-to-br from-sky-50/60 to-white p-6 transition-all hover:border-accent/25">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm">
                     <Cpu className="h-5 w-5 text-ink" strokeWidth={1.6} />
                  </div>
                  <p className="mb-1 text-3xl font-semibold tracking-tight text-ink">1.2ms</p>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-ink/40">Réaction</p>
               </div>
               <div className="rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/[0.07] to-white p-6 transition-all hover:border-primary/30">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm">
                     <Zap className="h-5 w-5 text-primary" strokeWidth={1.6} />
                  </div>
                  <p className="mb-1 text-3xl font-semibold tracking-tight text-ink">99.9%</p>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-ink/40">Uptime</p>
               </div>
            </div>
          </div>

          {/* Interactive Tactical UI - Softer */}
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
                  <div className="flex items-center justify-between mb-12 border-b border-black/[0.05] pb-8">
                     <div className="flex items-center gap-4">
                        <div className="h-3 w-3 rounded-full bg-black/5" />
                        <div className="h-3 w-3 rounded-full bg-black/5" />
                        <div className="h-3 w-3 rounded-full bg-black/5" />
                     </div>
                     <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-black/20">
                        <Terminal className="h-4 w-4" />
                        SENTINEL_DASHBOARD_v4
                     </div>
                  </div>

                  <div className="space-y-4 mb-12">
                    <AnimatePresence initial={false}>
                      {logs.map((log) => (
                        <motion.div
                          key={log.id}
                          initial={{ opacity: 0, x: -20, height: 0 }}
                          animate={{ opacity: 1, x: 0, height: "auto" }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          className="flex items-center justify-between p-6 rounded-2xl bg-gray-50/50 border border-black/[0.02] group hover:bg-white hover:border-black/[0.08] transition-all"
                        >
                          <div className="flex items-center gap-6">
                            <div className={`h-12 w-12 rounded-xl flex items-center justify-center transition-all ${
                              log.type === "alert" ? "bg-red-50 text-red-600" :
                              log.type === "blocked" ? "bg-green-50 text-green-600" :
                              "bg-black/5 text-black"
                            }`}>
                              {log.type === "alert" ? <Activity size={20} /> :
                               log.type === "blocked" ? <Lock size={20} /> :
                               <Eye size={20} />}
                            </div>
                            <div>
                              <p className="text-sm font-black text-black uppercase tracking-tighter">{log.source}</p>
                              <p className="text-[10px] font-bold text-black/20 uppercase tracking-[0.2em]">{log.timestamp}</p>
                            </div>
                          </div>
                          <span className={`text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest ${
                             log.severity === 'critical' ? 'bg-red-500 text-white' : 
                             log.severity === "medium" ? "bg-primary text-white" : "bg-ink/[0.06] text-ink/45"
                          }`}>
                             {log.severity}
                          </span>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>

                  <div className="grid grid-cols-3 gap-6 pt-12 border-t border-black/[0.05]">
                     <div className="text-center">
                        <p className="text-[9px] font-bold text-black/20 uppercase mb-2">Threats</p>
                        <p className="text-2xl font-sans font-black text-black tracking-tight">148k</p>
                     </div>
                     <div className="text-center border-x border-black/[0.05]">
                        <p className="text-[9px] font-bold text-black/20 uppercase mb-2">Nodes</p>
                        <p className="text-2xl font-sans font-black text-black tracking-tight">2.4k</p>
                     </div>
                     <div className="text-center">
                        <p className="text-[9px] font-bold text-black/20 uppercase mb-2">Load</p>
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
