import type { Metadata } from "next";
import "@/styles/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Cyberwize Family | Votre Gardien Numérique",
  description:
    "Protection des familles en ligne : défense avancée, contrôle parental, navigation sécurisée et éducation interactive. Propulsé par Agilly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      {/* 
        Conformément à la charte stricte :
        - Typographie Titres : Arial Rounded MT Bold
        - Typographie Corps : Eurostile
        Ces polices sont appliquées de manière absolue via globals.css.
        Plus aucune police Google (Nunito, Barlow, etc.) n'est utilisée.
      */}
      <body className="bg-background font-sans text-ink antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
