import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-outline bg-paper">
      <div className="mx-auto max-w-6xl section-pad !pb-12">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div>
            <Image src="/logo.png" alt="Cyberwize Family" width={140} height={36} className="h-9 w-auto" />
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-muted">
              Votre gardien numérique familial.
              <br />
              Propulsé par Agilly.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 text-[15px] sm:grid-cols-3 sm:gap-16">
            <div>
              <p className="font-medium text-ink">Produit</p>
              <ul className="mt-3 space-y-2 text-muted">
                <li><Link href="/services" className="hover:text-primary-deep">Produits</Link></li>
                <li><Link href="/#services" className="hover:text-primary-deep">Fonctionnalités</Link></li>
                <li><Link href="/offres" className="hover:text-primary-deep">Offres</Link></li>
                <li><Link href="/blog" className="hover:text-primary-deep">Blog</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-ink">Société</p>
              <ul className="mt-3 space-y-2 text-muted">
                <li><Link href="/about" className="hover:text-primary-deep">À propos</Link></li>
                <li><Link href="/contact" className="hover:text-primary-deep">Contact</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-ink">Contact</p>
              <p className="mt-3 text-muted">Cocody, Abidjan</p>
              <a href="mailto:contact@cyberwizefamily.com" className="mt-2 block text-muted hover:text-primary">
                contact@cyberwizefamily.com
              </a>
              <a href="tel:+2252525001422" className="mt-1 block text-muted hover:text-primary">
                +225 25 25 001 422
              </a>
            </div>
          </div>
        </div>

        <div className="rule mt-14" />
        <p className="mt-6 text-sm text-muted">
          © {new Date().getFullYear()} Cyberwize Family · Agilly
        </p>
      </div>
    </footer>
  );
}
