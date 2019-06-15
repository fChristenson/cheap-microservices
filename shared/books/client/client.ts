import { IBook } from "../models/Book";
import axios, { AxiosPromise } from "axios";
import routes from "../server/routes";
import { ICreateBookRequest } from "../models/CreateBookRequest";
import { IUpdateBookRequest } from "../models/UpdateBookRequest";

export function getAllBooks(): AxiosPromise<IBook[]> {
  return axios.get(routes.getAllBooks.build());
}

export function createBook(request: ICreateBookRequest): AxiosPromise<IBook> {
  return axios.post(routes.createBook.build(), request);
}

export function updateBook(id: string, request: IUpdateBookRequest): AxiosPromise<IBook> {
  return axios.put(routes.updateBook.build(id), request);
}

export function deleteBook(id: string): AxiosPromise<IBook> {
  return axios.delete(routes.deleteBook.build(id));
}

export function getBook(id: string): AxiosPromise<IBook> {
  return axios.get(routes.getBook.build(id));
}
