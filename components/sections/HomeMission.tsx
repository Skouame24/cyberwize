"use client";

import { Stagger, StaggerItem } from "@/components/ui/Stagger";
import { CountUp } from "@/components/ui/CountUp";
import { SectionHeader } from "@/components/ui/SectionHeader";

const stats = [
  { value: 300, suffix: "+", label: "Familles accompagnées", sub: "En Côte d'Ivoire" },
  { value: 3800, suffix: "+", label: "Appareils protégés", sub: "Téléphones, PC, tablettes" },
  { value: 10, suffix: "+", label: "Ans d'expertise Agilly", sub: "Cybersécurité managée" },
  { value: 99, suffix: "%", label: "Clients satisfaits", sub: "Support réactif" },
];

export function HomeMission() {
  return (
    <section className="bg-warm" id="chiffres">
      <div className="mx-auto max-w-6xl section-pad">
        <SectionHeader
          eyebrow="En chiffres"
          title="La confiance des familles, au quotidien"
          description="Des résultats concrets — pas des promesses marketing."
          align="center"
          className="mx-auto text-center"
        />

        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <StaggerItem
              key={s.label}
              as="div"
              className="rounded-2xl border border-outline bg-paper p-6 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <p className="font-serif text-3xl text-primary md:text-4xl">
                <CountUp value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm font-medium text-ink">{s.label}</p>
              <p className="mt-1 text-xs text-muted">{s.sub}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
