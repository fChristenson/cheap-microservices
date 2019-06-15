// This is a generated file
import * as models from './models';
import { Response } from "express";

export const listPayments = (res: Response, body: models.IListPaymentsResponse) => {
  return res.status(200).json(body);
};

export const createPayment = (res: Response) => {
  return res.status(201).json();
};

