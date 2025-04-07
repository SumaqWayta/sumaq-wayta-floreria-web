import SliderImage from "@/components/slider-images/slider-image";
import { getFuneralFlowerByName, getRandomFuneralFlowers } from "@/lib/data";
import { FuneralFlowerTypes } from "@/types/flower";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./page.module.css";

interface Params {
  id: string;
  type: FuneralFlowerTypes;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { id: flowerId, type: flowerType } = await params;
  const flower = getFuneralFlowerByName(flowerType, parseInt(flowerId));

  if (!flower) {
    return {
      title: "Flor no encontrada | Flores Funerarias",
      description: "Lo sentimos, no encontramos esta flor funeraria.",
      openGraph: {
        title: "Flor no encontrada | Flores Funerarias",
        description: "Lo sentimos, no encontramos esta flor funeraria.",
        type: "website",
      },
    };
  }

  const title = `${flower.name} | Flores Funerarias`;
  const description = `Compra un hermoso arreglo floral funerario. Envío rápido y seguro para tus seres queridos.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/arreglos-funebres/${flowerType}/${flowerId}`,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/og-logo.png`,
          width: 1200,
          height: 630,
          alt: flower.name,
        },
      ],
      type: "website",
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/arreglos-funebres/${flowerType}/${flowerId}`,
    },
  };
}

export default async function FuneralFlowerPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { id: flowerId, type: flowerType } = await params;
  if (!flowerId || !flowerType) {
    return notFound();
  }
  const flower = getFuneralFlowerByName(flowerType, parseInt(flowerId));
  const randomFlowers = getRandomFuneralFlowers(flowerType, parseInt(flowerId));

  if (!flower || !randomFlowers) {
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
          <button>COMPRAR</button>
          <div className={styles.wrapperPayment}>
            <label className={styles.labelPayment}>Método de pago</label>
            <Link href="https://www.yape.com.co/">
              <Image
                src="/images/yape.webp"
                alt="yape"
                width={100}
                height={100}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.wrapperSlider}>
        <SliderImage data={randomFlowers} />
      </div>
    </div>
  );
}
