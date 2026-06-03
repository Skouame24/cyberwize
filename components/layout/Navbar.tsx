"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { CartButton } from "@/components/layout/CartButton";
import { mainNavLinks } from "@/lib/site-navigation";

/*
 * NAVBAR — Alignement strict sur agilly.net
 * - Fond blanc propre.
 * - Texte des liens en sombre, actif en orange avec souligne orange fine.
 * - Bouton "ESSAI GRATUIT" rectangulaire (zéro border-radius), fond orange.
 * - Icône Panier (CartButton) avec badge orange.
 */

function isLinkActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function NavItem({
  href,
  name,
  active,
}: {
  href: string;
  name: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "relative px-3 py-6 text-[14px] transition-colors duration-300",
        active ? "text-[#f08222] font-bold" : "text-[#535b6a] font-medium hover:text-[#f08222]"
      )}
      aria-current={active ? "page" : undefined}
    >
      {name}
      {/* Soulignement Agilly : uniquement si actif, ligne fine orange collée en bas */}
      {active && (
        <motion.span
          layoutId="navbar-active"
          className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#f08222]"
          transition={{ type: "spring", stiffness: 400, damping: 32 }}
        />
      )}
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-[100] w-full border-b border-black/5 bg-white shadow-[0_4px_20px_-15px_rgba(0,0,0,0.1)]">
      <div className="mx-auto flex h-[5.5rem] max-w-[1400px] items-center justify-between px-6 lg:px-12">
        
        {/* LOGO */}
        <Link
          href="/"
          className="relative flex h-12 w-36 shrink-0 items-center transition-opacity hover:opacity-80 md:h-14 md:w-48"
        >
          <Image
            src="/logo.png"
            alt="Agilly - Cyberwize Family"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        {/* NAVIGATION CENTRALE */}
        <nav className="hidden h-full items-center gap-4 md:flex" aria-label="Navigation principale">
          {mainNavLinks.map((link) => (
            <NavItem
              key={link.href}
              href={link.href}
              name={link.label}
              active={isLinkActive(pathname, link.href)}
            />
          ))}
        </nav>

        {/* ACTIONS DROITE */}
        <div className="flex h-full items-center gap-5">
          <CartButton className="hidden sm:inline-flex" />
          
          <Link
            href="/essai"
            // Classe btn-primary définie dans globals.css : rectangulaire, orange, text uppercase
            className="btn-primary hidden md:inline-flex"
            style={{ padding: "0.85rem 1.75rem", fontSize: "12px", letterSpacing: "0.12em" }}
          >
            Essai gratuit
          </Link>
          
          <button
            type="button"
            className="rounded-lg p-2 text-black transition-colors hover:bg-black/5 md:hidden"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MENU MOBILE */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-black/5 bg-white md:hidden"
          >
            <nav className="space-y-1 px-6 py-6" aria-label="Menu mobile">
              {mainNavLinks.map((link) => {
                const active = isLinkActive(pathname, link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "block px-4 py-3 text-[15px] font-bold uppercase tracking-widest",
                      active ? "text-[#f08222] bg-[#f08222]/5" : "text-[#0e131f] hover:bg-black/5"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="mt-6 flex flex-col gap-4 border-t border-black/5 pt-6">
                <div className="flex items-center gap-3 px-4">
                  <CartButton className="inline-flex" />
                  <span className="text-sm font-bold text-[#535b6a]">Votre Panier</span>
                </div>
                <Link href="/essai" className="btn-primary w-full text-center">
                  Essai gratuit
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
