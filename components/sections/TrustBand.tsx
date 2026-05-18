"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

const AGILLY_LOGO =
  "https://lh3.googleusercontent.com/aida/ADBb0ugJ7nkKv4KNTm1hBuo1qXak8WoiPfgguZEx9UldYvRSQHTg_c9KpIn2bLXK7a9nCKHQ-EqyZ8G1e1VtOPNUvsoDbE6fh4peGi4jni7s3mEdD7XoPDGBZvysePITafeb0zTmPP_k5NOPi3sbLb7jQnXVaSK_Y0-WSCva8Qp6tzxIPZHN8p6JcgyoGrth7JgPylZOsqV8kuzkV1_qvjTXPhSU2W_13VzvkdV58A_-N2aheOC-24k1gtMFXgU";

export function TrustBand() {
  return (
    <section className="border-y border-outline bg-paper">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 section-pad !py-12 md:flex-row md:items-center">
        <Reveal className="max-w-lg">
          <p className="eyebrow">Propulsé par Agilly</p>
          <p className="mt-3 font-serif text-xl leading-relaxed text-ink md:text-2xl">
            L&apos;expertise cybersécurité qui protège déjà les entreprises,{" "}
            <span className="italic text-primary-deep">au service des familles</span>
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-muted">
            Cyberwize Family reprend les standards Agilly — sans le jargon corporate : vous
            gardez le contrôle, nous assurons la technique.
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <Image
            src={AGILLY_LOGO}
            alt="Agilly"
            width={120}
            height={48}
            className="h-11 w-auto opacity-90"
          />
        </Reveal>
      </div>
    </section>
  );
}
