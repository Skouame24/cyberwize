import { PageHero } from "@/components/layout/PageHero";
import { ContactContent } from "@/components/pages/ContactContent";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Nous contacter"
        description="Notre équipe vous répond sous 24 heures."
        highlights={["Abidjan", "Email & téléphone", "Formulaire sécurisé"]}
      />
      <ContactContent />
    </>
  );
}
