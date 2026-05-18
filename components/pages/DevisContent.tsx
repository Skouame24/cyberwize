"use client";

import { useState } from "react";
import Link from "next/link";
import { FileText, CheckCircle2, ExternalLink } from "lucide-react";
import { useCart } from "@/lib/cart-store";
import { formatPrice } from "@/lib/plans";
import { Reveal } from "@/components/ui/Reveal";

export function DevisContent() {
  const items = useCart((s) => s.items);
  const total = useCart((s) => s.total());
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    reference: string;
    trialLink: string;
    message: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setLoading(true);
    try {
      const res = await fetch("/api/devis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nom: fd.get("nom"),
          email: fd.get("email"),
          telephone: fd.get("telephone"),
          entreprise: fd.get("entreprise"),
          plan: fd.get("plan"),
          appareils: fd.get("appareils"),
          message: fd.get("message"),
          panier: items,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setResult(data);
    } catch {
      alert("Erreur d'envoi. Réessayez ou contactez-nous.");
    } finally {
      setLoading(false);
    }
  };

  if (result) {
    return (
      <section className="bg-paper">
        <div className="mx-auto max-w-xl section-pad text-center">
          <CheckCircle2 className="mx-auto h-14 w-14 text-primary" />
          <h2 className="mt-6 font-serif text-2xl text-ink">Demande enregistrée</h2>
          <p className="mt-3 text-muted">Référence : {result.reference}</p>
          <p className="mt-4 text-[15px] leading-relaxed text-muted">{result.message}</p>
          <Link href={result.trialLink} className="btn-primary mt-8 inline-flex items-center gap-2">
            Accéder à l&apos;essai 14 jours
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-6xl section-pad">
        <div className="grid gap-12 lg:grid-cols-[1fr_380px]">
          <Reveal className="surface-soft">
            <div className="mb-6 flex items-center gap-2 text-primary-deep">
              <FileText className="h-5 w-5" />
              <span className="text-sm font-medium">Devis PDF automatique + email</span>
            </div>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium">Nom *</label>
                  <input name="nom" className="input-soft" required />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">Email *</label>
                  <input name="email" type="email" className="input-soft" required />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium">Téléphone</label>
                  <input name="telephone" type="tel" className="input-soft" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">Entreprise (TPE/PME)</label>
                  <input name="entreprise" className="input-soft" />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium">Offre souhaitée</label>
                  <select name="plan" className="input-soft" defaultValue="Famille">
                    <option>Essentiel</option>
                    <option>Famille</option>
                    <option>Premium</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">Appareils</label>
                  <input name="appareils" type="number" min={1} className="input-soft" defaultValue={5} />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Message</label>
                <textarea name="message" className="textarea-soft" rows={4} />
              </div>
              <button type="submit" className="btn-primary w-full" disabled={loading}>
                {loading ? "Génération du devis…" : "Recevoir mon devis + essai 14 jours"}
              </button>
            </form>
          </Reveal>

          <aside className="space-y-6">
            <Reveal className="rounded-2xl border border-outline bg-warm p-6">
              <h3 className="font-medium text-ink">Votre panier</h3>
              {items.length === 0 ? (
                <p className="mt-3 text-sm text-muted">
                  Vide —{" "}
                  <Link href="/boutique" className="link-soft">
                    ajouter une offre
                  </Link>
                </p>
              ) : (
                <ul className="mt-3 space-y-2 text-sm">
                  {items.map((i) => (
                    <li key={i.planId} className="flex justify-between text-muted">
                      <span>{i.name}</span>
                      <span>{formatPrice(i.price)}</span>
                    </li>
                  ))}
                  <li className="flex justify-between border-t border-outline pt-2 font-medium text-ink">
                    <span>Total</span>
                    <span>{formatPrice(total)}</span>
                  </li>
                </ul>
              )}
            </Reveal>
            <Reveal className="text-sm text-muted">
              <p>
                Le système génère un devis PDF, l&apos;envoie par email et associe un lien d&apos;essai
                gratuit.
              </p>
              <p className="mt-3">
                Prêt à payer ?{" "}
                <Link href="/panier" className="link-soft">
                  Passer commande
                </Link>
              </p>
            </Reveal>
          </aside>
        </div>
      </div>
    </section>
  );
}
