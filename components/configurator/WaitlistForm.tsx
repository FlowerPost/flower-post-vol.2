"use client";

import { useState } from "react";

/**
 * WaitlistForm
 *
 * Конфигураторът (poruchaj) все още няма продукт/наличност данни
 * и Supabase проектът все още не е свързан към този repo.
 *
 * ЗАБРАНЕНО: да се фалшифицира "успешно записан" статус, който
 * никъде не се пази. BRAND_BIBLE: "Никога не манипулираме."
 * Изкуствен success message за нещо, което не се случва, е точно
 * такава манипулация — дори неволна.
 *
 * Затова: полето валидира локално, но onSubmit е изрично маркиран.
 *
 * TODO(интеграция): свържи с Supabase таблица (напр. `waitlist`)
 * след като проектът е конфигуриран. Виж migrations/ за схема.
 */
export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "invalid" | "queued">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValid) {
      setStatus("invalid");
      return;
    }

    // TODO: replace with real Supabase insert. В момента НЕ persist-ва
    // никъде — само локален UI state. Не деплойвай на production
    // домейн, докато това не е свързано.
    setStatus("queued");
  }

  if (status === "queued") {
    return (
      <p style={{ fontSize: "0.9rem", color: "var(--color-gold-warm)" }}>
        Записахме желанието ти. Ще ти пишем на {email}.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-sm flex-col items-center gap-3 sm:flex-row"
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (status === "invalid") setStatus("idle");
        }}
        placeholder="твоят имейл"
        aria-label="Имейл за известяване"
        style={{
          flex: 1,
          width: "100%",
          background: "transparent",
          border: "1px solid color-mix(in srgb, var(--color-paper) 25%, transparent)",
          borderRadius: "2px",
          padding: "0.75rem 1rem",
          fontSize: "0.9rem",
          color: "var(--color-paper)",
          outline: "none",
        }}
      />
      <button
        type="submit"
        style={{
          whiteSpace: "nowrap",
          fontSize: "0.75rem",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "var(--color-ground)",
          backgroundColor: "var(--color-paper)",
          padding: "0.85rem 1.5rem",
          borderRadius: "2px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Извести ме
      </button>

      {status === "invalid" && (
        <p
          role="alert"
          style={{
            fontSize: "0.75rem",
            color: "var(--color-rose-deep)",
            width: "100%",
          }}
        >
          Провери имейл адреса.
        </p>
      )}
    </form>
  );
}
