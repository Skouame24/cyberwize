export type PlanId = "1device" | "3device" | "5device" | "10device";

export type Plan = {
  id: PlanId;
  name: string;
  tagline: string;
  audience: string;
  monthly: number;
  yearly: number; // Prix Promo
  originalPrice?: number; // Prix de Vente normal
  perks: string[];
  highlight?: string;
  featured?: boolean;
};

export const plans: Plan[] = [
  {
    id: "1device",
    name: "Harmony Telco 1 Device",
    tagline: "Cyberwize Family HT",
    audience: "Managed Endpoint & Mobile Security",
    monthly: 1000,
    yearly: 9000,
    originalPrice: 10000,
    perks: [
      "Protection Check Point Harmony",
      "Sécurisation mobile & PC",
      "Anti-phishing & Anti-malware",
      "Support Agilly 24/7"
    ],
  },
  {
    id: "3device",
    name: "Harmony Telco 3 Devices",
    tagline: "Cyberwize Family HT",
    audience: "Managed Endpoint & Mobile Security",
    monthly: 2500,
    yearly: 22500,
    originalPrice: 25000,
    perks: [
      "3 appareils protégés",
      "Contrôle parental intelligent",
      "Protection web avancée",
      "Support Agilly 24/7"
    ],
  },
  {
    id: "5device",
    name: "Harmony Telco 5 Devices",
    tagline: "Cyberwize Family HT",
    audience: "Managed Endpoint & Mobile Security",
    monthly: 4000,
    yearly: 36000,
    originalPrice: 40000,
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
    name: "Harmony Telco 10 Devices",
    tagline: "Cyberwize Family HT",
    audience: "Managed Endpoint & Mobile Security",
    monthly: 7500,
    yearly: 67500,
    originalPrice: 75000,
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
