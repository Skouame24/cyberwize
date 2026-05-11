"use client";

import { motion } from "motion/react";
import { Marquee } from "@/components/ui/Marquee";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { Quote, Star, CheckCircle2 } from "lucide-react";

const testimonials = [
  {
    quote: "Cyberwize a identifié des vulnérabilités critiques que nous ignorions totalement. Leur approche tactique a transformé notre posture de sécurité.",
    author: "Kouamé B.",
    role: "DSI, Groupe Bancaire Africain",
    avatar: "https://i.pravatar.cc/150?u=kb",
    verified: true
  },
  {
    quote: "Le SOC Elite d'Agilly est une extension indispensable de notre équipe IT. Une réactivité et une expertise technique de classe mondiale.",
    author: "Amélie K.",
    role: "Directrice Cyber, Fintech Global",
    avatar: "https://i.pravatar.cc/150?u=ak",
    verified: true
  },
  {
    quote: "L'implémentation de leur Neural Engine a réduit nos faux positifs de 95%. C'est l'avenir de la défense proactive.",
    author: "Sophie M.",
    role: "CTO, E-commerce Cloud",
    avatar: "https://i.pravatar.cc/150?u=sm",
    verified: true
  },
  {
    quote: "Une compréhension rare des enjeux business mêlée à une rigueur technique absolue. Agilly est notre partenaire de confiance.",
    author: "Yao D.",
    role: "Responsable Sécurité, Télécoms Hub",
    avatar: "https://i.pravatar.cc/150?u=yd",
    verified: true
  },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-white py-48">
      {/* Background Depth */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/[0.02] to-transparent pointer-events-none" />
      <div className="absolute inset-0 grid-pattern opacity-[0.03] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 mb-32">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 text-primary mb-8"
          >
            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em]">EXCELLENCE OPÉRATIONNELLE</span>
          </motion.div>

          <AnimatedText
            text="La Preuve par l'Expérience."
            tag="h2"
            className="text-6xl font-sans font-black text-black sm:text-8xl tracking-tight leading-[0.9]"
            delay={0.1}
          />
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-12 max-w-2xl text-xl text-black/60 font-medium tracking-tight"
          >
            Nous accompagnons les leaders de l'industrie dans la sécurisation de leurs infrastructures les plus critiques.
          </motion.p>
        </div>
      </div>

      <div className="relative">
        <Marquee 
          speed={40}
          items={testimonials.map((t, i) => (
            <div key={i} className="w-[480px] px-6 py-10">
              <div className="relative h-full p-10 rounded-[2.5rem] bg-white border border-black/[0.05] shadow-sm transition-all duration-700 hover:shadow-xl hover:border-[#FF990A]/20 group">
                <div className="absolute top-8 right-8 flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/5">
                   <CheckCircle2 className="h-3 w-3 text-[#FF990A]" />
                   <span className="text-[9px] font-bold uppercase tracking-widest text-black/40">Vérifié</span>
                </div>

                <Quote className="h-10 w-10 text-[#FF990A] opacity-10 mb-8 transition-opacity group-hover:opacity-20" />
                
                <p className="text-xl font-medium leading-[1.3] text-black tracking-tight mb-12">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="flex items-center gap-5 pt-8 border-t border-black/[0.05]">
                  <div className="h-14 w-14 rounded-xl overflow-hidden border border-black/[0.08] grayscale group-hover:grayscale-0 transition-all duration-700">
                    <img src={t.avatar} alt={t.author} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-lg text-black leading-none mb-1">{t.author}</h4>
                    <p className="text-[9px] font-bold text-[#FF990A] uppercase tracking-[0.2em]">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        />
      </div>
    </section>
  );
}
