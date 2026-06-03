"use client";

import { motion } from "motion/react";
import { Marquee } from "@/components/ui/Marquee";
import { CheckCircle2 } from "lucide-react";
import { fadeInUpScroll, mobbinCardHover, mobbinCardTap } from "@/lib/animations";
import { Reveal } from "@/components/ui/Reveal";

const testimonials = [
  {
    quote:
      "Enfin une solution que je comprends : je vois ce qui est filtré et mes enfants gardent leurs usages sans que je passe mes soirées dans les réglages.",
    author: "Adjoua K.",
    role: "Parent, deux adolescents",
    avatar: "https://i.pravatar.cc/150?u=adj",
  },
  {
    quote:
      "Les alertes sur les sites douteux arrivent avant que les petits ne cliquent. On se sent vraiment accompagnés, pas seuls face à Internet.",
    author: "Marc T.",
    role: "Père de famille, Abidjan",
    avatar: "https://i.pravatar.cc/150?u=marc",
  },
  {
    quote:
      "J'apprécie les contenus pour expliquer le phishing à la maison, sans vocabulaire technique. CyberWize Family, c'est concret.",
    author: "Hélène R.",
    role: "Enseignante & parent",
    avatar: "https://i.pravatar.cc/150?u=hel",
  },
  {
    quote:
      "Nous voulions une seule offre pour téléphones et PC du foyer. Tout est centralisé, avec Agilly en soutien quand on a une question.",
    author: "Yves D.",
    role: "Chef de famille",
    avatar: "https://i.pravatar.cc/150?u=yves",
  },
];

export function Testimonials() {
  return (
    <section className="border-t border-ink/[0.06] bg-white py-20 md:py-24">
      <motion.div
        variants={fadeInUpScroll}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto mb-12 max-w-6xl px-6 lg:px-10"
      >
        <p className="eyebrow">Ils nous font confiance</p>
        <h2 className="mt-3 max-w-2xl font-serif text-[1.75rem] text-ink md:text-[2.25rem]">
          Paroles de <span className="italic text-primary">parents</span>
        </h2>
        <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted">
          Familles en Côte d&apos;Ivoire et au-delà — retours sincères après quelques semaines
          d&apos;utilisation.
        </p>
      </motion.div>

      <Reveal delay={0.12} className="relative">
        <Marquee
          speed={36}
          itemClassName="opacity-100 hover:opacity-100"
          items={testimonials.map((t, i) => (
            <div key={i} className="w-[min(100vw-2rem,440px)] shrink-0 px-3 py-2 md:px-4">
              <motion.article
                whileHover={mobbinCardHover}
                whileTap={mobbinCardTap}
                className="flex h-full cursor-default flex-col rounded-lg border border-ink/[0.08] bg-soft-bg p-6 shadow-[0_1px_2px_rgba(10,14,20,0.04)]"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted">
                    <CheckCircle2 className="h-3.5 w-3.5 text-ink/40" aria-hidden />
                    Vérifié
                  </span>
                </div>
                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-ink">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6 flex items-center gap-3 border-t border-ink/[0.06] pt-5">
                  <div className="h-10 w-10 shrink-0 overflow-hidden rounded-md border border-ink/[0.08] bg-white">
                    <img src={t.avatar} alt="" className="h-full w-full object-cover" width={40} height={40} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink">{t.author}</p>
                    <p className="text-xs text-muted">{t.role}</p>
                  </div>
                </div>
              </motion.article>
            </div>
          ))}
        />
      </Reveal>
    </section>
  );
}

