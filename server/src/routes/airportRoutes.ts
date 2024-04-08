import { Router } from "express";
import { CreateAirport,getAirport,deleteAirport,updateAirport} from "../controller/airportController";
const router = Router();

router.route("/").get(getAirport).post(CreateAirport)

router.route("/:airportId").delete(deleteAirport).put(updateAirport)
export default router;


