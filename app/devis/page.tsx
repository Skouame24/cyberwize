import { PageHero } from "@/components/layout/PageHero";
import { DevisContent } from "@/components/pages/DevisContent";

export default function DevisPage() {
  return (
    <>
      <PageHero
        eyebrow="Essai gratuit"
        title={
          <>
            14 jours pour{" "}
            <span className="italic text-primary">tester en famille</span>
          </>
        }
        description="Sans engagement. Installation guidée et accompagnement humain."
        image="/hero-cloud.png"
      />
      <DevisContent />
    </>
  );
}
