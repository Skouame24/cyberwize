import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Calendar, Clock, User, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";

interface PostSection {
  title: string;
  content: string;
}

interface PostData {
  title: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  intro: string;
  quote?: string;
  sections: PostSection[];
  expertTip?: string;
}

const posts: Record<string, PostData> = {
  "1": {
    title: "5 habitudes numériques à transmettre à vos enfants",
    date: "15 avril 2026",
    readTime: "5 min",
    category: "Famille",
    image: "/mother_daughter_tablet_black.png",
    intro: "Les enfants utilisent internet de plus en plus jeunes. Leur apprendre les bons réflexes dès le départ, c'est leur offrir une protection qui dure toute leur vie.",
    quote: "La cybersécurité familiale ne consiste pas à surveiller chacun de leurs pas, mais à leur donner la boussole nécessaire pour naviguer sereinement.",
    sections: [
      {
        title: "Des mots de passe uniques",
        content: "Un mot de passe robuste par compte est obligatoire. L'utilisation d'un gestionnaire de mots de passe familial simplifie la vie de chacun tout en augmentant drastiquement le niveau global de sécurité.",
      },
      {
        title: "Ne jamais cliquer sans réfléchir",
        content: "Un lien suspect reçu par SMS ou message de jeu ? Établissez une règle d'or simple : l'enfant doit systématiquement demander à un adulte avant d'ouvrir un lien inconnu.",
      },
      {
        title: "Partager avec grande prudence",
        content: "Expliquez à vos enfants l'importance de ne jamais partager d'informations sensibles (nom complet, adresse, école, photos personnelles) sur les jeux ou forums publics.",
      },
      {
        title: "Parler ouvertement des contenus inappropriés",
        content: "Créez un espace de discussion bienveillant où vos enfants se sentent libres de vous signaler tout contenu, image ou message qui les met mal à l'aise, sans crainte d'être punis.",
      },
      {
        title: "Instaurer des pauses régulières",
        content: "Définissez ensemble des règles claires de déconnexion et des temps d'écran équilibrés. La sécurité, c'est aussi savoir s'éloigner des écrans pour se reposer.",
      },
    ],
    expertTip: "Commencez par appliquer ces règles ensemble. Le mimétisme est le meilleur outil pédagogique : si les parents montrent l'exemple, les enfants suivront tout naturellement.",
  },
  "2": {
    title: "Phishing : repérer les arnaques par SMS",
    date: "2 avril 2026",
    readTime: "4 min",
    category: "Cybersécurité",
    image: "/black_woman_phone.png",
    intro: "Les tentatives de hameçonnage par SMS (smishing) se multiplient et ciblent de plus en plus de foyers. Voici comment détecter instantanément les pièges.",
    quote: "Une banque, un opérateur ou la poste ne vous demanderont jamais vos identifiants ou informations bancaires urgentes par un simple lien SMS.",
    sections: [
      {
        title: "L'urgence artificielle",
        content: "Les attaquants utilisent la peur ou la curiosité : colis suspendu, compte bancaire bloqué, amende imminente. Prenez une grande inspiration et ne cédez jamais à la panique.",
      },
      {
        title: "Les liens raccourcis ou suspects",
        content: "Les URL détournées ou utilisant des noms de domaine étranges (ex: laposte-suivi-securite.com au lieu de laposte.fr) doivent immédiatement être considérées comme frauduleuses.",
      },
      {
        title: "La demande d'informations confidentielles",
        content: "Aucun service sérieux ou gouvernemental ne vous demandera de ressaisir vos mots de passe ou numéros de carte de crédit via un lien reçu par messagerie.",
      },
      {
        title: "La règle d'or Cyberwize",
        content: "En cas de doute, quittez le message, ouvrez votre navigateur habituel et connectez-vous directement sur l'application ou le site officiel concerné.",
      },
    ],
    expertTip: "Activez les filtres anti-spam intégrés à votre smartphone et bloquez immédiatement les numéros suspects après avoir signalé le SMS au 33700.",
  },
  "3": {
    title: "Contrôle parental : le bon équilibre",
    date: "20 mars 2026",
    readTime: "6 min",
    category: "Famille",
    image: "/family_laptop_black.png",
    intro: "Trouver la juste mesure entre protection de l'enfance et respect de la vie privée est le grand défi de l'éducation numérique moderne.",
    quote: "Le contrôle parental est une béquille technique temporaire. L'éducation numérique est le seul remède permanent.",
    sections: [
      {
        title: "Protéger sans espionner",
        content: "Utilisez les outils pour bloquer les contenus toxiques, pas pour lire secrètement les conversations privées de vos adolescents. Instaurez un climat de confiance réciproque.",
      },
      {
        title: "Adapter selon l'âge",
        content: "Les filtres doivent être stricts pour les moins de 10 ans, et s'assouplir progressivement à l'adolescence pour faire place à la responsabilité individuelle.",
      },
      {
        title: "Discuter des règles établies",
        content: "Expliquez le rôle des filtres de sécurité à vos enfants. S'ils comprennent pourquoi un site est bloqué, ils accepteront plus facilement les règles de la maison.",
      },
    ],
    expertTip: "Impliquez vos enfants dans le paramétrage des outils. Laissez-les choisir certains critères pour les responsabiliser face à leur propre sécurité.",
  },
  "4": {
    title: "RGPD et données familiales",
    date: "5 mars 2026",
    readTime: "7 min",
    category: "Conformité",
    image: "/hero_human.png",
    intro: "Vos informations privées ont une immense valeur. Apprenez à vos enfants à respecter la confidentialité de votre foyer sur internet.",
    quote: "Sur internet, lorsque c'est gratuit, c'est que vos données personnelles sont la véritable monnaie d'échange.",
    sections: [
      {
        title: "Le principe de minimisation",
        content: "Ne donnez que le strict minimum lors de la création d'un compte de jeu : utilisez des pseudonymes neutres et refusez systématiquement le partage de position.",
      },
      {
        title: "Nettoyer les comptes inactifs",
        content: "Prenez le temps de supprimer les applications ou comptes de jeux en ligne que vos enfants n'utilisent plus afin de limiter l'exposition de leurs données.",
      },
      {
        title: "Paramétrer les consoles et réseaux",
        content: "Prenez 5 minutes pour régler les options de confidentialité des réseaux sociaux et consoles de jeux de vos enfants pour interdire les profils publics.",
      },
    ],
    expertTip: "Faites régulièrement un audit des comptes connectés à vos adresses emails et révoquez les accès des services obsolètes.",
  },
  "5": {
    title: "Former la famille aux risques en ligne",
    date: "18 février 2026",
    readTime: "5 min",
    category: "Formation",
    image: "/mother_daughter_tablet_black.png",
    intro: "La cybersécurité ne doit pas être un sujet anxiogène. Transformez la prévention en moments d'échange ludiques en famille.",
    quote: "La meilleure défense d'un réseau familial réside dans le niveau de vigilance partagé par chaque membre de la maison.",
    sections: [
      {
        title: "Les jeux de rôle et quiz",
        content: "Organisez des petits quiz en famille ou simulez de faux e-mails de phishing pour apprendre à détecter les indices de pièges en s'amusant.",
      },
      {
        title: "Le contrat d'écran familial",
        content: "Rédigez ensemble une charte d'utilisation des écrans signée par toute la famille (parents compris !), cela crée un engagement fort et respecté.",
      },
      {
        title: "Partager ses propres expériences",
        content: "Parlez ouvertement de vos propres erreurs ou d'articles de cybersécurité que vous avez lus. Plus le sujet est naturel, plus l'enfant viendra vous voir s'il a un problème.",
      },
    ],
    expertTip: "Utilisez des ressources visuelles et interactives comme des bandes dessinées ou des vidéos éducatives pour capter l'intérêt des plus jeunes.",
  },
  "6": {
    title: "VPN familial : quand l'utiliser",
    date: "1 février 2026",
    readTime: "4 min",
    category: "Cybersécurité",
    image: "/family_laptop_black.png",
    intro: "Comprendre l'utilité d'un tunnel sécurisé (VPN) permet de protéger la connexion de vos appareils, notamment hors de chez vous.",
    quote: "Un réseau Wi-Fi public gratuit sans mot de passe est un terrain de jeu idéal pour les pirates qui souhaitent intercepter vos données privées.",
    sections: [
      {
        title: "Le chiffrement sur Wi-Fi public",
        content: "Dans les gares, cafés ou hôtels, les réseaux ouverts ne sont pas sécurisés. Le VPN crypte toutes vos données pour les rendre totalement illisibles aux tiers.",
      },
      {
        title: "La sécurité en déplacement",
        content: "Activez le VPN sur le téléphone de vos enfants ou le vôtre dès que vous vous connectez à un réseau externe pour protéger vos mots de passe et emails.",
      },
      {
        title: "Le choix d'un service de confiance",
        content: "Privilégiez les solutions reconnues et évitez les VPN gratuits douteux qui se financent en revendant votre historique de navigation.",
      },
    ],
    expertTip: "Configurez le VPN pour qu'il se lance automatiquement dès que votre appareil détecte un réseau Wi-Fi non sécurisé.",
  },
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = posts[id];

  if (!post) {
    return (
      <div className="mx-auto max-w-6xl section-pad text-center">
        <h1 className="font-serif text-2xl text-ink">Article non trouvé</h1>
        <Link href="/blog" className="link-soft mt-6 inline-flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Retour au blog
        </Link>
      </div>
    );
  }

  return (
    <>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        description={`${post.date} · ${post.readTime}`}
      />
      <article className="bg-[#fffcf9] pb-32">
        <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16 pt-12">
          
          {/* LIEN DE RETOUR */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-widest text-[#535b6a] hover:text-[#f08222] transition-colors duration-300 mb-12"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour aux articles
          </Link>

          {/* GRILLE ÉDITORIALE (Sidebar + Contenu) */}
          <div className="grid gap-12 lg:grid-cols-[1fr_2.5fr] lg:gap-16 items-start">
            
            {/* COLONNE SIDEBAR GAUCHE (Sticky Meta Info) */}
            <aside className="lg:sticky lg:top-32 space-y-8 border-l border-black/5 pl-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-black/45">Rédacteur</span>
                <div className="mt-2 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-none bg-[#f08222]/10 text-[#f08222]">
                    <User className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[14px] font-bold text-ink">Équipe Cyberwize</p>
                    <p className="text-[11px] text-[#535b6a]">Agilly Group</p>
                  </div>
                </div>
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-black/45">Publié le</span>
                <p className="mt-1 flex items-center gap-2 text-[13px] font-semibold text-ink">
                  <Calendar className="h-4 w-4 text-[#f08222]" />
                  {post.date}
                </p>
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-black/45">Temps de lecture</span>
                <p className="mt-1 flex items-center gap-2 text-[13px] font-semibold text-ink">
                  <Clock className="h-4 w-4 text-[#f08222]" />
                  {post.readTime}
                </p>
              </div>

              <div className="pt-4">
                <span className="inline-flex items-center gap-2 border border-[#f08222]/20 bg-[#f08222]/5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#f08222] rounded-none">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  Conseils Certifiés
                </span>
              </div>
            </aside>

            {/* COLONNE PRINCIPALE DROITE (Lecture) */}
            <div className="space-y-12">
              
              {/* Introduction en gros format */}
              <p className="font-serif text-[20px] font-normal leading-relaxed text-ink md:text-[22px]">
                {post.intro}
              </p>

              {/* Image principale */}
              {post.image && (
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-none shadow-sm">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              )}

              {/* Sections / Étapes (Calculées sous forme de frise / liste aérée) */}
              <div className="space-y-12 pt-6">
                {post.sections.map((section, idx) => (
                  <div key={idx} className="relative flex gap-6 sm:gap-8 items-start group">
                    {/* Numéro géant comme repère visuel */}
                    <div className="font-serif text-[3rem] font-black leading-none text-[#f08222]/15 select-none transition-colors duration-300 group-hover:text-[#f08222]/25 shrink-0 pt-1">
                      {String(idx + 1).padStart(2, "0")}
                    </div>
                    
                    <div>
                      <h3 className="font-serif text-[1.4rem] font-bold text-ink leading-tight">
                        {section.title}
                      </h3>
                      <p className="mt-3 text-[16px] leading-[1.8] text-[#535b6a]">
                        {section.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Citation éditoriale (Pull Quote) */}
              {post.quote && (
                <blockquote className="my-12 border-l-4 border-[#f08222] bg-[#fff4eb]/50 p-8 shadow-sm rounded-none">
                  <p className="font-serif italic text-[18px] text-[#0e131f] leading-relaxed">
                    &ldquo; {post.quote} &rdquo;
                  </p>
                </blockquote>
              )}

              {/* Astuce de l'expert en encart sombre */}
              {post.expertTip && (
                <div className="bg-[#0e131f] text-white p-8 border-l-4 border-[#f08222] shadow-xl rounded-none mt-16">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="h-5 w-5 text-[#f08222]" />
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#f08222]">
                      L&apos;avis de l&apos;expert Cyberwize
                    </span>
                  </div>
                  <h4 className="font-serif text-[1.5rem] font-bold mt-4">Passez à la pratique</h4>
                  <p className="mt-3 text-[15px] text-white/70 leading-relaxed">
                    {post.expertTip}
                  </p>
                  <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                    <Link
                      href="/essai"
                      className="inline-flex items-center justify-center gap-2 bg-[#f08222] px-6 py-3.5 text-[12px] font-bold uppercase tracking-widest text-white transition-colors duration-300 hover:bg-[#d97210]"
                    >
                      Sécuriser mon foyer
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              )}

            </div>

          </div>
          
        </div>
      </article>
    </>
  );
}


