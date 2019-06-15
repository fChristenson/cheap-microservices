// This is a generated file
import axios, { AxiosPromise } from 'axios';
import * as models from './models';

export const listPayments = (): AxiosPromise => {
  return axios.get("/api/v1/payments");
};
export const createPayment = (requestBody: models.ICreatePaymentRequest): AxiosPromise => {
  return axios.post("/api/v1/payments", requestBody);
};
