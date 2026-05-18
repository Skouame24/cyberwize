"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [enabled, setEnabled] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const xSpring = useSpring(x, { stiffness: 380, damping: 28, mass: 0.4 });
  const ySpring = useSpring(y, { stiffness: 380, damping: 28, mass: 0.4 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    setEnabled(fine);
    if (!fine) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const onEnter = () => setIsHovering(true);
    const onLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", move);

    const bind = () => {
      document.querySelectorAll("a, button, [data-cursor-hover]").forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };
    bind();
    const obs = new MutationObserver(bind);
    obs.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", move);
      obs.disconnect();
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <style jsx global>{`
        @media (pointer: fine) {
          a,
          button,
          [data-cursor-hover] {
            cursor: none !important;
          }
        }
      `}</style>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] mix-blend-multiply"
        style={{ x: xSpring, y: ySpring }}
      >
        <motion.div
          animate={{
            width: isHovering ? 36 : 10,
            height: isHovering ? 36 : 10,
            marginLeft: isHovering ? -18 : -5,
            marginTop: isHovering ? -18 : -5,
            backgroundColor: isHovering ? "rgba(232, 93, 4, 0.15)" : "rgba(232, 93, 4, 0.9)",
            borderWidth: isHovering ? 2 : 0,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 26 }}
          className="rounded-full border-primary"
        />
      </motion.div>
    </>
  );
}
