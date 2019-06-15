// this is a generated file
import axios, { AxiosPromise } from 'axios';
import * as models from './models';

export const listUsers = (): AxiosPromise => {
 return axios.get("/api/v1/users");
};

export const createUser = (requestBody: models.ICreateUserRequest): AxiosPromise => {
 return axios.post("/api/v1/users", requestBody);
};
