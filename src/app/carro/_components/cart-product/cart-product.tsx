import CloseSVG from "@/assets/icons/close";
import { useFlowerCartStore } from "@/store/use-store-flowers";
import Image from "next/image";
import { ChangeEvent } from "react";
import styles from "./cart-product.module.css";

interface CartProductProps {
  id: string;
  price: number;
  count: number;
  image: string;
}

export default function CartProduct({
  id,
  price,
  count,
  image,
}: CartProductProps) {
  const { setFlower, removeFlower } = useFlowerCartStore();

  const handleCountChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newCount = Number(event.target.value);
    setFlower({
      id,
      price,
      count: newCount,
      image,
    });
  };
  const totalPrice = (count * price).toFixed(2);

  const handleRemove = () => {
    removeFlower(id);
  };

  return (
    <li className={styles.container}>
      <header className={styles.header}>
        <Image
          src={image}
          alt={`Imagen de ${id}`}
          width={60}
          height={60}
          className={styles.image}
        />
        <div className={styles.details}>
          <h3 className={styles.title}>{id}</h3>
          <p className={styles.unitPrice}>S/ {price} u</p>
        </div>
      </header>

      <div className={styles.content}>
        <div className={styles.selectWrapper}>
          <label htmlFor={`count-${id}`} className={styles.label}>
            Cantidad
          </label>
          <select
            id={`count-${id}`}
            value={count}
            onChange={handleCountChange}
            className={styles.select}
          >
            {Array.from({ length: 20 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>

        <p className={styles.totalPrice}>
          <span>Precio total:</span>
          <span>S/ {totalPrice}</span>
        </p>
      </div>
      <button
        className={styles.removeButton}
        type="button"
        aria-label="quitar producto"
        onClick={handleRemove}
      >
        <CloseSVG fill="var(--white)" /> <span>Quitar</span>
      </button>
    </li>
  );
}
