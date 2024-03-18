import { Request, Response } from "express"
import Airport from "../model/airport"


export const CreateAirport = async (req: Request, res: Response) => {
    try {
        (await Airport.create({...req.body}));
        res.status(201).json({message : "Airport амжилттай нэмэгдлээ"})
    } catch (error) {
       console.log("error",error) 
    }
}

export const getAirport = async (req: Request,res: Response) => {
    try {
        const airport =  await Airport.find().populate("country","name");
        res.status(200).json({message : "Airport амжилттай олдлоо ",airport})
        console.log("airports",airport)
    } catch (error) {
       console.log("get-error", error) 
    }
}