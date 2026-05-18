"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const tags = ["Tous", "Cybersécurité", "Famille", "Conformité", "Formation"];

const posts = [
  {
    id: 1,
    title: "5 habitudes numériques à transmettre à vos enfants",
    excerpt: "Les gestes simples qui protègent toute la famille au quotidien.",
    date: "15 avril 2026",
    category: "Famille",
    readTime: "5 min",
  },
  {
    id: 2,
    title: "Phishing : repérer les arnaques par SMS",
    excerpt: "Signaux d'alerte et bons réflexes avant de cliquer.",
    date: "2 avril 2026",
    category: "Cybersécurité",
    readTime: "4 min",
  },
  {
    id: 3,
    title: "Contrôle parental : le bon équilibre",
    excerpt: "Protéger sans sur-surveiller — nos conseils.",
    date: "20 mars 2026",
    category: "Famille",
    readTime: "6 min",
  },
  {
    id: 4,
    title: "RGPD et données familiales",
    excerpt: "L'essentiel sur la protection des données personnelles.",
    date: "5 mars 2026",
    category: "Conformité",
    readTime: "7 min",
  },
  {
    id: 5,
    title: "Former la famille aux risques en ligne",
    excerpt: "Quiz, ateliers et culture cyber partagée.",
    date: "18 février 2026",
    category: "Formation",
    readTime: "5 min",
  },
  {
    id: 6,
    title: "VPN familial : quand l'utiliser",
    excerpt: "Wi-Fi public et vie privée — nos recommandations.",
    date: "1 février 2026",
    category: "Cybersécurité",
    readTime: "4 min",
  },
];

export function BlogContent() {
  const [activeTag, setActiveTag] = useState("Tous");
  const filtered =
    activeTag === "Tous" ? posts : posts.filter((p) => p.category === activeTag);

  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-6xl section-pad">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              className={cn("tag-soft", activeTag === tag && "tag-soft-active")}
            >
              {tag}
            </button>
          ))}
        </div>

        <ul className="mt-14 divide-y divide-outline border-y border-outline">
          {filtered.map((post) => (
            <li key={post.id} className="group py-10 md:py-12">
              <Link href={`/blog/${post.id}`} className="grid gap-4 md:grid-cols-[1fr_auto]">
                <div>
                  <div className="mb-3 flex flex-wrap gap-3 text-xs text-muted">
                    <span className="rounded-full bg-primary-muted px-2.5 py-0.5 font-medium text-primary-deep">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="font-serif text-xl text-ink group-hover:text-primary-deep md:text-2xl">
                    {post.title}
                  </h2>
                  <p className="mt-3 max-w-2xl text-[15px] text-muted">{post.excerpt}</p>
                </div>
                <span className="inline-flex items-center gap-2 self-start text-sm font-medium text-primary-deep md:self-center">
                  Lire <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
