import { Suspense } from "react";
import { PageHero } from "@/components/layout/PageHero";
import { EssaiContent } from "@/components/pages/EssaiContent";

export default function EssaiPage() {
  return (
    <>
      <PageHero
        eyebrow="Essai gratuit"
        title="Essai gratuit 14 jours"
        description="Sans engagement. Téléchargement sécurisé après formulaire et accompagnement humain."
      />
      <Suspense fallback={<div className="py-20 text-center text-muted">Chargement...</div>}>
        <EssaiContent />
      </Suspense>
    </>
  );
}
