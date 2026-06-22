"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Save, Send, CheckCircle2, ChevronRight, Check, PlusCircle, Trash2 } from "lucide-react";
import { useCart } from "@/lib/cart-store";
import { cn } from "@/lib/utils";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [mounted, setMounted] = useState(false);
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [loading, setLoading] = useState(false);
  
  const [quoteName, setQuoteName] = useState("");
  const [comments, setComments] = useState("");
  const [emails, setEmails] = useState<string[]>([""]);
  const [shareQuote, setShareQuote] = useState(true);
  const [note, setNote] = useState("");

  const items = useCart((s) => s.items);

  const handleAddEmail = () => {
    setEmails([...emails, ""]);
  };

  const handleEmailChange = (index: number, value: string) => {
    const newEmails = [...emails];
    newEmails[index] = value;
    setEmails(newEmails);
  };

  const handleRemoveEmail = (index: number) => {
    if (emails.length > 1) {
      const newEmails = [...emails];
      newEmails.splice(index, 1);
      setEmails(newEmails);
    }
  };

  useEffect(() => {
    setMounted(true);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      // Reset state when closed
      setTimeout(() => setStep(1), 300);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleNext = () => {
    if (step === 1 && quoteName.trim() === "") {
      alert("Veuillez entrer un nom pour le devis.");
      return;
    }
    setStep(2);
  };

  const handleGenerateQuote = async () => {
    // Vérifier si au moins un email est valide
    const validEmails = emails.filter(e => e.trim() !== "");
    if (validEmails.length === 0) {
      alert("Veuillez entrer au moins une adresse email valide.");
      return;
    }
    setLoading(true);
    
    // Simulation d'un appel API pour générer le devis
    setTimeout(() => {
      setLoading(false);
      setStep(3);
    }, 1500);
  };

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-[99999]"
            onClick={onClose}
          />
          <div className="fixed inset-0 flex items-center justify-center z-[100000] p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-paper border border-outline rounded-none shadow-2xl w-full max-w-lg overflow-hidden pointer-events-auto flex flex-col"
            >
              {/* Header */}
              <div className="bg-primary px-6 py-4 flex items-center justify-between rounded-none">
                <h2 className="text-white text-lg font-bold font-display uppercase tracking-wider">// Générer un devis</h2>
                <button onClick={onClose} className="text-white/80 hover:text-white transition-colors cursor-pointer">
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="p-8">
                {/* Progress Bar */}
                <div className="flex items-center justify-between mb-10 relative">
                  <div className="absolute top-4 left-[10%] right-[10%] h-[2px] bg-outline -z-10" />
                  <div 
                    className="absolute top-4 left-[10%] h-[2px] bg-primary -z-10 transition-all duration-300"
                    style={{ width: step === 1 ? '0%' : step === 2 ? '40%' : '80%' }}
                  />
                  
                  {/* Step 1 */}
                  <div className="flex flex-col items-center gap-2">
                    <div className={cn(
                      "w-8 h-8 rounded-none flex items-center justify-center text-white text-sm border-2 transition-colors duration-300",
                      step >= 1 ? "bg-primary border-primary" : "bg-paper border-outline text-muted"
                    )}>
                      <Save className="h-4 w-4" />
                    </div>
                    <span className={cn("text-[10px] font-bold uppercase tracking-wider", step >= 1 ? "text-primary" : "text-muted")}>
                      Sauvegarder
                    </span>
                  </div>

                  {/* Step 2 */}
                  <div className="flex flex-col items-center gap-2">
                    <div className={cn(
                      "w-8 h-8 rounded-none flex items-center justify-center text-white text-sm border-2 transition-colors duration-300",
                      step >= 2 ? "bg-primary border-primary" : "bg-paper border-outline text-muted"
                    )}>
                      {step > 2 ? <Check className="h-4 w-4" /> : <Send className="h-4 w-4" />}
                    </div>
                    <span className={cn("text-[10px] font-bold uppercase tracking-wider", step >= 2 ? "text-primary" : "text-muted")}>
                      Envoyer
                    </span>
                  </div>

                  {/* Step 3 */}
                  <div className="flex flex-col items-center gap-2">
                    <div className={cn(
                      "w-8 h-8 rounded-none flex items-center justify-center text-white text-sm border-2 transition-colors duration-300",
                      step === 3 ? "bg-primary border-primary" : "bg-paper border-outline text-muted"
                    )}>
                      <Check className="h-4 w-4" />
                    </div>
                    <span className={cn("text-[10px] font-bold uppercase tracking-wider", step === 3 ? "text-primary" : "text-muted")}>
                      Validation
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="min-h-[200px]">
                  {step === 1 && (
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-5">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-muted mb-2">Nom du devis *</label>
                        <input 
                          type="text"
                          value={quoteName}
                          onChange={(e) => setQuoteName(e.target.value)}
                          className="input-soft"
                          placeholder="Ex: Projet Sécurité 2026"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-muted mb-2">Commentaires (Optionnel)</label>
                        <textarea 
                          value={comments}
                          onChange={(e) => setComments(e.target.value)}
                          className="textarea-soft min-h-[100px]"
                          placeholder="Ajoutez des détails pour vos équipes..."
                        />
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                      
                      {/* Toggle Partager */}
                      <div className="flex items-center justify-between border-b border-outline pb-4">
                        <span className="text-sm font-bold uppercase tracking-wider text-ink">Partager ce devis</span>
                        <button 
                          onClick={() => setShareQuote(!shareQuote)}
                          className={cn(
                            "w-10 h-5 rounded-none flex items-center transition-colors px-0.5 border",
                            shareQuote ? "bg-primary border-primary" : "bg-background border-outline"
                          )}
                        >
                          <div className={cn(
                            "w-4 h-4 bg-white rounded-none shadow-sm transition-transform",
                            shareQuote ? "translate-x-5" : "translate-x-0"
                          )} />
                        </button>
                      </div>

                      {shareQuote && (
                        <div className="space-y-3">
                          <label className="block text-xs font-bold uppercase tracking-wider text-muted">Adresses email *</label>
                          {emails.map((em, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <input 
                                type="email"
                                value={em}
                                onChange={(e) => handleEmailChange(idx, e.target.value)}
                                className="input-soft flex-1"
                                placeholder="Entrez un email"
                              />
                              {emails.length > 1 && (
                                <button 
                                  onClick={() => handleRemoveEmail(idx)}
                                  className="text-muted hover:text-primary p-2 cursor-pointer transition-colors"
                                  title="Retirer cet email"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </button>
                              )}
                            </div>
                          ))}
                          
                          <button 
                            onClick={handleAddEmail}
                            className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted hover:text-primary mt-2 transition-colors cursor-pointer"
                          >
                            <PlusCircle className="h-4 w-4" />
                            Ajouter un utilisateur
                          </button>
                        </div>
                      )}

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-muted mb-2">Note pour le destinataire (Optionnel)</label>
                        <textarea 
                          value={note}
                          onChange={(e) => setNote(e.target.value)}
                          className="textarea-soft min-h-[100px]"
                          placeholder="Voici le devis pour la solution Harmony..."
                        />
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center text-center py-8">
                      <div className="w-16 h-16 bg-primary/10 rounded-none border border-primary/20 flex items-center justify-center mb-4">
                        <CheckCircle2 className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold font-display uppercase tracking-wider text-ink mb-2">Devis envoyé !</h3>
                      <p className="text-sm text-muted">
                        Votre devis détaillé a été envoyé à <strong>{emails.filter(e => e.trim() !== "").length} destinataire(s)</strong> avec succès. Il contient également les liens vers la version d'essai.
                      </p>
                    </motion.div>
                  )}
                </div>

                {/* Footer Actions */}
                <div className="mt-8 pt-6 border-t border-outline flex justify-between items-center">
                  {step > 1 && step < 3 ? (
                    <button onClick={() => setStep(1)} className="text-xs font-bold uppercase tracking-wider text-muted hover:text-ink cursor-pointer transition-colors">
                      Retour
                    </button>
                  ) : (
                    <button onClick={onClose} className="text-xs font-bold uppercase tracking-wider text-muted hover:text-ink cursor-pointer transition-colors">
                      {step === 3 ? "Fermer" : "Annuler"}
                    </button>
                  )}

                  {step === 1 && (
                    <button 
                      onClick={handleNext}
                      className="bg-primary hover:bg-primary-deep text-white px-6 py-2.5 rounded-none text-xs font-bold uppercase tracking-wider transition-colors duration-300 cursor-pointer"
                    >
                      Suivant
                    </button>
                  )}

                  {step === 2 && (
                    <button 
                      onClick={handleGenerateQuote}
                      disabled={loading}
                      className="bg-primary hover:bg-primary-deep text-white px-6 py-2.5 rounded-none text-xs font-bold uppercase tracking-wider transition-colors duration-300 disabled:opacity-50 cursor-pointer"
                    >
                      {loading ? "Création..." : "Générer le devis"}
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}
