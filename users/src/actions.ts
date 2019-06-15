import { Response, Request } from "express";
import * as responseSender from '../../shared/users/responseSender';
import { ListUsersResponse } from "../../shared/users/models";

export const createUser = (_: Request, res: Response) => {
  return responseSender.createUser(res);
}

export const listUsers = (_: Request, res: Response) => {
  return responseSender.listUsers(res, ListUsersResponse([]));
}
