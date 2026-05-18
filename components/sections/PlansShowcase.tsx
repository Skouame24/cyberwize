"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { plans, formatPrice, type PlanId } from "@/lib/plans";

type PlansShowcaseProps = {
  showDeviceHint?: boolean;
  className?: string;
};

export function PlansShowcase({ showDeviceHint = false, className }: PlansShowcaseProps) {
  const [yearly, setYearly] = useState(true);
  const [active, setActive] = useState<PlanId>("famille");

  const plan = plans.find((p) => p.id === active)!;

  return (
    <section className={cn("bg-warm", className)} id={showDeviceHint ? undefined : "pricing"}>
      <div className="mx-auto max-w-6xl section-pad">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Nos offres</p>
            <h2 className="mt-3 max-w-lg font-serif text-[2rem] leading-tight text-ink md:text-[2.5rem]">
              Une protection pensée pour votre foyer
            </h2>
          </div>

          <div className="inline-flex rounded-full border border-outline bg-paper p-1 text-sm">
            <button
              type="button"
              onClick={() => setYearly(false)}
              className={cn(
                "rounded-full px-4 py-2 transition-colors duration-200",
                !yearly ? "bg-ink text-white" : "text-muted"
              )}
            >
              Mensuel
            </button>
            <button
              type="button"
              onClick={() => setYearly(true)}
              className={cn(
                "rounded-full px-4 py-2 transition-colors duration-200",
                yearly ? "bg-ink text-white" : "text-muted"
              )}
            >
              Annuel
              <span className="ml-1.5 text-[11px] opacity-80">−20%</span>
            </button>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-2 sm:gap-3">
          {plans.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setActive(p.id)}
              className={cn(
                "relative rounded-2xl border px-3 py-4 text-left transition-all duration-200 sm:px-5 sm:py-5",
                active === p.id
                  ? "border-primary/50 bg-paper shadow-[0_8px_32px_-8px_rgba(240,130,34,0.25)]"
                  : "border-outline bg-paper/60 hover:border-primary/25 hover:bg-paper"
              )}
            >
              {p.highlight && (
                <span className="mb-2 block text-[11px] font-semibold uppercase tracking-wide text-primary">
                  {p.highlight}
                </span>
              )}
              <span className="font-serif text-lg text-ink sm:text-xl">{p.name}</span>
              <span className="mt-1 block text-xs text-muted sm:text-sm">{p.audience}</span>
            </button>
          ))}
        </div>

        <article className="mt-4 overflow-hidden rounded-3xl border border-outline bg-paper shadow-[0_2px_24px_-4px_rgba(25,28,29,0.08)]">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_1.1fr]">
            <div className="border-b border-outline bg-primary-muted/50 p-8 lg:border-b-0 lg:border-r lg:p-10">
              <p className="text-sm text-muted">{plan.tagline}</p>
              <h3 className="mt-2 font-serif text-3xl text-ink md:text-4xl">{plan.name}</h3>
              <p className="mt-1 text-sm text-muted">{plan.audience}</p>

              <p className="mt-8 font-serif text-5xl tracking-tight text-primary md:text-6xl">
                {formatPrice(yearly ? plan.yearly : plan.monthly)}
                <span className="ml-2 text-base font-sans font-normal text-muted">/ mois</span>
              </p>
              {yearly && (
                <p className="mt-2 text-sm text-muted">
                  Facturé annuellement · essai 14 jours gratuit
                </p>
              )}

              <Link
                href="/devis"
                className={cn(
                  "mt-8 inline-flex w-full justify-center sm:w-auto",
                  plan.featured ? "btn-primary" : "btn-outline"
                )}
              >
                Choisir {plan.name}
              </Link>
            </div>

            <div className="p-8 lg:p-10">
              <p className="text-[13px] font-medium uppercase tracking-wide text-primary-deep">
                Inclus dans l&apos;offre
              </p>
              <ul className="mt-6 space-y-4">
                {plan.perks.map((perk) => (
                  <li key={perk} className="flex gap-3 text-[15px] text-ink">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <Check className="h-3 w-3" strokeWidth={2.5} />
                    </span>
                    {perk}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-sm text-muted">
                Besoin d&apos;aide pour choisir ?{" "}
                <Link href="/contact" className="link-soft">
                  Parlez à notre équipe
                </Link>
              </p>
            </div>
          </div>
        </article>

        {showDeviceHint && (
          <p className="mt-8 text-center text-sm text-muted">
            Utilisez le simulateur ci-dessus pour trouver l&apos;offre adaptée à votre nombre
            d&apos;appareils.
          </p>
        )}
      </div>
    </section>
  );
}
