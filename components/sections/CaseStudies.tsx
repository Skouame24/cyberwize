"use client";

import { motion, Variants } from "motion/react";
import { ShieldCheck, ArrowUpRight, CloudLightning, ShieldAlert, BarChart3, ArrowRight } from "lucide-react";
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

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1] 
    } 
  },
};

export function CaseStudies() {
  return (
    <section className="relative overflow-hidden border-t border-ink/[0.06] bg-white py-24 md:py-28 lg:py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-14 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-5 flex items-center gap-4"
          >
            <div className="h-px w-12 bg-primary" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
              Impact réel
            </span>
          </motion.div>

          <AnimatedText
            text="L'excellence en action."
            tag="h2"
            className="mb-6 text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.5rem] lg:leading-[1.12]"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="max-w-2xl text-base leading-relaxed text-ink/58 sm:text-lg"
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
              className="group relative flex flex-col gap-10 rounded-3xl border border-ink/[0.06] bg-gradient-to-br from-white to-soft-gray/50 p-8 transition-all duration-500 hover:shadow-xl md:flex-row md:gap-12 md:p-10"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">{item.category}</span>
                </div>
                <h3 className="mb-5 text-2xl font-semibold tracking-tight text-ink transition-colors duration-500 group-hover:text-primary sm:text-3xl">
                  {item.title}
                </h3>
                <p className="max-w-2xl text-base leading-relaxed text-ink/58 sm:text-lg">
                  {item.description}
                </p>
                
                <div className="mt-10 flex items-center gap-10">
                   <div>
                      <p className="mb-1 text-[9px] font-semibold uppercase tracking-widest text-ink/45">{item.stats.label}</p>
                      <p className="text-2xl font-semibold tracking-tight text-ink">{item.stats.value}</p>
                   </div>
                   <div className="h-10 w-px bg-ink/[0.08]" />
                   <button className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary transition-all hover:gap-4">
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
