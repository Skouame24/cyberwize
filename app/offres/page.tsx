import { PageHero } from "@/components/layout/PageHero";
import { OffresContent } from "@/components/pages/OffresContent";
import { CtaFinal } from "@/components/sections/CtaFinal";

export default function OffresPage() {
  return (
    <>
      <PageHero
        eyebrow="Offres & Tarifs"
        title={
          <>
            La tranquillité d'esprit <br />
            <span className="italic text-black/40">au juste prix.</span>
          </>
        }
        description="Une tarification transparente, pensée pour s'adapter à la taille de votre foyer. Bénéficiez de toute l'expertise Agilly avec un essai gratuit de 14 jours, sans engagement."
      />
      <OffresContent />
      <CtaFinal />
    </>
  );
}
