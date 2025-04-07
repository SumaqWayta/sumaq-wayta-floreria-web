import SliderImage from "@/components/slider-images/slider-image";
import {
  getFlowerArrangementById,
  getRandomFlowerArrangements,
} from "@/lib/data";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./page.module.css";

interface Params {
  id: string;
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { id } = params;
  const flower = getFlowerArrangementById(parseInt(id));
  if (!flower) {
    return {
      title: "Ramo no encontrado",
      description: "Este ramo de flores no existe.",
      openGraph: {
        title: "Ramo no encontrado",
        description: "Este ramo de flores no existe.",
        type: "website",
      },
    };
  }

  const title = `${flower.name}`;
  const description = `Explora nuestro hermoso arreglo floral. Perfecto para cualquier ocasión.`;
  const imageUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/images/og-logo.png`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/og-logo.png`,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: flower.name,
        },
      ],
      type: "website",
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/arreglos-florales/${id}`,
    },
  };
}

export default async function FlowerArrangementPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { id: flowerId } = await params;

  if (!flowerId) {
    return notFound();
  }
  const flower = getFlowerArrangementById(parseInt(flowerId));
  const randomFlowers = getRandomFlowerArrangements(parseInt(flowerId));
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
