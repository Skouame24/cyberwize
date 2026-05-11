"use client";

import { motion } from "framer-motion";
import { Users, Globe, Target, ShieldCheck, ArrowRight } from "lucide-react";
import { AnimatedText } from "@/components/ui/AnimatedText";

const stats = [
  { label: "Clients Sécurisés", value: "250+", sub: "En Afrique & Europe" },
  { label: "Menaces Bloquées", value: "1.4M", sub: "Journalières" },
  { label: "Experts Certifiés", value: "45+", sub: "SOC & Pentest" },
  { label: "Rétention Client", value: "99%", sub: "SLA Garanti" },
];

const values = [
  {
    title: "Excellence Technique",
    description: "Nous ne nous contentons pas de solutions standards. Nous créons l'élite de la protection.",
    icon: Target,
  },
  {
    title: "Éthique Radicale",
    description: "La transparence totale est le socle de notre relation de confiance avec nos partenaires.",
    icon: ShieldCheck,
  },
  {
    title: "Innovation Continue",
    description: "Nos laboratoires R&D anticipent les menaces de demain pour vous protéger aujourd'hui.",
    icon: Globe,
  }
];

export function About() {
  return (
    <section className="relative bg-white py-64 overflow-hidden" id="about">
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-48">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[10px] font-black uppercase tracking-[0.4em] text-[#FF990A] mb-8"
            >
              NOTRE MISSION
            </motion.p>
            <AnimatedText
              text="L'Avant-Garde de la Cyber-Résilience."
              tag="h2"
              className="text-6xl font-sans font-black text-black sm:text-8xl tracking-tight leading-[0.9] mb-12"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-2xl text-black/60 font-medium leading-relaxed max-w-xl"
            >
              Fondée sur une vision de sécurité sans compromis, Agilly Cyberwize accompagne les entreprises et les familles dans la jungle numérique avec des outils de précision chirurgicale.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 gap-8">
             {stats.map((stat, i) => (
                <motion.div 
                   key={i}
                   initial={{ opacity: 0, scale: 0.9 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                   className="p-10 rounded-[2.5rem] bg-gray-50 border border-black/[0.03] hover:border-[#FF990A]/20 transition-all group"
                >
                   <p className="text-4xl font-sans font-black text-black tracking-tighter mb-2 group-hover:text-[#FF990A] transition-colors">{stat.value}</p>
                   <p className="text-[10px] font-black uppercase tracking-widest text-black/40 mb-1">{stat.label}</p>
                   <p className="text-[8px] font-bold text-black/20 uppercase tracking-widest">{stat.sub}</p>
                </motion.div>
             ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
           {values.map((value, i) => (
              <motion.div
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className="p-12 rounded-[3rem] border border-black/[0.03] bg-white hover:shadow-2xl transition-all duration-700"
              >
                 <div className="h-14 w-14 rounded-2xl bg-[#FF990A]/5 text-[#FF990A] flex items-center justify-center mb-10">
                    <value.icon className="h-7 w-7" />
                 </div>
                 <h3 className="text-2xl font-sans font-black text-black tracking-tight mb-6">{value.title}</h3>
                 <p className="text-lg text-black/40 font-medium leading-relaxed">{value.description}</p>
              </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
