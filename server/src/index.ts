import express from "express";

import airportRoutes from "./routes/airPortRoutes";
import flightRoutes from "./routes/flightRoutes";
import { connectDb } from "./config/db";
import dotenv from "dotenv";
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI ?? "";
const PORT = process.env.PORT ?? "";

const app = express();

connectDb(MONGODB_URI);
app.use(express.json());
app.use("/airport", airportRoutes);
app.use("/flight", flightRoutes);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, () => console.log("Server is running at " + PORT));
