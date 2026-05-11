"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Zap, Shield, Crown } from "lucide-react";

const plans = [
  {
    name: "Essentiel",
    price: { monthly: 490, yearly: 390 },
    description: "Protection fondamentale pour les petites structures.",
    features: ["SOC Monitoring 8/5", "Protection Endpoint", "Audit Trimestriel", "Support Email"],
    icon: Shield,
    color: "bg-gray-50 text-gray-600"
  },
  {
    name: "Enterprise",
    price: { monthly: 1290, yearly: 990 },
    description: "La solution complète pour une résilience absolue.",
    features: ["SOC Monitoring 24/7", "Threat Intelligence Live", "Incident Response", "Support Prioritaire"],
    popular: true,
    icon: Zap,
    color: "bg-[#FF990A]/10 text-[#FF990A]"
  },
  {
    name: "Custom",
    price: { monthly: "Sur Devis", yearly: "Sur Devis" },
    description: "Architecture sur-mesure pour infrastructures critiques.",
    features: ["Dedicated Security Lead", "Gouvernance NIST", "Pentesting Illimité", "SLA 99.99%"],
    icon: Crown,
    color: "bg-[#0066FF]/10 text-[#0066FF]"
  }
];

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="relative bg-white py-64 overflow-hidden" id="pricing">
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
        <div className="text-center mb-24">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[10px] font-black uppercase tracking-[0.4em] text-[#FF990A] mb-8"
          >
            TARIFICATION TRANSPARENTE
          </motion.p>
          <h2 className="text-6xl font-sans font-black text-black sm:text-8xl tracking-tight leading-[0.9] mb-12">
            L'Excellence, Sans <br /> <span className="text-[#FF990A]">Compromis.</span>
          </h2>
          
          {/* Toggle */}
          <div className="flex items-center justify-center gap-6 mt-16">
            <span className={`text-xs font-bold uppercase tracking-widest ${!isYearly ? 'text-black' : 'text-black/30'}`}>Mensuel</span>
            <button 
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-16 h-8 rounded-full bg-gray-100 p-1 transition-colors hover:bg-gray-200"
            >
              <motion.div 
                animate={{ x: isYearly ? 32 : 0 }}
                className="w-6 h-6 rounded-full bg-[#FF990A] shadow-lg shadow-[#FF990A]/30"
              />
            </button>
            <span className={`text-xs font-bold uppercase tracking-widest ${isYearly ? 'text-black' : 'text-black/30'}`}>Annuel</span>
            <div className="ml-2 px-3 py-1 rounded-full bg-green-50 text-green-600 text-[9px] font-black uppercase tracking-widest">
              -20% Économie
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative p-12 rounded-[3rem] border transition-all duration-700 ${plan.popular ? 'border-[#FF990A] shadow-[0_40px_100px_-20px_rgba(255,153,10,0.15)] bg-white' : 'border-black/[0.03] bg-white hover:border-black/[0.1] shadow-sm'}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 rounded-full bg-[#FF990A] text-white text-[9px] font-black uppercase tracking-[0.3em]">
                  RECOMMANDÉ
                </div>
              )}

              <div className={`h-16 w-16 rounded-2xl ${plan.color} flex items-center justify-center mb-10`}>
                <plan.icon className="h-8 w-8" />
              </div>

              <h3 className="text-3xl font-sans font-black text-black tracking-tight mb-4">{plan.name}</h3>
              <p className="text-sm text-black/40 font-medium leading-relaxed mb-8">{plan.description}</p>

              <div className="mb-10">
                <span className="text-5xl font-sans font-black text-black tracking-tighter">
                   {typeof plan.price.monthly === 'number' ? (isYearly ? plan.price.yearly : plan.price.monthly) : plan.price.monthly}
                </span>
                {typeof plan.price.monthly === 'number' && (
                  <span className="text-sm font-bold text-black/20 uppercase tracking-widest ml-2">€ / MOIS</span>
                )}
              </div>

              <div className="space-y-4 mb-12">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-green-50 flex items-center justify-center">
                      <Check className="h-3 w-3 text-green-600" />
                    </div>
                    <span className="text-xs font-bold text-black/60 tracking-tight">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-5 rounded-full text-xs font-black uppercase tracking-[0.3em] transition-all duration-500 ${plan.popular ? 'bg-[#FF990A] text-white shadow-xl shadow-[#FF990A]/20' : 'bg-gray-50 text-black hover:bg-gray-100'}`}>
                SÉLECTIONNER CE PLAN
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
