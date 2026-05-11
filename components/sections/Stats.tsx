"use client";

import { motion } from "motion/react";
import { staggerContainer, staggerItem, springs } from "@/lib/animations";

const stats = [
  { value: "500+", label: "Menaces bloquées / jour" },
  { value: "99.9%", label: "Uptime garanti" },
  { value: "24/7", label: "Surveillance SOC" },
  { value: "150+", label: "Entreprises protégées" },
];

export function Stats() {
  return (
    <section className="relative overflow-hidden border-y border-cyber-muted/10 bg-cyber-black">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-cyan/[0.02] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 gap-px md:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              whileHover={{ y: -4, transition: springs.snappy }}
              className="relative px-4 py-8 text-center md:px-8"
            >
              {/* Divider */}
              {index > 0 && (
                <div className="absolute top-1/2 left-0 hidden h-12 w-px -translate-y-1/2 bg-cyber-muted/10 md:block" />
              )}

              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={springs.bouncy}
                className="text-4xl font-display text-cyber-cyan sm:text-5xl lg:text-6xl"
              >
                {stat.value}
              </motion.div>
              <div className="mt-3 text-sm font-medium uppercase tracking-wider text-cyber-gray">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
