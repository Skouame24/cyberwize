"use client";

import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";
import { CountUp } from "@/components/ui/CountUp";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: 300, suffix: "+", label: "Familles accompagnées", sub: "En Côte d'Ivoire" },
  { value: 3800, suffix: "+", label: "Appareils protégés", sub: "Téléphones, PC, tablettes" },
  { value: 10, suffix: "+", label: "Ans d'expertise Agilly", sub: "Cybersécurité managée" },
  { value: 99, suffix: "%", label: "Clients satisfaits", sub: "Support réactif" },
];

const values = [
  {
    title: "Simple à utiliser",
    text: "Un tableau de bord clair : vous voyez ce qui est protégé, sans formation technique.",
  },
  {
    title: "Transparent",
    text: "Pas de boîte noire — vous comprenez les alertes et les réglages pour vos enfants.",
  },
  {
    title: "Accompagnement humain",
    text: "Une équipe Agilly joignable pour l'installation, les questions et les incidents.",
  },
];

export function HomeMission() {
  return (
    <section className="bg-warm" id="pourquoi">
      <div className="mx-auto max-w-6xl section-pad">
        <SectionHeader
          eyebrow="Pourquoi Cyberwize Family"
          title={
            <>
              La protection d&apos;un expert,{" "}
              <span className="italic text-primary">à la portée de votre foyer</span>
            </>
          }
          description="Nous aidons les familles et petites structures à se protéger du phishing, des arnaques et des contenus à risque — avec des outils pro et un langage accessible."
        />

        <Link href="/about" className="link-soft mt-6 inline-flex items-center gap-2">
          En savoir plus sur Agilly
          <ArrowRight className="h-4 w-4" />
        </Link>

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <StaggerItem
              key={s.label}
              as="div"
              className="rounded-2xl border border-outline bg-paper p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <p className="font-serif text-3xl text-primary md:text-4xl">
                <CountUp value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm font-medium text-ink">{s.label}</p>
              <p className="mt-1 text-xs text-muted">{s.sub}</p>
            </StaggerItem>
          ))}
        </Stagger>

        <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
          {values.map((v) => (
            <StaggerItem key={v.title} as="div" className="border-t border-outline pt-6">
              <h3 className="font-serif text-lg text-ink">{v.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{v.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
