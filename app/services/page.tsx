import { PageHero } from "@/components/layout/PageHero";
import { ServicesContent } from "@/components/pages/ServicesContent";
import { CtaFinal } from "@/components/sections/CtaFinal";

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Produits"
        title="Nos produits"
        description="Protection, contrôle parental, navigation sécurisée et formation."
      />
      <ServicesContent />
      <CtaFinal />
    </>
  );
}
