"use client";

import { useRef } from "react";
import { Search, Shield, Radar, Siren, RotateCcw } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";

/*
 * SECTION : DEFENSE PILLARS (Comment ça marche)
 *
 * Design : "Sticky Split-Screen" (très premium/éditorial)
 * Au lieu de tout afficher d'un coup, la section gauche (Titre) reste fixe (sticky)
 * pendant que la section droite fait défiler les étapes UNE par UNE au scroll.
 * C'est exactement "au fur et à mesure quand on scrolle".
 */

const pillars = [
  {
    icon: Search,
    title: "Comprendre",
    text: "Repérer les appareils du foyer et les usages à risque. Nous analysons les réseaux, les comptes et les habitudes pour établir un diagnostic de sécurité.",
  },
  {
    icon: Shield,
    title: "Protéger",
    text: "Mise en place des boucliers : antivirus nouvelle génération, filtrage web actif, contrôle parental avancé et VPN pour naviguer sereinement, même sur les Wi-Fi publics.",
  },
  {
    icon: Radar,
    title: "Surveiller",
    text: "Nos systèmes veillent 24h/24. Alertes en temps réel contre le phishing, blocage des sites douteux et détection immédiate des tentatives de connexion suspectes.",
  },
  {
    icon: Siren,
    title: "Réagir",
    text: "En cas d'alerte, vous n'êtes pas seul. Assistance Agilly disponible pour bloquer une menace en cours ou guider votre famille pas à pas vers la résolution.",
  },
  {
    icon: RotateCcw,
    title: "Récupérer",
    text: "Le filet de sécurité ultime. Sauvegardes automatisées et restauration rapide pour garantir que vous ne perdrez jamais vos photos, documents et précieuses données.",
  },
];

/* Composant d'étape individuelle avec animation d'entrée au scroll */
function StepCard({
  p,
  index,
}: {
  p: typeof pillars[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // On traque le scroll local de cette carte spécifique
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 85%", "center center"],
  });

  // La carte "apparaît" doucement en arrivant au centre
  const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

  return (
    <div
      ref={cardRef}
      className="flex min-h-[60vh] flex-col justify-center py-16 lg:min-h-screen lg:py-0"
    >
      <motion.div style={{ opacity, y, scale }} className="relative origin-left">
        
        {/* Ligne verticale décorative (connecteur) pour desktop */}
        {index !== 0 && (
          <div className="absolute -top-32 left-[33px] hidden h-32 w-[2px] bg-black/5 lg:block" />
        )}

        <div className="flex gap-8">
          {/* Colonne Numéro / Icône */}
          <div className="flex flex-col items-center">
            <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#f08222] text-white shadow-lg shadow-[#f08222]/20">
              <p.icon className="h-7 w-7" strokeWidth={1.5} />
            </div>
            {/* Ligne qui continue vers le bas (sauf pour le dernier) */}
            {index !== pillars.length - 1 && (
              <div className="mt-6 hidden h-full w-[2px] bg-black/5 lg:block" />
            )}
          </div>

          {/* Colonne Texte */}
          <div className="pt-2">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/30">
              Étape 0{index + 1}
            </span>
            <h3 className="mt-2 font-serif text-[clamp(1.5rem,2.5vw,2rem)] font-bold leading-tight text-[#0e131f]">
              {p.title}
            </h3>
            <p className="mt-4 max-w-md text-[15px] leading-[1.8] text-[#535b6a]">
              {p.text}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function DefensePillars() {
  const containerRef = useRef<HTMLElement>(null);
  
  // Barre de progression globale liée au scroll de toute la section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="relative bg-[#fffcf9]" id="comment">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-20">
          
          {/* ── PARTIE GAUCHE : STICKY (Fixe à l'écran) ── */}
          <div className="relative pt-24 lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[40%] lg:flex-col lg:justify-center lg:pt-0">
            <div className="mb-4 inline-flex items-center gap-3">
              <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#f08222]">
                // Comment ça marche
              </span>
            </div>
            
            <h2
              className="font-serif font-bold leading-[1.05] text-[#0e131f]"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}
            >
              Votre protection en <br />
              <span className="text-[#f08222]">5 étapes claires</span>
            </h2>
            
            <p className="mt-6 max-w-sm text-[16px] leading-[1.8] text-[#535b6a]">
              Du premier réglage à l'accompagnement en cas d'incident — le même sérieux
              qu'en entreprise, expliqué simplement pour votre foyer.
            </p>

            {/* Barre de progression verticale globale (visible uniquement sur desktop) */}
            <div className="absolute right-0 top-1/2 hidden h-[40vh] w-[2px] -translate-y-1/2 bg-black/5 lg:block">
              <motion.div
                className="w-full bg-[#f08222] origin-top"
                style={{ height: progressHeight }}
              />
            </div>
          </div>

          {/* ── PARTIE DROITE : DÉFILEMENT (Étapes au fur et à mesure) ── */}
          <div className="relative lg:w-[60%]">
            {pillars.map((p, i) => (
              <StepCard key={p.title} p={p} index={i} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
