import { NextFunction, Request, Response } from "express";
import { Hotel } from "../model/hotel";

export const createHotel = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log("Req", req.body);
    const newHotel = { ...req.body };

    const hotel = await Hotel.create(newHotel);

    res.status(200).json({ message: "Succesfully created hotel", hotel });
  } catch (error) {
    next(error);
    console.log("ERR_create", error);
  }
};

//getAllHotel

export const getHotels = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const allHotel = await Hotel.find();

    res.status(200).json({ message: "Succesfully get hotels.", allHotel });
  } catch (error) {
    next(error);
    console.log("ERR_all", error);
  }
};

//getHotel

export const getHotel = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log("Id", req.params);
    const { hotelId } = req.params;

    const hotel = await Hotel.findById(hotelId);
    res.status(200).json({ message: "Succesfully get hotel", hotel });
  } catch (error) {
    console.log("ERR_get", error);
    next(error);
  }
};

//update

export const updateHotel = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { hotelId } = req.params;
    const updatingHotel = req.body;

    const updatedHotel = await Hotel.findByIdAndUpdate(hotelId, updatingHotel);

    res
      .status(200)
      .json({ message: "Succesfully updated hotel", updatedHotel });
  } catch (error) {
    console.log("ERR_update", error);
    next(error);
  }
};

//delete

export const deleteHotel = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { hotelId } = req.params;

    const deletedHotel = await Hotel.findByIdAndDelete(hotelId);

    res.status(200).json({ message: "Succesfully deleted hotel" });
  } catch (error) {
    next(error);
  }
};
