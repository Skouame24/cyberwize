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
    <section className="relative py-48 overflow-hidden bg-white">
      {/* Soft Background Tech Elements */}
      <div className="absolute inset-0 bg-agilly-gradient opacity-[0.4]" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-32 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-black/5 border border-black/[0.05] text-black/60 text-[10px] font-bold uppercase tracking-[0.4em] mb-12"
            >
              <div className="h-2 w-2 rounded-full bg-[#FF990A] animate-pulse" />
              Monitoring en Temps Réel
            </motion.div>
            
            <h2 className="text-6xl md:text-8xl font-sans font-black text-black tracking-tighter leading-[0.85] mb-12">
               Contrôle <span className="opacity-20 italic">Total</span>. <br />
               Visibilité <span className="text-[#FF990A]">Elite.</span>
            </h2>
            
            <p className="text-2xl text-black/40 font-medium leading-relaxed mb-16 max-w-xl">
               CyberWize n'est pas qu'une protection, c'est une interface de commandement "Hyper-Soft" pour votre sécurité Cloud et On-Premise.
            </p>

            <div className="grid grid-cols-2 gap-6">
               <div className="p-10 rounded-[3rem] bg-gray-50 border border-black/[0.03] group hover:border-[#FF990A]/20 transition-all">
                  <div className="h-12 w-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6">
                     <Cpu className="h-6 w-6 text-black" />
                  </div>
                  <p className="text-4xl font-sans font-black text-black tracking-tight mb-2">1.2ms</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-black/30">Réaction</p>
               </div>
               <div className="p-10 rounded-[3rem] bg-gray-50 border border-black/[0.03] group hover:border-[#FF990A]/20 transition-all">
                  <div className="h-12 w-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6">
                     <Zap className="h-6 w-6 text-[#FF990A]" />
                  </div>
                  <p className="text-4xl font-sans font-black text-black tracking-tight mb-2">99.9%</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-black/30">Uptime</p>
               </div>
            </div>
          </div>

          {/* Interactive Tactical UI - Softer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative p-2 rounded-[4rem] bg-gradient-to-br from-black/[0.05] via-transparent to-[#FF990A]/10"
          >
            <div className="bg-white rounded-[3.8rem] p-12 overflow-hidden relative shadow-2xl border border-black/[0.05]">
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
                             log.severity === 'medium' ? 'bg-[#FF990A] text-white' : 'bg-black/5 text-black/40'
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
                        <p className="text-2xl font-sans font-black text-[#FF990A] tracking-tight">Active</p>
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
