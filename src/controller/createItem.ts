import { RequestHandler } from "express";
import itemType from "../model/item";
import db from "../config/db";
import findItem from "./findItem";

const database = [];

export const createItem: RequestHandler = async (req, res, next) => {
  console.log(req.body);
  let item: itemType = req.body;
  let foundItem = await findItem(item.name); //This function will check if the item is already in the database. Will return a boolean
  if (foundItem == false) {//if item is not in the database add it
    try {
      const result: any = await db.query(
        "INSERT INTO nextweb (name, rating, price, stock, description, brand, model, warranty) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)",
        [
          item.name,
          item.rating,
          item.price,
          item.stock,
          item.description,
          item.specs.brand,
          item.specs.model,
          item.specs.warranty,
        ]
      );
    //  console.log("This is the result: ", result);
      if (result.rowCount > 0) {
        res
          .status(200)
          .json({ message: "Item added to the database succesfully" });
      } else {
        res.status(400).json({ message: "Failed to send data" });
      }
    } catch (error) {
      console.error("Error inserting data:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else { //if item is already in the database
    res.status(200).json({ message: "Item is already in the database, the item was not added synce it already exists" });
  }
};

//todo, insert the data inside a database. Make db file like in chat gpt or the URL Chatgpt is in notepade dekstop
