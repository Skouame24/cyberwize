import { PageHero } from "@/components/layout/PageHero";
import { OffresContent } from "@/components/pages/OffresContent";
import { CtaFinal } from "@/components/sections/CtaFinal";

export default function OffresPage() {
  return (
    <>
      <PageHero
        eyebrow="Offres"
        title="Nos offres et tarifs"
        description="Tarifs clairs, essai gratuit 14 jours, expertise Agilly."
        highlights={["Essai 14 jours", "Sans engagement", "Support humain"]}
      />
      <OffresContent />
      <CtaFinal />
    </>
  );
}
