"use client";
 
import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Download, CheckCircle2, Shield } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
 
const steps = [
  "Remplissez le formulaire ci-dessous",
  "L'équipe Agilly reçoit votre demande par e-mail",
  "Un conseiller vous contacte pour activer votre accès",
  "Profitez de 14 jours d'essai complet",
];
 
export function EssaiContent() {
  const searchParams = useSearchParams();
  const refParam = searchParams.get("ref");
  const emailParam = searchParams.get("email") || "";
  const nomParam = searchParams.get("nom") || "";
 
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");
 
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
 
    try {
      const response = await fetch("/api/essai", {
        method: "POST",
        body: JSON.stringify(data),
      });
 
      if (response.ok) {
        setSubmittedEmail(data.email as string);
        setDone(true);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  }
 
  if (done) {
    return (
      <section className="bg-background py-16">
        <div className="mx-auto max-w-xl section-pad text-center bg-paper border border-outline rounded-none shadow-sm">
          <CheckCircle2 className="mx-auto h-14 w-14 text-primary" />
          <h2 className="mt-6 font-display text-2xl font-bold text-ink">Demande transmise à l&apos;équipe Agilly !</h2>
          <p className="mt-3 text-sm text-muted leading-relaxed">
            Votre demande a bien été enregistrée. L&apos;équipe Agilly a reçu une notification et vous contactera prochainement à l&apos;adresse <strong className="text-ink font-bold">{submittedEmail}</strong> pour finaliser votre accès.
          </p>
          <div className="mt-8">
            <Link href="/" className="btn-primary">
              Retour à l&apos;accueil
            </Link>
          </div>
        </div>
      </section>
    );
  }
 
  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">// Essai gratuit · 14 jours</p>
            <h2 className="mt-3 font-display text-[1.75rem] font-bold text-ink">
              Testez Cyberwize Family sans engagement
            </h2>
            <ul className="mt-8 space-y-4">
              {steps.map((s, i) => (
                <li key={s} className="flex gap-4 text-[15px] text-muted items-center">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-none bg-primary/15 font-display text-sm font-bold text-primary">
                    {i + 1}
                  </span>
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-8 flex items-start gap-2 text-sm text-muted">
              <Shield className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              Téléchargement sécurisé après validation du formulaire — collecte de leads conforme RGPD.
            </p>
          </Reveal>
 
          <Reveal className="surface-soft shadow-sm">
            {refParam ? (
              <div className="mb-6 rounded-none bg-primary-muted border border-primary/25 p-5">
                <p className="text-sm font-semibold text-primary-deep flex items-center gap-2">
                  <CheckCircle2 className="h-4.5 w-4.5 shrink-0 text-primary" />
                  Devis {refParam} généré & envoyé !
                </p>
              </div>
            ) : (
              <h3 className="font-display text-lg font-bold text-ink border-b border-outline pb-3 mb-5">// Demander l&apos;accès</h3>
            )}
            <form className="space-y-4" onSubmit={handleSubmit}>
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
              <button type="submit" className="btn-primary w-full cursor-pointer" disabled={loading}>
                {loading ? "Envoi en cours…" : "Envoyer ma demande d'accès"}
              </button>
            </form>
            <p className="mt-4 text-xs text-muted">
              Besoin d&apos;un devis PDF ?{" "}
              <Link href="/devis" className="link-soft font-bold">
                Générer un devis
              </Link>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
