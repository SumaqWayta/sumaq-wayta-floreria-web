import { ProductFlower } from "@/components";
import { getFuneralFlowerByType } from "@/lib/data";
import { Metadata } from "next";
import Link from "next/link";
import { Badge } from "./_components";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Arreglos Fúnebres | Flores para Ocasiones Especiales",
  description:
    "Encuentra los mejores arreglos fúnebres para expresar condolencias y solidaridad en momentos difíciles.",
  keywords: ["arreglos fúnebres", "flores", "coronas", "condolencias"],
  openGraph: {
    title: "Arreglos Fúnebres | Flores para Ocasiones Especiales",
    description:
      "Encuentra los mejores arreglos fúnebres para expresar condolencias y solidaridad en momentos difíciles.",
    type: "website",
    url: "https://tusitio.com/arreglos-funebres",
  },
};

interface ArreglosFunebresProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function ArreglosFunebres({
  searchParams,
}: ArreglosFunebresProps) {
  const selectedType = Number((await searchParams).tipo) || 1;
  const flowers = getFuneralFlowerByType(selectedType);

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Arreglos Fúnebres</h1>
      <p className={styles.description}>
        Representan un símbolo de solidaridad con quienes se encuentran en duelo
      </p>
      <div className={styles.wrapperBadges}>
        <Link href="/arreglos-funebres?tipo=1">
          <Badge active={1 == selectedType}>Lágrima</Badge>
        </Link>
        <Link href="/arreglos-funebres?tipo=2">
          <Badge active={2 == selectedType}>Trípode</Badge>
        </Link>
        <Link href="/arreglos-funebres?tipo=3">
          <Badge active={3 == selectedType}>Picaron</Badge>
        </Link>
        <Link href="/arreglos-funebres?tipo=4">
          <Badge active={4 == selectedType}>Corona</Badge>
        </Link>
      </div>
      <ul className={styles.listFlowers}>
        {flowers.map((item) => (
          <ProductFlower key={item.id} {...item} type="Arreglos Fúnebres" />
        ))}
      </ul>
    </div>
  );
}
