"use client";

import { motion } from "motion/react";
import { BookOpen, Lock, Cpu } from "lucide-react";
import {
  
  staggerContainer,
  staggerItem,
  mobbinCardHover,
  mobbinCardTap,
  fadeUp,
} from "@/lib/animations";

const commitments = [
  {
    title: "Spécifications claires",
    description:
      "Chaque protection exposée dans l’interface correspond à un comportement réel du moteur — pas de marketing flou.",
    icon: BookOpen,
  },
  {
    title: "Données du foyer",
    description:
      "Chiffrement et minimisation : la confiance repose sur des choix techniques explicables, pas sur la collecte massive.",
    icon: Lock,
  },
  {
    title: "Ingénierie continue",
    description:
      "Mises à jour des règles de filtrage et des modèles de menace alignées sur le paysage réel des attaques grand public.",
    icon: Cpu,
  },
];

export function About() {
  return (
    <section className="border-t border-ink/[0.06] bg-background py-20 md:py-24 lg:py-28" id="about">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-2xl"
        >
          <p className="text-sm font-medium text-muted">À propos</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-ink sm:text-[2rem]">
            Agilly derrière le produit
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted">
            CyberWize Family est un <span className="font-medium text-ink">produit logiciel</span> pour
            le foyer : exigences de sécurité alignées sur la défense en profondeur, interface pensée pour
            les parents. Conception et accompagnement par{" "}
            <span className="font-medium text-ink">Agilly</span>. Référence :{" "}
            <a
              href="https://cyberwizefamily.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-ink underline decoration-ink/20 underline-offset-4 hover:decoration-primary"
            >
              cyberwizefamily.com
            </a>
            .
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 grid gap-3 md:grid-cols-3"
        >
          {commitments.map((item) => (
            <motion.div
              key={item.title}
              variants={staggerItem}
              whileHover={mobbinCardHover}
              whileTap={mobbinCardTap}
              className="rounded-lg border border-ink/[0.08] bg-white p-6 shadow-[0_1px_2px_rgba(10,14,20,0.04)]"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-soft-gray text-ink">
                <item.icon className="h-4 w-4" strokeWidth={1.75} />
              </div>
              <h3 className="mt-4 text-base font-semibold tracking-[-0.02em] text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
