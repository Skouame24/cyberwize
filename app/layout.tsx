import type { Metadata } from "next";
import { Nunito, Barlow } from "next/font/google";
import "@/styles/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

/* Arial Rounded MT Bold → meilleur équivalent Google Fonts */
const fontDisplay = Nunito({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "600", "700", "800", "900"],
});

/* Eurostile → meilleur équivalent Google Fonts */
const fontBody = Barlow({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

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
    <html lang="fr" className={`${fontDisplay.variable} ${fontBody.variable}`}>
      <body className="bg-background font-sans text-ink antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
