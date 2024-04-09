import { Router } from "express";

import {
  createRoom,
  getRoom,
  getRooms,
  updateRoom,
  deleteRoom,
} from "../controller/room";

const router = Router();

router.route("").post(createRoom);
router.route("/id/:hotelId").get(getRooms);
router.route("/:roomId").get(getRoom).put(updateRoom).delete(deleteRoom);

export default router;
