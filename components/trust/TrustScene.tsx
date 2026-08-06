import { Reveal } from "@/components/motion/Reveal";

/**
 * TrustScene
 *
 * BRAND_BIBLE: „Никога не преувеличаваме. Никога не манипулираме.
 * Никога не фалшифицираме изключителност."
 *
 * Затова тук няма проценти, няма "10 000+ доволни клиенти",
 * няма изкуствени badge-ове. Три изречения, без икони —
 * DESIGN_BIBLE: „Ако икона не носи яснота, махни я."
 */
export function TrustScene() {
  const pillars = [
    {
      title: "Честност",
      text: "Ако нещо е изчерпано, го казваме директно. Никога не създаваме изкуствен недостиг.",
    },
    {
      title: "Занаят",
      text: "Всяка панделка е вързана на ръка. Всяко послание — написано на ръка, не отпечатано.",
    },
    {
      title: "Внимание",
      text: "Кутията не се отваря преди адресата. Датата и часът се потвърждават лично.",
    },
  ];

  return (
    <section
      className="relative px-6 py-32"
      style={{ backgroundColor: "var(--color-ground-mid)" }}
    >
      <div className="mx-auto grid max-w-4xl gap-14 sm:grid-cols-3 sm:gap-8">
        {pillars.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.12}>
            <div className="text-center sm:text-left">
              <div
                aria-hidden
                className="mx-auto h-px w-8 sm:mx-0"
                style={{ backgroundColor: "var(--color-gold)" }}
              />
              <p
                className="display mt-6"
                style={{
                  fontSize: "1.4rem",
                  color: "var(--color-paper)",
                }}
              >
                {p.title}
              </p>
              <p
                className="mt-3"
                style={{
                  fontSize: "0.875rem",
                  lineHeight: "1.75",
                  color:
                    "color-mix(in srgb, var(--color-paper) 55%, transparent)",
                }}
              >
                {p.text}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
