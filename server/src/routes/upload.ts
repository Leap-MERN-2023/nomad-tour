import { Router } from "express";
import { uploadFile } from "../controller/upload";
import { upload } from "../utils/multer";

const router = Router();

router.route("/").post(upload.array("images", 5), uploadFile);

export default router;
