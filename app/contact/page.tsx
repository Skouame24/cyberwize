"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
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
            <Badge variant="cyan">Contact</Badge>
            <h1 className="mt-4 text-4xl font-display font-bold text-cyber-white sm:text-5xl">
              Parlons de votre <span className="text-cyber-cyan">sécurité</span>
            </h1>
            <p className="mt-6 text-lg text-cyber-gray">
              Besoin d&apos;un audit, d&apos;une formation ou d&apos;une
              surveillance SOC ? Notre équipe vous répond sous 24h.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Contact info */}
            <div className="space-y-6 lg:col-span-1">
              <Card>
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyber-navy border border-cyber-muted/20">
                    <Mail className="h-5 w-5 text-cyber-cyan" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-cyber-white">
                      Email
                    </h3>
                    <p className="mt-1 text-sm text-cyber-gray">
                      contact@cyberwize.ci
                    </p>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyber-navy border border-cyber-muted/20">
                    <Phone className="h-5 w-5 text-cyber-cyan" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-cyber-white">
                      Téléphone
                    </h3>
                    <p className="mt-1 text-sm text-cyber-gray">
                      +225 XX XX XX XX
                    </p>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyber-navy border border-cyber-muted/20">
                    <MapPin className="h-5 w-5 text-cyber-cyan" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-cyber-white">
                      Adresse
                    </h3>
                    <p className="mt-1 text-sm text-cyber-gray">
                      Abidjan, Côte d&apos;Ivoire
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <Card className="h-full">
                <h2 className="mb-6 text-xl font-display font-semibold text-cyber-white">
                  Envoyer un message
                </h2>
                <form className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-cyber-gray">
                        Nom
                      </label>
                      <input
                        type="text"
                        className="w-full rounded-lg border border-cyber-muted/20 bg-cyber-black px-4 py-3 text-sm text-cyber-white outline-none transition-colors focus:border-cyber-cyan"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-cyber-gray">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full rounded-lg border border-cyber-muted/20 bg-cyber-black px-4 py-3 text-sm text-cyber-white outline-none transition-colors focus:border-cyber-cyan"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-cyber-gray">
                      Sujet
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-lg border border-cyber-muted/20 bg-cyber-black px-4 py-3 text-sm text-cyber-white outline-none transition-colors focus:border-cyber-cyan"
                      placeholder="Demande d'audit"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-cyber-gray">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      className="w-full rounded-lg border border-cyber-muted/20 bg-cyber-black px-4 py-3 text-sm text-cyber-white outline-none transition-colors focus:border-cyber-cyan"
                      placeholder="Décrivez votre besoin..."
                    />
                  </div>
                  <Button variant="primary" className="w-full sm:w-auto">
                    <Send className="mr-2 h-4 w-4" />
                    Envoyer
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
