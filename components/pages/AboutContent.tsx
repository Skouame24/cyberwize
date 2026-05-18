import Image from "next/image";

const AGILLY_LOGO =
  "https://lh3.googleusercontent.com/aida/ADBb0ugJ7nkKv4KNTm1hBuo1qXak8WoiPfgguZEx9UldYvRSQHTg_c9KpIn2bLXK7a9nCKHQ-EqyZ8G1e1VtOPNUvsoDbE6fh4peGi4jni7s3mEdD7XoPDGBZvysePITafeb0zTmPP_k5NOPi3sbLb7jQnXVaSK_Y0-WSCva8Qp6tzxIPZHN8p6JcgyoGrth7JgPylZOsqV8kuzkV1_qvjTXPhSU2W_13VzvkdV58A_-N2aheOC-24k1gtMFXgU";

const values = [
  {
    title: "Confiance",
    text: "Une protection transparente, sans jargon. Vous savez ce qui est protégé.",
  },
  {
    title: "Proximité",
    text: "Une équipe en Côte d'Ivoire, disponible pour accompagner chaque foyer.",
  },
  {
    title: "Éducation",
    text: "Protéger, c'est aussi apprendre — pour toute la famille.",
  },
  {
    title: "Exigence",
    text: "L'expertise cybersécurité d'Agilly, au service de votre maison.",
  },
];

const milestones = [
  { year: "2014", label: "Création d'Agilly — cybersécurité & cloud managés" },
  { year: "2022", label: "Lancement de Cyberwize Family" },
  { year: "2026", label: "+300 familles accompagnées" },
];

export function AboutContent() {
  return (
    <>
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl section-pad">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="eyebrow">Notre mission</p>
              <h2 className="mt-3 font-serif text-[1.75rem] text-ink md:text-[2.25rem]">
                Rendre la cybersécurité accessible à chaque foyer
              </h2>
              <p className="mt-5 text-[15px] leading-[1.8] text-muted">
                Cyberwize Family protège particuliers, familles et petites structures : menaces
                avancées, navigation sécurisée, contrôle parental et données personnelles — dans une
                expérience simple.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-outline">
              <Image src="/hero-bg.png" alt="Famille" fill className="object-cover" sizes="50vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-outline bg-background">
        <div className="mx-auto max-w-6xl section-pad">
          <p className="eyebrow">Nos valeurs</p>
          <h2 className="mt-3 font-serif text-[1.75rem] text-ink md:text-[2.25rem]">
            Rassurant, professionnel, pédagogique
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {values.map((v) => (
              <article key={v.title} className="rounded-2xl border border-outline bg-paper p-7">
                <h3 className="font-serif text-xl text-ink">{v.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{v.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-outline bg-paper">
        <div className="mx-auto max-w-6xl section-pad">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="eyebrow">Vision</p>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">
                Une Afrique numérique où chaque foyer et chaque TPE dispose d&apos;une protection
                cyber crédible, sans complexité inutile.
              </p>
            </div>
            <div>
              <p className="eyebrow">Mission</p>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">
                Démocratiser la cybersécurité professionnelle via des offres claires, un
                accompagnement humain et une technologie fiable — portée par Agilly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-warm">
        <div className="mx-auto max-w-6xl section-pad">
          <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
            <div className="max-w-lg">
              <p className="eyebrow">AGILLY</p>
              <h2 className="mt-3 font-serif text-xl text-ink md:text-2xl">
                Fournisseur de services managés en Afrique
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-muted">
                Cybersécurité, infrastructures cloud, services managés et transformation
                digitale — Agilly accompagne les organisations dans la sécurisation de leurs
                environnements. Cyberwize Family en est l&apos;offre dédiée aux foyers.
              </p>
            </div>
            <Image src={AGILLY_LOGO} alt="Agilly" width={120} height={48} className="h-11 w-auto" />
          </div>

          <ul className="mt-14 divide-y divide-outline border-y border-outline">
            {milestones.map((m) => (
              <li
                key={m.year}
                className="flex flex-col gap-2 py-8 sm:flex-row sm:gap-12 md:py-10"
              >
                <span className="font-serif text-2xl text-primary md:w-24">{m.year}</span>
                <span className="text-[15px] text-muted">{m.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
