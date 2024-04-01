import { Router } from "express";

import { createEmail, getEmail } from "../controller/email";

const router = Router()
router.route("/").post(createEmail).get(getEmail)


export default router