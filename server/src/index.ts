import express from "express";

import airportRoutes from "./routes/airPortRoutes";
import { connectDb } from "./config/db";
import dotenv from "dotenv";
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI ?? "";
const PORT = process.env.PORT ?? "";

const app = express();

connectDb(MONGODB_URI);
app.use(express.json());
app.use("/airport", airportRoutes);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, () => console.log("Server is running at " + PORT));
