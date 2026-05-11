"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { ShieldCheck, Lock, Users, GraduationCap, ArrowRight, Zap, Eye, Activity } from "lucide-react";
import Image from "next/image";

const familyFeatures = [
  {
    title: "Contrôle Parental Sécurisé",
    description: "Ajustez les paramètres pour chaque enfant afin de garantir une expérience adaptée à son âge. Filtrez les contenus et encadrez l’activité numérique.",
    icon: Users,
    color: "text-[#FF990A]",
    bg: "bg-[#FF990A]/10"
  },
  {
    title: "Navigation sécurisée & Données",
    description: "Filtrage des sites malveillants et protection des données sensibles grâce à des technologies avancées de chiffrement.",
    icon: Lock,
    color: "text-black",
    bg: "bg-black/5"
  },
  {
    title: "Protection des Appareils",
    description: "Surveillance des activités et protection contre les virus, malwares et autres menaces en ligne sur tous vos terminaux.",
    icon: ShieldCheck,
    color: "text-[#FF990A]",
    bg: "bg-[#FF990A]/10"
  },
  {
    title: "Éducation à la Cybersécurité",
    description: "Modules éducatifs interactifs pour aider enfants et parents à adopter les bonnes pratiques numériques.",
    icon: GraduationCap,
    color: "text-black",
    bg: "bg-black/5"
  }
];

export function FamilyProduct() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="relative py-48 overflow-hidden bg-white" id="family">
      {/* Soft Background Decorative Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF990A]/5 blur-[150px] rounded-full" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-black/5 border border-black/[0.05] text-[#FF990A] text-[10px] font-bold uppercase tracking-[0.4em] mb-8"
          >
             CyberWize Family
          </motion.div>
          <h2 className="text-6xl md:text-8xl font-sans font-black text-black tracking-tighter leading-[0.85] mb-8">
            La Sécurité de votre <span className="text-[#FF990A]">Famille</span>, <br />
            <span className="opacity-20 italic">Sans Compromis.</span>
          </h2>
          <p className="mt-8 text-xl text-black/40 max-w-2xl mx-auto font-medium leading-relaxed">
            Une barrière intelligente et proactive qui assure la protection complète de votre famille contre les menaces numériques.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          {/* Tabs Menu */}
          <div className="lg:col-span-5 space-y-4">
            {familyFeatures.map((feature, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`w-full text-left p-10 rounded-[2.5rem] border transition-all duration-500 group relative overflow-hidden ${activeTab === i ? 'bg-white border-black/[0.08] shadow-2xl' : 'bg-transparent border-transparent opacity-30 hover:opacity-100 hover:bg-black/[0.02]'}`}
              >
                <div className="flex items-center gap-6">
                  <div className={`h-14 w-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${activeTab === i ? 'bg-[#FF990A] text-white scale-110' : 'bg-black/5 text-black'}`}>
                    <feature.icon className="h-7 w-7" />
                  </div>
                  <div className="flex-1">
                    <span className="block text-xl font-black text-black tracking-tight mb-1">{feature.title}</span>
                    <span className={`text-[10px] font-bold uppercase tracking-widest ${feature.color}`}>Protection Elite</span>
                  </div>
                </div>
                {activeTab === i && (
                   <motion.div 
                     initial={{ opacity: 0, height: 0 }}
                     animate={{ opacity: 1, height: 'auto' }}
                     className="mt-8"
                   >
                     <p className="text-black/50 text-base leading-relaxed font-medium">
                       {feature.description}
                     </p>
                   </motion.div>
                )}
              </button>
            ))}
          </div>

          {/* Feature Showcase Card */}
          <div className="lg:col-span-7">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative h-full rounded-[4rem] overflow-hidden border border-black/[0.08] bg-gray-50/50 p-16 flex flex-col justify-between"
            >
               <div className="absolute inset-0 grid-pattern opacity-[0.03]" />
               
               <div className="relative z-10">
                  <div className="flex justify-between items-start mb-16">
                     <div className="p-4 rounded-2xl bg-white shadow-sm border border-black/[0.05]">
                        <Activity className="h-6 w-6 text-[#FF990A]" />
                     </div>
                     <div className="px-4 py-1.5 rounded-full bg-black/5 text-black/40 text-[10px] font-bold uppercase tracking-widest">
                        Standard Agilly Secure
                     </div>
                  </div>

                  <h3 className="text-5xl font-sans font-black text-black mb-8 tracking-tighter">
                    {familyFeatures[activeTab].title}
                  </h3>
                  <p className="text-2xl text-black/40 leading-relaxed font-medium max-w-xl">
                    {familyFeatures[activeTab].description}
                  </p>
               </div>

               <div className="relative z-10 grid grid-cols-2 gap-8 mt-24">
                  <div className="p-10 rounded-3xl bg-white border border-black/[0.05] group hover:border-[#FF990A]/20 transition-all">
                     <Zap className="h-8 w-8 text-[#FF990A] mb-6" />
                     <p className="text-black font-black text-lg mb-2 uppercase tracking-tighter">Performance</p>
                     <p className="text-black/30 text-sm font-medium">Protection instantanée sans ralentir vos appareils.</p>
                  </div>
                  <div className="p-10 rounded-3xl bg-white border border-black/[0.05] group hover:border-black/20 transition-all">
                     <Eye className="h-8 w-8 text-black mb-6" />
                     <p className="text-black font-black text-lg mb-2 uppercase tracking-tighter">Visibilité</p>
                     <p className="text-black/30 text-sm font-medium">Contrôle complet de l'activité numérique.</p>
                  </div>
               </div>

               {/* Abstract Background Visual */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
                  <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#FF990A]/5 blur-[100px] rounded-full animate-pulse" />
               </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
