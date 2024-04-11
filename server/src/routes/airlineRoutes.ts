import { Router } from "express";
import { CreateAirline, getAirlines,deleteAirline } from "../controller/airlineController";
const router = Router();

router.route("/").get(getAirlines).post(CreateAirline);

router.route("/:airlineId").delete(deleteAirline)
// .get(getoneAirport)
// .put(updateAirport)
export default router;
