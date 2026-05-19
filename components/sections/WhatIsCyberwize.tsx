import Image from "next/image";
import Link from "next/link";
import { Shield, ArrowRight } from "lucide-react";
import { brand, demoPhotos } from "@/lib/brand-copy";

export function WhatIsCyberwize() {
  return (
    <section className="relative overflow-hidden border-b border-outline/60 bg-paper" id="qu-est-ce">
      <div
        className="pointer-events-none absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/8 blur-[100px] opacity-60"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl section-pad">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary-muted px-3 py-1.5 text-xs font-semibold text-primary-deep">
              <Shield className="h-3.5 w-3.5" />
              {brand.whatIs.title}
            </div>
            <h2 className="font-serif text-[1.75rem] leading-tight text-ink md:text-[2.35rem]">
              Plus qu&apos;un antivirus :{" "}
              <span className="italic text-primary">un gardien pour votre foyer</span>
            </h2>
            <p className="mt-5 text-[15px] leading-[1.85] text-muted md:text-base">{brand.whatIs.lead}</p>
            <p className="mt-4 text-[15px] leading-[1.85] text-muted">{brand.whatIs.body}</p>

            <Link href="/about" className="link-soft mt-8 inline-flex items-center gap-2">
              Découvrir Agilly
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-2xl border border-outline shadow-md sm:col-span-2">
              <Image
                src={demoPhotos[0].src}
                alt={demoPhotos[0].alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1b263b]/70 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 text-sm font-medium text-white">
                {demoPhotos[0].caption}
              </p>
            </div>
            {demoPhotos.slice(1).map((photo) => (
              <div
                key={photo.src}
                className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-outline shadow-sm"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent opacity-80" />
                <p className="absolute bottom-3 left-3 right-3 text-xs font-medium text-white">
                  {photo.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
