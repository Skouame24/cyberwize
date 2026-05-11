"use client";

import { motion } from "framer-motion";
import { ShieldCheck, ArrowUpRight, CloudLightning, ShieldAlert, BarChart3 } from "lucide-react";
import { AnimatedText } from "@/components/ui/AnimatedText";

const cases = [
  {
    category: "RÉPONSE AUX INCIDENTS",
    title: "Neutralisation de Ransomware",
    description: "Intervention d'urgence pour un groupe industriel majeur. Isolation de la menace en < 15min et restauration complète sans perte de données.",
    stats: { label: "Impact", value: "98% de réduction des dommages" },
    icon: ShieldAlert,
    color: "bg-red-50 text-red-600"
  },
  {
    category: "SÉCURITÉ CLOUD",
    title: "Migration Bancaire Sécurisée",
    description: "Migration de l'infrastructure critique vers une architecture hybride zero-trust. Zéro vulnérabilité détectée lors de l'audit post-migration.",
    stats: { label: "Disponibilité", value: "99.999%" },
    icon: CloudLightning,
    color: "bg-blue-50 text-blue-600"
  },
  {
    category: "CONFORMITÉ",
    title: "Audit & Gouvernance NIST",
    description: "Mise en conformité totale d'une fintech panafricaine. Alignement stratégique et déploiement de politiques de gouvernance automatisées.",
    stats: { label: "Conformité", value: "100% Validée" },
    icon: ShieldCheck,
    color: "bg-emerald-50 text-emerald-600"
  }
];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export function CaseStudies() {
  return (
    <section className="relative bg-white py-64 overflow-hidden border-t border-black/[0.03]">
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-px w-12 bg-[#FF990A]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#FF990A]">Impact Réel</span>
          </motion.div>
          
          <AnimatedText
            text="L'Excellence en Action."
            tag="h2"
            className="text-6xl font-sans font-black text-black sm:text-8xl tracking-tight leading-[0.9] mb-12"
          />
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-2xl text-xl text-black/60 font-medium tracking-tight"
          >
            Découvrez comment nous transformons les défis de sécurité les plus complexes en succès stratégiques pour nos clients.
          </motion.p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8"
        >
          {cases.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="group relative flex flex-col md:flex-row gap-12 p-12 rounded-[2.5rem] border border-black/[0.03] bg-white transition-all duration-1000 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)]"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#FF990A]">{item.category}</span>
                </div>
                <h3 className="text-4xl font-sans font-black text-black tracking-tight mb-6 group-hover:text-[#FF990A] transition-colors duration-500">
                  {item.title}
                </h3>
                <p className="text-xl text-black/60 font-medium leading-relaxed max-w-2xl">
                  {item.description}
                </p>
                
                <div className="mt-10 flex items-center gap-10">
                   <div>
                      <p className="text-[9px] font-bold text-black/40 uppercase tracking-widest mb-1">{item.stats.label}</p>
                      <p className="text-2xl font-sans font-black text-black">{item.stats.value}</p>
                   </div>
                   <div className="h-10 w-px bg-black/[0.05]" />
                   <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FF990A] hover:gap-4 transition-all">
                      Lire l'étude <ArrowUpRight className="h-4 w-4" />
                   </button>
                </div>
              </div>

              <div className="md:w-1/3 flex items-center justify-center">
                 <div className={`h-48 w-48 rounded-[2rem] ${item.color} flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-700`}>
                    <item.icon className="h-20 w-20 relative z-10" />
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                 </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
