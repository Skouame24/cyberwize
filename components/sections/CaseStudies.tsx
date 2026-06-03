"use client";

import { MessageSquareWarning, Smartphone, GraduationCap } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

/*
 * SECTION : SCÉNARIOS DU QUOTIDIEN (Anciennement "Case Studies")
 *
 * Design : "Zigzag Editorial / Storytelling"
 * On abandonne la grille de 3 cartes identiques (trop corporate, trop "template").
 * On crée un flux de lecture vertical alterné (gauche/droite) pour raconter des
 * histoires de familles réelles. Le texte est plus grand, l'icône est immense
 * (effet filigrane), ce qui donne un côté "magazine" et humain.
 */

const stories = [
  {
    icon: MessageSquareWarning,
    title: "Le faux SMS bloqué avant même le clic.",
    text: "Une famille d'Abidjan reçoit un message pour un « colis en attente ». Un classique. Mais avant même que quelqu'un ne clique sur le lien, le filtre réseau domestique l'intercepte. La menace est neutralisée en silence.",
    tag: "Phishing",
    align: "left",
  },
  {
    icon: Smartphone,
    title: "La sérénité avec 10 écrans à la maison.",
    text: "Entre les téléphones des parents, la tablette du petit dernier et le PC du plus grand, c'est le chaos. Cyberwize centralise tout : temps d'écran adapté, sites filtrés par âge, le tout sans avoir l'impression de fliquer.",
    tag: "Contrôle parental",
    align: "right",
  },
  {
    icon: GraduationCap,
    title: "On apprend ensemble, sans jargon.",
    text: "Des petites alertes et conseils apparaissent de temps en temps. Ça devient un sujet de discussion à table : comment repérer un faux profil, pourquoi ce mot de passe est faible... La sécurité devient une culture familiale.",
    tag: "Éducation",
    align: "left",
  },
];

function StoryBlock({ story, index }: { story: typeof stories[0]; index: number }) {
  const ref = useRef(null);
  // On déclenche quand l'élément est bien entré dans l'écran
  const isInView = useInView(ref, { once: true, margin: "0px 0px -25% 0px" });

  const isLeft = story.align === "left";

  return (
    <div
      ref={ref}
      className={`relative flex w-full flex-col ${
        isLeft ? "lg:items-start" : "lg:items-end text-left lg:text-right"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative max-w-2xl"
      >
        {/* L'icône géante en filigrane derrière le texte */}
        <div
          className={`absolute -top-10 -z-10 text-[#f08222]/5 ${
            isLeft ? "-left-10" : "-right-10"
          }`}
        >
          <story.icon className="h-40 w-40" strokeWidth={1} />
        </div>

        {/* Le tag de catégorie */}
        <div
          className={`mb-6 inline-flex items-center gap-3 ${
            isLeft ? "" : "lg:flex-row-reverse"
          }`}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-black">
            <span className="font-bold text-[10px]">{index + 1}</span>
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#f08222]">
            {story.tag}
          </span>
        </div>

        {/* Le Titre (La citation/L'histoire) */}
        <h3
          className="font-serif font-bold leading-[1.1] text-[#0e131f]"
          style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
        >
          {story.title}
        </h3>

        {/* La ligne de séparation */}
        <div
          className={`my-8 h-[2px] w-16 bg-[#f08222] ${
            isLeft ? "" : "lg:ml-auto"
          }`}
        />

        {/* Le récit */}
        <p className="text-[17px] leading-[1.9] text-[#535b6a] lg:text-[19px]">
          {story.text}
        </p>
      </motion.div>
    </div>
  );
}

export function CaseStudies() {
  return (
    <section className="overflow-hidden bg-[#fffcf9] py-24 lg:py-40" id="exemples">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        
        {/* EN-TÊTE */}
        <div className="mb-24 text-center lg:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2"
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#f08222]">
              // Situations réelles
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 font-serif font-bold text-[#0e131f]"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)", lineHeight: 1.1 }}
          >
            Ce que ça change <br className="hidden md:block" />
            <span className="italic text-black/40">vraiment</span> au quotidien.
          </motion.h2>
        </div>

        {/* LES HISTOIRES EN ZIGZAG */}
        <div className="flex flex-col gap-24 lg:gap-32">
          {stories.map((story, index) => (
            <StoryBlock key={story.tag} story={story} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
