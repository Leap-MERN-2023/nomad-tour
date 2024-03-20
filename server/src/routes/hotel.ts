import { Router } from "express";

import {
  createHotel,
  getHotel,
  getHotels,
  updateHotel,
  deleteHotel,
} from "../controller/hotel";

const router = Router();

router.route("/").post(createHotel).get(getHotels);
router.route("/:hotelId").get(getHotel).put(updateHotel).delete(deleteHotel);

export default router;
