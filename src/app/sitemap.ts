import {
  getAllBouquets,
  getAllFlowerArrangements,
  getAllFuneralFlowers,
} from "@/lib/data";
import { ROUTES } from "@/routes/routes";
import { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL!;

export default function sitemap(): MetadataRoute.Sitemap {
  const bouquets = getAllBouquets().map((bouquet) => {
    return {
      url: `${BASE_URL}${bouquet.link}`,
      lastModified: new Date(),
    };
  });

  const arrangements = getAllFlowerArrangements().map((arrangement) => {
    return {
      url: `${BASE_URL}${arrangement.link}`,
      lastModified: new Date(),
    };
  });

  const funeral = getAllFuneralFlowers().map((funeral) => {
    return {
      url: `${BASE_URL}${funeral.link}`,
      lastModified: new Date(),
    };
  });

  const sitemaps = ROUTES.map((route) => {
    return {
      url: `${BASE_URL}${route}`,
      lastModified: new Date(),
    };
  });

  return [...sitemaps, ...bouquets, ...arrangements, ...funeral];
}
