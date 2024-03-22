import express from "express";

import airportRoutes from "./routes/airportRoutes";
import flightRoutes from "./routes/flightRoutes";
import country from "./routes/country";
import authRoutes from "./routes/authRoutes";
import upload from "./routes/upload";

import cors from "cors";
import { connectDb } from "./config/db";
import dotenv from "dotenv";
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI ?? "";
const PORT = process.env.PORT ?? "";

const app = express();

app.use(cors());

connectDb(MONGODB_URI);
app.use(express.json());
app.use("/airport", airportRoutes);
app.use("/flight", flightRoutes);
app.use("/country", country);
app.use("/auth", authRoutes);
app.use("/upload", upload);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, () => console.log("Server is running at " + PORT));
