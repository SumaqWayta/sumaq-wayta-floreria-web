import CarShoppingSVG from "@/assets/icons/car-shopping";
import CreditCard from "@/assets/icons/credit-card";
import PictureSVG from "@/assets/icons/picture";
import StarShineSVG from "@/assets/icons/star-shine";
import VerifiedSVG from "@/assets/icons/verified";
import { AddShopFlower } from "@/components";
import SliderImage from "@/components/slider-images/slider-image";
import { getBouquetById, getRandomBouquets } from "@/lib/data";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import styles from "./page.module.css";

interface Params {
  id: string;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { id } = await params;
  const bouquet = getBouquetById(parseInt(id));
  if (!bouquet) {
    return {
      title: "Ramo no encontrado",
      description: "Este ramo no existe.",
      openGraph: {
        title: "Ramo no encontrado",
        description: "Este ramo no existe.",
        type: "website",
      },
    };
  }

  const title = `${bouquet.name}`;
  const description = `Descubre nuestro exquisito ramo de flores, ideal para cualquier ocasión.`;
  const imageUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/images/og-logo.png`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/ramos/${id}`,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: bouquet.name,
        },
      ],
      type: "website",
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/ramos/${id}`,
    },
  };
}
export default async function BouquetPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { id: flowerId } = await params;

  if (!flowerId) {
    return notFound();
  }
  const flower = getBouquetById(parseInt(flowerId));
  const randomFlowers = getRandomBouquets(parseInt(flowerId));
  if (!flower) {
    return notFound();
  }

  return (
    <div className={styles.page}>
      <h1>
        {flower.name} - {flower.id}
      </h1>
      <Image src={flower.url} alt={flower.name} width={500} height={500} />
      <div className={styles.description}>
        <div className={styles.content}>
          <h2>Contenido</h2>
          <ul className={styles.listContent}>
            {flower.content.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
        </div>
        <div className={styles.wrapperBuy}>
          <AddShopFlower flower={flower} />
          <div className={styles.wrapperPayment}>
            <label className={styles.labelPayment}>Método de pago</label>
            <Image
              src="/images/yape.webp"
              alt="yape"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
      <div className={styles.descriptionService}>
        <h2>Descripción del servicio</h2>
        <ul className={styles.listServices}>
          <li>
            <PictureSVG fill="var(--main-color)" /> Incluye tu dedicatoria
            personalizada y tarjeta de cuidados
          </li>
          <li>
            <StarShineSVG fill="var(--main-color)" /> Producto exclusivo de
            SumaqWayta
          </li>
          <li>
            <CarShoppingSVG fill="var(--main-color)" />
            Delivery a Lima y Callao
          </li>
          <li>
            <CreditCard fill="var(--main-color)" />
            Pago con tarjeta, transferencia, Yape o Plin
          </li>
          <li>
            <VerifiedSVG fill="var(--main-color)" />
            Calidad 100% garantizada
          </li>
        </ul>
      </div>
      <div className={styles.wrapperSlider}>
        <SliderImage data={randomFlowers} />
      </div>
    </div>
  );
}
