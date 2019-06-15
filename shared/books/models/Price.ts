import { Currency } from "./Currency"

export interface IPrice {
  amount: number;
  currency: Currency;
}

export function Price(amount: number, currency: Currency): IPrice {
  return {
    amount,
    currency
  }
}
