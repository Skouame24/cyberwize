"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "Les 5 failles de sécurité les plus courantes en 2026",
    excerpt:
      "Découvrez les vulnérabilités que les hackers exploitent le plus souvent et comment vous en protéger.",
    date: "15 avril 2026",
    category: "Cybersécurité",
    readTime: "5 min",
  },
  {
    id: 2,
    title: "RGPD en Côte d'Ivoire : ce qu'il faut savoir",
    excerpt:
      "Guide complet sur la conformité des données personnelles pour les entreprises ivoiriennes.",
    date: "2 avril 2026",
    category: "Conformité",
    readTime: "7 min",
  },
  {
    id: 3,
    title: "Pourquoi faire un pentest chaque année ?",
    excerpt:
      "Le paysage des menaces évolue constamment. Voici pourquoi l'audit régulier est indispensable.",
    date: "20 mars 2026",
    category: "Pentest",
    readTime: "4 min",
  },
  {
    id: 4,
    title: "Zero Trust : le modèle de sécurité moderne",
    excerpt:
      "Comment l'architecture Zero Trust révolutionne la protection des infrastructures d'entreprise.",
    date: "5 mars 2026",
    category: "Architecture",
    readTime: "6 min",
  },
  {
    id: 5,
    title: "Phishing : former vos collaborateurs",
    excerpt:
      "La sensibilisation reste la meilleure défense. Méthodes et outils pour un personnel vigilant.",
    date: "18 février 2026",
    category: "Formation",
    readTime: "5 min",
  },
  {
    id: 6,
    title: "SOC-as-a-Service : une réponse clé en main",
    excerpt:
      "Pourquoi externaliser votre Security Operations Center peut être un avantage compétitif.",
    date: "1 février 2026",
    category: "SOC",
    readTime: "4 min",
  },
];

export default function BlogPage() {
  return (
    <div className="pt-28">
      <section className="relative overflow-hidden pb-16">
        <div className="cyber-grid absolute inset-0 opacity-30" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <Badge variant="cyan">Blog</Badge>
            <h1 className="mt-4 text-4xl font-display font-bold text-cyber-white sm:text-5xl">
              Actualités & <span className="text-cyber-cyan">Expertise</span>
            </h1>
            <p className="mt-6 text-lg text-cyber-gray">
              Conseils, analyses et tendances cybersécurité pour protéger votre
              entreprise.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/blog/${post.id}`}>
                  <Card hover className="h-full flex flex-col">
                    <div className="mb-4 flex items-center gap-3 text-xs text-cyber-gray">
                      <Badge variant="cyan">{post.category}</Badge>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="mb-2 text-lg font-display font-semibold text-cyber-white group-hover:text-cyber-cyan">
                      {post.title}
                    </h3>
                    <p className="mb-4 flex-1 text-sm text-cyber-gray">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center text-sm font-medium text-cyber-cyan">
                      Lire l&apos;article{" "}
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </span>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
