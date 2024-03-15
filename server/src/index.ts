import express, { Application } from "express";
import color from "colors";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import cors from "cors";

import authRoutes from "./routes/authRoutes";
import countryRoutes from "./routes/countryRoutes";
import airportRoutes from "./routes/airportRoutes";

dotenv.config();

const app: Application = express();

const MONGODB_URI = process.env.MONGODB_URI as string;
const port = process.env.PORT;

connectDB(MONGODB_URI);

app.use(express.json());
app.use(cors());
app.use("/auth", authRoutes);
app.use("/country", countryRoutes);
app.use("/airport", airportRoutes);

app.listen(port, () =>
  console.log(color.rainbow(`Server is listening ${port}`))
);
