import { Router } from "express";
import { createItem } from "../controller/createItem";
import { deleteItem } from "../controller/deleteItem";

const router = Router();

router.post("/", createItem);
router.get("/");
router.patch("/:id");
router.delete("/", deleteItem); //works with query id

export default router;

