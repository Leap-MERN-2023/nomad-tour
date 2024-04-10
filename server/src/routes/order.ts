import { Router } from "express";
import { createOrderRoom } from "../controller/orderRoom";

const router = Router();

router.route("/:userId").post(createOrderRoom);

export default router;
