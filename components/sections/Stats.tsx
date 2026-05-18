const stats = [
  { value: "3500", label: "jours sans incident" },
  { value: "+10", label: "ans d'expertise Agilly" },
  { value: "+300", label: "familles accompagnées" },
  { value: "3800+", label: "appareils protégés" },
];

export function Stats() {
  return (
    <section className="border-y border-outline bg-background">
      <div className="mx-auto max-w-6xl section-pad">
        <div className="max-w-xl">
          <p className="eyebrow">En chiffres</p>
          <h2 className="mt-3 font-serif text-[2rem] text-ink md:text-[2.5rem]">
            Des résultats concrets
          </h2>
        </div>

        <dl className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-outline">
          {stats.map((s) => (
            <div key={s.label} className="lg:px-8 lg:first:pl-0 lg:last:pr-0">
              <dt className="font-serif text-4xl text-primary md:text-5xl">{s.value}</dt>
              <dd className="mt-2 text-[15px] text-muted">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
