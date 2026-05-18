import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";

const posts: Record<
  string,
  { title: string; date: string; readTime: string; category: string; content: string }
> = {
  "1": {
    title: "5 habitudes numériques à transmettre à vos enfants",
    date: "15 avril 2026",
    readTime: "5 min",
    category: "Famille",
    content: `## Pourquoi commencer tôt

Les enfants utilisent internet de plus en plus jeunes. Leur apprendre les bons réflexes dès le départ, c'est leur offrir une protection qui dure.

## 1. Des mots de passe uniques

Un mot de passe par compte. Un gestionnaire familial simplifie tout.

## 2. Ne jamais cliquer sans réfléchir

Un lien reçu par message ? Vérifier avec un adulte avant d'ouvrir.

## 3. Partager avec prudence

Pas de photos personnelles ni d'adresse dans les jeux en ligne.

## 4. Parler des contenus inappropriés

Créer un espace où l'enfant peut signaler ce qui le met mal à l'aise.

## 5. Des pauses régulières

Des règles claires, définies ensemble.`,
  },
  "2": {
    title: "Phishing : repérer les arnaques par SMS",
    date: "2 avril 2026",
    readTime: "4 min",
    category: "Cybersécurité",
    content: `## Le SMS piège

Urgence artificielle, lien raccourci, fautes d'orthographe — les signaux sont souvent les mêmes.

## Les bons réflexes

Ne jamais cliquer directement. Contacter l'organisme via son site officiel.`,
  },
  "3": {
    title: "Contrôle parental : le bon équilibre",
    date: "20 mars 2026",
    readTime: "6 min",
    category: "Famille",
    content: `## Protéger, pas surveiller

Un cadre de sécurité discuté ouvertement avec les enfants.

## Adapter selon l'âge

Plus l'enfant est jeune, plus les filtres sont stricts.`,
  },
  "4": {
    title: "RGPD et données familiales",
    date: "5 mars 2026",
    readTime: "7 min",
    category: "Conformité",
    content: `## Vos données, vos droits

Consentement, minimisation, sécurité et droit d'accès — l'essentiel pour les foyers.`,
  },
  "5": {
    title: "Former la famille aux risques en ligne",
    date: "18 février 2026",
    readTime: "5 min",
    category: "Formation",
    content: `## Culture cyber partagée

Parents et enfants apprennent ensemble avec quiz et fiches pratiques.`,
  },
  "6": {
    title: "VPN familial : quand l'utiliser",
    date: "1 février 2026",
    readTime: "4 min",
    category: "Cybersécurité",
    content: `## Wi-Fi public

Le VPN chiffre la connexion — utile en voyage ou dans les lieux partagés.`,
  },
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = posts[id];

  if (!post) {
    return (
      <div className="mx-auto max-w-6xl section-pad text-center">
        <h1 className="font-serif text-2xl text-ink">Article non trouvé</h1>
        <Link href="/blog" className="link-soft mt-6 inline-flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Retour au blog
        </Link>
      </div>
    );
  }

  return (
    <>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        description={`${post.date} · ${post.readTime}`}
      />
      <article className="bg-paper">
        <div className="mx-auto max-w-3xl section-pad">
          <Link href="/blog" className="link-soft mb-10 inline-flex items-center gap-2 text-sm">
            <ArrowLeft className="h-3.5 w-3.5" />
            Retour au blog
          </Link>
          <div className="flex gap-4 text-xs text-muted">
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {post.readTime}
            </span>
          </div>
          <div className="mt-10">
            {post.content.split("\n\n").map((block, i) => {
              if (block.startsWith("## ")) {
                return (
                  <h2 key={i} className="mt-10 mb-4 font-serif text-xl text-ink md:text-2xl">
                    {block.replace("## ", "")}
                  </h2>
                );
              }
              return (
                <p key={i} className="mb-4 text-[15px] leading-[1.85] text-muted">
                  {block}
                </p>
              );
            })}
          </div>
        </div>
      </article>
    </>
  );
}
