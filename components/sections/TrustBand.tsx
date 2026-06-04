"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

export function TrustBand() {
  return (
    <section className="border-y border-outline bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 section-pad !py-12 md:flex-row md:items-center">
        <Reveal className="max-w-lg">
          <p className="eyebrow">Propulsé par Agilly</p>
          <p className="mt-3 font-serif text-xl leading-relaxed text-ink md:text-2xl">
            L&apos;expertise cybersécurité qui protège déjà les entreprises,{" "}
            <span className="italic text-primary-deep">au service des familles</span>
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="relative h-12 w-36 md:h-14 md:w-48 shrink-0 select-none">
            <Image
              src="/logo.png"
              alt="Agilly - Cloud & Cyber Sécurité"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

