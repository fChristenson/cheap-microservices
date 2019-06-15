// this is a generated file
import * as models from './models';
import { Response } from "express";

export const listUsers = (res: Response, body: models.IListUsersResponse) => {
 return res.status(200).json(body);
};

export const createUser = (res: Response) => {
 return res.status(201).json();
};

