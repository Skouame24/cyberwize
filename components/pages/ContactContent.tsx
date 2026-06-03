"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Send, Linkedin, Facebook, MessageSquare } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

/*
 * SECTION : CONTACT CONTENT (Design Agilly)
 *
 * Design : 
 * - Coordonnées épurées à gauche (Typographie Serif/Sans, icônes minimalistes).
 * - Le formulaire à droite est une "Carte Signature Agilly" avec le quart 
 *   de cercle orange dans le coin inférieur droit.
 */

const contacts = [
  {
    icon: Mail,
    label: "Demandes Générales",
    value: "infos@agilly.net",
    href: "mailto:infos@agilly.net",
  },
  {
    icon: Mail,
    label: "Service Commercial",
    value: "commercial@agilly.net",
    href: "mailto:commercial@agilly.net",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "+225 25 25 001 422",
    href: "tel:+2252525001422",
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: "Résidence Emeraude II, 2 Plateau Aghien Las Palmas, Abidjan — Côte d'Ivoire",
  },
];

export function ContactContent() {
  return (
    <section className="bg-[#fcfbfa] py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.3fr] lg:gap-24">
          
          {/* COLONNE GAUCHE : COORDONNÉES */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[12px] font-bold uppercase tracking-widest text-[#f08222]">
              // NOUS JOINDRE
            </p>
            <h2 className="mt-4 font-serif text-[2.5rem] font-bold leading-tight text-[#0e131f]">
              Un accompagnement local et humain
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-[#535b6a]">
              Que ce soit pour un essai gratuit, une aide à l'installation ou un conseil sur l'offre la plus adaptée à votre foyer, notre équipe basée à Abidjan est à votre écoute.
            </p>

            <ul className="mt-12 space-y-8">
              {contacts.map((c) => (
                <li key={c.label} className="flex gap-5">
                  <span className="mt-1 flex text-[#f08222]">
                    <c.icon className="h-6 w-6" strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="font-serif text-[1.1rem] font-bold text-[#0e131f]">{c.label}</p>
                    {c.href ? (
                      <a href={c.href} className="mt-1 block text-[15px] text-[#535b6a] transition-colors hover:text-[#f08222]">
                        {c.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-[15px] leading-relaxed text-[#535b6a]">{c.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-12 border-t border-black/5 pt-8">
              <p className="font-serif text-[1.1rem] font-bold text-[#0e131f]">Réseaux sociaux</p>
              <div className="mt-4 flex gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-[13px] font-bold uppercase tracking-widest text-[#535b6a] transition-colors hover:text-[#f08222]"
                >
                  <Linkedin className="h-4 w-4 transition-transform group-hover:scale-110" strokeWidth={2} />
                  LinkedIn
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-[13px] font-bold uppercase tracking-widest text-[#535b6a] transition-colors hover:text-[#f08222]"
                >
                  <Facebook className="h-4 w-4 transition-transform group-hover:scale-110" strokeWidth={2} />
                  Facebook
                </a>
              </div>
            </div>

            <div className="mt-12 border-t border-black/5 pt-8">
              <p className="text-[14px] text-[#535b6a]">
                Besoin d'aide technique ? Consultez notre{" "}
                <Link href="/support" className="font-bold text-[#f08222] hover:underline">
                  Support & FAQ
                </Link>
                .
              </p>
            </div>
          </motion.div>

          {/* COLONNE DROITE : LE FORMULAIRE (CARTE AGILLY) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            {/* L'ombre de la carte */}
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-b from-black/[0.03] to-transparent blur-xl" />
            
            <div className="relative overflow-hidden rounded-[2rem] bg-white p-8 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.12)] lg:p-12 pb-24">
              <h2 className="font-serif text-[1.8rem] font-bold text-[#0e131f]">
                Laissez-nous un message
              </h2>
              <p className="mt-2 text-[14px] text-[#535b6a]">
                Vos données sont chiffrées de bout en bout. Nous vous répondons sous 24h.
              </p>

              <form className="mt-10 space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-[12px] font-bold uppercase tracking-widest text-[#0e131f]">Prénom *</label>
                    <input 
                      type="text" 
                      className="w-full border-b border-black/10 bg-transparent py-3 text-[16px] text-[#0e131f] transition-colors placeholder:text-black/20 focus:border-[#f08222] focus:outline-none" 
                      placeholder="Jean"
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[12px] font-bold uppercase tracking-widest text-[#0e131f]">Nom *</label>
                    <input 
                      type="text" 
                      className="w-full border-b border-black/10 bg-transparent py-3 text-[16px] text-[#0e131f] transition-colors placeholder:text-black/20 focus:border-[#f08222] focus:outline-none" 
                      placeholder="Dupont"
                      required 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[12px] font-bold uppercase tracking-widest text-[#0e131f]">Adresse Email *</label>
                  <input 
                    type="email" 
                    className="w-full border-b border-black/10 bg-transparent py-3 text-[16px] text-[#0e131f] transition-colors placeholder:text-black/20 focus:border-[#f08222] focus:outline-none" 
                    placeholder="jean.dupont@email.com"
                    required 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[12px] font-bold uppercase tracking-widest text-[#0e131f]">Sujet de votre demande *</label>
                  <select className="w-full border-b border-black/10 bg-transparent py-3 text-[16px] text-[#0e131f] transition-colors focus:border-[#f08222] focus:outline-none">
                    <option value="essai">Essai gratuit / Démonstration</option>
                    <option value="devis">Demande de devis</option>
                    <option value="support">Assistance technique</option>
                    <option value="autre">Autre demande</option>
                  </select>
                </div>

                <div className="space-y-2 pt-2">
                  <label className="text-[12px] font-bold uppercase tracking-widest text-[#0e131f]">Votre message *</label>
                  <textarea 
                    className="w-full resize-y border-b border-black/10 bg-transparent py-3 text-[16px] text-[#0e131f] transition-colors placeholder:text-black/20 focus:border-[#f08222] focus:outline-none" 
                    rows={4} 
                    placeholder="Comment pouvons-nous vous aider ?"
                    required 
                  />
                </div>

                <button 
                  type="submit" 
                  className="group mt-8 inline-flex items-center justify-center gap-3 bg-[#0e131f] px-8 py-4 text-[13px] font-bold uppercase tracking-widest text-white transition-all hover:bg-[#f08222]"
                >
                  Envoyer le message
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>

              {/* Le quart de cercle orange Signature Agilly en bas à droite */}
              <div className="absolute -bottom-8 -right-8 flex h-32 w-32 items-start justify-center rounded-tl-full bg-[#f08222] pl-6 pt-8 text-white transition-transform duration-500 hover:scale-105 pointer-events-none">
                <MessageSquare className="h-8 w-8 opacity-50" strokeWidth={1.5} />
              </div>
              
            </div>
          </motion.div>

        </div>
      </div>

      {/* SECTION CARTE (MAP) */}
      <div className="mt-24 lg:mt-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 mb-8">
          <h2 className="font-serif text-[2rem] font-bold text-[#0e131f]">
            Retrouvez-nous à Abidjan
          </h2>
          <p className="mt-2 text-[#535b6a]">
            Résidence Emeraude II, 2 Plateau Aghien Las Palmas
          </p>
        </div>
        <div className="relative h-[400px] w-full overflow-hidden bg-black/5 lg:h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.433010531584!2d-3.99222!3d5.3508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1ea817c66bbbb%3A0x446cc268688404a!2sAbidjan%2C%20C%C3%B4te%20d&#39;Ivoire!5e0!3m2!1sfr!2sfr!4v1716301234567!5m2!1sfr!2sfr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 grayscale contrast-125 hover:grayscale-0 transition-all duration-1000"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
