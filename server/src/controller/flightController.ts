import { Request, Response } from "express";
import Flight from "../model/flight";

export const CreateFlight = async (req: Request, res: Response) => {
  console.log("req body create", req.body);
  try {
    const newFlight = await Flight.create({...req.body});
    // console.log("req.body", req.body)
    res.status(201).json({ message: "Succesfully created flight", newFlight });
  } catch (error) {
    console.log("ERROR IN CREATE FLIGHT", error);
    res.status(500).json({ message: "failed", error });
  }
};
export const getFlights = async (req: Request, res: Response) => {
  try {
    const allFlights = await Flight.find().populate([
      "departureAirportId",
      "arrivalAirportId",
      "countryId",
      "departureAirportId",
    ]);
    res
      .status(200)
      .json({ message: "Succesfully get all flights", allFlights });
  } catch (error) {
    console.log("ERR", error);
    res.status(500).json({ message: "failed to get flights", error });
  }
};
export const getFlight = async (req: Request, res: Response) => {
  try {
    const { flightId } = req.params;
    const flight = await Flight.findById(flightId);
    res.status(200).json({ message: "Succesfully get flight", flight });
  } catch (error) {
    res.status(500).json({ message: "failed to get flight", error });
  }
};
export const updateFlight = async (req: Request, res: Response) => {
  try {
    const { flightId } = req.params;
    const { updateInfo } = req.body;
    const flight = await Flight.findByIdAndUpdate(flightId, updateInfo);
    res.status(200).json({ message: "Succesfully updated flights", flight });
  } catch (error) {
    res.status(500).json({ message: "failed to get flights", error });
  }
};
export const deleteFlight = async (req: Request, res: Response) => {
  try {
    const { flightId } = req.params;
    const flight = await Flight.findByIdAndDelete(flightId);
    res.status(200).json({ message: "Succesfully deleted flight", flight });
  } catch (error) {
    res.status(500).json({ message: "failed to delete flight", error });
  }
};

export const getSearchedFlight = async (req: Request, res: Response) => {
  try {
    const { depId, arrId } = req.body;
    const foundFlights = await Flight.find({
      departureAirportId: depId,
      arrivalAirportId: arrId,
    });
    res
      .status(200)
      .json({ message: "Succesfully get searched flights", foundFlights });
  } catch (error) {
    res.status(500).json({ message: "failed to get searched flight", error });
  }
};
