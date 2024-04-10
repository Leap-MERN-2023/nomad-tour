import { Router } from "express";
import { createFlightOrder } from "../controller/flighOrderController";

const router = Router();
router.route("/").post(createFlightOrder);

export default router;
