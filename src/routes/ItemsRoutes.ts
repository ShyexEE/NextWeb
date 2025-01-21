import { Router } from "express";
import { createItem } from "../controller/createItem"
const router = Router();

router.post("/", createItem);
router.get("/");
router.patch("/:id");
router.delete("/:id");

export default router;
