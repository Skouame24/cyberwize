import { Variants, Transition } from "motion/react";

/** Courbes organiques — pas les presets "premium SaaS" */
export const ease = {
  out: [0.16, 1, 0.3, 1] as [number, number, number, number],
  inOut: [0.76, 0, 0.24, 1] as [number, number, number, number],
  snap: [0.34, 1.2, 0.64, 1] as [number, number, number, number],
};

export const spring = {
  gentle: { type: "spring", stiffness: 90, damping: 18, mass: 0.9 } as Transition,
  pop: { type: "spring", stiffness: 260, damping: 22 } as Transition,
  float: { type: "spring", stiffness: 50, damping: 14 } as Transition,
};

/** Révélation par masque horizontal — effet presse */
export const clipFromLeft: Variants = {
  hidden: { clipPath: "inset(0 100% 0 0)", opacity: 0.6 },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    opacity: 1,
    transition: { duration: 0.9, ease: ease.out },
  },
};

export const clipFromBottom: Variants = {
  hidden: { clipPath: "inset(100% 0 0 0)", y: 12 },
  visible: {
    clipPath: "inset(0% 0 0 0)",
    y: 0,
    transition: { duration: 0.85, ease: ease.out, delay: 0.08 },
  },
};

/** Cartes : légère rotation irrégulière à l'entrée */
export const tiltIn = (i: number): Variants => ({
  hidden: {
    opacity: 0,
    y: 48,
    rotate: i % 2 === 0 ? -1.8 : 1.4,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      ease: ease.out,
      delay: 0.12 + i * 0.09,
    },
  },
});

/** Chiffres : netteté progressive */
export const focusIn: Variants = {
  hidden: { opacity: 0, filter: "blur(12px)", scale: 0.92 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
    transition: { duration: 0.8, ease: ease.out },
  },
};

export const cascade: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

export const softReveal = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 40,
      damping: 15,
      mass: 0.8,
      delay,
    },
  },
});

export const softStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.06 },
  },
};

export const softItem: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 14,
      mass: 0.8,
    },
  },
};

export const viewport = {
  once: true,
  amount: 0.12,
  margin: "-60px 0px -80px 0px",
} as const;

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: ease.out },
  },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: ease.out, delay: 0.08 },
  },
};

export const heroViewport = {
  once: true,
  amount: 0.2,
  margin: "-48px 0px -48px 0px",
} as const;
