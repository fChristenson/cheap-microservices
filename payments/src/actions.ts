import { Response, Request } from "express";
import * as responseSender from '../../shared/payments/responseSender';
import { ListPaymentsResponse } from "../../shared/payments/models";

export const createPayment = (_: Request, res: Response) => {
  return responseSender.createPayment(res);
}

export const listPayments = (_: Request, res: Response) => {
  return responseSender.listPayments(res, ListPaymentsResponse([]));
}
