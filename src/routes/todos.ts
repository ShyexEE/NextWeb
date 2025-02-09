import {Router} from "express"
import {createTodo} from "../controller/todos"
import {deleteItem} from "../controller/deleteItem"
const router = Router()


router.post("/", createTodo)
router.get("/")
router.patch("/:id")
router.delete("/")


export default router