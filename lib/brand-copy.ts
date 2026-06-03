/** Textes institutionnels — ton humain, pas corporate type éditeur global */

export const brand = {
  name: "Cyberwize Family",
  tagline: "Votre gardien numérique familial",
  poweredBy: "Propulsé par Agilly",

  whatIs: {
    title: "Qu'est-ce que Cyberwize Family ?",
    lead:
      "Cyberwize Family est bien plus qu'une simple suite de sécurité en ligne. C'est une barrière intelligente et proactive qui protège chaque membre du foyer — phishing, arnaques, contenus à risque et usages dangereux — pour une vie numérique sereine.",
    body:
      "Conçu et accompagné par Agilly en Côte d'Ivoire, nous transposons l'exigence de la cybersécurité professionnelle dans une expérience claire : alertes compréhensibles, contrôle parental respectueux et une équipe joignable quand vous en avez besoin.",
    notThis:
      "Pas de jargon intimidant, pas de promesses floues : un gardien numérique qui explique, protège et accompagne votre famille.",
  },

  hero: {
    title: "Naviguez en toute confiance,",
    titleAccent: "protégez ce qui vous est cher.",
    subtitle:
      "Bienvenue chez Cyberwize Family, l'ultime gardien de votre tranquillité d'esprit en ligne. Une sécurité conçue pour protéger et éduquer chaque membre de votre famille.",
  },
} as const;

/** Visuels — cybersécurité familiale (Unsplash, peaux noires, usage numérique) */
export const demoPhotos = [
  {
    src: "/family_laptop_black.png",
    alt: "Père et enfants consultant un ordinateur portable ensemble à la maison en toute sécurité",
    caption: "Chaque membre du foyer, protégé en ligne",
  },
  {
    src: "/mother_daughter_tablet_black.png",
    alt: "Mère et fille consultent une tablette numérique dans un cadre serein",
    caption: "Contrôle parental respectueux",
  },
  {
    src: "/black_woman_phone.png",
    alt: "Femme professionnelle vérifiant les alertes de sécurité sur son smartphone",
    caption: "Alertes claires, sans jargon",
  },
] as const;
