import { IPrice } from "./Price"

export interface IBook {
  id: string;
  name: string;
  price: IPrice;
}

export function Book(id: string, name: string, price: IPrice): IBook {
  return {
    id,
    name,
    price
  };
}
