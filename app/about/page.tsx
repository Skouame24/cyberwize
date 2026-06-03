import { PageHero } from "@/components/layout/PageHero";
import { AboutContent } from "@/components/pages/AboutContent";
import { CtaFinal } from "@/components/sections/CtaFinal";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title="L'expertise professionnelle, repensée pour les familles"
        description="Votre gardien numérique familial — conçu en Côte d'Ivoire, pour les foyers d'ici et d'ailleurs."
      />
      <AboutContent />
      <CtaFinal />
    </>
  );
}
