"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Send, Linkedin, Facebook, Twitter } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@cyberwizefamily.com",
    href: "mailto:contact@cyberwizefamily.com",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "+225 25 25 001 422",
    href: "tel:+2252525001422",
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: "Cocody, Abidjan — Côte d'Ivoire",
  },
];

export function ContactContent() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-6xl section-pad">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="eyebrow">Nous joindre</p>
            <h2 className="mt-3 font-serif text-[1.5rem] text-ink">Un accompagnement humain</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted">
              Essai gratuit, aide à l&apos;installation ou conseil sur l&apos;offre adaptée.
            </p>
            <ul className="mt-10 space-y-6">
              {contacts.map((c) => (
                <li key={c.label} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-outline bg-warm text-primary-deep">
                    <c.icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-ink">{c.label}</p>
                    {c.href ? (
                      <a href={c.href} className="mt-1 block text-[15px] text-muted hover:text-primary">
                        {c.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-[15px] text-muted">{c.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <p className="text-sm font-medium text-ink">Réseaux sociaux</p>
              <div className="mt-3 flex gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-outline bg-warm text-muted hover:border-primary/40 hover:text-primary"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-outline bg-warm text-muted hover:border-primary/40 hover:text-primary"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-outline bg-warm text-muted hover:border-primary/40 hover:text-primary"
                  aria-label="X (Twitter)"
                >
                  <Twitter className="h-4 w-4" />
                </a>
              </div>
            </div>

            <p className="mt-8 text-sm text-muted">
              Documentation :{" "}
              <Link href="/support" className="link-soft">
                Support & FAQ
              </Link>
            </p>
          </div>

          <div className="surface-soft">
            <h2 className="font-serif text-xl text-ink">Formulaire sécurisé</h2>
            <p className="mt-2 text-sm text-muted">Vos données sont chiffrées en transit (HTTPS).</p>
            <form className="mt-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink">Nom *</label>
                  <input type="text" className="input-soft" required />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink">Email *</label>
                  <input type="email" className="input-soft" required />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-ink">Message *</label>
                <textarea className="textarea-soft" rows={5} required />
              </div>
              <button type="submit" className="btn-primary">
                <Send className="h-4 w-4" />
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
