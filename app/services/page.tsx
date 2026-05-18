import { PageHero } from "@/components/layout/PageHero";
import { ServicesContent } from "@/components/pages/ServicesContent";
import { CtaFinal } from "@/components/sections/CtaFinal";

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Produits"
        title={
          <>
            Protection complète,{" "}
            <span className="italic text-primary">simple à vivre</span>
          </>
        }
        description="Défense avancée, contrôle parental, navigation sécurisée et éducation — les quatre piliers de Cyberwize Family."
        image="/hero-bg.png"
      />
      <ServicesContent />
      <CtaFinal />
    </>
  );
}
