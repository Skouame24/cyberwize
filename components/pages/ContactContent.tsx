"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";

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
          </div>

          <div className="surface-soft">
            <h2 className="font-serif text-xl text-ink">Envoyer un message</h2>
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
