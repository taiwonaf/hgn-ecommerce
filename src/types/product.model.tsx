import { StaticImageData } from "next/image";

export interface IProduct {
    images: StaticImageData[];
    name: string;
    price: string;
    description: string;
    id: string;
}