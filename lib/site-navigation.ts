/**
 * Liens navbar — court et lisible
 */
export const mainNavLinks = [
  { label: "Accueil", href: "/" },
  { label: "Offres", href: "/offres" },
  { label: "À propos", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

/** Liens footer — pages utiles sans tout afficher dans le menu */
export const footerLinks = [
  { label: "Essai gratuit", href: "/essai" },
  { label: "Demande de devis", href: "/devis" },
  { label: "Boutique", href: "/boutique" },
  { label: "Blog", href: "/blog" },
  { label: "Support", href: "/support" },
] as const;
