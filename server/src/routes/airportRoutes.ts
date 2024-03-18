import { Router } from "express";
import { CreateAirport,getAirport } from "../controller/airportController";
const router = Router();

router.route("/").get(getAirport).post(CreateAirport)

export default router;
