import CartProductsList from "./_components/cart-products-list/cart-products-list";
import styles from "./page.module.css";
export default function CarPage() {
  return (
    <div className={styles.page}>
      <h1>Carrito de compras</h1>
      <CartProductsList />
    </div>
  );
}
