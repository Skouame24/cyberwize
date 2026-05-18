import { PageHero } from "@/components/layout/PageHero";
import { AboutContent } from "@/components/pages/AboutContent";
import { CtaFinal } from "@/components/sections/CtaFinal";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title={
          <>
            Cyberwize Family &{" "}
            <span className="italic text-primary">l&apos;expertise Agilly</span>
          </>
        }
        description="Une solution de cybersécurité accessible, rassurante et professionnelle — pour particuliers, familles et petites structures."
        image="/hero-bg.png"
      />
      <AboutContent />
      <CtaFinal />
    </>
  );
}
