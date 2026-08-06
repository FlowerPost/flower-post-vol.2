import type { Metadata } from "next";
import { WaitlistForm } from "@/components/configurator/WaitlistForm";

export const metadata: Metadata = {
  title: "Поръчай",
  description: "Конфигурирай своята FLOWERPOST кутия.",
};

/**
 * /poruchaj
 *
 * Конфигураторът от 4 стъпки (кутия → послание → доставка → преглед)
 * не е построен още — изисква продуктова/наличностна схема, която
 * не съществува в този greenfield repo.
 *
 * Честен stub вместо фалшив checkout. Vol.1 показваше страница
 * "Изчерпано" без начин да оставиш имейл директно тук — тази
 * версия го поправя.
 */
export default function OrderPage() {
  return (
    <main
      className="flex min-h-[100svh] flex-col items-center justify-center px-6 py-24 text-center"
      style={{ backgroundColor: "var(--color-ground)" }}
    >
      <span className="eyebrow" style={{ color: "var(--color-gold-warm)" }}>
        FLOWERPOST
      </span>

      <h1
        className="display mt-6"
        style={{
          fontSize: "clamp(2.2rem, 7vw, 4rem)",
          color: "var(--color-paper)",
        }}
      >
        Конфигураторът се строи.
      </h1>

      <p
        className="mt-6 max-w-md"
        style={{
          fontSize: "0.95rem",
          lineHeight: "1.8",
          color: "color-mix(in srgb, var(--color-paper) 55%, transparent)",
        }}
      >
        Скоро ще можеш да избереш брой рози, да напишеш своето послание
        и да зададеш дата на доставка. Остави имейл — ще ти пишем в
        деня, в който отвориш кутията.
      </p>

      <div className="mt-10 w-full">
        <WaitlistForm />
      </div>
    </main>
  );
}
