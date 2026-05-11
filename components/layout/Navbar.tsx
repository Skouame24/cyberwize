"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Shield, Lock, Activity } from "lucide-react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-black/[0.03] bg-white backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-9 w-24 md:h-10 md:w-32 transition-transform duration-500 group-hover:scale-105">
            <Image
              src="/logo.png"
              alt="Agilly Cyberwize Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-10">
          {[
            { name: "Services", href: "/services" },
            { name: "À propos", href: "/about" },
            { name: "Expertises", href: "/expertises" },
            { name: "Contact", href: "/contact" },
          ].map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-bold uppercase tracking-[0.2em] text-black/40 transition-colors hover:text-[#FF990A]"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden md:block">
          <Link href="/devis">
            <button className="bg-primary text-white px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 hover:scale-105 active:scale-95 shadow-[0_10px_20px_-5px_rgba(255,153,10,0.3)]">
              Obtenir un Audit
            </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="p-2 text-text-main md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-black/[0.05] bg-white px-6 py-8 md:hidden">
          <div className="flex flex-col gap-6">
            {[
              { name: "Services", href: "/services" },
              { name: "À propos", href: "/about" },
              { name: "Expertises", href: "/expertises" },
              { name: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-bold uppercase tracking-widest text-black/40 hover:text-[#FF990A]"
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/devis" onClick={() => setMobileOpen(false)}>
              <button className="w-full bg-[#FF990A] py-4 text-sm font-bold text-white rounded-full">
                Obtenir un Audit
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
