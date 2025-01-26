"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createItem = void 0;
const db_1 = __importDefault(require("../config/db"));
const findItem_1 = __importDefault(require("./findItem"));
const database = [];
const createItem = async (req, res, next) => {
    console.log(req.body);
    let item = req.body;
    let foundItem = await (0, findItem_1.default)(item.name); //This function will check if the item is already in the database. Will return a boolean
    if (foundItem == false) { //if item is not in the database add it
        try {
            const result = await db_1.default.query("INSERT INTO nextweb (name, rating, price, stock, description, brand, model, warranty) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)", [
                item.name,
                item.rating,
                item.price,
                item.stock,
                item.description,
                item.specs.brand,
                item.specs.model,
                item.specs.warranty,
            ]);
            //  console.log("This is the result: ", result);
            if (result.rowCount > 0) {
                res
                    .status(200)
                    .json({ message: "Item added to the database succesfully" });
            }
            else {
                res.status(400).json({ message: "Failed to send data" });
            }
        }
        catch (error) {
            console.error("Error inserting data:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
    else { //if item is already in the database
        res.status(200).json({ message: "Item is already in the database, the item was not added synce it already exists" });
    }
};
exports.createItem = createItem;
//todo, insert the data inside a database. Make db file like in chat gpt or the URL Chatgpt is in notepade dekstop
