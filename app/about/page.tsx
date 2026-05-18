import { PageHero } from "@/components/layout/PageHero";
import { AboutContent } from "@/components/pages/AboutContent";
import { CtaFinal } from "@/components/sections/CtaFinal";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title="Qui sommes-nous"
        description="Cyberwize Family et l'expertise Agilly au service des familles."
        highlights={["Vision & mission", "Équipe en Côte d'Ivoire", "Depuis 2014"]}
        image="/hero-bg.png"
      />
      <AboutContent />
      <CtaFinal />
    </>
  );
}
