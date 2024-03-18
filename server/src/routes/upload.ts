import { Router } from "express";
import { uploadFile } from "../controller/upload";
import { upload } from "../utils/multer";

const router = Router();

// const upload = multer({ dest: "./upload" });
//utils multerees
//uploads gedeg filed hadgalna zamiin zaaj ugnu

router.route("/").post(upload.single("image"), uploadFile);

export default router;
