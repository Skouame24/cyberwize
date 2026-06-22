"use client";

import { useState } from "react";
import Link from "next/link";
import { Trash2, CheckCircle2, CreditCard, Smartphone, Building2, ShieldCheck, Lock } from "lucide-react";
import { useCart } from "@/lib/cart-store";
import { formatPrice } from "@/lib/plans";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { QuoteModal } from "./QuoteModal";

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
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

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
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="mx-auto flex h-20 w-20 items-center justify-center rounded-none border border-primary/20 bg-primary/10 mb-8"
          >
            <CheckCircle2 className="h-10 w-10 text-primary" />
          </motion.div>
          <h2 className="mt-4 font-display text-[2rem] font-bold uppercase tracking-wider text-ink">
            Commande confirmée
          </h2>
          <p className="mt-4 text-[15px] text-muted">
            Merci de votre confiance. Votre famille est désormais protégée par Agilly.
          </p>
          
          <div className="mt-8 surface-soft text-left">
            <p className="text-[11px] font-bold uppercase tracking-wider text-muted">
              Référence de commande
            </p>
            <p className="mt-1 font-mono text-base font-bold text-ink">{done.orderId}</p>
            
            <div className="my-6 h-px w-full bg-outline" />
            
            <p className="text-[11px] font-bold uppercase tracking-wider text-primary">
              Votre Clé de Licence
            </p>
            <div className="mt-3 border border-primary/25 bg-primary-muted p-4 rounded-none">
              <p className="font-mono text-lg font-bold tracking-widest text-ink text-center">
                {done.licenseKey}
              </p>
            </div>
          </div>

          <p className="mt-8 text-[14px] text-muted">
            Un email contenant vos accès et le guide d'installation vient de vous être envoyé.
          </p>
          <div className="mt-8">
            <Link href="/essai" className="btn-primary">
              Télécharger l'application
            </Link>
          </div>
        </div>
      </section>
    );
  }

  if (items.length === 0) {
    return (
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-xl px-6 text-center surface-soft">
          <ShieldCheck className="mx-auto h-16 w-16 text-muted/30" />
          <h2 className="mt-6 font-display text-[1.75rem] font-bold uppercase tracking-wider text-ink">
            Aucune offre sélectionnée
          </h2>
          <p className="mt-4 text-[15px] text-muted">
            Veuillez choisir une formule pour sécuriser vos appareils.
          </p>
          <div className="mt-8">
            <Link href="/offres" className="btn-primary">
              Découvrir nos offres
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-background py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          
          {/* COLONNE GAUCHE : RÉSUMÉ DE LA COMMANDE */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow">
              // Récapitulatif
            </p>
            <h2 className="mt-4 font-display text-[2rem] font-bold uppercase tracking-wider text-ink">
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
                    className="flex items-center justify-between gap-6 overflow-hidden surface-soft p-6"
                  >
                    <div>
                      <p className="font-display text-[1.1rem] font-bold text-ink uppercase tracking-wide">{item.name}</p>
                      <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-muted">
                        Facturation {item.billing === "yearly" ? "annuelle" : "mensuelle"}
                      </p>
                    </div>
                    <div className="flex items-center gap-6">
                      <p className="font-display text-[1.35rem] font-bold text-ink">
                        {formatPrice(item.price)}
                      </p>
                      <button
                        type="button"
                        onClick={() => removeItem(item.planId)}
                        className="flex h-10 w-10 items-center justify-center rounded-none text-muted hover:bg-primary-muted hover:text-primary border border-outline hover:border-primary/30 transition-colors cursor-pointer"
                        aria-label="Retirer"
                      >
                        <Trash2 className="h-4.5 w-4.5" />
                      </button>
                    </div>
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>

            <div className="mt-10 border-t border-outline pt-8">
              <div className="flex items-end justify-between">
                <span className="text-sm font-bold uppercase tracking-wider text-muted">Total à régler :</span>
                <span className="font-display text-[2.5rem] font-black leading-none text-primary">
                  {formatPrice(total)}
                </span>
              </div>
              
              <button 
                onClick={() => setIsQuoteOpen(true)}
                className="btn-outline w-full mt-6 cursor-pointer"
              >
                Générer un devis
              </button>
            </div>
            
            <div className="mt-12 flex items-start gap-4 surface-soft bg-warm p-6">
              <Lock className="h-5 w-5 shrink-0 text-primary mt-0.5" />
              <p className="text-[13px] leading-relaxed text-muted">
                <strong className="text-ink font-bold">Garantie satisfait ou remboursé.</strong> Vous disposez de 14 jours pour changer d'avis et demander un remboursement complet.
              </p>
            </div>
          </motion.div>

          {/* COLONNE DROITE : FORMULAIRE DE PAIEMENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="relative overflow-hidden surface-soft shadow-sm">
              <h3 className="font-display text-lg font-bold text-ink border-b border-outline pb-3 mb-2 uppercase tracking-wide">
                // Paiement sécurisé
              </h3>
              <p className="text-xs text-muted mb-8">Toutes les transactions sont chiffrées de bout en bout.</p>
              
              <div className="space-y-4">
                <p className="text-[11px] font-bold uppercase tracking-wider text-muted">
                  1. Choisissez votre moyen de paiement
                </p>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {paymentMethods.map((m) => (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setPayment(m.id)}
                      className={cn(
                        "flex flex-col items-center justify-center gap-3 rounded-none border p-5 transition-colors cursor-pointer",
                        payment === m.id
                          ? "border-primary bg-primary-muted text-primary-deep"
                          : "border-outline bg-paper text-muted hover:bg-warm hover:border-muted/30"
                      )}
                    >
                      <m.icon className="h-6 w-6" strokeWidth={1.5} />
                      <span className="text-xs font-bold uppercase tracking-wider">{m.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <form className="mt-10 space-y-5" onSubmit={handleCheckout}>
                <p className="text-[11px] font-bold uppercase tracking-wider text-muted">
                  2. Vos informations de facturation
                </p>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-muted">Nom complet sur la carte *</label>
                  <input 
                    name="nom"
                    className="input-soft" 
                    placeholder="Ex: Jean Dupont"
                    required 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-muted">Adresse Email de réception *</label>
                  <input 
                    name="email"
                    type="email" 
                    className="input-soft" 
                    placeholder="jean.dupont@email.com"
                    required 
                  />
                </div>

                <div className="pt-4">
                  <button 
                    type="submit" 
                    disabled={loading}
                    className="btn-primary w-full group flex items-center justify-center gap-3 cursor-pointer"
                  >
                    {loading ? "Traitement en cours..." : "Valider la commande"}
                    {!loading && <ShieldCheck className="h-5 w-5 opacity-80" />}
                  </button>
                  <p className="mt-4 text-center text-[10px] font-bold uppercase tracking-wider text-muted">
                    Chiffrement AES-256 bits
                  </p>
                </div>
              </form>

            </div>
          </motion.div>

        </div>
      </div>
      
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </section>
  );
}
