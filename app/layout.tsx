import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { SmoothScroll } from "@/components/scroll/SmoothScroll";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://flowerpost.eu"),
  title: {
    default: "FLOWERPOST — подаръчна кутия с рози и ръчно изписана картичка",
    template: "%s — FLOWERPOST",
  },
  description:
    "Премиум подаръчна кутия със свежи рози и ръчно изписано послание. Доставка в София и цялата страна.",
  openGraph: {
    type: "website",
    locale: "bg_BG",
    siteName: "FLOWERPOST",
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#131e15",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bg" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
