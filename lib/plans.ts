export type PlanId = "1device" | "3device" | "5device" | "10device";

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
    id: "1device",
    name: "Harmony 1 Device",
    tagline: "Protection individuelle",
    audience: "1 Appareil (Mobile ou PC)",
    monthly: 1000,
    yearly: 9000,
    perks: [
      "Protection Check Point Harmony",
      "Sécurisation mobile & PC",
      "Anti-phishing & Anti-malware",
      "Support Agilly 24/7"
    ],
  },
  {
    id: "3device",
    name: "Harmony 3 Devices",
    tagline: "Foyer connecté léger",
    audience: "Jusqu'à 3 appareils",
    monthly: 2500,
    yearly: 22500,
    perks: [
      "3 appareils protégés",
      "Contrôle parental intelligent",
      "Protection web avancée",
      "Support Agilly 24/7"
    ],
  },
  {
    id: "5device",
    name: "Harmony 5 Devices",
    tagline: "Le cœur de Cyberwize Family",
    audience: "Jusqu'à 5 appareils · Idéal Famille",
    monthly: 4000,
    yearly: 36000,
    highlight: "Le plus populaire",
    featured: true,
    perks: [
      "5 appareils protégés",
      "Contrôle parental intelligent",
      "Anti-ransomware & Sandboxing",
      "Support SOC Agilly prioritaire"
    ],
  },
  {
    id: "10device",
    name: "Harmony 10 Devices",
    tagline: "Protection intégrale",
    audience: "Jusqu'à 10 appareils · Famille & TPE",
    monthly: 7500,
    yearly: 67500,
    perks: [
      "10 appareils protégés",
      "Contrôle parental multi-profils",
      "Sandboxing ThreatCloud AI",
      "Accompagnement SOC & assistance proactive"
    ],
  },
];

export function recommendPlan(deviceCount: number): PlanId {
  if (deviceCount <= 1) return "1device";
  if (deviceCount <= 3) return "3device";
  if (deviceCount <= 5) return "5device";
  return "10device";
}

export function formatPrice(amount: number) {
  return amount.toLocaleString("fr-FR") + " FCFA";
}
