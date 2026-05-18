"use client";

import { Search, Shield, Radar, Siren, RotateCcw } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";

const pillars = [
  {
    icon: Search,
    title: "Comprendre",
    text: "Repérer les appareils du foyer et les usages à risque (réseaux, comptes, enfants).",
  },
  {
    icon: Shield,
    title: "Protéger",
    text: "Antivirus, filtrage web, contrôle parental et VPN pour naviguer sereinement.",
  },
  {
    icon: Radar,
    title: "Surveiller",
    text: "Alertes en temps réel : phishing, sites douteux, tentatives de connexion suspectes.",
  },
  {
    icon: Siren,
    title: "Réagir",
    text: "Assistance Agilly pour bloquer une menace ou guider votre famille pas à pas.",
  },
  {
    icon: RotateCcw,
    title: "Récupérer",
    text: "Sauvegardes et restauration pour ne pas perdre photos, documents et données.",
  },
];

export function DefensePillars() {
  return (
    <section className="border-y border-outline bg-paper" id="comment">
      <div className="mx-auto max-w-6xl section-pad">
        <SectionHeader
          eyebrow="Comment ça marche"
          title={
            <>
              Votre protection en{" "}
              <span className="italic text-primary">5 étapes claires</span>
            </>
          }
          description="Du premier réglage à l'accompagnement en cas d'incident — le même sérieux qu'en entreprise, expliqué pour la maison."
        />

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <StaggerItem
              key={p.title}
              as="div"
              className="group rounded-2xl border border-outline bg-warm/60 p-6 transition-shadow hover:border-primary/25 hover:bg-primary-muted/30 hover:shadow-md"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                <p.icon className="h-5 w-5" strokeWidth={1.6} />
              </span>
              <span className="mt-4 block font-serif text-xs text-primary/80">
                Étape {i + 1}
              </span>
              <h3 className="mt-1 font-serif text-xl text-ink">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
