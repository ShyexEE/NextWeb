import { RequestHandler } from "express";
import { Todo } from "../model/todo";

const TODOS = [];
export const createTodo: RequestHandler = (req, res, next) => {
  console.log(req.body);
  const text = (req.body as { text: string }).text;
  const newTodo = new Todo(Math.random().toString(), text);
  TODOS.push(newTodo);
  res.json({ message: "Created the todo.", createTodo: newTodo });
};
