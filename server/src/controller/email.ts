import { NextFunction, Request, Response } from "express";
import Email from "../model/email"

export const createEmail = async (req:Request, res:Response, next:NextFunction)=>{
    try {
        const newEmail = await Email.create({ ...req.body})
        res.status(200).json({message: "succesfully created email", newEmail})
    } catch (error) {
        console.log("error", error)
        res.status(400).json({message: "failed to create email"})
    }
}


export const getEmail = async(req:Request, res:Response, next:NextFunction)=>{
    try {
        const allEmail= await Email.find()
        res.status(200).json({message:"emailuud oldoo", allEmail})
    } catch (error) {
        console.log("email oldhod aldaa garlaa")
        res.status(400).json({message: "failed to find emails"})
    }
}