import Link from "next/link";

export function CtaFinal() {
  return (
    <section className="bg-navy-cta text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 section-pad md:flex-row md:items-center">
        <div className="max-w-xl">
          <h2 className="font-serif text-[1.75rem] leading-snug md:text-[2.25rem]">
            Prêt à protéger l&apos;avenir numérique de votre famille ?
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-white/75">
            Essai gratuit 14 jours · Installation simple · Accompagnement humain
          </p>
        </div>
        <Link href="/devis" className="btn-primary shrink-0 px-8 py-3.5">
          Commencer maintenant
        </Link>
      </div>
    </section>
  );
}
