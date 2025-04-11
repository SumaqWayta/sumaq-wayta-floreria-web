import SliderImage from "@/components/slider-images/slider-image";
import { socialNetworks } from "@/data/social-networks";
import { getBouquetById, getRandomBouquets } from "@/lib/data";
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

  const messageWhatsapp = `¡Hola! Me interesa el ${flower.name.toLocaleLowerCase()} - ${
    flower.id
  } de S/ ${flower.price}. ¿Está disponible?`;
  const urlWhatsapp = `${socialNetworks.whatsapp}?text=${messageWhatsapp}`;

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
          <Link href={urlWhatsapp} target="_blank">
            COMPRAR
          </Link>
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
      <div className={styles.wrapperSlider}>
        <SliderImage data={randomFlowers} />
      </div>
    </div>
  );
}
