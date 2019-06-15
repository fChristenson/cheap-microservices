// this is a generated file
import express, { Response, Request } from "express";
import * as actions from './actions';

export const app = express();

app.use(express.json());

app.get("/api/v1/users", actions.listUsers);
app.post("/api/v1/users", actions.createUser);


app.use((_: Request, res: Response) => {
  res.status(404).json({error: "not found"});
});

app.use((error: Error, _: Request, res: Response) => {
  res.status(500).json({error: error.message});
});
  