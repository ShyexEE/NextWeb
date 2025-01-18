"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTodo = void 0;
const todo_1 = require("../model/todo");
const TODOS = [];
const createTodo = (req, res, next) => {
    console.log(req.body);
    const text = req.body.text;
    const newTodo = new todo_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.json({ message: "Created the todo.", createTodo: newTodo });
};
exports.createTodo = createTodo;
