import { Router } from "express";
import { signup, login } from "../controller/authController";
import { updateUser, deleteUser} from "../controller/authController";
const router = Router();

router.route("/").post(signup);

router.route("/login").post(login);

router.route("/:userId").put(updateUser).delete(deleteUser)

export default router;
