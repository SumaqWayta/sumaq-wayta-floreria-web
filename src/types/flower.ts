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
  url: string;
}

export interface FormCar {
  name: string;
  email: string;
  phone: string;
  city: string;
  address: string;
  reference: string;
  paymentMethod: string;
  additionalInformation: string;
}

export interface FLOWER_REQUEST {
  id: string;
  url: string;
  cantidad: number;
  precio: number;
}

export interface PayloadFormCar extends FormCar {
  token: string | null;
  flowers: FLOWER_REQUEST[];
  total: number;
}
