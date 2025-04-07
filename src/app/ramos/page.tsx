import { ProductFlower } from "@/components";
import { getAllBouquets } from "@/lib/data";
import { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Ramos de Flores | Bouquets para Cada Ocasión",
  description:
    "Explora nuestra colección de ramos de flores perfectos para cualquier ocasión especial. Envío a domicilio disponible.",
  keywords: ["ramos de flores", "bouquets", "flores a domicilio"],
  openGraph: {
    title: "Ramos de Flores | Bouquets para Cada Ocasión",
    description:
      "Explora nuestra colección de ramos de flores perfectos para cualquier ocasión especial. Envío a domicilio disponible.",
    type: "website",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/ramos`,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/og-logo.png`,
        width: 1200,
        height: 630,
        alt: "Hermosos ramos de flores para toda ocasión",
      },
    ],
  },
};

export default function BouquetsPage() {
  const flowers = getAllBouquets();

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Ramos</h1>
      <p className={styles.description}>
        Detalles florales que transmiten emociones y realzan cada momento
        especial.
      </p>
      <ul className={styles.listFlowers}>
        {flowers.map((item) => (
          <ProductFlower key={item.id} {...item} type="Ramos" />
        ))}
      </ul>
    </div>
  );
}
