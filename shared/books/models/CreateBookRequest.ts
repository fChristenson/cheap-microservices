import { IPrice } from "./Price";

export interface ICreateBookRequest {
  name: string;
  price: IPrice;
}

export function CreateBookRequest(name: string, price: IPrice): ICreateBookRequest {
  return {
    name,
    price
  };
}
