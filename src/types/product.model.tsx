import { StaticImageData } from "next/image";

export interface IProduct {
  images: StaticImageData[];
  name: string;
  price: number;
  description: string;
  id: string;
}
