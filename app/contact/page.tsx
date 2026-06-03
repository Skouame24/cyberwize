import { PageHero } from "@/components/layout/PageHero";
import { ContactContent } from "@/components/pages/ContactContent";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Parlons de votre sécurité."
        description="Une question, un besoin d'assistance ou simplement l'envie d'échanger sur la protection de votre foyer ? Notre équipe vous répond sous 24h."
      />
      <ContactContent />
    </>
  );
}
