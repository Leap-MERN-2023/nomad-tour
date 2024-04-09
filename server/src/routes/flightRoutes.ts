import { Router } from "express";
import {
  CreateFlight,
  deleteFlight,
  getFlight,
  getFlights,
  getSearchedFlight,
  updateFlight,
} from "../controller/flightController";

const router = Router();

router.route("/").post(CreateFlight).get(getFlights);
router
  .route("/:flightId")
  .get(getFlight)
  .put(updateFlight)
  .delete(deleteFlight);
router.route("/search/").post(getSearchedFlight);
export default router;
