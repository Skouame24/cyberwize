"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { plans, formatPrice } from "@/lib/plans";

/*
 * SECTION : NOS OFFRES (Pricing)
 *
 * Design : On abandonne les onglets SaaS (trop froids) au profit
 * d'une grille de 3 cartes élégantes (Membership Cards). 
 * Typographie serif géante pour les prix, cartes hautes et épurées,
 * animations d'entrée douces (cascade/stagger).
 */

type PlansShowcaseProps = {
  showDeviceHint?: boolean;
  className?: string;
};

export function PlansShowcase({ showDeviceHint = false, className }: PlansShowcaseProps) {
  const [yearly, setYearly] = useState(true);

  return (
    <section className={cn("bg-[#fffcf9] py-24 lg:py-40", className)} id="pricing">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">

        {/* EN-TÊTE */}
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row md:items-end">
          <div className="text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2"
            >
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#f08222]">
                // Nos Offres
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-6 font-serif font-bold leading-[1.05] text-[#0e131f]"
              style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
            >
              Choisissez la formule <br />
              <span className="text-[#f08222]">adaptée à votre foyer</span>
            </motion.h2>
          </div>

          {/* TOGGLE ANNUEL / MENSUEL (Élégant) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center rounded-full border border-black/10 bg-white p-1 shadow-sm"
          >
            <button
              type="button"
              onClick={() => setYearly(false)}
              className={cn(
                "relative rounded-full px-6 py-2.5 text-[13px] font-bold uppercase tracking-widest transition-colors duration-300",
                !yearly ? "bg-[#0e131f] text-white" : "text-black/40 hover:text-black"
              )}
            >
              Mensuel
            </button>
            <button
              type="button"
              onClick={() => setYearly(true)}
              className={cn(
                "relative flex items-center gap-2 rounded-full px-6 py-2.5 text-[13px] font-bold uppercase tracking-widest transition-colors duration-300",
                yearly ? "bg-[#0e131f] text-white" : "text-black/40 hover:text-black"
              )}
            >
              Annuel
              <span
                className={cn(
                  "rounded-full px-2 py-0.5 text-[9px]",
                  yearly ? "bg-[#f08222] text-white" : "bg-[#f08222]/20 text-[#f08222]"
                )}
              >
                -25%
              </span>
            </button>
          </motion.div>
        </div>

        {/* GRILLE DES OFFRES (4 colonnes) */}
        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {plans.map((plan, index) => {
            const isFeatured = plan.featured;

            return (
              <motion.article
                key={plan.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  "relative flex flex-col justify-between overflow-hidden rounded-[2rem] border transition-transform duration-500 hover:-translate-y-2",
                  isFeatured
                    ? "border-[#f08222]/30 bg-white shadow-[0_20px_50px_-12px_rgba(240,130,34,0.15)]"
                    : "border-black/5 bg-white shadow-lg"
                )}
              >
                {/* Highlight Badge */}
                {isFeatured && (
                  <div className="absolute left-0 right-0 top-0 bg-[#f08222] py-2 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                    {plan.highlight}
                  </div>
                )}

                <div className={cn("p-8 lg:p-12", isFeatured ? "pt-14 lg:pt-16" : "")}>
                  <h3 className="font-serif text-[1.8rem] font-bold text-[#0e131f]">
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-[#535b6a]">
                    {plan.audience}
                  </p>

                  <div className="mt-10 flex items-baseline gap-2">
                    <span className="font-serif text-[3.5rem] font-black leading-none tracking-tighter text-[#0e131f] lg:text-[4rem]">
                      {formatPrice(yearly ? plan.yearly : plan.monthly)}
                    </span>
                    <span className="text-[13px] font-bold uppercase tracking-widest text-black/30">
                      {yearly ? "/ an" : "/ mois"}
                    </span>
                  </div>
                  {yearly && (
                    <p className="mt-2 text-[12px] font-medium text-[#f08222]">
                      Facturé annuellement (Remise incluse)
                    </p>
                  )}

                  <div className="my-10 h-[1px] w-full bg-black/5" />

                  <ul className="space-y-5">
                    {plan.perks.map((perk) => (
                      <li key={perk} className="flex items-start gap-4">
                        <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#f08222]/10 text-[#f08222]">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </div>
                        <span className="text-[15px] leading-snug text-[#535b6a]">
                          {perk}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-8 pt-0 lg:p-12 lg:pt-0">
                  <button
                    type="button"
                    onClick={() => {
                      const { useCart } = require("@/lib/cart-store");
                      useCart.getState().addItem({
                        planId: plan.id,
                        name: plan.name,
                        billing: yearly ? "yearly" : "monthly",
                        price: yearly ? plan.yearly : plan.monthly,
                      });
                      window.location.href = "/panier";
                    }}
                    className={cn(
                      "block w-full rounded-xl py-4 text-center text-[13px] font-bold uppercase tracking-widest transition-colors duration-300",
                      isFeatured
                        ? "bg-[#f08222] text-white hover:bg-[#d9751e]"
                        : "bg-black/5 text-[#0e131f] hover:bg-black/10"
                    )}
                  >
                    Choisir {plan.name}
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>

        {showDeviceHint && (
          <p className="mt-12 text-center text-[14px] text-black/40">
            Besoin de couvrir plus de 10 appareils ? <Link href="/contact" className="text-[#f08222] hover:underline">Contactez-nous sur mesure</Link>.
          </p>
        )}
      </div>
    </section>
  );
}
