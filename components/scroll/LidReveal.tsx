"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";

/**
 * LidReveal — сигнатурният момент
 *
 * MOTION_BIBLE: „Scroll философия: скролът никога не бива просто
 * да мести съдържание. Скролът трябва да разкрива сцени."
 *
 * 3D_BIBLE „LID": „Контролиран. С тегло. Меко затваряне. Никога рязко."
 *
 * Капакът е панел, идентичен по цвят на Hero фона. Ръбът му (фугата)
 * е шарнирът — transform-origin: bottom. Капакът се завърта на 3D
 * перспектива около този шарнир, вместо да се плъзга — това е
 * физически вярно на как реално се отваря капак, не илюзия за плъзгане.
 *
 * Няма 3D модел, няма снимка на рози отвътре — затова разкритието
 * е светлина, не имитация на съдържание, което още нямаме.
 * Уталожва се в същия --color-ground, в който StoryScene вече
 * седи — цветов преход без шев.
 *
 * scrollYProgress движи анимацията directly, без easing crutch:
 * скролът НА ПОТРЕБИТЕЛЯ е easing-ът.
 */
export function LidReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const lidRotate = useTransform(scrollYProgress, [0, 1], [0, -112]);
  const lidOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);

  const glowOpacity = useTransform(
    scrollYProgress,
    [0, 0.22, 0.5, 0.85],
    [0, 1, 0.55, 0]
  );
  const glowScale = useTransform(scrollYProgress, [0, 1], [0.65, 1.7]);

  // Reduced motion: без sticky pinning, без 220vh scroll разстояние.
  // MOTION_BIBLE: „Заменѝ движението с opacity, depth, композиция.
  // Никога не премахвай смисъла." Тук смисълът (Hero → Story) вече
  // го носи цветовата приемственост — самата анимация е излишна.
  if (reduced) {
    return (
      <div aria-hidden style={{ height: "2px", backgroundColor: "var(--color-ground)" }} />
    );
  }

  return (
    <section
      ref={containerRef}
      aria-hidden
      style={{ height: "220vh", position: "relative" }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100svh",
          overflow: "hidden",
          backgroundColor: "var(--color-ground)",
          perspective: "1700px",
        }}
      >
        {/* Светлината, разлята при отварянето — единственият
            начин да покажем "вътрешността", без снимка на рози,
            която все още нямаме. */}
        <motion.div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            margin: "auto",
            width: "60vw",
            height: "60vw",
            maxWidth: "50rem",
            maxHeight: "50rem",
            borderRadius: "9999px",
            background:
              "radial-gradient(circle, var(--color-gold-warm) 0%, transparent 65%)",
            filter: "blur(90px)",
            opacity: glowOpacity,
            scale: glowScale,
          }}
        />

        {/* Капакът — продължение на Hero фона. Завърта се около
            долния си ръб (фугата), не се плъзга. */}
        <motion.div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "var(--color-ground)",
            transformOrigin: "bottom center",
            rotateX: lidRotate,
            opacity: lidOpacity,
            willChange: "transform, opacity",
          }}
        >
          {/* Ръбът пътува с капака — фугата се движи с него */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "min(100%, 72rem)",
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, var(--color-gold-warm) 18%, var(--color-gold-warm) 82%, transparent)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
