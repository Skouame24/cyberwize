"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/Badge";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { Search, FileText, Shield, Repeat } from "lucide-react";
import { springs, staggerContainer, staggerItem } from "@/lib/animations";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Audit initial",
    description:
      "Nous cartographions votre infrastructure, identifions les actifs critiques et évaluons votre posture de sécurité actuelle.",
  },
  {
    icon: FileText,
    step: "02",
    title: "Rapport & plan d'action",
    description:
      "Un rapport détaillé avec priorités, échéances et budgets. Vous savez exactement quoi faire et quand.",
  },
  {
    icon: Shield,
    step: "03",
    title: "Mise en place",
    description:
      "Nous déployons les solutions de sécurité, configurons les outils et formons vos équipes aux nouvelles pratiques.",
  },
  {
    icon: Repeat,
    step: "04",
    title: "Surveillance continue",
    description:
      "Notre SOC surveille vos systèmes 24/7, détecte les anomalies et réagit en temps réel aux incidents.",
  },
];

export function Process() {
  return (
    <section className="relative overflow-hidden bg-light-bg py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springs.soft}
          >
            <Badge variant="cyan">Notre méthode</Badge>
          </motion.div>

          <div className="mt-4">
            <AnimatedText
              text="Comment nous travaillons"
              tag="h2"
              className="text-3xl font-display text-light-text sm:text-4xl"
              delay={0.1}
            />
          </div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((s, index) => (
            <motion.div
              key={s.step}
              variants={staggerItem}
              whileHover={{
                y: -6,
                transition: springs.snappy,
              }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ ...springs.soft, delay: 0.5 + index * 0.2 }}
                  className="absolute top-8 left-full hidden h-px w-full origin-left bg-slate-200 lg:block"
                />
              )}

              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={springs.snappy}
                  className="mb-4 flex h-16 w-16 items-center justify-center rounded-none border border-primary/15 bg-primary/[0.06]"
                >
                  <s.icon className="h-7 w-7 text-cyber-cyan" />
                </motion.div>
                <span className="text-xs font-medium text-cyber-cyan/80">
                  ÉTAPE {s.step}
                </span>
                <h3 className="mt-2 text-lg font-display text-light-text">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-light-muted">
                  {s.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
