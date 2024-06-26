import { Router } from "express";

import {
  createRoom,
  getRoom,
  getRooms,
  updateRoom,
  deleteRoom,
  ratingRoom,
  getRoomByID,
} from "../controller/room";

const router = Router();

router.route("").post(createRoom);
router.route("/country/:id").post(ratingRoom);
router.route("/id/:hotelId").get(getRooms);
router.route("/selected/:roomId").get(getRoomByID);
router.route("/:roomId").get(getRoom).put(updateRoom).delete(deleteRoom);

export default router;
