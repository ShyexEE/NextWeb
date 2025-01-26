"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createItem_1 = require("../controller/createItem");
const router = (0, express_1.Router)();
router.post("/", createItem_1.createItem);
router.get("/");
router.patch("/:id");
router.delete("/:id");
exports.default = router;
////
