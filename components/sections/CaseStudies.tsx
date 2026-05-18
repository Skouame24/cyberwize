"use client";

import { MessageSquareWarning, Smartphone, GraduationCap } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";

const stories = [
  {
    icon: MessageSquareWarning,
    title: "Arnaque SMS évitée",
    text: "Une famille d'Abidjan reçoit une alerte avant de cliquer sur un faux lien « colis en attente ». Le filtre bloque la page et l'équipe Agilly confirme la menace.",
    tag: "Phishing",
  },
  {
    icon: Smartphone,
    title: "10 appareils, un seul tableau de bord",
    text: "Parents + adolescents : téléphones, tablettes et PC centralisés. Temps d'écran et sites filtrés par profil, sans espionner inutilement.",
    tag: "Contrôle parental",
  },
  {
    icon: GraduationCap,
    title: "Les enfants apprennent en sécurité",
    text: "Modules courts sur mots de passe et réseaux sociaux — la famille discute des bons réflexes autour du dîner, pas devant un manuel technique.",
    tag: "Sensibilisation",
  },
];

export function CaseStudies() {
  return (
    <section className="border-t border-outline bg-warm" id="exemples">
      <div className="mx-auto max-w-6xl section-pad">
        <SectionHeader
          eyebrow="Exemples concrets"
          title={
            <>
              Ce que Cyberwize change{" "}
              <span className="italic text-primary">au quotidien</span>
            </>
          }
          description="Des situations réelles pour les familles — pas des études de cas entreprises."
        />

        <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
          {stories.map((s) => (
            <StaggerItem
              key={s.title}
              as="div"
              className="rounded-2xl border border-outline bg-paper p-7 transition-shadow hover:shadow-md"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-primary-deep">
                {s.tag}
              </span>
              <span className="mt-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <s.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-serif text-xl text-ink">{s.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">{s.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
