"use client";
import styles from "./cart-products-list.module.css";

import { FLOWER_CAR } from "@/types/flower";
import { useEffect, useState } from "react";
import CartProduct from "../cart-product/cart-product";
import PurchaseSummary from "../purchase-summary/purchase-summary";

export default function CartProductsList() {
  const [flowers, setFlowers] = useState<FLOWER_CAR[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("flowers-car") || "[]");
    setFlowers(storedCart);
    setIsLoading(false);
  }, []);

  const flowersTotal = flowers.reduce(
    (total, flower) => total + flower.price * flower.count,
    0
  );

  return (
    <div className={styles.container}>
      {!isLoading && (
        <>
          {flowers.length > 0 && (
            <ul className={styles.listProducts}>
              {flowers.map((flower) => (
                <CartProduct
                  updateFlowers={(values) => setFlowers(values)}
                  key={flower.id}
                  count={flower.count}
                  id={flower.id}
                  price={flower.price}
                  image={flower.image}
                />
              ))}
            </ul>
          )}
          {flowers.length === 0 && (
            <p className={styles.empty}>No hay productos en el carrito</p>
          )}
          <PurchaseSummary total={flowersTotal || 0} />
        </>
      )}
    </div>
  );
}
