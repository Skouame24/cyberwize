"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Shield, Target, Users, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Intégrité",
    description:
      "Nous agissons avec honnêteté et transparence dans chaque audit et intervention.",
  },
  {
    icon: Target,
    title: "Excellence",
    description:
      "Standards internationaux, certifications à jour, méthodologies éprouvées.",
  },
  {
    icon: Users,
    title: "Proximité",
    description:
      "Une équipe locale en Côte d'Ivoire, disponible et réactive pour vos besoins.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Outils et techniques de pointe pour anticiper les menaces de demain.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-28">
      {/* Hero */}
      <section className="relative overflow-hidden pb-16">
        <div className="cyber-grid absolute inset-0 opacity-30" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <Badge variant="cyan">À propos</Badge>
            <h1 className="mt-4 text-4xl font-display font-bold text-cyber-white sm:text-5xl">
              Votre bouclier digital en Côte d&apos;Ivoire
            </h1>
            <p className="mt-6 text-lg text-cyber-gray">
              Cyberwize est un cabinet de cybersécurité ivoirien spécialisé dans
              la protection des entreprises contre les menaces numériques. De
              l&apos;audit à la surveillance continue, nous sécurisons votre
              transformation digitale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-display font-bold text-cyber-white">
              Nos <span className="text-cyber-cyan">valeurs</span>
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card hover className="h-full text-center">
                  <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-cyber-navy border border-cyber-muted/20">
                    <value.icon className="h-6 w-6 text-cyber-cyan" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-cyber-white">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm text-cyber-gray">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
