import { IPrice } from "./Price";

export interface IUpdateBookRequest {
  name: string;
  price: IPrice;
}

export function UpdateBookRequest(name: string, price: IPrice): IUpdateBookRequest {
  return {
    name,
    price
  };
}
