import { PageHero } from "@/components/layout/PageHero";
import { BoutiqueContent } from "@/components/pages/BoutiqueContent";

export default function BoutiquePage() {
  return (
    <>
      <PageHero
        eyebrow="Boutique"
        title="Commander en ligne"
        description="CB, Mobile Money ou virement — licences envoyées par email."
        highlights={["Paiement sécurisé", "Licences par email", "Panier persistant"]}
      />
      <BoutiqueContent />
    </>
  );
}
