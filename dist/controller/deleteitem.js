"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteItem = void 0;
const db_1 = __importDefault(require("../config/db"));
const deleteItem = async (req, res, next) => {
    const itemId = req.query.id;
    console.log(itemId);
    const result = await db_1.default.query("SELECT * FROM nextweb WHERE id=$1", [itemId]);
    if (result.rowCount && result.rowCount > 0) {
        const reslt = await db_1.default.query("DELETE FROM nextweb WHERE id = $1 RETURNING *", [itemId]);
        if (reslt.rowCount && reslt.rowCount > 0) {
            res.status(200).json({
                message: `Item with id ${itemId} was deleted succesfully`,
            });
        }
    }
    else {
        res.status(400).json({ message: `Item with id ${itemId} was not found` });
    }
};
exports.deleteItem = deleteItem;
