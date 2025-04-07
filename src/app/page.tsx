import Whatsapp from "@/assets/icons/whatsapp";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Slider } from "./_components";
import Divider from "./_components/divider/divider";
import PersonalizedFlowerCarousel from "./_components/personalized-flower-carousel/personalized-flower-carousel";
import SlidersFlowers from "./_components/sliders-flowers/sliders-flowers";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Sumaq Wayta | Paz, Amor y Consuelo",
  description:
    "Bienvenido a Sumaq Wayta, donde encontrarás flores personalizadas y detalles únicos para cada ocasión. Paz, amor y consuelo en cada flor.",
  openGraph: {
    siteName: "Sumaq Wayta",
    title: "Sumaq Wayta | Paz, Amor y Consuelo",
    description:
      "Encuentra las mejores flores personalizadas y regalos únicos para cualquier ocasión. Paz, amor y consuelo en cada creación.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/og-logo.png`,
        width: 1200,
        height: 630,
        alt: "Imagen de Sumaq Wayta",
      },
    ],
  },
  keywords: [
    "floreria",
    "sumaq wayta",
    "flores personalizadas",
    "regalos personalizados",
    "ramos",
    "arreglos florales",
    "arreglos fúnebres",
  ],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}`,
  },
};
export default function Home() {
  return (
    <div className={styles.page}>
      <Slider />
      <h2>Sumaq Wayta</h2>
      <h1>Paz, Amor y Consuelo</h1>
      <SlidersFlowers />
      <div className={styles.sliderFlowers}>
        <h2>Personalizados</h2>
        <PersonalizedFlowerCarousel />
      </div>
      <Divider />
      <div className={styles.containerFlowersDetails}>
        <h2>Encuentra el detalle Perfecto</h2>
        <div className={styles.listDetailsFlowers}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <Image
        src="/images/image-footer.svg"
        width={500}
        height={500}
        alt="Imagen de fondo"
        className={styles.imageFooter}
      />
      <Link href="/contacto" className={styles.whatsappButton}>
        <Whatsapp width={60} height={60} />
      </Link>
    </div>
  );
}
