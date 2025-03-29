import Image from "next/image";
import Link from "next/link";
import styles from "./product-flower.module.css";

interface ProductFlowerProps {
  id: number;
  url: string;
  price: string;
  type: string;
  name?: string;
}

export function ProductFlower({
  id,
  name,
  url,
  price,
  type,
}: ProductFlowerProps) {
  return (
    <li className={styles.wrapper}>
      <Link href={"/arreglos-funebres"}>
        <Image src={url} alt={`image ${name} ${id}`} width={200} height={200} />
        <div className={styles.description}>
          <h3>
            # {name} {id}
          </h3>
          <p>S/ {price}</p>
          <p>{type}</p>
        </div>
      </Link>
    </li>
  );
}
