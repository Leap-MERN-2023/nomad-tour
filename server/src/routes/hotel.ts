import { Router } from "express";

import {
  createHotel,
  getHotel,
  getHotelsOfCountry,
  getAllHotel,
  updateHotel,
  deleteHotel,
} from "../controller/hotel";

const router = Router();

router.route("/").post(createHotel).get(getAllHotel);
router.route("/:countryId").get(getHotelsOfCountry);
router.route("/:hotelId").get(getHotel).put(updateHotel).delete(deleteHotel);

export default router;
