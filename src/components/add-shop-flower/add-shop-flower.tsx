"use client";

import { FLOWER, FLOWER_CAR } from "@/types/flower";
import { useEffect, useState } from "react";
import styles from "./add-shop-flower.module.css";

interface AddShopFlowerProps {
  flower: FLOWER;
}

export function AddShopFlower({ flower }: AddShopFlowerProps) {
  const MAX_ITEMS = 20;

  const [count, setCount] = useState(0);

  useEffect(() => {
    const flowersCar = localStorage.getItem("flowers-car") || "[]";
    const formatFlowersCar: FLOWER_CAR[] = JSON.parse(flowersCar);
    const currentFlower = formatFlowersCar.find(
      (car) => car.id === `${flower.name}-${flower.id}`
    );
    if (currentFlower) {
      setCount(currentFlower.count);
    }
  }, [flower.id, flower.name]);

  const addCount = () => {
    if (count >= 20) return;
    setCount((prev) => prev + 1);
  };

  const restCount = () => {
    if (count <= 0) return;
    setCount((prev) => prev - 1);
  };

  const addShop = () => {
    const flowersCar = localStorage.getItem("flowers-car") || "[]";
    const formatFlowersCar: FLOWER_CAR[] = JSON.parse(flowersCar);
    const newItemId = `${flower.name}-${flower.id}`;

    const existingIndex = formatFlowersCar.findIndex(
      (item) => item.id === newItemId
    );

    let newFlowersCar;

    if (existingIndex !== -1) {
      formatFlowersCar[existingIndex].count = count;
      newFlowersCar = [...formatFlowersCar];
    } else {
      newFlowersCar = [
        ...formatFlowersCar,
        {
          id: newItemId,
          price: flower.price,
          count,
          image: flower.url,
        },
      ];
    }

    localStorage.setItem("flowers-car", JSON.stringify(newFlowersCar));
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapperCount}>
          <button onClick={restCount}>-</button>
          <span>{count}</span>
          <button onClick={addCount}>+</button>
        </div>
        <p>Máximo {MAX_ITEMS}</p>
        <button onClick={addShop}>Agregar carrito</button>
      </div>
    </>
  );
}
