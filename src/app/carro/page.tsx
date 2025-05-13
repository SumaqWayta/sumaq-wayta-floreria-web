import { Metadata } from "next";
import CartProductsList from "./_components/cart-products-list/cart-products-list";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Carrito de Compras | Sumaq Wayta",
  description:
    "Consulta los productos que has añadido a tu carrito y finaliza tu compra con Sumaq Wayta. Calidad y frescura en cada flor.",
  keywords: [
    "carrito de compras",
    "flores",
    "comprar flores",
    "Sumaq Wayta",
    "arreglos florales",
  ],
  openGraph: {
    title: "Carrito de Compras | Sumaq Wayta",
    description:
      "Consulta los productos que has añadido a tu carrito y finaliza tu compra con Sumaq Wayta. Calidad y frescura en cada flor.",
    type: "website",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/cart`,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/og-logo.png`,
        width: 1200,
        height: 630,
        alt: "Carrito de compras en Sumaq Wayta",
      },
    ],
  },
};
export default function CarPage() {
  return (
    <div className={styles.page}>
      <h1>Carrito de compras</h1>
      <CartProductsList />
    </div>
  );
}
