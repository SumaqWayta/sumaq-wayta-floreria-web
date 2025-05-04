"use client";

import { useFlowerCartStore } from "@/store/use-store-flowers";
import { FLOWER } from "@/types/flower";
import { useEffect, useState } from "react";
import styles from "./add-shop-flower.module.css";

interface AddShopFlowerProps {
  flower: FLOWER;
}

export function AddShopFlower({ flower }: AddShopFlowerProps) {
  const MAX_ITEMS = 20;
  const itemId = `${flower.name}-${flower.id}`;
  const { flowersCar, setFlower, removeFlower } = useFlowerCartStore();

  const flowerInCart = flowersCar.find((item) => item.id === itemId);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (flowerInCart) {
      setCount(flowerInCart.count);
    }
  }, [flowerInCart]);

  const addCount = () => {
    if (count >= MAX_ITEMS) return;
    setCount((prev) => prev + 1);
  };

  const restCount = () => {
    if (count <= 0) return;
    setCount((prev) => prev - 1);
  };

  const addShop = () => {
    if (count === 0) {
      removeFlower(itemId);
      return;
    }

    setFlower({
      id: itemId,
      price: parseFloat(flower.price),
      count,
      image: flower.url,
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapperCount}>
        <button onClick={restCount}>-</button>
        <span>{count}</span>
        <button onClick={addCount}>+</button>
      </div>
      <p>Máximo {MAX_ITEMS}</p>
      <button onClick={addShop}>Agregar carrito</button>
    </div>
  );
}
