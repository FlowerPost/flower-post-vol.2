import { Reveal } from "@/components/motion/Reveal";

/**
 * StoryScene — „Ритуалът"
 *
 * DESIGN_BIBLE: „Всяка страница има нужда от ритъм.
 * Големи моменти. Тихи моменти."
 *
 * След hero-а с движение и светлина — пълна тишина.
 * Само типография. Никаква снимка, никаква анимация освен reveal.
 */
export function StoryScene() {
  return (
    <section
      className="relative flex min-h-[80svh] flex-col items-center justify-center px-6 py-32 text-center"
      style={{ backgroundColor: "var(--color-ground)" }}
    >
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <p
            className="display"
            style={{
              fontSize: "clamp(1.9rem, 5.5vw, 3.4rem)",
              color: "var(--color-paper-dim)",
            }}
          >
            Кутията не е подаръкът.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <p
            className="display mt-2"
            style={{
              fontSize: "clamp(1.9rem, 5.5vw, 3.4rem)",
              color: "var(--color-paper)",
            }}
          >
            Моментът, в който я отваряш — това е подаръкът.
          </p>
        </Reveal>

        <Reveal delay={0.35}>
          <p
            className="eyebrow mt-12"
            style={{
              color: "color-mix(in srgb, var(--color-paper) 32%, transparent)",
            }}
          >
            FLOWERPOST · 550 × 320 × 130 мм
          </p>
        </Reveal>
      </div>
    </section>
  );
}
