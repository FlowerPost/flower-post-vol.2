import { Hero } from "@/components/hero/Hero";
import { StoryScene } from "@/components/story/StoryScene";
import { ProductScene } from "@/components/product/ProductScene";
import { ConfiguratorTeaser } from "@/components/configurator/ConfiguratorTeaser";
import { TrustScene } from "@/components/trust/TrustScene";
import { Footer } from "@/components/layout/Footer";

/**
 * Homepage — единна история, не стек от секции.
 *
 * DESIGN_BIBLE: „Страницата никога не бива да се чувства
 * разделена на секции. Тя трябва да се усеща като една
 * непрекъсната история."
 *
 * Емоционална последователност (PROJECT_VISION):
 *   Hero         → Curiosity, Wonder
 *   Story        → Discovery
 *   Product      → Connection, Trust
 *   Configurator → Personalization, Commitment
 *   Trust        → затвърждава доверието преди покупка
 */
export default function Home() {
  return (
    <main>
      <Hero />
      <StoryScene />
      <ProductScene />
      <ConfiguratorTeaser />
      <TrustScene />
      <Footer />
    </main>
  );
}
