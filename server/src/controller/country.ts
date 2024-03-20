import { Request, Response, NextFunction } from "express";
import Country from "../model/country";
import cloudinary from "../utils/cloudinary";

export const createCountry = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newCountry = { ...req.body };

    if (req.file) {
      const { secure_url } = await cloudinary.uploader.upload(req.file?.path);
      newCountry.images = secure_url;
    }

    const country = await Country.create(newCountry);
    res.status(200).json({ message: "Success", country });
  } catch (error) {
    res.status(400).json({ message: "Failed", error });
  }
};

//All country

export const getCountries = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const allCountry = await Country.find();
    res
      .status(200)
      .json({ message: "Succesfully get to all country", allCountry });
  } catch (error) {
    console.log("ERROR", error);
    res.status(400).json({ message: "Failed get to all country" });
  }
};

//getCountry

export const getCountry = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { countryId } = req.params;

    const country = await Country.findById(countryId);

    res.status(200).json({ message: "Successfull to get country", country });
  } catch (error) {
    console.log("ERR", error);
    res.status(400).json({ message: "Failed to get country" });
  }
};

//delete

export const deleteCountry = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { countryId } = req.params;

    const country = await Country.findByIdAndDelete(countryId);

    res.status(200).json({ message: "Succesfully deleted country", country });
  } catch (error) {
    console.log("ERR", error);
    res.status(400).json({ message: "Failed deleted country" });
  }
};

//update

export const updateCountry = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { countryId } = req.params;
    const updateInfo = req.body;
    console.log("ID", countryId, updateInfo);

    const country = await Country.findByIdAndUpdate(countryId, updateInfo);
    console.log("ss", country);
    await country?.save();

    res.status(200).json({ message: "Succesfully updated country", country });
  } catch (error) {
    console.log("ERR", error);
    res.status(400).json({ message: "Failed updated country" });
  }
};
