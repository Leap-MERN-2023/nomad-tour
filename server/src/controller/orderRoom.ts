import { NextFunction, Request, Response } from "express";
import Order from "../model/order/order";
import User from "../model/user";
import { createFlightOrder } from "./flighOrderController";

export const createOrderRoom = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.params;
    console.log("DDDD", userId)
    const orderRoom = { ...req.body, user: userId };
    console.log("OOOOO", orderRoom)

    
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

   
    const orderedRoom = await Order.create(orderRoom);

    res.status(200).json({ message: "Successfully created order", orderedRoom });
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ message: "Failed to create order" });
  }
};
