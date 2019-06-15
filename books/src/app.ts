import express, { Response, Request } from "express";
import routes from "../../shared/books/server/routes";

export const app = express();

app.use(express.json());

app.get(routes.getAllBooks.template, (_: Request, res: Response) => {
  res.end("getAllBooks");
});

app.get(routes.getBook.template, (_: Request, res: Response) => {
  res.end("getBook");
});

app.put(routes.updateBook.template, (_: Request, res: Response) => {
  res.end("updateBook");
});

app.delete(routes.deleteBook.template, (_: Request, res: Response) => {
  res.end("deleteBook");
});

app.post(routes.createBook.template, (_: Request, res: Response) => {
  res.end("createBook");
});
