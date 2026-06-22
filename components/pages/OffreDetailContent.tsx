"use client";

import { useState } from "react";
import Link from "next/link";
import { formatPrice, Plan, plans } from "@/lib/plans";
import { useCart } from "@/lib/cart-store";
import { ChevronDown, MonitorSmartphone, ShoppingCart, Check, FileText, CheckCircle2, ChevronLeft, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";
import { useEffect } from "react";

export function OffreDetailContent({ plan }: { plan: Plan }) {
  const [quantity, setQuantity] = useState(1);
  const [showAddedPopup, setShowAddedPopup] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [addOnQuantities, setAddOnQuantities] = useState<Record<string, number>>({});
  
  const items = useCart((s) => s.items);
  const totalCart = useCart((s) => s.total());
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const supportPrice = plan.yearly * 0.05; // Simulation de 5% de prix de support
  const totalCost = (plan.yearly + supportPrice) * quantity;
  
  const addToCart = () => {
    useCart.getState().addItem({
      planId: plan.id,
      name: plan.name,
      billing: "yearly",
      price: (plan.yearly + supportPrice) * quantity, // Inclut le prix du support pour correspondre au total affiché
    });
    setShowAddedPopup(true);
  };

  const handleAddOnQtyChange = (addOnId: string, delta: number) => {
    setAddOnQuantities(prev => {
      const current = prev[addOnId] || 1;
      const next = Math.max(1, current + delta);
      return { ...prev, [addOnId]: next };
    });
  };

  const addAddOnToCart = (addOn: Plan) => {
    const qty = addOnQuantities[addOn.id] || 1;
    const supportVal = addOn.yearly * 0.05;
    useCart.getState().addItem({
      planId: addOn.id,
      name: addOn.name,
      billing: "yearly",
      price: (addOn.yearly + supportVal) * qty,
    });
    setShowAddedPopup(true);
  };

  return (
    <div className="bg-background min-h-screen pb-20">
      
      {/* ADDED TO CART POPUP / DRAWER */}
      {mounted && createPortal(
        <AnimatePresence>
          {showAddedPopup && (
            <>
              {/* Overlay sombre pour assombrir la page en arrière-plan */}
              <div 
                className="fixed inset-0 bg-black/50 z-[9999]"
                onClick={() => setShowAddedPopup(false)}
              />
              <motion.div 
                initial={{ opacity: 0, x: '100%' }} 
                animate={{ opacity: 1, x: 0 }} 
                exit={{ opacity: 0, x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 h-screen w-[400px] max-w-[100vw] bg-paper shadow-2xl z-[10000] flex flex-col border-l border-outline font-sans rounded-none"
              >
                {/* Header */}
                <div className="p-4 flex justify-between items-center border-b border-outline bg-paper">
                  <button onClick={() => setShowAddedPopup(false)} className="text-primary text-xs font-bold uppercase tracking-widest flex items-center hover:text-primary-deep cursor-pointer">
                    <ChevronLeft className="h-4 w-4" /> Continuer les achats
                  </button>
                  <Link href="/panier" className="text-primary flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-primary-deep">
                    <ShoppingCart className="h-4 w-4" /> Voir le panier
                  </Link>
                </div>
                
                <div className="p-6 flex-1 overflow-y-auto">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-[#4caf50] text-white p-0.5 rounded-none">
                      <Check className="h-4 w-4" strokeWidth={3} />
                    </div>
                    <h3 className="text-lg font-display font-bold text-ink">Ajouté au panier</h3>
                  </div>

                  {/* Item Card */}
                  <div className="border border-outline rounded-none p-4 mb-4 bg-paper shadow-sm">
                    <div className="flex gap-4 mb-4">
                      <div className="w-12 h-12 border border-outline rounded-none flex items-center justify-center text-primary bg-warm flex-shrink-0">
                        <MonitorSmartphone className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <span className="text-sm font-medium text-ink leading-tight">{plan.name}</span>
                          <span className="font-bold text-ink ml-2">{formatPrice(totalCost)}</span>
                        </div>
                        <span className="text-xs text-muted/60 font-mono mt-1 block">Réf : CP-HAR-{plan.id.toUpperCase()}</span>
                        <div className="text-right mt-1">
                          <button className="text-primary text-xs font-bold hover:underline cursor-pointer">Modifier</button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4 pt-4 border-t border-outline text-xs text-muted">
                      <div className="flex gap-3">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                        <div>
                          <span className="font-bold text-ink block mb-0.5">Solution Complète</span>
                          Période couverte : 1 an
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                        <div>
                          <span className="font-bold text-ink block mb-0.5">Support Premium</span>
                          Inclus pour 1 an
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="p-6 bg-warm border-t border-outline">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-muted">Sous-total ({items.length} article{items.length > 1 ? "s" : ""}):</span>
                    <span className="text-xl font-display font-black text-ink">{formatPrice(totalCart)}</span>
                  </div>
                  <Link href="/panier" className="w-full bg-primary hover:bg-primary-deep text-white text-[11px] font-bold uppercase tracking-[0.16em] py-4 rounded-none flex items-center justify-center transition-colors">
                    Aller au Panier
                  </Link>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}

      {/* Breadcrumbs */}
      <div className="bg-paper border-b border-outline">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-3 text-[13px] text-muted flex gap-2">
          <Link href="/" className="hover:text-primary transition-colors">Accueil</Link>
          <span>/</span>
          <Link href="/offres" className="hover:text-primary transition-colors">Sécurité des Terminaux</Link>
          <span>/</span>
          <span className="text-ink font-semibold">{plan.name}</span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8">
        
        {/* Left Column: Product Details */}
        <div className="space-y-8">
          
          {/* Header */}
          <div className="flex gap-6 items-start">
            <div className="w-16 h-16 bg-paper border border-outline flex items-center justify-center rounded-none text-primary flex-shrink-0 shadow-sm">
              <MonitorSmartphone className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-2xl font-display font-bold text-ink mb-4">{plan.name}</h1>
              <div className="flex gap-4 text-[13px] text-muted font-medium flex-wrap">
                <span className="flex items-center gap-1 cursor-pointer hover:text-primary transition-colors"><FileText className="h-4 w-4"/> Fiche Technique</span>
                <span className="text-outline">|</span>
                <span className="flex items-center gap-1 cursor-pointer hover:text-primary transition-colors"><FileText className="h-4 w-4"/> Instructions de Licence</span>
                <span className="text-outline">|</span>
                <span className="flex items-center gap-1 cursor-pointer hover:text-primary transition-colors"><FileText className="h-4 w-4"/> Aperçu du Produit</span>
              </div>
            </div>
          </div>

          {/* Description Accordion (Open) */}
          <div className="border-t border-outline pt-6">
            <button className="flex items-center gap-2 text-sm font-bold text-ink mb-4 w-full text-left cursor-pointer">
              Description <ChevronDown className="h-4 w-4" />
            </button>
            <p className="text-[13px] text-muted leading-relaxed mb-4">
              {plan.tagline}. {plan.name} défend les utilisateurs contre les menaces numériques, offrant une protection inégalée pour {plan.audience}. Il inclut des fonctionnalités conçues pour sécuriser vos appareils sans impacter leurs performances.
            </p>
            <button className="flex items-center gap-2 text-sm font-bold text-ink w-full pt-4 border-t border-outline text-left cursor-pointer">
              Spécifications <ChevronDown className="h-4 w-4 -rotate-90" />
            </button>
          </div>

          {/* Cloud Service Section */}
          <div>
            <h2 className="text-lg font-display font-bold text-ink mb-4">Service Cloud</h2>
            <div className="flex gap-4 flex-col lg:flex-row">
              <div className="border border-primary rounded-none p-4 flex-1 relative bg-paper shadow-sm">
                <div className="absolute -top-2.5 -right-2 bg-primary text-white p-1.5 rounded-none">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted/60 uppercase font-mono tracking-wider text-xs">CP-HAR-{plan.id.toUpperCase()}</span>
                  <span className="font-bold text-ink font-display">{formatPrice(plan.yearly)}<span className="font-normal text-muted text-xs">/ an</span></span>
                </div>
              </div>
              <div className="flex-1 bg-warm border border-outline p-4 text-[12px] text-muted rounded-none flex gap-2">
                <span className="font-bold border border-outline rounded-none w-4 h-4 flex items-center justify-center text-[10px] bg-paper shrink-0">i</span>
                <div>
                  <span className="font-bold text-ink">Info : </span> 
                  Inclut {plan.perks.join(", ")}.
                </div>
              </div>
            </div>
          </div>

          {/* Other Offers as Add-Ons */}
          <div>
            <h2 className="text-lg font-display font-bold text-ink mb-4">Abonnements Supplémentaires</h2>
            
            <div className="bg-paper border border-outline rounded-none overflow-hidden shadow-sm">
              <div className="border-b border-outline bg-warm p-3">
                <span className="text-xs font-bold uppercase tracking-widest text-primary-deep">Options / Add-Ons</span>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left text-[13px]">
                  <thead className="bg-warm text-muted border-b border-outline">
                    <tr>
                      <th className="font-bold uppercase tracking-wider text-[10px] py-3 px-4">Description</th>
                      <th className="font-bold uppercase tracking-wider text-[10px] py-3 px-4">Réf. (SKU)</th>
                      <th className="font-bold uppercase tracking-wider text-[10px] py-3 px-4 text-center">Qté</th>
                      <th className="font-bold uppercase tracking-wider text-[10px] py-3 px-4 text-right">Prix</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline">
                    {plans.filter(p => p.id !== plan.id).map(otherPlan => {
                      const qty = addOnQuantities[otherPlan.id] || 1;
                      const supportVal = otherPlan.yearly * 0.05;
                      const totalAddOnCost = (otherPlan.yearly + supportVal) * qty;

                      return (
                        <tr key={otherPlan.id} className="hover:bg-warm/50 transition-colors">
                          <td className="py-4 px-4 font-medium text-ink max-w-xs">{otherPlan.name} <br/><span className="text-xs text-muted font-normal">{otherPlan.tagline}</span></td>
                          <td className="py-4 px-4 text-muted/60 text-xs font-mono">ADD-{otherPlan.id.toUpperCase()}</td>
                          <td className="py-4 px-4 text-center">
                            <div className="inline-flex border border-outline rounded-none items-center bg-paper">
                              <button 
                                onClick={() => handleAddOnQtyChange(otherPlan.id, -1)}
                                className="px-2.5 py-1 text-muted hover:bg-warm border-r border-outline cursor-pointer"
                              >
                                -
                              </button>
                              <span className="px-3.5 text-ink text-xs font-bold">{qty}</span>
                              <button 
                                onClick={() => handleAddOnQtyChange(otherPlan.id, 1)}
                                className="px-2.5 py-1 text-muted hover:bg-warm border-l border-outline cursor-pointer"
                              >
                                +
                              </button>
                            </div>
                          </td>
                          <td className="py-4 px-4 text-right">
                            <div className="font-display font-bold text-ink mb-1">{formatPrice(totalAddOnCost)}</div>
                            <button 
                              onClick={() => addAddOnToCart(otherPlan)}
                              className="text-[10px] font-bold uppercase tracking-widest border border-primary text-primary px-3 py-1.5 rounded-none hover:bg-primary-muted transition-colors cursor-pointer"
                            >
                              Ajouter
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Support Section */}
          <div>
            <h2 className="text-lg font-display font-bold text-ink mb-4">Support</h2>
            <div className="bg-paper border border-outline rounded-none p-6 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <span className="text-sm font-bold text-ink">Abonnements de Support</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted">Support inclus</span>
                  <div className="w-8 h-4 bg-primary rounded-none relative">
                    <div className="w-3 h-3 bg-white rounded-none absolute right-0.5 top-0.5" />
                  </div>
                </div>
              </div>
              <div className="space-y-4 text-sm text-muted divide-y divide-outline">
                <div className="flex justify-between pb-2"><span>Période de Support :</span> <strong className="text-ink">1 An</strong></div>
                <div className="flex justify-between pt-2 pb-2"><span>Type de Support :</span> <strong className="text-ink">Collaboratif</strong></div>
                <div className="flex justify-between pt-2"><span>Niveau de Support :</span> <strong className="text-ink">Premium</strong></div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Sticky Sidebar */}
        <div className="relative">
          <div className="sticky top-28 space-y-6">
            
            <div className="bg-paper border border-outline p-6 shadow-sm rounded-none">
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-muted">Coût Total</span>
                <span className="text-2xl font-display font-black text-ink">{formatPrice(totalCost)}</span>
              </div>
              
              <div className="mb-6">
                <span className="block text-xs font-bold uppercase tracking-widest text-muted/65 mb-2">Quantité</span>
                <div className="flex border border-outline rounded-none w-full">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-3 py-2 text-muted hover:bg-warm border-r border-outline cursor-pointer">-</button>
                  <input type="text" value={quantity} readOnly className="flex-1 text-center text-sm font-bold text-ink outline-none bg-paper" />
                  <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-2 text-muted hover:bg-warm border-l border-outline cursor-pointer">+</button>
                </div>
              </div>

              <div className="space-y-4 mb-6 border-t border-b border-outline py-4">
                <div className="flex justify-between">
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-muted/80">{plan.name}</span>
                    <span className="text-xs text-muted">Abonnement annuel</span>
                  </div>
                  <span className="text-sm font-bold text-ink">{formatPrice(plan.yearly)}</span>
                </div>
                <div className="flex justify-between">
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-muted/80">Support Agilly</span>
                    <span className="text-xs text-muted">Niveau Premium</span>
                  </div>
                  <span className="text-sm font-bold text-ink">{formatPrice(supportPrice)}</span>
                </div>
              </div>

              <button 
                onClick={addToCart}
                className="w-full bg-primary hover:bg-primary-deep text-white text-[12px] font-bold uppercase tracking-[0.16em] py-4 rounded-none flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <ShoppingCart className="h-4.5 w-4.5" />
                Ajouter au Panier
              </button>
            </div>

            {/* Process Configuration Menu */}
            <div className="pt-4 px-2">
              <span className="text-[10px] font-bold text-muted/50 tracking-widest uppercase block mb-4">// Configuration du Processus</span>
              <ul className="space-y-3 text-[13px] text-muted border-l-2 border-outline">
                <li className="pl-4 border-l-2 border-primary text-primary font-bold -ml-[2px]">Produit</li>
                <li className="pl-4 hover:text-ink cursor-pointer transition-colors">Abonnements</li>
                <li className="pl-4 hover:text-ink cursor-pointer transition-colors">Support</li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
