"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { name: "Accueil", href: "/" },
  { name: "Produits", href: "/services" },
  { name: "Offres", href: "/offres" },
  { name: "Blog", href: "/blog" },
  { name: "À propos", href: "/about" },
  { name: "Contact", href: "/contact" },
] as const;

function isLinkActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function NavItem({
  href,
  name,
  active,
  onNavigate,
}: {
  href: string;
  name: string;
  active: boolean;
  onNavigate?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={cn(
        "relative px-1 py-2 text-[13px] font-medium transition-colors duration-200",
        active ? "text-primary-deep" : "text-[#3d3d3d] hover:text-primary-deep"
      )}
      aria-current={active ? "page" : undefined}
    >
      {name}
      {active && (
        <motion.span
          layoutId="navbar-active"
          className="absolute -bottom-0.5 left-0 right-0 h-[2px] rounded-full bg-primary"
          transition={{ type: "spring", stiffness: 400, damping: 32 }}
        />
      )}
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const contactActive = isLinkActive(pathname, "/contact") || pathname === "/devis";

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-[100] w-full border-b bg-paper/95 backdrop-blur-md transition-[box-shadow,border-color] duration-300",
        scrolled ? "border-outline shadow-[0_4px_24px_-4px_rgba(25,28,29,0.08)]" : "border-outline/80"
      )}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-4 px-5 lg:px-10">
        <Link
          href="/"
          className="relative flex h-9 w-36 shrink-0 items-center transition-opacity duration-200 hover:opacity-85 md:h-10 md:w-40"
        >
          <Image
            src="/logo.png"
            alt="Cyberwize Family"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Navigation principale">
          {links.map((link) => (
            <NavItem
              key={link.href}
              href={link.href}
              name={link.name}
              active={isLinkActive(pathname, link.href)}
            />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className={cn(
              "btn-primary hidden !px-5 !py-2.5 text-sm transition-transform duration-200 md:inline-flex",
              contactActive && "ring-2 ring-primary/25 ring-offset-2"
            )}
            aria-current={contactActive ? "page" : undefined}
          >
            Nous protéger
          </Link>
          <button
            type="button"
            className="rounded-lg p-2 text-ink transition-colors hover:bg-warm md:hidden"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={22} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={22} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-outline md:hidden"
          >
            <nav className="space-y-1 px-5 py-4" aria-label="Navigation mobile">
              {links.map((link, i) => {
                const active = isLinkActive(pathname, link.href);
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: i * 0.04 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "block rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                        active
                          ? "bg-primary-muted text-primary-deep"
                          : "text-ink hover:bg-warm"
                      )}
                      aria-current={active ? "page" : undefined}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, delay: links.length * 0.04 }}
                className="pt-2"
              >
                <Link
                  href="/contact"
                  className="btn-primary block w-full text-center"
                  aria-current={contactActive ? "page" : undefined}
                >
                  Nous protéger
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
