import { NextFunction, Request, Response } from "express";
import { Room } from "../model/rooms";

//create
export const createRoom = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newRoom = await Room.create({ ...req.body });
    console.log("NEwroom", newRoom);

    res.status(200).json({ message: "Succesfully created new room", newRoom });
  } catch (error) {
    console.log("Err_create", error);
    res.status(400).json({ message: "Failed to create rooms" });
    next(error);
  }
};

//getAll
export const getRooms = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const hotelId = req.params.hotelId;
    console.log("HotelId", hotelId);

    const allRooms = await Room.find({ hotel: hotelId });
    console.log("Rooms", allRooms);

    res.status(200).json({ message: "Succesfully to get rooms.", allRooms });
  } catch (error) {
    console.log("Err_All", error);
    res.status(400).json({ message: "Failed to get rooms." });
    next(error);
  }
};

//getRoom
export const getRoom = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { roomId } = req.params;

    const room = await Room.findById(roomId);

    res.status(200).json({ message: "Succesful to get rooms.", room });
  } catch (error) {
    console.log("Err_", error);
    res.status(400).json({ message: "Failed to get rooms." });
    next(error);
  }
};

//update
export const updateRoom = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { roomId } = req.params;
    const updateRoom = req.body;

    const updatedRoom = await Room.findByIdAndUpdate(roomId, updateRoom);
    await updatedRoom?.save();
    res.status(200).json({ message: "Succesful updated room.", updatedRoom });
  } catch (error) {
    console.log("Err_", error);
    res.status(400).json({ message: "Failed to update rooms" });
    next(error);
  }
};

//delete
export const deleteRoom = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { roomId } = req.params;

    const deletedRoom = await Room.findByIdAndDelete(roomId);

    res.status(200).json({ message: "Succesful deleted room", deleteRoom });
  } catch (error) {
    console.log("Err_", error);
    res.status(400).json({ message: "Failed to delete room." });
    next(error);
  }
};
