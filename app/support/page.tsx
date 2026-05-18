import { PageHero } from "@/components/layout/PageHero";
import { SupportContent } from "@/components/pages/SupportContent";

export default function SupportPage() {
  return (
    <>
      <PageHero
        eyebrow="Support"
        title="FAQ & assistance"
        description="Réponses aux questions fréquentes et ressources d'installation."
      />
      <SupportContent />
    </>
  );
}
