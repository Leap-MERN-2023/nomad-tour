import { Router } from "express";
import { uploadFile } from "../controller/upload";
import { upload } from "../utils/multer";

const router = Router();

router.route("/").post(upload.single("image"), uploadFile);
export default router;
