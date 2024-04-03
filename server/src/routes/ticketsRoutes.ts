import { Router } from "express";
import { createTicket, getTickets } from "../controller/ticketController";

const router = Router();

router.route("/").post(createTicket).get(getTickets);

export default router;
