import { Router } from "express";
import { CreateAirport,getAirport,deleteAirport,updateAirport} from "../controller/airportController";
const router = Router();

router.route("/").get(getAirport).post(CreateAirport).put(updateAirport).delete(deleteAirport)

// router.route("/:airportId")
// .get(getoneAirport)
// .delete(deleteAirport)
// .put(updateAirport)
export default router;


