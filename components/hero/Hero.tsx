"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import Link from "next/link";

/**
 * Hero — „Фугата"
 *
 * Страницата се отваря ЗАТВОРЕНА.
 * Единственият извор на светлина е линията между капака и кутията.
 * Всичко останало излиза от нея.
 */

const EASE_MATERIAL = [0.22, 0.61, 0.24, 1] as const;
const EASE_LID      = [0.16, 0.84, 0.28, 1] as const;

const emerge: Variants = {
  hidden:  { opacity: 0, y: 12, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.1, ease: EASE_MATERIAL },
  },
};

const fade: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

export function Hero() {
  const reduced = useReducedMotion();
  const v = reduced ? fade : emerge;
  const d = (base: number) => (reduced ? 0 : base);

  return (
    <section
      aria-label="FLOWERPOST — подаръчна кутия с рози"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6"
      style={{ backgroundColor: "var(--color-ground)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0"
        style={{ top: "50%", transform: "translateY(-50%)" }}
      >
        <motion.div
          initial={{ opacity: 0, scaleX: 0.15 }}
          animate={{ opacity: reduced ? 0.45 : [0, 0.5, 0.38], scaleX: 1 }}
          transition={{ duration: d(2.8), ease: EASE_LID, delay: d(0.3) }}
          style={{
            margin: "0 auto",
            height: "10rem",
            width: "100%",
            maxWidth: "56rem",
            background:
              "radial-gradient(ellipse at center, #f0e8d5 0%, transparent 68%)",
            filter: "blur(48px)",
          }}
        />
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: d(2.2), ease: EASE_LID, delay: d(0.35) }}
          style={{
            position: "absolute",
            inset: "0 0 auto",
            top: "50%",
            margin: "0 auto",
            height: "1px",
            width: "100%",
            maxWidth: "72rem",
            transformOrigin: "center",
            background:
              "linear-gradient(90deg, transparent, #e4cf9a 18%, #e4cf9a 82%, transparent)",
          }}
        />
      </div>

      <div className="relative z-10 flex w-full max-w-3xl flex-col items-center pb-20 text-center">
        <motion.span
          variants={v}
          initial="hidden"
          animate="visible"
          transition={{ delay: d(1.0) }}
          className="eyebrow"
          style={{ color: "color-mix(in srgb, var(--color-gold-warm) 65%, transparent)" }}
        >
          flower post
        </motion.span>

        <motion.h1
          variants={v}
          initial="hidden"
          animate="visible"
          transition={{ delay: d(1.45) }}
          className="display mt-7"
          style={{ fontSize: "clamp(2.8rem, 11vw, 7.5rem)", color: "var(--color-paper)" }}
        >
          Някой мисли
          <br />
          <em style={{ fontStyle: "italic", color: "var(--color-rose)" }}>за теб.</em>
        </motion.h1>
      </div>

      <div className="relative z-10 flex w-full max-w-md flex-col items-center pt-20 text-center">
        <motion.p
          variants={v}
          initial="hidden"
          animate="visible"
          transition={{ delay: d(2.0) }}
          style={{
            fontSize: "0.95rem",
            lineHeight: "1.75",
            color: "color-mix(in srgb, var(--color-paper) 55%, transparent)",
          }}
        >
          Продълговата кутия в цвят шампанско.
          <br />
          Свежи рози, наредени една до друга.
          <br />
          Твоите думи, изписани на ръка.
        </motion.p>

        <motion.div
          variants={v}
          initial="hidden"
          animate="visible"
          transition={{ delay: d(2.45) }}
          className="mt-10"
        >
          <Link
            href="/poruchaj"
            className="group inline-flex items-center gap-3"
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--color-paper)",
              paddingBottom: "0.5rem",
              borderBottom: "1px solid color-mix(in srgb, var(--color-gold) 35%, transparent)",
              textDecoration: "none",
              transition: "border-color 500ms",
            }}
          >
            Създай своята кутия
            <span
              aria-hidden
              style={{ display: "inline-block", transition: "transform 500ms ease-out" }}
              className="group-hover:[transform:translateX(4px)]"
            >
              →
            </span>
          </Link>
        </motion.div>

        <motion.p
          variants={fade}
          initial="hidden"
          animate="visible"
          transition={{ delay: d(3.1), duration: 1.2 }}
          className="eyebrow mt-14"
          style={{ color: "color-mix(in srgb, var(--color-paper) 28%, transparent)" }}
        >
          От 99 лв · 11–21 рози · София и страната
        </motion.p>
      </div>

      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: d(3.6), duration: 1.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={reduced ? {} : { scaleY: [1, 0.4, 1], opacity: [0.5, 0.15, 0.5] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          style={{
            height: "2.5rem",
            width: "1px",
            transformOrigin: "top",
            background: "linear-gradient(180deg, var(--color-gold-warm), transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}
