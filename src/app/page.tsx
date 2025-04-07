import Whatsapp from "@/assets/icons/whatsapp";
import Image from "next/image";
import Link from "next/link";
import { Slider } from "./_components";
import Divider from "./_components/divider/divider";
import PersonalizedFlowerCarousel from "./_components/personalized-flower-carousel/personalized-flower-carousel";
import SlidersFlowers from "./_components/sliders-flowers/sliders-flowers";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Slider />
      <h2>Sumaq Wayta</h2>
      <h1>Paz, Amor y Consuelo</h1>
      <SlidersFlowers />
      <div className={styles.sliderFlowers}>
        <h2>Personalizados</h2>
        <PersonalizedFlowerCarousel />
      </div>
      <Divider />
      <div className={styles.containerFlowersDetails}>
        <h2>Encuentra el detalle Perfecto</h2>
        <div className={styles.listDetailsFlowers}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <Image
        src="/images/image-footer.svg"
        width={500}
        height={500}
        alt="Imagen de fondo"
        className={styles.imageFooter}
      />
      <Link href="/contacto" className={styles.whatsappButton}>
        <Whatsapp width={60} height={60} />
      </Link>
    </div>
  );
}
