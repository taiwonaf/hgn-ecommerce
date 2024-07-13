import { StaticImageData } from "next/image";

export interface ICart {
  amount: number;
  total: number;
  cartItems: ICartProduct[];
}

export interface ICartProduct {
  images: StaticImageData[];
  name: string;
  price: number;
  description: string;
  id: string;
  quantity: number;
}
