"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

const posts: Record<string, { title: string; date: string; readTime: string; category: string; content: string }> = {
  "1": {
    title: "Les 5 failles de sécurité les plus courantes en 2026",
    date: "15 avril 2026",
    readTime: "5 min",
    category: "Cybersécurité",
    content: `
## Introduction

En 2026, les cyberattaques sont plus sophistiquées que jamais. Pourtant, la majorité des brèches exploitent des failles bien connues que de nombreuses entreprises négligent encore.

## 1. Mots de passe faibles ou réutilisés

Malgré les campagnes de sensibilisation, les mots de passe faibles restent la porte d'entrée numéro un. L'authentification multifactorielle (MFA) reste le rempart le plus efficace.

## 2. Phishing ciblé (Spear Phishing)

Les attaquants personnalisent leurs messages en se basant sur les informations trouvées sur les réseaux sociaux. La vigilance et la formation sont essentielles.

## 3. Logiciels non patchés

Les vulnérabilités connues dans les systèmes d'exploitation et les applications représentent une opportunité facile pour les hackers. Un patch management rigoureux est indispensable.

## 4. Mauvaise configuration cloud

Les buckets S3 ouverts, les bases de données exposées... Les erreurs de configuration dans le cloud sont légion et souvent catastrophiques.

## 5. Insuffisance de segmentation réseau

Une fois à l'intérieur, un attaquant peut se déplacer latéralement sans segmentation. Le principe du moindre privilège doit s'appliquer au réseau.

## Conclusion

Ces failles sont évitables avec une politique de sécurité claire, des audits réguliers et une culture de la sécurité au sein de l'entreprise.
    `,
  },
  "2": {
    title: "RGPD en Côte d'Ivoire : ce qu'il faut savoir",
    date: "2 avril 2026",
    readTime: "7 min",
    category: "Conformité",
    content: `
## Contexte juridique

La Côte d'Ivoire a renforcé son cadre de protection des données avec la loi n°2013-450 et les textes subséquents. Toute entreprise traitant des données personnelles doit se conformer.

## Obligations clés

- **Consentement éclairé** : obtenir un consentement explicite.
- **Minimisation** : ne collecter que le nécessaire.
- **Sécurité** : protéger les données par des mesures techniques et organisationnelles.
- **Droits des personnes** : accès, rectification, effacement.

## Sanctions

Les manquements peuvent entraîner des sanctions administratives et pénales. La réputation de l'entreprise est également en jeu.

## Comment se conformer ?

Un audit de conformité, la mise à jour des politiques et la sensibilisation des équipes sont les premières étapes.
    `,
  },
  "3": {
    title: "Pourquoi faire un pentest chaque année ?",
    date: "20 mars 2026",
    readTime: "4 min",
    category: "Pentest",
    content: `
## Un environnement en constante évolution

Votre infrastructure change tous les jours : nouveaux logiciels, nouveaux employés, nouvelles configurations. Chaque changement peut introduire de nouvelles vulnérabilités.

## Les attaquants ne dorment pas

Les techniques d'attaque évoluent rapidement. Ce qui était sécurisé l'an dernier peut ne plus l'être aujourd'hui.

## La conformité l'exige

De nombreux référentiels (ISO 27001, PCI-DSS) imposent des tests d'intrusion réguliers.

## Retour sur investissement

Un pentest coûte moins cher qu'une cyberattaque. C'est un investissement prudent.
    `,
  },
};

export default function BlogPostPage() {
  const params = useParams();
  const id = params.id as string;
  const post = posts[id];

  if (!post) {
    return (
      <div className="pt-40 text-center">
        <h1 className="text-2xl font-display font-bold text-cyber-white">
          Article non trouvé
        </h1>
        <Link href="/blog">
          <Button variant="outline" className="mt-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour au blog
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-28">
      <article className="mx-auto max-w-3xl px-4 pb-24 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/blog">
            <Button variant="ghost" size="sm" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour au blog
            </Button>
          </Link>

          <div className="flex items-center gap-3 text-sm text-cyber-gray">
            <Badge variant="cyan">{post.category}</Badge>
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {post.readTime}
            </span>
          </div>

          <h1 className="mt-4 text-3xl font-display font-bold text-cyber-white sm:text-4xl">
            {post.title}
          </h1>

          <div className="prose prose-invert mt-10 max-w-none">
            {post.content.split("\n\n").map((paragraph, i) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2
                    key={i}
                    className="mt-8 mb-4 text-xl font-display font-semibold text-cyber-cyan"
                  >
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }
              return (
                <p key={i} className="mb-4 leading-relaxed text-cyber-gray">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </motion.div>
      </article>
    </div>
  );
}
