"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createItem = void 0;
const database = [];
const createItem = (req, res, next) => {
    console.log(req.body);
    console.log(req.body.text);
    res.json({ message: "Created Api.", createTodo: req.body });
};
exports.createItem = createItem;
