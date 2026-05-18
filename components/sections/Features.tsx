import Link from "next/link";

const features = [
  {
    title: "Défense avancée",
    text: "Protection multicouche contre virus et malwares, en temps réel sur tous les appareils.",
  },
  {
    title: "Contrôle parental",
    text: "Filtrez les contenus, gérez le temps d'écran et adaptez l'accès selon l'âge.",
  },
  {
    title: "Navigation sécurisée",
    text: "Anti-phishing et analyse des sites avant chaque visite.",
  },
  {
    title: "Éducation interactive",
    text: "Sensibilisez toute la famille aux bons réflexes numériques.",
  },
];

export function Features() {
  return (
    <section id="services" className="bg-paper">
      <div className="mx-auto max-w-6xl section-pad">
        <div className="max-w-xl">
          <p className="eyebrow">Ce que nous offrons</p>
          <h2 className="mt-3 font-serif text-[2rem] leading-tight text-ink md:text-[2.5rem]">
            Une protection complète, sans complexité
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted">
            Quatre piliers pour sécuriser votre foyer au quotidien.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {features.map((f) => (
            <article
              key={f.title}
              className="rounded-2xl border border-outline bg-warm/80 p-7 transition-colors hover:border-primary/20"
            >
              <h3 className="font-serif text-xl text-ink">{f.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">{f.text}</p>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center">
          <Link href="/services" className="link-soft">
            Découvrir tous les produits →
          </Link>
        </p>
      </div>
    </section>
  );
}
