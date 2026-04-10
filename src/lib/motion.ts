/**
 * Centralised Framer Motion variants.
 * Tuned for calm, trustworthy pacing — suited for senior audiences.
 * All animations respect prefers-reduced-motion via the `useReducedMotion` hook
 * in the consuming component — these variants define the full-motion path.
 */

export const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

export const scaleReveal = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2,
    },
  },
};

/** 3-D card tilt — used on the Hero visual placeholder */
export const tilt3d = (rotateX: number, rotateY: number) => ({
  rotateX,
  rotateY,
  transition: { type: "spring", stiffness: 80, damping: 25 },
});
