import { Router } from "express";
import { CreateAirline, getAirlines } from "../controller/airlineController";
const router = Router();

router.route("/").get(getAirlines).post(CreateAirline);

router.route("/:airportId")
// .delete(deleteAirport)
// .get(getoneAirport)
// .put(updateAirport)
export default router;
