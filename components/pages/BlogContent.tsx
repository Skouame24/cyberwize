"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

/*
 * SECTION : BLOG CONTENT (Magazine Editorial)
 *
 * Design : Style Magazine haut de gamme.
 * - Le premier article est affiché en pleine largeur (Article à la une).
 * - Les suivants sont en grille propre (sans bordures de séparation).
 * - Navigation par filtres via des liens textuels chics.
 */

const tags = ["Tous", "Cybersécurité", "Famille", "Conformité", "Formation"];

const posts = [
  {
    id: 1,
    title: "5 habitudes numériques à transmettre à vos enfants",
    excerpt: "Découvrez les gestes simples qui protègent toute la famille au quotidien et permettent une navigation sereine.",
    date: "15 avril 2026",
    category: "Famille",
    readTime: "5 min",
    image: "/mother_daughter_tablet_black.png",
  },
  {
    id: 2,
    title: "Phishing : repérer les arnaques par SMS",
    excerpt: "Signaux d'alerte et bons réflexes avant de cliquer sur un lien suspect reçu par message.",
    date: "2 avril 2026",
    category: "Cybersécurité",
    readTime: "4 min",
    image: "/black_woman_phone.png",
  },
  {
    id: 3,
    title: "Contrôle parental : trouver le bon équilibre",
    excerpt: "Protéger ses enfants sans les sur-surveiller — nos conseils pour instaurer un climat de confiance numérique.",
    date: "20 mars 2026",
    category: "Famille",
    readTime: "6 min",
    image: "/family_laptop_black.png",
  },
  {
    id: 4,
    title: "RGPD et protection des données familiales",
    excerpt: "L'essentiel sur la protection de vos données personnelles et celles de vos proches.",
    date: "5 mars 2026",
    category: "Conformité",
    readTime: "7 min",
    image: "/hero_human.png",
  },
  {
    id: 5,
    title: "Former la famille aux risques en ligne",
    excerpt: "Quiz interactifs, ateliers ludiques et culture cyber partagée pour tous les âges.",
    date: "18 février 2026",
    category: "Formation",
    readTime: "5 min",
    image: "/mother_daughter_tablet_black.png",
  },
  {
    id: 6,
    title: "VPN familial : quand et pourquoi l'utiliser",
    excerpt: "Réseaux Wi-Fi publics, télétravail et vie privée — nos recommandations pratiques.",
    date: "1 février 2026",
    category: "Cybersécurité",
    readTime: "4 min",
    image: "/family_laptop_black.png",
  },
];

export function BlogContent() {
  const [activeTag, setActiveTag] = useState("Tous");
  
  const filtered = activeTag === "Tous" ? posts : posts.filter((p) => p.category === activeTag);
  const featuredPost = filtered[0];
  const remainingPosts = filtered.slice(1);

  return (
    <section className="bg-[#fffcf9] pb-24 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 pt-12">
        
        {/* FILTRES ÉDITORIAUX */}
        <nav className="mb-16 flex flex-wrap items-center justify-center gap-8 border-b border-black/5 pb-6 lg:justify-start">
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              className={cn(
                "relative text-[13px] font-bold uppercase tracking-widest transition-colors duration-300",
                activeTag === tag ? "text-[#0e131f]" : "text-[#535b6a] hover:text-[#0e131f]"
              )}
            >
              {tag}
              {activeTag === tag && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute -bottom-[26px] left-0 right-0 h-[2px] bg-[#f08222]"
                />
              )}
            </button>
          ))}
        </nav>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTag}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            {/* ARTICLE À LA UNE */}
            {featuredPost && (
              <Link href={`/blog/${featuredPost.id}`} className="group mb-20 block">
                <article className="grid gap-10 lg:grid-cols-2 lg:items-center">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-none lg:aspect-square">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      priority
                    />
                    <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:opacity-0" />
                  </div>
                  
                  <div className="lg:pr-10">
                    <div className="mb-6 flex flex-wrap items-center gap-4 text-[12px] font-bold uppercase tracking-widest text-[#535b6a]">
                      <span className="text-[#f08222]">{featuredPost.category}</span>
                      <span className="h-1 w-1 rounded-full bg-black/20" />
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        {featuredPost.date}
                      </span>
                      <span className="h-1 w-1 rounded-full bg-black/20" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                    
                    <h2 className="font-serif text-[2.5rem] font-bold leading-tight text-[#0e131f] transition-colors duration-300 group-hover:text-[#f08222] md:text-[3.5rem]">
                      {featuredPost.title}
                    </h2>
                    
                    <p className="mt-6 text-[18px] leading-[1.8] text-[#535b6a]">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="mt-10 inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-widest text-[#0e131f] transition-colors duration-300 group-hover:text-[#f08222]">
                      Lire l'article
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </article>
              </Link>
            )}

            {/* GRILLE D'ARTICLES */}
            {remainingPosts.length > 0 && (
              <div className="grid gap-x-10 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
                {remainingPosts.map((post) => (
                  <Link href={`/blog/${post.id}`} key={post.id} className="group block">
                    <article>
                      <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-none">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/5 transition-opacity duration-300 group-hover:opacity-0" />
                      </div>
                      
                      <div className="mb-4 flex flex-wrap items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-[#535b6a]">
                        <span className="text-[#f08222]">{post.category}</span>
                        <span className="h-1 w-1 rounded-full bg-black/20" />
                        <span>{post.readTime}</span>
                      </div>
                      
                      <h3 className="font-serif text-[1.5rem] font-bold leading-snug text-[#0e131f] transition-colors duration-300 group-hover:text-[#f08222]">
                        {post.title}
                      </h3>
                      
                      <p className="mt-3 text-[15px] leading-relaxed text-[#535b6a] line-clamp-2">
                        {post.excerpt}
                      </p>
                    </article>
                  </Link>
                ))}
              </div>
            )}
            
            {filtered.length === 0 && (
              <div className="py-20 text-center text-[#535b6a]">
                <p className="font-serif text-2xl">Aucun article dans cette catégorie pour le moment.</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
        
      </div>
    </section>
  );
}
