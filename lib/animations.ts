import { Variants, Transition } from "motion/react";

export const easeMobbin = [0.22, 1, 0.36, 1] as [number, number, number, number];

/** Alias utilisés par les sections legacy */
export const easeNotion = easeMobbin;

export const springs = {
  entry: { type: "spring", stiffness: 50, damping: 14, mass: 0.8 } as Transition,
  hover: { type: "spring", stiffness: 300, damping: 20 } as Transition,
  soft: { type: "spring", stiffness: 90, damping: 18 } as Transition,
  snappy: { type: "spring", stiffness: 260, damping: 22 } as Transition,
};

/** Alias de fadeUp pour scroll reveal */
export const fadeInUpScroll: Variants = {
  hidden: { opacity: 0, y: 36, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 45, damping: 15, mass: 0.8 },
  },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 50, damping: 14, mass: 0.8 },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.06,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 50, damping: 14, mass: 0.8 },
  },
};

export const wordReveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: easeMobbin },
  },
};

export const wordContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04 },
  },
};

/** Cartes claires — ombre orange, pas noire */
export const mobbinCardHover = {
  y: -4,
  scale: 1.01,
  boxShadow: "0 24px 48px -12px rgba(255, 92, 0, 0.22)",
  transition: springs.hover,
};

export const mobbinCardTap = {
  scale: 0.99,
  transition: { duration: 0.12, ease: easeMobbin },
};
