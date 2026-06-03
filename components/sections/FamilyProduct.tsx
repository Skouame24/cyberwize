"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { ShieldCheck, Lock, Users, GraduationCap } from "lucide-react";

/*
 * FamilyProduct — Ce que vous obtenez
 *
 * Fidèle au style agilly.net section "Ce que nous faisons pour vous" :
 * - Fond ORANGE plein (#f08222) — pas d'orange comme accent, comme FOND
 * - Titre blanc centré
 * - Cards blanches avec image en haut, texte en bas
 * - Navigation par onglets (comme les tabs 1.Agilité, 2.Expertise de agilly.net)
 * - Photo réelle ou image représentative, pas d'icônes techniques
 *
 * Animations :
 * - Onglets actifs : underline orange qui glisse (layoutId)
 * - Card de détail : fondu + légère translation (4px seulement)
 *   → Aucun bounce, aucune rotation
 */

const features = [
  {
    num: "01",
    title: "Protégez vos enfants du cyberharcèlement",
    short: "Contrôle parental",
    description:
      "Supervisez sereinement l'activité en ligne de vos enfants, bloquez les contenus inappropriés et fixez des limites de temps adaptées à chaque âge. Évitez l'exposition aux dangers et aux harceleurs.",
    icon: Users,
    image: "/family_laptop_black.png",
  },
  {
    num: "02",
    title: "Sécurisez vos transactions et achats en ligne",
    short: "Sécurité bancaire",
    description:
      "Bloquez le phishing, les faux sites de paiement et protégez vos comptes bancaires contre le piratage. Vos données personnelles restent privées et sous contrôle.",
    icon: Lock,
    image: "/black_woman_phone.png",
  },
  {
    num: "03",
    title: "Défense antivirus sur tous vos appareils",
    short: "Antivirus complet",
    description:
      "Surveillez et sécurisez tous les smartphones, tablettes et ordinateurs de la maison 24h/24. Protection contre les virus, rançongiciels et logiciels espions en temps réel.",
    icon: ShieldCheck,
    image: "/hero_human.png",
  },
  {
    num: "04",
    title: "Formez votre famille aux pièges du web",
    short: "Formation digitale",
    description:
      "Des guides pratiques pour apprendre aux enfants et aux parents à repérer les arnaques, les fausses informations et les comportements à risque en ligne.",
    icon: GraduationCap,
    image: "/mother_daughter_tablet_black.png",
  },
];

export function FamilyProduct() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#f08222]" id="family">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 py-20 lg:py-28">

        {/* ── En-tête centré — style agilly.net ── */}
        <div className="text-center">
          <motion.p
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ clipPath: "inset(0 0% 0 0)" }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.3em] text-white/70"
          >
            <span>// SERVICES</span>
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="mt-4 font-black text-white"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
          >
            Ce que nous faisons pour vous
          </motion.h2>
        </div>

        {/* ── Tabs navigation — style agilly.net ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex flex-wrap justify-center gap-2"
        >
          {features.map((f, i) => (
            <button
              key={f.num}
              type="button"
              onClick={() => setActive(i)}
              className={`relative flex items-center gap-2 px-5 py-3 text-[12px] font-bold uppercase tracking-[0.16em] transition-colors duration-200 ${active === i
                ? "bg-black text-white"
                : "bg-white/20 text-white hover:bg-white/30"
                }`}
            >
              <span className="text-[10px] opacity-60">{f.num}.</span>
              {f.short}
            </button>
          ))}
        </motion.div>

        {/* ── Panneau de détail — style agilly.net (image gauche + card blanche droite) ── */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 grid items-center gap-0 overflow-hidden bg-white lg:grid-cols-2"
        >
          {/* Photo — zone image (utilisez une photo réelle d'équipe/famille) */}
          <div className="relative h-64 bg-[#1a1a1a] lg:h-full lg:min-h-[380px]">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-80 transition-all duration-500"
              style={{ backgroundImage: `url('${features[active].image}')` }}
            />
            {/* Numéro en overlay */}
            <div className="absolute bottom-0 left-0 bg-[#f08222] px-5 py-3">
              <span className="text-[2.5rem] font-black leading-none text-white/25 select-none">
                {features[active].num}
              </span>
            </div>
          </div>

          {/* Texte */}
          <div className="p-8 lg:p-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#f08222]">
              {features[active].short}
            </p>
            <h3
              className="mt-4 font-black leading-[1.15] text-black"
              style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.9rem)" }}
            >
              {features[active].title}
            </h3>
            <div className="my-5 h-[2px] w-12 bg-[#f08222]" />
            <p className="text-[15px] leading-[1.8] text-[#535b6a]">
              {features[active].description}
            </p>

            {/* Valeurs Agilly associées */}
            {(() => {
              const Icon = features[active].icon;
              return (
                <div className="mt-8 flex items-center gap-3">
                  <Icon className="h-5 w-5 text-[#f08222]" strokeWidth={1.8} />
                  <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-black/40">
                    Protection guidée par Agilly
                  </span>
                </div>
              );
            })()}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
