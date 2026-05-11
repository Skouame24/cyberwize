"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Send, Check } from "lucide-react";

const services = [
  "Audit & Conseil",
  "Pentest",
  "SOC 24/7",
  "Formation",
  "Conformité",
  "Gestion des vulnérabilités",
];

export default function DevisPage() {
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
            <Badge variant="cyan">Devis</Badge>
            <h1 className="mt-4 text-4xl font-display font-bold text-cyber-white sm:text-5xl">
              Demandez un <span className="text-cyber-cyan">devis gratuit</span>
            </h1>
            <p className="mt-6 text-lg text-cyber-gray">
              Décrivez votre besoin et nous vous enverrons une proposition
              détaillée sous 24 heures ouvrées.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full">
              <form className="space-y-6">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-cyber-gray">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-lg border border-cyber-muted/20 bg-cyber-black px-4 py-3 text-sm text-cyber-white outline-none transition-colors focus:border-cyber-cyan"
                      placeholder="Jean Kouassi"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-cyber-gray">
                      Email professionnel *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full rounded-lg border border-cyber-muted/20 bg-cyber-black px-4 py-3 text-sm text-cyber-white outline-none transition-colors focus:border-cyber-cyan"
                      placeholder="jean@entreprise.ci"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-cyber-gray">
                      Entreprise
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-lg border border-cyber-muted/20 bg-cyber-black px-4 py-3 text-sm text-cyber-white outline-none transition-colors focus:border-cyber-cyan"
                      placeholder="Nom de l'entreprise"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-cyber-gray">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      className="w-full rounded-lg border border-cyber-muted/20 bg-cyber-black px-4 py-3 text-sm text-cyber-white outline-none transition-colors focus:border-cyber-cyan"
                      placeholder="+225 XX XX XX XX"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-cyber-gray">
                    Services souhaités
                  </label>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {services.map((service) => (
                      <label
                        key={service}
                        className="flex cursor-pointer items-center gap-3 rounded-lg border border-cyber-muted/20 bg-cyber-black px-4 py-3 transition-colors hover:border-cyber-cyan/30"
                      >
                        <input
                          type="checkbox"
                          className="h-4 w-4 rounded border-cyber-muted bg-cyber-black text-cyber-cyan focus:ring-cyber-cyan"
                        />
                        <span className="text-sm text-cyber-gray">
                          {service}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-cyber-gray">
                    Description du besoin *
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full rounded-lg border border-cyber-muted/20 bg-cyber-black px-4 py-3 text-sm text-cyber-white outline-none transition-colors focus:border-cyber-cyan"
                    placeholder="Décrivez votre infrastructure, vos enjeux et vos objectifs..."
                  />
                </div>

                <Button variant="primary" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Demander mon devis
                </Button>

                <p className="flex items-center justify-center gap-2 text-xs text-cyber-muted">
                  <Check className="h-3 w-3 text-cyber-green" />
                  Réponse garantie sous 24h ouvrées
                </p>
              </form>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
