import { Request, Response } from "express";
import Airport from "../model/airport";

export const createAirport = async (req: Request, res: Response) => {
  try {
    console.log("POST AIRPORT");
    const airport = await Airport.create({ name: "MIAT" });
    res.status(201).json({ message: "Succes" });
  } catch (error) {
    console.log("err", error);
  }
};
