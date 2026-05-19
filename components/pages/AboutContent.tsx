"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { demoPhotos } from "@/lib/brand-copy";
import { brand } from "@/lib/brand-copy";
import { Reveal } from "@/components/ui/Reveal";

const AGILLY_LOGO =
  "https://lh3.googleusercontent.com/aida/ADBb0ugJ7nkKv4KNTm1hBuo1qXak8WoiPfgguZEx9UldYvRSQHTg_c9KpIn2bLXK7a9nCKHQ-EqyZ8G1e1VtOPNUvsoDbE6fh4peGi4jni7s3mEdD7XoPDGBZvysePITafeb0zTmPP_k5NOPi3sbLb7jQnXVaSK_Y0-WSCva8Qp6tzxIPZHN8p6JcgyoGrth7JgPylZOsqV8kuzkV1_qvjTXPhSU2W_13VzvkdV58A_-N2aheOC-24k1gtMFXgU";

const values = [
  {
    title: "Confiance",
    text: "Vous savez ce qui est protégé, pour qui, et pourquoi — sans jargon.",
  },
  {
    title: "Proximité",
    text: "Une équipe Agilly en Côte d'Ivoire, joignable pour installer et vous guider.",
  },
  {
    title: "Éducation",
    text: "Protéger, c'est aussi apprendre ensemble — parents et enfants.",
  },
  {
    title: "Exigence",
    text: "La rigueur des environnements pro, adaptée au foyer.",
  },
];

const milestones = [
  { year: "2014", label: "Naissance d'Agilly — cybersécurité & cloud en Afrique" },
  { year: "2022", label: "Lancement de Cyberwize Family pour les foyers" },
  { year: "2026", label: "Plus de 300 familles accompagnées en Côte d'Ivoire" },
];

function AboutTimeline() {
  const ref = useRef<HTMLUListElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.4"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <ul ref={ref} className="relative mt-14 space-y-0">
      <motion.div
        className="absolute left-[3.25rem] top-0 hidden h-full w-px origin-top bg-primary/30 md:block"
        style={{ scaleY: lineScale }}
      />
      {milestones.map((m, i) => (
        <motion.li
          key={m.year}
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: i * 0.12, duration: 0.55 }}
          className="flex flex-col gap-2 border-b border-outline py-8 sm:flex-row sm:gap-12 md:py-10"
        >
          <span className="font-serif text-2xl text-primary md:w-24">{m.year}</span>
          <span className="text-[15px] leading-relaxed text-muted">{m.label}</span>
        </motion.li>
      ))}
    </ul>
  );
}

export function AboutContent() {
  return (
    <>
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl section-pad">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <p className="eyebrow">{brand.whatIs.title}</p>
              <h2 className="mt-3 font-serif text-[1.75rem] text-ink md:text-[2.25rem]">
                {brand.tagline}
              </h2>
              <p className="mt-5 text-[15px] leading-[1.8] text-muted">{brand.whatIs.lead}</p>
              <p className="mt-4 text-[15px] leading-[1.8] text-muted">{brand.whatIs.body}</p>
            </Reveal>
            <Reveal delay={0.1} className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-outline shadow-md">
              <Image
                src={demoPhotos[0].src}
                alt={demoPhotos[0].alt}
                fill
                className="object-cover"
                sizes="50vw"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-outline bg-warm">
        <div className="mx-auto max-w-6xl section-pad">
          <Reveal>
            <p className="eyebrow">Notre équipe</p>
            <h2 className="mt-3 font-serif text-[1.75rem] text-ink">Des visages, pas des logos</h2>
            <p className="mt-3 max-w-2xl text-muted">
              L&apos;accompagnement humain est au cœur de Cyberwize Family — conseil, installation et
              support en français, depuis Abidjan.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {demoPhotos.map((photo) => (
              <Reveal key={photo.src} className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-outline">
                <Image src={photo.src} alt={photo.alt} fill className="object-cover" sizes="33vw" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-outline bg-background">
        <div className="mx-auto max-w-6xl section-pad">
          <p className="eyebrow">Nos valeurs</p>
          <h2 className="mt-3 font-serif text-[1.75rem] text-ink md:text-[2.25rem]">
            Rassurant, professionnel, pédagogique
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {values.map((v) => (
              <Reveal key={v.title} className="rounded-2xl border border-outline bg-paper p-7">
                <h3 className="font-serif text-xl text-ink">{v.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-warm">
        <div className="mx-auto max-w-6xl section-pad">
          <Reveal className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
            <div className="max-w-lg">
              <p className="eyebrow">AGILLY</p>
              <h2 className="mt-3 font-serif text-xl text-ink md:text-2xl">
                L&apos;expertise qui porte Cyberwize Family
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-muted">
                Agilly sécurise entreprises et institutions en Afrique. Cyberwize Family en est
                l&apos;offre dédiée aux foyers — même exigence, autre langage : le vôtre.
              </p>
            </div>
            <Image src={AGILLY_LOGO} alt="Agilly" width={120} height={48} className="h-11 w-auto" />
          </Reveal>
          <AboutTimeline />
        </div>
      </section>
    </>
  );
}
