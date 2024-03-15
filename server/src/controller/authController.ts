import { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import User from "../model/user";
import jwt from "jsonwebtoken";
import { sendEmail } from "../utils/sendEmail";

export const signup = async (
req:Request,
res:Response,
nexr:NextFunction
)=>{
try {
    const newUser= req.body
    console.log("user-------", newUser)
    const salt= await bcrypt.genSalt(10)
    const hashedPassword= await bcrypt.hash(newUser.password, salt)
    
    const user = await User.create({ ...newUser, password: hashedPassword})
    console.log("hash-----", hashedPassword)
    console.log("pass", user)
    const verifyToken = jwt.sign(
        {email: user.email},
        process.env.JWT_PRIVATE_KEY as string,
        {
            expiresIn: "1d"
        }
       
    )
    sendEmail({email: user.email, token:verifyToken})
    console.log("last", user.email)
    res.status(201).json({
        message: "shine email amjilttai burtgelee tanii email ruu batalgaajuulah email ilgeesen"
    })
} catch (error) {
    console.log("error", error)
    res.status(400).json({message: "shine hereglegch burtgehed aldaa garlaa", error})
}
}