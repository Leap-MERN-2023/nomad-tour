import { NextFunction, Request, Response } from "express";
import Tickets from "../model/tickets";

export const createTicket = async (req: Request, res: Response) => {
  try {
    const newTicket = await Tickets.create(req.body);
    res.status(200).json({ message: "Create ticket succes", newTicket });
  } catch (error) {
    res.status(500).json({ message: "failed", error });
  }
};
export const getTickets = async (req: Request, res: Response) => {
  try {
    const tickets = await Tickets.find().populate({
      path: "flight",
      populate: [
        "departureAirportId",
        "arrivalAirportId",
        "countryId",
        "airline",
      ],
    });
    res.status(200).json({ message: "Get tickets success", tickets });
  } catch (error) {
    res.status(500).json({ message: "failed", error });
  }
};

export const getSearchedTickets = async (req: Request, res: Response) => {
  try {
    const { flightId } = req.params;
    console.log("FLIGHT ID TICKETS", flightId);
    const searchedTickets = await Tickets.find({ flight: flightId }).populate({
      path: "flight",
      populate: [
        "departureAirportId",
        "arrivalAirportId",
        "countryId",
        "airline",
      ],
    });
    console.log("FOUND TICKETS", searchedTickets);
    res
      .status(201)
      .json({ message: "Get Searched tickets succes", searchedTickets });
  } catch (error) {
    res.status(500).json({ message: "Get searched tickets failed", error });
  }
};
