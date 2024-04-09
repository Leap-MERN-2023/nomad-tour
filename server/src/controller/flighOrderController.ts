import { NextFunction, Request, Response } from "express";
import FlightOrder from "../model/flightOrder";

export const createFlightOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log("CreateFlight body", req.body);
    const data = await FlightOrder.create(req.body);
    console.log("CREATED FLIGHT", data);
    res.status(200).json({ message: "Create flight order succes", data });
  } catch (error) {
    next(error);
  }
};
