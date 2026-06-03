"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, MapPin, Users, Globe } from "lucide-react";

/*
 * SECTION : À PROPOS (Design fidèle à Agilly.net)
 *
 * Basé sur les captures fournies :
 * 1. Bloc orange avec image à gauche et texte à droite.
 * 2. Grille de cartes blanches avec le quart de cercle orange en bas à droite.
 */

const values = [
  {
    title: "Proximité",
    text: "Une présence forte en Côte d'Ivoire pour vous accompagner au quotidien.",
    icon: MapPin,
  },
  {
    title: "Confiance",
    text: "Des solutions fiables et sécurisées, adaptées aux réalités des foyers.",
    icon: ShieldCheck,
  },
  {
    title: "Accompagnement",
    text: "Protéger, c'est aussi apprendre ensemble — parents et enfants.",
    icon: Users,
  },
  {
    title: "Exigence Pro",
    text: "La rigueur de la cybersécurité B2B, mise au service de votre famille.",
    icon: Globe,
  },
];

export function AboutContent() {
  return (
    <>
      {/* ── SECTION 1 : Le Bloc Orange (Inspiré de "Une Présence Stratégique") ── */}
      <section className="bg-[#f08222] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            
            {/* Image à gauche */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/3] w-full overflow-hidden border-4 border-white/10 shadow-2xl lg:aspect-video"
            >
              <Image
                src="/hero_human.png"
                alt="Équipe Agilly en Afrique"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Texte à droite (Blanc sur fond orange) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-[12px] font-bold uppercase tracking-widest text-black">
                // EXPERIENCE. EXECUTION. EXCELLENCE.
              </p>
              <h2 className="mt-4 font-serif text-[2.5rem] font-bold leading-tight text-white lg:text-[3.2rem]">
                L'expertise métier au cœur de l'Afrique de l'Ouest
              </h2>
              <div className="mt-6 space-y-4 text-[16px] leading-relaxed text-white/90">
                <p>
                  Présents à <strong className="text-white">Abidjan</strong>, nous offrons une proximité essentielle pour accompagner nos clients à travers la sous-région. 
                </p>
                <p>
                  Agilly sécurise déjà les entreprises et les institutions. Notre engagement avec <strong>Cyberwize Family</strong> est de fournir cette même exigence technologique aux foyers, permettant aux parents de se concentrer sur l'essentiel tout en bénéficiant d'un environnement numérique performant et sûr pour leurs enfants.
                </p>
                <p>
                  Parce que la prévention est notre priorité, notre plateforme éducative (Blog) facilite la diffusion d'informations et de bonnes pratiques. Grâce à un partage de connaissances continu entre AGILLY et Cyberwize Family, nous donnons aux familles les clés pour naviguer sereinement.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── SECTION 2 : Les Cartes (Inspiré de "Ce que nous faisons pour vous") ── */}
      <section className="bg-[#fcfbfa] py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.5fr] lg:items-start">
            
            {/* Texte à gauche */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="sticky top-32"
            >
              <p className="text-[12px] font-bold uppercase tracking-widest text-[#f08222]">
                // NOS FONDAMENTAUX
              </p>
              <h2 className="mt-4 font-serif text-[2.5rem] font-bold leading-tight text-[#0e131f] lg:text-[3rem]">
                Nos valeurs et notre mission
              </h2>
              <p className="mt-6 text-[16px] leading-relaxed text-[#535b6a]">
                Nous vous aidons à accélérer votre transition numérique en toute sécurité. Concrètement, nos domaines d'expertise couvrent la cybersécurité, le cloud et la protection des données personnelles.
              </p>
              <p className="mt-4 text-[16px] leading-relaxed text-[#535b6a]">
                Pour les familles, cela se traduit par une écoute attentive, des outils simples à utiliser et une assistance locale toujours disponible.
              </p>
            </motion.div>

            {/* Grille de cartes à droite */}
            <div className="grid gap-6 sm:grid-cols-2">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <motion.div
                    key={v.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="relative flex min-h-[250px] flex-col justify-between overflow-hidden bg-white p-8 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.08)] transition-transform hover:-translate-y-1"
                  >
                    <div>
                      <h3 className="font-serif text-[1.5rem] font-bold text-[#0e131f]">
                        {v.title}
                      </h3>
                      <p className="mt-3 text-[14px] leading-relaxed text-[#535b6a]">
                        {v.text}
                      </p>
                    </div>

                    <div className="mt-8 flex items-center gap-2 text-[13px] font-medium text-[#f08222]">
                      <ArrowRight className="h-4 w-4" />
                      En savoir plus
                    </div>

                    {/* Le fameux quart de cercle orange en bas à droite */}
                    <div className="absolute -bottom-8 -right-8 flex h-24 w-24 items-start justify-center rounded-tl-full bg-[#f08222] pl-4 pt-6 text-white transition-transform duration-300 hover:scale-110">
                      <Icon className="h-6 w-6" strokeWidth={1.5} />
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
