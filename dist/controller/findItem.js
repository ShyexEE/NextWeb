"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//This file will check in the database for item name. Will return a bolean if item is or not in the database.
const db_1 = __importDefault(require("../config/db"));
async function findItem(name) {
    const result = await db_1.default.query("SELECT * FROM nextweb WHERE name=$1", [name]);
    if (result.rowCount && result.rowCount > 0)
        return true;
    else
        return false;
}
exports.default = findItem;
