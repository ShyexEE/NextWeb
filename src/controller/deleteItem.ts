import { RequestHandler } from "express";
import db from "../config/db";

export const deleteItem: RequestHandler = async (req, res, next) => {
  const itemId = req.query.id;
  console.log(itemId)
  const result = await db.query("SELECT * FROM nextweb WHERE id=$1", [itemId]);
  if (result.rowCount && result.rowCount > 0) {
    const reslt = await db.query(
      "DELETE FROM nextweb WHERE id = $1 RETURNING *",
      [itemId]
    );
    if (reslt.rowCount && reslt.rowCount > 0) {
      res.status(200).json({
        message: `Item with id ${itemId} was deleted succesfully`,
      });
    }
  } else {
    res.status(400).json({ message: `Item with id ${itemId} was not found` });
  }
};
