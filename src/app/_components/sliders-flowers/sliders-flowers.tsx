import { Badge } from "@/app/arreglos-funebres/_components";
import {
  getRandomBouquets,
  getRandomFlowerArrangements,
  getRandomFuneralFlowersFromAll,
} from "@/lib/data";
import Link from "next/link";
import { SliderFlowers } from "../slider-flowers/slider-flowers";
import styles from "./sliders-flowers.module.css";

export default function SlidersFlowers() {
  const funeralFlowers = getRandomFuneralFlowersFromAll(5);
  const flowerArrangements = getRandomFlowerArrangements(0, 5);
  const bouquets = getRandomBouquets(0, 5);

  return (
    <div className={styles.flowers}>
      <div className={styles.wrapperFlower}>
        <div>
          <Link href={"/arreglos-funebres"}>
            <Badge>Arreglos Fúnebres</Badge>
          </Link>
        </div>
        <div className={styles.wrapperShowAll}>
          <span />
          <Link href={"/arreglos-funebres"}>Para Más</Link>
        </div>
        <SliderFlowers
          data={funeralFlowers}
          redirect="/arreglos-funebres/lagrimas"
        />
      </div>
      <div className={styles.wrapperFlower}>
        <div>
          <Link href={"/arreglos-florales"}>
            <Badge>Arreglos Florales</Badge>
          </Link>
        </div>
        <div className={styles.wrapperShowAll}>
          <span />
          <Link href={"/arreglos-florales"}>Para Más</Link>
        </div>
        <SliderFlowers
          data={flowerArrangements}
          redirect="/arreglos-florales"
        />
      </div>
      <div className={styles.wrapperFlower}>
        <div>
          <Link href={"/ramos"}>
            <Badge>Ramos</Badge>
          </Link>
        </div>
        <div className={styles.wrapperShowAll}>
          <span />
          <Link href={"/ramos"}>Para Más</Link>
        </div>
        <SliderFlowers data={bouquets} redirect="/ramos" />
      </div>
    </div>
  );
}
