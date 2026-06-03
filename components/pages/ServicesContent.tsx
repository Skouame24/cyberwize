"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { 
  Shield, 
  Laptop, 
  Smartphone, 
  Activity, 
  CheckCircle2, 
  Clock, 
  Globe, 
  Sliders, 
  Users, 
  Database, 
  Zap, 
  FileText, 
  Eye, 
  ArrowRight,
  TrendingUp,
  Settings,
  HeartHandshake
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { plans, formatPrice } from "@/lib/plans";

const clientPhases = [
  {
    phase: "1. Déploiement & configuration",
    desc: "AGILLY assure l’installation et le paramétrage initial de la solution sur tous les terminaux, en tenant compte des profils utilisateurs et des besoins spécifiques, pour une mise en service rapide et sécurisée."
  },
  {
    phase: "2. Définition des politiques de sécurité",
    desc: "Mise en place de règles adaptées (contrôle parental, filtrage, restrictions d’accès) selon les usages, afin de garantir un équilibre entre protection et expérience utilisateur."
  },
  {
    phase: "3. Surveillance & détection",
    desc: "Supervision continue des événements de sécurité avec détection proactive des menaces et des comportements à risque grâce à des technologies avancées."
  },
  {
    phase: "4. Réponse & remédiation",
    desc: "Intervention rapide en cas d’incident : isolation, suppression des menaces, restauration et envoi d’alertes aux utilisateurs ou parents."
  },
  {
    phase: "5. Reporting & amélioration continue",
    desc: "Rapports réguliers et recommandations pour ajuster les politiques de sécurité et améliorer en continu le niveau de protection."
  }
];

export function ServicesContent() {
  return (
    <section className="bg-[#fcfbfa] text-[#0e131f]">
      {/* ── SECTION 1 : INTRO & VISION ── */}
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <Reveal>
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#f08222]">// PRODUITS</span>
          </div>
          <h2 className="font-serif text-[2.5rem] font-bold leading-tight tracking-tight text-[#0e131f] md:text-[3.5rem] lg:text-[4rem]">
            CYBERWIZE FAMILY
          </h2>
          <p className="mt-4 font-serif text-xl font-medium text-[#f08222] md:text-2xl">
            ENDPOINT & MOBILE SECURITY
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-start border-t border-[#e8e4de] pt-12">
          <Reveal>
            <p className="text-[17px] font-semibold leading-[1.8] text-[#0e131f] md:text-[19px]">
              Dans un environnement où les cybermenaces ciblent aussi bien les postes de travail que les appareils mobiles, les entreprises doivent garantir une protection homogène, intelligente et continue de l’ensemble de leurs terminaux.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[15px] leading-[1.85] text-[#535b6a]">
              Avec <strong>Cyberwize Endpoint & Mobile Security</strong>, AGILLY propose une solution complète de cybersécurité, combinant la puissance des technologies Check Point Software Technologies Harmony Telco et l’expertise de son SOC pour une protection proactive, pilotée et managée de bout en bout.
            </p>
          </Reveal>
        </div>
      </div>

      {/* ── SECTION 2 : QU'EST-CE QUE CYBERWIZE FAMILY ── */}
      <div className="bg-[#faf8f5] border-y border-[#e8e4de]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-center">
            <Reveal>
              <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#f08222]">// L'ESSENTIEL</span>
              <h3 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#0e131f] md:text-4xl">
                Qu’est-ce que <br />Cyberwize Family ?
              </h3>
              <p className="mt-6 text-[15px] leading-[1.8] text-[#535b6a]">
                Cyberwize Family est une déclinaison de l’offre Cyberwize, spécialement conçue pour les familles et les élèves, déployée en partenariat avec les établissements scolaires.
              </p>
              <p className="mt-4 text-[15px] leading-[1.8] text-[#535b6a] font-medium">
                Cyberwize Family transforme la cybersécurité en un service accessible, simple et rassurant pour les ménages.
              </p>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  icon: <Shield className="h-6 w-6 text-[#f08222]" />,
                  title: "Protéger les appareils",
                  desc: "Défense robuste des ordinateurs et des smartphones de vos enfants contre les menaces."
                },
                {
                  icon: <Eye className="h-6 w-6 text-[#f08222]" />,
                  title: "Surveiller les usages",
                  desc: "Détecter les comportements en ligne à risque avant qu'ils ne se transforment en incidents."
                },
                {
                  icon: <Sliders className="h-6 w-6 text-[#f08222]" />,
                  title: "Contrôle parental",
                  desc: "Mettre en place un filtrage intelligent et adapté à l'âge sans bloquer la navigation légitime."
                },
                {
                  icon: <HeartHandshake className="h-6 w-6 text-[#f08222]" />,
                  title: "SOC Agilly inclus",
                  desc: "Bénéficiez d’un accompagnement professionnel sans aucune complexité technique au quotidien."
                }
              ].map((item, i) => (
                <Reveal key={item.title} delay={i * 0.1} className="rounded-2xl border border-[#e8e4de] bg-[#ffffff] p-6 shadow-sm">
                  <div className="mb-4 inline-flex rounded-xl bg-[#fff8f2] p-3">
                    {item.icon}
                  </div>
                  <h4 className="font-serif text-lg font-bold text-[#0e131f]">{item.title}</h4>
                  <p className="mt-2 text-xs leading-[1.6] text-[#535b6a]">{item.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── SECTION 3 : PROTECTION UNIFIÉE ── */}
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#f08222]">// COUVERTURE</span>
            <h3 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#0e131f] md:text-4xl">
              Une protection unifiée pour tous vos terminaux
            </h3>
            <p className="mt-4 text-[15px] text-[#535b6a]">
              La solution couvre l’ensemble de votre environnement utilisateur, qu’il soit professionnel ou familial :
            </p>
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: <Laptop className="h-7 w-7 text-white" />,
              title: "Postes de travail",
              desc: "Ordinateurs fixes et portables sous Windows & macOS. Protection optimale même déconnectés du réseau."
            },
            {
              icon: <Smartphone className="h-7 w-7 text-white" />,
              title: "Appareils mobiles",
              desc: "Smartphones et tablettes iOS & Android. Blocage des malwares mobiles et des connexions réseau risquées."
            },
            {
              icon: <Globe className="h-7 w-7 text-white" />,
              title: "Environnements distants",
              desc: "Utilisateurs externes et machines non managées de manière centralisée grâce aux technologies ZoneAlarm."
            }
          ].map((device, idx) => (
            <Reveal key={device.title} delay={idx * 0.1} className="group relative overflow-hidden rounded-2xl border border-[#e8e4de] bg-[#ffffff] p-8 transition-all duration-300 hover:border-[#f08222]/30 hover:shadow-md">
              <div className="mb-6 inline-flex rounded-xl bg-[#0e131f] p-4 transition-transform group-hover:scale-110">
                {device.icon}
              </div>
              <h4 className="font-serif text-xl font-bold text-[#0e131f]">{device.title}</h4>
              <p className="mt-3 text-sm leading-[1.7] text-[#535b6a]">{device.desc}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-[#e8e4de] bg-[#faf8f5] px-6 py-3 text-xs font-semibold text-[#535b6a]">
            <Zap className="h-4 w-4 text-[#f08222]" />
            <span>Alimenté par l&apos;Intelligence Artificielle <strong>ThreatCloud AI</strong> pour une analyse des menaces en temps réel.</span>
          </div>
        </Reveal>
      </div>

      {/* ── SECTION 4 : CAPACITÉS AVANCÉES (MULTICOUCHES) ── */}
      <div className="bg-[#111827] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
          <div className="max-w-3xl mb-16">
            <Reveal>
              <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#f08222]">// CAPACITÉS</span>
              <h3 className="mt-3 font-serif text-3xl font-bold leading-tight text-white md:text-4xl">
                Des capacités de sécurité avancées et multicouches
              </h3>
              <p className="mt-4 text-[15px] text-white/60">
                Cyberwize Endpoint & Mobile Security intègre des mécanismes de protection de nouvelle génération pour anticiper, détecter et neutraliser les menaces.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Défense Poste de Travail",
                desc: "Pare-feu intelligent, contrôle des applications et détection proactive contre les malwares, ransomwares et bots malveillants."
              },
              {
                title: "Anti-Phishing Zero-Day",
                desc: "Analyse avancée de la légitimité des liens et des formulaires. Blocage instantané des attaques de phishing les plus récentes."
              },
              {
                title: "Sandboxing Innovant",
                desc: "Émulation des fichiers douteux dans un conteneur sécurisé et extraction des menaces (CDR) pour éliminer le danger immédiatement."
              },
              {
                title: "Protection Mobile Native",
                desc: "Sécurisation en continu des systèmes OS, détection des applications espionnes et protection intégrale de la vie privée des enfants."
              }
            ].map((cap, i) => (
              <Reveal key={cap.title} delay={i * 0.1} className="border-l border-white/10 pl-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#f08222]">Couche 0{i + 1}</span>
                <h4 className="mt-2 font-serif text-lg font-bold text-white">{cap.title}</h4>
                <p className="mt-2 text-xs leading-[1.7] text-white/50">{cap.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* ── SECTION 5 : SERVICES INCLUS & AVANTAGES ── */}
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Services inclus (7 cols) */}
          <div className="lg:col-span-7">
            <Reveal>
              <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#f08222]">// CLÉ EN MAIN</span>
              <h3 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#0e131f]">
                Services inclus dans l’offre Cyberwize Family
              </h3>
              <p className="mt-4 text-[15px] text-[#535b6a]">
                AGILLY propose une offre clé en main, sans aucune charge technique pour les parents et les ménages :
              </p>
            </Reveal>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Déploiement et configuration adaptés",
                "Gestion des politiques (filtrage, contrôle)",
                "Analyse et qualification des menaces",
                "Gestion des quarantaines et incidents",
                "Surveillance active des logs et activités",
                "Reporting détaillé pour les parents",
                "Revue de sécurité annuelle",
                "Assistance et support continu"
              ].map((srv, idx) => (
                <Reveal key={srv} delay={idx * 0.05} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#f08222]" />
                  <span className="text-sm font-medium text-[#535b6a]">{srv}</span>
                </Reveal>
              ))}
            </ul>
          </div>

          {/* Avantages & Engagement (5 cols) */}
          <div className="space-y-8 lg:col-span-5">
            <Reveal className="rounded-2xl border border-[#e8e4de] bg-[#faf8f5] p-8">
              <h4 className="font-serif text-xl font-bold text-[#0e131f] flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-[#f08222]" />
                Avantages Famille
              </h4>
              <ul className="mt-4 space-y-2 text-xs text-[#535b6a] font-medium leading-[1.6]">
                <li>· Protection complète des terminaux des enfants</li>
                <li>· Contrôle parental intelligent et évolutif</li>
                <li>· Visibilité accrue sur les usages numériques</li>
                <li>· Détection proactive et traitement des menaces</li>
                <li>· Tranquillité d&apos;esprit totale au quotidien</li>
              </ul>
            </Reveal>

            <Reveal className="rounded-2xl border border-[#e8e4de] bg-[#0e131f] p-8 text-white">
              <h4 className="font-serif text-xl font-bold text-white flex items-center gap-2">
                <Clock className="h-5 w-5 text-[#f08222]" />
                L’engagement Cyberwize Family
              </h4>
              <ul className="mt-4 space-y-2 text-xs text-white/70 leading-[1.6]">
                <li>· Assurer une protection continue 24/7</li>
                <li>· Garantir une réactivité face aux incidents</li>
                <li>· Fournir une visibilité claire et transparente</li>
                <li>· Accompagner les familles dans la sécurisation</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </div>

      {/* ── SECTION 6 : NOTRE APPROCHE (PHASES) ── */}
      <div className="bg-[#faf8f5] border-y border-[#e8e4de]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
          <div className="max-w-3xl mb-16">
            <Reveal>
              <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#f08222]">// METHODOLOGIE</span>
              <h3 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#0e131f] md:text-4xl">
                Notre approche technique et méthodologique
              </h3>
              <p className="mt-4 text-[15px] text-[#535b6a]">
                Au-delà de la technologie, AGILLY se distingue par une approche centrée sur le service et la performance opérationnelle.
              </p>
            </Reveal>
          </div>

          <div className="relative border-l border-[#e8e4de] pl-6 md:pl-10 space-y-12">
            {clientPhases.map((p, idx) => (
              <Reveal key={p.phase} delay={idx * 0.1} className="relative">
                {/* Puce orange sur la ligne de temps */}
                <div className="absolute -left-[31px] md:-left-[47px] top-1.5 h-4 w-4 rounded-full border-4 border-[#faf8f5] bg-[#f08222]" />
                
                <h4 className="font-serif text-lg font-bold text-[#0e131f] md:text-xl">
                  {p.phase}
                </h4>
                <p className="mt-2 max-w-4xl text-sm leading-[1.8] text-[#535b6a]">
                  {p.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* ── SECTION 7 : MODÈLE FLEXIBLE & COMPARATIF ── */}
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28 text-center">
        <Reveal className="max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#f08222]">// OFFRE</span>
          <h3 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#0e131f]">
            Un modèle flexible et adapté à vos besoins
          </h3>
          <p className="mt-4 text-sm text-[#535b6a]">
            Proposé sous forme d&apos;abonnement mensuel ou annuel, sans engagement :
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-6 text-xs font-bold uppercase tracking-wider text-[#0e131f]">
            <span className="rounded-full border border-[#e8e4de] bg-[#ffffff] px-4 py-2">Licence par utilisateur</span>
            <span className="rounded-full border border-[#e8e4de] bg-[#ffffff] px-4 py-2">Couverture de 1 à 10 appareils</span>
            <span className="rounded-full border border-[#e8e4de] bg-[#ffffff] px-4 py-2">Environnements hybrides (Maison + École)</span>
          </div>
        </Reveal>

        {/* 4 plans de sécurité réutilisés */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {plans.map((p, idx) => (
            <Reveal key={p.id} delay={idx * 0.1} className="rounded-2xl border border-[#e8e4de] bg-[#ffffff] p-6 text-left shadow-sm">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#f08222]">{p.tagline}</span>
              <h4 className="mt-2 font-serif text-xl font-bold text-[#0e131f]">{p.name}</h4>
              <p className="mt-3 text-xs leading-[1.6] text-[#535b6a]">{p.audience}</p>
              <div className="mt-6 border-t border-[#e8e4de] pt-4 flex items-baseline gap-1">
                <span className="font-serif text-2xl font-bold text-[#0e131f]">À partir de</span>
                <span className="font-serif text-xl font-semibold text-[#f08222]">{formatPrice(p.monthly)}</span>
                <span className="text-[10px] text-[#535b6a]">/mois</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ── SECTION 8 : POURQUOI CHOISIR CYBERWIZE ── */}
      <div className="bg-[#0e131f] text-white py-20 border-t border-white/5">
        <div className="mx-auto max-w-5xl px-6 text-center sm:px-10">
          <Reveal>
            <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#f08222]">// SYNTHÈSE</span>
            <h3 className="mt-3 font-serif text-3xl font-bold leading-tight text-white md:text-4xl">
              Pourquoi choisir Cyberwize ?
            </h3>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5 text-left">
            {[
              { t: "Unifiée", d: "Une seule solution pour tous vos terminaux." },
              { t: "Intelligente", d: "Alimentée par l’IA ThreatCloud." },
              { t: "Proactive", d: "Capble de bloquer les menaces avant impact." },
              { t: "Managée", d: "Supervisée en continu par les experts AGILLY." },
              { t: "Accessible", d: "Adaptée aussi bien aux entreprises qu’aux familles." }
            ].map((item, idx) => (
              <Reveal key={item.t} delay={idx * 0.05} className="rounded-xl bg-white/[0.03] border border-white/[0.07] p-5">
                <h4 className="font-serif text-base font-bold text-[#f08222]">{item.t}</h4>
                <p className="mt-2 text-xs leading-[1.6] text-white/50">{item.d}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16">
            <Link href="/devis" className="btn-primary inline-flex items-center gap-3">
              <span>Générer un devis</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
