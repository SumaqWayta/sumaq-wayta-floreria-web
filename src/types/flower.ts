export type FuneralFlowerTypes =
  | "lagrimas"
  | "tripodes"
  | "picarones"
  | "coronas";

export interface FLOWER_TYPE {
  id: number;
  name: string;
}

export interface FLOWER {
  id: number;
  name: string;
  url: string;
  price: string;
  link: string;
  content: string[];
  edition?: string;
}

export interface FLOWER_CAR {
  id: string;
  price: number;
  count: number;
  image: string;
}
