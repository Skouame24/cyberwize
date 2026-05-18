"use client";

import { useState } from "react";
import Link from "next/link";
import { Trash2, CheckCircle2, CreditCard, Smartphone, Building2 } from "lucide-react";
import { useCart } from "@/lib/cart-store";
import { formatPrice } from "@/lib/plans";
import { Reveal } from "@/components/ui/Reveal";

const paymentMethods = [
  { id: "card", label: "Carte bancaire", icon: CreditCard },
  { id: "mobile", label: "Mobile Money", icon: Smartphone },
  { id: "transfer", label: "Virement", icon: Building2 },
] as const;

export function PanierContent() {
  const items = useCart((s) => s.items);
  const removeItem = useCart((s) => s.removeItem);
  const clear = useCart((s) => s.clear);
  const total = useCart((s) => s.total());

  const [payment, setPayment] = useState<(typeof paymentMethods)[number]["id"]>("card");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState<{ orderId: string; licenseKey: string } | null>(null);

  const handleCheckout = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nom: fd.get("nom"),
          email: fd.get("email"),
          paymentMethod: payment,
          items,
          total,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      clear();
      setDone({ orderId: data.orderId, licenseKey: data.licenseKey });
    } catch {
      alert("Erreur lors du paiement. Réessayez ou contactez-nous.");
    } finally {
      setLoading(false);
    }
  };

  if (done) {
    return (
      <section className="bg-paper">
        <div className="mx-auto max-w-xl section-pad text-center">
          <CheckCircle2 className="mx-auto h-14 w-14 text-primary" />
          <h2 className="mt-6 font-serif text-2xl text-ink">Commande confirmée</h2>
          <p className="mt-3 text-muted">Référence : {done.orderId}</p>
          <p className="mt-2 rounded-xl bg-warm p-4 font-mono text-sm text-ink">
            Licence : {done.licenseKey}
          </p>
          <p className="mt-4 text-sm text-muted">
            Vos licences et le guide d&apos;installation vous seront envoyés par email.
          </p>
          <Link href="/essai" className="btn-primary mt-8 inline-flex">
            Télécharger le guide
          </Link>
        </div>
      </section>
    );
  }

  if (items.length === 0) {
    return (
      <section className="bg-paper">
        <div className="mx-auto max-w-xl section-pad text-center">
          <p className="text-muted">Votre panier est vide.</p>
          <Link href="/boutique" className="btn-primary mt-6 inline-flex">
            Voir la boutique
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-6xl section-pad">
        <div className="grid gap-12 lg:grid-cols-[1fr_400px]">
          <div>
            <h2 className="font-serif text-xl text-ink">Votre panier</h2>
            <ul className="mt-6 space-y-4">
              {items.map((item) => (
                <li
                  key={item.planId}
                  className="flex items-center justify-between gap-4 rounded-2xl border border-outline bg-warm p-5"
                >
                  <div>
                    <p className="font-medium text-ink">{item.name}</p>
                    <p className="text-sm text-muted">
                      Facturation {item.billing === "yearly" ? "annuelle" : "mensuelle"}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="font-serif text-lg text-primary">{formatPrice(item.price)}</p>
                    <button
                      type="button"
                      onClick={() => removeItem(item.planId)}
                      className="text-muted hover:text-primary"
                      aria-label="Retirer"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <Reveal className="surface-soft lg:sticky lg:top-28">
            <h2 className="font-serif text-xl text-ink">Paiement sécurisé</h2>
            <p className="mt-2 text-sm text-muted">Total : {formatPrice(total)} / mois</p>

            <div className="mt-6 space-y-2">
              {paymentMethods.map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setPayment(m.id)}
                  className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-colors ${
                    payment === m.id
                      ? "border-primary bg-primary-muted"
                      : "border-outline hover:border-primary/30"
                  }`}
                >
                  <m.icon className="h-4 w-4 text-primary" />
                  {m.label}
                </button>
              ))}
            </div>

            <form className="mt-6 space-y-4" onSubmit={handleCheckout}>
              <input name="nom" className="input-soft" placeholder="Nom complet *" required />
              <input name="email" type="email" className="input-soft" placeholder="Email *" required />
              <button type="submit" className="btn-primary w-full" disabled={loading}>
                {loading ? "Traitement…" : "Valider la commande"}
              </button>
            </form>
            <p className="mt-4 text-xs text-muted">
              Paiement sécurisé · Livraison automatique des licences par email
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
