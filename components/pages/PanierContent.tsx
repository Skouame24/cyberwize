"use client";

import { useState } from "react";
import Link from "next/link";
import { Trash2, CheckCircle2, CreditCard, Smartphone, Building2, ShieldCheck, Lock } from "lucide-react";
import { useCart } from "@/lib/cart-store";
import { formatPrice } from "@/lib/plans";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

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
      <section className="bg-[#fcfbfa] py-24 lg:py-32">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#f08222]/10"
          >
            <CheckCircle2 className="h-12 w-12 text-[#f08222]" />
          </motion.div>
          <h2 className="mt-8 font-serif text-[2.5rem] font-bold text-[#0e131f]">
            Commande confirmée
          </h2>
          <p className="mt-4 text-[16px] text-[#535b6a]">
            Merci de votre confiance. Votre famille est désormais protégée par Agilly.
          </p>
          
          <div className="mt-8 overflow-hidden rounded-[2rem] bg-white p-8 shadow-sm lg:p-12">
            <p className="text-[13px] font-bold uppercase tracking-widest text-[#535b6a]">
              Référence de commande
            </p>
            <p className="mt-2 font-mono text-lg font-medium text-[#0e131f]">{done.orderId}</p>
            
            <div className="my-8 h-[1px] w-full bg-black/5" />
            
            <p className="text-[13px] font-bold uppercase tracking-widest text-[#f08222]">
              Votre Clé de Licence
            </p>
            <div className="mt-4 rounded-xl border border-[#f08222]/20 bg-[#f08222]/5 p-4">
              <p className="font-mono text-xl font-bold tracking-widest text-[#0e131f]">
                {done.licenseKey}
              </p>
            </div>
          </div>

          <p className="mt-8 text-[14px] text-[#535b6a]">
            Un email contenant vos accès et le guide d'installation vient de vous être envoyé.
          </p>
          <Link
            href="/essai"
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-[#0e131f] px-8 py-4 text-[13px] font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#f08222]"
          >
            Télécharger l'application
          </Link>
        </div>
      </section>
    );
  }

  if (items.length === 0) {
    return (
      <section className="bg-[#fcfbfa] py-24 lg:py-32">
        <div className="mx-auto max-w-xl px-6 text-center">
          <ShieldCheck className="mx-auto h-16 w-16 text-black/10" />
          <h2 className="mt-6 font-serif text-[2rem] font-bold text-[#0e131f]">
            Aucune offre sélectionnée
          </h2>
          <p className="mt-4 text-[16px] text-[#535b6a]">
            Veuillez choisir une formule pour sécuriser vos appareils.
          </p>
          <Link
            href="/offres"
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-[#f08222] px-8 py-4 text-[13px] font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#d9751e]"
          >
            Découvrir nos offres
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#fcfbfa] py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.3fr] lg:gap-24">
          
          {/* COLONNE GAUCHE : RÉSUMÉ DE LA COMMANDE */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[12px] font-bold uppercase tracking-widest text-[#f08222]">
              // Récapitulatif
            </p>
            <h2 className="mt-4 font-serif text-[2.5rem] font-bold leading-tight text-[#0e131f]">
              Votre abonnement
            </h2>

            <ul className="mt-10 space-y-4">
              <AnimatePresence>
                {items.map((item) => (
                  <motion.li
                    key={item.planId}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex items-center justify-between gap-6 overflow-hidden rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
                  >
                    <div>
                      <p className="font-serif text-[1.2rem] font-bold text-[#0e131f]">{item.name}</p>
                      <p className="mt-1 text-[13px] font-medium uppercase tracking-wider text-[#535b6a]">
                        Facturation {item.billing === "yearly" ? "annuelle" : "mensuelle"}
                      </p>
                    </div>
                    <div className="flex items-center gap-6">
                      <p className="font-serif text-[1.5rem] font-bold text-[#0e131f]">
                        {formatPrice(item.price)}
                      </p>
                      <button
                        type="button"
                        onClick={() => removeItem(item.planId)}
                        className="flex h-10 w-10 items-center justify-center rounded-full text-black/30 transition-colors hover:bg-red-50 hover:text-red-500"
                        aria-label="Retirer"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>

            <div className="mt-10 border-t border-black/5 pt-8">
              <div className="flex items-end justify-between">
                <span className="text-[16px] text-[#535b6a]">Total à régler :</span>
                <span className="font-serif text-[3rem] font-black leading-none text-[#f08222]">
                  {formatPrice(total)}
                </span>
              </div>
            </div>
            
            <div className="mt-12 flex items-center gap-4 rounded-2xl bg-black/5 p-6">
              <Lock className="h-6 w-6 shrink-0 text-[#535b6a]" />
              <p className="text-[13px] leading-relaxed text-[#535b6a]">
                <strong>Garantie satisfait ou remboursé.</strong> Vous disposez de 14 jours pour changer d'avis et demander un remboursement complet.
              </p>
            </div>
          </motion.div>

          {/* COLONNE DROITE : FORMULAIRE DE PAIEMENT (CARTE PREMIUM) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-b from-black/[0.03] to-transparent blur-xl" />
            
            <div className="relative overflow-hidden rounded-[2rem] bg-white p-8 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.12)] lg:p-12">
              <h3 className="font-serif text-[1.8rem] font-bold text-[#0e131f]">
                Paiement sécurisé
              </h3>
              
              <div className="mt-8 space-y-3">
                <p className="text-[12px] font-bold uppercase tracking-widest text-[#535b6a]">
                  1. Choisissez votre moyen de paiement
                </p>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {paymentMethods.map((m) => (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setPayment(m.id)}
                      className={cn(
                        "flex flex-col items-center justify-center gap-3 rounded-xl border p-4 transition-all",
                        payment === m.id
                          ? "border-[#f08222] bg-[#f08222]/5 text-[#f08222]"
                          : "border-black/10 text-[#535b6a] hover:border-[#f08222]/30 hover:bg-black/5"
                      )}
                    >
                      <m.icon className="h-6 w-6" strokeWidth={1.5} />
                      <span className="text-[12px] font-bold">{m.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <form className="mt-10 space-y-6" onSubmit={handleCheckout}>
                <p className="text-[12px] font-bold uppercase tracking-widest text-[#535b6a]">
                  2. Vos informations de facturation
                </p>
                <div className="space-y-2">
                  <label className="text-[12px] font-bold uppercase tracking-widest text-[#0e131f]">Nom complet sur la carte *</label>
                  <input 
                    name="nom"
                    className="w-full border-b border-black/10 bg-transparent py-3 text-[16px] text-[#0e131f] transition-colors placeholder:text-black/20 focus:border-[#f08222] focus:outline-none" 
                    placeholder="Jean Dupont"
                    required 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[12px] font-bold uppercase tracking-widest text-[#0e131f]">Adresse Email de réception *</label>
                  <input 
                    name="email"
                    type="email" 
                    className="w-full border-b border-black/10 bg-transparent py-3 text-[16px] text-[#0e131f] transition-colors placeholder:text-black/20 focus:border-[#f08222] focus:outline-none" 
                    placeholder="jean.dupont@email.com"
                    required 
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className="group mt-12 flex w-full items-center justify-center gap-3 bg-[#0e131f] px-8 py-5 text-[14px] font-bold uppercase tracking-widest text-white transition-all hover:bg-[#f08222] disabled:opacity-50"
                >
                  {loading ? "Traitement en cours..." : "Valider la commande"}
                  {!loading && <ShieldCheck className="h-5 w-5" />}
                </button>
                <p className="text-center text-[11px] font-medium uppercase tracking-widest text-[#535b6a]">
                  Chiffrement AES-256 bits
                </p>
              </form>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
