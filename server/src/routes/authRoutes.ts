import { Router } from "express";
import { signup, login, getAllusers } from "../controller/authController";
import { updateUser, deleteUser } from "../controller/authController";
const router = Router();

router.route("/").get(getAllusers).post(signup);

router.route("/login").post(login);

router.route("/:userId").put(updateUser).delete(deleteUser);

export default router;
