"use client";

import { useState } from "react";
import Link from "next/link";
import { Minus, Plus, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { plans, recommendPlan, formatPrice } from "@/lib/plans";
import { PlansShowcase } from "@/components/sections/PlansShowcase";

const compareRows = [
  { label: "Appareils", essentiel: "3", famille: "10", premium: "Illimité" },
  { label: "Contrôle parental", essentiel: "Basique", famille: "Avancé", premium: "Avancé" },
  { label: "VPN familial", essentiel: "—", famille: "✓", premium: "✓" },
  { label: "Éducation", essentiel: "—", famille: "✓", premium: "✓" },
  { label: "Dark web", essentiel: "—", famille: "—", premium: "✓" },
  { label: "Support", essentiel: "Email", famille: "Prioritaire", premium: "24/7" },
];

export function OffresContent() {
  const [devices, setDevices] = useState(5);
  const recommendedId = recommendPlan(devices);
  const recommended = plans.find((p) => p.id === recommendedId)!;

  return (
    <>
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl section-pad !py-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <p className="eyebrow">Simulateur</p>
              <h2 className="mt-3 font-serif text-[1.75rem] text-ink md:text-[2rem]">
                Combien d&apos;appareils protégez-vous ?
              </h2>
              <p className="mt-3 text-[15px] text-muted">
                Ajustez le curseur — nous vous indiquons l&apos;offre la plus adaptée.
              </p>
            </div>

            <div className="rounded-3xl border border-outline bg-warm p-8">
              <div className="flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setDevices((d) => Math.max(1, d - 1))}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-outline bg-paper text-ink hover:border-primary/40"
                  aria-label="Moins"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="font-serif text-5xl text-primary">{devices}</span>
                <button
                  type="button"
                  onClick={() => setDevices((d) => Math.min(20, d + 1))}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-outline bg-paper text-ink hover:border-primary/40"
                  aria-label="Plus"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-8 rounded-2xl border border-primary/25 bg-primary-muted/60 p-5">
                <p className="text-sm text-muted">Notre recommandation</p>
                <p className="mt-1 font-serif text-2xl text-ink">{recommended.name}</p>
                <p className="mt-1 text-sm text-muted">{recommended.audience}</p>
                <p className="mt-3 font-serif text-xl text-primary">
                  {formatPrice(recommended.yearly)}
                  <span className="text-sm font-sans text-muted"> / mois (annuel)</span>
                </p>
              </div>

              <Link href="/devis" className="btn-primary mt-6 inline-flex w-full justify-center sm:w-auto">
                Essai gratuit 14 jours
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <PlansShowcase showDeviceHint />

      <section className="border-t border-outline bg-background">
        <div className="mx-auto max-w-6xl section-pad">
          <p className="eyebrow">Comparatif détaillé</p>
          <h2 className="mt-3 font-serif text-[1.75rem] text-ink md:text-[2rem]">
            Fonctionnalités par offre
          </h2>

          <div className="mt-10 overflow-x-auto rounded-2xl border border-outline bg-paper">
            <table className="w-full min-w-[600px] text-left text-sm">
              <thead>
                <tr className="border-b border-outline bg-warm/80">
                  <th className="p-4 font-medium text-muted">Fonctionnalité</th>
                  {plans.map((p) => (
                    <th
                      key={p.id}
                      className={cn(
                        "p-4 font-serif",
                        p.featured ? "text-primary" : "text-ink"
                      )}
                    >
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row) => (
                  <tr key={row.label} className="border-b border-outline/80 last:border-0">
                    <td className="p-4 text-ink">{row.label}</td>
                    <td className="p-4 text-muted">{row.essentiel}</td>
                    <td className="p-4 font-medium text-ink">{row.famille}</td>
                    <td className="p-4 text-muted">{row.premium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
