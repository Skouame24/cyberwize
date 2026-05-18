import { PageHero } from "@/components/layout/PageHero";
import { DevisContent } from "@/components/pages/DevisContent";

export default function DevisPage() {
  return (
    <>
      <PageHero
        eyebrow="Demande de devis"
        title="Demande de devis"
        description="Devis PDF par email et lien d'essai 14 jours inclus."
        highlights={["PDF automatique", "Essai inclus", "Réponse sous 24h"]}
      />
      <DevisContent />
    </>
  );
}
