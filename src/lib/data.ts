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

export function getTypesFlowers() {
  return TYPES;
}

export function getFlowerById(typeId: number, flowerId: number) {
  const flowers = getFuneralFlowerByType(typeId);
  const flower = flowers.find((flower) => flower.id === flowerId);
  return flower;
}

export function getAllBouquets() {
  return BOUQUETS;
}

export function getBouquetById(id: number) {
  return BOUQUETS.find((bouquet) => bouquet.id === id) || null;
}

export function getAllFlowerArrangements() {
  return FLOWER_ARRANGEMENTS;
}

export function getFlowerArrangementById(id: number) {
  return (
    FLOWER_ARRANGEMENTS.find((arrangement) => arrangement.id === id) || null
  );
}
