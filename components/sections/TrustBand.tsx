"use client";

import { Reveal } from "@/components/ui/Reveal";

export function TrustBand() {
  return (
    <section className="border-y border-outline bg-[#f8f9fa]">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 section-pad !py-12 md:flex-row md:items-center">
        <Reveal className="max-w-lg">
          <p className="eyebrow">Propulsé par Agilly</p>
          <p className="mt-3 font-serif text-xl leading-relaxed text-ink md:text-2xl">
            L&apos;expertise cybersécurité qui protège déjà les entreprises,{" "}
            <span className="italic text-primary-deep">au service des familles</span>
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="flex flex-col items-start leading-none opacity-90">
            <div className="font-serif text-3xl font-bold tracking-tight select-none">
              <span className="text-[#191c1d]">agil</span>
              <span className="text-[#f08222]">ly</span>
            </div>
            <span className="text-[7.5px] uppercase tracking-[0.18em] text-[#5a5f6a] mt-1.5 font-sans font-semibold select-none">
              Cloud & Cyber Sécurité
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
