import BOUQUETS from "@/database/bouquets.json";
import FLOWER_ARRANGEMENTS from "@/database/flower-arrangements.json";
import FUNERAL_FLOWERS from "@/database/funeral-flowers.json";
import TYPES from "@/database/types.json";
import { FLOWER_TYPE, FuneralFlowerTypes } from "@/types/flower";

export function getAllFuneralFlowers() {
  return Object.values(FUNERAL_FLOWERS).flat();
}

export function getFuneralFlowerByType(id: number) {
  const typeId = id >= 1 && id <= 4 ? id : 1;
  const type: FLOWER_TYPE = TYPES.find((type) => type.id === typeId)!;
  const { name } = type;
  return FUNERAL_FLOWERS[name.toLocaleLowerCase() as FuneralFlowerTypes];
}

export function getTypesFuneralFlowers() {
  return TYPES;
}

export function getFuneralFlowerById(typeId: number, flowerId: number) {
  const flowers = getFuneralFlowerByType(typeId);
  const flower = flowers.find((flower) => flower.id === flowerId);
  return flower;
}

export function getRandomFuneralFlower(
  typeId: number,
  excludedId: number,
  count: number = 6
) {
  const flowers = getFuneralFlowerByType(typeId);
  return flowers
    .filter((flower) => flower.id !== excludedId)
    .sort(() => Math.random() - 0.5)
    .slice(0, count);
}

export function getAllBouquets() {
  return BOUQUETS;
}

export function getRandomBouquets(excludedId: number, count: number = 6) {
  return BOUQUETS.filter((flower) => flower.id !== excludedId)
    .sort(() => Math.random() - 0.5)
    .slice(0, count);
}

export function getBouquetById(id: number) {
  return BOUQUETS.find((bouquet) => bouquet.id === id) || null;
}

export function getAllFlowerArrangements() {
  return FLOWER_ARRANGEMENTS;
}

export function getRandomFlowerArrangements(
  excludedId: number,
  count: number = 6
) {
  return FLOWER_ARRANGEMENTS.filter((flower) => flower.id !== excludedId)
    .sort(() => Math.random() - 0.5)
    .slice(0, count);
}

export function getFlowerArrangementById(id: number) {
  return (
    FLOWER_ARRANGEMENTS.find((arrangement) => arrangement.id === id) || null
  );
}
