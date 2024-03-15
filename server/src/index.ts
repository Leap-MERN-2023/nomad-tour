import express, { Application } from "express";
import color from "colors";
import dotenv from "dotenv";
import { connectDB } from "./config/db";

dotenv.config();

const app: Application = express();

const MONGODB_URI = process.env.MONGODB_URI as string;
const port = process.env.PORT;

console.log("MONGODB_URI: ", typeof MONGODB_URI);

connectDB(MONGODB_URI);

app.use(express.json());

app.listen(port, () =>
  console.log(color.rainbow(`Server is listening ${port}`))
);
