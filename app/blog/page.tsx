import { PageHero } from "@/components/layout/PageHero";
import { BlogContent } from "@/components/pages/BlogContent";

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Conseils cybersécurité"
        description="Cybersécurité accessible, bonnes pratiques et sensibilisation pour toute la famille."
      />
      <BlogContent />
    </>
  );
}
