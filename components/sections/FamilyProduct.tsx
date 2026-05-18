"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { ShieldCheck, Lock, Users, GraduationCap, Zap, Eye, Activity } from "lucide-react";

const familyFeatures = [
  {
    title: "Contrôle parental sécurisé",
    description:
      "Paramètres par enfant, filtrage des contenus et encadrement de l’activité numérique.",
    icon: Users,
    color: "text-primary",
    bg: "bg-primary/12",
  },
  {
    title: "Navigation & données",
    description:
      "Filtrage des sites malveillants et chiffrement avancé pour les données sensibles.",
    icon: Lock,
    color: "text-accent",
    bg: "bg-accent/12",
  },
  {
    title: "Protection des appareils",
    description:
      "Antivirus, anti-malware et surveillance unifiée sur tous vos terminaux.",
    icon: ShieldCheck,
    color: "text-primary",
    bg: "bg-primary/12",
  },
  {
    title: "Éducation cybersécurité",
    description:
      "Modules interactifs pour enfants et parents : bonnes pratiques, sans jargon inutile.",
    icon: GraduationCap,
    color: "text-ink",
    bg: "bg-ink/8",
  },
];

export function FamilyProduct() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-28 lg:py-32" id="family">
      <div className="pointer-events-none absolute right-0 top-0 h-[min(520px,70vw)] w-[min(520px,70vw)] rounded-full bg-primary/[0.06] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 text-center lg:mb-16"
        >
          <p className="eyebrow justify-center">Ce que vous obtenez</p>
          <h2 className="mt-3 font-serif text-[1.75rem] text-ink md:text-[2.25rem]">
            Tout pour protéger <span className="italic text-primary">toute la famille</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">
            Contrôle parental, antivirus, navigation sécurisée et formation — les essentiels en un
            seul abonnement.
          </p>
        </motion.div>

        <div className="grid items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="space-y-3 lg:col-span-5">
            {familyFeatures.map((feature, i) => (
              <button
                key={feature.title}
                type="button"
                onClick={() => setActiveTab(i)}
                className={`group relative w-full overflow-hidden rounded-2xl border p-6 text-left transition-all duration-300 sm:p-8 hover:-translate-y-1 ${activeTab === i ? "border-primary/25 bg-white shadow-lg shadow-ink/[0.04]" : "border-transparent bg-white/40 opacity-80 hover:border-ink/10 hover:bg-white hover:opacity-100"}`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${activeTab === i ? "scale-105 bg-primary text-white" : `${feature.bg} ${feature.color}`}`}
                  >
                    <feature.icon className="h-6 w-6" strokeWidth={1.6} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block text-base font-semibold tracking-tight text-ink sm:text-lg">
                      {feature.title}
                    </span>
                    <span
                      className={`mt-1 block text-[10px] font-semibold uppercase tracking-[0.16em] ${feature.color}`}
                    >
                      Protection guidée
                    </span>
                  </div>
                </div>
                {activeTab === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-5 border-t border-ink/[0.06] pt-5"
                  >
                    <p className="text-sm leading-relaxed text-ink/58">{feature.description}</p>
                  </motion.div>
                )}
              </button>
            ))}
          </div>

          <div className="lg:col-span-7">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex h-full min-h-[420px] flex-col justify-between overflow-hidden rounded-3xl border border-ink/[0.08] bg-gradient-to-br from-white via-soft-gray/30 to-primary/[0.04] p-8 sm:p-10 lg:p-12"
            >
              <div className="pointer-events-none absolute inset-0 grid-pattern opacity-[0.04]" />

              <div className="relative z-10">
                <div className="mb-10 flex items-start justify-between gap-4">
                  <div className="rounded-xl border border-ink/[0.06] bg-white p-3 shadow-sm">
                    <Activity className="h-5 w-5 text-primary" />
                  </div>
                  <div className="rounded-full border border-ink/10 bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-ink/45">
                    Standard CyberWize
                  </div>
                </div>

                <h3 className="mb-4 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                  {familyFeatures[activeTab].title}
                </h3>
                <p className="max-w-xl text-base leading-relaxed text-ink/58 sm:text-lg">
                  {familyFeatures[activeTab].description}
                </p>
              </div>

              <div className="relative z-10 mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                <div className="rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/[0.08] to-white p-6 transition-shadow hover:shadow-md">
                  <Zap className="mb-4 h-7 w-7 text-primary" />
                  <p className="mb-1 text-sm font-semibold uppercase tracking-tight text-ink">
                    Performance
                  </p>
                  <p className="text-sm leading-relaxed text-ink/55">
                    Protection légère, sans ralentir les appareils du foyer.
                  </p>
                </div>
                <div className="rounded-2xl border border-accent/20 bg-gradient-to-br from-sky-50/70 to-white p-6 transition-shadow hover:shadow-md">
                  <Eye className="mb-4 h-7 w-7 text-accent" />
                  <p className="mb-1 text-sm font-semibold uppercase tracking-tight text-ink">
                    Visibilité
                  </p>
                  <p className="text-sm leading-relaxed text-ink/55">
                    Tableaux de bord lisibles pour parents et adolescents.
                  </p>
                </div>
              </div>

              <div className="pointer-events-none absolute right-1/4 top-1/3 h-48 w-48 rounded-full bg-primary/[0.07] blur-[80px]" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
