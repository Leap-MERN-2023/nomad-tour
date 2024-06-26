import express, { Application } from "express";
import cors from "cors";
import airportRoutes from "./routes/airportRoutes";
import flightRoutes from "./routes/flightRoutes";
import country from "./routes/country";
import authRoutes from "./routes/authRoutes";
import upload from "./routes/upload";
import hotel from "./routes/hotel";
import room from "./routes/room";
import email from "./routes/email";
import airlinesRoutes from "./routes/airlineRoutes";
import verifyRoute from "./routes/verifyRoute";
import ticketRoutes from "./routes/ticketsRoutes";
import orderRoute from "./routes/order";
import flighOrderRoutes from "./routes/flightOrderRoutes";

import { connectDb } from "./config/db";
import dotenv from "dotenv";
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI ?? "";
const PORT = process.env.PORT ?? "";
const app: Application = express();

app.use(cors());

connectDb(MONGODB_URI);
app.use(cors());
app.use(express.json());

app.use("/verify", verifyRoute);
app.use("/airport", airportRoutes);
app.use("/flight", flightRoutes);
app.use("/auth", authRoutes);
app.use("/country", country);
app.use("/upload", upload);
app.use("/hotels", hotel);
app.use("/room", room);
app.use("/email", email);
app.use("/airlines", airlinesRoutes);
app.use("/ticket", ticketRoutes);
app.use("/order", orderRoute);
app.use("/flightOrder", flighOrderRoutes);

app.listen(PORT, () => console.log("Server is running at " + PORT));
