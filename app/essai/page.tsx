import { PageHero } from "@/components/layout/PageHero";
import { EssaiContent } from "@/components/pages/EssaiContent";

export default function EssaiPage() {
  return (
    <>
      <PageHero
        eyebrow="Essai gratuit"
        title="Essai gratuit 14 jours"
        description="Sans engagement. Téléchargement sécurisé après formulaire et accompagnement humain."
        highlights={["Accès complet", "Installation guidée", "Support Agilly"]}
        image="/hero-cloud.png"
      />
      <EssaiContent />
    </>
  );
}
