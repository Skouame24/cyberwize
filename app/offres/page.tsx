import { PageHero } from "@/components/layout/PageHero";
import { OffresContent } from "@/components/pages/OffresContent";
import { CtaFinal } from "@/components/sections/CtaFinal";

export default function OffresPage() {
  return (
    <>
      <PageHero
        eyebrow="Offres"
        title={
          <>
            Choisissez la protection{" "}
            <span className="italic text-primary">adaptée à votre foyer</span>
          </>
        }
        description="Tarifs clairs, essai gratuit 14 jours, expertise Agilly."
      />
      <OffresContent />
      <CtaFinal />
    </>
  );
}
