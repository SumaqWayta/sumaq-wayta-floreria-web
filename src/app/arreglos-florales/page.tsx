import { ProductFlower } from "@/components";
import { getAllFlowerArrangements } from "@/lib/data";
import { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Arreglos Florales | Ramos y Bouquets para Toda Ocasión",
  description:
    "Descubre nuestra exclusiva colección de arreglos florales, ideales para cualquier ocasión especial. Envío a domicilio disponible.",
  keywords: [
    "arreglos florales",
    "ramos de flores",
    "flores a domicilio",
    "bouquets",
    "flores naturales",
  ],
  openGraph: {
    title: "Arreglos Florales | Ramos y Bouquets para Toda Ocasión",
    description:
      "Descubre nuestra exclusiva colección de arreglos florales, ideales para cualquier ocasión especial. Envío a domicilio disponible.",
    type: "website",
    url: "https://tusitio.com/arreglos-florales",
    images: [
      {
        url: "https://tusitio.com/images/arreglos-florales.jpg",
        width: 1200,
        height: 630,
        alt: "Hermosos arreglos florales para toda ocasión",
      },
    ],
  },
};

export default function FlowerArrangementsPage() {
  const flowers = getAllFlowerArrangements();

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Arreglos Florales</h1>
      <p className={styles.description}>
        Expresión perfecta de belleza, amor y alegría para cualquier ocasión.
      </p>
      <ul className={styles.listFlowers}>
        {flowers.map((item) => (
          <ProductFlower key={item.id} {...item} type="Arreglos Florales" />
        ))}
      </ul>
    </div>
  );
}
