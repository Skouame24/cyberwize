import { PageHero } from "@/components/layout/PageHero";
import { DevisContent } from "@/components/pages/DevisContent";

export default function DevisPage() {
  return (
    <>
      <PageHero
        eyebrow="Générer un devis"
        title="Générer un devis"
        description="Obtenez instantanément votre devis personnalisé par e-mail et commencez à protéger vos appareils."
      />
      <DevisContent />
    </>
  );
}
