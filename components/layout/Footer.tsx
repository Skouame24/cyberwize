"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, Shield, Terminal, Globe, Lock } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-black/[0.03] bg-white overflow-hidden">
      {/* Background Depth */}
      <div className="absolute inset-0 grid-pattern opacity-[0.02] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-primary/[0.03] blur-[150px] rounded-full pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-8 py-32 relative z-10">
        <div className="grid gap-20 md:grid-cols-4 lg:gap-32">
          {/* Brand & Mission */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 group mb-10">
              <div className="relative h-10 w-32 transition-transform duration-500 group-hover:scale-105">
                <Image
                  src="/logo.png"
                  alt="Agilly Cyberwize Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-sm text-text-muted leading-relaxed font-medium">
              Agilly redéfinit les standards de la cybersécurité mondiale. 
              Une architecture de défense impénétrable conçue pour l'élite des entreprises.
            </p>
            <div className="mt-10 flex gap-4 opacity-30">
               <Shield className="h-4 w-4" />
               <Terminal className="h-4 w-4" />
               <Globe className="h-4 w-4" />
               <Lock className="h-4 w-4" />
            </div>
          </div>

          {/* Links Grid */}
          <div>
            <h4 className="mb-10 text-[10px] uppercase tracking-[0.4em] font-bold text-text-main/60">
              ARCHITECTURE
            </h4>
            <ul className="space-y-4 text-sm font-medium text-text-muted">
              <li><Link href="/" className="hover:text-primary transition-colors">Tactical Hub</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Expertises</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">Notre Vision</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Intel Report</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-10 text-[10px] uppercase tracking-[0.4em] font-bold text-text-main/60">
              SERVICES ELITE
            </h4>
            <ul className="space-y-4 text-sm font-medium text-text-muted">
              <li><Link href="/services" className="hover:text-primary transition-colors">Audit Stratégique</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Pentest Avancé</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">SOC Elite 24/7</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Cyber Academy</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="mb-10 text-[10px] uppercase tracking-[0.4em] font-bold text-text-main/60">
              TERMINAL CONTACT
            </h4>
            <ul className="space-y-6 text-sm font-medium text-text-muted">
              <li className="flex items-center gap-4 group cursor-pointer hover:text-primary transition-colors">
                <div className="h-10 w-10 rounded-2xl bg-black/[0.02] flex items-center justify-center border border-black/[0.05] group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <Mail className="h-4.5 w-4.5" />
                </div>
                hello@agilly.ci
              </li>
              <li className="flex items-center gap-4 group cursor-pointer hover:text-primary transition-colors">
                <div className="h-10 w-10 rounded-2xl bg-black/[0.02] flex items-center justify-center border border-black/[0.05] group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <Phone className="h-4.5 w-4.5" />
                </div>
                +225 07 00 00 00 00
              </li>
              <li className="flex items-center gap-4 group cursor-pointer hover:text-primary transition-colors">
                <div className="h-10 w-10 rounded-2xl bg-black/[0.02] flex items-center justify-center border border-black/[0.05] group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <MapPin className="h-4.5 w-4.5" />
                </div>
                Abidjan, Côte d'Ivoire
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-32 border-t border-black/[0.03] pt-16 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-text-muted/40">
            © {new Date().getFullYear()} Agilly Global Infrastructure. Engineered for absolute trust.
          </div>
          <div className="flex gap-12 text-[10px] font-bold uppercase tracking-[0.4em] text-text-muted/40">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
            <Link href="/legal" className="hover:text-primary transition-colors">Legal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
