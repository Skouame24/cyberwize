import Link from "next/link";
import { plans } from "@/lib/plans";

const products = [
  {
    title: "Défense avancée",
    text: "Antivirus multicouche, détection et blocage en temps réel sur tous les appareils du foyer.",
    perks: ["Scan continu", "Anti-ransomware", "Mises à jour auto"],
  },
  {
    title: "Contrôle parental",
    text: "Filtres, temps d'écran et règles adaptées à chaque âge — avec dialogue, pas surveillance excessive.",
    perks: ["Filtres par catégorie", "Plages horaires", "Rapports clairs"],
  },
  {
    title: "Navigation sécurisée",
    text: "Anti-phishing, analyse des liens et blocage des sites à risque avant chaque visite.",
    perks: ["Extension navigateur", "Alertes temps réel", "Liste blanche"],
  },
  {
    title: "Éducation & données",
    text: "Sensibilisation familiale et protection des données personnelles au quotidien.",
    perks: ["Modules par âge", "Chiffrement", "Conformité RGPD"],
  },
];

export function ServicesContent() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-6xl section-pad">
        <ul className="space-y-16">
          {products.map((p, i) => (
            <li
              key={p.title}
              className="grid gap-8 border-b border-outline pb-16 last:border-0 last:pb-0 lg:grid-cols-[auto_1fr]"
            >
              <span className="font-serif text-5xl text-primary/70">0{i + 1}</span>
              <div>
                <h2 className="font-serif text-2xl text-ink md:text-3xl">{p.title}</h2>
                <p className="mt-4 max-w-2xl text-[15px] leading-[1.8] text-muted">{p.text}</p>
                <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
                  {p.perks.map((perk) => (
                    <li key={perk}>· {perk}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-20 rounded-3xl border border-outline bg-warm p-8 md:p-10">
          <p className="eyebrow">Offres associées</p>
          <h2 className="mt-3 font-serif text-2xl text-ink">Trois niveaux de protection</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className="rounded-2xl border border-outline bg-paper p-5"
              >
                <p className="font-serif text-lg text-ink">{plan.name}</p>
                <p className="mt-1 text-sm text-muted">{plan.tagline}</p>
              </div>
            ))}
          </div>
          <Link href="/offres" className="btn-primary mt-8 inline-flex">
            Comparer les offres
          </Link>
        </div>
      </div>
    </section>
  );
}
