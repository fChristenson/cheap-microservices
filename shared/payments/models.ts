// This is a generated file

// Interfaces
export interface IListPaymentsResponse {
  payments: IPayment[];
}

export interface ICreatePaymentRequest {
  bookId: number;
  quantity: number;
}

export interface IOrder {
  bookId: number;
  quantity: number;
  cost: string;
}

export interface IPayment {
  id: string;
  order: IOrder;
}

export interface ICost {
  amount: number;
  currency: Currency;
}

// Models
export const ListPaymentsResponse = (
  payments: IPayment[],
): IListPaymentsResponse => {
  return {
  payments,
  }
};

export const CreatePaymentRequest = (
  bookId: number,
  quantity: number,
): ICreatePaymentRequest => {
  return {
  bookId,
  quantity,
  }
};

export const Order = (
  bookId: number,
  quantity: number,
  cost: string,
): IOrder => {
  return {
  bookId,
  quantity,
  cost,
  }
};

export const Payment = (
  id: string,
  order: IOrder,
): IPayment => {
  return {
  id,
  order,
  }
};

export const Cost = (
  amount: number,
  currency: Currency,
): ICost => {
  return {
  amount,
  currency,
  }
};


// Enums
export enum Currency {
  SEK,
  EUR,
}

