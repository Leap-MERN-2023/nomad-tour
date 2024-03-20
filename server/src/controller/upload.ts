import { Response, Request, NextFunction } from "express";
import cloudinary from "../utils/cloudinary";

export const uploadFile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log("FILES", req.files);

    let promises: Promise<any>[] = [];
    if (req.files && Array.isArray(req.files)) {
      promises = req.files.map((file: Express.Multer.File) =>
        cloudinary.uploader.upload(file.path)
      );
      const results = await Promise.all(promises);
      console.log("first,  results");
      res.status(200).json(results.map((result) => result.secure_url));
    } else {
      res.status(400).json({ message: "No files uploaded" });
    }
  } catch (error) {
    next(error);
  }
};
