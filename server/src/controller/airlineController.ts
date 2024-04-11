import { Request, Response } from "express";
import Airline from "../model/airline";

export const CreateAirline = async (req: Request, res: Response) => {
  try {
    await Airline.create({ ...req.body });
    res.status(201).json({ message: "Airline амжилттай нэмэгдлээ" });
  } catch (error) {
    console.log("error", error);
  }
};

export const getAirlines = async (req: Request, res: Response) => {
  try {
    const airline = await Airline.find();
    res.status(200).json({ message: "Airport амжилттай олдлоо ", airline });
  } catch (error) {
    console.log("get-error", error);
  }
};
// export const updateAirport = async (req: Request, res: Response) => {
//   try {
//     const { airportId } = req.body;
//     const updateAirport = req.body;
//     const airport = await Airport.findByIdAndUpdate(airportId, updateAirport);

//     res.status(200).json({
//       message: `${airportId} -тай Airport шинэчлэгдлээ`,
//       updateAirport,
//     });
//   } catch (error) {
//     console.log("update-error", error);
//   }
// };
export const deleteAirline = async (req: Request, res: Response) => {
  try {
    const { airlineId } = req.params;
    const airport = await Airline.findByIdAndDelete(airlineId);
    res.status(200).json({ message: `${airlineId}-тай Airport устлаа` });
  } catch (error) {
    console.log("delete-error", error);
  }
};
