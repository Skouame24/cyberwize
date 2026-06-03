"use client";

import { useState } from "react";
import Link from "next/link";
import { Minus, Plus, ArrowRight, Smartphone, Laptop, Tablet, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { plans, recommendPlan, formatPrice } from "@/lib/plans";
import { PlansShowcase } from "@/components/sections/PlansShowcase";

/*
 * SECTION : OFFRES CONTENT (Simulateur + Tableau)
 *
 * Design Éditorial :
 * - Le simulateur devient une "calculatrice premium" avec des boutons minimalistes et un chiffre géant Serif.
 * - Le tableau comparatif perd ses bordures de tableau Excel pour devenir 
 *   une liste claire et lisible, avec mise en avant de l'offre Famille.
 */

const deviceIcons = [Smartphone, Laptop, Tablet, Smartphone, Laptop];

function DeviceGrid({ count }: { count: number }) {
  const slots = Math.min(count, 12);
  return (
    <div className="mt-8 flex flex-wrap justify-center gap-3">
      <AnimatePresence>
        {Array.from({ length: slots }).map((_, i) => {
          const Icon = deviceIcons[i % deviceIcons.length];
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.5, rotate: 10 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 200, damping: 15 }}
              className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black/5 text-[#535b6a] shadow-sm"
            >
              <Icon className="h-5 w-5" strokeWidth={1.5} />
            </motion.div>
          );
        })}
      </AnimatePresence>
      {count > 12 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex h-12 items-center px-4 font-serif text-lg font-bold text-[#f08222]"
        >
          +{count - 12}
        </motion.div>
      )}
    </div>
  );
}

const compareRows = [
  { label: "Appareils couverts", "1device": "1 max", "3device": "3 max", "5device": "5 max", "10device": "10 max" },
  { label: "Check Point Harmony Telco", "1device": "✓", "3device": "✓", "5device": "✓", "10device": "✓" },
  { label: "Contrôle parental intelligent", "1device": "—", "3device": "✓", "5device": "✓", "10device": "✓" },
  { label: "Anti-phishing Zero-day", "1device": "✓", "3device": "✓", "5device": "✓", "10device": "✓" },
  { label: "Sandboxing & CDR (Fichiers)", "1device": "—", "3device": "—", "5device": "✓", "10device": "✓" },
  { label: "Niveau de Support Agilly", "1device": "Standard 24/7", "3device": "Standard 24/7", "5device": "SOC Prioritaire", "10device": "SOC + Revue" },
];

export function OffresContent() {
  const [devices, setDevices] = useState(5);
  const recommendedId = recommendPlan(devices);
  const recommended = plans.find((p) => p.id === recommendedId)!;

  return (
    <>
      {/* SIMULATEUR D'APPAREILS */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            
            <div className="text-center lg:text-left">
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#f08222]">
                // Simulateur
              </span>
              <h2 className="mt-4 font-serif font-bold leading-[1.1] text-[#0e131f]" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                Combien d'appareils se connectent chez vous ?
              </h2>
              <p className="mt-6 text-[16px] leading-[1.8] text-[#535b6a]">
                Ajustez le compteur ci-contre. Nous calculerons instantanément l'offre qui correspond le mieux à votre foyer, sans frais inutiles.
              </p>
            </div>

            {/* Zone Calculatrice Interactive */}
            <div className="relative rounded-[2rem] border border-black/5 bg-[#fffcf9] p-10 text-center shadow-xl lg:p-14">
              
              <div className="flex items-center justify-center gap-8">
                <button
                  type="button"
                  onClick={() => setDevices((d) => Math.max(1, d - 1))}
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-black/10 bg-white text-black transition-colors hover:border-[#f08222] hover:text-[#f08222] disabled:opacity-30"
                  disabled={devices <= 1}
                  aria-label="Moins"
                >
                  <Minus className="h-5 w-5" strokeWidth={2} />
                </button>
                
                <div className="w-32 text-center">
                  <motion.span
                    key={devices}
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="block font-serif text-[5rem] font-black leading-none text-[#0e131f]"
                  >
                    {devices}
                  </motion.span>
                </div>

                <button
                  type="button"
                  onClick={() => setDevices((d) => Math.min(25, d + 1))}
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-black/10 bg-white text-black transition-colors hover:border-[#f08222] hover:text-[#f08222] disabled:opacity-30"
                  disabled={devices >= 25}
                  aria-label="Plus"
                >
                  <Plus className="h-5 w-5" strokeWidth={2} />
                </button>
              </div>

              <DeviceGrid count={devices} />

              <div className="mt-12 rounded-2xl bg-[#0e131f] p-6 text-left text-white shadow-lg lg:p-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#f08222]">
                  Offre recommandée
                </p>
                <div className="mt-3 flex items-end justify-between">
                  <div>
                    <p className="font-serif text-[2rem] font-bold leading-none">{recommended.name}</p>
                    <p className="mt-2 text-[13px] text-white/50">{recommended.audience}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-serif text-[2.5rem] font-black leading-none text-[#f08222]">
                      {formatPrice(recommended.yearly)}
                    </p>
                    <span className="text-[11px] font-medium text-white/40">/ mois (annuel)</span>
                  </div>
                </div>
                
                <button
                  type="button"
                  onClick={() => {
                    const { useCart } = require("@/lib/cart-store");
                    useCart.getState().addItem({
                      planId: recommended.id,
                      name: recommended.name,
                      billing: "yearly",
                      price: recommended.yearly,
                    });
                    window.location.href = "/panier";
                  }}
                  className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl bg-[#f08222] py-4 text-[13px] font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#d9751e]"
                >
                  Choisir cette offre
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* RAPPEL DES CARTES DE PRIX (Déjà redesignées) */}
      <PlansShowcase showDeviceHint />

      {/* TABLEAU COMPARATIF */}
      <section className="bg-white py-24 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          
          <div className="mb-16 text-center">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#f08222]">
              // Comparatif détaillé
            </span>
            <h2 className="mt-4 font-serif font-bold leading-[1.1] text-[#0e131f]" style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}>
              Qu'est-ce qui est inclus ?
            </h2>
          </div>

          <div className="overflow-x-auto pb-8">
            <table className="w-full min-w-[700px] text-left">
              <thead>
                <tr>
                  <th className="w-1/4 pb-8 pl-6 font-serif text-[1.2rem] text-[#0e131f]/50 font-normal">Fonctionnalité</th>
                  {plans.map((p) => (
                    <th
                      key={p.id}
                      className={cn(
                        "w-1/4 pb-8 text-center font-serif text-[1.6rem] font-bold",
                        p.featured ? "text-[#f08222]" : "text-[#0e131f]"
                      )}
                    >
                      {p.name}
                      {p.featured && (
                        <span className="mx-auto mt-3 block w-12 h-1 rounded-full bg-[#f08222]" />
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row) => (
                  <tr key={row.label} className="border-t border-black/5 transition-colors hover:bg-black/[0.02]">
                    <td className="py-6 pl-6 text-[15px] font-medium text-[#0e131f]">
                      {row.label}
                    </td>
                    {plans.map((p) => {
                      const value = (row as any)[p.id];
                      return (
                        <td
                          key={p.id}
                          className={cn(
                            "py-6 text-center text-[15px]",
                            p.featured ? "font-bold text-[#0e131f] bg-[#f08222]/[0.03]" : "text-[#535b6a]"
                          )}
                        >
                          {value === "Inclus" || value === "✓" ? (
                            <Check className="mx-auto h-5 w-5 text-[#f08222]" strokeWidth={p.featured ? 3 : 2} />
                          ) : (
                            value || "—"
                          )}
                        </td>
                      );
                    })}
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
