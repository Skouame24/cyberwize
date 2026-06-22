"use client";

import { useState } from "react";
import Link from "next/link";
import { formatPrice, plans, recommendPlan } from "@/lib/plans";
import { FileText, SlidersHorizontal, Search, Check, RefreshCw, Smartphone, Monitor, Shield, Sparkles } from "lucide-react";

export function OffresContent() {
  // State variables
  const [activeTab, setActiveTab] = useState<"parcourir" | "simulateur" | "comparatif">("parcourir");
  
  // Filter States (Parcourir view)
  const [searchQuery, setSearchQuery] = useState("");
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly");
  const [maxBudget, setMaxBudget] = useState(80000);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Simulator State
  const [deviceCount, setDeviceCount] = useState<number>(3);

  // Dynamic max budget based on billing cycle
  const budgetLimit = billingCycle === "monthly" ? 10000 : 80000;

  const handleBillingCycleChange = (cycle: "monthly" | "yearly") => {
    setBillingCycle(cycle);
    // Adjust max budget when changing cycle to prevent overflow/underflow
    setMaxBudget(cycle === "monthly" ? 10000 : 80000);
  };

  // Filter plans logic
  const filteredPlans = plans.filter((plan) => {
    const activePrice = billingCycle === "yearly" ? plan.yearly : plan.monthly;
    
    // Budget check
    if (activePrice > maxBudget) return false;

    // Search query check
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      const matchName = plan.name.toLowerCase().includes(query);
      const matchTagline = plan.tagline.toLowerCase().includes(query);
      const matchAudience = plan.audience.toLowerCase().includes(query);
      const matchPerks = plan.perks.some((perk) => perk.toLowerCase().includes(query));
      return matchName || matchTagline || matchAudience || matchPerks;
    }

    return true;
  });

  // Simulator recommendation
  const recommendedPlanId = recommendPlan(deviceCount);
  const recommendedPlan = plans.find((p) => p.id === recommendedPlanId) || plans[0];

  // Help text based on recommended device count
  const getRecommendationText = (id: string) => {
    switch (id) {
      case "1device":
        return "Optimisé pour sécuriser un terminal individuel (ex. votre ordinateur de travail ou votre smartphone personnel).";
      case "3device":
        return "Idéal pour protéger jusqu'à 3 appareils (ex. ordinateur, smartphone et tablette d'un même utilisateur ou couple).";
      case "5device":
        return "Notre offre phare. Parfaite pour sécuriser l'ensemble des terminaux de la famille (ordinateurs, tablettes et smartphones des enfants).";
      case "10device":
        return "La protection maximale pour les foyers hyper-connectés ou équipés de nombreux terminaux à sécuriser.";
      default:
        return "";
    }
  };

  return (
    <section className="bg-background min-h-screen py-16 font-sans">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        
        {/* Navigation & Tab Switcher */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-outline">
          <div className="flex flex-wrap gap-2 bg-paper p-1 border border-outline rounded-none">
            <button
              onClick={() => setActiveTab("parcourir")}
              className={`px-5 py-2.5 rounded-none text-[11px] font-bold uppercase tracking-[0.16em] transition-colors cursor-pointer ${
                activeTab === "parcourir"
                  ? "bg-primary text-white"
                  : "bg-transparent text-muted hover:text-ink hover:bg-warm"
              }`}
            >
              Parcourir les offres
            </button>
            <button
              onClick={() => setActiveTab("simulateur")}
              className={`px-5 py-2.5 rounded-none text-[11px] font-bold uppercase tracking-[0.16em] transition-colors cursor-pointer ${
                activeTab === "simulateur"
                  ? "bg-primary text-white"
                  : "bg-transparent text-muted hover:text-ink hover:bg-warm"
              }`}
            >
              Simulateur de besoins
            </button>
            <button
              onClick={() => setActiveTab("comparatif")}
              className={`px-5 py-2.5 rounded-none text-[11px] font-bold uppercase tracking-[0.16em] transition-colors cursor-pointer ${
                activeTab === "comparatif"
                  ? "bg-primary text-white"
                  : "bg-transparent text-muted hover:text-ink hover:bg-warm"
              }`}
            >
              Tableau Comparatif
            </button>
          </div>

          {activeTab === "parcourir" && (
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className={`flex items-center gap-2 border rounded-none px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] transition-colors cursor-pointer ${
                isFilterOpen || searchQuery !== "" || billingCycle !== "yearly" || maxBudget < budgetLimit
                  ? "border-primary bg-primary-muted text-primary-deep font-bold"
                  : "bg-paper border-outline text-muted hover:bg-warm hover:text-ink"
              }`}
            >
              <SlidersHorizontal className="h-3.5 w-3.5" />
              {isFilterOpen ? "Fermer les filtres" : "Filtrer"}
              {(searchQuery !== "" || billingCycle !== "yearly" || maxBudget < budgetLimit) && (
                <span className="ml-1 w-2.5 h-2.5 bg-primary rounded-none inline-block shadow-sm" />
              )}
            </button>
          )}
        </div>

        {/* ======================================= */}
        {/* VIEW 1: PARCOURIR (CATALOG & FILTERS)   */}
        {/* ======================================= */}
        {activeTab === "parcourir" && (
          <div>
            {/* Expanded Filters */}
            {isFilterOpen && (
              <div className="mb-10 p-6 bg-warm border border-outline rounded-none grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Search */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-muted block">Rechercher</label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Ex: parental, Check Point, PC..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="input-soft w-full h-[42px] pr-10"
                    />
                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-muted/50 h-4 w-4" />
                  </div>
                </div>

                {/* Billing Cycle */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-muted block">Cycle de facturation</label>
                  <div className="flex border border-outline p-0.5 bg-paper rounded-none h-[42px] items-center">
                    <button
                      onClick={() => handleBillingCycleChange("monthly")}
                      className={`flex-1 text-center py-2 text-[10px] font-bold uppercase tracking-wider transition-colors cursor-pointer rounded-none ${
                        billingCycle === "monthly"
                          ? "bg-primary text-white font-bold"
                          : "text-muted hover:text-ink"
                      }`}
                    >
                      Mensuel
                    </button>
                    <button
                      onClick={() => handleBillingCycleChange("yearly")}
                      className={`flex-1 text-center py-2 text-[10px] font-bold uppercase tracking-wider transition-colors cursor-pointer rounded-none flex items-center justify-center gap-1.5 ${
                        billingCycle === "yearly"
                          ? "bg-primary text-white font-bold"
                          : "text-muted hover:text-ink"
                      }`}
                    >
                      Annuel
                      <span className={`text-[8px] px-1 py-0.5 font-black uppercase ${billingCycle === "yearly" ? "bg-white text-primary" : "bg-primary/10 text-primary"}`}>-25%</span>
                    </button>
                  </div>
                </div>

                {/* Max Budget Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-muted">Budget maximum</label>
                    <span className="text-[11px] font-bold text-ink bg-paper border border-outline px-2 py-0.5">{formatPrice(maxBudget)}</span>
                  </div>
                  <input
                    type="range"
                    min={billingCycle === "monthly" ? 1000 : 9000}
                    max={budgetLimit}
                    step={billingCycle === "monthly" ? 500 : 1000}
                    value={maxBudget}
                    onChange={(e) => setMaxBudget(Number(e.target.value))}
                    className="w-full accent-primary h-1.5 bg-outline rounded-none appearance-none cursor-pointer mt-3"
                  />
                  <div className="flex justify-between text-[9px] text-muted/60 font-bold uppercase tracking-wider mt-1">
                    <span>{formatPrice(billingCycle === "monthly" ? 1000 : 9000)}</span>
                    <span>{formatPrice(budgetLimit)}</span>
                  </div>
                </div>

                {/* Reset Filters row */}
                {(searchQuery !== "" || billingCycle !== "yearly" || maxBudget < budgetLimit) && (
                  <div className="md:col-span-3 flex justify-end pt-2 border-t border-outline/50">
                    <button
                      onClick={() => {
                        setSearchQuery("");
                        setBillingCycle("yearly");
                        setMaxBudget(80000);
                      }}
                      className="text-[10px] font-bold uppercase tracking-[0.16em] text-primary hover:text-primary-deep flex items-center gap-1.5 cursor-pointer"
                    >
                      <RefreshCw className="h-3 w-3" />
                      Réinitialiser les filtres
                    </button>
                  </div>
                )}

              </div>
            )}

            {/* Catalog Grid */}
            <h2 className="text-xl font-display font-bold uppercase tracking-wider text-ink mb-6">Nos Offres et Forfaits</h2>

            {filteredPlans.length > 0 ? (
              <div className="space-y-6">
                {filteredPlans.map((plan) => {
                  const price = billingCycle === "yearly" ? plan.yearly : plan.monthly;
                  return (
                    <div key={plan.id} className="bg-paper border border-outline rounded-none flex flex-col md:flex-row overflow-hidden transition-all duration-300 hover:border-primary/20 hover:shadow-md">
                      
                      {/* Left Column: Product Info */}
                      <div className="flex-1 p-8">
                        <div className="mb-3 inline-block px-3 py-1 bg-primary-muted text-primary-deep text-[10px] font-bold uppercase tracking-[0.2em] rounded-none border border-primary/15">
                          {plan.tagline}
                        </div>
                        <h3 className="text-2xl font-display font-bold text-ink mb-2">{plan.name}</h3>
                        <p className="text-[14px] text-muted mb-6">{plan.audience}</p>
                        
                        <p className="text-[11px] font-bold text-muted/60 mb-3 uppercase tracking-[0.18em]">Spécifications du service :</p>
                        <ul className="space-y-2.5 mb-4">
                          {plan.perks.map((perk, i) => (
                            <li key={i} className="flex items-start text-sm text-muted">
                              <span className="mr-2 text-primary font-bold">-</span>
                              {perk}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Right Column: Pricing & Action */}
                      <div className="bg-warm md:w-80 p-8 flex flex-col justify-center items-center border-t md:border-t-0 md:border-l border-outline relative">
                        {/* Brand indicator line */}
                        <div className="hidden md:block absolute left-[-2px] top-1/2 -translate-y-1/2 w-[3px] h-16 bg-primary" />

                        {billingCycle === "yearly" && plan.originalPrice && (
                          <div className="mb-2 flex flex-col items-center">
                            <span className="text-[9px] text-[#c03c0c] font-black uppercase tracking-[0.2em] bg-[#c03c0c]/10 px-2.5 py-1 rounded-none border border-[#c03c0c]/15 mb-1.5">En Promo</span>
                            <span className="text-sm text-muted/50 line-through decoration-muted/30">{formatPrice(plan.originalPrice)}</span>
                          </div>
                        )}
                        
                        <p className="text-4xl font-display font-black text-ink mb-1">{formatPrice(price)}</p>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-muted/65 mb-8">
                          {billingCycle === "yearly" ? "Par an" : "Par mois"}
                        </span>
                        
                        <div className="flex items-center gap-3 w-full">
                          <Link
                            href={`/devis?plan=${encodeURIComponent(plan.name)}&billing=${billingCycle}`}
                            className="flex items-center justify-center border border-primary rounded-none text-primary p-3.5 cursor-pointer hover:bg-primary-muted transition-colors"
                            title="Générer un devis pour cette offre"
                          >
                            <FileText className="h-4.5 w-4.5" />
                          </Link>
                          <Link 
                            href={`/offres/${plan.id}?billing=${billingCycle}`}
                            className="flex-1 bg-primary hover:bg-primary-deep text-white text-[11px] font-bold uppercase tracking-[0.16em] text-center py-3.5 rounded-none transition-colors"
                          >
                            Sélectionner
                          </Link>
                        </div>
                      </div>

                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-16 bg-warm border border-outline rounded-none">
                <p className="text-muted mb-4 font-bold text-sm">Aucune offre ne correspond à vos filtres actuels.</p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setBillingCycle("yearly");
                    setMaxBudget(80000);
                  }}
                  className="btn-primary"
                >
                  Réinitialiser les filtres
                </button>
              </div>
            )}
          </div>
        )}

        {/* ======================================= */}
        {/* VIEW 2: SIMULATEUR (RECOMMENDATION)     */}
        {/* ======================================= */}
        {activeTab === "simulateur" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Input card */}
            <div className="lg:col-span-5 bg-paper border border-outline p-8 rounded-none space-y-6">
              <div>
                <span className="text-primary text-[10px] font-bold uppercase tracking-[0.2em]">// Calculez vos besoins</span>
                <h2 className="text-2xl font-display font-bold text-ink mt-2">Combien d'appareils devez-vous sécuriser ?</h2>
                <p className="text-xs text-muted mt-2">
                  Nous incluons les ordinateurs (Windows, macOS), les tablettes et les smartphones dans l'estimation de votre couverture.
                </p>
              </div>

              {/* Range Slider for Devices */}
              <div className="space-y-4 pt-4 border-t border-outline">
                <div className="flex justify-between items-center">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-muted">Nombre d'appareils</span>
                  <span className="text-2xl font-display font-black text-primary px-3 py-1 bg-primary-muted border border-primary/20">
                    {deviceCount}
                  </span>
                </div>

                <input
                  type="range"
                  min="1"
                  max="15"
                  value={deviceCount}
                  onChange={(e) => setDeviceCount(Number(e.target.value))}
                  className="w-full accent-primary h-2 bg-outline rounded-none appearance-none cursor-pointer"
                />

                <div className="flex justify-between text-[10px] font-bold text-muted/50">
                  <span>1 Appareil</span>
                  <span>5 Appareils</span>
                  <span>10 Appareils</span>
                  <span>15+ Appareils</span>
                </div>
              </div>

              {/* Quick Select Buttons */}
              <div className="space-y-2 pt-4 border-t border-outline">
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted block">Sélection rapide :</span>
                <div className="grid grid-cols-5 gap-2">
                  {[1, 3, 5, 10, 15].map((val) => (
                    <button
                      key={val}
                      onClick={() => setDeviceCount(val)}
                      className={`py-2 text-[11px] font-bold border transition-colors cursor-pointer rounded-none ${
                        deviceCount === val
                          ? "bg-primary border-primary text-white"
                          : "bg-paper border-outline text-muted hover:border-primary/45 hover:text-ink"
                      }`}
                    >
                      {val} {val === 15 ? "+" : ""}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Recommendation Result Card */}
            <div className="lg:col-span-7 bg-paper border-2 border-primary rounded-none shadow-[0_0_24px_rgba(240,130,42,0.08)] overflow-hidden relative">
              {/* Highlight ribbon banner */}
              <div className="bg-primary text-white text-center py-2 text-[10px] font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5" />
                Conseillé pour vos {deviceCount} appareil{deviceCount > 1 ? "s" : ""}
              </div>

              <div className="p-8">
                <div className="mb-3 inline-block px-3 py-1 bg-primary-muted text-primary-deep text-[10px] font-bold uppercase tracking-[0.2em] rounded-none border border-primary/15">
                  {recommendedPlan.tagline}
                </div>
                
                <h3 className="text-3xl font-display font-bold text-ink mb-1">{recommendedPlan.name}</h3>
                <p className="text-[14px] text-muted mb-4">{recommendedPlan.audience}</p>
                <p className="text-[13px] text-primary-deep font-semibold mb-6 bg-primary-muted/50 p-3 border-l-2 border-primary">
                  {getRecommendationText(recommendedPlan.id)}
                </p>
                
                <p className="text-[11px] font-bold text-muted/60 mb-3 uppercase tracking-[0.18em]">Ce qui est inclus dans cette offre :</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mb-8">
                  {recommendedPlan.perks.map((perk, i) => (
                    <li key={i} className="flex items-start text-xs text-muted">
                      <Check className="h-4 w-4 text-primary shrink-0 mr-2 mt-0.5" strokeWidth={3} />
                      {perk}
                    </li>
                  ))}
                </ul>

                {/* Price block & Action */}
                <div className="pt-6 border-t border-outline flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-display font-black text-ink">{formatPrice(recommendedPlan.yearly)}</span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-muted">Par an</span>
                    </div>
                    {recommendedPlan.originalPrice && (
                      <p className="text-[11px] text-muted mt-1">
                        Économisez <span className="text-[#c03c0c] font-bold">{formatPrice(recommendedPlan.originalPrice - recommendedPlan.yearly)}</span> par rapport au tarif normal
                      </p>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-3 w-full md:w-auto">
                    <Link
                      href={`/devis?plan=${encodeURIComponent(recommendedPlan.name)}&billing=yearly`}
                      className="flex items-center justify-center border border-primary rounded-none text-primary p-4 cursor-pointer hover:bg-primary-muted transition-colors"
                      title="Générer un devis pour cette offre"
                    >
                      <FileText className="h-5 w-5" />
                    </Link>
                    <Link 
                      href={`/offres/${recommendedPlan.id}?billing=yearly`}
                      className="flex-1 md:flex-initial bg-primary hover:bg-primary-deep text-white text-[11px] font-bold uppercase tracking-[0.16em] text-center px-8 py-4 rounded-none transition-colors"
                    >
                      Sélectionner l'offre
                    </Link>
                  </div>
                </div>
              </div>

              {deviceCount > 10 && (
                <div className="bg-warm border-t border-outline p-4 text-center text-xs text-muted">
                  Besoin de protéger plus de 10 appareils ? <Link href="/contact" className="font-bold text-primary hover:underline">Contactez nos conseillers</Link> pour une offre entreprise sur-mesure.
                </div>
              )}
            </div>

          </div>
        )}

        {/* ======================================= */}
        {/* VIEW 3: TABLEAU COMPARATIF              */}
        {/* ======================================= */}
        {activeTab === "comparatif" && (
          <div className="bg-paper border border-outline rounded-none shadow-sm overflow-hidden">
            
            {/* Table Header Section */}
            <div className="bg-warm border-b border-outline p-6">
              <h2 className="text-lg font-display font-bold text-ink uppercase tracking-wider">Grille de comparaison détaillée</h2>
              <p className="text-xs text-muted mt-1">Comparez les capacités de nos solutions Cyberwize Family Check Point Harmony pour choisir celle qui correspond à votre foyer.</p>
            </div>

            {/* Horizontally scrollable container */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[13px] border-collapse min-w-[800px]">
                
                {/* Columns Header */}
                <thead>
                  <tr className="bg-warm text-muted border-b border-outline text-[10px] font-bold uppercase tracking-wider">
                    <th className="py-4 px-6 border-r border-outline max-w-[200px]">Fonctionnalités</th>
                    {plans.map((p) => (
                      <th key={p.id} className="py-4 px-6 text-center">
                        <div className="font-display text-ink font-bold text-sm tracking-normal uppercase">{p.name}</div>
                        <span className="text-[9px] text-muted/60 tracking-[0.15em] lowercase font-normal">{p.tagline}</span>
                      </th>
                    ))}
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody className="divide-y divide-outline">
                  
                  {/* Row: Number of devices */}
                  <tr className="hover:bg-warm/30 transition-colors">
                    <td className="py-4 px-6 font-bold border-r border-outline">Appareils inclus</td>
                    {plans.map((p) => (
                      <td key={p.id} className="py-4 px-6 text-center text-ink font-bold">
                        {p.id === "1device" ? "1 appareil" : p.id === "3device" ? "3 appareils" : p.id === "5device" ? "5 appareils" : "10 appareils"}
                      </td>
                    ))}
                  </tr>

                  {/* Row: Antimalware / Antiphishing */}
                  <tr className="hover:bg-warm/30 transition-colors">
                    <td className="py-4 px-6 font-bold border-r border-outline">Sécurisation Mobile & PC</td>
                    {plans.map((p) => (
                      <td key={p.id} className="py-4 px-6 text-center">
                        <div className="flex justify-center text-primary"><Check className="h-5 w-5" strokeWidth={3} /></div>
                      </td>
                    ))}
                  </tr>

                  {/* Row: Phishing/Malware */}
                  <tr className="hover:bg-warm/30 transition-colors">
                    <td className="py-4 px-6 font-bold border-r border-outline">Anti-phishing & Anti-malware</td>
                    {plans.map((p) => (
                      <td key={p.id} className="py-4 px-6 text-center">
                        <div className="flex justify-center text-primary"><Check className="h-5 w-5" strokeWidth={3} /></div>
                      </td>
                    ))}
                  </tr>

                  {/* Row: Parental Control */}
                  <tr className="hover:bg-warm/30 transition-colors">
                    <td className="py-4 px-6 font-bold border-r border-outline">Contrôle Parental</td>
                    {plans.map((p) => (
                      <td key={p.id} className="py-4 px-6 text-center text-muted font-medium text-xs">
                        {p.id === "1device" ? (
                          <span className="text-muted/40">—</span>
                        ) : p.id === "3device" ? (
                          "Intelligent & Filtrage Web"
                        ) : p.id === "5device" ? (
                          "Intelligent & Filtrage Web"
                        ) : (
                          "Multi-profils & Personnalisé"
                        )}
                      </td>
                    ))}
                  </tr>

                  {/* Row: Sandboxing */}
                  <tr className="hover:bg-warm/30 transition-colors">
                    <td className="py-4 px-6 font-bold border-r border-outline">Anti-ransomware & Isolation</td>
                    {plans.map((p) => (
                      <td key={p.id} className="py-4 px-6 text-center text-muted font-medium text-xs">
                        {p.id === "1device" || p.id === "3device" ? (
                          <span className="text-muted/40">—</span>
                        ) : p.id === "5device" ? (
                          "Sandboxing avancé"
                        ) : (
                          "ThreatCloud AI Sandboxing"
                        )}
                      </td>
                    ))}
                  </tr>

                  {/* Row: Support type */}
                  <tr className="hover:bg-warm/30 transition-colors">
                    <td className="py-4 px-6 font-bold border-r border-outline">Assistance & Support</td>
                    {plans.map((p) => (
                      <td key={p.id} className="py-4 px-6 text-center text-muted font-medium text-xs">
                        {p.id === "1device" || p.id === "3device" ? (
                          "Support Agilly 24/7"
                        ) : p.id === "5device" ? (
                          "Support SOC Agilly prioritaire"
                        ) : (
                          "Accompagnement SOC & Proactif"
                        )}
                      </td>
                    ))}
                  </tr>

                  {/* Row: Monthly price */}
                  <tr className="hover:bg-warm/30 transition-colors">
                    <td className="py-4 px-6 font-bold border-r border-outline">Tarif Mensuel</td>
                    {plans.map((p) => (
                      <td key={p.id} className="py-4 px-6 text-center text-ink font-mono font-bold">
                        {formatPrice(p.monthly)} <span className="text-[10px] text-muted font-sans font-normal">/ mois</span>
                      </td>
                    ))}
                  </tr>

                  {/* Row: Yearly price */}
                  <tr className="hover:bg-warm/30 transition-colors bg-primary-muted/20">
                    <td className="py-4 px-6 font-bold border-r border-outline text-primary-deep">Tarif Annuel (Promo)</td>
                    {plans.map((p) => (
                      <td key={p.id} className="py-4 px-6 text-center text-primary-deep font-mono font-extrabold">
                        {formatPrice(p.yearly)} <span className="text-[10px] text-primary font-sans font-normal">/ an</span>
                      </td>
                    ))}
                  </tr>

                  {/* Row: Action CTAs */}
                  <tr className="bg-warm/20">
                    <td className="py-4 px-6 border-r border-outline"></td>
                    {plans.map((p) => (
                      <td key={p.id} className="py-4 px-6 text-center">
                        <Link
                          href={`/offres/${p.id}?billing=yearly`}
                          className="inline-block bg-primary hover:bg-primary-deep text-white text-[10px] font-bold uppercase tracking-wider px-4 py-2.5 rounded-none transition-colors"
                        >
                          Choisir
                        </Link>
                      </td>
                    ))}
                  </tr>

                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
