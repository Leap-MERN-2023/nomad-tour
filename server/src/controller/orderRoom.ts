import { NextFunction, Request, Response } from "express";
import Order from "../model/order/order";
import User from "../model/user";

export const createOrderRoom = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log("Req", req.body);
    const { userId } = req.params;
    console.log("UserIDDD", userId);
    const orderRoom = { ...req.body, user: userId };
    console.log("OrderRommmmbody", orderRoom);

    const allUser = await User.find();

    const findUser = allUser.filter((e) => e._id.toString() === userId);

    if (findUser.length === 0) {
      res.status(400).json({ message: "User not found" });
    } else {
      const orderedRoom = await Order.create(orderRoom);

      res
        .status(200)
        .json({ message: "Successfully created hotel", orderedRoom });
    }
  } catch (error) {
    console.log("ERRRORDER_order", error);
    res.status(500).json({ message: "Failed to create order room" });
  }
};
