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

router.route("/:hotelId").get(getHotel).put(updateHotel).delete(deleteHotel);
router.route("/:countryId").get(getHotelsOfCountry);

export default router;
