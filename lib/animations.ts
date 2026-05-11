import { Variants, Transition } from "motion/react";

// Premium Bezier Easing Curves
export const easings = {
  // fast at start, smooth deceleration at end (for entry)
  outPremium: [0.22, 1, 0.36, 1],
  // balanced flow (for transitions)
  inOutPremium: [0.65, 0, 0.35, 1],
  // soft bouncy (for subtle impacts)
  softBouncy: [0.34, 1.56, 0.64, 1],
};

// Spring presets for that premium "soft" feel
export const springs = {
  // Gentle, calm entrance
  soft: { type: "spring", stiffness: 80, damping: 20, mass: 1 } as Transition,
  // Bouncy but refined
  bouncy: { type: "spring", stiffness: 200, damping: 15, mass: 0.8 } as Transition,
  // Slow, expensive reveal
  luxurious: { type: "spring", stiffness: 40, damping: 20, mass: 1.2 } as Transition,
  // Snappy hover
  snappy: { type: "spring", stiffness: 300, damping: 25 } as Transition,
  // Floating ambient
  float: { type: "spring", stiffness: 30, damping: 10, mass: 1.5 } as Transition,
};


// Standard fade + slide up
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: springs.soft,
  },
};

// Fade + slide from left
export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: springs.soft,
  },
};

// Fade + slide from right
export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: springs.soft,
  },
};

// Scale up reveal
export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: springs.luxurious,
  },
};

// Staggered children container
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

// Staggered item
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: springs.soft,
  },
};

// Text character/word reveal
export const textReveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      ...springs.soft,
      delay: i * 0.04,
    },
  }),
};

// Hover lift effect
export const hoverLift = {
  y: -8,
  scale: 1.02,
  transition: springs.snappy,
};

// Hover glow effect
export const hoverGlow = {
  boxShadow: "0 20px 60px -15px rgba(242, 140, 56, 0.25)",
  transition: springs.snappy,
};

// Magnetic button effect helper
export const magneticHover = {
  scale: 1.05,
  transition: springs.bouncy,
};

// Parallax scroll helper values
export const parallaxSlow = { y: [0, -30] };
export const parallaxFast = { y: [0, -60] };
