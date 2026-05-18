"use client";

import { Marquee } from "@/components/ui/Marquee";
import { Reveal } from "@/components/ui/Reveal";

const partners = [
  "Agilly SOC",
  "CyberWize Family",
  "Global Security Network",
  "Alpha Cloud",
  "Resilient Cyber Node",
  "Sentinel Prime",
  "Elite Data Guard",
  "Active Protect",
];

export function PartnersMarquee() {
  return (
    <section className="border-y border-outline bg-paper py-10">
      <Reveal className="mx-auto max-w-6xl px-6 lg:px-10">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
          Propulsé par l&apos;écosystème Agilly
        </p>
      </Reveal>
      <div className="mt-6">
        <Marquee
          speed={32}
          items={partners.map((name) => (
            <span
              key={name}
              className="whitespace-nowrap text-sm font-medium text-ink/70 transition-colors hover:text-primary-deep"
            >
              {name}
            </span>
          ))}
        />
      </div>
    </section>
  );
}
