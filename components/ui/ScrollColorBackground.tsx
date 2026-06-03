"use client";

import React, { useEffect, useState } from "react";

const sectionStyles: Record<string, { bg: string; text: string }> = {
  hero: { bg: "bg-[#0b0f19]", text: "text-white" },
  partners: { bg: "bg-[#0b0f19]", text: "text-white" },
  "qu-est-ce": { bg: "bg-[#fffcf9]", text: "text-ink" },
  chiffres: { bg: "bg-[#f38120]", text: "text-white" },
  trust: { bg: "bg-[#faf9f6]", text: "text-ink" },
  comment: { bg: "bg-[#0f141d]", text: "text-white" },
  family: { bg: "bg-[#ffffff]", text: "text-ink" },
  dashboard: { bg: "bg-[#0b0f19]", text: "text-white" },
  exemples: { bg: "bg-[#faf9f6]", text: "text-ink" },
  pricing: { bg: "bg-[#fff8f2]", text: "text-ink" },
  testimonials: { bg: "bg-[#ffffff]", text: "text-ink" },
  cta: { bg: "bg-[#f38120]", text: "text-white" },
};

export function ScrollColorBackground({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -35% 0px",
      threshold: 0.1,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          if (id && sectionStyles[id]) {
            setActiveSection(id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    const sections = document.querySelectorAll("[data-scroll-section]");
    sections.forEach((sec) => observer.observe(sec));

    return () => {
      sections.forEach((sec) => observer.unobserve(sec));
    };
  }, []);

  const currentStyle = sectionStyles[activeSection] || sectionStyles.hero;

  return (
    <div className={`relative transition-colors duration-1000 ease-out ${currentStyle.bg} ${currentStyle.text}`}>
      {/* Floating ambient glowing light blobs */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* Orange Glow Blob */}
        <div
          className="absolute rounded-full bg-primary/25 blur-[120px] transition-all duration-1000 ease-out"
          style={{
            width: activeSection === "chiffres" || activeSection === "cta" ? "650px" : "450px",
            height: activeSection === "chiffres" || activeSection === "cta" ? "650px" : "450px",
            left: activeSection === "hero" || activeSection === "family" ? "10%" : "60%",
            top: activeSection === "comment" || activeSection === "pricing" ? "15%" : "40%",
            opacity: activeSection === "hero" ? 0.35 : 0.25,
          }}
        />
        {/* Navy/Blue Glow Blob */}
        <div
          className="absolute rounded-full bg-accent/20 blur-[130px] transition-all duration-1000 ease-out"
          style={{
            width: "500px",
            height: "500px",
            right: activeSection === "hero" || activeSection === "comment" ? "5%" : "65%",
            bottom: activeSection === "dashboard" || activeSection === "qu-est-ce" ? "10%" : "45%",
            opacity: activeSection === "hero" ? 0.3 : 0.2,
          }}
        />
      </div>

      {/* Main page content wrapped in relative z-10 so it's above background blurs */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
