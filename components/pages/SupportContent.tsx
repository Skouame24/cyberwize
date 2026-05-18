"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";

const faqs = [
  {
    q: "Comment démarrer l'essai gratuit de 14 jours ?",
    a: "Rendez-vous sur la page Essai gratuit, remplissez le formulaire et téléchargez l'installateur. Vous recevrez vos identifiants par email.",
  },
  {
    q: "Quels moyens de paiement acceptez-vous ?",
    a: "Carte bancaire, virement et Mobile Money (Orange Money, MTN, Wave selon disponibilité). Le paiement est sécurisé via notre partenaire de paiement.",
  },
  {
    q: "Combien d'appareils puis-je protéger ?",
    a: "Cela dépend de votre offre : Essentiel (3), Famille (10), Premium (illimité). Utilisez le simulateur sur la page Offres.",
  },
  {
    q: "Comment fonctionne le contrôle parental ?",
    a: "Vous définissez des profils par enfant, des filtres de contenu et des plages horaires. Les alertes vous informent sans espionner inutilement.",
  },
  {
    q: "Mes données sont-elles revendues ?",
    a: "Non. Cyberwize Family ne revend jamais vos données. Chiffrement et hébergement sécurisé, conformité RGPD.",
  },
  {
    q: "Comment contacter le support ?",
    a: "Par email à contact@cyberwizefamily.com, téléphone +225 25 25 001 422, ou via le formulaire Contact. Support prioritaire selon votre offre.",
  },
];

const docs = [
  { title: "Guide d'installation", href: "/essai", desc: "Premiers pas en 5 minutes" },
  { title: "Comparer les offres", href: "/offres", desc: "Tableau et simulateur" },
  { title: "Demander un devis", href: "/devis", desc: "PDF automatique + essai 14 jours" },
];

export function SupportContent() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-6xl section-pad">
        <Reveal>
          <p className="eyebrow">Support</p>
          <h2 className="mt-3 font-serif text-[1.75rem] text-ink md:text-[2rem]">
            FAQ & documentation
          </h2>
        </Reveal>

        <ul className="mt-12 divide-y divide-outline border-y border-outline">
          {faqs.map((faq, i) => (
            <li key={faq.q}>
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span className="font-medium text-ink">{faq.q}</span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-muted transition-transform duration-200",
                    open === i && "rotate-180"
                  )}
                />
              </button>
              <div
                className={cn(
                  "overflow-hidden text-[15px] leading-relaxed text-muted transition-all duration-300",
                  open === i ? "max-h-48 pb-5" : "max-h-0"
                )}
              >
                {faq.a}
              </div>
            </li>
          ))}
        </ul>

        <Reveal className="mt-16">
          <p className="eyebrow">Documentation</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {docs.map((d) => (
              <Link
                key={d.title}
                href={d.href}
                className="rounded-2xl border border-outline bg-warm p-6 transition-colors hover:border-primary/30 hover:bg-primary-muted/40"
              >
                <p className="font-medium text-ink">{d.title}</p>
                <p className="mt-2 text-sm text-muted">{d.desc}</p>
              </Link>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-12 surface-soft text-center">
          <p className="font-serif text-xl text-ink">Besoin d&apos;assistance humaine ?</p>
          <p className="mt-2 text-muted">Notre équipe Agilly répond sous 24h ouvrées.</p>
          <Link href="/contact" className="btn-primary mt-6 inline-flex">
            Contacter le support
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
