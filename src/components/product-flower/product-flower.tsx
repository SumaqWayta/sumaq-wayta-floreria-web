import Image from "next/image";
import Link from "next/link";
import styles from "./product-flower.module.css";

interface ProductFlowerProps {
  id: number;
  url: string;
  price: string;
  type: string;
  link: string;
  name?: string;
}

export function ProductFlower({
  id,
  name,
  url,
  price,
  type,
  link,
}: ProductFlowerProps) {
  return (
    <li className={styles.wrapper}>
      <Link href={link}>
        <Image
          key={url}
          src={url}
          alt={`image ${name} ${id}`}
          width={200}
          height={200}
          loading="lazy"
        />
        <div className={styles.description}>
          <h3>{`${name} # ${String(id).padStart(3, "0")}`}</h3>
          <p>S/ {price}</p>
          <p>{type}</p>
        </div>
      </Link>
    </li>
  );
}
