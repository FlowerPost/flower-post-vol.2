import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";

/**
 * ConfiguratorTeaser — „Персонализация"
 *
 * PROJECT_VISION емоционална последователност:
 * Connection → Trust → ... → Personalization → Commitment
 *
 * Тук visitor-ът научава КАКВО може да избере, преди да
 * натисне towards /poruchaj. Не е формата — това е поканата.
 */
export function ConfiguratorTeaser() {
  const choices = [
    { label: "Брой рози", value: "11 – 21" },
    { label: "Послание", value: "Ръчно изписано" },
    { label: "Доставка", value: "София · страната" },
  ];

  return (
    <section
      className="relative px-6 py-32"
      style={{ backgroundColor: "var(--color-ground)" }}
    >
      <div className="mx-auto max-w-xl text-center">
        <Reveal>
          <p
            className="display"
            style={{
              fontSize: "clamp(2rem, 6vw, 3.6rem)",
              color: "var(--color-paper)",
            }}
          >
            Твоята кутия.
            <br />
            <span style={{ color: "var(--color-rose)" }}>Твоите думи.</span>
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div
            className="mx-auto mt-14 flex flex-col divide-y sm:flex-row sm:divide-x sm:divide-y-0"
            style={{
              borderColor: "color-mix(in srgb, var(--color-gold) 20%, transparent)",
            }}
          >
            {choices.map((c) => (
              <div
                key={c.label}
                className="flex-1 px-2 py-5 sm:px-6"
                style={{
                  borderColor:
                    "color-mix(in srgb, var(--color-gold) 20%, transparent)",
                }}
              >
                <p
                  className="eyebrow"
                  style={{
                    color:
                      "color-mix(in srgb, var(--color-paper) 40%, transparent)",
                  }}
                >
                  {c.label}
                </p>
                <p
                  className="mt-2"
                  style={{ fontSize: "0.95rem", color: "var(--color-paper)" }}
                >
                  {c.value}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.3} className="mt-14">
          <Link
            href="/poruchaj"
            className="inline-flex items-center gap-3"
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--color-ground)",
              backgroundColor: "var(--color-paper)",
              padding: "1rem 2.25rem",
              borderRadius: "2px",
              textDecoration: "none",
            }}
          >
            Създай своята кутия
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
