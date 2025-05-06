"use client";
import styles from "./cart-products-list.module.css";

import { useFlowerCartStore } from "@/store/use-store-flowers";
import CartProduct from "../cart-product/cart-product";
import PurchaseForm from "../purchase-form/purchase-form";

export default function CartProductsList() {
  const { flowersCar } = useFlowerCartStore();

  const flowersTotal = flowersCar?.reduce(
    (total, flower) => total + flower.price * flower.count,
    0
  );

  return (
    <div className={styles.container}>
      {flowersCar?.length > 0 && (
        <>
          <ul className={styles.listProducts}>
            {flowersCar.map((flower) => (
              <CartProduct
                key={flower.id}
                count={flower.count}
                id={flower.id}
                price={flower.price}
                image={flower.image}
              />
            ))}
          </ul>
          <PurchaseForm total={flowersTotal || 0} flowers={flowersCar} />
        </>
      )}
      {flowersCar?.length === 0 && (
        <p className={styles.empty}>No hay productos en el carrito</p>
      )}
    </div>
  );
}
