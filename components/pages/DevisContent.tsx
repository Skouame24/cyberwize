"use client";

import { Check, Send } from "lucide-react";
const plans = ["Essentiel", "Famille", "Premium", "Je ne sais pas encore"];

export function DevisContent() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-2xl section-pad">
        <div className="surface-soft">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-ink">Nom complet *</label>
                <input type="text" className="input-soft" placeholder="Marie Kouassi" required />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-ink">Email *</label>
                <input type="email" className="input-soft" placeholder="marie@email.com" required />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-ink">Téléphone</label>
                <input type="tel" className="input-soft" placeholder="+225 XX XX XX XX" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-ink">
                  Nombre d&apos;appareils
                </label>
                <input type="number" min={1} max={20} className="input-soft" placeholder="5" />
              </div>
            </div>

            <div>
              <label className="mb-3 block text-sm font-medium text-ink">Offre souhaitée</label>
              <div className="grid gap-2 sm:grid-cols-2">
                {plans.map((plan) => (
                  <label
                    key={plan}
                    className="flex cursor-pointer items-center gap-3 rounded-xl border border-outline bg-warm px-4 py-3 transition-colors hover:border-primary/30"
                  >
                    <input
                      type="radio"
                      name="plan"
                      value={plan}
                      className="h-4 w-4 accent-primary"
                    />
                    <span className="text-sm text-muted">{plan}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-ink">
                Message (optionnel)
              </label>
              <textarea
                className="textarea-soft"
                rows={4}
                placeholder="Des enfants à protéger, des questions sur l'installation..."
              />
            </div>

            <button type="submit" className="btn-primary w-full">
              <Send className="h-4 w-4" />
              Demander mon essai
            </button>

            <p className="flex items-center justify-center gap-2 text-xs text-muted">
              <Check className="h-3.5 w-3.5 text-primary" />
              Réponse sous 24 heures ouvrées · Sans engagement
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
