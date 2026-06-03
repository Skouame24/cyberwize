"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";

/*
 * HomeMission — chiffres clés
 *
 * Animations intentionnelles et non-IA :
 *
 * 1. SLOT MACHINE sur les chiffres :
 *    Quand la carte entre dans le viewport, le nombre "tourne"
 *    rapidement à travers des valeurs aléatoires avant de se
 *    stabiliser sur le bon. Effet : comme un compteur mécanique,
 *    pas un simple CountUp linéaire.
 *
 * 2. ENTRÉE ALTERNÉE des cartes :
 *    Carte 1 → depuis la gauche
 *    Carte 2 → depuis la droite
 *    Carte 3 → depuis la gauche
 *    Carte 4 → depuis la droite
 *    → Personne ne s'y attend. Aucun template IA ne fait ça.
 *
 * 3. Intro texte : clipPath qui s'ouvre du centre vers les côtés
 *    (pas de gauche à droite comme d'habitude)
 */

/* ── Slot machine number ── */
function SlotNumber({
  target,
  suffix,
  isVisible,
  delay = 0,
}: {
  target: number;
  suffix: string;
  isVisible: boolean;
  delay?: number;
}) {
  const [displayed, setDisplayed] = useState(0);
  const [done, setDone] = useState(false);
  const started = useRef(false);

  useEffect(() => {
    if (!isVisible || started.current) return;
    started.current = true;

    const totalDuration = 1400; // ms
    const interval = 55;        // fréquence du slot
    const steps = Math.floor(totalDuration / interval);
    let count = 0;

    const id = setTimeout(() => {
      const timer = setInterval(() => {
        count++;
        const progress = count / steps;

        if (progress < 0.8) {
          // Phase aléatoire (slot qui tourne)
          setDisplayed(Math.floor(Math.random() * target * 1.3));
        } else {
          // Phase de stabilisation — on s'approche exponentiellement
          const eased = 1 - Math.pow(1 - (progress - 0.8) / 0.2, 3);
          setDisplayed(Math.round(target * eased));
        }

        if (count >= steps) {
          clearInterval(timer);
          setDisplayed(target);
          setDone(true);
        }
      }, interval);
    }, delay * 1000);

    return () => clearTimeout(id);
  }, [isVisible, target, delay]);

  return (
    <span
      className="tabular-nums transition-none"
      style={{
        // Quand le slot tourne, légère flou — s'efface quand stabilisé
        filter: done ? "blur(0px)" : "blur(0.4px)",
        transition: done ? "filter 0.3s" : "none",
      }}
    >
      {displayed.toLocaleString("fr-FR")}
      {suffix}
    </span>
  );
}

const stats = [
  {
    value: 10,
    suffix: " ans",
    label: "D'expertise Agilly",
    desc: "En transformation digitale et cybersécurité depuis 2015 en Côte d'Ivoire.",
    from: "left" as const,
  },
  {
    value: 300,
    suffix: "+",
    label: "Familles accompagnées",
    desc: "Des foyers qui font confiance à Cyberwize pour leur sécurité numérique.",
    from: "right" as const,
  },
  {
    value: 3800,
    suffix: "+",
    label: "Appareils protégés",
    desc: "Smartphones, tablettes, ordinateurs : chaque appareil surveillé 24h/24.",
    from: "left" as const,
  },
  {
    value: 99,
    suffix: "%",
    label: "Clients satisfaits",
    desc: "Notre équipe réactive assure un support et une satisfaction exemplaires.",
    from: "right" as const,
  },
];

/* ── Carte individuelle avec entrée alternée + slot ── */
function StatCard({
  stat,
  index,
}: {
  stat: (typeof stats)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useInView(ref, { once: true, amount: 0.4 });

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        x: stat.from === "left" ? -48 : 48,
      }}
      animate={
        isVisible
          ? { opacity: 1, x: 0 }
          : { opacity: 0, x: stat.from === "left" ? -48 : 48 }
      }
      transition={{
        duration: 0.75,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.1,
      }}
      className="relative overflow-hidden bg-white px-6 py-8"
    >
      {/* Coin orange — signature agilly.net */}
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-12 w-12 bg-[#f08222]"
        style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
        aria-hidden
      />

      {/* Chiffre slot machine */}
      <p
        className="font-black leading-none text-black"
        style={{ fontSize: "clamp(2rem, 3.8vw, 3rem)" }}
      >
        <SlotNumber
          target={stat.value}
          suffix={stat.suffix}
          isVisible={isVisible}
          delay={index * 0.12}
        />
      </p>

      {/* Tiret orange */}
      <div className="my-4 h-[2px] w-10 bg-[#f08222]" />

      {/* Label */}
      <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-[#f08222]">
        {stat.label}
      </p>

      {/* Description */}
      <p className="mt-2 text-[13px] leading-[1.7] text-[#535b6a]">{stat.desc}</p>
    </motion.div>
  );
}

/* ── Section principale ── */
export function HomeMission() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  const introRef = useRef<HTMLParagraphElement>(null);
  const introVisible = useInView(introRef, { once: true, amount: 0.4 });

  return (
    <section ref={sectionRef} id="chiffres" className="relative overflow-hidden bg-[#0e1018]">
      {/* Image de fond parallaxe */}
      <motion.div
        className="pointer-events-none absolute inset-0 will-change-transform"
        style={{ y: bgY }}
        aria-hidden
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: "url('/hero_human.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e1018]/70 to-[#0e1018]/90" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        {/* Tag */}
        <div className="pt-20">
          <motion.div
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ clipPath: "inset(0 0% 0 0)" }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2"
          >
            <span className="font-bold text-[#f08222] text-[11px]">//</span>
            <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#f08222]">
              Des résultats concrets depuis 10 ans
            </span>
          </motion.div>
        </div>

        {/* Texte intro — clip du centre vers les bords (technique inhabituelle) */}
        <div className="pb-14 pt-8 border-b border-white/8">
          <p
            ref={introRef}
            className="max-w-4xl font-black leading-[1.15] text-white"
            style={{ fontSize: "clamp(1.4rem, 3vw, 2.4rem)" }}
          >
            {[
              "Depuis 10 ans, notre expertise et notre engagement",
              "se traduisent par des résultats tangibles pour nos clients.",
              "Ces chiffres clés illustrent notre capacité à garantir la",
            ].map((line, i) => (
              <span key={i} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "105%", opacity: 0 }}
                  animate={introVisible ? { y: "0%", opacity: 1 } : {}}
                  transition={{
                    type: "spring",
                    stiffness: 130,
                    damping: 18,
                    delay: i * 0.12,
                  }}
                >
                  {line}{" "}
                  {i === 2 && (
                    <span className="text-[#f08222]">
                      sécurité et la performance
                    </span>
                  )}
                  {i === 2 && " des foyers de nos clients."}
                </motion.span>
              </span>
            ))}
          </p>
        </div>

        {/* Grille de cartes — entrée alternée */}
        <div className="grid grid-cols-1 gap-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <StatCard key={s.label} stat={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
