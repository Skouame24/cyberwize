import { PageHero } from "@/components/layout/PageHero";
import { ServicesContent } from "@/components/pages/ServicesContent";
import { CtaFinal } from "@/components/sections/CtaFinal";

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Produits & Services"
        title="Cyberwize Endpoint & Mobile Security"
        description="Protection avancée des postes et terminaux mobiles, managée 24/7 par AGILLY."
      />
      <ServicesContent />
      <CtaFinal />
    </>
  );
}
