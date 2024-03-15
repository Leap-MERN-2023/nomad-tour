import { Router } from "express";
import { createAirport } from "../controller/airPortController";

const router = Router();

router.route('/').post(createAirport);

export default router;