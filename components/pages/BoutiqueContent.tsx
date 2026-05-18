"use client";

import Link from "next/link";
import { Check, ShoppingBag } from "lucide-react";
import { plans, formatPrice } from "@/lib/plans";
import { useCart } from "@/lib/cart-store";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function BoutiqueContent() {
  const [yearly, setYearly] = useState(true);
  const addItem = useCart((s) => s.addItem);
  const items = useCart((s) => s.items);

  const inCart = (id: string) => items.some((i) => i.planId === id);

  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-6xl section-pad">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Boutique</p>
            <h2 className="mt-3 font-serif text-[2rem] text-ink">Choisissez votre protection</h2>
            <p className="mt-3 max-w-xl text-muted">
              Ajoutez une offre au panier, puis finalisez votre commande en ligne (CB, Mobile Money,
              virement).
            </p>
          </div>
          <div className="inline-flex rounded-full border border-outline bg-warm p-1 text-sm">
            <button
              type="button"
              onClick={() => setYearly(false)}
              className={cn("rounded-full px-4 py-2", !yearly ? "bg-ink text-white" : "text-muted")}
            >
              Mensuel
            </button>
            <button
              type="button"
              onClick={() => setYearly(true)}
              className={cn("rounded-full px-4 py-2", yearly ? "bg-ink text-white" : "text-muted")}
            >
              Annuel
            </button>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => {
            const price = yearly ? plan.yearly : plan.monthly;
            const added = inCart(plan.id);

            return (
              <Reveal
                key={plan.id}
                className={cn(
                  "flex flex-col rounded-3xl border bg-warm p-8",
                  plan.featured ? "border-primary/40 ring-1 ring-primary/15" : "border-outline"
                )}
              >
                {plan.highlight && (
                  <p className="mb-3 text-xs font-semibold uppercase text-primary-deep">
                    {plan.highlight}
                  </p>
                )}
                <h3 className="font-serif text-2xl text-ink">{plan.name}</h3>
                <p className="mt-1 text-sm text-muted">{plan.tagline}</p>
                <p className="mt-6 font-serif text-4xl text-primary">
                  {formatPrice(price)}
                  <span className="text-sm font-sans text-muted"> / mois</span>
                </p>
                <ul className="mt-6 flex-1 space-y-2 text-sm text-muted">
                  {plan.perks.map((p) => (
                    <li key={p} className="flex gap-2">
                      <Check className="h-4 w-4 shrink-0 text-primary" />
                      {p}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() =>
                    addItem({
                      planId: plan.id,
                      name: plan.name,
                      price,
                      billing: yearly ? "yearly" : "monthly",
                    })
                  }
                  className={cn(
                    "mt-8 w-full rounded-full py-3 text-sm font-semibold transition-colors",
                    added ? "bg-primary-muted text-primary-deep" : "btn-primary"
                  )}
                >
                  {added ? "Ajouté au panier" : "Ajouter au panier"}
                </button>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-outline bg-primary-muted/50 p-6">
          <p className="text-muted">
            <ShoppingBag className="mr-2 inline h-5 w-5 text-primary" />
            {items.length} article(s) dans le panier
          </p>
          <Link href="/panier" className="btn-primary">
            Voir le panier
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
