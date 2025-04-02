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
  content: string[];
  edition?: string;
}
