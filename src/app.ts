import express from "express";
import todoRoutes from "./routes/todos";
import { Request, Response, NextFunction } from "express";
import { json } from "body-parser";

const app = express();
const port = 3000;
app.use(json())
app.use("/todos", todoRoutes);
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
