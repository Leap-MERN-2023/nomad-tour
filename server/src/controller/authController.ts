import { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import User from "../model/user";
import jwt from "jsonwebtoken";
import { sendEmail } from "../utils/sendEmail";
import MyError from "../utils/myError";

export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log("REQ: ", req.body);
    const newUser = req.body;
    console.log("user-------", newUser);
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newUser.password, salt);

    const user = await User.create({ ...newUser, password: hashedPassword });

    const verifyToken = jwt.sign(
      { email: user.email },
      process.env.JWT_PRIVATE_KEY as string,
      {
        expiresIn: "1d",
      }
    );
    sendEmail({ email: user.email, token: verifyToken });
    console.log("created success");
    res.status(201).json({
      message:
        "shine email amjilttai burtgelee tanii email ruu batalgaajuulah email ilgeesen",
    });
  } catch (error) {
    console.log("error", error);
    res
      .status(400)
      .json({ message: "shine hereglegch burtgehed aldaa garlaa", error });
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log("LOGIN", req.body);
    const { email: userEmail, password: userPassword } = req.body;
    // console.log("LOGIN", userEmail);
    // console.log("Password", userPassword);

    const user = await User.findOne({ email: userEmail }).select("+password");

    if (!user) {
      throw new MyError(`${userEmail}-тэй хэрэглэгч бүртгэлгүй байна.`, 400);
    }
    // console.log("success", user);
    const isValid = await bcrypt.compare(userPassword, user.password);
    console.log("bcrypted", isValid);
    if (!isValid) {
      console.log("error");
      throw new MyError(`Имэйл эсвэл нууц үг буруу байна.`, 400);
    }
    console.log("nevterlee");
    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_PRIVATE_KEY as string,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    const { password, ...otherParams } = user;

    res.status(201).json({
      message: "Хэрэглэгч амжилттай нэвтэрлээ",
      token,
      user: otherParams,
    });
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.params;

    const userInfo = req.body;

    const user = await User.findByIdAndUpdate(userId, userInfo);

    await user?.save();

    res
      .status(201)
      .json({ message: `${userId}-tai hereglegch amjilttai shinchillee` });
  } catch (error) {
    console.log("err", error);
    next(error);
  }
};

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.params;
    console.log("iddd", userId);
    const user = await User.findByIdAndDelete(userId);
    console.log("user", user);
    res.status(201).json({ message: `${userId}-tai hereglegch ustlaa` });
  } catch (error) {
    console.log("err", error);
    next(error);
  }
};
export const getAllusers = async (req:Request, res:Response ) => {
  try {
    const getUsers = await User.find();
    res.status(200).json({ message: "хэрэглэгчид амжилттай олдлоо ", getUsers });
  } catch (error) {
    console.log("getuser-error", error);
  }
};
