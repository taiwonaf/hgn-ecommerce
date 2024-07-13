import { ICloudProduct } from "@/redux/services/store/types";

export interface ICart {
  amount: number;
  total: number;
  cartItems: ICartProduct[];
}

export interface ICartProduct {
  data: ICloudProduct;
  quantity: number;
}
