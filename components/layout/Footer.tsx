import Image from "next/image";
import Link from "next/link";

/**
 * Footer
 *
 * ВНИМАНИЕ — правен риск, не козметичен пропуск:
 * Българското законодателство за електронна търговия изисква
 * видима идентификация на търговеца (ЕИК, седалище, имейл).
 *
 * Старият сайт (Vol.1) показваше "[Телефон]" на живо — плейсхолдър
 * вместо реални данни. НЕ повтаряме тази грешка тук: полето долу
 * остава изрично празно с TODO, вместо измислено ЕИК.
 *
 * TODO(преди производствен deploy): попълни с реални данни
 * на търговеца — ЕИК, седалище, имейл за оплаквания.
 */
export function Footer() {
  const links = [
    { label: "Начало", href: "/" },
    { label: "Поръчай", href: "/poruchaj" },
    { label: "За нас", href: "/za-nas" },
    { label: "Контакти", href: "/kontakti" },
  ];

  return (
    <footer
      className="relative px-6 py-16"
      style={{
        backgroundColor: "var(--color-ground)",
        borderTop:
          "1px solid color-mix(in srgb, var(--color-paper) 8%, transparent)",
      }}
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <div className="opacity-80">
          <Image
            src="/brand/logo-mark.png"
            alt="FLOWERPOST"
            width={140}
            height={110}
            style={{ width: "110px", height: "auto" }}
          />
        </div>

        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 sm:justify-end">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                fontSize: "0.8rem",
                letterSpacing: "0.04em",
                color:
                  "color-mix(in srgb, var(--color-paper) 60%, transparent)",
                textDecoration: "none",
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>

      <p
        className="mx-auto mt-14 max-w-5xl text-center sm:text-left"
        style={{
          fontSize: "0.7rem",
          letterSpacing: "0.02em",
          color: "color-mix(in srgb, var(--color-paper) 22%, transparent)",
        }}
      >
        © {new Date().getFullYear()} FLOWERPOST
        {/* TODO: ЕИК, седалище — виж коментара горе */}
      </p>
    </footer>
  );
}
