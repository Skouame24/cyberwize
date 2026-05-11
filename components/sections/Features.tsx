"use client";

import { motion } from "motion/react";
import { AnimatedText } from "@/components/ui/AnimatedText";
import {
  Shield,
  Search,
  Monitor,
  GraduationCap,
  Cpu,
  Zap,
  ArrowRight,
  Database,
  BarChart3,
  Network
} from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";

const features = [
  {
    icon: Search,
    title: "Identifier",
    description: "Inventaire complet de vos actifs et évaluation rigoureuse des risques numériques.",
    span: "lg:col-span-8 lg:row-span-1",
    theme: "bg-white",
    iconColor: "text-black",
  },
  {
    icon: Shield,
    title: "Protéger",
    description: "Déploiement de barrières adaptatives et sensibilisation de vos équipes.",
    span: "lg:col-span-4 lg:row-span-2",
    theme: "bg-white",
    iconColor: "text-[#FF990A]",
  },
  {
    icon: Monitor,
    title: "Détecter",
    description: "Monitoring 24/7 et détection d'anomalies en temps réel via notre SOC.",
    span: "lg:col-span-4 lg:row-span-1",
    theme: "bg-[#F5F5F5]",
    iconColor: "text-black",
  },
  {
    icon: Zap,
    title: "Répondre",
    description: "Analyse d'incident et neutralisation immédiate des menaces détectées.",
    span: "lg:col-span-4 lg:row-span-1",
    theme: "bg-white",
    iconColor: "text-[#FF990A]",
  },
  {
    icon: Database,
    title: "Récupérer",
    description: "Plans de continuité et restauration intègre de vos infrastructures critiques.",
    span: "lg:col-span-4 lg:row-span-1",
    theme: "bg-[#F5F5F5]",
    iconColor: "text-black",
  },
];

export function Features() {
  return (
    <section className="relative bg-white py-64 overflow-hidden" id="services">
      {/* Soft Background Depth */}
      <div className="absolute inset-0 bg-agilly-gradient opacity-[0.2]" />
      <div className="absolute inset-0 grid-pattern opacity-[0.03] pointer-events-none" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 text-[#FF990A] mb-8"
          >
            <div className="h-1.5 w-1.5 rounded-full bg-[#FF990A] animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em]">NOS ARCHITECTURES DE DÉFENSE</span>
          </motion.div>

          <AnimatedText
            text="Cyber-Résilience & Infrastructure."
            tag="h2"
            className="text-6xl font-sans font-black text-black sm:text-8xl tracking-tight leading-[0.9]"
            delay={0.1}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 text-xl text-black/40 leading-relaxed max-w-2xl font-medium tracking-tight"
          >
            Nous alignons votre infrastructure sur les standards Agilly pour une résilience absolue face aux menaces modernes.
          </motion.p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-32 grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              variants={staggerItem}
              whileHover={{ y: -10, scale: 1.01, rotateX: 2, rotateY: 2 }}
              className={`${feature.span} group relative overflow-hidden rounded-[2.5rem] border border-black/[0.03] bg-white transition-all duration-700 hover:shadow-[0_40px_120px_-20px_rgba(0,0,0,0.1)]`}
              style={{ perspective: "1000px" }}
            >
              <div className="relative z-10 p-12 h-full flex flex-col">
                <div className={`mb-10 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-black/5 transition-transform duration-700 group-hover:scale-110 ${feature.iconColor}`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                
                <div className="mt-auto">
                  <h3 className="mb-4 text-3xl font-sans font-bold tracking-tight leading-none text-black">
                    {feature.title}
                  </h3>
                  <p className="text-base leading-snug text-black/40 font-medium tracking-tight max-w-[280px]">
                    {feature.description}
                  </p>
                </div>

                {/* Technical Visualization Placeholder */}
                <div className="absolute top-12 right-12 opacity-[0.03] transition-opacity duration-700 group-hover:opacity-[0.1]">
                  <feature.icon size={160} strokeWidth={0.5} />
                </div>
              </div>

              {/* Advanced Hover State */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
