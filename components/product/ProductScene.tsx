import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

/**
 * ProductScene — „Кутията"
 *
 * 3D_BIBLE: „Всеки кадър трябва да е достатъчно красив,
 * за да стане продуктова реклама."
 *
 * Тази снимка НЕ отговаря на този стандарт — заснета е на
 * плочки, с директна горна светлина. Затова е третирана тук
 * с тъмен виньет, за да легне на палитрата, вместо да се
 * представя като финална кампанийна фотография.
 *
 * TODO(продукция): замени с истинска студийна снимка —
 * мека странична светлина, тъмен фон, макро кадри на
 * панделката и логото. Виж 3D_BIBLE → „Lighting Setup".
 */
export function ProductScene() {
  return (
    <section
      className="relative overflow-hidden px-6 py-28"
      style={{ backgroundColor: "var(--color-ground-mid)" }}
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-14 md:flex-row md:items-center">
        {/* Снимката */}
        <Reveal className="w-full md:w-[55%]">
          <div
            className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden"
            style={{
              borderRadius: "2px",
              boxShadow: "0 40px 80px -20px rgba(0,0,0,0.55)",
            }}
          >
            <Image
              src="/product/box-reference.jpg"
              alt="Кутия FLOWERPOST, вързана с панделка от сатен"
              fill
              sizes="(max-width: 768px) 90vw, 420px"
              className="object-cover"
              style={{
                filter: "brightness(0.94) saturate(0.92)",
              }}
              priority={false}
            />
            {/* Виньет — притъмнява ръбовете, за да легне на тъмния фон */}
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(19,30,21,0.35) 0%, transparent 25%, transparent 75%, rgba(19,30,21,0.5) 100%)",
              }}
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                boxShadow: "inset 0 0 90px 20px rgba(19,30,21,0.45)",
              }}
            />
          </div>
        </Reveal>

        {/* Текстът */}
        <div className="w-full text-center md:w-[45%] md:text-left">
          <Reveal>
            <span
              className="eyebrow"
              style={{ color: "var(--color-gold-warm)" }}
            >
              Материали
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <p
              className="display mt-5"
              style={{
                fontSize: "clamp(1.6rem, 3.6vw, 2.4rem)",
                color: "var(--color-paper)",
              }}
            >
              Панделка от сатен.
              <br />
              Капак с тегло.
              <br />
              Име, изписано на ръка.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <p
              className="mt-6"
              style={{
                fontSize: "0.9rem",
                lineHeight: "1.8",
                color: "color-mix(in srgb, var(--color-paper) 55%, transparent)",
                maxWidth: "32rem",
              }}
            >
              Розите се подреждат на ръка, една до друга, в деня на
              изпращане. Кутията не се отваря преди адресата.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
