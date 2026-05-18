import { PageHero } from "@/components/layout/PageHero";
import { PanierContent } from "@/components/pages/PanierContent";

export default function PanierPage() {
  return (
    <>
      <PageHero
        eyebrow="Panier"
        title="Votre panier"
        description="Paiement sécurisé et envoi des licences par email."
      />
      <PanierContent />
    </>
  );
}
