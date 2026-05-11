"use client";

import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { ShieldCheck, Lock, Eye, Activity, Shield, Zap, Globe, Cpu } from "lucide-react";

const partners = [
  { name: "Global Security", icon: ShieldCheck },
  { name: "Network Alpha", icon: Activity },
  { name: "Cloud Resilient", icon: Globe },
  { name: "Cyber Node", icon: Lock },
  { name: "Sentinel Prime", icon: Eye },
  { name: "Infrastructure Elite", icon: Cpu },
  { name: "Data Guard", icon: Shield },
  { name: "Active Protect", icon: Zap },
];

export function TrustBand() {
  return (
    <section className="relative py-24 overflow-hidden bg-white border-y border-black/[0.03]">
      <div className="absolute inset-0 bg-agilly-gradient opacity-[0.1]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center text-[10px] font-bold uppercase tracking-[0.5em] text-black/20 mb-12"
        >
          L'ÉLITE NOUS FAIT CONFIANCE
        </motion.p>
        <Marquee speed={30} gradient={false} pauseOnHover>
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center gap-4 mx-12 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all cursor-default">
              <partner.icon className="h-6 w-6 text-black" />
              <span className="text-sm font-black uppercase tracking-widest text-black">{partner.name}</span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
