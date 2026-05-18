export type PlanId = "essentiel" | "famille" | "premium";

export type Plan = {
  id: PlanId;
  name: string;
  tagline: string;
  audience: string;
  monthly: number;
  yearly: number;
  perks: string[];
  highlight?: string;
  featured?: boolean;
};

export const plans: Plan[] = [
  {
    id: "essentiel",
    name: "Essentiel",
    tagline: "Pour démarrer sereinement",
    audience: "1 à 3 appareils · foyer léger",
    monthly: 9.99,
    yearly: 7.99,
    perks: [
      "3 appareils protégés",
      "Antivirus temps réel",
      "Filtrage web & anti-phishing",
      "Support par email",
    ],
  },
  {
    id: "famille",
    name: "Famille",
    tagline: "Le cœur de Cyberwize Family",
    audience: "Jusqu'à 10 appareils · parents & enfants",
    monthly: 14.99,
    yearly: 11.99,
    highlight: "Le plus choisi",
    featured: true,
    perks: [
      "10 appareils protégés",
      "Contrôle parental avancé",
      "VPN familial inclus",
      "Éducation & sensibilisation",
      "Support prioritaire",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    tagline: "Protection maximale",
    audience: "Foyers exigeants & petites structures",
    monthly: 24.99,
    yearly: 19.99,
    perks: [
      "Appareils illimités",
      "Dark web monitoring",
      "Assistance 24/7",
      "Gestion centralisée",
    ],
  },
];

export function recommendPlan(deviceCount: number): PlanId {
  if (deviceCount <= 3) return "essentiel";
  if (deviceCount <= 10) return "famille";
  return "premium";
}

export function formatPrice(amount: number) {
  return amount.toFixed(2).replace(".", ",") + "€";
}
