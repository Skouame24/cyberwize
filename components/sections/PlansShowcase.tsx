"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { plans, formatPrice } from "@/lib/plans";

/*
 * SECTION : NOS OFFRES (Pricing)
 *
 * Design "Soft" & Spacieux - Cohérence de la Charte (Tout Carré) :
 * - Grille 2x2 pour des cartes très larges ("moins minces")
 * - Fonds clairs et doux (#fffcf9)
 * - L'orange Agilly (#f08222) est largement mis en valeur sur la carte recommandée
 * - Prix géants et très lisibles
 * - Tout en angles carrés (sans arrondi) pour correspondre aux boutons et cartes de la charte Agilly
 * - Ombres élégantes et diffuses
 */

type PlansShowcaseProps = {
  showDeviceHint?: boolean;
  className?: string;
};

export function PlansShowcase({ showDeviceHint = false, className }: PlansShowcaseProps) {
  const [yearly, setYearly] = useState(true);

  return (
    <section className={cn("bg-[#fffcf9] py-24 lg:py-40", className)} id="pricing">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">

        {/* EN-TÊTE */}
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row md:items-end">
          <div className="text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 mb-4"
            >
              <span className="w-8 h-[2px] bg-[#f08222]" />
              <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-[#f08222]">
                Nos Offres
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif font-bold leading-[1.05] text-[#0e131f]"
              style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}
            >
              Choisissez la formule <br />
              <span className="text-[#f08222]">adaptée à votre foyer</span>
            </motion.h2>
          </div>

          {/* TOGGLE ANNUEL / MENSUEL (Tout Carré) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center border border-black/10 bg-white p-1 shadow-[0_4px_12px_rgba(0,0,0,0.03)]"
          >
            <button
              type="button"
              onClick={() => setYearly(false)}
              className={cn(
                "relative px-6 py-2.5 text-[12px] font-bold uppercase tracking-widest transition-colors duration-300",
                !yearly ? "bg-[#0e131f] text-white" : "text-black/40 hover:text-black"
              )}
            >
              Mensuel
            </button>
            <button
              type="button"
              onClick={() => setYearly(true)}
              className={cn(
                "relative flex items-center gap-2 px-6 py-2.5 text-[12px] font-bold uppercase tracking-widest transition-colors duration-300",
                yearly ? "bg-[#0e131f] text-white" : "text-black/40 hover:text-black"
              )}
            >
              Annuel
              <span
                className={cn(
                  "px-2 py-0.5 text-[9px] font-bold leading-none uppercase tracking-wider",
                  yearly ? "bg-[#f08222] text-white" : "bg-[#f08222]/10 text-[#f08222]"
                )}
              >
                -25%
              </span>
            </button>
          </motion.div>
        </div>

        {/* GRILLE DES OFFRES (Tout Carré, Cartes larges et spacieuses) */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:gap-10">
          {plans.map((plan, index) => {
            const isFeatured = plan.featured;
            const price = yearly ? plan.yearly : plan.monthly;

            return (
              <motion.article
                key={plan.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  "relative flex flex-col justify-between overflow-hidden rounded-none border transition-all duration-500 hover:-translate-y-2",
                  isFeatured
                    ? "border-[#f08222]/30 bg-[#fff4eb] shadow-[0_24px_60px_-12px_rgba(240,130,34,0.15)]"
                    : "border-black/5 bg-white shadow-[0_24px_60px_-12px_rgba(0,0,0,0.05)]"
                )}
              >
                {/* Highlight Badge */}
                {isFeatured && plan.highlight && (
                  <div className="absolute top-0 inset-x-0 flex justify-center">
                    <div className="bg-[#f08222] text-white text-[11px] font-bold uppercase tracking-[0.2em] px-6 py-2 shadow-md shadow-[#f08222]/20">
                      {plan.highlight}
                    </div>
                  </div>
                )}

                <div className={cn("p-10 sm:p-12", isFeatured ? "pt-14 sm:pt-16" : "")}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-serif text-[2rem] font-bold text-[#0e131f] leading-tight">
                        {plan.name}
                      </h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-[#535b6a]">
                        {plan.audience}
                      </p>
                    </div>
                  </div>

                  {/* PRIX (Énorme et lisible) */}
                  <div className="mt-10 mb-8">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`${plan.id}-${yearly}`}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="flex items-baseline gap-3 flex-wrap">
                          <span className="font-serif text-[3rem] sm:text-[4rem] font-black leading-none tracking-tighter text-[#0e131f]">
                            {formatPrice(price)}
                          </span>
                          <span className="text-[14px] font-bold uppercase tracking-widest text-black/30">
                            / {yearly ? "an" : "mois"}
                          </span>
                        </div>
                        {yearly && (
                          <p className="mt-3 text-[13px] font-bold text-[#f08222]">
                            ✦ Facturé annuellement (Remise incluse)
                          </p>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  <div className={cn("h-px w-full mb-10", isFeatured ? "bg-[#f08222]/20" : "bg-black/5")} />

                  {/* PERKS */}
                  <ul className="space-y-5">
                    {plan.perks.map((perk) => (
                      <li key={perk} className="flex items-start gap-4">
                        <Check className="h-5 w-5 text-[#f08222] shrink-0 mt-0.5" strokeWidth={3} />
                        <span className="text-[16px] leading-snug text-[#535b6a]">
                          {perk}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="p-10 sm:p-12 pt-0 sm:pt-0 mt-auto">
                  <button
                    type="button"
                    onClick={() => {
                      try {
                        // eslint-disable-next-line @typescript-eslint/no-require-imports
                        const { useCart } = require("@/lib/cart-store");
                        useCart.getState().addItem({
                          planId: plan.id,
                          name: plan.name,
                          billing: yearly ? "yearly" : "monthly",
                          price: yearly ? plan.yearly : plan.monthly,
                        });
                        window.location.href = "/panier";
                      } catch {
                        window.location.href = "/panier";
                      }
                    }}
                    className={cn(
                      "block w-full py-5 text-center text-[14px] font-bold uppercase tracking-widest transition-all duration-300 rounded-none",
                      isFeatured
                        ? "bg-[#f08222] text-white hover:bg-[#d9751e] shadow-[0_8px_20px_rgba(240,130,34,0.3)] hover:shadow-[0_12px_25px_rgba(240,130,34,0.4)] hover:-translate-y-1"
                        : "bg-black/5 text-[#0e131f] hover:bg-black/10 hover:-translate-y-1"
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
          <p className="mt-16 text-center text-[15px] text-black/50">
            Besoin de couvrir plus de 10 appareils ? <Link href="/contact" className="font-bold text-[#f08222] hover:underline underline-offset-4">Contactez-nous sur mesure</Link>.
          </p>
        )}
      </div>
    </section>
  );
}
