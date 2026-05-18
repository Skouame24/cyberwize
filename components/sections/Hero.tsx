import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[min(92vh,820px)] w-full overflow-hidden">
      <Image
        src="/hero-bg.png"
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
        priority
      />

      {/* Dégradé pour lisibilité du texte — pas de carte flottante */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0f1419]/88 via-[#1b263b]/72 to-[#1b263b]/25"
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-[min(92vh,820px)] max-w-6xl flex-col justify-end px-6 pb-16 pt-28 sm:px-10 sm:pb-20 lg:justify-center lg:pb-24 lg:pt-32">
        <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-primary">
          Sécurité familiale
        </p>

        <h1 className="mt-4 max-w-2xl font-serif text-[2rem] leading-[1.12] text-white sm:text-[2.75rem] lg:text-[3.25rem]">
          Naviguez en toute confiance,{" "}
          <span className="italic text-primary">protégez ce qui vous est cher.</span>
        </h1>

        <p className="mt-5 max-w-lg text-[15px] leading-[1.8] text-white/80 sm:text-base">
          Protection avancée, contrôle parental et navigation sécurisée — pour toute la
          famille, avec l&apos;expertise Agilly.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link href="/offres" className="btn-primary text-center">
            Voir les offres
          </Link>
          <Link
            href="/devis"
            className="btn-hero-outline justify-center"
          >
            Essai gratuit 14 jours
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
