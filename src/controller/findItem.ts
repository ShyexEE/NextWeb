//This file will check in the database for item name. Will return a bolean if item is or not in the database.
import db from "../config/db";

async function findItem(name: string): Promise<boolean> {
  const result = await db.query("SELECT * FROM nextweb WHERE name=$1", [name]);
  if (result.rowCount && result.rowCount > 0) return true;
  else return false;
}

export default findItem;
