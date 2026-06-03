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
    <section className="border-y border-white/5 bg-[#080b11] py-10 text-white">
      <Reveal className="mx-auto max-w-6xl px-6 lg:px-10">
        <p className="text-center text-[10px] font-bold uppercase tracking-[0.25em] text-white/50">
          Propulsé par l&apos;écosystème Agilly
        </p>
      </Reveal>
      <div className="mt-8">
        <Marquee
          speed={35}
          itemClassName="opacity-80 hover:opacity-100 hover:scale-105 duration-300"
          items={partners.map((name) => (
            <span
              key={name}
              className="whitespace-nowrap text-[12px] font-bold uppercase tracking-wider text-white/85 transition-all hover:text-primary bg-white/[0.03] border border-white/[0.07] rounded-full px-5 py-2.5 shadow-sm hover:border-primary/40 hover:bg-white/[0.06]"
            >
              {name}
            </span>
          ))}
        />
      </div>
    </section>
  );
}

