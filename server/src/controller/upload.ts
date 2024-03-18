import { Response, Request, NextFunction } from "express";
import cloudinary from "../utils/cloudinary";

export const uploadFile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log("FILE", req.files);

    const result = await cloudinary.uploader.upload(req.file?.path!);
    res.send("send==>" + result.secure_url);
  } catch (error) {
    next(error);
  }
};
