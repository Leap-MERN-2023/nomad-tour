import { Request, Response } from "express"
import Airport from "../model/airport"


export const CreateAirport = async (req: Request, res: Response) => {
    try {
        (await Airport.create({...req.body}));
        res.status(201).json({message : "Airport амжилттай нэмэгдлээ"})
    } catch (error) {
       console.log("error",error) 
    }
};

export const getAirport = async (req: Request,res: Response) => {
    try {
        const airport =  await Airport.find().populate("country","name");
        res.status(200).json({message : "Airport амжилттай олдлоо ",airport})
        console.log("airports",airport)
    } catch (error) {
       console.log("get-error", error) 
    }
};
export const updateAirport = async (req: Request ,res: Response) => {
    try {
        const {airportId} = req.body;
        const updateAirport =req.body;
        const airport = await Airport.findByIdAndUpdate(
            airportId,updateAirport
        );
      
       res.status(200).json({message :`${airportId} -тай Airport шинэчлэгдлээ`,updateAirport})
    } catch (error) {
        console.log("update-error", error)
    }
};
export const deleteAirport = async (req: Request ,res: Response) => {
    try {
        const {airportId} = req.body;
        const airport = Airport.findByIdAndDelete(airportId);
      res.status(200).json({message : `${airportId}-тай Airport устлаа`}); 
    } catch (error) {
        console.log("delete-error",error )
    }
};
