import Link from "next/link";
import Image from "next/image";
import { footerLinks } from "@/lib/site-navigation";

export function Footer() {
  return (
    <footer className="border-t border-outline/80 bg-white">
      <div className="mx-auto max-w-6xl section-pad !pb-12">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between md:gap-16">
          <div>
            <Image src="/logo.png" alt="Cyberwize Family" width={140} height={36} className="h-9 w-auto" />
            <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-muted">
              Votre gardien numérique familial.
              <br />
              Propulsé par Agilly.
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-ink">Liens utiles</p>
            <ul className="mt-3 space-y-2 text-[15px] text-muted">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary-deep">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium text-ink">Contact</p>
            <p className="mt-3 text-muted">Cocody, Abidjan</p>
            <a
              href="mailto:contact@cyberwizefamily.com"
              className="mt-2 block text-muted hover:text-primary"
            >
              contact@cyberwizefamily.com
            </a>
            <a href="tel:+2252525001422" className="mt-1 block text-muted hover:text-primary">
              +225 25 25 001 422
            </a>
          </div>
        </div>

        <div className="rule mt-10" />
        <p className="mt-6 text-sm text-muted">
          © {new Date().getFullYear()} Cyberwize Family · Agilly
        </p>
      </div>
    </footer>
  );
}
