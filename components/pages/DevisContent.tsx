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
  const [entiteType, setEntiteType] = useState("Particulier");
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
          entiteType: fd.get("entiteType"),
          entreprise: fd.get("entreprise"),
          poste: fd.get("poste"),
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
      <section className="bg-background min-h-[60vh] py-16">
        <div className="mx-auto max-w-xl section-pad text-center bg-paper border border-outline rounded-none shadow-sm">
          <CheckCircle2 className="mx-auto h-14 w-14 text-primary" />
          <h2 className="mt-6 font-display font-bold text-2xl text-ink">Devis généré avec succès</h2>
          <p className="mt-3 text-xs font-bold uppercase tracking-widest text-primary">
            Référence du devis : {result.reference}
          </p>
          
          <p className="mt-6 text-[14px] leading-relaxed text-muted">
            {result.message}
          </p>
 
          <div className="mt-10 flex justify-center">
            <Link href="/" className="btn-primary">
              Retour à l&apos;accueil
            </Link>
          </div>
 
          {/* Zone de Simulation pour phase de test */}
          <div className="mt-12 border-t border-outline/50 pt-8 text-left">
            <div className="mx-auto max-w-md bg-[#fffcf9] border border-primary/20 p-6 rounded-none shadow-sm text-center">
              <p className="text-[10px] font-bold uppercase tracking-wider text-primary">
                🛠️ Simulation de boîte mail (Développement)
              </p>
              <p className="mt-2 text-[12px] text-muted leading-relaxed">
                Puisqu&apos;il s&apos;agit d&apos;un prototype, vous pouvez simuler le clic sur le lien reçu dans votre boîte de messagerie ci-dessous :
              </p>
              <Link
                href={result.trialLink}
                className="mt-4 inline-flex items-center justify-center gap-2 bg-cyber-navy text-white px-5 py-2.5 text-[11px] font-bold uppercase tracking-widest transition-colors hover:bg-primary rounded-none shadow-sm cursor-pointer"
              >
                Simuler le clic dans le mail
                <ExternalLink className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
 
  return (
    <section className="bg-background min-h-screen py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_350px]">
          <Reveal className="surface-soft shadow-sm">
            <div className="mb-6 flex items-center gap-2 text-primary-deep border-b border-outline pb-4">
              <FileText className="h-5 w-5" />
              <span className="text-sm font-bold uppercase tracking-wide text-ink">Générer un devis PDF immédiat</span>
            </div>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-muted mb-1.5 block">Vous êtes un... *</label>
                <select 
                  name="entiteType" 
                  className="input-soft" 
                  required 
                  value={entiteType}
                  onChange={(e) => setEntiteType(e.target.value)}
                >
                  <option value="Particulier">Particulier / Foyer</option>
                  <option value="Entreprise">Entreprise / PME</option>
                  <option value="Ecole">Établissement scolaire / Autre</option>
                </select>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-muted mb-1.5 block">Nom *</label>
                  <input name="nom" className="input-soft" placeholder="Votre nom" required />
                </div>
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-muted mb-1.5 block">Email *</label>
                  <input name="email" type="email" className="input-soft" placeholder="votre@email.com" required />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-1">
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-muted mb-1.5 block">Téléphone</label>
                  <input name="telephone" type="tel" className="input-soft" placeholder="+225 ..." />
                </div>
              </div>
              
              {entiteType !== "Particulier" && (
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-muted mb-1.5 block">Nom de l&apos;entité / entreprise *</label>
                    <input name="entreprise" className="input-soft" placeholder="Nom de l'entreprise ou école" required />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-muted mb-1.5 block">Votre poste / rôle</label>
                    <input name="poste" className="input-soft" placeholder="Ex: IT Manager, Directeur..." />
                  </div>
                </div>
              )}
 
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-muted mb-1.5 block">Offre souhaitée</label>
                  <select name="plan" className="input-soft" defaultValue="Harmony Telco 5 Devices">
                    <option>Harmony Telco 1 Device</option>
                    <option>Harmony Telco 3 Devices</option>
                    <option>Harmony Telco 5 Devices</option>
                    <option>Harmony Telco 10 Devices</option>
                  </select>
                </div>
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-muted mb-1.5 block">Nombre d&apos;appareils</label>
                  <input name="appareils" type="number" min={1} className="input-soft" defaultValue={5} />
                </div>
              </div>
              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-muted mb-1.5 block">Description de vos besoins spécifiques</label>
                <textarea name="message" className="textarea-soft" placeholder="Décrivez ici vos besoins spécifiques en sécurité, contrôle parental, type d'appareils..." rows={4} />
              </div>
              <button type="submit" className="btn-primary w-full cursor-pointer" disabled={loading}>
                {loading ? "Génération du devis…" : "Générer mon devis"}
              </button>
            </form>
          </Reveal>
 
          <aside className="space-y-6">
            <Reveal className="rounded-none border border-outline bg-warm p-6 shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-widest text-ink mb-4">// Votre panier</h3>
              {items.length === 0 ? (
                <p className="mt-3 text-sm text-muted">
                  Vide —{" "}
                  <Link href="/offres" className="link-soft">
                    ajouter une offre
                  </Link>
                </p>
              ) : (
                <ul className="mt-3 space-y-3.5 text-sm">
                  {items.map((i) => (
                    <li key={i.planId} className="flex justify-between text-muted text-[13px]">
                      <span>{i.name}</span>
                      <span className="font-bold text-ink">{formatPrice(i.price)}</span>
                    </li>
                  ))}
                  <li className="flex justify-between border-t border-outline pt-3.5 font-bold text-ink text-sm">
                    <span>Total</span>
                    <span>{formatPrice(total)}</span>
                  </li>
                </ul>
              )}
            </Reveal>
            <Reveal className="text-xs text-muted leading-relaxed">
              <p>
                Le système génère un devis PDF, l&apos;envoie par email et associe un lien d&apos;essai
                gratuit de 14 jours.
              </p>
              <p className="mt-3">
                Prêt à payer ?{" "}
                <Link href="/panier" className="link-soft font-bold">
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
