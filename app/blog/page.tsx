import { PageHero } from "@/components/layout/PageHero";
import { BlogContent } from "@/components/pages/BlogContent";

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title={
          <>
            Conseils pour protéger{" "}
            <span className="italic text-primary">votre foyer en ligne</span>
          </>
        }
        description="Cybersécurité accessible, bonnes pratiques et sensibilisation pour toute la famille."
      />
      <BlogContent />
    </>
  );
}
