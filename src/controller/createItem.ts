import { RequestHandler } from "express";
import itemType from "../model/item";

const database = [];

export const createItem: RequestHandler = (req, res, next) => {
  console.log(req.body);
  console.log(req.body.text);
  res.json({ message: "Created Api.", createTodo: req.body });
};

//todo, insert the data inside a database. Make db file like in chat gpt or the URL Chatgpt is in notepade dekstop
