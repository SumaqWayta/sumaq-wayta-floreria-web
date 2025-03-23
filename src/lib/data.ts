import FUNERAL_FLOWERS from "@/database/funeral-flowers.json";
import TYPES from "@/database/types.json";
import { FLOWER_TYPE, FuneralFlowerTypes } from "@/types/flower";

export function getAllFuneralFlowers() {
  return Object.values(FUNERAL_FLOWERS).flat();
}

export function getFuneralFlowerByType(id: number) {
  const type: FLOWER_TYPE = TYPES.find((type) => type.id === id)!;
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
