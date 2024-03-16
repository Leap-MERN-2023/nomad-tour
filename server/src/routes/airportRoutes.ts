import { Router } from "express";
import { createAirport } from "../controller/airportController";

const router = Router();

router.route("/").post(createAirport);

export default router;
