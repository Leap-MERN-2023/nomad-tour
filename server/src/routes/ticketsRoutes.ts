import { Router } from "express";
import {
  createTicket,
  getSearchedTickets,
  getTickets,
} from "../controller/ticketController";

const router = Router();

router.route("/").post(createTicket).get(getTickets);
router.route("/:flightId").get(getSearchedTickets);

export default router;
