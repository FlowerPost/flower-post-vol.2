"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

/**
 * Reveal
 *
 * Единна scroll-reveal логика за всички сцени под hero-а.
 * CLAUDE.md: "Never duplicate logic." Тук е мястото за
 * emerge-through-blur анимацията, дефинирана веднъж.
 *
 * whileInView вместо GSAP ScrollTrigger — framer-motion вече
 * е инсталиран, нова зависимост не е оправдана за проста
 * fade-in-on-scroll нужда (CLAUDE.md: "Never introduce
 * unnecessary dependencies").
 */

const EASE_MATERIAL = [0.22, 0.61, 0.24, 1] as const;

const emerge: Variants = {
  hidden: { opacity: 0, y: 22, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.0, ease: EASE_MATERIAL },
  },
};

const fade: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  as?: "div" | "span";
  className?: string;
  style?: React.CSSProperties;
}

export function Reveal({
  children,
  delay = 0,
  as = "div",
  className,
  style,
}: RevealProps) {
  const reduced = useReducedMotion();
  const MotionTag = as === "span" ? motion.span : motion.div;

  return (
    <MotionTag
      variants={reduced ? fade : emerge}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ delay: reduced ? 0 : delay }}
      className={className}
      style={style}
    >
      {children}
    </MotionTag>
  );
}
