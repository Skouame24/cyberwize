"use client";

import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Download, CheckCircle2, Shield } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  "Remplissez le formulaire ci-dessous",
  "Recevez vos identifiants par email",
  "Installez Cyberwize Family sur vos appareils",
  "Profitez de 14 jours d'essai complet",
];

export function EssaiContent() {
  const searchParams = useSearchParams();
  const refParam = searchParams.get("ref");
  const emailParam = searchParams.get("email") || "";
  const nomParam = searchParams.get("nom") || "";

  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setDone(true);
  };

  if (done) {
    return (
      <section className="bg-paper">
        <div className="mx-auto max-w-xl section-pad text-center">
          <CheckCircle2 className="mx-auto h-14 w-14 text-primary" />
          <h2 className="mt-6 font-serif text-2xl text-ink">Accès essai activé</h2>
          <p className="mt-3 text-muted">
            Consultez votre e-mail pour le lien de téléchargement sécurisé et vos identifiants de connexion.
          </p>

        </div>
      </section>
    );
  }

  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-6xl section-pad">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Essai gratuit · 14 jours</p>
            <h2 className="mt-3 font-serif text-[1.75rem] text-ink">
              Testez Cyberwize Family sans engagement
            </h2>
            <ul className="mt-8 space-y-4">
              {steps.map((s, i) => (
                <li key={s} className="flex gap-4 text-[15px] text-muted">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/15 font-serif text-sm text-primary">
                    {i + 1}
                  </span>
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-8 flex items-start gap-2 text-sm text-muted">
              <Shield className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              Téléchargement sécurisé après validation du formulaire — collecte de leads conforme
              RGPD.
            </p>
          </Reveal>

          <Reveal className="surface-soft">
            {refParam ? (
              <div className="mb-6 rounded-xl bg-primary-muted border border-primary/25 p-5">
                <p className="text-sm font-semibold text-primary-deep flex items-center gap-2">
                  <CheckCircle2 className="h-4.5 w-4.5 shrink-0 text-primary" />
                  Devis {refParam} généré & envoyé !
                </p>

              </div>
            ) : (
              <h3 className="font-serif text-xl text-ink">Demander l&apos;accès</h3>
            )}
            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <input name="nom" className="input-soft" placeholder="Nom *" defaultValue={nomParam} required />
              <input name="email" type="email" className="input-soft" placeholder="Email *" defaultValue={emailParam} required />
              <input name="tel" type="tel" className="input-soft" placeholder="Téléphone" />
              <input
                name="appareils"
                type="number"
                min={1}
                max={20}
                className="input-soft"
                placeholder="Nombre d'appareils"
                defaultValue={5}
              />
              <button type="submit" className="btn-primary w-full" disabled={loading}>
                {loading ? "Activation…" : "Activer mon essai 14 jours"}
              </button>
            </form>
            <p className="mt-4 text-xs text-muted">
              Besoin d&apos;un devis PDF ?{" "}
              <Link href="/devis" className="link-soft">
                Générer un devis
              </Link>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
