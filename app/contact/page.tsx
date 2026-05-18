import { PageHero } from "@/components/layout/PageHero";
import { ContactContent } from "@/components/pages/ContactContent";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Parlons de la protection{" "}
            <span className="italic text-primary">de votre foyer</span>
          </>
        }
        description="Notre équipe vous répond sous 24 heures."
      />
      <ContactContent />
    </>
  );
}
