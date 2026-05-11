import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Providers } from "@/components/layout/Providers";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { CustomCursor } from "@/components/layout/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cyberwize | Cybersécurité & Intelligence Digitale",
  description:
    "Solutions de cybersécurité avancées, audit, pentest et monitoring 24/7. Protégez votre entreprise avec Cyberwize.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="bg-background">
        <Providers>
          <div className="noise-overlay" aria-hidden="true" />
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>

      </body>
    </html>
  );
}
