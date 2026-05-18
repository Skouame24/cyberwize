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
        "relative px-2 py-2 text-[13px] font-medium transition-colors duration-200",
        active ? "text-primary-deep" : "text-[#3d3d3d] hover:text-primary-deep"
      )}
      aria-current={active ? "page" : undefined}
    >
      {name}
      {active && (
        <motion.span
          layoutId="navbar-active"
          className="absolute -bottom-0.5 left-2 right-2 h-[2px] rounded-full bg-primary"
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
    <header className="sticky top-0 z-[100] w-full border-b border-outline/80 bg-white">
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-4 px-5 lg:px-10">
        <Link
          href="/"
          className="relative flex h-9 w-36 shrink-0 items-center transition-opacity hover:opacity-85 md:h-10 md:w-40"
        >
          <Image
            src="/logo.png"
            alt="Cyberwize Family"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-2 md:flex" aria-label="Navigation principale">
          {mainNavLinks.map((link) => (
            <NavItem
              key={link.href}
              href={link.href}
              name={link.label}
              active={isLinkActive(pathname, link.href)}
            />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <CartButton className="hidden sm:inline-flex" />
          <Link
            href="/essai"
            className="btn-primary hidden !px-5 !py-2.5 text-sm md:inline-flex"
          >
            Essai gratuit
          </Link>
          <button
            type="button"
            className="rounded-lg p-2 text-ink transition-colors hover:bg-[#f5f5f5] md:hidden"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-outline/80 bg-white md:hidden"
          >
            <nav className="space-y-1 px-5 py-4" aria-label="Menu mobile">
              {mainNavLinks.map((link) => {
                const active = isLinkActive(pathname, link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "block rounded-xl px-4 py-3 text-sm font-medium",
                      active ? "bg-primary-muted text-primary-deep" : "text-ink hover:bg-[#f5f5f5]"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="flex items-center gap-2 border-t border-outline/80 pt-3">
                <CartButton />
                <Link href="/essai" className="btn-primary flex-1 text-center">
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
