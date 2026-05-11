"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  Search,
  Shield,
  Monitor,
  GraduationCap,
  FileCheck,
  Lock,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Audit & Conseil",
    price: "Sur devis",
    description:
      "Évaluation complète de votre posture de sécurité. Analyse des risques, cartographie des actifs, et plan de remédiation priorisé.",
    features: [
      "Audit technique & organisationnel",
      "Cartographie des risques",
      "Feuille de route de remédiation",
      "Rapport exécutif détaillé",
    ],
  },
  {
    icon: Shield,
    title: "Pentest",
    price: "Sur devis",
    description:
      "Tests d'intrusion réalisés par des experts certifiés. OWASP, réseau, WiFi, social engineering et red teaming.",
    features: [
      "Test d'intrusion web & mobile",
      "Test infrastructure réseau",
      "Social engineering",
      "Rapport avec preuves de concept",
    ],
  },
  {
    icon: Monitor,
    title: "SOC 24/7",
    price: "Abonnement",
    description:
      "Security Operations Center dédié. Surveillance, détection et réponse aux incidents en temps réel, 24h/24 et 7j/7.",
    features: [
      "Surveillance temps réel",
      "Détection des intrusions",
      "Réponse aux incidents",
      "Reporting mensuel",
    ],
  },
  {
    icon: GraduationCap,
    title: "Formation",
    price: "Sur devis",
    description:
      "Sensibilisation et formations cybersécurité pour vos équipes. Phishing simulé, bonnes pratiques, conformité RGPD.",
    features: [
      "Campagnes de phishing",
      "Ateliers sensibilisation",
      "Formations certifiantes",
      "E-learning sur mesure",
    ],
  },
  {
    icon: FileCheck,
    title: "Conformité",
    price: "Sur devis",
    description:
      "Accompagnement vers la conformité ISO 27001, RGPD, PCI-DSS. Documentation, mise en place du SMSI et audits internes.",
    features: [
      "Accompagnement ISO 27001",
      "Mise en conformité RGPD",
      "Politiques de sécurité",
      "Audit interne",
    ],
  },
  {
    icon: Lock,
    title: "Gestion des vulnérabilités",
    price: "Abonnement",
    description:
      "Scan continu de vos infrastructures, priorisation des correctifs et suivi de la réduction de votre surface d'attaque.",
    features: [
      "Scan automatique continu",
      "Priorisation des risques",
      "Suivi des correctifs",
      "Tableau de bord temps réel",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-28">
      <section className="relative overflow-hidden pb-16">
        <div className="cyber-grid absolute inset-0 opacity-30" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <Badge variant="cyan">Nos Services</Badge>
            <h1 className="mt-4 text-4xl font-display font-bold text-cyber-white sm:text-5xl">
              Des solutions de sécurité{" "}
              <span className="text-cyber-cyan">sur mesure</span>
            </h1>
            <p className="mt-6 text-lg text-cyber-gray">
              De l&apos;audit initial à la surveillance continue, nous couvrons
              tous les aspects de votre cybersécurité avec des solutions
              adaptées à votre secteur et votre taille.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card hover glow className="h-full flex flex-col">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-cyber-navy border border-cyber-muted/20">
                    <service.icon className="h-6 w-6 text-cyber-cyan" />
                  </div>
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-xl font-display font-semibold text-cyber-white">
                      {service.title}
                    </h3>
                    <span className="text-xs font-medium text-cyber-cyan">
                      {service.price}
                    </span>
                  </div>
                  <p className="mb-4 text-sm text-cyber-gray">
                    {service.description}
                  </p>
                  <ul className="mb-6 space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-cyber-gray"
                      >
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyber-cyan" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <Button variant="outline" size="sm" className="w-full">
                      En savoir plus <ArrowRight className="ml-2 h-3 w-3" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
